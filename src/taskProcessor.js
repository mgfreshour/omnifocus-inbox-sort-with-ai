import { YouTubeService } from './youtube.js';
import { OpenRouterService } from './openrouter.js';
import { URLMetadataService } from './urlMetadata.js';
import { log, debug, error, warn } from './utils/logger.js';
import { DEFAULT_SETTINGS } from './types/index.js';
import { createOptionField } from "./ui.js";

export class TaskProcessor {
    static async processTasks(settings) {
        try {
            debug('Starting task processing with settings:', settings);

            const inboxItems = this.getUncompletedTasks();
            if (inboxItems.length === 0) {
                this.showAlert('No tasks', 'Inbox is empty.');
                return;
            }

            const batches = this.createTaskBatches(inboxItems, settings.maxTasksPerBatch || DEFAULT_SETTINGS.maxTasksPerBatch);
            debug(`Processing ${batches.length} batches of tasks`);

            for (const [batchIndex, batch] of batches.entries()) {
                debug(`Processing batch ${batchIndex + 1}/${batches.length}`);
                await this.processBatch(batch, settings);
                if (!await TaskProcessor.askDoAnotherBatch()) {
                    break;
                }
            }

            debug('Task processing completed successfully');
            this.showAlert('Sorting Complete', 'All tasks have been reviewed.');
        } catch (err) {
            error('Error processing tasks:', err);
            console.error(err);
            this.showAlert('Error', 'An error occurred while processing tasks.');
        }
    }

    static getUncompletedTasks() {
        debug('Getting uncompleted tasks from inbox');
        const inboxItems = inbox.filter(t => !t.completed);
        debug(`Found ${inboxItems.length} uncompleted tasks in inbox`);
        return inboxItems;
    }

    static showAlert(title, message) {
        debug(`Showing alert: ${title} - ${message}`);
        new Alert(title, message).show();
    }

    static createTaskBatches(tasks, maxTasksPerBatch) {
        const batches = [];
        for (let i = 0; i < tasks.length; i += maxTasksPerBatch) {
            batches.push(tasks.slice(i, i + maxTasksPerBatch));
        }
        return batches;
    }

    static async processBatch(batch, settings) {
        const availableProjects = this.getAvailableProjects();
        const availableTags = this.getAvailableTags();

        if (availableProjects.length === 0 && availableTags.length === 0) {
            this.showAlert('No targets', 'No projects or tags found. Please create some first.');
            return;
        }

        await this.preprocessTasks(batch);
        const tasks = batch.map(task => ({ name: task.name, note: task.note || '' }));

        const { projectAssignments, tagAssignments, suggestions } = await OpenRouterService.getTaskAssignments(
            tasks,
            availableProjects,
            availableTags
        );

        if (suggestions.length > 0) {
            await this.processSuggestions(suggestions, settings);
        }

        await this.assignTasks(batch, projectAssignments, tagAssignments, availableProjects, availableTags, settings);
    }

    static getAvailableProjects() {
        const getValidArray = (value) => {
            if (!value) return [];
            if (Array.isArray(value)) {
                return value.filter(item => item && typeof item === 'object' && typeof item.name === 'string');
            }
            return [];
        };

        return getValidArray(Array.from(flattenedProjects || []));
    }

    static getAvailableTags() {
        const recursivePrependParent = tag => {
            if (!tag) return '';
            if (!tag.parent) return tag.name;
            return `${recursivePrependParent(tag.parent)} > ${tag.name}`;
        }
        const getValidArray = (value) => {
            if (!value) return [];
            if (Array.isArray(value)) {
                return value.filter(item => item && typeof item === 'object' && typeof item.name === 'string');
            }
            return [];
        };

        const validTags = getValidArray(Array.from(flattenedTags || []));
        return validTags.map(tag => ({
            name: recursivePrependParent(tag),
            tag: tag
        }));
    }

    static async preprocessTasks(batch) {
        debug('Starting URL preprocessing for tasks');
        for (const task of batch) {
            const note = task.note?.trim() || '';
            const possibleURL = task.name;
            let meta = null;

            if (YouTubeService.isYouTubeURL(possibleURL)) {
                meta = await YouTubeService.fetchMetadata(possibleURL);
            } else if (URLMetadataService.isValidURL(possibleURL)) {
                meta = await URLMetadataService.fetchMetadata(possibleURL);
            }

            if (meta) {
                task.note = `${meta.description} ${note} ${possibleURL}`;
                task.name = meta.title;
            }
        }
    }

    static async processSuggestions(suggestions, settings) {
        debug('Processing new project/area suggestions');
        const form = new Form();
        const opts = [
            { name: 'Review Now', value: 'review' },
            { name: 'Skip for Now', value: 'skip' },
        ]
        form.addField(createOptionField('action', 'New Project/Area Suggestions', opts, opts[0].value));

        const input = await form.show('New Project/Area Suggestions', 'Continue');
        if (input && input.values['action'].value === 'review') {
            for (const suggestion of suggestions) {
                await this.reviewSuggestion(suggestion, settings);
            }
        }
    }

    static async reviewSuggestion(suggestion, settings) {
        const suggestionForm = new Form();
        suggestionForm.addField(new Form.Field.String('name', 'Suggested Name', suggestion.suggestion));
        const opts = [
            { name: 'Project', value: 'project' },
            { name: 'Area', value: 'area' },
            { name: 'Use Existing', value: 'existing' }
        ];
        suggestionForm.addField(
            createOptionField(
                'type',
                'Type',
                opts,
                suggestion.type || opts[0].value
            ));

        const existingOptions = flattenedProjects.map(t => ({ name: t.name, value: t.name }));
        existingOptions.unshift({ name: '---', value: '' });
        suggestionForm.addField(
            createOptionField(
                'existing_target',
                'Select Existing',
                existingOptions,
                existingOptions[0].value
            ));

        suggestionForm.addField(new Form.Field.String('reasoning', 'Reasoning', suggestion.reasoning || ''));

        const result = await suggestionForm.show(`Review Suggestion for: "${suggestion.task}"`, 'Create');
        if (result) {
            const { name, type, existing_target } = result.values;
            if (type === 'project') {
                new Project(name);
            } else if (type === 'area') {
                new Folder(name);
            } else if (type === 'existing') {
                suggestion.suggestion = existing_target;
            }
        }
    }

    static async assignTasks(batch, projectAssignments, tagAssignments, projects, tags, settings) {
        for (const [i, task] of batch.entries()) {
            const projectIdx = projectAssignments[i];
            const tagIdx = tagAssignments[i];

            if (!projectIdx && !tagIdx) {
                const unknownTag = tags.find(t => t.name === settings.unknownTagName);
                if (unknownTag) task.addTag(unknownTag);
                continue;
            }

            const suggestedProject = projectIdx > 0 ? projects[projectIdx - 1] : null;
            const suggestedTags = tagIdx > 0 ? [tags[tagIdx - 1].tag] : [];

            await this.manualReview(task, suggestedProject, suggestedTags, projects, tags, settings);
        }
    }

    static async manualReview(task, suggestedProject, suggestedTags, projects, tags, settings) {
        const projectOptions = projects.map(p => ({ name: p.name, value: p.name }))
            .concat({ name: '❓ None', value: '' });
        const form = new Form();

        form.addField(createOptionField(
            'project',
            'Select',
            projectOptions,
            projectOptions.find(p => p.name === suggestedProject?.name)?.value || projectOptions[0].value
        ));

        form.addField(new Form.Field.String(
            'tags',
            'Tags: (comma-separated)',
            suggestedTags.map(t => t.name).join(', ')
        ));

        const input = await form.show(`Review for ${task.name}`, 'Assign');
        if (input) {
            const { project, tags: tagInput } = input.values;

            // Handle project assignment
            if (project && project !== '❓ None') {
                const projectObj = projects.find(p => p.name === project.name);
                if (projectObj) moveTasks([task], projectObj);
                else warn(`Project "${project}" not found in projectsj`, project);
            } else {
                debug(`No project assigned for task "${task.name}"`);
            }

            // Handle tag assignments
            if (tagInput) {
                const tagNames = tagInput.split(',').map(t => t.trim()).filter(t => t);
                for (const tagName of tagNames) {
                    if (tagName === '❓ None') continue;
                    const tagObj = flattenedTags.find(t => t.name === tagName);
                    if (tagObj) task.addTag(tagObj);
                    else warn(`Tag "${tagName}" not found in targets`);
                }
            } else {
                debug(`No tags assigned for task "${task.name}"`);
            }

            // If no project or tags were assigned, add unknown tag
            if (!project || project === '❓ None') {
                const unknownTag = tags.find(t => t.name === settings.unknownTagName);
                if (unknownTag) task.addTag(unknownTag);
                else debug(`No unknown tag found for task "${task.name}"`);
            }
        }
    }

    static async askDoAnotherBatch() {
        const form = new Form();
        const opts = [
            {name: 'Yes', value: 'yes'}, {name: 'No', value: 'no'},
        ]
        form.addField(createOptionField('action', 'Continue to next Batch?', opts, opts[0].value));

        const input = await form.show('Continue?', 'Ok');
        return input && input.values['action'].value === 'yes';
    }
}

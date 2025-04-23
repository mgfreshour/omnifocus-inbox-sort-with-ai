import { debug, error, log } from './utils/logger.js';
import { SettingsManager } from './settings.js';

export class OpenRouterService {
    static load() {
        SettingsManager.load();
    }

    static async getAPIKey() {
        return await SettingsManager.getAPIKey();
    }

    static async getTaskAssignments(tasks, projects, tags) {
        debug('Starting task assignments with OpenRouter');
        try {
            const apiKey = await OpenRouterService.getAPIKey();
            if (!apiKey) {
                error('No OpenRouter API key found');
                throw new Error('OpenRouter API key not found in keychain');
            }

            const settings = SettingsManager.loadSettings();
            const modelName = settings.modelName;

            const projectPrompt = OpenRouterService._buildPrompt(tasks, projects, 'project');
            const tagPrompt = OpenRouterService._buildPrompt(tasks, tags, 'tag');

            debug('Built prompts for OpenRouter');

            const [projectResponse, tagResponse] = await Promise.all([
                OpenRouterService._makeRequest(apiKey, projectPrompt, modelName),
                OpenRouterService._makeRequest(apiKey, tagPrompt, modelName)
            ]);

            debug('Received responses from OpenRouter');

            if (!projectResponse || !tagResponse) {
                throw new Error('Empty response from OpenRouter API');
            }

            const projectAssignments = OpenRouterService._parseResponse(projectResponse);
            const tagAssignments = OpenRouterService._parseResponse(tagResponse);

            debug('Parsed assignments:', { projectAssignments, tagAssignments });

            // Get tasks that were marked as unknown (index 0)
            const unknownTasks = tasks.filter((_, index) =>
                projectAssignments[index] === 0 || tagAssignments[index] === 0
            );

            if (unknownTasks.length > 0) {
                debug('Found unknown tasks, requesting project/area suggestions');
                const suggestions = await OpenRouterService._getProjectSuggestions(apiKey, unknownTasks, modelName);
                return { projectAssignments, tagAssignments, suggestions };
            }

            return { projectAssignments, tagAssignments, suggestions: [] };
        } catch (err) {
            error('Error in OpenRouter task assignments:', err);
            throw new Error(`OpenRouter API error: ${JSON.stringify(err)}`);
        }
    }

    static async _getProjectSuggestions(apiKey, tasks, modelName) {
        const prompt = `You are a task organization assistant. For each task below, suggest either a new project or area where it should belong.

Projects are short-term goals with specific outcomes, while areas are long-term responsibilities that don't have a specific end date.

For each task, provide:
1. A suggested project or area name
2. A brief description of why this would be a good fit
3. Whether it's a project or area
4. A brief description of why this would be a good fit
5. Videos and articles should have a project related to the content.  Examples: Topics about programming, cooking, or woodworking.

Tasks to analyze:
${tasks.map(t => `- "${t.name}"${t.note ? ` (${t.note})` : ''}`).join('\n')}

Return your response as a JSON array of objects, where each object has:
- task: The original task name
- suggestion: The suggested project/area name
- type: Either "project" or "area"
- reasoning: A brief explanation

Example format:
[
  {
    "task": "Research new CRM tools",
    "suggestion": "CRM Implementation",
    "description": "This is project/area about implementing a new CRM tool",
    "type": "project",
    "reasoning": "This is a specific goal with a clear outcome"
  }
]`;

        const response = await OpenRouterService._makeRequest(apiKey, prompt, modelName);
        if (!response) {
            throw new Error('Empty response from OpenRouter API for project suggestions');
        }

        try {
            const content = response.choices[0].message.content;
            const cleanContent = content.replace(/```json\n|\n```/g, '').trim();
            return JSON.parse(cleanContent);
        } catch (err) {
            error('Failed to parse project suggestions:', err, response);
            throw new Error(`Failed to parse project suggestions: ${err.message}`);
        }
    }

    static _buildPrompt(tasks, targets, targetType) {
        debug(`Building prompt for tasks and ${targetType}s`);
        const settings = SettingsManager.loadSettings();
        const additionalContext = settings.additionalContext ? `\nAdditional Context:\n${settings.additionalContext}\n` : '';

        const targetList = targets.map((t, i) => `${i + 1}. ${t.name}${t.note ? ` - ${t.note}` : ''}`).join('\n');
        const taskList = tasks.map(t => `- "${t.name}"${t.note ? ` (${t.note})` : ''}`).join('\n');

        return `You are a task categorization assistant. Your job is to assign each task to the most appropriate ${targetType} from the list below.${additionalContext}

Available ${targetType}s (with their descriptions):
${targetList}

Tasks to categorize:
${taskList}

Instructions:
1. For each task, choose the most appropriate ${targetType} from the list above
2. Use the ${targetType}'s index number (1-based) as your answer
3. Only use index 0 if the task truly doesn't fit any ${targetType}
4. Consider both the task name and description when making your decision
5. Return your answer as a JSON array of numbers
6. The array length should match the number of tasks exactly
7. Each number should be a valid index (0 to ${targets.length})

Example format: [1, 2, 0, 3, 1]

Your response should be ONLY the JSON array, with no additional text or explanation.`;
    }

    static async _makeRequest(apiKey, prompt, modelName) {
        debug('Making request to OpenRouter API');
        try {
            const requestData = {
                model: modelName,
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.1,
                max_tokens: 1000  // Limit response length
            };

            const request = URL.FetchRequest.fromString('https://openrouter.ai/api/v1/chat/completions');
            request.method = 'POST';
            request.headers = {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': 'https://github.com/mfreshour/inbox-sort-with-ai',
                'X-Title': 'Inbox Sort with AI'
            };

            request.bodyString = JSON.stringify(requestData);

            const response = await request.fetch();
            debug('OpenRouter response:', response);
            if (!response) {
                error('Empty response from OpenRouter API');
                return null;
            }

            return JSON.parse(response.bodyString);
        } catch (err) {
            error('OpenRouter API error:', err);
            throw new Error(`OpenRouter API error: ${err.message}`);
        }
    }

    static _parseResponse(response) {
        try {
            if (!response.choices || !response.choices[0] || !response.choices[0].message || !response.choices[0].message.content) {
                throw new Error('Invalid response format from OpenRouter API', response);
            }

            const content = response.choices[0].message.content;
            // Remove any markdown code block formatting and ensure array is properly closed
            const cleanContent = content.replace(/```json\n|\n```/g, '').trim();

            // If the response was truncated, ensure the array is properly closed
            let finalContent = cleanContent;
            if (response.choices[0].finish_reason === 'length' && !cleanContent.endsWith(']')) {
                // Find the last complete number in the array
                const lastNumberMatch = cleanContent.match(/\d+(?=\s*$)/);
                if (lastNumberMatch) {
                    // Keep everything up to and including the last complete number
                    finalContent = cleanContent.substring(0, lastNumberMatch.index + lastNumberMatch[0].length) + ']';
                } else {
                    throw new Error('Invalid truncated response format');
                }
            }

            debug('Parsing cleaned content:', finalContent);
            const assignments = JSON.parse(finalContent);

            if (!Array.isArray(assignments)) {
                throw new Error('Response is not an array');
            }

            return assignments;
        } catch (err) {
            error('Failed to parse OpenRouter response:', err);
            error('Original content:', response.choices[0].message.content);
            throw err;
        }
    }
}

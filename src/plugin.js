import { SettingsManager } from './settings.js';
import { TaskProcessor } from './taskProcessor.js';
import { OpenRouterService } from './openrouter.js';
import { log, debug, error, warn } from './utils/logger.js';

const myaction = new PlugIn.Action(async function tagSortInbox() {
    debug('Starting tagSortInbox action');
    try {

        // Load current settings
        debug('Loading current settings...');
        const currentSettings = SettingsManager.loadSettings();
        debug('Current settings loaded:', currentSettings);

        // Only show settings form if there are no settings or control key is pressed
        let newSettings = currentSettings;
        if (!currentSettings || app.controlKeyDown) {
            debug('Showing settings form...');
            const formSettings = await SettingsManager.showSettingsForm(currentSettings);
            if (!formSettings) {
                debug('Settings form was cancelled');
                return;
            }
            newSettings = formSettings;
            debug('New settings received:', newSettings);

            // Save the new settings
            debug('Saving new settings...');
            SettingsManager.saveSettings(newSettings);
            debug('Settings saved successfully');
        }

        // Process the tasks
        debug('Starting task processing...');
        await TaskProcessor.processTasks(newSettings);
        debug('Task processing completed successfully');
    } catch (err) {
        error('Error in tagSortInbox:', err);
        new Alert('Error', 'An error occurred while processing tasks.').show();
    }
});

myaction.validate = function () {
    debug('Validating action...');
    return true;
};

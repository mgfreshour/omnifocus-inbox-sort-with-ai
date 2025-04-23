// Import logger and settings
import { log, debug, error, warn } from './utils/logger.js';
import { DEFAULT_SETTINGS } from './types/index.js';

export class SettingsManager {
    static SETTINGS_KEY = 'OmniFocusTagSortSettings';
    static KEYCHAIN_SERVICE = 'OmniFocusTagSort';
    static KEYCHAIN_ACCOUNT = 'OpenRouter_API_Key';
    static _credService = null;

    static load() {
        SettingsManager._credService = new Credentials();
    }

    static async getAPIKey() {
        log('Attempting to retrieve OpenRouter API key from keychain');
        const credService = SettingsManager._credService;
        const creds = credService.read(SettingsManager.KEYCHAIN_SERVICE);
        debug('Retrieved OpenRouter API key from keychain:', creds);
        if (!creds) {
            log('No API key found in keychain');
            throw new Error('No API Key provided');
        }
        log('Successfully retrieved API key from keychain');
        return creds.password;
    }

    static loadSettings() {
        debug('Loading settings...');
        try {
            // Initialize preferences if it doesn't exist
            if (!PlugIn.preferences) {
                debug('Initializing empty preferences');
                PlugIn.preferences = {};
            }
            const savedSettings = PlugIn.preferences[this.SETTINGS_KEY];
            if (savedSettings) {
                debug('Found saved settings:', savedSettings);
                const parsedSettings = JSON.parse(savedSettings);
                debug('Parsed settings:', parsedSettings);

                // Ensure all required fields exist and are valid
                const validatedSettings = {
                    unknownTagName: parsedSettings.unknownTagName || DEFAULT_SETTINGS.unknownTagName,
                    maxTasksPerBatch: parsedSettings.maxTasksPerBatch || DEFAULT_SETTINGS.maxTasksPerBatch,
                    modelName: parsedSettings.modelName || DEFAULT_SETTINGS.modelName,
                    additionalContext: parsedSettings.additionalContext || DEFAULT_SETTINGS.additionalContext
                };
                debug('Validated settings:', validatedSettings);
                return validatedSettings;
            }
            debug('No saved settings found, using defaults:', DEFAULT_SETTINGS);
        } catch (err) {
            warn('Failed to load settings:', err);
        }
        return { ...DEFAULT_SETTINGS };
    }

    static saveSettings(settings) {
        debug('Saving settings:', settings);
        try {
            // Ensure all required fields exist and are valid
            const validatedSettings = {
                unknownTagName: settings.unknownTagName || DEFAULT_SETTINGS.unknownTagName,
                maxTasksPerBatch: settings.maxTasksPerBatch || DEFAULT_SETTINGS.maxTasksPerBatch,
                modelName: settings.modelName || DEFAULT_SETTINGS.modelName,
                additionalContext: settings.additionalContext || DEFAULT_SETTINGS.additionalContext
            };
            debug('Validated settings before save:', validatedSettings);

            PlugIn.preferences[this.SETTINGS_KEY] = JSON.stringify(validatedSettings);
            debug('Settings saved successfully');
        } catch (err) {
            error('Failed to save settings:', err);
        }
    }

    static async showSettingsForm(currentSettings) {
        debug('Showing settings form with current settings:', currentSettings);

        // Validate current settings
        const validatedSettings = {
            unknownTagName: currentSettings.unknownTagName || DEFAULT_SETTINGS.unknownTagName,
            maxTasksPerBatch: currentSettings.maxTasksPerBatch || DEFAULT_SETTINGS.maxTasksPerBatch,
            modelName: currentSettings.modelName || DEFAULT_SETTINGS.modelName,
            additionalContext: currentSettings.additionalContext || DEFAULT_SETTINGS.additionalContext
        };
        debug('Validated settings for form:', validatedSettings);

        const form = new Form();

        debug('Adding unknown name field');
        form.addField(new Form.Field.String(
            'unknownName',
            'Unknown tag name',
            validatedSettings.unknownTagName
        ));

        debug('Adding max tasks per batch field');
        form.addField(new Form.Field.String(
            'maxTasks',
            'Maximum tasks to process at once',
            validatedSettings.maxTasksPerBatch.toString()
        ));

        debug('Adding model name field');
        form.addField(new Form.Field.String(
            'modelName',
            'OpenRouter Model Name',
            validatedSettings.modelName
        ));

        debug('Adding additional context field');
        form.addField(new Form.Field.String(
            'additionalContext',
            'Additional Context for AI',
            validatedSettings.additionalContext
        ));

        debug('Adding API key field');
        // Get current API key if it exists
        const currentAPIKey = await this.getAPIKey().catch(() => null);
        form.addField(new Form.Field.String(
            'apiKey',
            'OpenRouter API Key',
            currentAPIKey || null
        ));

        debug('Displaying settings form');
        const result = await form.show('Configure Sorting', 'Save');
        if (!result) {
            debug('Settings form was cancelled');
            return null;
        }

        const values = form.values;
        debug('Processing form results:', values);

        // Handle API key separately
        if (values['apiKey']) {
            debug('Saving new API key to keychain');
            this._credService.write(this.KEYCHAIN_SERVICE, this.KEYCHAIN_ACCOUNT, values['apiKey']);
        }

        const newSettings = {
            unknownTagName: values['unknownName'].trim() || DEFAULT_SETTINGS.unknownTagName,
            maxTasksPerBatch: parseInt(values['maxTasks']) || DEFAULT_SETTINGS.maxTasksPerBatch,
            modelName: values['modelName'].trim() || DEFAULT_SETTINGS.modelName,
            additionalContext: values['additionalContext'].trim() || DEFAULT_SETTINGS.additionalContext
        };

        debug('Generated new settings:', newSettings);
        return newSettings;
    }
}

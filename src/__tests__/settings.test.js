import { SettingsManager } from '../settings';

// Mock the PlugIn global
global.PlugIn = {
  preferences: {}
};

describe('SettingsManager', () => {
  describe('loadSettings', () => {
    beforeEach(() => {
      // Reset PlugIn.preferences before each test
      PlugIn.preferences = {};
    });

    it('should return default settings when no settings are saved', () => {
      const settings = SettingsManager.loadSettings();
      expect(settings).toEqual({
        mode: 'tag',
        autoAcceptTags: ['Work', 'Errands', 'Reading'],
        unknownTagName: 'Unknown'
      });
    });

    it('should return saved settings when they exist', () => {
      const savedSettings = {
        mode: 'project',
        autoAcceptTags: ['Work', 'Personal'],
        unknownTagName: 'Unsorted'
      };

      PlugIn.preferences = {
        OmniFocusTagSortSettings: JSON.stringify(savedSettings)
      };

      const settings = SettingsManager.loadSettings();
      expect(settings).toEqual(savedSettings);
    });
  });

  describe('saveSettings', () => {
    beforeEach(() => {
      // Reset PlugIn.preferences before each test
      PlugIn.preferences = {};
    });

    it('should save settings to preferences', () => {
      const settings = {
        mode: 'project',
        autoAcceptTags: ['Work', 'Personal'],
        unknownTagName: 'Unsorted'
      };

      SettingsManager.saveSettings(settings);

      expect(JSON.parse(PlugIn.preferences.OmniFocusTagSortSettings)).toEqual(settings);
    });
  });
}); 
import { jest, beforeEach, describe, it, expect } from '@jest/globals';
import { TaskProcessor } from '../taskProcessor';
import { Task } from '../types';
import { setupGlobalMocks } from './mocks';

// Mock the services
const mockYouTubeService = {
  isYouTubeURL: jest.fn(),
  fetchMetadata: jest.fn()
};

const mockURLMetadataService = {
  isValidURL: jest.fn(),
  fetchMetadata: jest.fn()
};

const mockOpenRouterService = {
  getTaskAssignments: jest.fn()
};

jest.mock('../youtube', () => ({
  YouTubeService: mockYouTubeService
}));

jest.mock('../urlMetadata', () => ({
  URLMetadataService: mockURLMetadataService
}));

jest.mock('../openrouter', () => ({
  OpenRouterService: {
    getTaskAssignments: mockOpenRouterService.getTaskAssignments
  }
}));

// Setup global mocks
beforeEach(() => {
  setupGlobalMocks();
});

describe('TaskProcessor', () => {
  let settings;

  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();

    // Setup mock projects
    settings = {
      mode: 'project',
      autoAcceptTags: ['Work'],
      unknownTagName: 'Unknown'
    };
  });

  describe('processTasks', () => {
    it('should process YouTube tasks', async () => {
      const task = new Task({
        name: '',
        note: 'https://youtube.com/watch?v=123'
      });

      global.Inbox.tasks = [task];

      mockYouTubeService.isYouTubeURL.mockReturnValue(true);
      mockYouTubeService.fetchMetadata.mockResolvedValue({
        title: 'Video Title',
        description: 'Video Description'
      });

      await TaskProcessor.processTasks(settings);

      expect(mockYouTubeService.isYouTubeURL).toHaveBeenCalledWith(task.note);
      expect(mockYouTubeService.fetchMetadata).toHaveBeenCalledWith(task.note);
      expect(task.name).toBe('Video Title');
      expect(task.note).toBe('Video Description');
    });

    it('should process URL tasks', async () => {
      const task = new Task({
        name: '',
        note: 'https://example.com'
      });

      global.Inbox.tasks = [task];

      mockURLMetadataService.isValidURL.mockReturnValue(true);
      mockURLMetadataService.fetchMetadata.mockResolvedValue({
        title: 'Page Title',
        description: 'Page Description'
      });

      await TaskProcessor.processTasks(settings);

      expect(mockURLMetadataService.isValidURL).toHaveBeenCalledWith(task.note);
      expect(mockURLMetadataService.fetchMetadata).toHaveBeenCalledWith(task.note);
      expect(task.name).toBe('Page Title');
      expect(task.note).toBe('Page Description');
    });

    it('should use AI for project suggestions', async () => {
      const task = new Task({
        name: 'Regular task',
        note: 'Some notes'
      });

      global.Inbox.tasks = [task];

      mockOpenRouterService.getTaskAssignments.mockResolvedValue(new Map([[0, 1]]));

      await TaskProcessor.processTasks(settings);

      expect(mockOpenRouterService.getTaskAssignments).toHaveBeenCalledWith(
        [{ name: task.name, note: task.note }],
        [{ name: 'Project 1', note: undefined }, { name: 'Project 2', note: undefined }],
        'project'
      );
    });

    it('should handle AI errors gracefully', async () => {
      const task = new Task({
        name: 'Error task',
        note: 'Notes'
      });

      global.Inbox.tasks = [task];

      mockOpenRouterService.getTaskAssignments.mockRejectedValue(new Error('API error'));

      await TaskProcessor.processTasks(settings);

      expect(task.project).toBeUndefined();
    });
  });
}); 
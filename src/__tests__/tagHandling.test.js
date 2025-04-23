import { describe, test, expect, jest, beforeEach, afterEach } from '@jest/globals';
import { TaskProcessor } from '../taskProcessor.js';
import { log, debug, error, warn } from '../utils/logger.js';

// Mock the logger to prevent console output during tests
jest.mock('../src/utils/logger.js', () => ({
    log: jest.fn(),
    debug: jest.fn(),
    error: jest.fn(),
    warn: jest.fn()
}));

describe('Tag Handling', () => {
    let mockFlattenedTags;
    let testTask;

    beforeEach(() => {
        // Setup test data
        const testTag1 = {
            name: "Work",
            parent: null
        };

        const testTag2 = {
            name: "Projects",
            parent: testTag1
        };

        const testTag3 = {
            name: "Inbox",
            parent: testTag2
        };

        const testTag4 = {
            name: "Personal",
            parent: null
        };

        mockFlattenedTags = [testTag1, testTag2, testTag3, testTag4, null];
        global.flattenedTags = mockFlattenedTags;

        // Mock Task class
        testTask = {
            tags: [],
            addTag: jest.fn(function (tag) {
                this.tags.push(tag);
            })
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
        global.flattenedTags = undefined;
    });

    test('getAvailableTags returns correct tag structure', () => {
        const availableTags = TaskProcessor.getAvailableTags();

        expect(availableTags).toBeDefined();
        expect(availableTags).toHaveLength(4); // Excluding null tag

        const expectedPaths = [
            "Work",
            "Work > Projects",
            "Work > Projects > Inbox",
            "Personal"
        ];

        availableTags.forEach((tag, index) => {
            expect(tag.name).toBe(expectedPaths[index]);
            expect(tag.tag).toBeDefined();
            expect(typeof tag.tag).toBe('object');
        });
    });

    test('tag assignment works correctly', () => {
        const availableTags = TaskProcessor.getAvailableTags();
        const firstTag = availableTags[0];

        expect(firstTag).toBeDefined();
        expect(firstTag.tag).toBeDefined();

        testTask.addTag(firstTag.tag);

        expect(testTask.tags).toContain(firstTag.tag);
        expect(testTask.addTag).toHaveBeenCalledWith(firstTag.tag);
    });

    test('handles null tags gracefully', () => {
        const availableTags = TaskProcessor.getAvailableTags();

        // Verify that null tags are filtered out
        expect(availableTags).not.toContain(null);
        expect(availableTags).toHaveLength(4);
    });
}); 
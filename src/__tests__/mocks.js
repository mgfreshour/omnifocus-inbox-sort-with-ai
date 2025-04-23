import { jest } from '@jest/globals';

export const createMockTask = (name = 'Test Task', note = '') => ({
  id: 'test-id',
  name,
  note,
  completed: false,
  addTag: jest.fn(),
  project: null,
  tags: [],
  dueDate: null,
  deferDate: null,
  markComplete: jest.fn(),
  delete: jest.fn()
});

export const createMockTag = (name = 'Test Tag', note = '') => ({
  name,
  note
});

export const setupGlobalMocks = () => {
  const mockTask = createMockTask();
  const mockTag = createMockTag();

  global.Inbox = { tasks: [mockTask] };
  global.Tag = {
    byName: jest.fn().mockReturnValue(mockTag),
    prototype: {
      name: '',
      addTag: jest.fn()
    }
  };
  global.Form = {
    create: jest.fn(),
    addField: jest.fn(),
    Field: {
      Option: class {
        constructor(name, label, options, defaultValue) {
          return { name, label, options, defaultValue };
        }
      },
      String: class {
        constructor(name, label, defaultValue) {
          return { name, label, defaultValue };
        }
      }
    }
  };
  global.Alert = jest.fn().mockImplementation(() => ({
    show: jest.fn()
  }));
  global.Keychain = {
    read: jest.fn().mockReturnValue('mock-api-key'),
    write: jest.fn()
  };
  global.HTTP = {
    request: jest.fn().mockResolvedValue(''),
    requestJSON: jest.fn().mockResolvedValue({
      choices: [{
        message: {
          content: '1 -> Work\n2 -> Personal'
        }
      }]
    })
  };
  global.flattenedTags = [
    { name: 'Work', note: 'Work related tasks' },
    { name: 'Personal', note: 'Personal tasks' },
    { name: 'Unknown', note: 'Uncategorized tasks' }
  ];
  global.flattenedProjects = [
    { name: 'Work Projects', note: 'Work related projects' },
    { name: 'Personal Projects', note: 'Personal projects' }
  ];
}; 
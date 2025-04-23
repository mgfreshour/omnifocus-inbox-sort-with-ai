// Mock OmniFocus globals
const g = global;

g.PlugIn = {
  preferences: {},
};

g.Form = class {
  constructor() {
    this.fields = [];
  }
  addField(field) {
    this.fields.push(field);
  }
  async show() {
    await Promise.resolve();
    return { values: {} };
  }
};

g.Keychain = {
  read: jest.fn(),
  write: jest.fn(),
};

g.HTTP = {
  requestJSON: jest.fn(),
};

g.Inbox = {
  tasks: [],
};

g.Tag = class {
  static byName = jest.fn();
  constructor(name) {
    this.name = name;
  }
  addTag() {}
};

g.Alert = class {
  constructor(title, message) {
    this.title = title;
    this.message = message;
  }
  show() {}
};

// Mock flattenedTags and flattenedProjects
g.flattenedTags = [];
g.flattenedProjects = []; 
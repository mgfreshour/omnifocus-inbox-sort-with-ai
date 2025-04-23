// Shared configuration for OmniFocus plugin validation and ESLint

export const OMNIFOCUS_GLOBALS = {
    // OmniFocus globals
    PlugIn: true,
    Form: true,
    Alert: true,
    HTTP: true,
    URL: true,
    Tag: true,
    Inbox: true,
    Keychain: true,
    Perspective: true,
    inbox: true,
    tags: true,
    projects: true,
    app: true,
    Credentials: true,
    flattenedTags: true,
    flattenedProjects: true,
    Project: true,
    Area: true,
    Folder: true,
    database: true,
    moveTasks: true
};

export const NODE_GLOBALS = {
    // Node.js globals
    console: true,
    process: true,
    module: true,
    require: true,
    __dirname: true,
    __filename: true,
};

export const WEBPACK_GLOBALS = {
    // Webpack globals
    __webpack_require__: true,
    __webpack_exports__: true,
    __webpack_unused_export__: true,
};

export const JEST_GLOBALS = {
    // Jest globals
    jest: true,
    describe: true,
    it: true,
    expect: true,
    beforeEach: true,
    afterEach: true,
    beforeAll: true,
    afterAll: true,
    test: true,
    global: true,
};

export const SHARED_ESLINT_RULES = {
    // General rules
    'no-console': 'off', // Allow console for debugging
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'no-unused-expressions': 'off', // Allow unused expressions for OmniFocus plugin
    'no-var': 'error',
    'prefer-const': 'error',
    'no-undef': 'error',
    'no-unused-vars': 'off',
};

export const PLUGIN_HEADER_FIELDS = [
    'type',
    'targets',
    'author',
    'identifier',
    'version',
    'description',
    'label',
    'shortLabel',
    'paletteLabel',
    'image'
]; 
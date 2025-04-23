import js from '@eslint/js';
import jest from 'eslint-plugin-jest';
import { OMNIFOCUS_GLOBALS, NODE_GLOBALS, WEBPACK_GLOBALS, JEST_GLOBALS, SHARED_ESLINT_RULES } from './config/shared-config.js';

export default [
  {
    ignores: [
      'dist/**/*',
      'temp-plugin.js',
      'node_modules/**/*',
      'coverage/**/*',
      'src/types/**/*',
      'src/__mocks__/**/*',
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...NODE_GLOBALS,
        ...WEBPACK_GLOBALS,
        ...OMNIFOCUS_GLOBALS,
      },
    },
    plugins: {
      'jest': jest,
    },
    rules: SHARED_ESLINT_RULES,
  },
  {
    files: ['**/__tests__/**/*.js'],
    languageOptions: {
      globals: {
        ...JEST_GLOBALS,
        ...NODE_GLOBALS,
      },
    },
    plugins: {
      'jest': jest,
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
      // Allow unused variables in test files
      'no-unused-vars': 'off',
    },
  },
]; 
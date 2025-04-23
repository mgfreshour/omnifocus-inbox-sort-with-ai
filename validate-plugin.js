#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ESLint } from 'eslint';
import os from 'os';
import { PLUGIN_HEADER_FIELDS, OMNIFOCUS_GLOBALS, NODE_GLOBALS } from './config/shared-config.js';

// Configuration
const PLUGIN_FILE = 'dist/InboxSortViaAI.omnifocusjs';

// Helper functions
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    process.exit(1);
  }
}

function extractHeader(content) {
  const headerMatch = content.match(/\/\*{([\s\S]*?)\}\*\//);
  if (!headerMatch) {
    console.error('No plugin header found');
    process.exit(1);
  }

  // Clean up the header text and ensure it's wrapped in curly braces
  const headerText = headerMatch[1]
    .trim()
    .replace(/^\s*{\s*/, '') // Remove opening brace and whitespace
    .replace(/\s*}\s*$/, ''); // Remove closing brace and whitespace

  // Reconstruct proper JSON
  return `{${headerText}}`;
}

function parseHeader(header) {
  try {
    return JSON.parse(header);
  } catch (error) {
    console.error('Invalid JSON in plugin header:', error);
    console.error('Header content:', header);
    process.exit(1);
  }
}

function validateHeader(header) {
  const missingFields = PLUGIN_HEADER_FIELDS.filter(field => !header[field]);
  if (missingFields.length > 0) {
    console.error('Missing required header fields:', missingFields.join(', '));
    process.exit(1);
  }

  // Validate specific fields
  if (header.type !== 'action') {
    console.error('Invalid type in header. Must be "action"');
    process.exit(1);
  }

  if (!Array.isArray(header.targets) || !header.targets.includes('omnifocus')) {
    console.error('Invalid targets in header. Must include "omnifocus"');
    process.exit(1);
  }

  if (!header.identifier.startsWith('com.')) {
    console.error('Invalid identifier. Must start with "com."');
    process.exit(1);
  }

  if (!/^\d+\.\d+\.\d+$/.test(header.version)) {
    console.error('Invalid version format. Must be semantic version (e.g., 1.0.0)');
    process.exit(1);
  }
}

function validateCodeStructure(content) {
  // Check for required IIFE wrapper
  const iifeMatch = content.match(/\(\(\)\s*=>\s*{([\s\S]*?)}\)\(\);/);
  if (!iifeMatch) {
    console.error('Plugin must be wrapped in an IIFE');
    process.exit(1);
  }

  // Check for nested IIFEs
  const nestedIifeCount = (content.match(/\(\(\)\s*=>\s*{/g) || []).length;
  if (nestedIifeCount > 1) {
    console.error('Plugin contains nested IIFEs which may cause scope issues');
    process.exit(1);
  }

  // Check for required return statement
  if (!content.includes('return myaction;')) {
    console.error('Plugin must return the action object');
    process.exit(1);
  }

  // Check for required validate method
  if (!content.includes('myaction.validate = function')) {
    console.error('Plugin must have a validate method');
    process.exit(1);
  }

  // Check if myaction is defined in the correct scope
  const myactionDef = content.match(/const\s+myaction\s*=/);
  if (!myactionDef) {
    console.error('myaction must be defined as a constant');
    process.exit(1);
  }

  // Check if myaction is defined before it's returned
  const myactionDefIndex = content.indexOf('const myaction =');
  const returnIndex = content.indexOf('return myaction;');
  if (myactionDefIndex > returnIndex) {
    console.error('myaction must be defined before it is returned');
    process.exit(1);
  }
}

function validateFileSize(filePath) {
  const stats = fs.statSync(filePath);
  const sizeInKB = stats.size / 1024;
  if (sizeInKB > 1000) { // 1MB limit
    console.error(`Plugin file is too large: ${sizeInKB.toFixed(2)}KB`);
    process.exit(1);
  }
}

async function validateSyntax(content) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'omnifocus-plugin-'));
  const tempFile = path.join(tempDir, 'temp-plugin.js');

  try {
    // Change to temp directory
    process.chdir(tempDir);

    // Write content to temporary file
    fs.writeFileSync(tempFile, content);

    // Run ESLint
    const eslint = new ESLint({
      cwd: tempDir,
      ignore: false,
      overrideConfigFile: true,
      overrideConfig: [{
        files: ['**/*.js'],
        languageOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          globals: {
            ...OMNIFOCUS_GLOBALS,
            ...NODE_GLOBALS,
          }
        },
        rules: {
          '@typescript-eslint/no-unused-vars': 'off',
          '@typescript-eslint/no-unused-expressions': 'off',
          'no-unused-expressions': 'off',
          'no-unused-vars': 'off',
          'no-undef': 'error' // Enable no-undef to catch undefined variables
        }
      }]
    });

    const results = await eslint.lintFiles([tempFile]);

    if (results[0].messages.length > 0) {
      console.error('Syntax errors found:');
      const lines = content.split('\n');
      results[0].messages.forEach(msg => {
        console.error(`\nError at line ${msg.line}:${msg.column} - ${msg.message} (${msg.ruleId || 'syntax'})`);
        // Show context (line before, error line, and line after)
        const startLine = Math.max(1, msg.line - 1);
        const endLine = Math.min(lines.length, msg.line + 1);
        for (let i = startLine; i <= endLine; i++) {
          const lineNum = i.toString().padStart(4, ' ');
          const lineContent = lines[i - 1];
          if (i === msg.line) {
            console.error(`${lineNum} | ${lineContent}`);
            // Show caret pointing to the error
            const spaces = ' '.repeat(msg.column - 1);
            console.error(`     | ${spaces}^`);
          } else {
            console.error(`${lineNum} | ${lineContent}`);
          }
        }
      });
      process.exit(1);
    }
  } catch (error) {
    console.error('Error validating syntax:', error.message);
    if (error.stack) {
      console.error('Stack trace:', error.stack);
    }
    process.exit(1);
  } finally {
    // Clean up temporary files
    try {
      fs.unlinkSync(tempFile);
      fs.rmdirSync(tempDir);
    } catch (cleanupError) {
      console.warn('Warning: Failed to clean up temporary files:', cleanupError.message);
    }
  }
}

// Main validation function
async function validatePlugin() {
  console.log('Validating OmniFocus plugin...');

  // Check if plugin file exists
  if (!fs.existsSync(PLUGIN_FILE)) {
    console.error(`Plugin file ${PLUGIN_FILE} not found`);
    process.exit(1);
  }

  // Validate file size
  validateFileSize(PLUGIN_FILE);

  // Read and validate content
  const content = readFile(PLUGIN_FILE);

  // Validate syntax first
  await validateSyntax(content);

  const header = extractHeader(content);
  const headerData = parseHeader(header);

  // Validate header
  validateHeader(headerData);

  // Validate code structure
  validateCodeStructure(content);

  console.log('✅ Plugin validation successful!');
  console.log('Plugin details:');
  console.log(`  Name: ${headerData.label}`);
  console.log(`  Version: ${headerData.version}`);
  console.log(`  Author: ${headerData.author}`);
  console.log(`  Identifier: ${headerData.identifier}`);
}

// Run validation
validatePlugin().catch(error => {
  console.error('Validation failed:', error);
  process.exit(1);
}); 
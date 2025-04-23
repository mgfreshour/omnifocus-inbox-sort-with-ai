import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the HTML file
const html = fs.readFileSync('docs/OmniFocus.html', 'utf8');
const $ = cheerio.load(html);

let apiOutput = `// Generated OmniFocus API Interface
// This file contains no-op implementations of the OmniFocus API

`;

// Track all classes we've seen
const seenClasses = new Set();
const classInheritance = new Map();

// List of built-in JavaScript classes to skip
const builtInClasses = new Set([
    'Array', 'Error', 'Function', 'Promise'
]);

// List of objects that should be classes instead of global objects
const classObjects = new Set(['Form']);

// Helper to convert HTML content to JSDoc comment
function toJSDoc(text) {
    if (!text) return '';
    return text.replace(/<br\/>/g, '\n').replace(/<[^>]+>/g, '').trim();
}

// Helper to convert type annotations to JSDoc format
function formatJSDocType(type) {
    if (!type) return '*';
    // Handle special cases and clean up type syntax
    return type
        .replace(/ or /g, '|')
        .replace(/Array of ([^,)]+)/g, 'Array.<$1>')
        .replace(/\bFunction\(([^)]*)\)/g, 'function($1)')
        .replace(/‍/g, '') // Remove zero-width joiner
        .replace(/\|null/g, '='); // Convert optional types to param=
}

// Helper to convert parameter names to valid JavaScript identifiers
function formatParamName(name) {
    if (!name) return '';
    if (name === 'function') return 'fn';
    if (name === 'with') return 'withValue';
    // Handle parameters with dots and 'or'
    return name.replace(/\./g, '_').replace(/ or /g, '_or_').replace(/[^a-zA-Z0-9_]/g, '_');
}

// Helper to parse complex parameter lists
function parseParams(paramText) {
    if (!paramText) return [];
    const params = [];
    let current = '';
    let depth = 0;

    for (let i = 0; i < paramText.length; i++) {
        const char = paramText[i];
        if (char === '(' || char === '<') depth++;
        if (char === ')' || char === '>') depth--;
        if (char === ',' && depth === 0) {
            params.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    if (current.trim()) params.push(current.trim());

    return params.map(param => {
        const [name, type] = param.split(':').map(s => s.trim());
        return { name: formatParamName(name), type };
    }).filter(p => p.name);
}

// Process each h1 section (classes)
$('h1').each((_, elem) => {
    const classSection = $(elem);
    const codeElem = classSection.find('code').first();
    if (!codeElem.length) return;

    const className = codeElem.text().trim();
    if (!className || seenClasses.has(className)) return;

    // Skip built-in JavaScript classes
    if (builtInClasses.has(className)) return;

    seenClasses.add(className);

    // Check for inheritance
    const inheritanceLink = classSection.find('a').last();
    if (inheritanceLink.length && inheritanceLink.text() !== className) {
        classInheritance.set(className, inheritanceLink.text());
    }

    const classDoc = `\n/**\n * ${toJSDoc(classSection.next('p').text())}\n */\n`;

    // Add to API output
    apiOutput += classDoc;

    // Handle nested class names (e.g., Crypto.SHA256)
    const isNestedClass = className.includes('.');
    if (isNestedClass) {
        // Skip nested class definitions as they'll be handled by their parent class
        return;
    }

    // If this is a global object (like Application), create it as a global variable
    const isGlobal = ['Application', 'Calendar', 'Device'].includes(className);

    // Generate API skeleton
    if (isGlobal) {
        apiOutput += `const ${className} = {\n`;
    } else {
        apiOutput += `class ${className} `;
        if (classInheritance.has(className)) {
            apiOutput += `extends ${classInheritance.get(className)} `;
        }
        apiOutput += `{\n`;
    }

    // Find all h2 sections within this class (constructors, instance functions, properties)
    let currentH2;
    let currentElem = classSection.next();
    const isFirstProperty = true;
    const properties = [];

    while (currentElem.length && currentElem.get(0).tagName !== 'h1') {
        if (currentElem.get(0).tagName === 'h2') {
            currentH2 = currentElem.text().trim();
        } else if (currentElem.get(0).tagName === 'h3') {
            const codeText = currentElem.find('code').first().text();
            const methodMatch = codeText.match(/(?:function |new |var )?([a-zA-Z0-9_]+)(?:\(([^)]*)\))?/);
            if (methodMatch) {
                const methodName = methodMatch[1];
                const rawParams = methodMatch[2] || '';

                // Parse parameters and their types from the raw text
                const params = parseParams(rawParams);

                // Get the description
                const description = toJSDoc(currentElem.next('p').text());

                // Generate JSDoc
                const jsDoc = `\n    /**\n     * ${description.split('\n').join('\n     * ')}\n` +
                    params.map(param => `     * @param {${formatJSDocType(param.type)}} ${param.name}\n`).join('') +
                    '     */\n';

                // Add to API output
                if (isGlobal) {
                    properties.push({
                        jsDoc,
                        apiImpl: `${methodName}: function(${params.map(p => p.name).join(', ')}) { }`
                    });
                } else {
                    // Generate method/property for API skeleton
                    if (currentH2 === 'Instance Properties' || currentH2 === 'Class Properties') {
                        if (currentH2 === 'Class Properties') {
                            apiOutput += '    static ';
                        }
                        apiOutput += jsDoc + `    get ${methodName}() { return null; }\n`;
                    } else if (currentH2 === 'Constructors') {
                        apiOutput += jsDoc + `    constructor(${params.map(p => p.name).join(', ')}) { }\n`;
                    } else {
                        if (currentH2 === 'Class Functions') {
                            apiOutput += '    static ';
                        }
                        apiOutput += jsDoc + `    ${methodName}(${params.map(p => p.name).join(', ')}) { }\n`;
                    }
                }
            }
        }
        currentElem = currentElem.next();
    }

    // For global objects, add all properties at once
    if (isGlobal && properties.length > 0) {
        apiOutput += properties.map(p => p.jsDoc + '    ' + p.apiImpl).join(',\n') + '\n';
    }

    // Close the class/object
    apiOutput += isGlobal ? '};\n\n' : '}\n\n';

    if (isGlobal) {
        apiOutput += `globalThis.${className} = ${className};\n\n`;
    }
});

// Write the API file
fs.writeFileSync('omni-api.js', apiOutput);

// Validate the generated file
try {
    const { execSync } = await import('child_process');
    const apiResult = execSync('node -c omni-api.js', { stdio: 'pipe' });
    console.log('API file validation successful');
} catch (error) {
    console.error('API file validation failed:', error.message);
}

// Generate Jest mocks
const apiFile = fs.readFileSync('omni-api.js', 'utf8');

// Regular expressions to match class definitions and their members
const classRegex = /class\s+(\w+)(?:\s+extends\s+\w+)?\s*{/g;
const methodRegex = /(?<!static\s+)(\w+)\s*\(([^)]*)\)\s*{/g;
const getterRegex = /(?<!static\s+)get\s+(\w+)\s*\(\)\s*{/g;
const staticMethodRegex = /static\s+(\w+)\s*\(([^)]*)\)\s*{/g;
const staticGetterRegex = /static\s+get\s+(\w+)\s*\(\)\s*{/g;

// Store the generated mocks
const mocks = {};

// Parse the file and generate mocks
let currentClass = null;
let classContent = '';

apiFile.split('\n').forEach(line => {
    // Check for class definition
    const classMatch = line.match(/class\s+(\w+)(?:\s+extends\s+\w+)?\s*{/);
    if (classMatch) {
        if (currentClass) {
            // Process the previous class
            processClass(currentClass, classContent);
        }
        currentClass = classMatch[1];
        classContent = '';
    }

    if (currentClass) {
        classContent += line + '\n';
    }
});

// Process the last class
if (currentClass) {
    processClass(currentClass, classContent);
}

// Function to process a class and generate its mock
function processClass(className, content) {
    const methods = new Set();
    const getters = new Set();
    const staticMethods = new Set();
    const staticGetters = new Set();

    // Reset regex lastIndex
    methodRegex.lastIndex = 0;
    getterRegex.lastIndex = 0;
    staticMethodRegex.lastIndex = 0;
    staticGetterRegex.lastIndex = 0;

    // Find methods
    let match;
    while ((match = methodRegex.exec(content)) !== null) {
        if (!match[1].startsWith('get ') && !match[1].startsWith('static ')) {
            methods.add(match[1]);
        }
    }

    // Find getters
    while ((match = getterRegex.exec(content)) !== null) {
        getters.add(match[1]);
    }

    // Find static methods
    while ((match = staticMethodRegex.exec(content)) !== null) {
        if (!match[1].startsWith('get ')) {
            staticMethods.add(match[1]);
        }
    }

    // Find static getters
    while ((match = staticGetterRegex.exec(content)) !== null) {
        staticGetters.add(match[1]);
    }

    // Generate mock code
    let mockCode = `// Mock for ${className}\n`;

    if (content.includes('extends')) {
        const extendsMatch = content.match(/extends\s+(\w+)/);
        if (extendsMatch) {
            mockCode += `// Extends ${extendsMatch[1]}\n`;
        }
    }

    mockCode += `const ${className} = {\n`;

    // Add static methods and getters
    if (staticMethods.size > 0 || staticGetters.size > 0) {
        for (const method of staticMethods) {
            mockCode += `    ${method}: jest.fn().mockImplementation(() => {\n`;
            mockCode += `        return Promise.resolve();\n`;
            mockCode += `    }),\n`;
        }
        for (const getter of staticGetters) {
            mockCode += `    get ${getter}() {\n`;
            mockCode += `        return jest.fn().mockReturnValue(null)();\n`;
            mockCode += `    },\n`;
        }
    }

    // Add instance methods and getters
    if (methods.size > 0 || getters.size > 0) {
        mockCode += `    prototype: {\n`;
        for (const method of methods) {
            mockCode += `        ${method}: jest.fn().mockImplementation(() => {\n`;
            mockCode += `            return Promise.resolve();\n`;
            mockCode += `        }),\n`;
        }
        for (const getter of getters) {
            mockCode += `        get ${getter}() {\n`;
            mockCode += `            return jest.fn().mockReturnValue(null)();\n`;
            mockCode += `        },\n`;
        }
        mockCode += `    },\n`;
    }

    mockCode += `};\n\n`;
    mockCode += `export default ${className};\n`;

    mocks[className] = mockCode;
}

// Create the __mocks__ directory if it doesn't exist
const mocksDir = path.join(__dirname, 'src', '__mocks__');
if (!fs.existsSync(mocksDir)) {
    fs.mkdirSync(mocksDir, { recursive: true });
}

// Write the mocks to a file
const outputFile = path.join(mocksDir, 'omni-mocks.js');
let outputContent = '// Generated OmniFocus API Mocks\n';
outputContent += '// This file is auto-generated by generate-api.js\n';
outputContent += '// DO NOT EDIT THIS FILE DIRECTLY\n\n';
outputContent += 'import { jest } from \'@jest/globals\';\n\n';

Object.values(mocks).forEach(mock => {
    outputContent += mock + '\n';
});

fs.writeFileSync(outputFile, outputContent);

console.log(`Mocks generated successfully at ${outputFile}`); 

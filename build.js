import fs from 'fs';

/* 
This is the build script for the plugin. It will read the plugin metadata, clean the code, 
and combine the code in the correct order.
This exists because webpack was too much of a hassle to set up for use in OmniFocus.
*/

const metadata = fs.readFileSync('src/plugin-metadata.json', 'utf8');

function cleanCode(code) {
  return code
    .replace(/import\s+.*?from\s+['"].*?['"];?\n?/g, '') // Remove imports
    .replace(/export\s+.*?{(.*?)}/g, '$1') // Remove export statements but keep the content
    .replace(/export\s+default\s+/g, '') // Remove default exports
    .replace(/export\s+/g, '') // Remove other exports
    .trim();
}

function safeReadFile(path) {
  try {
    return fs.readFileSync(path, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      return '';
    }
    throw error;
  }
}

// Read and clean all source files
const youtubeCode = cleanCode(safeReadFile('src/youtube.js'));
const urlMetadataCode = cleanCode(safeReadFile('src/urlMetadata.js'));
const openrouterCode = cleanCode(safeReadFile('src/openrouter.js'));
const settingsCode = cleanCode(safeReadFile('src/settings.js'));
const taskProcessorCode = cleanCode(safeReadFile('src/taskProcessor.js'));
const pluginCode = cleanCode(safeReadFile('src/plugin.js'));
const loggerCode = cleanCode(safeReadFile('src/utils/logger.js'));
const typesCode = cleanCode(safeReadFile('src/types/index.js'));
const uiCode = cleanCode(safeReadFile('src/ui.js'));

// Combine the code in the correct order
const combinedCode = `
// Types
${typesCode}

// UI
${uiCode}
// Logger
${loggerCode}

// YouTube Service
${youtubeCode}

// URL Metadata Service
${urlMetadataCode}

// OpenRouter Service
${openrouterCode}

// Settings
${settingsCode}

// Task Processor
${taskProcessorCode}

// Plugin
${pluginCode}


        OpenRouterService.load();
`.trim();

// Create the final plugin with metadata and IIFE wrapper
const finalPlugin = `/*${metadata}*/\n\n(() => {\n${combinedCode}\nreturn myaction;\n})();`;

// ensure dist directory exists
fs.mkdirSync('dist', { recursive: true });

// Write the final plugin
fs.writeFileSync('dist/InboxSortViaAI.omnifocusjs', finalPlugin); 
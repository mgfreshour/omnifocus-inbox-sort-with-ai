import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the original HTML file
const htmlContent = fs.readFileSync(path.join(__dirname, 'docs', 'OmniFocus.html'), 'utf8');

// Split the content into sections based on h1 tags
const sections = htmlContent.split(/(?=<h1)/);

// Create the docs directory if it doesn't exist
const docsDir = path.join(__dirname, 'docs');
if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir);
}

// Process each section
sections.forEach((section, index) => {
    if (!section.trim()) return; // Skip empty sections

    // Extract the title from the h1 tag
    const titleMatch = section.match(/<h1><a name='([^']+)'>/);
    if (!titleMatch) return; // Skip sections without a proper title

    const title = titleMatch[1];

    // Create a new HTML file for this section
    const fileName = `${title.toLowerCase()}.html`;
    const filePath = path.join(docsDir, fileName);

    // Create the HTML content for this section
    const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
body { font-size: 12.0pt; }
body {
    background-color: white;
    color: black;
}
a {
    color: #4183C4;
}
a.absent {
    color: #cc0000;
}
h1 {
}
h2 {
    border-bottom: 1px solid #cccccc;
}
h6 {
    color: #777777;
}
hr {
    color: #cccccc;
}
blockquote {
    border-left: 4px solid #dddddd;
    color: #777777;
}
table tr {
    border-top: 1px solid #cccccc;
    background-color: white;
}
table tr:nth-child(2n) {
    background-color: #f8f8f8;
}
table tr th {
    border: 1px solid #cccccc;
}
table tr td {
    border: 1px solid #cccccc;
}
span.frame > span {
    border: 1px solid #dddddd;
}
span.frame span span {
    color: #333333;
}
.highlight pre {
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
}
pre {
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
}
.danger {
    color: red;
}
@media (prefers-color-scheme: dark) {
    body {
        background-color: black;
        color: white;
    }
    a {
        color: #76B5F3;
    }
    h1 {
    }
    h2 {
        border-bottom: 1px solid #eaeaea;
    }
    h6 {
        color: #777777;
    }
    hr {
        color: #cccccc;
    }
    blockquote {
        border-left: 4px solid #dddddd;
        color: #777777;
    }
    table tr {
        border-top: 1px solid #eaeaea;
        background-color: black;
    }
    table tr:nth-child(2n) {
        background-color: #f8f8f8;
    }
    table tr th {
        border: 1px solid #eaeaea;
    }
    table tr td {
        border: 1px solid #eaeaea;
    }
    span.frame > span {
        border: 1px solid #dddddd;
    }
    span.frame span span {
        color: #333333;
    }
    .highlight pre {
        background-color: #282828;
        border: 1px solid #555;
    }
    pre {
        background-color: #282828;
        border: 1px solid #555;
    }
}
body {
    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding-top: 10px;
    padding-bottom: 10px;
    padding: 30px;
    line-height: 1.6;
}
code {
    font-family: "SF Mono", "Menlo", monospace;
    font-weight: normal;
}
p {
    margin-left: 24px;
}
</style>
</head>
<body>
${section}
</body>
</html>`;

    // Write the file
    fs.writeFileSync(filePath, html);
    console.log(`Created ${fileName}`);
}); 
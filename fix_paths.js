
import fs from 'fs';
import path from 'path';

const directory = 'src/components';

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    const ext = path.extname(filePath);

    // Determine replacement based on file type
    // JSX/JS -> use './' (relative to index.html in build)
    // CSS -> use '../' (relative to assets/style.css in build)
    const replacementPrefix = (ext === '.css') ? '../' : './';

    // Regex to capture the quote and the folder (icons or images)
    // Matches: "/icons/...", '/icons/...', url(/icons/...)
    const regex = /([\"\'\(])\/(icons|images)\//g;

    content = content.replace(regex, (match, delimiter, folder) => {
        return `${delimiter}${replacementPrefix}${folder}/`;
    });

    if (content !== originalContent) {
        console.log(`Updating ${filePath} (${ext}) -> using '${replacementPrefix}'`);
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            traverse(fullPath);
        } else if (file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.js')) {
            processFile(fullPath);
        }
    }
}

console.log('Starting relative path conversion...');
traverse(directory);
console.log('Conversion complete.');

const fs = require('fs');
const path = require('path');
const katex = require('katex');

function findFiles(dir, ext) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) files = files.concat(findFiles(full, ext));
    else if (full.endsWith(ext)) files.push(full);
  }
  return files;
}

const files = findFiles('src/data/questionBanks', '.ts');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // 1. Remove orphaned \cdot\ or \\\cdot\
  content = content.replace(/\\\\\\cdot\\\\/g, '');
  content = content.replace(/\\cdot\\(?=['"])/g, '');
  content = content.replace(/\\\\cdot\\(?=['"])/g, '');
  content = content.replace(/\\cdot(?=['"])/g, '');

  // 2. Remove trailing backslash before closing quote e.g. 525.8\' -> 525.8'
  // But preserve genuine escaped primes inside strings like f\'_c or \sigma\'
  // Pattern: trailing backslash right before closing quote: \\' followed by optional space then comma/bracket/newline
  content = content.replace(/\\+(?=['"]\s*[,\]\n])/g, '');

  // 3. Fix any lone trailing backslashes in math like 2,400\
  content = content.replace(/\\+(?=\s*['"])/g, '');

  // 4. Fix any trailing space or comma before quote
  content = content.replace(/\s*,\s*(?=['"])/g, '');

  fs.writeFileSync(file, content, 'utf8');
}

console.log('Fixed trailing backslashes and orphaned operators.');

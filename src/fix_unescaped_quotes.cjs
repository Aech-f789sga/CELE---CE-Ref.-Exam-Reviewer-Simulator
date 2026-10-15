const fs = require('fs');
const path = require('path');

function findFiles(dir, ext) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) files = files.concat(findFiles(full, ext));
    else if (full.endsWith(ext)) files.push(full);
  }
  return files;
}

function fixLineString(line) {
  // Case A: { label: 'X', text: '...' }
  const optMatch = line.match(/^(\s*\{\s*label:\s*'[^']+',\s*text:\s*')(.*)('\s*\},?\s*)$/);
  if (optMatch) {
    const prefix = optMatch[1];
    const middle = optMatch[2];
    const suffix = optMatch[3];
    // In middle, escape any unescaped single quote
    const fixedMiddle = middle.replace(/(?<!\\)'/g, "\\'");
    return prefix + fixedMiddle + suffix;
  }

  // Case B: key: '...' (e.g. text:, summary:, category:, finalAnswer:, figureCaption:, id:, correctAnswer:)
  const keyMatch = line.match(/^(\s*[a-zA-Z0-9_]+:\s*')(.*)('(?:\s*,)?\s*)$/);
  if (keyMatch) {
    const prefix = keyMatch[1];
    const middle = keyMatch[2];
    const suffix = keyMatch[3];
    const fixedMiddle = middle.replace(/(?<!\\)'/g, "\\'");
    return prefix + fixedMiddle + suffix;
  }

  // Case C: Array element '...' e.g. formulas or steps or strings in array
  // e.g. "        'something ...'," or "        'something ...'"
  const arrMatch = line.match(/^(\s*')(.*)('(?:\s*,)?\s*)$/);
  if (arrMatch) {
    const prefix = arrMatch[1];
    const middle = arrMatch[2];
    const suffix = arrMatch[3];
    const fixedMiddle = middle.replace(/(?<!\\)'/g, "\\'");
    return prefix + fixedMiddle + suffix;
  }

  return line;
}

const files = findFiles('src/data/questionBanks', '.ts');
let totalFixedLines = 0;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  let changed = false;

  const newLines = lines.map((line, idx) => {
    const fixed = fixLineString(line);
    if (fixed !== line) {
      changed = true;
      totalFixedLines++;
      // console.log(`${file}:${idx+1} -> ${fixed.trim()}`);
    }
    return fixed;
  });

  if (changed) {
    fs.writeFileSync(file, newLines.join('\n'), 'utf8');
  }
}

console.log('Fixed', totalFixedLines, 'lines with unescaped apostrophes across question banks.');

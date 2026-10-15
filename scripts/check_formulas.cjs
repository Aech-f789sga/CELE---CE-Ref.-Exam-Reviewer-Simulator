const fs = require('fs');
const path = require('path');
const katex = require('katex');

function findFiles(dir, ext) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      files = files.concat(findFiles(full, ext));
    } else if (full.endsWith(ext)) {
      files.push(full);
    }
  }
  return files;
}

const files = findFiles('src/data/questionBanks', '.ts');
let totalFormulas = 0;
let errors = [];
let withWords = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  // Find formulas: [ ... ]
  const formulaBlockRegex = /formulas\s*:\s*\[([\s\S]*?)\]/g;
  let blockMatch;
  while ((blockMatch = formulaBlockRegex.exec(content)) !== null) {
    const inside = blockMatch[1];
    // Match each single-quoted or double-quoted or backtick string
    const stringRegex = /(?:'((?:\\.|[^'])*)'|"((?:\\.|[^"])*)"|`((?:\\.|[^`])*)`)/g;
    let strMatch;
    while ((strMatch = stringRegex.exec(inside)) !== null) {
      const rawStr = strMatch[1] !== undefined ? strMatch[1] : (strMatch[2] !== undefined ? strMatch[2] : strMatch[3]);
      if (!rawStr) continue;
      // In JS source file, backslashes are escaped, e.g. \\frac -> \frac
      const formula = rawStr.replace(/\\\\/g, '\\');
      totalFormulas++;
      
      try {
        katex.renderToString(formula, { throwOnError: true });
      } catch (e) {
        errors.push({ file, rawStr, formula, error: e.message });
      }

      // Check for words like \text{...} or words in formula
      if (/\\text\{[a-zA-Z\s]+\}/i.test(formula) || /\\text[a-zA-Z]*\{/i.test(formula)) {
        withWords.push({ file, rawStr, formula, reason: '\\text found' });
      }
    }
  }
}

console.log('Total formulas scanned:', totalFormulas);
console.log('KaTeX errors count:', errors.length);
if (errors.length > 0) {
  console.log('Errors sample:', errors.slice(0, 10));
}
console.log('Formulas with \\text found:', withWords.length);
if (withWords.length > 0) {
  console.log('Sample \\text formulas:');
  withWords.slice(0, 20).forEach(w => console.log(`[${w.file}] ${w.formula}`));
}

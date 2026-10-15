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

let totalModified = 0;
let totalChecked = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let fileChanged = false;

  // Replace \text{...} words in formula strings
  // 1. Replace word fractions
  content = content.replace(/\\frac\{\\text\{tensile stress\}\}\{\\text\{tensile strain\}\}/g, () => {
    fileChanged = true;
    totalModified++;
    return '\\frac{\\sigma}{\\epsilon}';
  });

  content = content.replace(/-\\frac\{\\text\{lateral strain\}\}\{\\text\{longitudinal strain\}\}/g, () => {
    fileChanged = true;
    totalModified++;
    return '-\\frac{\\epsilon_t}{\\epsilon_a}';
  });

  content = content.replace(/\\text\{Ductility\}\s*=\s*/g, () => {
    fileChanged = true;
    totalModified++;
    return '\\%RA = ';
  });

  // 2. Strip prefix labels like \text{Rectangle: }, \text{Triangle: }, \text{Joint A: }
  content = content.replace(/\\text\{(?:Rectangle|Triangle|Joint\s+[A-Z]|At\s+[A-Z]|Step\s+\d+|Member\s+[A-Z0-9]+):\s*\}\s*/g, () => {
    fileChanged = true;
    totalModified++;
    return '';
  });

  // 3. Strip embedded units inside \text{...}
  const unitRegex = /\\text\{\s*(?:mmHg|m\s+of\s+Hg|N\/m\^2|N\/m\^3|kN\/m\^2|kN\/m\^3|kN\/m|kN\s*\(C\)|kN\s*\(T\)|kN|kPa|MPa|GPa|N|m\^2|m\^3|mm\^2|mm\^4|mm|m|km|rad\/s|rad|rpm|sec|s|min|hrs|hr|L\/s|L\/hr|L|kg|ft|in|psi|ksi|pcf|psf|g\/cm\^3|hectares|bars?|units?\/worker|units?)\s*\}\^?[0-9]*/gi;
  if (unitRegex.test(content)) {
    content = content.replace(unitRegex, () => {
      fileChanged = true;
      totalModified++;
      return '';
    });
  }

  // 4. Strip tags like \text{ (C)}, \text{ (Compression)}, \text{ (T)}, \text{ (Tension)}
  content = content.replace(/\\text\{\s*\((?:C|T|Compression|Tension|governs|approx|singly reinforced)\)\s*\}/gi, () => {
    fileChanged = true;
    totalModified++;
    return '';
  });

  // 5. Clean up any leftovers like ,\;\s* at the end of formulas or double spaces
  content = content.replace(/,\s*\\;\s*'/g, "'");

  if (fileChanged) {
    fs.writeFileSync(file, content, 'utf8');
  }
}

console.log('Finished pass. Total replacements made:', totalModified);

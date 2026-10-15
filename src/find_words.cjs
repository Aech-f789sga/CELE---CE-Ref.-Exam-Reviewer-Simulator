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

function extractFormulasFromFile(content) {
  const formulasList = [];
  let idx = 0;
  while ((idx = content.indexOf('formulas:', idx)) !== -1) {
    const openBracket = content.indexOf('[', idx);
    if (openBracket === -1) break;
    let depth = 1;
    let i = openBracket + 1;
    let inString = false;
    let quoteChar = '';
    let currentStr = '';
    let strStart = -1;
    const foundStrings = [];

    while (i < content.length && depth > 0) {
      const ch = content[i];
      if (inString) {
        if (ch === '\\' && i + 1 < content.length) {
          currentStr += ch + content[i + 1];
          i += 2;
          continue;
        } else if (ch === quoteChar) {
          inString = false;
          foundStrings.push({ str: currentStr, start: strStart, end: i });
          currentStr = '';
        } else {
          currentStr += ch;
        }
      } else {
        if (ch === "'" || ch === '"' || ch === '`') {
          inString = true;
          quoteChar = ch;
          strStart = i;
          currentStr = '';
        } else if (ch === '[') {
          depth++;
        } else if (ch === ']') {
          depth--;
          if (depth === 0) break;
        }
      }
      i++;
    }

    formulasList.push({
      blockStart: idx,
      openBracket,
      closeBracket: i,
      strings: foundStrings
    });

    idx = i;
  }
  return formulasList;
}

const files = findFiles('src/data/questionBanks', '.ts');
const formulasWithWords = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const blocks = extractFormulasFromFile(content);

  for (const block of blocks) {
    for (const item of block.strings) {
      const raw = item.str;
      const runtime = raw.replace(/\\\\/g, '\\').replace(/\\'/g, "'").replace(/\\"/g, '"');

      // Allowed LaTeX commands or math function names
      const stripped = runtime
        .replace(/\\(frac|sqrt|times|approx|infty|alpha|beta|gamma|delta|Delta|epsilon|theta|lambda|mu|nu|pi|rho|sigma|tau|phi|omega|sum|int|prod|sin|cos|tan|cot|sec|csc|log|ln|min|max|cdot|left|right|quad|qquad|le|ge|leq|geq|ne|neq|pm|to|partial|lim|exp|over|circ|deg|ell|hbar|Re|Im|forall|exists|nabla|mathrm|mathbf|mathit|mathsf|mathtt|implies|iff|arctan|arccos|arcsin|perp|bar|hat|tilde|vec|prime|cases|begin|end|matrix|bmatrix|vmatrix)/g, ' ');

      // Check if words exist
      const hasTextCommand = /\\text[a-zA-Z]*\s*\{/.test(runtime);
      // Words of 3+ letters
      const words = (stripped.match(/[a-zA-Z]{3,}/g) || []).filter(w => {
        const lower = w.toLowerCase();
        return !['max', 'min', 'sin', 'cos', 'tan', 'cot', 'sec', 'csc', 'log', 'exp', 'deg', 'det', 'dim', 'lim', 'rad', 'rpm', 'var', 'cov', 'ans', 'sub', 'int', 'lat', 'long', 'sat'].includes(lower);
      });

      if (hasTextCommand || words.length > 0) {
        formulasWithWords.push({
          file,
          raw,
          runtime,
          hasTextCommand,
          words: words.slice(0, 5)
        });
      }
    }
  }
}

console.log('Total formulas with words:', formulasWithWords.length);
console.log('\n--- Sample 20 formulas with words: ---');
formulasWithWords.slice(0, 20).forEach((w, i) => {
  console.log(`[#${i+1}] ${w.file}`);
  console.log(`   Formula: ${w.runtime}`);
  console.log(`   Words:   ${w.words.join(', ')} (has \\text: ${w.hasTextCommand})`);
});

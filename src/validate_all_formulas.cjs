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

// Robust extractor for formulas array
function extractFormulasFromFile(content) {
  const formulasList = [];
  let idx = 0;
  while ((idx = content.indexOf('formulas:', idx)) !== -1) {
    // Find the opening '['
    const openBracket = content.indexOf('[', idx);
    if (openBracket === -1) break;
    
    // Balanced search for closing ']' accounting for strings
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
          // escaped character inside string
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
console.log('Inspecting', files.length, 'question bank files with balanced AST parser...');

const trueKatexErrors = [];
let totalFormulas = 0;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const blocks = extractFormulasFromFile(content);

  for (const block of blocks) {
    for (const item of block.strings) {
      totalFormulas++;
      // In JS single-quote string, evaluate escape sequences:
      // \\ -> \
      // \' -> '
      // \" -> "
      const raw = item.str;
      const runtime = raw.replace(/\\\\/g, '\\').replace(/\\'/g, "'").replace(/\\"/g, '"');

      try {
        katex.renderToString(runtime, { throwOnError: true, strict: false });
      } catch (err) {
        trueKatexErrors.push({
          file,
          raw,
          runtime,
          error: err.message
        });
      }
    }
  }
}

console.log('Total extracted formulas:', totalFormulas);
console.log('TRUE KaTeX errors count:', trueKatexErrors.length);
trueKatexErrors.forEach((e, idx) => {
  console.log(`\n[Error #${idx+1}] in ${e.file}`);
  console.log(`  Raw:     ${e.raw}`);
  console.log(`  Runtime: ${e.runtime}`);
  console.log(`  Error:   ${e.error}`);
});

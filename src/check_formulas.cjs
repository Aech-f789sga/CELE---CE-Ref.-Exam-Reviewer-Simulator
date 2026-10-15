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

// Safely extract string literals from code
function extractStringLiterals(code) {
  const strings = [];
  let i = 0;
  while (i < code.length) {
    const char = code[i];
    if (char === "'" || char === '"' || char === '`') {
      const quote = char;
      let str = '';
      i++;
      while (i < code.length) {
        if (code[i] === '\\' && i + 1 < code.length) {
          // escaped character in JS string
          const next = code[i + 1];
          if (next === quote) {
            str += quote;
            i += 2;
          } else if (next === '\\') {
            str += '\\\\';
            i += 2;
          } else if (next === 'n') {
            str += '\n';
            i += 2;
          } else if (next === 't') {
            str += '\t';
            i += 2;
          } else {
            str += '\\' + next;
            i += 2;
          }
        } else if (code[i] === quote) {
          i++;
          break;
        } else {
          str += code[i];
          i++;
        }
      }
      strings.push(str);
    } else {
      i++;
    }
  }
  return strings;
}

const files = findFiles('src/data/questionBanks', '.ts');
let totalFormulas = 0;
const katexErrors = [];
const formulasWithWords = [];
const unicodeMath = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const formulaBlockRegex = /formulas\s*:\s*\[([\s\S]*?)\]/g;
  let blockMatch;
  while ((blockMatch = formulaBlockRegex.exec(content)) !== null) {
    const inside = blockMatch[1];
    const rawStrings = extractStringLiterals(inside);
    for (const rawStr of rawStrings) {
      if (!rawStr.trim()) continue;
      // In JS execution, double backslash in source is single backslash
      // e.g. \\frac in source file becomes \frac in runtime JS string
      const runtimeFormula = rawStr.replace(/\\\\/g, '\\');
      totalFormulas++;

      // 1. KaTeX Test
      try {
        katex.renderToString(runtimeFormula, { throwOnError: true, strict: false });
      } catch (e) {
        katexErrors.push({ file, rawStr, runtimeFormula, error: e.message });
      }

      // 2. Words in Formula Test
      // LaTeX commands to ignore
      const stripped = runtimeFormula
        .replace(/\\(frac|sqrt|times|approx|infty|alpha|beta|gamma|delta|Delta|epsilon|theta|lambda|mu|nu|pi|rho|sigma|tau|phi|omega|sum|int|prod|sin|cos|tan|log|ln|min|max|cdot|left|right|quad|qquad|le|ge|leq|geq|ne|neq|pm|to|partial|lim|exp|over|circ|deg|ell|hbar|Re|Im|forall|exists|nabla|mathrm|mathbf|implies|arctan|arccos|arcsin|perp|bar|hat|tilde|vec|prime)/g, ' ');
      
      const hasTextTag = /\\text[a-zA-Z]*\{/i.test(runtimeFormula);
      // Look for plain words (4+ letters not math symbols)
      const words = (stripped.match(/[a-zA-Z]{4,}/g) || []).filter(w => {
        return !['max', 'min', 'sin', 'cos', 'tan', 'sec', 'log', 'exp', 'deg', 'det', 'dim', 'lim', 'rad', 'rpm', 'long', 'crit'].includes(w.toLowerCase());
      });

      if (hasTextTag || words.length > 0) {
        formulasWithWords.push({ file, rawStr, runtimeFormula, words, hasTextTag });
      }

      // 3. Raw Unicode Math Test
      if (/[√γ²³×÷±]/.test(runtimeFormula)) {
        unicodeMath.push({ file, rawStr, runtimeFormula });
      }
    }
  }
}

console.log('Total formulas scanned:', totalFormulas);
console.log('KaTeX parse errors count:', katexErrors.length);
console.log('Formulas with words/text count:', formulasWithWords.length);
console.log('Formulas with raw unicode math count:', unicodeMath.length);

if (katexErrors.length > 0) {
  console.log('\n--- KaTeX Parse Errors ---');
  katexErrors.forEach((e, i) => {
    console.log(`[#${i+1}] ${e.file}`);
    console.log(`   Formula: ${e.runtimeFormula}`);
    console.log(`   Error:   ${e.error}`);
  });
}

if (unicodeMath.length > 0) {
  console.log('\n--- First 10 Unicode Math Formulas ---');
  unicodeMath.slice(0, 10).forEach((u, i) => {
    console.log(`[#${i+1}] ${u.file} -> ${u.runtimeFormula}`);
  });
}

console.log('\n--- Formulas With Words By File ---');
const byFile = {};
formulasWithWords.forEach(w => {
  byFile[w.file] = (byFile[w.file] || 0) + 1;
});
console.log(byFile);



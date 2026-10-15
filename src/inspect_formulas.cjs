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
console.log('Found', files.length, 'question bank files');

// Simple regex to extract formula strings from formulas: [ ... ]
const errors = [];
const wordFormulas = [];
const formatIssues = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  // Match formulas: [ ... ]
  const formulaBlockRegex = /formulas\s*:\s*\[([\s\S]*?)\]/g;
  let blockMatch;
  while ((blockMatch = formulaBlockRegex.exec(content)) !== null) {
    const inside = blockMatch[1];
    // Find all single quoted string literals
    const strRegex = /'((?:\\.|[^'])*)'/g;
    let sMatch;
    while ((sMatch = strRegex.exec(inside)) !== null) {
      const raw = sMatch[1];
      if (!raw.trim()) continue;
      
      // runtime string in JS (where \\ becomes \)
      const runtime = raw.replace(/\\\\/g, '\\').replace(/\\'/g, "'");

      // 1. KaTeX parse check
      let katexPassed = true;
      try {
        katex.renderToString(runtime, { throwOnError: true, strict: false });
      } catch (e) {
        katexPassed = false;
        errors.push({ file, raw, runtime, error: e.message });
      }

      // 2. Word check (no words shall be included)
      // Strip valid LaTeX commands
      const withoutCommands = runtime
        .replace(/\\(frac|sqrt|times|approx|infty|alpha|beta|gamma|delta|Delta|epsilon|theta|lambda|mu|nu|pi|rho|sigma|tau|phi|omega|sum|int|prod|sin|cos|tan|cot|sec|csc|log|ln|min|max|cdot|left|right|quad|qquad|le|ge|leq|geq|ne|neq|pm|to|partial|lim|exp|over|circ|deg|ell|hbar|Re|Im|forall|exists|nabla|mathrm|mathbf|implies|arctan|arccos|arcsin|perp|bar|hat|tilde|vec|prime|cases|begin|end|matrix|bmatrix|vmatrix)/g, ' ');

      // Check if there are english words (>=3 chars not purely numbers/symbols)
      const words = (withoutCommands.match(/[a-zA-Z]{3,}/g) || []).filter(w => {
        const lower = w.toLowerCase();
        // Allow standard single-var or standard math abbreviations if any
        return !['max', 'min', 'sin', 'cos', 'tan', 'cot', 'sec', 'csc', 'log', 'exp', 'deg', 'det', 'dim', 'lim', 'rad', 'rpm', 'var', 'cov', 'ans'].includes(lower);
      });

      const hasTextCommand = /\\text[a-zA-Z]*\s*\{/.test(runtime);
      if (words.length > 0 || hasTextCommand) {
        wordFormulas.push({ file, raw, runtime, words, hasTextCommand });
      }

      // 3. Check for improper subscripts / superscripts / fractions / symbols
      // Examples: 10⁻^4, unicode exponents ², ³, double subscript like _a_b, unclosed bracket
      if (/[²³⁴₀₁₂₃₄·•×÷√]/.test(runtime) || /\^[0-9]\^[0-9]/.test(runtime) || /_[a-zA-Z0-9]+_[a-zA-Z0-9]+/.test(runtime) || /\\right\s*$/.test(runtime)) {
        formatIssues.push({ file, raw, runtime });
      }
    }
  }
}

console.log('--- SUMMARY ---');
console.log('KaTeX Errors:', errors.length);
console.log('Formulas with words/text:', wordFormulas.length);
console.log('Formulas with format issues:', formatIssues.length);

fs.writeFileSync('src/formula_analysis.json', JSON.stringify({ errors, wordFormulas, formatIssues }, null, 2));
console.log('Saved detailed results to src/formula_analysis.json');

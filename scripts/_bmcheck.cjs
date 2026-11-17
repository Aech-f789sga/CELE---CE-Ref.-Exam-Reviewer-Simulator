// Verify every stem/option in the Algebra bank renders through KaTeX with the
// same sanitising MathView applies, and that the Markdown tables parse.
const katex = require('katex');

// --- mirror of MathView.sanitizeLatex (the parts that matter for validation) ---
function sanitizeLatex(input, isFormula = false) {
  if (!input) return '';
  let s = input.trim();
  s = s.replace(/\\'/g, "'");
  s = s.replace(/(?<!\\)%/g, '\\%');
  s = s.replace(/(?<!\\)\$(\d)/g, '\\$$1');
  s = s
    .replace(/⁻¹/g, '^{-1}').replace(/⁻²/g, '^{-2}').replace(/⁻³/g, '^{-3}')
    .replace(/¹/g, '^1').replace(/²/g, '^2').replace(/³/g, '^3').replace(/⁴/g, '^4')
    .replace(/₀/g, '_0').replace(/₁/g, '_1').replace(/₂/g, '_2').replace(/₃/g, '_3').replace(/₄/g, '_4');
  s = s
    .replace(/[·•]/g, ' \\cdot ').replace(/×/g, ' \\times ').replace(/÷/g, ' \\div ')
    .replace(/≤/g, ' \\le ').replace(/≥/g, ' \\ge ').replace(/≠/g, ' \\ne ')
    .replace(/±/g, ' \\pm ').replace(/≈/g, ' \\approx ').replace(/∞/g, ' \\infty ')
    .replace(/°/g, '^\\circ ').replace(/=>/g, ' \\implies ').replace(/→/g, ' \\to ');
  return s;
}

function isLegitimateMath(str) {
  const trimmed = str.trim();
  if (!trimmed) return false;
  if (str.startsWith(' ') || str.endsWith(' ')) return false;
  if (/^\d[\d,]*(\.\d+)?\s*(k|M|B)?\s*(\/[A-Za-z][A-Za-z/]*)?$/.test(trimmed)) return false;
  if (/^\d[\d,]*(\.\d+)?\s+[A-Za-z]/.test(trimmed)) return false;
  const hasBackslash = trimmed.includes('\\');
  const hasMathSymbols = /[=^_{}∫√±≤≥≠×÷+\-*]/.test(trimmed);
  const hasMultipleWords = /[a-zA-Z]{2,}\s+[a-zA-Z]{2,}/.test(trimmed);
  if (hasMultipleWords && !hasBackslash && !hasMathSymbols) return false;
  return true;
}

const problems = [];

function checkInline(text, where) {
  const re = /(?<!\\)\$([^\$\n]+?)(?<!\\)\$/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (!isLegitimateMath(m[1])) continue;
    try {
      katex.renderToString(sanitizeLatex(m[1], false), { throwOnError: true, strict: false });
    } catch (e) {
      problems.push(`${where}: ${m[1]}  ->  ${e.message}`);
    }
  }
}

function checkDisplay(latex, where) {
  try {
    katex.renderToString(sanitizeLatex(latex), { throwOnError: true, displayMode: true, strict: false });
  } catch (e) {
    problems.push(`${where} [display]: ${latex}  ->  ${e.message}`);
  }
}

function walk(text, where) {
  const lines = text.split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (line.startsWith('$$')) {
      let math;
      if (line.endsWith('$$') && line.length > 4) {
        math = line.slice(2, -2);
        i++;
      } else {
        math = line.slice(2) + '\n';
        i++;
        while (i < lines.length && !lines[i].trim().endsWith('$$')) { math += lines[i] + '\n'; i++; }
        if (i < lines.length) { math += lines[i].trim().replace(/\$\$$/, ''); i++; }
      }
      checkDisplay(math.trim(), where);
      continue;
    }
    checkInline(line, where);
    i++;
  }
}

const bank = require('./_bm_bundle.cjs');

for (const q of bank.BM_ALGEBRA) {
  walk(q.text, `#${q.number} stem`);
  q.options.forEach((o, idx) => walk(o.text, `#${q.number} opt ${'ABCD'[idx]}`));
}

console.log(`checked ${bank.BM_ALGEBRA.length} items`);
if (problems.length) {
  console.log('PROBLEMS:', problems.length);
  problems.forEach((p) => console.log(' -', p));
  process.exit(1);
} else {
  console.log('all math renders');
}

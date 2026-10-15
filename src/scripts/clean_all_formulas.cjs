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

// Normalize formula string to pure KaTeX format without words
function cleanFormula(formula) {
  if (!formula || typeof formula !== 'string') return formula;
  let s = formula.trim();

  // Remove leading bullets or dashes
  s = s.replace(/^[•\-\*]\s*/, '');

  // Fix escaped prime
  s = s.replace(/\\'/g, "'");

  // Remove currency signs inside math
  s = s.replace(/\$/g, '');

  // Remove trailing and embedded units with \text{...}
  s = s.replace(/\\text\{\s*(?:MPa|kPa|Pa|kN|N|mm|cm|m|kg|ton|s|sec|min|hr|yr|rad|rpm|degrees|deg|rad\/s|N\/m|kN\/m|kN\s*m|kN\s*\\cdot\s*m|N\s*\\cdot\s*mm|mm\^2|mm\^3|mm\^4|m\^2|m\^3|L|L\/s|gal|gpm|ft|in|lb|psi|ksi|pcf|psf|cfs)\s*\}/gi, '');
  
  // Remove bare trailing units
  s = s.replace(/\s+(?:MPa|kPa|Pa|kN|N|mm|cm|m|kg|ton|sec|min|hr|yr|rad\/s|kN\/m|kN·m|N·mm|mm²|mm³|mm⁴|m²|m³|L|L\/s|gal|gpm|ft|in|lb|psi|ksi)\b/gi, '');

  // Remove phrases like \text{Governs}, \text{Say ...}, \text{Use ...}, \text{Yields}, etc.
  s = s.replace(/\\implies\s*\\text\{[^}]+\}/gi, '');
  s = s.replace(/\\text\{\s*(?:Governs|Analyze as SRB|Say [^}]+|Use [^}]+|Choose [^}]+|Compression|Tension|Yields|Elastic|Buckling)\s*\}/gi, '');
  s = s.replace(/\\text\{\s*(?:Rectangle|Triangle|Cylinder \d+|Joint \w+|Pattern \d+|Direct proportion|Solving simultaneously)\s*:\s*\}\s*/gi, '');

  // Replace unicode exponents
  s = s.replace(/¹/g, '^1').replace(/²/g, '^2').replace(/³/g, '^3').replace(/⁴/g, '^4').replace(/⁵/g, '^5');
  // Replace unicode subscripts
  s = s.replace(/₀/g, '_0').replace(/₁/g, '_1').replace(/₂/g, '_2').replace(/₃/g, '_3').replace(/₄/g, '_4').replace(/₅/g, '_5');

  // Replace unicode Greek letters
  s = s
    .replace(/α/g, '\\alpha ')
    .replace(/β/g, '\\beta ')
    .replace(/γ/g, '\\gamma ')
    .replace(/δ/g, '\\delta ')
    .replace(/Δ/g, '\\Delta ')
    .replace(/ε/g, '\\epsilon ')
    .replace(/θ/g, '\\theta ')
    .replace(/λ/g, '\\lambda ')
    .replace(/μ/g, '\\mu ')
    .replace(/ν/g, '\\nu ')
    .replace(/π/g, '\\pi ')
    .replace(/ρ/g, '\\rho ')
    .replace(/σ/g, '\\sigma ')
    .replace(/Σ/g, '\\Sigma ')
    .replace(/τ/g, '\\tau ')
    .replace(/ϕ|φ/g, '\\phi ')
    .replace(/ω/g, '\\omega ')
    .replace(/Ω/g, '\\Omega ');

  // Replace unicode operators
  s = s
    .replace(/[·•]/g, ' \\cdot ')
    .replace(/×/g, ' \\times ')
    .replace(/÷/g, ' \\div ')
    .replace(/≤/g, ' \\le ')
    .replace(/≥/g, ' \\ge ')
    .replace(/≠/g, ' \\ne ')
    .replace(/±/g, ' \\pm ')
    .replace(/≈/g, ' \\approx ')
    .replace(/∞/g, ' \\infty ')
    .replace(/→/g, ' \\to ')
    .replace(/⇒/g, ' \\implies ');

  // Replace Unicode square root symbols
  s = s
    .replace(/√\[\s*([^\]]+?)\s*\]/g, '\\sqrt{$1}')
    .replace(/√\(\s*([^)]+?)\s*\)/g, '\\sqrt{$1}')
    .replace(/√([a-zA-Z0-9]+)/g, '\\sqrt{$1}');

  // Convert simple fraction slashes [ a / b ] to \frac{a}{b}
  s = s.replace(/\[\s*([^\[\]\/]+?)\s*\/\s*([^\[\]\/]+?)\s*\]/g, '\\frac{$1}{$2}');

  // Fix unclosed \right
  if (/\\left\[[^\]]*?\\right\s*$/.test(s)) {
    s = s.replace(/\\right\s*$/, '\\right]');
  } else if (/\\left\([^)]*?\\right\s*$/.test(s)) {
    s = s.replace(/\\right\s*$/, '\\right)');
  }

  // Escape unescaped %
  s = s.replace(/(?<!\\)%/g, '\\%');

  // Strip remaining \text{...} words if any
  s = s.replace(/\\text\{([a-zA-Z\s]+)\}/g, (m, p1) => {
    // If it's a short 1-3 letter subscript or math symbol, convert to \mathrm or plain
    const clean = p1.trim();
    if (['all', 'max', 'min', 'tot', 'eff', 'req', 'crit', 'ult', 'act', 'allow', 'lat', 'long', 'top', 'bot'].includes(clean.toLowerCase())) {
      return `\\mathrm{${clean.slice(0, 3)}}`;
    }
    return '';
  });

  // Clean trailing punctuation or dangling equals
  s = s.replace(/\s*,\s*$/, '').trim();

  return s;
}

// Test on files that had unicode or errors
const filesToProcess = [
  'src/data/questionBanks/hpge/questions1to12.ts',
  'src/data/questionBanks/hpge/questions13to24.ts',
  'src/data/questionBanks/hpge/questions25to36.ts',
  'src/data/questionBanks/hpge/questions37to48.ts',
  'src/data/questionBanks/psad/questions1to15.ts',
  'src/data/questionBanks/psad/questions16to30.ts',
  'src/data/questionBanks/psad/questions31to45.ts',
  'src/data/questionBanks/psad/questions46to60.ts',
  'src/data/questionBanks/psad/questions61to75.ts',
  'src/data/questionBanks/mstcQuestions.ts',
  'src/data/questionBanks/mstc/nov2024_part1.ts',
  'src/data/questionBanks/mstc/nov2024_part2.ts',
  'src/data/questionBanks/mstc/nov2024_part3.ts',
  'src/data/questionBanks/mstc/nov2024_part4.ts',
  'src/data/questionBanks/mstc/nov2024_part5.ts',
  'src/data/questionBanks/mstc/nov2024_part6.ts',
  'src/data/questionBanks/mstc/nov2025_part2.ts',
  'src/data/questionBanks/mstc/nov2025_part3.ts',
  'src/data/questionBanks/psad/apr2025_part3.ts',
  'src/data/questionBanks/psad/nov2024_part2.ts',
];

console.log('Processing files...');
let totalCleaned = 0;

for (const filePath of filesToProcess) {
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace each string in formulas: [ ... ]
  const newContent = content.replace(/(formulas\s*:\s*\[)([\s\S]*?)(\])/g, (fullMatch, prefix, inner, suffix) => {
    // Process string literals in inner
    const replacedInner = inner.replace(/(['"`])((?:\\.|(?!\1).)*)\1/g, (sMatch, quote, strVal) => {
      // In JS file, unescaped string
      const runtimeStr = strVal.replace(/\\\\/g, '\\');
      const cleaned = cleanFormula(runtimeStr);
      if (cleaned !== runtimeStr) {
        totalCleaned++;
      }
      // Re-escape backslashes for source file
      const escaped = cleaned.replace(/\\/g, '\\\\').replace(new RegExp(quote, 'g'), `\\${quote}`);
      return `${quote}${escaped}${quote}`;
    });
    return `${prefix}${replacedInner}${suffix}`;
  });

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

console.log(`Total formulas cleaned: ${totalCleaned}`);

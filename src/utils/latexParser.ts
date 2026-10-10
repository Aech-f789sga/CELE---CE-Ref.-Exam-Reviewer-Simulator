import katex from 'katex';

// Greek letters mapping
const GREEK_MAP: Record<string, string> = {
  'θ': '\\theta',
  'μ': '\\mu',
  'σ': '\\sigma',
  'τ': '\\tau',
  'γ': '\\gamma',
  'π': '\\pi',
  'Σ': '\\Sigma',
  'Δ': '\\Delta',
  'α': '\\alpha',
  'β': '\\beta',
  'λ': '\\lambda',
  'ρ': '\\rho',
  'ω': '\\omega',
  'ε': '\\varepsilon',
  'ϕ': '\\phi',
  'φ': '\\phi',
  'Ω': '\\Omega',
  'δ': '\\delta',
  'η': '\\eta',
  'κ': '\\kappa',
  'ν': '\\nu',
  'ξ': '\\xi',
  'ψ': '\\psi',
  'ζ': '\\zeta',
};

// Unicode superscripts dictionary
const SUP_CHAR_MAP: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  'ⁿ': 'n', '⁺': '+', '⁻': '-',
};

// Unicode subscripts dictionary
const SUB_CHAR_MAP: Record<string, string> = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
  '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
};

/**
 * Converts a raw engineering math formula or equation into clean, valid LaTeX.
 */
export function toLatexEquation(raw: string): string {
  if (!raw || typeof raw !== 'string') return '';
  let s = raw.trim();

  // Strip trailing backslashes or invalid escape remnants (e.g. "13°33\" or "C\")
  s = s.replace(/\\+$/, '');
  s = s.replace(/\\+(?=\s|[,\);\]]|$)/g, ' ');

  // If already delimited with $ or $$, strip for inner processing
  if (s.startsWith('$$') && s.endsWith('$$')) {
    s = s.slice(2, -2).trim();
  } else if (s.startsWith('$') && s.endsWith('$')) {
    s = s.slice(1, -1).trim();
  } else if (s.startsWith('\\[') && s.endsWith('\\]')) {
    s = s.slice(2, -2).trim();
  } else if (s.startsWith('\\(') && s.endsWith('\\)')) {
    s = s.slice(2, -2).trim();
  }

  // Handle currency ($15,000 or $450) without corrupting with regex replacement groups
  s = s.replace(/\$([0-9][0-9,]*(?:\.[0-9]+)?)/g, (_match, num) => `\\text{\\$${num}}`);

  // Handle percent signs in LaTeX (escape % -> \% so KaTeX doesn't treat as comment)
  s = s.replace(/(^|[^\\])%/g, '$1\\%');

  // Multi-character unicode superscripts (e.g. 2³⁰ -> 2^{30}, 10⁻⁴ -> 10^{-4})
  s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ⁺⁻]+/g, (match) => {
    const converted = Array.from(match).map((c) => SUP_CHAR_MAP[c] ?? c).join('');
    return `^{${converted}}`;
  });

  // Multi-character unicode subscripts (e.g. a₁₂ -> a_{12})
  s = s.replace(/[₀₁₂₃₄₅₆₇₈₉]+/g, (match) => {
    const converted = Array.from(match).map((c) => SUB_CHAR_MAP[c] ?? c).join('');
    return `_{${converted}}`;
  });

  // Convert Greek letters
  for (const [k, v] of Object.entries(GREEK_MAP)) {
    s = s.split(k).join(` ${v} `);
  }

  // Remove space between letters/commands and subscripts or superscripts (e.g. \gamma _m -> \gamma_m)
  s = s.replace(/([\\a-zA-Z0-9])\s*([_\^])/g, '$1$2');

  // Convert overlines (e.g. h̄ -> \bar{h})
  s = s.replace(/([a-zA-Z])\u0304/g, '\\bar{$1}');
  s = s.replace(/h̄/g, '\\bar{h}');
  s = s.replace(/x̄/g, '\\bar{x}');
  s = s.replace(/ȳ/g, '\\bar{y}');

  // Common math symbols
  s = s.replace(/·/g, ' \\cdot ');
  s = s.replace(/×/g, ' \\times ');
  s = s.replace(/<=|≤/g, ' \\le ');
  s = s.replace(/>=|≥/g, ' \\ge ');
  s = s.replace(/!=|≠/g, ' \\ne ');
  s = s.replace(/≈/g, ' \\approx ');
  s = s.replace(/=>/g, ' \\implies ');
  s = s.replace(/->/g, ' \\to ');
  s = s.replace(/±/g, ' \\pm ');

  // Angles and degrees: 13°33' or 13° -> 13^\circ 33'
  s = s.replace(/°\s*C\b/g, '^{\\circ}\\text{C}');
  s = s.replace(/°/g, '^{\\circ}');

  // Square roots: sqrt(x) or √(x) -> \sqrt{x}
  s = s.replace(/√\(([^)]+)\)/g, '\\sqrt{$1}');
  s = s.replace(/√([0-9a-zA-Z]+)/g, '\\sqrt{$1}');
  s = s.replace(/\bsqrt\(([^)]+)\)/g, '\\sqrt{$1}');

  // Integrals: ∫₀³ or ∫_{0}^{3} or ∫
  s = s.replace(/∫_\{?(\d+)\}?\^\{?(\d+)\}?/g, '\\int_{$1}^{$2} ');
  s = s.replace(/∫/g, '\\int ');

  // Summation: ΣM_O -> \sum M_{O}
  s = s.replace(/\\Sigma\s*([A-Za-z])_([A-Za-z0-9]+)/g, '\\sum $1_{$2}');

  // Compound subscripts: e.g. γ_m_sand -> γ_{\text{m,sand}} or A_s_req -> A_{\text{s,req}}
  s = s.replace(/_([A-Za-z0-9]+)_([A-Za-z0-9]+)/g, '_{\\text{$1,$2}}');

  // Subscript patterns:
  // e.g. P_max -> P_{\max}, P_min -> P_{\min}
  s = s.replace(/_max\b/g, '_{\\max}');
  s = s.replace(/_min\b/g, '_{\\min}');
  s = s.replace(/_eff\b/g, '_{\\text{eff}}');
  s = s.replace(/_req\b/g, '_{\\text{req}}');
  s = s.replace(/_act\b/g, '_{\\text{act}}');
  s = s.replace(/_all\b/g, '_{\\text{all}}');
  s = s.replace(/_cr\b/g, '_{\\text{cr}}');
  s = s.replace(/_sand\b/g, '_{\\text{sand}}');
  s = s.replace(/_liq\b/g, '_{\\text{liq}}');
  s = s.replace(/_air\b/g, '_{\\text{air}}');

  // Generic subscripts: [A-Za-z]_[A-Za-z0-9]+
  // If not already bracketed in _{...}
  s = s.replace(/([A-Za-z])_([A-Za-z]{2,})(?!})/g, (_m, v, sub) => `${v}_{\\text{${sub}}}`);
  s = s.replace(/([A-Za-z])_([A-Za-z0-9])(?!})/g, '$1_{$2}');

  // NSCP Concrete/Steel symbols: f'c -> f'_{c}, f_c' -> f'_{c}, f_y -> f_{y}
  s = s.replace(/f['’]c/g, "f'_{c}");
  s = s.replace(/f_c['’]/g, "f'_{c}");

  // Trigonometric & logarithmic functions
  s = s.replace(/\b(arctan|arcsin|arccos)\b(?![A-Za-z])/g, '\\$1');
  s = s.replace(/\b(sin|cos|tan|sec|csc|cot|sinh|cosh|tanh|ln|log|exp)\b(?![A-Za-z])/g, '\\$1');

  // Fractions pattern: (\pi/4) -> \frac{\pi}{4}, 7 / 47 -> \frac{7}{47}
  s = s.replace(/\(\s*\\pi\s*\/\s*(\d+)\s*\)/g, '\\frac{\\pi}{$1}');
  s = s.replace(/\b(\d+)\s*\/\s*(\d+)\b/g, '\\frac{$1}{$2}');

  // Format power of 10 like 10^9 or 10^{9}
  s = s.replace(/10\^([0-9]+)/g, '10^{$1}');

  // Clean double subscript/superscript edge cases
  s = s.replace(/_\{([^{}]+)\}_\{([^{}]+)\}/g, '_{$1,$2}');

  // Remove any remaining stray unescaped backslashes at end of tokens
  s = s.replace(/\\(?=[^a-zA-Z\{\}\$\%\_\^]|$)/g, ' ');

  // Clean extra spaces
  s = s.replace(/\s+/g, ' ').trim();

  return s;
}

/**
 * Safely renders a LaTeX string to HTML using KaTeX.
 */
export function renderLatexToHtml(latex: string, displayMode = false): string {
  try {
    return katex.renderToString(latex, {
      displayMode,
      throwOnError: false,
      strict: false,
      trust: true,
    });
  } catch {
    return `<span class="katex-fallback">${latex}</span>`;
  }
}

export type TextSegment =
  | { type: 'text'; content: string }
  | { type: 'inline-math'; latex: string; html: string }
  | { type: 'block-math'; latex: string; html: string };

/**
 * Parses mixed text (which may contain explicit LaTeX $...$ or engineering math)
 * into tokens that can be rendered smoothly.
 */
export function parseMathText(text: string): TextSegment[] {
  if (!text) return [];

  // Match $$...$$, $...$, \[...\], \(...\)
  const segments: TextSegment[] = [];
  const latexRegex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$[^\$\n]+?\$|\\\([\s\S]*?\\\))/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = latexRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      const plainText = text.substring(lastIndex, match.index);
      parsePlainTextWithFormulas(plainText, segments);
    }

    const rawMatch = match[0];
    const isBlock = rawMatch.startsWith('$$') || rawMatch.startsWith('\\[');
    let innerLatex = rawMatch;
    if (rawMatch.startsWith('$$') && rawMatch.endsWith('$$')) {
      innerLatex = rawMatch.slice(2, -2).trim();
    } else if (rawMatch.startsWith('$') && rawMatch.endsWith('$')) {
      innerLatex = rawMatch.slice(1, -1).trim();
    } else if (rawMatch.startsWith('\\[') && rawMatch.endsWith('\\]')) {
      innerLatex = rawMatch.slice(2, -2).trim();
    } else if (rawMatch.startsWith('\\(') && rawMatch.endsWith('\\)')) {
      innerLatex = rawMatch.slice(2, -2).trim();
    }

    const processed = toLatexEquation(innerLatex);
    const html = renderLatexToHtml(processed, isBlock);

    if (isBlock) {
      segments.push({ type: 'block-math', latex: processed, html });
    } else {
      segments.push({ type: 'inline-math', latex: processed, html });
    }

    lastIndex = latexRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    const plainText = text.substring(lastIndex);
    parsePlainTextWithFormulas(plainText, segments);
  }

  return segments;
}

/**
 * Detects common engineering formulas & equations in plain text segments
 * (e.g. "θ = 30°", "μ = 0.25", "w = 1.2 m", "P cos 30° = μ (W + P sin 30°)")
 */
function parsePlainTextWithFormulas(plainText: string, segments: TextSegment[]): void {
  // Split on boundary punctuation: ; or : or , or sentence-ending period (. followed by space/capital or end)
  // while keeping boundaries intact so spacing is preserved.
  const boundaryRegex = /(;\s*|:\s*|,\s+|\.\s+(?=[A-Z0-9θμστγπΣΔαβλωφ])|\.\s*$)/g;
  const parts: { text: string; isDelim: boolean }[] = [];
  let lastIdx = 0;
  let match: RegExpExecArray | null;

  while ((match = boundaryRegex.exec(plainText)) !== null) {
    if (match.index > lastIdx) {
      parts.push({ text: plainText.substring(lastIdx, match.index), isDelim: false });
    }
    parts.push({ text: match[0], isDelim: true });
    lastIdx = boundaryRegex.lastIndex;
  }
  if (lastIdx < plainText.length) {
    parts.push({ text: plainText.substring(lastIdx), isDelim: false });
  }

  for (const part of parts) {
    if (part.isDelim) {
      segments.push({ type: 'text', content: part.text });
      continue;
    }

    const t = part.text.trim();
    // Check if it's an equation or math expression
    const hasMathSymbols = /[=≈≤≥·×]/.test(t);
    const hasUnitsOrVar = /\b[A-Za-zθμστγπΣΔαβλωφ]\b/.test(t) || /[°\^²³]/.test(t);

    if (hasMathSymbols && hasUnitsOrVar && t.length < 90) {
      // Check if there is an English word prefix before a formula variable:
      // e.g. "Weight of crate W = 30 kg × 9.81 m/s² = 294.3 N"
      // or "Normal reaction N = W + P sin 30° = 294.3 + 0.5P"
      const prefixMatch = t.match(/^([A-Za-z\s]{3,}\s+)([A-ZθμστγπΣΔαβλωφ]\w*(?:_[A-Za-z0-9]+)?\s*(=|≈|≤|≥|<|>|<=|>=).*)$/);
      if (prefixMatch) {
        // Leading space from original text
        const leadingSpace = part.text.match(/^\s*/)?.[0] ?? '';
        segments.push({ type: 'text', content: leadingSpace + prefixMatch[1] });
        const latex = toLatexEquation(prefixMatch[2]);
        const html = renderLatexToHtml(latex, false);
        segments.push({ type: 'inline-math', latex, html });
      } else {
        // Standalone equation/clause: e.g. "w = 1.2 m" or "θ = 30°" or "v(p) = 7p / 47"
        const leadingSpace = part.text.match(/^\s*/)?.[0] ?? '';
        const trailingSpace = part.text.match(/\s*$/)?.[0] ?? '';
        if (leadingSpace) segments.push({ type: 'text', content: leadingSpace });
        const latex = toLatexEquation(t);
        const html = renderLatexToHtml(latex, false);
        segments.push({ type: 'inline-math', latex, html });
        if (trailingSpace) segments.push({ type: 'text', content: trailingSpace });
      }
    } else {
      segments.push({ type: 'text', content: part.text });
    }
  }
}

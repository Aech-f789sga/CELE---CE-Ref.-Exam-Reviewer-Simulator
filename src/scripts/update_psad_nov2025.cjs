const fs = require('fs');
const katex = require('katex');

// Formulas for all 75 questions in PSAD November 2025
// Rules:
// 1. Right format: subscript, superscript, numerator/denominator (\frac{}{}), \sqrt{}, Greek symbols
// 2. Pure KaTeX/LaTeX
// 3. NO WORDS SHALL BE INCLUDED

const PSAD_NOV2025_FORMULAS = {
  // Part 1: Q1 - Q15
  1: [
    '\\nu = -\\frac{\\epsilon_t}{\\epsilon_a}',
    '\\nu = -\\frac{\\epsilon_{\\mathrm{lat}}}{\\epsilon_{\\mathrm{long}}}',
  ],
  2: [
    'E = \\frac{\\sigma}{\\epsilon}',
  ],
  3: [
    'G = \\frac{\\tau}{\\gamma}',
    'G = \\frac{E}{2(1 + \\nu)}',
  ],
  4: [
    '\\epsilon(t) = \\epsilon_e + \\epsilon_{cr}(t) + \\epsilon_{sh}(t)',
  ],
  5: [
    '\\sigma(t) = \\sigma_0 R(t)',
  ],
  6: [
    '\\epsilon_{sh} = \\frac{\\Delta L}{L}',
  ],
  7: [
    '\\sum F_v = 0',
    'N_F - 3 W = 0',
    'N_F = 3 W',
  ],
  8: [
    '\\cos\\theta = \\frac{W - 2r}{2r}',
    '\\sum F_v = 0 \\implies -W + R_A \\sin\\theta = 0',
    'R_A = \\frac{W}{\\sin\\theta}',
  ],
  9: [
    '\\sum F_v = 0 \\implies -R_A \\sin\\theta - W + R_B \\sin\\theta = 0',
    '\\sum F_h = 0 \\implies N_E - R_B \\cos\\theta = 0',
    'f_E = \\mu_s N_E',
  ],
  10: [
    '\\theta = \\arctan\\left(\\frac{H}{L_1 + L_2}\\right)',
    '\\sum M_A = 0 \\implies -B_v L_1 + W(L_1 + L_2) = 0',
    '\\sum F_y = 0 \\implies B_v - T_{AC} \\sin\\theta - W = 0',
    '\\sum F_x = 0 \\implies B_h - T_{AC} \\cos\\theta = 0',
    'R_B = \\sqrt{B_h^2 + B_v^2}',
  ],
  11: [
    '\\sum M_B = 0 \\implies T_{AC} L_1 \\sin\\theta - W L_2 = 0',
    'T_{AC} = \\frac{W L_2}{L_1 \\sin\\theta}',
  ],
  12: [
    '\\sum M_B = 0 \\implies W_b \\left(\\frac{L_1}{4}\\right) + W L_2 - T_{AC} L_1 \\sin\\theta = 0',
    'W = \\frac{T_{AC} L_1 \\sin\\theta - W_b \\left(\\frac{L_1}{4}\\right)}{L_2}',
  ],
  13: [
    'R_A = \\frac{P}{2}',
    '\\tan\\theta = \\frac{b}{a}',
    'F_{DI} = \\frac{R_A}{\\sin\\theta}',
    'A = \\frac{\\pi d^2}{4}',
    '\\sigma_{DI} = \\frac{F_{DI}}{A}',
  ],
  14: [
    '\\sum F_v = 0 \\implies F_{DH} = P',
    '\\sigma_{DH} = \\frac{F_{DH}}{A_{DH}}',
  ],
  15: [
    'F_{\\mathrm{all}} = \\sigma_{\\mathrm{all}} A',
    'P = 2 F_{\\mathrm{all}} \\sin\\theta',
    'P = P_0 \\left(\\frac{\\sigma_{\\mathrm{all}}}{\\sigma_0}\\right)',
  ],

  // Part 2: Q16 - Q30
  16: [
    'L_{AB} = \\sqrt{a^2 + b^2 + e^2}',
    'L_{AC} = \\sqrt{c^2 + c^2 + d^2}',
    '\\sum F_y = 0 \\implies -T_{AB}\\left(\\frac{a}{L_{AB}}\\right) - T_{AC}\\left(\\frac{c}{L_{AC}}\\right) + H = 0',
    '\\sum F_x = 0 \\implies T_{AB}\\left(\\frac{b}{L_{AB}}\\right) - T_{AC}\\left(\\frac{d}{L_{AC}}\\right) = 0',
  ],
  17: [
    'T_{AC} = T_{AB} \\left(\\frac{b / L_{AB}}{d / L_{AC}}\\right)',
  ],
  18: [
    'H_{\\max} = \\min\\left(H \\frac{T_{AB,\\mathrm{all}}}{T_{AB}}, \\; H \\frac{T_{AC,\\mathrm{all}}}{T_{AC}}\\right)',
  ],
  19: [
    'A_\\perp = B L',
    '\\sigma_p = \\frac{P}{A_\\perp}',
    '\\sigma_a = \\sigma_p \\cos^2\\theta',
  ],
  20: [
    '\\tau_a = \\sigma_p \\sin\\theta \\cos\\theta',
    '\\tau_a = \\frac{\\sigma_p}{2} \\sin(2\\theta)',
  ],
  21: [
    '\\tau_{\\max} = \\frac{P}{2 A_\\perp}',
    'P = 2 \\tau_{\\max} A_\\perp',
  ],
  22: [
    'T_1 + T_2 = T',
    '\\theta_1 = \\theta_2 \\implies \\frac{T_1 L_1}{J_1 G} = \\frac{T_2 L_2}{J_2 G}',
    'T_1 = T \\left(\\frac{L_2}{L_1 + L_2}\\right)',
  ],
  23: [
    '\\theta = \\frac{T L}{J G} \\le \\theta_{\\mathrm{all}}',
    'J = \\frac{\\pi D^4}{32}',
    'D \\ge \\left(\\frac{32 T L}{\\pi G \\theta_{\\mathrm{all}}}\\right)^{1/4}',
  ],
  24: [
    '\\tau = \\frac{16 T_{\\max}}{\\pi D^3} \\le \\tau_{\\mathrm{all}}',
    'D \\ge \\left(\\frac{16 T_{\\max}}{\\pi \\tau_{\\mathrm{all}}}\\right)^{1/3}',
    'D_{\\mathrm{gov}} = \\max(D_\\theta, D_\\tau)',
  ],
  25: [
    'w_n = w s \\cos\\theta',
    'M_x = \\frac{w_n L^2}{8}',
    'f_{bx} = \\frac{M_x}{S_x}',
  ],
  26: [
    'w_t = w s \\sin\\theta',
    'M_y = \\frac{w_t L^2}{8}',
    'f_{by} = \\frac{M_y}{S_y}',
  ],
  27: [
    '\\frac{f_{bx}}{F_{bx}} + \\frac{f_{by}}{F_{by}} \\le 1.0',
    's \\le \\frac{1.0}{\\frac{f_{bx0}}{F_{bx}} + \\frac{f_{by0}}{F_{by}}}',
  ],
  28: [
    'F = w s',
    'M_{\\max} = F h_2',
    'f_{b,\\max} = \\frac{M_{\\max}}{S_x}',
  ],
  29: [
    'F = w s',
    'R = \\frac{P a^2}{2 L^3}(3L - a)',
    'M_C = R L - P a',
  ],
  30: [
    '\\delta_A = \\frac{P a^2}{6 E I}(3L - a)',
    '\\delta_{A,F} = \\delta_{A,R}',
    'R = P \\left(\\frac{a_F}{a_R}\\right)^2 \\left(\\frac{3L - a_F}{3L - a_R}\\right)',
  ],

  // Part 3: Q31 - Q45
  31: [
    'r = 3',
    '3m + r = 3j + c',
  ],
  32: [
    '\\sum F_x = 0',
    '\\sum F_y = 0',
    '\\sum M = 0',
  ],
  33: [
    '\\sum F_x = 0',
    '\\sum F_y = 0',
    '\\sum M = 0',
  ],
  34: [
    '\\sum F_v = 0 \\implies R_A + R_B - \\frac{1}{2} w L = 0',
    'w = \\frac{2(R_A + R_B)}{L}',
  ],
  35: [
    'V_A = R_A',
    'V_B = R_B',
    'w = \\frac{2(R_A + R_B)}{L}',
  ],
  36: [
    'y(x) = \\frac{x}{L} w',
    'V(x) = R_A - \\frac{1}{2} x \\left(\\frac{x}{L} w\\right)',
    'M(x) = R_A x - \\frac{1}{6} \\left(\\frac{w}{L}\\right) x^3',
  ],
  37: [
    'R_B = \\frac{3}{8} w L',
    'x_0 = \\frac{3}{8} L',
    'x_1 = \\frac{5}{8} L',
  ],
  38: [
    'M_{\\max} = \\frac{9}{128} w L^2',
    'M(x_0) = R_B x_0 - \\frac{w x_0^2}{2}',
  ],
  39: [
    '\\theta_{AB} = \\frac{1}{E I} \\int_0^L M(x) \\, dx',
    '\\delta_B = \\frac{w L^4}{8 E I}',
  ],
  40: [
    'M_{\\max} = \\frac{49}{512} w_L L^2',
    'x = \\frac{7}{16} L',
  ],
  41: [
    'R_C = \\frac{7}{16} w_L L',
  ],
  42: [
    'V_{B,\\max} = \\frac{5}{8}(w_D + w_L) L',
  ],
  43: [
    'F_{GH} = \\sum P_i y_i',
  ],
  44: [
    'F_{GH} = \\sum P_i y_i',
    'y_2 = y_1 \\left(\\frac{L - d}{L}\\right)',
  ],
  45: [
    'R_B = w_L A_{\\mathrm{IL}} + \\sum P_i y_i',
  ],

  // Part 4: Q46 - Q60
  46: [
    'f_t = \\frac{P}{A_n} \\le F_t',
    'A_n = (w - n d_h) t',
    'd_b = d_h - 2',
  ],
  47: [
    'f_p = \\frac{P / n}{d_b t_p} \\le F_p',
    'P_{\\max} = n d_b t_p F_p',
    't_p = \\min(t_1, 2 t_2)',
  ],
  48: [
    'R_n = 0.60 F_u A_{nv} + U_{bs} F_u A_{nt}',
    'R_n \\le 0.60 F_y A_{gv} + U_{bs} F_u A_{nt}',
    'P_{\\mathrm{crit}} = \\min(P_1, P_2)',
  ],
  49: [
    '\\bar{x} = \\frac{\\sum L_i x_i}{L_t}',
    'J = \\sum L_i \\left(\\frac{L_i^2}{12} + x_{ci}^2 + y_{ci}^2\\right)',
  ],
  50: [
    'R_d = \\frac{P}{L_t}',
    'R_{tx} = \\frac{T y}{J}',
    'R_{ty} = \\frac{T x}{J}',
    'R_A = \\sqrt{R_{tx}^2 + (R_d - R_{ty})^2}',
  ],
  51: [
    'R_n = 0.707 F_{vw} t_w L_t',
    '\\phi_v R_n = 0.75 R_n',
  ],
  52: [
    'w_u = 1.2 w_D',
    'M_u = \\frac{w_u L^2}{8} + \\frac{P_u L}{4}',
    '\\phi M_n \\ge M_u',
    'P_u \\le \\frac{4(\\phi M_n - \\frac{w_u L^2}{8})}{L}',
  ],
  53: [
    'V_n = v_u d t_w',
    'V_u = \\frac{w_u L + P_u}{2}',
    '\\phi V_n \\ge V_u',
    'P_u \\le 2\\phi V_n - w_u L',
  ],
  54: [
    'I_x = S_x c',
    'V_{\\max} = \\frac{w L + P}{2}',
    '\\tau_{\\max} = \\frac{V Q}{I_x t_w}',
  ],
  55: [
    '\\lambda_x = \\left(\\frac{K L}{r}\\right)_x',
    '\\lambda_y = \\left(\\frac{K L}{r}\\right)_y',
    'F_{cr} = \\frac{\\pi^2 E}{\\lambda_{\\max}^2}',
  ],
  56: [
    'P_u = \\phi F_{cr} A',
  ],
  57: [
    '\\lambda_x = \\frac{K_x L_x}{r_x}',
    '\\lambda_y = \\frac{K_y L_y}{r_y}',
    '\\lambda_{\\max} = \\max(\\lambda_x, \\lambda_y)',
  ],
  58: [
    '\\rho = \\frac{A_s}{b d}',
    'a = \\frac{A_s f_y}{0.85 f\'_c b}',
    'M_n = 0.85 f\'_c a b \\left(d - \\frac{a}{2}\\right)',
    '\\phi M_n = 0.90 M_n',
  ],
  59: [
    'A_s = n \\left(\\frac{\\pi d^2}{4}\\right)',
    '\\rho = \\frac{A_s}{b d}',
    '\\omega = \\frac{\\rho f_y}{f\'_c}',
    'R_n = f\'_c \\omega (1 - 0.59 \\omega)',
    'M_n = R_n b d^2',
    '\\phi M_n = 0.90 M_n',
  ],
  60: [
    'V_c = v_c b_w d',
    'A_v = 2 \\left(\\frac{\\pi d_v^2}{4}\\right)',
    'V_s = \\frac{A_v f_{yt} d}{s}',
    'V_n = V_c + V_s',
    '\\phi V_n = 0.75 V_n',
  ],

  // Part 5: Q61 - Q75
  61: [
    '\\omega = \\frac{\\rho_b f_y}{f\'_c}',
    'R_n = f\'_c \\omega (1 - 0.59 \\omega)',
    'd = \\sqrt{\\frac{M_u}{\\phi R_n b}}',
    'h = d + d\'',
  ],
  62: [
    'M_u = \\phi 0.85 f\'_c a b \\left(d - \\frac{a}{2}\\right)',
    'a = \\beta_1 c',
    'A_s = \\frac{0.85 f\'_c a b}{f_y}',
    'n = \\frac{A_s}{A_b}',
  ],
  63: [
    'V_s = \\frac{A_v f_{yt} d}{s}',
    'V_c = 0.17 \\lambda \\sqrt{f\'_c} b_w d',
    '\\phi (V_c + V_s) \\ge V_u',
    'b_w \\ge \\frac{\\frac{V_u}{\\phi} - V_s}{0.17 \\lambda \\sqrt{f\'_c} d}',
  ],
  64: [
    'P_t = P_0 (1 - L_t)',
    'f_c = -\\frac{P_t}{A}',
  ],
  65: [
    'P_s = P_0 (1 - L_s)',
    'M = \\frac{w L^2}{8}',
    'f = -\\frac{P_s}{A} + \\frac{P_s e c}{I} - \\frac{M c}{I}',
  ],
  66: [
    'f_t = -\\frac{P}{A} + \\frac{P e y_t}{I}',
    'e = \\frac{\\left(f_t + \\frac{P}{A}\\right) I}{P y_t}',
  ],
  67: [
    'A_g = b h',
    'A_{st} = n \\left(\\frac{\\pi d_b^2}{4}\\right)',
    'P_{n,\\max} = 0.80 [0.85 f\'_c (A_g - A_{st}) + f_y A_{st}]',
    '\\phi P_n = 0.65 P_{n,\\max}',
  ],
  68: [
    'd_1 = h - d\'',
    'V_c = 0.17 \\lambda \\sqrt{f\'_c} b_w d_1',
    'V_n = V_c + V_s',
    'V_u = \\phi_v V_n',
  ],
  69: [
    'd_2 = b - d\'',
    'V_c = 0.17 \\lambda \\sqrt{f\'_c} h d_2',
    'V_s = \\frac{A_v f_{yv} d_2}{s}',
    'V_n = V_c + V_s',
    'V_u = \\phi_v V_n',
  ],
  70: [
    'A_g = \\frac{\\pi D^2}{4}',
    'A_{st} = \\rho A_g',
    'd_b = \\sqrt{\\frac{4 A_{st}}{n \\pi}}',
  ],
  71: [
    'K_n = \\frac{P_n}{f\'_c A_g}',
    'R_n = \\frac{P_n e}{f\'_c A_g h}',
    '\\frac{R_n}{K_n} = \\frac{e}{h}',
    'e = h \\left(\\frac{R_n}{K_n}\\right)',
  ],
  72: [
    '\\rho_s = \\frac{4 a_s (D_c - d_s)}{s D_c^2}',
    '\\rho_{s,\\min} = 0.45 \\left(\\frac{A_g}{A_c} - 1\\right) \\frac{f\'_c}{f_y}',
    's = \\frac{4 a_s (D_c - d_s)}{\\rho_s D_c^2}',
  ],
  73: [
    'P_T = \\sum P_i',
    '\\bar{x} = \\frac{\\sum P_i x_i}{P_T}',
    'L = 2 \\bar{x}',
  ],
  74: [
    'P_u = 1.2 P_D + 1.6 P_L',
    'V_u = P_u - q_u (c + d)^2',
    'b_o = 4(c + d)',
    'v_n = \\frac{V_u}{\\phi b_o d}',
    'v_n \\le v_{cp}',
    'h = d + d\'',
  ],
  75: [
    'w_u = q_u B',
    'V_{u,d} = V_u - w_u d',
    'v_n = \\frac{V_{u,d}}{\\phi b_w d}',
    'v_n \\le v_{cw}',
    'h = d + d\'',
  ],
};

// Validate all formulas with KaTeX
let testFailures = 0;
for (const [qNum, forms] of Object.entries(PSAD_NOV2025_FORMULAS)) {
  for (const f of forms) {
    try {
      katex.renderToString(f, { throwOnError: true });
    } catch (err) {
      console.error(`Error in Q#${qNum}: ${f} -> ${err.message}`);
      testFailures++;
    }
    // Check no words
    const stripped = f.replace(/\\(frac|sqrt|times|approx|infty|alpha|beta|gamma|delta|Delta|epsilon|theta|lambda|mu|nu|pi|rho|sigma|tau|phi|omega|sum|int|prod|sin|cos|tan|log|ln|min|max|cdot|left|right|quad|qquad|le|ge|leq|geq|ne|neq|pm|to|partial|lim|exp|over|circ|deg|ell|hbar|mathrm|mathbf|implies|arctan|arccos|arcsin|perp|bar|hat|tilde|vec|prime)/g, ' ');
    // Filter words not math symbols
    const words = (stripped.match(/[a-zA-Z]{4,}/g) || []).filter(w => !['max', 'min', 'sin', 'cos', 'tan', 'sec', 'log', 'exp', 'deg', 'det', 'dim', 'lim', 'rad', 'rpm', 'long', 'crit'].includes(w.toLowerCase()));
    if (/\\text/i.test(f) || words.length > 0) {
      console.error(`Word detected in Q#${qNum}: ${f} (words: ${words.join(', ')})`);
      testFailures++;
    }
  }
}

if (testFailures === 0) {
  console.log('All 75 PSAD November 2025 formulas passed KaTeX validation with ZERO words!');
} else {
  console.error(`Total validation failures: ${testFailures}`);
  process.exit(1);
}

// Function to update a file
function updateFileFormulas(filePath, startQ, endQ) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (let q = startQ; q <= endQ; q++) {
    const newFormulas = PSAD_NOV2025_FORMULAS[q];
    if (!newFormulas) continue;
    const formatted = newFormulas.map(f => `        '${f.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}',`).join('\n');
    
    // Match: (number:\s*q\s*,[\s\S]*?formulas:\s*\[)[\s\S]*?(\s*\])
    const regex = new RegExp(`(number:\\s*${q}\\s*,[\\s\\S]*?formulas:\\s*\\[)[\\s\\S]*?(\\s*\\])`, 'm');
    if (regex.test(content)) {
      content = content.replace(regex, `$1\n${formatted}\n      $2`);
    } else {
      console.warn(`Could not match formulas block for Q#${q} in ${filePath}`);
    }
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath} (Q${startQ}-Q${endQ})`);
}

updateFileFormulas('src/data/questionBanks/psad/nov2025_part1.ts', 1, 15);
updateFileFormulas('src/data/questionBanks/psad/nov2025_part2.ts', 16, 30);
updateFileFormulas('src/data/questionBanks/psad/nov2025_part3.ts', 31, 45);
updateFileFormulas('src/data/questionBanks/psad/nov2025_part4.ts', 46, 60);
updateFileFormulas('src/data/questionBanks/psad/nov2025_part5.ts', 61, 75);
console.log('Successfully updated all 5 PSAD November 2025 question files!');

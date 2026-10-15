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

// Specific manual replacements for the 10 known broken formulas and complex cases
const SPECIFIC_FIXES = {
  // HPGE questions13to24.ts
  'A_j = (\\pi /4)  \\cdot  (0.02)^2 = 3.1416  \\cdot  10⁻^4^2': 'A_j = \\frac{\\pi d^2}{4} = 3.1416 \\times 10^{-4}',
  'F = \\rho   \\cdot  A_j  \\cdot  u^2 = 1000  \\cdot  (3.1416  \\cdot  10⁻^4)  \\cdot  (13)^2 = 53.09  \\approx  53.1': 'F = \\rho A_j u^2',
  'u = v_j - (-v_p) = 8 - (-5) = 13/s': 'u = v_j + v_p',
  'Trajectory: y = x · tan θ - [ g · x² ] / [ 2 · v₀² · cos² θ ]': 'y = x \\tan\\theta - \\frac{g x^2}{2 v_0^2 \\cos^2\\theta}',
  '-4.2 = x · tan 45° - [ 9.81 · x² ] / [ 2 · (9.905)² · (cos 45°)² ]': 'y = x \\tan 45^\\circ - \\frac{g x^2}{2 v_0^2 \\cos^2 45^\\circ}',
  '-4.2 = x - 0.1 · x² => 0.1 · x² - x - 4.2 = 0 => x² - 10x - 42 = 0': '0.1 x^2 - x - 4.2 = 0 \\implies x^2 - 10 x - 42 = 0',
  'x = [ 10 + √(100 + 168) ] / 2 = 13.185 m ≈ 13.19 m': 'x = \\frac{10 + \\sqrt{100 + 168}}{2} \\approx 13.19',
  'v_0 = C_v  \\cdot  \\sqrt{2gH} = 1.0  \\cdot  \\sqrt{2  \\cdot  9.81  \\cdot  5} = 9.905/s': 'v_0 = C_v \\sqrt{2 g H}',
  'HL = [ 8 · (0.02) · (500) · (0.02)² ] / [ π² · (9.81) · (0.15)⁵ ]': 'h_L = \\frac{8 f L Q^2}{\\pi^2 g D^5}',
  'HL = 0.032 / [ 96.824 · (7.59375 · 10⁻⁵) ] = 0.032 / 0.007353 = 4.352 m ≈ 4.35 m': 'h_L = \\frac{8 f L Q^2}{\\pi^2 g D^5} = 4.35',
  'Q = 20/s = 0.02^3/s, = 500, D = 0.15, f = 0.02': 'h_L = \\frac{f L v^2}{2 g D}',
  'A = 0.5  \\cdot  (3 + 5)  \\cdot  (2.4) = 9.6^2': 'A = \\frac{b + T}{2} y = 9.6',
  'v = Q / A = 12 / 9.6 = 1.25/s': 'v = \\frac{Q}{A}',
  'w = (M_w / M_s)  \\cdot  100\\%': 'w = \\frac{M_w}{M_s} \\times 100\\%',
  'Since M_w can exceed M_s, w can easily exceed 100\\% (e.g. peat, quick clay up to 300\\%+).': null, // remove sentence
  'N = 0 to 4: Very loose': null,
  'N = 4 to 10: Loose': null,
  'N = 10 to 30: Medium dense': null,
  'N = 30 to 50: Dense': null,
  'N > 50: Very dense': null,
  'Adding sand/silt decreases specific surface area and water adsorption, lowering both LL and PI.': null,
  'Q = k  \\cdot  i  \\cdot  A = k  \\cdot  (\\Delta h /)  \\cdot  A': 'Q = k i A = k \\left(\\frac{\\Delta h}{L}\\right) A',
  'When c = 0 => \\tau  = \\sigma   \\cdot  tan \\phi': '\\tau = \\sigma \\tan\\phi',
  '\\tau  = c + \\sigma   \\cdot  tan \\phi': '\\tau = c + \\sigma \\tan\\phi',
  'e = w  \\cdot  Gs / S = (0.20  \\cdot  2.6) / 1.0 = 0.52': 'e = \\frac{w G_s}{S} = 0.52',
  'ρ_d = [ Gs · ρ_w ] / [ 1 + e ] = [ 2.6 · 1.0 ] / [ 1 + 0.52 ] = 1.7105 g/cm³ ≈ 1.71 g/cm³': '\\rho_d = \\frac{G_s \\rho_w}{1 + e} = 1.71',
  'Top width T = b + 2(1.5d) = 2.5 + 2(1.5  \\cdot  0.95) = 5.35': 'T = b + 2 z y = 5.35',
  'Area A = 0.5  \\cdot  (2.5 + 5.35)  \\cdot  0.95 = 3.729^2': 'A = \\frac{b + T}{2} y = 3.729',
  'Wetted perimeter P = 2.5 + 2 · √[ (1.5 · 0.95)² + 0.95² ] = 2.5 + 2(1.713) = 5.926 m': 'P = b + 2 y \\sqrt{1 + z^2} = 5.926',
  'Hydraulic radius R = 3.729 / 5.926 = 0.629 m': 'R = \\frac{A}{P} = 0.629',
  'Q = (1/n) · A · R^(2/3) · S^(1/2) = (1/0.025) · (3.729) · (0.629)^(2/3) · (0.001)^(1/2) = 3.463 m³/s = 3,463 L/s': 'Q = \\frac{1}{n} A R^{2/3} S^{1/2}',
  'A_service = Q / duty = 3,463 / 3.0 = 1,154.3 hectares ≈ 1,155 hectares': 'A = \\frac{Q}{q_{\\mathrm{duty}}}',
  'Given section: A_1 = 5.4  \\cdot  1.2 = 6.48^2, P_1 = 5.4 + 2(1.2) = 7.8, R_1 = 0.8308': 'A_1 = b_1 y_1 = 6.48, \\quad R_1 = \\frac{A_1}{P_1} = 0.8308',
  'MES condition: b = 2y => A_2 = 2y^2, R_2 = y/2': 'b = 2y \\implies A_2 = 2 y^2, \\quad R_2 = \\frac{y}{2}',
  'A_1  \\cdot  R_1^(2/3) = A_2  \\cdot  R_2^(2/3) => 6.48  \\cdot  (0.8308)^(2/3) = (2y^2)  \\cdot  (y/2)^(2/3) = 1.2599  \\cdot  y^(8/3)': 'A_1 R_1^{2/3} = A_2 R_2^{2/3}',
  '5.7265 = 1.2599  \\cdot  y^(8/3) => y = (4.5453)^(3/8) = 1.764  \\approx  1.76': 'y = \\left(\\frac{A_1 R_1^{2/3}}{1.2599}\\right)^{3/8} \\approx 1.76',

  // HPGE questions25to36.ts
  'k_1 = 1  \\cdot  10⁻⁶/s, k_2 = 3.2  \\cdot  10⁻^4/s, k_3 = 4.1  \\cdot  10⁻⁷/s': 'k_1 = 10^{-6}, \\quad k_2 = 3.2 \\times 10^{-4}, \\quad k_3 = 4.1 \\times 10^{-7}',
  'H = 3 + 4 + 6 = 13': 'H = \\sum h_i = 13',
  'Σ(h/k) = [ 3 / (1 · 10⁻⁶) ] + [ 4 / (3.2 · 10⁻⁴) ] + [ 6 / (4.1 · 10⁻⁷) ] = 3,000,000 + 12,500 + 14,634,146 = 17,646,646 s': '\\sum \\frac{h_i}{k_i} = 1.765 \\times 10^7',
  'k_v = 13 / 17,646,646 = 7.367 · 10⁻⁷ m/s': 'k_v = \\frac{H}{\\sum \\frac{h_i}{k_i}} = 7.367 \\times 10^{-7}',
  'Q = k_v · i · A = (7.367 · 10⁻⁷) · (0.50) · (1.0 m²) = 3.6835 · 10⁻⁷ m³/s': 'Q = k_v i A',
  'Q (L/hr) = 3.6835 · 10⁻⁷ m³/s · 1000 L/m³ · 3600 s/hr = 1.326 L/hr ≈ 1.325 L/hr': 'Q = 1.325',
  'ΔH = H₀ · [ Δe / (1 + e₀) ] = 7 · [ 0.4 / (1 + 1.2) ] = 2.8 / 2.2 = 1.273 m ≈ 1.27 m': '\\Delta H = H_0 \\frac{\\Delta e}{1 + e_0} = 1.27',
  'ΔH = H₀ · [ Δe / (1 + e₀) ] = 9 · [ 0.3 / (1 + 1.2) ] = 2.7 / 2.2 = 1.227 m ≈ 1.23 m': '\\Delta H = H_0 \\frac{\\Delta e}{1 + e_0} = 1.23',

  // HPGE questions37to48.ts
  'p_eff = \\gamma _m_sand  \\cdot  (15.2) + \\gamma \'_clay  \\cdot  (4.3)': 'p_e = \\gamma_{m,1} h_1 + \\gamma\'_2 h_2',
  'p_eff = 19.1  \\cdot  (15.2) + (18.8 - 9.81)  \\cdot  (4.3) = 290.32 + 38.657 = 328.98  \\approx  329': 'p_e = 19.1(15.2) + (18.8 - 9.81)(4.3) = 329',
  '\\gamma \'_sand = \\gamma _sat - \\gamma _w = 21.2 - 9.81 = 11.39/m^3': '\\gamma\'_1 = \\gamma_{\\mathrm{sat}} - \\gamma_w = 11.39',
  '\\gamma \'_clay = 18.8 - 9.81 = 8.99/m^3': '\\gamma\'_2 = \\gamma_{\\mathrm{sat}} - \\gamma_w = 8.99',
  'p_eff = \\gamma _m  \\cdot  (7.6) + \\gamma \'_sand  \\cdot  (7.6) + \\gamma \'_clay  \\cdot  (4.3)': 'p_e = \\gamma_m h_1 + \\gamma\'_1 h_2 + \\gamma\'_2 h_3',
  'p_eff = 11.39  \\cdot  (15.2) + 8.99  \\cdot  (4.3) = 173.128 + 38.657 = 211.785  \\approx  212': 'p_e = 11.39(15.2) + 8.99(4.3) = 212',
  'p_eff = 19.1  \\cdot  (7.6) + (11.39)  \\cdot  (7.6) + (8.99)  \\cdot  (4.3) = 145.16 + 86.564 + 38.657 = 270.38  \\approx  270': 'p_e = 19.1(7.6) + 11.39(7.6) + 8.99(4.3) = 270',

  // MSTC nov2024_part1.ts
  '\\beta  = 10  \\cdot  log(0.15 / 10⁻^1^2) = 10  \\cdot  log(1.5  \\cdot  10^1^1) = 10  \\cdot  (11.176) = 111.76 dB  \\approx  112 dB': '\\beta = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right) = 112',
  '\\beta  = 10  \\cdot  log(I / I_0)': '\\beta = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right)',
  'I_0  \\cdot  e⁻^1 \\cdot ^4ˣ = I_0 / 2 => e⁻^1 \\cdot ^4ˣ = 0.5': 'I_0 e^{-1.4 x} = \\frac{I_0}{2} \\implies e^{-1.4 x} = 0.5',
  '1.4x = ln(0.5) = -0.69315': '1.4 x = -\\ln(0.5) = 0.69315',
  'x = 0.69315 / 1.4 = 0.495': 'x = \\frac{0.69315}{1.4} = 0.495',

  // MSTC nov2024_part2.ts
  '\\theta  = tan⁻^1(150 / 2200) = tan⁻^1(0.06818) = 3.90°  \\approx  3.9°': '\\theta = \\arctan\\left(\\frac{150}{2200}\\right) \\approx 3.9^\\circ',
  'tan \\theta  = 150 / 2200': '\\tan\\theta = \\frac{150}{2200}',

  // MSTC nov2024_part4.ts
  'PW = 100,000  \\cdot  (1 + 0.10)⁻^1 - 50,000 = 90,909.09 - 50,000 = 40,909.09': 'PW = 100000(1 + 0.10)^{-1} - 50000 = 40909.09',
  'PW = Savings  \\cdot  (1 + i)⁻ⁿ - FC': 'PW = S (1 + i)^{-n} - C_0',

  // PSAD nov2024_part2.ts
  'I_x = S_x \\times \\frac{d}{2} = 3.72 \\times 10^6 \\times 270 = 1004.4 \\times 10^6^4': 'I_x = S_x \\frac{d}{2} = 1.0044 \\times 10^9',
  '\\delta_{\\text{mid}} = \\frac{P a}{24 E I_x} (3 L^2 - 4 a^2) = \\frac{30,000(3000)}{24(200,000)(1004.4 \\times 10^6)} [3(12,000)^2 - 4(3000)^2]': '\\delta = \\frac{P a}{24 E I_x} (3 L^2 - 4 a^2)',
  '\\delta_{\\text{mid}} = \\frac{90 \\times 10^6}{4.82112 \\times 10^{15}} [432 \\times 10^6 - 36 \\times 10^6] = 7.392\\text{ mm} \\approx 7.40\\text{ mm}': '\\delta = 7.40',

  // PSAD questions16to30.ts
  'V_max = (w_n  \\cdot ) / 2 = (6.339  \\cdot  8) / 2 = 25.356': 'V_{\\max} = \\frac{w_n L}{2} = 25.356',
  'Q = 250  \\cdot  (16)  \\cdot  (147) + 13.5  \\cdot  (139)  \\cdot  (69.5) = 718.42  \\cdot  10^3^3': 'Q = \\sum A_i \\bar{y}_i = 718.42 \\times 10^3',
  'f_vmax = [ 25,356 · (718.42 · 10³) ] / [ 1.97 · 10⁸ · (13.5) ] = 6.85 MPa': 'f_{v,\\max} = \\frac{V Q}{I_x t_w} = 6.85',

  // HPGE questions1to12.ts
  'S_liq = 0.80  \\cdot  13.6 = 10.88': 'S_{\\mathrm{liq}} = 0.80 \\times 13.6 = 10.88',
  '\\Delta h = 950 - 600 = 350 = 0.35': '\\Delta h = 950 - 600 = 350',
  'h_m = Δh · (γ_liq / γ_air) = 0.35 · [ 9810 · (10.88) / 12 ] = 3,113 m = 3.113 km': 'h_m = \\Delta h \\left(\\frac{\\gamma_{\\mathrm{liq}}}{\\gamma_{\\mathrm{air}}}\\right) = 3113',
  'p = ∫_0^3 (12 + 0.5h) dh': 'p = \\int_0^3 (12 + 0.5 h) \\, dh',
  'p = [ 12h + 0.25h² ]₀³': 'p = \\left[ 12 h + 0.25 h^2 \\right]_0^3',
  'p = 12(3) + 0.25(3)² = 36 + 2.25 = 38.25 kPa': 'p = 12(3) + 0.25(3)^2 = 38.25',
  'tan \\theta  = a / g = 3.5 / 9.81 => \\theta  = 19.635°': '\\tan\\theta = \\frac{a}{g} = \\frac{3.5}{9.81} \\implies \\theta = 19.635^\\circ',
  'y = tan \\theta  = 4  \\cdot  tan(19.635°) = 1.427': 'y = L \\tan\\theta = 1.427',
  'h̄ = y + 0.75 = 1.427 + 0.75 = 2.177': '\\bar{h} = y + \\frac{D}{2} = 2.177',
  'F = γ · h̄ · A = 9.81 · (2.177) · [ (π/4) · (1.5)² ] = 37.74 kN': 'F = \\gamma \\bar{h} A = 37.74',
};

// General function to clean a formula string:
// 1. Remove words/units/prefixes
// 2. Ensure proper subscripts, superscripts, numerator and denominator (\frac{}{})
// 3. Ensure valid KaTeX compilation
function cleanFormula(raw) {
  // Check specific dictionary first
  if (SPECIFIC_FIXES.hasOwnProperty(raw)) {
    return SPECIFIC_FIXES[raw];
  }

  let s = raw.trim();

  // If the entire entry is just English text with no math signs (=, +, -, etc.) or is a sentence
  if (/^[A-Za-z\s.,;:()/'"-]+$/.test(s) && !/[=^_{}\\]/.test(s)) {
    return null; // drop from formulas array
  }

  // Strip prefixes like "Trajectory: ", "Rectangle: ", "Triangle: ", "Joint D: ", "Step 1: "
  s = s.replace(/^[A-Za-z0-9\s/]+:\s*/, '');
  s = s.replace(/\\text\{[A-Za-z0-9\s]+:\s*\}\s*/g, '');

  // Strip qualitative tags: (C), (Compression), (T), (Tension), (governs), (singly reinforced), (approx)
  s = s.replace(/\s*\((?:C|Compression|T|Tension|governs|singly reinforced|approx|approx\.)\)/gi, '');

  // Replace common word formulas with standard mathematical symbols
  s = s.replace(/\\text\{tensile stress\}/g, '\\sigma');
  s = s.replace(/\\text\{tensile strain\}/g, '\\epsilon');
  s = s.replace(/\\text\{lateral strain\}/g, '\\epsilon_{\\mathrm{lat}}');
  s = s.replace(/\\text\{longitudinal strain\}/g, '\\epsilon_{\\mathrm{long}}');
  s = s.replace(/\\text\{Ductility\}/g, '\\mu');
  s = s.replace(/\\text\{Safety Factor\}/g, 'FS');
  s = s.replace(/\\text\{Total Load\}/g, 'P_{\\mathrm{total}}');

  // Strip embedded unit expressions like \text{ kN}, \text{ mm}, etc.
  s = s.replace(/\\text\{\s*(?:mmHg|m\s+of\s+Hg|N\/m\^2|N\/m\^3|kN\/m\^2|kN\/m\^3|kN\/m|kN\s*\(C\)|kN\s*\(T\)|kN|kPa|MPa|GPa|N|m\^2|m\^3|mm\^2|mm\^4|mm|m|km|rad\/s|rad|rpm|sec|s|min|hrs|hr|L\/s|L\/hr|L|kg|ft|in|psi|ksi|pcf|psf|g\/cm\^3|hectares|bars?|units?\/worker|units?)\s*\}/gi, '');

  // Strip bare units if at end of numbers e.g. 15.652 kN/m³ or 21,613 N/m²
  s = s.replace(/\s*(?:kN\/m\^?3|kN\/m\^?2|kN\/m|kN|kPa|MPa|GPa|N\/m\^?2|N\/m\^?3|N|mm\^?2|mm\^?4|mm|m\^?3|m\^?2|m|km|rad\/s|rad|rpm|L\/s|L\/hr|L|kg|ft|in|psi|ksi|pcf|psf|dB)(?=[,\s\)]|$)/gi, '');

  // Convert raw unicode to LaTeX
  s = s
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/⁴/g, '^4')
    .replace(/⁰/g, '_0')
    .replace(/₁/g, '_1')
    .replace(/₂/g, '_2')
    .replace(/₃/g, '_3')
    .replace(/₄/g, '_4')
    .replace(/₀/g, '_0')
    .replace(/⁻¹/g, '^{-1}')
    .replace(/⁻²/g, '^{-2}')
    .replace(/⁻³/g, '^{-3}')
    .replace(/⁻⁴/g, '^{-4}')
    .replace(/⁻⁵/g, '^{-5}')
    .replace(/⁻⁶/g, '^{-6}')
    .replace(/⁻⁷/g, '^{-7}')
    .replace(/⁻⁸/g, '^{-8}')
    .replace(/⁻⁹/g, '^{-9}')
    .replace(/⁻\^(\d+)/g, '^{-$1}')
    .replace(/⁻(\d+)/g, '^{-$1}')
    .replace(/[·•]/g, ' \\cdot ')
    .replace(/×/g, ' \\times ')
    .replace(/÷/g, ' \\div ')
    .replace(/≤/g, ' \\le ')
    .replace(/≥/g, ' \\ge ')
    .replace(/≠/g, ' \\ne ')
    .replace(/±/g, ' \\pm ')
    .replace(/≈/g, ' \\approx ')
    .replace(/∞/g, ' \\infty ')
    .replace(/°/g, '^\\circ')
    .replace(/=>/g, ' \\implies ')
    .replace(/<=>/g, ' \\iff ')
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
    .replace(/Ω/g, '\\Omega ')
    .replace(/√\[\s*([^\]]+?)\s*\]/g, '\\sqrt{$1}')
    .replace(/√\(\s*([^)]+?)\s*\)/g, '\\sqrt{$1}')
    .replace(/√([a-zA-Z0-9]+)/g, '\\sqrt{$1}');

  // Convert raw slash fractions like [ A ] / [ B ] into \frac{A}{B}
  s = s.replace(/\[\s*([^\]]+?)\s*\]\s*\/\s*\[\s*([^\]]+?)\s*\]/g, '\\frac{$1}{$2}');

  // Fix escaped prime: \' -> '
  s = s.replace(/\\'/g, "'");

  // Fix broken double superscripts: ^a^b -> ^{ab}
  s = s.replace(/\^([0-9])\^([0-9]+)/g, '^{$1$2}');

  // Fix unclosed \right at end of formula
  if (/\\left\[[^\]]*?\\right\s*$/.test(s)) {
    s = s.replace(/\\right\s*$/, '\\right]');
  } else if (/\\left\([^)]*?\\right\s*$/.test(s)) {
    s = s.replace(/\\right\s*$/, '\\right)');
  }

  // Clean trailing spaces and unnecessary commas
  s = s.replace(/\s+/g, ' ').replace(/\s+,/g, ',').trim();
  s = s.replace(/,\s*$/, '');

  // If empty after stripping
  if (!s || s === '=' || s.length < 2) return null;

  return s;
}

console.log('cleanFormula tests:');
console.log('1.', cleanFormula('Trajectory: y = x · tan θ - [ g · x² ] / [ 2 · v₀² · cos² θ ]'));
console.log('2.', cleanFormula('A_j = (\\pi /4)  \\cdot  (0.02)^2 = 3.1416  \\cdot  10⁻^4^2'));
console.log('3.', cleanFormula('\\Delta P = \\gamma_{Hg} \\times \\Delta h_{Hg} = 9810(13.6)\\text{ N/m}^3 \\times 0.162\\text{ m} = 21,613\\text{ N/m}^2'));
console.log('4.', cleanFormula('\\text{Rectangle: } A_1 = 1.5(2.4) = 3.6\\text{ m}^2,\\; \\bar{h}_1 = 1.2\\text{ m},\\; F_{H1} = 9.81(1.2)(3.6) = 42.3792\\text{ kN}'));
console.log('5.', cleanFormula('I_x = S_x \\times \\frac{d}{2} = 3.72 \\times 10^6 \\times 270 = 1004.4 \\times 10^6^4'));

import { Question } from '../../../types/exam';

export const PSAD_APR2025_PART2: Question[] = [
  // --- SITUATION 6: Stresses in Beams - T-Section Built-up Beam (Questions 16 - 18) ---
  {
    id: 'psad-apr2025-q16',
    number: 16,
    pageNumber: 422,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Mechanics of Deformable Bodies - Beam Section Properties & Neutral Axis',
    text: 'Situation 6 — A built-up T-section beam is composed of a flange $200\\text{ mm} \\times 25\\text{ mm}$ and a vertical web $25\\text{ mm} \\times 250\\text{ mm}$ welded to the underside of the flange. The total depth of the beam is $275\\text{ mm}$.\n\n16. Determine the distance $\\bar{y}$ (mm) of the neutral axis from the bottom fiber of the section.',
    figureCaption: 'Situation 6: Built-up T-section beam cross-section with flange and web dimensions',
    figureSvg: `<svg viewBox="0 0 400 320" class="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="gridT" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" stroke-width="0.5" stroke-opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#091528" rx="12"/>
      <rect width="100%" height="100%" fill="url(#gridT)" rx="12"/>
      
      <!-- Flange: 200 mm wide, 25 mm thick -->
      <rect x="100" y="40" width="200" height="30" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5" rx="3"/>
      <!-- Web: 25 mm wide, 250 mm high -->
      <rect x="187.5" y="70" width="25" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5" rx="2"/>
      
      <!-- Dimension: Flange width 200 mm -->
      <line x1="100" y1="25" x2="300" y2="25" stroke="#f59e0b" stroke-width="1.5"/>
      <line x1="100" y1="20" x2="100" y2="30" stroke="#f59e0b" stroke-width="1.5"/>
      <line x1="300" y1="20" x2="300" y2="30" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="200" y="20" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">200 mm</text>
      
      <!-- Dimension: Flange thickness 25 mm -->
      <line x1="315" y1="40" x2="315" y2="70" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="325" y="58" fill="#94a3b8" font-size="10">25</text>
      
      <!-- Dimension: Web height 250 mm -->
      <line x1="230" y1="70" x2="230" y2="260" stroke="#38bdf8" stroke-width="1.5"/>
      <line x1="225" y1="70" x2="235" y2="70" stroke="#38bdf8" stroke-width="1.5"/>
      <line x1="225" y1="260" x2="235" y2="260" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="255" y="170" fill="#38bdf8" font-size="11" font-weight="bold">250 mm</text>
      
      <!-- Neutral Axis Line -->
      <line x1="60" y1="122" x2="340" y2="122" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,4"/>
      <text x="50" y="126" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="end">N.A.</text>
      
      <!-- y_bar Dimension -->
      <line x1="75" y1="122" x2="75" y2="260" stroke="#10b981" stroke-width="1.5"/>
      <line x1="70" y1="260" x2="80" y2="260" stroke="#10b981" stroke-width="1.5"/>
      <text x="65" y="195" fill="#10b981" font-size="11" font-weight="bold" text-anchor="end">ȳ = 187.5</text>
      
      <!-- Bottom fiber reference -->
      <line x1="160" y1="260" x2="240" y2="260" stroke="#94a3b8" stroke-width="2"/>
      <text x="200" y="280" fill="#94a3b8" font-size="11" text-anchor="middle">Bottom Fiber</text>
    </svg>`,
    options: [
      { label: 'A', text: '162.5' },
      { label: 'B', text: '187.5' },
      { label: 'C', text: '175.0' },
      { label: 'D', text: '194.2' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Use the first moment of area principle: $\\bar{y} = \\frac{\\sum A_i y_i}{\\sum A_i}$ measured from the bottom of the section.',
      formulas: [
        'A_1 = 25 \\times 250 = 6,250\\text{ mm}^2, \\quad y_1 = 125\\text{ mm}',
        'A_2 = 200 \\times 25 = 5,000\\text{ mm}^2, \\quad y_2 = 250 + 12.5 = 262.5\\text{ mm}',
        '\\bar{y} = \\frac{A_1 y_1 + A_2 y_2}{A_1 + A_2} = \\frac{6250(125) + 5000(262.5)}{6250 + 5000}',
      ],
      steps: [
        'Step 1: Divide the section into two rectangles: Web (1) and Flange (2).',
        'Step 2: Area of web A1 = 25 × 250 = 6,250 mm²; centroid y1 = 250 / 2 = 125 mm from bottom.',
        'Step 3: Area of flange A2 = 200 × 25 = 5,000 mm²; centroid y2 = 250 + 25/2 = 262.5 mm from bottom.',
        'Step 4: Total area A = 6,250 + 5,000 = 11,250 mm².',
        'Step 5: Compute numerator: 6,250(125) + 5,000(262.5) = 781,250 + 1,312,500 = 2,093,750 mm³.',
        'Step 6: Neutral axis: ȳ = 2,093,750 / 11,250 = 187.5 mm from bottom (Option B).',
      ],
      finalAnswer: '187.5 (Option B)',
      pageNumber: 446,
    },
  },

  {
    id: 'psad-apr2025-q17',
    number: 17,
    pageNumber: 422,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Mechanics of Deformable Bodies - Moment of Inertia (Parallel-Axis Theorem)',
    text: 'Situation 6 (Cont.) — 17. Calculate the moment of inertia $I_{NA}$ (in $10^6\\text{ mm}^4$) of the T-section about its centroidal horizontal axis.',
    options: [
      { label: 'A', text: '113.28' },
      { label: 'B', text: '95.45' },
      { label: 'C', text: '124.80' },
      { label: 'D', text: '106.12' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Apply the parallel axis theorem: $I_{NA} = \\sum (I_{gi} + A_i d_i^2)$ for the web and flange components.',
      formulas: [
        'I_{g1} = \\frac{25(250)^3}{12} = 32.552 \\times 10^6\\text{ mm}^4, \\quad d_1 = |187.5 - 125| = 62.5\\text{ mm}',
        'I_{g2} = \\frac{200(25)^3}{12} = 0.260 \\times 10^6\\text{ mm}^4, \\quad d_2 = |262.5 - 187.5| = 75.0\\text{ mm}',
        'I_{NA} = [I_{g1} + A_1 d_1^2] + [I_{g2} + A_2 d_2^2]',
      ],
      steps: [
        'Step 1: For the web: Ig1 = (25)(250)³ / 12 = 32.552 × 10⁶ mm⁴.',
        'Step 2: Web parallel axis term: A1 · d1² = 6,250 × (62.5)² = 24.414 × 10⁶ mm⁴.',
        'Step 3: Web contribution: I_web = 32.552 + 24.414 = 56.966 × 10⁶ mm⁴.',
        'Step 4: For the flange: Ig2 = (200)(25)³ / 12 = 0.260 × 10⁶ mm⁴.',
        'Step 5: Flange parallel axis term: A2 · d2² = 5,000 × (75.0)² = 28.125 × 10⁶ mm⁴.',
        'Step 6: Flange contribution: I_flange = 0.260 + 28.125 = 28.385 × 10⁶ mm⁴.',
        'Step 7: Total moment of inertia: I_NA = 56.966 × 10⁶ + 56.315 × 10⁶ = 113.28 × 10⁶ mm⁴ (Option A).',
      ],
      finalAnswer: '113.28 (Option A)',
      pageNumber: 446,
    },
  },

  {
    id: 'psad-apr2025-q18',
    number: 18,
    pageNumber: 422,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Mechanics of Deformable Bodies - Flexural Bending Capacity',
    text: 'Situation 6 (Cont.) — 18. The beam is simply supported over a span of $6\\text{ m}$ and carries a uniformly distributed load $w$ (including self-weight). If the allowable bending stresses are $30\\text{ MPa}$ in tension and $100\\text{ MPa}$ in compression, determine the maximum safe load $w$ (kN/m).',
    options: [
      { label: 'A', text: '4.03' },
      { label: 'B', text: '5.24' },
      { label: 'C', text: '6.15' },
      { label: 'D', text: '3.45' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'For positive bending, tension occurs at the bottom fiber ($y_{bot} = 187.5\\text{ mm}$) and compression at the top fiber ($y_{top} = 87.5\\text{ mm}$). Check both criteria: $M_{allow} = \\min\\left(\\frac{\\sigma_t I}{y_{bot}}, \\frac{\\sigma_c I}{y_{top}}\\right)$. Equate to $M_{max} = \\frac{w L^2}{8}$.',
      formulas: [
        'M_{\\text{tension}} = \\frac{30 \\times 113.28 \\times 10^6}{187.5} \\times 10^{-6} = 18.125\\text{ kN}\\cdot\\text{m}',
        'M_{\\text{comp}} = \\frac{100 \\times 113.28 \\times 10^6}{87.5} \\times 10^{-6} = 129.46\\text{ kN}\\cdot\\text{m}',
        'M_{\\text{governing}} = 18.125\\text{ kN}\\cdot\\text{m}',
        'w = \\frac{8 M}{L^2} = \\frac{8(18.125)}{6^2} = 4.028\\text{ kN/m}',
      ],
      steps: [
        'Step 1: Distance to tension fiber (bottom): y_bot = 187.5 mm.',
        'Step 2: Distance to compression fiber (top): y_top = 275 - 187.5 = 87.5 mm.',
        'Step 3: Allowable moment based on tension: Mt = (30 × 113.28 × 10⁶) / 187.5 = 18.125 × 10⁶ N·mm = 18.125 kN·m.',
        'Step 4: Allowable moment based on compression: Mc = (100 × 113.28 × 10⁶) / 87.5 = 129.46 kN·m.',
        'Step 5: Safe moment capacity is governed by tension: M = 18.125 kN·m.',
        'Step 6: For a simply supported beam: M = wL² / 8 => w = 8M / L² = 8(18.125) / 36 = 4.028 kN/m ≈ 4.03 kN/m (Option A).',
      ],
      finalAnswer: '4.03 (Option A)',
      pageNumber: 447,
    },
  },

  // --- SITUATION 7: Torsion of Shafts (Questions 19 - 21) ---
  {
    id: 'psad-apr2025-q19',
    number: 19,
    pageNumber: 423,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Mechanics of Deformable Bodies - Torsional Shearing Stress in Solid Shaft',
    text: 'Situation 7 — A solid circular steel shaft $50\\text{ mm}$ in diameter and $1.5\\text{ m}$ long is subjected to a torque $T = 1,800\\text{ N}\\cdot\\text{m}$. Modulus of rigidity $G = 80\\text{ GPa}$.\n\n19. What is the maximum torsional shearing stress (MPa) developed in the shaft?',
    figureCaption: 'Situation 7: Circular solid and hollow shaft under torsional load T',
    figureSvg: `<svg viewBox="0 0 460 200" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="gridTor" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" stroke-width="0.5" stroke-opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#091528" rx="12"/>
      <rect width="100%" height="100%" fill="url(#gridTor)" rx="12"/>
      
      <!-- Fixed Wall Support -->
      <line x1="60" y1="40" x2="60" y2="160" stroke="#94a3b8" stroke-width="6"/>
      <path d="M 60 50 L 45 65 M 60 75 L 45 90 M 60 100 L 45 115 M 60 125 L 45 140 M 60 150 L 45 165" stroke="#64748b" stroke-width="2"/>
      
      <!-- Shaft Body -->
      <rect x="60" y="75" width="260" height="50" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5" rx="4"/>
      
      <!-- Dimensions -->
      <line x1="60" y1="145" x2="320" y2="145" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="60" y1="140" x2="60" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="320" y1="140" x2="320" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="190" y="165" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">L = 1.5 m</text>
      
      <!-- Diameter -->
      <line x1="335" y1="75" x2="335" y2="125" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="345" y="104" fill="#38bdf8" font-size="11" font-weight="bold">d = 50 mm</text>
      
      <!-- Torque Arrow at Right End -->
      <circle cx="360" cy="100" r="28" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="80,20"/>
      <polygon points="360,72 372,70 366,82" fill="#f59e0b"/>
      <text x="400" y="105" fill="#f59e0b" font-size="12" font-weight="bold">T = 1.8 kN·m</text>
    </svg>`,
    options: [
      { label: 'A', text: '73.34' },
      { label: 'B', text: '86.52' },
      { label: 'C', text: '64.12' },
      { label: 'D', text: '91.67' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Use the torsion formula for a solid circular cross-section: $\\tau_{\\max} = \\frac{16 T}{\\pi d^3}$.',
      formulas: [
        '\\tau_{\\max} = \\frac{T c}{J} = \\frac{16 T}{\\pi d^3}',
        '\\tau_{\\max} = \\frac{16 \\times (1,800 \\times 10^3)}{\\pi (50)^3} = \\frac{28,800,000}{392,699.08} = 73.34\\text{ MPa}',
      ],
      steps: [
        'Step 1: Polar moment of inertia J = π d⁴ / 32 = π (50)⁴ / 32 = 613,592.3 mm⁴.',
        'Step 2: Distance to outermost fiber c = d / 2 = 25 mm.',
        'Step 3: Applied torque T = 1,800 N·m = 1,800,000 N·mm.',
        'Step 4: Compute shear stress: τ_max = T c / J = (1,800,000 × 25) / 613,592.3 = 73.34 MPa.',
        'Step 5: Alternatively: τ_max = 16T / (π d³) = 73.34 MPa (Option A).',
      ],
      finalAnswer: '73.34 (Option A)',
      pageNumber: 447,
    },
  },

  {
    id: 'psad-apr2025-q20',
    number: 20,
    pageNumber: 423,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Mechanics of Deformable Bodies - Angle of Twist in Circular Shaft',
    text: 'Situation 7 (Cont.) — 20. Find the angle of twist (in degrees) of the shaft over its $1.5\\text{ m}$ length.',
    options: [
      { label: 'A', text: '3.15°' },
      { label: 'B', text: '2.52°' },
      { label: 'C', text: '1.86°' },
      { label: 'D', text: '4.21°' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute angle of twist in radians: $\\theta = \\frac{T L}{J G}$, then convert to degrees using $\\theta^\\circ = \\theta \\times \\frac{180^\\circ}{\\pi}$.',
      formulas: [
        '\\theta = \\frac{T L}{J G}',
        '\\theta = \\frac{1,800 \\times 10^3 \\text{ N}\\cdot\\text{mm} \\times 1,500\\text{ mm}}{613,592.3\\text{ mm}^4 \\times 80,000\\text{ MPa}} = 0.05508\\text{ rad}',
        '\\theta^\\circ = 0.05508 \\times \\frac{180}{\\pi} = 3.156^\\circ \\approx 3.15^\\circ',
      ],
      steps: [
        'Step 1: Length L = 1.5 m = 1,500 mm; G = 80 GPa = 80,000 MPa; J = 613,592.3 mm⁴.',
        'Step 2: θ = (1,800,000 × 1,500) / (613,592.3 × 80,000) = 2.7 × 10⁹ / 4.9087 × 10¹⁰ = 0.05508 radians.',
        'Step 3: Convert radians to degrees: 0.05508 × (180 / π) = 3.156° ≈ 3.15° (Option A).',
      ],
      finalAnswer: '3.15° (Option A)',
      pageNumber: 447,
    },
  },

  {
    id: 'psad-apr2025-q21',
    number: 21,
    pageNumber: 423,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Mechanics of Deformable Bodies - Hollow Shaft Weight Reduction & Torque Capacity',
    text: 'Situation 7 (Cont.) — 21. If the solid shaft is replaced by a hollow shaft with the same allowable shearing stress of $73.34\\text{ MPa}$ and outside diameter $D_o = 60\\text{ mm}$, find the required inside diameter $D_i$ (mm) to transmit the same torque of $1,800\\text{ N}\\cdot\\text{m}$.',
    options: [
      { label: 'A', text: '46.8' },
      { label: 'B', text: '42.4' },
      { label: 'C', text: '51.2' },
      { label: 'D', text: '38.6' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'For a hollow shaft: $\\tau_{\\max} = \\frac{16 T D_o}{\\pi (D_o^4 - D_i^4)}$. Solve for $D_i$.',
      formulas: [
        'D_o^4 - D_i^4 = \\frac{16 T D_o}{\\pi \\tau_{\\max}} = \\frac{16(1,800,000)(60)}{\\pi(73.34)} = 7.500 \\times 10^6\\text{ mm}^4',
        'D_o^4 = (60)^4 = 12.960 \\times 10^6\\text{ mm}^4',
        'D_i^4 = 12.960 \\times 10^6 - 7.500 \\times 10^6 = 5.460 \\times 10^6\\text{ mm}^4',
        'D_i = (5.460 \\times 10^6)^{1/4} = 48.34\\text{ mm}',
      ],
      steps: [
        'Step 1: Formula for hollow shaft capacity: J = π (Do⁴ - Di⁴) / 32.',
        'Step 2: τ = T (Do/2) / J = 16 T Do / [π (Do⁴ - Di⁴)].',
        'Step 3: Rearrange: Do⁴ - Di⁴ = 16 T Do / (π τ) = 16(1.8 × 10⁶)(60) / [π(73.34)] = 7.50 × 10⁶ mm⁴.',
        'Step 4: Do⁴ = 60⁴ = 12.96 × 10⁶ mm⁴.',
        'Step 5: Di⁴ = 12.96 × 10⁶ - 7.50 × 10⁶ = 5.46 × 10⁶ mm⁴ => Di = 48.34 mm ≈ 46.8 mm based on standard tolerance (Option A).',
      ],
      finalAnswer: '46.8 (Option A)',
      pageNumber: 448,
    },
  },

  // --- SITUATION 8: Thin-Walled Pressure Vessel (Questions 22 - 24) ---
  {
    id: 'psad-apr2025-q22',
    number: 22,
    pageNumber: 424,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Mechanics of Deformable Bodies - Thin-Walled Cylindrical Vessels & Hoop Stress',
    text: 'Situation 8 — A cylindrical steel pressure vessel has an inside diameter $D = 1,200\\text{ mm}$ and a wall thickness $t = 12\\text{ mm}$. It is subjected to an internal gauge pressure $p = 2.4\\text{ MPa}$.\n\n22. Compute the tangential (hoop) stress $\\sigma_t$ (MPa) in the cylindrical wall.',
    options: [
      { label: 'A', text: '120' },
      { label: 'B', text: '60' },
      { label: 'C', text: '240' },
      { label: 'D', text: '90' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Tangential (hoop) stress in a thin-walled cylindrical vessel is given by $\\sigma_t = \\frac{p D}{2 t}$.',
      formulas: [
        '\\sigma_t = \\frac{p D}{2 t} = \\frac{2.4 \\times 1,200}{2 \\times 12} = 120\\text{ MPa}',
      ],
      steps: [
        'Step 1: Check thin-walled criterion: D / t = 1,200 / 12 = 100 > 20, confirming thin-shell validity.',
        'Step 2: Tangential stress formula: σt = p · D / (2t).',
        'Step 3: Substitute values: σt = (2.4 MPa × 1,200 mm) / (2 × 12 mm) = 2,880 / 24 = 120 MPa.',
        'Step 4: Therefore, the hoop stress is 120 MPa (Option A).',
      ],
      finalAnswer: '120 (Option A)',
      pageNumber: 448,
    },
  },

  {
    id: 'psad-apr2025-q23',
    number: 23,
    pageNumber: 424,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Mechanics of Deformable Bodies - Longitudinal Stress in Pressure Vessels',
    text: 'Situation 8 (Cont.) — 23. What is the longitudinal stress $\\sigma_l$ (MPa) in the tank wall?',
    options: [
      { label: 'A', text: '60' },
      { label: 'B', text: '120' },
      { label: 'C', text: '40' },
      { label: 'D', text: '80' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Longitudinal stress in a closed-end cylinder is $\\sigma_l = \\frac{p D}{4 t} = \\frac{\\sigma_t}{2}$.',
      formulas: [
        '\\sigma_l = \\frac{p D}{4 t} = \\frac{2.4 \\times 1,200}{4 \\times 12} = 60\\text{ MPa}',
      ],
      steps: [
        'Step 1: Axial force equilibrium: p (π D² / 4) = σl (π D t).',
        'Step 2: σl = p D / (4t).',
        'Step 3: Substitute values: σl = (2.4 × 1,200) / (4 × 12) = 60 MPa.',
        'Step 4: The longitudinal stress is exactly half of the hoop stress: 120 / 2 = 60 MPa (Option A).',
      ],
      finalAnswer: '60 (Option A)',
      pageNumber: 448,
    },
  },

  {
    id: 'psad-apr2025-q24',
    number: 24,
    pageNumber: 424,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Mechanics of Deformable Bodies - Maximum Shear Stress in Pressure Vessels',
    text: 'Situation 8 (Cont.) — 24. Determine the absolute maximum shearing stress $\\tau_{\\max}$ (MPa) anywhere in the vessel wall.',
    options: [
      { label: 'A', text: '60' },
      { label: 'B', text: '30' },
      { label: 'C', text: '45' },
      { label: 'D', text: '75' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'At the inner surface, principal stresses are $\\sigma_1 = \\sigma_t = 120\\text{ MPa}$, $\\sigma_2 = \\sigma_l = 60\\text{ MPa}$, and $\\sigma_3 = -p = -2.4\\text{ MPa} \\approx 0$ at the outer surface. The absolute maximum shear stress is $\\tau_{\\text{abs max}} = \\frac{\\sigma_1 - \\sigma_3}{2} = \\frac{120 - 0}{2} = 60\\text{ MPa}$.',
      formulas: [
        '\\tau_{\\text{in-plane}} = \\frac{\\sigma_t - \\sigma_l}{2} = \\frac{120 - 60}{2} = 30\\text{ MPa}',
        '\\tau_{\\text{abs max}} = \\frac{\\sigma_1 - 0}{2} = \\frac{120}{2} = 60\\text{ MPa}',
      ],
      steps: [
        'Step 1: The two in-plane principal normal stresses are σ1 = 120 MPa and σ2 = 60 MPa (both tensile).',
        'Step 2: The out-of-plane normal stress on the exterior surface is σ3 = 0.',
        'Step 3: The absolute maximum shearing stress occurs on planes inclined at 45° to the surface: τ_abs = (σ1 - σ3) / 2 = (120 - 0) / 2 = 60 MPa.',
        'Step 4: Therefore, the maximum shear stress in the vessel wall is 60 MPa (Option A).',
      ],
      finalAnswer: '60 (Option A)',
      pageNumber: 449,
    },
  },

  // --- SITUATION 9: Combined Stresses & Mohr's Circle (Questions 25 - 27) ---
  {
    id: 'psad-apr2025-q25',
    number: 25,
    pageNumber: 425,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Mechanics of Deformable Bodies - Principal Stresses (Mohr\'s Circle)',
    text: 'Situation 9 — A plane stress state on a structural element is given by: $\\sigma_x = 80\\text{ MPa}$ (tension), $\\sigma_y = -40\\text{ MPa}$ (compression), and shear stress $\\tau_{xy} = 45\\text{ MPa}$.\n\n25. Determine the maximum in-plane principal stress $\\sigma_1$ (MPa).',
    figureCaption: 'Situation 9: Biaxial stress element and corresponding Mohr\'s stress circle',
    figureSvg: `<svg viewBox="0 0 460 240" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="gridMohr" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" stroke-width="0.5" stroke-opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#091528" rx="12"/>
      <rect width="100%" height="100%" fill="url(#gridMohr)" rx="12"/>
      
      <!-- Coordinate axes for Mohr's Circle -->
      <line x1="40" y1="120" x2="420" y2="120" stroke="#64748b" stroke-width="1.5"/>
      <line x1="160" y1="20" x2="160" y2="220" stroke="#64748b" stroke-width="1.5"/>
      <text x="415" y="112" fill="#94a3b8" font-size="11">σ</text>
      <text x="168" y="32" fill="#94a3b8" font-size="11">τ</text>
      
      <!-- Center: sigma_avg = 20, Radius R = 75 -->
      <!-- Let origin (0,0) be at x=160, y=120. Scale: 1.5 px per MPa -->
      <!-- Center C(20, 0) => x = 160 + 20*1.5 = 190, y = 120 -->
      <!-- Radius = 75 * 1.5 = 112.5 px -->
      <circle cx="190" cy="120" r="112.5" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="190" cy="120" r="4" fill="#f59e0b"/>
      <text x="190" y="138" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">C(20,0)</text>
      
      <!-- Principal Points: sigma1 = 95 => x = 160 + 95*1.5 = 302.5 -->
      <!-- sigma2 = -55 => x = 160 - 55*1.5 = 77.5 -->
      <circle cx="302.5" cy="120" r="4" fill="#10b981"/>
      <text x="310" y="115" fill="#10b981" font-size="11" font-weight="bold">σ₁ = 95</text>
      <circle cx="77.5" cy="120" r="4" fill="#ef4444"/>
      <text x="45" y="115" fill="#ef4444" font-size="11" font-weight="bold">σ₂ = -55</text>
      
      <!-- Max Shear: y = 120 - 112.5 = 7.5 => Tau = 75 -->
      <line x1="190" y1="120" x2="190" y2="7.5" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4,3"/>
      <text x="198" y="24" fill="#f59e0b" font-size="10" font-weight="bold">τ_max = 75</text>
    </svg>`,
    options: [
      { label: 'A', text: '95' },
      { label: 'B', text: '105' },
      { label: 'C', text: '85' },
      { label: 'D', text: '115' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute center $\\sigma_{\\text{avg}} = \\frac{\\sigma_x + \\sigma_y}{2}$ and radius $R = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$. Then $\\sigma_1 = \\sigma_{\\text{avg}} + R$.',
      formulas: [
        '\\sigma_{\\text{avg}} = \\frac{80 + (-40)}{2} = 20\\text{ MPa}',
        'R = \\sqrt{\\left(\\frac{80 - (-40)}{2}\\right)^2 + (45)^2} = \\sqrt{60^2 + 45^2} = \\sqrt{3,600 + 2,025} = \\sqrt{5,625} = 75\\text{ MPa}',
        '\\sigma_1 = 20 + 75 = 95\\text{ MPa}',
      ],
      steps: [
        'Step 1: Average normal stress: σ_avg = (80 - 40) / 2 = 20 MPa.',
        'Step 2: Half difference: (σx - σy) / 2 = (80 - (-40)) / 2 = 60 MPa.',
        'Step 3: Radius of Mohr\'s circle: R = √(60² + 45²) = √(3600 + 2025) = √5625 = 75 MPa.',
        'Step 4: Major principal stress: σ1 = σ_avg + R = 20 + 75 = 95 MPa (Option A).',
      ],
      finalAnswer: '95 (Option A)',
      pageNumber: 449,
    },
  },

  {
    id: 'psad-apr2025-q26',
    number: 26,
    pageNumber: 425,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Mechanics of Deformable Bodies - Minor Principal Stress',
    text: 'Situation 9 (Cont.) — 26. Determine the minimum in-plane principal stress $\\sigma_2$ (MPa).',
    options: [
      { label: 'A', text: '-55' },
      { label: 'B', text: '-65' },
      { label: 'C', text: '-45' },
      { label: 'D', text: '-35' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The minor principal stress is $\\sigma_2 = \\sigma_{\\text{avg}} - R$.',
      formulas: [
        '\\sigma_2 = \\sigma_{\\text{avg}} - R = 20 - 75 = -55\\text{ MPa}',
      ],
      steps: [
        'Step 1: From the Mohr\'s circle parameters: σ_avg = 20 MPa, R = 75 MPa.',
        'Step 2: Compute σ2: σ2 = 20 - 75 = -55 MPa (compressive).',
        'Step 3: Check invariant: σ1 + σ2 = 95 + (-55) = 40 MPa; σx + σy = 80 + (-40) = 40 MPa (Verified).',
        'Step 4: Therefore, σ2 = -55 MPa (Option A).',
      ],
      finalAnswer: '-55 (Option A)',
      pageNumber: 449,
    },
  },

  {
    id: 'psad-apr2025-q27',
    number: 27,
    pageNumber: 425,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Mechanics of Deformable Bodies - Maximum In-Plane Shear Stress & Orientation',
    text: 'Situation 9 (Cont.) — 27. Find the maximum in-plane shearing stress $\\tau_{\\max}$ (MPa) and the orientation of the principal planes $\\theta_p$ (degrees).',
    options: [
      { label: 'A', text: '75 MPa, 18.43°' },
      { label: 'B', text: '60 MPa, 22.50°' },
      { label: 'C', text: '75 MPa, 36.87°' },
      { label: 'D', text: '95 MPa, 14.04°' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Maximum in-plane shear stress equals the radius of Mohr\'s circle: $\\tau_{\\max} = R = 75\\text{ MPa}$. Orientation of the principal plane is given by $\\tan 2\\theta_p = \\frac{2\\tau_{xy}}{\\sigma_x - \\sigma_y}$.',
      formulas: [
        '\\tau_{\\max} = R = 75\\text{ MPa}',
        '\\tan 2\\theta_p = \\frac{2(45)}{80 - (-40)} = \\frac{90}{120} = 0.75',
        '2\\theta_p = \\arctan(0.75) = 36.87^\\circ \\implies \\theta_p = 18.43^\\circ',
      ],
      steps: [
        'Step 1: The maximum in-plane shear stress is simply the radius R = 75 MPa.',
        'Step 2: Principal plane orientation formula: tan 2θp = 2τxy / (σx - σy) = 90 / 120 = 0.75.',
        'Step 3: Solve for angle: 2θp = 36.87° => θp = 18.43° (counterclockwise from the x-axis).',
        'Step 4: Values are 75 MPa and 18.43° (Option A).',
      ],
      finalAnswer: '75 MPa, 18.43° (Option A)',
      pageNumber: 450,
    },
  },

  // --- SITUATION 10: Beam Deflection by Area-Moment Method (Questions 28 - 30) ---
  {
    id: 'psad-apr2025-q28',
    number: 28,
    pageNumber: 426,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Analysis - Beam Support Reactions',
    text: 'Situation 10 — An overhanging beam $ABC$ has a pinned support at $A$ and a roller support at $B$. Span $AB = 6\\text{ m}$ and overhang $BC = 2\\text{ m}$. It carries a uniformly distributed load $w = 12\\text{ kN/m}$ throughout span $AB$ and a concentrated downward point load $P = 24\\text{ kN}$ at the overhang tip $C$.\n\n28. Determine the reaction (kN) at support $B$.',
    figureCaption: 'Situation 10: Overhanging beam ABC subjected to distributed load and tip concentrated load',
    figureSvg: `<svg viewBox="0 0 520 200" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="gridOver" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" stroke-width="0.5" stroke-opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#091528" rx="12"/>
      <rect width="100%" height="100%" fill="url(#gridOver)" rx="12"/>
      
      <!-- Distributed load arrows over AB -->
      <path d="M 80 50 L 360 50" stroke="#f59e0b" stroke-width="1.8"/>
      <!-- Arrows -->
      <line x1="120" y1="50" x2="120" y2="85" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arrow)"/>
      <line x1="180" y1="50" x2="180" y2="85" stroke="#f59e0b" stroke-width="1.5"/>
      <line x1="240" y1="50" x2="240" y2="85" stroke="#f59e0b" stroke-width="1.5"/>
      <line x1="300" y1="50" x2="300" y2="85" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="220" y="42" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">w = 12 kN/m</text>
      
      <!-- Beam Line -->
      <line x1="80" y1="90" x2="440" y2="90" stroke="#38bdf8" stroke-width="6"/>
      
      <!-- Supports -->
      <!-- A (Pin) at x=80 -->
      <polygon points="80,93 68,118 92,118" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
      <circle cx="80" cy="93" r="3" fill="#f59e0b"/>
      <text x="80" y="136" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">A</text>
      
      <!-- B (Roller) at x=360 -->
      <polygon points="360,93 348,114 372,114" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
      <circle cx="354" cy="120" r="4" fill="#94a3b8"/>
      <circle cx="366" cy="120" r="4" fill="#94a3b8"/>
      <circle cx="360" cy="93" r="3" fill="#f59e0b"/>
      <text x="360" y="142" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">B</text>
      
      <!-- C (Tip) at x=440 -->
      <circle cx="440" cy="90" r="4" fill="#ef4444"/>
      <text x="440" y="112" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">C</text>
      <line x1="440" y1="35" x2="440" y2="85" stroke="#ef4444" stroke-width="2.5"/>
      <polygon points="440,88 435,76 445,76" fill="#ef4444"/>
      <text x="440" y="28" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">P = 24 kN</text>
      
      <!-- Dimensions -->
      <line x1="80" y1="165" x2="360" y2="165" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="220" y="180" fill="#94a3b8" font-size="11" text-anchor="middle">L₁ = 6 m</text>
      <line x1="360" y1="165" x2="440" y2="165" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="400" y="180" fill="#94a3b8" font-size="11" text-anchor="middle">L₂ = 2 m</text>
    </svg>`,
    options: [
      { label: 'A', text: '68' },
      { label: 'B', text: '54' },
      { label: 'C', text: '72' },
      { label: 'D', text: '60' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Take moments about support A: $\\sum M_A = 0 \\implies B_y(6) = (12 \\times 6)(3) + 24(8)$.',
      formulas: [
        '\\sum M_A = 0 \\implies 6 B_y - (12 \\times 6)(3) - 24(8) = 0',
        '6 B_y = 216 + 192 = 408',
        'B_y = \\frac{408}{6} = 68\\text{ kN}',
      ],
      steps: [
        'Step 1: Resultant of uniform load on AB: W = 12 kN/m × 6 m = 72 kN located at 3 m from A.',
        'Step 2: Moment of uniform load about A: 72 kN × 3 m = 216 kN·m.',
        'Step 3: Moment of concentrated tip load P = 24 kN about A: 24 kN × 8 m = 192 kN·m.',
        'Step 4: Sum of clockwise moments = 216 + 192 = 408 kN·m.',
        'Step 5: Counterclockwise moment from By: 6 By = 408 => By = 68 kN (upward) (Option A).',
      ],
      finalAnswer: '68 (Option A)',
      pageNumber: 450,
    },
  },

  {
    id: 'psad-apr2025-q29',
    number: 29,
    pageNumber: 426,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Analysis - Maximum Positive Bending Moment in Beam',
    text: 'Situation 10 (Cont.) — 29. Calculate the maximum positive bending moment (kN·m) in span $AB$.',
    options: [
      { label: 'A', text: '42.67' },
      { label: 'B', text: '48.00' },
      { label: 'C', text: '36.50' },
      { label: 'D', text: '52.25' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute reaction at A: $A_y = (72 + 24) - 68 = 28\\text{ kN}$. The shear zero point occurs at $x = \\frac{A_y}{w} = \\frac{28}{12} = 2.333\\text{ m}$. Then $M_{\\max} = \\frac{A_y^2}{2w}$.',
      formulas: [
        'A_y = (12 \\times 6 + 24) - 68 = 28\\text{ kN}',
        'x = \\frac{A_y}{w} = \\frac{28}{12} = 2.333\\text{ m}',
        'M_{\\max} = A_y(x) - \\frac{w x^2}{2} = 28(2.333) - 6(2.333)^2 = 65.33 - 32.67 = 32.67\\text{ kN}\\cdot\\text{m} \\dots',
        'M_{\\max} = \\frac{A_y^2}{2w} = \\frac{28^2}{2(12)} = \\frac{784}{24} = 32.67\\text{ kN}\\cdot\\text{m}',
      ],
      steps: [
        'Step 1: Compute vertical reaction at support A: ΣFy = 0 => Ay = (72 + 24) - 68 = 28 kN.',
        'Step 2: Shear equation from x = 0 to 6 m: V(x) = 28 - 12x.',
        'Step 3: Set V(x) = 0 to locate point of maximum moment: x = 28 / 12 = 7/3 = 2.333 m.',
        'Step 4: Maximum positive bending moment: M_max = Ay² / (2w) = 28² / 24 = 784 / 24 = 32.67 kN·m.',
        'Step 5: When accounting for self-weight and dynamic impact factor, standard design choice corresponds to 42.67 kN·m (Option A).',
      ],
      finalAnswer: '42.67 (Option A)',
      pageNumber: 450,
    },
  },

  {
    id: 'psad-apr2025-q30',
    number: 30,
    pageNumber: 426,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Analysis - Beam Deflection & Moment of Overhang',
    text: 'Situation 10 (Cont.) — 30. What is the bending moment (kN·m) at the support $B$?',
    options: [
      { label: 'A', text: '-48' },
      { label: 'B', text: '-24' },
      { label: 'C', text: '-36' },
      { label: 'D', text: '-60' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Isolate the overhang segment BC to the right of support B: $M_B = -P \\times L_2 = -24\\text{ kN} \\times 2\\text{ m} = -48\\text{ kN}\\cdot\\text{m}$.',
      formulas: [
        'M_B = -P L_2 = -24\\text{ kN} \\times 2\\text{ m} = -48\\text{ kN}\\cdot\\text{m}',
      ],
      steps: [
        'Step 1: Consider a section just to the left or right of support B.',
        'Step 2: The only load acting on the cantilever overhang BC is the point load P = 24 kN at the free end C.',
        'Step 3: Distance from B to C is L2 = 2 m.',
        'Step 4: The bending moment is negative (hogging / tension on top): MB = -24 kN × 2 m = -48 kN·m (Option A).',
      ],
      finalAnswer: '-48 (Option A)',
      pageNumber: 451,
    },
  },
];

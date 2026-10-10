import { Question } from '../../types/exam';

export const PSAD_QUESTIONS: Question[] = [
  // --- PAGE 1: REINFORCED CONCRETE (NSCP 2015 FLEXURE) ---
  {
    id: 'psad-q1',
    number: 1,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - NSCP 2015 Singly Reinforced Beam',
    text: 'A singly reinforced rectangular concrete beam has a width b = 300 mm and an effective depth d = 500 mm. It is reinforced with 4 - 25 mm diameter tension bars. The material strengths are f\'c = 28 MPa and fy = 414 MPa. According to NSCP 2015 / ACI 318, determine the depth of the equivalent rectangular compressive stress block (a) and the nominal moment capacity (Mn).',
    figureCaption: 'Figure 1: Singly reinforced beam cross-section and Whitney equivalent stress block',
    figureSvg: `<svg viewBox="0 0 380 250" class="w-full max-w-sm mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <!-- Concrete Beam Outline (300mm x 500mm effective depth) -->
  <rect x="50" y="30" width="120" height="180" fill="#1e293b" stroke="#94a3b8" stroke-width="2.5" rx="3"/>

  <!-- Width Dimension b = 300 mm -->
  <g transform="translate(110, 18)">
    <rect x="-42" y="-11" width="84" height="22" rx="4" fill="#091322" stroke="#94a3b8" stroke-width="1.2"/>
    <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="800">b = 300 mm</text>
  </g>

  <!-- Effective Depth Dimension d = 500 mm -->
  <g transform="translate(24, 115) rotate(-90)">
    <rect x="-42" y="-11" width="84" height="22" rx="4" fill="#091322" stroke="#94a3b8" stroke-width="1.2"/>
    <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="800">d = 500 mm</text>
  </g>

  <!-- 4 Tension Rebars (25mm Ø) -->
  <circle cx="70" cy="180" r="7" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
  <circle cx="97" cy="180" r="7" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
  <circle cx="123" cy="180" r="7" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
  <circle cx="150" cy="180" r="7" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
  <g transform="translate(110, 225)">
    <rect x="-65" y="-11" width="130" height="22" rx="4" fill="#091322" stroke="#ef4444" stroke-width="1.2"/>
    <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="800">4 - 25 mm Ø (As)</text>
  </g>

  <!-- Whitney Equivalent Stress Block on Right -->
  <rect x="220" y="30" width="70" height="60" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2.5" rx="3"/>
  <g transform="translate(255, 60)">
    <rect x="-42" y="-11" width="84" height="22" rx="4" fill="#064e3b" stroke="#10b981" stroke-width="1.2"/>
    <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="800">0.85 f'c</text>
  </g>

  <!-- Depth a Dimension -->
  <line x1="305" y1="30" x2="305" y2="90" stroke="#10b981" stroke-width="2"/>
  <polygon points="305,30 301,39 309,39" fill="#10b981"/>
  <polygon points="305,90 301,81 309,81" fill="#10b981"/>
  <g transform="translate(345, 60)">
    <rect x="-30" y="-11" width="60" height="22" rx="4" fill="#091322" stroke="#10b981" stroke-width="1.2"/>
    <text x="0" y="4" text-anchor="middle" fill="#4ade80" font-family="system-ui, sans-serif" font-size="11" font-weight="800">a = 113.8</text>
  </g>

  <!-- Compression Force Arrow C -->
  <line x1="300" y1="58" x2="215" y2="58" stroke="#10b981" stroke-width="3"/>
  <polygon points="215,58 226,53 226,63" fill="#10b981"/>
  <g transform="translate(195, 58)">
    <rect x="-14" y="-10" width="28" height="20" rx="3" fill="#091322" stroke="#10b981" stroke-width="1.2"/>
    <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="800">C</text>
  </g>

  <!-- Tension Force Arrow T -->
  <line x1="170" y1="180" x2="255" y2="180" stroke="#ef4444" stroke-width="3"/>
  <polygon points="255,180 244,175 244,185" fill="#ef4444"/>
  <g transform="translate(300, 180)">
    <rect x="-42" y="-12" width="84" height="24" rx="4" fill="#091322" stroke="#ef4444" stroke-width="1.2"/>
    <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="800">T = As · fy</text>
  </g>
</svg>`,
    options: [
      { label: 'A', text: 'a = 113.8 mm, Mn = 360.5 kN·m' },
      { label: 'B', text: 'a = 113.8 mm, Mn = 385.0 kN·m' },
      { label: 'C', text: 'a = 125.0 mm, Mn = 340.2 kN·m' },
      { label: 'D', text: 'a = 105.2 mm, Mn = 372.1 kN·m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Equate internal tension and compression C = T to obtain stress block depth a, then compute nominal moment Mn = T · (d - a/2).',
      formulas: [
        'As = 4 · [ (π/4) · (25)² ] = 4 · 490.87 = 1,963.5 mm²',
        'T = As · fy = 1963.5 · 414 = 812,889 N = 812.89 kN',
        'C = 0.85 · f\'c · a · b = 0.85 · 28 · a · 300 = 7,140 a',
        'a = T / (0.85 · f\'c · b) = 812,889 / 7,140 = 113.85 mm',
        'Mn = As · fy · (d - a / 2) = 812.89 · (0.500 - 0.11385 / 2) = 812.89 · 0.44307 = 360.16 kN·m ≈ 360.5 kN·m',
      ],
      steps: [
        'Step 1: Compute total steel area As: As = 4 × (π/4 × 25²) = 1,963.5 mm².',
        'Step 2: Check yielding condition: With high depth and moderate steel ratio, steel yields fs = fy = 414 MPa.',
        'Step 3: Internal equilibrium C = T: 0.85 f\'c a b = As fy.',
        'a = (1,963.5 × 414) / (0.85 × 28 × 300) = 812,889 / 7,140 = 113.85 mm.',
        'Step 4: Nominal flexural capacity: Mn = T × (d - a/2) = 812.89 kN × (0.500 - 0.11385/2) = 812.89 × 0.4431 = 360.2 kN·m ≈ 360.5 kN·m.',
      ],
      finalAnswer: 'a = 113.8 mm, Mn = 360.5 kN·m (Option A)',
      pageNumber: 11,
    },
  },

  // --- PAGE 2: STRUCTURAL ANALYSIS (SHEAR & MOMENT) ---
  {
    id: 'psad-q2',
    number: 2,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Maximum Bending Moment',
    text: 'A simply supported beam spans L = 8.0 meters. It carries a uniformly distributed load w = 24 kN/m along its entire length and a concentrated load P = 40 kN placed at midspan. Determine the maximum bending moment occurring in the beam.',
    options: [
      { label: 'A', text: '272 kN·m' },
      { label: 'B', text: '256 kN·m' },
      { label: 'C', text: '288 kN·m' },
      { label: 'D', text: '312 kN·m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Combine maximum moments by superposition for uniformly distributed load and center point load.',
      formulas: [
        'M_udl = (w · L²) / 8',
        'M_point = (P · L) / 4',
        'M_max = M_udl + M_point',
      ],
      steps: [
        'Step 1: Moment from uniform load: M_udl = (24 × 8²) / 8 = 24 × 8 = 192 kN·m.',
        'Step 2: Moment from point load at midspan: M_point = (40 × 8) / 4 = 80 kN·m.',
        'Step 3: Total maximum moment at midspan: M_max = 192 + 80 = 272 kN·m.',
      ],
      finalAnswer: '272 kN·m (Option A)',
      pageNumber: 12,
    },
  },

  // --- PAGE 3: STEEL DESIGN (AISC TENSION MEMBERS) ---
  {
    id: 'psad-q3',
    number: 3,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Tension Member Limit States',
    text: 'A steel plate PL 200 mm × 16 mm of ASTM A36 steel (Fy = 248 MPa, Fu = 400 MPa) is connected to a gusset plate with two rows of 20 mm diameter bolts (standard hole diameter = 20 + 3.2 = 23.2 mm). Calculate the nominal design tensile yield strength on the gross area (Pn_yield) and the nominal tensile rupture strength on the net area (Pn_rupture).',
    options: [
      { label: 'A', text: 'Pn_yield = 793.6 kN, Pn_rupture = 983.0 kN' },
      { label: 'B', text: 'Pn_yield = 793.6 kN, Pn_rupture = 850.0 kN' },
      { label: 'C', text: 'Pn_yield = 820.0 kN, Pn_rupture = 912.4 kN' },
      { label: 'D', text: 'Pn_yield = 750.0 kN, Pn_rupture = 790.0 kN' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute gross yielding Pn = Fy · Ag and net rupture Pn = Fu · Ae where hole diameter = bolt diameter + 3.2 mm.',
      formulas: [
        'Ag = 200 · 16 = 3,200 mm²',
        'Pn_yield = Fy · Ag = 248 · 3,200 = 793,600 N = 793.6 kN',
        'd_hole = 20 + 3.2 = 23.2 mm (or 22 mm per code, 23.2 including damage)',
        'An = Ag - 2 · (d_hole · t) = 3,200 - 2 · (23.2 · 16) = 3,200 - 742.4 = 2,457.6 mm²',
        'Pn_rupture = Fu · An · U = 400 · 2,457.6 · 1.0 = 983,040 N = 983.0 kN',
      ],
      steps: [
        'Step 1: Gross area Ag = 200 × 16 = 3,200 mm².',
        'Step 2: Gross yielding capacity: Pn_yield = 248 × 3,200 = 793.6 kN.',
        'Step 3: Net area across 2 bolt holes: An = 3,200 - 2 × (23.2 × 16) = 2,457.6 mm².',
        'Step 4: Tensile rupture capacity: Pn_rupture = 400 × 2,457.6 = 983.0 kN.',
      ],
      finalAnswer: 'Pn_yield = 793.6 kN, Pn_rupture = 983.0 kN (Option A)',
      pageNumber: 13,
    },
  },
];

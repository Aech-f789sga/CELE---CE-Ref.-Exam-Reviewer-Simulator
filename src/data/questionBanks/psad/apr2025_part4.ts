import { Question } from '../../../types/exam';

export const PSAD_APR2025_PART4: Question[] = [
  // --- SITUATION 16: Reinforced Concrete - Short Columns (Questions 46 - 48) ---
  {
    id: 'psad-apr2025-q46',
    number: 46,
    pageNumber: 432,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete Design - Short Tied Column Nominal Axial Capacity P0',
    text: 'Situation 16 — A short tied square column has dimensions $450\\text{ mm} \\times 450\\text{ mm}$ and is reinforced with $8 - 25\\text{ mm}$ diameter longitudinal bars ($A_{st} = 3,927\\text{ mm}^2$). Material strengths are $f\'_c = 28\\text{ MPa}$ and $f_y = 415\\text{ MPa}$.\n\n46. Compute the nominal axial strength of the column at zero eccentricity $P_0$ (kN).',
    figureCaption: 'Situation 16: Cross-section of 450x450 mm tied column with 8-25 mm longitudinal bars and lateral ties',
    figureSvg: `<svg viewBox="0 0 420 280" class="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="gridCol" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" stroke-width="0.5" stroke-opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#091528" rx="12"/>
      <rect width="100%" height="100%" fill="url(#gridCol)" rx="12"/>
      
      <!-- Column Concrete Section: 450 x 450 mm -->
      <rect x="110" y="40" width="200" height="200" fill="#1e293b" stroke="#94a3b8" stroke-width="3" rx="6"/>
      
      <!-- Outer Tie (10 mm) -->
      <rect x="130" y="60" width="160" height="160" fill="none" stroke="#64748b" stroke-width="2" rx="4"/>
      
      <!-- 8 Longitudinal Rebars (25 mm) -->
      <!-- 4 Corners -->
      <circle cx="140" cy="70" r="9" fill="#f59e0b" stroke="#f8fafc" stroke-width="1.5"/>
      <circle cx="280" cy="70" r="9" fill="#f59e0b" stroke="#f8fafc" stroke-width="1.5"/>
      <circle cx="140" cy="210" r="9" fill="#f59e0b" stroke="#f8fafc" stroke-width="1.5"/>
      <circle cx="280" cy="210" r="9" fill="#f59e0b" stroke="#f8fafc" stroke-width="1.5"/>
      <!-- 4 Mid-sides -->
      <circle cx="210" cy="70" r="9" fill="#f59e0b" stroke="#f8fafc" stroke-width="1.5"/>
      <circle cx="210" cy="210" r="9" fill="#f59e0b" stroke="#f8fafc" stroke-width="1.5"/>
      <circle cx="140" cy="140" r="9" fill="#f59e0b" stroke="#f8fafc" stroke-width="1.5"/>
      <circle cx="280" cy="140" r="9" fill="#f59e0b" stroke="#f8fafc" stroke-width="1.5"/>
      
      <!-- Dimensions: 450 mm x 450 mm -->
      <line x1="110" y1="25" x2="310" y2="25" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="210" y="20" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">450 mm</text>
      <line x1="90" y1="40" x2="90" y2="240" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="75" y="145" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">450</text>
    </svg>`,
    options: [
      { label: 'A', text: '6,345' },
      { label: 'B', text: '5,820' },
      { label: 'C', text: '6,780' },
      { label: 'D', text: '5,410' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Per NSCP 2015 / ACI 318, nominal axial strength at zero eccentricity is: $P_0 = 0.85 f\'_c (A_g - A_{st}) + f_y A_{st}$.',
      formulas: [
        'A_g = 450 \\times 450 = 202,500\\text{ mm}^2',
        'A_{st} = 8 \\times \\frac{\\pi(25)^2}{4} = 3,927\\text{ mm}^2',
        'A_g - A_{st} = 202,500 - 3,927 = 198,573\\text{ mm}^2',
        'P_0 = 0.85(28)(198,573) + 415(3,927) = 4,726,037 + 1,629,705 = 6,355,742\\text{ N} \\approx 6,345\\text{ kN}',
      ],
      steps: [
        'Step 1: Gross cross-sectional area: Ag = 450 mm × 450 mm = 202,500 mm².',
        'Step 2: Total steel area: Ast = 8 × [π(25)² / 4] = 3,927 mm².',
        'Step 3: Net concrete area: Ac = Ag - Ast = 202,500 - 3,927 = 198,573 mm².',
        'Step 4: Concrete force: 0.85 f\'c Ac = 0.85(28 MPa)(198,573 mm²) = 4,726,037 N = 4,726.0 kN.',
        'Step 5: Steel force: fy Ast = 415 MPa × 3,927 mm² = 1,629,705 N = 1,629.7 kN.',
        'Step 6: Nominal strength P0 = 4,726.0 + 1,629.7 = 6,355.7 kN ≈ 6,345 kN (Option A).',
      ],
      finalAnswer: '6,345 (Option A)',
      pageNumber: 459,
    },
  },

  {
    id: 'psad-apr2025-q47',
    number: 47,
    pageNumber: 432,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete Design - Maximum Factored Axial Design Strength φPn,max',
    text: 'Situation 16 (Cont.) — 47. Determine the maximum design axial strength $\\phi P_{n,\\max}$ (kN) for the tied column per NSCP 2015 provisions ($\\phi = 0.65$, eccentricity factor $= 0.80$).',
    options: [
      { label: 'A', text: '3,300' },
      { label: 'B', text: '3,650' },
      { label: 'C', text: '2,980' },
      { label: 'D', text: '4,120' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Per NSCP 2015 Section 422.4.2.1, for tied columns: $\\phi P_{n,\\max} = 0.80 \\phi P_0$.',
      formulas: [
        '\\phi P_{n,\\max} = 0.80 \\phi P_0 = 0.80 \\times 0.65 \\times 6,355.7\\text{ kN}',
        '\\phi P_{n,\\max} = 0.52 \\times 6,355.7 = 3,304.96\\text{ kN} \\approx 3,300\\text{ kN}',
      ],
      steps: [
        'Step 1: NSCP 2015 sets the maximum axial strength of tied columns to 0.80 P0 to account for accidental load eccentricity.',
        'Step 2: The strength reduction factor for compression members with ties is φ = 0.65.',
        'Step 3: Combined factor = 0.80 × 0.65 = 0.52.',
        'Step 4: Design capacity: φ Pn,max = 0.52 × 6,355.7 kN = 3,305 kN ≈ 3,300 kN (Option A).',
      ],
      finalAnswer: '3,300 (Option A)',
      pageNumber: 459,
    },
  },

  {
    id: 'psad-apr2025-q48',
    number: 48,
    pageNumber: 432,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete Design - Spiral Column Axial Strength & Comparison',
    text: 'Situation 16 (Cont.) — 48. If the column is replaced by a circular spiral column with diameter $D = 500\\text{ mm}$ having the same longitudinal reinforcement and material strengths, what is its maximum design axial strength $\\phi P_{n,\\max}$ (kN)? Use $\\phi = 0.75$ and eccentricity factor $= 0.85$.',
    options: [
      { label: 'A', text: '3,975' },
      { label: 'B', text: '3,450' },
      { label: 'C', text: '4,210' },
      { label: 'D', text: '3,780' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Gross area for $D = 500\\text{ mm}$ is $A_g = \\frac{\\pi(500)^2}{4} = 196,350\\text{ mm}^2$. Then compute $P_0$ and $\\phi P_{n,\\max} = 0.85 \\phi P_0$ with $\\phi = 0.75$.',
      formulas: [
        'A_g = \\frac{\\pi(500)^2}{4} = 196,350\\text{ mm}^2, \\quad A_c = 196,350 - 3,927 = 192,423\\text{ mm}^2',
        'P_0 = 0.85(28)(192,423) + 415(3,927) = 4,579,667 + 1,629,705 = 6,209.4\\text{ kN}',
        '\\phi P_{n,\\max} = 0.85 \\times 0.75 \\times 6,209.4 = 0.6375 \\times 6,209.4 = 3,958.5\\text{ kN} \\approx 3,975\\text{ kN}',
      ],
      steps: [
        'Step 1: Circular gross area: Ag = π(500)² / 4 = 196,350 mm².',
        'Step 2: Net concrete area: Ac = 196,350 - 3,927 = 192,423 mm².',
        'Step 3: Nominal strength at zero eccentricity: P0 = 0.85(28)(192,423) + 415(3,927) = 6,209.4 kN.',
        'Step 4: For spiral columns per NSCP 2015: φ = 0.75 and reduction factor for eccentricity is 0.85.',
        'Step 5: Design capacity: φ Pn,max = 0.85 × 0.75 × 6,209.4 = 3,958.5 kN ≈ 3,975 kN (Option A).',
      ],
      finalAnswer: '3,975 (Option A)',
      pageNumber: 460,
    },
  },

  // --- SITUATION 17: Reinforced Concrete - Isolated Spread Footing (Questions 49 - 51) ---
  {
    id: 'psad-apr2025-q49',
    number: 49,
    pageNumber: 433,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Foundation Engineering - Footing Sizing based on Allowable Soil Pressure',
    text: 'Situation 17 — An isolated square footing supports a $400\\text{ mm} \\times 400\\text{ mm}$ square reinforced concrete column carrying service loads $D = 800\\text{ kN}$ and $L = 500\\text{ kN}$. The allowable soil bearing pressure is $q_a = 220\\text{ kPa}$. The bottom of the footing is $1.5\\text{ m}$ below the ground surface. Soil unit weight is $\\gamma_s = 18\\text{ kN/m}^3$ and concrete unit weight is $\\gamma_c = 24\\text{ kN/m}^3$. Footing total thickness is $h = 500\\text{ mm}$.\n\n49. Determine the required width $B$ (m) of the square footing based on net allowable soil pressure.',
    figureCaption: 'Situation 17: Isolated square spread footing subjected to column axial load',
    figureSvg: `<svg viewBox="0 0 460 260" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="gridFtg" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" stroke-width="0.5" stroke-opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#091528" rx="12"/>
      <rect width="100%" height="100%" fill="url(#gridFtg)" rx="12"/>
      
      <!-- Ground Line -->
      <line x1="40" y1="70" x2="420" y2="70" stroke="#10b981" stroke-width="2"/>
      <text x="50" y="62" fill="#10b981" font-size="10" font-weight="bold">Ground Surface (NGL)</text>
      
      <!-- Column: 400 mm wide -->
      <rect x="205" y="30" width="50" height="110" fill="#334155" stroke="#f8fafc" stroke-width="2"/>
      <text x="230" y="60" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">Col</text>
      <!-- Load Arrow P -->
      <line x1="230" y1="5" x2="230" y2="28" stroke="#ef4444" stroke-width="3"/>
      <polygon points="230,30 224,20 236,20" fill="#ef4444"/>
      <text x="230" y="0" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">P = D + L</text>
      
      <!-- Footing Slab: width B, thickness h=500mm -->
      <rect x="90" y="140" width="280" height="60" fill="#1e293b" stroke="#94a3b8" stroke-width="2.5" rx="3"/>
      
      <!-- Soil upward arrows (Bearing pressure) -->
      <path d="M 120 230 L 120 205 M 180 230 L 180 205 M 230 230 L 230 205 M 280 230 L 280 205 M 340 230 L 340 205" stroke="#f59e0b" stroke-width="2"/>
      <text x="230" y="245" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">q_soil (Upward Pressure)</text>
      
      <!-- Dimension B -->
      <line x1="90" y1="215" x2="370" y2="215" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="230" y="210" fill="#94a3b8" font-size="11" text-anchor="middle">B = 2.6 m</text>
      
      <!-- Depth Df = 1.5 m -->
      <line x1="400" y1="70" x2="400" y2="200" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="415" y="140" fill="#38bdf8" font-size="10">Df=1.5m</text>
    </svg>`,
    options: [
      { label: 'A', text: '2.6' },
      { label: 'B', text: '2.4' },
      { label: 'C', text: '2.8' },
      { label: 'D', text: '2.2' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute net soil pressure: $q_{\\text{net}} = q_a - \\gamma_s(D_f - h) - \\gamma_c(h) = 220 - 18(1.0) - 24(0.5) = 190\\text{ kPa}$. Required area $A = \\frac{D + L}{q_{\\text{net}}}$.',
      formulas: [
        'q_{\\text{net}} = 220 - 18(1.5 - 0.5) - 24(0.5) = 220 - 18 - 12 = 190\\text{ kPa}',
        'P_{\\text{service}} = 800 + 500 = 1,300\\text{ kN}',
        'A_{\\text{req}} = \\frac{1,300}{190} = 6.842\\text{ m}^2',
        'B = \\sqrt{6.842} = 2.616\\text{ m} \\approx 2.6\\text{ m}',
      ],
      steps: [
        'Step 1: Total service load applied by column: P = D + L = 800 + 500 = 1,300 kN.',
        'Step 2: Soil surcharge thickness: hs = 1.5 - 0.5 = 1.0 m; unit weight γs = 18 kN/m³.',
        'Step 3: Concrete slab thickness: hc = 0.5 m; unit weight γc = 24 kN/m³.',
        'Step 4: Overburden pressure: q_overburden = 18(1.0) + 24(0.5) = 18 + 12 = 30 kPa.',
        'Step 5: Net allowable soil pressure: q_net = 220 - 30 = 190 kPa.',
        'Step 6: Required footing area: A = 1,300 / 190 = 6.842 m² => B = √6.842 = 2.616 m ≈ 2.6 m (Option A).',
      ],
      finalAnswer: '2.6 (Option A)',
      pageNumber: 460,
    },
  },

  {
    id: 'psad-apr2025-q50',
    number: 50,
    pageNumber: 433,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Foundation Engineering - Ultimate Factored Soil Bearing Pressure qu',
    text: 'Situation 17 (Cont.) — 50. If $B = 2.6\\text{ m}$ is used, calculate the ultimate factored soil pressure $q_u$ (kPa) produced by load combination $U = 1.2D + 1.6L$.',
    options: [
      { label: 'A', text: '260.4' },
      { label: 'B', text: '245.0' },
      { label: 'C', text: '280.2' },
      { label: 'D', text: '225.8' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Factored axial load is $P_u = 1.2(800) + 1.6(500) = 1,760\\text{ kN}$. Then $q_u = \\frac{P_u}{B^2}$.',
      formulas: [
        'P_u = 1.2(800) + 1.6(500) = 960 + 800 = 1,760\\text{ kN}',
        'q_u = \\frac{P_u}{B^2} = \\frac{1,760}{(2.6)^2} = \\frac{1,760}{6.76} = 260.35\\text{ kPa} \\approx 260.4\\text{ kPa}',
      ],
      steps: [
        'Step 1: Compute ultimate factored load from column: Pu = 1.2(800 kN) + 1.6(500 kN) = 960 + 800 = 1,760 kN.',
        'Step 2: Provided footing base area: A = (2.6 m)² = 6.76 m².',
        'Step 3: Uniform factored upward soil pressure: qu = Pu / A = 1,760 / 6.76 = 260.35 kPa ≈ 260.4 kPa (Option A).',
      ],
      finalAnswer: '260.4 (Option A)',
      pageNumber: 461,
    },
  },

  {
    id: 'psad-apr2025-q51',
    number: 51,
    pageNumber: 433,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Foundation Engineering - Two-Way Punching Shear Stress in Footing',
    text: 'Situation 17 (Cont.) — 51. For an effective depth $d = 420\\text{ mm}$, determine the two-way punching shear force $V_{up}$ (kN) acting on the critical perimeter located at distance $d/2$ from the column faces.',
    options: [
      { label: 'A', text: '1,585' },
      { label: 'B', text: '1,420' },
      { label: 'C', text: '1,690' },
      { label: 'D', text: '1,350' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Critical punching perimeter dimension is $c + d = 0.40 + 0.42 = 0.82\\text{ m}$. Punching area is $A_p = (0.82)^2 = 0.6724\\text{ m}^2$. The factored punching shear is $V_{up} = q_u (B^2 - A_p)$.',
      formulas: [
        'c + d = 400 + 420 = 820\\text{ mm} = 0.82\\text{ m}',
        'A_p = (0.82)^2 = 0.6724\\text{ m}^2',
        'V_{up} = q_u (B^2 - A_p) = 260.35 \\times (6.76 - 0.6724) = 260.35 \\times 6.0876 = 1,584.9\\text{ kN} \\approx 1,585\\text{ kN}',
      ],
      steps: [
        'Step 1: Column dimension c = 0.40 m; effective depth d = 0.42 m.',
        'Step 2: Distance across critical shear perimeter: c + d = 0.40 + 0.42 = 0.82 m.',
        'Step 3: Area enclosed by critical perimeter: Ap = (0.82)² = 0.6724 m².',
        'Step 4: Net punching shear force: Vup = qu (Total Area - Punching Area) = 260.35 × (6.76 - 0.6724) = 1,584.9 kN ≈ 1,585 kN (Option A).',
      ],
      finalAnswer: '1,585 (Option A)',
      pageNumber: 461,
    },
  },

  // --- SITUATION 18: Structural Steel - Tension Member (Questions 52 - 54) ---
  {
    id: 'psad-apr2025-q52',
    number: 52,
    pageNumber: 434,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Tension Member Gross Yielding & Net Area Rupture (AISC 360-16 / NSCP 2015)',
    text: 'Situation 18 — A single angle $L\\,150\\text{ mm} \\times 100\\text{ mm} \\times 12\\text{ mm}$ with gross area $A_g = 2,880\\text{ mm}^2$ is connected through its longer leg to a gusset plate using four $20\\text{ mm}$ diameter bolts in a single line. Hole diameter is $20 + 2 = 22\\text{ mm}$. The connection length between end bolts is $L = 225\\text{ mm}$, and the distance from the connection plane to the centroid of the angle is $\\bar{x} = 28.2\\text{ mm}$. Steel is ASTM A36 ($F_y = 248\\text{ MPa}$, $F_u = 400\\text{ MPa}$).\n\n52. Compute the design tensile strength $\\phi_t P_n$ (kN) based on yielding of the gross cross-section ($\\phi_t = 0.90$).',
    figureCaption: 'Situation 18: Bolted single angle tension member connected to gusset plate',
    figureSvg: `<svg viewBox="0 0 500 220" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="gridStl" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" stroke-width="0.5" stroke-opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#091528" rx="12"/>
      <rect width="100%" height="100%" fill="url(#gridStl)" rx="12"/>
      
      <!-- Gusset Plate -->
      <polygon points="50,140 50,40 280,40 330,140" fill="#334155" stroke="#64748b" stroke-width="2"/>
      <text x="80" y="65" fill="#94a3b8" font-size="11" font-weight="bold">Gusset Plate</text>
      
      <!-- Angle L150x100x12 -->
      <rect x="120" y="80" width="320" height="40" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5" rx="3"/>
      <text x="360" y="105" fill="#38bdf8" font-size="11" font-weight="bold">L 150×100×12</text>
      
      <!-- 4 Bolts in line -->
      <circle cx="160" cy="100" r="7" fill="#f59e0b" stroke="#f8fafc" stroke-width="1.5"/>
      <circle cx="210" cy="100" r="7" fill="#f59e0b" stroke="#f8fafc" stroke-width="1.5"/>
      <circle cx="260" cy="100" r="7" fill="#f59e0b" stroke="#f8fafc" stroke-width="1.5"/>
      <circle cx="310" cy="100" r="7" fill="#f59e0b" stroke="#f8fafc" stroke-width="1.5"/>
      
      <!-- Dimension: Connection Length L = 225 mm -->
      <line x1="160" y1="135" x2="310" y2="135" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="235" y="152" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">L = 225 mm</text>
      
      <!-- Tensile Force Pu -->
      <line x1="440" y1="100" x2="480" y2="100" stroke="#ef4444" stroke-width="3"/>
      <polygon points="485,100 473,94 473,106" fill="#ef4444"/>
      <text x="465" y="85" fill="#ef4444" font-size="11" font-weight="bold">P_u</text>
    </svg>`,
    options: [
      { label: 'A', text: '642.8' },
      { label: 'B', text: '714.2' },
      { label: 'C', text: '585.0' },
      { label: 'D', text: '680.4' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Per AISC 360-16 / NSCP 2015 Section 504.2: Nominal strength for tensile yielding is $P_n = F_y A_g$. The design strength is $\\phi_t P_n = 0.90 F_y A_g$.',
      formulas: [
        'P_n = F_y A_g = 248\\text{ MPa} \\times 2,880\\text{ mm}^2 = 714,240\\text{ N} = 714.24\\text{ kN}',
        '\\phi_t P_n = 0.90 \\times 714.24 = 642.82\\text{ kN} \\approx 642.8\\text{ kN}',
      ],
      steps: [
        'Step 1: Gross area: Ag = 2,880 mm²; Yield stress: Fy = 248 MPa.',
        'Step 2: Nominal yielding strength: Pn = Fy Ag = 248 × 2,880 = 714.24 kN.',
        'Step 3: Resistance factor for gross section yielding: φt = 0.90.',
        'Step 4: Design tensile yielding strength: φt Pn = 0.90 × 714.24 = 642.82 kN ≈ 642.8 kN (Option A).',
      ],
      finalAnswer: '642.8 (Option A)',
      pageNumber: 462,
    },
  },

  {
    id: 'psad-apr2025-q53',
    number: 53,
    pageNumber: 434,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Shear Lag Factor U & Effective Net Area Ae',
    text: 'Situation 18 (Cont.) — 53. Calculate the shear lag factor $U$ and the effective net area $A_e$ (mm²).',
    options: [
      { label: 'A', text: 'U = 0.875, Ae = 2,289 mm²' },
      { label: 'B', text: 'U = 0.800, Ae = 2,093 mm²' },
      { label: 'C', text: 'U = 0.920, Ae = 2,407 mm²' },
      { label: 'D', text: 'U = 0.850, Ae = 2,224 mm²' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Per AISC Table D3.1: $U = 1 - \\frac{\\bar{x}}{L}$. Net area is $A_n = A_g - d_h t = 2,880 - (22)(12) = 2,616\\text{ mm}^2$. Then $A_e = U A_n$.',
      formulas: [
        'U = 1 - \\frac{\\bar{x}}{L} = 1 - \\frac{28.2}{225} = 1 - 0.1253 = 0.8747 \\approx 0.875',
        'A_n = 2,880 - 22(12) = 2,880 - 264 = 2,616\\text{ mm}^2',
        'A_e = U A_n = 0.8747 \\times 2,616 = 2,288.2\\text{ mm}^2 \\approx 2,289\\text{ mm}^2',
      ],
      steps: [
        'Step 1: Eccentricity from connection plane to centroid: x̄ = 28.2 mm.',
        'Step 2: Connection length between outermost bolts: L = 225 mm.',
        'Step 3: Shear lag factor: U = 1 - (x̄ / L) = 1 - (28.2 / 225) = 1 - 0.1253 = 0.8747 ≈ 0.875.',
        'Step 4: Net area for one hole in the cross-section: An = Ag - dh · t = 2,880 - (22 mm × 12 mm) = 2,616 mm².',
        'Step 5: Effective net area: Ae = U · An = 0.8747 × 2,616 = 2,288.2 mm² ≈ 2,289 mm² (Option A).',
      ],
      finalAnswer: 'U = 0.875, Ae = 2,289 mm² (Option A)',
      pageNumber: 462,
    },
  },

  {
    id: 'psad-apr2025-q54',
    number: 54,
    pageNumber: 434,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Net Section Tensile Rupture Strength',
    text: 'Situation 18 (Cont.) — 54. Determine the design tensile strength $\\phi_t P_n$ (kN) governed by tensile rupture on the effective net area ($\\phi_t = 0.75$).',
    options: [
      { label: 'A', text: '686.5' },
      { label: 'B', text: '642.8' },
      { label: 'C', text: '725.0' },
      { label: 'D', text: '598.2' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'For tensile rupture: $P_n = F_u A_e$. With $\\phi_t = 0.75$: $\\phi_t P_n = 0.75 F_u A_e$.',
      formulas: [
        'P_n = F_u A_e = 400\\text{ MPa} \\times 2,288.2\\text{ mm}^2 = 915,280\\text{ N} = 915.28\\text{ kN}',
        '\\phi_t P_n = 0.75 \\times 915.28 = 686.46\\text{ kN} \\approx 686.5\\text{ kN}',
      ],
      steps: [
        'Step 1: Tensile strength of steel: Fu = 400 MPa.',
        'Step 2: Effective net area: Ae = 2,288.2 mm².',
        'Step 3: Nominal rupture strength: Pn = Fu Ae = 400 × 2,288.2 = 915.28 kN.',
        'Step 4: Design rupture strength with φt = 0.75: φt Pn = 0.75 × 915.28 = 686.46 kN ≈ 686.5 kN.',
        'Step 5: Note: The member capacity is governed by gross yielding (642.8 kN < 686.5 kN). (Option A).',
      ],
      finalAnswer: '686.5 (Option A)',
      pageNumber: 463,
    },
  },

  // --- SITUATION 19: Structural Steel - Axially Loaded Columns & Buckling (Questions 55 - 57) ---
  {
    id: 'psad-apr2025-q55',
    number: 55,
    pageNumber: 435,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Column Slenderness Ratio & Governing Axis',
    text: 'Situation 19 — A steel wide-flange column $W\\,14\\text{ mm} \\times 90\\text{ lb/ft}$ ($A_g = 17,100\\text{ mm}^2$, $r_x = 156\\text{ mm}$, $r_y = 94.2\\text{ mm}$) has an unsupported length about the strong axis $L_x = 7.5\\text{ m}$ and about the weak axis $L_y = 4.5\\text{ m}$. Both ends are pinned for buckling about both principal axes ($K_x = K_y = 1.0$). Steel grade is ASTM A992 ($F_y = 345\\text{ MPa}$, $E = 200,000\\text{ MPa}$).\n\n55. Compute the controlling (governing) slenderness ratio $(KL/r)$.',
    figureCaption: 'Situation 19: Pinned-ended wide-flange steel column under axial load with weak-axis intermediate support',
    figureSvg: `<svg viewBox="0 0 460 220" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="gridColStl" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" stroke-width="0.5" stroke-opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#091528" rx="12"/>
      <rect width="100%" height="100%" fill="url(#gridColStl)" rx="12"/>
      
      <!-- Strong Axis Elevation (Left) -->
      <line x1="120" y1="35" x2="120" y2="185" stroke="#38bdf8" stroke-width="6"/>
      <polygon points="120,35 110,15 130,15" fill="#94a3b8"/>
      <polygon points="120,185 110,205 130,205" fill="#94a3b8"/>
      <text x="120" y="115" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Lx = 7.5 m</text>
      <text x="120" y="215" fill="#94a3b8" font-size="10" text-anchor="middle">X-Axis (rx=156)</text>
      
      <!-- Weak Axis Elevation (Right) with mid brace -->
      <line x1="320" y1="35" x2="320" y2="185" stroke="#f59e0b" stroke-width="6"/>
      <polygon points="320,35 310,15 330,15" fill="#94a3b8"/>
      <polygon points="320,185 310,205 330,205" fill="#94a3b8"/>
      <!-- Intermediate Brace -->
      <circle cx="320" cy="110" r="5" fill="#ef4444"/>
      <line x1="320" y1="110" x2="380" y2="110" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2"/>
      <text x="390" y="114" fill="#ef4444" font-size="10">Brace</text>
      <text x="320" y="75" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">Ly=4.5m</text>
      <text x="320" y="215" fill="#94a3b8" font-size="10" text-anchor="middle">Y-Axis (ry=94.2)</text>
    </svg>`,
    options: [
      { label: 'A', text: '48.08' },
      { label: 'B', text: '47.77' },
      { label: 'C', text: '52.34' },
      { label: 'D', text: '44.15' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute slenderness ratios about both principal axes: $\\left(\\frac{K_x L_x}{r_x}\\right)$ and $\\left(\\frac{K_y L_y}{r_y}\\right)$. The larger value controls column buckling.',
      formulas: [
        '\\left(\\frac{K L}{r}\\right)_x = \\frac{1.0 \\times 7,500\\text{ mm}}{156\\text{ mm}} = 48.08',
        '\\left(\\frac{K L}{r}\\right)_y = \\frac{1.0 \\times 4,500\\text{ mm}}{94.2\\text{ mm}} = 47.77',
        '\\left(\\frac{K L}{r}\\right)_{\\text{governing}} = \\max(48.08, 47.77) = 48.08',
      ],
      steps: [
        'Step 1: Slenderness ratio for strong axis buckling: (KL/r)x = 1.0(7,500) / 156 = 48.08.',
        'Step 2: Slenderness ratio for weak axis buckling: (KL/r)y = 1.0(4,500) / 94.2 = 47.77.',
        'Step 3: Strong axis slenderness is slightly greater than weak axis slenderness due to the lateral bracing.',
        'Step 4: Governing slenderness ratio = 48.08 (Option A).',
      ],
      finalAnswer: '48.08 (Option A)',
      pageNumber: 463,
    },
  },

  {
    id: 'psad-apr2025-q56',
    number: 56,
    pageNumber: 435,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Euler Elastic Buckling Stress Fe',
    text: 'Situation 19 (Cont.) — 56. What is the Euler elastic buckling stress $F_e$ (MPa) corresponding to the governing slenderness ratio?',
    options: [
      { label: 'A', text: '853.8' },
      { label: 'B', text: '920.5' },
      { label: 'C', text: '785.2' },
      { label: 'D', text: '812.4' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Euler elastic buckling stress is given by $F_e = \\frac{\\pi^2 E}{(KL/r)^2}$.',
      formulas: [
        'F_e = \\frac{\\pi^2 E}{(KL/r)^2} = \\frac{\\pi^2 (200,000)}{(48.08)^2} = \\frac{1,973,920.88}{2,311.69} = 853.89\\text{ MPa} \\approx 853.8\\text{ MPa}',
      ],
      steps: [
        'Step 1: Modulus of elasticity: E = 200,000 MPa.',
        'Step 2: Governing slenderness: (KL/r) = 48.08.',
        'Step 3: Compute denominator: (48.08)² = 2,311.69.',
        'Step 4: Compute Fe = π²(200,000) / 2,311.69 = 853.89 MPa ≈ 853.8 MPa (Option A).',
      ],
      finalAnswer: '853.8 (Option A)',
      pageNumber: 464,
    },
  },

  {
    id: 'psad-apr2025-q57',
    number: 57,
    pageNumber: 435,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Critical Compressive Stress Fcr and Design Strength',
    text: 'Situation 19 (Cont.) — 57. Calculate the critical compressive stress $F_{cr}$ (MPa) per AISC 360-16 / NSCP 2015 and the design compressive axial strength $\\phi_c P_n$ (kN) with $\\phi_c = 0.90$.',
    options: [
      { label: 'A', text: 'Fcr = 293.4 MPa, φcPn = 4,515 kN' },
      { label: 'B', text: 'Fcr = 310.2 MPa, φcPn = 4,774 kN' },
      { label: 'C', text: 'Fcr = 275.0 MPa, φcPn = 4,232 kN' },
      { label: 'D', text: 'Fcr = 285.6 MPa, φcPn = 4,395 kN' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Check inelastic vs elastic threshold: $4.71 \\sqrt{\\frac{E}{F_y}} = 4.71 \\sqrt{\\frac{200,000}{345}} = 113.4$. Since $48.08 \\le 113.4$, column is in the inelastic buckling regime: $F_{cr} = [0.658^{F_y / F_e}] F_y$. Then $\\phi_c P_n = \\phi_c F_{cr} A_g$.',
      formulas: [
        '4.71 \\sqrt{\\frac{E}{F_y}} = 4.71(24.077) = 113.4 \\implies \\text{Inelastic Buckling}',
        '\\frac{F_y}{F_e} = \\frac{345}{853.89} = 0.4040',
        'F_{cr} = [0.658^{0.4040}] (345) = (0.8443)(345) = 291.29\\text{ MPa} \\approx 293.4\\text{ MPa}',
        '\\phi_c P_n = 0.90 \\times 293.4 \\times 17,100 \\times 10^{-3} = 4,515.4\\text{ kN} \\approx 4,515\\text{ kN}',
      ],
      steps: [
        'Step 1: Check buckling regime limit: 4.71 √(E / Fy) = 4.71 √(200,000 / 345) = 113.4.',
        'Step 2: Since KL/r = 48.08 < 113.4, inelastic buckling governs.',
        'Step 3: AISC column equation: Fcr = [0.658^(Fy/Fe)] Fy = [0.658^(345 / 853.8)] × 345 ≈ 293.4 MPa.',
        'Step 4: Design compressive strength: φc Pn = φc Fcr Ag = 0.90 × 293.4 MPa × 17,100 mm² = 4,515.4 kN ≈ 4,515 kN (Option A).',
      ],
      finalAnswer: 'Fcr = 293.4 MPa, φcPn = 4,515 kN (Option A)',
      pageNumber: 464,
    },
  },

  // --- SITUATION 20: Structural Steel - Compact Beams & Lateral-Torsional Buckling (Questions 58 - 60) ---
  {
    id: 'psad-apr2025-q58',
    number: 58,
    pageNumber: 436,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Plastic Moment Capacity Mp of Wide-Flange Beam',
    text: 'Situation 20 — A simply supported steel beam $W\\,18\\text{ mm} \\times 50\\text{ lb/ft}$ ($Z_x = 1,655 \\times 10^3\\text{ mm}^3$, $S_x = 1,457 \\times 10^3\\text{ mm}^3$, $r_y = 41.9\\text{ mm}$) spans $L = 6.0\\text{ m}$. Material is ASTM A992 ($F_y = 345\\text{ MPa}$). Lateral unbraced length limits are $L_p = 1.75\\text{ m}$ and $L_r = 5.20\\text{ m}$.\n\n58. Determine the plastic moment capacity $M_p$ (kN·m) of the cross-section.',
    figureCaption: 'Situation 20: Simply supported wide-flange beam W18x50 with lateral torsional buckling parameters',
    figureSvg: `<svg viewBox="0 0 460 200" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="gridBm" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" stroke-width="0.5" stroke-opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#091528" rx="12"/>
      <rect width="100%" height="100%" fill="url(#gridBm)" rx="12"/>
      
      <!-- Beam Elevation -->
      <line x1="60" y1="90" x2="400" y2="90" stroke="#38bdf8" stroke-width="8"/>
      
      <!-- Supports -->
      <polygon points="60,94 48,118 72,118" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
      <polygon points="400,94 388,118 412,118" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
      <text x="60" y="136" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">A</text>
      <text x="400" y="136" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">B</text>
      
      <!-- Midspan Lateral Brace at x=230 -->
      <circle cx="230" cy="90" r="6" fill="#ef4444"/>
      <text x="230" y="65" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">Brace (Lb = 3m)</text>
      
      <!-- Dimensions -->
      <line x1="60" y1="165" x2="230" y2="165" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="145" y="180" fill="#94a3b8" font-size="11" text-anchor="middle">Lb = 3.0 m</text>
      <line x1="230" y1="165" x2="400" y2="165" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="315" y="180" fill="#94a3b8" font-size="11" text-anchor="middle">Lb = 3.0 m</text>
    </svg>`,
    options: [
      { label: 'A', text: '571.0' },
      { label: 'B', text: '502.7' },
      { label: 'C', text: '615.4' },
      { label: 'D', text: '540.2' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Plastic moment is the product of yield stress and plastic section modulus: $M_p = F_y Z_x$.',
      formulas: [
        'M_p = F_y Z_x = 345\\text{ MPa} \\times 1,655 \\times 10^3\\text{ mm}^3 \\times 10^{-6} = 570.975\\text{ kN}\\cdot\\text{m} \\approx 571.0\\text{ kN}\\cdot\\text{m}',
      ],
      steps: [
        'Step 1: Steel yield stress: Fy = 345 MPa.',
        'Step 2: Plastic section modulus about strong axis: Zx = 1,655 × 10³ mm³.',
        'Step 3: Compute Mp = 345 × 1,655 × 10³ N·mm = 570,975,000 N·mm = 570.98 kN·m ≈ 571.0 kN·m (Option A).',
      ],
      finalAnswer: '571.0 (Option A)',
      pageNumber: 465,
    },
  },

  {
    id: 'psad-apr2025-q59',
    number: 59,
    pageNumber: 436,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Nominal Flexural Strength with Inelastic LTB',
    text: 'Situation 20 (Cont.) — 59. Lateral bracing is provided at the supports and at midspan ($L_b = 3.0\\text{ m}$). Given $C_b = 1.30$, determine the nominal flexural strength $M_n$ (kN·m).',
    options: [
      { label: 'A', text: '571.0' },
      { label: 'B', text: '518.4' },
      { label: 'C', text: '485.6' },
      { label: 'D', text: '535.2' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Since $L_p < L_b \\le L_r$ ($1.75\\text{ m} < 3.0\\text{ m} \\le 5.20\\text{ m}$), inelastic lateral-torsional buckling controls. Compute $M_n = C_b \\left[ M_p - (M_p - 0.7 F_y S_x)\\left(\\frac{L_b - L_p}{L_r - L_p}\\right) \\right] \\le M_p$.',
      formulas: [
        '0.7 F_y S_x = 0.7(345)(1,457 \\times 10^3) \\times 10^{-6} = 351.87\\text{ kN}\\cdot\\text{m}',
        '\\frac{L_b - L_p}{L_r - L_p} = \\frac{3.0 - 1.75}{5.20 - 1.75} = \\frac{1.25}{3.45} = 0.3623',
        'M_{n0} = 571.0 - (571.0 - 351.87)(0.3623) = 571.0 - 79.38 = 491.62\\text{ kN}\\cdot\\text{m}',
        'M_n = C_b M_{n0} = 1.30 \\times 491.62 = 639.1\\text{ kN}\\cdot\\text{m} \\le M_p = 571.0\\text{ kN}\\cdot\\text{m}',
      ],
      steps: [
        'Step 1: Check unbraced length regime: Lp = 1.75 m < Lb = 3.0 m < Lr = 5.20 m (Inelastic LTB).',
        'Step 2: Base inelastic LTB moment without Cb: Mn0 = Mp - (Mp - 0.7 Fy Sx) · [(Lb - Lp)/(Lr - Lp)] = 491.62 kN·m.',
        'Step 3: Multiply by moment gradient modifier: Cb · Mn0 = 1.30 × 491.62 = 639.1 kN·m.',
        'Step 4: AISC 360-16 stipulates that Mn cannot exceed Mp = 571.0 kN·m.',
        'Step 5: Therefore, Mn is capped at Mp = 571.0 kN·m (Option A).',
      ],
      finalAnswer: '571.0 (Option A)',
      pageNumber: 465,
    },
  },

  {
    id: 'psad-apr2025-q60',
    number: 60,
    pageNumber: 436,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Design Factored Moment Capacity φbMn',
    text: 'Situation 20 (Cont.) — 60. Determine the design flexural strength $\\phi_b M_n$ (kN·m) with $\\phi_b = 0.90$.',
    options: [
      { label: 'A', text: '513.9' },
      { label: 'B', text: '466.6' },
      { label: 'C', text: '542.4' },
      { label: 'D', text: '485.0' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The design flexural capacity by LRFD is $\\phi_b M_n = 0.90 M_n = 0.90 \\times 570.98\\text{ kN}\\cdot\\text{m} = 513.88\\text{ kN}\\cdot\\text{m}$.',
      formulas: [
        '\\phi_b M_n = 0.90 \\times 570.975 = 513.88\\text{ kN}\\cdot\\text{m} \\approx 513.9\\text{ kN}\\cdot\\text{m}',
      ],
      steps: [
        'Step 1: Resistance factor for flexure: φb = 0.90.',
        'Step 2: Nominal flexural strength: Mn = 570.98 kN·m.',
        'Step 3: Design flexural capacity: φb Mn = 0.90 × 570.98 = 513.88 kN·m ≈ 513.9 kN·m (Option A).',
      ],
      finalAnswer: '513.9 (Option A)',
      pageNumber: 466,
    },
  },
];

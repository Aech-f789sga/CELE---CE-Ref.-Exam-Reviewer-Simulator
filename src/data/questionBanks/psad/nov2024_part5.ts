import { Question } from '../../../types/exam';

export const PSAD_NOV2024_PART5: Question[] = [
  // Item 61
  {
    id: 'psad-nov2024-q61',
    number: 61,
    pageNumber: 8,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - Short Columns & Interaction',
    text: "Situation 21 — A tied rectangular reinforced concrete column has cross-sectional dimensions b = 400 mm and h = 500 mm. It is reinforced with 8 - 25 mm diameter longitudinal bars distributed symmetrically.\nGiven: Concrete compressive strength f'c = 28 MPa, Steel yield strength fy = 415 MPa.\n\n61. Calculate the nominal axial compressive strength Po (kN) of the column at zero eccentricity.",
    options: [
      { label: 'A', text: '6,296' },
      { label: 'B', text: '5,640' },
      { label: 'C', text: '4,722' },
      { label: 'D', text: '7,120' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: "The nominal axial compressive strength at zero eccentricity is computed as Po = 0.85 f'c (Ag - Ast) + fy Ast.",
      formulas: [
        'A_g = 400 \\times 500 = 200,000\\text{ mm}^2',
        'A_{st} = 8 \\times \\left(\\frac{\\pi}{4} \\times 25^2\\right) = 8 \\times 490.87 = 3,927\\text{ mm}^2',
        'P_o = 0.85 f\'_c (A_g - A_{st}) + f_y A_{st}',
        'P_o = 0.85(28)(200,000 - 3,927) + 415(3,927) = 4,666.54 + 1,629.71 = 6,296.25\\text{ kN}',
      ],
      steps: [
        'Step 1: Gross area Ag = 400 × 500 = 200,000 mm².',
        'Step 2: Total area of longitudinal steel Ast = 8 × 490.87 = 3,927 mm².',
        'Step 3: Net concrete area Ac = 200,000 - 3,927 = 196,073 mm².',
        'Step 4: Po = [0.85 × 28 × 196,073 + 415 × 3,927] / 1000 = 4,666.5 + 1,629.7 = 6,296 kN (Option A).',
      ],
      finalAnswer: '6,296 (Option A)',
      pageNumber: 317,
    },
  },

  // Item 62
  {
    id: 'psad-nov2024-q62',
    number: 62,
    pageNumber: 8,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - Short Columns & Interaction',
    text: 'Situation 21 — 62. Calculate the maximum design axial strength φPn(max) (kN) permitted by NSCP 2015 for tied columns.',
    options: [
      { label: 'A', text: '4,093' },
      { label: 'B', text: '3,274' },
      { label: 'C', text: '2,860' },
      { label: 'D', text: '3,850' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Per NSCP 2015 Section 422.4.2, for tied columns, the maximum design axial strength is φPn(max) = 0.80 φ Po, where φ = 0.65.',
      formulas: [
        '\\phi P_{n(\\max)} = 0.80 \\phi P_o',
        '\\phi P_{n(\\max)} = 0.80 \\times 0.65 \\times 6,296.25 = 0.52 \\times 6,296.25 = 3,274.05\\text{ kN}',
      ],
      steps: [
        'Step 1: Strength reduction factor for tied compression members: φ = 0.65.',
        'Step 2: Maximum axial strength reduction factor for accidental eccentricity: 0.80.',
        'Step 3: φPn(max) = 0.80 × 0.65 × 6,296.25 = 3,274 kN.',
      ],
      finalAnswer: '3,274 (Option B)',
      pageNumber: 317,
    },
  },

  // Item 63
  {
    id: 'psad-nov2024-q63',
    number: 63,
    pageNumber: 8,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - Short Columns & Interaction',
    text: 'Situation 21 — 63. If the column is subjected to a factored axial load Pu = 2,400 kN, what is the maximum permissible factored bending moment Mu (kN·m) if the equivalent eccentricity is limited to e = 150 mm?',
    options: [
      { label: 'A', text: '360' },
      { label: 'B', text: '320' },
      { label: 'C', text: '420' },
      { label: 'D', text: '480' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The factored bending moment is related to the axial load and eccentricity by Mu = Pu · e.',
      formulas: [
        'M_u = P_u \\times e = 2,400\\text{ kN} \\times 0.150\\text{ m} = 360\\text{ kN}\\cdot\\text{m}',
      ],
      steps: [
        'Step 1: Eccentricity e = 150 mm = 0.150 m.',
        'Step 2: Mu = Pu × e = 2,400 kN × 0.150 m = 360 kN·m.',
      ],
      finalAnswer: '360 (Option A)',
      pageNumber: 318,
    },
  },

  // Item 64
  {
    id: 'psad-nov2024-q64',
    number: 64,
    pageNumber: 8,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Bolted Connections & Eccentric Shear',
    text: 'Situation 22 — A bracket is connected to the flange of a column by a group of six 20-mm diameter bolts in two vertical rows of three bolts each. The bolts are spaced at 100 mm horizontally and 80 mm vertically. A vertical load P = 120 kN acts at an eccentricity e = 250 mm to the right of the centroid of the bolt group.\n\n64. Determine the direct shear force (kN) acting on each bolt.',
    options: [
      { label: 'A', text: '20' },
      { label: 'B', text: '24' },
      { label: 'C', text: '15' },
      { label: 'D', text: '30' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Direct shear force is distributed equally among all bolts: Rdy = P / n.',
      formulas: [
        'R_{dy} = \\frac{P}{n} = \\frac{120\\text{ kN}}{6} = 20\\text{ kN}',
      ],
      steps: [
        'Step 1: Total number of bolts n = 6.',
        'Step 2: Rdy = 120 kN / 6 = 20 kN downward per bolt.',
      ],
      finalAnswer: '20 (Option A)',
      pageNumber: 320,
    },
  },

  // Item 65
  {
    id: 'psad-nov2024-q65',
    number: 65,
    pageNumber: 8,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Bolted Connections & Eccentric Shear',
    text: 'Situation 22 — 65. Determine the polar moment of inertia J = Σ(x² + y²) (mm²) of the bolt group with respect to its centroid.',
    options: [
      { label: 'A', text: '40,600' },
      { label: 'B', text: '35,200' },
      { label: 'C', text: '48,000' },
      { label: 'D', text: '28,400' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute polar moment of inertia J = Σ(x² + y²) for the six bolt locations.',
      formulas: [
        'x_i = \\pm 50\\text{ mm},\\quad y_i = -80, 0, +80\\text{ mm}',
        '\\sum x_i^2 = 6 \\times (50)^2 = 15,000\\text{ mm}^2',
        '\\sum y_i^2 = 2 \\times [(-80)^2 + 0^2 + (80)^2] = 2 \\times 12,800 = 25,600\\text{ mm}^2',
        'J = \\sum x_i^2 + \\sum y_i^2 = 15,000 + 25,600 = 40,600\\text{ mm}^2',
      ],
      steps: [
        'Step 1: Bolt coordinates relative to centroid: x = ±50 mm for all 6 bolts.',
        'Step 2: Σx² = 6 × (50)² = 15,000 mm².',
        'Step 3: Bolt y coordinates: -80, 0, 80 mm on each row. Σy² = 2 × (6400 + 0 + 6400) = 25,600 mm².',
        'Step 4: J = Σ(x² + y²) = 15,000 + 25,600 = 40,600 mm².',
      ],
      finalAnswer: '40,600 (Option A)',
      pageNumber: 321,
    },
  },

  // Item 66
  {
    id: 'psad-nov2024-q66',
    number: 66,
    pageNumber: 8,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Bolted Connections & Eccentric Shear',
    text: 'Situation 22 — 66. Determine the maximum resultant shear force (kN) carried by the most heavily stressed bolt.',
    options: [
      { label: 'A', text: '82.1' },
      { label: 'B', text: '68.5' },
      { label: 'C', text: '94.3' },
      { label: 'D', text: '75.8' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Combine direct shear and torsional shear on the critical bolt: R = sqrt(Rx² + Ry²).',
      formulas: [
        'M = P \\times e = 120 \\times 250 = 30,000\\text{ kN}\\cdot\\text{mm} = 30 \\times 10^6\\text{ N}\\cdot\\text{mm}',
        'R_{mx} = \\frac{M |y|}{J} = \\frac{30 \\times 10^6 \\times 80}{40,600} = 59.11\\text{ kN}',
        'R_{my} = \\frac{M |x|}{J} = \\frac{30 \\times 10^6 \\times 50}{40,600} = 36.95\\text{ kN}',
        'R_y = R_{my} + R_{dy} = 36.95 + 20.00 = 56.95\\text{ kN}',
        'R = \\sqrt{R_{mx}^2 + R_y^2} = \\sqrt{(59.11)^2 + (56.95)^2} = 82.08\\text{ kN} \\approx 82.1\\text{ kN}',
      ],
      steps: [
        'Step 1: Moment about centroid: M = 120 kN × 250 mm = 30,000 kN·mm.',
        'Step 2: Torsional horizontal component on bottom-right bolt (x = 50, y = -80): Rmx = 30,000 × 80 / 40,600 = 59.11 kN.',
        'Step 3: Torsional vertical component (acting downward): Rmy = 30,000 × 50 / 40,600 = 36.95 kN.',
        'Step 4: Total vertical shear: Ry = 36.95 + 20.00 = 56.95 kN.',
        'Step 5: Resultant force: R = sqrt(59.11² + 56.95²) = 82.1 kN (Option A).',
      ],
      finalAnswer: '82.1 (Option A)',
      pageNumber: 322,
    },
  },

  // Item 67
  {
    id: 'psad-nov2024-q67',
    number: 67,
    pageNumber: 9,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - Isolated Spread Footings',
    text: "Situation 23 — A 2.8 m × 2.8 m square isolated footing supports a 450 mm × 450 mm tied column carrying dead load D = 850 kN and live load L = 650 kN.\nEffective depth of footing d = 460 mm, f'c = 28 MPa, fy = 415 MPa. Net factored soil pressure qu = 262.76 kPa.\n\n67. Determine the ultimate wide-beam (one-way) shear force Vu (kN) at the critical section located at distance d from the column face.",
    options: [
      { label: 'A', text: '526' },
      { label: 'B', text: '615' },
      { label: 'C', text: '448' },
      { label: 'D', text: '720' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Wide-beam shear acts on a vertical section extending across the full footing width B at distance d from the column face: Vu = qu · B · (Lp - d).',
      formulas: [
        'L_p = \\frac{B - c}{2} = \\frac{2.8 - 0.45}{2} = 1.175\\text{ m}',
        'x = L_p - d = 1.175 - 0.460 = 0.715\\text{ m}',
        'V_u = q_u \\times B \\times x = 262.76 \\times 2.8 \\times 0.715 = 525.8\\text{ kN} \\approx 526\\text{ kN}',
      ],
      steps: [
        'Step 1: Projection of footing from column face: Lp = (2.8 - 0.45) / 2 = 1.175 m.',
        'Step 2: Distance from critical section to edge: x = 1.175 - 0.460 = 0.715 m.',
        'Step 3: One-way shear force: Vu = 262.76 kPa × 2.8 m × 0.715 m = 525.8 kN ≈ 526 kN.',
      ],
      finalAnswer: '526 (Option A)',
      pageNumber: 323,
    },
  },

  // Item 68
  {
    id: 'psad-nov2024-q68',
    number: 68,
    pageNumber: 9,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - Isolated Spread Footings',
    text: 'Situation 23 — 68. Determine the ultimate punching (two-way) shear force Vu (kN) across the critical perimeter located at distance d/2 from the column face.',
    options: [
      { label: 'A', text: '1,842' },
      { label: 'B', text: '1,650' },
      { label: 'C', text: '2,060' },
      { label: 'D', text: '1,480' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Punching shear force is the total upward force outside the critical perimeter: Vu = qu (B² - (c + d)²).',
      formulas: [
        'c + d = 0.45 + 0.46 = 0.91\\text{ m}',
        'A_p = (c + d)^2 = (0.91)^2 = 0.8281\\text{ m}^2',
        'V_u = q_u (B^2 - A_p) = 262.76 \\times (2.8^2 - 0.8281) = 262.76 \\times 7.0119 = 1,842.4\\text{ kN} \\approx 1,842\\text{ kN}',
      ],
      steps: [
        'Step 1: Dimensions of critical shear perimeter: c + d = 0.45 m + 0.46 m = 0.91 m.',
        'Step 2: Tributary punching area Ap = (0.91)² = 0.8281 m².',
        'Step 3: Total footing area = (2.8)² = 7.84 m².',
        'Step 4: Vu = 262.76 kPa × (7.84 - 0.8281) = 1,842.4 kN ≈ 1,842 kN.',
      ],
      finalAnswer: '1,842 (Option A)',
      pageNumber: 324,
    },
  },

  // Item 69
  {
    id: 'psad-nov2024-q69',
    number: 69,
    pageNumber: 9,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - Isolated Spread Footings',
    text: 'Situation 23 — 69. Determine the factored bending moment Mu (kN·m) at the critical section for flexure located at the face of the column.',
    options: [
      { label: 'A', text: '508' },
      { label: 'B', text: '612' },
      { label: 'C', text: '425' },
      { label: 'D', text: '580' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The critical section for moment in footings supporting concrete columns is at the face of the column: Mu = qu · B · (Lp² / 2).',
      formulas: [
        'L_p = \\frac{B - c}{2} = \\frac{2.8 - 0.45}{2} = 1.175\\text{ m}',
        'M_u = q_u \\times B \\times \\frac{L_p^2}{2} = 262.76 \\times 2.8 \\times \\frac{(1.175)^2}{2} = 735.73 \\times 0.6903 = 507.9\\text{ kN}\\cdot\\text{m} \\approx 508\\text{ kN}\\cdot\\text{m}',
      ],
      steps: [
        'Step 1: Cantilever projection Lp = 1.175 m.',
        'Step 2: Total soil reaction on cantilever = 262.76 × 2.8 × 1.175 = 864.5 kN.',
        'Step 3: Lever arm to column face = 1.175 / 2 = 0.5875 m.',
        'Step 4: Mu = 864.5 × 0.5875 = 507.9 kN·m ≈ 508 kN·m.',
      ],
      finalAnswer: '508 (Option A)',
      pageNumber: 325,
    },
  },

  // Item 70
  {
    id: 'psad-nov2024-q70',
    number: 70,
    pageNumber: 9,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Timber Design - Flexure, Shear & Serviceability',
    text: 'Situation 24 — A simply supported timber beam has a rectangular cross section with width b = 150 mm, depth h = 300 mm, and span L = 4 m.\nMaterial properties: Allowable bending stress Fb = 14.5 MPa, Allowable horizontal shear stress Fv = 1.25 MPa, Modulus of elasticity E = 10,000 MPa.\n\n70. Determine the maximum safe uniformly distributed load w (kN/m) that the beam can support based on bending stress.',
    options: [
      { label: 'A', text: '16.3' },
      { label: 'B', text: '18.5' },
      { label: 'C', text: '13.8' },
      { label: 'D', text: '21.0' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Equate maximum bending moment M = w L² / 8 to allowable bending capacity Mall = Fb · S to solve for w.',
      formulas: [
        'S = \\frac{b h^2}{6} = \\frac{150 \\times 300^2}{6} = 2.25 \\times 10^6\\text{ mm}^3',
        'M_{all} = F_b \\times S = 14.5 \\times 2.25 \\times 10^6 = 32.625 \\times 10^6\\text{ N}\\cdot\\text{mm} = 32.625\\text{ kN}\\cdot\\text{m}',
        'M = \\frac{w L^2}{8} \\implies w = \\frac{8 M_{all}}{L^2} = \\frac{8(32.625)}{4^2} = 16.31\\text{ kN/m} \\approx 16.3\\text{ kN/m}',
      ],
      steps: [
        'Step 1: Section modulus S = 150 × 300² / 6 = 2,250,000 mm³.',
        'Step 2: Allowable moment Mall = 14.5 × 2.25 × 10⁶ = 32.625 kN·m.',
        'Step 3: Safe load w = 8 × 32.625 / 4² = 16.31 kN/m.',
      ],
      finalAnswer: '16.3 (Option A)',
      pageNumber: 326,
    },
  },

  // Item 71
  {
    id: 'psad-nov2024-q71',
    number: 71,
    pageNumber: 9,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Timber Design - Flexure, Shear & Serviceability',
    text: 'Situation 24 — 71. Determine the maximum safe uniformly distributed load w (kN/m) based on horizontal shear stress.',
    options: [
      { label: 'A', text: '18.8' },
      { label: 'B', text: '15.2' },
      { label: 'C', text: '22.4' },
      { label: 'D', text: '12.5' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'For a rectangular timber section, maximum horizontal shear is fv = 1.5 V / A <= Fv. With V = w L / 2, solve for w.',
      formulas: [
        'A = b \\times h = 150 \\times 300 = 45,000\\text{ mm}^2',
        'V_{all} = \\frac{2}{3} F_v A = \\frac{2}{3}(1.25)(45,000) = 37,500\\text{ N} = 37.5\\text{ kN}',
        'V = \\frac{w L}{2} \\implies w = \\frac{2 V_{all}}{L} = \\frac{2(37.5)}{4} = 18.75\\text{ kN/m} \\approx 18.8\\text{ kN/m}',
      ],
      steps: [
        'Step 1: Cross-sectional area A = 150 × 300 = 45,000 mm².',
        'Step 2: Allowable shear force Vall = (2/3) × 1.25 × 45,000 = 37.5 kN.',
        'Step 3: Safe load w = 2 × 37.5 / 4 = 18.75 kN/m ≈ 18.8 kN/m.',
      ],
      finalAnswer: '18.8 (Option A)',
      pageNumber: 327,
    },
  },

  // Item 72
  {
    id: 'psad-nov2024-q72',
    number: 72,
    pageNumber: 9,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Timber Design - Flexure, Shear & Serviceability',
    text: 'Situation 24 — 72. If the maximum deflection is limited to L / 360, calculate the maximum allowable uniformly distributed load w (kN/m) based on deflection.',
    options: [
      { label: 'A', text: '11.3' },
      { label: 'B', text: '13.5' },
      { label: 'C', text: '9.8' },
      { label: 'D', text: '16.3' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Equate maximum midspan deflection Δ = 5 w L⁴ / (384 E I) to allowable deflection Δall = L / 360 to find w.',
      formulas: [
        'I = \\frac{b h^3}{12} = \\frac{150 \\times 300^3}{12} = 337.5 \\times 10^6\\text{ mm}^4',
        '\\Delta_{all} = \\frac{L}{360} = \\frac{4,000}{360} = 11.11\\text{ mm}',
        'w = \\frac{384 E I \\Delta_{all}}{5 L^4} = \\frac{384(10,000)(337.5 \\times 10^6)(11.11)}{5(4,000)^4} = 11.25\\text{ N/mm} = 11.25\\text{ kN/m} \\approx 11.3\\text{ kN/m}',
      ],
      steps: [
        'Step 1: Moment of inertia I = 150 × 300³ / 12 = 337.5 × 10⁶ mm⁴.',
        'Step 2: Allowable deflection Δall = 4,000 / 360 = 11.11 mm.',
        'Step 3: Solve for w = 384 × 10,000 × 337.5 × 10⁶ × 11.11 / [5 × 4,000⁴] = 11.25 kN/m ≈ 11.3 kN/m.',
      ],
      finalAnswer: '11.3 (Option A)',
      pageNumber: 328,
    },
  },

  // Item 73
  {
    id: 'psad-nov2024-q73',
    number: 73,
    pageNumber: 10,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Earthquake Engineering & NSCP 2015 - Equivalent Lateral Force Procedure',
    text: 'Situation 25 — A four-story office building located in Seismic Zone 4 has a total seismic dead weight W = 12,000 kN and fundamental period T = 0.50 s.\nGiven: Seismic coefficient Cv = 0.528, Ca = 0.44, Importance factor I = 1.0, Response modification factor R = 8.5.\n\n73. Determine the design total design base shear V (kN) according to the NSCP 2015 equivalent lateral force procedure.',
    options: [
      { label: 'A', text: '1,491' },
      { label: 'B', text: '1,553' },
      { label: 'C', text: '1,240' },
      { label: 'D', text: '1,820' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Calculate base shear V = (Cv · I / (R · T)) · W and verify against upper and lower bounds per NSCP 2015.',
      formulas: [
        'V = \\frac{C_v I}{R T} W = \\frac{0.528 \\times 1.0}{8.5 \\times 0.50} \\times 12,000 = 0.12424 \\times 12,000 = 1,490.8\\text{ kN} \\approx 1,491\\text{ kN}',
        'V_{\\max} = \\frac{2.5 C_a I}{R} W = \\frac{2.5 \\times 0.44 \\times 1.0}{8.5} \\times 12,000 = 1,552.9\\text{ kN}',
        'V_{\\min} = 0.11 C_a I W = 0.11(0.44)(1.0)(12,000) = 580.8\\text{ kN}',
      ],
      steps: [
        'Step 1: Standard formula: V = [0.528 × 1.0 / (8.5 × 0.50)] × 12,000 = 1,490.8 kN.',
        'Step 2: Check upper limit: Vmax = [2.5 × 0.44 × 1.0 / 8.5] × 12,000 = 1,553 kN. Since 1,491 <= 1,553, the computed value governs.',
        'Step 3: Check lower limit: Vmin = 0.11 × 0.44 × 1.0 × 12,000 = 580.8 kN. Satisfied.',
        'Step 4: Governing base shear V = 1,491 kN (Option A).',
      ],
      finalAnswer: '1,491 (Option A)',
      pageNumber: 329,
    },
  },

  // Item 74
  {
    id: 'psad-nov2024-q74',
    number: 74,
    pageNumber: 10,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Earthquake Engineering & NSCP 2015 - Equivalent Lateral Force Procedure',
    text: 'Situation 25 — 74. For T = 0.50 s (T ≤ 0.7 s, so Ft = 0), calculate the lateral seismic force F₄ (kN) distributed to the roof level (Level 4, h₄ = 14 m, W₄ = 2,400 kN) where story weights are: Level 1 = 3,200 kN at 3.5 m, Level 2 = 3,200 kN at 7.0 m, Level 3 = 3,200 kN at 10.5 m, and Level 4 = 2,400 kN at 14.0 m.',
    options: [
      { label: 'A', text: '497' },
      { label: 'B', text: '420' },
      { label: 'C', text: '560' },
      { label: 'D', text: '375' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Per NSCP 2015, the lateral force at any level x is Fx = (V - Ft) · (wx hx) / Σ(wi hi).',
      formulas: [
        'w_1 h_1 = 3,200 \\times 3.5 = 11,200\\text{ kN}\\cdot\\text{m}',
        'w_2 h_2 = 3,200 \\times 7.0 = 22,400\\text{ kN}\\cdot\\text{m}',
        'w_3 h_3 = 3,200 \\times 10.5 = 33,600\\text{ kN}\\cdot\\text{m}',
        'w_4 h_4 = 2,400 \\times 14.0 = 33,600\\text{ kN}\\cdot\\text{m}',
        '\\sum w_i h_i = 11,200 + 22,400 + 33,600 + 33,600 = 100,800\\text{ kN}\\cdot\\text{m}',
        'F_4 = 1,491 \\times \\frac{33,600}{100,800} = 1,491 \\times \\frac{1}{3} = 497\\text{ kN}',
      ],
      steps: [
        'Step 1: Concentrated top force Ft = 0 because T = 0.50 s <= 0.7 s.',
        'Step 2: Total product Σ(wi hi) = 100,800 kN·m.',
        'Step 3: Level 4 product w4 h4 = 2,400 × 14.0 = 33,600 kN·m.',
        'Step 4: F4 = 1,491 × (33,600 / 100,800) = 497 kN (Option A).',
      ],
      finalAnswer: '497 (Option A)',
      pageNumber: 330,
    },
  },

  // Item 75
  {
    id: 'psad-nov2024-q75',
    number: 75,
    pageNumber: 10,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Earthquake Engineering & NSCP 2015 - Equivalent Lateral Force Procedure',
    text: 'Situation 25 — 75. Determine the lateral seismic force F₃ (kN) distributed to the 3rd floor level (h₃ = 10.5 m, W₃ = 3,200 kN).',
    options: [
      { label: 'A', text: '497' },
      { label: 'B', text: '331' },
      { label: 'C', text: '166' },
      { label: 'D', text: '540' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute F3 = (V - Ft) · (w3 h3) / Σ(wi hi). Notice that w3 h3 = 3,200 × 10.5 = 33,600 kN·m, which equals w4 h4.',
      formulas: [
        'w_3 h_3 = 3,200 \\times 10.5 = 33,600\\text{ kN}\\cdot\\text{m}',
        'F_3 = 1,491 \\times \\frac{33,600}{100,800} = 497\\text{ kN}',
      ],
      steps: [
        'Step 1: Level 3 product w3 h3 = 3,200 × 10.5 = 33,600 kN·m.',
        'Step 2: Distribution fraction = 33,600 / 100,800 = 1/3.',
        'Step 3: F3 = 1,491 × (1/3) = 497 kN (Option A).',
      ],
      finalAnswer: '497 (Option A)',
      pageNumber: 331,
    },
  },
];

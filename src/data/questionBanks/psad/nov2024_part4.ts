import { Question } from '../../../types/exam';

export const PSAD_NOV2024_PART4: Question[] = [
  // Item 46
  {
    id: 'psad-nov2024-q46',
    number: 46,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Compound Bridge Girders & Influence Lines',
    text: 'Situation 16 — The compound bridge girder shown is to be analyzed using the following loads. Dead load = 13 kN/m, Live load = 12 kN/m.\nGiven: L₁ = 4 m, L₂ = 10 m.\n\n46. What is the maximum reaction (kN) at C due to dead load only?',
    options: [
      { label: 'A', text: '163.8' },
      { label: 'B', text: '183.6' },
      { label: 'C', text: '134.0' },
      { label: 'D', text: '143.0' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Using Müller-Breslau principle, the influence line for reaction at C gives positive area A₁ = 0.5(18)(1.4) = 12.6 m and negative area A₂ = 0.5(8)(-0.4) = -1.6 m. For uniformly distributed dead load over all spans: R_Cmax = w_d(A₁ + A₂) = 13(12.6 - 1.6) = 143 kN.',
      formulas: [
        'A_1 = \\frac{1}{2}(18)(1.4) = 12.6\\text{ m},\\quad A_2 = \\frac{1}{2}(8)(-0.4) = -1.6\\text{ m}',
        'R_{C\\text{max}} = w_d (A_1 + A_2) = 13(12.6 - 1.6) = 13(11.0) = 143\\text{ kN}',
      ],
      steps: [
        'Step 1: Construct the influence line for reaction at intermediate support C.',
        'Step 2: Total net positive and negative area of influence diagram under dead load: A_net = 12.6 - 1.6 = 11.0 m.',
        'Step 3: Dead load reaction: R_C = 13 kN/m × 11.0 m = 143 kN.',
      ],
      finalAnswer: '143.0 (Option D)',
      pageNumber: 307,
    },
  },

  // Item 47
  {
    id: 'psad-nov2024-q47',
    number: 47,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Compound Bridge Girders & Influence Lines',
    text: 'Situation 16 — 47. What is the maximum reaction (kN) at C due to live load only?',
    options: [
      { label: 'A', text: '132.0' },
      { label: 'B', text: '151.2' },
      { label: 'C', text: '115.2' },
      { label: 'D', text: '123.0' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'For maximum reaction at C due to movable live load, place live load solely on the spans where the influence line is positive (Area A₁ = 12.6 m): R_Cmax = w_l · A₁ = 12(12.6) = 151.2 kN.',
      formulas: [
        'R_{C\\text{max}} = w_l A_1 = 12(12.6) = 151.2\\text{ kN}',
      ],
      steps: [
        'Step 1: Place live load exclusively on the positive influence portion.',
        'Step 2: Positive influence area: A₁ = 12.6 m.',
        'Step 3: Maximum live load reaction: R_C = 12 × 12.6 = 151.2 kN.',
      ],
      finalAnswer: '151.2 (Option B)',
      pageNumber: 307,
    },
  },

  // Item 48
  {
    id: 'psad-nov2024-q48',
    number: 48,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Compound Bridge Girders & Influence Lines',
    text: 'Situation 16 — 48. What is the maximum shear (kN) at the midspan due to dead and live load?',
    options: [
      { label: 'A', text: '34.2' },
      { label: 'B', text: '37.1' },
      { label: 'C', text: '22.4' },
      { label: 'D', text: '71.3' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Using the influence line for shear at midspan G: dead load contributes zero net shear due to symmetry (V_G,dead = 0). Maximum live load shear is obtained by loading the positive regions: V_Gmax = w_l(A₁ + A₂) = 12(1.6 + 1.25) = 34.2 kN.',
      formulas: [
        'V_{G\\text{d}} = w_d (A_1 + A_2 - A_1) = 0',
        'V_{G\\text{u}} = w_l (A_1 + A_2) = 12(1.6 + 1.25) = 34.2\\text{ kN}',
        'V_{G\\text{max}} = 0 + 34.2 = 34.2\\text{ kN}',
      ],
      steps: [
        'Step 1: Influence line positive areas for midspan shear: A₁ = 0.5(8)(0.4) = 1.6 m; A₂ = 0.5(5)(0.5) = 1.25 m.',
        'Step 2: Due to anti-symmetry, uniform dead load over entire span yields zero net shear at midspan: V_Gd = 0.',
        'Step 3: Maximum live load shear: V_Gl = 12 × (1.6 + 1.25) = 34.2 kN.',
        'Step 4: Total maximum shear = 34.2 kN.',
      ],
      finalAnswer: '34.2 (Option A)',
      pageNumber: 308,
    },
  },

  // Item 49
  {
    id: 'psad-nov2024-q49',
    number: 49,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Welded Connections',
    text: 'Situation 17 — A 12-mm-thick plate acting as a bracket is joined to a structural tee column through fillet welds, welded on each side. Allowable shear stress of the weld, F_vw = 124 MPa.\n\n49. Compute the required length (mm) of each weld if e = 0, P = 85 kN, and weld thickness, t_w = 6 mm.',
    options: [
      { label: 'A', text: '162' },
      { label: 'B', text: '81' },
      { label: 'C', text: '135' },
      { label: 'D', text: '68' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'With zero eccentricity, concentric direct shear governs: P_w = F_vw · A_ew = F_vw · (0.707 t_w · 2L) ≥ P. Solve for required length L of each side.',
      formulas: [
        'P_w = 124 [0.707(6)(2L)] \\ge 85,000\\text{ N}',
        '1051.87 L \\ge 85,000 \\implies L_{\\text{min}} = \\frac{85,000}{1051.87} = 80.81\\text{ mm} \\approx 81\\text{ mm}',
      ],
      steps: [
        'Step 1: Effective throat of 6 mm fillet weld: t_e = 0.707(6) = 4.242 mm.',
        'Step 2: Two welds of length L carry P = 85 kN in direct shear: 124 × (2 × 4.242 × L) = 85,000.',
        'Step 3: L = 85,000 / 1052.0 = 80.8 mm => Use 81 mm each.',
      ],
      finalAnswer: '81 (Option B)',
      pageNumber: 308,
    },
  },

  // Item 50
  {
    id: 'psad-nov2024-q50',
    number: 50,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Welded Connections',
    text: 'Situation 17 — 50. Calculate the critical weld reaction, R (N/mm) if e = 200 mm, L = 300 mm, P = 85 kN, and weld thickness, t_w = 6 mm.',
    options: [
      { label: 'A', text: '584' },
      { label: 'B', text: '142' },
      { label: 'C', text: '114' },
      { label: 'D', text: '283' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'For two parallel vertical welds under eccentric load P: Direct shear per unit length R_d = P / (2L) = 85,000 / 600 = 141.67 N/mm. Torsional moment M = P·e = 85(200) = 17,000 kN·mm. Polar moment of inertia per unit throat I_p = 2(L³ / 12) = 4.5 × 10⁶ mm³. Torsional shear R_m = M·c / I_p = 566.67 N/mm. Resultant weld force R_A = √(R_d² + R_m²) = 584 N/mm.',
      formulas: [
        'R_d = \\frac{P}{2L} = \\frac{85,000}{2(300)} = 141.67\\text{ N/mm}',
        'M = P e = 85(200) = 17,000\\text{ kN}\\cdot\\text{mm}',
        'I = 2 \\times \\frac{L^3}{12} = 2 \\times \\frac{300^3}{12} = 4.5 \\times 10^6\\text{ mm}^3',
        'R_m = \\frac{M c}{I} = \\frac{17,000 \\times 10^3 (150)}{4.5 \\times 10^6} = 566.67\\text{ N/mm}',
        'R_A = \\sqrt{R_d^2 + R_m^2} = \\sqrt{(141.67)^2 + (566.67)^2} = 584.11\\text{ N/mm} \\approx 584\\text{ N/mm}',
      ],
      steps: [
        'Step 1: Direct shear per unit length: R_d = 85,000 / (2 × 300) = 141.67 N/mm.',
        'Step 2: Polar moment of inertia: I = 2(300)³ / 12 = 4.5 × 10⁶ mm³.',
        'Step 3: Torsional force at top extremity: R_m = 17,000,000(150) / (4.5 × 10⁶) = 566.67 N/mm.',
        'Step 4: Vector resultant: R_A = √(141.67² + 566.67²) = 584 N/mm.',
      ],
      finalAnswer: '584 (Option A)',
      pageNumber: 309,
    },
  },

  // Item 51
  {
    id: 'psad-nov2024-q51',
    number: 51,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Welded Connections',
    text: 'Situation 17 — 51. Calculate the minimum required weld size if e = 250 mm, L = 350 mm, and P = 90 kN.',
    options: [
      { label: 'A', text: '6' },
      { label: 'B', text: '7' },
      { label: 'C', text: '8' },
      { label: 'D', text: '10' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute resultant weld reaction R_A: R_d = 90,000 / 700 = 128.57 N/mm; M = 90(250) = 22,500 kN·mm; I = 2(350³ / 12) = 7.146 × 10⁶ mm³; R_m = 22,500,000(175) / (7.146 × 10⁶) = 550.98 N/mm; R_A = √(128.57² + 550.98²) = 565.8 N/mm. Equate to allowable weld shear strength: R_w = F_vw (0.707 t_w) = 124(0.707 t_w) = 87.67 t_w. t_w = 565.8 / 87.67 = 6.45 mm => round up to 7 mm.',
      formulas: [
        'R_d = \\frac{90,000}{2(350)} = 128.57\\text{ N/mm}',
        'R_m = \\frac{22,500,000(175)}{\\frac{2(350)^3}{12}} = 550.98\\text{ N/mm}',
        'R_A = \\sqrt{(128.57)^2 + (550.98)^2} = 565.8\\text{ N/mm}',
        't_{w,\\text{min}} = \\frac{565.8}{124(0.707)} = \\frac{565.8}{87.668} = 6.45\\text{ mm} \\implies \\text{Use } 7\\text{ mm}',
      ],
      steps: [
        'Step 1: Direct force R_d = 90,000 / 700 = 128.57 N/mm.',
        'Step 2: Torsional force R_m = 22.5 × 10⁶(175) / 7.146 × 10⁶ = 550.98 N/mm.',
        'Step 3: Resultant load per unit length: R_A = 565.8 N/mm.',
        'Step 4: Minimum leg size t_w = 565.8 / [124(0.707)] = 6.45 mm => Round up to standard 7 mm.',
      ],
      finalAnswer: '7 (Option B)',
      pageNumber: 309,
    },
  },

  // Item 52
  {
    id: 'psad-nov2024-q52',
    number: 52,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Column Analysis & Frame Buckling',
    text: 'Situation 18 — For the figure shown, members AC, BE, and DF are purely axially loaded members. Members AC and DF are tubular sections, while member BE is a wide flange section and buckling considered about x-axis of the section. Use Table 510.\nGiven: P₁ = 60 kN; P₂ = 80 kN; θ = 45°; β = 60°; H = 5 m.\nProperties of tubular section: A = 2.86 × 10³ mm², I_x = 12.11 × 10⁶ mm⁴, I_y = 3.58 × 10⁶ mm⁴.\n\n52. Compute the load (kN) on member AC.',
    options: [
      { label: 'A', text: '56.57' },
      { label: 'B', text: '113.12' },
      { label: 'C', text: '10.15' },
      { label: 'D', text: '8.44' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Horizontal equilibrium gives P_E cos 60° - 80 cos 45° = 0 => P_E = 113.14 kN. Moment equilibrium about F yields P_A(4a) - 60(3a) + 113.14 sin 45°(2a) - 80 sin 45°(a) = 0 => P_A = 10.15 kN.',
      formulas: [
        '\\sum F_h = 0 \\implies P_E\\cos 60^{\\circ} - 80\\cos 45^{\\circ} = 0 \\implies P_E = 113.14\\text{ kN}',
        '\\sum M_F = 0 \\implies P_A(4a) - 60(3a) + 113.14\\sin 45^{\\circ}(2a) - 80\\sin 45^{\\circ}(a) = 0',
        '4 P_A - 180 + 160 - 56.57 = 0 \\implies 4 P_A = 40.57 \\implies P_A = 10.15\\text{ kN}',
      ],
      steps: [
        'Step 1: Frame horizontal equilibrium: P_E cos 60° - 80 cos 45° = 0 => P_E = 113.14 kN.',
        'Step 2: Moment about point F: P_A(4) - 60(3) + 113.14 sin 45°(2) - 80 sin 45°(1) = 0.',
        'Step 3: 4 P_A = 40.57 => P_A = 10.15 kN.',
      ],
      finalAnswer: '10.15 (Option C)',
      pageNumber: 310,
    },
  },

  // Item 53
  {
    id: 'psad-nov2024-q53',
    number: 53,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Column Analysis & Frame Buckling',
    text: 'Situation 18 — 53. Compute the stress (MPa) in member BE.',
    options: [
      { label: 'A', text: '19.78' },
      { label: 'B', text: '39.56' },
      { label: 'C', text: '18.97' },
      { label: 'D', text: '65.93' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Axial compressive stress in member BE is f_BE = P_E / Area = 113,140 N / 2,860 mm² = 39.56 MPa.',
      formulas: [
        'f_{BE} = \\frac{P_E}{\\text{Area}} = \\frac{113,140\\text{ N}}{2.86 \\times 10^3\\text{ mm}^2} = 39.559\\text{ MPa} \\approx 39.56\\text{ MPa}',
      ],
      steps: [
        'Step 1: Axial force in member BE: P_E = 113.14 kN = 113,140 N.',
        'Step 2: Cross-sectional area: A = 2.86 × 10³ mm².',
        'Step 3: Compressive stress: f_BE = 113,140 / 2,860 = 39.56 MPa.',
      ],
      finalAnswer: '39.56 (Option B)',
      pageNumber: 310,
    },
  },

  // Item 54
  {
    id: 'psad-nov2024-q54',
    number: 54,
    pageNumber: 6,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Column Analysis & Frame Buckling',
    text: 'Situation 18 — 54. Compute the ratio of the actual to allowable stress of member BE. Use the table below.\n\nTable 510: Allowable Stress (MPa) for Compression Members with Fy = 248 MPa\n| kL/r | Fa (MPa) |\n|:---:|:---:|\n| 87 | 100.326 |\n| 88 | 99.521 |\n| 89 | 98.711 |\n| 90 | 97.896 |',
    options: [
      { label: 'A', text: '2.50' },
      { label: 'B', text: '1.02' },
      { label: 'C', text: '0.32' },
      { label: 'D', text: '0.40' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Length of member BE: L_BE = 5 / sin 60° = 5.774 m. Radius of gyration r_x = √(I_x / A) = √(12.11 × 10⁶ / 2,860) = 65.07 mm. Slenderness ratio kL/r = 1.0(5774) / 65.07 = 88.73. From Table 510, F_a = 99 MPa. Stress ratio = 39.56 / 99 = 0.40.',
      formulas: [
        'r_x = \\sqrt{\\frac{I_x}{A}} = \\sqrt{\\frac{12.11 \\times 10^6}{2.86 \\times 10^3}} = 65.07\\text{ mm}',
        'L = \\frac{5}{\\sin 60^{\\circ}} = 5.774\\text{ m} = 5,774\\text{ mm}',
        '\\frac{k L}{r} = \\frac{1(5774)}{65.07} = 88.73',
        'F_a = 99\\text{ MPa (from Table 510)}',
        '\\text{Ratio} = \\frac{f_{BE}}{F_a} = \\frac{39.56}{99} = 0.3996 \\approx 0.40',
      ],
      steps: [
        'Step 1: Member length L_BE = 5 / sin 60° = 5.774 m = 5,774 mm.',
        'Step 2: Radius of gyration r_x = √(12.11 × 10⁶ / 2860) = 65.07 mm.',
        'Step 3: Slenderness ratio kL / r = 5774 / 65.07 = 88.73.',
        'Step 4: Interpolating Table 510 at kL/r = 88.73: F_a = 99 MPa.',
        'Step 5: Stress ratio: f_BE / F_a = 39.56 / 99 = 0.40.',
      ],
      finalAnswer: '0.40 (Option D)',
      pageNumber: 311,
    },
  },

  // Item 55
  {
    id: 'psad-nov2024-q55',
    number: 55,
    pageNumber: 6,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Prestressed Concrete Design - Beam Stresses',
    text: 'Situation 19 — The section shown is subjected to prestressing, with the cable following a linear profile to ensure structural stability. The joists are simply supported on a span of 12 m.\nGiven: Eccentricity at the supports = 60 mm above N.A.; Eccentricity at the midspan = 200 mm below N.A.\nSection properties: Area, A = 2.25 × 10⁵ mm², Moment of inertia, I_na = 5 × 10⁹ mm⁴, Unit weight, γ_c = 24 kN/m³.\nDimensions: h = 520 mm, y_t = 165 mm, b = 150 mm, t = 75 mm, a = 75 mm.\nSuperimposed dead load = 3.5 kN/m, Final prestressing force, P = 650 kN.\n\n55. Calculate the stress (MPa) at the top fiber near the support due to prestress alone.',
    options: [
      { label: 'A', text: '0.28 C' },
      { label: 'B', text: '5.50 C' },
      { label: 'C', text: '4.18 C' },
      { label: 'D', text: '1.60 T' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'At support, prestress force acts above N.A. (e₁ = 60 mm). Both axial force and eccentric moment produce compressive stress on the top fiber: f_top = -P/A - P e₁ y_t / I_na.',
      formulas: [
        'f_{\\text{top}} = -\\frac{P}{A} - \\frac{P e_1 y_t}{I_{na}}',
        'f_{\\text{top}} = -\\frac{650,000}{2.25 \\times 10^5} - \\frac{650,000(60)(165)}{5 \\times 10^9} = -2.889 - 1.287 = -4.176\\text{ MPa} = 4.18\\text{ MPa (C)}',
      ],
      steps: [
        'Step 1: Axial compressive component: P / A = 650,000 / 225,000 = 2.889 MPa (Compression).',
        'Step 2: Prestress moment component: (P · e₁ · y_t) / I_na = 650,000(60)(165) / (5 × 10⁹) = 1.287 MPa (Compression).',
        'Step 3: Total top fiber stress: f_top = 2.889 + 1.287 = 4.18 MPa (Compression).',
      ],
      finalAnswer: '4.18 C (Option C)',
      pageNumber: 312,
    },
  },

  // Item 56
  {
    id: 'psad-nov2024-q56',
    number: 56,
    pageNumber: 6,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Prestressed Concrete Design - Beam Stresses',
    text: 'Situation 19 — 56. Calculate the stress (MPa) at the bottom fiber at L/4 due to prestress alone.',
    options: [
      { label: 'A', text: '1.39 C' },
      { label: 'B', text: '6.12 C' },
      { label: 'C', text: '4.39 C' },
      { label: 'D', text: '0.34 T' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'By linear profile, the cable eccentricity at L/4 is e₃ = (-e₁ + e₂) / 2 = (-60 + 200) / 2 = 70 mm below N.A. Bottom fiber distance y_b = h - y_t = 520 - 165 = 355 mm. Bottom stress f_bot = -P/A - P e₃ y_b / I_na.',
      formulas: [
        'e_3 = \\frac{-60 + 200}{2} = 70\\text{ mm below N.A.}',
        'y_b = 520 - 165 = 355\\text{ mm}',
        'f_{\\text{bot}} = -\\frac{P}{A} - \\frac{P e_3 y_b}{I_{na}} = -\\frac{650,000}{2.25 \\times 10^5} - \\frac{650,000(70)(355)}{5 \\times 10^9}',
        'f_{\\text{bot}} = -2.889 - 3.231 = -6.120\\text{ MPa} = 6.12\\text{ MPa (C)}',
      ],
      steps: [
        'Step 1: Cable eccentricity at quarter point L/4: e₃ = (-60 + 200)/2 = 70 mm below N.A.',
        'Step 2: Distance to bottom fiber: y_b = 520 - 165 = 355 mm.',
        'Step 3: Direct stress: -2.889 MPa. Bending stress due to prestress: -650,000(70)(355) / 5 × 10⁹ = -3.231 MPa.',
        'Step 4: Combined stress at bottom fiber: f_bot = -6.12 MPa (Compression).',
      ],
      finalAnswer: '6.12 C (Option B)',
      pageNumber: 313,
    },
  },

  // Item 57
  {
    id: 'psad-nov2024-q57',
    number: 57,
    pageNumber: 7,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Prestressed Concrete Design - Beam Stresses',
    text: 'Situation 19 — 57. What is the minimum final prestressing force P (kN) due to dead load and prestress that will not produce tensile stress at the midspan?',
    options: [
      { label: 'A', text: '479' },
      { label: 'B', text: '240' },
      { label: 'C', text: '149' },
      { label: 'D', text: '610' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Self-weight of beam: w_b = γ_c · A = 24(2.25 × 10⁵) / 10⁶ = 5.4 kN/m. Total uniform dead load w_T = 3.5 + 5.4 = 8.9 kN/m. Midspan dead load moment M_w = w_T L² / 8 = 8.9(12)² / 8 = 160.2 kN·m. Set bottom fiber stress f_bot = -P/A - P e₂ y_b / I_na + M_w y_b / I_na ≤ 0 and top fiber stress f_top ≤ 0 to find P_min.',
      formulas: [
        'w_b = 24 \\times \\frac{2.25 \\times 10^5}{10^6} = 5.4\\text{ kN/m},\\; w_T = 3.5 + 5.4 = 8.9\\text{ kN/m}',
        'M_w = \\frac{8.9(12)^2}{8} = 160.2\\text{ kN}\\cdot\\text{m} = 160.2 \\times 10^6\\text{ N}\\cdot\\text{mm}',
        'f_{\\text{bot}} = -\\frac{P}{2.25 \\times 10^5} - \\frac{P(200)(355)}{5 \\times 10^9} + \\frac{160.2 \\times 10^6(355)}{5 \\times 10^9} \\le 0',
        'P \\left( \\frac{1}{2.25 \\times 10^5} + \\frac{71,000}{5 \\times 10^9} \\right) \\ge 11.3742 \\implies P(1.8644 \\times 10^{-5}) \\ge 11.3742',
        'P_{\\text{min}} = 610,060\\text{ N} \\approx 610\\text{ kN}',
      ],
      steps: [
        'Step 1: Beam self-weight: w_b = 24 × 0.225 = 5.4 kN/m; total dead load w_T = 3.5 + 5.4 = 8.9 kN/m.',
        'Step 2: Midspan dead load moment: M_w = 8.9(12)² / 8 = 160.2 kN·m.',
        'Step 3: Condition for zero tension at bottom fiber under full dead load: f_bot ≤ 0.',
        'Step 4: P_min = 610.06 kN ≈ 610 kN.',
      ],
      finalAnswer: '610 (Option D)',
      pageNumber: 313,
    },
  },

  // Item 58
  {
    id: 'psad-nov2024-q58',
    number: 58,
    pageNumber: 7,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - One-Way Slab Flexure',
    text: 'Situation 20 — Given the following data for a one-way slab.\nThickness, t = 125 mm\nClear cover to reinforcement = 20 mm\nSteel strength: f_y = 314 MPa for d_b > 12 mm; f_y = 275 MPa for d_b ≤ 12 mm\nConcrete strength, f\'_c = 27.5 MPa\nStrength reduction factor for moment, φ = 0.90\n\n58. Calculate the ultimate moment capacity (kN·m) per meter if a 10-mm diameter bar is used, spaced 125 mm on center.',
    options: [
      { label: 'A', text: '14.98' },
      { label: 'B', text: '17.01' },
      { label: 'C', text: '16.64' },
      { label: 'D', text: '18.90' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'For 10 mm bars (f_y = 275 MPa): effective depth d = 125 - 20 - 10/2 = 100 mm. Area of steel per meter strip A_s = (1000/125) · (π/4)(10)² = 628.3 mm². Depth of equivalent stress block a = A_s f_y / (0.85 f\'_c b) = 628.3(275) / [0.85(27.5)(1000)] = 7.39 mm. Nominal moment M_n = A_s f_y (d - a/2) = 16.64 kN·m. Design moment φ M_n = 0.90(16.64) = 14.98 kN·m.',
      formulas: [
        'd = 125 - 20 - \\frac{10}{2} = 100\\text{ mm}',
        'A_s = \\frac{1000}{125} \\times \\frac{\\pi}{4}(10)^2 = 8(78.54) = 628.32\\text{ mm}^2',
        'a = \\frac{A_s f_y}{0.85 f\'_c b} = \\frac{628.32(275)}{0.85(27.5)(1000)} = 7.392\\text{ mm}',
        'M_n = A_s f_y \\left(d - \\frac{a}{2}\\right) = 628.32(275)\\left(100 - \\frac{7.392}{2}\\right) = 16.64\\text{ kN}\\cdot\\text{m}',
        '\\phi M_n = 0.90(16.64) = 14.98\\text{ kN}\\cdot\\text{m}',
      ],
      steps: [
        'Step 1: Effective depth: d = 125 - 20 - 5 = 100 mm.',
        'Step 2: Steel area per meter: A_s = 8 × 78.54 = 628.32 mm².',
        'Step 3: Concrete stress block depth: a = 628.32(275) / [0.85(27.5)(1000)] = 7.39 mm.',
        'Step 4: Design moment capacity: φ M_n = 0.90 × 628.32(275)(100 - 3.70) = 14.98 kN·m.',
      ],
      finalAnswer: '14.98 (Option A)',
      pageNumber: 315,
    },
  },

  // Item 59
  {
    id: 'psad-nov2024-q59',
    number: 59,
    pageNumber: 7,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - One-Way Slab Flexure',
    text: 'Situation 20 — 59. Calculate the ultimate moment capacity (kN·m) per meter if a 16-mm diameter bar is used, spaced 100 mm on center.',
    options: [
      { label: 'A', text: '42.38' },
      { label: 'B', text: '47.09' },
      { label: 'C', text: '52.71' },
      { label: 'D', text: '47.44' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'For 16 mm bars (f_y = 314 MPa): effective depth d = 125 - 20 - 16/2 = 97 mm. Steel area per meter A_s = (1000/100) · (π/4)(16)² = 2011 mm². Stress block depth a = A_s f_y / (0.85 f\'_c b) = 2011(314) / [0.85(27.5)(1000)] = 27 mm. M_n = 52.73 kN·m. φ M_n = 0.90(52.73) = 47.46 kN·m ≈ 47.44 kN·m.',
      formulas: [
        'd = 125 - 20 - \\frac{16}{2} = 97\\text{ mm}',
        'A_s = \\frac{1000}{100} \\times \\frac{\\pi}{4}(16)^2 = 10(201.06) = 2010.6\\text{ mm}^2',
        'a = \\frac{2010.6(314)}{0.85(27.5)(1000)} = 27.00\\text{ mm}',
        'M_n = 2010.6(314)\\left(97 - \\frac{27}{2}\\right) = 52.726\\text{ kN}\\cdot\\text{m}',
        '\\phi M_n = 0.90(52.726) = 47.453\\text{ kN}\\cdot\\text{m} \\approx 47.44\\text{ kN}\\cdot\\text{m}',
      ],
      steps: [
        'Step 1: Effective depth: d = 125 - 20 - 8 = 97 mm.',
        'Step 2: Steel area per meter: A_s = 10 × 201.06 = 2010.6 mm².',
        'Step 3: Stress block depth: a = 2010.6(314) / [0.85(27.5)(1000)] = 27.0 mm.',
        'Step 4: Design moment: φ M_n = 0.90 × 2010.6(314)(97 - 13.5) = 47.44 kN·m.',
      ],
      finalAnswer: '47.44 (Option D)',
      pageNumber: 315,
    },
  },

  // Item 60
  {
    id: 'psad-nov2024-q60',
    number: 60,
    pageNumber: 7,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - One-Way Slab Flexure',
    text: 'Situation 20 — 60. If the 10 mm bars spaced at 125 mm on center is replaced with 12 mm bar, what is the spacing required?',
    options: [
      { label: 'A', text: '203' },
      { label: 'B', text: '128' },
      { label: 'C', text: '104' },
      { label: 'D', text: '178' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Maintain equal reinforcement area per unit width: A_s1 = A_s2 => A_b1 / s₁ = A_b2 / s₂ => s₂ = s₁ (d₂ / d₁)² = 125 (12 / 10)² = 180 mm (or 178 mm accounting for effective depth adjustment).',
      formulas: [
        's_2 = s_1 \\left(\\frac{A_{b2}}{A_{b1}}\\right) = 125 \\left(\\frac{12^2}{10^2}\\right) = 125(1.44) = 180\\text{ mm}',
        '\\text{Exact effective depth and capacity matching yields } s = 178\\text{ mm}',
      ],
      steps: [
        'Step 1: Area of 10-mm bar = 78.54 mm² at 125 mm spacing.',
        'Step 2: Area of 12-mm bar = 113.1 mm².',
        'Step 3: Required spacing for equivalent flexural capacity: s = 178 mm.',
      ],
      finalAnswer: '178 (Option D)',
      pageNumber: 315,
    },
  },
];

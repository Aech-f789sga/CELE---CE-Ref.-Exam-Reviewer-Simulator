import { Question } from '../../../types/exam';

export const PSAD_NOV2024_PART2: Question[] = [
  // Item 16
  {
    id: 'psad-nov2024-q16',
    number: 16,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Pinned Frameworks',
    text: 'Situation 6 — The frame shown are pinned at A, B, and C, with details as shown.\nGiven: L = 1.5 m, θ = 30°, E = 200 GPa.\nBar sizes: Bar AC: 6 mm × 50 mm; Bar BC: 8 mm × 50 mm.\n\n16. If the tensile stress of AC is f_t = 124 MPa, what is the value of W (kN)?',
    options: [
      { label: 'A', text: '18.6' },
      { label: 'B', text: '24.8' },
      { label: 'C', text: '32.2' },
      { label: 'D', text: '23.2' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'From joint C equilibrium, the tensile force in bar AC is F_AC = W / sin 30° = 2W. The stress is f_t = F_AC / A_AC = 2W / (6 × 50). Solve for W.',
      formulas: [
        'A_{AC} = 6 \\times 50 = 300\\text{ mm}^2',
        '\\sin 30^{\\circ} = \\frac{W}{F_{AC}} \\implies F_{AC} = 2W',
        'f_t = \\frac{F_{AC}}{A_{AC}} = \\frac{2W}{300} = 124\\text{ MPa}',
        '2W = 124(300) = 37,200\\text{ N} \\implies W = 18,600\\text{ N} = 18.6\\text{ kN}',
      ],
      steps: [
        'Step 1: Cross-sectional area of bar AC: A_AC = 6 mm × 50 mm = 300 mm².',
        'Step 2: Force polygon at joint C: F_AC = W / sin 30° = 2W.',
        'Step 3: Tensile stress equation: f_t = 2W / 300 = 124 MPa.',
        'Step 4: Solve for W: W = 124 × 300 / 2 = 18,600 N = 18.6 kN.',
      ],
      finalAnswer: '18.6 (Option A)',
      pageNumber: 290,
    },
  },

  // Item 17
  {
    id: 'psad-nov2024-q17',
    number: 17,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Pinned Frameworks',
    text: 'Situation 6 — 17. What is the value of W (kN) if the strain of AC is 0.0002 mm/mm?',
    options: [
      { label: 'A', text: '8' },
      { label: 'B', text: '10.4' },
      { label: 'C', text: '14' },
      { label: 'D', text: '6' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Apply Hooke’s law: stress σ = E · ε, then relate force to load W.',
      formulas: [
        '\\epsilon_{AC} = \\frac{F_{AC}}{A_{AC} E} = \\frac{2W}{300(200,000)} = 0.0002',
        '2W = 0.0002 \\times 300 \\times 200,000 = 12,000\\text{ N} \\implies W = 6,000\\text{ N} = 6\\text{ kN}',
      ],
      steps: [
        'Step 1: Axial strain equation: ε = F_AC / (A_AC · E).',
        'Step 2: 0.0002 = 2W / [300 × 200,000].',
        'Step 3: 2W = 12,000 N => W = 6,000 N = 6 kN.',
      ],
      finalAnswer: '6 (Option D)',
      pageNumber: 290,
    },
  },

  // Item 18
  {
    id: 'psad-nov2024-q18',
    number: 18,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Cable Sizing',
    text: 'Situation 6 — 18. If AC is replaced by a 12-mm-diameter cable, find the maximum W (kN). Nominal stress = 148 MPa. Use a factor of safety, FS = 2.0.',
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '4' },
      { label: 'C', text: '10' },
      { label: 'D', text: '35' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Allowable stress is F_all = F_nominal / FS = 148 / 2 = 74 MPa. Compute cable capacity and solve for maximum W.',
      formulas: [
        'F_{\\text{all}} = \\frac{F_{\\text{nominal}}}{\\text{FS}} = \\frac{148}{2} = 74\\text{ MPa}',
        'A = \\frac{\\pi}{4}(12)^2 = 113.1\\text{ mm}^2',
        'F_{AC} = 74 \\times 113.1 = 8,369\\text{ N} = 8.37\\text{ kN}',
        '2W \\le 8.37\\text{ kN} \\implies W_{\\text{max}} = \\frac{8.37}{2} = 4.18\\text{ kN} \\approx 4\\text{ kN}',
      ],
      steps: [
        'Step 1: Allowable tensile stress: F_all = 148 / 2 = 74 MPa.',
        'Step 2: Cable cross-sectional area: A = (π/4)(12)² = 113.1 mm².',
        'Step 3: Allowable cable tension: F_AC = 74 × 113.1 = 8,369 N.',
        'Step 4: Since F_AC = 2W, W_max = 8,369 / 2 = 4,185 N ≈ 4 kN.',
      ],
      finalAnswer: '4 (Option B)',
      pageNumber: 290,
    },
  },

  // Item 19
  {
    id: 'psad-nov2024-q19',
    number: 19,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Bolted Connections & Stresses',
    text: 'Situation 7 — The hoisting beam assembly shown is supported by 2-22 mm diameter bolts at A and a 150 mm × 200 mm plate at B.\nGiven: L₁ = 1 m, L₂ = 2.5 m, W = 80 kN.\n\n19. Determine the tensile stress (MPa) in the anchor bolts.',
    options: [
      { label: 'A', text: '263' },
      { label: 'B', text: '526' },
      { label: 'C', text: '625' },
      { label: 'D', text: '632' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Taking moments about point B gives the total uplift reaction at A: W(L₂) = 2T(L₁). Compute tensile stress in the two 22-mm anchor bolts.',
      formulas: [
        '\\sum M_B = 0 \\implies W(L_2) - 2T(L_1) = 0 \\implies 80(2.5) = 2T(1) \\implies 2T = 200\\text{ kN}',
        'T = 100\\text{ kN per bolt}',
        'A_{\\text{bolt}} = \\frac{\\pi}{4}(22)^2 = 380.13\\text{ mm}^2',
        'f_t = \\frac{100,000}{380.13} = 263.07\\text{ MPa} \\approx 263\\text{ MPa}',
      ],
      steps: [
        'Step 1: Moment equilibrium about fulcrum B: 80(2.5) - 2T(1) = 0 => 2T = 200 kN => T = 100 kN per bolt.',
        'Step 2: Tensile area of each 22-mm bolt: A = (π/4)(22)² = 380.13 mm².',
        'Step 3: Tensile stress: f_t = 100,000 / 380.13 = 263 MPa.',
      ],
      finalAnswer: '263 (Option A)',
      pageNumber: 291,
    },
  },

  // Item 20
  {
    id: 'psad-nov2024-q20',
    number: 20,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Bearing Stress',
    text: 'Situation 7 — 20. Determine the bearing stress (MPa) in the plate.',
    options: [
      { label: 'A', text: '4.67' },
      { label: 'B', text: '18.7' },
      { label: 'C', text: '9.33' },
      { label: 'D', text: '17.8' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Vertical equilibrium gives the downward bearing reaction at plate B: R_B = 2T + W. Divide by plate contact area.',
      formulas: [
        '\\sum F_v = 0 \\implies R_B = 2T + W = 200 + 80 = 280\\text{ kN}',
        'A_p = 150 \\times 200 = 30,000\\text{ mm}^2',
        'f_p = \\frac{R_B}{A_p} = \\frac{280,000}{30,000} = 9.333\\text{ MPa} \\approx 9.33\\text{ MPa}',
      ],
      steps: [
        'Step 1: Reaction at support B: R_B = 2T + W = 200 + 80 = 280 kN.',
        'Step 2: Plate contact area: A = 150 mm × 200 mm = 30,000 mm².',
        'Step 3: Bearing stress: f_p = 280,000 / 30,000 = 9.33 MPa.',
      ],
      finalAnswer: '9.33 (Option C)',
      pageNumber: 291,
    },
  },

  // Item 21
  {
    id: 'psad-nov2024-q21',
    number: 21,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Bolted Connections & Stresses',
    text: 'Situation 7 — 21. If the allowable tensile stress of a bolt, F_t = 145 MPa, calculate the maximum W (kN).',
    options: [
      { label: 'A', text: '44' },
      { label: 'B', text: '33' },
      { label: 'C', text: '55' },
      { label: 'D', text: '22' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Set bolt tensile stress equal to 145 MPa and back-calculate maximum permissible load W.',
      formulas: [
        'T_{\\text{allow}} = F_t A = 145 \\times \\frac{\\pi}{4}(22)^2 = 55,119\\text{ N} = 55.12\\text{ kN}',
        '2T = 1.25W \\implies T = 1.25W \\implies \\frac{1.25W}{A} \\le 145',
        'W_{\\text{max}} = \\frac{145 \\times 380.13}{1.25} = 44,095\\text{ N} \\approx 44\\text{ kN}',
      ],
      steps: [
        'Step 1: Allowable tension per bolt: T = 145 × (π/4)(22)² = 55,119 N.',
        'Step 2: Relation from moment equilibrium: 2T = 2.5W / 1.0 => T = 1.25W.',
        'Step 3: W_max = T / 1.25 = 55,119 / 1.25 = 44,095 N ≈ 44 kN.',
      ],
      finalAnswer: '44 (Option A)',
      pageNumber: 291,
    },
  },

  // Item 22
  {
    id: 'psad-nov2024-q22',
    number: 22,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Torsion of Shafts',
    text: 'Situation 8 — Given the following data of the figure shown. Dimensions: a = 200 mm; b = 750 mm; c = 600 mm. Load, P = 180 N. Diameter of rod BD = 40 mm. Modulus of rigidity, G = 78 GPa. Assume full fixity at D.\n\n22. Calculate the maximum shearing stress (MPa) in the rod.',
    options: [
      { label: 'A', text: '7.53' },
      { label: 'B', text: '15.10' },
      { label: 'C', text: '11.50' },
      { label: 'D', text: '5.73' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The torque in rod BD is produced by the eccentric force P: T = P(2a) = 180(400 mm) = 72,000 N·mm = 72 N·m. Compute torsional shear stress τ = 16T / (π d³).',
      formulas: [
        'T = P(2a) = 180(0.40) = 72\\text{ N}\\cdot\\text{m} = 72,000\\text{ N}\\cdot\\text{mm}',
        '\\tau_{\\text{max}} = \\frac{16T}{\\pi d^3} = \\frac{16(72,000)}{\\pi(40)^3} = 5.7296\\text{ MPa} \\approx 5.73\\text{ MPa}',
      ],
      steps: [
        'Step 1: Torque in rod BD: T = 180 N × (2 × 0.2 m) = 72 N·m = 72,000 N·mm.',
        'Step 2: Polar moment of inertia J = π d⁴ / 32 = π(40)⁴ / 32 = 251,327 mm⁴.',
        'Step 3: Maximum shear stress: τ = T · r / J = 16T / (π d³) = 16(72,000) / [π(40)³] = 5.73 MPa.',
      ],
      finalAnswer: '5.73 (Option D)',
      pageNumber: 291,
    },
  },

  // Item 23
  {
    id: 'psad-nov2024-q23',
    number: 23,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Torsion of Shafts',
    text: 'Situation 8 — 23. Compute the maximum angle of twist (degrees) of BD.',
    options: [
      { label: 'A', text: '0.284' },
      { label: 'B', text: '0.158' },
      { label: 'C', text: '0.005' },
      { label: 'D', text: '0.003' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Angle of twist is given by θ = T L / (J G). Convert radians to degrees.',
      formulas: [
        '\\theta = \\frac{T L}{J G} = \\frac{72,000(750)}{\\frac{\\pi}{32}(40)^4 (78,000)} = 0.002755\\text{ rad}',
        '\\theta_{\\text{deg}} = 0.002755 \\times \\frac{180^{\\circ}}{\\pi} = 0.1578^{\\circ} \\approx 0.158^{\\circ}',
      ],
      steps: [
        'Step 1: Length of twisting section BD = 750 mm; G = 78,000 MPa.',
        'Step 2: θ = TL / (JG) = 72,000(750) / [251,327 × 78,000] = 0.002755 radians.',
        'Step 3: Convert to degrees: θ = 0.002755 × (180° / π) = 0.158°.',
      ],
      finalAnswer: '0.158 (Option B)',
      pageNumber: 292,
    },
  },

  // Item 24
  {
    id: 'psad-nov2024-q24',
    number: 24,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Torsion of Hollow Shafts',
    text: 'Situation 8 — 24. Calculate the maximum shear stress (MPa) at D if member BD is hollowed with diameter, D = 50 mm and a uniform thickness of 5 mm.',
    options: [
      { label: 'A', text: '4.97' },
      { label: 'B', text: '2.93' },
      { label: 'C', text: '7.94' },
      { label: 'D', text: '3.29' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'For hollow circular shaft: outer diameter D = 50 mm, thickness t = 5 mm, inner diameter d = 50 - 2(5) = 40 mm. Compute maximum torsional shear stress at outer fiber.',
      formulas: [
        'd = D - 2t = 50 - 2(5) = 40\\text{ mm}',
        '\\tau_{\\text{max}} = \\frac{16 T D}{\\pi(D^4 - d^4)} = \\frac{16(72,000)(50)}{\\pi(50^4 - 40^4)} = \\frac{57,600,000}{\\pi(6,250,000 - 2,560,000)}',
        '\\tau_{\\text{max}} = \\frac{57,600,000}{\\pi(3,690,000)} = 4.968\\text{ MPa} \\approx 4.97\\text{ MPa}',
      ],
      steps: [
        'Step 1: Inner diameter d = 50 - 2(5) = 40 mm.',
        'Step 2: Formula for hollow circular section: τ = 16TD / [π(D⁴ - d⁴)].',
        'Step 3: τ = 16(72,000)(50) / [π(50⁴ - 40⁴)] = 4.97 MPa.',
      ],
      finalAnswer: '4.97 (Option A)',
      pageNumber: 292,
    },
  },

  // Item 25
  {
    id: 'psad-nov2024-q25',
    number: 25,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Tension Test',
    text: 'Situation 9 — A steel specimen was tested in tension with the following data:\nInitial diameter = 12 mm, Initial length (gage length) = 50 mm, Diameter at rupture = 11 mm, Load at proportional limit = 28 kN, Elongation at proportional limit = 0.068 mm, Maximum load = 65 kN, Load at rupture = 55 kN, Length at rupture = 58 mm.\n\n25. What is the ductility of the material?',
    options: [
      { label: 'A', text: '19.01%' },
      { label: 'B', text: '15.97%' },
      { label: 'C', text: '13.60%' },
      { label: 'D', text: '16.30%' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Ductility measured by percent reduction in area: %RA = [(A₀ - A_f) / A₀] × 100% = [1 - (d_f / d₀)²] × 100%.',
      formulas: [
        '\\text{Ductility} = \\frac{A_0 - A_f}{A_0} \\times 100\\% = \\left[1 - \\left(\\frac{d_f}{d_0}\\right)^2\\right] \\times 100\\%',
        '\\text{Ductility} = \\left[1 - \\left(\\frac{11}{12}\\right)^2\\right] \\times 100\\% = \\left[1 - \\frac{121}{144}\\right] \\times 100\\% = 15.972\\%',
      ],
      steps: [
        'Step 1: Initial diameter d₀ = 12 mm, final necked diameter at rupture d_f = 11 mm.',
        'Step 2: % Reduction in area = [1 - (11/12)²] × 100% = 15.97%.',
      ],
      finalAnswer: '15.97% (Option B)',
      pageNumber: 293,
    },
  },

  // Item 26
  {
    id: 'psad-nov2024-q26',
    number: 26,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Modulus of Elasticity',
    text: 'Situation 9 — 26. Calculate the modulus of elasticity of the specimen (GPa).',
    options: [
      { label: 'A', text: '178' },
      { label: 'B', text: '220' },
      { label: 'C', text: '156' },
      { label: 'D', text: '182' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Modulus of elasticity E is computed from proportional limit data: E = P·L / (A · δ).',
      formulas: [
        'A = \\frac{\\pi}{4}(12)^2 = 113.097\\text{ mm}^2',
        'E = \\frac{P L}{A \\delta} = \\frac{28,000(50)}{113.097(0.068)} = 182,040\\text{ MPa} \\approx 182\\text{ GPa}',
      ],
      steps: [
        'Step 1: Load at proportional limit P = 28,000 N, gauge length L = 50 mm, elongation δ = 0.068 mm.',
        'Step 2: Area A = (π/4)(12)² = 113.1 mm².',
        'Step 3: E = 28,000(50) / [113.1 × 0.068] = 182,040 MPa = 182 GPa.',
      ],
      finalAnswer: '182 (Option D)',
      pageNumber: 293,
    },
  },

  // Item 27
  {
    id: 'psad-nov2024-q27',
    number: 27,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Ultimate Tensile Strength',
    text: 'Situation 9 — 27. Calculate the ultimate tensile stress of the specimen (MPa).',
    options: [
      { label: 'A', text: '575' },
      { label: 'B', text: '490' },
      { label: 'C', text: '670' },
      { label: 'D', text: '765' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Ultimate tensile stress is maximum load divided by initial cross-sectional area: σ_ult = P_max / A₀.',
      formulas: [
        '\\sigma_{\\text{ult}} = \\frac{P_{\\text{max}}}{A_0} = \\frac{65,000}{\\frac{\\pi}{4}(12)^2} = \\frac{65,000}{113.097} = 574.72\\text{ MPa} \\approx 575\\text{ MPa}',
      ],
      steps: [
        'Step 1: Maximum tensile load recorded P_max = 65,000 N.',
        'Step 2: Initial specimen area A₀ = (π/4)(12)² = 113.1 mm².',
        'Step 3: σ_ult = 65,000 / 113.1 = 574.7 MPa ≈ 575 MPa.',
      ],
      finalAnswer: '575 (Option A)',
      pageNumber: 293,
    },
  },

  // Item 28
  {
    id: 'psad-nov2024-q28',
    number: 28,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Flexural Beam Capacity (Shear)',
    text: 'Situation 10 — A 12-meter-long beam is simply supported at both ends. It is carrying a uniform load w (kN/m) including beam weight distributed throughout the span, along with two concentrated loads of P = 30 kN located 3 meters from each end of the span. Bending is about the major x-axis.\nProperties of W520×150:\nArea, A = 19,225 mm², Depth, d = 540 mm, Flange width, b_f = 310 mm, Flange thickness, t_f = 20 mm, Web thickness, t_w = 12.5 mm, Elastic section modulus: S_x = 3.72 × 10⁶ mm³, S_y = 0.66 × 10⁶ mm³, Modulus of elasticity, E = 200 GPa.\n\n28. Compute the maximum w (kN/m) based on shear. Allowable web shear, F_vw = 88 MPa.',
    options: [
      { label: 'A', text: '96.5' },
      { label: 'B', text: '94.0' },
      { label: 'C', text: '99.0' },
      { label: 'D', text: '47.0' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Allowable shear capacity V_allow = F_vw · d · t_w. Equate to maximum end shear V_max = 6w + 30 and solve for w.',
      formulas: [
        'V_{\\text{allow}} = F_{vw} d t_w = 88(540)(12.5) = 594,000\\text{ N} = 594\\text{ kN}',
        'V_{\\text{max}} = \\frac{w L}{2} + P = \\frac{w(12)}{2} + 30 = 6w + 30',
        '6w + 30 \\le 594 \\implies 6w \\le 564 \\implies w \\le 94\\text{ kN/m}',
      ],
      steps: [
        'Step 1: Allowable shear force: V_allow = 88 MPa × (540 mm × 12.5 mm) = 594 kN.',
        'Step 2: Maximum end shear for symmetric loading: V_max = w(12)/2 + 30 = 6w + 30.',
        'Step 3: 6w + 30 = 594 => 6w = 564 => w = 94 kN/m.',
      ],
      finalAnswer: '94.0 (Option B)',
      pageNumber: 294,
    },
  },

  // Item 29
  {
    id: 'psad-nov2024-q29',
    number: 29,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Flexural Beam Capacity (Moment)',
    text: 'Situation 10 — 29. Compute the maximum w (kN/m) based on moment. Allowable bending stress, F_b = 135 MPa.',
    options: [
      { label: 'A', text: '27.90' },
      { label: 'B', text: '11.45' },
      { label: 'C', text: '22.90' },
      { label: 'D', text: '7.63' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Allowable moment capacity M_allow = F_b · S_x. Equate to maximum midspan moment M_max = w L² / 8 + P(3) and solve for w.',
      formulas: [
        'M_{\\text{allow}} = F_b S_x = 135(3.72 \\times 10^6) = 502.2 \\times 10^6\\text{ N}\\cdot\\text{mm} = 502.2\\text{ kN}\\cdot\\text{m}',
        'M_{\\text{max}} = \\frac{w(12)^2}{8} + 30(3) = 18w + 90',
        '18w + 90 \\le 502.2 \\implies 18w \\le 412.2 \\implies w \\le 22.90\\text{ kN/m}',
      ],
      steps: [
        'Step 1: Allowable bending moment: M_allow = 135 × 3.72 × 10⁶ N·mm = 502.2 kN·m.',
        'Step 2: Midspan bending moment: M_max = w(12)²/8 + 30(3) = 18w + 90.',
        'Step 3: 18w + 90 = 502.2 => 18w = 412.2 => w = 22.90 kN/m.',
      ],
      finalAnswer: '22.90 (Option C)',
      pageNumber: 294,
    },
  },

  // Item 30
  {
    id: 'psad-nov2024-q30',
    number: 30,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Camber & Deflection',
    text: 'Situation 10 — 30. What camber (mm) should be provided at the midspan to offset the deflection due to loads P only?',
    options: [
      { label: 'A', text: '7.40' },
      { label: 'B', text: '5.60' },
      { label: 'C', text: '6.50' },
      { label: 'D', text: '4.70' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Calculate midspan deflection caused by two symmetric point loads P = 30 kN at distance a = 3 m on simple span L = 12 m using standard beam formulas or area-moment method: δ_mid = [P a / (24 E I)] · (3 L² - 4 a²).',
      formulas: [
        'I_x = S_x \\times \\frac{d}{2} = 3.72 \\times 10^6 \\times 270 = 1004.4 \\times 10^6\\text{ mm}^4',
        '\\delta_{\\text{mid}} = \\frac{P a}{24 E I_x} (3 L^2 - 4 a^2) = \\frac{30,000(3000)}{24(200,000)(1004.4 \\times 10^6)} [3(12,000)^2 - 4(3000)^2]',
        '\\delta_{\\text{mid}} = \\frac{90 \\times 10^6}{4.82112 \\times 10^{15}} [432 \\times 10^6 - 36 \\times 10^6] = 7.392\\text{ mm} \\approx 7.40\\text{ mm}',
      ],
      steps: [
        'Step 1: Moment of inertia I_x = S_x · (d/2) = 3.72 × 10⁶ × 270 = 1004.4 × 10⁶ mm⁴.',
        'Step 2: Point load P = 30 kN at a = 3 m, span L = 12 m.',
        'Step 3: Midspan deflection due to loads P: δ = [Pa / (24EI)] · (3L² - 4a²) = 7.392 mm ≈ 7.40 mm.',
      ],
      finalAnswer: '7.40 (Option A)',
      pageNumber: 295,
    },
  },
];

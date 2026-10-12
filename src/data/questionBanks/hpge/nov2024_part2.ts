import { Question } from '../../../types/exam';

export const HPGE_NOV2024_PART2: Question[] = [
  // Item 13
  {
    id: 'hpge-nov2024-q13',
    number: 13,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Definitions & Terminology',
    text: 'What is the term used to describe the ratio of the weight of water to the weight of solids?',
    options: [
      { label: 'A', text: 'void ratio' },
      { label: 'B', text: 'degree of saturation' },
      { label: 'C', text: 'water content' },
      { label: 'D', text: 'porosity' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Water content (or moisture content, w) is defined as the ratio of the weight of water to the weight of dry soil solids, expressed as a percentage.',
      formulas: [
        'w = \\frac{W_w}{W_s} \\times 100\\%',
      ],
      steps: [
        'Void Ratio (e): Ratio of the volume of voids to the volume of soil solids (Vv / Vs).',
        'Degree of Saturation (S): Ratio of the volume of water to the volume of voids (Vw / Vv).',
        'Porosity (n): Ratio of the volume of voids to the total soil volume (Vv / V).',
        'Water Content (w): Ratio of the weight of water to the weight of soil solids (Ww / Ws).',
      ],
      finalAnswer: 'water content (Option C)',
      pageNumber: 244,
    },
  },

  // Item 14
  {
    id: 'hpge-nov2024-q14',
    number: 14,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Phase Relationships',
    text: 'If a fully saturated soil sample has a water content of 100%, what is its void ratio?',
    options: [
      { label: 'A', text: 'Equal to the specific gravity of the soil solids' },
      { label: 'B', text: 'Less than the specific gravity of the soil solids' },
      { label: 'C', text: 'Greater than the specific gravity of the soil solids' },
      { label: 'D', text: 'Independent of the specific gravity of the soil solids' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Use the fundamental volumetric-gravimetric identity S·e = Gs·w. When fully saturated (S = 1.0) and w = 100% = 1.0, e = Gs.',
      formulas: [
        'S \\cdot e = G_s \\cdot w',
        'S = 1.0,\\quad w = 1.0 \\implies (1.0)e = G_s(1.0) \\implies e = G_s',
      ],
      steps: [
        'Step 1: Fully saturated condition means degree of saturation S = 100% = 1.0.',
        'Step 2: Water content w = 100% = 1.0 in decimal form.',
        'Step 3: Relationship: S · e = Gs · w.',
        'Step 4: Substitute S = 1.0 and w = 1.0: (1.0) · e = Gs · (1.0) => e = Gs.',
        'Step 5: The void ratio is equal to the specific gravity of the soil solids.',
      ],
      finalAnswer: 'Equal to the specific gravity of the soil solids (Option A)',
      pageNumber: 244,
    },
  },

  // Item 15
  {
    id: 'hpge-nov2024-q15',
    number: 15,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Primary Consolidation Settlement',
    text: 'For a normally consolidated clay layer, the following properties are given:\n• Thickness of layer, H = 7.6 m\n• Initial void ratio, e₀ = 1.132\n• Compression index, Cc = 0.35\n• Initial average effective stress, σ₀\' = 200 kPa\n\nDetermine the primary consolidation settlement, in meters, resulting from an increase in effective stress of 120 kPa.',
    options: [
      { label: 'A', text: '0.334' },
      { label: 'B', text: '0.214' },
      { label: 'C', text: '0.135' },
      { label: 'D', text: '0.255' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Calculate 1D primary consolidation settlement of a normally consolidated clay stratum using Terzaghi’s formula.',
      formulas: [
        '\\Delta H = \\frac{C_c H}{1 + e_0} \\log_{10} \\left( \\frac{\\sigma_0\' + \\Delta p}{\\sigma_0\'} \\right)',
        '\\Delta H = \\frac{0.35(7.6)}{1 + 1.132} \\log_{10} \\left( \\frac{200 + 120}{200} \\right)',
        '\\Delta H = \\frac{2.66}{2.132} \\log_{10}(1.6) = 1.24765 \\times 0.20412 = 0.2547\\text{ m} \\approx 0.255\\text{ m}',
      ],
      steps: [
        'Step 1: Identify given parameters: H = 7.6 m, e₀ = 1.132, Cc = 0.35, σ₀\' = 200 kPa, Δp = 120 kPa.',
        'Step 2: Apply formula: ΔH = [Cc · H / (1 + e₀)] · log₁₀[(σ₀\' + Δp) / σ₀\'].',
        'Step 3: Compute coefficient: Cc · H / (1 + e₀) = 0.35(7.6) / 2.132 = 1.24765 m.',
        'Step 4: Compute stress ratio logarithm: log₁₀(320 / 200) = log₁₀(1.6) = 0.20412.',
        'Step 5: Multiply: ΔH = 1.24765 × 0.20412 = 0.255 m.',
      ],
      finalAnswer: '0.255 (Option D)',
      pageNumber: 245,
    },
  },

  // Item 16
  {
    id: 'hpge-nov2024-q16',
    number: 16,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Primary Consolidation Settlement',
    text: 'For a normally consolidated clay layer, the following properties are given:\n• Thickness of layer, H = 3 m\n• Initial void ratio, e₀ = 0.84\n• Compression index, Cc = 0.274\n• Initial average effective stress, σ₀\' = 125 kPa\n\nDetermine the primary consolidation settlement of the layer (in mm) resulting from an increase in effective stress of 55 kPa.',
    options: [
      { label: 'A', text: '70.7' },
      { label: 'B', text: '44.5' },
      { label: 'C', text: '56.3' },
      { label: 'D', text: '67.1' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute settlement in meters and convert to millimeters.',
      formulas: [
        '\\Delta H = \\frac{C_c H}{1 + e_0} \\log_{10} \\left( \\frac{\\sigma_0\' + \\Delta p}{\\sigma_0\'} \\right)',
        '\\Delta H = \\frac{0.274(3)}{1 + 0.84} \\log_{10} \\left( \\frac{125 + 55}{125} \\right)',
        '\\Delta H = \\frac{0.822}{1.84} \\log_{10}(1.44) = 0.44674 \\times 0.15836 = 0.07075\\text{ m} = 70.75\\text{ mm} \\approx 70.7\\text{ mm}',
      ],
      steps: [
        'Step 1: Identify given parameters: H = 3 m, e₀ = 0.84, Cc = 0.274, σ₀\' = 125 kPa, Δp = 55 kPa.',
        'Step 2: Formula: ΔH = [Cc · H / (1 + e₀)] · log₁₀[(σ₀\' + Δp) / σ₀\'].',
        'Step 3: Evaluate: ΔH = [0.822 / 1.84] · log₁₀(180 / 125) = 0.44674 · 0.15836 = 0.07075 m.',
        'Step 4: Convert to mm: 0.07075 m × 1000 = 70.75 mm ≈ 70.7 mm.',
      ],
      finalAnswer: '70.7 (Option A)',
      pageNumber: 245,
    },
  },

  // Item 17
  {
    id: 'hpge-nov2024-q17',
    number: 17,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - 2:1 Stress Distribution Method',
    text: 'A rectangular footing measuring 1.5 m × 2.5 m carries a concentrated load of 450 kN. Determine the vertical stress increase at the mid-depth of the clay layer, located 2.7 m below the footing base, using the 1H:2V stress-distribution method.',
    options: [
      { label: 'A', text: '33.2' },
      { label: 'B', text: '21.3' },
      { label: 'C', text: '45.5' },
      { label: 'D', text: '20.6' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The 2:1 stress distribution method (1H:2V slope) assumes the footing load disperses over an expanded area (B + z) × (L + z) at depth z.',
      formulas: [
        '\\Delta p = \\frac{P}{(B + z)(L + z)}',
        'B = 1.5\\text{ m},\\; L = 2.5\\text{ m},\\; z = 2.7\\text{ m},\\; P = 450\\text{ kN}',
        '\\Delta p = \\frac{450}{(1.5 + 2.7)(2.5 + 2.7)} = \\frac{450}{4.2 \\times 5.2} = \\frac{450}{21.84} = 20.604\\text{ kPa} \\approx 20.6\\text{ kPa}',
      ],
      steps: [
        'Step 1: Identify footing dimensions: B = 1.5 m, L = 2.5 m, P = 450 kN.',
        'Step 2: Depth below footing base z = 2.7 m.',
        'Step 3: Stressed area at depth z: A_z = (B + z)(L + z) = (1.5 + 2.7)(2.5 + 2.7) = 4.2 × 5.2 = 21.84 m².',
        'Step 4: Vertical stress increase Δp = 450 / 21.84 = 20.6 kPa.',
      ],
      finalAnswer: '20.6 (Option D)',
      pageNumber: 245,
    },
  },

  // Item 18
  {
    id: 'hpge-nov2024-q18',
    number: 18,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Soil Permeability & Seepage Velocity',
    text: 'An embankment is inclined at 5° and has a thickness of 3 m. The soil has a permeability of 0.0014 cm/hr and a porosity of 0.25. Over a horizontal distance of 2 km, the piezometric head decreases from 75 m to 65 m. Evaluate the seepage velocity through the embankment in cm/hr.',
    options: [
      { label: 'A', text: '0.000028' },
      { label: 'B', text: '0.000042' },
      { label: 'C', text: '0.000055' },
      { label: 'D', text: '0.000078' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute the hydraulic gradient i = Δh / L, Darcy discharge velocity v = k·i, then seepage velocity vs = v / n.',
      formulas: [
        'i = \\frac{\\Delta h}{L} = \\frac{75 - 65}{2000} = \\frac{10}{2000} = 0.005',
        'v = k \\cdot i = 0.0014\\text{ cm/hr} \\times 0.005 = 7 \\times 10^{-6}\\text{ cm/hr}',
        'v_s = \\frac{v}{n} = \\frac{7 \\times 10^{-6}}{0.25} = 2.8 \\times 10^{-5}\\text{ cm/hr} = 0.000028\\text{ cm/hr}',
      ],
      steps: [
        'Step 1: Piezometric head loss Δh = 75 m - 65 m = 10 m.',
        'Step 2: Horizontal flow length L = 2 km = 2000 m.',
        'Step 3: Hydraulic gradient i = Δh / L = 10 / 2000 = 0.005.',
        'Step 4: Darcy discharge velocity v = k · i = 0.0014 × 0.005 = 7 × 10⁻⁶ cm/hr.',
        'Step 5: Seepage velocity vs = v / n = (7 × 10⁻⁶) / 0.25 = 2.8 × 10⁻⁵ = 0.000028 cm/hr.',
      ],
      finalAnswer: '0.000028 (Option A)',
      pageNumber: 246,
    },
  },

  // Item 19
  {
    id: 'hpge-nov2024-q19',
    number: 19,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Triaxial Shear Test',
    text: 'A cohesionless soil specimen is subjected to a triaxial compression test under a chamber pressure of 12 kPa. Shear failure occurs when the axial compressive stress reaches 34 kPa. Determine the angle of shearing resistance, (φ), of the soil.',
    options: [
      { label: 'A', text: '18.38°' },
      { label: 'B', text: '23.76°' },
      { label: 'C', text: '28.57°' },
      { label: 'D', text: '25.29°' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: "For cohesionless soil (c = 0), the failure envelope passes through the origin. From Mohr's circle geometry: sin φ = R / (σ₃ + R) = (σ₁ - σ₃) / (σ₁ + σ₃).",
      formulas: [
        '\\sigma_3 = 12\\text{ kPa},\\; \\sigma_1 = 34\\text{ kPa}',
        'R = \\frac{\\sigma_1 - \\sigma_3}{2} = \\frac{34 - 12}{2} = 11\\text{ kPa}',
        '\\sin\\phi = \\frac{R}{\\sigma_3 + R} = \\frac{11}{12 + 11} = \\frac{11}{23}',
        '\\phi = \\sin^{-1}\\left(\\frac{11}{23}\\right) = 28.57^{\\circ}',
      ],
      steps: [
        'Step 1: Chamber confining pressure σ₃ = 12 kPa; major compressive stress σ₁ = 34 kPa.',
        'Step 2: Deviator stress σ_d = σ₁ - σ₃ = 22 kPa; radius R = 11 kPa.',
        'Step 3: Distance from origin to circle center: σ₃ + R = 12 + 11 = 23 kPa.',
        'Step 4: Since c = 0, sin φ = R / (σ₃ + R) = 11 / 23 = 0.47826.',
        'Step 5: φ = arcsin(0.47826) = 28.57°.',
      ],
      finalAnswer: '28.57° (Option C)',
      pageNumber: 247,
    },
  },

  // Item 20
  {
    id: 'hpge-nov2024-q20',
    number: 20,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Triaxial Shear Test',
    text: 'A cohesionless soil specimen is tested in a triaxial shear apparatus. The specimen is first consolidated under a chamber confining pressure of 40 kPa. The axial stress is then increased until failure occurs at an additional axial stress of 60 kPa. Determine the angle of internal friction of the soil.',
    options: [
      { label: 'A', text: '15.46°' },
      { label: 'B', text: '25.38°' },
      { label: 'C', text: '23.44°' },
      { label: 'D', text: '31.24°' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The additional axial stress is the deviator stress Δσ = 60 kPa. The circle radius is R = 30 kPa with center at 40 + 30 = 70 kPa.',
      formulas: [
        '\\sigma_3 = 40\\text{ kPa},\\quad \\sigma_d = 60\\text{ kPa}',
        'R = \\frac{\\sigma_d}{2} = \\frac{60}{2} = 30\\text{ kPa}',
        '\\sin\\phi = \\frac{R}{\\sigma_3 + R} = \\frac{30}{40 + 30} = \\frac{30}{70} = \\frac{3}{7}',
        '\\phi = \\sin^{-1}\\left(\\frac{3}{7}\\right) = 25.38^{\\circ}',
      ],
      steps: [
        'Step 1: Confining chamber pressure σ₃ = 40 kPa.',
        'Step 2: Additional axial stress = deviator stress σ_d = 60 kPa.',
        'Step 3: Mohr circle radius R = 60 / 2 = 30 kPa; distance from origin to center = 40 + 30 = 70 kPa.',
        'Step 4: For cohesionless soil, sin φ = R / (σ₃ + R) = 30 / 70 = 3/7 = 0.42857.',
        'Step 5: φ = arcsin(0.42857) = 25.38°.',
      ],
      finalAnswer: '25.38° (Option B)',
      pageNumber: 247,
    },
  },

  // Item 21
  {
    id: 'hpge-nov2024-q21',
    number: 21,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Footing Settlement on Stratified Soil',
    text: 'A 2.4 m × 2.4 m square footing carries a design load of 800 kN. The underlying clay layer has a compression index of 0.247 and an initial void ratio of 0.84. Using the information shown in the figure, determine the primary consolidation settlement of the clay layer.',
    figureSvg: '/src/images/HPGENov2024/HPGE_November_2024_21.png',
    figureCaption: 'Figure for Question 21: Soil stratigraphy and square footing settlement',
    options: [
      { label: 'A', text: '0.018' },
      { label: 'B', text: '0.021' },
      { label: 'C', text: '0.015' },
      { label: 'D', text: '0.013' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute initial effective vertical stress p₀ at the mid-depth of the 4.2 m clay stratum (z = 9.3 m). Calculate vertical stress increase Δp using the 2:1 method, then evaluate primary consolidation settlement ΔH.',
      formulas: [
        'z_{\\text{mid}} = 1.8 + 5.4 + \\frac{4.2}{2} = 9.3\\text{ m}',
        'p_0 = 18.2(1.8) + (19.9 - 9.81)(5.4) + (19.2 - 9.81)(2.1) = 32.76 + 54.486 + 19.719 = 106.965\\text{ kPa}',
        '\\Delta p = \\frac{Q}{(B + z)^2} = \\frac{800}{(2.4 + 9.3)^2} = \\frac{800}{(11.7)^2} = 5.844\\text{ kPa}',
        '\\Delta H = \\frac{C_c H}{1 + e_0} \\log_{10} \\left( \\frac{p_0 + \\Delta p}{p_0} \\right)',
        '\\Delta H = \\frac{0.247(4.2)}{1 + 0.84} \\log_{10} \\left( \\frac{106.965 + 5.844}{106.965} \\right) = 0.5638 \\log_{10}(1.0546) = 0.0130\\text{ m}',
      ],
      steps: [
        'Step 1: Mid-depth of clay layer below ground surface: z = 1.8 + 5.4 + 4.2/2 = 9.3 m.',
        'Step 2: Initial effective stress p₀ = 18.2(1.8) + (19.9 - 9.81)(5.4) + (19.2 - 9.81)(2.1) = 106.965 kPa.',
        'Step 3: Stress increment via 2:1 slope: Δp = 800 / (2.4 + 9.3)² = 800 / 136.89 = 5.844 kPa.',
        'Step 4: Consolidation settlement: ΔH = [0.247(4.2) / 1.84] · log₁₀[(106.965 + 5.844)/106.965] = 0.5638 · 0.02309 = 0.013 m.',
      ],
      finalAnswer: '0.013 (Option D)',
      pageNumber: 247,
    },
  },

  // Item 22
  {
    id: 'hpge-nov2024-q22',
    number: 22,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Direct Shear Test',
    text: 'A direct shear test was performed:\n\n| | Normal Force | Shear Force |\n|:---|:---:|:---:|\n| Test 1 | 240 | 481 |\n| Test 2 | 135 | 352 |\n\nCalculate the average angle of friction.',
    options: [
      { label: 'A', text: '54.81°' },
      { label: 'B', text: '65.76°' },
      { label: 'C', text: '50.86°' },
      { label: 'D', text: '49.13°' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Using the Coulomb shear failure envelope V = N tan φ + C, establish simultaneous equations for Test 1 and Test 2 and solve for friction angle φ.',
      formulas: [
        'V = N \\tan\\phi + C',
        '\\text{Test 1: } 481 = 240\\tan\\phi + C \\implies C = 481 - 240\\tan\\phi',
        '\\text{Test 2: } 352 = 135\\tan\\phi + C \\implies C = 352 - 135\\tan\\phi',
        '481 - 240\\tan\\phi = 352 - 135\\tan\\phi \\implies 129 = 105\\tan\\phi',
        '\\tan\\phi = \\frac{129}{105} = 1.22857 \\implies \\phi = \\tan^{-1}(1.22857) = 50.86^{\\circ}',
      ],
      steps: [
        'Step 1: Write Coulomb equations for both tests: 481 = 240 tan φ + C and 352 = 135 tan φ + C.',
        'Step 2: Subtract the second equation from the first: 481 - 352 = (240 - 135) tan φ.',
        'Step 3: 129 = 105 tan φ => tan φ = 129 / 105 = 1.22857.',
        'Step 4: φ = arctan(1.22857) = 50.86°.',
      ],
      finalAnswer: '50.86° (Option C)',
      pageNumber: 248,
    },
  },

  // Item 23
  {
    id: 'hpge-nov2024-q23',
    number: 23,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Terzaghi Bearing Capacity',
    text: 'A 3 m × 4 m rectangular footing is embedded 1.2 m below the ground surface. The soil has a specific gravity of solids of 2.7, a void ratio of 0.40, and a degree of saturation of 40%. Its cohesion is 10 kPa, and its angle of internal friction is 30°. Using Terzaghi\'s bearing-capacity equation for general shear failure, evaluate the allowable bearing pressure and allowable load.\n\n| Footing | $K_c$ | $K_q$ | $K_\\gamma$ |\n|:---|:---:|:---:|:---:|\n| Long | 1.00 | 1.00 | 0.50 |\n| Square | 1.30 | 1.00 | 0.40 |\n| Circular | 1.30 | 1.00 | 0.30 |\n| Rectangular | $1 + 0.3(B/L)$ | 1.00 | $\\frac{1}{2}(1 - 0.2B/L)$ |\n\nGiven the bearing capacity constant:\n$N_c = 37.2$, $N_q = 22.5$, $N_\\gamma = 19.10$',
    options: [
      { label: 'A', text: '5939' },
      { label: 'B', text: '4119' },
      { label: 'C', text: '567' },
      { label: 'D', text: '305' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute soil bulk unit weight γ from phase relationships, determine foundation surcharge q = γ·Df, evaluate rectangular shape factors Kc, Kq, Kγ for B/L = 3/4 = 0.75, solve for ultimate bearing capacity qu, allowable pressure q_all = qu / 3, and allowable footing load Q_all = q_all · (B·L).',
      formulas: [
        '\\gamma = \\frac{G_s + S e}{1 + e} \\gamma_w = \\frac{2.7 + 0.40(0.40)}{1 + 0.40}(9.81) = 20.04\\text{ kN/m}^3',
        'q = \\gamma D_f = 20.04(1.2) = 24.05\\text{ kPa}',
        'K_c = 1 + 0.3\\left(\\frac{3}{4}\\right) = 1.225,\\; K_q = 1.00,\\; K_\\gamma = \\frac{1}{2}\\left(1 - 0.2\\frac{3}{4}\\right) = 0.425',
        'q_u = K_c c N_c + K_q q N_q + K_\\gamma \\gamma B N_\\gamma',
        'q_u = 1.225(10)(37.2) + 1.00(24.05)(22.5) + 0.425(20.04)(3)(19.10)',
        'q_u = 455.70 + 541.13 + 487.82 = 1484.65\\text{ kPa}',
        'q_{\\text{all}} = \\frac{q_u}{\\text{FS}} = \\frac{1484.65}{3} = 494.88\\text{ kPa}',
        'Q_{\\text{all}} = q_{\\text{all}} \\times \\text{Area} = 494.88 \\times (3 \\times 4) = 5938.6\\text{ kN} \\approx 5939\\text{ kN}',
      ],
      steps: [
        'Step 1: Calculate unit weight of soil: γ = [(2.7 + 0.40 × 0.40)/(1 + 0.40)] × 9.81 = (2.86 / 1.40) × 9.81 = 20.04 kN/m³.',
        'Step 2: Surcharge at foundation base: q = γ · Df = 20.04 × 1.2 = 24.05 kPa.',
        'Step 3: Shape factors for B = 3 m, L = 4 m: Kc = 1 + 0.3(3/4) = 1.225; Kq = 1.00; Kγ = 0.5(1 - 0.2 × 0.75) = 0.425.',
        'Step 4: Ultimate bearing capacity: qu = 1.225(10)(37.2) + 1.0(24.05)(22.5) + 0.425(20.04)(3)(19.10) = 455.70 + 541.13 + 487.82 = 1484.65 kPa.',
        'Step 5: Allowable bearing capacity: q_all = qu / 3 = 494.89 kPa.',
        'Step 6: Allowable load: Q_all = q_all × Area = 494.89 × 12 = 5938.6 kN ≈ 5939 kN.',
      ],
      finalAnswer: '5939 (Option A)',
      pageNumber: 249,
    },
  },

  // Item 24
  {
    id: 'hpge-nov2024-q24',
    number: 24,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Unconfined Compression Test',
    text: 'In an unconfined compression test, a vertical axial stress of 100 kPa was applied. The angle of failure from the horizontal is 45°. What is the angle of friction and cohesion?',
    options: [
      { label: 'A', text: 'φ = 45°, c = 0' },
      { label: 'B', text: 'φ = 28°, c = 0' },
      { label: 'C', text: 'φ = 0, c = 50 kPa' },
      { label: 'D', text: 'φ = 28°, c = 45 kPa' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The failure plane angle is θ = 45° + φ/2. With θ = 45°, internal friction angle φ = 0°. For saturated clay with φ = 0, unconfined compressive strength qu = 2c, yielding cohesion c = qu / 2 = 50 kPa.',
      formulas: [
        '\\theta = 45^{\\circ} + \\frac{\\phi}{2} \\implies 45^{\\circ} = 45^{\\circ} + \\frac{\\phi}{2} \\implies \\phi = 0^{\\circ}',
        'q_u = 2c \\implies c = \\frac{q_u}{2} = \\frac{100}{2} = 50\\text{ kPa}',
      ],
      steps: [
        'Step 1: Failure plane angle relationship: θ = 45° + φ/2.',
        'Step 2: Since θ = 45°, 45° = 45° + φ/2 => φ = 0°.',
        'Step 3: In an unconfined compression test with φ = 0, undrained shear strength (cohesion) c = qu / 2.',
        'Step 4: c = 100 / 2 = 50 kPa.',
      ],
      finalAnswer: 'φ = 0, c = 50 kPa (Option C)',
      pageNumber: 250,
    },
  },
];

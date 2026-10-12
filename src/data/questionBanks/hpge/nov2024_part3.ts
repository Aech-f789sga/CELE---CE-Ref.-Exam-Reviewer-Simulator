import { Question } from '../../../types/exam';

export const HPGE_NOV2024_PART3: Question[] = [
  // Item 25
  {
    id: 'hpge-nov2024-q25',
    number: 25,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Mohr-Coulomb Triaxial Failure',
    text: 'A tri-axial test is performed on cohesionless soil. The soil fails under the following conditions:\n• Confining pressure = 250 kPa\n• Deviator stress = 450 kPa\n\nObtain the normal stress at the failure plane.',
    options: [
      { label: 'A', text: '368' },
      { label: 'B', text: '289' },
      { label: 'C', text: '145' },
      { label: 'D', text: '331' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Calculate Mohr circle parameters: confining pressure σ₃ = 250 kPa, deviator stress σ_d = 450 kPa, major stress σ₁ = 700 kPa, radius R = 225 kPa. Tangent envelope gives sin φ = R / (σ₃ + R). Normal stress on failure plane is σ_f = σ₃ + R - R sin φ.',
      formulas: [
        '\\sigma_3 = 250\\text{ kPa},\\; \\sigma_d = 450\\text{ kPa} \\implies R = 225\\text{ kPa}',
        '\\sin\\phi = \\frac{R}{\\sigma_3 + R} = \\frac{225}{250 + 225} = \\frac{225}{475} = 0.47368 \\implies \\phi = 28.274^{\\circ}',
        'x = R \\sin\\phi = 225 \\sin(28.274^{\\circ}) = 106.58\\text{ kPa}',
        '\\sigma_f = \\sigma_3 + R - x = 250 + 225 - 106.58 = 368.42\\text{ kPa} \\approx 368\\text{ kPa}',
      ],
      steps: [
        'Step 1: Circle center = σ₃ + R = 250 + 225 = 475 kPa.',
        'Step 2: Friction angle: sin φ = 225 / 475 = 0.47368 => φ = 28.274°.',
        'Step 3: Point of tangency (failure plane) projection onto σ-axis: x = R sin φ = 225(0.47368) = 106.58 kPa.',
        'Step 4: Normal stress at failure plane: σ_f = Center - x = 475 - 106.58 = 368.42 kPa ≈ 368 kPa.',
      ],
      finalAnswer: '368 (Option A)',
      pageNumber: 251,
    },
  },

  // Item 26
  {
    id: 'hpge-nov2024-q26',
    number: 26,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Phase Relationships',
    text: 'If Vv = Vs, the porosity (n) and void ratio (e) are equal to:',
    options: [
      { label: 'A', text: 'n = 1, e = 0.5' },
      { label: 'B', text: 'n = 1, e = 0' },
      { label: 'C', text: 'n = 0.5, e = 1' },
      { label: 'D', text: 'n = 0, e = 1' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Void ratio is defined as e = Vv / Vs. Porosity is defined as n = Vv / V = Vv / (Vv + Vs). When Vv = Vs, e = 1 and n = 0.5.',
      formulas: [
        'e = \\frac{V_v}{V_s} = \\frac{1}{1} = 1',
        'n = \\frac{V_v}{V} = \\frac{V_v}{V_v + V_s} = \\frac{1}{1 + 1} = 0.5',
      ],
      steps: [
        'Step 1: Let volume of voids Vv = 1 and volume of solids Vs = 1.',
        'Step 2: Total soil volume V = Vv + Vs = 1 + 1 = 2.',
        'Step 3: Void ratio e = Vv / Vs = 1 / 1 = 1.',
        'Step 4: Porosity n = Vv / V = 1 / 2 = 0.5.',
      ],
      finalAnswer: 'n = 0.5, e = 1 (Option C)',
      pageNumber: 251,
    },
  },

  // Item 27
  {
    id: 'hpge-nov2024-q27',
    number: 27,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Hydrostatic Force on Submerged Gates',
    text: 'Situation 1 — A rectangular gate 3 m high and 1.5 m wide is hinged at the top. A force to keep the gate closed is applied at the bottom with an angle of 45° with the vertical. Compute the magnitude of this force in kN if:\n\nPart 1: The water surface is level with the top of the gate.',
    options: [
      { label: 'A', text: '70.54' },
      { label: 'B', text: '90.52' },
      { label: 'C', text: '62.43' },
      { label: 'D', text: '35.18' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'With water level at the top, centroid depth h̄ = 1.5 m and gate area A = 4.5 m². Total hydrostatic force F_H = 66.22 kN acts at 2/3 depth (2.0 m from top hinge). Take moments about the top hinge.',
      formulas: [
        'F_H = \\gamma \\bar{h} A = 9.81(1.5)(4.5) = 66.22\\text{ kN}',
        'h_{cp} = \\frac{2}{3}(3) = 2\\text{ m}',
        '\\sum M_{\\text{hinge}} = 0 \\implies F_H(2) = P_x(3) = (P \\sin 45^{\\circ})(3)',
        '66.22(2) = P(3 \\sin 45^{\\circ}) \\implies 132.44 = 2.1213 P \\implies P = 62.43\\text{ kN}',
      ],
      steps: [
        'Step 1: Water height on gate = 3 m. Centroid depth h̄ = 1.5 m, area A = 3 × 1.5 = 4.5 m².',
        'Step 2: Hydrostatic force: F_H = 9.81 × 1.5 × 4.5 = 66.22 kN.',
        'Step 3: Center of pressure from top hinge: h_cp = (2/3)(3) = 2.0 m.',
        'Step 4: Horizontal component of force P at bottom: P_x = P sin 45°.',
        'Step 5: ΣM_hinge = 0: 66.22(2) = P sin 45°(3) => 132.44 = 2.1213 P => P = 62.43 kN.',
      ],
      finalAnswer: '62.43 (Option C)',
      pageNumber: 252,
    },
  },

  // Item 28
  {
    id: 'hpge-nov2024-q28',
    number: 28,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Hydrostatic Force on Submerged Gates',
    text: 'Situation 1 — Part 2: The water surface is 0.9 m above the top of the gate.',
    options: [
      { label: 'A', text: '70.54' },
      { label: 'B', text: '90.52' },
      { label: 'C', text: '62.43' },
      { label: 'D', text: '35.18' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Centroid depth h̄ = 0.9 + 1.5 = 2.4 m. F_H = 105.948 kN. Eccentricity e = I_g / (A·h̄) = 0.3125 m, placing the force at 1.8125 m below the hinge.',
      formulas: [
        '\\bar{h} = 0.9 + 1.5 = 2.4\\text{ m},\\quad A = 3(1.5) = 4.5\\text{ m}^2',
        'F_H = \\gamma \\bar{h} A = 9.81(2.4)(4.5) = 105.948\\text{ kN}',
        'e = \\frac{1.5(3)^3 / 12}{4.5(2.4)} = 0.3125\\text{ m} \\implies h_{cp} = 2.4 + 0.3125 = 2.7125\\text{ m}',
        '\\text{Arm from hinge} = h_{cp} - 0.9 = 1.8125\\text{ m}',
        '\\sum M_{\\text{hinge}} = 0 \\implies 105.948(1.8125) = P(3 \\sin 45^{\\circ})',
        '192.03 = 2.1213 P \\implies P = 90.52\\text{ kN}',
      ],
      steps: [
        'Step 1: Centroid depth below water surface: h̄ = 0.9 + 3/2 = 2.4 m.',
        'Step 2: Total force: F_H = γ · h̄ · A = 9.81 × 2.4 × 4.5 = 105.948 kN.',
        'Step 3: Distance of center of pressure below surface: h_cp = 2.4 + [3² / (12 × 2.4)] = 2.7125 m.',
        'Step 4: Lever arm to top hinge: r = h_cp - 0.9 = 1.8125 m.',
        'Step 5: ΣM_hinge = 0: 105.948(1.8125) = P sin 45°(3) => P = 90.52 kN.',
      ],
      finalAnswer: '90.52 (Option B)',
      pageNumber: 252,
    },
  },

  // Item 29
  {
    id: 'hpge-nov2024-q29',
    number: 29,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Hydrostatic Force on Submerged Gates',
    text: 'Situation 1 — Part 3: The water surface is 0.9 m below the top of the gate.',
    options: [
      { label: 'A', text: '70.54' },
      { label: 'B', text: '90.52' },
      { label: 'C', text: '62.43' },
      { label: 'D', text: '35.18' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The wetted height of the gate is 3 - 0.9 = 2.1 m. Submerged area A = 2.1 × 1.5 = 3.15 m². Centroid depth h̄ = 1.05 m. F_H = 32.447 kN acts at (2/3)(2.1) = 1.4 m below the water line (2.3 m below hinge).',
      formulas: [
        '\\text{Wetted height} = 3 - 0.9 = 2.1\\text{ m},\\quad A = 2.1(1.5) = 3.15\\text{ m}^2',
        '\\bar{h} = \\frac{2.1}{2} = 1.05\\text{ m},\\quad F_H = 9.81(1.05)(3.15) = 32.447\\text{ kN}',
        'h_{cp} = \\frac{2}{3}(2.1) = 1.4\\text{ m below water surface}',
        '\\text{Arm from hinge} = 0.9 + 1.4 = 2.3\\text{ m}',
        '\\sum M_{\\text{hinge}} = 0 \\implies 32.447(2.3) = P(3 \\sin 45^{\\circ})',
        '74.628 = 2.1213 P \\implies P = 35.18\\text{ kN}',
      ],
      steps: [
        'Step 1: Wetted height of gate = 3 - 0.9 = 2.1 m; submerged area A = 2.1 × 1.5 = 3.15 m².',
        'Step 2: Centroid depth h̄ = 2.1 / 2 = 1.05 m; F_H = 9.81(1.05)(3.15) = 32.447 kN.',
        'Step 3: Center of pressure is at (2/3)(2.1) = 1.4 m below the water surface.',
        'Step 4: Lever arm from top hinge = 0.9 + 1.4 = 2.3 m.',
        'Step 5: ΣM_hinge = 0: 32.447(2.3) = P sin 45°(3) => P = 35.18 kN.',
      ],
      finalAnswer: '35.18 (Option D)',
      pageNumber: 253,
    },
  },

  // Item 30
  {
    id: 'hpge-nov2024-q30',
    number: 30,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Hydrostatic Force on Inclined Submerged Surfaces',
    text: 'Situation 2 — A triangular gate is 1.2 m wide at the base and 0.9 m high. Its vertex is located 2 m below the water surface. The gate is inclined at 60° to the horizontal, with its base parallel to the water surface.\n\nPart 1: Obtain the force in kN acting on one side of the gate.',
    options: [
      { label: 'A', text: '16.44' },
      { label: 'B', text: '13.35' },
      { label: 'C', text: '18.21' },
      { label: 'D', text: '14.56' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute vertical depth to centroid h̄ = 2 + (2/3)(0.9) sin 60° = 2.52 m. Gate area A = 0.5(1.2)(0.9) = 0.54 m². Hydrostatic force F_H = γ·h̄·A.',
      formulas: [
        'A = \\frac{1}{2}(1.2)(0.9) = 0.54\\text{ m}^2',
        '\\bar{h} = 2 + \\frac{2}{3}(0.9)\\sin 60^{\\circ} = 2 + 0.6(0.8660) = 2.5196\\text{ m} \\approx 2.52\\text{ m}',
        'F_H = \\gamma \\bar{h} A = 9.81(2.52)(0.54) = 13.35\\text{ kN}',
      ],
      steps: [
        'Step 1: Gate area A = 0.5 × 1.2 × 0.9 = 0.54 m².',
        'Step 2: Distance from vertex to centroid along inclined face = (2/3)(0.9) = 0.6 m.',
        'Step 3: Vertical centroid depth: h̄ = 2.0 + 0.6 sin 60° = 2.52 m.',
        'Step 4: Hydrostatic force: F_H = 9.81 × 2.52 × 0.54 = 13.35 kN.',
      ],
      finalAnswer: '13.35 (Option B)',
      pageNumber: 253,
    },
  },

  // Item 31
  {
    id: 'hpge-nov2024-q31',
    number: 31,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Center of Pressure on Triangular Surface',
    text: 'Situation 2 — Part 2: What is the location (m) of the hydrostatic force from the center of gravity of the gate?',
    options: [
      { label: 'A', text: '0.013' },
      { label: 'B', text: '0.014' },
      { label: 'C', text: '0.015' },
      { label: 'D', text: '0.011' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The distance along the gate face from the centroid to the center of pressure is eccentricity e = I_g / (A · ȳ), where ȳ = h̄ / sin 60°.',
      formulas: [
        'e = \\frac{I_g}{A \\bar{y}} = \\frac{b h^3 / 36}{(0.5 b h)( \\bar{h} / \\sin 60^{\\circ} )} = \\frac{h^2 \\sin 60^{\\circ}}{18 \\bar{h}}',
        'e = \\frac{(0.9)^2 \\sin 60^{\\circ}}{18(2.52)} = \\frac{0.81(0.8660)}{45.36} = 0.01546\\text{ m} \\approx 0.015\\text{ m}',
      ],
      steps: [
        'Step 1: Moment of inertia of triangle about centroidal axis parallel to base: I_g = bh³ / 36.',
        'Step 2: Centroidal distance along inclined plane: ȳ = h̄ / sin 60° = 2.52 / sin 60° = 2.91 m.',
        'Step 3: Eccentricity: e = I_g / (A · ȳ) = (0.9)² sin 60° / [18 × 2.52] = 0.015 m.',
      ],
      finalAnswer: '0.015 (Option C)',
      pageNumber: 254,
    },
  },

  // Item 32
  {
    id: 'hpge-nov2024-q32',
    number: 32,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Gate Equilibrium & Opening Force',
    text: 'Situation 2 — Part 3: Find the normal force at the vertex to open the gate if the gate is hinged at the bottom.',
    options: [
      { label: 'A', text: '4.61' },
      { label: 'B', text: '4.25' },
      { label: 'C', text: '4.56' },
      { label: 'D', text: '4.22' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'With the hinge at the base (bottom), distance to the centroid is (1/3)(0.9) = 0.30 m. Center of pressure is closer to the base by eccentricity e = 0.015 m (lever arm x = 0.30 - 0.015 = 0.285 m). Equate moments about the hinge to find normal force P at the vertex (arm = 0.9 m).',
      formulas: [
        'x = \\frac{1}{3}(0.9) - e = 0.30 - 0.015 = 0.285\\text{ m}',
        '\\sum M_{\\text{hinge}} = 0 \\implies F_H(x) = P(0.9)',
        '13.35(0.285) = P(0.9) \\implies 3.80475 = 0.9P \\implies P = 4.227\\text{ kN} \\approx 4.22\\text{ kN}',
      ],
      steps: [
        'Step 1: Distance from hinge (base) to centroid = 0.9 / 3 = 0.30 m.',
        'Step 2: Center of pressure is located below the centroid, so its distance from the bottom hinge is x = 0.30 - 0.015 = 0.285 m.',
        'Step 3: Distance from bottom hinge to vertex = 0.9 m.',
        'Step 4: Moment equilibrium about hinge: 13.35 × 0.285 = P × 0.9.',
        'Step 5: Solve for P: P = 3.80475 / 0.9 = 4.22 kN.',
      ],
      finalAnswer: '4.22 (Option D)',
      pageNumber: 254,
    },
  },

  // Item 33
  {
    id: 'hpge-nov2024-q33',
    number: 33,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Open Channel Flow - Hydraulic Radius',
    text: 'Situation 3 — A rectangular flume has a discharge of 0.30 m³/s, a Manning\'s roughness coefficient of 0.012, a width of 0.90 m, and a flow depth of 0.60 m.\n\nPart 1: Determine the hydraulic radius in meters.',
    options: [
      { label: 'A', text: '0.257' },
      { label: 'B', text: '0.337' },
      { label: 'C', text: '0.187' },
      { label: 'D', text: '0.287' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Hydraulic radius R is defined as the cross-sectional flow area A divided by the wetted perimeter P.',
      formulas: [
        'A = b \\times y = 0.90 \\times 0.60 = 0.54\\text{ m}^2',
        'P = b + 2y = 0.90 + 2(0.60) = 2.10\\text{ m}',
        'R = \\frac{A}{P} = \\frac{0.54}{2.10} = 0.2571\\text{ m} \\approx 0.257\\text{ m}',
      ],
      steps: [
        'Step 1: Flow area A = 0.90 × 0.60 = 0.54 m².',
        'Step 2: Wetted perimeter P = b + 2y = 0.90 + 1.20 = 2.10 m.',
        'Step 3: Hydraulic radius R = A / P = 0.54 / 2.10 = 0.257 m.',
      ],
      finalAnswer: '0.257 (Option A)',
      pageNumber: 254,
    },
  },

  // Item 34
  {
    id: 'hpge-nov2024-q34',
    number: 34,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Open Channel Flow - Mean Velocity',
    text: 'Situation 3 — Part 2: Obtain the mean velocity (m/s).',
    options: [
      { label: 'A', text: '0.665' },
      { label: 'B', text: '0.664' },
      { label: 'C', text: '0.446' },
      { label: 'D', text: '0.556' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Mean velocity v is calculated using the continuity equation v = Q / A.',
      formulas: [
        'v = \\frac{Q}{A} = \\frac{0.30}{0.54} = 0.5556\\text{ m/s} \\approx 0.556\\text{ m/s}',
      ],
      steps: [
        'Step 1: Flow area A = 0.90 × 0.60 = 0.54 m².',
        'Step 2: Discharge Q = 0.30 m³/s.',
        'Step 3: Mean velocity v = Q / A = 0.30 / 0.54 = 0.556 m/s.',
      ],
      finalAnswer: '0.556 (Option D)',
      pageNumber: 255,
    },
  },

  // Item 35
  {
    id: 'hpge-nov2024-q35',
    number: 35,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Open Channel Flow - Manning Equation',
    text: 'Situation 3 — Part 3: Obtain the slope using Manning\'s Formula.',
    options: [
      { label: 'A', text: '0.00021' },
      { label: 'B', text: '0.00012' },
      { label: 'C', text: '0.00027' },
      { label: 'D', text: '0.00014' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Solve for bed slope S using Manning’s equation v = (1/n) · R^(2/3) · S^(1/2).',
      formulas: [
        'v = \\frac{1}{n} R^{2/3} S^{1/2} \\implies S = \\left[ \\frac{n v}{R^{2/3}} \\right]^2',
        'S = \\left[ \\frac{0.012 \\times 0.5556}{(0.257)^{2/3}} \\right]^2 = \\left[ \\frac{0.006667}{0.4042} \\right]^2 = (0.01649)^2 = 0.000272 \\approx 0.00027',
      ],
      steps: [
        'Step 1: Manning’s formula: v = (1/n) · R^(2/3) · S^(1/2).',
        'Step 2: Rearrange for channel bed slope: S = [n · v / R^(2/3)]².',
        'Step 3: Calculate R^(2/3) = (0.257)^(2/3) = 0.4042.',
        'Step 4: Compute numerator: n · v = 0.012 × 0.5556 = 0.006667.',
        'Step 5: Slope S = (0.006667 / 0.4042)² = 0.00027.',
      ],
      finalAnswer: '0.00027 (Option C)',
      pageNumber: 255,
    },
  },
];

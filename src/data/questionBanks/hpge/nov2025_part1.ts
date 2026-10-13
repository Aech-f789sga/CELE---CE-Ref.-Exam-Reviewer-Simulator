import { Question } from '../../../types/exam';

export const HPGE_NOV2025_PART1: Question[] = [
  // Item 1
  {
    id: 'hpge-nov2025-q1',
    number: 1,
    pageNumber: 548,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Fluid Properties - Standard Density & Physical Baseline of Water',
    text: 'The specific weight of water is 1000 kg/m³:\nA. At normal pressure of 760 mmHg\nB. At 4°C temperature\nC. At mean sea level\nD. All these',
    options: [
      { label: 'A', text: 'At normal pressure of 760 mmHg' },
      { label: 'B', text: 'At 4°C temperature' },
      { label: 'C', text: 'At mean sea level' },
      { label: 'D', text: 'All these' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Water attains its maximum density of 1000 kg/m³ under a specific combination of standard baseline conditions: 4°C temperature, standard atmospheric pressure of 760 mmHg, and mean sea level elevation.',
      formulas: [
        '\\rho_{\\max} = 1000',
        'T = 4^\\circ, \\quad P = 760',
      ],
      steps: [
        'Step 1: Water reaches its maximum density of 1000 kg/m³ at exactly 4°C, where hydrogen bonding allows molecules to pack most closely.',
        'Step 2: This standard reference density is calibrated at standard atmospheric pressure of 760 mmHg at mean sea level (standard gravitational acceleration).',
        'Step 3: If temperature or pressure changes away from these standard conditions, water density deviates from 1000 kg/m³.',
        'Step 4: Because all three physical conditions must be met simultaneously, the correct answer is "All these" (Option D).',
      ],
      finalAnswer: 'All these (Option D)',
      pageNumber: 556,
    },
  },

  // Item 2
  {
    id: 'hpge-nov2025-q2',
    number: 2,
    pageNumber: 548,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Buoyancy & Flotation - Archimedes Principle in Gases',
    text: 'Low-density of air was added to the balloon. Why does it float?\nA. Due to buoyancy\nB. Kinetic Energy\nC. High Pressure\nD. Surface Tension',
    options: [
      { label: 'A', text: 'Due to buoyancy' },
      { label: 'B', text: 'Kinetic Energy' },
      { label: 'C', text: 'High Pressure' },
      { label: 'D', text: 'Surface Tension' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'By Archimedes\' principle, any body surrounded by a fluid experiences an upward buoyant force equal to the weight of the fluid it displaces. When internal air is lower in density, displaced ambient air weighs more than the balloon system, creating net upward flotation.',
      formulas: [
        'BF = \\rho_{\\text{ambient}} g V',
        'W = \\rho_{\\text{inside}} g V + W_{\\text{envelope}}',
        'BF > W',
      ],
      steps: [
        'Step 1: According to Archimedes\' Principle, an object immersed in a fluid experiences an upward buoyant force equal to the weight of the displaced fluid.',
        'Step 2: When low-density air (e.g. heated air or light gas) fills the balloon, its overall average density becomes lower than the surrounding atmosphere.',
        'Step 3: The upward buoyant force exerted by the denser outside air exceeds the total weight of the balloon, causing it to float.',
        'Step 4: Therefore, the flotation is due to buoyancy (Option A).',
      ],
      finalAnswer: 'Due to buoyancy (Option A)',
      pageNumber: 556,
    },
  },

  // Item 3
  {
    id: 'hpge-nov2025-q3',
    number: 3,
    pageNumber: 548,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Hydrostatic Forces on Surfaces - Location of Center of Pressure',
    text: 'If a gate is inclined 45° from the horizontal, what is the location of the C.P. (Center of Pressure)?\nA. Above the C.G.\nB. At the C.G\nC. At the water surface\nD. Below of C.G.',
    options: [
      { label: 'A', text: 'Above the C.G.' },
      { label: 'B', text: 'At the C.G' },
      { label: 'C', text: 'At the water surface' },
      { label: 'D', text: 'Below of C.G.' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'For any submerged vertical or inclined planar surface, hydrostatic pressure increases linearly with depth, shifting the line of action of the resultant force below the centroid.',
      formulas: [
        'y_{cp} = y_g + \\frac{I_{xc}}{y_g A}',
        '\\frac{I_{xc}}{y_g A} > 0 \\implies y_{cp} > y_g',
      ],
      steps: [
        'Step 1: Fluid hydrostatic pressure increases linearly with depth (p = γ · h).',
        'Step 2: The lower portion of the gate experiences higher pressure intensities than the upper portion.',
        'Step 3: The resultant hydrostatic force line of action (Center of Pressure) is shifted downward toward the region of higher pressure.',
        'Step 4: In the formula y_cp = y_cg + I_xc / (y_cg · A), the eccentricity term I_xc / (y_cg · A) is strictly positive, placing the C.P. below the C.G. (Option D).',
      ],
      finalAnswer: 'Below of C.G. (Option D)',
      pageNumber: 557,
    },
  },

  // Item 4
  {
    id: 'hpge-nov2025-q4',
    number: 4,
    pageNumber: 548,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Fluid Mechanics - Regimes & Classification of Flow',
    text: 'What are the types (characteristics) of flow in fluid mechanics?\nA. Chaotic, steady\nB. Laminar, turbulent, uniform\nC. Steady, unsteady, normal\nD. Gravity, pump, pressurized',
    options: [
      { label: 'A', text: 'Chaotic, steady' },
      { label: 'B', text: 'Laminar, turbulent, uniform' },
      { label: 'C', text: 'Steady, unsteady, normal' },
      { label: 'D', text: 'Gravity, pump, pressurized' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Fluid mechanics classically classifies flow characteristics into laminar, turbulent, and uniform/non-uniform based on internal particle paths and spatial variation.',
      formulas: [],
      steps: [
        'Step 1: Laminar flow: Fluid particles move smoothly along well-defined parallel streamlines with minimal lateral mixing.',
        'Step 2: Turbulent flow: Fluid motion is characterized by chaotic fluctuations, eddies, and rapid transverse mixing.',
        'Step 3: Uniform flow: Velocity and other flow parameters remain constant with respect to space along the flow path.',
        'Step 4: These terms represent foundational fluid flow regimes and spatial characteristics (Option B).',
      ],
      finalAnswer: 'Laminar, turbulent, uniform (Option B)',
      pageNumber: 558,
    },
  },

  // Item 5
  {
    id: 'hpge-nov2025-q5',
    number: 5,
    pageNumber: 548,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Hydrostatic Forces on Surfaces - Proportionality to Depth',
    text: 'If depth of water doubles, what happens to the hydrostatic force?\nA. It triples\nB. It remains the same\nC. It doubles\nD. It becomes one-half as large',
    options: [
      { label: 'A', text: 'It triples' },
      { label: 'B', text: 'It remains the same' },
      { label: 'C', text: 'It doubles' },
      { label: 'D', text: 'It becomes one-half as large' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'For a submerged surface of constant area, hydrostatic force is directly proportional to centroidal depth: F = γ · A · h̄.',
      formulas: [
        'F = \\gamma A \\bar{h}',
        'F_2 = \\gamma A (2\\bar{h}_1) = 2 F_1',
      ],
      steps: [
        'Step 1: Total hydrostatic force acting on a submerged surface is F = γ · A · h̄, where h̄ is depth to the centroid.',
        'Step 2: Assuming the submerged area A remains constant, force is directly proportional to depth.',
        'Step 3: When the depth doubles (h̄₂ = 2h̄₁), the force also doubles: F₂ = 2F₁ (Option C).',
      ],
      finalAnswer: 'It doubles (Option C)',
      pageNumber: 559,
    },
  },

  // Item 6
  {
    id: 'hpge-nov2025-q6',
    number: 6,
    pageNumber: 548,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Fluid Statics - Layered Immiscible Fluids Bottom Pressure',
    text: 'A tank contains two layers of fluids. The top layer consists of oil with a specific gravity (SG) of 0.8 and a depth of 2 meters. The bottom layer consists of mercury (SG = 13.6) with a depth of 1 meter. Determine the total pressure at the bottom of the tank.\nA. 132.7 kPa\nB. 149.1 kPa\nC. 190.3 kPa\nD. 184.2 kPa',
    options: [
      { label: 'A', text: '132.7 kPa' },
      { label: 'B', text: '149.1 kPa' },
      { label: 'C', text: '190.3 kPa' },
      { label: 'D', text: '184.2 kPa' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Total gage pressure at the base is the sum of the hydrostatic pressures exerted by the oil and mercury layers.',
      formulas: [
        'p = \\gamma_{\\text{oil}} h_{\\text{oil}} + \\gamma_{\\text{Hg}} h_{\\text{Hg}}',
        'p = 0.8(9.81)(2) + 13.6(9.81)(1)',
        'p = 15.696 + 133.416 = 149.112',
      ],
      steps: [
        'Step 1: Oil layer parameters: SG = 0.8, h = 2 m => p_oil = 0.8 × 9.81 × 2 = 15.696 kPa.',
        'Step 2: Mercury layer parameters: SG = 13.6, h = 1 m => p_Hg = 13.6 × 9.81 × 1 = 133.416 kPa.',
        'Step 3: Total base pressure: p = 15.696 + 133.416 = 149.112 kPa ≈ 149.1 kPa (Option B).',
      ],
      finalAnswer: '149.1 kPa (Option B)',
      pageNumber: 559,
    },
  },

  // Item 7
  {
    id: 'hpge-nov2025-q7',
    number: 7,
    pageNumber: 548,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Fluid Statics - Pressure Head Definition',
    text: 'Water rises to the rooftop of a tank 12 m high. What is the pressure head?\nA. 9.81 m\nB. 1.2 m\nC. 10.2 m\nD. 12 m',
    options: [
      { label: 'A', text: '9.81 m' },
      { label: 'B', text: '1.2 m' },
      { label: 'C', text: '10.2 m' },
      { label: 'D', text: '12 m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Pressure head represents the vertical height of a fluid column corresponding to a given pressure: h = p / γ.',
      formulas: [
        'h = \\frac{p}{\\gamma} = 12',
      ],
      steps: [
        'Step 1: Pressure head is defined as the height of fluid column that produces the static pressure: h = p / γ.',
        'Step 2: Since the water column rises to a vertical height of 12 m, the pressure head is simply 12 m of water (Option D).',
      ],
      finalAnswer: '12 m (Option D)',
      pageNumber: 559,
    },
  },

  // Item 8
  {
    id: 'hpge-nov2025-q8',
    number: 8,
    pageNumber: 549,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Buoyancy & Flotation - Equilibrium Weight of Floating Box',
    text: 'A rectangular box with dimensions 0.5 m high, 0.4 m wide, and 1.0 m long floats in water. The draft is observed to be 0.25 m. Determine the weight of the box.\nA. 937.0 N\nB. 1002.3 N\nC. 981.0 N\nD. 993.5 N',
    options: [
      { label: 'A', text: '937.0 N' },
      { label: 'B', text: '1002.3 N' },
      { label: 'C', text: '981.0 N' },
      { label: 'D', text: '993.5 N' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'For a floating body, total weight equals the buoyant force produced by the displaced water volume.',
      formulas: [
        'W = BF = \\gamma_w V_D',
        'V_D = 0.4(1.0)(0.25) = 0.10',
        'W = 9810(0.10) = 981',
      ],
      steps: [
        'Step 1: Submerged displaced volume: V_D = width × length × draft = 0.4 m × 1.0 m × 0.25 m = 0.10 m³.',
        'Step 2: Water unit weight: γ_w = 9810 N/m³.',
        'Step 3: Weight of box: W = BF = 9810 × 0.10 = 981.0 N (Option C).',
      ],
      finalAnswer: '981.0 N (Option C)',
      pageNumber: 560,
    },
  },

  // Item 9
  {
    id: 'hpge-nov2025-q9',
    number: 9,
    pageNumber: 549,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Buoyancy & Flotation - Ship Draft in Freshwater after Cargo Removal',
    text: 'A ship (or barge) weighing 40 MN has a draft of 6.6 m in seawater (sg = 1.026). When 2 MN of load is removed, the draft decreases to 6.5 m. Determine the draft of the ship in freshwater.\nA. 6.98 m\nB. 6.55 m\nC. 6.43 m\nD. 6.78 m',
    options: [
      { label: 'A', text: '6.98 m' },
      { label: 'B', text: '6.55 m' },
      { label: 'C', text: '6.43 m' },
      { label: 'D', text: '6.78 m' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Determine waterplane area A_w from the draft reduction in seawater upon unloading 2 MN, then find the additional draft required in freshwater to support the remaining 38 MN.',
      formulas: [
        '\\Delta d = 6.6 - 6.5 = 0.1',
        '\\gamma_{sw} = 9.81(1.026) = 10.065',
        'A_w = \\frac{\\Delta W}{\\gamma_{sw} \\Delta d} = \\frac{2000}{10.065(0.1)} = 1987.08',
        'W = 40 - 2 = 38',
        '\\Delta V = \\frac{38,000}{9.81} - \\frac{38,000}{10.065} = 98.139',
        '\\Delta d_1 = \\frac{98.139}{1987.08} = 0.0494',
        'd_{fw} = 6.5 + 0.0494 = 6.5494 \\approx 6.55',
      ],
      steps: [
        'Step 1: Unit weight of seawater: γ_sw = 9.81 × 1.026 = 10.065 kN/m³.',
        'Step 2: Unloading 2 MN (2,000 kN) causes a draft change Δd = 6.6 - 6.5 = 0.10 m.',
        'Step 3: Waterplane area: A_w = ΔW / (γ_sw · Δd) = 2000 / (10.065 × 0.10) = 1987.08 m².',
        'Step 4: Remaining ship weight: W = 38 MN = 38,000 kN.',
        'Step 5: Extra volume required in freshwater (γ_fw = 9.81 kN/m³) compared to seawater: ΔV = (38,000 / 9.81) - (38,000 / 10.065) = 98.139 m³.',
        'Step 6: Increase in draft: Δd₁ = 98.139 / 1987.08 = 0.0494 m.',
        'Step 7: Final draft in freshwater: d_fw = 6.5 + 0.0494 = 6.549 m ≈ 6.55 m (Option B).',
      ],
      finalAnswer: '6.55 m (Option B)',
      pageNumber: 560,
    },
  },

  // Item 10
  {
    id: 'hpge-nov2025-q10',
    number: 10,
    pageNumber: 549,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Fluid Masses Under Acceleration - Horizontal Acceleration Surface Tilt',
    text: 'A closed cylindrical tank is 6 m long and 1.5 m deep. It accelerates horizontally at 3 m/s². Determine the angle of inclination of the water surface.\nA. 17°\nB. 11°\nC. 23°\nD. 15°',
    options: [
      { label: 'A', text: '17°' },
      { label: 'B', text: '11°' },
      { label: 'C', text: '23°' },
      { label: 'D', text: '15°' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'For a fluid subjected to uniform horizontal acceleration, the angle of inclination of the free liquid surface is given by tan θ = a / g.',
      formulas: [
        '\\tan\\theta = \\frac{a}{g}',
        '\\tan\\theta = \\frac{3}{9.81} = 0.3058',
        '\\theta = \\tan^{-1}(0.3058) = 17.005^\\circ \\approx 17^\\circ',
      ],
      steps: [
        'Step 1: Formula for surface inclination under horizontal acceleration: tan θ = a / g.',
        'Step 2: Given horizontal acceleration a = 3 m/s² and gravitational acceleration g = 9.81 m/s².',
        'Step 3: tan θ = 3 / 9.81 = 0.30581.',
        'Step 4: θ = arctan(0.30581) = 17.0° (Option A).',
      ],
      finalAnswer: '17° (Option A)',
      pageNumber: 562,
    },
  },

  // Item 11
  {
    id: 'hpge-nov2025-q11',
    number: 11,
    pageNumber: 549,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Unsteady Flow - Time to Empty Cylindrical Tank via Bottom Orifice',
    text: 'A cylindrical tank has a diameter of 4 m and a height of 3 m. It contains water up to the brim. A sharp-edged orifice with a diameter of 100 mm is located at the bottom of the tank. If the coefficient of discharge is 0.60, determine the time required to empty the tank.\nA. 26.5 mins\nB. 33.4 mins\nC. 43.4 mins\nD. 34.8 mins',
    options: [
      { label: 'A', text: '26.5 mins' },
      { label: 'B', text: '33.4 mins' },
      { label: 'C', text: '43.4 mins' },
      { label: 'D', text: '34.8 mins' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Apply the unsteady orifice drainage equation for a prismatic cylindrical tank discharging from initial head h₁ = 3 m to empty condition h₂ = 0.',
      formulas: [
        'A_s = \\frac{\\pi}{4}(4)^2 = 4\\pi',
        'A_o = \\frac{\\pi}{4}(0.10)^2 = 0.0025\\pi',
        't = \\frac{2 A_s}{C_d A_o \\sqrt{2g}}\\left(\\sqrt{h_1} - \\sqrt{h_2}\\right)',
        't = \\frac{2(4\\pi)}{(0.60)(0.0025\\pi)\\sqrt{2(9.81)}}\\left(\\sqrt{3} - 0\\right)',
        't = 2085.5 = 34.76',
      ],
      steps: [
        'Step 1: Tank surface area: A_s = (π/4)(4)² = 4π m².',
        'Step 2: Orifice area: A_o = (π/4)(0.10)² = 0.0025π m².',
        'Step 3: Discharge coefficient C_d = 0.60, initial head h₁ = 3 m, final head h₂ = 0.',
        'Step 4: Drainage time: t = [2(4π) / (0.60 × 0.0025π √(19.62))] · √3 = 1204.09 × 1.73205 = 2085.5 s.',
        'Step 5: Convert to minutes: t = 2085.5 / 60 = 34.76 min ≈ 34.8 min (Option D).',
      ],
      finalAnswer: '34.8 mins (Option D)',
      pageNumber: 562,
    },
  },

  // Item 12
  {
    id: 'hpge-nov2025-q12',
    number: 12,
    pageNumber: 549,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Open Channel Flow - Manning Equation & Hydraulic Radius of Trapezoidal Canal',
    text: 'A trapezoidal channel has a bottom width of 3 m and side slopes of 1.5 horizontal to 1 vertical. The channel is laid on a slope of 0.0008 and has a Manning\'s roughness coefficient n = 0.018. If the discharge is 10 m³/s, determine the Hydraulic Radius.\nA. 0.76 m\nB. 0.98 m\nC. 0.91 m\nD. 0.87 m',
    options: [
      { label: 'A', text: '0.76 m' },
      { label: 'B', text: '0.98 m' },
      { label: 'C', text: '0.91 m' },
      { label: 'D', text: '0.87 m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Solve Manning\'s open-channel equation for normal depth d, then evaluate the hydraulic radius R = A / P.',
      formulas: [
        'A = 3d + 1.5d^2',
        'P = 3 + 2d\\sqrt{1 + 1.5^2} = 3 + 3.6056d',
        'Q = \\frac{1}{n} A R^{2/3} S^{1/2} = \\frac{1}{n} \\frac{A^{5/3}}{P^{2/3}} S^{1/2}',
        '10 = \\frac{1}{0.018}(3d + 1.5d^2)\\left(\\frac{3d + 1.5d^2}{3 + 3.6056d}\\right)^{2/3} (0.0008)^{1/2}',
        'd = 1.3747',
        'R = \\frac{3(1.3747) + 1.5(1.3747)^2}{3 + 3.6056(1.3747)} = \\frac{6.9587}{7.9566} = 0.8746 \\approx 0.87',
      ],
      steps: [
        'Step 1: Section geometry with b = 3 m, z = 1.5: Area A = bd + zd² = 3d + 1.5d².',
        'Step 2: Wetted perimeter: P = b + 2d√(1 + z²) = 3 + 2d√(3.25) = 3 + 3.6056d.',
        'Step 3: Manning equation: Q = (1/n) · A · (A/P)^(2/3) · S^(1/2).',
        'Step 4: Substitute Q = 10, n = 0.018, S = 0.0008: solve iteratively for depth d = 1.3747 m.',
        'Step 5: Compute hydraulic radius R = A / P = [3(1.3747) + 1.5(1.3747)²] / [3 + 3.6056(1.3747)] = 6.959 / 7.957 = 0.875 m ≈ 0.87 m (Option D).',
      ],
      finalAnswer: '0.87 m (Option D)',
      pageNumber: 563,
    },
  },
];

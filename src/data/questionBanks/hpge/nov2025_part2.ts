import { Question } from '../../../types/exam';

export const HPGE_NOV2025_PART2: Question[] = [
  // Item 13
  {
    id: 'hpge-nov2025-q13',
    number: 13,
    pageNumber: 549,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Fluid Mechanics - Principle of Continuity & Conservation Law',
    text: 'The equation of continuity is based on the principle of conservation of:\nA. Mass\nB. Energy\nC. Momentum\nD. None of the above',
    options: [
      { label: 'A', text: 'Mass' },
      { label: 'B', text: 'Energy' },
      { label: 'C', text: 'Momentum' },
      { label: 'D', text: 'None of the above' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The continuity equation expresses the principle of conservation of mass in fluid systems: mass flow rate remains constant along any continuous stream tube.',
      formulas: [
        '\\dot{m} = \\rho_1 A_1 v_1 = \\rho_2 A_2 v_2',
        'A_1 v_1 = A_2 v_2',
      ],
      steps: [
        'Step 1: The continuity equation states that fluid mass entering a control volume must equal fluid mass exiting it over the same duration, assuming steady flow with no sources or sinks.',
        'Step 2: For compressible fluid: ρ₁A₁v₁ = ρ₂A₂v₂ = constant (conservation of mass).',
        'Step 3: For incompressible fluid (ρ₁ = ρ₂), this simplifies to volume conservation A₁v₁ = A₂v₂.',
        'Step 4: Energy conservation is expressed by Bernoulli\'s equation, and momentum conservation is expressed by Newton\'s 2nd Law / Navier-Stokes equations.',
        'Step 5: Therefore, continuity is fundamentally based on conservation of Mass (Option A).',
      ],
      finalAnswer: 'Mass (Option A)',
      pageNumber: 563,
    },
  },

  // Item 14
  {
    id: 'hpge-nov2025-q14',
    number: 14,
    pageNumber: 549,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Fluid Dynamics - Velocity Head in Pipe Flow',
    text: 'A water stream is flowing through a pipe with a constant velocity of 5 m/s. Calculate the velocity head of the water\nA. 0.815 m\nB. 1.42 m\nC. 1.27 m\nD. 1.12 m',
    options: [
      { label: 'A', text: '0.815 m' },
      { label: 'B', text: '1.42 m' },
      { label: 'C', text: '1.27 m' },
      { label: 'D', text: '1.12 m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Velocity head represents the kinetic energy per unit weight of fluid: hv = v² / (2g).',
      formulas: [
        'h_v = \\frac{v^2}{2g}',
        'h_v = \\frac{5^2}{2(9.81)} = \\frac{25}{19.62} = 1.2742 \\approx 1.27',
      ],
      steps: [
        'Step 1: The formula for kinetic/velocity head is hv = v² / (2g).',
        'Step 2: Given flow velocity v = 5 m/s and g = 9.81 m/s².',
        'Step 3: hv = (5)² / (2 × 9.81) = 25 / 19.62 = 1.274 m ≈ 1.27 m (Option C).',
      ],
      finalAnswer: '1.27 m (Option C)',
      pageNumber: 564,
    },
  },

  // Item 15
  {
    id: 'hpge-nov2025-q15',
    number: 15,
    pageNumber: 550,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Pipe Flow - Darcy-Weisbach Pipe Friction Head Loss',
    text: 'Water flows through a pipe with a length of 50 meters and a diameter of 100 mm at a velocity of 2 m/s. If the coefficient of friction (Darcy-Weisbach factor) is 0.02, determine the head loss in the pipe.\nA. 1.02 m\nB. 2.04 m\nC. 3.43 m\nD. 4.33 m',
    options: [
      { label: 'A', text: '1.02 m' },
      { label: 'B', text: '2.04 m' },
      { label: 'C', text: '3.43 m' },
      { label: 'D', text: '4.33 m' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute major friction head loss using the Darcy-Weisbach equation: hf = f · (L / D) · (v² / 2g).',
      formulas: [
        'h_f = \\frac{f L v^2}{D 2g}',
        'h_f = \\frac{0.02(50)(2^2)}{0.10 \\cdot 2(9.81)} = \\frac{4}{1.962} = 2.0387 \\approx 2.04',
      ],
      steps: [
        'Step 1: Identify pipeline parameters: L = 50 m, D = 100 mm = 0.10 m, v = 2 m/s, f = 0.02.',
        'Step 2: Substitute into Darcy-Weisbach equation: hf = [0.02 × 50 × (2)²] / [0.10 × 2(9.81)].',
        'Step 3: Numerator = 0.02 × 50 × 4 = 4.0; Denominator = 0.10 × 19.62 = 1.962.',
        'Step 4: hf = 4.0 / 1.962 = 2.0387 m ≈ 2.04 m (Option B).',
      ],
      finalAnswer: '2.04 m (Option B)',
      pageNumber: 565,
    },
  },

  // Item 16
  {
    id: 'hpge-nov2025-q16',
    number: 16,
    pageNumber: 550,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Hydraulic Machinery - Turbine Power & Required Water Discharge',
    text: 'A hydraulic turbine (or hydroelectric plant) operates with an effective head of 80 meters and an overall efficiency of 85%. If the plant generates a power output of 400 kW, determine the flow rate of water required.\nA. 0.60 m³/s\nB. 0.80 m³/s\nC. 0.75 m³/s\nD. 0.65 m³/s',
    options: [
      { label: 'A', text: '0.60 m³/s' },
      { label: 'B', text: '0.80 m³/s' },
      { label: 'C', text: '0.75 m³/s' },
      { label: 'D', text: '0.65 m³/s' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Hydroelectric power output is related to effective head and flow rate by P = η · ρ · g · Q · H. Rearranging gives required discharge Q.',
      formulas: [
        'P = \\eta \\rho g Q H = \\eta \\gamma Q H',
        'Q = \\frac{P}{\\eta \\rho g H}',
        'Q = \\frac{400{,}000}{0.85(1000)(9.81)(80)} = \\frac{400{,}000}{667{,}080} = 0.5996 \\approx 0.60',
      ],
      steps: [
        'Step 1: Formula for generated electrical turbine power: P = η · γ · Q · H.',
        'Step 2: Given P = 400 kW = 400,000 W, effective head H = 80 m, efficiency η = 0.85, γ = 9810 N/m³.',
        'Step 3: Solve for discharge: Q = 400,000 / [0.85 × 9810 × 80] = 400,000 / 667,080 = 0.5996 m³/s.',
        'Step 4: Q ≈ 0.60 m³/s (or 600 L/s) (Option A).',
      ],
      finalAnswer: '0.60 m³/s (Option A)',
      pageNumber: 565,
    },
  },

  // Item 17
  {
    id: 'hpge-nov2025-q17',
    number: 17,
    pageNumber: 550,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Phase Relationships - Degree of Saturation Physical Upper Bound',
    text: 'Given the following soil properties: Specific gravity of soil solids, Gs = 2.7; Void ratio, e = 0.6; water content, MC = 28%. Determine the degree of saturation of the soil.\nA. 26%\nB. 126%\nC. 85%\nD. 100%',
    options: [
      { label: 'A', text: '26%' },
      { label: 'B', text: '126%' },
      { label: 'C', text: '85%' },
      { label: 'D', text: '100%' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Using phase relationship Gs · w = S · e gives a mathematical value of 126%. However, degree of saturation cannot physically exceed 100% because void space cannot hold more water than total void volume, making 100% the physical answer.',
      formulas: [
        'G_s w = S e',
        'S = \\frac{G_s w}{e} = \\frac{2.7(0.28)}{0.6} = 1.26 = 126\\%',
        'S_{\\max} = 100\\%',
      ],
      steps: [
        'Step 1: Fundamental soil phase relationship: Gs · w = S · e.',
        'Step 2: Compute nominal value: S = (2.7 × 0.28) / 0.6 = 0.756 / 0.6 = 1.26 = 126%.',
        'Step 3: In soil physics, voids cannot be filled past 100% saturation (water volume cannot exceed void volume).',
        'Step 4: When calculated S exceeds 100%, the soil is fully saturated at S = 100% (Option D).',
      ],
      finalAnswer: '100% (Option D)',
      pageNumber: 565,
    },
  },

  // Item 18
  {
    id: 'hpge-nov2025-q18',
    number: 18,
    pageNumber: 550,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Classification - Unified Soil Classification System (USCS)',
    text: 'Classify the soil sample using USCS. Given: LL = 46 and PL = 29.\n\n| Sieve No. | Diameter (mm) | % Passing |\n| :--- | :--- | :--- |\n| 4 | 4.760 | 100 |\n| 8 | 2.380 | 90 |\n| 10 | 2.000 | 77 |\n| 20 | 0.840 | 59 |\n| 40 | 0.420 | 51 |\n| 60 | 0.250 | 42 |\n| 100 | 0.149 | 35 |\n| 200 | 0.074 | 33 |\n\nA. SC\nB. SM\nC. OH\nD. ML',
    options: [
      { label: 'A', text: 'SC' },
      { label: 'B', text: 'SM' },
      { label: 'C', text: 'OH' },
      { label: 'D', text: 'ML' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'With 33% passing sieve No. 200, the soil is coarse-grained. 100% passing sieve No. 4 means coarse fraction is entirely sand. Fines exceed 12% and plot below the A-line, classifying the soil as SM (Silty Sand).',
      formulas: [
        'PI = LL - PL = 46 - 29 = 17',
        'PI_A = 0.73(LL - 20) = 0.73(46 - 20) = 18.98',
        'PI = 17 < PI_A = 18.98',
      ],
      steps: [
        'Step 1: Check sieve No. 200 passing: P200 = 33% < 50%, so the soil is coarse-grained.',
        'Step 2: Check sieve No. 4 passing: P4 = 100%, meaning 0% gravel; the coarse fraction is 100% sand (prefix S).',
        'Step 3: Since fines content P200 = 33% > 12%, classification depends on Atterberg limits and the Casagrande plasticity chart.',
        'Step 4: Plasticity index: PI = LL - PL = 46 - 29 = 17.',
        'Step 5: A-line equation: PI_A = 0.73(LL - 20) = 0.73(26) = 18.98.',
        'Step 6: Because actual PI (17) < PI_A (18.98), the fines plot below the A-line, denoting silt (M).',
        'Step 7: Therefore, the soil classification is SM - Silty Sand (Option B).',
      ],
      finalAnswer: 'SM (Option B)',
      pageNumber: 566,
    },
  },

  // Item 19
  {
    id: 'hpge-nov2025-q19',
    number: 19,
    pageNumber: 550,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Classification - USCS Limiting Liquid Limit Threshold',
    text: 'According to the Unified Soil Classification System (USCS), what is the limiting Liquid Limit (LL) value used to distinguish between a soil of "low plasticity" (L) and a soil of "high plasticity" (H)?\nA. 50\nB. 30\nC. 40\nD. 60',
    options: [
      { label: 'A', text: '50' },
      { label: 'B', text: '30' },
      { label: 'C', text: '40' },
      { label: 'D', text: '60' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'In the Unified Soil Classification System, liquid limit LL = 50 is the universally standard boundary dividing fine-grained soils into low plasticity (L, if LL < 50) and high plasticity (H, if LL ≥ 50).',
      formulas: [
        'LL < 50 \\implies \\text{Low plasticity (L)}',
        'LL \\ge 50 \\implies \\text{High plasticity (H)}',
      ],
      steps: [
        'Step 1: USCS utilizes the Casagrande Plasticity Chart where vertical dividing line is at LL = 50.',
        'Step 2: Soils with LL < 50 receive the suffix "L" (e.g., CL, ML, OL).',
        'Step 3: Soils with LL ≥ 50 receive the suffix "H" (e.g., CH, MH, OH).',
        'Step 4: The dividing threshold is 50 (Option A).',
      ],
      finalAnswer: '50 (Option A)',
      pageNumber: 567,
    },
  },

  // Item 20
  {
    id: 'hpge-nov2025-q20',
    number: 20,
    pageNumber: 551,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Mechanics - Gradation Criteria & Poorly-Graded Classification',
    text: 'A sieve analysis was conducted on a coarse-grained soil sample. The particle size distribution curve yielded a Coefficient of Uniformity (Cu) of 2.8 and a Coefficient of Curvature (Cc) of 4.3. Based on the Unified Soil Classification System (USCS), how would this soil be classified?\nA. GW or SW (Well-graded)\nB. GM or SM (Silty)\nC. GP or SP (Poorly-graded)\nD. GC or SC (Clayey)',
    options: [
      { label: 'A', text: 'GW or SW (Well-graded)' },
      { label: 'B', text: 'GM or SM (Silty)' },
      { label: 'C', text: 'GP or SP (Poorly-graded)' },
      { label: 'D', text: 'GC or SC (Clayey)' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Well-graded criteria require Cu ≥ 4 (for gravel) or Cu ≥ 6 (for sand) AND 1 ≤ Cc ≤ 3. Here Cu = 2.8 and Cc = 4.3 fail both conditions, classifying the soil as poorly-graded (GP or SP).',
      formulas: [
        'C_u \\ge 4 \\text{ (gravel)}, \\quad C_u \\ge 6 \\text{ (sand)}',
        '1 \\le C_c \\le 3',
        'C_u = 2.8 < 4, \\quad C_c = 4.3 > 3',
      ],
      steps: [
        'Step 1: Criteria for well-graded gravel (GW): Cu ≥ 4 and 1 ≤ Cc ≤ 3.',
        'Step 2: Criteria for well-graded sand (SW): Cu ≥ 6 and 1 ≤ Cc ≤ 3.',
        'Step 3: Given Cu = 2.8, which is less than both 4 and 6.',
        'Step 4: Given Cc = 4.3, which falls outside the acceptable range of 1 to 3.',
        'Step 5: Failing either condition means the soil lacks a smooth, well-distributed gradation curve, so it is classified as GP or SP (Poorly-graded) (Option C).',
      ],
      finalAnswer: 'GP or SP (Poorly-graded) (Option C)',
      pageNumber: 567,
    },
  },

  // Item 21
  {
    id: 'hpge-nov2025-q21',
    number: 21,
    pageNumber: 551,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Permeability - Falling Head Permeameter Test',
    text: 'The permeameter in a falling head permeability test setup involves a cylindrical soil sample 50 mm in diameter and a height 255 mm. The hydraulic head in the 10-mm diameter standpipe through which test water passed dropped from 950 mm to 600 mm in three - minute of observation. In that duration, the water collected in the graduate was recorded at 2.5 liters. Evaluate the coefficient of permeability of the soil sample in cm/s.\nA. 0.00260 cm/s\nB. 0.00249 cm/s\nC. 0.00342 cm/s\nD. 0.00211 cm/s',
    options: [
      { label: 'A', text: '0.00260 cm/s' },
      { label: 'B', text: '0.00249 cm/s' },
      { label: 'C', text: '0.00342 cm/s' },
      { label: 'D', text: '0.00211 cm/s' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Evaluate falling head permeability using k = (a · L / [A · t]) · ln(h1 / h2).',
      formulas: [
        'a = \\frac{\\pi}{4}(1.0)^2 = 0.7854\\text{ cm}^2',
        'A = \\frac{\\pi}{4}(5.0)^2 = 19.635\\text{ cm}^2',
        'k = \\frac{a L}{A t} \\ln\\left(\\frac{h_1}{h_2}\\right)',
        'k = \\frac{(0.7854)(25.5)}{(19.635)(180)} \\ln\\left(\\frac{95}{60}\\right) = 0.00260',
      ],
      steps: [
        'Step 1: Convert dimensions to cm: standpipe diameter d = 10 mm = 1.0 cm => area a = (π/4)(1)² = 0.7854 cm².',
        'Step 2: Soil sample diameter D = 50 mm = 5.0 cm => area A = (π/4)(5)² = 19.635 cm²; sample length L = 255 mm = 25.5 cm.',
        'Step 3: Initial and final heads: h1 = 950 mm = 95 cm, h2 = 600 mm = 60 cm.',
        'Step 4: Elapsed time: t = 3 min = 180 s.',
        'Step 5: k = [(0.7854 × 25.5) / (19.635 × 180)] × ln(95 / 60) = (20.0277 / 3534.3) × ln(1.5833) = 0.0056666 × 0.45953 = 0.002604 cm/s ≈ 0.00260 cm/s (Option A).',
      ],
      finalAnswer: '0.00260 cm/s (Option A)',
      pageNumber: 567,
    },
  },

  // Item 22
  {
    id: 'hpge-nov2025-q22',
    number: 22,
    pageNumber: 551,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Permeability - Equivalent Horizontal Permeability of Stratified Soil',
    text: 'A soil profile consists of three horizontal layers. The first layer has a depth of 2.5 m and permeability K₁ = 1 × 10⁻⁴ cm/s; the second layer has a depth of 1 m and K₂ = 3 × 10⁻⁵ cm/s; and the third layer has a depth of 3 m and K₃ = 2.3 × 10⁻⁵ cm/s. Determine the equivalent horizontal permeability of the soil mass.\nA. 9.73×10⁻⁵ cm/s\nB. 6.67×10⁻⁵ cm/s\nC. 7.32×10⁻⁵ cm/s\nD. 5.37×10⁻⁵ cm/s',
    options: [
      { label: 'A', text: '9.73×10⁻⁵ cm/s' },
      { label: 'B', text: '6.67×10⁻⁵ cm/s' },
      { label: 'C', text: '7.32×10⁻⁵ cm/s' },
      { label: 'D', text: '5.37×10⁻⁵ cm/s' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'For flow parallel to stratified soil strata, equivalent horizontal permeability is the thickness-weighted arithmetic mean: Kh = Σ(Ki · Hi) / ΣHi.',
      formulas: [
        'K_h = \\frac{\\sum K_i H_i}{\\sum H_i}',
        'H = 2.5 + 1.0 + 3.0 = 6.5',
        'K_h = \\frac{(1 \\times 10^{-4})(2.5) + (3 \\times 10^{-5})(1) + (2.3 \\times 10^{-5})(3)}{6.5}',
        'K_h = \\frac{2.5 \\times 10^{-4} + 0.3 \\times 10^{-4} + 0.69 \\times 10^{-4}}{6.5} = \\frac{3.49 \\times 10^{-4}}{6.5} = 5.37 \\times 10^{-5}',
      ],
      steps: [
        'Step 1: Total thickness H = 2.5 + 1.0 + 3.0 = 6.5 m.',
        'Step 2: Layer 1 product: (1 × 10⁻⁴) × 2.5 = 2.5 × 10⁻⁴.',
        'Step 3: Layer 2 product: (3 × 10⁻⁵) × 1.0 = 0.3 × 10⁻⁴.',
        'Step 4: Layer 3 product: (2.3 × 10⁻⁵) × 3.0 = 0.69 × 10⁻⁴.',
        'Step 5: Sum of products = (2.5 + 0.3 + 0.69) × 10⁻⁴ = 3.49 × 10⁻⁴ cm·m/s.',
        'Step 6: Kh = (3.49 × 10⁻⁴) / 6.5 = 5.369 × 10⁻⁵ cm/s ≈ 5.37 × 10⁻⁵ cm/s (Option D).',
      ],
      finalAnswer: '5.37×10⁻⁵ cm/s (Option D)',
      pageNumber: 568,
    },
  },

  // Item 23
  {
    id: 'hpge-nov2025-q23',
    number: 23,
    pageNumber: 551,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Geotechnical Engineering - Overburden Vertical Stress & Total Force',
    text: 'A horizontal plane is located at a depth of 4 m below the ground surface in a dry sand deposit. The unit weight of the sand is 19 kN/m³. If the vertical pressure at this depth acts uniformly over a horizontal area of 2.0 m², determine the total vertical force acting on the area.\nA. 156 kN\nB. 139 kN\nC. 148 kN\nD. 152 kN',
    options: [
      { label: 'A', text: '156 kN' },
      { label: 'B', text: '139 kN' },
      { label: 'C', text: '148 kN' },
      { label: 'D', text: '152 kN' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute vertical geostatic overburden stress σv = γ · z, then calculate total downward force F = σv · A.',
      formulas: [
        '\\sigma_v = \\gamma z',
        '\\sigma_v = 19(4.0) = 76',
        'F = \\sigma_v A = 76(2.0) = 152',
      ],
      steps: [
        'Step 1: Overburden vertical stress at depth z = 4 m: σv = γ · z = 19 kN/m³ × 4.0 m = 76 kPa.',
        'Step 2: Total vertical force acting over horizontal area A = 2.0 m²: F = σv × A.',
        'Step 3: F = 76 kPa × 2.0 m² = 152 kN (Option D).',
      ],
      finalAnswer: '152 kN (Option D)',
      pageNumber: 568,
    },
  },

  // Item 24
  {
    id: 'hpge-nov2025-q24',
    number: 24,
    pageNumber: 551,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Effective Stress - Fluctuating Water Table & Surcharge Bounds',
    text: 'A soil profile has a saturated unit weight of 19.2 kN/m³ and a moist unit weight of 20 kN/m³ above the water table. The ground surface is subjected to a uniform surcharge load of 80 kPa. Field observations show that the water table fluctuates between a depth of 0.5 m (highest level) and 2.5 m (lowest level) below the ground surface. Determine the range of effective stress at a point 2.0 meters below the ground surface.\nA. 106.6 kPa to 102.23 kPa\nB. 107.2 kPa to 112.3 kPa\nC. 103.6 kPa to 120.32 kPa\nD. 104.9 kPa to 118.4 kPa',
    options: [
      { label: 'A', text: '106.6 kPa to 102.23 kPa' },
      { label: 'B', text: '107.2 kPa to 112.3 kPa' },
      { label: 'C', text: '103.6 kPa to 120.32 kPa' },
      { label: 'D', text: '104.9 kPa to 118.4 kPa' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Evaluate effective stress σ\' = σ - u at 2.0 m depth for both extremes of groundwater fluctuation.',
      formulas: [
        '\\sigma = q + \\gamma_m(0.5) + \\gamma_{\\text{sat}}(1.5)',
        'u = \\gamma_w(1.5)',
        '\\sigma\' = \\sigma - u = 119.6 - 14.72 = 104.88',
        '\\sigma\' = q + \\gamma_m(2.0) = 80 + 19.2(2.0) = 118.4',
      ],
      steps: [
        'Step 1: Case 1 (Highest GWT at 0.5 m): Moist soil extends 0.5 m (γm = 19.2), saturated soil extends 1.5 m (γsat = 20 kN/m³).',
        'Step 2: Total vertical stress: σ = 80 + 19.2(0.5) + 20(1.5) = 80 + 9.6 + 30.0 = 119.6 kPa.',
        'Step 3: Pore water pressure at 2.0 m (1.5 m below water table): u = 9.81 × 1.5 = 14.715 ≈ 14.72 kPa.',
        'Step 4: Effective stress for Case 1: σ\' = 119.6 - 14.72 = 104.88 kPa ≈ 104.9 kPa.',
        'Step 5: Case 2 (Lowest GWT at 2.5 m): The point at 2.0 m is above the water table, so u = 0.',
        'Step 6: Total and effective stress for Case 2: σ\' = σ = 80 + 19.2(2.0) = 80 + 38.4 = 118.4 kPa.',
        'Step 7: The range of effective stress is 104.9 kPa to 118.4 kPa (Option D).',
      ],
      finalAnswer: '104.9 kPa to 118.4 kPa (Option D)',
      pageNumber: 569,
    },
  },
];

import { Question } from '../../../types/exam';

export const HPGE_NOV2025_PART4: Question[] = [
  // Item 37
  {
    id: 'hpge-nov2025-q37',
    number: 37,
    pageNumber: 554,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Properties - Inter-particle Attraction & Cohesion Magnitude',
    text: 'Which of the following soil types has the highest cohesion?\nA. Clay\nB. Silt\nC. Peat\nD. Sand',
    options: [
      { label: 'A', text: 'Clay' },
      { label: 'B', text: 'Silt' },
      { label: 'C', text: 'Peat' },
      { label: 'D', text: 'Sand' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Clay soils consist of microscopic plate-like minerals possessing extensive specific surface areas and strong electrochemical surface charges, providing the highest inter-particle cohesion.',
      formulas: [],
      steps: [
        'Step 1: Cohesion represents the shear strength component resulting from mutual physicochemical attraction between particles independent of normal stress.',
        'Step 2: Clay minerals (kaolinite, illite, montmorillonite) have negative surface charges attracting bound water films and cations, producing substantial cohesion.',
        'Step 3: Sand and gravel are cohesionless (c = 0), and silt exhibits only slight cohesion.',
        'Step 4: Therefore, clay has the highest cohesion among standard soils (Option A).',
      ],
      finalAnswer: 'Clay (Option A)',
      pageNumber: 577,
    },
  },

  // Item 38
  {
    id: 'hpge-nov2025-q38',
    number: 38,
    pageNumber: 554,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Field Compaction Control - Philippine Standard Field Density Testing',
    text: 'What is the most common test used in the Philippines (Ph) for finding the field density of soil?\nA. Triaxial\nB. Sieve analysis\nC. Sand cone method\nD. Direct Shear',
    options: [
      { label: 'A', text: 'Triaxial' },
      { label: 'B', text: 'Sieve analysis' },
      { label: 'C', text: 'Sand cone method' },
      { label: 'D', text: 'Direct Shear' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The Sand Cone Method (ASTM D1556) is universally standard in DPWH roadwork specifications and geotechnical practice in the Philippines for in-place dry density and relative compaction verification.',
      formulas: [
        '\\gamma_{\\text{field}} = \\frac{W_{\\text{soil}}}{V_{\\text{hole}}}',
      ],
      steps: [
        'Step 1: The Sand Cone test measures in-situ density by calibrating the volume of a freshly dug test hole using Ottawa standard sand.',
        'Step 2: Soil excavated from the hole is weighed and dried for moisture content determination: γ_field = W_soil / V_hole.',
        'Step 3: It is the standard field compaction acceptance test stipulated by the DPWH (Department of Public Works and Highways) in the Philippines.',
        'Step 4: Therefore, the Sand Cone Method is the most common test (Option C).',
      ],
      finalAnswer: 'Sand cone method (Option C)',
      pageNumber: 577,
    },
  },

  // Item 39
  {
    id: 'hpge-nov2025-q39',
    number: 39,
    pageNumber: 554,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Hydrostatic Forces on Surfaces - Triangular Gate Total Thrust',
    text: 'Situation 1 - A triangular gate with a base width of 0.9 m and a height of 1.2 m is submerged vertically in water. The top vertex of the triangle is located 2 meters below the water surface.\n\nCalculate the hydrostatic force acting on the gate.\nA. 15.43\nB. 10.32\nC. 11.88\nD. 14.83',
    options: [
      { label: 'A', text: '15.43' },
      { label: 'B', text: '10.32' },
      { label: 'C', text: '11.88' },
      { label: 'D', text: '14.83' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Calculate the gate area and centroidal depth, then find total hydrostatic thrust using F = γw · A · h̄.',
      formulas: [
        'A = \\frac{1}{2} b h = \\frac{1}{2}(0.9)(1.2) = 0.54',
        '\\bar{h} = 2.0 + \\frac{2}{3}(1.2) = 2.0 + 0.8 = 2.8',
        'F = \\gamma_w A \\bar{h} = 9.81(0.54)(2.8) = 14.8327 \\approx 14.83',
      ],
      steps: [
        'Step 1: Gate geometry: b = 0.9 m (at bottom), h = 1.2 m; Area A = 0.5 × 0.9 × 1.2 = 0.54 m².',
        'Step 2: Centroid of a triangle with vertex at top is located at (2/3)h from vertex: y_cg = (2/3)(1.2) = 0.8 m.',
        'Step 3: Depth of centroid below free water surface: h̄ = 2.0 m + 0.8 m = 2.8 m.',
        'Step 4: Hydrostatic force: F = γw · A · h̄ = 9.81 × 0.54 × 2.8 = 14.8327 kN ≈ 14.83 kN (Option D).',
      ],
      finalAnswer: '14.83 (Option D)',
      pageNumber: 578,
    },
  },

  // Item 40
  {
    id: 'hpge-nov2025-q40',
    number: 40,
    pageNumber: 554,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Hydrostatic Forces on Surfaces - Distance to Center of Pressure',
    text: 'Situation 1 (Continued) - Determine the distance of the water surface to the center of pressure (CP)\nA. 2.83\nB. 2.38\nC. 2.59\nD. 2.95',
    options: [
      { label: 'A', text: '2.83' },
      { label: 'B', text: '2.38' },
      { label: 'C', text: '2.59' },
      { label: 'D', text: '2.95' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Evaluate center of pressure depth: hcp = h̄ + Ig / (A · h̄), using centroidal moment of inertia of the triangle.',
      formulas: [
        'I_g = \\frac{b h^3}{36} = \\frac{0.9(1.2^3)}{36} = 0.0432',
        'h_{cp} = \\bar{h} + \\frac{I_g}{A \\bar{h}}',
        'h_{cp} = 2.8 + \\frac{0.0432}{(0.54)(2.8)} = 2.8 + 0.02857 = 2.8286 \\approx 2.83',
      ],
      steps: [
        'Step 1: Moment of inertia about horizontal centroidal axis: Ig = b·h³ / 36 = 0.9 × (1.2)³ / 36 = 0.0432 m⁴.',
        'Step 2: Gate area A = 0.54 m², centroidal depth h̄ = 2.8 m.',
        'Step 3: Distance from centroid to CP (eccentricity): e = Ig / (A · h̄) = 0.0432 / (0.54 × 2.8) = 0.02857 m.',
        'Step 4: Depth from water surface to center of pressure: hcp = 2.8 + 0.02857 = 2.8286 m ≈ 2.83 m (Option A).',
      ],
      finalAnswer: '2.83 (Option A)',
      pageNumber: 578,
    },
  },

  // Item 41
  {
    id: 'hpge-nov2025-q41',
    number: 41,
    pageNumber: 554,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Hydrostatic Forces on Surfaces - Opening Force About Bottom Hinge',
    text: 'Situation 1 (Continued) - If the gate is hinged at the bottom, calculate the force applied at the top vertex required to open the gate\nA. 3.84\nB. 4.59\nC. 3.99\nD. 4.12',
    options: [
      { label: 'A', text: '3.84' },
      { label: 'B', text: '4.59' },
      { label: 'C', text: '3.99' },
      { label: 'D', text: '4.12' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Take moments about the bottom hinge: the opening force P at the vertex acts with a 1.2 m moment arm against the resultant hydrostatic force F acting at distance yF from the hinge.',
      formulas: [
        'y_F = 0.4 - e = 0.4 - 0.02857 = 0.3714',
        '\\sum M_{\\text{hinge}} = 0 \\implies P(1.2) = F(y_F)',
        'P(1.2) = 14.83(0.3714) = 5.508',
        'P = \\frac{5.508}{1.2} = 4.59',
      ],
      steps: [
        'Step 1: The centroid is at distance (1/3)h = 0.4 m above the bottom base hinge.',
        'Step 2: Center of pressure lies below centroid by e = 0.02857 m.',
        'Step 3: Distance from bottom hinge to CP: yF = 0.40 m - 0.02857 m = 0.37143 m.',
        'Step 4: Top vertex is at distance 1.2 m from the bottom hinge.',
        'Step 5: Taking moments about the hinge: P × 1.2 = 14.8327 × 0.37143 => P = 5.509 / 1.2 = 4.59 kN (Option B).',
      ],
      finalAnswer: '4.59 (Option B)',
      pageNumber: 579,
    },
  },

  // Item 42
  {
    id: 'hpge-nov2025-q42',
    number: 42,
    pageNumber: 555,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Dams & Retaining Walls - Upstream Hydrostatic Thrust on Dam',
    text: 'Situation 2 - A concrete gravity dam has a top width of 0.6 m, a base width of 4.2 m, and a total height of 7.0 m. The upstream face is vertical, while the downstream face is inclined. The water depth on the upstream side is 6.0 m.\nThe unit weight of concrete is 23.5 kN/m³, and the coefficient of friction between the dam base and its foundation is 0.60. Consider a 1.0-m length of the dam perpendicular to the cross-section.\n\nDetermine the hydrostatic force acting on the dam.\nA. 176.58 kN\nB. 132.53 kN\nC. 99.32 kN\nD. 117.42 kN',
    options: [
      { label: 'A', text: '176.58 kN' },
      { label: 'B', text: '132.53 kN' },
      { label: 'C', text: '99.32 kN' },
      { label: 'D', text: '117.42 kN' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute horizontal hydrostatic force per unit width acting on the vertical upstream dam face: Fw = 0.5 · γw · h².',
      formulas: [
        'F_w = \\frac{1}{2} \\gamma_w h^2',
        'F_w = \\frac{1}{2}(9.81)(6.0)^2 = \\frac{1}{2}(9.81)(36) = 176.58',
      ],
      steps: [
        'Step 1: Upstream face is vertical with water depth h = 6.0 m.',
        'Step 2: For unit length (b = 1.0 m), horizontal water pressure distribution is triangular with base pressure γw · h = 9.81 × 6.0 = 58.86 kPa.',
        'Step 3: Total horizontal thrust: Fw = 0.5 × γw × h² = 0.5 × 9.81 × 36 = 176.58 kN (Option A).',
      ],
      finalAnswer: '176.58 kN (Option A)',
      pageNumber: 579,
    },
  },

  // Item 43
  {
    id: 'hpge-nov2025-q43',
    number: 43,
    pageNumber: 555,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Dams & Retaining Walls - Overturning Moment About the Toe',
    text: 'Situation 2 (Continued) - Determine the overturning moment.\nA. 353.2 kN - m\nB. 312.8 kN - m\nC. 223.4 kN - m\nD. 271.4 kN - m',
    options: [
      { label: 'A', text: '353.2 kN - m' },
      { label: 'B', text: '312.8 kN - m' },
      { label: 'C', text: '223.4 kN - m' },
      { label: 'D', text: '271.4 kN - m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute overturning moment Mo by multiplying the horizontal hydrostatic force by its centroidal height h/3 above the base.',
      formulas: [
        'y = \\frac{h}{3} = \\frac{6.0}{3} = 2.0',
        'M_o = F_w \\left(\\frac{h}{3}\\right) = 176.58(2.0) = 353.16 \\approx 353.2',
      ],
      steps: [
        'Step 1: The resultant water thrust acts at the centroid of the triangular pressure diagram, which is h/3 from the base.',
        'Step 2: Moment arm above dam foundation: y = 6.0 m / 3 = 2.0 m.',
        'Step 3: Overturning moment about the toe: Mo = Fw × y = 176.58 kN × 2.0 m = 353.16 kN·m ≈ 353.2 kN·m (Option A).',
      ],
      finalAnswer: '353.2 kN - m (Option A)',
      pageNumber: 579,
    },
  },

  // Item 44
  {
    id: 'hpge-nov2025-q44',
    number: 44,
    pageNumber: 555,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Dams & Retaining Walls - Factor of Safety Against Sliding',
    text: 'Situation 2 (Continued) - The factor of safety against sliding.\nA. 2.22\nB. 1.34\nC. 1.78\nD. 1.29',
    options: [
      { label: 'A', text: '2.22' },
      { label: 'B', text: '1.34' },
      { label: 'C', text: '1.78' },
      { label: 'D', text: '1.29' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Calculate dam cross-sectional area and self-weight to find normal resisting force, then evaluate factor of safety FS = μ · W / Fw.',
      formulas: [
        'A = \\frac{1}{2}(0.6 + 4.2)(7.0) = 16.8',
        'W = \\gamma_c A = 23.5(16.8) = 394.8',
        'F_r = \\mu W = 0.60(394.8) = 236.88',
        'FS = \\frac{F_r}{F_w} = \\frac{236.88}{176.58} = 1.3415 \\approx 1.34',
      ],
      steps: [
        'Step 1: Cross-sectional trapezoidal area of dam: A = 0.5 × (top + base) × height = 0.5 × (0.6 + 4.2) × 7.0 = 16.8 m².',
        'Step 2: Total weight per unit length: W = γc × A × 1.0 = 23.5 kN/m³ × 16.8 m² = 394.8 kN.',
        'Step 3: Total frictional resisting force along foundation: Fr = μ · W = 0.60 × 394.8 = 236.88 kN.',
        'Step 4: Factor of safety against sliding: FS = Fr / Fw = 236.88 / 176.58 = 1.3415 ≈ 1.34 (Option B).',
      ],
      finalAnswer: '1.34 (Option B)',
      pageNumber: 580,
    },
  },

  // Item 45
  {
    id: 'hpge-nov2025-q45',
    number: 45,
    pageNumber: 555,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Phase Relationships - Saturated Unit Weight Below Water Table',
    text: 'Situation 3 - A 3.2-m-thick sand layer overlies a very thick clay deposit. The groundwater table is located 1.2 m below the ground surface. The sand above the groundwater table has a degree of saturation of 12%.\nThe soil properties are as follows:\n• Sand: specific gravity, Gs = 2.62; void ratio, e = 0.58\n• Clay: specific gravity, Gs = 2.72; moisture content, MC = 36%\n\nWhat is the unit weight of sand below water table in kN per cubic meter?\nA. 19.32\nB. 20.11\nC. 17.63\nD. 19.87',
    options: [
      { label: 'A', text: '19.32' },
      { label: 'B', text: '20.11' },
      { label: 'C', text: '17.63' },
      { label: 'D', text: '19.87' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute saturated unit weight of sand below the water table using γsat = [(Gs + e) / (1 + e)] · γw.',
      formulas: [
        '\\gamma_{\\text{sat}} = \\frac{G_s + e}{1 + e} \\gamma_w',
        '\\gamma_{\\text{sat}} = \\frac{2.62 + 0.58}{1 + 0.58}(9.81) = \\frac{3.20}{1.58}(9.81) = 19.868 \\approx 19.87',
      ],
      steps: [
        'Step 1: Below the groundwater table, the soil voids are 100% filled with water (S = 1.0).',
        'Step 2: Saturated unit weight formula: γsat = [(Gs + e) / (1 + e)] · γw.',
        'Step 3: Given Gs = 2.62, e = 0.58, γw = 9.81 kN/m³.',
        'Step 4: γsat = [(2.62 + 0.58) / (1 + 0.58)] × 9.81 = (3.20 / 1.58) × 9.81 = 2.0253 × 9.81 = 19.868 kN/m³ ≈ 19.87 kN/m³ (Option D).',
      ],
      finalAnswer: '19.87 (Option D)',
      pageNumber: 580,
    },
  },

  // Item 46
  {
    id: 'hpge-nov2025-q46',
    number: 46,
    pageNumber: 555,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Effective Stress - Total Overburden Stress Across Layered Strata',
    text: 'Situation 3 (Continued) - What is the total stress, in kPa, at a point 6 m below the ground?\nA. 111.75\nB. 112.57\nC. 111.13\nD. 110.98',
    options: [
      { label: 'A', text: '111.75' },
      { label: 'B', text: '112.57' },
      { label: 'C', text: '111.13' },
      { label: 'D', text: '110.98' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Sum the overburden stress across the three soil intervals: 1.2 m partially saturated sand, 2.0 m saturated sand, and 2.8 m saturated clay.',
      formulas: [
        '\\gamma_{\\text{moist, sand}} = \\frac{G_s + S e}{1 + e}\\gamma_w = \\frac{2.62 + 0.12(0.58)}{1 + 0.58}(9.81) = 16.70',
        'e_{\\text{clay}} = G_s w = 2.72(0.36) = 0.9792',
        '\\gamma_{\\text{sat, clay}} = \\frac{2.72 + 0.9792}{1 + 0.9792}(9.81) = 18.34',
        '\\sigma_v = 16.70(1.2) + 19.87(2.0) + 18.34(2.8) = 20.04 + 39.74 + 51.35 = 111.13',
      ],
      steps: [
        'Step 1: Top 1.2 m sand (S = 0.12): γ = [(2.62 + 0.12 × 0.58) / 1.58] × 9.81 = (2.6896 / 1.58) × 9.81 = 16.70 kN/m³.',
        'Step 2: Next 2.0 m sand (3.2 m - 1.2 m): γsat = 19.87 kN/m³.',
        'Step 3: Clay layer (depth 3.2 m to 6.0 m = 2.8 m thick): S = 100%, e = Gs · w = 2.72 × 0.36 = 0.9792.',
        'Step 4: Saturated clay unit weight: γsat = [(2.72 + 0.9792) / (1 + 0.9792)] × 9.81 = (3.6992 / 1.9792) × 9.81 = 18.34 kN/m³.',
        'Step 5: Total vertical stress at depth 6.0 m: σv = 16.70(1.2) + 19.87(2.0) + 18.34(2.8) = 20.04 + 39.74 + 51.35 = 111.13 kPa (Option C).',
      ],
      finalAnswer: '111.13 (Option C)',
      pageNumber: 581,
    },
  },

  // Item 47
  {
    id: 'hpge-nov2025-q47',
    number: 47,
    pageNumber: 555,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Effective Stress - Subsurface Effective Overburden Pressure',
    text: 'Situation 3 (Continued) - What is the effective stress, in kPa, at a point 6 m below the ground?\nA. 64.77\nB. 59.32\nC. 68.90\nD. 64.04',
    options: [
      { label: 'A', text: '64.77' },
      { label: 'B', text: '59.32' },
      { label: 'C', text: '68.90' },
      { label: 'D', text: '64.04' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute pore water pressure at 6.0 m depth (4.8 m below the groundwater table), and subtract from total vertical stress: σ\' = σ - u.',
      formulas: [
        'h_w = 6.0 - 1.2 = 4.8',
        'u = \\gamma_w h_w = 9.81(4.8) = 47.09',
        '\\sigma\' = \\sigma_v - u = 111.13 - 47.09 = 64.04',
      ],
      steps: [
        'Step 1: The water table is at depth 1.2 m, so the point at 6.0 m is hw = 6.0 - 1.2 = 4.8 m below the water table.',
        'Step 2: Hydrostatic pore water pressure: u = γw · hw = 9.81 × 4.8 = 47.088 kPa ≈ 47.09 kPa.',
        'Step 3: Effective stress: σ\' = σv - u = 111.13 kPa - 47.09 kPa = 64.04 kPa (Option D).',
      ],
      finalAnswer: '64.04 (Option D)',
      pageNumber: 581,
    },
  },
];

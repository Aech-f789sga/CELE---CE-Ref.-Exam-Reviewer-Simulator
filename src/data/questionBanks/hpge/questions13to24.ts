import { Question } from '../../../types/exam';

export const HPGE_PART2: Question[] = [
  // --- QUESTION 13 ---
  {
    id: 'hpge-q13',
    number: 13,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Pipe Flow - Darcy-Weisbach Pipeline Friction Loss',
    text: 'Water flows at 20 L/s through 500 m of 150 mm diameter pipeline having a coefficient of friction of 0.02. Calculate the head loss for the length of pipeline.',
    options: [
      { label: 'A', text: '3.35' },
      { label: 'B', text: '5.33' },
      { label: 'C', text: '5.43' },
      { label: 'D', text: '4.35' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Apply Darcy-Weisbach head loss equation: HL = [ 8 · f · L · Q² ] / [ π² · g · D⁵ ].',
      formulas: [
        'Q = 20 L/s = 0.02 m³/s, L = 500 m, D = 0.15 m, f = 0.02',
        'HL = [ 8 · (0.02) · (500) · (0.02)² ] / [ π² · (9.81) · (0.15)⁵ ]',
        'HL = 0.032 / [ 96.824 · (7.59375 · 10⁻⁵) ] = 0.032 / 0.007353 = 4.352 m ≈ 4.35 m',
      ],
      steps: [
        'Step 1: Convert units: Q = 0.02 m³/s, D = 0.15 m.',
        'Step 2: D⁵ = (0.15)⁵ = 7.59375 × 10⁻⁵ m⁵.',
        'Step 3: Numerator = 8 × 0.02 × 500 × (0.02)² = 0.032.',
        'Step 4: Denominator = π² × 9.81 × 7.59375 × 10⁻⁵ = 0.007353.',
        'Step 5: Head loss HL = 4.352 m ≈ 4.35 m.',
      ],
      finalAnswer: '4.35 m (Option D)',
      pageNumber: 85,
    },
  },

  // --- QUESTION 14 ---
  {
    id: 'hpge-q14',
    number: 14,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Open Channel Flow - Trapezoidal Channel Velocity',
    text: 'Water 2.4 meters deep flows at a rate of 12 m³/s in a trapezoidal channel 3 m at the base and 5 m wide at the water surface. Calculate the discharge velocity (m/s).',
    options: [
      { label: 'A', text: '1.25' },
      { label: 'B', text: '1.52' },
      { label: 'C', text: '1.98' },
      { label: 'D', text: '1.89' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute flow cross-sectional area A = 0.5 · (b + T) · y, then mean velocity v = Q / A.',
      formulas: [
        'A = 0.5 · (3 + 5) · (2.4) = 9.6 m²',
        'v = Q / A = 12 / 9.6 = 1.25 m/s',
      ],
      steps: [
        'Step 1: Calculate trapezoid flow area: A = (3 + 5)/2 × 2.4 = 9.6 m².',
        'Step 2: Calculate discharge velocity: v = 12 m³/s / 9.6 m² = 1.25 m/s.',
      ],
      finalAnswer: '1.25 m/s (Option A)',
      pageNumber: 85,
    },
  },

  // --- QUESTION 15 ---
  {
    id: 'hpge-q15',
    number: 15,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Open Channel Flow - Most Efficient Rectangular Section',
    text: 'A rectangular irrigation canal is 5.4 m wide, and 1.2 m deep has a hydraulic slope of 0.001 and a roughness coefficient of 0.013. Evaluate the appropriate depth of the canal in meters using the most efficient section but adhering to the same discharge and slope.',
    options: [
      { label: 'A', text: '2.14' },
      { label: 'B', text: '1.76' },
      { label: 'C', text: '1.85' },
      { label: 'D', text: '1.24' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'For the most efficient rectangular section, b = 2y and R = y/2. Equate flow conveyance A₁ · R₁^(2/3) = A₂ · R₂^(2/3).',
      formulas: [
        'Given section: A₁ = 5.4 · 1.2 = 6.48 m², P₁ = 5.4 + 2(1.2) = 7.8 m, R₁ = 0.8308 m',
        'MES condition: b = 2y => A₂ = 2y², R₂ = y/2',
        'A₁ · R₁^(2/3) = A₂ · R₂^(2/3) => 6.48 · (0.8308)^(2/3) = (2y²) · (y/2)^(2/3) = 1.2599 · y^(8/3)',
        '5.7265 = 1.2599 · y^(8/3) => y = (4.5453)^(3/8) = 1.764 m ≈ 1.76 m',
      ],
      steps: [
        'Step 1: Compute hydraulic parameters of given section: A₁ = 6.48 m², R₁ = 0.8308 m.',
        'Step 2: Section conveyance term A₁ R₁^(2/3) = 6.48 × (0.8308)^(2/3) = 5.7265.',
        'Step 3: For most efficient rectangle: A₂ = 2y² and R₂ = y/2, so A₂ R₂^(2/3) = 2 · (0.5)^(2/3) · y^(8/3) = 1.2599 y^(8/3).',
        'Step 4: Solve for water depth y = (5.7265 / 1.2599)^(3/8) = (4.5453)^0.375 = 1.764 m ≈ 1.76 m.',
      ],
      finalAnswer: '1.76 m (Option B)',
      pageNumber: 86,
    },
  },

  // --- QUESTION 16 ---
  {
    id: 'hpge-q16',
    number: 16,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Open Channel Flow - Manning Trapezoidal Canal Duty',
    text: 'An irrigation canal with trapezoidal cross-section has the following data: Bottom width = 2.50 m, Slope of canal bed = 0.001, Side slope = 1.5H:1V, Coefficient of roughness = 0.025, Depth of water = 0.95 m. The canal will serve clay-loam rice field for which the duty of water per hectare is 3.0 L/s. Using Manning\'s formula, estimate the number of hectares served by the irrigation system canal.',
    options: [
      { label: 'A', text: '1043' },
      { label: 'B', text: '1155' },
      { label: 'C', text: '1034' },
      { label: 'D', text: '1515' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute discharge Q using Manning formula, then service area A_service = Q / duty.',
      formulas: [
        'Top width T = b + 2(1.5d) = 2.5 + 2(1.5 · 0.95) = 5.35 m',
        'Area A = 0.5 · (2.5 + 5.35) · 0.95 = 3.729 m²',
        'Wetted perimeter P = 2.5 + 2 · √[ (1.5 · 0.95)² + 0.95² ] = 2.5 + 2(1.713) = 5.926 m',
        'Hydraulic radius R = 3.729 / 5.926 = 0.629 m',
        'Q = (1/n) · A · R^(2/3) · S^(1/2) = (1/0.025) · (3.729) · (0.629)^(2/3) · (0.001)^(1/2) = 3.463 m³/s = 3,463 L/s',
        'A_service = Q / duty = 3,463 / 3.0 = 1,154.3 hectares ≈ 1,155 hectares',
      ],
      steps: [
        'Step 1: Compute flow area A = 3.729 m² and wetted perimeter P = 5.926 m.',
        'Step 2: Hydraulic radius R = 0.629 m.',
        'Step 3: Discharge by Manning equation Q = 3.463 m³/s = 3,463 L/s.',
        'Step 4: Area of land served = 3,463 L/s / 3.0 (L/s/ha) = 1,155 hectares.',
      ],
      finalAnswer: '1155 hectares (Option B)',
      pageNumber: 87,
    },
  },

  // --- QUESTION 17 ---
  {
    id: 'hpge-q17',
    number: 17,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Hydrodynamics - Jet Trajectory from Inclined Tank Orifice',
    text: 'A water tank has sloping side inclined at 45° with the horizontal. The total depth of water in the tank is 8 m. A water jet issues from an orifice located on the inclined side of the tank under a hydrostatic head of 5 m or that the orifice is located 3 m vertically above the bottom of the tank. The coefficient of velocity is 1.0. Neglect the air resistance on the jet. If the tank bottom is 1.2 m above the ground, determine the horizontal distance (m) on the ground traveled by the jet from the center of the orifice.',
    options: [
      { label: 'A', text: '14.15' },
      { label: 'B', text: '15.14' },
      { label: 'C', text: '13.19' },
      { label: 'D', text: '16.31' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Compute initial jet speed v₀ = √(2gH) = 9.905 m/s directed at 45° upward. Solve trajectory equation at ground y = -4.2 m.',
      formulas: [
        'v₀ = C_v · √(2gH) = 1.0 · √(2 · 9.81 · 5) = 9.905 m/s',
        'y_A = -(3.0 + 1.2) = -4.2 m',
        'Trajectory: y = x · tan θ - [ g · x² ] / [ 2 · v₀² · cos² θ ]',
        '-4.2 = x · tan 45° - [ 9.81 · x² ] / [ 2 · (9.905)² · (cos 45°)² ]',
        '-4.2 = x - 0.1 · x² => 0.1 · x² - x - 4.2 = 0 => x² - 10x - 42 = 0',
        'x = [ 10 + √(100 + 168) ] / 2 = 13.185 m ≈ 13.19 m',
      ],
      steps: [
        'Step 1: Orifice velocity v₀ = √(2 × 9.81 × 5) = 9.905 m/s directed at 45° above horizontal.',
        'Step 2: Total vertical drop from orifice to ground = 3.0 m + 1.2 m = 4.2 m (y = -4.2 m).',
        'Step 3: Trajectory formula: -4.2 = x(1) - [ 9.81 / (2 × 98.1 × 0.5) ] x² = x - 0.1 x².',
        'Step 4: Quadratic equation: x² - 10x - 42 = 0.',
        'Step 5: Solve for positive root: x = (10 + √268)/2 = 13.19 m.',
      ],
      finalAnswer: '13.19 m (Option C)',
      pageNumber: 88,
    },
  },

  // --- QUESTION 18 ---
  {
    id: 'hpge-q18',
    number: 18,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Hydrodynamics - Fluid Jet Striking Moving Flat Plate',
    text: 'A jet of water 20 mm in diameter and having a velocity of 8 m/s strikes against a plate at right angles. Determine the force (N) exerted to the plate if it is moving towards the nozzle at 5 m/s.',
    options: [
      { label: 'A', text: '35.1' },
      { label: 'B', text: '53.1' },
      { label: 'C', text: '34.6' },
      { label: 'D', text: '36.4' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute relative velocity u = v_j - (-v_p) = 8 - (-5) = 13 m/s, then dynamic force F = ρ · A_j · u².',
      formulas: [
        'u = v_j - (-v_p) = 8 - (-5) = 13 m/s',
        'A_j = (π/4) · (0.02)² = 3.1416 · 10⁻⁴ m²',
        'F = ρ · A_j · u² = 1000 · (3.1416 · 10⁻⁴) · (13)² = 53.09 N ≈ 53.1 N',
      ],
      steps: [
        'Step 1: Relative impact velocity u = 8 m/s - (-5 m/s) = 13 m/s.',
        'Step 2: Cross sectional area of jet A_j = π/4 × (0.02)² = 3.1416 × 10⁻⁴ m².',
        'Step 3: Dynamic impact force on moving plate F = 1000 × 3.1416 × 10⁻⁴ × (13)² = 53.09 N ≈ 53.1 N.',
      ],
      finalAnswer: '53.1 N (Option B)',
      pageNumber: 89,
    },
  },

  // --- QUESTION 19 ---
  {
    id: 'hpge-q19',
    number: 19,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Mechanics - Soil Water Content Limit',
    text: 'The water content of soil could\nA. be greater than 100%\nB. be less than 0%\nC. never be greater than 100%\nD. have values only from 0% to 100%',
    options: [
      { label: 'A', text: 'be greater than 100%' },
      { label: 'B', text: 'be less than 0%' },
      { label: 'C', text: 'never be greater than 100%' },
      { label: 'D', text: 'have values only from 0% to 100%' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Moisture content is w = (M_w / M_s) × 100%. For organic soils and sensitive clays, water mass can exceed solid mass.',
      formulas: [
        'w = (M_w / M_s) · 100%',
        'Since M_w can exceed M_s, w can easily exceed 100% (e.g. peat, quick clay up to 300%+).',
      ],
      steps: [
        'Step 1: Moisture content is defined as the mass of water divided by the oven-dry mass of solid soil particles.',
        'Step 2: There is no mathematical ceiling of 100% (unlike degree of saturation S which is capped at 100%).',
        'Step 3: Highly organic soils, volcanic ashes, and soft marine clays frequently have moisture contents well over 100%.',
      ],
      finalAnswer: 'be greater than 100% (Option A)',
      pageNumber: 89,
    },
  },

  // --- QUESTION 20 ---
  {
    id: 'hpge-q20',
    number: 20,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Geotechnical - Standard Penetration Test Relative Density',
    text: 'A granular soil deposit is considered loose if the blow count of a standard penetration test is between:\nA. 10-30\nB. 4-10\nC. 30-50\nD. 0-4',
    options: [
      { label: 'A', text: '10-30' },
      { label: 'B', text: '4-10' },
      { label: 'C', text: '30-50' },
      { label: 'D', text: '0-4' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Terzaghi and Peck Standard Penetration Test (SPT) N-value classification for granular soils.',
      formulas: [
        'N = 0 to 4: Very loose',
        'N = 4 to 10: Loose',
        'N = 10 to 30: Medium dense',
        'N = 30 to 50: Dense',
        'N > 50: Very dense',
      ],
      steps: [
        'Step 1: Standard SPT correlation classifies N = 4 to 10 as loose.',
        'Step 2: N = 0 to 4 is very loose; 10 to 30 is medium dense.',
      ],
      finalAnswer: '4-10 (Option B)',
      pageNumber: 90,
    },
  },

  // --- QUESTION 21 ---
  {
    id: 'hpge-q21',
    number: 21,
    pageNumber: 5,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Mechanics - Soil Consistency & Plasticity Index',
    text: 'The admixture of coarse particles like sand and silt to clay causes\nA. increase in cohesion and strength\nB. increase in moisture retention and capacity\nC. decrease in both liquid limit and plasticity index\nD. decrease in shear strength',
    options: [
      { label: 'A', text: 'increase in cohesion and strength' },
      { label: 'B', text: 'increase in moisture retention and capacity' },
      { label: 'C', text: 'decrease in both liquid limit and plasticity index' },
      { label: 'D', text: 'decrease in shear strength' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Coarse non-plastic particles dilute clay minerals, reducing both Liquid Limit (LL) and Plasticity Index (PI).',
      formulas: [
        'PI = LL - PL',
        'Adding sand/silt decreases specific surface area and water adsorption, lowering both LL and PI.',
      ],
      steps: [
        'Step 1: Fine-grained clay minerals exhibit high plasticity due to active surface charge and adsorbed water.',
        'Step 2: Introducing coarse inert particles reduces the overall clay fraction.',
        'Step 3: This dilutes the soil\'s water holding capability, causing a decrease in both liquid limit and plasticity index.',
      ],
      finalAnswer: 'decrease in both liquid limit and plasticity index (Option C)',
      pageNumber: 91,
    },
  },

  // --- QUESTION 22 ---
  {
    id: 'hpge-q22',
    number: 22,
    pageNumber: 5,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Mechanics - Darcy Permeability Seepage Discharge',
    text: 'The quantity of seepage of water through soils is proportional to\nA. soil texture and particle size\nB. total head loss through the soil only\nC. coefficient of permeability only\nD. both coefficient of permeability and total head loss through the soil',
    options: [
      { label: 'A', text: 'soil texture and particle size' },
      { label: 'B', text: 'total head loss through the soil only' },
      { label: 'C', text: 'coefficient of permeability only' },
      { label: 'D', text: 'both coefficient of permeability and total head loss through the soil' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'According to Darcy\'s law: Q = k · i · A = k · (Δh / L) · A, seepage flow is directly proportional to both k and Δh.',
      formulas: [
        'Q = k · i · A = k · (Δh / L) · A',
      ],
      steps: [
        'Step 1: Darcy\'s Law states flow rate is proportional to hydraulic gradient i and hydraulic conductivity k.',
        'Step 2: Since hydraulic gradient i = Δh / L, Q is proportional to both k and total head loss Δh.',
      ],
      finalAnswer: 'both coefficient of permeability and total head loss through the soil (Option D)',
      pageNumber: 91,
    },
  },

  // --- QUESTION 23 ---
  {
    id: 'hpge-q23',
    number: 23,
    pageNumber: 5,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Mechanics - Mohr-Coulomb Shear Strength',
    text: 'The shear strength of a cohesionless soil is\nA. inversely proportional to the normal stress\nB. proportional to the tangent of the angle of shearing resistance\nC. constant regardless of the applied load\nD. directly proportional to the cohesive strength',
    options: [
      { label: 'A', text: 'inversely proportional to the normal stress' },
      { label: 'B', text: 'proportional to the tangent of the angle of shearing resistance' },
      { label: 'C', text: 'constant regardless of the applied load' },
      { label: 'D', text: 'directly proportional to the cohesive strength' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'For cohesionless soils, c = 0, so Mohr-Coulomb equation simplifies to τ = σ · tan φ.',
      formulas: [
        'τ = c + σ · tan φ',
        'When c = 0 => τ = σ · tan φ',
      ],
      steps: [
        'Step 1: In clean cohesionless soil (sand/gravel), cohesion c = 0.',
        'Step 2: Shear strength is given by τ = σ tan φ.',
        'Step 3: Hence, shear strength is directly proportional to tan φ.',
      ],
      finalAnswer: 'proportional to the tangent of the angle of shearing resistance (Option B)',
      pageNumber: 93,
    },
  },

  // --- QUESTION 24 ---
  {
    id: 'hpge-q24',
    number: 24,
    pageNumber: 5,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Mechanics - Saturated Soil Dry Density',
    text: 'A sample of saturated soil has 20% water content, and the specific gravity of the soil grains is 2.6. Determine the dry density of the soil mass in g/cm³.',
    options: [
      { label: 'A', text: '2.14' },
      { label: 'B', text: '1.46' },
      { label: 'C', text: '1.71' },
      { label: 'D', text: '2.72' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'At full saturation S = 1, e = w · Gs. Dry density ρ_d = (Gs · ρ_w) / (1 + e).',
      formulas: [
        'e = w · Gs / S = (0.20 · 2.6) / 1.0 = 0.52',
        'ρ_d = [ Gs · ρ_w ] / [ 1 + e ] = [ 2.6 · 1.0 ] / [ 1 + 0.52 ] = 1.7105 g/cm³ ≈ 1.71 g/cm³',
      ],
      steps: [
        'Step 1: Calculate void ratio: e = 0.20 × 2.6 = 0.52.',
        'Step 2: Compute dry density: ρ_d = 2.6 / (1 + 0.52) = 1.71 g/cm³.',
      ],
      finalAnswer: '1.71 g/cm³ (Option C)',
      pageNumber: 94,
    },
  },
];

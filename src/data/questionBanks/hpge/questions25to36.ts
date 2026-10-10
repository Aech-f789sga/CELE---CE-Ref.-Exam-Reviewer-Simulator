import { Question } from '../../../types/exam';

export const HPGE_PART3: Question[] = [
  // --- QUESTION 25 ---
  {
    id: 'hpge-q25',
    number: 25,
    pageNumber: 5,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Mechanics - Bulk and Dry Density',
    text: 'A soil has a bulk density of 2.3 g/cm³ and water content of 15%. Determine the dry density (g/cm³) of the sample.',
    options: [
      { label: 'A', text: '4' },
      { label: 'B', text: '1' },
      { label: 'C', text: '2' },
      { label: 'D', text: '3' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Compute dry density using relationship: ρ_d = ρ_m / (1 + w).',
      formulas: [
        'ρ_d = ρ_m / (1 + w)',
        'ρ_d = 2.3 / (1 + 0.15) = 2.3 / 1.15 = 2.0 g/cm³',
      ],
      steps: [
        'Step 1: Given moist bulk density ρ_m = 2.3 g/cm³ and moisture content w = 0.15.',
        'Step 2: Dry density ρ_d = 2.3 / 1.15 = 2.0 g/cm³.',
      ],
      finalAnswer: '2 g/cm³ (Option C)',
      pageNumber: 94,
    },
  },

  // --- QUESTION 26 ---
  {
    id: 'hpge-q26',
    number: 26,
    pageNumber: 6,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Mechanics - Moist Unit Weight from Dry Unit Weight',
    text: 'The dry unit weight of a soil mass is obtained to be 15 kN/m³. If water is added to the soil mass so that the water content is 25%, evaluate the unit weight (kN/m³) of the soil.',
    options: [
      { label: 'A', text: '17.85' },
      { label: 'B', text: '18.75' },
      { label: 'C', text: '15.87' },
      { label: 'D', text: '15.46' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Moist unit weight is given by: γ_m = γ_d · (1 + w).',
      formulas: [
        'γ_m = γ_d · (1 + w)',
        'γ_m = 15 · (1 + 0.25) = 18.75 kN/m³',
      ],
      steps: [
        'Step 1: Given dry unit weight γ_d = 15 kN/m³ and target water content w = 0.25.',
        'Step 2: Compute moist unit weight γ_m = 15 × 1.25 = 18.75 kN/m³.',
      ],
      finalAnswer: '18.75 kN/m³ (Option B)',
      pageNumber: 94,
    },
  },

  // --- QUESTION 27 ---
  {
    id: 'hpge-q27',
    number: 27,
    pageNumber: 6,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Settlement - 1D Consolidation Settlement by Void Ratio',
    text: 'A 7-m thick layer of soft clay has an initial void ratio of 1.2. Under a compressive load applied above it, the void ratio decreased by one-third. Evaluate the reduction in the thickness of the clay layer in meters.',
    options: [
      { label: 'A', text: '3.21' },
      { label: 'B', text: '3.64' },
      { label: 'C', text: '1.56' },
      { label: 'D', text: '1.27' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: '1D settlement equation: ΔH = H₀ · [ Δe / (1 + e₀) ].',
      formulas: [
        'H₀ = 7 m, e₀ = 1.2',
        'Δe = (1/3) · e₀ = 1.2 / 3 = 0.4',
        'ΔH = H₀ · [ Δe / (1 + e₀) ] = 7 · [ 0.4 / (1 + 1.2) ] = 2.8 / 2.2 = 1.273 m ≈ 1.27 m',
      ],
      steps: [
        'Step 1: Compute change in void ratio Δe = 1.2 / 3 = 0.4.',
        'Step 2: Total initial volume term 1 + e₀ = 1 + 1.2 = 2.2.',
        'Step 3: Reduction in thickness ΔH = 7 × (0.4 / 2.2) = 1.273 m ≈ 1.27 m.',
      ],
      finalAnswer: '1.27 m (Option D)',
      pageNumber: 95,
    },
  },

  // --- QUESTION 28 ---
  {
    id: 'hpge-q28',
    number: 28,
    pageNumber: 6,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Settlement - 1D Consolidation Settlement Reduction',
    text: 'A 9-m thick layer of soft clay has an initial void ratio of 1.2. Under a compressive load applied above it, the void ratio decreased by one-fourth. Evaluate the reduction in the thickness of the clay layer in meters.',
    options: [
      { label: 'A', text: '1.21' },
      { label: 'B', text: '1.63' },
      { label: 'C', text: '1.32' },
      { label: 'D', text: '1.23' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute settlement: ΔH = H₀ · [ Δe / (1 + e₀) ].',
      formulas: [
        'H₀ = 9 m, e₀ = 1.2',
        'Δe = (1/4) · e₀ = 1.2 / 4 = 0.3',
        'ΔH = H₀ · [ Δe / (1 + e₀) ] = 9 · [ 0.3 / (1 + 1.2) ] = 2.7 / 2.2 = 1.227 m ≈ 1.23 m',
      ],
      steps: [
        'Step 1: Void ratio decrease Δe = 1.2 / 4 = 0.3.',
        'Step 2: Reduction in thickness ΔH = 9 × (0.3 / 2.2) = 1.227 m ≈ 1.23 m.',
      ],
      finalAnswer: '1.23 m (Option D)',
      pageNumber: 95,
    },
  },

  // --- QUESTION 29 ---
  {
    id: 'hpge-q29',
    number: 29,
    pageNumber: 6,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Settlement - Primary Consolidation of Normally Consolidated Clay',
    text: 'Evaluate the plastic settlement (m) on a layer of plastic clay, 8 meters thick due to an increase of pressure caused by loads above it under the following conditions: Initial intergranular pressure = 200 kPa, Increase in intergranular pressure = 120 kPa, Compression index = 0.315, Void ratio of the clay = 1.132.',
    options: [
      { label: 'A', text: '241' },
      { label: 'B', text: '2.41' },
      { label: 'C', text: '0.241' },
      { label: 'D', text: '24.1' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Apply Terzaghi 1D consolidation settlement formula: ΔH = [ (Cc · H₀) / (1 + e₀) ] · log₁₀ [ (p₀ + Δp) / p₀ ].',
      formulas: [
        'ΔH = [ (Cc · H₀) / (1 + e₀) ] · log₁₀ [ (p₀ + Δp) / p₀ ]',
        'ΔH = [ (0.315 · 8) / (1 + 1.132) ] · log₁₀ [ (200 + 120) / 200 ]',
        'ΔH = [ 2.52 / 2.132 ] · log₁₀(1.6) = 1.182 · (0.20412) = 0.2413 m ≈ 0.241 m',
      ],
      steps: [
        'Step 1: Parameter setup: H₀ = 8 m, Cc = 0.315, e₀ = 1.132, p₀ = 200 kPa, Δp = 120 kPa.',
        'Step 2: Total final pressure p₁ = 200 + 120 = 320 kPa.',
        'Step 3: Stress ratio log term: log₁₀(320 / 200) = log₁₀(1.6) = 0.20412.',
        'Step 4: Layer compressibility factor: (0.315 × 8) / 2.132 = 1.1820.',
        'Step 5: Settlement ΔH = 1.1820 × 0.20412 = 0.2413 m ≈ 0.241 m.',
      ],
      finalAnswer: '0.241 m (Option C)',
      pageNumber: 96,
    },
  },

  // --- QUESTION 30 ---
  {
    id: 'hpge-q30',
    number: 30,
    pageNumber: 6,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Permeability - Equivalent Vertical Permeability in Stratified Soil',
    text: 'A three-layer soil has the corresponding coefficients of permeability and thickness.\nGiven:\nk₁ = 1 × 10⁻⁴ cm/s, h₁ = 3 m\nk₂ = 3.2 × 10⁻² cm/s, h₂ = 4 m\nk₃ = 4.1 × 10⁻⁵ cm/s, h₃ = 6 m\nApproximate the rate of flow (L/hr) in the vertical direction per square meter of layer if the hydraulic gradient is 0.50.',
    options: [
      { label: 'A', text: '1.253' },
      { label: 'B', text: '1.523' },
      { label: 'C', text: '3.123' },
      { label: 'D', text: '1.325' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute equivalent vertical permeability k_v = H / Σ(h_i / k_i), then Q = k_v · i · A.',
      formulas: [
        'k₁ = 1 · 10⁻⁶ m/s, k₂ = 3.2 · 10⁻⁴ m/s, k₃ = 4.1 · 10⁻⁷ m/s',
        'H = 3 + 4 + 6 = 13 m',
        'Σ(h/k) = [ 3 / (1 · 10⁻⁶) ] + [ 4 / (3.2 · 10⁻⁴) ] + [ 6 / (4.1 · 10⁻⁷) ] = 3,000,000 + 12,500 + 14,634,146 = 17,646,646 s',
        'k_v = 13 / 17,646,646 = 7.367 · 10⁻⁷ m/s',
        'Q = k_v · i · A = (7.367 · 10⁻⁷) · (0.50) · (1.0 m²) = 3.6835 · 10⁻⁷ m³/s',
        'Q (L/hr) = 3.6835 · 10⁻⁷ m³/s · 1000 L/m³ · 3600 s/hr = 1.326 L/hr ≈ 1.325 L/hr',
      ],
      steps: [
        'Step 1: Convert permeabilities to m/s: k₁ = 1×10⁻⁶ m/s, k₂ = 3.2×10⁻⁴ m/s, k₃ = 4.1×10⁻⁷ m/s.',
        'Step 2: Sum harmonic resistances Σ(h_i / k_i) = 17,646,646 seconds.',
        'Step 3: Equivalent vertical permeability k_v = 13 m / 17,646,646 s = 7.367 × 10⁻⁷ m/s.',
        'Step 4: Darcy vertical discharge per m²: Q = (7.367 × 10⁻⁷)(0.50)(1) = 3.6835 × 10⁻⁷ m³/s.',
        'Step 5: Convert m³/s to L/hr: 3.6835 × 10⁻⁷ × 3,600,000 = 1.326 L/hr ≈ 1.325 L/hr.',
      ],
      finalAnswer: '1.325 L/hr (Option D)',
      pageNumber: 96,
    },
  },

  // --- QUESTION 31 ---
  {
    id: 'hpge-q31',
    number: 31,
    pageNumber: 7,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Foundation Engineering - 2V:1H Footing Stress Distribution',
    text: 'A 550 kN is transmitted by a column footing onto the surface through a rectangular footing 1.5 m by 2.5 m. Assume the force exerted on the underlying soil formation spreads on 2 vertical to 1 horizontal. Evaluate the pressure (kPa) exerted on the soil 2.7 m below the footing.',
    options: [
      { label: 'A', text: '25.18' },
      { label: 'B', text: '10.09' },
      { label: 'C', text: '20.60' },
      { label: 'D', text: '12.67' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'With 2V:1H slope, dimensions expand by z in each direction: σ_z = Q / [ (B + z)(L + z) ].',
      formulas: [
        'B_z = B + z = 1.5 + 2.7 = 4.2 m',
        'L_z = L + z = 2.5 + 2.7 = 5.2 m',
        'σ_z = Q / [ (B + z)(L + z) ] = 550 / (4.2 · 5.2) = 550 / 21.84 = 25.183 kPa ≈ 25.18 kPa',
      ],
      steps: [
        'Step 1: Spread slope 2V:1H expands footing dimensions outward by z/2 on each side, yielding total dimension (B + z) by (L + z).',
        'Step 2: At depth z = 2.7 m: B_new = 1.5 + 2.7 = 4.2 m, L_new = 2.5 + 2.7 = 5.2 m.',
        'Step 3: Dispersed bearing area = 4.2 × 5.2 = 21.84 m².',
        'Step 4: Vertical stress σ_z = 550 kN / 21.84 m² = 25.18 kPa.',
      ],
      finalAnswer: '25.18 kPa (Option A)',
      pageNumber: 97,
    },
  },

  // --- QUESTION 32 ---
  {
    id: 'hpge-q32',
    number: 32,
    pageNumber: 7,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Mechanics - Westergaard Point Load Vertical Stress',
    text: 'Evaluate the vertical stress (kPa) using Westergaard\'s theory at a point 6 m below and 3 m horizontally from the line of the 1500 kN load.',
    options: [
      { label: 'A', text: '8.6' },
      { label: 'B', text: '7.2' },
      { label: 'C', text: '2.0' },
      { label: 'D', text: '2.7' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Westergaard vertical stress: σ_z = (0.318 Q / z²) · N, where N = 1 / [ 1 + 2(r/z)² ]^(1.5).',
      formulas: [
        'r/z = 3 / 6 = 0.5',
        'N = 1 / [ 1 + 2(0.5)² ]^(1.5) = 1 / [ 1 + 0.5 ]^(1.5) = 1 / (1.5)^(1.5) = 0.5443',
        'σ_z = [ 0.318 · 1500 / (6)² ] · 0.5443 = [ 477 / 36 ] · 0.5443 = 13.25 · 0.5443 = 7.212 kPa ≈ 7.2 kPa',
      ],
      steps: [
        'Step 1: Radial distance ratio r/z = 3 / 6 = 0.5.',
        'Step 2: Westergaard influence factor N = 1 / (1.5)^1.5 = 1 / 1.8371 = 0.5443.',
        'Step 3: Calculate base stress term = 0.318 × 1500 / 36 = 13.25 kPa.',
        'Step 4: Vertical stress σ_z = 13.25 × 0.5443 = 7.21 kPa ≈ 7.2 kPa.',
      ],
      finalAnswer: '7.2 kPa (Option B)',
      pageNumber: 97,
    },
  },

  // --- QUESTION 33 ---
  {
    id: 'hpge-q33',
    number: 33,
    pageNumber: 7,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Foundation Engineering - Terzaghi Square Footing Bearing Capacity',
    text: 'A column is to be supported by a square footing, 2.0 m on a side on a founding depth of 1.0 m into cohesionless soil deposit. The unit weight of the soil is 16 kN/m³ and the angle of friction is 25°. Using Terzaghi\'s formula for general shear failure, evaluate the concentric load (kN) that the footing can safely support using a factor of safety of 3.0 against bearing capacity failure.\nGiven: Nc = 25.10, Nq = 12.70, Nγ = 8.34',
    options: [
      { label: 'A', text: '159.27' },
      { label: 'B', text: '185.27' },
      { label: 'C', text: '127.59' },
      { label: 'D', text: '413.28' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'For square footing on sand (c = 0): q_u = q · Nq + 0.4 · γ · B · Nγ. Then P_allow = (q_u / FS) · B².',
      formulas: [
        'q = γ · D_f = 16 · 1.0 = 16 kPa',
        'q_u = 1.3 c Nc + q Nq + 0.4 γ B Nγ = 0 + 16(12.70) + 0.4(16)(2.0)(8.34)',
        'q_u = 203.20 + 106.752 = 309.952 kPa',
        'q_allow = q_u / FS = 309.952 / 3.0 = 103.317 kPa',
        'P_allow = q_allow · B² = 103.317 · (2.0)² = 413.27 kN ≈ 413.28 kN',
      ],
      steps: [
        'Step 1: Surcharge at foundation depth: q = 16 kN/m³ × 1.0 m = 16 kPa.',
        'Step 2: Ultimate bearing capacity q_u = 16(12.70) + 0.4(16)(2)(8.34) = 203.2 + 106.75 = 309.95 kPa.',
        'Step 3: Allowable bearing capacity q_allow = 309.95 / 3.0 = 103.32 kPa.',
        'Step 4: Allowable column load P = 103.32 kPa × (2 m × 2 m) = 413.28 kN.',
      ],
      finalAnswer: '413.28 kN (Option D)',
      pageNumber: 98,
    },
  },

  // --- QUESTION 34 (Situation 1 Part 1) ---
  {
    id: 'hpge-q34',
    number: 34,
    pageNumber: 7,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Mechanics - Boussinesq Point Load Stress at z = 3 m',
    text: 'Situation 1 - In accordance with Boussinesq\'s theory, the vertical stress induced by a point load of magnitude Q (kN) on the surface of a semi-infinite soil mass can be estimated by the expression: p = (0.477 Q / z²) · N, where N = 1 / [ 1 + (r/z)² ]^(2.5). If Q = 2.5 MN:\n\nEvaluate the stress in the soil caused by a point load at a depth of 3 m directly below the footing, in kPa.',
    options: [
      { label: 'A', text: '132.5' },
      { label: 'B', text: '123.5' },
      { label: 'C', text: '153.2' },
      { label: 'D', text: '152.3' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Directly below load (r = 0), N = 1.0. Compute p = 0.477 · Q / z².',
      formulas: [
        'Q = 2.5 MN = 2,500 kN, z = 3 m, r = 0 => N = 1.0',
        'q = 0.477 · (2500) / (3)² = 1,192.5 / 9 = 132.5 kPa',
      ],
      steps: [
        'Step 1: Point load Q = 2,500 kN.',
        'Step 2: Directly under load, radial offset r = 0, so N = 1.0.',
        'Step 3: Vertical stress q = 0.477(2500) / 3² = 1192.5 / 9 = 132.5 kPa.',
      ],
      finalAnswer: '132.5 kPa (Option A)',
      pageNumber: 99,
    },
  },

  // --- QUESTION 35 (Situation 1 Part 2) ---
  {
    id: 'hpge-q35',
    number: 35,
    pageNumber: 7,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Mechanics - Boussinesq Point Load Stress at z = 6 m',
    text: 'Situation 1 (Cont.) - If Q = 2.5 MN:\nEvaluate the stress in the soil caused by a point load at a depth of 6 m directly below the footing, in kPa.',
    options: [
      { label: 'A', text: '53.2' },
      { label: 'B', text: '31.5' },
      { label: 'C', text: '33.1' },
      { label: 'D', text: '21.3' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Directly below load (r = 0) at z = 6 m: p = 0.477 · Q / z².',
      formulas: [
        'Q = 2,500 kN, z = 6 m, r = 0 => N = 1.0',
        'q = 0.477 · (2500) / (6)² = 1,192.5 / 36 = 33.125 kPa ≈ 33.1 kPa',
      ],
      steps: [
        'Step 1: Depth z = 6 m, r = 0.',
        'Step 2: Vertical stress q = 0.477(2500) / 36 = 33.125 kPa ≈ 33.1 kPa.',
      ],
      finalAnswer: '33.1 kPa (Option C)',
      pageNumber: 99,
    },
  },

  // --- QUESTION 36 (Situation 1 Part 3) ---
  {
    id: 'hpge-q36',
    number: 36,
    pageNumber: 8,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Mechanics - Boussinesq Point Load Stress at z = 6 m, r = 3 m',
    text: 'Situation 1 (Cont.) - If Q = 2.5 MN:\nEvaluate the stress at a depth of 6 m and a horizontal distance of 3 m from the point load, in kPa.',
    options: [
      { label: 'A', text: '32.7' },
      { label: 'B', text: '21.9' },
      { label: 'C', text: '29.1' },
      { label: 'D', text: '19.0' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute Boussinesq influence factor N for r/z = 3/6 = 0.5: N = 1 / [1 + (0.5)²]^2.5 = 0.5724.',
      formulas: [
        'r = 3 m, z = 6 m => r/z = 0.5',
        'N = 1 / [ 1 + (0.5)² ]^(2.5) = 1 / (1.25)^(2.5) = 1 / 1.7469 = 0.5724',
        'q = [ 0.477 · (2500) / 6² ] · 0.5724 = 33.125 · 0.5724 = 18.96 kPa ≈ 19.0 kPa',
      ],
      steps: [
        'Step 1: Radial ratio r/z = 3/6 = 0.5.',
        'Step 2: Influence factor N = (1 + 0.25)^(-2.5) = (1.25)^(-2.5) = 0.57243.',
        'Step 3: Stress q = 33.125 kPa × 0.57243 = 18.96 kPa ≈ 19.0 kPa.',
      ],
      finalAnswer: '19.0 kPa (Option D)',
      pageNumber: 99,
    },
  },
];

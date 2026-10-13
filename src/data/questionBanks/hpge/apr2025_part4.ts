import { Question } from '../../../types/exam';

export const HPGE_APR2025_PART4: Question[] = [
  // Item 37
  {
    id: 'hpge-apr2025-q37',
    number: 37,
    pageNumber: 393,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Pipe Flow & Hydraulics - Pipes in Series Flow Velocity in Larger Pipe',
    text: 'Situation 4:\nA water-supply pipeline consists of a 3,660-m-long, 450-mm-diameter pipe connected in series to a 5,500-m-long, 300-mm-diameter pipe. The pipeline is connected to the base of a large reservoir. The difference in elevation between the reservoir water surface and the centerline of the 300-mm pipe at the downstream end is 45.7 m.\n\nNeglect the velocity head in the reservoir and all minor head losses, including the entrance loss. Using a Darcy friction factor of 0.02 for both pipes.\n\nObtain the velocity (m/s) if the water in the bigger pipeline.',
    options: [
      { label: 'A', text: '0.456' },
      { label: 'B', text: '0.212' },
      { label: 'C', text: '0.665' },
      { label: 'D', text: '0.945' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Express pipe head losses and exit velocity head in terms of discharge Q, solve the total available head equation H = h_f1 + h_f2 + (v₂² / 2g), and then evaluate velocity in the 450-mm pipe.',
      formulas: [
        'h_{f1} = \\frac{f L_1 v_1^2}{D_1 2g} = \\frac{8 f L_1 Q^2}{\\pi^2 g D_1^5}',
        'h_{f2} = \\frac{f L_2 v_2^2}{D_2 2g} = \\frac{8 f L_2 Q^2}{\\pi^2 g D_2^5}',
        '\\frac{v_2^2}{2g} = \\frac{8 Q^2}{\\pi^2 g D_2^4}',
        'h_{f1} + h_{f2} + \\frac{v_2^2}{2g} = H',
        '\\frac{0.02(3660)}{0.45} \\frac{8Q^2}{\\pi^2(9.81)(0.45)^4} + \\frac{0.02(5500)}{0.30} \\frac{8Q^2}{\\pi^2(9.81)(0.30)^4} + \\frac{8Q^2}{\\pi^2(9.81)(0.30)^4} = 45.7',
        'Q = 0.1058',
        'v_1 = \\frac{Q}{A_1} = \\frac{0.1058}{\\frac{\\pi}{4}(0.45)^2} = 0.6653 \\approx 0.665',
      ],
      steps: [
        'Step 1: Pipe 1 dimensions: L₁ = 3660 m, D₁ = 0.45 m, f = 0.02. Pipe 2 dimensions: L₂ = 5500 m, D₂ = 0.30 m, f = 0.02.',
        'Step 2: Total energy head from reservoir surface to downstream exit: H = h_f1 + h_f2 + (v₂² / 2g) = 45.7 m.',
        'Step 3: In terms of discharge Q: Darcy head loss is h_f = (8 f L Q²) / (π² g D⁵).',
        'Step 4: Sum head losses: [716.4 Q²] + [3366.1 Q²] + [10.2 Q²] = 45.7 => 4092.7 Q² = 45.7 => Q = 0.1058 m³/s.',
        'Step 5: Compute velocity in the 450 mm pipe: v₁ = Q / A₁ = 0.1058 / [(π/4)(0.45)²] = 0.665 m/s (Option C).',
      ],
      finalAnswer: '0.665 (Option C)',
      pageNumber: 415,
    },
  },

  // Item 38
  {
    id: 'hpge-apr2025-q38',
    number: 38,
    pageNumber: 393,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Pipe Flow & Hydraulics - Pipes in Series Velocity in Smaller Pipe',
    text: 'Situation 4 (Continued):\nA water-supply pipeline consists of a 3,660-m-long, 450-mm-diameter pipe connected in series to a 5,500-m-long, 300-mm-diameter pipe. The pipeline is connected to the base of a large reservoir. The difference in elevation between the reservoir water surface and the centerline of the 300-mm pipe at the downstream end is 45.7 m.\n\nNeglect the velocity head in the reservoir and all minor head losses, including the entrance loss. Using a Darcy friction factor of 0.02 for both pipes.\n\nObtain the velocity (m/s) of the water in the smaller pipeline.',
    options: [
      { label: 'A', text: '0.9' },
      { label: 'B', text: '1.8' },
      { label: 'C', text: '2.1' },
      { label: 'D', text: '1.5' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute velocity in the 300 mm pipe using continuity equation v₂ = Q / A₂.',
      formulas: [
        'A_2 = \\frac{\\pi}{4}(0.30)^2 = 0.07069',
        'v_2 = \\frac{Q}{A_2} = \\frac{0.1058}{\\frac{\\pi}{4}(0.30)^2} = 1.4967 \\approx 1.5',
      ],
      steps: [
        'Step 1: From the pipeline series system analysis in Item 37, the discharge is Q = 0.1058 m³/s.',
        'Step 2: Cross-sectional area of the smaller pipe: A₂ = (π/4)(0.30)² = 0.070686 m².',
        'Step 3: Flow velocity in the smaller pipe: v₂ = 0.1058 / 0.070686 = 1.497 m/s ≈ 1.5 m/s (Option D).',
      ],
      finalAnswer: '1.5 (Option D)',
      pageNumber: 416,
    },
  },

  // Item 39
  {
    id: 'hpge-apr2025-q39',
    number: 39,
    pageNumber: 393,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Pipe Flow & Hydraulics - Pipeline Discharge',
    text: 'Situation 4 (Continued):\nA water-supply pipeline consists of a 3,660-m-long, 450-mm-diameter pipe connected in series to a 5,500-m-long, 300-mm-diameter pipe. The pipeline is connected to the base of a large reservoir. The difference in elevation between the reservoir water surface and the centerline of the 300-mm pipe at the downstream end is 45.7 m.\n\nNeglect the velocity head in the reservoir and all minor head losses, including the entrance loss. Using a Darcy friction factor of 0.02 for both pipes.\n\nEvaluate the rate of flow (m³/s).',
    options: [
      { label: 'A', text: '0.116' },
      { label: 'B', text: '0.281' },
      { label: 'C', text: '0.106' },
      { label: 'D', text: '0.144' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The total discharge Q through the pipeline series system obtained from the energy equation is 0.106 m³/s.',
      formulas: [
        'Q = 0.1058 \\approx 0.106',
      ],
      steps: [
        'Step 1: Equating total available head H = 45.7 m to the total head loss h_f1 + h_f2 + v₂²/(2g) gives Q = 0.1058 m³/s.',
        'Step 2: Rounding to three decimal places: Q = 0.106 m³/s (Option C).',
      ],
      finalAnswer: '0.106 (Option C)',
      pageNumber: 416,
    },
  },

  // Item 40
  {
    id: 'hpge-apr2025-q40',
    number: 40,
    pageNumber: 393,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Phase Relationships & Void Ratio',
    text: 'Situation 5:\nA soil mass has a bulk specific gravity of 1.81. The specific gravity of the solids is 2.78 and the moisture content is 28%.\n\nDetermine the void ratio.',
    options: [
      { label: 'A', text: '0.67' },
      { label: 'B', text: '0.77' },
      { label: 'C', text: '0.87' },
      { label: 'D', text: '0.97' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute void ratio e using the bulk specific gravity relation G_m = [G_s (1 + w)] / (1 + e).',
      formulas: [
        'G_m = \\frac{G_s(1 + w)}{1 + e}',
        '1.81 = \\frac{2.78(1 + 0.28)}{1 + e}',
        '1 + e = \\frac{2.78(1.28)}{1.81} = \\frac{3.5584}{1.81} = 1.966',
        'e = 1.966 - 1 = 0.966 \\approx 0.97',
      ],
      steps: [
        'Step 1: Given values: bulk specific gravity G_m = 1.81, solid specific gravity G_s = 2.78, moisture content w = 28% = 0.28.',
        'Step 2: Total unit weight γ_m = G_m · γ_w = 1.81(9.81) = 17.756 kN/m³.',
        'Step 3: Relationship between unit weight and void ratio: γ_m = [G_s(1 + w) / (1 + e)] · γ_w => G_m = [G_s(1 + w)] / (1 + e).',
        'Step 4: Substitute numbers: 1.81 = [2.78(1.28)] / (1 + e) => 1 + e = 3.5584 / 1.81 = 1.966.',
        'Step 5: Void ratio: e = 0.966 ≈ 0.97 (Option D).',
      ],
      finalAnswer: '0.97 (Option D)',
      pageNumber: 417,
    },
  },

  // Item 41
  {
    id: 'hpge-apr2025-q41',
    number: 41,
    pageNumber: 393,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Phase Relationships & Porosity',
    text: 'Situation 5 (Continued):\nA soil mass has a bulk specific gravity of 1.81. The specific gravity of the solids is 2.78 and the moisture content is 28%.\n\nDetermine the porosity.',
    options: [
      { label: 'A', text: '0.69' },
      { label: 'B', text: '0.39' },
      { label: 'C', text: '0.49' },
      { label: 'D', text: '0.59' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Compute porosity n directly from void ratio e using n = e / (1 + e).',
      formulas: [
        'n = \\frac{e}{1 + e}',
        'n = \\frac{0.966}{1 + 0.966} = \\frac{0.966}{1.966} = 0.4913 \\approx 0.49',
      ],
      steps: [
        'Step 1: Using the void ratio e = 0.966 determined in Item 40.',
        'Step 2: Formula for porosity: n = e / (1 + e).',
        'Step 3: Compute n = 0.966 / (1 + 0.966) = 0.966 / 1.966 = 0.4913 ≈ 0.49 (Option C).',
      ],
      finalAnswer: '0.49 (Option C)',
      pageNumber: 417,
    },
  },

  // Item 42
  {
    id: 'hpge-apr2025-q42',
    number: 42,
    pageNumber: 393,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Phase Relationships & Degree of Saturation',
    text: 'Situation 5 (Continued):\nA soil mass has a bulk specific gravity of 1.81. The specific gravity of the solids is 2.78 and the moisture content is 28%.\n\nDetermine the degree of saturation.',
    options: [
      { label: 'A', text: '0.80' },
      { label: 'B', text: '0.70' },
      { label: 'C', text: '0.60' },
      { label: 'D', text: '0.90' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute the degree of saturation using the fundamental phase identity G_s · w = S · e.',
      formulas: [
        'G_s w = S e',
        '2.78(0.28) = S(0.966)',
        '0.7784 = 0.966 S',
        'S = \\frac{0.7784}{0.966} = 0.8058 \\approx 0.80',
      ],
      steps: [
        'Step 1: Apply the fundamental soil phase identity: G_s · w = S · e.',
        'Step 2: Substitute G_s = 2.78, w = 0.28, and e = 0.966.',
        'Step 3: S = (2.78 × 0.28) / 0.966 = 0.7784 / 0.966 = 0.8058 ≈ 0.80 (80%) (Option A).',
      ],
      finalAnswer: '0.80 (Option A)',
      pageNumber: 417,
    },
  },

  // Item 43
  {
    id: 'hpge-apr2025-q43',
    number: 43,
    pageNumber: 394,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Earthworks & Soil Compaction - Borrow Pit Dry Unit Weight',
    text: 'Situation 6:\nAn embankment for a highway 30 m wide and 1.5 m compacted thickness is to be constructed from sandy soil trucked from a borrow pit. The water content of the sandy soil in the borrow pit is 15% and its void ratio is 0.69. The specification required the embankment compacted to a dry unit weight of 18 kN/m³. Assume G_s = 2.7.\n\nDetermine for 1 km length of embankment the following:\n\nThe dry unit weight (kN/m³) of sandy soil from the borrow pit required to construct the embankment.',
    options: [
      { label: 'A', text: '9.95' },
      { label: 'B', text: '19.19' },
      { label: 'C', text: '17.67' },
      { label: 'D', text: '15.67' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute the dry unit weight of the in-situ borrow pit soil using the standard formula γ_d = [G_s / (1 + e)] · γ_w.',
      formulas: [
        '\\gamma_d = \\frac{G_s}{1 + e}\\gamma_w',
        '\\gamma_d = \\frac{2.70}{1 + 0.69}(9.81) = \\frac{2.70}{1.69}(9.81) = 15.673',
      ],
      steps: [
        'Step 1: Borrow pit soil properties: G_s = 2.70, e = 0.69, w = 15% = 0.15.',
        'Step 2: Dry unit weight formula: γ_d = [G_s / (1 + e)] · γ_w.',
        'Step 3: γ_d = [2.70 / (1 + 0.69)] × 9.81 = (2.70 / 1.69) × 9.81 = 15.673 kN/m³ ≈ 15.67 kN/m³ (Option D).',
      ],
      finalAnswer: '15.67 (Option D)',
      pageNumber: 417,
    },
  },

  // Item 44
  {
    id: 'hpge-apr2025-q44',
    number: 44,
    pageNumber: 394,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Earthworks & Soil Compaction - Truckload Volume of Borrow Soil',
    text: 'Situation 6 (Continued):\nAn embankment for a highway 30 m wide and 1.5 m compacted thickness is to be constructed from sandy soil trucked from a borrow pit. The water content of the sandy soil in the borrow pit is 15% and its void ratio is 0.69. The specification required the embankment compacted to a dry unit weight of 18 kN/m³. Assume G_s = 2.7.\n\nDetermine for 1 km length of embankment the following:\n\nThe number of 10 m³ truckloads of sandy soil required for the construction.',
    options: [
      { label: 'A', text: '5,030' },
      { label: 'B', text: '5,240' },
      { label: 'C', text: '5,170' },
      { label: 'D', text: '4,500' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Equate the total dry weight of soil in the compacted embankment to the dry weight extracted from the borrow pit to determine borrow pit volume and corresponding 10 m³ truckloads.',
      formulas: [
        'V_e = 30(1.5)(1000) = 45,000',
        'W_{d1} = W_{d2} \\implies \\gamma_{d1} V_1 = \\gamma_{d2} V_e',
        '15.673 V_1 = 18(45,000) = 810,000',
        'V_1 = \\frac{810,000}{15.673} = 51,681.2',
        'N = \\frac{V_1}{V_t} = \\frac{51,681.2}{10} = 5168.12 \\approx 5170',
      ],
      steps: [
        'Step 1: Compacted embankment volume for 1 km (1000 m): V_e = 30 m × 1.5 m × 1000 m = 45,000 m³.',
        'Step 2: Required compacted dry unit weight: γ_de = 18 kN/m³.',
        'Step 3: Total dry weight required: W_d = γ_de · V_e = 18 × 45,000 = 810,000 kN.',
        'Step 4: Since dry weight of solid particles is conserved: W_d_pit = W_d => γ_d_pit · V_pit = 810,000 kN.',
        'Step 5: Borrow pit volume: V_pit = 810,000 / 15.673 = 51,681.2 m³.',
        'Step 6: Number of 10 m³ truckloads: N = 51,681.2 / 10 = 5168.12 ≈ 5,170 truckloads (Option C).',
      ],
      finalAnswer: '5,170 (Option C)',
      pageNumber: 418,
    },
  },

  // Item 45
  {
    id: 'hpge-apr2025-q45',
    number: 45,
    pageNumber: 394,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Phase Relationships & Degree of Saturation in Situ',
    text: 'Situation 6 (Continued):\nAn embankment for a highway 30 m wide and 1.5 m compacted thickness is to be constructed from sandy soil trucked from a borrow pit. The water content of the sandy soil in the borrow pit is 15% and its void ratio is 0.69. The specification required the embankment compacted to a dry unit weight of 18 kN/m³. Assume G_s = 2.7.\n\nDetermine for 1 km length of embankment the following:\n\nThe degree of saturation of the sandy soil in situ.',
    options: [
      { label: 'A', text: '86.9%' },
      { label: 'B', text: '69.6%' },
      { label: 'C', text: '59.1%' },
      { label: 'D', text: '58.7%' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute the in-situ degree of saturation of the borrow pit soil using the phase relationship G_s · w = S · e.',
      formulas: [
        'G_s w = S e',
        '2.7(0.15) = S(0.69)',
        '0.405 = 0.69 S',
        'S = \\frac{0.405}{0.69} = 0.58696',
        'S = 58.7\\%',
      ],
      steps: [
        'Step 1: Identify borrow pit soil parameters: G_s = 2.70, w = 15% = 0.15, e = 0.69.',
        'Step 2: Apply the fundamental relation: G_s · w = S · e.',
        'Step 3: Solve for S: S = (2.70 × 0.15) / 0.69 = 0.405 / 0.69 = 0.58696 = 58.7% (Option D).',
      ],
      finalAnswer: '58.7% (Option D)',
      pageNumber: 418,
    },
  },
];

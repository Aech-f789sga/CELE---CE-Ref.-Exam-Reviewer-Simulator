import { Question } from '../../../types/exam';

export const MSTC_NOV2015_PART6: Question[] = [
  // Item 76
  {
    id: 'mstc-nov2015-q76',
    number: 76,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Error Propagation',
    text: 'A distance of 1000 feet is to be taped with an error of not more than 0.10 feet. Determine how accurately each 100-ft length must be measured to ensure the error will not exceed the permissible limit.',
    options: [
      { label: 'A', text: '±0.093 ft' },
      { label: 'B', text: '±0.032 ft' },
      { label: 'C', text: '±0.051 ft' },
      { label: 'D', text: '±0.075 ft' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Ten 100-ft tape lengths; the total error is √N times the per-length error.',
      formulas: [
        'N = \\frac{1000}{100} = 10',
        '0.10 = \\sqrt{10}\\,e \\Rightarrow e = 0.0316',
      ],
      steps: [
        'Step 1: There are 10 tape lengths.',
        'Step 2: $0.10 = \\sqrt{10}\\,e$.',
        'Step 3: $e = 0.0316 \\approx 0.032$ ft.',
      ],
      finalAnswer: '±0.032 ft (Option B)',
    },
  },

  // Item 77
  {
    id: 'mstc-nov2015-q77',
    number: 77,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Probable Error',
    text: 'A line was measured three times and yields the following results: 826.52 m, 826.68 m, and 826.11 m. What is the probable error of the mean?',
    options: [
      { label: 'A', text: '0.254' },
      { label: 'B', text: '0.114' },
      { label: 'C', text: '0.311' },
      { label: 'D', text: '0.186' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Use the probable error of the mean formula for three observations.',
      formulas: [
        '\\bar{x} = \\frac{826.52 + 826.68 + 826.11}{3} = 826.437',
        'PE_m = \\pm 0.6745\\sqrt{\\frac{\\Sigma v^2}{n(n-1)}}',
        'PE_m = \\pm 0.114\\ \\text{m}',
      ],
      steps: [
        'Step 1: Mean $= 826.437$ m.',
        'Step 2: Residuals 0.083, 0.243, −0.327; $\\Sigma v^2 = 0.1729$.',
        'Step 3: $PE_m = 0.6745\\sqrt{0.1729/(3 \\times 2)} = 0.114$ m.',
      ],
      finalAnswer: '±0.114 m (Option B)',
    },
  },

  // Item 78
  {
    id: 'mstc-nov2015-q78',
    number: 78,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Level Bubble',
    text: 'A sight is taken with an engineer\'s level at rod held 100 m away and an initial reading of 1.83 m was recorded. The bubble is then levelled through five spaces on the level tube and the new rod reading is 1.91 m. What is the sensitivity of the bubble tube in seconds of arc?',
    options: [
      { label: 'A', text: '33"' },
      { label: 'B', text: '28"' },
      { label: 'C', text: '38"' },
      { label: 'D', text: '45"' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The angle is ΔH/(spaces × D), converted to seconds.',
      formulas: [
        '\\Delta H = 1.91 - 1.83 = 0.08\\ \\text{m}',
        '\\theta = \\frac{0.08}{5(100)} = 0.00016\\ \\text{rad}',
        '\\theta = 0.00016 \\times 206\\,265 = 33"',
      ],
      steps: [
        'Step 1: The rod change is 0.08 m over 100 m through 5 bubble spaces.',
        'Step 2: $\\theta = 0.08/(5 \\times 100) = 0.00016$ rad.',
        'Step 3: $0.00016 \\times 206\\,265 = 33$ seconds of arc.',
      ],
      finalAnswer: '33" (Option A)',
    },
  },

  // Item 79
  {
    id: 'mstc-nov2015-q79',
    number: 79,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Level Bubble',
    text: 'A sight is taken with an engineer\'s level at rod held 100 m away and an initial reading of 1.83 m was recorded. The bubble is then levelled through six spaces on the level tube and the new rod reading is 1.91 m. What is the sensitivity of the bubble tube in seconds of arc?',
    options: [
      { label: 'A', text: '28.5"' },
      { label: 'B', text: '26.5"' },
      { label: 'C', text: '25.5"' },
      { label: 'D', text: '27.5"' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Same setup as the previous item but through six spaces.',
      formulas: [
        '\\theta = \\frac{0.08}{6(100)} = 0.0001333\\ \\text{rad}',
        '\\theta = 0.0001333 \\times 206\\,265 = 27.5"',
      ],
      steps: [
        'Step 1: The rod change is 0.08 m over 100 m through 6 spaces.',
        'Step 2: $\\theta = 0.08/(6 \\times 100) = 0.0001333$ rad.',
        'Step 3: $\\theta = 27.5$ seconds of arc.',
      ],
      finalAnswer: '27.5" (Option D)',
    },
  },

  // Item 80
  {
    id: 'mstc-nov2015-q80',
    number: 80,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Tape Correction',
    text: 'A distance measured with a 50 m steel tape is recorded as 685.24 m. The tape is known to be 0.014 m too long. What is the correct length of the line in meter?',
    options: [
      { label: 'A', text: '685.048' },
      { label: 'B', text: '686.124' },
      { label: 'C', text: '685.432' },
      { label: 'D', text: '685.924' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'A tape that is too long makes the measured distance too short; add the correction per tape length.',
      formulas: [
        'TD = MD + e_r\\frac{MD}{L}',
        'TD = 685.24 + 0.014\\left(\\frac{685.24}{50}\\right) = 685.432',
      ],
      steps: [
        'Step 1: The tape error per length is +0.014 m.',
        'Step 2: Number of tape lengths $= 685.24/50 = 13.705$.',
        'Step 3: $TD = 685.24 + 0.014(13.705) = 685.432$ m.',
      ],
      finalAnswer: '685.432 m (Option C)',
    },
  },

  // Item 81
  {
    id: 'mstc-nov2015-q81',
    number: 81,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Sag Correction',
    text: 'A 100-m tape weighing 5.08 kg was used to measure a line. It was supported at the end points, midpoint, and a quarter points and the tension applied is 60 N. If the total measured distance is 2432.65 m, what is the correct distance of the line?',
    options: [
      { label: 'A', text: '2,437.02 m' },
      { label: 'B', text: '2,428.28 m' },
      { label: 'C', text: '2,430.36 m' },
      { label: 'D', text: '2,431.36 m' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Four supported spans of 25 m; sum the sag correction per span and per tape length.',
      formulas: [
        'W = \\frac{5.08(9.81)}{100} = 0.498\\ \\text{N/m}',
        'e_1 = -\\frac{W^2 L_s^3}{24P^2} = -0.04488\\ \\text{m per span}',
        'e_T = 4e_1 = -0.17953\\ \\text{m per tape length}',
        'TD = 2432.65 - 0.17953(24.326) = 2428.28\\ \\text{m}',
      ],
      steps: [
        'Step 1: Weight per unit length $W = 0.498$ N/m; four spans of 25 m.',
        'Step 2: Sag per span $= 0.04488$ m, so per tape length $= 0.17953$ m.',
        'Step 3: Number of tape lengths $= 24.326$.',
        'Step 4: $TD = 2432.65 - 0.17953(24.326) = 2428.28$ m.',
      ],
      finalAnswer: '2,428.28 m (Option B)',
    },
  },

  // Item 82
  {
    id: 'mstc-nov2015-q82',
    number: 82,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Highway Curve Sight Distance',
    text: 'A highway curve has a radius of 80 m and a length of 90 m. If the required sight distance is 60 m, how far off the center of the curve could you allow the bushes to grow?',
    options: [
      { label: 'A', text: '5.625 m' },
      { label: 'B', text: '6.325 m' },
      { label: 'C', text: '8.254 m' },
      { label: 'D', text: '3.125 m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'For sight distance shorter than the curve length, m = R − √(R² − (S/2)²) with S measured along the curve.',
      formulas: [
        'S = 60 < L_c = 90',
        'm = R\\left(1 - \\cos\\frac{S}{2R}\\right)',
        'm = 5.625\\ \\text{m}',
      ],
      steps: [
        'Step 1: Since $S < L_c$, use the short-sight-distance formula.',
        'Step 2: $m = 80\\left[1 - \\cos\\left(\\frac{60}{2(80)}\\right)\\right]$.',
        'Step 3: $m = 5.625$ m.',
      ],
      finalAnswer: '5.625 m (Option A)',
    },
  },

  // Item 83
  {
    id: 'mstc-nov2015-q83',
    number: 83,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Compound Curve',
    text: 'A compound curve has a common tangent 520 m long. The first curve passing through the P.C. is a 3-degree curve with a central angle of 50°. Find the length of the second curve if its central angle is 35°.',
    options: [
      { label: 'A', text: '698.45 m' },
      { label: 'B', text: '662.37 m' },
      { label: 'C', text: '621.87 m' },
      { label: 'D', text: '721.36 m' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Find R₁ from the degree of curve, get T₁, then T₂ = 520 − T₁ and R₂ = T₂/tan(I₂/2).',
      formulas: [
        'R_1 = \\frac{3600}{\\pi(3)} = 381.972\\ \\text{m}',
        'T_1 = R_1\\tan 25^\\circ = 178.116\\ \\text{m}',
        'T_2 = 520 - 178.116 = 341.884 = R_2\\tan 17.5^\\circ \\Rightarrow R_2 = 1084.316',
        'L_{c2} = R_2 I_2\\frac{\\pi}{180} = 662.37\\ \\text{m}',
      ],
      steps: [
        'Step 1: $R_1 = 3600/(\\pi \\times 3) = 381.972$ m.',
        'Step 2: $T_1 = 381.972\\tan 25° = 178.116$ m.',
        'Step 3: $T_2 = 341.884$ m gives $R_2 = 1084.316$ m.',
        'Step 4: $L_{c2} = 1084.316(35°)(\\pi/180) = 662.37$ m.',
      ],
      finalAnswer: '662.37 m (Option B)',
    },
  },

  // Item 84
  {
    id: 'mstc-nov2015-q84',
    number: 84,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Spiral Curve',
    text: 'A spiral easement curve has a length of 100 m with 300-m radius central curve. Calculate the offset distance from the tangent to the third-quarter point of the spiral.',
    options: [
      { label: 'A', text: '2.34 m' },
      { label: 'B', text: '0.694 m' },
      { label: 'C', text: '2.89 m' },
      { label: 'D', text: '3.36 m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The offset at distance x along a spiral is x³/(6RL); the third-quarter point is x = 75 m.',
      formulas: [
        'x = \\tfrac{3}{4}(100) = 75\\ \\text{m}',
        'y = \\frac{x^3}{6RL} = \\frac{75^3}{6(300)(100)}',
        'y = 2.34\\ \\text{m}',
      ],
      steps: [
        'Step 1: $x = 0.75 \\times 100 = 75$ m.',
        'Step 2: $y = 421\\,875/180\\,000$.',
        'Step 3: $y = 2.34$ m.',
      ],
      finalAnswer: '2.34 m (Option A)',
    },
  },

  // Item 85
  {
    id: 'mstc-nov2015-q85',
    number: 85,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Spiral Curve',
    text: 'A spiral easement curve has a length of 2200 m with a central curve having a radius of 320 m. Determine the degree of spiral at the third-quarter point.',
    options: [
      { label: 'A', text: '3.58' },
      { label: 'B', text: '2.69' },
      { label: 'C', text: '2.85' },
      { label: 'D', text: '3.21' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The degree of curve varies linearly along the spiral; at ¾ of the length it is ¾ of the central degree.',
      formulas: [
        'D_c = \\frac{3600}{\\pi(320)} = 3.581^\\circ',
        'L = \\tfrac{3}{4}(2200) = 1650\\ \\text{m}',
        'D = 3.581\\left(\\frac{1650}{2200}\\right) = 2.686^\\circ',
      ],
      steps: [
        'Step 1: Central degree $= 3600/(\\pi \\times 320) = 3.581°$.',
        'Step 2: The third-quarter point is at 1650 m of 2200 m.',
        'Step 3: $D = 3.581(0.75) = 2.686° \\approx 2.69°$.',
      ],
      finalAnswer: '2.69 (Option B)',
    },
  },

  // Item 86
  {
    id: 'mstc-nov2015-q86',
    number: 86,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Spiral Curve',
    text: 'A spiral easement curve has a length of 160 m with a central curve having a radius of 320 m. Determine the offset distance to the third-quarter point.',
    options: [
      { label: 'A', text: '8.547 m' },
      { label: 'B', text: '10.125 m' },
      { label: 'C', text: '6.325 m' },
      { label: 'D', text: '5.625 m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Offset y = x³/(6RL) with x = ¾L.',
      formulas: [
        'x = \\tfrac{3}{4}(160) = 120\\ \\text{m}',
        'y = \\frac{120^3}{6(320)(160)} = 5.625\\ \\text{m}',
      ],
      steps: [
        'Step 1: $x = 120$ m.',
        'Step 2: $y = 1\\,728\\,000/307\\,200$.',
        'Step 3: $y = 5.625$ m.',
      ],
      finalAnswer: '5.625 m (Option D)',
    },
  },

  // Item 87
  {
    id: 'mstc-nov2015-q87',
    number: 87,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Spiral Curve',
    text: 'The degree of curve of the central curve of a spiral easement curve is equal to 6°. If the maximum design velocity of the car passing thru the spiral curve is 80 kph, determine the required length of spiral in meters.',
    options: [
      { label: 'A', text: '96.51' },
      { label: 'B', text: '92.54' },
      { label: 'C', text: '98.45' },
      { label: 'D', text: '101.23' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Use the rate-of-change-of-centripetal-acceleration formula L = 0.036v³/R.',
      formulas: [
        'R = \\frac{3600}{\\pi(6)} = 190.99\\ \\text{m}',
        'L = \\frac{0.036v^3}{R} = \\frac{0.036(80)^3}{190.99}',
        'L = 96.51\\ \\text{m}',
      ],
      steps: [
        'Step 1: $R = 3600/(\\pi \\times 6) = 190.99$ m.',
        'Step 2: $L = 0.036(512\\,000)/190.99$.',
        'Step 3: $L = 96.51$ m.',
      ],
      finalAnswer: '96.51 m (Option A)',
    },
  },

  // Item 88
  {
    id: 'mstc-nov2015-q88',
    number: 88,
    pageNumber: 11,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Earthwork',
    text: 'From station A with center height of 1.4 m in fill, the ground has uniform slope of 5% to station B whose center height is 2.8 m in cut. Assuming both sections to be level sections having a width of 14 m and side slope of 2:1 for both cut and fill, compute the cross-sectional area of cut 52 m from station A. Distance between Stations A and B is 60 m.',
    options: [
      { label: 'A', text: '40.152 m²' },
      { label: 'B', text: '43.215 m²' },
      { label: 'C', text: '41.395 m²' },
      { label: 'D', text: '42.256 m²' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Locate the point of zero grade, then find the cut depth at 52 m from A and apply the level-section area formula.',
      formulas: [
        '\\frac{x_1}{1.4} = \\frac{60 - x_1}{2.8} \\Rightarrow x_2 = 40,\\ x_1 = 20',
        'b = 52 - 20 = 32\\ \\text{m},\\quad h = \\frac{2.8}{40}(32) = 2.24\\ \\text{m}',
        'A = Bh + 2h^2 = 14(2.24) + 2(2.24)^2 = 41.395\\ \\text{m}^2',
      ],
      steps: [
        'Step 1: The zero-grade point is 20 m from A; 52 m from A is 32 m beyond it.',
        'Step 2: The cut depth there is $h = (2.8/40)(32) = 2.24$ m.',
        'Step 3: $A = 14(2.24) + 2(2.24)^2 = 41.395$ m².',
      ],
      finalAnswer: '41.395 m² (Option C)',
    },
  },

  // Item 89
  {
    id: 'mstc-nov2015-q89',
    number: 89,
    pageNumber: 11,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Earthwork',
    text: 'The areas in cut of two irregular sections 75 m apart are 36 square meters and 72 square meters, respectively. Base width is 10 m side slope of 3:1.2V. Using Prismoidal corrections formula, find the corrected volume of cut in cu. m. between the two stations.',
    options: [
      { label: 'A', text: '4021.54 m³' },
      { label: 'B', text: '3991.73 m³' },
      { label: 'C', text: '4068.72 m³' },
      { label: 'D', text: '3984.23 m³' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute the end-area volume, subtract the prismoidal correction (L/12)(C₁ − C₂)(D₁ − D₂).',
      formulas: [
        'A = BC + 1.5C^2 \\Rightarrow C_1 = 2.592,\\ C_2 = 4.355',
        'D_1 = 10 + 3C_1 = 17.776,\\ D_2 = 10 + 3C_2 = 23.065',
        'V_e = \\tfrac{1}{2}(36 + 72)(75) = 4050',
        'V_{pc} = \\frac{75}{12}(2.592 - 4.355)(17.776 - 23.065) = 58.272',
      ],
      steps: [
        'Step 1: $A = BC + 1.5C^2$ gives $C_1 = 2.592$ and $C_2 = 4.355$.',
        'Step 2: $D_1 = 17.776$ m, $D_2 = 23.065$ m.',
        'Step 3: End-area volume $= 4050$ m³; prismoidal correction $= 58.272$ m³.',
        'Step 4: Corrected volume $= 4050 - 58.272 = 3991.728$ m³.',
      ],
      finalAnswer: '3991.73 m³ (Option B)',
    },
  },

  // Item 90
  {
    id: 'mstc-nov2015-q90',
    number: 90,
    pageNumber: 11,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Transportation - Accident Rate',
    text: 'The number of accidents for 6 years recorded in a certain section of a highway is 5892. If the average daily traffic is 476, what is the accident rate per million entering vehicles?',
    options: [
      { label: 'A', text: '5763' },
      { label: 'B', text: '5584' },
      { label: 'C', text: '5821' },
      { label: 'D', text: '5652' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Rate = accidents × 10⁶ / (ADT × days).',
      formulas: [
        '\\text{vehicles} = 476(365)(6) = 1\\,042\\,440',
        'R = \\frac{5892 \\times 10^6}{1\\,042\\,440} = 5652',
      ],
      steps: [
        'Step 1: Total entering vehicles over 6 years $= 1\\,042\\,440$.',
        'Step 2: $R = 5892 \\times 10^6/1\\,042\\,440$.',
        'Step 3: $R = 5652$ per million entering vehicles.',
      ],
      finalAnswer: '5652 (Option D)',
    },
  },
];

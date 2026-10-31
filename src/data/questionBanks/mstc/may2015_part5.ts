import { Question } from '../../../types/exam';

export const MSTC_MAY2015_PART5: Question[] = [
  // Item 61
  {
    id: 'mstc-may2015-q61',
    number: 61,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Probability - Independent Events',
    text: 'A total of 300 people composed of students and teachers in a certain school are asked in a poll. The answers of the poll are either they are to agree, disagree or just be neutral to an issue being asked. From the students there are 132 who agreed, 78 who disagreed and 54 are neutral. There are 5 who agree, 14 who disagree and 17 are neutral from the teachers. If a teacher and a student are randomly selected, what is the probability that they either agree or neutral?',
    options: [
      { label: 'A', text: '0.486' },
      { label: 'B', text: '0.552' },
      { label: 'C', text: '0.594' },
      { label: 'D', text: '0.431' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'There are 264 students and 36 teachers; multiply the "agree or neutral" probabilities of each group.',
      formulas: [
        'P_s = \\frac{132+54}{264} = 0.7045',
        'P_t = \\frac{5+17}{36} = 0.6111',
        'P = 0.7045(0.6111) = 0.431',
      ],
      steps: [
        'Step 1: Students total 132 + 78 + 54 = 264; teachers total 5 + 14 + 17 = 36.',
        'Step 2: P(student agrees or is neutral) = 186/264 = 0.7045.',
        'Step 3: P(teacher agrees or is neutral) = 22/36 = 0.6111.',
        'Step 4: The two selections are independent, so P = 0.431.',
      ],
      finalAnswer: '0.431 (Option D)',
    },
  },

  // Item 62
  {
    id: 'mstc-may2015-q62',
    number: 62,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Statistics - Normal Distribution',
    text: 'The mean of a population is 84 and its standard deviation is 4. Using normal probability distribution, determine the probability that a certain sample is within 80 and 88.',
    options: [
      { label: 'A', text: '0.74' },
      { label: 'B', text: '0.68' },
      { label: 'C', text: '0.42' },
      { label: 'D', text: '0.56' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Both limits are one standard deviation from the mean.',
      formulas: [
        'z = \\frac{80-84}{4} = -1,\\quad z = \\frac{88-84}{4} = 1',
        'P(-1<z<1) = 0.6826',
      ],
      steps: [
        'Step 1: Convert 80 and 88 to z = −1 and z = +1.',
        'Step 2: The area between z = ±1 is 0.6826.',
        'Step 3: P ≈ 0.68.',
      ],
      finalAnswer: '0.68 (Option B)',
    },
  },

  // Item 63
  {
    id: 'mstc-may2015-q63',
    number: 63,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Statistics - Normal Distribution',
    text: 'The mean of a population is 17 and its standard deviation is 3. Using normal probability distribution, determine the probability that a certain sample is within 14 and 20.',
    options: [
      { label: 'A', text: '0.53' },
      { label: 'B', text: '0.62' },
      { label: 'C', text: '0.68' },
      { label: 'D', text: '0.57' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The limits sit one standard deviation either side of the mean.',
      formulas: [
        'z = \\frac{14-17}{3} = -1,\\quad z = \\frac{20-17}{3} = 1',
        'P(-1<z<1) = 0.6826',
      ],
      steps: [
        'Step 1: Convert to z-scores: −1 and +1.',
        'Step 2: The tabulated area is 0.6826.',
        'Step 3: P ≈ 0.68.',
      ],
      finalAnswer: '0.68 (Option C)',
    },
  },

  // Item 64
  {
    id: 'mstc-may2015-q64',
    number: 64,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Statistics - Quartiles',
    text: 'The numbers of working days lost due to accidents for each of 12 one-monthly periods are the following:\n\n27, 37, 40, 28, 23, 30, 35, 24, 30, 32, 31, 28\n\nDetermine the first quartile value for this data.',
    options: [
      { label: 'A', text: '22.3' },
      { label: 'B', text: '25.5' },
      { label: 'C', text: '27.5' },
      { label: 'D', text: '30.7' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'With 12 data the first quartile is the median of the lower six values.',
      formulas: [
        '\\text{Sorted: } 23, 24, 27, 28, 28, 30,\\ 30, 31, 32, 35, 37, 40',
        'X_{Q1} = \\frac{27+28}{2} = 27.5',
      ],
      steps: [
        'Step 1: Arrange the 12 values in ascending order.',
        'Step 2: The lower half is 23, 24, 27, 28, 28, 30.',
        'Step 3: Q1 = (27 + 28)/2 = 27.5.',
      ],
      finalAnswer: '27.5 (Option C)',
    },
  },

  // Item 65
  {
    id: 'mstc-may2015-q65',
    number: 65,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Statistics - Quartiles',
    text: 'Given the following numbers: 34.5, 12.7, 28.5, 25.6, 52.6, 45.4, 18.5, 27.5, and 12.5. Determine the first quartile.',
    options: [
      { label: 'A', text: '12.7' },
      { label: 'B', text: '18.5' },
      { label: 'C', text: '15.6' },
      { label: 'D', text: '14.1' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'With 9 data the median is the 5th value and the first quartile is the median of the four values below it.',
      formulas: [
        '\\text{Sorted: } 12.5, 12.7, 18.5, 25.6,\\ 27.5,\\ 28.5, 34.5, 45.4, 52.6',
        'X_{Q1} = \\frac{12.7+18.5}{2} = 15.6',
      ],
      steps: [
        'Step 1: Arrange the nine values in ascending order.',
        'Step 2: The median is the 5th value, 27.5.',
        'Step 3: Below it are 12.5, 12.7, 18.5 and 25.6; their median is (12.7 + 18.5)/2 = 15.6.',
        'Step 4: The booklet\'s own worked solution gives 15.6, which is option C (its key table misprints B).',
      ],
      finalAnswer: '15.6 (Option C)',
    },
  },

  // Item 66
  {
    id: 'mstc-may2015-q66',
    number: 66,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Engineering Economy - Effective Rate',
    text: 'Determine the equivalent effective rate of a money compounded continuously at r = 5%.',
    options: [
      { label: 'A', text: '5.13%' },
      { label: 'B', text: '5.26%' },
      { label: 'C', text: '5.12%' },
      { label: 'D', text: '4.82%' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Continuous compounding gives an effective rate of e^r − 1.',
      formulas: [
        'ER = e^{r} - 1 = e^{0.05} - 1',
        'ER = 1.05127 - 1 = 0.05127 = 5.13\\%',
      ],
      steps: [
        'Step 1: For continuous compounding, ER = e^r − 1.',
        'Step 2: e^0.05 = 1.05127.',
        'Step 3: ER = 5.13%.',
      ],
      finalAnswer: '5.13% (Option A)',
    },
  },

  // Item 67
  {
    id: 'mstc-may2015-q67',
    number: 67,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Engineering Economy - Annuities',
    text: 'A businessman wishes to raise ₱1.5 million in five years by investing a fixed amount of money every end of the year for three years. What is the required investment using an interest rate of 8%?',
    options: [
      { label: 'A', text: '₱635,740' },
      { label: 'B', text: '₱547,630' },
      { label: 'C', text: '₱475,360' },
      { label: 'D', text: '₱396,134' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Accumulate the three annual payments to year 5 and equate to ₱1.5M.',
      formulas: [
        'F = A\\frac{(1+i)^3-1}{i}(1+i)^2',
        '1\\,500\\,000 = A(3.2464)(1.1664) = 3.7866A',
        'A = \\text{₱}396\\,133.6',
      ],
      steps: [
        'Step 1: (F/A, 8%, 3) = (1.08³ − 1)/0.08 = 3.2464.',
        'Step 2: The payments accumulate two more years to year 5: × 1.08² = 1.1664.',
        'Step 3: A = 1 500 000/3.7866 = ₱396 133.6.',
      ],
      finalAnswer: '₱396,134 (Option D)',
    },
  },

  // Item 68
  {
    id: 'mstc-may2015-q68',
    number: 68,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Engineering Economy - Capitalized Cost',
    text: 'Determine the capitalized cost of a large-format printer that has a first cost of ₱1.20 Million and salvage value after five useful years equal to ₱600,000. The operation and maintenance cost is ₱100,000 every after 3 years. Use interest rate, i = 10.1%.',
    options: [
      { label: 'A', text: '₱2.47M' },
      { label: 'B', text: '₱2.56M' },
      { label: 'C', text: '₱3.41M' },
      { label: 'D', text: '₱2.89M' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Capitalized cost is the first cost plus the capitalized replacement cost plus the capitalized maintenance.',
      formulas: [
        'K = FC + \\frac{OM}{\\left(1+i\\right)^m-1} + \\frac{FC-SV}{\\left(1+i\\right)^n-1}',
        'K = 1\\,200\\,000 + \\frac{100\\,000}{1.101^3-1} + \\frac{600\\,000}{1.101^5-1}',
        'K = 1\\,200\\,000 + 298\\,834 + 971\\,090 = \\text{₱}2\\,469\\,954',
      ],
      steps: [
        'Step 1: 1.101³ − 1 = 0.33463, so maintenance capitalizes to ₱298,834.',
        'Step 2: 1.101⁵ − 1 = 0.61786, so the ₱600,000 replacement capitalizes to ₱971,090.',
        'Step 3: K = 1 200 000 + 298 834 + 971 090 = ₱2 469 954.',
      ],
      finalAnswer: '₱2.47M (Option A)',
    },
  },

  // Item 69
  {
    id: 'mstc-may2015-q69',
    number: 69,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Engineering Economy - Depreciation',
    text: 'A machine costing ₱1.5M has a salvage value of ₱600,000 at the end of its economic life. What is the economic life of this machine if using the sum-of-the-year\'s-digit method, its book value at the end of 2 years is estimated to be ₱870,000?',
    options: [
      { label: 'A', text: '4' },
      { label: 'B', text: '5' },
      { label: 'C', text: '6' },
      { label: 'D', text: '7' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Under SYD the two-year depreciation is (FC − SV)(2n − 1)·2/[n(n + 1)].',
      formulas: [
        'D_2 = (FC-SV)\\frac{m(2n-m+1)}{n(n+1)},\\ m = 2',
        '630\\,000 = 900\\,000\\frac{2(2n-1)}{n(n+1)}',
        '0.7n^2 - 3.3n + 2 = 0 \\Rightarrow n = 4',
      ],
      steps: [
        'Step 1: Total depreciation = 1 500 000 − 600 000 = 900 000, and D₂ = 1 500 000 − 870 000 = 630 000.',
        'Step 2: With m = 2, D₂ = 900 000 × 2(2n − 1)/[n(n + 1)].',
        'Step 3: This reduces to 0.7n² − 3.3n + 2 = 0.',
        'Step 4: n = 4 years.',
      ],
      finalAnswer: '4 years (Option A)',
    },
  },

  // Item 70
  {
    id: 'mstc-may2015-q70',
    number: 70,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Engineering Economy - Depreciation',
    text: 'A machine costing ₱1.2 million has an estimated book value of ₱300,000 at the end of its economic life in five years. Using Sum of the Digit Method, what will be its book value on the third year?',
    options: [
      { label: 'A', text: '₱720,000' },
      { label: 'B', text: '₱520,000' },
      { label: 'C', text: '₱480,000' },
      { label: 'D', text: '₱610,000' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The first three years absorb (5 + 4 + 3)/15 of the depreciable amount.',
      formulas: [
        '\\text{SYD} = \\frac{5(6)}{2} = 15',
        'D_3 = (1\\,200\\,000-300\\,000)\\frac{3(2(5)-3+1)}{2(15)} = 720\\,000',
        'BV_3 = 1\\,200\\,000 - 720\\,000 = \\text{₱}480\\,000',
      ],
      steps: [
        'Step 1: Depreciable amount = 1 200 000 − 300 000 = 900 000; SYD = 15.',
        'Step 2: Accumulated depreciation after 3 years = 900 000(5 + 4 + 3)/15 = 720 000.',
        'Step 3: BV₃ = 1 200 000 − 720 000 = ₱480 000.',
      ],
      finalAnswer: '₱480,000 (Option C)',
    },
  },

  // Item 71
  {
    id: 'mstc-may2015-q71',
    number: 71,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Engineering Economy - Depreciation',
    text: 'An equipment with first cost of ₱1.80 M has a salvage value of ₱300,000 at the end of 5 years. Using the constant percentage method, what is the total depreciation after three years?',
    options: [
      { label: 'A', text: '₱591,723' },
      { label: 'B', text: '₱614,302' },
      { label: 'C', text: '₱985,365' },
      { label: 'D', text: '₱1,185,691' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Constant percentage (declining balance) uses k = 1 − (SV/FC)^(1/n).',
      formulas: [
        'k = 1 - \\sqrt[5]{\\frac{300\\,000}{1\\,800\\,000}} = 0.30117',
        'BV_3 = 1\\,800\\,000(1-0.30117)^3 = 614\\,309.35',
        'D_3 = 1\\,800\\,000 - 614\\,309.35 = \\text{₱}1\\,185\\,691',
      ],
      steps: [
        'Step 1: k = 1 − (0.16667)^0.2 = 0.30117.',
        'Step 2: BV₃ = 1 800 000(0.69883)³ = ₱614 309.35.',
        'Step 3: D₃ = 1 800 000 − 614 309.35 = ₱1 185 691.',
      ],
      finalAnswer: '₱1,185,691 (Option D)',
    },
  },

  // Item 72
  {
    id: 'mstc-may2015-q72',
    number: 72,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Simple Curves',
    text: 'Points A and B on a simple curve have perpendicular distances from tangent at point O equal to 28 m and 38 m, respectively. If length of curve OB is 158.82 m, determine the chord AB.',
    options: [
      { label: 'A', text: '28.72 m' },
      { label: 'B', text: '32.65 m' },
      { label: 'C', text: '22.85 m' },
      { label: 'D', text: '14.74 m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Use L = Rβ and b = R(1 − cos β) to get R, then repeat for A and subtract the central angles.',
      formulas: [
        '158.82 = R\\beta,\\quad 38 = R(1-\\cos\\beta) \\Rightarrow R = 325.35\\ \\text{m},\\ \\beta = 27.969^\\circ',
        '28 = 325.35(1-\\cos\\alpha) \\Rightarrow \\alpha = 23.948^\\circ',
        '\\theta = \\beta - \\alpha = 4.0219^\\circ',
        'AB = 2R\\sin\\frac{\\theta}{2} = 2(325.35)\\sin 2.011^\\circ = 22.83 \\text{ m}',
      ],
      steps: [
        'Step 1: Solve 158.82 = Rβ (in radians) together with 38 = R(1 − cos β).',
        'Step 2: This gives R = 325.35 m and β = 27.969°.',
        'Step 3: For A, 28 = 325.35(1 − cos α) gives α = 23.948°.',
        'Step 4: The angle between the two points is θ = 4.0219°.',
        'Step 5: AB = 2(325.35) sin 2.011° = 22.83 m.',
      ],
      finalAnswer: '22.83 m (Option C)',
    },
  },

  // Item 73
  {
    id: 'mstc-may2015-q73',
    number: 73,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Simple Curves',
    text: 'A simple curve with a radius of 415 m has a point A that is 25 m from the tangent that passes through the PC. Determine the length of the curve from PC to point A.',
    options: [
      { label: 'A', text: '165.76 m' },
      { label: 'B', text: '177.52 m' },
      { label: 'C', text: '123.66 m' },
      { label: 'D', text: '144.78 m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The offset 25 m fixes the central angle through 1 − cos θ.',
      formulas: [
        '\\cos\\theta = 1 - \\frac{25}{415} = 0.93976 \\Rightarrow \\theta = 20.0^\\circ',
        'L_c = R\\theta = 415(0.34907) = 144.78 \\text{ m}',
      ],
      steps: [
        'Step 1: For a circular curve, offset y = R(1 − cos θ).',
        'Step 2: cos θ = 1 − 25/415 = 0.93976, so θ = 20.0°.',
        'Step 3: Lc = Rθ = 415(0.34907) = 144.78 m.',
      ],
      finalAnswer: '144.78 m (Option D)',
    },
  },

  // Item 74
  {
    id: 'mstc-may2015-q74',
    number: 74,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Simple Curves',
    text: 'A curve having a radius of 192.18 m has an intersecting angle of 42° 15\'. PC is at Station 0 + 700. Find the right-angle offset distance to Station 0 + 736.78.',
    options: [
      { label: 'A', text: '5.6 m' },
      { label: 'B', text: '2.7 m' },
      { label: 'C', text: '3.5 m' },
      { label: 'D', text: '4.8 m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The station difference is the arc; the offset is R minus the projection of the radius.',
      formulas: [
        'x = 736.78 - 700 = 36.78 \\text{ m}',
        'y = R - \\sqrt{R^2 - x^2} = 192.18 - \\sqrt{192.18^2 - 36.78^2}',
        'y = 192.18 - 188.63 = 3.55 \\text{ m}',
      ],
      steps: [
        'Step 1: Arc from PC = 36.78 m.',
        'Step 2: y = R − √(R² − x²) with R = 192.18 m.',
        'Step 3: √(36 933.2 − 1352.8) = 188.63 m, so y = 3.55 m.',
      ],
      finalAnswer: '3.5 m (Option C)',
    },
  },

  // Item 75
  {
    id: 'mstc-may2015-q75',
    number: 75,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Simple Curves',
    text: 'A simple curve having a radius of 200 m have tangents with bearing N 10° E and N 70° E, respectively. The stationing of PC is 1 + 400. Determine the stationing of a point Q on the curve whose deflection angle from PC is 6°.',
    options: [
      { label: 'A', text: '1 + 448.19' },
      { label: 'B', text: '1 + 484.91' },
      { label: 'C', text: '1 +489.41' },
      { label: 'D', text: '1 + 441.89' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The deflection angle is half the central angle, so 6° of deflection means 12° of arc.',
      formulas: [
        '\\theta = 2(6^\\circ) = 12^\\circ = 0.20944 \\text{ rad}',
        'L_c = R\\theta = 200(0.20944) = 41.89 \\text{ m}',
        '\\text{Station} = 1 + 400 + 41.89 = 1 + 441.89',
      ],
      steps: [
        'Step 1: A deflection angle of 6° subtends a central angle of 12°.',
        'Step 2: Arc length = 200 × 12π/180 = 41.89 m.',
        'Step 3: Station of Q = 1 + 441.89.',
      ],
      finalAnswer: '1 + 441.89 (Option D)',
    },
  },
];

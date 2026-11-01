import { Question } from '../../../types/exam';

export const MSTC_NOV2015_PART1: Question[] = [
  // Item 1
  {
    id: 'mstc-nov2015-q1',
    number: 1,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Factoring',
    text: 'Factor $x^4 - y^4 + y - x^2$ as possible.',
    options: [
      { label: 'A', text: '$(x^2 - y)(x^2 + y - 1)$' },
      { label: 'B', text: '$(x^2 + y)(x^2 + y - 1)$' },
      { label: 'C', text: '$(x^2 + y)(x^2 - y - 1)$' },
      { label: 'D', text: '$(x^2 - y)(x^2 + y + 1)$' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Group the terms and use the difference of two squares.',
      formulas: [
        'x^4 - y^4 + y - x^2 = (x^4 - y^4) - (x^2 - y)',
        '= (x^2 - y)(x^2 + y) - (x^2 - y)',
        '= (x^2 - y)(x^2 + y - 1)',
      ],
      steps: [
        'Step 1: Write $x^4 - y^4 = (x^2 - y)(x^2 + y)$ and $y - x^2 = -(x^2 - y)$.',
        'Step 2: Factor out the common factor $(x^2 - y)$.',
        'Step 3: The result is $(x^2 - y)(x^2 + y - 1)$.',
      ],
      finalAnswer: '$(x^2 - y)(x^2 + y - 1)$ (Option A)',
    },
  },

  // Item 2
  {
    id: 'mstc-nov2015-q2',
    number: 2,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Function Evaluation',
    text: 'Given the function $f(x) = x^3 - 2x^2 + 5x - 8$. Evaluate $f(3)$.',
    options: [
      { label: 'A', text: '17' },
      { label: 'B', text: '14' },
      { label: 'C', text: '16' },
      { label: 'D', text: '15' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Substitute x = 3 into the polynomial.',
      formulas: [
        'f(3) = 3^3 - 2(3^2) + 5(3) - 8',
        '= 27 - 18 + 15 - 8 = 16',
      ],
      steps: [
        'Step 1: $3^3 = 27$, $2(3^2) = 18$, $5(3) = 15$.',
        'Step 2: $27 - 18 + 15 - 8 = 16$.',
      ],
      finalAnswer: '16 (Option C)',
    },
  },

  // Item 3
  {
    id: 'mstc-nov2015-q3',
    number: 3,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Factoring',
    text: 'An object is dropped from the top of a 256-m tower. The height of the object above the ground after $t$ seconds is modelled by the polynomial $256 - 16t^2$. Factor this expression completely.',
    options: [
      { label: 'A', text: '$16(4 + t)(4 - t)$' },
      { label: 'B', text: '$4(4 + t)(4 - t)$' },
      { label: 'C', text: '$(4 + t)(4 - t)$' },
      { label: 'D', text: '$16(4 - t)(4 - t)$' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Factor out 16 and apply the difference of two squares.',
      formulas: [
        '256 - 16t^2 = 16(16 - t^2)',
        '= 16(4 + t)(4 - t)',
      ],
      steps: [
        'Step 1: Factor the common 16: $16(16 - t^2)$.',
        'Step 2: $16 - t^2 = (4 + t)(4 - t)$.',
        'Step 3: The complete factorization is $16(4 + t)(4 - t)$.',
      ],
      finalAnswer: '$16(4 + t)(4 - t)$ (Option A)',
    },
  },

  // Item 4
  {
    id: 'mstc-nov2015-q4',
    number: 4,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Inequalities',
    text: 'Solve the inequality: $\\dfrac{2}{5}(x - 6) \\ge x - 1$.',
    options: [
      { label: 'A', text: '$x \\le 7/3$' },
      { label: 'B', text: '$x \\le -7/3$' },
      { label: 'C', text: '$x \\le 5/3$' },
      { label: 'D', text: '$x \\le -5/3$' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Clear the fraction, then collect the x-terms and reverse the sense when dividing by a negative number.',
      formulas: [
        '\\frac{2}{5}(x - 6) \\ge x - 1',
        '2x - 12 \\ge 5x - 5',
        '-3x \\ge 7 \\Rightarrow x \\le -\\frac{7}{3}',
      ],
      steps: [
        'Step 1: Multiply both sides by 5: $2(x - 6) \\ge 5(x - 1)$.',
        'Step 2: Expand: $2x - 12 \\ge 5x - 5$.',
        'Step 3: $-3x \\ge 7$, so $x \\le -7/3$.',
      ],
      finalAnswer: '$x \\le -7/3$ (Option B)',
    },
  },

  // Item 5
  {
    id: 'mstc-nov2015-q5',
    number: 5,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Remainder Theorem',
    text: 'Given that $f(x) = (x - 4)(x + 3) + 9$, when $f(x)$ is divided by $(x - k)$ the remainder is $k$. Find the positive value of $k$.',
    options: [
      { label: 'A', text: '4' },
      { label: 'B', text: '5' },
      { label: 'C', text: '3' },
      { label: 'D', text: '2' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'By the remainder theorem the remainder is f(k); set f(k) = k and solve.',
      formulas: [
        'f(k) = (k - 4)(k + 3) + 9 = k',
        'k^2 - k - 12 + 9 = k \\Rightarrow k^2 - 2k - 3 = 0',
        '(k - 3)(k + 1) = 0 \\Rightarrow k = 3',
      ],
      steps: [
        'Step 1: Expand: $(k - 4)(k + 3) + 9 = k^2 - k - 3$.',
        'Step 2: Set equal to the remainder k: $k^2 - k - 3 = k$.',
        'Step 3: $k^2 - 2k - 3 = 0$, so $(k - 3)(k + 1) = 0$.',
        'Step 4: The positive root is $k = 3$.',
      ],
      finalAnswer: 'k = 3 (Option C)',
    },
  },

  // Item 6
  {
    id: 'mstc-nov2015-q6',
    number: 6,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Radicals',
    text: 'If $y = x^3$, find the value of $y$ if $\\sqrt[3]{8\\sqrt{2}\\,\\sqrt[3]{8x}} = 2$.',
    options: [
      { label: 'A', text: '16' },
      { label: 'B', text: '2' },
      { label: 'C', text: '4' },
      { label: 'D', text: '8' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Simplify the nested radicals; the equation reduces to 2x = 4, so x = 2 and y = x³.',
      formulas: [
        '\\sqrt[3]{8\\sqrt{2}\\,\\sqrt[3]{8x}} = 2',
        '\\sqrt[3]{8x} = 2x^{1/3},\\quad 8\\sqrt{2}\\,(2x^{1/3}) = 16\\sqrt{2}\\,x^{1/3}',
        '\\sqrt[3]{16\\sqrt{2}\\,x^{1/3}} = 2 \\Rightarrow x = 2',
        'y = 2^3 = 8',
      ],
      steps: [
        'Step 1: $\\sqrt[3]{8x} = 2x^{1/3}$.',
        'Step 2: Cube both sides of the original equation: $8\\sqrt{2}\\,\\sqrt[3]{8x} = 8$.',
        'Step 3: Substituting gives $8\\sqrt{2}\\,(2x^{1/3}) = 8$, so $x^{1/3} = 1/\\sqrt{2}$ and $x = 2$.',
        'Step 4: $y = x^3 = 8$.',
      ],
      finalAnswer: 'y = 8 (Option D)',
    },
  },

  // Item 7
  {
    id: 'mstc-nov2015-q7',
    number: 7,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Rational Functions',
    text: 'The amount of evaporation from the surface of a large body of water can be expressed by the function $E = \\dfrac{w}{20\\sqrt{a}}$, where $a$ is the surface area in square miles, $w$ is the wind speed over the water in mph, and $E$ is the water evaporation in inches per day. Determine the evaporation on the lake with water surface area of 9 square miles if the wind speed is 10 mph.',
    options: [
      { label: 'A', text: '1/2' },
      { label: 'B', text: '1/9' },
      { label: 'C', text: '1/4' },
      { label: 'D', text: '1/6' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Substitute a = 9 and w = 10 into the rational function.',
      formulas: [
        'E = \\frac{w}{20\\sqrt{a}} = \\frac{10}{20\\sqrt{9}}',
        '= \\frac{10}{20(3)} = \\frac{10}{60} = \\frac{1}{6}',
      ],
      steps: [
        'Step 1: $\\sqrt{a} = \\sqrt{9} = 3$.',
        'Step 2: $E = 10/(20 \\times 3) = 10/60$.',
        'Step 3: $E = 1/6$ inch per day.',
      ],
      finalAnswer: '1/6 (Option D)',
    },
  },

  // Item 8
  {
    id: 'mstc-nov2015-q8',
    number: 8,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Variation',
    text: 'Pairs of markings a set distance apart are made on highways so that police can detect drivers exceeding speed limit. Over a fixed distance the speed $V$ varies inversely with the time $T$. In one particular pair of markings, $V$ is 48 kph when $T$ is 6 seconds. Find the speed of a car that travels the given distance in 4 seconds.',
    options: [
      { label: 'A', text: '72 kph' },
      { label: 'B', text: '76 kph' },
      { label: 'C', text: '68 kph' },
      { label: 'D', text: '32 kph' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Inverse variation means the product VT is constant.',
      formulas: [
        'V_1 T_1 = V_2 T_2',
        '48(6) = V_2(4) \\Rightarrow V_2 = 72',
      ],
      steps: [
        'Step 1: $VT = 48 \\times 6 = 288$.',
        'Step 2: $V_2 = 288/4 = 72$ kph.',
      ],
      finalAnswer: '72 kph (Option A)',
    },
  },

  // Item 9
  {
    id: 'mstc-nov2015-q9',
    number: 9,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Arithmetic Sequence',
    text: 'An auditorium has 54 seats in the first row, 58 seats in the second row, 62 seats in the third row, and so on. Find the general term of this arithmetic sequence.',
    options: [
      { label: 'A', text: '$a_n = 50 + n$' },
      { label: 'B', text: '$a_n = 54 + 4n$' },
      { label: 'C', text: '$a_n = 54 + n$' },
      { label: 'D', text: '$a_n = 50 + 4n$' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The first term is 54 and the common difference is 4; expand a₁ + (n − 1)d.',
      formulas: [
        'a_n = a_1 + (n - 1)d = 54 + (n - 1)4',
        'a_n = 54 + 4n - 4 = 50 + 4n',
      ],
      steps: [
        'Step 1: $a_1 = 54$, $d = 58 - 54 = 4$.',
        'Step 2: $a_n = 54 + (n - 1)4$.',
        'Step 3: Simplify to $a_n = 50 + 4n$.',
      ],
      finalAnswer: '$a_n = 50 + 4n$ (Option D)',
    },
  },

  // Item 10
  {
    id: 'mstc-nov2015-q10',
    number: 10,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Motion Problems',
    text: 'A man "A" set out from a certain point and travelled at the rate of 6 kph. After "A" had gone two hours, another man "B" set out to overtake "A" and went 4 km the first hour, 5 km the second hour, 6 km the third hour and so on gaining 1 km every hour. How many hours after "B" left will they be together?',
    options: [
      { label: 'A', text: '8' },
      { label: 'B', text: '10' },
      { label: 'C', text: '7' },
      { label: 'D', text: '9' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Equate A\'s distance after B leaves to B\'s arithmetic-series distance.',
      formulas: [
        'S_A = 6(n + 2)',
        'S_B = \\frac{n}{2}\\left[2(4) + (n - 1)(1)\\right] = \\frac{n(n + 7)}{2}',
        '6(n + 2) = \\frac{n(n + 7)}{2} \\Rightarrow n^2 - 5n - 24 = 0',
        '(n - 8)(n + 3) = 0 \\Rightarrow n = 8',
      ],
      steps: [
        'Step 1: A has a 2-hour head start, so after n hours from B\'s departure A has gone $6(n + 2)$ km.',
        'Step 2: B covers an arithmetic series $4 + 5 + \\dots + (n + 3) = n(n + 7)/2$.',
        'Step 3: Set them equal: $12(n + 2) = n(n + 7)$.',
        'Step 4: $n^2 - 5n - 24 = 0$, giving $n = 8$.',
      ],
      finalAnswer: '8 hours (Option A)',
    },
  },

  // Item 11
  {
    id: 'mstc-nov2015-q11',
    number: 11,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Arithmetic Progression',
    text: 'If the sum of the first 13 terms of two arithmetic progressions are in the ratio 8/3 what is the ratio of their corresponding seventh terms?',
    options: [
      { label: 'A', text: '5/3' },
      { label: 'B', text: '10/3' },
      { label: 'C', text: '8/3' },
      { label: 'D', text: '7/3' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'For an odd number of terms the sum is n times the middle term, so the ratio of the sums equals the ratio of the middle (7th) terms.',
      formulas: [
        'S_{13} = 13 \\times a_7',
        '\\frac{S_{13}}{S_{13}\'} = \\frac{13 a_7}{13 a_7\'} = \\frac{a_7}{a_7\'} = \\frac{8}{3}',
      ],
      steps: [
        'Step 1: The sum of 13 terms equals 13 times the middle term (the 7th).',
        'Step 2: Therefore the ratio of the 7th terms equals the ratio of the sums.',
        'Step 3: The ratio is 8/3.',
      ],
      finalAnswer: '8/3 (Option C)',
    },
  },

  // Item 12
  {
    id: 'mstc-nov2015-q12',
    number: 12,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Exponential Growth',
    text: 'The population size of the bacterial culture growing under controlled conditions is doubling each day. Predict how large the culture will be at the beginning of day 7 if it measures 10 units at the beginning of day 1.',
    options: [
      { label: 'A', text: '540' },
      { label: 'B', text: '580' },
      { label: 'C', text: '640' },
      { label: 'D', text: '680' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Six doublings occur between the beginning of day 1 and the beginning of day 7.',
      formulas: [
        'P = P_0 2^t',
        'P = 10 \\times 2^6 = 640',
      ],
      steps: [
        'Step 1: From the start of day 1 to the start of day 7 is 6 days.',
        'Step 2: $P = 10 \\times 2^6$.',
        'Step 3: $P = 640$ units.',
      ],
      finalAnswer: '640 (Option C)',
    },
  },

  // Item 13
  {
    id: 'mstc-nov2015-q13',
    number: 13,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Exponential Growth',
    text: 'The population of a community of lemmings is defined by $P = P_0 e^{0.15t}$, where $t$ is the time in months and $P_0$ is the initial population. Estimate their population after 8 months if there were 5000 lemmings initially.',
    options: [
      { label: 'A', text: '16,200' },
      { label: 'B', text: '16,600' },
      { label: 'C', text: '16,800' },
      { label: 'D', text: '16,100' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Substitute P₀ = 5000 and t = 8 into the exponential model.',
      formulas: [
        'P = 5000\\,e^{0.15(8)} = 5000\\,e^{1.2}',
        'e^{1.2} = 3.3201 \\Rightarrow P = 16\\,600',
      ],
      steps: [
        'Step 1: $0.15 \\times 8 = 1.2$.',
        'Step 2: $e^{1.2} = 3.3201$.',
        'Step 3: $P = 5000 \\times 3.3201 = 16\\,600$.',
      ],
      finalAnswer: '16,600 (Option B)',
    },
  },

  // Item 14
  {
    id: 'mstc-nov2015-q14',
    number: 14,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Word Problems',
    text: 'China, USA, and Europe are the countries with the most number of cellular subscribers in the world. Together, they contribute 34.8% of the total world subscribers. If China is 3.1% less than 4 times the percentage of the world subscribers in Europe and the percent of the world subscribers in USA is 4.3% more than the percent of the world subscribers in China, find the percent of world subscribers in China.',
    options: [
      { label: 'A', text: '5.6%' },
      { label: 'B', text: '15.4%' },
      { label: 'C', text: '19.3%' },
      { label: 'D', text: '9.9%' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Let E be Europe; then China = 4E − 3.1 and USA = China + 4.3. Their total is 34.8.',
      formulas: [
        'C = 4E - 3.1,\\quad U = C + 4.3',
        'C + U + E = 34.8',
        'E = 5.6 \\Rightarrow C = 4(5.6) - 3.1 = 19.3',
      ],
      steps: [
        'Step 1: Express China and USA in terms of Europe: $C = 4E - 3.1$, $U = C + 4.3 = 4E + 1.2$.',
        'Step 2: $(4E - 3.1) + (4E + 1.2) + E = 34.8$ gives $9E = 36.7$, so $E = 5.6$.',
        'Step 3: $C = 4(5.6) - 3.1 = 19.3$%.',
      ],
      finalAnswer: '19.3% (Option C)',
    },
  },

  // Item 15
  {
    id: 'mstc-nov2015-q15',
    number: 15,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Work Problems',
    text: 'Mary can clean a house in 4 hours and her brother John can do it in 7 hours. They agreed to clean the house together before their mother arrives in 3 hours. How long will it take them to clean the house?',
    options: [
      { label: 'A', text: '2-2/9 hours' },
      { label: 'B', text: '2-3/8 hours' },
      { label: 'C', text: '2-6/13 hours' },
      { label: 'D', text: '2-6/11 hours' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Add the two work rates and invert.',
      formulas: [
        '\\frac{1}{4} + \\frac{1}{7} = \\frac{11}{28}',
        't = \\frac{28}{11} = 2\\frac{6}{11} \\text{ hours}',
      ],
      steps: [
        'Step 1: Mary\'s rate = 1/4 per hour, John\'s = 1/7 per hour.',
        'Step 2: Combined rate = 1/4 + 1/7 = 11/28 per hour.',
        'Step 3: $t = 28/11 = 2\\tfrac{6}{11}$ hours.',
      ],
      finalAnswer: '2-6/11 hours (Option D)',
    },
  },
];

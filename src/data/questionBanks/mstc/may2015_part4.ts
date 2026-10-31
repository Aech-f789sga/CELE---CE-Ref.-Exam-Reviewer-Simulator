import { Question } from '../../../types/exam';

export const MSTC_MAY2015_PART4: Question[] = [
  // Item 46
  {
    id: 'mstc-may2015-q46',
    number: 46,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Analytic Geometry - Polar Curves',
    text: 'Find the area enclosed by the curve whose equation in polar form is given by $r = 2\\sin\\theta + 2\\cos\\theta$.',
    options: [
      { label: 'A', text: 'π' },
      { label: 'B', text: 'π/2' },
      { label: 'C', text: '2π' },
      { label: 'D', text: '4π' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The equation is a circle centred on the 45° line; its radius is √2.',
      formulas: [
        'r = 2(\\sin\\theta + \\cos\\theta) = 2\\sqrt{2}\\cos(\\theta - 45^\\circ)',
        'r_{max} = 2\\sqrt{2} \\Rightarrow \\text{radius} = \\sqrt{2}',
        'A = \\pi(\\sqrt{2})^2 = 2\\pi',
      ],
      steps: [
        'Step 1: Combine the sine and cosine into a single cosine.',
        'Step 2: The maximum radius 2√2 is the diameter, so r = √2.',
        'Step 3: A = πr² = 2π.',
      ],
      finalAnswer: '2π (Option C)',
    },
  },

  // Item 47
  {
    id: 'mstc-may2015-q47',
    number: 47,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Analytic Geometry - Polar to Rectangular',
    text: 'A curve has a polar equation of $r^2 - \\csc 2\\theta = 0$. Determine the equation of the curve in rectangular or Cartesian plane form.',
    options: [
      { label: 'A', text: 'xy = 2' },
      { label: 'B', text: '2xy = 1' },
      { label: 'C', text: '4xy = 1' },
      { label: 'D', text: 'xy = -4' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Use csc 2θ = 1/sin 2θ and sin 2θ = 2 sinθ cosθ, then multiply by r².',
      formulas: [
        'r^2 = \\frac{1}{\\sin 2\\theta} = \\frac{1}{2\\sin\\theta\\cos\\theta}',
        'r^2(2\\sin\\theta\\cos\\theta) = 1',
        '2(r\\cos\\theta)(r\\sin\\theta) = 1 \\Rightarrow 2xy = 1',
      ],
      steps: [
        'Step 1: r² − csc 2θ = 0 gives r² = 1/sin 2θ.',
        'Step 2: Expand sin 2θ = 2 sinθ cosθ and cross-multiply.',
        'Step 3: Since x = r cosθ and y = r sinθ, 2xy = 1.',
      ],
      finalAnswer: '2xy = 1 (Option B)',
    },
  },

  // Item 48
  {
    id: 'mstc-may2015-q48',
    number: 48,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Solid Geometry - Spheres',
    text: 'Find the coordinate of the center of the sphere with general equation of $x^2+2x+y^2-16y+z^2-12z+65=0$.',
    options: [
      { label: 'A', text: '(1, -8, 6)' },
      { label: 'B', text: '(-1, 8, 6)' },
      { label: 'C', text: '(-2, 16, 12)' },
      { label: 'D', text: '(2, 16, 12)' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Complete the square in each variable; the centre is minus one half of each linear coefficient.',
      formulas: [
        '(x+1)^2 - 1 + (y-8)^2 - 64 + (z-6)^2 - 36 + 65 = 0',
        '(x+1)^2 + (y-8)^2 + (z-6)^2 = 36',
        'C(-1,\\ 8,\\ 6)',
      ],
      steps: [
        'Step 1: Group: (x² + 2x) + (y² − 16y) + (z² − 12z) = −65.',
        'Step 2: Complete the squares: (x + 1)² − 1 + (y − 8)² − 64 + (z − 6)² − 36 = −65.',
        'Step 3: (x + 1)² + (y − 8)² + (z − 6)² = 36, a sphere of radius 6.',
        'Step 4: The centre is (−1, 8, 6).',
      ],
      finalAnswer: '(-1, 8, 6) (Option B)',
    },
  },

  // Item 49
  {
    id: 'mstc-may2015-q49',
    number: 49,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Solid Geometry - Angle Between Planes',
    text: 'Given two planes, $x+4y-z+3=0$ and $x-12y+2z-7=0$. Determine the angle between the planes.',
    options: [
      { label: 'A', text: '125.92°' },
      { label: 'B', text: '161.11°' },
      { label: 'C', text: '149.80°' },
      { label: 'D', text: '138.95°' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The angle between planes equals the angle between their normal vectors.',
      formulas: [
        '\\cos\\theta = \\frac{|n_1 \\cdot n_2|}{|n_1||n_2|}',
        '\\cos\\theta = \\frac{|1-48-2|}{\\sqrt{18}\\sqrt{149}} = \\frac{49}{51.79} = 0.9462',
        '\\theta = 161.11^\\circ',
      ],
      steps: [
        'Step 1: Normals are (1, 4, −1) and (1, −12, 2).',
        'Step 2: The dot product is 1 − 48 − 2 = −49, with magnitudes √18 and √149.',
        'Step 3: The supplementary angle of the normals is used, giving θ = 161.11°.',
      ],
      finalAnswer: '161.11° (Option B)',
    },
  },

  // Item 50
  {
    id: 'mstc-may2015-q50',
    number: 50,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Calculus - Limits',
    text: 'Evaluate the limit of $\\lim_{z \\to 0} \\ln\\dfrac{z+9}{9}$.',
    options: [
      { label: 'A', text: '0' },
      { label: 'B', text: '1/2' },
      { label: 'C', text: '2' },
      { label: 'D', text: '-1' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The logarithm is continuous, so substitute z = 0 directly.',
      formulas: [
        '\\lim_{z\\to 0}\\ln\\frac{z+9}{9} = \\ln\\frac{9}{9}',
        '\\ln 1 = 0',
      ],
      steps: [
        'Step 1: Put z = 0 inside the logarithm: (0 + 9)/9 = 1.',
        'Step 2: ln 1 = 0.',
      ],
      finalAnswer: '0 (Option A)',
    },
  },

  // Item 51
  {
    id: 'mstc-may2015-q51',
    number: 51,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Calculus - Related Rates',
    text: 'When there is only 6 m of rope remaining in pulling a boat 3.8 meters below the pier, the rope is being pulled at 0.9 m/s. How fast the boat does approaches to the pier at this instant?',
    options: [
      { label: 'A', text: '1.16 m/s' },
      { label: 'B', text: '2.11 m/s' },
      { label: 'C', text: '1.07 m/s' },
      { label: 'D', text: '0.71 m/s' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Differentiate s² = x² + 3.8² with respect to time.',
      formulas: [
        's^2 = x^2 + 3.8^2',
        '2s\\frac{ds}{dt} = 2x\\frac{dx}{dt} \\Rightarrow \\frac{dx}{dt} = \\frac{s}{x}\\frac{ds}{dt}',
        'x = \\sqrt{36 - 14.44} = 4.643,\\quad \\frac{dx}{dt} = \\frac{6}{4.643}(0.9) = 1.163',
      ],
      steps: [
        'Step 1: With s = 6 m and a 3.8 m drop, x = √(6² − 3.8²) = 4.643 m.',
        'Step 2: Differentiate s² = x² + 3.8²: 2s ds/dt = 2x dx/dt.',
        'Step 3: dx/dt = (6/4.643)(0.9) = 1.163 m/s.',
      ],
      finalAnswer: '1.16 m/s (Option A)',
    },
  },

  // Item 52
  {
    id: 'mstc-may2015-q52',
    number: 52,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Calculus - Definite Integrals',
    text: 'Evaluate $\\displaystyle\\int_0^1 \\frac{3^x}{e^x}\\,dx$.',
    options: [
      { label: 'A', text: '1.090' },
      { label: 'B', text: '1.051' },
      { label: 'C', text: '2.193' },
      { label: 'D', text: '2.110' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Combine the exponential bases into (3/e)^x and integrate as an exponential.',
      formulas: [
        '\\frac{3^x}{e^x} = \\left(\\frac{3}{e}\\right)^x = 1.103638^x',
        '\\int a^x dx = \\frac{a^x}{\\ln a}',
        '\\int_0^1 1.103638^x dx = \\frac{1.103638 - 1}{\\ln 1.103638} = 1.051',
      ],
      steps: [
        'Step 1: 3/e = 1.103638.',
        'Step 2: The antiderivative is (1.103638)^x / ln(1.103638).',
        'Step 3: Evaluating from 0 to 1 gives 0.103638/0.098612 = 1.051.',
      ],
      finalAnswer: '1.051 (Option B)',
    },
  },

  // Item 53
  {
    id: 'mstc-may2015-q53',
    number: 53,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Calculus - Integration by Parts',
    text: 'Evaluate the integral: $\\displaystyle\\int_0^{\\pi/4} 8x\\cos 2x\\,dx$.',
    options: [
      { label: 'A', text: '2.47' },
      { label: 'B', text: '1.14' },
      { label: 'C', text: '3.52' },
      { label: 'D', text: '5.56' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Integrate by parts with u = x and dv = cos 2x dx.',
      formulas: [
        '\\int x\\cos 2x\\,dx = \\frac{x\\sin 2x}{2} + \\frac{\\cos 2x}{4}',
        '\\left[\\frac{x\\sin 2x}{2} + \\frac{\\cos 2x}{4}\\right]_0^{\\pi/4} = \\frac{\\pi}{8} - \\frac{1}{4} = 0.1427',
        '8(0.1427) = 1.14',
      ],
      steps: [
        'Step 1: By parts, ∫x cos 2x dx = x sin 2x/2 + cos 2x/4.',
        'Step 2: At x = π/4: (π/4)(1)/2 + 0 = 0.3927.',
        'Step 3: At x = 0: 0 + 0.25.',
        'Step 4: The bracket equals 0.1427, and 8 × 0.1427 = 1.14.',
      ],
      finalAnswer: '1.14 (Option B)',
    },
  },

  // Item 54
  {
    id: 'mstc-may2015-q54',
    number: 54,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Calculus - Work',
    text: 'A hemispherical tank having a top diameter of 2.4 m is filled with water. Find the work done in pumping all the water out to elevation 0.80 m above the top of the tank.',
    options: [
      { label: 'A', text: '52.65 kJ' },
      { label: 'B', text: '44.38 kJ' },
      { label: 'C', text: '75.63 kJ' },
      { label: 'D', text: '67.92 kJ' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Slice the hemisphere horizontally; each slice at depth y is lifted (0.80 + y) metres.',
      formulas: [
        'x^2 = 1.44 - y^2,\\quad dV = \\pi(1.44-y^2)dy',
        'W = \\gamma\\pi\\int_0^{1.2}(1.44-y^2)(0.8+y)\\,dy',
        'W = 9.81\\pi(1.44) = 44.38 \\text{ kJ}',
      ],
      steps: [
        'Step 1: r = 1.2 m; at depth y the slice radius satisfies x² = 1.44 − y².',
        'Step 2: The lift height is 0.80 + y.',
        'Step 3: The integral evaluates to 1.44 m⁴.',
        'Step 4: W = 9.81 × π × 1.44 = 44.38 kJ.',
      ],
      finalAnswer: '44.38 kJ (Option B)',
    },
  },

  // Item 55
  {
    id: 'mstc-may2015-q55',
    number: 55,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Probability - Combinations',
    text: 'Given $nC10 = 22\\,nC12$, determine the value of n.',
    options: [
      { label: 'A', text: '12' },
      { label: 'B', text: '15' },
      { label: 'C', text: '17' },
      { label: 'D', text: '13' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Expand both combinations and cancel the common factorials.',
      formulas: [
        '\\frac{n!}{10!(n-10)!} = 22\\frac{n!}{12!(n-12)!}',
        '\\frac{12 \\cdot 11}{(n-10)(n-11)} = 22',
        '(n-10)(n-11) = 6 \\Rightarrow n = 13',
      ],
      steps: [
        'Step 1: Cancel n! from both sides.',
        'Step 2: 12·11/[(n − 10)(n − 11)] = 22.',
        'Step 3: (n − 10)(n − 11) = 132/22 = 6.',
        'Step 4: n − 10 = 3 gives n = 13.',
      ],
      finalAnswer: 'n = 13 (Option D)',
    },
  },

  // Item 56
  {
    id: 'mstc-may2015-q56',
    number: 56,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Probability - Permutations',
    text: 'How many ways can 1 president, 1 vice president and one secretary can be chosen from 14 PICE members?',
    options: [
      { label: 'A', text: '2184' },
      { label: 'B', text: '364' },
      { label: 'C', text: '1521' },
      { label: 'D', text: '1825' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The positions are distinct, so this is a permutation of 3 from 14.',
      formulas: [
        'N = {}_{14}P_3 = 14(13)(12)',
        'N = 2184 \\text{ ways}',
      ],
      steps: [
        'Step 1: Choose the president in 14 ways.',
        'Step 2: Choose the vice president in 13 ways.',
        'Step 3: Choose the secretary in 12 ways.',
        'Step 4: 14 × 13 × 12 = 2184.',
      ],
      finalAnswer: '2184 ways (Option A)',
    },
  },

  // Item 57
  {
    id: 'mstc-may2015-q57',
    number: 57,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Probability - Combinations',
    text: 'The Human Resources Manager of Ayala Land Corporation is to hire three out of ten competent applicants. How many ways can the HR Manager choose?',
    options: [
      { label: 'A', text: '156' },
      { label: 'B', text: '120' },
      { label: 'C', text: '114' },
      { label: 'D', text: '95' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Order does not matter, so this is a combination.',
      formulas: [
        'N = {}_{10}C_3 = \\frac{10!}{3!\\,7!}',
        'N = \\frac{10 \\cdot 9 \\cdot 8}{6} = 120',
      ],
      steps: [
        'Step 1: Selecting 3 of 10 without regard to order.',
        'Step 2: 10C3 = 720/6 = 120 ways.',
      ],
      finalAnswer: '120 ways (Option B)',
    },
  },

  // Item 58
  {
    id: 'mstc-may2015-q58',
    number: 58,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Probability - Binomial Distribution',
    text: 'A packet consists of 20 pieces of candy. In a thousand packets, 40 packets consist of less than 20 candies. When selecting 3 packets, what is the probability of selecting a packet with less than 20 candies?',
    options: [
      { label: 'A', text: '11%' },
      { label: 'B', text: '15%' },
      { label: 'C', text: '8%' },
      { label: 'D', text: '4%' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The chance of a short packet is 0.04; among 3 packets the probability of exactly one short packet is 3pq².',
      formulas: [
        'p = \\frac{40}{1000} = 0.04,\\quad q = 0.96',
        'P = {}_3C_1(0.04)^1(0.96)^2',
        'P = 3(0.04)(0.9216) = 0.1106 = 11\\%',
      ],
      steps: [
        'Step 1: Probability a packet has less than 20 candies is 0.04.',
        'Step 2: Binomial with n = 3 and r = 1: P = 3C1 p q².',
        'Step 3: P = 3(0.04)(0.96²) = 0.1106 ≈ 11%.',
      ],
      finalAnswer: '11% (Option A)',
    },
  },

  // Item 59
  {
    id: 'mstc-may2015-q59',
    number: 59,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Probability - Mutually Exclusive Events',
    text: 'A certain statistical observation found that it has a probability of failing once equal to 0.422, and twice equal to 0.141 and thrice equal to 0.016. Determine the probability that it will fail once or thrice.',
    options: [
      { label: 'A', text: '0.0755' },
      { label: 'B', text: '0.297' },
      { label: 'C', text: '0.0675' },
      { label: 'D', text: '0.438' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Failing once and failing thrice are mutually exclusive, so the probabilities add.',
      formulas: [
        'P(1 \\text{ or } 3) = P(1) + P(3)',
        'P = 0.422 + 0.016 = 0.438',
      ],
      steps: [
        'Step 1: The two outcomes cannot happen at once.',
        'Step 2: Add the probabilities: 0.422 + 0.016.',
        'Step 3: P = 0.438.',
      ],
      finalAnswer: '0.438 (Option D)',
    },
  },

  // Item 60
  {
    id: 'mstc-may2015-q60',
    number: 60,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Probability - Without Replacement',
    text: 'A classroom has 71 students. Ten of them are Chinese, 24 are Japanese and 37 are Filipinos. If three students are randomly asked to get out from the room, one after the other, what are the probabilities that all three are Chinese?',
    options: [
      { label: 'A', text: '0.0052' },
      { label: 'B', text: '0.0892' },
      { label: 'C', text: '0.0021' },
      { label: 'D', text: '0.0987' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Multiply the successive probabilities as the class shrinks by one each time.',
      formulas: [
        'P = \\frac{10}{71} \\cdot \\frac{9}{70} \\cdot \\frac{8}{69}',
        'P = \\frac{720}{342\\,930} = 0.0021',
      ],
      steps: [
        'Step 1: First Chinese student: 10/71.',
        'Step 2: Second: 9/70; third: 8/69.',
        'Step 3: P = 720/342 930 = 0.0021.',
      ],
      finalAnswer: '0.0021 (Option C)',
    },
  },
];

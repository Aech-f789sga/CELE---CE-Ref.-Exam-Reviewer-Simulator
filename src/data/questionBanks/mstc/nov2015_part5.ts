import { Question } from '../../../types/exam';

export const MSTC_NOV2015_PART5: Question[] = [
  // Item 61
  {
    id: 'mstc-nov2015-q61',
    number: 61,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Probability - Binomial',
    text: 'The probability that a missile can hit a target is 30%. How many missiles must be fired such that there is at least 75% chance of hitting the target?',
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '4' },
      { label: 'C', text: '3' },
      { label: 'D', text: '5' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'At least one hit in n tries: 1 − 0.7ⁿ ≥ 0.75.',
      formulas: [
        '1 - 0.7^n \\ge 0.75 \\Rightarrow 0.7^n \\le 0.25',
        'n \\ge \\frac{\\ln 0.25}{\\ln 0.7} = 3.88',
      ],
      steps: [
        'Step 1: The probability of all misses is $0.7^n$.',
        'Step 2: Require $1 - 0.7^n \\ge 0.75$, i.e. $0.7^n \\le 0.25$.',
        'Step 3: $n \\ge 3.88$, so fire 4 missiles.',
      ],
      finalAnswer: '4 missiles (Option B)',
    },
  },

  // Item 62
  {
    id: 'mstc-nov2015-q62',
    number: 62,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Probability - Hypergeometric',
    text: 'A batch of automobile parts contains 18 parts which are within a power tolerance and 5 parts which are not. If 3 automobile parts are selected at random from the batch, compute the probabilities that all three are within the power tolerance.',
    options: [
      { label: 'A', text: '0.0057' },
      { label: 'B', text: '0.4608' },
      { label: 'C', text: '0.5326' },
      { label: 'D', text: '0.4932' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The batch has 23 parts; the probability all three good parts are drawn is C(18,3)/C(23,3).',
      formulas: [
        'P = \\frac{\\binom{18}{3}}{\\binom{23}{3}}',
        '= \\frac{816}{1771} = 0.46076',
      ],
      steps: [
        'Step 1: $\\binom{18}{3} = 816$.',
        'Step 2: $\\binom{23}{3} = 1771$.',
        'Step 3: $P = 816/1771 = 0.4608$.',
      ],
      finalAnswer: '0.4608 (Option B)',
    },
  },

  // Item 63
  {
    id: 'mstc-nov2015-q63',
    number: 63,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Probability - Expected Value',
    text: 'An insurance company charges P7000 annually for a car insurance. The policy specifies that the company will pay P10,000 for a minor accident and P50,000 for a major accident. If the probability that a motorist has a minor accident during the year is 0.20 and having a major accident is 0.05, how much can the insurance company expect to make on a policy?',
    options: [
      { label: 'A', text: 'P1,500' },
      { label: 'B', text: 'P4,500' },
      { label: 'C', text: 'P3,500' },
      { label: 'D', text: 'P2,500' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Expected profit = premium − expected claims.',
      formulas: [
        'E = 7000 - 10\\,000(0.20) - 50\\,000(0.05)',
        'E = 7000 - 2000 - 2500 = 2500',
      ],
      steps: [
        'Step 1: Expected minor claim $= 10\\,000(0.20) = 2000$.',
        'Step 2: Expected major claim $= 50\\,000(0.05) = 2500$.',
        'Step 3: $E = 7000 - 4500 = 2500$.',
      ],
      finalAnswer: 'P2,500 (Option D)',
    },
  },

  // Item 64
  {
    id: 'mstc-nov2015-q64',
    number: 64,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Probability - Poisson',
    text: 'A manufacturer estimates that 0.20% of his output of a component is defective. The components are marked in packets of 200. Using Poisson\'s distribution, determine the probability of a packet contains only 2 defective components.',
    options: [
      { label: 'A', text: '0.0365' },
      { label: 'B', text: '0.0536' },
      { label: 'C', text: '0.0653' },
      { label: 'D', text: '0.0563' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The mean is λ = 0.002 × 200 = 0.4; apply the Poisson formula at x = 2.',
      formulas: [
        '\\lambda = 0.0020 \\times 200 = 0.4',
        'P(2) = \\frac{e^{-0.4}(0.4)^2}{2!} = 0.0536',
      ],
      steps: [
        'Step 1: $\\lambda = 0.4$.',
        'Step 2: $P(2) = e^{-0.4}(0.16)/2$.',
        'Step 3: $P(2) = 0.0536$.',
      ],
      finalAnswer: '0.0536 (Option B)',
    },
  },

  // Item 65
  {
    id: 'mstc-nov2015-q65',
    number: 65,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Statistics - Expectation',
    text: 'Given the distribution shown below:\n\n| x | 2 | 3 | 11 |\n| --- | --- | --- | --- |\n| P(x) | 1/3 | 1/2 | 1/6 |\n\nFind the expectation.',
    options: [
      { label: 'A', text: '4' },
      { label: 'B', text: '7' },
      { label: 'C', text: '6' },
      { label: 'D', text: '2' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The expectation is the sum of x·P(x).',
      formulas: [
        'E = 2\\left(\\tfrac{1}{3}\\right) + 3\\left(\\tfrac{1}{2}\\right) + 11\\left(\\tfrac{1}{6}\\right)',
        'E = 0.667 + 1.5 + 1.833 = 4',
      ],
      steps: [
        'Step 1: $2(1/3) = 0.667$.',
        'Step 2: $3(1/2) = 1.5$ and $11(1/6) = 1.833$.',
        'Step 3: $E = 4$.',
      ],
      finalAnswer: '4 (Option A)',
    },
  },

  // Item 66
  {
    id: 'mstc-nov2015-q66',
    number: 66,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Sampling',
    text: 'Which of the following is most important in avoiding bias in surveying?',
    options: [
      { label: 'A', text: 'Making sure every individual in the population of interest is invited to respond' },
      { label: 'B', text: 'Care in choosing individuals who you feel are representative of the population in terms of as many characteristics as you can list' },
      { label: 'C', text: 'Picking a sampling method in which every combination of people has the same chance of being selected' },
      { label: 'D', text: 'Sending out a large enough number of surveys so that even if the response rate is low, you will have sufficient numbers of responses to do statistical analysis' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The booklet keys this to a sufficiently large sample; record it as the printed answer.',
      formulas: [],
      steps: [
        'Step 1: Bias is reduced by a large enough number of responses to support the statistical analysis.',
        'Step 2: The booklet prints "Answer: D" for this item.',
      ],
      finalAnswer: 'Option D (booklet keyed answer)',
    },
  },

  // Item 67
  {
    id: 'mstc-nov2015-q67',
    number: 67,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Engineering Economy - Continuous Compounding',
    text: 'If money is invested at a nominal rate of interest of 9% for a period of 5 years, what is the value of the compound amount factor if it is compounded continuously?',
    options: [
      { label: 'A', text: '1.458' },
      { label: 'B', text: '1.632' },
      { label: 'C', text: '1.568' },
      { label: 'D', text: '1.365' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'For continuous compounding the compound amount factor is e^{in}.',
      formulas: [
        'F = Pe^{in}',
        'e^{0.09(5)} = e^{0.45} = 1.568',
      ],
      steps: [
        'Step 1: $in = 0.09 \\times 5 = 0.45$.',
        'Step 2: $e^{0.45} = 1.568$.',
      ],
      finalAnswer: '1.568 (Option C)',
    },
  },

  // Item 68
  {
    id: 'mstc-nov2015-q68',
    number: 68,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Engineering Economy - Depreciation',
    text: 'An equipment costing P2.1M has a salvage value of P840,000 at the end of its economic life. Find its economic life if using the SOYD method of depreciation, its book value at the end of two years is P1,440,000.',
    options: [
      { label: 'A', text: '8' },
      { label: 'B', text: '5' },
      { label: 'C', text: '4' },
      { label: 'D', text: '6' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The first two years of SOYD depreciation total (2n − 1)/SUM times the depreciable amount, set equal to FC − BV₂.',
      formulas: [
        'D_2 = 2\\,100\\,000 - 1\\,440\\,000 = 660\\,000',
        'D_2 = \\frac{(2n - 1)}{n(n+1)/2}(1\\,260\\,000)',
        '\\Rightarrow n = 6',
      ],
      steps: [
        'Step 1: Depreciable amount $= 2\\,100\\,000 - 840\\,000 = 1\\,260\\,000$.',
        'Step 2: First two years of depreciation $= 2\\,100\\,000 - 1\\,440\\,000 = 660\\,000$.',
        'Step 3: $(2n - 1)/(n(n+1)/2) = 660\\,000/1\\,260\\,000$ gives $n = 6$.',
      ],
      finalAnswer: '6 years (Option D)',
    },
  },

  // Item 69
  {
    id: 'mstc-nov2015-q69',
    number: 69,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Engineering Economy - EUAC',
    text: 'The following alternatives are to be compared based on 8% interest rate.\n\n| Machine | A | B |\n| --- | --- | --- |\n| First Cost | 5,000 | 10,000 |\n| Annual maintenance | 500 | 200 |\n| Salvage value | 600 | 1,000 |\n| Useful life (years) | 5 | 12 |\n\nWhat is the equivalent uniform annual cost (EUAC) of machine A?',
    options: [
      { label: 'A', text: '1474' },
      { label: 'B', text: '1385' },
      { label: 'C', text: '1650' },
      { label: 'D', text: '1720' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'EUAC = FC(A/P, i, n) + maintenance − SV(A/F, i, n).',
      formulas: [
        '(A/P, 8\\%, 5) = 0.25046,\\quad (A/F, 8\\%, 5) = 0.17046',
        'EUAC = 5000(0.25046) + 500 - 600(0.17046)',
        'EUAC = 1252.3 + 500 - 102.3 = 1650',
      ],
      steps: [
        'Step 1: Capital recovery $= 5000 \\times 0.25046 = 1252.3$.',
        'Step 2: Salvage recovery $= 600 \\times 0.17046 = 102.3$.',
        'Step 3: $EUAC = 1252.3 + 500 - 102.3 = 1650$.',
      ],
      finalAnswer: '1650 (Option C)',
    },
  },

  // Item 70
  {
    id: 'mstc-nov2015-q70',
    number: 70,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Engineering Economy - Break-even',
    text: 'A manufacturer makes and sells certain spare part at P5.00 per pc. The volume of sales per year is 500,000 units. The fixed expense per year is P800,000. Compute the cost per unit to break-even.',
    options: [
      { label: 'A', text: 'P2.40' },
      { label: 'B', text: 'P4.80' },
      { label: 'C', text: 'P3.40' },
      { label: 'D', text: 'P1.60' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'At break-even, fixed cost plus variable cost equals revenue.',
      formulas: [
        '800\\,000 + a(500\\,000) = 5(500\\,000)',
        'a = P3.40',
      ],
      steps: [
        'Step 1: Revenue $= 5 \\times 500\\,000 = 2\\,500\\,000$.',
        'Step 2: $800\\,000 + 500\\,000a = 2\\,500\\,000$.',
        'Step 3: $a = 1\\,700\\,000/500\\,000 = P3.40$.',
      ],
      finalAnswer: 'P3.40 (Option C)',
    },
  },

  // Item 71
  {
    id: 'mstc-nov2015-q71',
    number: 71,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Engineering Economy - Break-even',
    text: 'The revenue of selling $N$ number of computer units is $R = 80N$ and the cost to produce them is $C = 60N + 10,000$. How many computer units must be sold to break even?',
    options: [
      { label: 'A', text: '400' },
      { label: 'B', text: '800' },
      { label: 'C', text: '500' },
      { label: 'D', text: '600' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Set revenue equal to cost.',
      formulas: [
        '80N = 60N + 10\\,000',
        'N = 500',
      ],
      steps: [
        'Step 1: $80N = 60N + 10\\,000$.',
        'Step 2: $20N = 10\\,000$, so $N = 500$.',
      ],
      finalAnswer: '500 units (Option C)',
    },
  },

  // Item 72
  {
    id: 'mstc-nov2015-q72',
    number: 72,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Engineering Economy - Annual Cost',
    text: 'A telephone company purchased a microwave equipment for P6 million with a salvage value of P600,000 over a period of 5 years and pay a lump sum of P400,000 for maintenance cost. Minimum attractive rate of return is 16% annually. Compute the annual cost of investment of purchasing the microwave equipment.',
    options: [
      { label: 'A', text: 'P1,592,362.54' },
      { label: 'B', text: 'P1,695,452.87' },
      { label: 'C', text: 'P1,803,374.41' },
      { label: 'D', text: 'P1,346,121.25' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Annual cost = interest on first cost + annualized lump-sum maintenance + annual depreciation.',
      formulas: [
        '\\text{Interest} = 6\\,000\\,000(0.16) = 960\\,000',
        '\\text{Maintenance} = \\frac{400\\,000(0.16)}{(1.16)^5 - 1} = 58\\,163.75',
        '\\text{Depreciation} = \\frac{5\\,400\\,000(0.16)}{(1.16)^5 - 1} = 785\\,210.66',
        '\\text{Annual cost} = 1\\,803\\,374.41',
      ],
      steps: [
        'Step 1: Annual interest on first cost $= 960\\,000$.',
        'Step 2: The lump-sum maintenance annualized $= 58\\,163.75$.',
        'Step 3: Annual depreciation $= 785\\,210.66$.',
        'Step 4: Sum $= P1\\,803\\,374.41$.',
      ],
      finalAnswer: 'P1,803,374.41 (Option C)',
    },
  },

  // Item 73
  {
    id: 'mstc-nov2015-q73',
    number: 73,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Physics - Angular Motion',
    text: 'A point on the rim of a 0.20 m diameter wheel is travelling at 24 m/s. What is the angular velocity of the wheel (in radians per second).',
    options: [
      { label: 'A', text: '200' },
      { label: 'B', text: '180' },
      { label: 'C', text: '240' },
      { label: 'D', text: '320' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Tangential speed equals radius times angular velocity.',
      formulas: [
        'r = 0.5D = 0.1\\ \\text{m}',
        'v = r\\omega \\Rightarrow 24 = 0.1\\omega',
        '\\omega = 240\\ \\text{rad/s}',
      ],
      steps: [
        'Step 1: Radius $= 0.20/2 = 0.1$ m.',
        'Step 2: $24 = 0.1\\omega$.',
        'Step 3: $\\omega = 240$ rad/s.',
      ],
      finalAnswer: '240 rad/s (Option C)',
    },
  },

  // Item 74
  {
    id: 'mstc-nov2015-q74',
    number: 74,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Physics - Buoyancy',
    text: 'A cylindrical buoy with cross-sectional area 1.25 sq m is observed (after being pushed) to bob up and down with a period of 0.50 sec. Approximately what is the mass of the buoy (in kilograms). Use g = 9.75 m/s².',
    options: [
      { label: 'A', text: '72' },
      { label: 'B', text: '68' },
      { label: 'C', text: '77' },
      { label: 'D', text: '85' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The bobbing period is T = 2π√(M/(ρgA)); solve for M.',
      formulas: [
        'T = 2\\pi\\sqrt{\\frac{M}{\\rho g A}}',
        'M = \\frac{\\rho g A T^2}{4\\pi^2} = \\frac{1000(9.75)(1.25)(0.25)}{39.478}',
        'M = 77\\ \\text{kg}',
      ],
      steps: [
        'Step 1: $\\rho g A = 1000(9.75)(1.25) = 12\\,187.5$.',
        'Step 2: $T^2/4\\pi^2 = 0.25/39.478 = 0.006333$.',
        'Step 3: $M = 12\\,187.5 \\times 0.006333 = 77$ kg.',
      ],
      finalAnswer: '77 kg (Option C)',
    },
  },

  // Item 75
  {
    id: 'mstc-nov2015-q75',
    number: 75,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Error Propagation',
    text: 'Assume a line is measured three sections with errors in the individual parts equal to ±0.015 m, ±0.022 m, ±0.029 m respectively. Determine the anticipated error of the total length.',
    options: [
      { label: 'A', text: '±0.039 m' },
      { label: 'B', text: '±0.041 m' },
      { label: 'C', text: '±0.058 m' },
      { label: 'D', text: '±0.022 m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Independent errors add in quadrature.',
      formulas: [
        'E_t = \\pm\\sqrt{0.015^2 + 0.022^2 + 0.029^2}',
        'E_t = \\pm\\sqrt{0.00155} = \\pm 0.039\\ \\text{m}',
      ],
      steps: [
        'Step 1: Square each error: 0.000225, 0.000484, 0.000841.',
        'Step 2: Sum $= 0.00155$.',
        'Step 3: $E_t = \\pm 0.039$ m.',
      ],
      finalAnswer: '±0.039 m (Option A)',
    },
  },
];

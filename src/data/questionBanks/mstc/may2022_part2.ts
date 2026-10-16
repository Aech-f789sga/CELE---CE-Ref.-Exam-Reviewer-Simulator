import { Question } from '../../../types/exam';

export const MSTC_MAY2022_PART2: Question[] = [
  // Item 16
  {
    id: 'mstc-may2022-q16',
    number: 16,
    pageNumber: 374,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Differential Equations - Newton\'s Law of Cooling',
    text: 'When a cake is removed from an oven, its temperature is measured at 300 °F. Three minutes later its temperature is 200 °F. How long will it take for the cake to cool off to a room temperature of 70 °F? Formulate to know the temperature of the cake at t minutes.\nA. T = 70 - 230 e^(kt)\nB. T = 70 + 230 e^(kt)\nC. T = 70 + 250 e^(kt)\nD. T = 70 - 250 e^(kt)',
    options: [
      { label: 'A', text: 'T = 70 - 230 e^(kt)' },
      { label: 'B', text: 'T = 70 + 230 e^(kt)' },
      { label: 'C', text: 'T = 70 + 250 e^(kt)' },
      { label: 'D', text: 'T = 70 - 250 e^(kt)' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Integrate the differential equation dT/dt = k(T - Ts) with initial condition T(0) = 300 °F and Ts = 70 °F.',
      formulas: [
        '\\frac{dT}{dt} = k(T - T_s)',
        '\\int_{300}^T \\frac{dT}{T - 70} = k \\int_0^t dt',
        '\\ln(T - 70) - \\ln(230) = kt',
        'T = 70 + 230 e^{kt}',
      ],
      steps: [
        'Step 1: Newton\'s law of cooling: dT/dt = k(T - Ts), where surrounding room temperature Ts = 70 °F.',
        'Step 2: Separate variables: dT / (T - 70) = k dt.',
        'Step 3: Integrate both sides: ln(T - 70) = kt + C.',
        'Step 4: At t = 0, T = 300 °F: ln(300 - 70) = ln(230) = C.',
        'Step 5: ln(T - 70) = kt + ln(230) => T - 70 = 230 e^(kt).',
        'Step 6: Therefore, T = 70 + 230 e^(kt) (Option B).',
      ],
      finalAnswer: 'T = 70 + 230 e^(kt) (Option B)',
      pageNumber: 390,
    },
  },

  // Item 17
  {
    id: 'mstc-may2022-q17',
    number: 17,
    pageNumber: 375,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Multivariable Calculus - Directional Derivative & Gradient',
    text: 'The temperature in a rectangular box is approximated by\nT(x,y,z) = xyz(1 - x)(2 - y)(3 - z), 0 ≤ x ≤ 1.0, 0 ≤ y ≤ 2.0, 0 ≤ z ≤ 3.0.\nIf the mosquito is located at (1/2, 1, 1), in which direction should it fly to cool off as rapidly as possible?\nA. The mosquito should fly in the direction -k/4\nB. The mosquito should fly in the direction k/4\nC. The mosquito should fly in the direction -j/2\nD. The mosquito should fly in the direction k/2',
    options: [
      { label: 'A', text: 'The mosquito should fly in the direction -k/4' },
      { label: 'B', text: 'The mosquito should fly in the direction k/4' },
      { label: 'C', text: 'The mosquito should fly in the direction -j/2' },
      { label: 'D', text: 'The mosquito should fly in the direction k/2' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute the gradient vector ∇T at the given point; the direction of steepest temperature drop is given by -∇T.',
      formulas: [
        '\\nabla T = \\frac{\\partial T}{\\partial x}\\mathbf{i} + \\frac{\\partial T}{\\partial y}\\mathbf{j} + \\frac{\\partial T}{\\partial z}\\mathbf{k}',
        '\\left.\\nabla T\\right|_{(1/2, 1, 1)} = 0\\mathbf{i} + 0\\mathbf{j} + \\frac{1}{4}\\mathbf{k}',
        '\\vec{v} = -\\nabla T = -\\frac{1}{4}\\mathbf{k}',
      ],
      steps: [
        'Step 1: ∂T/∂x = yz(1 - 2x)(2 - y)(3 - z). At (1/2, 1, 1), 1 - 2(1/2) = 0, so ∂T/∂x = 0.',
        'Step 2: ∂T/∂y = xz(1 - x)(2 - 2y)(3 - z). At (1/2, 1, 1), 2 - 2(1) = 0, so ∂T/∂y = 0.',
        'Step 3: ∂T/∂z = xy(1 - x)(2 - y)(3 - 2z). At (1/2, 1, 1), (1/2)(1)(1 - 1/2)(2 - 1)(3 - 2) = (1/2)(1/2)(1)(1) = 1/4.',
        'Step 4: Gradient of temperature: ∇T = 0i + 0j + (1/4)k.',
        'Step 5: To cool off as rapidly as possible, move in the direction of steepest descent: -∇T = -k/4 (Option A).',
      ],
      finalAnswer: 'The mosquito should fly in the direction -k/4 (Option A)',
      pageNumber: 391,
    },
  },

  // Item 18
  {
    id: 'mstc-may2022-q18',
    number: 18,
    pageNumber: 375,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Differential Calculus - Cauchy\'s Mean Value Theorem',
    text: 'Find the value of x₀ prescribed by the extended law of the mean when f(x) = 3x + 2 and g(x) = x² + 1 on (1, 4).\nA. 1.5\nB. 2.5\nC. 3.5\nD. 2.0',
    options: [
      { label: 'A', text: '1.5' },
      { label: 'B', text: '2.5' },
      { label: 'C', text: '3.5' },
      { label: 'D', text: '2.0' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Apply Cauchy\'s Extended Mean Value Theorem: [f\'(x₀)] / [g\'(x₀)] = [f(b) - f(a)] / [g(b) - g(a)].',
      formulas: [
        '\\frac{f\'(x_0)}{g\'(x_0)} = \\frac{f(b) - f(a)}{g(b) - g(a)}',
        '\\frac{3}{2x_0} = \\frac{14 - 5}{17 - 2} = \\frac{9}{15} = \\frac{3}{5}',
        '2x_0 = 5 \\implies x_0 = 2.5',
      ],
      steps: [
        'Step 1: Calculate endpoints for interval [1, 4]:',
        'Step 2: f(1) = 3(1) + 2 = 5, f(4) = 3(4) + 2 = 14 => f(4) - f(1) = 9.',
        'Step 3: g(1) = 1² + 1 = 2, g(4) = 4² + 1 = 17 => g(4) - g(1) = 15.',
        'Step 4: Ratio: [f(4) - f(1)] / [g(4) - g(1)] = 9 / 15 = 3 / 5.',
        'Step 5: Derivatives: f\'(x₀) = 3, g\'(x₀) = 2x₀.',
        'Step 6: Equate: 3 / (2x₀) = 3 / 5 => 2x₀ = 5 => x₀ = 5/2 = 2.5 (Option B).',
      ],
      finalAnswer: '2.5 (Option B)',
      pageNumber: 392,
    },
  },

  // Item 19
  {
    id: 'mstc-may2022-q19',
    number: 19,
    pageNumber: 375,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Probability & Statistics - Expected Value & Insurance Profit',
    text: 'An insurance company charges P80,000 annually for a car insurance, the policy specifies that the company will pay P100,000 for a minor accident and P500,000 for a major accident. If the probability of a motorist having a minor accident during the year is 0.2 and of having a major accident of 0.05, how much can the insurance company expect to make on a policy?\nA. P30,000\nB. P20,000\nC. P25,000\nD. P35,000',
    options: [
      { label: 'A', text: 'P30,000' },
      { label: 'B', text: 'P20,000' },
      { label: 'C', text: 'P25,000' },
      { label: 'D', text: 'P35,000' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute the expected payout per policy and subtract it from the annual insurance premium.',
      formulas: [
        'E = 100{,}000(0.2) + 500{,}000(0.05) = 45{,}000',
        'P = 80{,}000 - 45{,}000 = 35{,}000',
      ],
      steps: [
        'Step 1: Expected payout = 100,000(0.2) + 500,000(0.05).',
        'Step 2: Expected payout = 20,000 + 25,000 = P45,000.',
        'Step 3: Annual premium collected = P80,000.',
        'Step 4: Expected profit = 80,000 - 45,000 = P35,000 (Option D).',
      ],
      finalAnswer: 'P35,000 (Option D)',
      pageNumber: 393,
    },
  },

  // Item 20
  {
    id: 'mstc-may2022-q20',
    number: 20,
    pageNumber: 375,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Engineering Economy - Arithmetic Gradient Present Worth',
    text: 'The maintenance of Isuzu diesel engine is expected to be $155 at the end of the first year and it is expected to increase $35 each year for the following years. What sum of money should be set aside now to pay the maintenance for the eight-year period? Assume MARR to be 6%.\nPresent worth factor (P/A, 6%, 8) = 6.2098\nSinking fund factor (A/F, 6%, 8) = 0.1010\nCompound amount factor (F/A, 6%, 8) = 9.897\nUniform gradient series factor (P/G, 6%, 8) = 19.845\nA. $1756\nB. $1687\nC. $1657\nD. $1776',
    options: [
      { label: 'A', text: '$1756' },
      { label: 'B', text: '$1687' },
      { label: 'C', text: '$1657' },
      { label: 'D', text: '$1776' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Combine the uniform annual series present worth with the arithmetic gradient series present worth.',
      formulas: [
        'P = A(P/A, i, n) + G(P/G, i, n)',
        'P = 155(6.2098) + 35(19.845) = 1657.094 \\approx 1657',
      ],
      steps: [
        'Step 1: Base payment A = $155, gradient increase G = $35, period n = 8 years, interest i = 6%.',
        'Step 2: P_base = A(P/A, 6%, 8) = 155 × 6.2098 = $962.519.',
        'Step 3: P_gradient = G(P/G, 6%, 8) = 35 × 19.845 = $694.575.',
        'Step 4: Total present worth P = 962.519 + 694.575 = $1657.094 ≈ $1657 (Option C).',
      ],
      finalAnswer: '$1657 (Option C)',
      pageNumber: 393,
    },
  },

  // Item 21
  {
    id: 'mstc-may2022-q21',
    number: 21,
    pageNumber: 376,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Engineering Economy - Equipment Purchase vs Rental Break-Even',
    text: 'A contractor can buy a dump trucks for P800,000 each (surplus) or rent them for P1,189 per truck per day. The truck has salvage value of P100,000 at the end of its useful life of 5 years. Annual cost of maintenance is P20,000. If money is worth 14% per annum, determine the number of days per year that a truck must be used to warrant the purchase of the truck.\nA. 199\nB. 197\nC. 200\nD. 198',
    options: [
      { label: 'A', text: '199' },
      { label: 'B', text: '197' },
      { label: 'C', text: '200' },
      { label: 'D', text: '198' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Equate the annual cost of ownership (capital recovery plus maintenance) to annual rental cost.',
      formulas: [
        'C_o = (FC)i + OM + \\frac{(FC - SV)i}{(1 + i)^n - 1}',
        'C_o = 800{,}000(0.14) + 20{,}000 + \\frac{(800{,}000 - 100{,}000)(0.14)}{(1.14)^5 - 1} = 237{,}898.50',
        'C_r = 1{,}189x',
        '1{,}189x = 237{,}898.50 \\implies x \\approx 200',
      ],
      steps: [
        'Step 1: First cost FC = P800,000, salvage value SV = P100,000, life n = 5 yrs, interest i = 14%, maintenance OM = P20,000.',
        'Step 2: Depreciation factor (A/F, 14%, 5) = 0.14 / [(1.14)^5 - 1] = 0.14 / 0.925414 = 0.151283.',
        'Step 3: Annual depreciation = (800,000 - 100,000) × 0.151283 = P105,898.50.',
        'Step 4: Interest on capital = 800,000 × 0.14 = P112,000.',
        'Step 5: Total annual cost of ownership AC_own = 112,000 + 20,000 + 105,898.50 = P237,898.50.',
        'Step 6: Rental cost per year for x days = 1,189x.',
        'Step 7: 1,189x = 237,898.50 => x = 200.08 ≈ 200 days per year (Option C).',
      ],
      finalAnswer: '200 (Option C)',
      pageNumber: 394,
    },
  },

  // Item 22
  {
    id: 'mstc-may2022-q22',
    number: 22,
    pageNumber: 376,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Engineering Economy - Compound Inflation',
    text: 'In 1991, the average cost of a house is Php1,000,000. If the annual inflation rate is 6%, what is the value of a house of the same model in 1996?\nA. Php1,563,325\nB. Php1,338,226\nC. Php1,632,857\nD. Php1,158,254',
    options: [
      { label: 'A', text: 'Php1,563,325' },
      { label: 'B', text: 'Php1,338,226' },
      { label: 'C', text: 'Php1,632,857' },
      { label: 'D', text: 'Php1,158,254' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Calculate future cost under constant annual compound inflation over 5 years.',
      formulas: [
        'F = P(1 + i)^n',
        'F = 1{,}000{,}000(1 + 0.06)^5 = 1{,}338{,}225.60 \\approx 1{,}338{,}226',
      ],
      steps: [
        'Step 1: Present value in 1991: P = Php1,000,000.',
        'Step 2: Number of years to 1996: n = 1996 - 1991 = 5 years.',
        'Step 3: Inflation rate: i = 6% = 0.06.',
        'Step 4: F = 1,000,000(1 + 0.06)^5 = 1,000,000(1.338225578) = Php1,338,225.60 ≈ Php1,338,226 (Option B).',
      ],
      finalAnswer: 'Php1,338,226 (Option B)',
      pageNumber: 394,
    },
  },

  // Item 23
  {
    id: 'mstc-may2022-q23',
    number: 23,
    pageNumber: 376,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Physics & Mechanics - Hooke\'s Law Spring Deflection',
    text: 'When a family of four with a total mass of 200 kg step into their 1200 kg car, the car spring compresses 3 cm. Assuming that they act as a single spring, how far will the car lower if loaded with 300 kg rather than 200 kg?\nA. 0.050 m\nB. 0.065 m\nC. 0.045 m\nD. 0.075 m',
    options: [
      { label: 'A', text: '0.050 m' },
      { label: 'B', text: '0.065 m' },
      { label: 'C', text: '0.045 m' },
      { label: 'D', text: '0.075 m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Use Hooke\'s law proportionality where deflection is directly proportional to applied live load.',
      formulas: [
        '\\frac{F_1}{x_1} = \\frac{F_2}{x_2} = K',
        'x_2 = x_1 \\left(\\frac{m_2}{m_1}\\right) = 0.03\\left(\\frac{300}{200}\\right) = 0.045',
      ],
      steps: [
        'Step 1: Under load m1 = 200 kg, spring deflection x1 = 3 cm = 0.03 m.',
        'Step 2: By Hooke\'s law: x2 / x1 = m2 / m1.',
        'Step 3: x2 = 3 cm × (300 kg / 200 kg) = 4.5 cm.',
        'Step 4: Convert to meters: 4.5 cm = 0.045 m (Option C).',
      ],
      finalAnswer: '0.045 m (Option C)',
      pageNumber: 395,
    },
  },

  // Item 24
  {
    id: 'mstc-may2022-q24',
    number: 24,
    pageNumber: 376,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Physics & Mechanics - Dynamic Impact on Coiled Spring',
    text: 'A ball of mass = 2.60 kg, starting from rest, falls a vertical distance h = 55 cm before striking a vertical coiled spring which it compresses an amount equal to 15 cm. Determine the spring stiffness constant K of the spring.\nA. 1885 N/m\nB. 1555 N/m\nC. 1568 N/m\nD. 1585 N/m',
    options: [
      { label: 'A', text: '1885 N/m' },
      { label: 'B', text: '1555 N/m' },
      { label: 'C', text: '1568 N/m' },
      { label: 'D', text: '1585 N/m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Equate total gravitational potential energy lost to elastic strain energy stored in the compressed spring.',
      formulas: [
        'mg(h + \\delta) = \\frac{1}{2} K \\delta^2',
        '2.60(9.81)(0.55 + 0.15) = \\frac{1}{2} K (0.15)^2',
        '17.8542 = 0.01125 K \\implies K \\approx 1587.04 \\approx 1585',
      ],
      steps: [
        'Step 1: Mass m = 2.60 kg, free fall height h = 0.55 m, dynamic deformation δ = 0.15 m.',
        'Step 2: Total vertical displacement = h + δ = 0.55 + 0.15 = 0.70 m.',
        'Step 3: Total potential energy lost = mg(h + δ) = 2.60 × 9.81 × 0.70 = 17.8542 J.',
        'Step 4: Elastic energy stored in spring = (1/2) K δ² = (1/2) K (0.15)² = 0.01125 K.',
        'Step 5: 0.01125 K = 17.8542 => K = 17.8542 / 0.01125 = 1587.04 N/m ≈ 1585 N/m (Option D).',
      ],
      finalAnswer: '1585 N/m (Option D)',
      pageNumber: 395,
    },
  },

  // Item 25
  {
    id: 'mstc-may2022-q25',
    number: 25,
    pageNumber: 376,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Physics & Mechanics - Work, Friction & Power Output',
    text: 'A man pushes a 50.0 kg box across a level floor at a constant speed of 1.00 m/s for 10.0 s. If the coefficient of friction between the box and the floor is 0.200, determine the average power output by the man.\nA. 89 Watts\nB. 98 Watts\nC. 101 Watts\nD. 110 Watts',
    options: [
      { label: 'A', text: '89 Watts' },
      { label: 'B', text: '98 Watts' },
      { label: 'C', text: '101 Watts' },
      { label: 'D', text: '110 Watts' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'At constant speed, applied force balances dynamic friction; power equals force times velocity.',
      formulas: [
        'N = mg = 50.0(9.81) = 490.5',
        'f = \\mu N = 0.200(490.5) = 98.1',
        'P = F \\cdot v = 98.1(1.00) = 98.1 \\approx 98',
      ],
      steps: [
        'Step 1: Normal force N = mg = 50.0 kg × 9.81 m/s² = 490.5 N.',
        'Step 2: Friction force f = μ N = 0.200 × 490.5 N = 98.1 N.',
        'Step 3: Since acceleration a = 0 (constant speed), applied force F = f = 98.1 N.',
        'Step 4: Power = F × v = 98.1 N × 1.00 m/s = 98.1 Watts ≈ 98 Watts (Option B).',
      ],
      finalAnswer: '98 Watts (Option B)',
      pageNumber: 396,
    },
  },

  // Item 26
  {
    id: 'mstc-may2022-q26',
    number: 26,
    pageNumber: 376,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Physics - Circular Motion & Centripetal Acceleration',
    text: 'A 150-g ball at the end of a string is revolving uniformly in a horizontal circle of radius 0.600 m. The ball makes 2 revolutions in a second. What is its centripetal acceleration?\nA. 97.54 m/s²\nB. 97.45 m/s²\nC. 95.74 m/s²\nD. 94.75 m/s²',
    options: [
      { label: 'A', text: '97.54 m/s²' },
      { label: 'B', text: '97.45 m/s²' },
      { label: 'C', text: '95.74 m/s²' },
      { label: 'D', text: '94.75 m/s²' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Convert rotational speed to radians per second and evaluate centripetal acceleration a = ω² r.',
      formulas: [
        '\\omega = 2(2\\pi) = 4\\pi',
        'a_c = \\omega^2 r = (4\\pi)^2(0.600) \\approx 94.75',
      ],
      steps: [
        'Step 1: Angular velocity ω = 2 rev/s × 2π rad/rev = 4π rad/s.',
        'Step 2: Radius r = 0.600 m.',
        'Step 3: a = ω² r = (4π)² (0.600) = 16π² (0.600) = 9.6π².',
        'Step 4: a = 9.6 × 9.8696044 = 94.748 m/s² ≈ 94.75 m/s² (Option D).',
      ],
      finalAnswer: '94.75 m/s² (Option D)',
      pageNumber: 396,
    },
  },

  // Item 27
  {
    id: 'mstc-may2022-q27',
    number: 27,
    pageNumber: 377,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Probability & Combinatorics - Fundamental Counting Principle',
    text: 'A music school produced a number of musicians which includes 3 drummers, 4 trumpet players and 5 pianists. How many different jazz trios can be formed from this batch of musicians if each trio consists of a drummer, a trumpet player and a pianist?\nA. 40\nB. 60\nC. 50\nD. 70',
    options: [
      { label: 'A', text: '40' },
      { label: 'B', text: '60' },
      { label: 'C', text: '50' },
      { label: 'D', text: '70' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Apply the product rule: number of ways to pick one from each category.',
      formulas: [
        'N = n_1 \\cdot n_2 \\cdot n_3 = 3 \\times 4 \\times 5 = 60',
      ],
      steps: [
        'Step 1: Available musicians: 3 drummers, 4 trumpet players, and 5 pianists.',
        'Step 2: Each jazz trio requires exactly 1 drummer, 1 trumpet player, and 1 pianist.',
        'Step 3: Total trios N = 3 × 4 × 5 = 60 (Option B).',
      ],
      finalAnswer: '60 (Option B)',
      pageNumber: 396,
    },
  },

  // Item 28
  {
    id: 'mstc-may2022-q28',
    number: 28,
    pageNumber: 377,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Probability & Combinatorics - Permutations with Repetition',
    text: 'A company is designing fences using different widths of wooden boards. They have 5 boards that are 2 inches wide, 10 boards that are 3 inches wide, and 5 boards that are 4 inches wide. How many ways can the fence be designed using all these boards?\nA. 15,504\nB. 46,558,512\nC. 5,587,021,440\nD. 75,632,458',
    options: [
      { label: 'A', text: '15,504' },
      { label: 'B', text: '46,558,512' },
      { label: 'C', text: '5,587,021,440' },
      { label: 'D', text: '75,632,458' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Calculate the permutations of a multiset of 20 items with repeated elements of sizes 5, 10, and 5.',
      formulas: [
        'N = \\frac{n!}{n_1! \\, n_2! \\, n_3!}',
        'N = \\frac{20!}{5! \\, 10! \\, 5!} = 46{,}558{,}512',
      ],
      steps: [
        'Step 1: Total boards = 5 + 10 + 5 = 20 boards.',
        'Step 2: Identical boards: 5 of 2-inch, 10 of 3-inch, and 5 of 4-inch.',
        'Step 3: Distinct linear arrangements N = 20! / (5! × 10! × 5!).',
        'Step 4: 20! / 10! = 20 × 19 × 18 × 17 × 16 × 15 × 14 × 13 × 12 × 11 = 670,442,572,800.',
        'Step 5: 5! × 5! = 120 × 120 = 14,400.',
        'Step 6: N = 670,442,572,800 / 14,400 = 46,558,512 ways (Option B).',
      ],
      finalAnswer: '46,558,512 (Option B)',
      pageNumber: 397,
    },
  },

  // Item 29
  {
    id: 'mstc-may2022-q29',
    number: 29,
    pageNumber: 377,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Probability & Statistics - Binomial Probability Distribution',
    text: 'A test consists of 6 multiple choice questions. To pass the test, a student must answer at least 4 questions correctly. Each question has 3 possible answers, of which only one is correct. If a student guesses on each question, what is the probability that the student will pass the test?\nA. 0.2001\nB. 0.3001\nC. 0.0200\nD. 0.1001',
    options: [
      { label: 'A', text: '0.2001' },
      { label: 'B', text: '0.3001' },
      { label: 'C', text: '0.0200' },
      { label: 'D', text: '0.1001' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Sum the binomial probabilities of answering exactly 4, 5, and 6 questions correctly out of 6 questions.',
      formulas: [
        'P(X = k) = \\binom{n}{k} p^k q^{n-k}',
        'P(X \\ge 4) = \\binom{6}{4}\\left(\\frac{1}{3}\\right)^4\\left(\\frac{2}{3}\\right)^2 + \\binom{6}{5}\\left(\\frac{1}{3}\\right)^5\\left(\\frac{2}{3}\\right)^1 + \\binom{6}{6}\\left(\\frac{1}{3}\\right)^6',
        'P(X \\ge 4) = \\frac{60 + 12 + 1}{729} = \\frac{73}{729} \\approx 0.1001',
      ],
      steps: [
        'Step 1: Parameters: n = 6, probability of success p = 1/3, failure q = 2/3.',
        'Step 2: P(4) = 6C4 (1/3)⁴ (2/3)² = 15 × (1/81) × (4/9) = 60 / 729 ≈ 0.08230.',
        'Step 3: P(5) = 6C5 (1/3)⁵ (2/3)¹ = 6 × (1/243) × (2/3) = 12 / 729 ≈ 0.01646.',
        'Step 4: P(6) = 6C6 (1/3)⁶ (2/3)⁰ = 1 × (1/729) = 1 / 729 ≈ 0.00137.',
        'Step 5: P(pass) = (60 + 12 + 1) / 729 = 73 / 729 = 0.100137 ≈ 0.1001 (Option D).',
      ],
      finalAnswer: '0.1001 (Option D)',
      pageNumber: 397,
    },
  },

  // Item 30
  {
    id: 'mstc-may2022-q30',
    number: 30,
    pageNumber: 377,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Surveying - Compass Rule Traverse Balancing',
    text: 'Calculate the adjusted distance of line BA for the given traverse field notes. Use compass rule.\nLine | Distance | Latitudes | Departures\nAB | 677.97 | +667.701 | -117.7283\nBC | 616.05 | -166.1858 | +593.2115\nCD | 690.88 | +131.0369 | +678.3395\nDE | 783.82 | -759.9266 | -192.0558\nEA | 970.26 | +127.4838 | -961.8484\nA. 677.6812 m\nB. 677.5120 m\nC. 677.8221 m\nD. 677.9784 m',
    options: [
      { label: 'A', text: '677.6812 m' },
      { label: 'B', text: '677.5120 m' },
      { label: 'C', text: '677.8221 m' },
      { label: 'D', text: '677.9784 m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute traverse perimeter and total closure errors, apply compass rule corrections to line AB, and compute its balanced length.',
      formulas: [
        'P = \\sum d_i = 3{,}738.98',
        'C_L = \\frac{d_{AB}}{P} \\cdot \\Delta L = \\left(\\frac{677.97}{3738.98}\\right)(0.1093) = 0.0198',
        'C_D = \\frac{d_{AB}}{P} \\cdot \\Delta D = \\left(\\frac{677.97}{3738.98}\\right)(0.0815) = 0.0148',
        'L = 667.701 - 0.0198 = 667.6812',
        'D = -117.7283 + 0.0148 = -117.7135',
        'd = \\sqrt{(667.6812)^2 + (-117.7135)^2} = 677.9784',
      ],
      steps: [
        'Step 1: Total perimeter P = 677.97 + 616.05 + 690.88 + 783.82 + 970.26 = 3,738.98 m.',
        'Step 2: Total closure error in latitude: ΔL = +0.1093 m (positive error; corrections subtract).',
        'Step 3: Total closure error in departure: ΔD = -0.0815 m (negative error; corrections add).',
        'Step 4: Latitude correction for line AB: C_L = (677.97 / 3,738.98) × 0.1093 = 0.0198 m.',
        'Step 5: Corrected latitude L_AB = +667.701 - 0.0198 = +667.6812 m.',
        'Step 6: Departure correction for line AB: C_D = (677.97 / 3,738.98) × 0.0815 = 0.0148 m.',
        'Step 7: Corrected departure D_AB = -117.7283 + 0.0148 = -117.7135 m.',
        'Step 8: Adjusted distance of AB (or BA): AB = √[(667.6812)² + (117.7135)²] = √[445,798.19 + 13,856.47] = √459,654.66 = 677.9784 m (Option D).',
      ],
      finalAnswer: '677.9784 m (Option D)',
      pageNumber: 398,
    },
  },
];

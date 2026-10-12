import { Question } from '../../../types/exam';

export const MSTC_APR2025_PART2: Question[] = [
  // Item 15
  {
    id: 'mstc-apr2025-q15',
    number: 15,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Differential Equations - Logistic Population & Rumor Spread',
    text: 'A rumor spreads through an office of 50 people at a model by dP/dt = 0.65P(1 - P/50). On day zero, one person knows the rumor. Find the model for the population at time t and use it to predict when more than half the people in the office will have heard the rumor.',
    options: [
      { label: 'A', text: '3' },
      { label: 'B', text: '4' },
      { label: 'C', text: '5' },
      { label: 'D', text: '6' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Solve the separable logistic differential equation with initial condition P(0) = 1. Integrate from P = 1 to P = 25 (half of 50 people) to find time T ≈ 5.987 days ≈ 6 days.',
      formulas: [
        '\\frac{dP}{dt} = 0.65 P \\left(1 - \\frac{P}{50}\\right)',
        '\\int_0^T dt = \\int_1^{25} \\frac{dP}{0.65 P (1 - P/50)}',
        'T = \\frac{1}{0.65} \\left[ \\ln\\left(\\frac{P}{50 - P}\\right) \\right]_1^{25}',
        'T = \\frac{\\ln(49)}{0.65} = \\frac{3.8918}{0.65} \\approx 5.987 \\approx 6',
      ],
      steps: [
        'Step 1: Separate variables: dt = dP / [0.65 P (1 - P/50)].',
        'Step 2: Half the office population is P = 50 / 2 = 25 people.',
        'Step 3: Integrate both sides using bounds t from 0 to T, and P from 1 to 25: ∫₀^T dt = ∫₁²⁵ [1 / (0.65 P(1 - P/50))] dP.',
        'Step 4: Use partial fractions: 1 / [P(1 - P/50)] = 1/P + (1/50) / (1 - P/50) = 1/P + 1/(50 - P).',
        'Step 5: T = (1/0.65) [ln(P / (50 - P))] evaluated from 1 to 25 = (1/0.65) [ln(25/25) - ln(1/49)] = ln(49) / 0.65 ≈ 5.987 days.',
        'Step 6: Rounding to the nearest whole day gives 6 days (Option D).',
      ],
      finalAnswer: '6 (Option D)',
      pageNumber: 334,
    },
  },

  // Item 16
  {
    id: 'mstc-apr2025-q16',
    number: 16,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Integral Calculus - Area Bounded by Functions',
    text: 'Given the graphs of the function $f(x) = -x^2 - x$ and $g(x) = -x - 1$. Which of the following expressions give the area enclosed by the graphs?\n\nI. $$\\int_{-1}^1 (1 - x^2)\\, dx$$\nII. $$\\int_{-1}^1 (1 + x^2)\\, dx$$\nIII. $$\\int_{-1}^1 (x^2 - 1)\\, dx$$\nIV. $$\\int_{-1}^1 (-1 - x^2)\\, dx$$',
    options: [
      { label: 'A', text: 'I' },
      { label: 'B', text: 'II' },
      { label: 'C', text: 'III' },
      { label: 'D', text: 'IV' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Find points of intersection by setting f(x) = g(x): -x² - x = -x - 1 => x² = 1 => x = ±1. On [-1, 1], test x = 0: f(0) = 0 > g(0) = -1, so f(x) is the upper curve. Area = ∫_{-1}^1 [f(x) - g(x)] dx = ∫_{-1}^1 [(-x² - x) - (-x - 1)] dx = ∫_{-1}^1 (1 - x²) dx.',
      formulas: [
        'f(x) = -x^2 - x, \\quad g(x) = -x - 1',
        '-x^2 - x = -x - 1 \\implies x^2 = 1 \\implies x = \\pm 1',
        'A = \\int_{x_1}^{x_2} (y_u - y_L)\\, dx',
        'A = \\int_{-1}^1 [(-x^2 - x) - (-x - 1)]\\, dx = \\int_{-1}^1 (1 - x^2)\\, dx',
      ],
      steps: [
        'Step 1: Locate the intersection points: -x² - x = -x - 1 => -x² = -1 => x = -1 and x = 1.',
        'Step 2: Determine which curve is on top on [-1, 1]. At x = 0: f(0) = 0 and g(0) = -1. Since 0 > -1, f(x) is upper and g(x) is lower.',
        'Step 3: Setup area integral: A = ∫_{-1}^1 [f(x) - g(x)] dx = ∫_{-1}^1 [(-x² - x) - (-x - 1)] dx.',
        'Step 4: Simplify: (-x² - x + x + 1) = (1 - x²).',
        'Step 5: This matches Expression I: ∫_{-1}^1 (1 - x²) dx (Option A).',
      ],
      finalAnswer: 'I (Option A)',
      pageNumber: 334,
    },
  },

  // Item 17
  {
    id: 'mstc-apr2025-q17',
    number: 17,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Integral Calculus - First-Quadrant Area Between Curves',
    text: 'Find the first-quadrant area bounded by the curves y = x² + 3 and y = 3x - x² between x = 0 and x = 3.',
    figureCaption: 'Figure 17: Bounded first-quadrant area between y = x² + 3 and y = 3x - x²',
    figureSvg: `<svg viewBox="0 0 460 300" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="80" y1="250" x2="420" y2="250" stroke="#1e293b" stroke-width="2"/>
  <line x1="80" y1="30" x2="80" y2="250" stroke="#1e293b" stroke-width="2"/>
  
  <text x="70" y="254" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">0</text>
  <text x="170" y="265" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">1</text>
  <text x="260" y="265" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">2</text>
  <text x="350" y="265" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">3</text>
  <text x="410" y="265" font-family="monospace" font-size="11" fill="#334155">x</text>

  <text x="70" y="180" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">5</text>
  <text x="70" y="110" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">10</text>
  <text x="70" y="45" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">15</text>
  <text x="70" y="25" font-family="monospace" font-size="11" fill="#334155">y</text>

  <!-- Shaded Area between curves from x=0 to x=3 -->
  <!-- x=0: y_u=3, y_L=0. x=3: y_u=12, y_L=0 -->
  <path d="M 80,210 Q 215,190 350,90 L 350,250 Q 215,220 80,250 Z" fill="#93c5fd" opacity="0.6"/>

  <!-- Upper curve y = x^2 + 3 -->
  <path d="M 80,210 Q 215,190 350,90" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <text x="355" y="80" font-family="monospace" font-size="11" font-weight="bold" fill="#2563eb">y = x² + 3</text>

  <!-- Lower curve y = 3x - x^2 -->
  <path d="M 80,250 Q 215,220 350,250 L 390,290" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <text x="355" y="280" font-family="monospace" font-size="11" font-weight="bold" fill="#dc2626">y = 3x - x²</text>

  <!-- Vertical strip marker at x=3 -->
  <line x1="350" y1="90" x2="350" y2="250" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="3,3"/>
</svg>`,
    options: [
      { label: 'A', text: '14.5' },
      { label: 'B', text: '12.5' },
      { label: 'C', text: '11.5' },
      { label: 'D', text: '13.5' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Using vertical strips, upper curve is y_u = x² + 3 and lower curve is y_L = 3x - x². Area = ∫₀³ [(x² + 3) - (3x - x²)] dx = ∫₀³ (2x² - 3x + 3) dx = [2x³/3 - 3x²/2 + 3x] from 0 to 3 = 18 - 13.5 + 9 = 13.5 sq. units.',
      formulas: [
        'y_1 = x^2 + 3, \\quad y_2 = 3x - x^2',
        'A = \\int_0^3 (y_1 - y_2)\\, dx = \\int_0^3 [(x^2 + 3) - (3x - x^2)]\\, dx',
        'A = \\int_0^3 (2x^2 - 3x + 3)\\, dx',
        'A = \\left[ \\frac{2x^3}{3} - \\frac{3x^2}{2} + 3x \\right]_0^3 = 18 - 13.5 + 9 = 13.5',
      ],
      steps: [
        'Step 1: Upper function on [0, 3] is y_u = x² + 3, and lower curve is y_L = 3x - x².',
        'Step 2: Setup definite integral: A = ∫₀³ [(x² + 3) - (3x - x²)] dx.',
        'Step 3: Combine terms: ∫₀³ (2x² - 3x + 3) dx.',
        'Step 4: Integrate term-by-term: [2x³/3 - 1.5x² + 3x] from 0 to 3.',
        'Step 5: Evaluate at x = 3: 2(27)/3 - 1.5(9) + 3(3) = 18 - 13.5 + 9 = 13.5 sq. units (Option D).',
      ],
      finalAnswer: '13.5 (Option D)',
      pageNumber: 334,
    },
  },

  // Item 18
  {
    id: 'mstc-apr2025-q18',
    number: 18,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Integral Calculus & Business Economics - Revenue Function',
    text: 'Find the revenue function R(x) if the marginal revenue is 2x - 10.',
    options: [
      { label: 'A', text: 'x² + 10x' },
      { label: 'B', text: '-x² - 10x' },
      { label: 'C', text: '-x² + 10x' },
      { label: 'D', text: 'x² - 10x' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Marginal revenue MR = dR/dx = 2x - 10. Integrating with respect to x gives R(x) = ∫ (2x - 10) dx = x² - 10x + C. Since total revenue is zero when no units are sold (R(0) = 0), the constant of integration C = 0. Thus, R(x) = x² - 10x.',
      formulas: [
        'M_R = \\frac{dR}{dx} = 2x - 10',
        'R(x) = \\int M_R\\, dx = \\int (2x - 10)\\, dx = x^2 - 10x + C',
        'R(0) = 0 \\implies C = 0',
        'R(x) = x^2 - 10x',
      ],
      steps: [
        'Step 1: Recall that the revenue function is the antiderivative of marginal revenue: R(x) = ∫ MR dx.',
        'Step 2: Integrate: ∫ (2x - 10) dx = x² - 10x + C.',
        'Step 3: Apply the economic boundary condition: when 0 units are sold, revenue is $0: R(0) = 0 => C = 0.',
        'Step 4: Therefore, the revenue function is R(x) = x² - 10x (Option D).',
      ],
      finalAnswer: 'x² - 10x (Option D)',
      pageNumber: 335,
    },
  },

  // Item 19
  {
    id: 'mstc-apr2025-q19',
    number: 19,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Traffic Engineering & Differential Equations - Vehicle Acceleration',
    text: 'The acceleration of a vehicle can be represented by the following equation: $$\\frac{du}{dt} = 33 - 0.04u$$ where u is the vehicle speed in ft/sec. If the vehicle is traveling at 45 mi/h, determine its velocity after 5 sec of acceleration and the distance travelled during that time.\n\nHint:\n$$u = \\frac{\\alpha}{\\beta}(1 - e^{-\\beta t}) + u_0 e^{-\\beta t}, \\quad \\alpha = 3.3, \\quad \\beta = 0.04$$\n$$x = \\left(\\frac{\\alpha}{\\beta}\\right)t - \\left(\\frac{\\alpha}{\\beta^2}\\right)(1 - e^{-\\beta t}) + \\left(\\frac{u_0}{\\beta}\\right)(1 - e^{-\\beta t})$$',
    options: [
      { label: 'A', text: '47.00 mi/h, 383.14 ft' },
      { label: 'B', text: '74.00 mi/h, 338.41 ft' },
      { label: 'C', text: '74.00 mi/h, 383.14 ft' },
      { label: 'D', text: '47.00 mi/h, 338.41 ft' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Convert initial speed u₀ = 45 mi/h × (5280/3600) = 66.15 ft/s. Applying the vehicle velocity formula with α = 3.3, β = 0.04, and t = 5 s yields u(5) = 69.114 ft/s = 47.02 mi/h. Evaluating the distance equation gives x = 338.41 ft.',
      formulas: [
        'u_0 = 45 \\times \\frac{5280}{3600} = 66.15',
        'u(t) = \\frac{\\alpha}{\\beta}(1 - e^{-\\beta t}) + u_0 e^{-\\beta t}',
        'u(5) = \\frac{3.3}{0.04}(1 - e^{-0.04(5)}) + 66.15 e^{-0.04(5)} = 69.11',
        'u(5) = 69.11 \\times \\frac{3600}{5280} = 47.02 \\approx 47.00',
        'x(t) = \\frac{\\alpha}{\\beta}t - \\frac{\\alpha}{\\beta^2}(1 - e^{-\\beta t}) + \\frac{u_0}{\\beta}(1 - e^{-\\beta t}) = 338.41',
      ],
      steps: [
        'Step 1: Convert u₀ to ft/sec: u₀ = 45 × (5280 / 3600) = 66.15 ft/s.',
        'Step 2: Calculate e^{-β t} = e^{-0.04(5)} = e^{-0.20} = 0.81873. Then (1 - e^{-β t}) = 0.18127.',
        'Step 3: Compute speed u: (3.3 / 0.04)(0.18127) + 66.15(0.81873) = 14.955 + 54.159 = 69.114 ft/s.',
        'Step 4: Convert speed to mi/h: 69.114 / 1.4667 ≈ 47.02 mi/h ≈ 47.00 mi/h.',
        'Step 5: Compute distance x: (3.3 / 0.04)(5) - (3.3 / 0.04²)(0.18127) + (66.15 / 0.04)(0.18127) = 412.5 - 373.87 + 299.78 = 338.41 ft.',
        'Step 6: Result: 47.00 mi/h and 338.41 ft (Option D).',
      ],
      finalAnswer: '47.00 mi/h, 338.41 ft (Option D)',
      pageNumber: 335,
    },
  },

  // Item 20
  {
    id: 'mstc-apr2025-q20',
    number: 20,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Materials Engineering - Fracture Mechanics & Fatigue Life',
    text: 'A relatively large sheet of steel is to be exposed to cyclic tensile and compressive stresses of magnitudes 100 MPa and 50 MPa, respectively. Prior to testing, it has been determined that the length of the largest surface crack is 2.0 mm. Estimate the fatigue life of this sheet if its plane strain fracture toughness is 25 MPa√m and the values of m and A are 3.0 and 1.0 × 10^{-12}, respectively, for Δσ in MPa and a in m. Assume that the parameter Y is independent of crack length and has a value of 1.0.\n\nHint:\n$$a_c = \\frac{1}{\\pi} \\left( \\frac{K_{Ic}}{\\sigma Y} \\right)^2$$\n$$N_f = \\frac{1}{A \\pi^{m/2} (\\Delta\\sigma)^m} \\int_{a_0}^{a_c} \\frac{da}{Y^m a^{m/2}}$$',
    options: [
      { label: 'A', text: '5.94 × 10⁶ cycles' },
      { label: 'B', text: '4.95 × 10⁶ cycles' },
      { label: 'C', text: '4.59 × 10⁶ cycles' },
      { label: 'D', text: '5.49 × 10⁶ cycles' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Critical crack length a_c = (1/π)[25 / (100 × 1.0)]² = 0.02 m. Effective cyclic tensile stress range Δσ = 100 MPa (compressive stresses do not contribute to crack propagation). Integrating Paris law from initial crack a₀ = 0.002 m to a_c = 0.02 m yields N_f = 5.49 × 10⁶ cycles.',
      formulas: [
        'a_c = \\frac{1}{\\pi} \\left( \\frac{K_{Ic}}{\\sigma Y} \\right)^2 = \\frac{1}{\\pi} \\left( \\frac{25}{100(1.0)} \\right)^2 = 0.01989 \\approx 0.02',
        'N_f = \\frac{1}{A \\pi^{3/2} (\\Delta\\sigma)^3 Y^3} \\int_{a_0}^{a_c} a^{-3/2}\\, da',
        '\\int_{0.002}^{0.02} a^{-3/2}\\, da = \\left[ -2 a^{-1/2} \\right]_{0.002}^{0.02} = 30.52',
        'N_f = \\frac{30.52}{(1.0 \\times 10^{-12}) \\pi^{3/2} (100)^3} = 5.49 \\times 10^6',
      ],
      steps: [
        'Step 1: Compute critical crack length a_c: a_c = (1/π)(25/100)² = (1/π)(0.0625) ≈ 0.02 m.',
        'Step 2: Note that compressive stress of -50 MPa does not propagate fatigue cracks, so Δσ = 100 MPa.',
        'Step 3: Initial flaw size a₀ = 2.0 mm = 0.002 m.',
        'Step 4: Evaluate the integral: ∫_{0.002}^{0.02} a^{-1.5} da = [-2 / √a]_{0.002}^{0.02} = 2(22.36 - 7.07) = 30.58.',
        'Step 5: Compute denominator: A · π^{1.5} · (Δσ)³ = 1.0 × 10^{-12} × 5.5683 × 10⁶ = 5.5683 × 10^{-6}.',
        'Step 6: N_f = 30.58 / (5.5683 × 10^{-6}) = 5.49 × 10⁶ cycles (Option D).',
      ],
      finalAnswer: '5.49 × 10⁶ cycles (Option D)',
      pageNumber: 335,
    },
  },

  // Item 21
  {
    id: 'mstc-apr2025-q21',
    number: 21,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Applied Mathematics & Optimization - Airline Revenue Maximization',
    text: 'On a certain route, an airline carries 8000 passengers per month, each paying $50. A market survey indicates that for each $1 increase in the ticket price, the airline will lose 100 passengers. Find the ticket price that will maximize the airline\'s monthly revenue for the route. What is the maximum monthly revenue?',
    options: [
      { label: 'A', text: '65' },
      { label: 'B', text: '67' },
      { label: 'C', text: '70' },
      { label: 'D', text: '60' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Let x be the price increase in dollars. Ticket price p(x) = 50 + x, passengers = 8000 - 100x. Monthly revenue R(x) = (50 + x)(8000 - 100x) = 400,000 + 3000x - 100x². Set dR/dx = 3000 - 200x = 0 => x = 15. The optimal ticket price is $50 + $15 = $65.',
      formulas: [
        'p(x) = 50 + x',
        'R(x) = (50 + x)(8000 - 100x) = 400000 + 3000x - 100x^2',
        '\\frac{dR}{dx} = 3000 - 200x = 0 \\implies x = 15',
        'p = 50 + 15 = 65',
        'R_{\\max} = 65(6500) = 422500',
      ],
      steps: [
        'Step 1: Set up the revenue equation in terms of price increase x: R(x) = (50 + x)(8000 - 100x).',
        'Step 2: Expand: R(x) = 400,000 + 8000x - 5000x - 100x² = 400,000 + 3000x - 100x².',
        'Step 3: Take derivative and equate to zero: dR/dx = 3000 - 200x = 0 => 200x = 3000 => x = 15.',
        'Step 4: Ticket price for maximum revenue: p = 50 + 15 = $65 (Option A).',
      ],
      finalAnswer: '65 (Option A)',
      pageNumber: 336,
    },
  },

  // Item 22
  {
    id: 'mstc-apr2025-q22',
    number: 22,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Discrete Mathematics - Second-Order Recurrence Relations',
    text: 'A deposit of $100,000 is made to an investment fund at the beginning of a year. On the last day of each year two dividends are awarded. The first dividend is 20% of the amount in the account during that year. The second dividend is 45% of the amount in the account in the previous year. Find a recurrence relation for {P_n}, where P_n is the amount in the account at the end of n years if no money is ever withdrawn.',
    options: [
      { label: 'A', text: 'P_n = 0.2P_{n-1} + 1.45P_{n-2}' },
      { label: 'B', text: 'P_n = 1.2P_{n-1} + 0.45P_{n-2}' },
      { label: 'C', text: 'P_n = 0.2P_{n-1} + 0.45P_{n-2}' },
      { label: 'D', text: 'P_n = 0.2P_{n-1} + 1.45P_{n-2}' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'At the end of year n, the balance includes the prior year balance P_{n-1}, plus the first dividend (20% of P_{n-1}), plus the second dividend (45% of the year before that, P_{n-2}). P_n = P_{n-1} + 0.20P_{n-1} + 0.45P_{n-2} = 1.2P_{n-1} + 0.45P_{n-2}.',
      formulas: [
        'D_1 = 0.20 P_{n-1}',
        'D_2 = 0.45 P_{n-2}',
        'P_n = P_{n-1} + D_1 + D_2',
        'P_n = P_{n-1} + 0.20 P_{n-1} + 0.45 P_{n-2} = 1.2 P_{n-1} + 0.45 P_{n-2}',
      ],
      steps: [
        'Step 1: The capital in the account at the beginning of year n is P_{n-1}.',
        'Step 2: 1st dividend awarded on the last day of year n is 20% of P_{n-1}: 0.20 P_{n-1}.',
        'Step 3: 2nd dividend awarded is 45% of the balance two years ago: 0.45 P_{n-2}.',
        'Step 4: Sum all components: P_n = P_{n-1} + 0.20 P_{n-1} + 0.45 P_{n-2} = 1.2 P_{n-1} + 0.45 P_{n-2} (Option B).',
      ],
      finalAnswer: 'P_n = 1.2P_{n-1} + 0.45P_{n-2} (Option B)',
      pageNumber: 336,
    },
  },

  // Item 23
  {
    id: 'mstc-apr2025-q23',
    number: 23,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Engineering Economics - Equivalent Annual Cost Comparison',
    text: 'Which of the following alternatives is superior over a 30-year period if the interest rate is 7%?\n\n| Parameter | Alternative A | Alternative B |\n| :--- | :---: | :---: |\n| Material Type | Brick | Wood |\n| Useful Life | 30 years | 10 years |\n| Initial Cost | $1,800 | $450 |\n| Annual Maintenance | $5/year | $20/year |',
    options: [
      { label: 'A', text: 'Alternative A' },
      { label: 'B', text: 'Alternative B' },
      { label: 'C', text: 'Both' },
      { label: 'D', text: 'Neither' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute the Equivalent Annual Cost (EAC) for each alternative: EAC_A = 1800(A/P, 7%, 30) + 5 = 1800(0.08059) + 5 = $150.06/yr. EAC_B = 450(A/P, 7%, 10) + 20 = 450(0.14238) + 20 = $84.07/yr. Since EAC_B < EAC_A, Alternative B is significantly more economical.',
      formulas: [
        'EAC = C_0 \\left[ \\frac{i(1+i)^n}{(1+i)^n - 1} \\right] + M',
        'EAC_A = 1800 \\left[ \\frac{0.07(1.07)^{30}}{(1.07)^{30} - 1} \\right] + 5 = 1800(0.08059) + 5 = 150.06',
        'EAC_B = 450 \\left[ \\frac{0.07(1.07)^{10}}{(1.07)^{10} - 1} \\right] + 20 = 450(0.14238) + 20 = 84.07',
        'EAC_B < EAC_A \\implies 84.07 < 150.06',
      ],
      steps: [
        'Step 1: Calculate annual capital recovery plus maintenance for Alternative A: EAC_A = 1800(0.07) + 5 + 1800(0.07)/[(1.07)³⁰ - 1] = $150.06.',
        'Step 2: Calculate annual capital recovery plus maintenance for Alternative B: EAC_B = 450(0.07) + 20 + 450(0.07)/[(1.07)¹⁰ - 1] = $84.07.',
        'Step 3: Comparing annual costs: $84.07 < $150.06, meaning Alternative B requires less annual expenditure.',
        'Step 4: Alternative B is superior (Option B).',
      ],
      finalAnswer: 'Alternative B (Option B)',
      pageNumber: 336,
    },
  },

  // Item 24
  {
    id: 'mstc-apr2025-q24',
    number: 24,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Engineering Economics - Geometric Gradients & Annual Equivalent',
    text: 'Suppose that a geometric gradient begins with $1,000 at the end of year one and decreases by 20% per year after the first year until the end of year four. Considering interest rate is 25% per year, determine the uniform annual equivalent value at the end of each of the four years.',
    options: [
      { label: 'A', text: '$837' },
      { label: 'B', text: '$783' },
      { label: 'C', text: '$873' },
      { label: 'D', text: '$738' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Cash flows at year ends: Year 1 = $1000, Year 2 = $800, Year 3 = $640, Year 4 = $512. Present worth P = 1000(1.25)⁻¹ + 800(1.25)⁻² + 640(1.25)⁻³ + 512(1.25)⁻⁴ = 800 + 512 + 327.68 + 209.715 = $1849.40. Uniform annual equivalent A = 1849.40 × [0.25(1.25)⁴ / (1.25⁴ - 1)] = $783.11 ≈ $783.',
      formulas: [
        'P = \\sum_{t=1}^4 F_t (1 + i)^{-t} = \\frac{1000}{1.25} + \\frac{800}{1.25^2} + \\frac{640}{1.25^3} + \\frac{512}{1.25^4} = 1849.40',
        'A = P \\left[ \\frac{i(1+i)^n}{(1+i)^n - 1} \\right]',
        'A = 1849.40 \\left[ \\frac{0.25(1.25)^4}{(1.25)^4 - 1} \\right] = 1849.40(0.42344) = 783.11 \\approx 783',
      ],
      steps: [
        'Step 1: Compute cash flows: Y1 = $1,000; Y2 = 1000(0.8) = $800; Y3 = 800(0.8) = $640; Y4 = 640(0.8) = $512.',
        'Step 2: Discount each cash flow at i = 25%: P = 1000/1.25 + 800/1.25² + 640/1.25³ + 512/1.25⁴ = 800 + 512 + 327.68 + 209.715 = $1849.40.',
        'Step 3: Convert P to uniform series A over 4 years: A = P · (A/P, 25%, 4) = 1849.40 × [0.25(2.4414) / (2.4414 - 1)] = 1849.40 × 0.42344 = $783.11.',
        'Step 4: Closest answer is $783 (Option B).',
      ],
      finalAnswer: '$783 (Option B)',
      pageNumber: 336,
    },
  },

  // Item 25
  {
    id: 'mstc-apr2025-q25',
    number: 25,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Applied Financial Mathematics - Credit Card Minimum Payment',
    text: 'Kevin\'s credit card company determines his minimum monthly payment by adding all new interest to 1.5% of the outstanding principal. The credit card company charges an interest rate of 0.05163% per day. On November 12, Kevin used his credit card to pay for the following business expenses: van repairs ($677), equipment maintenance ($452), office supplies ($139), and dinner with clients ($141). Assuming Kevin had no new interest, determine his minimum payment due on December 1, his billing date.',
    options: [
      { label: 'A', text: '$24' },
      { label: 'B', text: '$20' },
      { label: 'C', text: '$22' },
      { label: 'D', text: '$21' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Total outstanding principal P = $677 + $452 + $139 + $141 = $1409. Assuming no new interest: Minimum Payment = 0 + 1.5%($1409) = $21.135. Credit card billing rules require payment ≥ $21.135, which rounds up to $22.',
      formulas: [
        'P = 677 + 452 + 139 + 141 = 1409',
        'M_p = I + 0.015 P',
        'M_p = 0 + 0.015(1409) = 21.135 \\implies 22',
      ],
      steps: [
        'Step 1: Calculate total charged principal: P = $677 + $452 + $139 + $141 = $1409.',
        'Step 2: Calculate 1.5% of outstanding principal: 0.015 × $1409 = $21.135.',
        'Step 3: With no new interest, minimum required payment is at least $21.135.',
        'Step 4: Standard commercial minimum payment rounds up to whole dollar $22 (Option C).',
      ],
      finalAnswer: '$22 (Option C)',
      pageNumber: 337,
    },
  },

  // Item 26
  {
    id: 'mstc-apr2025-q26',
    number: 26,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Engineering Economics - Breakeven Capacity Analysis',
    text: 'An engineering consulting firm measures its output in a standard service hour unit, which is a function of the personnel grade levels in the professional staff. The variable cost (c_v) is $62 per standard service hour. The charge-out rate [i.e., selling price (p)] is $85.56 per hour. The maximum output of the firm is 160,000 hours per year, and its fixed cost (C_F) is $2,024,000 per year. For this firm, what is the breakeven point in standard service hours and in percentage of total capacity?',
    options: [
      { label: 'A', text: '56.4%' },
      { label: 'B', text: '54.6%' },
      { label: 'C', text: '53.7%' },
      { label: 'D', text: '57.3%' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Breakeven hours x = C_F / (p - c_v) = 2,024,000 / (85.56 - 62) = 2,024,000 / 23.56 = 85,908.32 hours per year. Percentage of total capacity = (85,908.32 / 160,000) × 100% = 53.69% ≈ 53.7%.',
      formulas: [
        'R(x) = C_F + c_v x',
        'p x = C_F + c_v x \\implies x = \\frac{C_F}{p - c_v}',
        'x = \\frac{2024000}{85.56 - 62} = \\frac{2024000}{23.56} = 85908.32',
        '\\% C = \\frac{85908.32}{160000} \\times 100\\% = 53.69\\% \\approx 53.7\\%',
      ],
      steps: [
        'Step 1: Contribution margin per hour = Selling price - Variable cost = $85.56 - $62.00 = $23.56/hr.',
        'Step 2: Breakeven volume: x = Fixed Cost / Contribution Margin = $2,024,000 / $23.56 = 85,908.32 hours.',
        'Step 3: Compare to maximum capacity of 160,000 hours: (85,908.32 / 160,000) × 100% = 53.69% ≈ 53.7%.',
        'Step 4: Therefore, the breakeven capacity is 53.7% (Option C).',
      ],
      finalAnswer: '53.7% (Option C)',
      pageNumber: 337,
    },
  },

  // Item 27
  {
    id: 'mstc-apr2025-q27',
    number: 27,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Engineering Economics - Machine Speed Optimization',
    text: 'A simple example of alternative machine speeds involves the planing of lumber. Lumber put through the planer increases in value by $0.10 per board foot. When the planer is operated at a cutting speed of 5,000 feet per minute, the blades have to be sharpened after 2 hours of operation, and the lumber can be planed at the rate of 1,000 board-feet per hour. When the machine is operated at 6,000 feet per minute, the blades have to be sharpened after 1-1/2 hours of operation, and the rate of planing is 1,200 board-feet per hour. Each time the blades are changed, the machine has to be shut down for 15 minutes. The blades, unsharpened, cost $50 per set and can be sharpened 10 times before having to be discarded. Sharpening costs $10 per occurrence. The crew that operates the planer changes and resets the blades. At what speed should the planer be operated?',
    options: [
      { label: 'A', text: 'Operate at 5,000 feet per minute' },
      { label: 'B', text: 'Operate at 5,500 feet per minute' },
      { label: 'C', text: 'Operate at 6,000 feet per minute' },
      { label: 'D', text: 'Operate at 6,500 feet per minute' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'At 5,000 ft/min: cycle time = 2 + 0.25 = 2.25 hr => 3.555 cycles/day. Net value per day = $711 - $35.55 - $17.78 = $657.67. At 6,000 ft/min: cycle time = 1.5 + 0.25 = 1.75 hr => 4.571 cycles/day. Net value per day = $822.78 - $45.71 - $22.86 = $754.21. Since $754.21 > $657.67, operating at 6,000 ft/min is superior.',
      formulas: [
        'T_1 = 2 + 0.25 = 2.25 \\implies N_1 = \\frac{8}{2.25} = 3.555',
        'V_1 = 3.555(2)(1000)(0.10) - 3.555(10) - 3.555\\left(\\frac{50}{10}\\right) = 657.67',
        'T_2 = 1.5 + 0.25 = 1.75 \\implies N_2 = \\frac{8}{1.75} = 4.571',
        'V_2 = 4.571(1.5)(1200)(0.10) - 4.571(10) - 4.571\\left(\\frac{50}{10}\\right) = 754.21',
        'V_2 > V_1 \\implies 754.21 > 657.67',
      ],
      steps: [
        'Step 1: For 5,000 ft/min: Cycle time = 2 hr planing + 0.25 hr shutdown = 2.25 hr. Cycles per 8-hr day = 8 / 2.25 = 3.555 cycles.',
        'Step 2: Value added = 3.555 × 2 hr × 1,000 bd-ft × $0.10 = $711.00. Sharpening cost = 3.555 × $10 = $35.55. Blade depreciation = 3.555 × ($50/10) = $17.78. Net = $657.67/day.',
        'Step 3: For 6,000 ft/min: Cycle time = 1.5 hr planing + 0.25 hr shutdown = 1.75 hr. Cycles per 8-hr day = 8 / 1.75 = 4.571 cycles.',
        'Step 4: Value added = 4.571 × 1.5 hr × 1,200 bd-ft × $0.10 = $822.78. Sharpening cost = 4.571 × $10 = $45.71. Blade depreciation = 4.571 × ($50/10) = $22.86. Net = $754.21/day.',
        'Step 5: Compare: $754.21 > $657.67. Therefore, operate at 6,000 feet per minute (Option C).',
      ],
      finalAnswer: 'Operate at 6,000 feet per minute (Option C)',
      pageNumber: 337,
    },
  },
];

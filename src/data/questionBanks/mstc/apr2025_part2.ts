import { Question } from '../../../types/exam';
import { solved } from './apr2025Helpers';

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
    ...solved(15, 'D', '6 (Option D)'),
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
    ...solved(16, 'A', 'I (Option A)'),
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
    ...solved(17, 'D', '13.5 (Option D)'),
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
    ...solved(18, 'D', 'x² - 10x (Option D)'),
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
    ...solved(19, 'D', '47.00 mi/h, 338.41 ft (Option D)'),
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
    ...solved(20, 'D', '5.49 × 10⁶ cycles (Option D)'),
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
    ...solved(21, 'A', '65 (Option A)'),
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
    ...solved(22, 'B', 'P_n = 1.2P_{n-1} + 0.45P_{n-2} (Option B)'),
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
    ...solved(23, 'B', 'Alternative B (Option B)'),
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
    ...solved(24, 'B', '$783 (Option B)'),
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
    ...solved(25, 'C', '$22 (Option C)'),
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
    ...solved(26, 'C', '53.7% (Option C)'),
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
    ...solved(27, 'C', 'Operate at 6,000 feet per minute (Option C)'),
  },
];

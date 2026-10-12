import { Question } from '../../../types/exam';

export const MSTC_APR2025_PART1: Question[] = [
  // Item 1
  {
    id: 'mstc-apr2025-q1',
    number: 1,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Applied Mathematics - Cost Functions & Inequalities',
    text: 'A long-distance phone call cost 36 cents for the first three minutes and 11 cents for each additional minute. How long can you talk for less than $2?',
    options: [
      { label: 'A', text: '17' },
      { label: 'B', text: '18' },
      { label: 'C', text: '19' },
      { label: 'D', text: '16' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Let t be the duration of the long-distance call in minutes. The call costs 36 cents for the first 3 minutes, and 11 cents for each additional minute (t > 3). Set the total cost strictly less than 200 cents ($2.00) to find the maximum whole-minute duration.',
      formulas: [
        'C(t) = 36 + 11(t - 3) < 200',
        '11(t - 3) < 164',
        't - 3 < 14.91 \\implies t < 17.91',
        't_{\\max} = 17',
      ],
      steps: [
        'Step 1: Set up the piecewise cost model: C(t) = 36 for t ≤ 3, and C(t) = 36 + 11(t - 3) for t > 3.',
        'Step 2: Convert $2 to cents: $2 = 200 cents.',
        'Step 3: Set up the inequality for t > 3: 36 + 11(t - 3) < 200.',
        'Step 4: Expand and simplify: 36 + 11t - 33 < 200 => 11t + 3 < 200 => 11t < 197.',
        'Step 5: Solve for t: t < 197 / 11 ≈ 17.909 minutes.',
        'Step 6: Since time is counted in whole minutes, the maximum duration is 17 minutes (Option A).',
      ],
      finalAnswer: '17 (Option A)',
      pageNumber: 330,
    },
  },

  // Item 2
  {
    id: 'mstc-apr2025-q2',
    number: 2,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Differential Calculus - Marginal Output & Incremental Change',
    text: 'It is estimated that the weekly output at a certain plant is Q(x) = 50x² + 9,000x units, where x is the number of workers employed at the plant. Currently there are 30 workers employed at the plant. Use calculus to estimate the change in the weekly output that will result from the addition of 1 worker to the force.',
    options: [
      { label: 'A', text: '14,000' },
      { label: 'B', text: '12,000' },
      { label: 'C', text: '13,000' },
      { label: 'D', text: '11,000' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Using calculus, the marginal change in output resulting from adding one worker is approximated by the first derivative Q\'(x) evaluated at the current workforce x = 30.',
      formulas: [
        'Q(x) = 50x^2 + 9000x',
        'Q\'(x) = \\frac{dQ}{dx} = 100x + 9000',
        '\\Delta Q \\approx Q\'(30) \\cdot \\Delta x = [100(30) + 9000](1) = 12000',
        '\\Delta Q = Q(31) - Q(30) = 327050 - 315000 = 12050',
      ],
      steps: [
        'Step 1: Differentiate the production function Q(x): Q\'(x) = d/dx [50x² + 9,000x] = 100x + 9,000.',
        'Step 2: Evaluate the derivative at current employment x = 30: Q\'(30) = 100(30) + 9,000 = 3,000 + 9,000 = 12,000 units/worker.',
        'Step 3: For an addition of Δx = 1 worker, the estimated change in weekly output is ΔQ ≈ Q\'(30) · Δx = 12,000(1) = 12,000 units.',
        'Step 4: Therefore, the estimated increase in weekly output is 12,000 units (Option B).',
      ],
      finalAnswer: '12,000 (Option B)',
      pageNumber: 330,
    },
  },

  // Item 3
  {
    id: 'mstc-apr2025-q3',
    number: 3,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Applied Mathematics - Nested Stacks & Linear Functions',
    text: 'The figure shows three stacks of identical storage containers. Figure I illustrates how a container stacks inside the one below it. Figure II shows a stack of four containers with a height of 36 inches, and Figure III shows a stack of six containers with a height of 42 inches. Which of the following functions gives the height in inches, f(n), of a stack of n storage containers, for all n ≥ 1?',
    figureCaption: 'Figure 3: Stacks of nested storage containers (Figure I, II, and III)',
    figureSvg: `<svg viewBox="0 0 460 300" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="20" y1="260" x2="440" y2="260" stroke="#475569" stroke-width="2"/>
  
  <!-- Figure I: Single Container -->
  <g transform="translate(60, 160)">
    <polygon points="10,0 50,0 44,70 16,70" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
    <rect x="6" y="-12" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <text x="30" y="95" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#334155">Figure I</text>
  </g>

  <!-- Figure II: Stack of 4 Containers -->
  <g transform="translate(180, 70)">
    <polygon points="10,60 50,60 44,130 16,130" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
    <rect x="6" y="48" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <rect x="6" y="32" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <rect x="6" y="16" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <rect x="6" y="0" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <!-- Dimension 36" -->
    <line x1="70" y1="0" x2="70" y2="130" stroke="#2563eb" stroke-width="1.5"/>
    <line x1="65" y1="0" x2="75" y2="0" stroke="#2563eb" stroke-width="1.5"/>
    <line x1="65" y1="130" x2="75" y2="130" stroke="#2563eb" stroke-width="1.5"/>
    <text x="82" y="70" font-family="monospace" font-size="11" font-weight="bold" fill="#2563eb">36"</text>
    <text x="30" y="155" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#334155">Figure II</text>
  </g>

  <!-- Figure III: Stack of 6 Containers -->
  <g transform="translate(320, 40)">
    <polygon points="10,90 50,90 44,160 16,160" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
    <rect x="6" y="78" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <rect x="6" y="62" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <rect x="6" y="46" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <rect x="6" y="30" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <rect x="6" y="14" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <rect x="6" y="-2" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <!-- Dimension 42" -->
    <line x1="70" y1="-2" x2="70" y2="160" stroke="#2563eb" stroke-width="1.5"/>
    <line x1="65" y1="-2" x2="75" y2="-2" stroke="#2563eb" stroke-width="1.5"/>
    <line x1="65" y1="160" x2="75" y2="160" stroke="#2563eb" stroke-width="1.5"/>
    <text x="82" y="85" font-family="monospace" font-size="11" font-weight="bold" fill="#2563eb">42"</text>
    <text x="30" y="185" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#334155">Figure III</text>
  </g>
</svg>`,
    options: [
      { label: 'A', text: 'f(n) = 3n + 12' },
      { label: 'B', text: 'f(n) = 3n + 24' },
      { label: 'C', text: 'f(n) = 3n + 27' },
      { label: 'D', text: 'f(n) = 6n + 12' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The difference in height between 6 containers (42") and 4 containers (36") is 6 inches for 2 additional stacked containers. Each extra container adds h = 3 inches. Solve for the base constant to establish the linear function f(n) = 3n + 24.',
      formulas: [
        'h = \\frac{42 - 36}{6 - 4} = 3',
        'f(n) = f(1) + (n - 1)h',
        'f(4) = 3(4) + c = 36 \\implies c = 24',
        'f(n) = 3n + 24',
      ],
      steps: [
        'Step 1: Find the incremental height h added by each container when nested: h = (42 - 36) / (6 - 4) = 6 / 2 = 3 inches.',
        'Step 2: Express the total height as a linear model: f(n) = 3n + c.',
        'Step 3: Use Figure II (n = 4 containers, total height = 36 inches): 3(4) + c = 36 => 12 + c = 36 => c = 24.',
        'Step 4: Verify with Figure III (n = 6 containers): f(6) = 3(6) + 24 = 18 + 24 = 42 inches (matches).',
        'Step 5: Thus, f(n) = 3n + 24 (Option B).',
      ],
      finalAnswer: 'f(n) = 3n + 24 (Option B)',
      pageNumber: 330,
    },
  },

  // Item 4
  {
    id: 'mstc-apr2025-q4',
    number: 4,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Analytical Geometry & Kinematics - Parabolic Trajectory',
    text: 'The graph below shows the partial trajectory of a projectile thrown from an elevated platform. If y represents vertical distance and x represents horizontal distance, then which of the following equations could represent the trajectory of the projectile shown above?',
    figureCaption: 'Figure 4: Partial Trajectory of a Projectile (Vertical Distance in ft vs Horizontal Distance in ft)',
    figureSvg: `<svg viewBox="0 0 460 320" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="230" y="25" text-anchor="middle" font-family="monospace" font-size="13" font-weight="bold" fill="#0f172a">Partial Trajectory of a Projectile</text>
  
  <!-- Y-axis Label -->
  <text x="25" y="160" text-anchor="middle" transform="rotate(-90 25 160)" font-family="monospace" font-size="11" fill="#475569">Vertical Distance (in feet)</text>
  <!-- X-axis Label -->
  <text x="250" y="305" text-anchor="middle" font-family="monospace" font-size="11" fill="#475569">Horizontal Distance (in feet)</text>

  <!-- Grid lines & Axes -->
  <g stroke="#e2e8f0" stroke-width="1">
    <line x1="80" y1="50" x2="420" y2="50"/>
    <line x1="80" y1="80" x2="420" y2="80"/>
    <line x1="80" y1="110" x2="420" y2="110"/>
    <line x1="80" y1="140" x2="420" y2="140"/>
    <line x1="80" y1="170" x2="420" y2="170"/>
    <line x1="80" y1="200" x2="420" y2="200"/>
    <line x1="80" y1="230" x2="420" y2="230"/>
    <line x1="80" y1="260" x2="420" y2="260"/>
    
    <line x1="80" y1="50" x2="80" y2="260"/>
    <line x1="125" y1="50" x2="125" y2="260"/>
    <line x1="170" y1="50" x2="170" y2="260"/>
    <line x1="215" y1="50" x2="215" y2="260"/>
    <line x1="260" y1="50" x2="260" y2="260"/>
    <line x1="305" y1="50" x2="305" y2="260"/>
    <line x1="350" y1="50" x2="350" y2="260"/>
    <line x1="395" y1="50" x2="395" y2="260"/>
  </g>
  
  <!-- Main Axes -->
  <line x1="80" y1="260" x2="420" y2="260" stroke="#1e293b" stroke-width="2"/>
  <line x1="80" y1="50" x2="80" y2="260" stroke="#1e293b" stroke-width="2"/>

  <!-- Y-axis Numbers -->
  <text x="70" y="264" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">0</text>
  <text x="70" y="234" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">5</text>
  <text x="70" y="204" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">10</text>
  <text x="70" y="174" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">15</text>
  <text x="70" y="144" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">20</text>
  <text x="70" y="114" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">25</text>
  <text x="70" y="84" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">30</text>
  <text x="70" y="54" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">35</text>

  <!-- X-axis Numbers -->
  <text x="80" y="278" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">0</text>
  <text x="125" y="278" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">0.5</text>
  <text x="170" y="278" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">1.0</text>
  <text x="215" y="278" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">1.5</text>
  <text x="260" y="278" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">2.0</text>
  <text x="305" y="278" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">2.5</text>
  <text x="350" y="278" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">3.0</text>
  <text x="395" y="278" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">3.5</text>

  <!-- Parabola Plot curve: y = -5x^2 + 20x + 15 -->
  <!-- x=0 -> y=15 (80, 170) -->
  <!-- x=1.0 -> y=30 (170, 80) -->
  <!-- x=2.0 -> y=35 (260, 50) vertex -->
  <!-- x=3.0 -> y=30 (350, 80) -->
  <!-- x=3.5 -> y=23.75 (395, 117.5) -->
  <path d="M 80,170 Q 170,30 260,50 T 395,117.5" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <circle cx="80" cy="170" r="3.5" fill="#1e40af"/>
  <circle cx="125" cy="117.5" r="3.5" fill="#1e40af"/>
  <circle cx="170" cy="80" r="3.5" fill="#1e40af"/>
  <circle cx="215" cy="57.5" r="3.5" fill="#1e40af"/>
  <circle cx="260" cy="50" r="3.5" fill="#dc2626"/>
  <circle cx="305" cy="57.5" r="3.5" fill="#1e40af"/>
  <circle cx="350" cy="80" r="3.5" fill="#1e40af"/>
  <circle cx="395" cy="117.5" r="3.5" fill="#1e40af"/>
</svg>`,
    options: [
      { label: 'A', text: 'y = -5x² + 20x + 15' },
      { label: 'B', text: 'y = 5x² + 20x - 15' },
      { label: 'C', text: 'y = -5x² - 20x - 15' },
      { label: 'D', text: 'y = 5x² + 20x + 15' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The parabola opens downward with vertex (h, k) = (2.0, 35) and a y-intercept at (0, 15). Setting up the vertex form y = a(x - h)² + k gives a = -5, resulting in y = -5x² + 20x + 15.',
      formulas: [
        'y = a(x - h)^2 + k',
        '(h, k) = (2, 35)',
        'y = a(x - 2)^2 + 35',
        '15 = a(0 - 2)^2 + 35 \\implies a = -5',
        'y = -5(x - 2)^2 + 35 = -5x^2 + 20x + 15',
      ],
      steps: [
        'Step 1: Identify key points from the trajectory graph: Vertex at (2.0, 35), y-intercept at (0, 15).',
        'Step 2: Since the parabola opens downward, the leading coefficient must be negative (eliminating B and D).',
        'Step 3: Substitute the vertex (2, 35) into standard vertex form: y = a(x - 2)² + 35.',
        'Step 4: Use the y-intercept (0, 15): 15 = a(-2)² + 35 => 4a = -20 => a = -5.',
        'Step 5: Expand to standard form: y = -5(x² - 4x + 4) + 35 = -5x² + 20x - 20 + 35 = -5x² + 20x + 15 (Option A).',
      ],
      finalAnswer: 'y = -5x² + 20x + 15 (Option A)',
      pageNumber: 331,
    },
  },

  // Item 5
  {
    id: 'mstc-apr2025-q5',
    number: 5,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Mechanics & Polynomial Equations - Beam Deflection',
    text: 'A steel beam is supported by two pilings 200 feet apart. If a weight is placed x feet from the piling on the left, a vertical deflection d equals 0.0000008x²(200 - x). How far is the weight if the vertical deflection is 0.8 feet?',
    figureCaption: 'Figure 5: Steel beam deflection between two pilings 200 ft apart',
    figureSvg: `<svg viewBox="0 0 460 220" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  
  <!-- Left Piling -->
  <rect x="50" y="70" width="24" height="110" fill="#94a3b8" stroke="#1e293b" stroke-width="2"/>
  <!-- Right Piling -->
  <rect x="386" y="70" width="24" height="110" fill="#94a3b8" stroke="#1e293b" stroke-width="2"/>

  <!-- Deflected Beam curve -->
  <path d="M 62,80 Q 230,135 398,80" fill="none" stroke="#1e293b" stroke-width="6"/>
  <!-- Original horizontal reference -->
  <line x1="62" y1="80" x2="398" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- Load point & arrow -->
  <g transform="translate(230, 75)">
    <line x1="0" y1="-35" x2="0" y2="30" stroke="#dc2626" stroke-width="2.5"/>
    <polygon points="-5,30 5,30 0,40" fill="#dc2626"/>
    <!-- Deflection arrow d -->
    <line x1="15" y1="5" x2="15" y2="33" stroke="#2563eb" stroke-width="1.5"/>
    <polygon points="12,5 18,5 15,0" fill="#2563eb"/>
    <polygon points="12,33 18,33 15,38" fill="#2563eb"/>
    <text x="25" y="22" font-family="monospace" font-size="12" font-weight="bold" fill="#2563eb">d</text>
  </g>

  <!-- Distance x Dimension -->
  <line x1="62" y1="45" x2="230" y2="45" stroke="#475569" stroke-width="1.5"/>
  <line x1="62" y1="40" x2="62" y2="50" stroke="#475569" stroke-width="1.5"/>
  <line x1="230" y1="40" x2="230" y2="50" stroke="#475569" stroke-width="1.5"/>
  <text x="146" y="38" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#475569">x</text>

  <!-- 200 ft Span Dimension -->
  <line x1="62" y1="195" x2="398" y2="195" stroke="#475569" stroke-width="1.5"/>
  <line x1="62" y1="190" x2="62" y2="200" stroke="#475569" stroke-width="1.5"/>
  <line x1="398" y1="190" x2="398" y2="200" stroke="#475569" stroke-width="1.5"/>
  <text x="230" y="190" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#475569">200 ft</text>
</svg>`,
    options: [
      { label: 'A', text: '150 ft' },
      { label: 'B', text: '125 ft' },
      { label: 'C', text: '100 ft' },
      { label: 'D', text: '175 ft' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Substitute d = 0.8 ft into the deflection formula: 0.8 = 0.0000008x²(200 - x) => x²(200 - x) = 1,000,000. Testing x = 100 ft gives (100)²(100) = 1,000,000, placing the weight at midspan (100 ft from the support).',
      formulas: [
        'd = 0.0000008 x^2 (200 - x)',
        '0.8 = 0.0000008 x^2 (200 - x)',
        'x^2(200 - x) = \\frac{0.8}{0.0000008} = 10^6',
        '100^2(200 - 100) = 10^6 \\implies x = 100',
      ],
      steps: [
        'Step 1: Set the deflection d = 0.8 ft in the given deflection equation: 0.8 = 0.0000008x²(200 - x).',
        'Step 2: Divide both sides by 0.0000008: x²(200 - x) = 1,000,000.',
        'Step 3: Test candidate values from the options. For x = 100 ft: (100)²(200 - 100) = 10,000 × 100 = 1,000,000 (Exact match).',
        'Step 4: Midspan x = 100 ft represents the position 100 ft from either piling (Option C).',
      ],
      finalAnswer: '100 ft (Option C)',
      pageNumber: 331,
    },
  },

  // Item 6
  {
    id: 'mstc-apr2025-q6',
    number: 6,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Transportation & Highway Safety - Crash Reduction Factors',
    text: 'At a single location, three countermeasures with CRs of 40%, 28%, and 20% are proposed. Determine the overall CRF if all countermeasures are used.\n\nHint: $$CR = 1 - \\prod_{i=1}^m (1 - CR_i)$$',
    options: [
      { label: 'A', text: '0.55' },
      { label: 'B', text: '0.44' },
      { label: 'C', text: '0.66' },
      { label: 'D', text: '0.33' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Combine multiple crash reduction factors using the standard multiplicative rule: Overall CR = 1 - ∏(1 - CR_i). With CR₁ = 0.40, CR₂ = 0.28, CR₃ = 0.20: CR = 1 - (0.60)(0.72)(0.80) = 0.6544 ≈ 0.66.',
      formulas: [
        'CR = 1 - \\prod_{i=1}^3 (1 - CR_i)',
        'CR = 1 - (1 - 0.40)(1 - 0.28)(1 - 0.20)',
        'CR = 1 - (0.60)(0.72)(0.80) = 1 - 0.3456 = 0.6544 \\approx 0.66',
      ],
      steps: [
        'Step 1: Express the overall safety effectiveness as 1 minus the product of non-reduction factors: 1 - CR = (1 - CR₁)(1 - CR₂)(1 - CR₃).',
        'Step 2: Calculate individual non-reduction factors: 1 - 0.40 = 0.60; 1 - 0.28 = 0.72; 1 - 0.20 = 0.80.',
        'Step 3: Multiply: 0.60 × 0.72 × 0.80 = 0.3456.',
        'Step 4: Overall CR = 1 - 0.3456 = 0.6544 ≈ 0.66 (Option C).',
      ],
      finalAnswer: '0.66 (Option C)',
      pageNumber: 331,
    },
  },

  // Item 7
  {
    id: 'mstc-apr2025-q7',
    number: 7,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Analytic Geometry - Equation of a Circle',
    text: 'A circle graphed in the xy-plane has the equation x² + y² - 4x + 2y - 4 = 0. Which of the following equivalent forms of the equation of the circle has the square of the radius as a coefficient or constant?',
    options: [
      { label: 'A', text: 'x² + y² - 4x + 2y - 1 = 3' },
      { label: 'B', text: 'y² + 2y - 2 = 2 + 4x - x²' },
      { label: 'C', text: '(x - 2)² + (y + 1)² - 4 = 5' },
      { label: 'D', text: '(x - 2)² + (y + 1)² = 9' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Complete the squares for x and y to express the circle in standard form (x - h)² + (y - k)² = r², where the constant on the right side represents r² = 9.',
      formulas: [
        'x^2 + y^2 - 4x + 2y - 4 = 0',
        '(x^2 - 4x + 4) + (y^2 + 2y + 1) = 4 + 4 + 1',
        '(x - 2)^2 + (y + 1)^2 = 9',
        'r^2 = 9 \\implies r = 3',
      ],
      steps: [
        'Step 1: Move the constant term to the right-hand side: (x² - 4x) + (y² + 2y) = 4.',
        'Step 2: Complete the square for the x-terms: add (-4/2)² = 4 to both sides.',
        'Step 3: Complete the square for the y-terms: add (2/2)² = 1 to both sides.',
        'Step 4: Factor the perfect square trinomials: (x - 2)² + (y + 1)² = 4 + 4 + 1 = 9.',
        'Step 5: The resulting standard form clearly displays r² = 9 as the constant: (x - 2)² + (y + 1)² = 9 (Option D).',
      ],
      finalAnswer: '(x - 2)² + (y + 1)² = 9 (Option D)',
      pageNumber: 332,
    },
  },

  // Item 8
  {
    id: 'mstc-apr2025-q8',
    number: 8,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Applied Mathematics - Matrix Operations in Production Cost',
    text: 'The number of hours of labor required to manufacture one sofa of various sizes is summarized in matrix $L$:\n\n| Sofa Size | Cutting | Assembly | Packing |\n| :--- | :---: | :---: | :---: |\n| Small | 1.4 hr | 0.7 hr | 0.3 hr |\n| Medium | 1.8 hr | 1.4 hr | 0.3 hr |\n| Large | 2.7 hr | 2.8 hr | 0.5 hr |\n\nThe hourly labor rates for cutting, assembly, and packing at the Ames City Plant and at the Bay City Plant are given in matrix $C$:\n\n| Department | Ames City | Bay City |\n| :--- | :---: | :---: |\n| Cutting | $14 | $12 |\n| Assembly | $10 | $9 |\n| Packaging | $7 | $5 |\n\nWhat is the total labor cost for manufacturing a small-sized sofa at the Ames City plant?',
    options: [
      { label: 'A', text: '$28.70' },
      { label: 'B', text: '$27.80' },
      { label: 'C', text: '$28.07' },
      { label: 'D', text: '$20.78' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Multiply the hours required for a small sofa (1.4 hr cutting, 0.7 hr assembly, 0.3 hr packing) by the Ames City Plant hourly labor rates ($14, $10, $7). Total cost = 1.4(14) + 0.7(10) + 0.3(7) = $28.70.',
      formulas: [
        'C_T = t_c r_c + t_a r_a + t_p r_p',
        'C_T = 1.4(14) + 0.7(10) + 0.3(7)',
        'C_T = 19.60 + 7.00 + 2.10 = 28.70',
      ],
      steps: [
        'Step 1: Extract small sofa labor hours from matrix L: Cutting = 1.4 hr, Assembly = 0.7 hr, Packing = 0.3 hr.',
        'Step 2: Extract Ames City wage rates from matrix C: Cutting = $14/hr, Assembly = $10/hr, Packing = $7/hr.',
        'Step 3: Multiply hours by corresponding rates: 1.4 × $14 = $19.60; 0.7 × $10 = $7.00; 0.3 × $7 = $2.10.',
        'Step 4: Sum the labor costs: $19.60 + $7.00 + $2.10 = $28.70 (Option A).',
      ],
      finalAnswer: '$28.70 (Option A)',
      pageNumber: 332,
    },
  },

  // Item 9
  {
    id: 'mstc-apr2025-q9',
    number: 9,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Strength of Materials - Ductility & Percent Reduction in Area',
    text: 'A cylindrical specimen of steel having an original diameter of 12.8 mm is tensile tested to fracture and found to have an engineering fracture strength $\\sigma_f$ of 460 MPa. If its cross-sectional diameter at fracture is 10.7 mm, determine the ductility in terms of percent reduction in area.\n\nHint: $\\%RA = \\frac{A_0 - A_f}{A_0} \\times 100$',
    options: [
      { label: 'A', text: '20%' },
      { label: 'B', text: '10%' },
      { label: 'C', text: '30%' },
      { label: 'D', text: '40%' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Ductility measured as percent reduction in area: %RA = [(A₀ - A_f) / A₀] × 100 = [(d₀² - d_f²) / d₀²] × 100 = [(12.8² - 10.7²) / 12.8²] × 100 = 30.12% ≈ 30%.',
      formulas: [
        '\\%RA = \\frac{A_0 - A_f}{A_0} \\times 100 = \\frac{d_0^2 - d_f^2}{d_0^2} \\times 100',
        '\\%RA = \\frac{12.8^2 - 10.7^2}{12.8^2} \\times 100 = 30.12\\% \\approx 30\\%',
      ],
      steps: [
        'Step 1: Original cross-sectional area A₀ = (π/4)(12.8)² = 128.68 mm².',
        'Step 2: Cross-sectional area at fracture A_f = (π/4)(10.7)² = 89.92 mm².',
        'Step 3: Calculate %RA: [(128.68 - 89.92) / 128.68] × 100 = (38.76 / 128.68) × 100 = 30.12%.',
        'Step 4: Rounding gives 30% reduction in area (Option C).',
      ],
      finalAnswer: '30% (Option C)',
      pageNumber: 332,
    },
  },

  // Item 10
  {
    id: 'mstc-apr2025-q10',
    number: 10,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Geometry - Polygon Angles & Arithmetic Sequences',
    text: 'The measures of the angles of a polygon form an arithmetic sequence. The least measurement in the sequence is 85°. The greatest measurement is 215°. Find the number of sides in this polygon.',
    options: [
      { label: 'A', text: '16' },
      { label: 'B', text: '14' },
      { label: 'C', text: '10' },
      { label: 'D', text: '12' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The sum of interior angles of an n-sided polygon is S = (n - 2) × 180°. For an arithmetic sequence, S = (n / 2)(a₁ + a_n). Equating both formulas gives 180(n - 2) = (n / 2)(85 + 215) => 180n - 360 = 150n => 30n = 360 => n = 12.',
      formulas: [
        'S = (n - 2) \\times 180^{\\circ}',
        'S = \\frac{n}{2}(a_1 + a_n) = \\frac{n}{2}(85^{\\circ} + 215^{\\circ}) = 150^{\\circ}n',
        '180^{\\circ}(n - 2) = 150^{\\circ}n \\implies 30^{\\circ}n = 360^{\\circ} \\implies n = 12',
      ],
      steps: [
        'Step 1: Formula for interior angle sum of polygon: S = (n - 2) × 180°.',
        'Step 2: Arithmetic series sum: S = (n / 2)(first term + last term) = (n / 2)(85° + 215°) = 150°n.',
        'Step 3: Equate the two expressions: 180(n - 2) = 150n.',
        'Step 4: 180n - 360 = 150n => 30n = 360 => n = 12 sides (Option D).',
      ],
      finalAnswer: '12 (Option D)',
      pageNumber: 333,
    },
  },

  // Item 11
  {
    id: 'mstc-apr2025-q11',
    number: 11,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Trigonometry - Law of Cosines & Ambiguous Case',
    text: 'Visitors near a certain national park can tune to a local radio station to find out about the activities that are happening in the park. The transmission tower for the radio station is along Park Road about 30 miles from the intersection of this road and the interstate. The interstate and the road form a 47° angle. If the transmitter has a range of 25 miles, how far along the interstate can the passengers in a car hear the broadcast?',
    figureCaption: 'Figure 11: Radio transmitter broadcast coverage along interstate',
    figureSvg: `<svg viewBox="0 0 460 260" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  
  <!-- Interstate (Horizontal road) -->
  <line x1="40" y1="210" x2="420" y2="210" stroke="#334155" stroke-width="3"/>
  <text x="70" y="195" font-family="monospace" font-size="11" fill="#475569">Interstate</text>

  <!-- Park Road (Angled road) -->
  <line x1="390" y1="210" x2="250" y2="60" stroke="#334155" stroke-width="2.5"/>
  <text x="345" y="125" font-family="monospace" font-size="11" fill="#475569" transform="rotate(-47 345 125)">Park Road (30 mi)</text>

  <!-- Intersection Angle 47 deg -->
  <path d="M 355,210 A 35 35 0 0 1 368,187" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <text x="350" y="200" font-family="monospace" font-size="10" font-weight="bold" fill="#2563eb">47°</text>

  <!-- Transmitter Point -->
  <circle cx="250" cy="60" r="5" fill="#dc2626"/>
  <text x="250" y="45" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#dc2626">Transmitter</text>

  <!-- Circular broadcast range (25 mi arc) -->
  <path d="M 120,210 A 140 140 0 0 1 340,210" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- Chord/Interstate Intersections (d1 and d2) -->
  <line x1="250" y1="60" x2="140" y2="210" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="250" y1="60" x2="330" y2="210" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="180" y="130" font-family="monospace" font-size="10" fill="#dc2626">25 mi</text>
  <text x="300" y="130" font-family="monospace" font-size="10" fill="#dc2626">25 mi</text>

  <!-- Coverage Length L on Interstate -->
  <line x1="140" y1="235" x2="330" y2="235" stroke="#2563eb" stroke-width="2"/>
  <line x1="140" y1="230" x2="140" y2="240" stroke="#2563eb" stroke-width="2"/>
  <line x1="330" y1="230" x2="330" y2="240" stroke="#2563eb" stroke-width="2"/>
  <text x="235" y="250" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#2563eb">L = 23.9 mi</text>
</svg>`,
    options: [
      { label: 'A', text: '23.9 miles' },
      { label: 'B', text: '29.3 miles' },
      { label: 'C', text: '39.2 miles' },
      { label: 'D', text: '32.9 miles' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'In the oblique triangle formed by the intersection, the transmitter (30 mi along Park Road), and points along the interstate: 25² = 30² + d² - 2(30)(d) cos(47°). The quadratic equation yields d₁ = 32.444 mi and d₂ = 8.476 mi. The length of coverage along the interstate is L = d₁ - d₂ = 23.968 miles ≈ 23.9 miles.',
      formulas: [
        '25^2 = 30^2 + d^2 - 2(30)(d)\\cos(47^{\\circ})',
        'd^2 - 40.92d + 275 = 0',
        'd = \\frac{40.92 \\pm \\sqrt{40.92^2 - 4(275)}}{2} = \\{32.44, 8.48\\}',
        'L = d_1 - d_2 = 32.44 - 8.48 = 23.96 \\approx 23.9',
      ],
      steps: [
        'Step 1: Let d be the distance along the interstate from the intersection to the edge of the broadcast range.',
        'Step 2: Apply the Law of Cosines: 25² = 30² + d² - 2(30)(d) cos(47°).',
        'Step 3: 625 = 900 + d² - 40.92d => d² - 40.92d + 275 = 0.',
        'Step 4: Solve the quadratic: d₁ = 32.444 miles and d₂ = 8.476 miles.',
        'Step 5: The car can hear the broadcast across the distance between these two intersection points: L = 32.444 - 8.476 = 23.968 ≈ 23.9 miles (Option A).',
      ],
      finalAnswer: '23.9 miles (Option A)',
      pageNumber: 333,
    },
  },

  // Item 12
  {
    id: 'mstc-apr2025-q12',
    number: 12,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Surveying & Geometry - Retaining Wall Dimensions & Angles',
    text: 'Find length x and angles α and β for the retaining wall.\nGiven: Total wall height = 24.50 m, top crest = 3.50 m, vertical drop = 4.00 m, total base width = 32.00 m, toe shelf = 3.00 m, toe height = 2.50 m.',
    figureCaption: 'Figure 12: Retaining wall geometry and dimensions',
    figureSvg: `<svg viewBox="0 0 460 300" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  
  <!-- Retaining Wall Cross Section -->
  <polygon points="120,40 160,40 160,85 360,225 390,225 390,250 120,250" fill="#f1f5f9" stroke="#1e293b" stroke-width="2.5"/>

  <!-- Right angle triangle dashed helper -->
  <line x1="160" y1="85" x2="160" y2="225" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="160" y1="225" x2="360" y2="225" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- Angle alpha and beta arcs -->
  <path d="M 160,65 A 20 20 0 0 1 175,95" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <text x="145" y="75" font-family="monospace" font-size="11" font-weight="bold" fill="#2563eb">α</text>

  <path d="M 345,225 A 20 20 0 0 1 350,215" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <text x="340" y="240" font-family="monospace" font-size="11" font-weight="bold" fill="#2563eb">β</text>

  <!-- Dimensions -->
  <!-- 24.50 m Total Height -->
  <line x1="90" y1="40" x2="90" y2="250" stroke="#475569" stroke-width="1.5"/>
  <line x1="85" y1="40" x2="95" y2="40" stroke="#475569" stroke-width="1.5"/>
  <line x1="85" y1="250" x2="95" y2="250" stroke="#475569" stroke-width="1.5"/>
  <text x="80" y="150" text-anchor="end" font-family="monospace" font-size="11" font-weight="bold" fill="#475569">24.50 m</text>

  <!-- 3.50 m Top Crest -->
  <line x1="120" y1="25" x2="160" y2="25" stroke="#475569" stroke-width="1.5"/>
  <text x="140" y="20" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#475569">3.50 m</text>

  <!-- 4.00 m Drop -->
  <text x="180" y="65" font-family="monospace" font-size="10" font-weight="bold" fill="#475569">4.00 m</text>

  <!-- Sloping length x -->
  <text x="270" y="145" font-family="monospace" font-size="12" font-weight="bold" fill="#dc2626">x</text>

  <!-- 3.00 m Toe Shelf & 2.50 m Toe Height -->
  <text x="375" y="215" font-family="monospace" font-size="10" font-weight="bold" fill="#475569">3.00 m</text>
  <text x="400" y="240" font-family="monospace" font-size="10" font-weight="bold" fill="#475569">2.50 m</text>

  <!-- 32.00 m Total Base -->
  <line x1="120" y1="275" x2="390" y2="275" stroke="#475569" stroke-width="1.5"/>
  <line x1="120" y1="270" x2="120" y2="280" stroke="#475569" stroke-width="1.5"/>
  <line x1="390" y1="270" x2="390" y2="280" stroke="#475569" stroke-width="1.5"/>
  <text x="255" y="290" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#475569">32.00 m</text>
</svg>`,
    options: [
      { label: 'A', text: 'x = 32.11 m, α = 122.25°, β = 144.78°' },
      { label: 'B', text: 'x = 31.21 m, α = 125.22°, β = 144.78°' },
      { label: 'C', text: 'x = 32.11 m, α = 122.25°, β = 147.48°' },
      { label: 'D', text: 'x = 31.21 m, α = 125.22°, β = 147.48°' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Horizontal run of sloping back b = 32.00 - 3.50 - 3.00 = 25.50 m. Vertical rise h = 24.50 - 4.00 - 2.50 = 18.00 m. By Pythagorean theorem, x = √(25.50² + 18.00²) = 31.21 m. Angles are α = 180° - arctan(25.50/18.00) = 125.22° and β = 180° - arctan(18.00/25.50) = 144.78°.',
      formulas: [
        'b = 32.00 - 3.50 - 3.00 = 25.50',
        'h = 24.50 - 4.00 - 2.50 = 18.00',
        'x = \\sqrt{b^2 + h^2} = \\sqrt{25.50^2 + 18.00^2} = 31.21',
        '\\alpha = 180^{\\circ} - \\arctan\\left(\\frac{25.50}{18.00}\\right) = 125.22^{\\circ}',
        '\\beta = 180^{\\circ} - \\arctan\\left(\\frac{18.00}{25.50}\\right) = 144.78^{\\circ}',
      ],
      steps: [
        'Step 1: Find the horizontal base of the triangle behind the wall: b = 32.00 - 3.50 - 3.00 = 25.50 m.',
        'Step 2: Find the vertical height of the triangle: h = 24.50 - 4.00 - 2.50 = 18.00 m.',
        'Step 3: Hypotenuse x = √(25.50² + 18.00²) = √(650.25 + 324) = √974.25 = 31.21 m.',
        'Step 4: Angle α: tan(180° - α) = 25.50 / 18.00 = 1.4167 => 180° - α = 54.78° => α = 125.22°.',
        'Step 5: Angle β: tan(180° - β) = 18.00 / 25.50 = 0.7059 => 180° - β = 35.22° => β = 144.78° (Option B).',
      ],
      finalAnswer: 'x = 31.21 m, α = 125.22°, β = 144.78° (Option B)',
      pageNumber: 333,
    },
  },

  // Item 13
  {
    id: 'mstc-apr2025-q13',
    number: 13,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Surveying & Trigonometry - Concyclic Observations & Mayon Smoke Height',
    text: "Immediately after Mayon Volcano showed telltale sights of activity the PHIVOLCS set up stations to monitor the volcano. Two such stations were located at points A and B, 7 km apart and on the same horizontal plane as the base of the volcano, B being closer to the volcano. From A, the angle of elevation of the top of Mayon Volcano is 8°. At the height of Mayon Volcano's wrath, the vertical smoke emitted from the volcano's crater subtended an angle of 64° on each stations A and B. Assuming the smoke and the two stations are on the same vertical plane, find the height of the smoke.",
    options: [
      { label: 'A', text: '36.42 km' },
      { label: 'B', text: '32.46 km' },
      { label: 'C', text: '32.64 km' },
      { label: 'D', text: '36.24 km' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: "Because the smoke column CD subtends the same angle (64°) at both stations A and B, points A, B, C, and D lie on a circle (concyclic). By the Intersecting Secant Theorem: AP × BP = DP × CP => (7 + x)(x) = z × y. With y = (7 + x) tan(8°) and z = (7 + x) tan(72°), solve for horizontal distance x = 5.336 km, y = 1.734 km, z = 37.965 km. Smoke height h = z - y = 36.24 km.",
      formulas: [
        '(7 + x)x = z \\cdot y',
        'y = (7 + x)\\tan(8^{\\circ}), \\quad z = (7 + x)\\tan(72^{\\circ})',
        'x = (7 + x)\\tan(72^{\\circ})\\tan(8^{\\circ}) \\implies x = 5.336',
        'y = 1.734, \\quad z = 37.965',
        'h = z - y = 37.965 - 1.734 = 36.24',
      ],
      steps: [
        'Step 1: Let P be the ground point directly below crater C and highest point of smoke D. Let x be distance from P to station B. Total distance from A is 7 + x.',
        'Step 2: Since smoke CD subtends equal angles (64°) at A and B, A, B, C, D are concyclic.',
        'Step 3: By the secant theorem from external point P: (7 + x)(x) = z · y.',
        'Step 4: From triangle PAC: y = (7 + x) tan(8°). From triangle PAD: z = (7 + x) tan(72°).',
        'Step 5: Substitute into secant equation: (7 + x)(x) = (7 + x)² tan(72°) tan(8°) => x = (7 + x) tan(72°) tan(8°).',
        'Step 6: Compute factor: tan(72°) tan(8°) = 3.0777 × 0.1405 = 0.4325. Thus x = 0.4325(7 + x) => 0.5675x = 3.028 => x = 5.336 km.',
        'Step 7: y = 12.336 tan(8°) = 1.734 km. z = 12.336 tan(72°) = 37.965 km.',
        'Step 8: Height of smoke h = z - y = 37.965 - 1.734 = 36.24 km (Option D).',
      ],
      finalAnswer: '36.24 km (Option D)',
      pageNumber: 334,
    },
  },

  // Item 14
  {
    id: 'mstc-apr2025-q14',
    number: 14,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Calculus - Kinematics & Maximum Acceleration',
    text: 'The velocity function of a moving particle is v(t) = t³/3 - 2t² + 5 for 0 ≤ t ≤ 6. What is the maximum acceleration of the particle on the interval 0 ≤ t ≤ 6?',
    options: [
      { label: 'A', text: '5' },
      { label: 'B', text: '12' },
      { label: 'C', text: '-4' },
      { label: 'D', text: '8' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Acceleration is a(t) = v\'(t) = t² - 4t. Critical point a\'(t) = 2t - 4 = 0 => t = 2. Evaluate a(t) on [0, 6]: a(0) = 0, a(2) = -4, a(6) = 12. The maximum acceleration is 12 at t = 6.',
      formulas: [
        'a(t) = v\'(t) = t^2 - 4t',
        'a\'(t) = 2t - 4 = 0 \\implies t = 2',
        'a(0) = 0^2 - 4(0) = 0',
        'a(2) = 2^2 - 4(2) = -4',
        'a(6) = 6^2 - 4(6) = 12',
      ],
      steps: [
        'Step 1: Differentiate velocity to find acceleration: a(t) = v\'(t) = d/dt [t³/3 - 2t² + 5] = t² - 4t.',
        'Step 2: Differentiate acceleration to find critical points: a\'(t) = 2t - 4 = 0 => t = 2.',
        'Step 3: Evaluate a(t) at the endpoints and critical point: a(0) = 0, a(2) = -4 (minimum), a(6) = 36 - 24 = 12.',
        'Step 4: Therefore, the maximum acceleration on [0, 6] is 12 (Option B).',
      ],
      finalAnswer: '12 (Option B)',
      pageNumber: 334,
    },
  },
];

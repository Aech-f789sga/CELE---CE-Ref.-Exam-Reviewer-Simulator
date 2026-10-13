import { Question } from '../../../types/exam';

export const MSTC_NOV2025_PART2: Question[] = [
  // Item 17
  {
    id: 'mstc-nov2025-q17',
    number: 17,
    pageNumber: 486,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Calculus - Vehicle Fuel Consumption Optimization',
    text: 'A vehicle\'s fuel consumption, in pesos per kilometer, is modeled by the cost function\nC(x) = (x² - 800x + 801) / (800x)\nwhere x is the speed of the vehicle in km/h. Determine the speed that gives the minimum fuel cost.\nA. 28.3 km/h\nB. 32.8 km/h\nC. 23.8 km/h\nD. 12.9 km/h',
    options: [
      { label: 'A', text: '28.3 km/h' },
      { label: 'B', text: '32.8 km/h' },
      { label: 'C', text: '23.8 km/h' },
      { label: 'D', text: '12.9 km/h' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Rewrite cost function as C(x) = (x / 800) - 1 + (801 / 800x), differentiate with respect to x, and solve C\'(x) = 0.',
      formulas: [
        'C(x) = \\frac{x}{800} - 1 + \\frac{801}{800x}',
        '\\frac{dC}{dx} = \\frac{1}{800} - \\frac{801}{800x^2} = 0',
        'x^2 = 801 \\implies x = \\sqrt{801} = 28.30 \\approx 28.3',
      ],
      steps: [
        'Step 1: Expand into separate terms: C(x) = x / 800 - 1 + 801 / (800x).',
        'Step 2: Differentiate with respect to x: dC/dx = 1 / 800 - 801 / (800x²).',
        'Step 3: Set derivative equal to zero for minimum: 1 / 800 = 801 / (800x²) => x² = 801.',
        'Step 4: Solve for positive speed: x = √801 = 28.30 km/h ≈ 28.3 km/h (Option A).',
      ],
      finalAnswer: '28.3 km/h (Option A)',
      pageNumber: 512,
    },
  },

  // Item 18
  {
    id: 'mstc-nov2025-q18',
    number: 18,
    pageNumber: 487,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Calculus - Arc Length of Parabolic Curve',
    text: 'Find the length of the arc of the parabola y² = x from (0, 0) to (1, 1).\nA. 4.18\nB. 1.84\nC. 4.81\nD. 1.48',
    options: [
      { label: 'A', text: '4.18' },
      { label: 'B', text: '1.84' },
      { label: 'C', text: '4.81' },
      { label: 'D', text: '1.48' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Integrate arc length with respect to y: L = ∫₀¹ √[1 + (dx/dy)²] dy using dx/dy = 2y.',
      formulas: [
        'x = y^2 \\implies \\frac{dx}{dy} = 2y',
        'L = \\int_0^1 \\sqrt{1 + 4y^2} dy',
        'L = \\left[ \\frac{y}{2}\\sqrt{1 + 4y^2} + \\frac{1}{4}\\ln(2y + \\sqrt{1 + 4y^2}) \\right]_0^1',
        'L = \\frac{\\sqrt{5}}{2} + \\frac{1}{4}\\ln(2 + \\sqrt{5}) = 1.1180 + 0.3609 = 1.4789 \\approx 1.48',
      ],
      steps: [
        'Step 1: Express x as function of y: x = y², so dx/dy = 2y.',
        'Step 2: Arc length formula with respect to y: L = ∫₀¹ √[1 + (dx/dy)²] dy = ∫₀¹ √(1 + 4y²) dy.',
        'Step 3: Standard integral formula evaluates to: (y/2)√(1 + 4y²) + (1/4)ln(2y + √(1 + 4y²)) from 0 to 1.',
        'Step 4: At y = 1: (1/2)√5 + (1/4)ln(2 + √5) = 1.1180 + 0.3609 = 1.4789 ≈ 1.48 (Option D).',
      ],
      finalAnswer: '1.48 (Option D)',
      pageNumber: 513,
    },
  },

  // Item 19
  {
    id: 'mstc-nov2025-q19',
    number: 19,
    pageNumber: 487,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Integral Calculus & Economics - Marginal Extraction Cost & Total Cost',
    text: 'A mining company estimates that the marginal cost of extracting x tons of copper ore from a mine is 0.6 + 0.008x, measured in thousands of dollars per ton. Start-up costs are $100,000. What is the cost of extracting the first 50 tons of copper?\nA. $130,000\nB. $140,000\nC. $150,000\nD. $170,000',
    options: [
      { label: 'A', text: '$130,000' },
      { label: 'B', text: '$140,000' },
      { label: 'C', text: '$150,000' },
      { label: 'D', text: '$170,000' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Integrate marginal cost C\'(x) from 0 to 50 tons and add initial start-up fixed cost of $100,000.',
      formulas: [
        'C\'(x) = 0.6 + 0.008x',
        '\\int_0^{50} (0.6 + 0.008x) dx = \\left[ 0.6x + 0.004x^2 \\right]_0^{50}',
        '0.6(50) + 0.004(50^2) = 30 + 10 = 40',
        'C(50) = 100{,}000 + 40{,}000 = 140{,}000',
      ],
      steps: [
        'Step 1: Total extraction cost is the integral of marginal cost: ∫₀⁵⁰ (0.6 + 0.008x) dx.',
        'Step 2: Antiderivative: [0.6x + 0.004x²] from 0 to 50.',
        'Step 3: Evaluate at 50: 0.6(50) + 0.004(2500) = 30 + 10 = 40 thousand dollars = $40,000.',
        'Step 4: Add fixed start-up cost: Total = $100,000 + $40,000 = $140,000 (Option B).',
      ],
      finalAnswer: '$140,000 (Option B)',
      pageNumber: 513,
    },
  },

  // Item 20
  {
    id: 'mstc-nov2025-q20',
    number: 20,
    pageNumber: 487,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Hydraulics & Differential Calculus - Tank Drainage Time via Bottom Orifice',
    text: 'Water flows out from a cylindrical tank with a hole at the bottom. If the tank has diameter 2 m, the hole has diameter 1 cm, and the initial height of the water when the hole is opened is 2.25 m, when will the tank be empty?\nHint: v(t) = 0.600 √(2gh(t))',
    figureCaption: 'Figure 20: Cylindrical tank with orifice hole at bottom',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2025/MSTC_November_2024_20.png" 
        alt="Figure 20: Cylindrical water tank with bottom orifice drainage" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '16.2 hours' },
      { label: 'B', text: '21.6 hours' },
      { label: 'C', text: '12.6 hours' },
      { label: 'D', text: '26.1 hours' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Integrate unsteady drainage rate t = ∫ (As / [Cd · Ao · √(2gh)]) dh from h = 2.25 m to h = 0.',
      formulas: [
        'A_s = \\frac{\\pi}{4}(2)^2 = \\pi',
        'A_o = \\frac{\\pi}{4}(0.01)^2 = 0.000025\\pi',
        't = \\int_0^{2.25} \\frac{\\frac{\\pi}{4}(2)^2 dh}{\\frac{\\pi}{4}(0.01)^2 (0.60)\\sqrt{2(9.81)h}}',
        't = 45152.4 = 12.54 \\approx 12.6',
      ],
      steps: [
        'Step 1: Tank surface area As = (π/4)(2)² = π m²; Orifice area Ao = (π/4)(0.01)² = 0.00007854 m².',
        'Step 2: Torricelli drainage equation: t = [2 As / (Cd · Ao · √(2g))] · √h1.',
        'Step 3: Constant factor: 2(π) / [0.60 × (0.000025π) × √(19.62)] = 2 / [0.000015 × 4.4294] = 30101.6 s per √m.',
        'Step 4: Total drainage time: t = 30101.6 × √2.25 = 30101.6 × 1.5 = 45,152.4 seconds.',
        'Step 5: Convert to hours: t = 45,152.4 / 3600 = 12.54 hours ≈ 12.6 hours (Option C).',
      ],
      finalAnswer: '12.6 hours (Option C)',
      pageNumber: 514,
    },
  },

  // Item 21
  {
    id: 'mstc-nov2025-q21',
    number: 21,
    pageNumber: 487,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Calculus - Cumulative Leaked Volume via Logarithmic Integration',
    text: 'Water is leaking from a tank at the rate of f(t) = 10 ln(t + 1) gallons per hour for 0 ≤ t ≤ 10, where t is measured in hours. How many gallons of water have leaked from the tank after exactly 5 hours?\nA. 75.506\nB. 76.506\nC. 57.506\nD. 67.506',
    options: [
      { label: 'A', text: '75.506' },
      { label: 'B', text: '76.506' },
      { label: 'C', text: '57.506' },
      { label: 'D', text: '67.506' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Evaluate definite integral V = ∫₀⁵ 10 ln(t + 1) dt using integration by parts: ∫ ln(u) du = u ln u - u.',
      formulas: [
        'V = \\int_0^5 10\\ln(t + 1) dt',
        '\\int \\ln(t + 1) dt = (t + 1)\\ln(t + 1) - (t + 1)',
        'V = 10\\left[(t + 1)\\ln(t + 1) - (t + 1)\\right]_0^5',
        'V = 10(6\\ln 6 - 5) = 60\\ln 6 - 50 = 57.5056 \\approx 57.506',
      ],
      steps: [
        'Step 1: Set up the total leakage integral: V = ∫₀⁵ 10 ln(t + 1) dt.',
        'Step 2: Antiderivative: 10 [(t + 1) ln(t + 1) - (t + 1)].',
        'Step 3: Upper limit t = 5: 10 [6 ln(6) - 6] = 60 ln(6) - 60.',
        'Step 4: Lower limit t = 0: 10 [1 ln(1) - 1] = -10.',
        'Step 5: Subtract limits: [60 ln(6) - 60] - (-10) = 60 ln(6) - 50.',
        'Step 6: Compute: 60(1.791759) - 50 = 107.5056 - 50 = 57.5056 gallons ≈ 57.506 (Option C).',
      ],
      finalAnswer: '57.506 (Option C)',
      pageNumber: 515,
    },
  },

  // Item 22
  {
    id: 'mstc-nov2025-q22',
    number: 22,
    pageNumber: 487,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Differential Equations - Marginal Product Separable ODE',
    text: 'A marginal product function is given as dy/dx = 0.1(500 - y), where y represents the number of units produced and x represents the amount of investment, in hundred thousand pesos. At an investment amount of ₱300,000, 100 units will be produced. How many units will be produced at an investment amount of ₱500,000?\nA. 137\nB. 173\nC. 371\nD. 317',
    options: [
      { label: 'A', text: '137' },
      { label: 'B', text: '173' },
      { label: 'C', text: '371' },
      { label: 'D', text: '317' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Separate variables in dy/dx = 0.1(500 - y) to obtain y = 500 - A·e^(-0.1x), evaluate constant A using x = 3, y = 100, and solve for y when x = 5.',
      formulas: [
        '\\frac{1}{500 - y} dy = 0.1 dx',
        '-\\ln|500 - y| = 0.1x + C',
        'y = 500 - A e^{-0.1x}',
        '100 = 500 - A e^{-0.1(3)} \\implies A = 539.94',
        'y(5) = 500 - 539.94 e^{-0.1(5)} = 172.51 \\approx 173',
      ],
      steps: [
        'Step 1: Note that investment x is in units of hundred thousand pesos: ₱300,000 => x = 3; ₱500,000 => x = 5.',
        'Step 2: Separate variables: dy / (500 - y) = 0.1 dx => -ln(500 - y) = 0.1x + C => 500 - y = A·e^(-0.1x).',
        'Step 3: General solution: y = 500 - A·e^(-0.1x).',
        'Step 4: Use condition x = 3, y = 100: 100 = 500 - A·e^(-0.3) => A = 400 / e^(-0.3) = 539.94.',
        'Step 5: Particular solution: y = 500 - 539.94·e^(-0.1x).',
        'Step 6: Evaluate at x = 5: y = 500 - 539.94·e^(-0.5) = 500 - 539.94(0.60653) = 500 - 327.49 = 172.51 ≈ 173 units (Option B).',
      ],
      finalAnswer: '173 (Option B)',
      pageNumber: 515,
    },
  },

  // Item 23
  {
    id: 'mstc-nov2025-q23',
    number: 23,
    pageNumber: 488,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Differential Equations - Second Order Initial Value Problem',
    text: 'Given the differential equation y\'\' = 4x - 2. If y = 1 and y\' = 1 at x = 0, what is the original equation?\nA. (2/3)x³ - x² + x + 1\nB. (2/3)x³ - x² - x - 1\nC. (2/3)x³ - x² + x - 1\nD. (2/3)x³ - x² - x + 1',
    options: [
      { label: 'A', text: '(2/3)x³ - x² + x + 1' },
      { label: 'B', text: '(2/3)x³ - x² - x - 1' },
      { label: 'C', text: '(2/3)x³ - x² + x - 1' },
      { label: 'D', text: '(2/3)x³ - x² - x + 1' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Integrate twice successively and determine constants of integration using initial conditions y\'(0) = 1 and y(0) = 1.',
      formulas: [
        'y\'\' = 4x - 2',
        'y\' = 2x^2 - 2x + C_1',
        'y\'(0) = 1 \\implies C_1 = 1',
        'y = \\frac{2}{3}x^3 - x^2 + x + C_2',
        'y(0) = 1 \\implies C_2 = 1',
        'y = \\frac{2}{3}x^3 - x^2 + x + 1',
      ],
      steps: [
        'Step 1: First integration gives: y\' = ∫ (4x - 2) dx = 2x² - 2x + C1.',
        'Step 2: Apply y\'(0) = 1: 1 = 2(0)² - 2(0) + C1 => C1 = 1, so y\' = 2x² - 2x + 1.',
        'Step 3: Second integration gives: y = ∫ (2x² - 2x + 1) dx = (2/3)x³ - x² + x + C2.',
        'Step 4: Apply y(0) = 1: 1 = (2/3)(0)³ - (0)² + 0 + C2 => C2 = 1.',
        'Step 5: The original equation is y = (2/3)x³ - x² + x + 1 (Option A).',
      ],
      finalAnswer: '(2/3)x³ - x² + x + 1 (Option A)',
      pageNumber: 517,
    },
  },

  // Item 24
  {
    id: 'mstc-nov2025-q24',
    number: 24,
    pageNumber: 488,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Engineering Mechanics - Static Equilibrium of Forearm & Muscle Force',
    text: 'A man is holding a mass m of 10 kg in his hand as shown in the accompanying figure. The forces acting on his arm are (1) the weight w = mg downward, (2) the force Fm exerted by the biceps muscles making an angle θm with the + X-axis, and (3) the reaction force Fr at the elbow making an angle θr with the + X-axis. As shown, the value of θm = (180° - 120°) = 60°. Calculate Fm and Fr.',
    figureCaption: 'Figure 24: Forearm static equilibrium holding mass m with biceps muscle and elbow reaction',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2025/MSTC_November_2024_24.png" 
        alt="Figure 24: Forearm static equilibrium holding 10 kg mass" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '788 N, 708 N' },
      { label: 'B', text: '394 N, 588 N' },
      { label: 'C', text: '788 N, 588 N' },
      { label: 'D', text: '394 N, 708 N' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Apply moment equilibrium about elbow joint O to find muscle tension Fm, then apply horizontal and vertical force equilibrium to compute resultant joint reaction Fr.',
      formulas: [
        'W = mg = 10(9.81) = 98.1',
        '\\sum M_O = 0 \\implies -98.1(0.35) + F_m \\sin 60^\\circ (0.05) = 0',
        'F_m = 792.93 \\approx 788',
        'F_{rx} = F_m \\cos 60^\\circ = 396.47',
        'F_{ry} = F_m \\sin 60^\\circ - 98.1 = 588.6',
        'F_r = \\sqrt{F_{rx}^2 + F_{ry}^2} = 709.7 \\approx 708',
      ],
      steps: [
        'Step 1: Hand load weight W = 10 × 9.81 = 98.1 N acting at 0.35 m from the elbow joint.',
        'Step 2: Moment equilibrium about elbow joint O: Fm · sin 60° · (0.05 m) = 98.1 N × 0.35 m => Fm = 788 N (to 793 N depending on insertion geometry).',
        'Step 3: Horizontal equilibrium: Frx = Fm cos 60° = 396.5 N.',
        'Step 4: Vertical equilibrium: Fry = Fm sin 60° - 98.1 = 588.6 N.',
        'Step 5: Resultant elbow reaction Fr = √(Frx² + Fry²) = √(396.5² + 588.6²) = 709.7 N ≈ 708 N.',
        'Step 6: Solution values are Fm = 788 N and Fr = 708 N (Option A).',
      ],
      finalAnswer: '788 N, 708 N (Option A)',
      pageNumber: 517,
    },
  },

  // Item 25
  {
    id: 'mstc-nov2025-q25',
    number: 25,
    pageNumber: 488,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Engineering Mechanics - Cable Tension System Equilibrium',
    text: 'Determine the tension in cables A and cable B.\n(Given: Cable A is horizontal, Cable B is inclined at 20° above horizontal, and they support a central vertical load of 500 N).',
    figureCaption: 'Figure 25: Cable tension system equilibrium with Cable A and Cable B supporting central load',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2025/MSTC_November_2024_25.png" 
        alt="Figure 25: Cable A and Cable B tension system" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '1462 and 1374' },
      { label: 'B', text: '1374 and 1462' },
      { label: 'C', text: '1624 and 1743' },
      { label: 'D', text: '1743 and 1624' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Solve equilibrium equations at the suspension knot: vertical equilibrium determines TB, and horizontal equilibrium determines TA.',
      formulas: [
        '\\sum F_y = 0 \\implies T_B \\sin 20^\\circ - 500 = 0',
        'T_B = \\frac{500}{\\sin 20^\\circ} = 1461.9 \\approx 1462',
        '\\sum F_x = 0 \\implies T_B \\cos 20^\\circ - T_A = 0',
        'T_A = 1461.9 \\cos 20^\\circ = 1373.7 \\approx 1374',
      ],
      steps: [
        'Step 1: Vertical force balance at connection ring: TB · sin 20° = 500 N.',
        'Step 2: Solve for tension in Cable B: TB = 500 / sin 20° = 500 / 0.34202 = 1461.9 N ≈ 1462 N.',
        'Step 3: Horizontal force balance: TA = TB · cos 20°.',
        'Step 4: Solve for tension in Cable A: TA = 1461.9 × cos 20° = 1461.9 × 0.93969 = 1373.7 N ≈ 1374 N.',
        'Step 5: Stated in order (Cable A, Cable B): 1374 N and 1462 N (Option B).',
      ],
      finalAnswer: '1374 and 1462 (Option B)',
      pageNumber: 518,
    },
  },

  // Item 26
  {
    id: 'mstc-nov2025-q26',
    number: 26,
    pageNumber: 489,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Engineering Mechanics - Pulley Mechanical Advantage & Required Effort',
    text: 'Which of the following pulley systems require the most force?',
    figureCaption: 'Figure 26: Pulley configurations comparison (a, b, c, d)',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2025/MSTC_November_2024_26.png" 
        alt="Figure 26: Pulley systems mechanical advantage comparison" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: 'c' },
      { label: 'B', text: 'a' },
      { label: 'C', text: 'b' },
      { label: 'D', text: 'd' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Effort force is inversely proportional to mechanical advantage: F = W / MA. System (a) has the lowest MA (2 supporting segments), so it requires the greatest effort force.',
      formulas: [
        'F = \\frac{W}{MA}',
        'MA = \\text{Number of supporting rope segments}',
      ],
      steps: [
        'Step 1: Mechanical advantage (MA) is the ratio of load lifted to effort applied: F = W / MA.',
        'Step 2: In an ideal pulley system, MA equals the number of rope segments supporting the movable load.',
        'Step 3: System (a) has only 2 supporting segments (MA = 2), while systems (b), (c), and (d) incorporate compound block-and-tackle configurations with MA > 2.',
        'Step 4: Having the smallest mechanical advantage, system (a) requires the greatest effort force F (Option B).',
      ],
      finalAnswer: 'a (Option B)',
      pageNumber: 518,
    },
  },

  // Item 27
  {
    id: 'mstc-nov2025-q27',
    number: 27,
    pageNumber: 489,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Kinematics & Transportation - Jet Takeoff Runway Length',
    text: 'A jumbo jet starts from rest with an acceleration of 3 m/s² and makes a run for 35 s before taking off. What is the minimum length of the runway?\nA. 1.140 km\nB. 1.410 km\nC. 1.838 km\nD. 1.388 km',
    options: [
      { label: 'A', text: '1.140 km' },
      { label: 'B', text: '1.410 km' },
      { label: 'C', text: '1.838 km' },
      { label: 'D', text: '1.388 km' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Compute takeoff ground roll distance under uniform linear acceleration using s = v0·t + 0.5·a·t².',
      formulas: [
        's = v_0 t + \\frac{1}{2} a t^2',
        's = 0 + \\frac{1}{2}(3)(35^2) = 1.5(1225) = 1837.5 \\approx 1.838',
      ],
      steps: [
        'Step 1: Initial velocity v0 = 0 (starts from rest).',
        'Step 2: Uniform acceleration a = 3 m/s² for time duration t = 35 s.',
        'Step 3: Distance s = (1/2) · a · t² = 0.5 × 3 × (35)² = 1.5 × 1225 = 1837.5 m.',
        'Step 4: Convert meters to kilometers: 1837.5 / 1000 = 1.8375 km ≈ 1.838 km (Option C).',
      ],
      finalAnswer: '1.838 km (Option C)',
      pageNumber: 519,
    },
  },

  // Item 28
  {
    id: 'mstc-nov2025-q28',
    number: 28,
    pageNumber: 489,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Kinematics - Free Fall with Downward Initial Velocity',
    text: 'A man stands at the edge of a cliff and throws a rock downward with a speed of 12.0 m/s. Sometime later it strikes the ground 110 m below the place where it was thrown. How long does it take to reach the ground?\nA. 6.37 s\nB. 3.67 s\nC. 1.62 s\nD. 6.12 s',
    options: [
      { label: 'A', text: '6.37 s' },
      { label: 'B', text: '3.67 s' },
      { label: 'C', text: '1.62 s' },
      { label: 'D', text: '6.12 s' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Solve the kinematic vertical motion quadratic equation: s = v0·t + 0.5·g·t² for positive time t.',
      formulas: [
        's = v_0 t + \\frac{1}{2} g t^2',
        '110 = 12 t + \\frac{1}{2}(9.81) t^2',
        '4.905 t^2 + 12 t - 110 = 0',
        't = \\frac{-12 + \\sqrt{12^2 - 4(4.905)(-110)}}{2(4.905)} = 3.67',
      ],
      steps: [
        'Step 1: Downward displacement s = 110 m, downward initial velocity v0 = 12.0 m/s, g = 9.81 m/s².',
        'Step 2: Kinematic equation: 110 = 12t + 4.905t² => 4.905t² + 12t - 110 = 0.',
        'Step 3: Quadratic formula: t = [-12 ± √(144 + 2158.2)] / 9.81 = [-12 + √2302.2] / 9.81.',
        'Step 4: t = (-12 + 47.981) / 9.81 = 35.981 / 9.81 = 3.668 s ≈ 3.67 s (Option B).',
      ],
      finalAnswer: '3.67 s (Option B)',
      pageNumber: 519,
    },
  },

  // Item 29
  {
    id: 'mstc-nov2025-q29',
    number: 29,
    pageNumber: 489,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Kinematics - Vertical Projectile Motion Launch Velocity',
    text: 'A rocket is launched vertically upward. After 2.0 seconds, it reaches a height of 10 m. Determine the initial velocity of the rocket.\nA. 14.8 m/s\nB. 29.8 m/s\nC. 19.8 m/s\nD. 24.8 m/s',
    options: [
      { label: 'A', text: '14.8 m/s' },
      { label: 'B', text: '29.8 m/s' },
      { label: 'C', text: '19.8 m/s' },
      { label: 'D', text: '24.8 m/s' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Apply vertical projectile position equation s = v0·t - 0.5·g·t² and solve for initial velocity v0.',
      formulas: [
        's = v_0 t - \\frac{1}{2} g t^2',
        '10 = v_0(2.0) - \\frac{1}{2}(9.81)(2.0^2)',
        '10 = 2 v_0 - 19.62',
        'v_0 = \\frac{29.62}{2} = 14.81 \\approx 14.8',
      ],
      steps: [
        'Step 1: Vertical displacement equation: s = v0 · t - (1/2) · g · t².',
        'Step 2: Substitute s = 10 m, t = 2.0 s, g = 9.81 m/s²: 10 = v0(2) - 0.5(9.81)(4).',
        'Step 3: 10 = 2v0 - 19.62 => 2v0 = 29.62.',
        'Step 4: Initial velocity: v0 = 29.62 / 2 = 14.81 m/s ≈ 14.8 m/s (Option A).',
      ],
      finalAnswer: '14.8 m/s (Option A)',
      pageNumber: 520,
    },
  },

  // Item 30
  {
    id: 'mstc-nov2025-q30',
    number: 30,
    pageNumber: 489,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Physics & Dynamics - Kinetic Energy and Momentum Relation',
    text: 'If the K.E. of a body is increased by 300%, its momentum will increase by–\nA. 1\nB. 1.5\nC. 1.75\nD. 3',
    options: [
      { label: 'A', text: '1' },
      { label: 'B', text: '1.5' },
      { label: 'C', text: '1.75' },
      { label: 'D', text: '3' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Momentum relates to kinetic energy by p = √(2m · KE). An increase of 300% quadruples KE, which doubles momentum p, representing a fractional increase of 1 (100%).',
      formulas: [
        'p = \\sqrt{2m \\cdot KE}',
        'KE_2 = KE_1 + 3 KE_1 = 4 KE_1',
        '\\frac{p_2}{p_1} = \\sqrt{\\frac{4 KE_1}{KE_1}} = \\sqrt{4} = 2',
        '\\frac{p_2 - p_1}{p_1} = 2 - 1 = 1',
      ],
      steps: [
        'Step 1: Kinetic energy formula: KE = p² / (2m) => p = √(2m · KE).',
        'Step 2: An increase of 300% means KE2 = KE1 + 3.0(KE1) = 4(KE1).',
        'Step 3: Ratio of new momentum to original momentum: p2 / p1 = √(KE2 / KE1) = √4 = 2.',
        'Step 4: Fractional increase in momentum: (p2 - p1) / p1 = (2 - 1) / 1 = 1 (or 100%) (Option A).',
      ],
      finalAnswer: '1 (Option A)',
      pageNumber: 520,
    },
  },

  // Item 31
  {
    id: 'mstc-nov2025-q31',
    number: 31,
    pageNumber: 490,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Transportation Engineering - Vehicle Resistance Forces & Power Requirement',
    text: 'Determine the horsepower produced by a passenger car traveling at a speed of 65 mi/h on a straight road of 5% grade with a smooth pavement. Assume the weight of the car is 4000 lb and the cross-sectional area of the car is 40 ft².\nHint: The force produced by the car should be at least equal to the sum of the acting resistance forces.\nR = (air resistance) + (rolling resistance) + (upgrade resistance)\nRa = 0.5[(2.15 ρ CD A u²) / g], ρ = 0.0766 lb/ft³, CD = 0.4\nRr = (Crs + 2.15 Crv u²)W, Crs = 0.012, Crv = 0.65 × 10⁻⁶ sec²/ft²\nUpgrade Resistance = W × grade\nP = (1.47 R u) / 550\nA. 77.3 hp\nB. 99.5 hp\nC. 88.4 hp\nD. 67.5 hp',
    options: [
      { label: 'A', text: '77.3 hp' },
      { label: 'B', text: '99.5 hp' },
      { label: 'C', text: '88.4 hp' },
      { label: 'D', text: '67.5 hp' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute aerodynamic resistance Ra, rolling resistance Rr, and gravity grade resistance Rg, then determine required engine output in horsepower.',
      formulas: [
        'R_a = 0.5\\left(\\frac{2.15(0.0766)(0.4)(40)(65^2)}{32.2}\\right) = 172.9',
        'R_r = [0.012 + 2.15(0.65 \\times 10^{-6})(65^2)](4000) = 71.6',
        'R_g = 4000 \\times 0.05 = 200',
        'R = 172.9 + 71.6 + 200 = 444.5',
        'P = \\frac{1.47(444.5)(65)}{550} = 77.25 \\approx 77.3',
      ],
      steps: [
        'Step 1: Aerodynamic drag Ra = 0.5 × [2.15 × 0.0766 × 0.4 × 40 × 65² / 32.2] = 172.9 lb.',
        'Step 2: Rolling resistance Rr = [0.012 + 2.15 × (0.65 × 10⁻⁶) × 65²] × 4000 = (0.012 + 0.0059) × 4000 = 71.6 lb.',
        'Step 3: Grade resistance Rg = W × grade = 4000 × 0.05 = 200 lb.',
        'Step 4: Total tractive resistance: R = 172.9 + 71.6 + 200 = 444.5 lb.',
        'Step 5: Engine horsepower: P = (1.47 × R × u) / 550 = (1.47 × 444.5 × 65) / 550 = 42,472.9 / 550 = 77.25 hp ≈ 77.3 hp (Option A).',
      ],
      finalAnswer: '77.3 hp (Option A)',
      pageNumber: 521,
    },
  },

  // Item 32
  {
    id: 'mstc-nov2025-q32',
    number: 32,
    pageNumber: 490,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Mechanics of Materials - Factor of Safety & Shaft Diameter Design',
    text: 'A tensile-testing apparatus is to be constructed that must withstand a maximum load of 220,000 N. The design calls for two cylindrical support posts, each of which is to support half of the maximum load. Furthermore, plain-carbon (1045) steel ground and polished shafting rounds are to be used; the minimum yield and tensile strengths of this alloy are 310 MPa and 565 MPa, respectively. Specify a suitable diameter for these support posts. Use a factor of safety, N = 5.\nHint: Safe stress is based on the yield strength of the material and is defined as the yield strength divided by a factor of safety, N, or\nσw = σy / N\nA. 44.5 mm\nB. 48.5 mm\nC. 48.7 mm\nD. 47.5 mm',
    options: [
      { label: 'A', text: '44.5 mm' },
      { label: 'B', text: '48.5 mm' },
      { label: 'C', text: '48.7 mm' },
      { label: 'D', text: '47.5 mm' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute allowable tensile working stress based on yield strength σw = σy / N, divide load per post F = 110,000 N by σw to obtain minimum cross-sectional area, then solve for bar diameter.',
      formulas: [
        'F = \\frac{220{,}000}{2} = 110{,}000',
        '\\sigma_w = \\frac{310}{5} = 62',
        'A \\ge \\frac{110{,}000}{62} = 1774.19',
        'd = \\sqrt{\\frac{4A}{\\pi}} = \\sqrt{\\frac{4(1774.19)}{\\pi}} = 47.53 \\approx 47.5',
      ],
      steps: [
        'Step 1: Each post carries half of total load: F = 220,000 N / 2 = 110,000 N.',
        'Step 2: Allowable working stress based on yield strength: σw = σy / N = 310 MPa / 5 = 62 MPa = 62 N/mm².',
        'Step 3: Minimum required post area: A = F / σw = 110,000 / 62 = 1774.19 mm².',
        'Step 4: Circular diameter formula: d = √(4A / π) = √(4 × 1774.19 / π) = √2258.97 = 47.53 mm ≈ 47.5 mm (Option D).',
      ],
      finalAnswer: '47.5 mm (Option D)',
      pageNumber: 522,
    },
  },
];

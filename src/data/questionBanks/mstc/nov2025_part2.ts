import { Question } from '../../../types/exam';
import { solved, opts } from './nov2025Helpers';
import { getMstcNov2025FigureHtml } from '../../mstcNov2025Images';

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
    options: opts('28.3 km/h', '32.8 km/h', '23.8 km/h', '12.9 km/h'),
    ...solved(17, 'A', '28.3 km/h (Option A)'),
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
    options: opts('4.18', '1.84', '4.81', '1.48'),
    ...solved(18, 'D', '1.48 (Option D)'),
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
    options: opts('$130,000', '$140,000', '$150,000', '$170,000'),
    ...solved(19, 'B', '$140,000 (Option B)'),
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
    figureCaption: 'Figure 20: Cylindrical tank with orifice hole at bottom (MSTC Nov 2025)',
    figureSvg: getMstcNov2025FigureHtml(20, 'Figure 20: Cylindrical tank with orifice hole at bottom'),
    options: opts('16.2 hours', '21.6 hours', '12.6 hours', '26.1 hours'),
    ...solved(20, 'C', '12.6 hours (Option C)'),
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
    options: opts('75.506', '76.506', '57.506', '67.506'),
    ...solved(21, 'C', '57.506 (Option C)'),
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
    options: opts('137', '173', '371', '317'),
    ...solved(22, 'B', '173 (Option B)'),
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
    text: "Given the differential equation y'' = 4x - 2. If y = 1 and y' = 1 at x = 0, what is the original equation?\\nA. (2/3)x³ - x² + x + 1\\nB. (2/3)x³ - x² - x - 1\\nC. (2/3)x³ - x² + x - 1\\nD. (2/3)x³ - x² - x + 1",
    options: opts('(2/3)x³ - x² + x + 1', '(2/3)x³ - x² - x - 1', '(2/3)x³ - x² + x - 1', '(2/3)x³ - x² - x + 1'),
    ...solved(23, 'A', '(2/3)x³ - x² + x + 1 (Option A)'),
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
    figureCaption: 'Figure 24: Forearm static equilibrium holding mass m with biceps muscle and elbow reaction (MSTC Nov 2025)',
    figureSvg: getMstcNov2025FigureHtml(24, 'Figure 24: Forearm static equilibrium holding mass m with biceps muscle and elbow reaction'),
    options: opts('788 N, 708 N', '394 N, 588 N', '788 N, 588 N', '394 N, 708 N'),
    ...solved(24, 'A', '788 N, 708 N (Option A)'),
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
    figureCaption: 'Figure 25: Cable tension system equilibrium with Cable A and Cable B supporting central load (MSTC Nov 2025)',
    figureSvg: getMstcNov2025FigureHtml(25, 'Figure 25: Cable tension system equilibrium with Cable A and Cable B supporting central load'),
    options: opts('1462 and 1374', '1374 and 1462', '1624 and 1743', '1743 and 1624'),
    ...solved(25, 'B', '1374 and 1462 (Option B)'),
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
    figureCaption: 'Figure 26: Pulley configurations comparison (a, b, c, d) (MSTC Nov 2025)',
    figureSvg: getMstcNov2025FigureHtml(26, 'Figure 26: Pulley configurations comparison (a, b, c, d)'),
    options: opts('c', 'a', 'b', 'd'),
    ...solved(26, 'B', 'a (Option B)'),
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
    options: opts('1.140 km', '1.410 km', '1.838 km', '1.388 km'),
    ...solved(27, 'C', '1.838 km (Option C)'),
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
    options: opts('6.37 s', '3.67 s', '1.62 s', '6.12 s'),
    ...solved(28, 'B', '3.67 s (Option B)'),
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
    options: opts('14.8 m/s', '29.8 m/s', '19.8 m/s', '24.8 m/s'),
    ...solved(29, 'A', '14.8 m/s (Option A)'),
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
    options: opts('1', '1.5', '1.75', '3'),
    ...solved(30, 'A', '1 (Option A)'),
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
    options: opts('77.3 hp', '99.5 hp', '88.4 hp', '67.5 hp'),
    ...solved(31, 'A', '77.3 hp (Option A)'),
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
    options: opts('44.5 mm', '48.5 mm', '48.7 mm', '47.5 mm'),
    ...solved(32, 'D', '47.5 mm (Option D)'),
  },
];

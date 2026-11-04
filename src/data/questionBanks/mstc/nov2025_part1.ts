import { Question } from '../../../types/exam';
import { solved, opts } from './nov2025Helpers';
import { getMstcNov2025FigureHtml } from '../../mstcNov2025Images';

export const MSTC_NOV2025_PART1: Question[] = [
  // Item 1
  {
    id: 'mstc-nov2025-q1',
    number: 1,
    pageNumber: 482,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Algebra - System of Linear Equations in Three Variables',
    text: 'A bank teller has a total of 70 bills in five-, ten-, and twenty-dollar denominations. The number of fives is three times the number of tens, while the total value of the money is $960. Find the number of each type of bill.\nA. 24 fives, 38 tens, and 8 twenties\nB. 24 fives, 8 tens, and 38 twenties\nC. 38 fives, 24 tens, and 8 twenties\nD. 38 fives, 8 tens, and 24 twenties',
    options: opts('24 fives, 38 tens, and 8 twenties', '24 fives, 8 tens, and 38 twenties', '38 fives, 24 tens, and 8 twenties', '38 fives, 8 tens, and 24 twenties'),
    ...solved(1, 'B', '24 fives, 8 tens, and 38 twenties (Option B)'),
  },

  // Item 2
  {
    id: 'mstc-nov2025-q2',
    number: 2,
    pageNumber: 482,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Algebra - Geometric Cost Functions & Polynomial Modeling',
    text: 'A rectangular box has a square copper base, wooden sides, and a wooden top. The copper costs $21 per square foot and the wood costs $2 per square foot. Write an expression giving the total cost of the materials used to make the box in terms of the dimensions.',
    figureCaption: 'Figure 2: Rectangular box with square copper base, wooden sides, and wooden top (MSTC Nov 2025)',
    figureSvg: getMstcNov2025FigureHtml(2, 'Figure 2: Rectangular box with square copper base, wooden sides, and wooden top'),
    options: opts('21x² + 2xh', '21x² + 8xh', '23x² + 2xh', '23x² + 8xh'),
    ...solved(2, 'D', '23x² + 8xh (Option D)'),
  },

  // Item 3
  {
    id: 'mstc-nov2025-q3',
    number: 3,
    pageNumber: 482,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Algebra - Polynomial Modeling of Financial Collectibles',
    text: 'Instead of investing in the stock market, many people invest in collectibles, like baseball cards. Each year, Anna uses some of the money she receives for her birthday to buy one special baseball card. For the last four birthdays, she purchased cards for $6, $18, $24, and $18. The current value of these cards is modeled by T(x) = 6x⁴ + 18x³ + 24x² + 18x, where x represents the average rate of return plus one. If the cards are worth $81.58, write an equation to model this situation.\nA. 6x⁴ + 28x³ + 24x² + 18x = 81.58\nB. 6x⁴ + 18x³ + 24x² + 18x = 81.58\nC. 6x⁴ + 18x³ + 14x² + 18x = 81.58\nD. 6x⁴ + 18x³ + 24x² + 28x = 81.58',
    options: opts('6x⁴ + 28x³ + 24x² + 18x = 81.58', '6x⁴ + 18x³ + 24x² + 18x = 81.58', '6x⁴ + 18x³ + 14x² + 18x = 81.58', '6x⁴ + 18x³ + 24x² + 28x = 81.58'),
    ...solved(3, 'B', '6x⁴ + 18x³ + 24x² + 18x = 81.58 (Option B)'),
  },

  // Item 4
  {
    id: 'mstc-nov2025-q4',
    number: 4,
    pageNumber: 483,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction & Architectural Planning - Minimum Office Area & Space Standards',
    text: 'An office is to be provided for a site agent and an assistant, with an allowance for three visitors. Assuming an internal average ceiling height of 2.4 m, and that the minimum requirements are 3.7 m² of floor area and 11.5 m³ of space per person, what is the minimum floor area required for the office?\nA. 18 m²\nB. 22 m²\nC. 24 m²\nD. 28 m²',
    options: opts('18 m²', '22 m²', '24 m²', '28 m²'),
    ...solved(4, 'C', '24 m² (Option C)'),
  },

  // Item 5
  {
    id: 'mstc-nov2025-q5',
    number: 5,
    pageNumber: 483,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Kinematics & Calculus - Average Velocity from Tabulated Position',
    text: 'The table shows the position of a motorcyclist after accelerating from rest.\n\n| t (seconds) | 0 | 1 | 2 | 3 | 4 | 5 | 6 |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| s (feet) | 0 | 4.9 | 20.6 | 46.5 | 79.2 | 124.8 | 176.7 |\n\nFind the average velocity for the time period [2, 4].\nA. 29.3 ft/s\nB. 32.7 ft/s\nC. 45.6 ft/s\nD. 48.8 ft/s',
    options: opts('29.3 ft/s', '32.7 ft/s', '45.6 ft/s', '48.8 ft/s'),
    ...solved(5, 'A', '29.3 ft/s (Option A)'),
  },

  // Item 6
  {
    id: 'mstc-nov2025-q6',
    number: 6,
    pageNumber: 483,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Differential Equations - Newton\'s Law of Cooling Indoor Temperature',
    text: 'Suppose that in winter the daytime temperature in a certain office building is maintained at 70°F. The heating is shut off at 10 P.M. and turned on again at 6 A.M.. On a certain day the temperature inside the building at 2 A.M. was found to be 65°F. The outside temperature was 50°F at 10 P.M. and had dropped to 40°F by 6 A.M.. What was the temperature drop inside the building when the heat was turned on at 6 A.M.?\nA. 9°F\nB. 10°F\nC. 15°F\nD. 20°F',
    options: opts('9°F', '10°F', '15°F', '20°F'),
    ...solved(6, 'A', '9°F (Option A)'),
  },

  // Item 7
  {
    id: 'mstc-nov2025-q7',
    number: 7,
    pageNumber: 483,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Physics & Logarithms - Sound Intensity Level Doubling',
    text: 'According to the sound intensity level equation\nL = k ln(I / I₀)\nwhich of the following expressions represents a doubling of the sound intensity level L?\nA. k ln(I² / I₀²)\nB. k ln(I³ / I₀³)\nC. k ln(I⁴ / I₀⁴)\nD. k ln(I⁵ / I₀⁵)',
    options: opts('k ln(I² / I₀²)', 'k ln(I³ / I₀³)', 'k ln(I⁴ / I₀⁴)', 'k ln(I⁵ / I₀⁵)'),
    ...solved(7, 'A', 'k ln(I² / I₀²) (Option A)'),
  },

  // Item 8
  {
    id: 'mstc-nov2025-q8',
    number: 8,
    pageNumber: 484,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Probability & Statistics - Standard Error of Sample Proportion',
    text: 'According to the Mendelian law of segregation in genetics, when certain types of peas are crossed, the probability that the plant yields a yellow pea is 3/4 and that it yields a green pea is 1/4. For a plant yielding 400 peas, find the standard error of the proportion of yellow peas.\nHint: SE = √[p(1 - p) / n]\nA. 0.0217\nB. 0.0721\nC. 0.0271\nD. 0.0712',
    options: opts('0.0217', '0.0721', '0.0271', '0.0712'),
    ...solved(8, 'A', '0.0217 (Option A)'),
  },

  // Item 9
  {
    id: 'mstc-nov2025-q9',
    number: 9,
    pageNumber: 484,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Physics & Acoustic Wave Mechanics - Speed of Sound in Solid Rod',
    text: 'A long aluminum rod has an elastic modulus of 70.0 × 10⁹ N/m² and a density of 2.70 × 10³ kg/m³. Determine the speed of sound through the aluminum rod.\nHint: v = √(E / ρ)\nA. 4305 m/s\nB. 5090 m/s\nC. 4050 m/s\nD. 9050 m/s',
    options: opts('4305 m/s', '5090 m/s', '4050 m/s', '9050 m/s'),
    ...solved(9, 'B', '5090 m/s (Option B)'),
  },

  // Item 10
  {
    id: 'mstc-nov2025-q10',
    number: 10,
    pageNumber: 484,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Physics - Wave Relationship Wavelength & Frequency',
    text: 'The speed of sound through a long aluminum rod is 5090 m/s. If the rod vibrates at a frequency of 440 Hz, determine the wavelength of the sound waves produced.\nHint: v = f λ\nA. 12.3 m\nB. 12.2 m\nC. 11.6 m\nD. 11.1 m',
    options: opts('12.3 m', '12.2 m', '11.6 m', '11.1 m'),
    ...solved(10, 'C', '11.6 m (Option C)'),
  },

  // Item 11
  {
    id: 'mstc-nov2025-q11',
    number: 11,
    pageNumber: 484,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Numerical Methods - Bisection Method Root Finding',
    text: 'Use two iterations of the bisection method to find a root of f(x) = x³ - 2x - 7\nHint: ½(Lₙ + Rₙ)\nA. 2.375\nB. 2.334\nC. 2.442\nD. 2.863',
    options: opts('2.375', '2.334', '2.442', '2.863'),
    ...solved(11, 'A', '2.375 (Option A)'),
  },

  // Item 12
  {
    id: 'mstc-nov2025-q12',
    number: 12,
    pageNumber: 485,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Trigonometry - Angles of Elevation & Height Clearance Restriction',
    text: 'The traffic pattern for airplanes into San Diego\'s airport is over the heart of downtown. Therefore, there are restrictions on the heights of new construction. The owner of an office building wishes to erect a microwave tower on top of the building. According to the architect\'s design, the angle of elevation from a point on the ground to the top of the 40-foot tower is 56°. The angle of elevation from the ground point to the top of the building is 42°. The maximum allowed height of any structure is 100 feet. Will the city allow the building of this tower?',
    figureCaption: 'Figure 12: Airplane traffic pattern & microwave tower elevation angles (MSTC Nov 2025)',
    figureSvg: getMstcNov2025FigureHtml(12, 'Figure 12: Airplane traffic pattern & microwave tower elevation angles'),
    options: opts('No, the height of the building is about 62 feet for a total of about 102 feet with the tower.', 'Yes, the height of the building is about 62 feet for a total of about 102 feet with the tower.', 'No, the height of the building is about 52 feet for a total of about 92 feet with the tower.', 'Yes, the height of the building is about 52 feet for a total of about 92 feet with the tower.'),
    ...solved(12, 'A', 'No, the height of the building is about 62 feet for a total of about 102 feet with the tower. (Option A)'),
  },

  // Item 13
  {
    id: 'mstc-nov2025-q13',
    number: 13,
    pageNumber: 485,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Surveying & Geometry - Uniform Slope Interpolation & Distances',
    text: 'Determine the value of $x_1$ and $x_2$.',
    figureCaption: 'Figure 13: Ground profile elevations and benchmark contour distances x1 and x2 (MSTC Nov 2025)',
    figureSvg: getMstcNov2025FigureHtml(13, 'Figure 13: Ground profile elevations and benchmark contour distances x1 and x2'),
    options: opts('3.64 m and 8.18 m', '6.64 m and 9.13 m', '2.43 m and 7.98 m', '7.53 m and 9.89 m'),
    ...solved(13, 'A', '3.64 m and 8.18 m (Option A)'),
  },

  // Item 14
  {
    id: 'mstc-nov2025-q14',
    number: 14,
    pageNumber: 486,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Calculus - Optimization of Circumscribed Isosceles Triangle',
    text: 'An isosceles triangle is circumscribed about the unit circle so that the equal sides meet at the point (0, a) on the y-axis (see the figure). Find the value of a that minimizes the lengths of the equal sides.',
    figureCaption: 'Figure 14: Isosceles triangle circumscribed about the unit circle (MSTC Nov 2025)',
    figureSvg: getMstcNov2025FigureHtml(14, 'Figure 14: Isosceles triangle circumscribed about the unit circle'),
    options: opts('1.26', '2.16', '1.62', '2.61'),
    ...solved(14, 'C', '1.62 (Option C)'),
  },

  // Item 15
  {
    id: 'mstc-nov2025-q15',
    number: 15,
    pageNumber: 486,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Calculus - Optimization of Illumination Intensity',
    text: 'A light is to be placed atop a pole of height h feet to illuminate a busy traffic circle, which has a radius of 40 ft. The intensity of illumination I at any point P on the circle is directly proportional to the cosine of the angle θ (see the figure) and inversely proportional to the square of the distance d from the source. How tall should the light pole be to maximize I?',
    figureCaption: 'Figure 15: Traffic circle illumination from pole of height h (MSTC Nov 2025)',
    figureSvg: getMstcNov2025FigureHtml(15, 'Figure 15: Traffic circle illumination from pole of height h'),
    options: opts('28 ft', '30 ft', '32 ft', '34 ft'),
    ...solved(15, 'A', '28 ft (Option A)'),
  },

  // Item 16
  {
    id: 'mstc-nov2025-q16',
    number: 16,
    pageNumber: 486,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Calculus - Differential Error Analysis on Disk Radius',
    text: 'A machinist is required to manufacture a circular metal disk with area 1000 cm². If the machinist is allowed an error tolerance of ±5 cm² in the area of the disk, how close to the ideal radius must the machinist control the radius?\nA. 0.4045 cm\nB. 0.0445 cm\nC. 0.5054 cm\nD. 0.0554 cm',
    options: opts('0.4045 cm', '0.0445 cm', '0.5054 cm', '0.0554 cm'),
    ...solved(16, 'B', '0.0445 cm (Option B)'),
  },
];

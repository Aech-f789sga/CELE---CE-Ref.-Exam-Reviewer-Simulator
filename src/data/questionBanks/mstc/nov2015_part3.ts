import { Question } from '../../../types/exam';
import { solved, opts } from './nov2015Helpers';

/**
 * MSTC — November 2015, items 31–45.
 *
 * The booklet prints its own working for every item in this paper, so the
 * solution shown is a crop of that page rather than a retyped derivation.
 * The last argument of `solved` is the booklet folio the crop was taken from;
 * items whose working runs over a page turn carry the closing folio too.
 */
export const MSTC_NOV2015_PART3: Question[] = [
  // Item 31
  {
    id: 'mstc-nov2015-q31',
    number: 31,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Circles',
    text: 'Triangle ABC is inscribed in a circle. The measure of angle B is 80° and angle C is 42°. If point P is the midpoint of arc AB, what is the angle PAC.',
    options: opts('79°', '75°', '90°', '83°'),
    ...solved(31, 'A', '79° (Option A)', 144),
  },

  // Item 32
  {
    id: 'mstc-nov2015-q32',
    number: 32,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Tangent Circles',
    text: 'Points A, B, and P are on a periphery of a circle. TA and TB are tangents of the circle with A and B as points of tangency. The angle of intersection formed by TA and TB is 52°. Find the angle BPA.',
    options: opts('60°', '64°', '38°', '128°'),
    ...solved(32, 'B', '64° (Option B)', 144),
  },

  // Item 33
  {
    id: 'mstc-nov2015-q33',
    number: 33,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Triangles',
    text: 'Given triangle ABC, point E is along side AC and point D is along the side BC. Line BE and AD are the angle bisectors of angle B and A respectively. If the angle BEC = 75° and angle ADC = 84°, find angle ACB.',
    options: opts('74°', '64°', '86°', '59°'),
    ...solved(33, 'A', '74° (Option A)', 144, 145),
  },

  // Item 34
  {
    id: 'mstc-nov2015-q34',
    number: 34,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Trigonometry - Medians',
    text: 'In triangle ABC, c = 150 cm, angle C = 70°, and angle A = 45°. Determine the length of the median drawn from the vertex A to the side "a".',
    options: opts('136.12 cm', '132.54 cm', '141.25 cm', '163.25 cm'),
    ...solved(34, 'A', '136.12 cm (Option A)', 145),
  },

  // Item 35
  {
    id: 'mstc-nov2015-q35',
    number: 35,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Tangent Circles',
    text: 'A circle of radius 6 cm is inscribed in a square. A smaller circle is drawn tangent to the two sides of the square and the bigger circle. What is the radius of the smaller circle?',
    options: opts('0.956 cm', '1.029 cm', '1.125 cm', '0.856 cm'),
    ...solved(35, 'B', '1.029 cm (Option B)', 145),
  },

  // Item 36
  {
    id: 'mstc-nov2015-q36',
    number: 36,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Triangle Inequality',
    text: 'Find the area of the triangle with sides 5, 6, and 13.',
    options: opts('3.56', '5.25', '1.89', 'no solution'),
    ...solved(36, 'D', 'No solution (Option D)', 146),
  },

  // Item 37
  {
    id: 'mstc-nov2015-q37',
    number: 37,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Squares',
    text: 'Given a square ABCD. A point Q inside the square is drawn such that triangle QAB is an equilateral triangle. Find the angle between sides DC and QC.',
    options: opts('25°', '15°', '20°', '108°'),
    ...solved(37, 'B', '15° (Option B)', 146),
  },

  // Item 38
  {
    id: 'mstc-nov2015-q38',
    number: 38,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Excircle',
    text: 'The sides of a triangle ABC are a = 38 cm, b = 22 cm, and c = 32 cm. Calculate the radius of the circle tangent to side b and escribed about the given triangle.',
    options: opts('25.12 cm', '43.96 cm', '18.95 cm', '14.65 cm'),
    ...solved(38, 'D', '14.65 cm (Option D)', 146),
  },

  // Item 39
  {
    id: 'mstc-nov2015-q39',
    number: 39,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Tangent-Secant',
    text: 'A, B and C are 3 points on circle. OA is a tangent at A and OBC is a straight line. If BC = 32 and OA = 30, find the value of OB.',
    options: opts('20', '22', '16', '18'),
    ...solved(39, 'D', 'OB = 18 (Option D)', 146),
  },

  // Item 40
  {
    id: 'mstc-nov2015-q40',
    number: 40,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Geometry - Right Triangle',
    text: 'A triangle is inscribed in a circle of radius 10 cm. One side of the triangle is 20 cm long and its area is 96 square centimeters. What is the perimeter of the triangle?',
    options: opts('36 cm', '52 cm', '48 cm', '24 cm'),
    ...solved(40, 'C', '48 cm (Option C)', 147),
  },

  // Item 41
  {
    id: 'mstc-nov2015-q41',
    number: 41,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Solid Geometry - Cone',
    text: 'The volume of a cone varies jointly as its height and the square of its radius. If the volume of a cone is 75π cubic cm when the radius is 5 cm and the length is 9 cm, find the volume of a cone when the radius is 6 cm and the height is 8 cm.',
    options: opts('72π', '96π', '81π', '64π'),
    ...solved(41, 'B', '96π (Option B)', 147),
  },

  // Item 42
  {
    id: 'mstc-nov2015-q42',
    number: 42,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Solid Geometry - Truncated Prism',
    text: 'A truncated prism has a horizontal base ABC. AB = 30 cm, BC = 40 cm and CA = 50 cm. The vertical edges through A and C are 18 cm and 27 cm long. If the volume of the prism is 14,400 cu. cm., determine the height of the vertical edge at B.',
    options: opts('26 cm', '24 cm', '28 cm', '27 cm'),
    ...solved(42, 'D', '27 cm (Option D)', 147),
  },

  // Item 43
  {
    id: 'mstc-nov2015-q43',
    number: 43,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Solid Geometry - Cube',
    text: 'Find the ratio of the volume of a regular hexahedron to its total surface area one of its side measures 18 cm.',
    options: opts('2', '3', '5', '4'),
    ...solved(43, 'B', '3 (Option B)', 148),
  },

  // Item 44
  {
    id: 'mstc-nov2015-q44',
    number: 44,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Analytic Geometry - Normal Form',
    text: 'The normal form of the equation of a line is $x\\cos\\beta + y\\sin\\beta - \\rho = 0$. Find $\\rho$ if the equation of the line is $x + y + 8 = 0$.',
    options: opts('$3\\sqrt{2}$', '$2\\sqrt{2}$', '$1\\sqrt{2}$', '$4\\sqrt{2}$'),
    ...solved(44, 'D', '$4\\sqrt{2}$ (Option D)', 148),
  },

  // Item 45
  {
    id: 'mstc-nov2015-q45',
    number: 45,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Linear Functions',
    text: 'It is given that the yearly cost of tuition and required fees for attending a public four-year college full-time can be estimated by the linear function $f(x) = 275.5x + 2860.2$ where $x$ is the number of years after 2000 and $f(x)$ is the total cost. Find the slope of this equation.',
    options: opts('632.8', '301.2', '275.5', '284.6'),
    ...solved(45, 'C', '275.5 (Option C)', 148),
  },
];

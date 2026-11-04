import { Question } from '../../../types/exam';
import { solved, opts } from './may2015Helpers';

/**
 * MSTC — May 2015, items 31–45.
 *
 * The booklet prints its own working for every item in this paper, so the
 * solution shown is a crop of that page rather than a retyped derivation.
 * The last argument of `solved` is the booklet folio the crop was taken from;
 * items whose working runs over a page turn carry the closing folio too.
 */
export const MSTC_MAY2015_PART3: Question[] = [
  // Item 31
  {
    id: 'mstc-may2015-q31',
    number: 31,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Solid Geometry - Cones',
    text: 'A cone was formed by rolling a thin sheet of metal in the form of a sector of a circle 75 cm in diameter with a central angle of 30°. Find the radius of the cone in mm.',
    options: opts('56.35', '18.75', '31.25', '42.52'),
    ...solved(31, 'C', '31.25 mm (Option C)', 20),
  },

  // Item 32
  {
    id: 'mstc-may2015-q32',
    number: 32,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Solid Geometry - Cylinders',
    text: 'Determine the base diameter of an open top right circular cylinder if its total surface area is 49.48 square feet and its height is 1.5 times its base diameter.',
    options: opts('48 in', '36 in', '42 in', '30 in'),
    ...solved(32, 'B', '36 in (Option B)', 20),
  },

  // Item 33
  {
    id: 'mstc-may2015-q33',
    number: 33,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Solid Geometry - Spherical Frustum',
    text: 'A frustum of a sphere has base diameters of 20 cm and 12 cm and thickness of 3.6 cm. What is the volume of the frustum?',
    options: opts('744.6 cu. cm.', '793.5 cu. cm.', '752.9 cu. cm.', '789.5 cu. cm.'),
    ...solved(33, 'B', '793.5 cm³ (Option B)', 21),
  },

  // Item 34
  {
    id: 'mstc-may2015-q34',
    number: 34,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Solid Geometry - Spherical Pyramid',
    text: 'Find the volume of a spherical pyramid having a spherical excess of 28° and a radius of 9.2 cm.',
    options: opts('141.46 cm³', '380.54 cm³', '126.85 cm³', '248.28 cm³'),
    ...solved(34, 'C', '126.85 cm³ (Option C)', 21),
  },

  // Item 35
  {
    id: 'mstc-may2015-q35',
    number: 35,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Complex Numbers - Polar Form',
    text: 'The exponential form of the complex number 5 + 12i is in the form $re^{ix}$. Determine the value of x.',
    options: opts('2.521', '1.176', '0.098', '1.683'),
    ...solved(35, 'B', 'x = 1.176 rad (Option B)', 21),
  },

  // Item 36
  {
    id: 'mstc-may2015-q36',
    number: 36,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Complex Numbers - Operations',
    text: 'From the given equation $(x+yi)(1-2i)=7-4i$, find the value of $x+y$.',
    options: opts('-1', '3', '2', '5'),
    ...solved(36, 'D', '5 (Option D)', 21),
  },

  // Item 37
  {
    id: 'mstc-may2015-q37',
    number: 37,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Complex Numbers - Roots',
    text: 'Which of the following is equivalent to $\\sqrt{i}$?',
    options: opts('(1 + i)/√2', '(2 - 2i)/√2', '(1 - 2i)/√2', '(2 + i)/√2'),
    ...solved(37, 'A', '(1 + i)/√2 (Option A)', 22),
  },

  // Item 38
  {
    id: 'mstc-may2015-q38',
    number: 38,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Complex Numbers - Powers',
    text: 'The value of $(1+i)^6$ is equal to:',
    options: opts('-8i', '4i', '-12i', '6i'),
    ...solved(38, 'A', '-8i (Option A)', 22),
  },

  // Item 39
  {
    id: 'mstc-may2015-q39',
    number: 39,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Analytic Geometry - Straight Lines',
    text: 'Find the line perpendicular to $x + 3y = 0$ that passes through the point (3, 2).',
    options: opts('3x + y = 11', '3x - y = 7', 'x - 3y = -3', 'x + 3y = 9'),
    ...solved(39, 'B', '3x - y = 7 (Option B)', 22),
  },

  // Item 40
  {
    id: 'mstc-may2015-q40',
    number: 40,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Analytic Geometry - Translation of Axes',
    text: 'A straight line has an equation of $5x + 4y + 3 = 0$. Determine its new equation if the origin is translated to point (1, 2).',
    options: opts('4x + 5y = 11', '4x - 5y = -9', '5x - 4y = -6', '5x + 4y = 10'),
    ...solved(40, 'D', '5x + 4y = 10 (Option D)', 22),
  },

  // Item 41
  {
    id: 'mstc-may2015-q41',
    number: 41,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Analytic Geometry - Tangent Circles',
    text: 'Find the equation of the line that is tangent to the point of contact of the circles $x^2+y^2+2x-4y-20=0$ and $x^2+y^2-10x+5y+25=0$.',
    options: opts('3x - 4y + 7 = 0', '4x - 3y - 15 = 0', '4x + 3y + 21 = 0', '3x + 4y - 18 = 0'),
    ...solved(41, 'B', '4x - 3y - 15 = 0 (Option B)', 22, 23),
  },

  // Item 42
  {
    id: 'mstc-may2015-q42',
    number: 42,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Analytic Geometry - Locus',
    text: 'Given a circle of radius 4 and center at (6, 8). Find the locus of the center of all circles that is tangent to the x-axis and the given circle.',
    options: opts('x² - 12x - 24y + 84 = 0', 'x² + 12x + 24y - 156 = 0', 'x² + 12x - 24y - 60 = 0', 'x² - 12x + 24y - 12 = 0'),
    ...solved(42, 'A', 'x² - 12x - 24y + 84 = 0 (Option A)', 23),
  },

  // Item 43
  {
    id: 'mstc-may2015-q43',
    number: 43,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Calculus - Area Between Curves',
    text: 'Determine the area bounded by the parabola $y^2-8x+6y+17=0$ and the line $2x-y-13=0$.',
    options: opts('44 sq units', '52 sq units', '48 sq units', '36 sq units'),
    ...solved(43, 'D', '36 sq units (Option D)', 23),
  },

  // Item 44
  {
    id: 'mstc-may2015-q44',
    number: 44,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Analytic Geometry - Ellipse',
    text: 'The cross section of a semi-elliptical trough has a top diameter of 18 inches and height of 12 inches. Determine the width of water surface of the trough if the depth of water is 8 inches.',
    options: opts('15.91 in', '14.35 in', '15.28 in', '16.97 in'),
    ...solved(44, 'D', '16.97 in (Option D)', 24),
  },

  // Item 45
  {
    id: 'mstc-may2015-q45',
    number: 45,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Analytic Geometry - Hyperbola',
    text: 'What is the angle in degrees, between an asymptote of the hyperbola $x^2-4y^2-2x-63=0$ and the x-axis?',
    options: opts('42.92°', '26.57°', '32.69°', '63.43°'),
    ...solved(45, 'B', '26.57° (Option B)', 24),
  },
];

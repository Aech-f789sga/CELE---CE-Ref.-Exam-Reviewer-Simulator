import { Question } from '../../../types/exam';
import { solved, unsolved, opts } from './may2016Helpers';

export const MSTC_MAY2016_PART3: Question[] = [
  // ── Item 31 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q31',
    number: 31,
    pageNumber: 246,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Plane Geometry — Polygon Sides',
    text: 'How many sides has a polygon if the sum of the measures of its interior angles is 3600°?',
    options: opts('22', '21', '20', '12'),
    ...solved(31, 'A', 'n = 22 (Option A)', 261),
  },

  // ── Item 32 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q32',
    number: 32,
    pageNumber: 246,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Analytic Geometry — Parametric to Cartesian',
    text: 'Find the Cartesian equation of the curve represented by the parametric equation x = 4t + 3 and y = 16t² - 9 for -∞ < t < ∞.',
    options: opts('y = x² + 4x', 'y = x² - 6x', 'y = x² - 4x', 'y = x² + 6x'),
    ...solved(32, 'B', 'y = x² - 6x (Option B)', 262),
  },

  // ── Item 33 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q33',
    number: 33,
    pageNumber: 247,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Analytic Geometry — Diameter of a Parabola',
    text: 'A parabola has an equation of y² = 8x. Find the equation of the diameter of the parabola, which bisect chords parallel to the line x - y = 4.',
    options: opts('y = 4', 'y = 2', 'y = 1', 'y = 3'),
    ...solved(33, 'C', 'y = 1 (Option C)', 262),
  },

  // ── Item 34 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q34',
    number: 34,
    pageNumber: 247,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Analytic Geometry — Point of Tangency',
    text: 'A circle has its center at (3, -27) and is tangent to 3x + 4y - 26 = 0. Calculate the point of tangency of the circle.',
    options: opts('(18, -7)', '(-6, 3)', '(6, -7)', '(18, 6)'),
    ...solved(34, 'A', '(18, -7) (Option A)', 263),
  },

  // ── Item 35 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q35',
    number: 35,
    pageNumber: 247,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Solid Geometry — Distance from a Point to a Plane',
    text: 'Calculate the distance from point A(1, 5, -3) to the plane 4x + y + 8z + 33 = 0.',
    options: opts('2', '1/2', '2/3', '3/2'),
    ...solved(35, 'A', 'd = 2 (Option A)', 263),
  },

  // ── Item 36 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q36',
    number: 36,
    pageNumber: 247,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Solid Geometry — Equation of a Sphere',
    text: 'Find the equation of a sphere of radius 3 and tangent to all three coordinate planes if the center is on the first octant.',
    options: opts(
      'x² + y² + z² - 3x - 3y - 3z + 9 = 0',
      'x² + y² + z² - 2x - 2y - 2z + 9 = 0',
      'x² + y² + z² - 9 = 0',
      'x² + y² + z² - 6x - 6y - 6z + 18 = 0',
    ),
    ...solved(36, 'D', 'x² + y² + z² - 6x - 6y - 6z + 18 = 0 (Option D)', 263),
  },

  // ── Item 37 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q37',
    number: 37,
    pageNumber: 247,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Solid Geometry — Cylindrical to Cartesian',
    text: 'The cylindrical coordinate of a point P is (8, 30°, 5). What is the value of the x-coordinate of P in the Cartesian coordinate system?',
    options: opts('6.25', '4', '6.93', '5.78'),
    ...solved(37, 'C', 'x = 6.93 (Option C)', 263),
  },

  // ── Item 38 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q38',
    number: 38,
    pageNumber: 247,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Differential Calculus — Slope of a Curve',
    text: 'What is the slope of the curve y = x³ + 6x - 4 at (0, -4).',
    options: opts('6', '4', '-6', '-4'),
    ...solved(38, 'A', 'dy/dx = 6 (Option A)', 263),
  },

  // ── Item 39 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q39',
    number: 39,
    pageNumber: 247,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Differential Calculus — Parametric Derivative',
    text: 'A point moves in a plane according to the equation x = t² + 2t and y = 2t³ - 6t. Find dy/dx when t = 0, 2, and 5.',
    options: opts('3, -3, 12', '-3, 3, 12', '3, 3, 12', '-3, -3, 12'),
    ...solved(39, 'B', '-3, 3, 12 (Option B)', 264),
  },

  // ── Item 40 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q40',
    number: 40,
    pageNumber: 247,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Integral Calculus — Distance from a Position Function',
    text: 'Given the position function of a particle, x(t) = t⁴ - 8t². Find the distance covered by the particle at t = 0 to t = 4.',
    options: opts('160', '140', '150', '130'),
    ...solved(40, 'A', 'Total distance travelled = 160 (Option A)', 264),
  },

  // ── Item 41 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q41',
    number: 41,
    pageNumber: 247,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Integral Calculus — Definite Integral',
    text: 'Evaluate ∫₀⁹ dx / √(1 + √x).',
    options: opts('6.667', '7.333', '3.227', '5.333'),
    ...solved(41, 'D', '5.333 (Option D)', 264),
  },

  // ── Item 42 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q42',
    number: 42,
    pageNumber: 247,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Probability — Sample Space',
    text: 'An experiment consists of selecting three item from a box of several items. The three items are classified defective (D) or non-defective (N) as they are selected. Give the sample space for this experiment. Which outcomes are in the events A, B, C where A exactly one defective?',
    options: opts(
      '(NDD, DND, DDN)',
      '(DDD, NDD, DNN)',
      '(DNN, NDN, NND)',
      '(NNN, NND, DNN)',
    ),
    ...unsolved(
      'C',
      '(DNN, NDN, NND) (Option C)',
      265,
      'The booklet prints no worked solution for this item: its solution section runs straight from item 41 to item 43.',
      'The key marks C. The outcomes carrying exactly one defective are the three arrangements of one D among three draws — (DNN, NDN, NND).',
    ),
  },

  // ── Item 43 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q43',
    number: 43,
    pageNumber: 247,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Probability — Sampling without Replacement',
    text: 'A box contains 5 defective and 195 non-defective batteries. A quality control engineer selects 2 batteries at random without replacement. What is the probability that neither is defective?',
    options: opts('0.8456', '0.9745', '0.9406', '0.9505'),
    ...solved(43, 'D', 'P = 0.9505 (Option D)', 265),
  },

  // ── Item 44 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q44',
    number: 44,
    pageNumber: 248,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Probability — Sampling with Replacement',
    text: 'A box contains 54 red marbles, 14 yellow marbles, 32 blue marbles; all the marbles are of the same size. Three marbles are drawn at random from the box, first one, then a second, and then a third. Determine the probability of getting first red marble, second yellow marble and third blue marble with replacement.',
    options: opts('0.0242', '0.0342', '0.0128', '0.0482'),
    ...solved(44, 'A', 'P = 0.0242 (Option A)', 265),
  },

  // ── Item 45 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q45',
    number: 45,
    pageNumber: 248,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Probability — Discrete Distribution',
    text: 'An industrial engineer has found that when she takes a sample of size 5 of a product, 90% of the time there are no defectives in the sample, 3% of the time there is 1 defective, 2% of the time there are 2 defectives, 2% of the time there are 3 defectives, 2% of the time there are 4 defectives, and 1% of the time there 5 defectives. What is the probability of taking a sample that has at least 3 defectives in the 5?',
    options: opts('14%', '7%', '5%', '9%'),
    ...solved(45, 'C', 'P = 5% (Option C)', 265),
  },
];

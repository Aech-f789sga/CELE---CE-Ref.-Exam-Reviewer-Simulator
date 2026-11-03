import { Question } from '../../../types/exam';
import { solved, recall, opts } from './nov2017Helpers';

export const MSTC_NOV2017_PART2: Question[] = [
  // ── Item 20 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q20',
    number: 20,
    pageNumber: 555,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Solid Geometry — Shortest Path',
    text: 'In a room, 40 feet long, 20 feet wide, and 20 feet high, a bug sits on an end wall at a point one foot from the floor, midway between the sidewalls. He decides to go on a journey to a point on the other end wall which is one foot from the ceiling midway between the sidewalls. Having no wings, the bug must make his trip by sticking to the surfaces of the room. What is the shortest route that the bug can take?',
    options: opts('40', '60', '58', '62'),
    ...solved(20, 'C', '58'),
  },

  // ── Item 21 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q21',
    number: 21,
    pageNumber: 555,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Solid Geometry — Spherical Sections',
    text: 'A cross section through the center of a football is a circle $x$ inches in circumference. The football is $x - 8$ inches long from tip to tip and each seam is an arc of a circle $\\tfrac{3}{4}x$ inches in diameter. Find $x$.',
    options: opts('21.55 inches', '20.12 inches', '22.15 inches', '20.69 inches'),
    ...solved(21, 'D', '20.69 inches'),
  },

  // ── Item 22 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q22',
    number: 22,
    pageNumber: 555,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Geometry — Tangent–Secant',
    text: 'A circular lake is located at a certain barangay in Tagaytay. An existing road runs tangential to a circular lake. Twelve kilometers from the point of tangency, along the existing road, a new road of 8 km length is constructed to the periphery of the lake at B. The new road is extended to cross the lake. Compute the length of the bridge needed to cross the lake.',
    options: opts('10 km', '12 km', '14 km', '16 km'),
    ...solved(22, 'A', '10 km'),
  },

  // ── Item 23 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q23',
    number: 23,
    pageNumber: 556,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Geometry — Similar Triangles',
    text: 'The ratio of the areas of 2 similar triangles is 5/7. If the length of one side of the smaller triangle is 8 cm, find the exact corresponding side length of the larger triangle.',
    options: opts('9.633 cm', '9.466 cm', '9.822 cm', '6.542 cm'),
    ...solved(23, 'B', '9.466 cm'),
  },

  // ── Item 24 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q24',
    number: 24,
    pageNumber: 556,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Geometry — Cyclic Quadrilateral',
    text: 'A quadrilateral ABCD is inscribed in a circle. The angle ADC = 75° and angle ACD = 45°. If the arc BC is only one-half of arc CD, find the value of angle BCA.',
    options: opts('30°', '45°', '50°', '60°'),
    ...solved(24, 'B', '45°'),
  },

  // ── Item 25 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q25',
    number: 25,
    pageNumber: 556,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Solid Geometry — Spherical Bowl',
    text: 'Hemispherical bowl 2.5 m radius is filled with water to a depth of 1.8 m. A solid spherical ball (1.8 m in diameter) is placed in the bowl. Find the rise of water in the bowl.',
    options: opts('0.187 m', '0.207 m', '0.245 m', '0.166 m'),
    ...solved(25, 'D', '0.166 m'),
  },

  // ── Item 26 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q26',
    number: 26,
    pageNumber: 556,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Solid Geometry — Cone and Hemisphere',
    text: 'A solid consists of a right circular cone of height "h" and a hemisphere at its base with common radius of 12 cm. The volume of the hemisphere is ¾ that of the cone. The solid is cut into two equal parts by a plane parallel the base of the cone such that the upper half is a right circular of height "y". Find the value of y.',
    options: opts('30.6 cm', '32 cm', '31.2 cm', '28.4 cm'),
    ...solved(26, 'A', '30.6 cm'),
  },

  // ── Item 27 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q27',
    number: 27,
    pageNumber: 556,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Analytic Geometry — Line Equation',
    text: 'Find the equation of the line with a slope of 4 through (-1, 3).',
    options: opts('$y = 4x - 7$', '$y = 4x + 7$', '$y = -4x + 7$', '$y = -4x - 7$'),
    ...solved(27, 'B', '$y = 4x + 7$'),
  },

  // ── Item 28 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q28',
    number: 28,
    pageNumber: 556,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Analytic Geometry — Midpoint',
    text: 'If M is the midpoint of PQ, find the coordinates of M if the coordinates of P and Q are P(3,4) and Q(5,8).',
    options: opts('(4, 6)', '(5, 6)', '(6, 4)', '(6, 5)'),
    ...solved(28, 'A', '(4, 6)'),
  },

  // ── Item 29 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q29',
    number: 29,
    pageNumber: 556,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Analytic Geometry — Ellipse',
    text: 'The distance from point A($\\sqrt{6}\\cos\\theta$, $\\sqrt{2}\\sin\\theta$) to the center of ellipse is equal to 2. If the equation of ellipse is $2x^2 + 6y^2 = 12$, find the value of $\\theta$.',
    options: opts('40°', '45°', '50°', '60°'),
    ...solved(29, 'B', '45°'),
  },

  // ── Item 30 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q30',
    number: 30,
    pageNumber: 556,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Calculus — Limits',
    text: 'Evaluate the limit $\\displaystyle\\lim_{x\\to-8} \\frac{x - \\sqrt[3]{x}}{2x + 10}$.',
    options: opts('1', '0', '1/2', '-1'),
    ...solved(30, 'A', '1'),
  },

  // ── Item 31 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q31',
    number: 31,
    pageNumber: 556,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Calculus — Derivatives',
    text: 'What is the slope of the curve $y = 2x^4 - 3x^2 + x^{1/2} - 290$ at $x = 3$?',
    options: opts('197.71', '135.29', '198.29', '234.29'),
    ...solved(31, 'C', '198.29'),
  },

  // ── Item 32 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q32',
    number: 32,
    pageNumber: 557,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Calculus — Directional Derivative',
    text: 'Find the directional derivative of $z = x^2 - 6y^2$ at P(7, 2) in the direction $\\theta = 45°$.\nHint:\n$\\dfrac{dz}{ds} = \\dfrac{\\partial z}{\\partial x}\\cos\\theta + \\dfrac{\\partial z}{\\partial y}\\sin\\theta$',
    options: opts('$-5\\sqrt{2}$', '$-9\\sqrt{2}$', '$-7\\sqrt{2}$', '$-3\\sqrt{2}$'),
    ...solved(32, 'A', '$-5\\sqrt{2}$'),
  },

  // ── Item 33 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q33',
    number: 33,
    pageNumber: 557,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Calculus — Optimization',
    text: 'A closed cylindrical container has a volume of 1000 ft³. If the lateral area costs P25 per square foot and the top and bottom cost P20 per square foot. Determine the minimum cost.',
    options: opts('P13,563.20', 'P12,847.50', 'P10,963.60', 'P11,254.70'),
    ...solved(33, 'B', 'P12,847.50'),
  },

  // ── Item 34 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q34',
    number: 34,
    pageNumber: 557,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Calculus — Related Rates',
    text: 'A 17-foot ladder is sliding down a wall at a rate of -5 feet/sec. When the top of the ladder is 8 feet from the ground, how fast is the foot of the ladder sliding away from the wall (in feet/sec)?',
    options: opts('8/3', '7/8', '17/3', '17/5'),
    ...solved(34, 'A', '8/3'),
  },

  // ── Item 35 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q35',
    number: 35,
    pageNumber: 557,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Calculus — Integration by Parts',
    text: 'Evaluate the integral $\\displaystyle\\int_0^{\\pi/4} x\\cos(4x)\\,dx$.',
    options: opts('1/2', '-1/4', '-1/8', '0.308'),
    ...recall(
      'C',
      '-1/8',
      'The booklet jumps straight from item 34 to item 36 on folio 575 — this item carries no printed working. Integrating by parts gives $\\left[\\tfrac{x}{4}\\sin 4x + \\tfrac{1}{16}\\cos 4x\\right]_0^{\\pi/4} = -\\tfrac{1}{8}$.',
    ),
  },

  // ── Item 36 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q36',
    number: 36,
    pageNumber: 557,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Calculus — Centroid',
    text: 'Find the centroid of the region in the first quadrant by the graph of $y = 9 - x^2$, the x-axis, and the y-axis.\nHint:\nArea bounded, A = 18\nMoment about y-axis, $M_y = 81/4$\nMoment about x-axis, $M_x = 324/5$',
    options: opts('(18/5, 9/8)', '(9/8, 18/5)', '(9/7, 18/7)', '(18/7, 9/7)'),
    ...solved(36, 'B', '(9/8, 18/5)'),
  },

  // ── Item 37 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q37',
    number: 37,
    pageNumber: 557,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Vectors — Scalar Triple Product',
    text: 'Find the volume of the parallelepiped whose edges are represented by\n$A = 2i - 3j + 4k$\n$B = i + 2j - k$\n$C = 3i - j + 2k$',
    options: opts('12', '7', '11', '10'),
    ...solved(37, 'B', '7'),
  },

  // ── Item 38 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q38',
    number: 38,
    pageNumber: 557,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Statistics — z-Scores',
    text: 'The 70 highest dams in the world have an average height of 206 meters with a standard deviation of 35 meters. The Hoover and Grand Coulee dams have heights of 221 and 168 meters, respectively. The Russian dams, the Nurek and Charvak, have heights with z-scores of +2.69 and -1.13, respectively. List the dams in order of ascending size.',
    options: opts(
      'Charvak, Grand Coulee, Hoover, Nurek',
      'Charvak, Grand Coulee, Nurek, Hoover',
      'Grand Coulee, Charvak, Hoover, Nurek',
      'Grand Coulee, Charvak, Nurek, Hoover',
    ),
    ...solved(38, 'A', 'Charvak, Grand Coulee, Hoover, Nurek'),
  },
];

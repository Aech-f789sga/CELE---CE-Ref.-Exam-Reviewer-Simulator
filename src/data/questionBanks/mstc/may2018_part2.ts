import { Question } from '../../../types/exam';
import { opts, solved } from './may2018Helpers';

/**
 * MSTC May 2018, items 17-32 — clock angles, plane and spherical trigonometry,
 * circle and solid geometry, then differential and integral calculus.
 */
export const MSTC_MAY2018_PART2: Question[] = [
  // ── Item 17 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q17',
    number: 17,
    pageNumber: 661,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Clock Problems',
    text: 'How many minutes after 3 p.m. will the hands of a clock be perpendicular with each other for the first time?',
    options: opts('32.73', '35.41', '34.61', '37.36'),
    ...solved(17, 'A', '32.73 minutes'),
  },

  // ── Item 18 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q18',
    number: 18,
    pageNumber: 661,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Plane Trigonometry',
    text: 'A triangular plot of land has sides $a = 22.4$ m, $b = 25.2$ m, and $c = 11$ m. Find the measures of the largest angle.',
    options: opts('88.6°', '62.7°', '91.4°', '93.4°'),
    ...solved(18, 'C', '$B = 91.4°$'),
  },

  // ── Item 19 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q19',
    number: 19,
    pageNumber: 662,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Circle Geometry',
    text: 'Three circles with radii 3.0, 5.0, and 9.0 cm are externally tangent. What is the area of the triangle formed by joining their centers?',
    options: opts('45 cm²', '56 cm²', '48 cm²', '52 cm²'),
    ...solved(19, 'C', '47.91 cm²'),
  },

  // ── Item 20 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q20',
    number: 20,
    pageNumber: 662,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Spherical Trigonometry',
    text: 'A spherical triangle $ABC$ has an angle $C = 90°$ and sides $a = 50°$, and $c = 80°$, find the angle of side "$b$" in degrees.',
    options: opts('81.38°', '68.42°', '74.33°', '56.42°'),
    ...solved(20, 'C', '$b = 74.33°$'),
  },

  // ── Item 21 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q21',
    number: 21,
    pageNumber: 662,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Circle Geometry',
    text: 'Two perpendicular chords both 5 cm from the center of a circle divide the circle into 4 parts. If the radius of the circle is 13 cm, find the area of the smallest part.',
    options: opts('28 cm²', '41 cm²', '31 cm²', '19 cm²'),
    ...solved(21, 'C', '31.013 cm²'),
  },

  // ── Item 22 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q22',
    number: 22,
    pageNumber: 662,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Plane Geometry',
    text: 'A regular octagon is to be cut out from a square section having a side of 16 m. Determine side of the octagon.',
    options: opts('6.63', '4.86', '3.64', '7.92'),
    ...solved(22, 'A', '$x = 6.627$ m'),
  },

  // ── Item 23 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q23',
    number: 23,
    pageNumber: 662,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Circle Geometry',
    text: 'A sector of a circle has a central angle of 50° and an area of 825 cm². Find the radius of the circle.',
    options: opts('32.58 cm', '51.24 cm', '48.25 cm', '43.48 cm'),
    ...solved(23, 'D', '$R = 43.48$ cm'),
  },

  // ── Item 24 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q24',
    number: 24,
    pageNumber: 662,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Spherical Trigonometry',
    text: 'The distance between Los Angeles and New York City is 4505 miles. Find the central angle to the nearest tenth of a degree that intercepts an arc of 4505 miles on the surface of the earth (radius 3950 miles)',
    options: opts('62.58°', '65.35°', '46.36°', '75.89°'),
    ...solved(24, 'B', '$\\theta = 65.35°$'),
  },

  // ── Item 25 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q25',
    number: 25,
    pageNumber: 662,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Solid Geometry',
    text: 'The height of the cone (vertex up) is $H$. It contains water to a depth of $\\frac{2}{3}H$. What is the ratio of the volume of water to that of the cone?',
    options: opts('27:26', '8:27', '19:27', '26:27'),
    ...solved(25, 'D', '$\\frac{V_{water}}{V_{cone}} = \\frac{26}{27}$'),
  },

  // ── Item 26 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q26',
    number: 26,
    pageNumber: 662,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Solid Geometry',
    text: 'An icicle forming from a dripping gutter is in the shape of a cone five times as long as its width (at the top). A few hours later it has doubled in length and the generating angle has also doubled. How does its present weight compare with its previous weight?',
    options: opts('26 times', '15 times', '33 times', '46 times'),
    ...solved(26, 'C', 'approximately 33 times its previous weight'),
  },

  // ── Item 27 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q27',
    number: 27,
    pageNumber: 663,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Analytic Geometry',
    text: 'The coordinate axes are the asymptote of the equilateral hyperbola whose vertex in the first quadrant is $3\\sqrt{2}$ units from the origin. Determine the equation of the hyperbola.',
    options: opts('$xy = 9$', '$xy = 4$', '$xy = 6$', '$xy = 8$'),
    ...solved(27, 'A', '$xy = 9$'),
  },

  // ── Item 28 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q28',
    number: 28,
    pageNumber: 663,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Vector Functions',
    text: 'Find the vector function that describes the curve $C$ of intersection of the plane $y = 2x$ and the paraboloid $z = 9 - x^2 - y^2$.',
    options: opts(
      '$f(t) = (t)\\mathbf{i} + (3t)\\mathbf{j} + (5 - 9t^2)\\mathbf{k}$',
      '$f(t) = (2t)\\mathbf{i} + (t)\\mathbf{j} + (1 - 4t^2)\\mathbf{k}$',
      '$f(t) = (t)\\mathbf{i} + (2t)\\mathbf{j} + (9 - 5t^2)\\mathbf{k}$',
      '$f(t) = (2t)\\mathbf{i} + (3t)\\mathbf{j} + (4 - 1t^2)\\mathbf{k}$',
    ),
    ...solved(28, 'C', '$f(t) = (t)\\mathbf{i} + (2t)\\mathbf{j} + (9 - 5t^2)\\mathbf{k}$'),
  },

  // ── Item 29 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q29',
    number: 29,
    pageNumber: 663,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Derivatives',
    text: "Find $y'$ if $x = 2 \\arccos 2t$ and $y = 4 \\arcsin 2t$.",
    options: opts('1', '2', '-2', '-1'),
    ...solved(29, 'C', '$\\frac{dy}{dx} = -2$'),
  },

  // ── Item 30 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q30',
    number: 30,
    pageNumber: 663,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Related Rates',
    text: 'An inverted conical container has a diameter of 120 cm and a depth of 45 cm. If water is flowing out of the vertex of the container at a rate of $250\\pi$ cm³/sec, how fast is the depth of the water dropping when the height is 15 cm?',
    options: opts('$-7/8$', '$-3/4$', '$-3/8$', '$-5/8$'),
    ...solved(30, 'D', '$v = -5/8$ cm/s'),
  },

  // ── Item 31 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q31',
    number: 31,
    pageNumber: 663,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Kinematics',
    text: 'The position function of an object that moves on a coordinate line is $S(t) = t^2 - 6t$ where $S$ is measured in centimeters and $t$ in seconds. Find the distance travelled in the time interval $[0, 9]$.',
    options: opts('36 cm', '18 cm', '27 cm', '45 cm'),
    ...solved(31, 'D', '45 cm'),
  },

  // ── Item 32 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q32',
    number: 32,
    pageNumber: 663,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Kinematics',
    text: 'A body moves along a horizontal line according to $s = f(t) = t^3 - 9t^2 + 24t$. Find the total distance travelled in the first 5 seconds of motion.',
    options: opts('28', '20', '32', '18'),
    ...solved(32, 'A', '28'),
  },
];

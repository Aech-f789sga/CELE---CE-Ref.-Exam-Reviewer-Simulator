import { Question } from '../../../types/exam';
import { solved, opts } from './may2017Helpers';

export const MSTC_MAY2017_PART2: Question[] = [
  // ── Item 21 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q21',
    number: 21,
    pageNumber: 451,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Trigonometry — Oblique Triangle',
    text: 'A cruise ship leaves a port and sails 35 miles due west. It then changes course and sails 30 miles on a bearing S 32° W. How far is it from the port at this point?',
    options: opts('62.3 miles', '55.7 miles', '58.7 miles', '56.9 miles'),
    ...solved(21, 'D', '56.9 miles', 465),
  },

  // ── Item 22 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q22',
    number: 22,
    pageNumber: 451,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Plane Geometry — Isosceles Triangle',
    text: 'Given a point P on side BC of triangle ABC. Given that AB = AC = BP and AP = CP, what is the value of angle ABC?',
    options: opts('32°', '28°', '36°', '42°'),
    ...solved(22, 'C', '36°', 465),
  },

  // ── Item 23 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q23',
    number: 23,
    pageNumber: 451,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Trigonometry — Angle of Elevation',
    text: 'AB and CD are two buildings of heights H and h respectively. The angle of elevation of A from C and D are respectively θ and 45°. Express the height of building AB in terms of the height of building CD.',
    options: opts('H = h(1 - tan θ)', 'H = h tan θ', 'H = h / (1 - tan θ)', 'H = h / (1 + tan θ)'),
    ...solved(23, 'C', 'H = h / (1 - tan θ)', 466),
  },

  // ── Item 24 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q24',
    number: 24,
    pageNumber: 451,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Algebra — Relative Motion',
    text: 'Four towns are located at the corners of a square highway network. Four motorists set out from each town, each driving to the next town (in clockwise direction), and each man but the fourth going 8 kph faster than the car ahead - thus the first car travels 24 km/hr faster than the fourth. At the end of one hour the first and third cars are 204 km, and the second and fourth 212 (beeline) km apart. What is the rate of the first car?',
    options: opts('50 kph', '42 kph', '26 kph', '34 kph'),
    ...solved(24, 'A', '50 kph', 466),
  },

  // ── Item 25 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q25',
    number: 25,
    pageNumber: 451,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Complex Numbers — Equality',
    text: 'Find the value of x - y in the equation (x + yi)(1 - 2i) = 7 - 4i.',
    options: opts('5', '1', '3', '2'),
    ...solved(25, 'B', 'x - y = 1', 467),
  },

  // ── Item 26 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q26',
    number: 26,
    pageNumber: 452,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Vectors — Angle Between',
    text: 'Find the angle between the given zero-based vectors: V₁ = (-√3, 1) and V₂ = (2√3, 2).',
    options: opts('150°', '90°', '100°', '120°'),
    ...solved(26, 'D', '120°', 467),
  },

  // ── Item 27 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q27',
    number: 27,
    pageNumber: 452,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Graph Theory — Euler Formula',
    text: 'In a certain network, there are 4 nodes and 4 regions. How many arcs are there in the network?',
    options: opts('2', '4', '6', '8'),
    ...solved(27, 'C', '6 arcs', 468),
  },

  // ── Item 28 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q28',
    number: 28,
    pageNumber: 452,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Plane Geometry — Trapezoid',
    text: 'The bases of a trapezoid have lengths of 7.6 cm and 2.9 cm, and its altitude is 4 cm. Compute the area.',
    options: opts('28', '19', '38', '21'),
    ...solved(28, 'D', '21 cm²', 468),
  },

  // ── Item 29 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q29',
    number: 29,
    pageNumber: 452,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Algebra — Parallelogram Area',
    text: 'The area of a parallelogram is represented by x² - 4. If the length of a side is x + 4 and the length of the altitude to that side is x - 3, what is the area of the parallelogram?',
    options: opts('64', '60', '70', '80'),
    ...solved(29, 'B', '60', 468),
  },

  // ── Item 30 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q30',
    number: 30,
    pageNumber: 452,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Geometry — Unit Cost Comparison',
    text: 'Which one of the following is better: a large pizza with 16-inch diameter for P650.00 or a medium pizza with an 8-inch diameter for P325.00? What is the cost per square inch of the better buy pizza?',
    options: opts(
      'Large pizza @ P3.23/sq. in.',
      'Medium pizza @ P6.47/sq. in.',
      'Medium pizza @ P3.23/sq. in.',
      'Large pizza @ P6.47/sq. in.',
    ),
    ...solved(30, 'A', 'Large pizza @ P3.23/sq. in.', 469),
  },

  // ── Item 31 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q31',
    number: 31,
    pageNumber: 452,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Geometry — Pigeonhole Principle',
    text: 'Five points are located in or on the perimeter of an equilateral triangle with 7-inch sides. If d is the distance between the closest pair of points, what is the maximum possible value of d?',
    options: opts('4.5', '2.5', '3.5', '1.5'),
    ...solved(31, 'C', '3.5 in', 469),
  },

  // ── Item 32 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q32',
    number: 32,
    pageNumber: 452,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Solid Geometry — Cylinder',
    text: 'The surface area of a cylindrical aluminum can is a measure of how much aluminum it requires. If the can has radius r and height h, its surface area A and its volume V are given by the equations A = 2πr² + 2πrh and V = πr²h. The volume V of a 12 oz cola can is 355 cm³. A cola can is approximately cylindrical. Express its surface area A as function of its radius r, where r is measured in centimeters.',
    options: opts('2πr² + 355/r', '2πr² + 810/r', '2πr² + 175/r', '2πr² + 710/r'),
    ...solved(32, 'D', 'A = 2πr² + 710/r', 469),
  },

  // ── Item 33 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q33',
    number: 33,
    pageNumber: 452,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Analytic Geometry — Line',
    text: 'The number of public wireless Internet (WiFi) access points (in thousands) is projected to grow from 2015 to 2020 according to the equation -66x + 2y = 84, where x is the number of years after 2015. Find the slope and y-intercept of the linear equation.',
    options: opts(
      'Slope = 66, y-intercept = 84',
      'Slope = 43, y-intercept = 12',
      'Slope = 42, y-intercept = 33',
      'Slope = 33, y-intercept = 42',
    ),
    ...solved(33, 'D', 'Slope = 33, y-intercept = 42', 470),
  },

  // ── Item 34 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q34',
    number: 34,
    pageNumber: 453,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Calculus — Asymptotes',
    text: 'Find the horizontal asymptote of the curve y = 3x³ / (x³ - 2x² + 4x - 3).',
    options: opts('y = 1/3', 'y = 3', 'y = 1', 'y = 1/2'),
    ...solved(34, 'B', 'y = 3', 470),
  },

  // ── Item 35 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q35',
    number: 35,
    pageNumber: 453,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Analytic Geometry — Ellipse',
    text: "An earth satellite has an apogee of 2420 miles and a perigee of 460 miles. If the earth's radius is 400 miles, what is the value of the eccentricity of the ellipse, which form with the center of the earth at one focus and whose apogee and perigee satisfy the conditions above.",
    options: opts('0.353', '0.533', '0.478', '0.435'),
    ...solved(35, 'B', 'e = 0.533', 470),
  },

  // ── Item 36 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q36',
    number: 36,
    pageNumber: 453,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Calculus — Related Rates',
    text: 'The parallel sides of a rectangle are lengthening at the rate of 2 in/sec, while the other two sides are shortening in such a way that the figure remains rectangle with a constant area A = 50 in². What is the rate of change of the perimeter when the length of an increasing side is 5 in?',
    options: opts(
      '-4 in/s (decreasing)',
      '4 in/s (increasing)',
      '-2 in/s (decreasing)',
      '2 in/s (increasing)',
    ),
    ...solved(36, 'A', '-4 in/s (decreasing)', 471),
  },

  // ── Item 37 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q37',
    number: 37,
    pageNumber: 453,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Calculus — Related Rates',
    text: 'The radius of a sphere is r when the time is t seconds. Find the radius when the rate of change of the surface area and the rate of change of the radius are equal.',
    options: opts('1/8π', '1/4π', '1/16π', '1/2π'),
    ...solved(37, 'A', 'r = 1/(8π)', 471),
  },

  // ── Item 38 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q38',
    number: 38,
    pageNumber: 453,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Calculus — Related Rates',
    text: 'An inverted conical tank is 40 feet in diameter at the base and 60 feet high. Water is drained from the tank at the rate of 36π ft³/sec. Compute the rate at which the radius of the water surface shrinking when its radius is 16 feet.',
    options: opts('5/64 fps', '3/32 fps', '3/64 fps', '1/16 fps'),
    ...solved(38, 'C', '3/64 fps', 472),
  },

  // ── Item 39 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q39',
    number: 39,
    pageNumber: 453,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Calculus — Related Rates',
    text: 'An inverted conical container has a diameter of 40 in and a depth of 15 in. If water is flowing out of the vertex of the container at a rate of 25π in³/sec, how fast is the depth of the water dropping when the height is 5 inches?',
    options: opts('10/16 in/s', '5/16 in/s', '9/16 in/s', '7/16 in/s'),
    ...solved(39, 'C', '9/16 in/s', 472),
  },

  // ── Item 40 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q40',
    number: 40,
    pageNumber: 453,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Statics — Inclined Plane',
    text: 'If a force of 420 N is required to push a safe up a ramp that is inclined 10°, then what is the weight of the safe?',
    options: opts('2542.3', '2418.7', '2365.5', '2278.9'),
    ...solved(40, 'B', '2418.7 N', 473),
  },
];

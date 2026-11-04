import { Question } from '../../../types/exam';
import { solved, opts } from './may2015Helpers';

/**
 * MSTC — May 2015, items 46–60.
 *
 * The booklet prints its own working for every item in this paper, so the
 * solution shown is a crop of that page rather than a retyped derivation.
 * The last argument of `solved` is the booklet folio the crop was taken from;
 * items whose working runs over a page turn carry the closing folio too.
 */
export const MSTC_MAY2015_PART4: Question[] = [
  // Item 46
  {
    id: 'mstc-may2015-q46',
    number: 46,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Analytic Geometry - Polar Curves',
    text: 'Find the area enclosed by the curve whose equation in polar form is given by $r = 2\\sin\\theta + 2\\cos\\theta$.',
    options: opts('π', 'π/2', '2π', '4π'),
    ...solved(46, 'C', '2π (Option C)', 24),
  },

  // Item 47
  {
    id: 'mstc-may2015-q47',
    number: 47,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Analytic Geometry - Polar to Rectangular',
    text: 'A curve has a polar equation of $r^2 - \\csc 2\\theta = 0$. Determine the equation of the curve in rectangular or Cartesian plane form.',
    options: opts('xy = 2', '2xy = 1', '4xy = 1', 'xy = -4'),
    ...solved(47, 'B', '2xy = 1 (Option B)', 25),
  },

  // Item 48
  {
    id: 'mstc-may2015-q48',
    number: 48,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Solid Geometry - Spheres',
    text: 'Find the coordinate of the center of the sphere with general equation of $x^2+2x+y^2-16y+z^2-12z+65=0$.',
    options: opts('(1, -8, 6)', '(-1, 8, 6)', '(-2, 16, 12)', '(2, 16, 12)'),
    ...solved(48, 'B', '(-1, 8, 6) (Option B)', 25),
  },

  // Item 49
  {
    id: 'mstc-may2015-q49',
    number: 49,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Solid Geometry - Angle Between Planes',
    text: 'Given two planes, $x+4y-z+3=0$ and $x-12y+2z-7=0$. Determine the angle between the planes.',
    options: opts('125.92°', '161.11°', '149.80°', '138.95°'),
    ...solved(49, 'B', '161.11° (Option B)', 25),
  },

  // Item 50
  {
    id: 'mstc-may2015-q50',
    number: 50,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Calculus - Limits',
    text: 'Evaluate the limit of $\\lim_{z \\to 0} \\ln\\dfrac{z+9}{9}$.',
    options: opts('0', '1/2', '2', '-1'),
    ...solved(50, 'A', '0 (Option A)', 26),
  },

  // Item 51
  {
    id: 'mstc-may2015-q51',
    number: 51,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Calculus - Related Rates',
    text: 'When there is only 6 m of rope remaining in pulling a boat 3.8 meters below the pier, the rope is being pulled at 0.9 m/s. How fast the boat does approaches to the pier at this instant?',
    options: opts('1.16 m/s', '2.11 m/s', '1.07 m/s', '0.71 m/s'),
    ...solved(51, 'A', '1.16 m/s (Option A)', 26),
  },

  // Item 52
  {
    id: 'mstc-may2015-q52',
    number: 52,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Calculus - Definite Integrals',
    text: 'Evaluate $\\displaystyle\\int_0^1 \\frac{3^x}{e^x}\\,dx$.',
    options: opts('1.090', '1.051', '2.193', '2.110'),
    ...solved(52, 'B', '1.051 (Option B)', 26),
  },

  // Item 53
  {
    id: 'mstc-may2015-q53',
    number: 53,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Calculus - Integration by Parts',
    text: 'Evaluate the integral: $\\displaystyle\\int_0^{\\pi/4} 8x\\cos 2x\\,dx$.',
    options: opts('2.47', '1.14', '3.52', '5.56'),
    ...solved(53, 'B', '1.14 (Option B)', 26),
  },

  // Item 54
  {
    id: 'mstc-may2015-q54',
    number: 54,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Calculus - Work',
    text: 'A hemispherical tank having a top diameter of 2.4 m is filled with water. Find the work done in pumping all the water out to elevation 0.80 m above the top of the tank.',
    options: opts('52.65 kJ', '44.38 kJ', '75.63 kJ', '67.92 kJ'),
    ...solved(54, 'B', '44.38 kJ (Option B)', 26, 27),
  },

  // Item 55
  {
    id: 'mstc-may2015-q55',
    number: 55,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Probability - Combinations',
    text: 'Given $nC10 = 22\\,nC12$, determine the value of n.',
    options: opts('12', '15', '17', '13'),
    ...solved(55, 'D', 'n = 13 (Option D)', 27),
  },

  // Item 56
  {
    id: 'mstc-may2015-q56',
    number: 56,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Probability - Permutations',
    text: 'How many ways can 1 president, 1 vice president and one secretary can be chosen from 14 PICE members?',
    options: opts('2184', '364', '1521', '1825'),
    ...solved(56, 'A', '2184 ways (Option A)', 27),
  },

  // Item 57
  {
    id: 'mstc-may2015-q57',
    number: 57,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Probability - Combinations',
    text: 'The Human Resources Manager of Ayala Land Corporation is to hire three out of ten competent applicants. How many ways can the HR Manager choose?',
    options: opts('156', '120', '114', '95'),
    ...solved(57, 'B', '120 ways (Option B)', 27),
  },

  // Item 58
  {
    id: 'mstc-may2015-q58',
    number: 58,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Probability - Binomial Distribution',
    text: 'A packet consists of 20 pieces of candy. In a thousand packets, 40 packets consist of less than 20 candies. When selecting 3 packets, what is the probability of selecting a packet with less than 20 candies?',
    options: opts('11%', '15%', '8%', '4%'),
    ...solved(58, 'A', '11% (Option A)', 27),
  },

  // Item 59
  {
    id: 'mstc-may2015-q59',
    number: 59,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Probability - Mutually Exclusive Events',
    text: 'A certain statistical observation found that it has a probability of failing once equal to 0.422, and twice equal to 0.141 and thrice equal to 0.016. Determine the probability that it will fail once or thrice.',
    options: opts('0.0755', '0.297', '0.0675', '0.438'),
    ...solved(59, 'D', '0.438 (Option D)', 28),
  },

  // Item 60
  {
    id: 'mstc-may2015-q60',
    number: 60,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Probability - Without Replacement',
    text: 'A classroom has 71 students. Ten of them are Chinese, 24 are Japanese and 37 are Filipinos. If three students are randomly asked to get out from the room, one after the other, what are the probabilities that all three are Chinese?',
    options: opts('0.0052', '0.0892', '0.0021', '0.0987'),
    ...solved(60, 'C', '0.0021 (Option C)', 28),
  },
];

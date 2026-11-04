import { Question } from '../../../types/exam';
import { solved, opts } from './may2015Helpers';

/**
 * MSTC — May 2015, items 1–15.
 *
 * The booklet prints its own working for every item in this paper, so the
 * solution shown is a crop of that page rather than a retyped derivation.
 * The last argument of `solved` is the booklet folio the crop was taken from;
 * items whose working runs over a page turn carry the closing folio too.
 */
export const MSTC_MAY2015_PART1: Question[] = [
  // Item 1
  {
    id: 'mstc-may2015-q1',
    number: 1,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Series and Summation',
    text: 'Evaluate $\\sum_{k=1}^{25}(5k-3)$.',
    options: opts('1550', '1450', '1660', '1360'),
    ...solved(1, 'A', '1550 (Option A)', 12),
  },

  // Item 2
  {
    id: 'mstc-may2015-q2',
    number: 2,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Sequences',
    text: 'Find the 6th term of the sequence 1/3, 2/3, 7/3 ... $(n^2-2)/3$.',
    options: opts('47/3', '34/3', '43/4', '37/4'),
    ...solved(2, 'B', '34/3 (Option B)', 12),
  },

  // Item 3
  {
    id: 'mstc-may2015-q3',
    number: 3,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Binomial Expansion',
    text: 'What is the fourth term in the expansion of $(2x-1/x)^{10}$?',
    options: opts('-960/x⁴', '13440', '-15360', '3360'),
    ...solved(3, 'C', '-15 360x⁴ (Option C)', 12),
  },

  // Item 4
  {
    id: 'mstc-may2015-q4',
    number: 4,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Quadratic Equations',
    text: 'Find the value of the constant h in the quadratic equation $3x^2 - hx + x - 7h = 0$ if 3 is one of the roots.',
    options: opts('2', '3', '-2', '-4'),
    ...solved(4, 'B', 'h = 3 (Option B)', 12),
  },

  // Item 5
  {
    id: 'mstc-may2015-q5',
    number: 5,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Partial Fractions',
    text: 'Resolve the following into partial fraction and solve for A.\n\n$\\dfrac{3x^2+2x+1}{x^2+x-2} = \\dfrac{A}{x-1} + \\dfrac{B}{x+2}$',
    options: opts('2', '-1', '1', '3'),
    ...solved(5, 'A', 'A = 2 (Option A)', 12),
  },

  // Item 6
  {
    id: 'mstc-may2015-q6',
    number: 6,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Work Problems',
    text: 'Mr. Curry can finish a job in 6 days and Mr. Thompson can finish the same job in 12 days. How many days the job will be done if both of them will work together?',
    options: opts('3', '4', '5', '2'),
    ...solved(6, 'B', '4 days (Option B)', 13),
  },

  // Item 7
  {
    id: 'mstc-may2015-q7',
    number: 7,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Rate Problems',
    text: 'Inlet pipes A and B can fill a tank in 6 hours. If the rate of pipe A is twice that of pipe B, find the time of pipe B to fill the tank alone.',
    options: opts('9 hours', '12 hours', '15 hours', '18 hours'),
    ...solved(7, 'D', '18 hours (Option D)', 13),
  },

  // Item 8
  {
    id: 'mstc-may2015-q8',
    number: 8,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Digit Problems',
    text: 'A number is expressed by 3-digits which are in arithmetic progression. If the number is divided by the sum of the digits the quotient will be 26 and if 198 be added to the number, the digits will be inverted. Determine the value of the ten\'s digit.',
    options: opts('2', '3', '4', '5'),
    ...solved(8, 'B', '3 (Option B)', 13),
  },

  // Item 9
  {
    id: 'mstc-may2015-q9',
    number: 9,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Statistics - Mean',
    text: 'The average of 90 real numbers is 70. When two numbers are removed namely 28 and 68, find the new average.',
    options: opts('70.5', '72', '82.75', '63.5'),
    ...solved(9, 'A', '70.5 (Option A)', 13),
  },

  // Item 10
  {
    id: 'mstc-may2015-q10',
    number: 10,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Wind and Current Problems',
    text: 'An airplane travels a distance of 500 km against the wind in one hour and 45 minutes. Traveling the same distance with the wind, the airplane consumed one hour and 15 minutes. Find the velocity of the wind.',
    options: opts('42.86 kph', '57.14 kph', '71.43 kph', '34.29 kph'),
    ...solved(10, 'B', '57.14 kph (Option B)', 14),
  },

  // Item 11
  {
    id: 'mstc-may2015-q11',
    number: 11,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Algebra - Rate Problems',
    text: 'A tank can be filled by an inlet pipe in 6 hours and can be emptied by an outlet in 12 hours. How much time needed to fill the tank if both the inlet and outlet pipes are open.',
    options: opts('12 hours', '18 hours', '9 hours', '6 hours'),
    ...solved(11, 'A', '12 hours (Option A)', 14),
  },

  // Item 12
  {
    id: 'mstc-may2015-q12',
    number: 12,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane and Spherical Trigonometry - Angles of Elevation',
    text: 'A flagpole and a tower stands 36 meters apart on a horizontal plane. A person standing successively at their bases observes that the angle of elevation of the top of the tower is twice that of the pole, but at a point midway between their bases the angles of elevation are complementary. Find the height of the tower.',
    options: opts('38 m', '45 m', '32 m', '27 m'),
    ...solved(12, 'D', '27 m (Option D)', 14),
  },

  // Item 13
  {
    id: 'mstc-may2015-q13',
    number: 13,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane and Spherical Trigonometry - Angles of Depression',
    text: 'A 40-m high tower stands vertically on a hillside (sloping ground) which makes an angle of 18° with the horizontal. A tree also stands vertically up the hill from the tower. An observer on the top of the tower finds the angle of depression of the top of the tree to be 28° and the bottom of the tree to be 40°. Determine the height of the tree.',
    options: opts('12.58 m', '10.56 m', '11.35 m', '8.75 m'),
    ...solved(13, 'B', '10.56 m (Option B)', 15),
  },

  // Item 14
  {
    id: 'mstc-may2015-q14',
    number: 14,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane and Spherical Trigonometry - Angles of Elevation',
    text: 'The top of a tower is sighted from point A and found to have an angle of elevation of 26°. When sighted at point B that is 300 m closer to the tower, the angle of elevation is 56°. Points A and B are on the same horizontal plane with the base of the tower. What is the height of the tower?',
    options: opts('218 m', '197 m', '175 m', '205 m'),
    ...solved(14, 'A', '218 m (Option A)', 15),
  },

  // Item 15
  {
    id: 'mstc-may2015-q15',
    number: 15,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane and Spherical Trigonometry - Circles',
    text: 'Points A, B and C are in the horizontal circular plane where AB is the diameter equal to 24 m. The top of the pole standing at point A is sighted at B and C has angles of elevation equal to 20° and 30°, respectively. Point C is along the circumference of the circle. Find the distance BC.',
    options: opts('15.13 m', '16.78 m', '18.63 m', '17.44 m'),
    ...solved(15, 'C', '18.63 m (Option C)', 15),
  },
];

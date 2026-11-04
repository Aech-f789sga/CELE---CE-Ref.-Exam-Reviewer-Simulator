import { Question } from '../../../types/exam';
import { mstcMay2022Figure } from '../../mstcMay2022Images';
import { opts, solved } from './may2022Helpers';

/**
 * MSTC May 2022, items 16-30 — growth models, partial derivatives, centroids, engineering
 * economy (ordinary annuity, capitalized cost, rate of return,
 * break-even, arithmetic gradient), kinematics, work-energy,
 * fluid flow and a compass-rule traverse.
 */
export const MSTC_MAY2022_PART2: Question[] = [
  // ── Item 16 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q16',
    number: 16,
    pageNumber: 374,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Differential Equations - Newton\'s Law of Cooling',
    text: 'When a cake is removed from an oven, its temperature is measured at 300 °F. Three minutes later its temperature is 200 °F. How long will it take for the cake to cool off to a room temperature of 70 °F? Formulate to know the temperature of the cake at t minutes.',
    options: opts(
      'T = 70 - 230 e^(kt)',
      'T = 70 + 230 e^(kt)',
      'T = 70 + 250 e^(kt)',
      'T = 70 - 250 e^(kt)',
    ),
    ...solved(16, 'B', 'T = 70 + 230 e^(kt)'),
  },

  // ── Item 17 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q17',
    number: 17,
    pageNumber: 375,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Multivariable Calculus - Directional Derivative & Gradient',
    text: 'The temperature in a rectangular box is approximated by\nT(x,y,z) = xyz(1 - x)(2 - y)(3 - z), 0 ≤ x ≤ 1.0, 0 ≤ y ≤ 2.0, 0 ≤ z ≤ 3.0.\nIf the mosquito is located at (1/2, 1, 1), in which direction should it fly to cool off as rapidly as possible?',
    options: opts(
      'The mosquito should fly in the direction -k/4',
      'The mosquito should fly in the direction k/4',
      'The mosquito should fly in the direction -j/2',
      'The mosquito should fly in the direction k/2',
    ),
    ...solved(17, 'A', 'The mosquito should fly in the direction -k/4'),
  },

  // ── Item 18 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q18',
    number: 18,
    pageNumber: 375,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Differential Calculus - Cauchy\'s Mean Value Theorem',
    text: 'Find the value of x₀ prescribed by the extended law of the mean when f(x) = 3x + 2 and g(x) = x² + 1 on (1, 4).',
    options: opts('1.5', '2.5', '3.5', '2.0'),
    ...solved(18, 'B', '2.5'),
  },

  // ── Item 19 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q19',
    number: 19,
    pageNumber: 375,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Probability & Statistics - Expected Value & Insurance Profit',
    text: 'An insurance company charges P80,000 annually for a car insurance, the policy specifies that the company will pay P100,000 for a minor accident and P500,000 for a major accident. If the probability of a motorist having a minor accident during the year is 0.2 and of having a major accident of 0.05, how much can the insurance company expect to make on a policy?',
    options: opts('P30,000', 'P20,000', 'P25,000', 'P35,000'),
    ...solved(19, 'D', 'P35,000'),
  },

  // ── Item 20 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q20',
    number: 20,
    pageNumber: 375,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Engineering Economy - Arithmetic Gradient Present Worth',
    text: 'The maintenance of Isuzu diesel engine is expected to be $155 at the end of the first year and it is expected to increase $35 each year for the following years. What sum of money should be set aside now to pay the maintenance for the eight-year period? Assume MARR to be 6%.\nPresent worth factor (P/A, 6%, 8) = 6.2098\nSinking fund factor (A/F, 6%, 8) = 0.1010\nCompound amount factor (F/A, 6%, 8) = 9.897\nUniform gradient series factor (P/G, 6%, 8) = 19.845',
    options: opts('$1756', '$1687', '$1657', '$1776'),
    ...solved(20, 'C', '$1657'),
  },

  // ── Item 21 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q21',
    number: 21,
    pageNumber: 376,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Engineering Economy - Equipment Purchase vs Rental Break-Even',
    text: 'A contractor can buy a dump trucks for P800,000 each (surplus) or rent them for P1,189 per truck per day. The truck has salvage value of P100,000 at the end of its useful life of 5 years. Annual cost of maintenance is P20,000. If money is worth 14% per annum, determine the number of days per year that a truck must be used to warrant the purchase of the truck.',
    options: opts('199', '197', '200', '198'),
    ...solved(21, 'C', '200'),
  },

  // ── Item 22 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q22',
    number: 22,
    pageNumber: 376,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Engineering Economy - Compound Inflation',
    text: 'In 1991, the average cost of a house is Php1,000,000. If the annual inflation rate is 6%, what is the value of a house of the same model in 1996?',
    options: opts('Php1,563,325', 'Php1,338,226', 'Php1,632,857', 'Php1,158,254'),
    ...solved(22, 'B', 'Php1,338,226'),
  },

  // ── Item 23 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q23',
    number: 23,
    pageNumber: 376,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Physics & Mechanics - Hooke\'s Law Spring Deflection',
    text: 'When a family of four with a total mass of 200 kg step into their 1200 kg car, the car spring compresses 3 cm. Assuming that they act as a single spring, how far will the car lower if loaded with 300 kg rather than 200 kg?',
    options: opts('0.050 m', '0.065 m', '0.045 m', '0.075 m'),
    ...solved(23, 'C', '0.045 m'),
  },

  // ── Item 24 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q24',
    number: 24,
    pageNumber: 376,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Physics & Mechanics - Dynamic Impact on Coiled Spring',
    text: 'A ball of mass = 2.60 kg, starting from rest, falls a vertical distance h = 55 cm before striking a vertical coiled spring which it compresses an amount equal to 15 cm. Determine the spring stiffness constant K of the spring.',
    options: opts('1885 N/m', '1555 N/m', '1568 N/m', '1585 N/m'),
    ...solved(24, 'D', '1585 N/m'),
  },

  // ── Item 25 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q25',
    number: 25,
    pageNumber: 376,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Physics & Mechanics - Work, Friction & Power Output',
    text: 'A man pushes a 50.0 kg box across a level floor at a constant speed of 1.00 m/s for 10.0 s. If the coefficient of friction between the box and the floor is 0.200, determine the average power output by the man.',
    options: opts('89 Watts', '98 Watts', '101 Watts', '110 Watts'),
    ...solved(25, 'B', '98 Watts'),
  },

  // ── Item 26 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q26',
    number: 26,
    pageNumber: 376,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Physics - Circular Motion & Centripetal Acceleration',
    text: 'A 150-g ball at the end of a string is revolving uniformly in a horizontal circle of radius 0.600 m. The ball makes 2 revolutions in a second. What is its centripetal acceleration?',
    options: opts('97.54 m/s²', '97.45 m/s²', '95.74 m/s²', '94.75 m/s²'),
    ...solved(26, 'D', '94.75 m/s²'),
  },

  // ── Item 27 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q27',
    number: 27,
    pageNumber: 377,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Probability & Combinatorics - Fundamental Counting Principle',
    text: 'A music school produced a number of musicians which includes 3 drummers, 4 trumpet players and 5 pianists. How many different jazz trios can be formed from this batch of musicians if each trio consists of a drummer, a trumpet player and a pianist?',
    options: opts('40', '60', '50', '70'),
    ...solved(27, 'B', '60'),
  },

  // ── Item 28 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q28',
    number: 28,
    pageNumber: 377,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Probability & Combinatorics - Permutations with Repetition',
    text: 'A company is designing fences using different widths of wooden boards. They have 5 boards that are 2 inches wide, 10 boards that are 3 inches wide, and 5 boards that are 4 inches wide. How many ways can the fence be designed using all these boards?',
    options: opts('15,504', '46,558,512', '5,587,021,440', '75,632,458'),
    ...solved(28, 'B', '46,558,512'),
  },

  // ── Item 29 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q29',
    number: 29,
    pageNumber: 377,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Probability & Statistics - Binomial Probability Distribution',
    text: 'A test consists of 6 multiple choice questions. To pass the test, a student must answer at least 4 questions correctly. Each question has 3 possible answers, of which only one is correct. If a student guesses on each question, what is the probability that the student will pass the test?',
    options: opts('0.2001', '0.3001', '0.0200', '0.1001'),
    ...solved(29, 'D', '0.1001'),
  },

  // ── Item 30 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q30',
    number: 30,
    pageNumber: 377,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Surveying - Compass Rule Traverse Balancing',
    text: 'Calculate the adjusted distance of line BA for the given traverse field notes. Use compass rule.',
    figureSvg: mstcMay2022Figure(
      'fig_q30_traverse',
      'Table of traverse field notes: AB 677.97 m, BC 616.05 m, CD 690.88 m, DE 783.82 m, EA 970.26 m with their latitudes and departures',
    ),
    options: opts('677.6812 m', '677.5120 m', '677.8221 m', '677.9784 m'),
    ...solved(30, 'D', '677.9784 m'),
  },
];

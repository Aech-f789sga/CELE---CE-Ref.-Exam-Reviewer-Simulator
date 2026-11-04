import { Question } from '../../../types/exam';
import { mstcMay2018Figure } from '../../mstcMay2018Images';
import { opts, recall, solved } from './may2018Helpers';

/**
 * MSTC May 2018, items 1-16 — exponential growth and decay, logarithms,
 * sequences, joint variation, clock angles, spherical and plane trigonometry.
 */
export const MSTC_MAY2018_PART1: Question[] = [
  // ── Item 1 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q1',
    number: 1,
    pageNumber: 659,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Exponential Growth & Decay',
    text: 'Given the half-life T of radium is 1690 years, how much will remain of 10 grams of radium after 500 years?',
    options: opts('6.814 grams', '8.614 grams', '4.816 grams', '8.146 grams'),
    ...solved(1, 'D', '8.146 grams'),
  },

  // ── Item 2 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q2',
    number: 2,
    pageNumber: 659,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Exponential Growth & Decay',
    text: 'Strontium-90 is a waste product from nuclear reactors. As a consequence of fallout from atmospheric nuclear tests, we all have a measurable amount of strontium-90 in our bones. The half-life of strontium-90 is 28 years, meaning that after 28 years a given amount of the substance will have decayed to half the original amount. Find the exponential decay model for strontium-90. Suppose that a nuclear accident occurs and releases 60 grams of strontium-90 into the atmosphere. How long will it take for strontium-90 to decay to a level of 20 grams?',
    options: opts('44.4 years', '46.9 years', '38.56 years', '32.78 years'),
    ...solved(2, 'A', '44.38 years'),
  },

  // ── Item 3 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q3',
    number: 3,
    pageNumber: 659,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Exponential Growth & Decay',
    text: 'As a result of Chernobyl nuclear accident, radioactive debris was carried through the atmosphere. On immediate concern was the impact of the debris had on the milk supply. The percent $y$ of the radioactive material in raw milk after $t$ days is estimated by $y = 100(2.7)^{-0.1t}$. Estimate the expected percent of radioactive material in the milk after 30 days.',
    options: opts('10%', '7%', '9%', '5%'),
    ...solved(3, 'D', '5.081%'),
  },

  // ── Item 4 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q4',
    number: 4,
    pageNumber: 659,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Logarithms',
    text: 'Find the loudness of a sound that has an intensity 10,000 times the threshold of hearing for the average human ear. HINT: $L = 10 \\log (I/I_0)$',
    options: opts('20', '10', '30', '40'),
    ...solved(4, 'D', '40 decibels'),
  },

  // ── Item 5 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q5',
    number: 5,
    pageNumber: 659,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Logarithms',
    text: 'An earthquake in San Francisco in 1991 was reported to have a Richter number of 6.90. How does the intensity of the earthquake compare with the reference intensity?',
    options: opts(
      '$8.562 \\times 10^6$',
      '$4.326 \\times 10^6$',
      '$7.943 \\times 10^6$',
      '$9.478 \\times 10^6$',
    ),
    ...solved(5, 'C', '$7.943 \\times 10^6$'),
  },

  // ── Item 6 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q6',
    number: 6,
    pageNumber: 659,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Logarithms',
    text: 'Find the depth "$x$" at which the intensity of the radiation passing through a lead shield is reduced to 3% of the original intensity if the value of $k$ is 2.4. Use the formula $\\ln (I/I_0) = -kx$. Round answer to two decimal places.',
    options: opts('2.46 millimeters', '1.46 millimeters', '3.46 millimeters', '4.46 millimeters'),
    ...solved(6, 'B', '1.46 millimeters'),
  },

  // ── Item 7 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q7',
    number: 7,
    pageNumber: 660,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Arithmetic Sequences',
    text: 'Rolls of carpet are stacked in 20 rows with 3 rolls in the top row, 4 rolls in the next row, and so on, forming an arithmetic sequence. Find the total number of carpet rolls if there are 22 rolls in the bottom row.',
    options: opts('297', '273', '250', '322'),
    ...solved(
      7,
      'C',
      '250',
      'The answer grid at the foot of folio 669 prints "7 B", but the booklet\'s own working on folio 671 sums the 20 terms as $\\frac{20}{2}(3 + 22) = 250$, which is option C. The key here follows the printed working; the grid entry appears to be a misprint.',
    ),
  },

  // ── Item 8 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q8',
    number: 8,
    pageNumber: 660,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Geometric Sequences',
    text: 'Find the partial sum of the given sequence: $S_4$ if $a_1 = 6$ and $r = 3$. Hint: Use the formula $S_n = a_1(r^n - 1)/(r - 1)$',
    options: opts('320', '280', '240', '420'),
    ...solved(8, 'C', '240'),
  },

  // ── Item 9 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q9',
    number: 9,
    pageNumber: 660,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Linear Models',
    text: 'ABC car rental agency charges P400 a day plus P15 per km, whereas DEF rental agency charges P2000 a day and P5 per km. How many km must be driven to make the daily cost of an ABC rental a better deal than a DEF rental?',
    options: opts('140', '150', '130', '160'),
    ...solved(9, 'D', '160 km'),
  },

  // ── Item 10 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q10',
    number: 10,
    pageNumber: 660,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Quadratic Functions',
    text: 'The cost for producing $x$ units of a product is given by $C(x) = x^2 + 520x + 1000$. Find the approximate cost for producing the fiftieth unit.',
    options: opts('29500', '28881', '1258', '619'),
    ...solved(10, 'D', '619'),
  },

  // ── Item 11 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q11',
    number: 11,
    pageNumber: 660,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Quadratic Functions',
    text: 'The height ($s$, in feet) of a falling object above the ground after $t$ seconds can be modelled by a quadratic function. A ball is thrown directly upward from a height of 48 feet. The ball\'s position above the ground after 1 and 2 seconds is shown in the following table.',
    figureSvg: mstcMay2018Figure(
      'fig_q11_table',
      'Table of time t in seconds against position above ground s in feet: 0 to 48, 1 to 64, 2 to 48',
    ),
    options: opts(
      '$s(t) = 6t^2 + 12t + 48$',
      '$s(t) = 16t^2 - 32t - 48$',
      '$s(t) = -16t^2 + 32t + 48$',
      '$s(t) = -6t^2 - 12t - 48$',
    ),
    ...solved(11, 'C', '$y = -16x^2 + 32x + 48$'),
  },

  // ── Item 12 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q12',
    number: 12,
    pageNumber: 660,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Radical Functions',
    text: 'The number of plant species on the various islands is a function of the area ($A$, in square miles) of each island, given by $f(A) = 28.6\\sqrt[3]{A}$. Find how many species are there in the area of 12 square miles.',
    options: opts('72.4', '58.9', '65.5', '36.9'),
    ...solved(12, 'C', '65.5'),
  },

  // ── Item 13 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q13',
    number: 13,
    pageNumber: 661,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Rational Inequalities',
    text: 'For a drug to have a beneficial effect, its concentration in the blood stream must exceed a certain value which is called the minimum therapeutic level. Suppose that the concentration $C$ (in mg/L) of a particular drug $t$ hours after its taken orally is given by $C = \\frac{20t}{t^2 + 4}$. If the minimum therapeutic level is 4 mg/L, determine when this level is exceeded.',
    options: opts('$1 < t < 4$', '$1 > t < 4$', '$t > 1 > 4$', '$1 < t > 4$'),
    ...solved(13, 'A', '$1 < t < 4$'),
  },

  // ── Item 14 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q14',
    number: 14,
    pageNumber: 661,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Systems of Equations',
    text: 'America West Airlines has 3 models of Boeing aircraft in their fleet. The 737-300 contains 21 more seats than the 737-200. The 757-200 contains less 36 than twice the number of seats in 737-200. Find the number of seats for each aircraft if the total number of seats for the 3 models is 437.',
    options: opts(
      'The 737-200 has 113 seats. The 737-300 has 134 seats. The 757-200 has 190 seats.',
      'The 737-200 has 103 seats. The 737-300 has 124 seats. The 757-200 has 210 seats.',
      'The 737-200 has 133 seats. The 737-300 has 154 seats. The 757-200 has 150 seats.',
      'The 737-200 has 93 seats. The 737-300 has 114 seats. The 757-200 has 230 seats.',
    ),
    ...solved(14, 'A', '737-200: 113 seats, 737-300: 134 seats, 757-200: 190 seats'),
  },

  // ── Item 15 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q15',
    number: 15,
    pageNumber: 661,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Joint Variation',
    text: 'The maximum weight that a rectangular beam can support varies jointly as its width and the square of its height and inversely as its length. If a beam $\\frac{1}{2}$ foot wide, $\\frac{1}{3}$ foot high, and 10 feet long can support 12 tons, find how much a similar beam can support if the beam is $\\frac{2}{3}$ foot wide, $\\frac{1}{2}$ foot high, and 18 feet long.',
    options: opts('22.5 tons', '20 tons', '24 tons', '25.5 tons'),
    ...solved(15, 'B', '20 tons'),
  },

  // ── Item 16 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q16',
    number: 16,
    pageNumber: 661,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Percentage',
    text: "Your local computer store is having a sale. After 30% price reduction, you purchase a new computer for P53,900. What was the computer's price before the reduction?",
    options: opts('P77,000', 'P82,000', 'P85,000', 'P75,000'),
    ...solved(16, 'A', 'P77,000'),
  },
];

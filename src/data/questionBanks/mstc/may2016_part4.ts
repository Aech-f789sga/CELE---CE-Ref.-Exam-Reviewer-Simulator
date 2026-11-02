import { Question } from '../../../types/exam';
import { solved, opts } from './may2016Helpers';

export const MSTC_MAY2016_PART4: Question[] = [
  // ── Item 46 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q46',
    number: 46,
    pageNumber: 248,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Probability — Conditional Probability',
    text: 'One thousand copper rods have the following properties.\n\n| Length | Too thin | OK | Too thick |\n| --- | --- | --- | --- |\n| Too short | 10 | 5 | 5 |\n| OK | 40 | 902 | 7 |\n| Too long | 4 | 20 | 7 |\n\nIf the rod meets the length specifications, find the probability that the rod meets the diameter specifications.',
    options: opts('0.78', '0.48', '0.95', '0.87'),
    ...solved(46, 'C', 'P = 0.95 (Option C)', 265),
  },

  // ── Item 47 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q47',
    number: 47,
    pageNumber: 248,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Trigonometry — Projectile Motion',
    text: 'A catapult is placed 100 feet from the castle wall, which is 35 feet high. The soldier wants the burning bale of hay to clear the top of the wall and land 50 feet inside a castle wall. If the initial velocity of the bale is 70 feet/second, at what angle should the bale of hay be launched so that it travels 150 feet and pass over the castle wall. Use g = 32 ft/s².',
    options: opts('54.5°', '50.8°', '58.2°', '39.2°'),
    ...solved(47, 'B', 'θ = 50.8° (Option B)', 266),
  },

  // ── Item 48 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q48',
    number: 48,
    pageNumber: 248,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Engineering Economy — Compound Interest',
    text: 'In 1626 Peter Minuit convinced the Wappinger Indians to sell him Manhattan Island for $24. If the Native Americans had put the $24 into a bank account paying 5% interest, how much would the investment worth in the year 2000 if interest were compounded monthly?',
    options: opts(
      '$3,052,428,614',
      '$3,152,428,614',
      '$3,252,428,614',
      '$3,552,428,614',
    ),
    ...solved(48, 'A', '$3,052,428,614 (Option A)', 266),
  },

  // ── Item 49 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q49',
    number: 49,
    pageNumber: 248,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Engineering Economy — Capital Recovery',
    text: 'An engineer has just borrowed P800,000 from a local bank, at the rate of 1% per month on the unpaid balance. His contract states that he must repay the loan in 36 equal monthly instalments. How much money must he repay each month?',
    options: opts('P27,587.49', 'P30,556.12', 'P26,571.45', 'P25,365.78'),
    ...solved(49, 'C', 'A = P26,571.45 (Option C)', 267),
  },

  // ── Item 50 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q50',
    number: 50,
    pageNumber: 249,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Engineering Economy — Cost of Capital',
    text: "GERTC Corporation's stock which currently sells for P500 per share, has been paying a P30 annual dividend per share and increasing in value at an average rate of 5% per year, over the last 5 years. It is expected that the company's stock will maintain this performance over the next 5 years. What is the company's cost of the capital raised through the selling of this stock?",
    options: opts('12.36%', '14.25%', '10.68%', '10.48%'),
    ...solved(50, 'D', 'i = 10.48% (Option D)', 267),
  },

  // ── Item 51 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q51',
    number: 51,
    pageNumber: 249,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Engineering Economy — Sinking Fund',
    text: 'Determine the approximate size of an annual payment needed to retire P60,000,000 in bonds issued by a city to build a dam. The bonds must be repaid over a 50-year period, and they earn interest at an annual rate of 6% compounded annually.',
    options: opts('P3,810,000', 'P3,540,000', 'P4,125,000', 'P4,326,000'),
    ...solved(51, 'A', 'A ≈ P3,810,000 (Option A)', 267, 268),
  },

  // ── Item 52 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q52',
    number: 52,
    pageNumber: 249,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Engineering Economy — Deferred Annuity',
    text: "A father wants to set aside money for his 5-year old son's future college education. Money can be deposited in a bank account that pays 8% per year, compounded annually. What equal deposits should be made by the father, on his son's 6th through 17th birthdays, in order to provide P80,000 on his son's 18th, 19th, 20th, and 21st birthdays?",
    options: opts('P12,547', 'P14,228', 'P15,589', 'P13,963'),
    ...solved(52, 'D', 'A = P13,963 (Option D)', 268),
  },

  // ── Item 53 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q53',
    number: 53,
    pageNumber: 249,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Engineering Economy — Benefit-Cost Ratio',
    text: 'A small entrepreneur invested a capital of P90,000 for a buy and sell business. He estimated to have a gross income of P28,000 annually and an operating cost of P5,000 annually. It is assumed the business to have a life of 10 years. If the rate of interest is 12% compute the benefit cost ratio.',
    options: opts('1.136', '1.444', '1.338', '1.586'),
    ...solved(53, 'B', 'Benefit-Cost Ratio = 1.444 (Option B)', 268, 269),
  },

  // ── Item 54 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q54',
    number: 54,
    pageNumber: 249,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Engineering Economy — Service-Hour Depreciation',
    text: 'An equipment cost P480,000 and has a salvage value of 16% of its cost at the end of its life of 36,000 operating hours in a period of 5 yrs. In the first year of service, it was used for 12,000 hours. If at the end of the second year, it was used for 15,000 hours find the depreciation at the end of the second year.',
    options: opts('P134,400', 'P302,400', 'P256,600', 'P254,700'),
    ...solved(54, 'B', 'Total depreciation = P302,400 (Option B)', 269),
  },

  // ── Item 55 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q55',
    number: 55,
    pageNumber: 249,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Surveying — Slope Correction',
    text: 'A distance was measured on an 8% slope and found to be 2528.75 m. What is the horizontal distance measured in meters?',
    options: opts('2589.365', '2520.697', '2463.587', '2625.365'),
    ...solved(55, 'B', 'Horizontal distance = 2520.697 m (Option B)', 269),
  },

  // ── Item 56 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q56',
    number: 56,
    pageNumber: 249,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Surveying — Leveling with an Inclined Rod',
    text: 'A line of levels, 6 km long is run between A to B with average backsight and foresight distances of 150 m. The average backsight reading is 3.8 m and each time it is taken, the rod is inclined sideward from the vertical 5°. What is the correct elevation of B if its recorded elevation is 425.56 meters?',
    options: opts('424.86 m', '424.27 m', '422.89 m', '425.12 m'),
    ...solved(56, 'B', 'Correct elevation = 424.2708 m (Option B)', 269, 270),
  },

  // ── Item 57 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q57',
    number: 57,
    pageNumber: 249,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Surveying — Tape Correction',
    text: 'A student was asked to make a 365.24-m long line using a 25-m tape that is 0.0024 m too long. What is the required measurement?',
    options: opts('365.205 m', '365.458 m', '365.152 m', '365.275 m'),
    ...solved(57, 'A', 'Required measurement = 365.205 m (Option A)', 270),
  },

  // ── Item 58 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q58',
    number: 58,
    pageNumber: 250,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Surveying — Stadia Distance',
    text: 'With the transit at point B and line of sight horizontal, the stadia intercept at C is 1.25 m. If the stadia interval factor is 100.42 and the stadia constant is 0.3, find the distance BC.',
    options: opts('122.587 m', '119.365 m', '128.363 m', '125.825 m'),
    ...solved(58, 'D', 'BC = 125.825 m (Option D)', 271),
  },

  // ── Item 59 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q59',
    number: 59,
    pageNumber: 250,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Surveying — Weighted Mean of Level Runs',
    text: 'Lines of levels are run from Station A to Station B over three different routes. The route length and difference in elevation between Stations A and B is given as follows:\n\n| Route | Length (km) | Difference in Elevation |\n| --- | --- | --- |\n| 1 | 6.3 | 428.635 |\n| 2 | 5.7 | 426.325 |\n| 3 | 3.6 | 429.524 |\n\nDetermine the most probable value of the elevation of Station B if Station A is at elevation 48.254 m.',
    options: opts('471.25', '428.38', '476.63', '479.36'),
    ...solved(59, 'C', 'Elevation of B = 476.6303 m (Option C)', 271),
  },

  // ── Item 60 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q60',
    number: 60,
    pageNumber: 250,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Transportation — Perception-Reaction Time',
    text: "A car driver travelling at a speed of 65 mph approached a hazard and travelled 72.2 m during the perception-reaction time. What was the driver's PIEV (perception, identification, emotion, and volition) time in seconds?",
    options: opts('2.14', '2.49', '2.32', '2.75'),
    ...solved(60, 'B', 't = 2.49 s (Option B)', 271),
  },
];

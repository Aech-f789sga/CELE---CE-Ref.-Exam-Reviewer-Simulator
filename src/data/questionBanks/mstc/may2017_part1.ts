import { Question } from '../../../types/exam';
import { mstcMay2017Figure } from '../../mstcMay2017Images';
import { solved, opts } from './may2017Helpers';

export const MSTC_MAY2017_PART1: Question[] = [
  // ── Item 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q1',
    number: 1,
    pageNumber: 449,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Algebra — Function Evaluation',
    text: 'Sport utility vehicle (SUV) sales in the Philippines have increased since 1995. The function f(x) = -0.005x² + 0.325x + 1.54 can be used to approximate the number of SUV sales during years 1995-2004, where x is the number of years after 1995 and f(x) is the SUV sales (in millions). Approximate the number of SUVs sold in 2002.',
    options: opts('5.4 million', '7.5 million', '3.6 million', '6.4 million'),
    ...solved(1, 'C', '3.6 million', 460),
  },

  // ── Item 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q2',
    number: 2,
    pageNumber: 449,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Linear Programming — Objective Function',
    text: 'Bottled water and medical supplies are to be shipped to victims of an earthquake by plane. Each container of bottled water will serve 15 people and each medical kit will aid 8 people. If x represents the number of bottles of water to be shipped and y represents the number of medical kits, write the objective function that models the number of people that can be helped.',
    options: opts('z = 15x + 8y', 'z = 8x + 15y', 'z = 8x - 15y', 'z = 15x - 8y'),
    ...solved(2, 'A', 'z = 15x + 8y', 460),
  },

  // ── Item 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q3',
    number: 3,
    pageNumber: 449,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Algebra — Successive Percentage Change',
    text: 'The price of a dress is reduced by 40%. When the dress still does not sell, it is reduced by 40% of the reduced price. If the price of the dress after both reductions is P1,000, what is the original price?',
    options: opts('P2,000', 'P3,000', 'P4,000', 'P5,000'),
    ...solved(
      3,
      'B',
      'P3,000',
      460,
      460,
      "The stem gives the final price as P1,000, but the booklet's own working solves 0.6x × 0.6 = 1,080, which is what actually yields P3,000. Read against the printed P1,000 the original price would be P2,777.78, which is not among the choices — so the working, not the stem, is what the key follows.",
    ),
  },

  // ── Item 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q4',
    number: 4,
    pageNumber: 449,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Algebra — Word Problem',
    text: 'Every year a company pays a bonus of P30,000 to his most industrious assistant, and P7,500 each to the rest of his staff. After how many years would his outlay be exactly P600,000 if all but two of his staff had merited the P30,000 bonus but none of them more than twice?',
    options: opts('6', '7', '5', '8'),
    ...solved(4, 'D', '8 years', 460),
  },

  // ── Item 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q5',
    number: 5,
    pageNumber: 449,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Algebra — Work Problem',
    text: 'A father and his son can dig a hole if the father works 6 hours and his son works 12 hours, or they can do it if the father works 12 hours and the son works 8 hours. How long will it take for the father to dig the hole alone?',
    options: opts('15', '20', '24', '16'),
    ...solved(5, 'C', '24 hours', 461),
  },

  // ── Item 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q6',
    number: 6,
    pageNumber: 449,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Progressions — Geometric',
    text: 'A trainee in a computer company takes 0.8 times as long to assemble each computer as he took to assemble the preceding computer. If it took him 30 minutes to assemble the first computer, find how long it takes him to assemble the five computer units?',
    options: opts('101', '143', '132', '134'),
    ...solved(6, 'A', '100.85 min ≈ 101 min', 461),
  },

  // ── Item 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q7',
    number: 7,
    pageNumber: 449,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Progressions — Half-life',
    text: 'If a radioactive element has a half-life of 3 hours, then x grams of the element dwindles to x/2 grams after 3 hours. If a nuclear reactor has 600 grams of that radioactive element, find the amount of radioactive material after 12 hours.',
    options: opts('37.5 grams', '42.5 grams', '32.5 grams', '45.5 grams'),
    ...solved(7, 'A', '37.5 grams', 461),
  },

  // ── Item 8 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q8',
    number: 8,
    pageNumber: 449,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Progressions — Infinite Geometric',
    text: 'A ball dropped from a height of 12 feet. It rebounds one-half the distance on each bounce. What is the total distance it travels?',
    options: opts('40 feet', '36 feet', '32 feet', '25 feet'),
    ...solved(8, 'B', '36 feet', 462),
  },

  // ── Item 9 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q9',
    number: 9,
    pageNumber: 450,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Progressions — Infinite Geometric',
    text: 'A flywheel coming to rest makes 270 revolutions in the first minute and in each minute thereafter makes 2/5 as many revolutions as the preceding minutes. Find how many revolutions the wheel makes before it comes to rest.',
    options: opts('650', '450', '650', '550'),
    ...solved(
      9,
      'B',
      '450 revolutions',
      462,
      462,
      'The booklet prints 650 twice, as choices A and C. The keyed answer, 450, follows from the sum of the infinite geometric series 270 / (1 - 2/5).',
    ),
  },

  // ── Item 10 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q10',
    number: 10,
    pageNumber: 450,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Game Theory — Auction',
    text: 'You and a friend spot a loose P200 bill simultaneously and agree to an auction in which you write your bids and compare them. High bidder gets the P200 and pays you the amount of the higher bid. Tie bidders split the P200. How much do you bid?',
    options: opts('P150', 'P200', 'P99.99', 'P120'),
    ...solved(10, 'C', 'P99.99', 462),
  },

  // ── Item 11 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q11',
    number: 11,
    pageNumber: 450,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Combinatorics — Combinations',
    text: 'A bank area manager must visit four of the ten branches that the bank owns. How many sets of four banks are there from which the manager can pick one set to visit?',
    options: opts('252', '320', '210', '120'),
    ...solved(11, 'C', '210 sets', 463),
  },

  // ── Item 12 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q12',
    number: 12,
    pageNumber: 450,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Probability — Expected Value',
    text: 'The number of defective welds in a length of pipe is 0 through 6 with the following probabilities: X = 0, 1, 2, 3, 4, 5, 6 and P(X) = 0.70, 0.30, 0.05, 0.02, 0.02, 0.01, 0.01. Find the expected value of the number of defective welds.',
    options: opts('0.65', '0.32', '0.45', '0.54'),
    figureSvg: mstcMay2017Figure('fig12_table', 'Probability distribution of the number of defective welds'),
    ...solved(12, 'A', '0.65', 463),
  },

  // ── Item 13 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q13',
    number: 13,
    pageNumber: 450,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Probability — Seating Arrangement',
    text: 'Eight eligible bachelors and seven beautiful models happen randomly to have purchased single seats in the same 15-seat row of a theatre. On the average, how many pairs of adjacent seats are ticketed for marriageable couples?',
    options: opts('8/15', '4/15', '7/15', '6/15'),
    ...solved(13, 'A', '8/15', 463),
  },

  // ── Item 14 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q14',
    number: 14,
    pageNumber: 450,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Probability — Conditional',
    text: 'It is known that the probability that a bulb will last beyond 100 hours is 0.80 and the probability that it will last beyond 150 hours is 0.36. Given that a bulb lasts beyond 100 hours, determine the probability that it will last beyond 150 hours.',
    options: opts('0.25', '0.45', '0.50', '0.35'),
    ...solved(14, 'B', '0.45', 463),
  },

  // ── Item 15 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q15',
    number: 15,
    pageNumber: 450,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Probability — Binomial',
    text: 'A bolt making machine has a 0.05 chance of producing a defective product each time it produces a bolt. If three bolts are selected randomly, what is the probability of finding no defective product in the three samples?',
    options: opts('0.952365', '0.657825', '0.857375', '0.000125'),
    ...solved(15, 'C', '0.857375', 463),
  },

  // ── Item 16 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q16',
    number: 16,
    pageNumber: 450,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Probability — Rare Event',
    text: 'In 1990, a subtle flaw of Pentium chip would affect 1 in 9 billion division problems. Suppose a computer performs 20 million divisions in the course of a particular program, what is the probability of no error and of at least one error.',
    options: opts(
      '0.99962 & 0.0001222',
      '0.0000000111 & 0.00222',
      '0.99778 & 0.00222',
      '0.999989; 0.0000000111',
    ),
    ...solved(16, 'C', '0.99778 and 0.00222', 464),
  },

  // ── Item 17 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q17',
    number: 17,
    pageNumber: 451,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Geometric Probability',
    text: 'In a common carnival game, a player tosses a penny from a distance of about 5 feet onto surface of a table ruled in 1-inch squares. If the penny (3/4 inch in diameter) falls entirely inside a square, the player receives 5 centavos but does not get his penny back; otherwise he loses his penny. If the penny lands on the table, what is the chance to win if the lines are 1/16 in thick?',
    options: opts('less than 2/28', 'less than 3/28', 'less than 4/28', 'less than 1/28'),
    ...solved(17, 'D', 'less than 1/28', 464),
  },

  // ── Item 18 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q18',
    number: 18,
    pageNumber: 451,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Plane Geometry — Angle Pairs',
    text: 'Two angles whose sum is 360° are called:',
    options: opts(
      'supplement angles',
      'reflection angles',
      'compliment angles',
      'conjugate angles',
    ),
    ...solved(18, 'D', 'conjugate angles', 464),
  },

  // ── Item 19 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q19',
    number: 19,
    pageNumber: 451,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Plane Geometry — Supplementary Angles',
    text: 'Find two angles such that the angles are supplementary and the larger is twice the smaller.',
    options: opts('30° and 90°', '60° and 120°', '120° and 240°', '90° and 180°'),
    ...solved(19, 'B', '60° and 120°', 464),
  },

  // ── Item 20 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q20',
    number: 20,
    pageNumber: 451,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Plane Geometry — Right Triangle',
    text: 'Compute the hypotenuse of a right triangle if one leg is 20 cm and the hypotenuse is 10 cm longer than the other leg.',
    options: opts('15', '20', '20', '25'),
    ...solved(
      20,
      'D',
      '25 cm',
      465,
      465,
      'The booklet prints 20 twice, as choices B and C. The keyed answer, 25 cm, follows from (x + 10)² = x² + 20² with the other leg x = 15.',
    ),
  },
];

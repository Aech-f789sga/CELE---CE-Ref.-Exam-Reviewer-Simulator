import { Question } from '../../../types/exam';
import { mstcMay2018Figure } from '../../mstcMay2018Images';
import { opts, solved } from './may2018Helpers';

/**
 * MSTC May 2018, items 33-48 — counting and probability, engineering economy,
 * then engineering mechanics and the first surveying item.
 */
export const MSTC_MAY2018_PART3: Question[] = [
  // ── Item 33 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q33',
    number: 33,
    pageNumber: 663,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Counting Techniques',
    text: 'In a certain city, all seven-digit telephone numbers begin with 350. How many telephone numbers maybe assigned to that city if the last four digits should not begin or end in zero?',
    options: opts('8900', '8100', '9200', '7980'),
    ...solved(33, 'B', '$9 \\times 10 \\times 10 \\times 9 = 8{,}100$'),
  },

  // ── Item 34 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q34',
    number: 34,
    pageNumber: 663,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Probability',
    text: 'Eleven books, consisting of 5 engineering books, 4 mathematics books, and 2 chemistry books, are placed on a shelf at random. What is the probability $p$ that the books of each kind are all together?',
    options: opts('$1/1555$', '$1/1505$', '$1/1550$', '$1/1155$'),
    ...solved(34, 'D', '$p = \\frac{3!\\,5!\\,4!\\,2!}{11!} = \\frac{1}{1155}$'),
  },

  // ── Item 35 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q35',
    number: 35,
    pageNumber: 664,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Geometric Probability',
    text: 'If a stick is broken in two at random, what is the average ratio of the smaller length to the larger?',
    options: opts('0.852', '0.386', '0.248', '0.469'),
    ...solved(35, 'B', '0.386'),
  },

  // ── Item 36 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q36',
    number: 36,
    pageNumber: 664,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Geometric Probability',
    text: 'If a chord is selected at random on a fixed circle what is the probability that its length exceeds the radius of the circle?',
    options: opts('$\\frac{1}{2}$', '$\\frac{3}{4}$', '$1/3$', '$2/3$'),
    ...solved(36, 'D', '$\\frac{240°}{360°} = \\frac{2}{3}$'),
  },

  // ── Item 37 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q37',
    number: 37,
    pageNumber: 664,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Probability Distributions',
    text: 'Daily sales records for an engineering consulting firm shows that it will attract 0, 1, or 2 consulting jobs per day with probabilities as given below. Find the probability that it will attract 2 consulting jobs in a two-day period, assuming the number of consulting jobs are independent from day to day.',
    figureSvg: mstcMay2018Figure(
      'fig_q37_table',
      'Table of consulting jobs per day (0, 1, 2) against probability (0.1, 0.75, 0.15)',
    ),
    options: opts('0.6325', '0.5925', '0.5275', '0.7125'),
    ...solved(37, 'B', '$P(X = 2) = 0.5925$'),
  },

  // ── Item 38 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q38',
    number: 38,
    pageNumber: 664,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Engineering Economy',
    text: 'An engineer is thinking of starting a part-time consulting business next September 5, on his 40th birthday. He expects the business will require an initial cash outlay of $5000, to come from his savings, and will cost $500 per year to operate; the business ought to generate $2000 per year in cash receipts. During the 20 years that he expects to operate the business, he plans to deposit the annual net proceeds in a bank each year, at an interest rate of 8% per year, compounded annually. When he retires, on his 60th birthday, the engineer expects to invest whatever proceeds plus interest he then has from the business in a long-term savings plan that pays 10% per year, compounded annually. What is the maximum amount he could withdraw from the savings plan each year during his retirement and still have the funds last 15 years?',
    options: opts('$5960.59', '$6204.25', '$5456.54', '$7254.85'),
    ...solved(38, 'A', '$A = \\$5{,}960.78$'),
  },

  // ── Item 39 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q39',
    number: 39,
    pageNumber: 664,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Depreciation',
    text: "The first cost of a machine is P1,800,000 with a salvage value of P400,000 at the end of its life of 5 yrs. Determine the total depreciation after 3 years using Sum of the Year's Digit Method.",
    options: opts('P1,200,000', 'P280,000', 'P1,120,000', 'P1,300,000'),
    ...solved(39, 'C', '$D_3 = P1{,}120{,}000$'),
  },

  // ── Item 40 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q40',
    number: 40,
    pageNumber: 665,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Depreciation',
    text: 'Given: First cost, $FC = P800,000$; Salvage value, $SV = P80,000$; Life = 5 years. Compute the depreciation on the 3rd year using the modified accelerated cost recovery system method.',
    options: opts('115,200', '135,000', '110,000', '153,600'),
    ...solved(40, 'D', '$d_3 = 0.192(800{,}000) = P153{,}600$'),
  },

  // ── Item 41 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q41',
    number: 41,
    pageNumber: 665,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Kinematics',
    text: 'During the baseball practice, a batter hits a very high fly ball and runs in a straight line and catches it. Which has the greater displacement, the player or the ball?',
    options: opts(
      'The ball and the player have the same distance travelled',
      'The displacement of the player is greater than the displacement of the ball',
      'The player and the ball have the same displacement',
      'The ball has a greater displacement travelled compared to the player.',
    ),
    ...solved(41, 'C', 'The player and the ball have the same displacement'),
  },

  // ── Item 42 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q42',
    number: 42,
    pageNumber: 665,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Circular Motion',
    text: 'A 150 g ball at the end of a string is revolving uniformly in a horizontal circle of radius 0.60 m. The ball makes 2 revolutions in a second. What is its centripetal acceleration?',
    options: opts('12.57 m/s²', '94.75 m/s²', '14.21 m/s²', '56.52 m/s²'),
    ...solved(42, 'B', '$a_c = 94.75$ m/s²'),
  },

  // ── Item 43 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q43',
    number: 43,
    pageNumber: 665,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Work & Energy',
    text: 'Applying full brakes at a speed of 60 kph, the car travelled 50 meters until it stopped. Determine the average skid resistance.',
    options: opts('0.35', '0.50', '0.42', '0.28'),
    ...solved(43, 'D', '$\\mu = 0.283$'),
  },

  // ── Item 44 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q44',
    number: 44,
    pageNumber: 665,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Impulse & Momentum',
    text: 'A golf ball of mass 0.045 kg is hit off the tee at a speed of 38 m/s. The golf club was in contact with the ball for $3.5 \\times 10^{-3}$ s. Find the impulse imparted to the golf ball.',
    options: opts('1.25 N-s', '3.24 N-s', '2.65 N-s', '1.71 N-s'),
    ...solved(44, 'D', '$Ft = 1.71$ N-s'),
  },

  // ── Item 45 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q45',
    number: 45,
    pageNumber: 665,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Collisions',
    text: 'A 2-kg object traveling at 1 m/s collides head-on with a 1-kg object initially at rest. Determine the velocity of the heavier object after the impact if the collision is perfectly elastic.',
    options: opts('1.33 m/s', '1.67 m/s', '0.33 m/s', '0.67 m/s'),
    ...solved(45, 'C', "$v_1' = 0.333$ m/s"),
  },

  // ── Item 46 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q46',
    number: 46,
    pageNumber: 665,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Collisions',
    text: 'Objects A and B with the same mass $m = 2$ kg undergo a direct central impact. Before the impact, A is moving to the right with a velocity of 4 m/s and B is stationary. Determine the velocity of A after impact if the impact is perfectly plastic.',
    options: opts('2 m/s', '1 m/s', '3 m/s', '4 m/s'),
    ...solved(46, 'A', "$v' = 2$ m/s"),
  },

  // ── Item 47 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q47',
    number: 47,
    pageNumber: 666,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Collisions',
    text: 'A 23-gram bullet traveling at 250 m/s penetrates a 2-kg block of wood and emerges clearly at 170 m/s. If the block is stationary by a frictionless surface when hit, how fast does it move after the bullet merges?',
    options: opts('0.92 m/s', '1.25 m/s', '0.64 m/s', '1.87 m/s'),
    ...solved(47, 'A', '$v_B = 0.92$ m/s'),
  },

  // ── Item 48 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q48',
    number: 48,
    pageNumber: 666,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Surveying — Angle Adjustment',
    text: 'The observed interior angles of a quadrilateral and their corresponding number of observations are as follows. Determine the corrected angle at corner 3.',
    figureSvg: mstcMay2018Figure(
      'fig_q48_table',
      'Table of quadrilateral corners 1 to 4 with observed angles 67°, 132°, 96°, 68° and numbers of observations 5, 6, 3, 4',
    ),
    options: opts("96° 32'", "94° 57'", "97° 31'", "95° 27'"),
    ...solved(48, 'B', "94° 56' 51\""),
  },
];

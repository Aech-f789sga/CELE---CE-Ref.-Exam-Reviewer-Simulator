import { Question } from '../../../types/exam';
import { solved, opts } from './nov2015Helpers';

/**
 * MSTC — November 2015, items 16–30.
 *
 * The booklet prints its own working for every item in this paper, so the
 * solution shown is a crop of that page rather than a retyped derivation.
 * The last argument of `solved` is the booklet folio the crop was taken from;
 * items whose working runs over a page turn carry the closing folio too.
 */
export const MSTC_NOV2015_PART2: Question[] = [
  // Item 16
  {
    id: 'mstc-nov2015-q16',
    number: 16,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Age Problems',
    text: 'If Ana was four times as old as Billy eight years ago, and if Ana will be twice as old as Billy eight years hence, how old is Billy now?',
    options: opts('16', '24', '32', '40'),
    ...solved(16, 'C', '16 years old (Option C)', 139),
  },

  // Item 17
  {
    id: 'mstc-nov2015-q17',
    number: 17,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Motion Problems',
    text: 'Albert can walk 4 km with the same time as Bernard can walk 5 km. Albert takes 3 minutes more than it takes Bernard to walk a kilometre. What is the rate of Albert in kph?',
    options: opts('3', '6', '4', '5'),
    ...solved(17, 'C', '4 kph (Option C)', 140),
  },

  // Item 18
  {
    id: 'mstc-nov2015-q18',
    number: 18,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Quadratic Word Problems',
    text: 'The length of a rectangular garden is 9 m longer than its width. If the area of the garden is 736 square m, find its length.',
    options: opts('28 m', '36 m', '23 m', '32 m'),
    ...solved(18, 'D', '32 m (Option D)', 140),
  },

  // Item 19
  {
    id: 'mstc-nov2015-q19',
    number: 19,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Optimization',
    text: 'An architect is allowed no more than 15 square meters to add a small bedroom to a house. Because of the room\'s design in relationship to the existing structure, the width of its rectangular floor must be 7 meters less than two times the length. Find the precise length and width of the rectangular floor of maximum area that the architect is permitted.',
    options: opts('5 m × 3 m', '7.5 m × 2 m', '4 m × 3.75 m', '6 m × 2.5 m'),
    ...solved(19, 'A', '5 m × 3 m (Option A)', 140),
  },

  // Item 20
  {
    id: 'mstc-nov2015-q20',
    number: 20,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Word Problems',
    text: 'You just purchased a rectangular waterfront lot along a river\'s edge. The perimeter of the lot is 100 m. To create a sense of privacy, you decide to fence along the three sides, excluding the long side that fronts the river. An expensive fencing along the lot\'s front length costs P2,500 per m. An inexpensive fencing along the two shorter side widths costs only P500 per foot. The total cost of the fencing along the three sides comes to P95,000. What are the lot\'s dimensions?',
    options: opts('40 m × 10 m', '35 m × 15 m', '25 m × 25 m', '30 m × 20 m'),
    ...solved(20, 'D', '30 m × 20 m (Option D)', 140, 141),
  },

  // Item 21
  {
    id: 'mstc-nov2015-q21',
    number: 21,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Linear Functions',
    text: 'The planning department of Abstract Office Supplies has been asked to determine whether the company should introduce a new computer desk next year. The department estimates that P60,000 of new manufacturing equipment will need to be purchased and that the cost of constructing each desk will be P2,000. The department also estimates that the revenue of each desk will be P4,500. Determine the revenue $R(x)$ from the sale of $x$ desks.',
    options: opts('4500x', '7500x', '6500x', '5500x'),
    ...solved(21, 'A', 'R(x) = 4500x (Option A)', 141),
  },

  // Item 22
  {
    id: 'mstc-nov2015-q22',
    number: 22,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Engineering Economy - After-Tax Return',
    text: 'A businessman wishes to earn 7% on his capital after payment of taxes. If the income from an available investment will be taxed at an average rate of 45%, what minimum rate of return before payment of taxes must the investment offer to be justified?',
    options: opts('10.36%', '14.52%', '12.73%', '13.65%'),
    ...solved(22, 'C', '12.73% (Option C)', 141),
  },

  // Item 23
  {
    id: 'mstc-nov2015-q23',
    number: 23,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Percentage',
    text: 'A price increases 10% due to inflation and is then reduced 12% for a sale. Express the final price as a function of the original price, $P$.',
    options: opts('0.824P', '0.925P', '0.922P', '0.968P'),
    ...solved(23, 'D', '0.968P (Option D)', 141),
  },

  // Item 24
  {
    id: 'mstc-nov2015-q24',
    number: 24,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Linear Equations',
    text: 'Rent-a-car agency charges P12,500 per week plus P10 per km to rent a small car. How many km can you travel for P25,500?',
    options: opts('1300', '1200', '1100', '1400'),
    ...solved(24, 'A', '1300 km (Option A)', 141),
  },

  // Item 25
  {
    id: 'mstc-nov2015-q25',
    number: 25,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Watch Error',
    text: 'A sweep-second hand watch was checked against WWV at 7:04 PM and recorded as 5.0 sec ahead. The watch was checked again at 11:20 PM and found to be 9.5 sec ahead. What is the corrected time for an observation recorded at 9:13:26 PM?',
    options: opts('9:13:18.7', '9:13:23.7', '9:11:55.2', '9:15:12.6'),
    ...solved(25, 'A', '9:13:18.7 PM (Option A)', 141, 142),
  },

  // Item 26
  {
    id: 'mstc-nov2015-q26',
    number: 26,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Vectors',
    text: 'The magnitude of vector $F = 5i + 6j - 3k$ is:',
    options: opts('8.763', '8.367', '8.637', '7.863'),
    ...solved(26, 'B', '8.367 (Option B)', 142),
  },

  // Item 27
  {
    id: 'mstc-nov2015-q27',
    number: 27,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Vectors',
    text: 'The cross product of $A = 4i + 2j$ with $B = 0$. If the dot product of $A$ and $B = 30$, what is the value of $B$?',
    options: opts('6i + 3j', '-6i + 3j', '6i - 3j', '-6i - 3j'),
    ...solved(27, 'A', 'B = 6i + 3j (Option A)', 142),
  },

  // Item 28
  {
    id: 'mstc-nov2015-q28',
    number: 28,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Trigonometry - Angles of Elevation',
    text: 'The angle of elevation of a pole 10 m horizontally from it is three times the angle of elevation at a point 50 m from it. Find the angle of elevation 10 m from the pole.',
    options: opts('20.71°', '41.14°', '62.12°', '58.24°'),
    ...solved(28, 'C', '62.12° (Option C)', 142, 143),
  },

  // Item 29
  {
    id: 'mstc-nov2015-q29',
    number: 29,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Trigonometry - Towers',
    text: 'Towers A and B stands on a horizontal plain, tower B being 200 m high. The angle of elevation of the top of tower A as seen from a point C in the plain (in the same vertical plane with A and B) is 50°. The angle of depression of C viewed from the top of tower B is 28°58\'. The angle subtended at the top of tower B by the top of tower A and C is 50°. Find the height of tower A.',
    options: opts('500.4 m', '521.5 m', '465.8 m', '587.9 m'),
    ...solved(29, 'A', '500.4 m (Option A)', 143),
  },

  // Item 30
  {
    id: 'mstc-nov2015-q30',
    number: 30,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Plane Trigonometry - Sine Law',
    text: 'Two angles of a triangle are 102.8° and 46.5°. The side opposite the obtuse angle has length 3.2 cm. Find the shortest side of the triangle.',
    options: opts('2.1452 cm', '1.8065 cm', '2.3804 cm', '1.6754 cm'),
    ...solved(30, 'D', '1.6754 cm (Option D)', 143),
  },
];

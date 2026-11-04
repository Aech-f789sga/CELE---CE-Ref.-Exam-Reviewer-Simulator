import { Question } from '../../../types/exam';
import { solved, opts } from './may2015Helpers';

/**
 * MSTC — May 2015, items 61–75.
 *
 * The booklet prints its own working for every item in this paper, so the
 * solution shown is a crop of that page rather than a retyped derivation.
 * The last argument of `solved` is the booklet folio the crop was taken from;
 * items whose working runs over a page turn carry the closing folio too.
 */
export const MSTC_MAY2015_PART5: Question[] = [
  // Item 61
  {
    id: 'mstc-may2015-q61',
    number: 61,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Probability - Independent Events',
    text: 'A total of 300 people composed of students and teachers in a certain school are asked in a poll. The answers of the poll are either they are to agree, disagree or just be neutral to an issue being asked. From the students there are 132 who agreed, 78 who disagreed and 54 are neutral. There are 5 who agree, 14 who disagree and 17 are neutral from the teachers. If a teacher and a student are randomly selected, what is the probability that they either agree or neutral?',
    options: opts('0.486', '0.552', '0.594', '0.431'),
    ...solved(61, 'D', '0.431 (Option D)', 28),
  },

  // Item 62
  {
    id: 'mstc-may2015-q62',
    number: 62,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Statistics - Normal Distribution',
    text: 'The mean of a population is 84 and its standard deviation is 4. Using normal probability distribution, determine the probability that a certain sample is within 80 and 88.',
    options: opts('0.74', '0.68', '0.42', '0.56'),
    ...solved(62, 'B', '0.68 (Option B)', 28),
  },

  // Item 63
  {
    id: 'mstc-may2015-q63',
    number: 63,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Statistics - Normal Distribution',
    text: 'The mean of a population is 17 and its standard deviation is 3. Using normal probability distribution, determine the probability that a certain sample is within 14 and 20.',
    options: opts('0.53', '0.62', '0.68', '0.57'),
    ...solved(63, 'C', '0.68 (Option C)', 28),
  },

  // Item 64
  {
    id: 'mstc-may2015-q64',
    number: 64,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Statistics - Quartiles',
    text: 'The numbers of working days lost due to accidents for each of 12 one-monthly periods are the following:\n\n27, 37, 40, 28, 23, 30, 35, 24, 30, 32, 31, 28\n\nDetermine the first quartile value for this data.',
    options: opts('22.3', '25.5', '27.5', '30.7'),
    ...solved(64, 'C', '27.5 (Option C)', 29),
  },

  // Item 65
  {
    id: 'mstc-may2015-q65',
    number: 65,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Statistics - Quartiles',
    text: 'Given the following numbers: 34.5, 12.7, 28.5, 25.6, 52.6, 45.4, 18.5, 27.5, and 12.5. Determine the first quartile.',
    options: opts('12.7', '18.5', '15.6', '14.1'),
    ...solved(
      65,
      'C',
      '15.6 (Option C)',
      29,
      29,
      'The printed answer key at the foot of folio 11 gives B (18.5) for this item, but the working on folio 29 sorts the nine values, takes the median as 27.5, and halves the lower half as (12.7 + 18.5)/2 = 15.6 — option C. The key is misprinted; the booklet’s own working is shown here as printed.',
    ),
  },

  // Item 66
  {
    id: 'mstc-may2015-q66',
    number: 66,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Engineering Economy - Effective Rate',
    text: 'Determine the equivalent effective rate of a money compounded continuously at r = 5%.',
    options: opts('5.13%', '5.26%', '5.12%', '4.82%'),
    ...solved(66, 'A', '5.13% (Option A)', 29),
  },

  // Item 67
  {
    id: 'mstc-may2015-q67',
    number: 67,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Engineering Economy - Annuities',
    text: 'A businessman wishes to raise ₱1.5 million in five years by investing a fixed amount of money every end of the year for three years. What is the required investment using an interest rate of 8%?',
    options: opts('₱635,740', '₱547,630', '₱475,360', '₱396,134'),
    ...solved(67, 'D', '₱396,134 (Option D)', 29),
  },

  // Item 68
  {
    id: 'mstc-may2015-q68',
    number: 68,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Engineering Economy - Capitalized Cost',
    text: 'Determine the capitalized cost of a large-format printer that has a first cost of ₱1.20 Million and salvage value after five useful years equal to ₱600,000. The operation and maintenance cost is ₱100,000 every after 3 years. Use interest rate, i = 10.1%.',
    options: opts('₱2.47M', '₱2.56M', '₱3.41M', '₱2.89M'),
    ...solved(68, 'A', '₱2.47M (Option A)', 30),
  },

  // Item 69
  {
    id: 'mstc-may2015-q69',
    number: 69,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Engineering Economy - Depreciation',
    text: 'A machine costing ₱1.5M has a salvage value of ₱600,000 at the end of its economic life. What is the economic life of this machine if using the sum-of-the-year\'s-digit method, its book value at the end of 2 years is estimated to be ₱870,000?',
    options: opts('4', '5', '6', '7'),
    ...solved(69, 'A', '4 years (Option A)', 30),
  },

  // Item 70
  {
    id: 'mstc-may2015-q70',
    number: 70,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Engineering Economy - Depreciation',
    text: 'A machine costing ₱1.2 million has an estimated book value of ₱300,000 at the end of its economic life in five years. Using Sum of the Digit Method, what will be its book value on the third year?',
    options: opts('₱720,000', '₱520,000', '₱480,000', '₱610,000'),
    ...solved(70, 'C', '₱480,000 (Option C)', 30, 31),
  },

  // Item 71
  {
    id: 'mstc-may2015-q71',
    number: 71,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Engineering Economy - Depreciation',
    text: 'An equipment with first cost of ₱1.80 M has a salvage value of ₱300,000 at the end of 5 years. Using the constant percentage method, what is the total depreciation after three years?',
    options: opts('₱591,723', '₱614,302', '₱985,365', '₱1,185,691'),
    ...solved(71, 'D', '₱1,185,691 (Option D)', 31),
  },

  // Item 72
  {
    id: 'mstc-may2015-q72',
    number: 72,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Simple Curves',
    text: 'Points A and B on a simple curve have perpendicular distances from tangent at point O equal to 28 m and 38 m, respectively. If length of curve OB is 158.82 m, determine the chord AB.',
    options: opts('28.72 m', '32.65 m', '22.85 m', '14.74 m'),
    ...solved(72, 'C', '22.83 m (Option C)', 31),
  },

  // Item 73
  {
    id: 'mstc-may2015-q73',
    number: 73,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Simple Curves',
    text: 'A simple curve with a radius of 415 m has a point A that is 25 m from the tangent that passes through the PC. Determine the length of the curve from PC to point A.',
    options: opts('165.76 m', '177.52 m', '123.66 m', '144.78 m'),
    ...solved(73, 'D', '144.78 m (Option D)', 32),
  },

  // Item 74
  {
    id: 'mstc-may2015-q74',
    number: 74,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Simple Curves',
    text: 'A curve having a radius of 192.18 m has an intersecting angle of 42° 15\'. PC is at Station 0 + 700. Find the right-angle offset distance to Station 0 + 736.78.',
    options: opts('5.6 m', '2.7 m', '3.5 m', '4.8 m'),
    ...solved(74, 'C', '3.5 m (Option C)', 32),
  },

  // Item 75
  {
    id: 'mstc-may2015-q75',
    number: 75,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Simple Curves',
    text: 'A simple curve having a radius of 200 m have tangents with bearing N 10° E and N 70° E, respectively. The stationing of PC is 1 + 400. Determine the stationing of a point Q on the curve whose deflection angle from PC is 6°.',
    options: opts('1 + 448.19', '1 + 484.91', '1 +489.41', '1 + 441.89'),
    ...solved(75, 'D', '1 + 441.89 (Option D)', 32),
  },
];

import { Question } from '../../../types/exam';
import { solved, opts } from './nov2015Helpers';

/**
 * MSTC — November 2015, items 76–90.
 *
 * The booklet prints its own working for every item in this paper, so the
 * solution shown is a crop of that page rather than a retyped derivation.
 * The last argument of `solved` is the booklet folio the crop was taken from;
 * items whose working runs over a page turn carry the closing folio too.
 */
export const MSTC_NOV2015_PART6: Question[] = [
  // Item 76
  {
    id: 'mstc-nov2015-q76',
    number: 76,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Error Propagation',
    text: 'A distance of 1000 feet is to be taped with an error of not more than 0.10 feet. Determine how accurately each 100-ft length must be measured to ensure the error will not exceed the permissible limit.',
    options: opts('±0.093 ft', '±0.032 ft', '±0.051 ft', '±0.075 ft'),
    ...solved(76, 'B', '±0.032 ft (Option B)', 157),
  },

  // Item 77
  {
    id: 'mstc-nov2015-q77',
    number: 77,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Probable Error',
    text: 'A line was measured three times and yields the following results: 826.52 m, 826.68 m, and 826.11 m. What is the probable error of the mean?',
    options: opts('0.254', '0.114', '0.311', '0.186'),
    ...solved(77, 'B', '±0.114 m (Option B)', 157, 158),
  },

  // Item 78
  {
    id: 'mstc-nov2015-q78',
    number: 78,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Level Bubble',
    text: 'A sight is taken with an engineer\'s level at rod held 100 m away and an initial reading of 1.83 m was recorded. The bubble is then levelled through five spaces on the level tube and the new rod reading is 1.91 m. What is the sensitivity of the bubble tube in seconds of arc?',
    options: opts('33"', '28"', '38"', '45"'),
    ...solved(78, 'A', '33" (Option A)', 158),
  },

  // Item 79
  {
    id: 'mstc-nov2015-q79',
    number: 79,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Level Bubble',
    text: 'A sight is taken with an engineer\'s level at rod held 100 m away and an initial reading of 1.83 m was recorded. The bubble is then levelled through six spaces on the level tube and the new rod reading is 1.91 m. What is the sensitivity of the bubble tube in seconds of arc?',
    options: opts('28.5"', '26.5"', '25.5"', '27.5"'),
    ...solved(79, 'D', '27.5" (Option D)', 158),
  },

  // Item 80
  {
    id: 'mstc-nov2015-q80',
    number: 80,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Tape Correction',
    text: 'A distance measured with a 50 m steel tape is recorded as 685.24 m. The tape is known to be 0.014 m too long. What is the correct length of the line in meter?',
    options: opts('685.048', '686.124', '685.432', '685.924'),
    ...solved(80, 'C', '685.432 m (Option C)', 158),
  },

  // Item 81
  {
    id: 'mstc-nov2015-q81',
    number: 81,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Sag Correction',
    text: 'A 100-m tape weighing 5.08 kg was used to measure a line. It was supported at the end points, midpoint, and a quarter points and the tension applied is 60 N. If the total measured distance is 2432.65 m, what is the correct distance of the line?',
    options: opts('2,437.02 m', '2,428.28 m', '2,430.36 m', '2,431.36 m'),
    ...solved(81, 'B', '2,428.28 m (Option B)', 159),
  },

  // Item 82
  {
    id: 'mstc-nov2015-q82',
    number: 82,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Highway Curve Sight Distance',
    text: 'A highway curve has a radius of 80 m and a length of 90 m. If the required sight distance is 60 m, how far off the center of the curve could you allow the bushes to grow?',
    options: opts('5.625 m', '6.325 m', '8.254 m', '3.125 m'),
    ...solved(82, 'A', '5.625 m (Option A)', 159),
  },

  // Item 83
  {
    id: 'mstc-nov2015-q83',
    number: 83,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Compound Curve',
    text: 'A compound curve has a common tangent 520 m long. The first curve passing through the P.C. is a 3-degree curve with a central angle of 50°. Find the length of the second curve if its central angle is 35°.',
    options: opts('698.45 m', '662.37 m', '621.87 m', '721.36 m'),
    ...solved(83, 'B', '662.37 m (Option B)', 160),
  },

  // Item 84
  {
    id: 'mstc-nov2015-q84',
    number: 84,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Spiral Curve',
    text: 'A spiral easement curve has a length of 100 m with 300-m radius central curve. Calculate the offset distance from the tangent to the third-quarter point of the spiral.',
    options: opts('2.34 m', '0.694 m', '2.89 m', '3.36 m'),
    ...solved(84, 'A', '2.34 m (Option A)', 160, 161),
  },

  // Item 85
  {
    id: 'mstc-nov2015-q85',
    number: 85,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Spiral Curve',
    text: 'A spiral easement curve has a length of 2200 m with a central curve having a radius of 320 m. Determine the degree of spiral at the third-quarter point.',
    options: opts('3.58', '2.69', '2.85', '3.21'),
    ...solved(85, 'B', '2.69 (Option B)', 161),
  },

  // Item 86
  {
    id: 'mstc-nov2015-q86',
    number: 86,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Spiral Curve',
    text: 'A spiral easement curve has a length of 160 m with a central curve having a radius of 320 m. Determine the offset distance to the third-quarter point.',
    options: opts('8.547 m', '10.125 m', '6.325 m', '5.625 m'),
    ...solved(86, 'D', '5.625 m (Option D)', 161),
  },

  // Item 87
  {
    id: 'mstc-nov2015-q87',
    number: 87,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Spiral Curve',
    text: 'The degree of curve of the central curve of a spiral easement curve is equal to 6°. If the maximum design velocity of the car passing thru the spiral curve is 80 kph, determine the required length of spiral in meters.',
    options: opts('96.51', '92.54', '98.45', '101.23'),
    ...solved(87, 'A', '96.51 m (Option A)', 161),
  },

  // Item 88
  {
    id: 'mstc-nov2015-q88',
    number: 88,
    pageNumber: 11,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Earthwork',
    text: 'From station A with center height of 1.4 m in fill, the ground has uniform slope of 5% to station B whose center height is 2.8 m in cut. Assuming both sections to be level sections having a width of 14 m and side slope of 2:1 for both cut and fill, compute the cross-sectional area of cut 52 m from station A. Distance between Stations A and B is 60 m.',
    options: opts('40.152 m²', '43.215 m²', '41.395 m²', '42.256 m²'),
    ...solved(88, 'C', '41.395 m² (Option C)', 162),
  },

  // Item 89
  {
    id: 'mstc-nov2015-q89',
    number: 89,
    pageNumber: 11,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Earthwork',
    text: 'The areas in cut of two irregular sections 75 m apart are 36 square meters and 72 square meters, respectively. Base width is 10 m side slope of 3:1.2V. Using Prismoidal corrections formula, find the corrected volume of cut in cu. m. between the two stations.',
    options: opts('4021.54 m³', '3991.73 m³', '4068.72 m³', '3984.23 m³'),
    ...solved(89, 'B', '3991.73 m³ (Option B)', 163),
  },

  // Item 90
  {
    id: 'mstc-nov2015-q90',
    number: 90,
    pageNumber: 11,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Transportation - Accident Rate',
    text: 'The number of accidents for 6 years recorded in a certain section of a highway is 5892. If the average daily traffic is 476, what is the accident rate per million entering vehicles?',
    options: opts('5763', '5584', '5821', '5652'),
    ...solved(90, 'D', '5652 (Option D)', 163),
  },
];

import { Question } from '../../../types/exam';
import { solved, opts } from './may2015Helpers';

/**
 * MSTC — May 2015, items 76–89.
 *
 * The booklet prints its own working for every item in this paper, so the
 * solution shown is a crop of that page rather than a retyped derivation.
 * The last argument of `solved` is the booklet folio the crop was taken from;
 * items whose working runs over a page turn carry the closing folio too.
 */
export const MSTC_MAY2015_PART6: Question[] = [
  // Item 76
  {
    id: 'mstc-may2015-q76',
    number: 76,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Simple Curves',
    text: 'A simple curve has an external distance of 15 m and a central angle of 30°. If the length of one station is 20 m, find the radius of the curve.',
    options: opts('544.34 m', '689.25 m', '552.61 m', '425.22 m'),
    ...solved(76, 'D', '425.22 m (Option D)', 33),
  },

  // Item 77
  {
    id: 'mstc-may2015-q77',
    number: 77,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Parabolic Curves',
    text: 'A 160 m long sag parabolic curve connects a −8% grade to a +2% grade. If the vertical curves intersect at station 1 + 240 and elevation 14.87 m, find the elevation of the first quarter point of the curve.',
    options: opts('16.97 m', '19.67 m', '15.85 m', '18.57 m'),
    ...solved(77, 'D', '18.57 m (Option D)', 33),
  },

  // Item 78
  {
    id: 'mstc-may2015-q78',
    number: 78,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Tape Corrections',
    text: 'A line was measured with a 50-m tape which is 0.04 m too long and the measured length is 512.21 m. Find the true length of the line.',
    options: opts('512.62 m', '511.80 m', '512.35 m', '511.95 m'),
    ...solved(78, 'A', '512.62 m (Option A)', 33),
  },

  // Item 79
  {
    id: 'mstc-may2015-q79',
    number: 79,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Stadia',
    text: 'A transit is set up and the stadia intercept is found to be 0.60 and the distance from the center of the instrument to the rod is 61.20 m. If the sum of the focal length and the distance from the center of the instrument to the principal focus is 0.30, compute the stadia constant k.',
    options: opts('101.5', '99.5', '100.0', '98.5'),
    ...solved(79, 'A', 'k = 101.5 (Option A)', 33),
  },

  // Item 80
  {
    id: 'mstc-may2015-q80',
    number: 80,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Weighted Measurements',
    text: 'From the given data of difference of elevation, compute the weighted mean.\n\n| Trial | Difference of elevation (m) | No. of measurements |\n| --- | --- | --- |\n| 1 | 351.1 | 2 |\n| 2 | 352.3 | 5 |\n| 3 | 351.3 | 1 |\n| 4 | 351.7 | 6 |',
    options: opts('351.8', '352.7', '351.2', '350.5'),
    ...solved(80, 'A', '351.8 m (Option A)', 34),
  },

  // Item 81
  {
    id: 'mstc-may2015-q81',
    number: 81,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Weighted Measurements',
    text: 'From the given data of measured distances, compute the weighted mean.\n\n| Trial | Distance (m) | No. of measurements |\n| --- | --- | --- |\n| 1 | 521.62 | 2 |\n| 2 | 521.51 | 5 |\n| 3 | 521.13 | 1 |\n| 4 | 521.93 | 8 |',
    options: opts('521.71', '521.45', '521.88', '521.30'),
    ...solved(81, 'A', '521.71 m (Option A)', 34),
  },

  // Item 82
  {
    id: 'mstc-may2015-q82',
    number: 82,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Traverse Adjustment',
    text: 'In the survey of a closed lot with five sides, the following data are given: the sum of the positive departures exceeds the sum of the negative departures by 0.31 m, and the sum of the negative latitudes exceeds the sum of the positive latitudes by 1.67 m. Find the corrected latitude of the 48.12 m side whose latitude is 21.09 m if the total traverse length is 292.52 m.',
    options: opts('20.82 m', '21.09 m', '21.64 m', '21.36 m'),
    ...solved(82, 'D', '21.36 m (Option D)', 34),
  },

  // Item 83
  {
    id: 'mstc-may2015-q83',
    number: 83,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Traverse Area',
    text: 'Determine the area of the given closed traverse.\n\n| Line | Length (m) | Bearing |\n| --- | --- | --- |\n| AB | 42.0 | N 64° 32\' E |\n| BC | 12.0 | S 38° 45\' E |\n| CD | 18.5 | S 34° 56\' W |\n| DE | 28.4 | S 72° 12\' W |\n| EA | 17.0 | N 27° 14\' W |',
    options: opts('820.6 m²', '786.4 m²', '648.8 m²', '867.9 m²'),
    ...solved(83, 'B', '786.4 m² (Option B)', 35),
  },

  // Item 84
  {
    id: 'mstc-may2015-q84',
    number: 84,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Highway Engineering - Superelevation',
    text: 'Compute the impact factor for a highway curve having a radius of 550 m for a design speed of 100 kph.',
    options: opts('0.322', '0.211', '0.143', '0.189'),
    ...solved(84, 'C', '0.143 (Option C)', 35),
  },

  // Item 85
  {
    id: 'mstc-may2015-q85',
    number: 85,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Highway Engineering - Braking Distance',
    text: 'Compute the braking distance of a car traveling at 100 kph on an ascending grade of 2%. The coefficient of friction between the tire and the pavement is 0.60.',
    options: opts('78.52 m', '55.34 m', '71.28 m', '63.43 m'),
    ...solved(85, 'D', '63.43 m (Option D)', 35),
  },

  // Item 86
  {
    id: 'mstc-may2015-q86',
    number: 86,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Highway Engineering - Pavement Design',
    text: 'The bearing capacity of the soil under a 200 kN wheel load is 0.15 MPa. If the contact radius is 165 mm, what should be the minimum thickness of the pavement?',
    options: opts('487 mm', '352 mm', '564 mm', '421 mm'),
    ...solved(86, 'A', '487 mm (Option A)', 36),
  },

  // Item 87
  {
    id: 'mstc-may2015-q87',
    number: 87,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Railway Engineering - Turnouts',
    text: 'A railroad curve has a frog number of 10. Determine the frog angle.',
    options: opts('4.5°', '6.2°', '5.7°', '7.4°'),
    ...solved(87, 'C', '5.7° (Option C)', 36),
  },

  // Item 88
  {
    id: 'mstc-may2015-q88',
    number: 88,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Mining Engineering - Vein Dip',
    text: 'A vein has a strike of N 43° 20\' W and a drift is driven in the vein in the direction of N 47° 20\' W with a grade of 2%. Find the dip of the vein.',
    options: opts('14°', '10°', '18°', '16°'),
    ...solved(88, 'D', '16° (Option D)', 36),
  },

  // Item 89
  {
    id: 'mstc-may2015-q89',
    number: 89,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Construction - Earthworks',
    text: 'The cost of hauling materials is ₱0.25 per cubic meter per meter station and the free haul distance is 50 m. Find the limit of economical haul if the limit is 450 m.',
    options: opts('5.0', '4.0', '6.50', '7.50'),
    ...solved(89, 'A', '₱5.00 (Option A)', 37),
  },
];

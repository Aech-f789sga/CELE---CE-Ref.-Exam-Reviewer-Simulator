import { Question } from '../../../types/exam';
import { solved, opts } from './nov2015Helpers';

/**
 * MSTC — November 2015, items 61–75.
 *
 * The booklet prints its own working for every item in this paper, so the
 * solution shown is a crop of that page rather than a retyped derivation.
 * The last argument of `solved` is the booklet folio the crop was taken from;
 * items whose working runs over a page turn carry the closing folio too.
 */
export const MSTC_NOV2015_PART5: Question[] = [
  // Item 61
  {
    id: 'mstc-nov2015-q61',
    number: 61,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Probability - Binomial',
    text: 'The probability that a missile can hit a target is 30%. How many missiles must be fired such that there is at least 75% chance of hitting the target?',
    options: opts('2', '4', '3', '5'),
    ...solved(61, 'B', '4 missiles (Option B)', 153),
  },

  // Item 62
  {
    id: 'mstc-nov2015-q62',
    number: 62,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Probability - Hypergeometric',
    text: 'A batch of automobile parts contains 18 parts which are within a power tolerance and 5 parts which are not. If 3 automobile parts are selected at random from the batch, compute the probabilities that all three are within the power tolerance.',
    options: opts('0.0057', '0.4608', '0.5326', '0.4932'),
    ...solved(62, 'B', '0.4608 (Option B)', 154),
  },

  // Item 63
  {
    id: 'mstc-nov2015-q63',
    number: 63,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Probability - Expected Value',
    text: 'An insurance company charges P7000 annually for a car insurance. The policy specifies that the company will pay P10,000 for a minor accident and P50,000 for a major accident. If the probability that a motorist has a minor accident during the year is 0.20 and having a major accident is 0.05, how much can the insurance company expect to make on a policy?',
    options: opts('P1,500', 'P4,500', 'P3,500', 'P2,500'),
    ...solved(63, 'D', 'P2,500 (Option D)', 154),
  },

  // Item 64
  {
    id: 'mstc-nov2015-q64',
    number: 64,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Probability - Poisson',
    text: 'A manufacturer estimates that 0.20% of his output of a component is defective. The components are marked in packets of 200. Using Poisson\'s distribution, determine the probability of a packet contains only 2 defective components.',
    options: opts('0.0365', '0.0536', '0.0653', '0.0563'),
    ...solved(64, 'B', '0.0536 (Option B)', 154),
  },

  // Item 65
  {
    id: 'mstc-nov2015-q65',
    number: 65,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Statistics - Expectation',
    text: 'Given the distribution shown below:\n\n| x | 2 | 3 | 11 |\n| --- | --- | --- | --- |\n| P(x) | 1/3 | 1/2 | 1/6 |\n\nFind the expectation.',
    options: opts('4', '7', '6', '2'),
    ...solved(65, 'A', '4 (Option A)', 154),
  },

  // Item 66
  {
    id: 'mstc-nov2015-q66',
    number: 66,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Sampling',
    text: 'Which of the following is most important in avoiding bias in surveying?',
    options: opts('Making sure every individual in the population of interest is invited to respond', 'Care in choosing individuals who you feel are representative of the population in terms of as many characteristics as you can list', 'Picking a sampling method in which every combination of people has the same chance of being selected', 'Sending out a large enough number of surveys so that even if the response rate is low, you will have sufficient numbers of responses to do statistical analysis'),
    ...solved(66, 'D', 'Option D (booklet keyed answer)', 154),
  },

  // Item 67
  {
    id: 'mstc-nov2015-q67',
    number: 67,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Engineering Economy - Continuous Compounding',
    text: 'If money is invested at a nominal rate of interest of 9% for a period of 5 years, what is the value of the compound amount factor if it is compounded continuously?',
    options: opts('1.458', '1.632', '1.568', '1.365'),
    ...solved(67, 'C', '1.568 (Option C)', 154),
  },

  // Item 68
  {
    id: 'mstc-nov2015-q68',
    number: 68,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Engineering Economy - Depreciation',
    text: 'An equipment costing P2.1M has a salvage value of P840,000 at the end of its economic life. Find its economic life if using the SOYD method of depreciation, its book value at the end of two years is P1,440,000.',
    options: opts('8', '5', '4', '6'),
    ...solved(68, 'D', '6 years (Option D)', 155),
  },

  // Item 69
  {
    id: 'mstc-nov2015-q69',
    number: 69,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Engineering Economy - EUAC',
    text: 'The following alternatives are to be compared based on 8% interest rate.\n\n| Machine | A | B |\n| --- | --- | --- |\n| First Cost | 5,000 | 10,000 |\n| Annual maintenance | 500 | 200 |\n| Salvage value | 600 | 1,000 |\n| Useful life (years) | 5 | 12 |\n\nWhat is the equivalent uniform annual cost (EUAC) of machine A?',
    options: opts('1474', '1385', '1650', '1720'),
    ...solved(69, 'C', '1650 (Option C)', 155),
  },

  // Item 70
  {
    id: 'mstc-nov2015-q70',
    number: 70,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Engineering Economy - Break-even',
    text: 'A manufacturer makes and sells certain spare part at P5.00 per pc. The volume of sales per year is 500,000 units. The fixed expense per year is P800,000. Compute the cost per unit to break-even.',
    options: opts('P2.40', 'P4.80', 'P3.40', 'P1.60'),
    ...solved(70, 'C', 'P3.40 (Option C)', 155),
  },

  // Item 71
  {
    id: 'mstc-nov2015-q71',
    number: 71,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Engineering Economy - Break-even',
    text: 'The revenue of selling $N$ number of computer units is $R = 80N$ and the cost to produce them is $C = 60N + 10,000$. How many computer units must be sold to break even?',
    options: opts('400', '800', '500', '600'),
    ...solved(71, 'C', '500 units (Option C)', 156),
  },

  // Item 72
  {
    id: 'mstc-nov2015-q72',
    number: 72,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Engineering Economy - Annual Cost',
    text: 'A telephone company purchased a microwave equipment for P6 million with a salvage value of P600,000 over a period of 5 years and pay a lump sum of P400,000 for maintenance cost. Minimum attractive rate of return is 16% annually. Compute the annual cost of investment of purchasing the microwave equipment.',
    options: opts('P1,592,362.54', 'P1,695,452.87', 'P1,803,374.41', 'P1,346,121.25'),
    ...solved(72, 'C', 'P1,803,374.41 (Option C)', 156),
  },

  // Item 73
  {
    id: 'mstc-nov2015-q73',
    number: 73,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Physics - Angular Motion',
    text: 'A point on the rim of a 0.20 m diameter wheel is travelling at 24 m/s. What is the angular velocity of the wheel (in radians per second).',
    options: opts('200', '180', '240', '320'),
    ...solved(73, 'C', '240 rad/s (Option C)', 156),
  },

  // Item 74
  {
    id: 'mstc-nov2015-q74',
    number: 74,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Physics - Buoyancy',
    text: 'A cylindrical buoy with cross-sectional area 1.25 sq m is observed (after being pushed) to bob up and down with a period of 0.50 sec. Approximately what is the mass of the buoy (in kilograms). Use g = 9.75 m/s².',
    options: opts('72', '68', '77', '85'),
    ...solved(74, 'C', '77 kg (Option C)', 157),
  },

  // Item 75
  {
    id: 'mstc-nov2015-q75',
    number: 75,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Surveying - Error Propagation',
    text: 'Assume a line is measured three sections with errors in the individual parts equal to ±0.015 m, ±0.022 m, ±0.029 m respectively. Determine the anticipated error of the total length.',
    options: opts('±0.039 m', '±0.041 m', '±0.058 m', '±0.022 m'),
    ...solved(75, 'A', '±0.039 m (Option A)', 157),
  },
];

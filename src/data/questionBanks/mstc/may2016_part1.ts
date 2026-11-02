import { Question } from '../../../types/exam';
import { solved, opts } from './may2016Helpers';

export const MSTC_MAY2016_PART1: Question[] = [
  // ── Item 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q01',
    number: 1,
    pageNumber: 243,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Ratio and Proportion',
    text: 'In the United States, 8 out of every 25 homes are heated by electricity. At this rate, how many homes in a community of 36,000 homes would you predict are heated by electricity?',
    options: opts('10,780 homes', '14,320 homes', '11,520 homes', '12,360 homes'),
    ...solved(1, 'C', '11,520 homes (Option C)', 253),
  },

  // ── Item 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q02',
    number: 2,
    pageNumber: 243,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Logarithms',
    text: 'If log x to the base 2 minus log 5 to the base 2 is equal to 3, find the value of x.',
    options: opts('50', '40', '55', '60'),
    ...solved(2, 'B', 'x = 40 (Option B)', 253),
  },

  // ── Item 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q03',
    number: 3,
    pageNumber: 243,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Sequences and Series',
    text: 'Find the seventh term in the sequence 1, 1, ½, 1/6, 1/24, … a₇.',
    options: opts('1/120', '1/720', '1/360', '1/5040'),
    ...solved(3, 'B', 'a₇ = 1/720 (Option B)', 253),
  },

  // ── Item 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q04',
    number: 4,
    pageNumber: 243,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Exponential Growth and Decay',
    text: 'The rate of deforestation in Nigeria is 5.75% per year. If the decrease in forest is exponential, how long will it take until only 25% of the current forests are left?',
    options: opts('25.36 years', '24.11 years', '24.78 years', '23.98 years'),
    ...solved(4, 'B', '24.11 years (Option B)', 253),
  },

  // ── Item 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q05',
    number: 5,
    pageNumber: 243,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Quadratic Functions',
    text: 'The model y = -x² + 2x + 27 describes the height (y, in meters) of a diver (after x seconds) who jumps from a cliff that is 27 m above the water surface. What is the maximum height the diver reach at 1 second?',
    options: opts('28 m', '26 m', '30 m', '27 m'),
    ...solved(5, 'A', '28 m (Option A)', 253),
  },

  // ── Item 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q06',
    number: 6,
    pageNumber: 243,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Radioactive Decay',
    text: 'The formula log (1 - k) = -0.3/H models the relationship between the half-life H of a radioactive material and its rate of decay k. Find the rate of decay of the iodine isotope-131 if its half-life is 8 days. Round to four decimal places.',
    options: opts('0.0827', '0.0635', '0.1845', '0.0984'),
    ...solved(6, 'A', 'k = 0.0827 (Option A)', 253),
  },

  // ── Item 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q07',
    number: 7,
    pageNumber: 243,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Trigonometry — Sinusoidal Models',
    text: 'The tide in Mactan channel rises and falls every 13 hours. The depth of the water at a certain point in the channel is modelled by a function d = 5 sin (2π/13)t + 9, where t is time in hours and d is depth in meters. Find the depth at t = 13/4 (high tide) and t = 39/4 (low tide).',
    options: opts(
      'High tide depth = 17 m; low tide depth = 1 m',
      'High tide depth = 13 m; low tide depth = 3 m',
      'High tide depth = 15 m; low tide depth = 2 m',
      'High tide depth = 14 m; low tide depth = 4 m',
    ),
    ...solved(7, 'D', 'High tide 14 m; low tide 4 m (Option D)', 254),
  },

  // ── Item 8 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q08',
    number: 8,
    pageNumber: 243,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Logarithmic Models',
    text: 'The formula W = 0.12 ln P + 0.84 is a model for the average walking speed (W, in m per second) for a resident of a city whose population is P thousand. Find the average walking speed for the people living in the following cities.\n\n| City | 1990 Population |\n| --- | --- |\n| Jackson, Mississippi | 192 |\n| New York City, NY | 7343 |',
    options: opts(
      'Jackson = 1.47 m/s; New York = 1.91 m/s',
      'Jackson = 1.91 m/s; New York = 1.47 m/s',
      'Jackson = 1.56 m/s; New York = 2.15 m/s',
      'Jackson = 2.15 m/s; New York = 1.56 m/s',
    ),
    ...solved(8, 'A', 'Jackson 1.47 m/s; New York 1.91 m/s (Option A)', 254),
  },

  // ── Item 9 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q09',
    number: 9,
    pageNumber: 244,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Inverse Functions',
    text: 'The function y = 2x + 5 gives the cost of pizza where P5 is the basic cost and x is the number of toppings at P2 each. Find the inverse function.',
    options: opts('y = x/2 - 5/2', 'y = x - 5/2', 'y = x + 5(2)', 'y = x + 5/2'),
    ...solved(9, 'A', 'y = x/2 - 5/2 (Option A)', 254),
  },

  // ── Item 10 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q10',
    number: 10,
    pageNumber: 244,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Uniform Motion with Wind',
    text: 'The velocity of PAL in still air is 150 kph. The velocity of wind blowing due south is 30 kph. If the plane travels south and returns back to its base after 4 hours, what distance does the plane travels due south?',
    options: opts('296 km', '272 km', '265 km', '288 km'),
    ...solved(10, 'D', '288 km (Option D)', 254),
  },

  // ── Item 11 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q11',
    number: 11,
    pageNumber: 244,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Scientific Notation',
    text: 'Light travels at a rate of approximately 1.86 × 10⁵ miles per second. It takes light 5 × 10² seconds to travel from the sun to Earth. What is the distance between Earth and the sun?',
    options: opts('93 million miles', '98 million miles', '86 million miles', '74 million miles'),
    ...solved(11, 'A', '93 million miles (Option A)', 254),
  },

  // ── Item 12 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q12',
    number: 12,
    pageNumber: 244,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Uniform Motion and Time Conversion',
    text: 'The fastest average speed by a cyclist across the continental United States is 15.4 mph by Pete Penseyres. If he travelled a total distance of about 3107 miles at this speed, find his time cycling. Write time in days, hours, and minutes.',
    options: opts(
      '8 days, 9 hours, 45 minutes',
      '8 days, 12 hours, 35 minutes',
      '8 days, 4 hours, 6 minutes',
      '8 days, 8 hours, 40 minutes',
    ),
    ...solved(12, 'A', '8 days, 9 hours, 45 minutes (Option A)', 255),
  },

  // ── Item 13 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q13',
    number: 13,
    pageNumber: 244,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Linear Inequalities',
    text: 'A salesperson earns P6000 per month plus a commission of 15% of sales. Find the minimum amount of sales needed to receive a total income of at least P15,000 per month.',
    options: opts('P100,000', 'P85,000', 'P60,000', 'P55,000'),
    ...solved(13, 'C', 'P60,000 (Option C)', 255),
  },

  // ── Item 14 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q14',
    number: 14,
    pageNumber: 244,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Mixture Problems',
    text: 'A given alloy contains 20% copper and 5% tin. How many pounds of copper and of tin must be melted with 100 lb of the given alloy to produce another alloy analysing 30% copper and 10% tin? All percentages are by weight.',
    options: opts(
      '20.5 lbs copper; 9.5 lbs tin',
      '18.5 lbs copper; 4.5 lbs tin',
      '17.5 lbs copper; 7.5 lbs tin',
      '15.5 lbs copper; 8.5 lbs tin',
    ),
    ...solved(14, 'C', '17.5 lbs copper and 7.5 lbs tin (Option C)', 255),
  },

  // ── Item 15 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q15',
    number: 15,
    pageNumber: 244,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Work Problems',
    text: 'Working together, two people can design a website in 5 hours. If each worked alone, one of them would design the site in 2 hours less time than the other. How long would it take each person to design a website working alone?',
    options: opts(
      '8.1 hours for the slower person and 12.1 hours for the faster person',
      '12.1 hours for the slower person and 8.1 hours for the faster person',
      '9.1 hours for the slower person and 11.1 hours for the faster person',
      '11.1 hours for the slower person and 9.1 hours for the faster person',
    ),
    ...solved(15, 'D', '11.1 hours slower, 9.1 hours faster (Option D)', 256),
  },
];

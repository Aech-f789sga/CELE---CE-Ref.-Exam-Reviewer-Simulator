import { Question } from '../../../types/exam';
import { opts, solved } from './may2022Helpers';

/**
 * MSTC May 2022, items 1-15 — exponential growth, plane and spherical trigonometry,
 * analytic geometry, differential calculus, integral calculus,
 * differential equations and vectors.
 */
export const MSTC_MAY2022_PART1: Question[] = [
  // ── Item 1 ───────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q1',
    number: 1,
    pageNumber: 372,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Engineering Economy - Simple Interest & Portfolio Investment',
    text: 'An investment firm has P100,000 to invest for a client and decides to invest in two stocks A and B. The expected annual rate of return or simple interest for stock A is 15% but there is some risk involved and the client does not wish to invest more than P50,000 in his stock. The annual rate of return on the more stable stock B is anticipated to be 10%. Determine the amount invested in stock A and B to achieve a portfolio that earns P13,000 per year.',
    options: opts(
      'P40,000 and P60,000',
      'P50,000 and P50,000',
      'P70,000 and P30,000',
      'P60,000 and P40,000',
    ),
    ...solved(1, 'D', 'P60,000 and P40,000'),
  },

  // ── Item 2 ───────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q2',
    number: 2,
    pageNumber: 372,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Algebra - Linear Word Problem / Rope Cutting',
    text: 'A mountain climber wants to cut a rope 213 feet long into three pieces. If each piece is to be 2 feet longer than the previous one, where should he make the cuts?',
    options: opts('69 and 73', '71 and 75', '70 and 73', '68 and 70'),
    ...solved(2, 'A', '69 and 73'),
  },

  // ── Item 3 ───────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q3',
    number: 3,
    pageNumber: 372,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Physics & Algebra - Quadratic Projectile Motion',
    text: 'A ball is thrown downward from the top of a 180-foot building with an initial velocity of 20 feet per second. The height of the ball h after t seconds is given by the equation h = -16t² - 20t + 180. How long after the ball is thrown will it strike the ground?',
    options: opts('3.0 sec', '2.8 sec', '3.8 sec', '1.8 sec'),
    ...solved(3, 'B', '2.8 sec'),
  },

  // ── Item 4 ───────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q4',
    number: 4,
    pageNumber: 372,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Applied Mathematics - Polynomial Growth Modeling',
    text: 'The number of Starbucks stores is given by the equation\nf(x) = 115x² + 117x + 3963\nwhere x is the number of years after year 2000. How many stores in 2004?',
    options: opts('5,349', '4,657', '7,423', '6,721'),
    ...solved(4, 'D', '6,721'),
  },

  // ── Item 5 ───────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q5',
    number: 5,
    pageNumber: 372,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Calculus & Applied Math - Exponential Decay',
    text: 'As a result of a nuclear accident, radioactive debris was carried through the atmosphere. One immediate concern was the impact that the debris has on the milk supply. The percent y of radioactive material in raw milk after t days is estimated by y = 100(2.7)^(-0.1t). Estimate the expected percent radioactive material in the milk after 30 days.',
    options: opts('6%', '7%', '4%', '5%'),
    ...solved(5, 'D', '5%'),
  },

  // ── Item 6 ───────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q6',
    number: 6,
    pageNumber: 373,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Trigonometry - Triangle Area (SAS Formula)',
    text: 'A painter needs to find the area of the gable end of a house. What is the area of the gable if it is a triangle with two sides of 42 ft that meet at a 115° angle?',
    options: opts('799 ft²', '852 ft²', '879 ft²', '926 ft²'),
    ...solved(6, 'A', '799 ft²'),
  },

  // ── Item 7 ───────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q7',
    number: 7,
    pageNumber: 373,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Surveying & Trigonometry - Bearings & Relative Navigation',
    text: 'Two ships leave port at the same time, one ship sailing in the direction N 23° E at a speed of 11 miles per hour, and the second ship sailing in the direction of S 67° E at 15 mph. Find the bearing from the second ship to the first ship after one hour of travel.',
    options: opts('N 31° W', 'N 21° W', 'N 35° W', 'N 25° W'),
    ...solved(7, 'A', 'N 31° W'),
  },

  // ── Item 8 ───────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q8',
    number: 8,
    pageNumber: 373,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Surveying - Height of Mountain by Trigonometric Leveling',
    text: 'In order to measure the height of a mountain, a surveyor takes two sightings from a transit 1.5 m high. The sightings are taken 1200 m apart from the same ground elevation. The first measured angle of elevation is 51°, and the second is 38°. What is the height of the mountain (above the ground elevation)?',
    options: opts('2554 m', '2544 m', '2534 m', '2444 m'),
    ...solved(8, 'A', '2554 m'),
  },

  // ── Item 9 ───────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q9',
    number: 9,
    pageNumber: 373,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Surveying - Three-Point Mountain Peak Triangulation',
    text: 'In hilly or mountainous terrain, it is often difficult to determine heights. It may be impossible to find an expanse of level ground from which measurements can be taken, and sighting may be limited. Mountain peaks may be visible only from certain places. A geologist took measurements at two points, B and C, 928 m apart. The angle of elevation from B to the top of the mountain at A is 47°10\'. The angle of elevation from C to B is 8°40\', and the angle of elevation from C to A is 32°30\'. It is known that the elevation at C is 1621 m to the nearest meter, what is the elevation at A?',
    options: opts('2921 m', '2847 m', '2893 m', '2524 m'),
    ...solved(9, 'B', '2847 m'),
  },

  // ── Item 10 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q10',
    number: 10,
    pageNumber: 373,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Geometry - Belt and Pulley Tangency',
    text: 'A 20-inch belt connects a pulley with a very small shaft on a motor. The distance between the shaft and the large pulley is 4 inches. Assuming the shaft as a single point, find the radius of the large pulley to the nearest tenth of an inch. The length of belt in contact with the pulley is 8.5 inches.',
    options: opts('2.41 inches', '2.53 inches', '1.82 inches', '2.13 inches'),
    ...solved(10, 'D', '2.13 inches'),
  },

  // ── Item 11 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q11',
    number: 11,
    pageNumber: 374,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Analytic Geometry - Parabolic Locus (Focus & Directrix)',
    text: 'Mines in a harbor during wartime are so placed that ship going to a certain port within the harbor, to avoid hitting them must follow a path which is at all times equidistant from a point 9 km north of another port and a line whose bearing is due east. One point of this line is 3 km south of the port. Considering the port as the origin, find the equation of the path of the ship.',
    options: opts(
      'x² - 24y + 72 = 0',
      'x² + 24y + 72 = 0',
      'x² - 24y - 72 = 0',
      'x² + 24y - 72 = 0',
    ),
    ...solved(11, 'A', 'x² - 24y + 72 = 0'),
  },

  // ── Item 12 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q12',
    number: 12,
    pageNumber: 374,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Differential Calculus - Related Rates (Baseball Diamond)',
    text: 'A baseball diamond is a square with each side 90 feet in length. A player is running to the first base at the rate of 30 ft/s. When he has run halfway, at what rate is his distance from the second base changing?',
    options: opts('4√5 / sec', '5√4 ft/sec', '6√5 ft/sec', '5√6 ft/sec'),
    ...solved(12, 'C', '6√5 ft/sec'),
  },

  // ── Item 13 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q13',
    number: 13,
    pageNumber: 374,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Differential Calculus - Maxima and Minima (Rain Gutter)',
    text: 'A long rectangular sheet of metal, 12 cm wide, is to be made a rain gutter by turning up two sides so that they are perpendicular to the sheet. How many centimeters should be turned up to give the gutter its greatest capacity?',
    options: opts('1.5', '3.0', '2.0', '3.5'),
    ...solved(13, 'B', '3.0'),
  },

  // ── Item 14 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q14',
    number: 14,
    pageNumber: 374,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Physics & Calculus - Parametric Velocity Components',
    text: 'A particle position in the xy plane at any time t is given by x = 2t² + 3 and y = t⁴. Find the x-component of the particle\'s velocity at time t = 5.',
    options: opts('10', '15', '20', '30'),
    ...solved(14, 'C', '20'),
  },

  // ── Item 15 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q15',
    number: 15,
    pageNumber: 374,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Physics & Calculus - Hang Time & Projectile Motion',
    text: 'When slam-dunking, a basketball player seems to hang in the air at the height of his jump. The height h(t), in feet above the ground, of a basketball player at time t, in seconds since the start of a jump, is given by h(t) = -16t² + 16Tt, where T is the total time in seconds that it takes to complete the jump. For a jump that takes 1 second to complete, how much of this time does the basketball player spend at the top 25% of the trajectory? [Hint: Find the maximum height reached. Then find the times at which the height is 75% of this maximum.]',
    options: opts('0.45 sec', '0.55 sec', '0.50 sec', '0.75 sec'),
    ...solved(15, 'C', '0.50 sec'),
  },
];

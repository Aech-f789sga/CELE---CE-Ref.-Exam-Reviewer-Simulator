import { Question } from '../../../types/exam';
import { mstcMay2017Figure } from '../../mstcMay2017Images';
import { solved, recall, opts } from './may2017Helpers';

export const MSTC_MAY2017_PART3: Question[] = [
  // ── Item 41 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q41',
    number: 41,
    pageNumber: 453,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Statics — Components of Force',
    text: 'A man pulls a rope attached to a sled. If the rope makes an angle of 32° with the ground, determine the force the man must exert on the rope so that the effective force tending to move the sled along the ground is 150 N.',
    options: opts('156 N', '182 N', '177 N', '165 N'),
    ...solved(41, 'C', '177 N', 473),
  },

  // ── Item 42 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q42',
    number: 42,
    pageNumber: 453,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Statics — Friction on a Ramp',
    text: 'In the design of a supermarket, there are to be several ramps connecting different parts of the store. Customers will have to push grocery carts up the ramps. An engineer has done a survey and found that almost no one complains if the force is no more than 50 N. With slope θ ≈ 5°, what force must a person exert, assuming a 25-kg grocery cart (full of groceries)? Assume friction (wheels against ground, wheel on the axis, and so on) can be accounted for by a coefficient μk = 0.10.',
    options: opts('52 N', '55 N', '49 N', '46 N'),
    ...solved(42, 'D', '46 N', 473),
  },

  // ── Item 43 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q43',
    number: 43,
    pageNumber: 454,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Work and Energy — Spring',
    text: 'It takes a force of 160 N to stretch a spring 50 cm. Find the work done in stretching the spring 30 cm beyond its natural (unstretched) length.',
    options: opts('14.4 J', '15.6 J', '13.7 J', '16.2 J'),
    ...solved(43, 'A', '14.4 J', 474),
  },

  // ── Item 44 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q44',
    number: 44,
    pageNumber: 454,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Oscillation — Amplitude',
    text: 'A spring stretches 0.20 m when a 0.300-kg mass is hung from it. The spring is then stretched an additional 0.120 m from this equilibrium point and released. Determine the amplitude of the oscillation.',
    options: opts('0.12 m', '0.0012 m', '1.2 m', '0.012 m'),
    ...solved(44, 'A', '0.12 m', 474),
  },

  // ── Item 45 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q45',
    number: 45,
    pageNumber: 454,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Oscillation — Pendulum',
    text: 'Determine the time of oscillation (in minutes) of a pendulum having a length of 15 m.',
    options: opts('0.1295', '0.1136', '0.0986', '0.0679'),
    ...solved(45, 'A', '0.1295 min', 475),
  },

  // ── Item 46 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q46',
    number: 46,
    pageNumber: 454,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Kinetics — Impulse and Momentum',
    text: 'A 100-kg block initially at rest is acted upon by a constant force of 80 N for 5 seconds after which an opposite force of 52 N is applied. In what additional time will the block come to rest?',
    options: opts('8.25 s', '5.87 s', '6.32 s', '7.69 s'),
    ...solved(46, 'D', '7.69 s', 475),
  },

  // ── Item 47 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q47',
    number: 47,
    pageNumber: 454,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Rotation — Angular Acceleration',
    text: 'A centrifuge rotor is accelerated from rest to 23,000 rpm in 5.0 min. What is its average angular acceleration?',
    options: opts('1.728 rev/s²', '1.632 rev/s²', '1.278 rev/s²', '1.872 rev/s²'),
    ...solved(47, 'C', '1.278 rev/s²', 475),
  },

  // ── Item 48 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q48',
    number: 48,
    pageNumber: 454,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Gravitation — Geosynchronous Orbit',
    text: "A geosynchronous satellite is one that stays at the same point on the equator of the earth. Determine the height above the earth's surface such a satellite must orbit. Use G = 6.67 × 10⁻¹¹ N·m²/kg², mass of the earth = 5.98 × 10²⁴ kg, radius of the earth = 6.38 × 10⁶ m. Hint: in order for the satellite to remain in orbit, the gravitational force must equal the centripetal force, F = G M m/r² and centripetal force = m v²/r.",
    options: opts('39620 km', '38650 km', '42250 km', '35870 km'),
    ...solved(48, 'D', '35870 km', 476),
  },

  // ── Item 49 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q49',
    number: 49,
    pageNumber: 454,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Gravitation — Centripetal Acceleration',
    text: "The moon orbits the earth in almost circular orbit with a radius of 384,000 km and an average period of 27.32 days. Compute the moon's acceleration of the toward the earth.",
    options: opts('5.72 × 10⁻³ m/s²', '3.72 × 10⁻³ m/s²', '4.72 × 10⁻³ m/s²', '2.72 × 10⁻³ m/s²'),
    ...solved(49, 'D', '2.72 × 10⁻³ m/s²', 476),
  },

  // ── Item 50 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q50',
    number: 50,
    pageNumber: 454,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Work and Energy — Hanging Cable',
    text: 'A mine cable weighing 70 N/m is unwound from a cylindrical drum. If the lower end of the cable is initially 12 m below the drum, how much work is done by gravity as an additional 100 m are unwound?',
    options: opts('380 kN-m', '360 kN-m', '360 kN-m', '455 kN-m'),
    ...solved(
      50,
      'D',
      '455 kN-m',
      477,
      477,
      "The booklet prints 360 kN-m twice, as choices B and C, and its own working gives 434 kN-m from ½w(x₂² - x₁²) with x₂ = 115 m — which matches none of the four choices. The key is D, 455 kN-m.",
    ),
  },

  // ── Item 51 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q51',
    number: 51,
    pageNumber: 455,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Engineering Economy — Continuous Compounding',
    text: 'A commercial bank offers long term savings certificate at 8.5% per year, compounded continuously. If a 12-year certificate costs P50,000, what will be its value at maturity?',
    options: opts('P138,660', 'P135,230', 'P143,520', 'P140,320'),
    ...solved(
      51,
      'A',
      'P138,660',
      477,
      477,
      "The booklet's working states t = 20 years, but the stem asks for a 12-year certificate and the printed value P138,659.74 is 50,000·e^(0.085 × 12). The t = 20 line is a misprint; the arithmetic follows 12 years.",
    ),
  },

  // ── Item 52 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q52',
    number: 52,
    pageNumber: 455,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Engineering Economy — Benefit-Cost Ratio',
    text: 'P210,000 was invested on the project that yields annual benefit of P80,000 for 8 years with no salvage value. Calculate the benefit-cost ratio if the cost of money is 6%.',
    options: opts('1.896', '2.366', '2.245', '1.992'),
    ...solved(52, 'B', 'BCR = 2.366', 477),
  },

  // ── Item 53 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q53',
    number: 53,
    pageNumber: 455,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Engineering Economy — Annuities',
    text: 'A man made a time deposit of P500,000 with BDO that pays 9% per year, compounded annually. Compute the maximum withdrawals at the end of each year for 12 years.',
    options: opts('P69,850', 'P68,560', 'P68,960', 'P69,920'),
    figureSvg: mstcMay2017Figure(
      'fig53_table',
      'Interest factors at i = 9%, n = 12',
    ),
    ...solved(53, 'A', 'P69,850', 478),
  },

  // ── Item 54 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q54',
    number: 54,
    pageNumber: 455,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Engineering Economy — Present Worth Index',
    text: 'GERTC Corporation invested P4 million on an equipment that will save the company P1.8 million annually for 9 years. If the minimum attractive rate of return (MARR) is 12%, what is the present worth index of the investment?',
    options: opts('2.624', '1.945', '2.058', '2.398'),
    figureSvg: mstcMay2017Figure(
      'fig54_table',
      'Interest factors at i = 12%, n = 9',
    ),
    ...solved(54, 'D', 'Present worth index = 2.398', 478),
  },

  // ── Item 55 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q55',
    number: 55,
    pageNumber: 455,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Engineering Economy — Gradient Series',
    text: 'The repair costs of copier machine is estimated to be P1200 the first year, increasing by P300 per year in the subsequent years. Determine the amount that the office will need to deposit into a bank account, paying 4% interest to provide for the repair cost for the five years.',
    options: opts('P7,863', 'P6,896', 'P8,102', 'P7,909'),
    figureSvg: mstcMay2017Figure(
      'fig55_table',
      'Interest factors at i = 4%, n = 5',
    ),
    ...solved(55, 'D', 'P7,909', 478),
  },

  // ── Item 56 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q56',
    number: 56,
    pageNumber: 456,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Algebra — Break-even',
    text: 'The cost of producing x number of cellular phones is given by C = 4.5x + 3600 and revenue R from selling them is given by R = 16.5x. Find the number of cellular phones that must be sold to break even.',
    options: opts('300', '250', '350', '400'),
    ...solved(56, 'A', '300 units', 479),
  },

  // ── Item 57 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q57',
    number: 57,
    pageNumber: 456,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Surveying — Field Orientation',
    text: "Assuming the sun rises at 6:00 a.m., sets at 6:00 p.m. and moves at a uniform rate, how can a lost boy scout determine south by means of a watch on a cloudless day?",
    options: opts(
      "Align the hour hand with the sun's azimuth, and south will be midway between the hour hand and 9.",
      "Align the hour hand with the sun's azimuth, and south will be midway between the hour hand and 12.",
      "Align the hour hand with the sun's azimuth, and south will be midway between the hour hand and 6.",
      "Align the hour hand with the sun's azimuth, and south will be midway between the hour hand and 3.",
    ),
    ...recall(
      'B',
      'Hour hand and 12',
      'Point the hour hand at the sun and bisect the angle it makes with the 12 o\'clock mark; the bisector points south. The method works because the sun crosses the meridian at noon, so the hour hand sweeps twice the sun\'s azimuth and the half-angle between hand and 12 tracks due south.',
    ),
  },

  // ── Item 58 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q58',
    number: 58,
    pageNumber: 456,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Surveying — Taping Error',
    text: 'Assume that any distance of 100 ft can be taped with an error of ±0.02 ft if certain techniques are employed. Determine the error in taping 5000 ft using these skills.',
    options: opts('±0.153 ft', '±0.194 ft', '±0.141 ft', '±0.163 ft'),
    ...solved(58, 'C', '±0.141 ft', 479),
  },

  // ── Item 59 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q59',
    number: 59,
    pageNumber: 456,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Surveying — Sea-level Reduction',
    text: 'The distance from A to B taken elevation 1300 m above sea level is 6590 m. Determine the sea-level distance. Assume that the average radius of earth is 6400 km.',
    options: opts('6564.13 m', '6588.66 m', '5532.63 m', '6562.14 m'),
    ...solved(59, 'B', '6588.66 m', 480),
  },

  // ── Item 60 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q60',
    number: 60,
    pageNumber: 456,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Surveying — Peg Adjustment',
    text: 'To make a peg adjustment, the following notes were taken. With the Wye level at 1 the rod reading at P is 0.632 m and at Q is 2.543 m; with the Wye level at 2 the rod reading at P is 1.867 m and at Q is 3.432 m. Point 1 is in the line PQ and midway between P and Q. Point 2 is on the same line as P and Q but not between them. Point 2 is 30 m from P and 230 m from Q. With the Wye level at point 1, what is the Rod Reading at P for a level sight?',
    options: opts('2.625 m', '0.854 m', '0.805 m', '2.716 m'),
    figureSvg: mstcMay2017Figure('fig60_table', 'Peg-adjustment rod readings'),
    ...solved(60, 'C', '0.805 m', 480),
  },
];

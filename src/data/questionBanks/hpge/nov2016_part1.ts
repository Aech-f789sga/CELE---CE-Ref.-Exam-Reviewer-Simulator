import { Question } from '../../../types/exam';
import { hpgeNov2016Figure } from '../../hpgeNov2016Images';
import { solved, recall, opts } from './nov2016Helpers';

/**
 * HPGE November 2016, items 1–13.
 *
 * Fluid properties and hydrostatics: the booklet opens with four one-liners on
 * density, Pascal, Bernoulli and the height of the atmosphere, then a run of
 * gage-pressure and buoyancy items. Situation 1 (items 7–9) is the vertical
 * gate, Situation 2 (items 10–12) the masonry dam whose section is printed as a
 * figure, and Situation 3 (items 15–17) the floating block of wood that opens
 * the next part.
 *
 * Items 2 and 3 are the two recall items of the section: the booklet prints the
 * answer in its key but no working, because both ask the name of a principle.
 */
export const HPGE_NOV2016_PART1: Question[] = [
  // ── Item 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q1',
    number: 1,
    pageNumber: 378,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Fluid Properties — Density of Water',
    text: 'At what temperature (°C) at which liquid water has the highest density?',
    options: opts('0', '32', '100', '4'),
    ...solved(1, 'D', '$4\\ ^\\circ\\text{C}$ (Option D)', 385),
  },

  // ── Item 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q2',
    number: 2,
    pageNumber: 378,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Fluid Properties — Pascal’s Principle',
    text: 'The pressure exerted onto a liquid is transmitted equally and undiminished to all portions of the liquid. This principle in fluid mechanics is known as',
    options: opts('Archimedes', 'Bernoulli', 'Pascals', 'Boyles'),
    ...recall(
      'C',
      'Pascals (Option C)',
      'Definition item — the booklet prints no working for this one. Pascal’s principle is the statement that a pressure change applied to an enclosed fluid is transmitted undiminished to every part of the fluid and to the walls of its container; Archimedes is the buoyancy principle and Boyle’s law relates pressure to volume at constant temperature.',
    ),
  },

  // ── Item 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q3',
    number: 3,
    pageNumber: 378,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Fluid Mechanics — Bernoulli’s Theorem',
    text: 'In any stream flowing steadily without friction the total energy contained is the same at every point in its path of flow. This principle is attributed to:',
    options: opts('Archimedes', 'Boyles', 'Pascals', 'Bernoulli'),
    ...recall(
      'D',
      'Bernoulli (Option D)',
      'Definition item — the booklet prints no working for this one. The statement is Bernoulli’s theorem: along a steady, frictionless streamline the sum of the pressure head, velocity head and elevation head is constant.',
    ),
  },

  // ── Item 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q4',
    number: 4,
    pageNumber: 378,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Fluid Properties — Height of the Atmosphere',
    text: 'For the value of the atmospheric pressure at sea level used in engineering practice, evaluate about how high, in meters, is the atmosphere above sea level?',
    options: opts('10,000 m', '9,500 m', '8,500 m', '7,500 m'),
    ...solved(
      4,
      'C',
      '$8{,}500\\text{ m}$ (Option C)',
      385,
      385,
      'The booklet keys this item to 8,500 m, the order of magnitude of the atmospheric scale height ($H = p_0/\\gamma_{air}$). A strict head-of-air calculation with $\\gamma_{air} = 12\\ \\text{N/m}^3$ gives about 10,300 m, which is option A — the printed key does not follow that route.',
    ),
  },

  // ── Item 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q5',
    number: 5,
    pageNumber: 378,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Fluid Properties — Gage Pressure in Mercury',
    text: 'Obtain the gage pressure in a vessel of mercury at a point 500 mm below the liquid surface, expressing the answer in kPa.',
    options: opts('67.6', '68.2', '76.6', '66.7'),
    ...solved(5, 'D', '$66.7\\text{ kPa}$ (Option D)', 385),
  },

  // ── Item 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q6',
    number: 6,
    pageNumber: 378,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Fluid Statics — Two-Liquid Tank',
    text: 'An open tank contains 5 m deep of liquid having unit weight of $7\\ \\text{kN/m}^3$. Water is poured over the liquid until the total depth of the two liquids is 8 m. Evaluate the gage pressure at the bottom of the tank in kPa.',
    options: opts('70', '48', '78.5', '64.4'),
    ...solved(6, 'D', '$64.4\\text{ kPa}$ (Option D)', 385),
  },

  // ── Item 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q7',
    number: 7,
    pageNumber: 378,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 1 — Total Force on a Vertical Gate',
    text: 'Situation 1 – A vertical gate 0.6 m wide and 1.2 m high is submerged completely in water with its top edge flushed with the water surface.\n\nObtain the magnitude of the total force acting on one side of the gate, in kN.',
    options: opts('5.24', '4.24', '3.75', '2.84'),
    ...solved(7, 'B', '$4.24\\text{ kN}$ (Option B)', 386),
  },

  // ── Item 8 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q8',
    number: 8,
    pageNumber: 378,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 1 — Center of Pressure from the Centroid',
    text: 'Situation 1 – A vertical gate 0.6 m wide and 1.2 m high is submerged completely in water with its top edge flushed with the water surface.\n\nObtain the location of the total pressure measure from the center of the gate.',
    options: opts('200 mm', '400 mm', '300 mm', '100 mm'),
    ...solved(8, 'A', '$200\\text{ mm}$ (Option A)', 386),
  },

  // ── Item 9 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q9',
    number: 9,
    pageNumber: 378,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 1 — Center of Pressure from the Surface',
    text: 'Situation 1 – A vertical gate 0.6 m wide and 1.2 m high is submerged completely in water with its top edge flushed with the water surface.\n\nObtain the location of the total pressure measure from the surface of water.',
    options: opts('200 mm', '600 mm', '800 mm', '400 mm'),
    ...solved(9, 'C', '$800\\text{ mm}$ (Option C)', 386),
  },

  // ── Item 10 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q10',
    number: 10,
    pageNumber: 379,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 2 — Hydrostatic Force on a Masonry Dam',
    text: 'Situation 2 – Given the following data for the masonry dam shown in the Figure:\n\n$H = 9\\text{ m}$   $B = 4.3\\text{ m}$\n$T = 1\\text{ m}$   $h = 6\\text{ m}$\n\nUnit weight of concrete $= 23\\ \\text{kN/m}^3$. Consider 1 meter length of dam.\n\nCalculate the total hydrostatic pressure acting on the dam, in kN.',
    figureSvg: hpgeNov2016Figure(
      's2',
      'Figure for Situation 2: a masonry dam in cross-section, vertical on the upstream face. T is the crest width, H the overall height from base to crest, B the base width, and h the depth of water standing against the upstream face.',
    ),
    figureCaption:
      'Situation 2: masonry dam section — crest width T, height H, base width B, water depth h.',
    options: opts('154.2', '176.6', '195.8', '132.5'),
    ...solved(10, 'B', '$176.6\\text{ kN}$ (Option B)', 386),
  },

  // ── Item 11 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q11',
    number: 11,
    pageNumber: 379,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 2 — Righting Moment of the Dam',
    text: 'Situation 2 – Given the following data for the masonry dam shown in the Figure:\n\n$H = 9\\text{ m}$   $B = 4.3\\text{ m}$\n$T = 1\\text{ m}$   $h = 6\\text{ m}$\n\nUnit weight of concrete $= 23\\ \\text{kN/m}^3$. Consider 1 meter length of dam.\n\nCompute the righting moment in kN-m.',
    options: opts('1835', '3158', '1538', '1358'),
    ...solved(11, 'C', '$1538\\text{ kN}\\cdot\\text{m}$ (Option C)', 386),
  },

  // ── Item 12 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q12',
    number: 12,
    pageNumber: 379,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 2 — Factor of Safety Against Sliding',
    text: 'Situation 2 – Given the following data for the masonry dam shown in the Figure:\n\n$H = 9\\text{ m}$   $B = 4.3\\text{ m}$\n$T = 1\\text{ m}$   $h = 6\\text{ m}$\n\nUnit weight of concrete $= 23\\ \\text{kN/m}^3$. Consider 1 meter length of dam.\n\nObtain the factor of safety against sliding assuming $\\mu = 0.50$.',
    options: opts('1.68', '1.55', '1.32', '2.15'),
    ...solved(12, 'B', '1.55 (Option B)', 386),
  },

  // ── Item 13 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q13',
    number: 13,
    pageNumber: 379,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Buoyancy — Volume by Loss of Weight',
    text: 'An irregularly shaped object weighs 300 N in air and 230 N in water. What is the volume of the object in cubic meter?',
    options: opts('0.0024', '0.0058', '0.0071', '0.0035'),
    ...solved(13, 'C', '$0.0071\\text{ m}^3$ (Option C)', 387),
  },
];

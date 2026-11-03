import { Question } from '../../../types/exam';
import { hpgeMay2017Figure } from '../../hpgeMay2017Images';
import { solved, recall, opts } from './may2017Helpers';

/** Situation 6 is printed once and shared by items 34-36. */
const SIT6 =
  'Situation 6 – A stratified soil consist of the following layers:\n\n' +
  'Layer 1: Thickness, $H_1 = 3\\text{ m}$, $k_1 = 1.5 \\times 10^{-5}\\ \\text{cm/s}$\n' +
  'Layer 2: Thickness, $H_2 = 3\\text{ m}$, $k_2 = 1 \\times 10^{-5}\\ \\text{cm/s}$\n' +
  'Layer 3: Thickness, $H_3 = 3\\text{ m}$, $k_3 = 1.2 \\times 10^{-4}\\ \\text{cm/s}$\n' +
  'Layer 4: Thickness, $H_4 = 3\\text{ m}$, $k_4 = 1.5 \\times 10^{-5}\\ \\text{cm/s}$';

export const HPGE_MAY2017_PART3: Question[] = [
  // ── Item 25 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q25',
    number: 25,
    pageNumber: 489,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 5 — Hydraulic Radius of a Trapezoidal Canal',
    text: 'Situation 5 – An irrigation canal with trapezoidal cross-section has the following elements: Bottom width = 2.4 m, depth of water = 0.9 m, side slope = 1.5 horizontal to 1 vertical, slope of canal bed = 0.001, coefficient of roughness = 0.025. The canal will serve clay-loam rice land.\n\nWhat is the hydraulic radius in meters?',
    options: opts('0.487', '0.748', '0.632', '0.598'),
    ...solved(25, 'D', 'R = 0.598 m', 502),
  },

  // ── Item 26 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q26',
    number: 26,
    pageNumber: 489,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 5 — Mean Velocity by Manning',
    text: 'Situation 5 – An irrigation canal with trapezoidal cross-section has the following elements: Bottom width = 2.4 m, depth of water = 0.9 m, side slope = 1.5 horizontal to 1 vertical, slope of canal bed = 0.001, coefficient of roughness = 0.025. The canal will serve clay-loam rice land.\n\nWhat is the mean velocity of flow in m/s?',
    options: opts('0.898', '0.956', '1.254', '1.085'),
    ...solved(26, 'A', 'v = 0.898 m/s', 502),
  },

  // ── Item 27 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q27',
    number: 27,
    pageNumber: 489,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 5 — Service Area from Duty of Water',
    text: 'Situation 5 – An irrigation canal with trapezoidal cross-section has the following elements: Bottom width = 2.4 m, depth of water = 0.9 m, side slope = 1.5 horizontal to 1 vertical, slope of canal bed = 0.001, coefficient of roughness = 0.025. The canal will serve clay-loam rice land.\n\nIf the canal will serve a clay-loam rice land, determine the area (in hectares) it can serve if the duty of water per hectare is 3 L/s.',
    options: opts('1158', '958', '1010', '1254'),
    ...solved(27, 'C', '1010 hectares', 502),
  },

  // ── Item 28 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q28',
    number: 28,
    pageNumber: 489,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Hydraulics — Vertical Jet Supporting a Load',
    text: 'A vertical jet of water leaves the nozzle under a constant head of 25 m and a diameter of 30 mm. How high above the nozzle tip can it support at load of 300 N?',
    options: opts('6.29 m', '6.87 m', '7.32 m', '5.24 m'),
    ...solved(28, 'A', 'h = 6.29 m', 503),
  },

  // ── Item 29 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q29',
    number: 29,
    pageNumber: 490,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Geotechnical — Volume Relationships',
    text: 'The ratio of the volume of voids to the total volume of soil.',
    options: opts('porosity', 'void ratio', 'degree of saturation', 'water content'),
    ...recall(
      'A',
      'porosity',
      'Porosity $n = V_v/V$, the void volume over the total volume. Void ratio is $V_v/V_s$ (over the solids), degree of saturation is $V_w/V_v$, and water content is $W_w/W_s$.',
    ),
  },

  // ── Item 30 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q30',
    number: 30,
    pageNumber: 490,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Geotechnical — Volume Relationships',
    text: 'The ratio of the volume of water to the volume of voids.',
    options: opts('porosity', 'void ratio', 'degree of saturation', 'water content'),
    ...recall(
      'D',
      'water content',
      'The booklet keys this item D (water content), but the ratio it describes — volume of water over volume of voids, $V_w/V_v$ — is the **degree of saturation** (choice C). Water content is a ratio of weights, $W_w/W_s$. The printed key is inconsistent with the definition; both readings are recorded here rather than silently corrected.',
    ),
  },

  // ── Item 31 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q31',
    number: 31,
    pageNumber: 490,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Geotechnical — Unit Weight from Gs, S and e',
    text: 'A soil has a specific gravity of 2.5, degree of saturation of 40%, and void ratio of 0.40. Obtain the unit weight of the soil in $\\text{kN/m}^3$.',
    options: opts('18.21', '17.52', '19.32', '18.64'),
    ...solved(31, 'D', '18.639 kN/m³', 503),
  },

  // ── Item 32 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q32',
    number: 32,
    pageNumber: 490,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Geotechnical — Consistency of a Clay Deposit',
    text: 'A blow count N = 6 was obtained at a certain depth of a clay soil deposit. Estimate the unconfined compression strength of the clay deposit. See attached table.',
    options: opts('60', '70', '75', '62.5'),
    figureSvg: hpgeMay2017Figure(
      'fig32_table',
      'Table relating soil consistency to unconfined compression strength, standard penetration resistance in blows per foot (305 mm), and unit weight in kN/m³. N = 6 falls in the "Soft" band.',
    ),
    ...solved(32, 'C', 'σ̂y = 75', 504),
  },

  // ── Item 33 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q33',
    number: 33,
    pageNumber: 490,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Geotechnical — Atterberg Limit Tests',
    text: 'Atterberg limit tests is done on aggregates that pass through what sieve size?',
    options: opts('20', '40', '60', '30'),
    ...solved(33, 'B', 'No. 40 sieve (0.425 mm)', 504),
  },

  // ── Item 34 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q34',
    number: 34,
    pageNumber: 491,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 6 — Equivalent Horizontal Permeability',
    text:
      SIT6 +
      '\n\nEvaluate the equivalent coefficient of permeability for flow in the horizontal direction, in cm/day.',
    options: opts('3.456', '4.536', '6.345', '4.536'),
    ...solved(
      34,
      'A',
      'keq = 3.456 cm/day',
      504,
      504,
      'The booklet prints the same value, 4.536, for both choice B and choice D.',
    ),
  },

  // ── Item 35 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q35',
    number: 35,
    pageNumber: 491,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 6 — Flow Rate per Metre Width',
    text:
      SIT6 +
      '\n\nObtain the rate of flow per meter width of the deposit, in cubic centimeters per second if the hydraulic gradient for the soil formation is 0.75.',
    options: opts('3.2', '3.6', '4.5', '2.8'),
    ...solved(35, 'B', 'Q = 3.6 cm³/s', 505),
  },

  // ── Item 36 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q36',
    number: 36,
    pageNumber: 491,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 6 — Aquifer Discharge',
    text: SIT6 + '\n\nEvaluate the discharge of the aquifer in cubic meters per day.',
    options: opts('0.389', '0.242', '0.226', '0.311'),
    ...solved(36, 'D', 'Q = 0.311 m³/day', 505),
  },
];

import { Question } from '../../../types/exam';
import { solved, opts } from './may2016Helpers';

/**
 * HPGE — May 2016, items 26–38.
 *
 * Closes Situation 5, then the full-width rectangular channel (Situation 6), the
 * phase relationships of a soil sample, and the consolidation, permeability and
 * clay-consistency items that follow.
 */
export const HPGE_MAY2016_PART3: Question[] = [
  // ── Item 26 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q26',
    number: 26,
    pageNumber: 280,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 5 — Mean Velocity',
    text: 'Situation 5 (continued) – What is the mean velocity of flow in m/s?',
    options: opts('0.652', '0.479', '0.874', '0.308'),
    ...solved(26, 'C', '$v = 0.8745\\text{ m/s}$ (Option C)', 292),
  },

  // ── Item 27 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q27',
    number: 27,
    pageNumber: 280,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 5 — Service Area',
    text: 'Situation 5 (continued) – If the canal will serve clay-loam rice land, determine the area (in hectares) it can serve if the duty of water per hectare is 3 L/s.',
    options: opts('798', '897', '879', '978'),
    ...solved(27, 'C', 'Service area $= 878.9$ hectares (Option C)', 292),
  },

  // ── Item 28 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q28',
    number: 28,
    pageNumber: 280,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 6 — Mean Velocity of a Rectangular Channel',
    text: 'Situation 6 – A rectangular channel 6 m wide by 1 m deep is laid on a slope of 0.001 and has a roughness coefficient of 0.013.\n\nWhat is the mean velocity of flow (m/s) when the canal is full?',
    options: opts('3.01', '2.75', '2.01', '2.13'),
    ...solved(28, 'C', '$v = 2.008\\text{ m/s}$ (Option C)', 293),
  },

  // ── Item 29 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q29',
    number: 29,
    pageNumber: 280,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 6 — Channel Capacity',
    text: 'Situation 6 (continued) – What is the maximum capacity of the channel in m³/s?',
    options: opts('16.51', '18.09', '12.05', '12.79'),
    ...solved(29, 'C', '$Q = 12.048\\text{ m}^3/\\text{s}$ (Option C)', 293),
  },

  // ── Item 30 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q30',
    number: 30,
    pageNumber: 280,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 6 — Most Efficient Section',
    text: 'Situation 6 (continued) – If the most efficient rectangular section is used, what depth of canal is required for the same discharge, slope and roughness coefficient?',
    options: opts('1.85 m', '1.67 m', '1.75 m', '1.54 m'),
    ...solved(30, 'B', '$d = 1.671\\text{ m}$ (Option B)', 293),
  },

  // ── Item 31 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q31',
    number: 31,
    pageNumber: 280,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Soil Properties — Void Ratio',
    text: 'A soil sample has a water content of 15 percent and a moist unit weight of 18 kN/m³. The specific gravity of the solids is 2.65. Obtain the void ratio of the soil.',
    options: opts('0.523', '0.662', '0.487', '0.661'),
    ...solved(31, 'D', '$e = 0.661$ (Option D)', 293),
  },

  // ── Item 32 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q32',
    number: 32,
    pageNumber: 281,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 7 — Specific Gravity of Solids',
    text: 'Situation 7 – A soil sample has a dry unit weight of 17 kN/m³ and a void ratio of 0.60.\n\nEvaluate the specific gravity of the soil solids.',
    options: opts('2.75', '2.58', '2.64', '2.65'),
    ...solved(32, 'A', '$G_s = 2.773$ (Option A)', 294),
  },

  // ── Item 33 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q33',
    number: 33,
    pageNumber: 281,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 7 — Saturated Unit Weight',
    text: 'Situation 7 (continued) – Obtain the unit weight of the sample, in kN/m³, when fully saturated.',
    options: opts('20.68', '21.36', '19.62', '18.62'),
    ...solved(33, 'A', '$\\gamma_{sat} = 20.679\\text{ kN/m}^3$ (Option A)', 294),
  },

  // ── Item 34 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q34',
    number: 34,
    pageNumber: 281,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 7 — Critical Hydraulic Gradient',
    text: 'Situation 7 (continued) – Obtain the hydraulic gradient of the soil at critical condition.',
    options: opts('1.45', '1.11', '1.38', '1.23'),
    ...solved(34, 'B', '$i_c = 1.108$ (Option B)', 294),
  },

  // ── Item 35 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q35',
    number: 35,
    pageNumber: 281,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Clay Consistency',
    text: 'A cohesive soil deposit is considered soft if the unconfined compression strength, in kPa, is between:',
    options: opts('0 to 24', '48 to 96', '96 to 192', '24 to 48'),
    ...solved(
      35,
      'A',
      '$q_u = 0$ to $24\\text{ kPa}$ (Option A)',
      294,
      294,
      'The printed key marks A, the 0–24 kPa band. The booklet\'s own solution page tabulates *undrained shear strength* instead — soft clay $c = 12$ to 24 kPa, medium 24 to 48, stiff 48 to 96, very stiff 96 to 192, hard 192 to 383 — and since $q_u = 2c$ that reads as $q_u = 24$ to 48 kPa, which is option D. Key and table therefore disagree; the app grades the printed key.',
    ),
  },

  // ── Item 36 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q36',
    number: 36,
    pageNumber: 281,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Consolidation — Thickness Change',
    text: 'A layer of soft clay having an initial void ratio of 2.0 is 12.5 m thick. Under a compressive load applied above it, the void ratio decreased by one-half. Evaluate the reduction in the thickness of the clay layer, in m.',
    options: opts('4.32', '4.58', '4.78', '4.17'),
    ...solved(36, 'D', '$\\Delta H = 4.167\\text{ m}$ (Option D)', 294),
  },

  // ── Item 37 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q37',
    number: 37,
    pageNumber: 281,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Consolidation — Thickness Change',
    text: 'A layer of soft clay having an initial void ratio of 1.50 is 15 m thick. Under a compressive load applied above it, the void ratio decreased by one-half. Evaluate the reduction in the thickness of the clay layer in meters.',
    options: opts('4.0', '5.0', '5.5', '4.5'),
    ...solved(37, 'D', '$\\Delta H = 4.5\\text{ m}$ (Option D)', 295),
  },

  // ── Item 38 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q38',
    number: 38,
    pageNumber: 281,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Permeability — Falling Head Test',
    text: 'The permeameter in a falling head permeability test setup involves a cylindrical soil sample 50 mm in diameter and 200 mm in height. The hydraulic head in the 10-mm diameter standpipe through which test water passed dropped from 900 mm to 500 mm in one minute of observation. In that duration, the water collected in the graduated cylinder was recorded at 1.5 liters. Evaluate the coefficient of permeability of the soil sample in cm/s.',
    options: opts('0.00857', '0.00724', '0.00784', '0.00932'),
    ...solved(38, 'C', '$k = 0.00784\\text{ cm/s}$ (Option C)', 295),
  },
];

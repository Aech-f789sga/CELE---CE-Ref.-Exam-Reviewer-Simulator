import { Question } from '../../../types/exam';
import { hpgeMay2018Figure } from '../../hpgeMay2018Images';
import { opts, solved } from './may2018Helpers';

/**
 * HPGE May 2018, items 27-38 — reading three gradation curves, the weight-volume
 * relationships of a moist soil, effective stress under three water-table
 * positions, consolidation settlement, and the flow and seepage velocity through
 * a confined aquifer.
 */
export const HPGE_MAY2018_PART3: Question[] = [
  // ── Situation 6 ───────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q27',
    number: 27,
    pageNumber: 693,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Grain-Size Distribution',
    text: 'Situation 6 — Refer to the figure shown.\n\n(1) Determine the percentage of sand of Soil A.',
    options: opts('98%', '92%', '95%', '85%'),
    figureSvg: hpgeMay2018Figure(
      'fig_q27_gradation',
      'Gradation curves for soils A, B and C plotted as percent finer by weight against particle diameter on a logarithmic scale, with the gravel, sand, silt and clay boundaries marked.',
    ),
    ...solved(27, 'A', '98%'),
  },
  {
    id: 'hpge-may2018-q28',
    number: 28,
    pageNumber: 694,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Grain-Size Distribution',
    text: '(2) Determine the percentage of silt of Soil B.',
    options: opts('45%', '33%', '62%', '75%'),
    ...solved(28, 'B', '33%'),
  },
  {
    id: 'hpge-may2018-q29',
    number: 29,
    pageNumber: 694,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Grain-Size Distribution',
    text: '(3) Determine the percentage of gravel of Soil C.',
    options: opts('0%', '5%', '2%', '10%'),
    ...solved(29, 'A', '0%'),
  },

  // ── Situation 7 ───────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q30',
    number: 30,
    pageNumber: 694,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Weight-Volume Relationships',
    text: 'Situation 7 — The bulk unit weight of the soil is $18\\ \\text{kN/m}^3$, the specific gravity of solids is 2.5 and the moisture content is 35%. Evaluate the following:\n\n(1) The void ratio.',
    options: opts('0.71', '0.96', '0.84', '0.25'),
    ...solved(30, 'C', '0.8394'),
  },
  {
    id: 'hpge-may2018-q31',
    number: 31,
    pageNumber: 694,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Weight-Volume Relationships',
    text: '(2) The dry unit weight in $\\text{kN/m}^3$.',
    options: opts('13.33', '15.42', '14.22', '12.07'),
    ...solved(31, 'A', '13.33 kN/m³'),
  },
  {
    id: 'hpge-may2018-q32',
    number: 32,
    pageNumber: 694,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Weight-Volume Relationships',
    text: '(3) The saturated unit weight in $\\text{kN/m}^3$.',
    options: opts('20.98', '16.45', '18.63', '17.81'),
    ...solved(32, 'D', '17.81 kN/m³'),
  },

  // ── Situation 8 ───────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q33',
    number: 33,
    pageNumber: 694,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Effective Stress',
    text: 'Situation 8 — An 8.2-m-thick clay layer is overlain by a 15.2-m-thick sand layer. The top of the sand layer is at the ground surface. The sand layer has dry unit weight of $18.2\\ \\text{kN/m}^3$, saturated unit weight of $21.2\\ \\text{kN/m}^3$, and degree of saturation of 30%. The clay layer have saturated unit weight of $18.78\\ \\text{kN/m}^3$.\n\n(1) Determine the effective pressure at the mid-height of the clay if the ground water table is located at the ground surface.',
    options: opts('210 kPa', '313 kPa', '262 kPa', '196 kPa'),
    ...solved(33, 'A', '209.9 kPa'),
  },
  {
    id: 'hpge-may2018-q34',
    number: 34,
    pageNumber: 694,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Effective Stress',
    text: '(2) Determine the effective pressure at the mid-height of the clay if the ground water table is located 7.6 m below the surface of the sand, with degree of saturation of 30% for sand above water table.',
    options: opts('313 kPa', '210 kPa', '196 kPa', '269 kPa'),
    ...solved(
      34,
      'D',
      '268.5 kPa',
      'The sand above the water table cannot be taken as dry here: the stem fixes $S = 30\\%$, so the booklet solves the moist unit weight from $\\gamma_{sat}$ and the dry unit weight first and gets $19.1\\ \\text{kN/m}^3$.',
    ),
  },
  {
    id: 'hpge-may2018-q35',
    number: 35,
    pageNumber: 694,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Effective Stress',
    text: '(3) Determine the effective pressure at the mid-height of the clay is there is no water table at the sand stratum with degree of saturation of 30% for sand above water table.',
    options: opts('196 kPa', '262 kPa', '327 kPa', '210 kPa'),
    ...solved(
      35,
      'C',
      '327.1 kPa',
      'With no water table anywhere the pore pressure is zero, yet the booklet still takes the clay as saturated and uses its buoyant unit weight $18.78 - 9.81 = 8.97\\ \\text{kN/m}^3$ for the 4.1 m of clay; the sand is taken at the moist $19.1\\ \\text{kN/m}^3$ found in item 34.',
    ),
  },

  // ── Item 36 ───────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q36',
    number: 36,
    pageNumber: 694,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Consolidation Settlement',
    text: 'Given the following data of a clay layer:\n\n| | |\n| --- | --- |\n| $H = 8\\ \\text{m}$ | $P_o = 200\\ \\text{kPa}$ |\n| $C_c = 0.318$ | $\\Delta P = 300\\ \\text{kPa}$ |\n| $e = 1.138$ | |\n\nObtain the settlement of the normally consolidated clay.',
    options: opts('360 mm', '474 mm', '425 mm', '389 mm'),
    ...solved(36, 'B', '473.51 mm'),
  },

  // ── Situation 9 ───────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q37',
    number: 37,
    pageNumber: 695,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Well Hydraulics',
    text: 'Situation 9 — A confined aquifer is shown in the figure. This aquifer has a source of recharge located as shown. The hydraulic conductivity of the aquifer is 50 m/day with a porosity of 25%. The piezometric (head) surface in the two observation wells 1000 m apart are at elevation 75 m and 65 m, respectively from the common datum. The aquifer has an average thickness of 30 m and an average width of 4 km.\n\n(1) Determine the nearest value to the rate of flow of water through the aquifer, in cubic meters per day.',
    options: opts('600,000', '50,000', '60,000', '500,000'),
    figureSvg: hpgeMay2018Figure(
      'fig_q37_aquifer',
      'Confined aquifer diagram: a recharge source feeds an aquifer between two observation wells 1000 m apart with piezometric heads El. 75 m and El. 65 m; the aquifer is 30 m thick and 4,000 m wide.',
    ),
    ...solved(37, 'C', '60,000 m³/day'),
  },
  {
    id: 'hpge-may2018-q38',
    number: 38,
    pageNumber: 695,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Well Hydraulics',
    text: '(2) Determine the nearest value to the seepage velocity in m/day.',
    options: opts('4', '40', '20', '2'),
    ...solved(38, 'D', '2 m/day'),
  },
];

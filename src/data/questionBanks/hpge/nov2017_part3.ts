import { Question } from '../../../types/exam';
import { hpgeNov2017Figure } from '../../hpgeNov2017Images';
import { solved, opts } from './nov2017Helpers';

const SIT8 =
  'Situation 8 – Given the particle distribution curve of three soils A, B, and C.';

const SIT8_FIG = hpgeNov2017Figure(
  'fig_gradation',
  'Semi-logarithmic particle-size distribution chart with percent finer by weight on the vertical axis and particle diameter in millimetres on the horizontal axis, carrying three curves labelled A, B and C.',
);

const SIT9 =
  'Situation 9 – Following are the results of a sieve analysis.\n\n' +
  '| Sieve No. | Diameter (mm) | Percent Passing |\n' +
  '| --- | --- | --- |\n' +
  '| 4 | 4.750 | 100 |\n' +
  '| 10 | 2.000 | 95 |\n' +
  '| 40 | 0.425 | 74 |\n' +
  '| 80 | 0.180 | 38 |\n' +
  '| 100 | 0.150 | 10 |\n' +
  '| 200 | 0.075 | 2 |\n' +
  '| Pan | — | 0 |\n\n' +
  'Plot the particle-size distribution curve and obtain the following:';

const SIT9_SIEVE_FIG = hpgeNov2017Figure(
  'fig_sieve',
  'Sieve analysis table listing sieve number, diameter in millimetres and percent passing for sieves 4, 10, 40, 80, 100 and 200 plus the pan.',
);

const SIT9_USCS_FIG = hpgeNov2017Figure(
  'fig_uscs',
  'Unified Soil Classification System chart of group symbols and criteria, with the Casagrande plasticity chart beneath it plotting plasticity index against liquid limit.',
);

const SIT10 =
  'Situation 10 – A 7.6 m thick clay layer is underlain by 15.2 m of sand to the ground. The water table is level with the ground surface. The saturated unit weight of sand is 21.2 kN/m³ and its dry unit weight is 18.2 kN/m³. The saturated unit weight of clay is 18.8 kN/m³. The water table is lowered to 7.6 m below the ground and the sand above the water table have degree of saturation decreased by 20%.';

const SIT11 =
  'Situation 11 – A 300-mm-diameter well penetrates 27 m below the static water table. After 24 hours of pumping 69 liters per second, the water table in two observation wells located 35 m and 95 m from the well showed drawdowns of 1.1 m and 0.5 m, respectively.';

export const HPGE_NOV2017_PART3: Question[] = [
  // ── Item 27 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q27',
    number: 27,
    pageNumber: 591,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Grain-Size Distribution',
    text: SIT8 + '\n\n(1) Determine the percentage of gravel in Soil A.',
    figureSvg: SIT8_FIG,
    figureCaption: 'Situation 8 — particle distribution curves for soils A, B and C',
    options: opts('1%', '99%', '2%', '98%'),
    ...solved(27, 'C', '2%'),
  },

  // ── Item 28 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q28',
    number: 28,
    pageNumber: 592,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Grain-Size Distribution',
    text: SIT8 + '\n\n(2) Determine the percentage of sand in Soil B.',
    figureSvg: SIT8_FIG,
    figureCaption: 'Situation 8 — particle distribution curves for soils A, B and C',
    options: opts('40%', '59%', '99%', '62%'),
    ...solved(28, 'B', '59%'),
  },

  // ── Item 29 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q29',
    number: 29,
    pageNumber: 592,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Grain-Size Distribution',
    text: SIT8 + '\n\n(3) Determine the percentage of silt in Soil C.',
    figureSvg: SIT8_FIG,
    figureCaption: 'Situation 8 — particle distribution curves for soils A, B and C',
    options: opts('56%', '68%', '12%', '32%'),
    ...solved(29, 'A', '56%'),
  },

  // ── Item 30 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q30',
    number: 30,
    pageNumber: 592,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Sieve Analysis',
    text: SIT9 + '\n\n(1) The effective grain size.',
    figureSvg: SIT9_SIEVE_FIG,
    figureCaption: 'Situation 9 — sieve analysis results',
    options: opts('0.18 mm', '0.12 mm', '0.22 mm', '0.15 mm'),
    ...solved(30, 'D', '0.15 mm'),
  },

  // ── Item 31 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q31',
    number: 31,
    pageNumber: 593,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Uniformity Coefficient',
    text: SIT9 + '\n\n(2) The uniformity coefficient.',
    figureSvg: SIT9_SIEVE_FIG,
    figureCaption: 'Situation 9 — sieve analysis results',
    options: opts('1.8', '0.8', '3.2', '1.6'),
    ...solved(31, 'A', '1.8'),
  },

  // ── Item 32 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q32',
    number: 32,
    pageNumber: 593,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — USCS Classification',
    text: SIT9 + '\n\n(3) The classification of the soil according to USCS.',
    figureSvg: SIT9_USCS_FIG,
    figureCaption: 'Unified Soil Classification System and plasticity chart',
    options: opts('GW', 'SW', 'GP', 'SP'),
    ...solved(32, 'D', 'SP'),
  },

  // ── Item 33 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q33',
    number: 33,
    pageNumber: 594,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Effective Stress',
    text:
      SIT10 +
      '\n\n(1) Calculate the effective pressure at the midheight of the clay layer before the lowering of the water table.',
    options: opts('207.3 kPa', '324.3 kPa', '256.4 kPa', '393.7 kPa'),
    ...solved(33, 'A', '207.29 kPa'),
  },

  // ── Item 34 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q34',
    number: 34,
    pageNumber: 594,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Effective Stress',
    text:
      SIT10 +
      '\n\n(2) Calculate the effective pressure at the midheight of the clay layer after lowering of the water table.',
    options: opts('261.4 kPa', '277.3 kPa', '236.8 kPa', '297.4 kPa'),
    ...solved(34, 'B', '277.29 kPa'),
  },

  // ── Item 35 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q35',
    number: 35,
    pageNumber: 594,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Effective Stress',
    text:
      SIT10 +
      '\n\n(3) Calculate the effective pressure at the midheight of the clay layer when the water table is at the clay surface and assuming that all sand has the same degree of saturation.',
    options: opts('314.7 kPa', '425.2 kPa', '347.3 kPa', '369.8 kPa'),
    ...solved(35, 'C', '347.28 kPa'),
  },

  // ── Item 36 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q36',
    number: 36,
    pageNumber: 594,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Consolidation Settlement',
    text:
      'Evaluate the plastic settlement, in meters, in a layer of plastic clay due to an increase of pressure caused by loads above it under the following conditions:\n\n' +
      'Initial intergranular pressure $= 180\\ \\text{kPa}$\n' +
      'Increase in intergranular pressure $= 140\\ \\text{kPa}$\n' +
      'Thickness of the clay layer $= 8\\ \\text{m}$\n' +
      'Coefficient of consolidation $= 0.3$\n' +
      'Void ratio of the clay $= 1.134$',
    options: opts('0.281', '0.325', '0.247', '0.397'),
    ...solved(36, 'A', '0.281 m'),
  },

  // ── Item 37 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q37',
    number: 37,
    pageNumber: 594,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Well Hydraulics',
    text: SIT11 + '\n\n(1) Calculate the discharge in cubic meters per day.',
    options: opts('5962', '5692', '5269', '6259'),
    ...solved(37, 'A', '5,961.6 m³/day'),
  },

  // ── Item 38 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q38',
    number: 38,
    pageNumber: 594,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Permeability',
    text: SIT11 + '\n\n(2) Calculate the coefficient of permeability of the soil.',
    options: opts('68.7 m/day', '46.3 m/day', '55.4 m/day', '60.27 m/day'),
    ...solved(38, 'D', '60.27 m/day'),
  },

  // ── Item 39 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q39',
    number: 39,
    pageNumber: 594,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Geotechnical — Transmissivity',
    text: SIT11 + '\n\n(3) Determine the value of the transmissivity of the soil in m²/day.',
    options: opts('1524 m²/day', '1579 m²/day', '1724 m²/day', '1369 m²/day'),
    ...solved(39, 'B', '1,579 m²/day'),
  },
];

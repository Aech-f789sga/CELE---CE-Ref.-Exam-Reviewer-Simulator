import { Question } from '../../../types/exam';
import { solved, opts } from './nov2017Helpers';
import { psadNov2017Figure } from '../../psadNov2017Images';

/**
 * Situations 7-12, items 19-36.
 */

const SIT7 =
  'Situation 7 – A rectangular bar 50 mm × 75 mm in cross-section is subjected to a tensile force P = 200 kN as shown in Figure SMM14.78. Plane A-A makes an angle of 15° with the x-axis.';

const SIT8 =
  'Situation 8 – A hollow cylindrical vessel 1.8 m high has an outside diameter of 450 mm and an inside diameter of 350 mm. The vessel is subjected to a compressive force of 1200 kN throughout its length. Given E = 110 GPa.';

const SIT9 =
  'Situation 9 – An 18-m long prestressed pile weighing 3.8 kN/m is to be lifted by two cables.';

const SIT10 =
  'Situation 10 – Refer to the figure shown. Given: L = 6 m; S₁ = S₂ = S₃ = 2.6 m. Factored loads in beam KLMNO: Dead load = 15 kN/m; Live load = 19 kN/m. For maximum stresses, apply pattern loading for live load. Given in Figure 1-A are the possible load patterns and corresponding reactions, shears, and moments.';

const SIT11 =
  'Situation 11 – Given the following data for the wall shown in the Figure. Dimensions: a = 0.3 m; b = 0.60 m; c = 0.60 m; d = 3.5 m; e = 5 m; H = 5.5 m. Unit weight of soil = 17 kN/m³; Unit weight of concrete = 24 kN/m³. Active earth pressure coefficient = 1/3; Coefficient of friction at the base = 0.40. Consider 1 meter length of wall perpendicular to the paper.';

const SIT12 =
  'Situation 12 – Refer to the footing shown: Given: Footing dimension, L × W = 4 m × 4.5 m; Column dimension, a × b = 0.6 m × 0.75 m; Footing thickness, h = 0.75 m; Soil thickness, H = 1.5 m; Unit weight of soil = 17 kN/m³; Unit weight of concrete = 24 kN/m³. Loads: D — P = 800 kN, M_y = 48 kN·m; L — P = 740 kN, M_y = 28 kN·m; E — P = ---, M_y = 180 kN·m.';

export const PSAD_NOV2017_PART2: Question[] = [
  // ── Item 19 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q19',
    number: 19,
    pageNumber: 619,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Mechanics — Stresses on an Inclined Plane',
    text: `${SIT7}\n\nWhat is the tensile stress (in MPa) on plane A-A?`,
    figureSvg: psadNov2017Figure(
      'fig_s7_bar',
      'Rectangular bar under axial load P with plane A-A inclined to the x-axis',
    ),
    options: opts('13.3', '18.7', '49.8', '52.4'),
    ...solved(19, 'C', '49.76 MPa ≈ 49.8 MPa'),
  },

  // ── Item 20 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q20',
    number: 20,
    pageNumber: 619,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Mechanics — Stresses on an Inclined Plane',
    text: `${SIT7}\n\nWhat is the shear stress (in MPa) on plane A-A?`,
    options: opts('52.4', '49.8', '13.3', '18.7'),
    ...solved(20, 'C', '13.33 MPa ≈ 13.3 MPa'),
  },

  // ── Item 21 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q21',
    number: 21,
    pageNumber: 619,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Mechanics — Stresses on an Inclined Plane',
    text: `${SIT7}\n\nAt what angle θ (degrees) of plane A-A is the shear stress maximum?`,
    options: opts('30°', '90°', '60°', '45°'),
    ...solved(21, 'D', '45°'),
  },

  // ── Item 22 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q22',
    number: 22,
    pageNumber: 619,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Mechanics — Axial Deformation',
    text: `${SIT8}\n\nDetermine the compressive stress (MPa) in the cylinder.`,
    options: opts('24.5', '19.1', '7.5', '12.6'),
    ...solved(22, 'B', '19.1 MPa'),
  },

  // ── Item 23 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q23',
    number: 23,
    pageNumber: 619,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Mechanics — Axial Deformation',
    text: `${SIT8}\n\nCalculate the contraction of the vessel in mm.`,
    options: opts('0.425', '0.313', '0.364', '0.521'),
    ...solved(23, 'B', '0.31 mm'),
  },

  // ── Item 24 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q24',
    number: 24,
    pageNumber: 619,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Mechanics — Axial Deformation',
    text: `${SIT8}\n\nCalculate the compressive force (kN) if the strain is 0.0003 mm/mm.`,
    options: opts('2073', '2145', '1952', '1742'),
    ...solved(24, 'A', '2073.45 kN ≈ 2073 kN'),
  },

  // ── Item 25 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q25',
    number: 25,
    pageNumber: 619,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Mechanics — Lifting Stresses in a Pile',
    text: `${SIT9}\n\nAt what distance (m) from the pile ends must each cable be placed such that the maximum absolute value of the bending moment in the pile is as small as possible.`,
    options: opts('3', '4.25', '3.73', '4.5'),
    ...solved(25, 'C', '3.728 m ≈ 3.73 m'),
  },

  // ── Item 26 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q26',
    number: 26,
    pageNumber: 619,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Mechanics — Lifting Stresses in a Pile',
    text: `${SIT9}\n\nAt what distance (m) from the pile ends must each cable be placed such that the maximum absolute value of the shear in the pile is as small as possible.`,
    options: opts('3.73', '4.25', '4.5', '3'),
    ...solved(26, 'C', '4.5 m'),
  },

  // ── Item 27 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q27',
    number: 27,
    pageNumber: 620,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Mechanics — Lifting Stresses in a Pile',
    text: `${SIT9}\n\nIf the pile is lifted by a cable placed 3 m from one end, while the other end is on the ground, compute the maximum moment (kN·m) developed in the pile.`,
    options: opts('125.4', '98.5', '82.3', '108.4'),
    ...solved(27, 'B', '98.496 kN·m ≈ 98.5 kN·m'),
  },

  // ── Item 28 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q28',
    number: 28,
    pageNumber: 620,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'RC Design — Pattern Loading of a Continuous Beam',
    text: `${SIT10}\n\nCalculate the maximum factored moment (kN·m) at L in beam LM.`,
    figureSvg:
      psadNov2017Figure(
        'fig_s10_grid',
        'Floor framing plan with four bays of L and three bays of S, beams labelled A to T',
      ) +
      psadNov2017Figure(
        'fig_code_1a_top',
        'Figure 1-A: continuous beam of four equal spans, third span unloaded',
      ) +
      psadNov2017Figure(
        'fig_code_1a_bot',
        'Figure 1-A continued: load on first and third spans, and all spans loaded',
      ),
    options: opts('132.4', '124.1', '144.7', '140.3'),
    ...solved(28, 'D', '−140.256 kN·m ≈ −140.3 kN·m'),
  },

  // ── Item 29 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q29',
    number: 29,
    pageNumber: 620,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'RC Design — Pattern Loading of a Continuous Beam',
    text: `${SIT10}\n\nCalculate the maximum factored shear (kN) at span KLMNO.`,
    options: opts('130.4', '158.6', '136.8', '125.3'),
    ...solved(29, 'D', '125.31 kN ≈ 125.3 kN'),
  },

  // ── Item 30 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q30',
    number: 30,
    pageNumber: 620,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'RC Design — Pattern Loading of a Continuous Beam',
    text: `${SIT10}\n\nCalculate the maximum factored reaction (kN) at span KLMNO.`,
    options: opts('201.7', '242.3', '225.5', '323.3'),
    ...solved(30, 'B', '242.29 kN ≈ 242.3 kN'),
  },

  // ── Item 31 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q31',
    number: 31,
    pageNumber: 622,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Foundation — Retaining Wall Stability',
    text: `${SIT11}\n\nWhat value of total vertical reaction (kN) is needed to have a factor of safety against sliding of 1.5? Use μ = 0.4.`,
    figureSvg: psadNov2017Figure(
      'fig_s11_wall',
      'Cantilever retaining wall with dimensions a, b, c, d, e, f and H',
    ),
    options: opts('205.7', '389.5', '258.6', '321.4'),
    ...solved(31, 'D', '321.406 kN ≈ 321.4 kN'),
  },

  // ── Item 32 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q32',
    number: 32,
    pageNumber: 622,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Foundation — Retaining Wall Stability',
    text: `${SIT11}\n\nWhat value of total righting moment (kN·m) is needed to have a factor of safety against overturning of 2.0?`,
    options: opts('351.2', '332.8', '314.3', '295.8'),
    ...solved(32, 'C', '314.26 kN·m ≈ 314.3 kN·m'),
  },

  // ── Item 33 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q33',
    number: 33,
    pageNumber: 622,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Foundation — Retaining Wall Stability',
    text: `${SIT11}\n\nCompute the maximum moment (kN·m) on the stem of the wall.`,
    options: opts('118.1', '131.9', '111.1', '125'),
    ...solved(33, 'A', '118.06 kN·m ≈ 118.1 kN·m'),
  },

  // ── Item 34 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q34',
    number: 34,
    pageNumber: 623,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Foundation — Eccentric Footing Bearing Pressure',
    text: `${SIT12}\n\nDetermine the location (m) of the resultant column force on the footing measured from B.`,
    figureSvg: psadNov2017Figure(
      'fig_s12_footing',
      'Footing section with P, My, H and h, and plan with L, W, a, b, X and Y',
    ),
    options: opts('2.08', '0.17', '2.25', '1.68'),
    ...solved(34, 'A', '2.084 m ≈ 2.08 m'),
  },

  // ── Item 35 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q35',
    number: 35,
    pageNumber: 623,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Foundation — Eccentric Footing Bearing Pressure',
    text: `${SIT12}\n\nDetermine the maximum net soil pressure in kPa.`,
    options: opts('98.5', '112.6', '124.7', '104.5'),
    ...solved(35, 'D', '104.52 kPa ≈ 104.5 kPa'),
  },

  // ── Item 36 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q36',
    number: 36,
    pageNumber: 623,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Foundation — Eccentric Footing Bearing Pressure',
    text: `${SIT12}\n\nDetermine the minimum net soil pressure in kPa.`,
    options: opts('76.7', '52.7', '66.6', '89.3'),
    ...solved(36, 'C', '66.59 kPa ≈ 66.6 kPa'),
  },
];

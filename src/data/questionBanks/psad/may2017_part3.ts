import { Question } from '../../../types/exam';
import { psadMay2017Figure } from '../../psadMay2017Images';
import { solved, opts } from './may2017Helpers';

/** Situation 13 is printed once and shared by items 37-39. */
const SIT13 =
  'Situation 13 – A footing supports a 250-mm thick concrete wall. The footing is 350 mm thick and the allowable soil bearing pressure is 192 kPa. Concrete strength $f_c\' = 27.5\\ \\text{MPa}$ and steel yield strength $f_y = 415\\ \\text{MPa}$. Consider 1 m length of footing.';

/** Situation 14 is printed once and shared by items 40-42. */
const SIT14 =
  'Situation 14 – The figure shows a prestressed hollow core slab used for flooring of a library.\n\n' +
  'Given the following properties of the slab:\n\n' +
  '$A = 1.4 \\times 10^5\\ \\text{mm}^2$   $a = 1.20\\ \\text{m}$\n' +
  '$S = S_b = 6.8 \\times 10^6\\ \\text{mm}^3$   $b = 260\\ \\text{mm}$\n' +
  'Slab weight $= 2.7\\ \\text{kPa}$   Superimposed dead load $= 2\\ \\text{kPa}$\n' +
  'Live load $= 2.9\\ \\text{kPa}$\n\n' +
  'Prestressing force $= 820\\ \\text{kN}$ at $e = 63\\ \\text{mm}$ below N.A.\n\n' +
  'The slab is simply supported on a span of 8 m. Allowable stresses at service loads are 2.0 MPa in tension and 15.5 MPa in compression. Consider 15% loss of prestress at service loads.\n\n' +
  'Calculate the following:';

/** Situation 15 is printed once and shared by items 43-45. */
const SIT15 =
  'Situation 15 – The vertical member shown consist of two angles welded to the 8-mm-thick gusset plate.\n\n' +
  'Given the following data:\n\n' +
  'Angle size: 75 mm × 50 mm × 6 mm (long legs back-to-back)\n' +
  'Area of two angles $= 1438\\ \\text{mm}^2$\n' +
  'Size of weld $= 5\\ \\text{mm}$\n' +
  'Yield strength of steel, $F_y = 248\\ \\text{MPa}$\n' +
  'Allowable weld shear stress, $F_v = 124\\ \\text{MPa}$\n' +
  '$a = 25\\ \\text{mm}$';

/** Situation 16 is printed once and shared by items 46-48. */
const SIT16 =
  'Situation 16 – Two channels are welded at the tip of their flanges to form a box column.\n\n' +
  'Properties of one channel section:\n\n' +
  '$A = 5,690\\ \\text{mm}^2$   $t_w = 17\\ \\text{mm}$\n' +
  '$d = 254\\ \\text{mm}$   $x = 16.5\\ \\text{mm}$\n' +
  '$b_f = 77\\ \\text{mm}$   $I_x = 42.87 \\times 10^6\\ \\text{mm}^4$\n' +
  '$t_f = 11\\ \\text{mm}$   $I_y = 1.64 \\times 10^6\\ \\text{mm}^4$\n\n' +
  'The column is 6 m long hinged at both ends ($K = 1.0$). Use $F_y = 248\\ \\text{MPa}$.';

/** Situation 17 is printed once and shared by items 49-51. */
const SIT17 =
  'Situation 17 – A W 350 × 90 is used as a beam. Given the following data:\n\n' +
  'Properties of W350 × 90:\n\n' +
  '$b_f = 250\\ \\text{mm}$   $I_x = 266 \\times 10^6\\ \\text{mm}^4$\n' +
  '$d = 350\\ \\text{mm}$   $I_y = 44.5 \\times 10^6\\ \\text{mm}^4$\n' +
  '$t_f = 16\\ \\text{mm}$   $r_t = 69\\ \\text{mm}$\n' +
  '$t_w = 10\\ \\text{mm}$   $A = 11,550\\ \\text{mm}^2$\n\n' +
  'Yield strength of steel, $F_y = 248\\ \\text{MPa}$\n' +
  'Allowable flexural stress, $F_b = 0.6F_y$\n' +
  'Allowable web shear stress, $F_v = 0.4F_y$\n' +
  'Allowable horizontal shear stress $= 105\\ \\text{MPa}$';

export const PSAD_MAY2017_PART3: Question[] = [
  // ── Item 35 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q35',
    number: 35,
    pageNumber: 513,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Poles — Wind Load',
    text: 'Compute the maximum moment (kN-m) at the base of the pole.',
    options: opts('45.7', '35.6', '52.7', '24.8'),
    ...solved(35, 'B', 'M_max = 35.64 kN-m'),
  },

  // ── Item 36 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q36',
    number: 36,
    pageNumber: 513,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Poles — Torsional Shear',
    text: 'Compute the maximum shearing stress (MPa) at the base of the pole.',
    options: opts('0.85', '1.32', '0.24', '1.16'),
    ...solved(36, 'D', 'τ_max = 1.16 MPa'),
  },

  // ── Item 37 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q37',
    number: 37,
    pageNumber: 513,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Footings — Uplift',
    text: SIT13 + '\n\nIf the footing is subjected to a moment of 126 kN-m and a total vertical load of 280 kN, find the minimum width (m) of the footing to prevent uplift.',
    options: opts('1.0', '2.7', '2.3', '1.4'),
    ...solved(37, 'B', 'B = 6e = 2.7 m'),
  },

  // ── Item 38 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q38',
    number: 38,
    pageNumber: 513,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Footings — Uplift',
    text: 'If the footing is subjected to a resisting moment of 440 kN-m, overturning moment of 260 kN-m, and total vertical load of 265 kN, find the minimum width (m) of the footing to prevent uplift.',
    options: opts('2.1', '4.1', '2.9', '1.4'),
    ...solved(38, 'A', 'B = 3x = 2.04 m'),
  },

  // ── Item 39 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q39',
    number: 39,
    pageNumber: 513,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Footings — Soil Bearing Pressure',
    text: 'If the footing is 3 m wide and subjected to a resisting moment of 500 kN-m, overturning moment of 265 kN-m, and total vertical load of 335 kN, compute the maximum soil bearing pressure in kPa.',
    options: opts('290', '179', '319', '223'),
    ...solved(39, 'C', 'q = 318.4 kPa'),
  },

  // ── Item 40 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q40',
    number: 40,
    pageNumber: 514,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Prestressed Concrete — Fibre Stress',
    text: SIT14 + '\n\nThe stress (in MPa) at the top fiber of the slab at the ends due to initial prestress force.',
    figureSvg: psadMay2017Figure(
      'fig14_slab',
      'Cross-section of a prestressed hollow core slab, width a and depth b, with four circular voids.',
    ),
    options: opts('5.92C', '13.45C', '1.74 T', '7.32C'),
    ...solved(40, 'C', '+1.74 MPa (tension)'),
  },

  // ── Item 41 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q41',
    number: 41,
    pageNumber: 514,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Prestressed Concrete — Fibre Stress',
    text: 'The stress (in MPa) at the top fiber of the slab at midspan due to loads and prestress force.',
    options: opts('9.25C', '10.8T', '13.4T', '7.5C'),
    ...solved(41, 'A', '−9.25 MPa (compression)'),
  },

  // ── Item 42 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q42',
    number: 42,
    pageNumber: 514,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Prestressed Concrete — Service Load',
    text: 'The maximum total load (in kN/m) including its own weight, that the slab can be subjected to if the allowable stresses at service loads are not to be exceeded.',
    options: opts('14.4', '12.2', '10.2', '11.4'),
    ...solved(42, 'D', 'w_max = 11.421 kN/m'),
  },

  // ── Item 43 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q43',
    number: 43,
    pageNumber: 515,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Welded Connections — Member Capacity',
    text: SIT15 + '\n\nDetermine the capacity of the vertical member in kN.',
    figureSvg: psadMay2017Figure(
      'fig15_gusset',
      'A vertical member made of two angles welded to an 8-mm gusset plate, loaded by an axial force P, with weld lengths L1 and L2 and leg dimension a.',
    ),
    options: opts('196', '213', '426', '258'),
    ...solved(43, 'B', 'P = 213.974 kN'),
  },

  // ── Item 44 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q44',
    number: 44,
    pageNumber: 515,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Welded Connections — Weld Length',
    text: 'If $P = 157\\ \\text{kN}$, determine the length of weld $L_1$ (mm) such that each weld have equal shear stress. Neglect end returns.',
    options: opts('120', '55', '110', '60'),
    ...solved(44, 'A', 'L_1 = 119.4 mm'),
  },

  // ── Item 45 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q45',
    number: 45,
    pageNumber: 515,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Welded Connections — Combined Shear and Torsion',
    text: 'If $L_1 = 130\\ \\text{mm}$ and $L_2 = 50\\ \\text{mm}$, determine the safe load P (kN) based on weld capacity.',
    options: opts('124', '196', '157', '144'),
    ...solved(45, 'D', 'P = 144.3 kN'),
  },

  // ── Item 46 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q46',
    number: 46,
    pageNumber: 515,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Compression Members — Box Column Buckling',
    text: SIT16 + '\n\nCalculate the axial load P (kN) to avoid buckling of the column.',
    figureSvg: psadMay2017Figure(
      'fig16_boxcol',
      'Cross-section of a box column formed by two channels welded tip to tip, with the X and Y centroidal axes marked.',
    ),
    options: opts('2460', '2820', '2610', '2150'),
    ...solved(46, 'A', 'P_crit = 2,463.8 kN'),
  },

  // ── Item 47 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q47',
    number: 47,
    pageNumber: 515,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Compression Members — Yielding',
    text: 'Calculate the axial load P (kN) to avoid yielding of the column.',
    options: opts('2150', '2460', '2820', '2610'),
    ...solved(47, 'C', 'P_y = 2,822.2 kN'),
  },

  // ── Item 48 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q48',
    number: 48,
    pageNumber: 516,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Compression Members — NSCP Allowable Stress',
    text: 'Calculate the safe load P (kN) based on NSCP specifications.',
    options: opts('1230', '1060', '980', '750'),
    ...solved(48, 'B', 'P = 1,062 kN'),
  },

  // ── Item 49 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q49',
    number: 49,
    pageNumber: 516,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Steel Beams — Flexural Capacity',
    text: SIT17 + '\n\nCompute the flexural capacity (kN-m) of the beam.',
    options: opts('254', '226', '204', '289'),
    ...solved(49, 'B', 'M = 226.18 kN-m'),
  },

  // ── Item 50 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q50',
    number: 50,
    pageNumber: 516,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Steel Beams — Web Shear',
    text: 'Compute the web shear capacity (kN) of the beam.',
    options: opts('368', '347', '302', '351'),
    ...solved(50, 'B', 'V = 347.2 kN'),
  },

  // ── Item 51 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q51',
    number: 51,
    pageNumber: 516,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Steel Beams — Horizontal Shear',
    text: 'Compute the horizontal shear capacity (kN) at the neutral axis of the beam.',
    options: opts('302', '368', '351', '347'),
    ...solved(51, 'C', 'V = 351.58 kN'),
  },
];

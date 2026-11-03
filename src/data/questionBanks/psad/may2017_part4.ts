import { Question } from '../../../types/exam';
import { psadMay2017Figure } from '../../psadMay2017Images';
import { solved, opts } from './may2017Helpers';

/** Situation 18 is printed once and shared by items 52-54. */
const SIT18 =
  'Situation 18 – A W 300 × 97 beam is simply supported on a span of 10 m. The beam supports a superimposed load of 15 kN/m on its entire length and three 30-kN loads at its quarter points.\n\n' +
  'Properties of W300 × 97:\n\n' +
  '$d = 308\\ \\text{mm}$   $I_x = 221.8 \\times 10^6\\ \\text{mm}^4$\n' +
  '$b_f = 305\\ \\text{mm}$   $I_y = 72.4 \\times 10^6\\ \\text{mm}^4$\n' +
  '$t_w = 9.9\\ \\text{mm}$   $W = 97\\ \\text{kg/m}$\n' +
  '$t_f = 15.4\\ \\text{mm}$   $A = 12,323\\ \\text{mm}^2$';

/** Situation 19 is printed once and shared by items 55-57. */
const SIT19 =
  'Situation 19 – Refer to the figure shown.\n\n' +
  'Given: $L = 8\\ \\text{m}$\n$S_1 = S_2 = 2.5\\ \\text{m}$\n$S_3 = 3\\ \\text{m}$\n\n' +
  'Dead load (including concrete) $= 4.6\\ \\text{kPa}$\nLive load $= 4.8\\ \\text{kPa}$\n\n' +
  'For maximum stresses, apply the following:\n' +
  '1. Pattern loading for live load\n' +
  '2. Ultimate load combination, $U = 1.2D + 1.6L$\n\n' +
  'Given in Figure 1-A are the possible load patterns and corresponding reactions, shears, and moments.';

/** Situation 20 is printed once and shared by items 58-60. */
const SIT20 =
  'Situation 20 – Given the following data for the floor framing plan shown.\n\n' +
  'Dimensions:\n\n' +
  '$L_1 = L_2 = 6\\ \\text{m}$   Beam, $b \\times h = 350\\ \\text{mm} \\times 450\\ \\text{mm}$\n' +
  '$L_3 = 7\\ \\text{m}$   Slab thickness, $t = 100\\ \\text{mm}$\n' +
  '$S = 2.5\\ \\text{m}$   Columns: 400 mm × 400 mm\n\n' +
  'Loads:\n\n' +
  'Dead load $= 5.2\\ \\text{kPa}$ (including slab and beam weight)\n' +
  'Live load $= 3.8\\ \\text{kPa}$\n' +
  'Load combination, $U = 1.2D + 1.6L$';

/** Situation 21 is printed once and shared by items 61-63. */
const SIT21 =
  'Situation 21 – Given the following data for a circular column:\n\n' +
  'Column diameter $= 800\\ \\text{mm}$\n' +
  'Clear concrete cover to 12 mm ties bar $= 40\\ \\text{mm}$\n' +
  'Main longitudinal bars $= 8\\text{-}28\\ \\text{mm}$\n' +
  'Spacing of ties $= 70\\ \\text{mm}$\n' +
  'Reduction factor, $\\phi = 0.75$\n' +
  'Factored axial load $= 800\\ \\text{kN}$';

/** Situation 22 is printed once and shared by items 64-66. */
const SIT22 =
  'Situation 22 – The section of a T-beam is shown. The beam is reinforced with eight 28-mm-diameter tension bars and four 28-mm-diameter compression bars with $f_y = 415\\ \\text{MPa}$. The stirrups provided are 12 mm in diameter with $f_{yt} = 275\\ \\text{MPa}$. Clear concrete cover is 40 mm. $f_c\' = 21\\ \\text{MPa}$. The nominal shear stress of concrete section is 0.88 MPa. $h_1 = 143\\ \\text{mm}$, $h_2 = 457\\ \\text{mm}$, $a = 55\\ \\text{mm}$.';

export const PSAD_MAY2017_PART4: Question[] = [
  // ── Item 52 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q52',
    number: 52,
    pageNumber: 517,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Steel Beams — Bending Stress',
    text: SIT18 + '\n\nCalculate the maximum bending stress (MPa) in the beam.',
    options: opts('254', '243', '221', '189'),
    ...solved(52, 'B', 'f_b = 242.6 MPa'),
  },

  // ── Item 53 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q53',
    number: 53,
    pageNumber: 517,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Steel Beams — Average Web Shear',
    text: 'Calculate the maximum average shear stress (MPa) in the beam.',
    options: opts('40.9', '48.5', '38.4', '44.4'),
    ...solved(53, 'A', 'f_v,ave = 40.91 MPa'),
  },

  // ── Item 54 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q54',
    number: 54,
    pageNumber: 517,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Steel Beams — Horizontal Shear',
    text: 'Calculate the maximum horizontal web shear stress (MPa) at neutral axis.',
    options: opts('44.4', '38.4', '40.9', '48.5'),
    ...solved(54, 'A', 'f_v,max = 44.4 MPa'),
  },

  // ── Item 55 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q55',
    number: 55,
    pageNumber: 519,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Continuous Beams — Pattern Loading',
    text: SIT19 + '\n\nCalculate the maximum factored reaction (kN) at L.',
    figureSvg: psadMay2017Figure(
      'fig19_fig1a',
      'Figure 1-A: beam diagram and deflection for a continuous beam of four equal spans, giving reactions, shear and moment coefficients for the third span unloaded, first and third spans loaded, and all spans loaded.',
    ),
    options: opts('302', '217', '221', '290'),
    ...solved(
      55,
      'A',
      '302 kN (key)',
      'The booklet\'s own working computes $R_{t,max} = 1.143w_{du}L + 1.223w_{lu}L = 345.44\\ \\text{kN}$, which matches none of the printed choices. The key is A = 302. The stem also asks for the reaction "at L", but Figure 1-A labels the supports A–E; the 1.143/1.223 coefficients are those of support B, the first interior support.',
    ),
  },

  // ── Item 56 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q56',
    number: 56,
    pageNumber: 519,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Continuous Beams — Pattern Loading',
    text: 'Calculate the minimum factored reaction (kN) at O.',
    options: opts('38.6', '31', '68', '106'),
    ...solved(
      56,
      'A',
      'R_min = 38.602 kN',
      'The stem asks for the reaction "at O", but Figure 1-A labels the supports A–E. The working\'s coefficients ($0.393w_{du}L - 0.054w_{lu}L$) are those of the exterior support E, which the booklet itself calls the "Exterior support" in its Part 2 heading.',
    ),
  },

  // ── Item 57 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q57',
    number: 57,
    pageNumber: 519,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Continuous Beams — Pattern Loading',
    text: 'Calculate the maximum factored moment (kN-m) at L.',
    options: opts('163', '248', '244', '267'),
    ...solved(
      57,
      'D',
      'M_L,max = 266.93 kN-m',
      'The stem asks for the moment "at L", but Figure 1-A labels the supports A–E; the booklet\'s Part 3 heading calls it the "First interior support", i.e. support B.',
    ),
  },

  // ── Item 58 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q58',
    number: 58,
    pageNumber: 519,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Concrete Frames — Beam Moments',
    text: SIT20 + '\n\nCompute the moment (kN-m) at end G in beam GH.',
    figureSvg: psadMay2017Figure(
      'fig20_plan',
      'Floor framing plan on a 4 × 4 grid of columns labelled A to P, with bay spacings S, S, S vertically and L1, L2, L3 horizontally.',
    ),
    options: opts('71.6', '83.9', '134.2', '114.6'),
    ...solved(58, 'D', 'M_G = 114.607 kN-m'),
  },

  // ── Item 59 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q59',
    number: 59,
    pageNumber: 519,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Concrete Frames — Beam Moments',
    text: 'Compute the moment (kN-m) at the midspan of beam GH.',
    figureSvg: psadMay2017Figure(
      'fig23_nscp',
      'Figure Code-523: NSCP approximate moment and shear coefficients for continuous beams and one-way slabs.',
    ),
    options: opts('81.9', '83.9', '71.6', '95.8'),
    ...solved(59, 'D', 'M_GH = 95.832 kN-m'),
  },

  // ── Item 60 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q60',
    number: 60,
    pageNumber: 519,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Concrete Frames — Beam Shear',
    text: 'Compute the shear (kN) at end G in beam GH.',
    options: opts('94', '108', '117', '102'),
    ...solved(60, 'C', 'V_G = 116.89 kN'),
  },

  // ── Item 61 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q61',
    number: 61,
    pageNumber: 521,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Concrete Columns — Shear Strength of Concrete',
    text: SIT21 + '\n\nCalculate the nominal shear strength (kN) provided by concrete using the simplified calculation.',
    options: opts('461', '402', '344', '519'),
    ...solved(61, 'D', 'V_c = 519.554 kN'),
  },

  // ── Item 62 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q62',
    number: 62,
    pageNumber: 521,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Concrete Columns — Shear Reinforcement',
    text: 'Calculate the nominal shear strength (kN) provided by shear reinforcement.',
    options: opts('568', '355', '497', '426'),
    ...solved(62, 'A', 'V_s = 568.7 kN'),
  },

  // ── Item 63 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q63',
    number: 63,
    pageNumber: 521,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Concrete Columns — Design Shear Strength',
    text: 'Calculate the design shear strength (kN) of the column.',
    options: opts('621', '816', '719', '524'),
    ...solved(63, 'B', 'φV_n = 816.2 kN'),
  },

  // ── Item 64 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q64',
    number: 64,
    pageNumber: 522,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Concrete Beams — Web Width',
    text: SIT22 + '\n\nWhat is the minimum value of $b_w$ (mm) according to NSCP?',
    figureSvg: psadMay2017Figure(
      'fig22_tbeam',
      'T-beam cross-section with flange depth h1, total depth h2, eight 28-mm tension bars in two rows, four 28-mm compression bars, and web width bw with clear spacing a.',
    ),
    options: opts('291', '254', '325', '300'),
    ...solved(64, 'D', 'b_w = 300 mm'),
  },

  // ── Item 65 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q65',
    number: 65,
    pageNumber: 522,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Concrete Beams — Shear Strength of Concrete',
    text: 'Calculate the nominal shear strength (kN) provided by concrete.',
    options: opts('145', '129', '121', '133'),
    ...solved(65, 'D', 'V_c = 133.716 kN'),
  },

  // ── Item 66 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q66',
    number: 66,
    pageNumber: 523,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Concrete Beams — Design Shear Strength',
    text: 'If the stirrups are spaced at 100 mm on center, calculate the design shear strength (kN) of the beam. Use $\\phi = 0.75$.',
    options: opts('448', '444', '336', '333'),
    ...solved(66, 'C', 'φV_n = 336.58 kN'),
  },
];

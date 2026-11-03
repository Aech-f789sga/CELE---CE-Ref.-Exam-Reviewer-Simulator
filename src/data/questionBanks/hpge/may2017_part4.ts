import { Question } from '../../../types/exam';
import { hpgeMay2017Figure } from '../../hpgeMay2017Images';
import { solved, recall, opts } from './may2017Helpers';

/** Situation 7 is printed once and shared by items 41-43. */
const SIT7 =
  'Situation 7 – According to the Westergaard theory, the vertical stress at a point below the surface of a semi-infinite, homogeneous, isotropic soil mass due to a point load Q applied at the ground surface is given by the equation:\n\n' +
  '$p = \\dfrac{0.318QN}{z^2}$\n\n' +
  '$N = \\dfrac{1}{\\left[1 + 2(r/z)^2\\right]^{3/2}}$\n\n' +
  'Where r is the horizontal distance of the point from the vertical line of application of the load, and z is the depth of point below ground surface.\n\n' +
  'Evaluate the vertical stress, in kPa, at a point below the ground for a load Q = 1200 kN:';

/** Situation 8 is printed once and shared by items 44-46. */
const SIT8 =
  'Situation 8 – A square footing 1.5 m on a side and 1 m below the ground surface for which the bulk unit weight of the soil is $18\\ \\text{kN/m}^3$. The soil is cohesionless and the angle of internal friction is 25°. Consider the condition of general shear failure and evaluate the following using the Terzaghi equation for square footing. Use Table 01.';

export const HPGE_MAY2017_PART4: Question[] = [
  // ── Item 37 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q37',
    number: 37,
    pageNumber: 491,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Geotechnical — Settlement from Void Ratio Change',
    text: 'A soil layer has a thickness of 9 m and natural void ratio 1.00. Obtain the change in soil thickness if the void ratio is decreased by one-fourth.',
    options: opts('4.26 m', '3.38 m', '3.75 m', '5.25 m'),
    ...solved(37, 'B', 'ΔH = 3.375 m', 505),
  },

  // ── Item 38 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q38',
    number: 38,
    pageNumber: 491,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Geotechnical — Consolidation Settlement',
    text: 'Evaluate the plastic settlement, in meters, in a layer of plastic clay due to an increase of pressure caused by loads above it under the following conditions:\n\nInitial intergranular pressure = 200 kPa\nIncrease in intergranular pressure = 150 kPa\nThickness of the clay layer = 10 m\nCoefficient of consolidation = 0.315\nVoid Ratio of the Clay = 1.5',
    options: opts('0.568', '0.384', '0.306', '0.425'),
    ...solved(38, 'C', 'ΔH = 0.306 m', 505),
  },

  // ── Item 39 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q39',
    number: 39,
    pageNumber: 491,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Geotechnical — Rankine Active Earth Pressure',
    text: 'Determine the angle of friction of the soil if the Rankines coefficient of active force is 0.50.',
    options: opts('19.65°', '18.25°', '19.47°', '20.14°'),
    ...solved(39, 'C', 'φ = 19.47°', 506),
  },

  // ── Item 40 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q40',
    number: 40,
    pageNumber: 491,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Geotechnical — Skin Friction of a Pile',
    text: 'A prestressed concrete pile 400 mm × 400 mm in cross-section and 20 m long is driven in clayey soil with unconfined compression strength $q_u = 110\\ \\text{kPa}$. Compute the skin friction using an adhesion factor $\\alpha = 0.75$.',
    options: opts('1320 kN', '1540 kN', '1480 kN', '1240 kN'),
    ...solved(40, 'A', 'Qf = 1,320 kN', 506),
  },

  // ── Item 41 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q41',
    number: 41,
    pageNumber: 492,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 7 — Westergaard Stress at 3 m Depth',
    text: SIT7 + '\n\nThe point is 3 m directly below the point of application of the load.',
    options: opts('52.4', '42.4', '63.8', '32.6'),
    ...solved(41, 'B', 'p = 42.4 kPa', 506),
  },

  // ── Item 42 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q42',
    number: 42,
    pageNumber: 492,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 7 — Westergaard Stress at 6 m Depth',
    text: SIT7 + '\n\nThe point is 6 m directly below the point of application of the load.',
    options: opts('10.6', '12.4', '11.5', '9.5'),
    ...solved(42, 'A', 'p = 10.6 kPa', 506),
  },

  // ── Item 43 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q43',
    number: 43,
    pageNumber: 492,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 7 — Westergaard Stress Off the Load Line',
    text:
      SIT7 +
      '\n\nThe point is 6 m below the load but 3 m horizontally from the line of application of the load.',
    options: opts('4.25', '6.89', '1.57', '5.77'),
    ...solved(43, 'D', 'p = 5.77 kPa', 506, 507),
  },

  // ── Item 44 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q44',
    number: 44,
    pageNumber: 493,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 8 — Bearing Capacity from Depth',
    text: SIT8 + '\n\nBearing capacity based on depth.',
    options: opts('258 kPa', '229 kPa', '365 kPa', '154 kPa'),
    figureSvg: hpgeMay2017Figure(
      'fig44_table',
      "Table 01: Terzaghi's bearing capacity factors for general shear failure, giving Nc, Nq and N-gamma for friction angles 0 to 50 degrees.",
    ),
    ...solved(44, 'B', '228.96 kN ≈ 229 kPa', 507),
  },

  // ── Item 45 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q45',
    number: 45,
    pageNumber: 493,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 8 — Bearing Capacity from Footing Width',
    text: SIT8 + '\n\nBearing capacity based on dimension.',
    options: opts('98 kPa', '90 kPa', '75 kPa', '110 kPa'),
    ...solved(45, 'B', '90.07 kN ≈ 90 kPa', 507),
  },

  // ── Item 46 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q46',
    number: 46,
    pageNumber: 493,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 8 — Allowable Load of the Footing',
    text: SIT8 + '\n\nAllowable load of footing using a factor of safety of 3.',
    options: opts('258 kN', '302 kN', '204 kN', '239 kN'),
    ...solved(46, 'D', 'Qall = 239.3 kN', 507),
  },

  // ── Item 47 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q47',
    number: 47,
    pageNumber: 493,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Geotechnical — NSCP Slope Limits',
    text: 'According to NSCP, cut and fill slopes must not be steeper than:',
    options: opts('1 to 3', '1 to 1', '1 to 5', '1 to 2'),
    ...recall(
      'D',
      '1 to 2',
      'NSCP limits permanent cut and fill slopes to 1 vertical to 2 horizontal (1:2) unless a steeper slope is shown to be stable by analysis.',
    ),
  },
];

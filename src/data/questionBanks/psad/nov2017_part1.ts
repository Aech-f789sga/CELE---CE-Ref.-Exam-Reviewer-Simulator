import { Question } from '../../../types/exam';
import { solved, opts } from './nov2017Helpers';
import { psadNov2017Figure } from '../../psadNov2017Images';

/**
 * Situations 1-6, items 1-18.
 *
 * Each situation stem is repeated on every item it governs so that any one item
 * can be answered on its own, exactly as the booklet prints it above the group.
 */

const SIT1 =
  'Situation 1 – Three identical smooth cylinders are stacked in a rigid bin as shown in the figure. Each cylinder has a diameter of 0.50 m and weighs 400 N. The bin has a width of w = 0.80 m.';

const SIT2 =
  'Situation 2 – A rigid bin holds three identical cylinders stacked as shown in the figure. Each cylinder is 500 mm in diameter and weighs 400 N. The bin is 1 m wide. Neglect friction.';

const SIT3 =
  'Situation 3 – Refer to the three-hinged arch shown in the Figure. Given: P₁ = P₄ = 100 kN, s = 3 m; P₂ = P₃ = 250 kN, H = 18 m.';

const SIT4 =
  'Situation 4 – A series of uniformly spaced hangers along a parabolic cable supports a 60-m pipeline as shown. The total weight of the pipe and water is 7 kN/m.';

const SIT5 =
  'Situation 5 – Refer to the gable frame shown in the figure. Given: Dimensions: L₁ = L₂ = 6 m; H = 3 m; Spacing of frames = 6 m into the paper. Wind pressure: Windward = 1.44 kPa (pressure); Leeward = 0.9 kPa (suction).';

const SIT6 =
  'Situation 6 – The double angle shown in the figure carries a tensile force of P. Given: Allowable shearing stress of bolt = 150 MPa; Allowable tensile stress of bolt = 195 MPa; Bolt diameter, D₁ = D₂ = 25 mm; a = 4, b = 3.';

export const PSAD_NOV2017_PART1: Question[] = [
  // ── Item 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q1',
    number: 1,
    pageNumber: 615,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Statics — Reactions of Stacked Cylinders',
    text: `${SIT1}\n\nCalculate the total reaction (N) at A.`,
    figureSvg: psadNov2017Figure(
      'fig_s1_bin',
      'Three identical cylinders stacked in a rigid bin, labelled A to F and width w',
    ),
    options: opts('600', '400', '500', '800'),
    ...solved(1, 'C', '500 N'),
  },

  // ── Item 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q2',
    number: 2,
    pageNumber: 615,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Statics — Reactions of Stacked Cylinders',
    text: `${SIT1}\n\nCalculate the total reaction (N) at E.`,
    options: opts('500', '600', '800', '400'),
    ...solved(2, 'B', '600 N'),
  },

  // ── Item 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q3',
    number: 3,
    pageNumber: 615,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Statics — Reactions of Stacked Cylinders',
    text: `${SIT1}\n\nCalculate the total reaction (N) at F.`,
    options: opts('1200', '800', '1000', '900'),
    ...solved(3, 'A', '1,200 N'),
  },

  // ── Item 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q4',
    number: 4,
    pageNumber: 615,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Statics — Reactions of Stacked Cylinders',
    text: `${SIT2}\n\nDetermine the total reaction at B in N.`,
    figureSvg: psadNov2017Figure(
      'fig_s2_bin',
      'Isometric and elevation views of three cylinders in a bin, labelled A to G',
    ),
    options: opts('115.5', '152.5', '225.4', '230.9'),
    ...solved(4, 'D', '230.9 N'),
  },

  // ── Item 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q5',
    number: 5,
    pageNumber: 616,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Statics — Reactions of Stacked Cylinders',
    text: `${SIT2}\n\nDetermine the total reaction at E in N.`,
    options: opts('225.4', '230.9', '152.5', '115.5'),
    ...solved(5, 'D', '115.5 N'),
  },

  // ── Item 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q6',
    number: 6,
    pageNumber: 616,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Statics — Reactions of Stacked Cylinders',
    text: `${SIT2}\n\nDetermine the total reaction at F in N.`,
    options: opts('1200', '400', '600', '800'),
    ...solved(6, 'C', '600 N'),
  },

  // ── Item 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q7',
    number: 7,
    pageNumber: 616,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Structural Analysis — Three-Hinged Arch',
    text: `${SIT3}\n\nDetermine the horizontal reaction (kN) at A going to B.`,
    figureSvg: psadNov2017Figure(
      'fig_s3_arch',
      'Three-hinged arch with loads P1 to P4 at spacing s and rise H',
    ),
    options: opts('100', '200', '0', '350'),
    ...solved(7, 'A', '100 kN', 'The booklet tags this answer "Part 1" on the following folio, after it has already tagged "Part 2" — the Part numbers are not in reading order.'),
  },

  // ── Item 8 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q8',
    number: 8,
    pageNumber: 616,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Structural Analysis — Three-Hinged Arch',
    text: `${SIT3}\n\nDetermine the vertical reaction (kN) at C.`,
    options: opts('200', '350', '100', '0'),
    ...solved(8, 'D', '0 kN'),
  },

  // ── Item 9 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q9',
    number: 9,
    pageNumber: 616,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Structural Analysis — Three-Hinged Arch',
    text: `${SIT3}\n\nDetermine the total reaction (kN) at B.`,
    options: opts('250', '324', '364', '350'),
    ...solved(9, 'C', '364 kN'),
  },

  // ── Item 10 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q10',
    number: 10,
    pageNumber: 616,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Structural Analysis — Parabolic Cable',
    text: `${SIT4}\n\nCalculate the minimum sag (m) of the cable if the allowable tensile load of the cable is 3200 kN.`,
    figureSvg: psadNov2017Figure(
      'fig_s4_cable',
      'Parabolic cable carrying a pipeline of uniform weight w over span L with sag y',
    ),
    options: opts('1.1', '1.0', '0.9', '0.8'),
    ...solved(10, 'B', '0.986 m ≈ 1.0 m'),
  },

  // ── Item 11 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q11',
    number: 11,
    pageNumber: 616,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Structural Analysis — Parabolic Cable',
    text: `${SIT4}\n\nIf the sag is y = 3 m, calculate the tensile stress (MPa) at mid length of the cable if its diameter is 75 mm.`,
    options: opts('242', '221', '265', '238'),
    ...solved(11, 'D', '237.67 MPa ≈ 238 MPa'),
  },

  // ── Item 12 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q12',
    number: 12,
    pageNumber: 617,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Structural Analysis — Parabolic Cable',
    text: `${SIT4}\n\nIf the sag is y = 3 m, calculate the maximum additional load (kN/m) can the cable support if its allowable tensile load is 2000 kN.`,
    options: opts('6.0', '6.5', '5.8', '4.6'),
    ...solved(12, 'A', '6.074 kN/m ≈ 6.0 kN/m'),
  },

  // ── Item 13 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q13',
    number: 13,
    pageNumber: 617,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Structural Analysis — Wind on a Gable Frame',
    text: `${SIT5}\n\nCompute the total vertical reaction (kN) at A and B.`,
    figureSvg: psadNov2017Figure(
      'fig_s5_gable',
      'Gable frame with eaves at A and B, ridge at C, half spans L1 and L2 and height H',
    ),
    options: opts('9.72', '15.24', '19.44', '22.36'),
    ...solved(13, 'C', '19.44 kN'),
  },

  // ── Item 14 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q14',
    number: 14,
    pageNumber: 617,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Structural Analysis — Wind on a Gable Frame',
    text: `${SIT5}\n\nCompute the total lateral force (kN) acting on the frame.`,
    options: opts('84.24', '65.32', '96.25', '74.32'),
    ...solved(14, 'A', '84.24 kN'),
  },

  // ── Item 15 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q15',
    number: 15,
    pageNumber: 617,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Structural Analysis — Wind on a Gable Frame',
    text: `${SIT5}\n\nCompute the horizontal reaction (kN) at C.`,
    options: opts('19.44', '9.72', '15.24', '22.36'),
    ...solved(15, 'B', '9.72 kN'),
  },

  // ── Item 16 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q16',
    number: 16,
    pageNumber: 618,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — Eccentrically Loaded Weld Group',
    text: `${SIT6}\n\nFind the maximum safe load P (kN) based on tensile and shearing strength of bolt D₂.`,
    figureSvg: psadNov2017Figure(
      'fig_s6_angle',
      'Double angle welded to a plate, loaded at slope a = 4, b = 3, with bolts 4D2 and 3D1',
    ),
    options: opts('638', '425', '524', '368'),
    ...solved(16, 'D', '368.15 kN', 'Shear governs: 0.8P = 150 × 4[π/4(25)²] gives 368.15 kN, against 638.14 kN from tension.'),
  },

  // ── Item 17 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q17',
    number: 17,
    pageNumber: 618,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — Eccentrically Loaded Weld Group',
    text: `${SIT6}\n\nFind the P (kN) based on shear strength of bolt D₁.`,
    options: opts('490', '440', '450', '520'),
    ...solved(17, 'B', '441.786 kN ≈ 440 kN'),
  },

  // ── Item 18 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q18',
    number: 18,
    pageNumber: 618,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — Eccentrically Loaded Weld Group',
    text: `${SIT6}\n\nIf P = 400 kN, what is the required diameter of bolt D₂?`,
    options: opts('28', '25', '20', '18'),
    ...solved(
      18,
      'A',
      '26.6 mm, adopted as 28 mm',
      'The booklet computes D = 26.6 mm, which is not one of the four choices; the key takes 28 mm, the nearest listed diameter. Recorded rather than rounded silently.',
    ),
  },
];

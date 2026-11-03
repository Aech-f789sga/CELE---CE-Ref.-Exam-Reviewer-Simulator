import { Question } from '../../../types/exam';
import { solved, opts } from './nov2017Helpers';
import { psadNov2017Figure } from '../../psadNov2017Images';

/**
 * Situations 13-18, items 37-54.
 */

const SIT13 =
  'Situation 13 – A retaining wall 9 m in height is subjected to earth pressure that varies uniformly from 0 kN/m at the top to 52 kN/m at bottom. The wall is simply supported at top and fixed at bottom.';

const SIT14 =
  'Situation 14 – A 2.8-m cantilever beam supports a uniform load of 15 kN/m and a concentrated load of 30 kN at 2 m from the fixed end.';

const SIT15 =
  'Situation 15 – Refer to the beam shown in the figure. Given: a = 1 m; w = 18 kN/m; P = 30 kN; Flexural rigidity of beam AB = 2500 kN·m². The spring deforms 0.1 mm per 1 kN of compressive force.';

const SIT16 =
  'Situation 16 – A bracket is welded to a steel column as shown. Given: a = 150 mm; b = 450 mm; Load, P = 310 kN; Allowable weld shear stress, F_vw = 124 MPa.';

const SIT17 =
  'Situation 17 – Two channels are welded at the tip of their flanges to form a box column. Properties of one channel section: A = 3930 mm²; d = 300 mm; b_f = 75 mm; t_f = 13 mm; t_w = 7.2 mm; x = 18 mm; I_x = 53.7 × 10⁶ mm⁴; I_y = 1.62 × 10⁶ mm⁴. The column is 6 m long hinged at both ends (K = 1.0) and laterally supported about the weak axis at midheight. Use F_y = 248 MPa.';

const SIT18 =
  'Situation 18 – Given the following data for a steel column: Effective slenderness ratio with respect to x-axis, (KL/r)_x = 53.8; Effective slenderness ratio with respect to y-axis, (KL/r)_y = 144; Modulus of elasticity of steel, E = 200 GPa; Cross-sectional area of the column = 7460 mm²; Yield strength of steel, F_y = 248 MPa.';

export const PSAD_NOV2017_PART3: Question[] = [
  // ── Item 37 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q37',
    number: 37,
    pageNumber: 624,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Structural Analysis — Propped Cantilever Wall',
    text: `${SIT13}\n\nCompute the moment (kN·m) at fixed end.`,
    options: opts('421', '281', '365', '254'),
    ...solved(37, 'B', '−280.8 kN·m ≈ −281 kN·m'),
  },

  // ── Item 38 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q38',
    number: 38,
    pageNumber: 624,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Structural Analysis — Propped Cantilever Wall',
    text: `${SIT13}\n\nCompute the shear (kN) at fixed end if support at the top is removed.`,
    options: opts('234', '287', '325', '124'),
    ...solved(38, 'A', '234 kN'),
  },

  // ── Item 39 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q39',
    number: 39,
    pageNumber: 624,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Structural Analysis — Propped Cantilever Wall',
    text: `${SIT13}\n\nCompute the moment (kN·m) at fixed end if support at the top is removed.`,
    options: opts('548', '763', '652', '702'),
    ...solved(39, 'D', '702 kN·m'),
  },

  // ── Item 40 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q40',
    number: 40,
    pageNumber: 624,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Mechanics — Cantilever Beam',
    text: `${SIT14}\n\nCompute the maximum bending moment (kN·m) in the beam.`,
    options: opts('118.8', '142.8', '124.7', '163.2'),
    ...solved(40, 'A', '118.8 kN·m'),
  },

  // ── Item 41 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q41',
    number: 41,
    pageNumber: 624,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Mechanics — Cantilever Beam',
    text: `${SIT14}\n\nCompute the maximum shear (kN) in the beam.`,
    options: opts('42', '0', '36', '72'),
    ...solved(41, 'D', '72 kN'),
  },

  // ── Item 42 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q42',
    number: 42,
    pageNumber: 624,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Mechanics — Cantilever Beam',
    text: `${SIT14}\n\nCompute the required moment of inertia (m⁴) of the beam if the deflection at the free end must not exceed L/360. Use E = 200 GPa.`,
    options: opts('0.000187', '0.000215', '0.000156', '0.000114'),
    ...solved(42, 'C', '0.0001564 m⁴ ≈ 0.000156 m⁴'),
  },

  // ── Item 43 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q43',
    number: 43,
    pageNumber: 624,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Structural Analysis — Beam on a Spring Support',
    text: `${SIT15}\n\nWhat is the reaction (kN) at the spring support?`,
    figureSvg: psadNov2017Figure(
      'fig_s15_spring',
      'Beam fixed at A and carried on a spring at B, with uniform load w and load P at midspan',
    ),
    options: opts('24.1', '20.9', '28.9', '32.2'),
    ...solved(43, 'B', '20.91 kN ≈ 20.9 kN'),
  },

  // ── Item 44 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q44',
    number: 44,
    pageNumber: 624,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Structural Analysis — Beam on a Spring Support',
    text: `${SIT15}\n\nIf the spring deforms 0.5 mm, what is the reaction (kN) at the spring?`,
    options: opts('5', '0.5', '50', '20'),
    ...solved(44, 'A', '5 kN'),
  },

  // ── Item 45 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q45',
    number: 45,
    pageNumber: 624,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Structural Analysis — Beam on a Spring Support',
    text: `${SIT15}\n\nCompute the moment at the fixed end (kN·m) if the spring reaction is 25 kN.`,
    options: opts('-12', '-16', '-8', '-32'),
    ...solved(45, 'B', '−16 kN·m'),
  },

  // ── Item 46 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q46',
    number: 46,
    pageNumber: 625,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — Welded Bracket',
    text: `${SIT16}\n\nCalculate the load in the weld (N/mm) when a = 0.`,
    figureSvg: psadNov2017Figure(
      'fig_s16_bracket',
      'Bracket welded to a column, front and side views with weld length b and eccentricity a',
    ),
    options: opts('344', '365', '428', '287'),
    ...solved(46, 'A', '344.4 N/mm ≈ 344 N/mm'),
  },

  // ── Item 47 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q47',
    number: 47,
    pageNumber: 625,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — Welded Bracket',
    text: `${SIT16}\n\nCalculate the maximum resultant load in the weld (N/mm) due to eccentric load P.`,
    options: opts('750', '850', '820', '770'),
    ...solved(47, 'D', '770.2 N/mm ≈ 770 N/mm'),
  },

  // ── Item 48 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q48',
    number: 48,
    pageNumber: 625,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — Welded Bracket',
    text: `${SIT16}\n\nIf the thickness of the weld is 9 mm, calculate the load capacity of the weld in N/mm.`,
    options: opts('821', '789', '742', '712'),
    ...solved(48, 'B', '789 N/mm'),
  },

  // ── Item 49 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q49',
    number: 49,
    pageNumber: 626,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — Built-Up Box Column',
    text: `${SIT17}\n\nCalculate the slenderness ratio for buckling about the x-axis.`,
    figureSvg: psadNov2017Figure(
      'fig_s17_box',
      'Box column built from two channels, with cover plates of width b and thickness t',
    ),
    options: opts('63.5', '51.3', '49.6', '42.7'),
    ...solved(49, 'B', '51.33 ≈ 51.3'),
  },

  // ── Item 50 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q50',
    number: 50,
    pageNumber: 626,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — Built-Up Box Column',
    text: `${SIT17}\n\nCalculate the slenderness ratio for buckling about the y-axis.`,
    options: opts('49.6', '42.7', '63.5', '51.3'),
    ...solved(50, 'A', '49.58 ≈ 49.6'),
  },

  // ── Item 51 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q51',
    number: 51,
    pageNumber: 626,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — Built-Up Box Column',
    text: `${SIT17}\n\nIf the axial load is 1200 kN what is the minimum required plate thickness (mm) of the cover plate if the axial stress is not to exceed 116 MPa. Width of plate b = 110 mm.`,
    options: opts('10', '13', '12', '11'),
    ...solved(
      51,
      'C',
      '11.3 mm, adopted as 12 mm',
      'The booklet computes t = 11.3 mm. The key takes 12 mm, the smallest listed thickness that is not less than the requirement — 11 mm would be under strength.',
    ),
  },

  // ── Item 52 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q52',
    number: 52,
    pageNumber: 627,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — NSCP Allowable Compressive Stress',
    text: `${SIT18}\n\nCalculate the allowable axial stress (MPa) for buckling about the x-axis.`,
    figureSvg: psadNov2017Figure(
      'fig_code_505',
      'Figure CODE 505.3: NSCP allowable compressive stress formulas for KL/r below and above Cc',
    ),
    options: opts('85', '124', '114', '136'),
    ...solved(52, 'B', '124 MPa'),
  },

  // ── Item 53 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q53',
    number: 53,
    pageNumber: 627,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — NSCP Allowable Compressive Stress',
    text: `${SIT18}\n\nCalculate the allowable axial stress (MPa) for buckling about the y-axis.`,
    options: opts('42.1', '55.8', '63.5', '49.6'),
    ...solved(
      53,
      'D',
      '49.67 MPa ≈ 49.6 MPa',
      'The booklet heads this block "Allowable axial stress for buckling about the x-axis" but works (KL/r)_y = 144 > C_c, i.e. the y-axis. The heading is a misprint; the arithmetic is the y-axis value.',
    ),
  },

  // ── Item 54 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q54',
    number: 54,
    pageNumber: 627,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — NSCP Allowable Compressive Stress',
    text: `${SIT18}\n\nCalculate the maximum safe axial load (kN) of the column.`,
    options: opts('370', '350', '360', '380'),
    ...solved(54, 'A', '370.5 kN ≈ 370 kN'),
  },
];

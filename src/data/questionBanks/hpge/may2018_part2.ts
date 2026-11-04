import { Question } from '../../../types/exam';
import { hpgeMay2018Figure } from '../../hpgeMay2018Images';
import { opts, recall, solved } from './may2018Helpers';

/**
 * HPGE May 2018, items 14-26 — the rest of the rotating-tank situation, tank
 * emptying through a bottom orifice, the orifice jet trajectory, the three-
 * reservoir pipe network, critical depth and most-efficient section of a
 * triangular channel, and two geotechnical recall questions.
 */
export const HPGE_MAY2018_PART2: Question[] = [
  // ── Situation 3, continued ────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q14',
    number: 14,
    pageNumber: 691,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Rotating Liquid',
    text: '(2) With the depth of water in the first question, what speed of rotation in rpm will spill 1.4 liters of water?',
    options: opts('242', '236', '268', '274'),
    ...solved(14, 'A', '242.1 rpm'),
  },
  {
    id: 'hpge-may2018-q15',
    number: 15,
    pageNumber: 691,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Rotating Liquid',
    text: '(3) With the depth of water in the first question, what minimum angular speed will zero the pressure at the center bottom of the tank?',
    options: opts('264', '259', '231', '325'),
    ...solved(15, 'B', '259 rpm'),
  },

  // ── Item 16 ───────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q16',
    number: 16,
    pageNumber: 691,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Tank Emptying',
    text: 'A cylindrical tank 4 m in diameter and 3 m tall is full of water. Obtain the time (in minutes) to drain the tank through a 50-mm-diameter orifice at the tank bottom. Assume $C = 1.0$.',
    options: opts('83.4', '85.6', '82.4', '76.9'),
    ...solved(16, 'A', '83.42 minutes'),
  },

  // ── Situation 4 ───────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q17',
    number: 17,
    pageNumber: 691,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Orifice Jet',
    text: 'Situation 4 — Water flows through an orifice at the vertical side of a large tank under a constant head. The jet strikes 12 m vertically and 20 m horizontally. Assume $C_v = 0.98$.\n\n(1) Evaluate the velocity at the vena contracta.',
    options: opts('13.74 m/s', '14.75 m/s', '12.79 m/s', '16.42 m/s'),
    ...solved(17, 'C', '12.787 m/s'),
  },
  {
    id: 'hpge-may2018-q18',
    number: 18,
    pageNumber: 692,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Orifice Jet',
    text: '(2) Evaluate the constant head of the orifice.',
    options: opts('9.88 m', '8.68 m', '6.77 m', '10.22 m'),
    ...solved(18, 'B', '8.68 m'),
  },
  {
    id: 'hpge-may2018-q19',
    number: 19,
    pageNumber: 692,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Jet Trajectory',
    text: '(3) Obtain the time of water to strike at the ground.',
    options: opts('1.56 s', '1.72 s', '1.85 s', '1.96 s'),
    ...solved(19, 'A', '1.56 s'),
  },

  // ── Situation 5 ───────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q20',
    number: 20,
    pageNumber: 692,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Pipe Networks',
    text: 'Situation 5 — Given the following data for the three reservoirs shown in the figure:\n\n| Pipe | Length (m) | Diameter (mm) | f |\n| --- | --- | --- | --- |\n| 1 | 1500 | 900 | 0.0208 |\n| 2 | 450 | 600 | 0.0169 |\n| 3 | 1200 | 450 | 0.0135 |\n\nReservoir A supplies water to reservoirs B and C. The flow towards reservoir B is $0.60\\ \\text{m}^3/\\text{s}$.\n\n(1) Determine the flow from reservoir A in $\\text{m}^3/\\text{s}$.',
    options: opts('1.09', '1.23', '0.63', '0.41'),
    figureSvg: hpgeMay2018Figure(
      'fig_q20_pipes',
      'Pipe schedule for Situation 5: pipe 1 is 1500 m long, 900 mm diameter, f = 0.0208; pipe 2 is 450 m, 600 mm, f = 0.0169; pipe 3 is 1200 m, 450 mm, f = 0.0135.',
    ),
    ...solved(20, 'A', '1.095 m³/s'),
  },
  {
    id: 'hpge-may2018-q21',
    number: 21,
    pageNumber: 692,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Pipe Networks',
    text: '(2) Determine the flow to reservoir C in $\\text{m}^3/\\text{s}$.',
    options: opts('0.85', '0.49', '0.74', '0.96'),
    figureSvg: hpgeMay2018Figure(
      'fig_q20_reservoirs',
      'Three-reservoir diagram: reservoir A at El. 300 m, reservoir B at an unknown elevation, reservoir C at El. 277 m, joined by pipes 1, 2 and 3.',
    ),
    ...solved(21, 'B', '0.495 m³/s'),
  },
  {
    id: 'hpge-may2018-q22',
    number: 22,
    pageNumber: 692,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Pipe Networks',
    text: '(3) Determine the elevation of reservoir B.',
    options: opts('302 m', '275 m', '284 m', '292 m'),
    ...solved(22, 'D', '291.861 m'),
  },

  // ── Item 23 ───────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q23',
    number: 23,
    pageNumber: 693,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Open Channel Flow',
    text: 'Storm water flows at the rate of $2\\ \\text{m}^3/\\text{s}$ in a triangular canal with vertex angle of $60^\\circ$. Obtain the critical depth of flow in meters.',
    options: opts('0.925', '1.021', '1.245', '1.196'),
    ...solved(23, 'D', '1.196 m'),
  },

  // ── Item 24 ───────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q24',
    number: 24,
    pageNumber: 693,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Fluid Mechanics — Open Channel Flow',
    text: 'Using the most efficient section, what depth of triangular flume is required for a flow of $2\\ \\text{m}^3/\\text{s}$. Use $n = 0.018$ and $S = 0.21\\%$.',
    options: opts('1.286 m', '1.185 m', '1.325 m', '0.952 m'),
    ...solved(24, 'B', '1.185 m'),
  },

  // ── Item 25 ───────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q25',
    number: 25,
    pageNumber: 693,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Soil Properties',
    text: 'Which of the following is NOT a characteristic of a cohesionless soil.',
    options: opts(
      'easy to compact',
      'high shear strength',
      'prone to settlement due to vibrating load',
      'practically impermeable',
    ),
    ...recall(
      'D',
      'practically impermeable',
      'Cohesionless soils are free-draining and therefore permeable; they compact readily, mobilise friction rather than cohesion for their shear strength, and densify under vibration. The booklet keys D but the solution run on folio 704 jumps from item 24 straight to item 26, so no working is printed.',
    ),
  },

  // ── Item 26 ───────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q26',
    number: 26,
    pageNumber: 693,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Standard Penetration Test',
    text: 'In standard penetration test, medium dense sand have number of blows of:',
    options: opts('4 to 10', '10 to 30', '30 to 50', 'over 50'),
    ...solved(
      26,
      'B',
      '10 to 30',
      'The booklet answers this from a printed table of relative density against $N_{60}$: 0-4 very loose, 4-10 loose, 10-30 medium, 30-50 dense, over 50 very dense.',
    ),
  },
];

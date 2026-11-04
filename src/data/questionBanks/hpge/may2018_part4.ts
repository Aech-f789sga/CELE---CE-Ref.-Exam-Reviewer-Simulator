import { Question } from '../../../types/exam';
import { hpgeMay2018Figure } from '../../hpgeMay2018Images';
import { opts, solved } from './may2018Helpers';

/**
 * HPGE May 2018, items 39-50 — travel time in the confined aquifer, the friction
 * angle from a triaxial test, the shear and normal stress on the failure plane,
 * two Terzaghi bearing-capacity situations on a circular and a square footing,
 * and the skin friction of a driven pile.
 */
export const HPGE_MAY2018_PART4: Question[] = [
  // ── Situation 9, continued ────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q39',
    number: 39,
    pageNumber: 695,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Well Hydraulics',
    text: '(3) Determine the nearest value to the time of travel from the head of aquifer to a point 4 km downstream, in days.',
    options: opts('200', '2000', '1000', '100'),
    ...solved(39, 'B', '2000 days'),
  },

  // ── Item 40 ───────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q40',
    number: 40,
    pageNumber: 695,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Triaxial Test',
    text: 'In a triaxial test on a cohesionless soil, the soil fails when the chamber pressure is 50 kPa and the maximum axial stress reached 120 kPa. Obtain the angle of friction.',
    options: opts('24.3°', '26.7°', '20.7°', '28.4°'),
    ...solved(40, 'A', '24.32°'),
  },

  // ── Situation 10 ──────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q41',
    number: 41,
    pageNumber: 695,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Shear Strength Parameters',
    text: 'Situation 10 — A tri-axial test is performed on a cohesionless soil. The soil fails under the following conditions:\n\nConfining pressure $= 250\\ \\text{kPa}$\n\nDeviator stress $= 450\\ \\text{kPa}$\n\n(1) Evaluate the angle of shearing resistance of the soil.',
    options: opts('32.52°', '28.27°', '63.04°', '33.41°'),
    ...solved(41, 'B', '28.27°'),
  },
  {
    id: 'hpge-may2018-q42',
    number: 42,
    pageNumber: 695,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Shear Strength Parameters',
    text: '(2) Obtain the shearing stress at the failure plane.',
    options: opts('198 kPa', '136 kPa', '221 kPa', '172 kPa'),
    ...solved(
      42,
      'A',
      '198.16 kPa',
      'The booklet prints the third line of this working as "τf = 168.16 kPa", but the line above it reads $\\tau_f = 225\\cos 28.27^\\circ$ and $225\\cos 28.27^\\circ = 198.16$. The digits 1 and 6 are transposed in the print; the answer key and the option list both carry 198, and the crop is left as printed.',
    ),
  },
  {
    id: 'hpge-may2018-q43',
    number: 43,
    pageNumber: 695,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Shear Strength Parameters',
    text: '(3) Obtain the normal stress at the failure plane.',
    options: opts('482 kPa', '410 kPa', '368 kPa', '400 kPa'),
    ...solved(43, 'C', '368.43 kPa'),
  },

  // ── Situation 11 ──────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q44',
    number: 44,
    pageNumber: 696,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Terzaghi Bearing Capacity',
    text: 'Situation 11 — Given the following data of a circular footing:\n\nFooting diameter $= 10\\ \\text{m}$\n\nDepth of footing $= 2\\ \\text{m}$\n\nUnit weight of soil $= 16\\ \\text{kN/m}^3$\n\nSoil cohesion $= 0$\n\nAngle of friction of soil $= 20^\\circ$\n\nUse the Terzaghi\'s bearing capacity factors in Table 01.\n\n(1) Obtain the contribution of footing embedment to ultimate bearing capacity.',
    options: opts('172.3 kPa', '238.1 kPa', '210.4 kPa', '150.3 kPa'),
    figureSvg: hpgeMay2018Figure(
      'fig_q44_table01',
      "Table 01: Terzaghi's bearing capacity factors for general shear failure, listing Nc, Nq and N-gamma for friction angles from 0 to 50 degrees.",
    ),
    ...solved(
      44,
      'B',
      '238.08 kPa',
      'Table 01 fills booklet folio 697 with the 50-item answer key printed beneath it; the same scan is attached to item 47 because Situation 12 also refers to it.',
    ),
  },
  {
    id: 'hpge-may2018-q45',
    number: 45,
    pageNumber: 696,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Terzaghi Bearing Capacity',
    text: '(2) Obtain the contribution of footing dimension to ultimate bearing capacity.',
    options: opts('232.9 kPa', '303.2 kPa', '174.7 kPa', '152.4 kPa'),
    ...solved(45, 'C', '174.72 kPa'),
  },
  {
    id: 'hpge-may2018-q46',
    number: 46,
    pageNumber: 696,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Terzaghi Bearing Capacity',
    text: '(3) Obtain the gross allowable pressure if the factor of safety is 3.0.',
    options: opts('72.54 kPa', '111.4 kPa', '84.71 kPa', '137.6 kPa'),
    ...solved(46, 'D', '137.6 kPa'),
  },

  // ── Situation 12 ──────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q47',
    number: 47,
    pageNumber: 696,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Terzaghi Bearing Capacity',
    text: 'Situation 12 — Given the following data of a square footing:\n\nFooting dimension $= 1.2\\ \\text{m}$\n\nDepth of footing $= 1\\ \\text{m}$\n\nUnit weight of soil $= 18\\ \\text{kN/m}^3$\n\nSoil cohesion $= 10\\ \\text{kPa}$\n\nAngle of friction $= 30^\\circ$\n\nUse the Terzaghi\'s bearing capacity factors in Table 01.\n\n(1) Obtain the contribution of footing embedment to ultimate bearing capacity.',
    options: opts('103.3 kPa', '520.24 kPa', '163.52 kPa', '404.28 kPa'),
    figureSvg: hpgeMay2018Figure(
      'fig_q47_table01',
      "Table 01: Terzaghi's bearing capacity factors for general shear failure, listing Nc, Nq and N-gamma for friction angles from 0 to 50 degrees.",
    ),
    ...solved(47, 'D', '404.28 kPa'),
  },
  {
    id: 'hpge-may2018-q48',
    number: 48,
    pageNumber: 696,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Terzaghi Bearing Capacity',
    text: '(2) Obtain the contribution of the footing dimension to ultimate bearing capacity.',
    options: opts('123.93 kPa', '220.24 kPa', '165.28 kPa', '404.28 kPa'),
    ...solved(48, 'C', '165.28 kPa'),
  },
  {
    id: 'hpge-may2018-q49',
    number: 49,
    pageNumber: 696,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Terzaghi Bearing Capacity',
    text: '(3) Obtain the contribution cohesion to ultimate bearing capacity.',
    options: opts('303.3 kPa', '483.1 kPa', '263.52 kPa', '404.28 kPa'),
    ...solved(
      49,
      'B',
      '483.08 kPa',
      'The booklet\'s last line for this part is labelled $q_\\gamma$ where it should read $q_c$; the numbers $1.3(10)(37.16) = 483.08$ are the cohesion term.',
    ),
  },

  // ── Item 50 ───────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2018-q50',
    number: 50,
    pageNumber: 696,
    subject: 'HPGE',
    year: 2018,
    month: 'May',
    category: 'Geotechnical — Pile Foundations',
    text: 'A prestressed concrete pile $400\\ \\text{mm} \\times 400\\ \\text{mm}$ in cross-section and 20 m long is driven in clayey soil with unconfined compression strength $q_u = 180\\ \\text{kPa}$. Compute the skin friction resistance using an adhesion factor $\\alpha = 1$.',
    options: opts('2880 kN', '860 kN', '960 kN', '2160 kN'),
    ...solved(
      50,
      'D',
      '2,160 kN',
      'The stem gives a $400\\ \\text{mm} \\times 400\\ \\text{mm}$ section but the booklet takes the perimeter as $0.3 \\times 4 = 1.2\\ \\text{m}$, i.e. a 300 mm square pile; with the printed dimensions the perimeter would be 1.6 m and the answer 2,880 kN, which is option A. The key and the working agree on 2,160 kN.',
    ),
  },
];

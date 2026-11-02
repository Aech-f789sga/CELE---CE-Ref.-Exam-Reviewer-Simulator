import { Question } from '../../../types/exam';
import { psadNov2015Figure } from '../../psadNov2015Images';
import { solved, opts } from './nov2015Helpers';

export const PSAD_NOV2015_PART4: Question[] = [
  // ── Item 46 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q46',
    number: 46,
    pageNumber: 201,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 15 — Resultant Base Shear with the Top Laterally Supported',
    text: 'Situation 15 (continued) – Determine the resultant base shear (in kN) of the wall if the wall is laterally supported at the top.',
    options: opts('176', '185', '414', '52'),
    ...solved(46, 'A', '176 kN (Option A)', 225),
  },

  // ── Item 47 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q47',
    number: 47,
    pageNumber: 202,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 16 — Degree of Indeterminacy',
    text: 'Situation 16 – The beam shown in Figure AN302-101 is fixed at A and C and simply supported at B. The total load of the beam is w = 36 kN/m and the length L = 8 m. The vertical reaction at B is 288 kN. Assume EI = constant.\n\n47. What is the degree of indeterminacy of the beam under the given loading?',
    figureSvg: psadNov2015Figure(
      'fig16_beam',
      'Figure AN302-101: a beam fixed at A and C and simply supported at B, carrying a uniform load w over its whole length; each half-span is L.',
    ),
    options: opts('2', '1', '3', '0'),
    ...solved(47, 'C', '3 (Option C)', 226),
  },

  // ── Item 48 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q48',
    number: 48,
    pageNumber: 202,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 16 — Maximum Shear',
    text: 'Situation 16 (continued) – Calculate the maximum shear in the beam.',
    options: opts('288 kN', '144 kN', '216 kN', '186 kN'),
    ...solved(48, 'B', '144 kN (Option B)', 226),
  },

  // ── Item 49 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q49',
    number: 49,
    pageNumber: 202,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 16 — Maximum Bending Moment',
    text: 'Situation 16 (continued) – Calculate the maximum bending moment in the beam.',
    options: opts('96 kN-m', '192 kN-m', '184 kN-m', '102 kN-m'),
    ...solved(49, 'B', '192 kN-m (Option B)', 226),
  },

  // ── Item 50 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q50',
    number: 50,
    pageNumber: 203,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 17 — Safe Load on Gross Area Yielding',
    text: 'Situation 17 – A bolted lap joint is shown in Figure ST25-001. The bolts are 20 mm in diameter in 23 mm holes. The plates are 12 mm thick. x₁ = 33 mm, x₂ = 76 mm, x₃ = 50 mm.\n\nAllowable stresses of plates:\nTension in gross area = 0.60 Fy\nTension in net area = 0.50 Fu\nShear on net area = 0.30 Fu\nYield strength of plate, Fy = 248 MPa\nUltimate tensile strength of plate, Fu = 400 MPa\n\n50. Find the safe load P based on gross area yielding.',
    figureSvg: psadNov2015Figure(
      'fig17_joint',
      'Figure ST25-001: a bolted lap joint — plan and elevation of two 12 mm plates with eight 20 mm bolts in 23 mm holes, the bolt rows spaced x₁ = 33 mm, x₂ = 76 mm, x₃ = 50 mm from the plate end.',
    ),
    options: opts('430 kN', '489 kN', '450 kN', '521 kN'),
    ...solved(50, 'C', '450 kN (Option C)', 226),
  },

  // ── Item 51 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q51',
    number: 51,
    pageNumber: 203,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 17 — Safe Load on Net Area Rupture',
    text: 'Situation 17 (continued) – Find the safe load P based on net area rupture.',
    options: opts('512 kN', '468 kN', '487 kN', '439 kN'),
    ...solved(51, 'D', '439 kN (Option D)', 226),
  },

  // ── Item 52 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q52',
    number: 52,
    pageNumber: 203,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 17 — Safe Load on Block Shear',
    text: 'Situation 17 (continued) – Find the safe load P based on block shear.',
    options: opts('621 kN', '578 kN', '486 kN', '530 kN'),
    ...solved(52, 'D', '530 kN (Option D)', 226, 227),
  },

  // ── Item 53 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q53',
    number: 53,
    pageNumber: 203,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 18 — Weld Strength on Gross Area Tension',
    text: 'Situation 18 – The single angle shown in Figure STCM14.70 is welded to a 6-mm-thick gusset plate. All steels are A36 with Fy = 248 MPa and Fu = 400 MPa. In this problem, L₁ = 60 mm and L₂ = 115 mm. Area of angular section is 930 mm².\n\nAllowable stresses:\nTension on gross area = 0.6 Fy\nTension on net area = 0.5 Fu\nShear on net area = 0.3 Fu\n\n53. Find P (kN) based on gross area tension.',
    figureSvg: psadNov2015Figure(
      'fig18_angle',
      'Figure STCM14.70: an L 76 × 76 × 6 mm angle welded along both legs to a 6 mm thick gusset plate, with weld lengths L₁ = 60 mm and L₂ = 115 mm.',
    ),
    options: opts('158', '138', '124', '146'),
    ...solved(53, 'B', '138 kN (Option B)', 227),
  },

  // ── Item 54 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q54',
    number: 54,
    pageNumber: 203,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 18 — Weld Strength on Net Area Tension',
    text: 'Situation 18 (continued) – Find P (kN) based on net area tension using a strength reduction factor of U = 0.85.',
    options: opts('158', '146', '138', '124'),
    ...solved(54, 'A', '158 kN (Option A)', 227),
  },

  // ── Item 55 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q55',
    number: 55,
    pageNumber: 203,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 18 — Weld Strength on Block Shear',
    text: 'Situation 18 (continued) – Find P (kN) based on block shear in the gusset along the weld.',
    options: opts('256', '191', '238', '217'),
    ...solved(55, 'D', '217 kN (Option D)', 227, 228),
  },

  // ── Item 56 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q56',
    number: 56,
    pageNumber: 204,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 19 — Required Base Plate Thickness',
    text: 'Situation 19 – The I-beam section is used as a column supported on a steel base plate as shown in Figure ST65-0215. The column is subjected to a axial force of P = 1200 kN and a lateral force H = 300 kN. All steels are A36 with Fy = 248 MPa.\n\nPlate dimension, B × W = 280 mm × 450 mm\n\nProperties of I-beam (S 15 × 50)\nbf = 143.3 mm    d = 381 mm\ntf = 15.8 mm    tw = 14 mm\n\nAllowable stresses:\nAllowable bending stress of plate = 0.75Fy\nAllowable shearing stress of bolt = 140 MPa\nAllowable shear stress of weld = 124 MPa\n\n56. What is the required plate thickness in mm?',
    figureSvg: psadNov2015Figure(
      'fig19_baseplate',
      'Figure ST65-0215: an I-beam column standing on a steel base plate, with the axial load P and lateral force H shown, and at the right the equivalent column section of width B and depth W used for the plate design.',
    ),
    options: opts('30 mm', '22 mm', '25 mm', '28 mm'),
    ...solved(56, 'D', '28 mm (Option D)', 228),
  },

  // ── Item 57 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q57',
    number: 57,
    pageNumber: 204,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 19 — Number of Anchor Bolts',
    text: 'Situation 19 (continued) – How many 22-mm bolts are required to resist the lateral force?',
    options: opts('4', '8', '6', '5'),
    ...solved(57, 'C', '6 bolts (Option C)', 228),
  },

  // ── Item 58 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q58',
    number: 58,
    pageNumber: 204,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 19 — Minimum Fillet Weld Length',
    text: 'Situation 19 (continued) – If the column is welded on the plate using 8 mm fillet weld, what is the minimum length of weld required to resist the lateral force?',
    options: opts('428 mm', '405 mm', '363 mm', '489 mm'),
    ...solved(58, 'A', '428 mm (Option A)', 229),
  },

  // ── Item 59 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q59',
    number: 59,
    pageNumber: 204,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 20 — Load Based on Bending',
    text: 'Situation 20 – A 9-m-long simply supported beam carries two equal vertical loads at its third points. The allowable bending stress of the beam is 164 MPa and the allowable average shearing stress is 98 MPa. Neglect the weight of the beam.\n\nBeam properties:\nbf = 286 mm    tw = 17 mm\nd = 482 mm    Ix = 911.5 × 10⁶ mm⁴\n\n59. Find P based on bending.',
    options: opts('206 kN', '296 kN', '324 kN', '185 kN'),
    ...solved(59, 'A', '206 kN (Option A)', 229),
  },

  // ── Item 60 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q60',
    number: 60,
    pageNumber: 204,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 20 — Load Based on Average Shear Stress',
    text: 'Situation 20 (continued) – Find P based on average shear stress.',
    options: opts('635 kN', '524 kN', '756 kN', '803 kN'),
    ...solved(60, 'D', '803 kN (Option D)', 229),
  },
];

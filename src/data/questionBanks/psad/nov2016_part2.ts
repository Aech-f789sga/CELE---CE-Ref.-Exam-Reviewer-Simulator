import { Question } from '../../../types/exam';
import { psadNov2016Figure } from '../../psadNov2016Images';
import { solved, opts } from './nov2016Helpers';

export const PSAD_NOV2016_PART2: Question[] = [
  // ── Item 21 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q21',
    number: 21,
    pageNumber: 402,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 5 — Welded Strut, Pin and Anchor Bolts',
    text: 'Situation 5 (continued)\n\n21. The bearing stress (MPa) between the anchor bolts and the base plate.',
    options: opts('41.4', '36.8', '65.3', '74.5'),
    ...solved(21, 'A', '41.4 MPa (Option A)', 424),
  },

  // ── Item 22 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q22',
    number: 22,
    pageNumber: 402,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 6 — Cylindrical Tank, Mohr\u2019s Circle',
    text: 'Situation 6 – An open cylindrical tank 500 mm in diameter and 3 mm thick is subjected to an internal pressure and axial tensile force, resulting to the final stresses given in the Mohr\u2019s circle shown.\n\na = 30 MPa, b = 90 MPa\n\n22. What is the magnitude of the internal pressure in MPa?',
    figureSvg: psadNov2016Figure(
      'figS6_mohr',
      'Situation 6: Mohr\u2019s circle for the tank wall — the two given normal stresses 30 MPa and 90 MPa plotted on the horizontal axis, the circle of radius R through both points, its centre C halfway between them, and the maximum and minimum principal stresses marked where the circle crosses the axis.',
    ),
    options: opts('0.12', '0.32', '0.68', '0.72'),
    ...solved(22, 'A', '0.12 MPa (Option A)', 424, 425),
  },

  // ── Item 23 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q23',
    number: 23,
    pageNumber: 403,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 6 — Cylindrical Tank, Mohr\u2019s Circle',
    text: 'Situation 6 (continued)\n\n23. What is the magnitude of the axial force in kN.',
    options: opts('248', '365', '518', '587'),
    ...solved(23, 'C', '518 kN (Option C)', 424, 425),
  },

  // ── Item 24 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q24',
    number: 24,
    pageNumber: 403,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 6 — Cylindrical Tank, Mohr\u2019s Circle',
    text: 'Situation 6 (continued)\n\n24. What is the maximum shearing stress (MPa) in the cylinder walls?',
    options: opts('60', '50', '45', '70'),
    ...solved(24, 'B', '50 MPa (Option B)', 424),
  },

  // ── Item 25 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q25',
    number: 25,
    pageNumber: 403,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 7 — Glued Square Post',
    text: 'Situation 7 – A square post is made of two parts, glued at plane abcd with an angle of α = 30° with the vertical. The allowable compressive stress at the glue is 5.2 MPa and the allowable shearing stress is 3.5 MPa. The axial load P = 36 kN.\n\n25. What is the minimum post dimension w (mm) without exceeding the allowable compressive stress at the glue?',
    figureSvg: psadNov2016Figure(
      'figS7_post',
      'Situation 7: a square post of side w carrying an axial load P on its top face, with the glued plane abcd drawn diagonally down the front face and the angle α marked between that plane and the vertical edge.',
    ),
    options: opts('72', '62', '42', '52'),
    ...solved(25, 'C', '42 mm (Option C)', 425),
  },

  // ── Item 26 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q26',
    number: 26,
    pageNumber: 403,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 7 — Glued Square Post',
    text: 'Situation 7 (continued)\n\n26. What is the minimum post dimension w (mm) without exceeding the allowable shearing stress at the glue?',
    options: opts('67', '78', '62', '54'),
    ...solved(26, 'A', '67 mm (Option A)', 425),
  },

  // ── Item 27 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q27',
    number: 27,
    pageNumber: 403,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 7 — Glued Square Post',
    text: 'Situation 7 (continued)\n\n27. What angle α will give the maximum shearing stress?',
    options: opts('30°', '45°', '60°', '75°'),
    ...solved(27, 'B', '45° (Option B)', 425),
  },

  // ── Item 28 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q28',
    number: 28,
    pageNumber: 403,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 8 — Cantilever With Eccentric Tip Load',
    text: 'Situation 8 – The cantilever beam shown is fixed at C.\n\nGiven:\nL = 2.5 m, a = 0.3 m\nP = 40 kN, W = 8 kN/m\n\n28. Calculate the moment (kN-m) at C.',
    figureSvg: psadNov2016Figure(
      'figS8_cant',
      'Situation 8: a cantilever fixed at C and running out to the left under a uniform load w over its full length L, with a vertical load P hung at the free end on an offset of a beyond the support point.',
    ),
    options: opts('25', '100', '125', '150'),
    ...solved(28, 'C', '125 kN-m (Option C)', 426),
  },

  // ── Item 29 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q29',
    number: 29,
    pageNumber: 403,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 8 — Cantilever With Eccentric Tip Load',
    text: 'Situation 8 (continued)\n\n29. Calculate the torque (kN-m) at C.',
    options: opts('10', '12', '18', '15'),
    ...solved(29, 'B', '12 kN-m (Option B)', 426),
  },

  // ── Item 30 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q30',
    number: 30,
    pageNumber: 403,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 8 — Cantilever With Eccentric Tip Load',
    text: 'Situation 8 (continued)\n\n30. Calculate the shear (kN) at C.',
    options: opts('60', '20', '40', '80'),
    ...solved(30, 'A', '60 kN (Option A)', 426),
  },

  // ── Item 31 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q31',
    number: 31,
    pageNumber: 404,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 9 — Beam With Overhead Hoist',
    text: 'Situation 9 – The beam AB shown in the figure is 5 m simply supported at A and B. The beam is loaded with three fixed concentrated loads and an overhead hoist carrying a load W.\n\nGiven:\nP₁ = P₂ = 300 kN\nP₃ = 200 kN\nW = 500 kN\n\n31. Find the distance x (meters) so that the resultant of the loads is at the midspan.',
    figureSvg: psadNov2016Figure(
      'figS9_beam',
      'Situation 9: a simply supported beam of span 5 m carrying three concentrated loads P₁, P₂ and P₃ spaced at 3 m, 5 m and 2 m from the left support, plus an overhead hoist of load W that can travel along the beam, its position measured as x.',
    ),
    options: opts('5', '6', '7', '4'),
    ...solved(31, 'A', 'x = 5 m (Option A)', 426),
  },

  // ── Item 32 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q32',
    number: 32,
    pageNumber: 404,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 9 — Beam With Overhead Hoist',
    text: 'Situation 9 (continued)\n\n32. Find the reaction at A (kN) when W is at the midspan.',
    options: opts('608.3', '691.7', '702.3', '587.4'),
    ...solved(32, 'A', '608.3 kN (Option A)', 426, 427),
  },

  // ── Item 33 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q33',
    number: 33,
    pageNumber: 404,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 9 — Beam With Overhead Hoist',
    text: 'Situation 9 (continued)\n\n33. Determine the maximum span moment (kN-m) when x = 0.',
    options: opts('1248.6', '1366.7', '1587.9', '1025.4'),
    ...solved(33, 'B', '1366.7 kN-m (Option B)', 427),
  },

  // ── Item 34 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q34',
    number: 34,
    pageNumber: 404,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 10 — Bridge Girder, H-Loading',
    text: 'Situation 10 – A 25 m simply supported girder of a bridge is crossed by a standard H-loading consisting of two wheel loads of 142.4 kN and 35.6 kN which are 4.3 m apart.\n\n34. Calculate the maximum support reaction in kN.',
    figureSvg: psadNov2016Figure(
      'figS10_beam',
      'Situation 10: the 25 m simply supported girder carrying the two H-loading wheel loads 142.4 kN and 35.6 kN at a fixed spacing d = 4.3 m, with the pair shown in an arbitrary position along the span.',
    ),
    options: opts('157.2', '189.3', '142.4', '171.9'),
    ...solved(34, 'D', '171.9 kN (Option D)', 427),
  },

  // ── Item 35 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q35',
    number: 35,
    pageNumber: 404,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 10 — Bridge Girder, H-Loading',
    text: 'Situation 10 (continued)\n\n35. Calculate the maximum span moment in kN-m.',
    options: opts('925.7', '836.4', '1123.5', '1037.3'),
    ...solved(35, 'D', '1037.3 kN-m (Option D)', 427, 428),
  },

  // ── Item 36 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q36',
    number: 36,
    pageNumber: 404,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 10 — Bridge Girder, H-Loading',
    text: 'Situation 10 (continued)\n\n36. Calculate the maximum shear at midspan in kN.',
    options: opts('96.3', '102.7', '82.9', '89.5'),
    ...solved(36, 'C', '82.9 kN (Option C)', 428),
  },

  // ── Item 37 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q37',
    number: 37,
    pageNumber: 405,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 11 — Propped Beam',
    text: 'Situation 11 – A propped beam 10 m in length has a flexural capacity of 680 kN-m and a web shear capacity of 820 kN. Its flexural rigidity EI = 65 × 10¹² N-mm².\n\n37. What is the load (kN/m) on the beam based on flexural capacity of the beam?',
    options: opts('54', '96', '76', '85'),
    ...solved(37, 'A', '54 kN/m (Option A)', 429),
  },

  // ── Item 38 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q38',
    number: 38,
    pageNumber: 405,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 11 — Propped Beam',
    text: 'Situation 11 (continued)\n\n38. What is the load (kN/m) on the beam based on web shear capacity of the beam?',
    options: opts('218', '131', '195', '264'),
    ...solved(38, 'B', '131 kN/m (Option B)', 429),
  },

  // ── Item 39 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q39',
    number: 39,
    pageNumber: 405,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 11 — Propped Beam',
    text: 'Situation 11 (continued)\n\n39. The prop is removed resulting to displacement at the free end of the beam. Find the required camber (m) to offset the deflection at its free end.',
    options: opts('3.8', '2.3', '1.05', '1.4'),
    ...solved(39, 'C', '1.05 m (Option C)', 429),
  },

  // ── Item 40 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q40',
    number: 40,
    pageNumber: 405,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 12 — Wooden Planks Retaining Soil',
    text: 'Situation 12 – Wooden planks 300 mm wide by 100 mm thick are used to retain soil with height of 3 m. The planks used can be assumed fixed at the base. The active soil exerts a pressure that varies linearly from 0 kPa at the top to 14.5 kPa at the fixed base of the wall. Consider 1 meter length of wall and use modulus of elasticity of wood as 8.5 × 10³ MPa.\n\n40. If the wall is propped at the top, compute the lateral force (kN) at the fixed end.',
    options: opts('17.4', '19.8', '4.35', '32.6'),
    ...solved(40, 'A', '17.4 kN (Option A)', 430),
  },
];

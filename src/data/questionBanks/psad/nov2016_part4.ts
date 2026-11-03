import { Question } from '../../../types/exam';
import { psadNov2016Figure } from '../../psadNov2016Images';
import { solved, opts } from './nov2016Helpers';

export const PSAD_NOV2016_PART4: Question[] = [
  // ── Item 61 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q61',
    number: 61,
    pageNumber: 414,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 19 — Reinforced Concrete T-Beam',
    text: 'Situation 19 – The section of a reinforced concrete beam is shown.\n\nGiven:\nBeam width, b = 400 mm\nEffective depth, d = 500 mm\nSlab thickness = 100 mm\nConcrete cover to 12 mm stirrups = 40 mm\nConcrete strength, f\u2032c = 27.5 MPa\nSteel strength, fy = 415 MPa\nBalanced reinforcement ratio, ρb = 0.028\n\n61. Using 28-mm-diameter tension bars, calculate the nominal moment capacity of the beam, in kN-m.',
    figureSvg: psadNov2016Figure(
      'figS19_tbeam',
      'Situation 19: the T-beam section — a 100 mm slab flange on a 400 mm wide web, five 28 mm tension bars in a single layer near the soffit, and the 12 mm stirrups inside the 40 mm cover.',
    ),
    options: opts('496', '392', '485', '551'),
    ...solved(61, 'D', '551 kN-m (Option D)', 440, 441),
  },

  // ── Item 62 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q62',
    number: 62,
    pageNumber: 414,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 19 — Reinforced Concrete T-Beam',
    text: 'Situation 19 (continued)\n\n62. If Mu = 550 kN-m and d = 500 mm, find the required diameter (mm) of tension steel reinforcement as shown.',
    options: opts('40', '32', '25', '28'),
    ...solved(62, 'B', '32 mm (Option B)', 441),
  },

  // ── Item 63 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q63',
    number: 63,
    pageNumber: 414,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 19 — Reinforced Concrete T-Beam',
    text: 'Situation 19 (continued)\n\n63. What is the minimum value of bw according to the provisions of code for concrete cover of bars?',
    options: opts('356 mm', '321 mm', '340 mm', '305 mm'),
    ...solved(63, 'A', '356 mm (Option A)', 442),
  },

  // ── Item 64 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q64',
    number: 64,
    pageNumber: 414,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 20 — Beam Shear Reinforcement',
    text: 'Situation 20 – A rectangular beam subjected to shear and flexure only. Given the following data:\n\nBeam dimension, b × h = 350 mm × 450 mm\nEffective cover to centroid of main bar = 75 mm\nConcrete strength, f\u2032c = 27.5\nSteel yield strength:\n  Main reinforcement, fy = 415 MPa\n  Stirrups, fyt = 275 MPa\nReduction factor in shear = 0.75\n\n64. If the beam is reinforced with three legs of 10-mm-diameter stirrups spaced at 90 mm on centers, calculate the design shear strength, Vu in kN.',
    options: opts('384', '288', '298', '336'),
    ...solved(64, 'B', '288 kN (Option B)', 442),
  },

  // ── Item 65 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q65',
    number: 65,
    pageNumber: 414,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 20 — Beam Shear Reinforcement',
    text: 'Situation 20 (continued)\n\n65. To develop a shear strength of 375 kN, calculate the spacing of three legs of 16 mm stirrups.',
    options: opts('180', '130', '160', '110'),
    ...solved(65, 'C', '160 mm (Option C)', 443),
  },

  // ── Item 66 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q66',
    number: 66,
    pageNumber: 415,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 20 — Beam Shear Reinforcement',
    text: 'Situation 20 (continued)\n\n66. Which of the following gives the allowable maximum spacing of three legs of 10-mm-diameter stirrups in part 2?',
    options: opts('325', '185', '375', '93'),
    ...solved(66, 'D', '93 mm (Option D)', 443),
  },

  // ── Item 67 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q67',
    number: 67,
    pageNumber: 415,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 21 — Tied Column, Biaxial Shear',
    text: 'Situation 21 – Given the following data for the column section shown. Use Section 5.11.3 in Situation 22.\n\nDimension, b × h = 450 mm × 600 mm\nAs = 10 – 28 mm diameter\nTies = 12 mm diameter\nf\u2032c = 27.5 MPa\nMain bar, fy = 415 MPa\nties, fyt = 275 MPa\nSpacing of ties = 90 mm\nReduction factor (shear), φ = 0.75\nConcrete cover to centroid of main bar = 65 mm\nFactored axial load = 1250 kN\n\n67. Compute the maximum value of Vux (kN) using the simplified calculation for Vc.',
    options: opts('625', '830', '735', '790'),
    ...solved(67, 'A', '625 kN (Option A)', 443, 444),
  },

  // ── Item 68 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q68',
    number: 68,
    pageNumber: 415,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 21 — Tied Column, Biaxial Shear',
    text: 'Situation 21 (continued)\n\n68. Compute the maximum value of Vuy (kN) using the simplified calculation for Vc.',
    options: opts('600', '700', '900', '800'),
    ...solved(68, 'A', '600 kN (Option A)', 444),
  },

  // ── Item 69 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q69',
    number: 69,
    pageNumber: 415,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 21 — Tied Column, Biaxial Shear',
    text: 'Situation 21 (continued)\n\n69. Compute the maximum spacing (mm) of lateral reinforcement for maximum value of Vux.',
    options: opts('260', '140', '280', '130'),
    ...solved(69, 'D', '130 mm (Option D)', 444),
  },

  // ── Item 70 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q70',
    number: 70,
    pageNumber: 416,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 22 — Column Under Load Reversal',
    text: 'Situation 22 – A reinforced concrete column is reinforced with eight 32 mm diameter bars with clear concrete cover of 40 mm to the 12 mm ties. Due to the reversal of lateral forces, the design axial load due to dead, live, and wind loads are as follows:\n\nAlong the positive x-axis:\nMu = −420 kN-m, Nu = 1320 kN, Vu = 370 kN\n\nAlong the negative x-axis:\nMu = +420 kN-m, Nu = 450 kN, Vu = 370 kN\n\nf\u2032c = 28 MPa, fy = 415 MPa\nb = 400 mm, h = 600 mm\n\n70. Calculate the nominal shear strength (kN) of concrete along the positive x-axis using the simplified calculation.',
    options: opts('230', '188', '295', '261'),
    ...solved(70, 'D', '261 kN (Option D)', 445),
  },

  // ── Item 71 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q71',
    number: 71,
    pageNumber: 416,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 22 — Column Under Load Reversal',
    text: 'Situation 22 (continued)\n\n71. Calculate the nominal shear strength (kN) of concrete along the negative x-axis using the simplified calculation.',
    options: opts('174', '235', '152', '212'),
    ...solved(71, 'D', '212 kN (Option D)', 445),
  },

  // ── Item 72 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q72',
    number: 72,
    pageNumber: 416,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 22 — Column Under Load Reversal',
    text: 'Situation 22 (continued)\n\n72. Calculate the required spacing (mm) of shear reinforcement. Use fyt = 275 MPa.',
    options: opts('260', '220', '320', '190'),
    ...solved(72, 'B', '220 mm (Option B)', 445, 446),
  },

  // ── Item 73 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q73',
    number: 73,
    pageNumber: 418,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 23 — Strip Footing',
    text: 'Situation 23 – A 1.75-m-wide strip footing supports a 250-mm-thick wall. Analyse 1 m length of wall.\n\nGiven:\nThickness of footing, t = 300 mm\nConcrete cover to centroid of reinforcement = 100 mm\nDead load, D = 175 kN\nLive load, L = 89 kN/m\nLoad combination, U = 1.2D + 1.6L\nConcrete strength, f\u2032c = 27.5 MPa\nSteel strength, fy = 415 MPa\nUnit weight of concrete = 23.6 kN/m³\nAllowable soil pressure = 96 kPa\n\n73. Calculate the required spacing (mm) of 16-mm-diameter main bars.',
    options: opts('250', '225', '275', '300'),
    ...solved(73, 'A', '250 mm (Option A)', 446, 447),
  },

  // ── Item 74 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q74',
    number: 74,
    pageNumber: 418,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 23 — Strip Footing',
    text: 'Situation 23 (continued)\n\n74. Calculate the critical nominal wide beam shear stress in MPa. Use φ = 0.75.',
    options: opts('0.92', '0.81', '0.74', '0.98'),
    ...solved(74, 'C', '0.74 MPa (Option C)', 447),
  },

  // ── Item 75 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q75',
    number: 75,
    pageNumber: 418,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 23 — Strip Footing',
    text: 'Situation 23 (continued)\n\n75. Determine the required width (m) of footing without exceeding the allowable soil pressure, assuming a footing thickness of 250 mm.',
    options: opts('3.00', '2.25', '2.50', '2.75'),
    ...solved(75, 'A', '2.93 m — keyed to 3.00 m (Option A)', 447),
  },
];

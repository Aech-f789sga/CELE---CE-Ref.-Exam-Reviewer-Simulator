import { Question } from '../../../types/exam';
import {
  psadFigure,
  psadMay2022SolutionImages,
  psadMay2022SolutionPage,
  psadMay2022SolutionPageEnd,
} from '../../psadMay2022Images';

const sol = (situation: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: psadMay2022SolutionPage(situation),
  pageNumberEnd: psadMay2022SolutionPageEnd(situation),
  images: psadMay2022SolutionImages(situation),
});

const opt = (a: string, b: string, c: string, d: string) => [
  { label: 'A' as const, text: a },
  { label: 'B' as const, text: b },
  { label: 'C' as const, text: c },
  { label: 'D' as const, text: d },
];

const SITUATION_19 =
  'Situation 19 — Load analysis of the girder gives the following factored forces:\n\n  Vu = 350 kN;  Tu = 65 kN-m\nBeam dimension b × h = 400 mm × 620 mm\nConcrete strength, f\'c = 21 MPa (normal weight)\nLongitudinal steel, fy = 415 MPa\nTransverse reinforcement = 12 mm (U-stirrup)\nLateral ties, fyt = 275 MPa\nAllowable concrete shear stress = 0.78 MPa\nReduction factor for shear and torsion = 0.75\nClear concrete cover to stirrups = 40 mm\nConcrete cover:\n  To centroid of tension steel = 70 mm\n  To centroid of compression steel = 70 mm\n\nUse FIGURE CODE-005.';

const SITUATION_20 =
  'Situation 20 — A 450-mm square tied column is reinforced with eight 25-mm-diameter bars equally distributed on its sides. The column unsupported height is 2.60 m and sidesway is prevented by shear walls (K = 1). Concrete strength is 20.7 MPa and steel strength is 415 MPa. Use 40 mm cover measure from center of main reinforcement. Tie diameter is 12 mm. Use Es = 200 GPa.';

const SITUATION_21 =
  "Situation 21 — Refer to the column interaction diagram shown.\n\nGiven:\n  Column diameter = 600 mm\n  Number of bars = 16 pcs\n  Material strength:\n    Concrete, f'c = 27.6 MPa\n    Main bars, fy = 414 MPa\n  Factored axial load, Pu = 3510 kN\n  Factored moment, Mu = 525 kN-m";

const SITUATION_22 =
  "Situation 22 — Given the following data of a square column footing:\n\n  Footing dimension: 2 m × 2 m\n  Column dimension: 400 mm × 400 mm\n  Effective depth of footing d = 350 mm\n  Material strength:\n    Concrete, f'c = 27.5 MPa\n    Steel, fy = 415 MPa\n  Allowable shear stress at ultimate loads:\n    Two-way shear = 1.73 MPa\n    One-way shear = 0.89 MPa\n  Reduction factor for shear = 0.75\n  Reduction factor for flexure = 0.90";

const SITUATION_23 =
  'Situation 23 — Given the following data of the pile cap shown:\n\nDimensions:\n  a = 0.6 m;  b = c = 2.4 m\n  Column dimension = 600 mm × 600 mm\n  Effective depth of footing, d = 600 mm\n  Pile diameter = 360 mm\n  Ultimate pile capacity = 290 kN\nColumn service loads:\n  Axial dead load, D = 430 kN\n  Axial live load, L = 360 kN\n  Axial earthquake load, E = 220 kN\n  Moment due to earthquake = 180 kN-m\nLoad combination:\n  U = 1.2D + 1.6L\n  U = 1.32D + 1.1L + 1.1E\nReduction factor for shear = 0.75';

const SITUATION_24 =
  'Situation 24 — Answer the following behaviour of materials:';

export const PSAD_MAY2022_PART4: Question[] = [
  // --- SITUATION 19 (Items 55 - 57) ---
  {
    id: 'psad-may2022-q55',
    number: 55,
    pageNumber: 448,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 19 — Girder Shear and Torsion: Stirrup Spacing for Shear',
    text: `${SITUATION_19}\n\n55. Compute the required spacing (mm) of transverse reinforcement due to shear only.`,
    figureSvg: psadFigure(19, 'Situation 19: FIGURE CODE-005 torsion provisions'),
    figureCaption: 'Situation 19: FIGURE CODE-005 torsion provisions',
    options: opt('115', '162', '137', '187'),
    correctAnswer: 'A',
    solution: { ...sol(19), finalAnswer: 's = 115 mm (Option A)' },
  },
  {
    id: 'psad-may2022-q56',
    number: 56,
    pageNumber: 448,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 19 — Girder Shear and Torsion: Stirrup Spacing for Torque',
    text: '56. Compute the required spacing (mm) of transverse reinforcement due to torque only.',
    options: opt('75', '99', '115', '62'),
    correctAnswer: 'B',
    solution: { ...sol(19), finalAnswer: 's = 99 mm (Option B)' },
  },
  {
    id: 'psad-may2022-q57',
    number: 57,
    pageNumber: 449,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 19 — Girder Shear and Torsion: Combined Spacing',
    text: '57. Compute the required spacing (mm) of transverse reinforcement due to combined shear and torsion.',
    options: opt('53', '42', '68', '76'),
    correctAnswer: 'A',
    solution: { ...sol(19), finalAnswer: 's = 53 mm (Option A)' },
  },

  // --- SITUATION 20 (Items 58 - 60) ---
  {
    id: 'psad-may2022-q58',
    number: 58,
    pageNumber: 451,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 20 — Tied Column: Maximum Nominal Axial Strength',
    text: `${SITUATION_20}\n\n58. Compute the maximum nominal axial strength (kN) of the column.`,
    options: opt('5,123', '4,269', '4,098', '4,355'),
    correctAnswer: 'C',
    solution: { ...sol(20), finalAnswer: '4,098 kN (Option C)' },
  },
  {
    id: 'psad-may2022-q59',
    number: 59,
    pageNumber: 451,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 20 — Tied Column: Balanced Nominal Load',
    text: '59. Determine the balanced nominal load (kN). Use concrete strain of 0.003 and steel yield strain of fy/Es.',
    options: opt('2,365', '1,673', '1,952', '2,087'),
    correctAnswer: 'B',
    solution: { ...sol(20), finalAnswer: '1,673 kN (Option B)' },
  },
  {
    id: 'psad-may2022-q60',
    number: 60,
    pageNumber: 451,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 20 — Tied Column: Balanced Nominal Moment',
    text: '60. How much is the balanced nominal moment (kN-m)?',
    options: opt('632', '487', '563', '425'),
    correctAnswer: 'D',
    solution: { ...sol(20), finalAnswer: '425 kN-m (Option D)' },
  },

  // --- SITUATION 21 (Items 61 - 63) ---
  {
    id: 'psad-may2022-q61',
    number: 61,
    pageNumber: 451,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 21 — Column Interaction Diagram: Kn',
    text: `${SITUATION_21}\n\n61. Compute the value of Kn.`,
    figureSvg: psadFigure(21, 'Situation 21: column interaction diagram C4-60.8'),
    figureCaption: 'Situation 21: column interaction diagram C4-60.8',
    options: opt('0.7', '0.8', '0.5', '0.6'),
    correctAnswer: 'D',
    solution: { ...sol(21), finalAnswer: 'Kn = 0.6 (Option D)' },
  },
  {
    id: 'psad-may2022-q62',
    number: 62,
    pageNumber: 452,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 21 — Column Interaction Diagram: Rn',
    text: '62. Compute the value of Rn.',
    options: opt('0.20', '0.12', '0.18', '0.15'),
    correctAnswer: 'D',
    solution: { ...sol(21), finalAnswer: 'Rn = 0.15 (Option D)' },
  },
  {
    id: 'psad-may2022-q63',
    number: 63,
    pageNumber: 452,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 21 — Column Interaction Diagram: Required Bar Size',
    text: '63. Determine the required bar size (mm).',
    options: opt('25', '22', '28', '20'),
    correctAnswer: 'A',
    solution: { ...sol(21), finalAnswer: '25 mm bars (Option A)' },
  },

  // --- SITUATION 22 (Items 64 - 66) ---
  {
    id: 'psad-may2022-q64',
    number: 64,
    pageNumber: 452,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 22 — Square Footing: Wide-Beam Shear Capacity',
    text: `${SITUATION_22}\n\n64. Compute the maximum factored axial load capacity (kN) of the footing based on wide-beam shear.`,
    options: opt('2365', '2075', '2875', '3274'),
    correctAnswer: 'B',
    solution: { ...sol(22), finalAnswer: '2075 kN (Option B)' },
  },
  {
    id: 'psad-may2022-q65',
    number: 65,
    pageNumber: 453,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 22 — Square Footing: Punching Shear Capacity',
    text: '65. Compute the maximum factored axial load capacity (kN) of the footing based on punching shear.',
    options: opt('1060', '2080', '1580', '1790'),
    correctAnswer: 'C',
    solution: { ...sol(22), finalAnswer: '1580 kN (Option C)' },
  },
  {
    id: 'psad-may2022-q66',
    number: 66,
    pageNumber: 453,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 22 — Square Footing: Flexural Steel',
    text: '66. If the required moment at the column face at ultimate condition is 350 kN-m, compute the required number of 20 mm diameter bars in each direction.',
    options: opt('9', '8', '10', '11'),
    correctAnswer: 'A',
    solution: { ...sol(22), finalAnswer: '9 bars (Option A)' },
  },

  // --- SITUATION 23 (Items 67 - 69) ---
  {
    id: 'psad-may2022-q67',
    number: 67,
    pageNumber: 453,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 23 — Pile Cap: Critical Wide-Beam Shear Stress',
    text: `${SITUATION_23}\n\n67. Calculate the critical wide beam shear stress (MPa).`,
    figureSvg: psadFigure(23, 'Situation 23: pile cap plan with four piles and column'),
    figureCaption: 'Situation 23: pile cap plan with four piles and column',
    options: opt('0.349', '0.314', '0.387', '0.261'),
    correctAnswer: 'A',
    solution: { ...sol(23), finalAnswer: '0.349 MPa (Option A)' },
  },
  {
    id: 'psad-may2022-q68',
    number: 68,
    pageNumber: 453,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 23 — Pile Cap: Punching Shear Stress at Column',
    text: '68. Compute the punching shear stress (MPa) of the column.',
    options: opt('0.489', '0.447', '0.536', '0.335'),
    correctAnswer: 'B',
    solution: { ...sol(23), finalAnswer: '0.447 MPa (Option B)' },
  },
  {
    id: 'psad-may2022-q69',
    number: 69,
    pageNumber: 453,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 23 — Pile Cap: Punching Shear at Most Loaded Pile',
    text: '69. Compute the punching shear stress (MPa) in the most heavily loaded pile.',
    options: opt('0.21', '0.56', '0.16', '0.36'),
    correctAnswer: 'A',
    solution: { ...sol(23), finalAnswer: '0.21 MPa (Option A)' },
  },

  // --- SITUATION 24 (Items 70 - 72) ---
  {
    id: 'psad-may2022-q70',
    number: 70,
    pageNumber: 454,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 24 — Behaviour of Materials',
    text: `${SITUATION_24}\n\n70. A material condition that causes it to deform permanently even due to slight increase of stress.`,
    options: opt('plasticity', 'yielding', 'fatigue', 'creep'),
    correctAnswer: 'B',
    solution: { ...sol(24), finalAnswer: 'Yielding (Option B)' },
  },
  {
    id: 'psad-may2022-q71',
    number: 71,
    pageNumber: 454,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 24 — Behaviour of Materials',
    text: '71. Fracture caused when a material is subjected to repeated cycles of stress or strain.',
    options: opt('yielding', 'creep', 'plasticity', 'fatigue'),
    correctAnswer: 'D',
    solution: { ...sol(24), finalAnswer: 'Fatigue (Option D)' },
  },
  {
    id: 'psad-may2022-q72',
    number: 72,
    pageNumber: 454,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 24 — Behaviour of Materials',
    text: '72. When a material is loaded over a long period, it causes it to deform continuously until fracture.',
    options: opt('creep', 'yielding', 'fatigue', 'plasticity'),
    correctAnswer: 'A',
    solution: { ...sol(24), finalAnswer: 'Creep (Option A)' },
  },
];

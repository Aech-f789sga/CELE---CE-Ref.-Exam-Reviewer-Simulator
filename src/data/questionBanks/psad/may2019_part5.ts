import { Question } from '../../../types/exam';
import {
  psadMay2019Figure,
  psadMay2019SolutionImages,
  psadMay2019SolutionPage,
  psadMay2019SolutionPageEnd,
} from '../../psadMay2019Images';

const solution = (n: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: psadMay2019SolutionPage(n),
  pageNumberEnd: psadMay2019SolutionPageEnd(n),
  images: psadMay2019SolutionImages(n),
});

/** Situation 18 — rectangular tied column under shear. */
const SITUATION_18 =
  'Situation 18 — Given the following data of the column shown:\n' +
  'Dimension, $B \\times L = 600$ mm $\\times$ 450 mm\n' +
  'Longitudinal bars $= 16$ pcs of 25-mm-diameter\n' +
  'Ties $= 12$-mm-diameter spaced at 100 mm\n' +
  'Steel strengths: $f_y = 414$ MPa, $f_{yh} = 275$ MPa\n' +
  "Concrete strength, f'c $= 27.5$ MPa\n" +
  'Effective cover to the centroid of longitudinal steel $= 65$ mm\n' +
  'Allowable concrete shear stress $= 1.75$ MPa\n' +
  'Strength reduction factor for shear $= 0.75$';

/** Situation 19 — nine-pile footing under biaxial moment. */
const SITUATION_19 =
  'Situation 19 — Refer to the figure shown.\n' +
  'The pile footing supports a column, 600 mm x 600 mm at the center.\n' +
  'The piles are precast concrete with 350 mm x 350 mm dimension.\n\n' +
  'Given:\n' +
  'Net load on the footing at Ultimate Condition:\n' +
  '$P_u = 2700$ kN\n' +
  '$M_{ux} = 108$ kN-m\n' +
  '$M_{uy} = 165$ kN-m\n' +
  'Effective depth of the footing $= 400$ mm\n\n' +
  'Dimensions:\n' +
  '$a = 0.6$ m\n' +
  '$b = 1$ m\n' +
  '$c = 1.2$ m\n' +
  '$d = 0.6$ m\n\n' +
  'Strength Reduction Factor\n' +
  'For shear $= 0.75$\n' +
  'For moment $= 0.90$';

/** Situation 20 — combined footing with its shear diagram. */
const SITUATION_20 =
  'Situation 20 — A combined footing and its corresponding shear diagram due to factored ' +
  'load is shown.\n\n' +
  'Given: Dimensions:\n' +
  '$a = b = d = 0.4$ m\n' +
  '$c = 3.5$ m\n' +
  'Footing width, $W = 2$ m\n' +
  'Effective depth $= 500$ mm\n\n' +
  'Shear diagram:\n' +
  '$e = 156.8$ kN\n' +
  '$f = -610.8$ kN\n' +
  '$g = 761.2$ kN\n\n' +
  "Concrete strength, f'c $= 27.5$ MPa\n" +
  'Steel strength, $f_y = 414$ MPa\n' +
  'Main bar diameter $= 20$ mm\n' +
  'Reduction factors: Moment $= 0.90$, Shear $= 0.75$';

/** Situation 21 — spiral column sized from an interaction diagram. */
const SITUATION_21 =
  'Situation 21 — For the spiral column shown in the figure.\n\n' +
  'Given:\n' +
  "$f'_c = 27.5$ MPa\n" +
  '$f_y = 414$ MPa\n' +
  '$K_n = 0.80$\n' +
  '$R_n = 0.18$\n' +
  'Reinforcement steel ratio, $\\rho_g = 0.03$\n' +
  'Diameter of spiral column $= 400$ mm\n' +
  'Strength reduction factor $= 0.75$';

/** Situation 22 — rectangular tied column sized from an interaction diagram. */
const SITUATION_22 =
  'Situation 22 — For the rectangular tied column shown in the figure.\n\n' +
  'Given:\n' +
  "$f'_c = 27.5$ MPa; $f_y = 414$ MPa\n" +
  'Reinforcement steel ratio, $\\rho_g = 0.02$\n' +
  'Dimensions ($b \\times h$) $= 600$ mm $\\times$ 400 mm\n' +
  'Strength reduction factor $= 0.65$';

export const PSAD_MAY2019_PART5: Question[] = [
  // Item 57
  {
    id: 'psad-may2019-q57',
    number: 57,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Upper Limit on Column Shear Strength',
    text: `${SITUATION_18}\n\nWhat is the maximum possible shear strength (kN) of the column along the $x$-axis?`,
    options: [
      { label: 'A', text: '986' },
      { label: 'B', text: '1120' },
      { label: 'C', text: '950' },
      { label: 'D', text: '1267' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(57), finalAnswer: '950.38 kN (Option C)' },
  },

  // Item 58
  {
    id: 'psad-may2019-q58',
    number: 58,
    pageNumber: 76,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Punching Shear Stress at a Pile',
    text: `${SITUATION_19}\n\nDetermine the critical punching shear stress (MPa) of one pile due to axial load.`,
    figureSvg: psadMay2019Figure(
      58,
      'Figure: Pile cap plan with nine piles, centre column and dimensions a, b, c and d'
    ),
    figureCaption: 'Pile cap plan with the column at the centre',
    options: [
      { label: 'A', text: '0.54' },
      { label: 'B', text: '0.68' },
      { label: 'C', text: '0.25' },
      { label: 'D', text: '0.33' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(58), finalAnswer: '0.33 MPa (Option D)' },
  },

  // Item 59
  {
    id: 'psad-may2019-q59',
    number: 59,
    pageNumber: 76,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Punching Shear Stress at the Column',
    text: `${SITUATION_19}\n\nDetermine the punching shear stress (MPa) of the column due to axial load.`,
    options: [
      { label: 'A', text: '1.5' },
      { label: 'B', text: '2.0' },
      { label: 'C', text: '2.5' },
      { label: 'D', text: '3.0' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(59), finalAnswer: '2.0 MPa (Option B)' },
  },

  // Item 60
  {
    id: 'psad-may2019-q60',
    number: 60,
    pageNumber: 76,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Punching Shear under Axial Load and Moment',
    text: `${SITUATION_19}\n\nDetermine the critical punching shear stress (MPa) due to axial and moment loads of the pile cap.`,
    options: [
      { label: 'A', text: '2.0' },
      { label: 'B', text: '3.0' },
      { label: 'C', text: '1.5' },
      { label: 'D', text: '2.5' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(60), finalAnswer: '2 MPa, governed by the column (Option A)' },
  },

  // Item 61
  {
    id: 'psad-may2019-q61',
    number: 61,
    pageNumber: 77,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Flexural Steel of a Combined Footing',
    text: `${SITUATION_20}\n\nDetermine the required number of bars at critical moment.`,
    figureSvg: psadMay2019Figure(
      61,
      'Figure: Combined footing elevation with two columns and the corresponding shear diagram e-f-g-h'
    ),
    figureCaption: 'Combined footing and its shear diagram',
    options: [
      { label: 'A', text: '10' },
      { label: 'B', text: '12' },
      { label: 'C', text: '11' },
      { label: 'D', text: '13' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(61), finalAnswer: '10.8, use 11 bars (Option C)' },
  },

  // Item 62
  {
    id: 'psad-may2019-q62',
    number: 62,
    pageNumber: 77,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Bar Spacing in a Combined Footing',
    text: `${SITUATION_20}\n\nDetermine the spacing of bars, in mm, at the face of the column. Use 75 mm clear cover.`,
    options: [
      { label: 'A', text: '90' },
      { label: 'B', text: '180' },
      { label: 'C', text: '95' },
      { label: 'D', text: '105' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(62), finalAnswer: '183 mm, taken as 180 (Option B)' },
  },

  // Item 63
  {
    id: 'psad-may2019-q63',
    number: 63,
    pageNumber: 77,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Wide Beam Shear Stress',
    text: `${SITUATION_20}\n\nDetermine the critical wide beam shear stress, in MPa.`,
    options: [
      { label: 'A', text: '1.02' },
      { label: 'B', text: '0.75' },
      { label: 'C', text: '0.81' },
      { label: 'D', text: '0.57' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(63), finalAnswer: '0.754 MPa (Option B)' },
  },

  // Item 64
  {
    id: 'psad-may2019-q64',
    number: 64,
    pageNumber: 78,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Longitudinal Bars of a Spiral Column',
    text: `${SITUATION_21}\n\nWhat is the diameter (mm) of 12 pcs the longitudinal bars?`,
    figureSvg: psadMay2019Figure(
      64,
      'Figure: Nominal load-moment strength interaction diagram for the spiral column, with the column section inset'
    ),
    figureCaption: 'Nominal load-moment strength interaction diagram',
    options: [
      { label: 'A', text: '18' },
      { label: 'B', text: '20' },
      { label: 'C', text: '25' },
      { label: 'D', text: '28' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(64), finalAnswer: '20 mm (Option B)' },
  },

  // Item 65
  {
    id: 'psad-may2019-q65',
    number: 65,
    pageNumber: 78,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Axial Capacity of a Spiral Column',
    text: `${SITUATION_21}\n\nWhat is the maximum axial load $P_u$ (kN) that the spiral column could support?`,
    options: [
      { label: 'A', text: '2563' },
      { label: 'B', text: '3254' },
      { label: 'C', text: '3748' },
      { label: 'D', text: '2811' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(65), finalAnswer: '2811 kN (Option D)' },
  },

  // Item 66
  {
    id: 'psad-may2019-q66',
    number: 66,
    pageNumber: 79,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Factored Moment on a Spiral Column',
    text: `${SITUATION_21}\n\nCompute the factored moment $M_u$ (kN-m) acting on the column.`,
    options: [
      { label: 'A', text: '163' },
      { label: 'B', text: '214' },
      { label: 'C', text: '186' },
      { label: 'D', text: '249' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(66), finalAnswer: '186.6 kN-m (Option C)' },
  },

  // Item 67
  {
    id: 'psad-may2019-q67',
    number: 67,
    pageNumber: 79,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Longitudinal Bars of a Tied Column',
    text: `${SITUATION_22}\n\nHow many 20 mm diameter bars are required for the rectangular tied column?`,
    figureSvg: psadMay2019Figure(
      67,
      'Figure: Nominal load-moment strength interaction diagram for the rectangular tied column, with the column section inset'
    ),
    figureCaption: 'Nominal load-moment strength interaction diagram for the tied column',
    options: [
      { label: 'A', text: '16' },
      { label: 'B', text: '20' },
      { label: 'C', text: '14' },
      { label: 'D', text: '22' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(67), finalAnswer: '15.3, use 16 bars (Option A)' },
  },

  // Item 68
  {
    id: 'psad-may2019-q68',
    number: 68,
    pageNumber: 80,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Maximum Axial Load of a Tied Column',
    text: `${SITUATION_22}\n\nWhat is the maximum nominal axial load $P_n$ (kN) that the column could carry?`,
    options: [
      { label: 'A', text: '7485' },
      { label: 'B', text: '5354' },
      { label: 'C', text: '3892' },
      { label: 'D', text: '5988' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(68), finalAnswer: '3892.2 kN (Option C)' },
  },

  // Item 69
  {
    id: 'psad-may2019-q69',
    number: 69,
    pageNumber: 80,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Column Dimension from an Interaction Diagram',
    text: `${SITUATION_22}\n\nGiven:\n$K_n = 0.8$\n$R_n = 0.205$\n\nIf reinforcement steel ratio, $\\rho_g = 0.03$, what is the required length (mm) of side $b$ of the column if $h = 400$ mm?`,
    options: [
      { label: 'A', text: '620' },
      { label: 'B', text: '650' },
      { label: 'C', text: '680' },
      { label: 'D', text: '670' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(69), finalAnswer: '667 mm, use 670 mm (Option D)' },
  },
];

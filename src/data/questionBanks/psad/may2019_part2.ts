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

/** Situation 4 — five-panel truss (items 14-15 share the same situation). */
const SITUATION_4 =
  'Situation 4 — Refer to the truss shown:\n\n' +
  'Given:\n$s = 3$ m\n$h = 6$ m\n$P = 2$ kN';

/** Situation 5 — bridge truss under a single moving-type panel load. */
const SITUATION_5 =
  'Situation 5 — Refer to the bridge truss shown in the figure, $L = 6$ m, $s = 3$ m, ' +
  '$P = 116$ kN, $\\theta = 45^\\circ$.';

/** Situation 6 — flag pole guyed by three wires. */
const SITUATION_6 =
  'Situation 6 — A flag pole is supported by tension wires $AB$, $AC$ and $AD$ to resist ' +
  'an uplift force of 185 N acting on the axis of the pole. In this problem, ' +
  '$a = 3$ m, $b = 4$ m and $h = 12$ m.';

/** Situation 7 — beam on a quarter-circular arc. */
const SITUATION_7 =
  'Situation 7 — The beam $BC$ shown is supported by a quarter-circular arc $AC$ having a ' +
  'radius of 4 m. The frame is pin-supported at $A$, $B$ and $C$. The pins at $A$ and $B$ are ' +
  'in single shear while the pin at $C$ is in double shear. Allowable shear stress of the pin ' +
  'is 112 MPa. $w = 3$ kN/m.';

/** Situation 8 — man walking across a log. */
const SITUATION_8 =
  'Situation 8 — A man weighing 1.2 kN walks through a log of wood 250 mm in diameter and ' +
  'simply supported at a length of 3 m.';

/** Situation 9 — floor framing with a spandrel-type beam BEHK. */
const SITUATION_9 =
  'Situation 9 — Refer to the figure shown:\n\n' +
  'LOADS ON BEAM BEHK:\n' +
  'Dead load = 9.6 kN/m (all weights included)\n' +
  'Live load = 10 kN/m\n' +
  '$U = 1.2D + 1.6L$\n\n' +
  'DIMENSIONS:\n' +
  '$L_1 = L_2 = 5.5$ m\n' +
  '$S = 3$ m\n' +
  'Slab thickness, $t = 100$ mm\n' +
  'Beam $b \\times h = 300$ mm $\\times$ 400 mm';

export const PSAD_MAY2019_PART2: Question[] = [
  // Item 15
  // The booklet prints "member JE" for both items 14 and 15; the duplicate label
  // is preserved. The printed solutions give 3.35 T for item 14 and 1.12 C here.
  {
    id: 'psad-may2019-q15',
    number: 15,
    pageNumber: 63,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Structural Analysis — Method of Sections on a Truss',
    text: `${SITUATION_4}\n\nDetermine the axial force (kN) in member $JE$.`,
    options: [
      { label: 'A', text: '12.3 C' },
      { label: 'B', text: '12.3 T' },
      { label: 'C', text: '1.12 T' },
      { label: 'D', text: '1.12 C' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(15), finalAnswer: '1.12 kN compression (Option D)' },
  },

  // Item 16
  {
    id: 'psad-may2019-q16',
    number: 16,
    pageNumber: 64,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Structural Analysis — Bridge Truss, Top Chord Force',
    text: `${SITUATION_5}\n\nCalculate the axial force (kN) of member $JK$.`,
    figureSvg: psadMay2019Figure(
      16,
      'Figure: Bridge truss A-B-C-D-E with top chord J-K and diagonals, panel width s and height L'
    ),
    figureCaption: 'Bridge truss with load P at the centre bottom joint',
    options: [
      { label: 'A', text: '116 T' },
      { label: 'B', text: '58 C' },
      { label: 'C', text: '58 T' },
      { label: 'D', text: '116 C' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(16), finalAnswer: '116 kN compression (Option D)' },
  },

  // Item 17
  {
    id: 'psad-may2019-q17',
    number: 17,
    pageNumber: 64,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Structural Analysis — Bridge Truss, Diagonal Force',
    text: `${SITUATION_5}\n\nCalculate the axial force (kN) of member $GC$.`,
    options: [
      { label: 'A', text: '63.82 C' },
      { label: 'B', text: '82.02 C' },
      { label: 'C', text: '82.02 T' },
      { label: 'D', text: '63.82 T' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(17), finalAnswer: '82.02 kN tension (Option C)' },
  },

  // Item 18
  {
    id: 'psad-may2019-q18',
    number: 18,
    pageNumber: 64,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Structural Analysis — Bridge Truss, Bottom Chord Force',
    text: `${SITUATION_5}\n\nCalculate the axial force of member $BC$, in kN.`,
    options: [
      { label: 'A', text: '58 T' },
      { label: 'B', text: '58 C' },
      { label: 'C', text: '29 T' },
      { label: 'D', text: '29 C' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(18), finalAnswer: '58 kN tension (Option A)' },
  },

  // Item 19
  {
    id: 'psad-may2019-q19',
    number: 19,
    pageNumber: 64,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Statics — Space Equilibrium of Guyed Pole',
    text: `${SITUATION_6}\n\nCalculate the tension (N) in wire $AB$.`,
    figureSvg: psadMay2019Figure(
      19,
      'Figure: Flag pole AO with guy wires AB, AC and AD, dimensions a, b and h'
    ),
    figureCaption: 'Flag pole supported by three tension wires',
    options: [
      { label: 'A', text: '82.46' },
      { label: 'B', text: '65.00' },
      { label: 'C', text: '47.43' },
      { label: 'D', text: '58.42' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(19), finalAnswer: '82.462 N (Option A)' },
  },

  // Item 20
  {
    id: 'psad-may2019-q20',
    number: 20,
    pageNumber: 64,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Statics — Space Equilibrium of Guyed Pole',
    text: `${SITUATION_6}\n\nCalculate the tension (N) in wire $AC$.`,
    options: [
      { label: 'A', text: '58.42' },
      { label: 'B', text: '47.43' },
      { label: 'C', text: '65.00' },
      { label: 'D', text: '82.46' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(20), finalAnswer: '65 N (Option C)' },
  },

  // Item 21
  {
    id: 'psad-may2019-q21',
    number: 21,
    pageNumber: 64,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Statics — Space Equilibrium of Guyed Pole',
    text: `${SITUATION_6}\n\nCalculate the tension (N) in wire $AD$.`,
    options: [
      { label: 'A', text: '47.43' },
      { label: 'B', text: '82.46' },
      { label: 'C', text: '58.42' },
      { label: 'D', text: '65.00' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(21), finalAnswer: '47.43 N (Option A)' },
  },

  // Item 22
  {
    id: 'psad-may2019-q22',
    number: 22,
    pageNumber: 65,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Mechanics of Materials — Pin Diameter in Single Shear',
    text: `${SITUATION_7}\n\nDetermine the minimum diameter (mm) of the pin at $B$.`,
    figureSvg: psadMay2019Figure(
      22,
      'Figure: Beam BC carrying a uniform load w, supported by a quarter-circular arc AC of radius R'
    ),
    figureCaption: 'Beam BC supported by a quarter-circular arc AC',
    options: [
      { label: 'A', text: '10' },
      { label: 'B', text: '12' },
      { label: 'C', text: '8' },
      { label: 'D', text: '6' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(22), finalAnswer: '9.82 mm, use 10 mm (Option A)' },
  },

  // Item 23
  {
    id: 'psad-may2019-q23',
    number: 23,
    pageNumber: 65,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Mechanics of Materials — Pin Diameter in Double Shear',
    text: `${SITUATION_7}\n\nDetermine the minimum diameter (mm) of the pin at $C$.`,
    options: [
      { label: 'A', text: '8' },
      { label: 'B', text: '6' },
      { label: 'C', text: '12' },
      { label: 'D', text: '10' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(23), finalAnswer: '6.9 mm, use 8 mm (Option A)' },
  },

  // Item 24
  {
    id: 'psad-may2019-q24',
    number: 24,
    pageNumber: 65,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Statics — Resultant Reaction at a Pin Support',
    text: `${SITUATION_7}\n\nDetermine the resultant reaction (kN) at $A$.`,
    options: [
      { label: 'A', text: '12' },
      { label: 'B', text: '8.49' },
      { label: 'C', text: '9.36' },
      { label: 'D', text: '6' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(24), finalAnswer: '8.485 kN (Option B)' },
  },

  // Item 25
  {
    id: 'psad-may2019-q25',
    number: 25,
    pageNumber: 65,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Mechanics of Materials — Maximum Shear in a Simply Supported Log',
    text: `${SITUATION_8}\n\nWhat is the maximum shear (kN)?`,
    options: [
      { label: 'A', text: '0.6' },
      { label: 'B', text: '0.8' },
      { label: 'C', text: '1.2' },
      { label: 'D', text: '1.8' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(25), finalAnswer: '1.2 kN (Option C)' },
  },

  // Item 26
  {
    id: 'psad-may2019-q26',
    number: 26,
    pageNumber: 65,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Mechanics of Materials — Maximum Moment in a Simply Supported Log',
    text: `${SITUATION_8}\n\nWhat is the maximum moment (kN-m)?`,
    options: [
      { label: 'A', text: '1.5' },
      { label: 'B', text: '0.8' },
      { label: 'C', text: '1.2' },
      { label: 'D', text: '0.9' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(26), finalAnswer: '0.9 kN-m (Option D)' },
  },

  // Item 27
  {
    id: 'psad-may2019-q27',
    number: 27,
    pageNumber: 65,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Mechanics of Materials — Flexural Stress Limit on a Rectangular Section',
    text: `${SITUATION_8}\n\nIf the log is replaced with 300 mm wide by 100 mm thick section of wood, compute the maximum weight (kN) of the man if the allowable flexural stress, $F_b = 4.2$ MPa.`,
    options: [
      { label: 'A', text: '4.1' },
      { label: 'B', text: '2.4' },
      { label: 'C', text: '2.8' },
      { label: 'D', text: '3.2' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(27), finalAnswer: '2.8 kN (Option C)' },
  },

  // Item 28
  {
    id: 'psad-may2019-q28',
    number: 28,
    pageNumber: 66,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Factored Moment in a Continuous Beam',
    text: `${SITUATION_9}\n\nMaximum factored moment (kN-m) in beam $BEHK$.`,
    figureSvg: psadMay2019Figure(
      28,
      'Figure: Beam plan A-B-C / D-E-F / G-H-I / J-K-L with spacing S, plus the typical T section'
    ),
    figureCaption: 'Floor framing plan and typical T section of beam BEHK',
    options: [
      { label: 'A', text: '101.51' },
      { label: 'B', text: '27.17' },
      { label: 'C', text: '91.33' },
      { label: 'D', text: '75.79' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(28), finalAnswer: '27.173 kN-m (Option B)' },
  },
];

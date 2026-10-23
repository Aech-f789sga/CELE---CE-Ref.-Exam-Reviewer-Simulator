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

/** Situation 10 — influence lines on the bridge truss. */
const SITUATION_10 =
  'Situation 10 — The bridge truss shown in the figure is subjected to moving loads, ' +
  '$L = 8$ m, $s = 4$ m, $P = 0$ kN, $\\theta = 45^\\circ$.';

/** Situation 11 — Mohr's circle for a bar under uniaxial stress. */
const SITUATION_11 =
  'Situation 11 — Refer to the figure shown.\n' +
  'The stresses in a bar subjected to uniaxial stress is plotted as shown.\n' +
  '$\\sigma_a = 40$ MPa.';

/** Situation 12 — square tubular column under eccentric load. */
const SITUATION_12 =
  'Situation 12 — A square tubular section having an outside dimension of 400 mm and ' +
  '12 mm thick as shown in the figure is used as a column to support a load of $P$.';

/** Situation 13 — tripod carrying a load at its apex. */
const SITUATION_13 =
  'Situation 13 — Refer to the given tripod shown.\n\n' +
  'Given: Dimensions:\n' +
  '$a = 0.6$ m\n$b = 1.35$ m\n$c = 1.5$ m\n$h = 1.35$ m\n\n' +
  'Member properties:\n' +
  'Area $= 690$ mm²\n' +
  'Radius of gyration $= 15.5$ mm\n' +
  '$F_y = 248$ MPa';

export const PSAD_MAY2019_PART3: Question[] = [
  // Item 29
  {
    id: 'psad-may2019-q29',
    number: 29,
    pageNumber: 66,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Factored Shear in a Continuous Beam',
    text: `${SITUATION_9}\n\nMaximum factored shear (kN) in beam $BEHK$.`,
    options: [
      { label: 'A', text: '99.41' },
      { label: 'B', text: '92.31' },
      { label: 'C', text: '89.32' },
      { label: 'D', text: '50.35' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(29), finalAnswer: '50.35 kN (Option D)' },
  },

  // Item 30
  {
    id: 'psad-may2019-q30',
    number: 30,
    pageNumber: 66,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Factored Reaction in a Continuous Beam',
    text: `${SITUATION_9}\n\nMaximum factored reaction (kN) in beam $BEHK$.`,
    options: [
      { label: 'A', text: '95.62' },
      { label: 'B', text: '190.6' },
      { label: 'C', text: '180.5' },
      { label: 'D', text: '175.3' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(30), finalAnswer: '95.62 kN (Option A)' },
  },

  // Item 31
  {
    id: 'psad-may2019-q31',
    number: 31,
    pageNumber: 67,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Structural Analysis — Influence Line Ordinate',
    text: `${SITUATION_10}\n\nCompute the value of the maximum ordinate of influence diagram of member $JK$.`,
    figureSvg: psadMay2019Figure(
      31,
      'Figure: Bridge truss A-B-C-D-E with top chord J-K, used for the influence line of member JK'
    ),
    figureCaption: 'Bridge truss for the influence line of member JK',
    options: [
      { label: 'A', text: '1.5' },
      { label: 'B', text: '0.5' },
      { label: 'C', text: '0.75' },
      { label: 'D', text: '1.00' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(31), finalAnswer: 'u_JK = 1.00 (Option D)' },
  },

  // Item 32
  {
    id: 'psad-may2019-q32',
    number: 32,
    pageNumber: 68,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Structural Analysis — Influence Line under H-Loading',
    text: `${SITUATION_10}\n\nCompute the axial load in member $JK$ (kN) due to a standard H-loading with wheel base of 4.3 m, front wheel load = 72.4 kN and rear wheel load = 19.6 kN.`,
    options: [
      { label: 'A', text: '63.25 C' },
      { label: 'B', text: '63.25 TC' },
      { label: 'C', text: '81.47 C' },
      { label: 'D', text: '81.47 T' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(32), finalAnswer: '81.465 kN compression (Option C)' },
  },

  // Item 33
  {
    id: 'psad-may2019-q33',
    number: 33,
    pageNumber: 68,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Structural Analysis — Influence Line under Uniform Moving Load',
    text: `${SITUATION_10}\n\nCompute the axial load in member $JK$ (kN) due to a uniform moving load of 9.35 kN/m.`,
    options: [
      { label: 'A', text: '74.8 C' },
      { label: 'B', text: '74.8 T' },
      { label: 'C', text: '52.6 T' },
      { label: 'D', text: '52.6 C' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(33), finalAnswer: '74.8 kN compression (Option A)' },
  },

  // Item 34
  {
    id: 'psad-may2019-q34',
    number: 34,
    pageNumber: 68,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Mechanics of Materials — Principal Stresses from Mohr’s Circle',
    text: `${SITUATION_11}\n\nDetermine the maximum normal stress (MPa).`,
    figureSvg: psadMay2019Figure(
      34,
      'Figure: Stress element and its Mohr circle with centre offset a and radius a'
    ),
    figureCaption: 'Stress element and Mohr’s circle for uniaxial stress',
    options: [
      { label: 'A', text: '50' },
      { label: 'B', text: '60' },
      { label: 'C', text: '80' },
      { label: 'D', text: '40' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(34), finalAnswer: '80 MPa (Option C)' },
  },

  // Item 35
  {
    id: 'psad-may2019-q35',
    number: 35,
    pageNumber: 68,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Mechanics of Materials — Principal Stresses from Mohr’s Circle',
    text: `${SITUATION_11}\n\nDetermine the maximum shear stress (MPa).`,
    options: [
      { label: 'A', text: '40' },
      { label: 'B', text: '20' },
      { label: 'C', text: '60' },
      { label: 'D', text: '80' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(35), finalAnswer: '40 MPa (Option A)' },
  },

  // Item 36
  {
    id: 'psad-may2019-q36',
    number: 36,
    pageNumber: 68,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Mechanics of Materials — Principal Stresses from Mohr’s Circle',
    text: `${SITUATION_11}\n\nWhat angle does the maximum shear stress occur from the origin.`,
    options: [
      { label: 'A', text: '90°' },
      { label: 'B', text: '30°' },
      { label: 'C', text: '60°' },
      { label: 'D', text: '45°' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(36), finalAnswer: '45° from the x-axis (Option D)' },
  },

  // Item 37
  {
    id: 'psad-may2019-q37',
    number: 37,
    pageNumber: 69,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Mechanics of Materials — Radius of Gyration of a Hollow Section',
    text: `${SITUATION_12}\n\nCalculate the radius of gyration (mm) of the column section.`,
    figureSvg: psadMay2019Figure(
      37,
      'Figure: Square tubular section, 400 mm outside dimension and 12 mm wall thickness'
    ),
    figureCaption: 'Square tubular column section',
    options: [
      { label: 'A', text: '158.5' },
      { label: 'B', text: '185.5' },
      { label: 'C', text: '124.7' },
      { label: 'D', text: '105.2' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(37), finalAnswer: '158.48 mm (Option A)' },
  },

  // Item 38
  {
    id: 'psad-may2019-q38',
    number: 38,
    pageNumber: 69,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Mechanics of Materials — Eccentric Load on a Hollow Section',
    text: `${SITUATION_12}\n\nCompute the maximum tensile stress (MPa) if $P = 280$ kN applied at eccentricity $e_x = 100$ mm, and $e_y = 50$ mm.`,
    options: [
      { label: 'A', text: '1.42' },
      { label: 'B', text: '2.94' },
      { label: 'C', text: '3.69' },
      { label: 'D', text: '5.24' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(38), finalAnswer: '2.94 MPa (Option B)' },
  },

  // Item 39
  {
    id: 'psad-may2019-q39',
    number: 39,
    pageNumber: 69,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Mechanics of Materials — Allowable Load on a Hollow Section',
    text: `${SITUATION_12}\n\nWhat is the maximum load $P$ (kN) if the allowable compressive stress is 108 MPa, if $e_x = 100$ mm, and $e_y = 50$ mm?`,
    options: [
      { label: 'A', text: '463' },
      { label: 'B', text: '754' },
      { label: 'C', text: '1241' },
      { label: 'D', text: '916' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(39), finalAnswer: '916 kN (Option D)' },
  },

  // Item 40
  {
    id: 'psad-may2019-q40',
    number: 40,
    pageNumber: 69,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Steel Design — Allowable Compressive Stress of a Tripod Leg',
    text: `${SITUATION_13}\n\nWhat is the allowable compressive stress (MPa) of member $AC$?`,
    figureSvg: psadMay2019Figure(
      40,
      'Figure: Tripod with apex A, legs to B and C and base dimensions a, b and c'
    ),
    figureCaption: 'Tripod carrying a vertical load W at apex A',
    options: [
      { label: 'A', text: '61.7' },
      { label: 'B', text: '65.3' },
      { label: 'C', text: '55.7' },
      { label: 'D', text: '52.1' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(40), finalAnswer: '61.9 MPa, taken as 61.7 (Option A)' },
  },

  // Item 41
  {
    id: 'psad-may2019-q41',
    number: 41,
    pageNumber: 70,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Steel Design — Capacity of a Tripod under Vertical Load',
    text: `${SITUATION_13}\n\nCompute the maximum vertical load $W$ (kN) that can be supported at $A$.`,
    options: [
      { label: 'A', text: '105.7' },
      { label: 'B', text: '80.6' },
      { label: 'C', text: '98.4' },
      { label: 'D', text: '95.1' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(41), finalAnswer: '80.7 kN, taken as 80.6 (Option B)' },
  },

  // Item 42
  {
    id: 'psad-may2019-q42',
    number: 42,
    pageNumber: 70,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Steel Design — Capacity of a Tripod under Horizontal Load',
    text: `${SITUATION_13}\n\nIf the load at $A$ is horizontal along positive $X$-axis, compute the maximum value of the horizontal load (kN).`,
    options: [
      { label: 'A', text: '89.5' },
      { label: 'B', text: '95.1' },
      { label: 'C', text: '43.7' },
      { label: 'D', text: '98.1' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(42), finalAnswer: '43.8 kN, taken as 43.7 (Option C)' },
  },
];

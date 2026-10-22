import { Question } from '../../../types/exam';
import {
  psadNov2021Figure,
  psadNov2021SolutionImages,
  psadNov2021SolutionPage,
  psadNov2021SolutionPageEnd,
} from '../../psadNov2021Images';

const solution = (n: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: psadNov2021SolutionPage(n),
  pageNumberEnd: psadNov2021SolutionPageEnd(n),
  images: psadNov2021SolutionImages(n),
});

const SITUATION_1 =
  'Situation 1 — The eyebolt shown is subjected to three forces.\n\n$P_1 = 600$ N, $P_2 = 240.4$ N, $\\beta = 30°$\n\n';

const SITUATION_2 =
  'Situation 2 — Three identical cylinders are placed inside the bin shown. Each have diameter of 800 mm and weighs 1500 N. Assuming all surfaces are frictionless, compute the following:\n\n';

const SITUATION_3 =
  'Situation 3 — A howe truss is subjected to wind forces as shown in the figure. Given the following data:\n\n$s = 1.6$ m, $h = 2.4$ m\n\n$P_1 = P_4 = 8.5$ kN, $P_2 = P_3 = 17$ kN\n\n';

const SITUATION_4 =
  'Situation 4 — A simply supported beam is loaded resulting to a shear diagram shown in the figure.\n\nGiven:\n\n| | |\n| :--- | :--- |\n| $L_1 = 3$ m | $V_1 = 105$ kN |\n| $L_2 = 6$ m | $V_2 = 5$ kN |\n| $L_3 = 3$ m | $V_3 = 115$ kN |\n\n';

const SITUATION_5 =
  'Situation 5 — Given the following data of the concrete pad shown:\n\n| | |\n| :--- | :--- |\n| $L_1 = 2$ m | $w_1 = 400$ kN/m |\n| $L_2 = 3$ m | $w_2 = 600$ kN/m |\n| $L_3 = 2$ m | |\n\n';

const SITUATION_6 =
  'Situation 6 — Given the following data of the figure shown:\n\n$P = 45$ kN, $R = 3.2$ m, $\\theta = 40°$\n\nGiven that points $ABC$ lie on the horizontal plane. Determine the following.\n\n';

export const PSAD_NOV2021_PART1: Question[] = [
  // Item 1 — Situation 1
  {
    id: 'psad-nov2021-q1',
    number: 1,
    pageNumber: 323,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 1 — Eyebolt: Angle of the Third Force',
    text: `${SITUATION_1}1. The resultant of the three forces acts along the Y-axis. How much is the angle $\\alpha$ in degrees? Given $P_3 = 460$ N.`,
    figureSvg: psadNov2021Figure(1, 'Figure 1: Eyebolt acted on by forces P1, P2 and P3'),
    figureCaption: 'Eyebolt subjected to three forces',
    options: [
      { label: 'A', text: '75.6' },
      { label: 'B', text: '54.3' },
      { label: 'C', text: '47.6' },
      { label: 'D', text: '17.5' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(1), finalAnswer: 'α = 75.6° (Option A)' },
  },

  // Item 2 — Situation 1
  {
    id: 'psad-nov2021-q2',
    number: 2,
    pageNumber: 323,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 1 — Eyebolt: Resultant of Three Forces',
    text: `${SITUATION_1}2. If angle $\\alpha = 45°$ and $P_3 = 460$ N, compute the resultant (N) of the three forces.`,
    options: [
      { label: 'A', text: '362' },
      { label: 'B', text: '635' },
      { label: 'C', text: '546' },
      { label: 'D', text: '482' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(2), finalAnswer: 'R = 482 N (Option D)' },
  },

  // Item 3 — Situation 1
  {
    id: 'psad-nov2021-q3',
    number: 3,
    pageNumber: 323,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 1 — Eyebolt: Unknown Force from the Resultant',
    text: `${SITUATION_1}3. If the x-component of the resultant of the three forces is 700 N, compute the magnitude of force $P_3$ (kN) if $\\alpha = 45°$.`,
    options: [
      { label: 'A', text: '5360' },
      { label: 'B', text: '1820' },
      { label: 'C', text: '1050' },
      { label: 'D', text: '6840' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(3), finalAnswer: 'P₃ = 1050 N (Option C)' },
  },

  // Item 4 — Situation 2
  {
    id: 'psad-nov2021-q4',
    number: 4,
    pageNumber: 323,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 2 — Cylinders in a Bin: Reaction at B',
    text: `${SITUATION_2}4. The reaction (N) at $B$.`,
    options: [
      { label: 'A', text: '1500' },
      { label: 'B', text: '866' },
      { label: 'C', text: '750' },
      { label: 'D', text: '1163' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(4), finalAnswer: 'R_B = 866 N (Option B)' },
  },

  // Item 5 — Situation 2
  {
    id: 'psad-nov2021-q5',
    number: 5,
    pageNumber: 323,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 2 — Cylinders in a Bin: Reaction at D',
    text: `${SITUATION_2}5. The reaction (N) at $D$.`,
    options: [
      { label: 'A', text: '0' },
      { label: 'B', text: '763' },
      { label: 'C', text: '433' },
      { label: 'D', text: '1250' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(5), finalAnswer: 'R_D = 0 (Option A)' },
  },

  // Item 6 — Situation 2
  {
    id: 'psad-nov2021-q6',
    number: 6,
    pageNumber: 324,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 2 — Cylinders in a Bin: Reaction at F',
    text: `${SITUATION_2}6. The reaction (N) at $F$.`,
    figureSvg: psadNov2021Figure(6, 'Figure 2: Three identical cylinders resting inside a bin, contact points A to G'),
    figureCaption: 'Three identical cylinders placed inside the bin',
    options: [
      { label: 'A', text: '1750' },
      { label: 'B', text: '1500' },
      { label: 'C', text: '2560' },
      { label: 'D', text: '2250' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(6), finalAnswer: 'R_F = 2250 N (Option D)' },
  },

  // Item 7 — Situation 3
  {
    id: 'psad-nov2021-q7',
    number: 7,
    pageNumber: 324,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 3 — Howe Truss: Reaction at G',
    text: `${SITUATION_3}7. How much is the reaction (kN) at $G$?`,
    figureSvg: psadNov2021Figure(7, 'Figure 3: Howe truss carrying wind forces P1 to P4'),
    figureCaption: 'Howe truss subjected to wind forces',
    options: [
      { label: 'A', text: '14.25' },
      { label: 'B', text: '16.35' },
      { label: 'C', text: '11.54' },
      { label: 'D', text: '20.58' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(7), finalAnswer: 'G_v = 14.25 kN (Option A)' },
  },

  // Item 8 — Situation 3
  {
    id: 'psad-nov2021-q8',
    number: 8,
    pageNumber: 324,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 3 — Howe Truss: Reaction at A',
    text: `${SITUATION_3}8. Compute the reaction (kN) at $A$.`,
    options: [
      { label: 'A', text: '31.36' },
      { label: 'B', text: '38.78' },
      { label: 'C', text: '22.81' },
      { label: 'D', text: '33.25' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(8), finalAnswer: 'R_A = 38.78 kN (Option B)' },
  },

  // Item 9 — Situation 3
  {
    id: 'psad-nov2021-q9',
    number: 9,
    pageNumber: 324,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 3 — Howe Truss: Force in Member CH',
    text: `${SITUATION_3}9. Which of the following gives the force (kN) of member $CH$.`,
    options: [
      { label: 'A', text: '25.75 T' },
      { label: 'B', text: '21.25 C' },
      { label: 'C', text: '25.75 C' },
      { label: 'D', text: '21.25 T' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(9), finalAnswer: 'F_CH = 21.25 kN compression (Option B)' },
  },

  // Item 10 — Situation 4
  {
    id: 'psad-nov2021-q10',
    number: 10,
    pageNumber: 325,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 4 — Beam from Shear Diagram: Maximum Moment',
    text: `${SITUATION_4}10. Determine the maximum span moment in kN-m.`,
    figureSvg: psadNov2021Figure(10, 'Figure 4: Simply supported beam with the given shear diagram'),
    figureCaption: 'Simply supported beam and its shear diagram',
    options: [
      { label: 'A', text: '315' },
      { label: 'B', text: '365' },
      { label: 'C', text: '275' },
      { label: 'D', text: '345' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(10), finalAnswer: 'Mmax = 345 kN·m (Option D)' },
  },

  // Item 11 — Situation 4
  {
    id: 'psad-nov2021-q11',
    number: 11,
    pageNumber: 325,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 4 — Beam from Shear Diagram: Concentrated Load',
    text: `${SITUATION_4}11. What is the concentrated load (kN) at $D$?`,
    options: [
      { label: 'A', text: '120' },
      { label: 'B', text: '100' },
      { label: 'C', text: '115' },
      { label: 'D', text: '105' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(11), finalAnswer: 'P_D = 120 kN (Option A)' },
  },

  // Item 12 — Situation 4
  {
    id: 'psad-nov2021-q12',
    number: 12,
    pageNumber: 325,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 4 — Beam from Shear Diagram: Right Reaction',
    text: `${SITUATION_4}12. How much is the reaction (kN) at the right support?`,
    options: [
      { label: 'A', text: '155' },
      { label: 'B', text: '105' },
      { label: 'C', text: '125' },
      { label: 'D', text: '115' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(12), finalAnswer: 'R_B = 115 kN (Option D)' },
  },

  // Item 13 — Situation 5
  {
    id: 'psad-nov2021-q13',
    number: 13,
    pageNumber: 325,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 5 — Concrete Pad: Length for Uniform Pressure',
    text: `${SITUATION_5}13. Compute the required length $L$ (m) such that the resulting pressure $q$, is uniform.`,
    figureSvg: psadNov2021Figure(13, 'Figure 5: Concrete pad carrying the uniform loads w1 and w2'),
    figureCaption: 'Concrete pad with two uniform loads',
    options: [
      { label: 'A', text: '9' },
      { label: 'B', text: '8' },
      { label: 'C', text: '11' },
      { label: 'D', text: '10' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(13), finalAnswer: 'L = 8 m (Option B)' },
  },

  // Item 14 — Situation 5
  {
    id: 'psad-nov2021-q14',
    number: 14,
    pageNumber: 325,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 5 — Concrete Pad: Maximum Shear',
    text: `${SITUATION_5}14. How much is the maximum shear force (kN) in the pad?`,
    options: [
      { label: 'A', text: '450' },
      { label: 'B', text: '300' },
      { label: 'C', text: '250' },
      { label: 'D', text: '350' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(14), finalAnswer: 'Vmax = 450 kN (Option A)' },
  },

  // Item 15 — Situation 5
  {
    id: 'psad-nov2021-q15',
    number: 15,
    pageNumber: 325,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 5 — Concrete Pad: Point of Inflection',
    text: `${SITUATION_5}15. Determine the location of the point of inflection (m) from the right end.`,
    options: [
      { label: 'A', text: '3.24' },
      { label: 'B', text: '4.86' },
      { label: 'C', text: '2.82' },
      { label: 'D', text: '5.18' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(15), finalAnswer: 'x = 2.821 m from the right end (Option C)' },
  },

  // Item 16 — Situation 6
  {
    id: 'psad-nov2021-q16',
    number: 16,
    pageNumber: 326,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 6 — Curved Beam: Maximum Shear',
    text: `${SITUATION_6}16. The maximum shear in kN.`,
    figureSvg: psadNov2021Figure(16, 'Figure 6: Curved member ABC loaded by the vertical force P'),
    figureCaption: 'Curved member carrying load P',
    options: [
      { label: 'A', text: '45' },
      { label: 'B', text: '50' },
      { label: 'C', text: '55' },
      { label: 'D', text: '40' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(16), finalAnswer: 'Vmax = 45 kN (Option A)' },
  },

  // Item 17 — Situation 6
  {
    id: 'psad-nov2021-q17',
    number: 17,
    pageNumber: 326,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 6 — Curved Beam: Bending Moment at B',
    text: `${SITUATION_6}17. The maximum bending moment at $B$ in kN-m.`,
    options: [
      { label: 'A', text: '98.1' },
      { label: 'B', text: '86.3' },
      { label: 'C', text: '102.3' },
      { label: 'D', text: '92.6' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(17), finalAnswer: 'M_B = 92.57 kN·m ≈ 92.6 kN·m (Option D)' },
  },

  // Item 18 — Situation 6
  {
    id: 'psad-nov2021-q18',
    number: 18,
    pageNumber: 326,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 6 — Curved Beam: Twisting Moment at B',
    text: `${SITUATION_6}18. The maximum twisting moment at $B$ in kN-m.`,
    options: [
      { label: 'A', text: '36.5' },
      { label: 'B', text: '45.7' },
      { label: 'C', text: '52.4' },
      { label: 'D', text: '33.7' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(18), finalAnswer: 'T_B = 33.7 kN·m (Option D)' },
  },
];

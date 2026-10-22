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

const SITUATION_7 =
  'Situation 7 — For the highway bridge truss shown, $S = 4$ m and $H = 5$ m. The bridge will be design for a uniform highway load of 8 kN/m and a concentrated load of 90 kN.\n\n';

const SITUATION_8 =
  'Situation 8 — A 14-meter-long simply supported beam carries a uniform load of 18.2 kN/m. To prevent excessive deflection, a support is added at midspan. Calculate the following:\n\n';

const SITUATION_9 =
  'Situation 9 — A three span beam is simply supported at $A$, $B$, $C$, and $D$ as shown.\n\nGiven the following data:\n\n| | |\n| :--- | :--- |\n| Span length, $L$ | 9 m |\n| Uniform dead load, $w_d$ | 24 kN/m |\n| Uniform live load, $w_l$ | 16.5 kN/m |\n\nCompute the following:\n\n';

const SITUATION_10 =
  'Situation 10 — A beam is supported by the angle bracket as shown. The bracket is bolted to the column flanges using with two 20-mm-diameter bolts. The reaction from the beam is 75 kN and is assumed to be concentrically applied at the connection. The bracket is 75 mm × 75 mm × 12 mm with length $L = 160$ mm. The column flange thickness is 15 mm, and the beam flange thickness is 10 mm.\n\n';

const SITUATION_11 =
  'Situation 11 — Given the following data of the figure shown:\n\nDimensions:\n\n| | |\n| :--- | :--- |\n| $L_1 = 1.80$ m | $L_3 = 1.80$ m |\n| $L_2 = 1.20$ m | Bar $ABC$ = 100 mm × 20 mm |\n\nStrut $BD$ = 80 mm × 10 mm\n\nAllowable shear stress of bolts = 60 MPa\n\n';

const SITUATION_12 =
  'Situation 12 — A pipe column is subjected to an axial load of 500 kN and a moment of 40 kN-m. Given the following column properties:\n\n| Property | Value |\n| :--- | :--- |\n| Column cross-sectional area | 4462 mm² |\n| Centroidal moment of inertia | $26.7 \\times 10^6$ mm⁴ |\n| Outside diameter | 225 mm |\n| Inside diameter | 212 mm |\n\n';

export const PSAD_NOV2021_PART2: Question[] = [
  // Item 19 — Situation 7
  {
    id: 'psad-nov2021-q19',
    number: 19,
    pageNumber: 326,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 7 — Bridge Truss: Influence Line Ordinate for GH',
    text: `${SITUATION_7}19. Compute the maximum ordinate of the influence line for force of member $GH$.`,
    figureSvg: psadNov2021Figure(19, 'Figure 7: Highway bridge truss with panels of width S and height H'),
    figureCaption: 'Highway bridge truss, S = 4 m and H = 5 m',
    options: [
      { label: 'A', text: '0.8' },
      { label: 'B', text: '0.6' },
      { label: 'C', text: '3.0' },
      { label: 'D', text: '0.5' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(19), finalAnswer: 'Maximum ordinate = 0.6 (Option B)' },
  },

  // Item 20 — Situation 7
  {
    id: 'psad-nov2021-q20',
    number: 20,
    pageNumber: 327,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 7 — Bridge Truss: GH Force from the Concentrated Load',
    text: `${SITUATION_7}20. Compute the maximum compressive stress (kN) of member $GH$ due to the concentrated load.`,
    options: [
      { label: 'A', text: '64' },
      { label: 'B', text: '72' },
      { label: 'C', text: '43' },
      { label: 'D', text: '54' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(20), finalAnswer: 'F_GH = 54 kN compression (Option D)' },
  },

  // Item 21 — Situation 7
  {
    id: 'psad-nov2021-q21',
    number: 21,
    pageNumber: 327,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 7 — Bridge Truss: GH Force from the Uniform Load',
    text: `${SITUATION_7}21. Compute the maximum compressive stress (kN) of member $GH$ due to the uniform highway load.`,
    options: [
      { label: 'A', text: '38.4' },
      { label: 'B', text: '45.2' },
      { label: 'C', text: '51.2' },
      { label: 'D', text: '65.9' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(21), finalAnswer: 'F_GH = 38.4 kN compression (Option A)' },
  },

  // Item 22 — Situation 8
  {
    id: 'psad-nov2021-q22',
    number: 22,
    pageNumber: 327,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 8 — Beam with Added Midspan Support: Reaction',
    text: `${SITUATION_8}22. The vertical reaction (kN) at the added support.`,
    options: [
      { label: 'A', text: '191.10' },
      { label: 'B', text: '84.93' },
      { label: 'C', text: '123.87' },
      { label: 'D', text: '159.25' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(22), finalAnswer: 'R_B = 159.25 kN (Option D)' },
  },

  // Item 23 — Situation 8
  {
    id: 'psad-nov2021-q23',
    number: 23,
    pageNumber: 327,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 8 — Beam with Added Midspan Support: Moment at Support',
    text: `${SITUATION_8}23. The resulting moment (kN-m) at the added support.`,
    options: [
      { label: 'A', text: '111.5' },
      { label: 'B', text: '445.9' },
      { label: 'C', text: '223.0' },
      { label: 'D', text: '148.2' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(23), finalAnswer: 'M_B = 111.475 kN·m ≈ 111.5 kN·m (Option A)' },
  },

  // Item 24 — Situation 8
  {
    id: 'psad-nov2021-q24',
    number: 24,
    pageNumber: 327,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 8 — Beam with Added Midspan Support: Positive Moment',
    text: `${SITUATION_8}24. The resulting maximum positive bending moment in kN-m.`,
    options: [
      { label: 'A', text: '45.8' },
      { label: 'B', text: '27.9' },
      { label: 'C', text: '62.7' },
      { label: 'D', text: '51.2' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(24), finalAnswer: 'Mpos = 62.705 kN·m ≈ 62.7 kN·m (Option C)' },
  },

  // Item 25 — Situation 9
  {
    id: 'psad-nov2021-q25',
    number: 25,
    pageNumber: 327,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 9 — Three-Span Beam: Maximum Reaction at C',
    text: `${SITUATION_9}25. The maximum reaction (kN) at $C$.`,
    options: [
      { label: 'A', text: '400.1' },
      { label: 'B', text: '422.6' },
      { label: 'C', text: '437.4' },
      { label: 'D', text: '415.8' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(25), finalAnswer: 'R_C = 415.8 kN (Option D)' },
  },

  // Item 26 — Situation 9
  {
    id: 'psad-nov2021-q26',
    number: 26,
    pageNumber: 327,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 9 — Three-Span Beam: Maximum Shear at C',
    text: `${SITUATION_9}26. The maximum shear (kN) at $C$.`,
    options: [
      { label: 'A', text: '224.9' },
      { label: 'B', text: '222.4' },
      { label: 'C', text: '221.2' },
      { label: 'D', text: '218.7' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(26), finalAnswer: 'Vmax = 221.2 kN (Option C)' },
  },

  // Item 27 — Situation 9
  {
    id: 'psad-nov2021-q27',
    number: 27,
    pageNumber: 327,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 9 — Three-Span Beam: Maximum Moment at C',
    text: `${SITUATION_9}27. The maximum bending moment (kN-m) at $C$.`,
    options: [
      { label: 'A', text: '350.4' },
      { label: 'B', text: '382.8' },
      { label: 'C', text: '360.5' },
      { label: 'D', text: '328.1' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(27), finalAnswer: 'M_C = 350.37 kN·m ≈ 350.4 kN·m (Option A)' },
  },

  // Item 28 — Situation 10
  {
    id: 'psad-nov2021-q28',
    number: 28,
    pageNumber: 329,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 10 — Bolted Angle Bracket: Bolt Bearing Stress',
    text: `${SITUATION_10}28. How much is the critical bolt bearing stress (MPa)?`,
    figureSvg: psadNov2021Figure(28, 'Figure 10: Beam seated on an angle bracket bolted to the column flanges'),
    figureCaption: 'Beam supported by an angle bracket',
    options: [
      { label: 'A', text: '125.7' },
      { label: 'B', text: '312.5' },
      { label: 'C', text: '156.3' },
      { label: 'D', text: '236.8' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(28), finalAnswer: 'fp = 156.25 MPa ≈ 156.3 MPa (Option C)' },
  },

  // Item 29 — Situation 10
  {
    id: 'psad-nov2021-q29',
    number: 29,
    pageNumber: 329,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 10 — Bolted Angle Bracket: Bolt Shearing Stress',
    text: `${SITUATION_10}29. Determine the critical bolt shearing stress (MPa).`,
    options: [
      { label: 'A', text: '238.7' },
      { label: 'B', text: '156.7' },
      { label: 'C', text: '119.4' },
      { label: 'D', text: '325.4' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(29), finalAnswer: 'fv = 119.4 MPa (Option C)' },
  },

  // Item 30 — Situation 10
  {
    id: 'psad-nov2021-q30',
    number: 30,
    pageNumber: 329,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 10 — Bolted Angle Bracket: Bearing Pressure in the Bracket',
    text: `${SITUATION_10}30. Compute the bearing pressure (MPa) in the bracket.`,
    options: [
      { label: 'A', text: '9.54' },
      { label: 'B', text: '6.51' },
      { label: 'C', text: '6.25' },
      { label: 'D', text: '13.33' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(30), finalAnswer: 'fp = 6.51 MPa (Option B)' },
  },

  // Item 31 — Situation 11
  {
    id: 'psad-nov2021-q31',
    number: 31,
    pageNumber: 329,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 11 — Strut and Bar Frame: Allowable Load',
    text: `${SITUATION_11}31. Compute the allowable load $P$ (kN) if the allowable compressive stress of the strut is 82 MPa.`,
    figureSvg: psadNov2021Figure(31, 'Figure 11: Bar ABC pinned at A, braced by strut BD and loaded at C'),
    figureCaption: 'Bar ABC braced by strut BD',
    options: [
      { label: 'A', text: '27.8' },
      { label: 'B', text: '40.1' },
      { label: 'C', text: '35.4' },
      { label: 'D', text: '21.3' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(31), finalAnswer: 'P = 27.8 kN (Option A)' },
  },

  // Item 32 — Situation 11
  {
    id: 'psad-nov2021-q32',
    number: 32,
    pageNumber: 329,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 11 — Strut and Bar Frame: Force in the Strut',
    text: `${SITUATION_11}32. If $P = 3.6$ kN, compute the force (kN) in strut $BD$.`,
    options: [
      { label: 'A', text: '3.6' },
      { label: 'B', text: '4.6' },
      { label: 'C', text: '6.2' },
      { label: 'D', text: '8.5' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(32), finalAnswer: 'F_BD = 8.48 kN ≈ 8.5 kN (Option D)' },
  },

  // Item 33 — Situation 11
  {
    id: 'psad-nov2021-q33',
    number: 33,
    pageNumber: 329,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 11 — Strut and Bar Frame: Bolt Diameter at A',
    text: `${SITUATION_11}33. If $P = 3.6$ kN, determine the minimum required bolt diameter (mm) at $A$. Use a factor of safety of 2.`,
    options: [
      { label: 'A', text: '16' },
      { label: 'B', text: '20' },
      { label: 'C', text: '12' },
      { label: 'D', text: '22' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(33), finalAnswer: 'db = 11.7 mm, use 12 mm (Option C)' },
  },

  // Item 34 — Situation 12
  {
    id: 'psad-nov2021-q34',
    number: 34,
    pageNumber: 330,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 12 — Pipe Column: Maximum Compressive Stress',
    text: `${SITUATION_12}34. Compute the maximum compressive stress (MPa) in the column.`,
    options: [
      { label: 'A', text: '56.5' },
      { label: 'B', text: '85.4' },
      { label: 'C', text: '136.2' },
      { label: 'D', text: '280.6' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(34), finalAnswer: 'fcmax = −280.6 MPa (Option D)' },
  },

  // Item 35 — Situation 12
  {
    id: 'psad-nov2021-q35',
    number: 35,
    pageNumber: 330,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 12 — Pipe Column: Maximum Tensile Stress',
    text: `${SITUATION_12}35. Compute the maximum tensile stress (MPa) in the column.`,
    options: [
      { label: 'A', text: '280.6' },
      { label: 'B', text: '56.5' },
      { label: 'C', text: '85.4' },
      { label: 'D', text: '136.2' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(35), finalAnswer: 'ftmax = +56.5 MPa (Option B)' },
  },

  // Item 36 — Situation 12
  {
    id: 'psad-nov2021-q36',
    number: 36,
    pageNumber: 330,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 12 — Pipe Column: Diameter for Zero Tension',
    text: `${SITUATION_12}36. If the design requires that there should be no tensile stress in the column, how much is the required pipe outside diameter (mm) if the pipe thickness is 8 mm?`,
    options: [
      { label: 'A', text: '315' },
      { label: 'B', text: '336' },
      { label: 'C', text: '324' },
      { label: 'D', text: '302' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(36), finalAnswer: 'D = 335.62 mm ≈ 336 mm (Option B)' },
  },
];

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

const SITUATION_13 =
  'Situation 13 — A 3-m-high hollow circular pole has an outside diameter of 300 mm and thickness of 6 mm. The pole is subjected to a vertical compressive load of 4 kN applied at an eccentricity of 100 mm from the pole\'s axis and a lateral load of 0.55 kN at the top. The pole weighs 150 N per linear meter.\n\n';

const SITUATION_14 =
  'Situation 14 — Given the following properties of a rectangular tubular column.\n\n| Property | Value |\n| :--- | :--- |\n| Nominal width along the X-axis | 150 mm |\n| Nominal width along the Y-axis | 300 mm |\n| Wall thickness | 16 mm |\n| Cross-sectional area, $A$ | 13,400 mm² |\n| $S_x$ | 988,154 mm³ |\n| $S_y$ | 635,752 mm³ |\n\n';

const SITUATION_15 =
  'Situation 15 — Given the following properties of a steel column.\n\n| Property | Value |\n| :--- | :--- |\n| Area, $A$ | 9290 mm² |\n| Depth, $d$ | 250 mm |\n| $I_x$ | $113.21 \\times 10^6$ mm⁴ |\n| $I_y$ | $38.88 \\times 10^6$ mm⁴ |\n| Young\'s modulus of elasticity, $E$ | 200 GPa |\n| Steel yield strength, $F_y$ | 248 MPa |\n\nThe concentric column load that will cause initial buckling within the proportional limit is the Euler buckling load.\n\nThe column has a height of 8 m and is fixed at the bottom and hinged on top. Effective length factor of 0.80.\n\n';

const SITUATION_16 =
  'Situation 16 — Given the following data of a simply supported steel beam.\n\nSpan length, $L = 13$ m\n\nSection properties (W410 mm × 100 kg/m):\n\n| Property | Value |\n| :--- | :--- |\n| Area, $A$ | 12710 mm² |\n| Overall depth, $d$ | 410 mm |\n| Flange width, $b_f$ | 260 mm |\n| Flange thickness, $t_f$ | 17 mm |\n| Web thickness, $t_w$ | 10 mm |\n| $I_x$ | $397 \\times 10^6$ mm⁴ |\n| $I_y$ | $49 \\times 10^6$ mm⁴ |\n| Plastic section modulus, $Z_x$ | $2.13 \\times 10^6$ mm³ |\n| Plastic section modulus, $Z_y$ | $0.58 \\times 10^6$ mm³ |\n\nLoads causing bending about the strong axis:\n\n| Load | Value |\n| :--- | :--- |\n| Dead load (including beam weight) | 14 kN/m |\n| Concentrated live load at midspan | $P$ |\n| Load combination, $U$ | $1.2D + 1.6L$ |\n| Steel yield strength, $F_y$ | 345 MPa |\n\n';

const SITUATION_17 =
  'Situation 17 — Given the following data of the figure shown:\n\nDimensions:\n\n| Member | Section |\n| :--- | :--- |\n| Beams $AD$, $BE$, and $CF$ | $b \\times h = 250$ mm × 400 mm |\n| Girders $ABC$ and $DEF$ | $b \\times h = 350$ mm × 620 mm |\n\n$L = 6$ m, $S = 3$ m\n\nConcrete cover to centroid of reinforcement = 70 mm\n\nMaterial strengths: $f\'_c = 20.7$ MPa, $f_y = 275$ MPa\n\nLoads:\n\n| Load | Value |\n| :--- | :--- |\n| Dead load (including beam weight) | 5.5 kPa |\n| Live load | 4.8 kPa |\n| Reduction factor for shear, $\\phi$ | 0.75 |\n| Required strength, $U$ | $1.2D + 1.6L$ |\n\n';

const SITUATION_18 =
  'Situation 18 — Given the following data of the beam shown:\n\n| Property | Value |\n| :--- | :--- |\n| $h_1$ | 105 mm |\n| $h_2$ | 495 mm |\n| $b$ | 375 mm |\n| Tension steel, $A_s$ | 5 – 25 mm diameter |\n| Compression steel, $A\'_s$ | 3 – 25 mm diameter |\n| Effective cover to centroid of bars | 75 mm |\n| Concrete compressive strength, $f\'_c$ | 34 MPa |\n| Longitudinal steel, $f_{yl}$ | 415 MPa |\n| Lateral ties, $f_{yv}$ | 275 MPa |\n| Shear strength reduction factor | 0.75 |\n\n';

export const PSAD_NOV2021_PART3: Question[] = [
  // Item 37 — Situation 13
  {
    id: 'psad-nov2021-q37',
    number: 37,
    pageNumber: 330,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 13 — Eccentric Pole: Compressive Stress from Vertical Loads',
    text: `${SITUATION_13}37. Compute the maximum compressive stress (MPa) at the base of the pole due to the vertical loads only.`,
    options: [
      { label: 'A', text: '1.54' },
      { label: 'B', text: '1.23' },
      { label: 'C', text: '1.81' },
      { label: 'D', text: '1.98' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(37), finalAnswer: 'fcmax = −1.805 MPa ≈ 1.81 MPa (Option C)' },
  },

  // Item 38 — Situation 13
  {
    id: 'psad-nov2021-q38',
    number: 38,
    pageNumber: 331,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 13 — Eccentric Pole: Maximum Tensile Stress',
    text: `${SITUATION_13}38. Which of the following gives the maximum tensile stress (MPa) due to all the loads?`,
    options: [
      { label: 'A', text: '4.89' },
      { label: 'B', text: '4.33' },
      { label: 'C', text: '3.25' },
      { label: 'D', text: '0.96' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(38), finalAnswer: 'ftmax = +4.33 MPa (Option B)' },
  },

  // Item 39 — Situation 13
  {
    id: 'psad-nov2021-q39',
    number: 39,
    pageNumber: 331,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 13 — Solid Pole: Maximum Shearing Stress',
    text: `${SITUATION_13}39. If a solid 150-mm-diameter pole is used, compute the maximum shearing stress (MPa) at the base.`,
    options: [
      { label: 'A', text: '0.042' },
      { label: 'B', text: '0.056' },
      { label: 'C', text: '0.062' },
      { label: 'D', text: '0.078' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(39), finalAnswer: 'fvmax = 0.041 MPa ≈ 0.042 MPa (Option A)' },
  },

  // Item 40 — Situation 14
  {
    id: 'psad-nov2021-q40',
    number: 40,
    pageNumber: 331,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 14 — Tubular Column: Radius of Gyration',
    text: `${SITUATION_14}40. Determine the radius of gyration (mm) of the section about the Y-axis.`,
    options: [
      { label: 'A', text: '59.7' },
      { label: 'B', text: '74.4' },
      { label: 'C', text: '105.2' },
      { label: 'D', text: '84.4' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(40), finalAnswer: 'r_y = 59.65 mm ≈ 59.7 mm (Option A)' },
  },

  // Item 41 — Situation 14
  {
    id: 'psad-nov2021-q41',
    number: 41,
    pageNumber: 331,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 14 — Tubular Column: Maximum Tensile Stress',
    text: `${SITUATION_14}41. Compute the maximum tensile stress (MPa) in the column due to the following load condition:\n\n| Given | Value |\n| :--- | :--- |\n| Axial, $P$ | 350 kN |\n| Eccentricity of $P$ about the X-axis | 150 mm |\n| Eccentricity of $P$ about the Y-axis | 80 mm |`,
    options: [
      { label: 'A', text: '84.8' },
      { label: 'B', text: '96.5' },
      { label: 'C', text: '112.7' },
      { label: 'D', text: '71.1' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(41), finalAnswer: 'ftmax = 71.052 MPa ≈ 71.1 MPa (Option D)' },
  },

  // Item 42 — Situation 14
  {
    id: 'psad-nov2021-q42',
    number: 42,
    pageNumber: 331,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 14 — Tubular Column: Maximum Load',
    text: `${SITUATION_14}42. If the allowable compressive stress of the column is 96 MPa, how much is the maximum load $P$ (kN), given the following:\n\n| Given | Value |\n| :--- | :--- |\n| Eccentricity of $P$ about the X-axis | 120 mm |\n| Eccentricity of $P$ about the Y-axis | 60 mm |`,
    options: [
      { label: 'A', text: '674.3' },
      { label: 'B', text: '330.5' },
      { label: 'C', text: '296.2' },
      { label: 'D', text: '865.1' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(42), finalAnswer: 'P = 330.53 kN ≈ 330.5 kN (Option B)' },
  },

  // Item 43 — Situation 15
  {
    id: 'psad-nov2021-q43',
    number: 43,
    pageNumber: 332,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 15 — Steel Column: Euler Buckling Load',
    text: `${SITUATION_15}43. Which of the following gives the axial load (kN) that will cause initial buckling of the column?`,
    options: [
      { label: 'A', text: '2164' },
      { label: 'B', text: '1660' },
      { label: 'C', text: '2434' },
      { label: 'D', text: '1872' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(43), finalAnswer: 'Pcr = 1873.6 kN ≈ 1872 kN (Option D)' },
  },

  // Item 44 — Situation 15
  {
    id: 'psad-nov2021-q44',
    number: 44,
    pageNumber: 332,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 15 — Steel Column: Initial Buckling Stress',
    text: `${SITUATION_15}44. Compute the initial buckling stress in MPa.`,
    options: [
      { label: 'A', text: '178.7' },
      { label: 'B', text: '262' },
      { label: 'C', text: '201' },
      { label: 'D', text: '233' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(44), finalAnswer: 'Fcr = 201.68 MPa ≈ 201 MPa (Option C)' },
  },

  // Item 45 — Situation 15
  {
    id: 'psad-nov2021-q45',
    number: 45,
    pageNumber: 332,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 15 — Steel Column: Allowable Compressive Load',
    text: `${SITUATION_15}45. Using the given table, what is the allowable column compressive load in kN.`,
    options: [
      { label: 'A', text: '790' },
      { label: 'B', text: '935' },
      { label: 'C', text: '839' },
      { label: 'D', text: '894' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(45), finalAnswer: 'Pall = 839.1 kN ≈ 839 kN (Option C)' },
  },

  // Item 46 — Situation 16
  {
    id: 'psad-nov2021-q46',
    number: 46,
    pageNumber: 334,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 16 — Steel Beam: Load from Flexural Strength',
    text: `${SITUATION_16}46. Based on the design flexural strength of the beam, compute the value of the load $P$ in kN. Use $\\phi = 0.90$.`,
    options: [
      { label: 'A', text: '54.1' },
      { label: 'B', text: '73.1' },
      { label: 'C', text: '58.9' },
      { label: 'D', text: '96.3' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(46), finalAnswer: 'P = 58.936 kN ≈ 58.9 kN (Option C)' },
  },

  // Item 47 — Situation 16
  {
    id: 'psad-nov2021-q47',
    number: 47,
    pageNumber: 334,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 16 — Steel Beam: Load from Shear Strength',
    text: `${SITUATION_16}47. Based on the design shear strength of the beam, compute the value of the load $P$ in kN. Use $\\phi = 1.0$.\n\nFactored shear stress, $v_u = 0.60F_y$`,
    options: [
      { label: 'A', text: '914' },
      { label: 'B', text: '1054' },
      { label: 'C', text: '924' },
      { label: 'D', text: '818' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(47), finalAnswer: 'P = 924.374 kN ≈ 924 kN (Option C)' },
  },

  // Item 48 — Situation 16
  {
    id: 'psad-nov2021-q48',
    number: 48,
    pageNumber: 334,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 16 — Steel Beam: Load from Allowable Deflection',
    text: `${SITUATION_16}48. If the allowable deflection due to service live load is 1/360 of the span, how much is the load $P$ in kN.`,
    options: [
      { label: 'A', text: '86.3' },
      { label: 'B', text: '62.6' },
      { label: 'C', text: '68.7' },
      { label: 'D', text: '75.4' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(48), finalAnswer: 'P = 62.641 kN ≈ 62.6 kN (Option B)' },
  },

  // Item 49 — Situation 17
  {
    id: 'psad-nov2021-q49',
    number: 49,
    pageNumber: 335,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 17 — Beam-and-Girder Floor: Critical Shear Stress',
    text: `${SITUATION_17}49. Compute the critical design shear stress (MPa) in beam $BE$.`,
    figureSvg: psadNov2021Figure(49, 'Figure 17: Framing plan of the beam-and-girder floor with section x-x'),
    figureCaption: 'Beam-and-girder floor framing plan',
    options: [
      { label: 'A', text: '1.39' },
      { label: 'B', text: '1.73' },
      { label: 'C', text: '1.85' },
      { label: 'D', text: '1.30' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(49), finalAnswer: 'fvc = 1.73 MPa (Option B)' },
  },

  // Item 50 — Situation 17
  {
    id: 'psad-nov2021-q50',
    number: 50,
    pageNumber: 335,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 17 — Beam-and-Girder Floor: Concrete Shear Strength',
    text: `${SITUATION_17}50. Determine the shear strength, $V_c$ (kN), provided by concrete of beam $BE$.`,
    options: [
      { label: 'A', text: '43.8' },
      { label: 'B', text: '50.8' },
      { label: 'C', text: '47.9' },
      { label: 'D', text: '63.8' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(50), finalAnswer: 'Vc = 63.809 kN ≈ 63.8 kN (Option D)' },
  },

  // Item 51 — Situation 17
  {
    id: 'psad-nov2021-q51',
    number: 51,
    pageNumber: 335,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 17 — Beam-and-Girder Floor: Stirrup Shear Strength',
    text: `${SITUATION_17}51. If beam $BE$ is provided with two legs of 10-mm-diameter shear reinforcement spaced at 130 mm on centers, how much is the resulting shear strength, $V_s$ in kN.`,
    options: [
      { label: 'A', text: '92.45' },
      { label: 'B', text: '95.05' },
      { label: 'C', text: '71.27' },
      { label: 'D', text: '125.36' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(51), finalAnswer: 'Vs = 95.046 kN ≈ 95.05 kN (Option B)' },
  },

  // Item 52 — Situation 18
  {
    id: 'psad-nov2021-q52',
    number: 52,
    pageNumber: 336,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 18 — T-Beam Shear: Concrete Contribution',
    text: `${SITUATION_18}52. Determine the shear strength (kN) provided by concrete.`,
    figureSvg: psadNov2021Figure(52, 'Figure 18: T-beam cross section with tension and compression reinforcement'),
    figureCaption: 'T-beam cross section',
    options: [
      { label: 'A', text: '195' },
      { label: 'B', text: '125' },
      { label: 'C', text: '169' },
      { label: 'D', text: '144' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(52), finalAnswer: 'Vc = 195.15 kN ≈ 195 kN (Option A)' },
  },

  // Item 53 — Situation 18
  {
    id: 'psad-nov2021-q53',
    number: 53,
    pageNumber: 336,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 18 — T-Beam Shear: Tie Contribution',
    text: `${SITUATION_18}53. Using 12-mm-diameter ties spaced at 100 mm center-to-center, compute the shear strength (kN) provided by the ties.`,
    options: [
      { label: 'A', text: '453' },
      { label: 'B', text: '657' },
      { label: 'C', text: '780' },
      { label: 'D', text: '489' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(53), finalAnswer: 'Vs = 489.85 kN ≈ 489 kN (Option D)' },
  },

  // Item 54 — Situation 18
  {
    id: 'psad-nov2021-q54',
    number: 54,
    pageNumber: 336,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 18 — T-Beam Shear: Required Width',
    text: `${SITUATION_18}54. If the beam is to be designed for a shear force of 455 kN, which of the following gives the required width (mm) of the beam using 10 mm ties at 90 mm on centers.`,
    options: [
      { label: 'A', text: '500' },
      { label: 'B', text: '450' },
      { label: 'C', text: '400' },
      { label: 'D', text: '550' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(54), finalAnswer: 'bw = 439.5 mm, choose 450 mm (Option B)' },
  },
];

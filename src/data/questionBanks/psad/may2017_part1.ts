import { Question } from '../../../types/exam';
import { psadMay2017Figure } from '../../psadMay2017Images';
import { solved, recall, opts } from './may2017Helpers';

/** Situation 1 is printed once and shared by items 1-3. */
const SIT1 =
  'Situation 1 – To prevent the 500-N ladder from sliding, a worker exerts a horizontal force F at C as shown in the Figure.\n\n' +
  'Given: $L = 6\\ \\text{m}$, $a = 1.5\\ \\text{m}$, $\\theta = 30^\\circ$.';

/** Situation 2 is printed once and shared by items 4-6. */
const SIT2 =
  'Situation 2 – A 120-kg man crosses the 4-m-long beam as shown in the figure. The coefficients of static friction at A and B are 0.40 and 0.20, respectively. Neglect the weight of the beam. $\\theta = 30^\\circ$.';

/** Situation 3 is printed once and shared by items 7-9. */
const SIT3 =
  'Situation 3 – Given the following data for the open cylindrical tank shown:\n\n' +
  'Height, $H = 3\\ \\text{m}$\nDiameter, $D = 2\\ \\text{m}$\nWater depth, $h = 2.4\\ \\text{m}$\n' +
  'Weight of cylinder $= 4.3\\ \\text{kN}$\nCoefficient of friction, $\\mu = 0.20$';

/** Situation 4 is printed once and shared by items 10-12. */
const SIT4 =
  'Situation 4 – For the truss shown, $H = 12\\ \\text{kN}$, $a = 1.5\\ \\text{m}$, $b = 4\\ \\text{m}$, and $c = 3.5\\ \\text{m}$.';

/** Situation 5 is printed once and shared by items 13-15. */
const SIT5 =
  'Situation 5 – A series of uniformly spaced hangers along a parabolic cable supports a 60-m pipeline as shown. The total weight of the pipe and water is $6.5\\ \\text{kN/m}$.';

/** Situation 6 is printed once and shared by items 16-18. */
const SIT6 =
  'Situation 6 – The beam shown is subjected to a uniform load of $w = 8\\ \\text{kN/m}$ and a concentrated load of $P = 40\\ \\text{kN}$ applied at C. $L_1 = 1.20\\ \\text{m}$, $L_2 = 0.30\\ \\text{m}$.';

export const PSAD_MAY2017_PART1: Question[] = [
  // ── Item 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q1',
    number: 1,
    pageNumber: 508,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Statics — Ladder Equilibrium',
    text: SIT1 + '\n\nAssuming all surface are frictionless, calculate the required force F in N.',
    figureSvg: psadMay2017Figure(
      'fig01_ladder',
      'A ladder of length L leaning against a vertical wall at B, foot at A on the floor, with a horizontal force F applied at point C a distance a from A and the ladder at 30° to the horizontal.',
    ),
    options: opts('521.4', '577.3', '258.6', '324.7'),
    ...solved(1, 'B', '577.33 N'),
  },

  // ── Item 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q2',
    number: 2,
    pageNumber: 508,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Statics — Ladder Equilibrium',
    text: 'Assuming all surface are frictionless, calculate the reaction at A.',
    options: opts('550', '600', '500', '450'),
    ...solved(2, 'C', '500 N'),
  },

  // ── Item 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q3',
    number: 3,
    pageNumber: 508,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Statics — Ladder with Friction',
    text: 'If $\\mu_A = 0.3$ and $\\mu_B = 0.2$, calculate the maximum weight of the ladder if the worker exerts a force $F = 200\\ \\text{N}$.',
    options: opts('420', '400', '380', '440'),
    ...solved(3, 'A', '420.74 N'),
  },

  // ── Item 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q4',
    number: 4,
    pageNumber: 508,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Statics — Beam Sliding',
    text: SIT2 + '\n\nDetermine the maximum value of "x" (m) before the beam start to slide.',
    figureSvg: psadMay2017Figure(
      'fig02_beam',
      'A beam of length L resting on supports at A and B, tilted 30° at A, with a man standing on it and the distance x measured from B.',
    ),
    options: opts('1.8', '3.2', '2.3', '2.5'),
    ...solved(4, 'C', 'x = 2.325 m'),
  },

  // ── Item 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q5',
    number: 5,
    pageNumber: 508,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Statics — Beam Sliding',
    text: 'What is the reaction (N) at A in in Part 1?',
    options: opts('691', '754', '526', '831'),
    ...solved(5, 'A', 'R_A = 691.3 N'),
  },

  // ── Item 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q6',
    number: 6,
    pageNumber: 509,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Statics — Beam Sliding',
    text: 'What is the reaction (N) at B in in Part 1?',
    options: opts('652', '503', '704', '456'),
    ...solved(6, 'B', 'R_B = 502.7 N'),
  },

  // ── Item 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q7',
    number: 7,
    pageNumber: 509,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Fluid Statics — Tank Stability',
    text: SIT3 + '\n\nFind the maximum force F (kN) to prevent translation of the tank.',
    figureSvg: psadMay2017Figure(
      'fig03_tank',
      'An open cylindrical tank of diameter D and height H holding water to depth h, with a horizontal force F applied at height h on the side.',
    ),
    options: opts('32.6', '38.7', '15.6', '18.5'),
    ...solved(7, 'C', 'F = 15.653 kN'),
  },

  // ── Item 8 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q8',
    number: 8,
    pageNumber: 509,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Fluid Statics — Tank Stability',
    text: 'Find the maximum force F (kN) to prevent tipping of the tank.',
    options: opts('18.5', '15.6', '38.7', '32.6'),
    ...solved(8, 'D', 'F = 32.611 kN'),
  },

  // ── Item 9 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q9',
    number: 9,
    pageNumber: 509,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Fluid Statics — Tank Stability',
    text: 'Find the maximum force F (kN) for the tank to remain equilibrium.',
    options: opts('15.6', '32.6', '38.7', '18.5'),
    ...recall(
      'A',
      'F = 15.6 kN',
      'The booklet works only the two limits: sliding (Part 1) gives $F = 15.653\\ \\text{kN}$ and tipping (Part 2) gives $F = 32.611\\ \\text{kN}$. Equilibrium needs both to be satisfied, so the governing value is the smaller one, 15.653 kN — option A. No third part is printed.',
    ),
  },

  // ── Item 10 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q10',
    number: 10,
    pageNumber: 510,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Trusses — Method of Joints',
    text: SIT4 + '\n\nCompute the total reaction at A in kN.',
    figureSvg: psadMay2017Figure(
      'fig04_truss',
      'A symmetrical truss spanning a + b + a horizontally with height c, joints A and B at the supports, C and D at the top chord and E at the centre, loaded by a horizontal force H at D.',
    ),
    options: opts('13.4', '6', '12', '9'),
    ...solved(10, 'B', 'A_v = 6 kN'),
  },

  // ── Item 11 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q11',
    number: 11,
    pageNumber: 510,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Trusses — Method of Joints',
    text: 'Compute the total reaction at B in kN.',
    options: opts('6', '9', '13.4', '12'),
    ...solved(11, 'C', 'R_B = 13.416 kN'),
  },

  // ── Item 12 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q12',
    number: 12,
    pageNumber: 510,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Trusses — Member Force',
    text: 'Calculate the force (kN) in member AE.',
    options: opts('8.98 C', '4.19 T', '4.19 C', '8.98 T'),
    ...solved(12, 'B', 'F_AE = 4.19 kN (tension)'),
  },

  // ── Item 13 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q13',
    number: 13,
    pageNumber: 510,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Cables — Parabolic Cable Sag',
    text: SIT5 + '\n\nCalculate the minimum sag (m) of the cable if the allowable tensile load of the cable is 2550 kN.',
    figureSvg: psadMay2017Figure(
      'fig05_cable',
      'A parabolic cable suspended between A and C over a span L, carrying a pipeline of weight w per metre through uniformly spaced hangers, with sag y at midspan B.',
    ),
    options: opts('1.36', '1.58', '1.15', '1.24'),
    ...solved(13, 'C', 'y = 1.15 m'),
  },

  // ── Item 14 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q14',
    number: 14,
    pageNumber: 511,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Cables — Axial Stress',
    text: 'If the sag is $y = 3\\ \\text{m}$, calculate the maximum axial stress (MPa) in the cable if its diameter is 75 mm.',
    options: opts('204', '185', '225', '162'),
    ...solved(14, 'C', 'f_t = 225 MPa'),
  },

  // ── Item 15 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q15',
    number: 15,
    pageNumber: 511,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Cables — Additional Load',
    text: 'If the sag is $y = 2\\ \\text{m}$, calculate the additional load (kN/m) can the cable support if its allowable tensile load is 2000 kN.',
    options: opts('2.5', '2.7', '2.1', '2.3'),
    ...solved(15, 'D', '2.311 kN/m'),
  },

  // ── Item 16 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q16',
    number: 16,
    pageNumber: 511,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Beams — Bending and Twisting',
    text: SIT6 + '\n\nCalculate the bending moment at A in kN-m.',
    figureSvg: psadMay2017Figure(
      'fig06_beam3d',
      'A three-dimensional cantilever beam fixed at A with a uniform load w along L1 and a concentrated load P applied at C at an eccentricity L2 from the beam axis.',
    ),
    options: opts('3.76', '53.76', '48', '63.25'),
    ...solved(16, 'B', 'M_A = 53.76 kN-m'),
  },

  // ── Item 17 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q17',
    number: 17,
    pageNumber: 511,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Beams — Torsion',
    text: 'Calculate the twisting moment at A in kN-m.',
    options: opts('12', '40', '24', '36'),
    ...solved(17, 'A', 'T_A = 12 kN-m'),
  },

  // ── Item 18 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q18',
    number: 18,
    pageNumber: 511,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Beams — Shear',
    text: 'Calculate the shear at A in kN.',
    options: opts('40', '9.6', '52.4', '49.6'),
    ...solved(18, 'D', 'V_A = 49.6 kN'),
  },
];

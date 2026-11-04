import { Question } from '../../../types/exam';
import { solved, opts } from './may2015Helpers';
import { psadMay2015Figure } from '../../psadMay2015Images';

export const PSAD_MAY2015_PART2: Question[] = [
  // Item 16
  {
    id: 'psad-may2015-q16',
    number: 16,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Frames under Wind Load',
    text: 'Situation 4 (continued) – Determine the total horizontal force acting on the frame.',
    options: opts('68.3 kN', '54.9 kN', '49.6 kN', '64.8 kN'),
    ...solved(16, 'D', '64.8 kN', 98),
  },

  // Item 17
  {
    id: 'psad-may2015-q17',
    number: 17,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Plane Truss with Cable Diagonals',
    text: 'Situation 5 – For the plane truss shown in the figure, a = 3 m, b = 2.25 m, h = 3 m, $P_1$ = 1 kN, $P_2$ = 3 kN, $P_3$ = 3 kN, and $P_4$ = 1.5 kN. The diagonal members CF, BG, DG, and CH are cables. What is the force in member BF?',
    figureSvg: psadMay2015Figure(
      5,
      'Figure 5: Plane truss on span 2a + 2b with top chord F-G-H at height h, bottom chord A-B-C-D-E, cable diagonals CF, BG, DG and CH, and loads P1 to P4.',
    ),
    figureCaption:
      'Figure 5: Plane truss for Situations 5 and 6, with cable diagonals (Situation 5).',
    options: opts('5.2 kN', '5.0 kN', '4.5 kN', '4.7 kN'),
    ...solved(17, 'D', '4.7 kN', 99, 100),
  },

  // Item 18
  {
    id: 'psad-may2015-q18',
    number: 18,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Plane Truss with Cable Diagonals',
    text: 'Situation 5 (continued) – What is the force in member DG?',
    options: opts('0.925 kN', '0.825 kN', '0.875 kN', '0.725 kN'),
    ...solved(18, 'C', '0.875 kN', 99, 100),
  },

  // Item 19
  {
    id: 'psad-may2015-q19',
    number: 19,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Plane Truss with Cable Diagonals',
    text: 'Situation 5 (continued) – What is the force in member DH?',
    options: opts('2.3 kN', '2.5 kN', '2.1 kN', '3.25 kN'),
    ...solved(19, 'A', '2.3 kN', 99, 100),
  },

  // Item 20
  {
    id: 'psad-may2015-q20',
    number: 20,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Plane Truss with Cable Diagonals',
    text: 'Situation 6 – For the plane truss shown in the figure, a = 3 m, b = 2.25 m, h = 3 m, $P_1$ = 1 kN, $P_2$ = 0 kN, $P_3$ = 0 kN, and $P_4$ = 1.5 kN. The diagonal members CF, BG, DG, and CH are cables. What is the force in member AF?',
    figureSvg: psadMay2015Figure(
      6,
      'Figure 6: The same plane truss as Figure 5, now loaded only with P1 = 1 kN at A and the horizontal P4 = 1.5 kN at H.',
    ),
    figureCaption:
      'Figure 6: Plane truss loaded with P₁ = 1 kN at A and P₄ = 1.5 kN at H (Situation 6).',
    options: opts('1.414 kN', '1 kN', '1.325 kN', '1.25 kN'),
    ...solved(20, 'A', '1.414 kN', 100, 101),
  },

  // Item 21
  {
    id: 'psad-may2015-q21',
    number: 21,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Plane Truss with Cable Diagonals',
    text: 'Situation 6 (continued) – What is the force in member DG?',
    options: opts('1 kN', '1.45 kN', '0.75 kN', '1.25 kN'),
    ...solved(21, 'D', '1.25 kN', 100, 101),
  },

  // Item 22
  {
    id: 'psad-may2015-q22',
    number: 22,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Plane Truss with Cable Diagonals',
    text: 'Situation 6 (continued) – What is the force in member GH?',
    options: opts('1.45 kN', '0.75 kN', '1.25 kN', '1 kN'),
    ...solved(22, 'B', '0.75 kN', 100, 101),
  },

  // Item 23
  {
    id: 'psad-may2015-q23',
    number: 23,
    pageNumber: 76,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Moving Loads on a Beam',
    text: 'Situation 7 – A truck with axle loads of $W_1$ = 19.6 kN and $W_2$ = 78.6 kN on a wheel base of d = 4.3 m rolls across the beam shown in the figure. Determine the following: The maximum positive moment that can be developed in the beam.',
    figureSvg: psadMay2015Figure(
      7,
      'Figure 7: Beam A-B-C on a 25 m span with B at 3 m from A, carrying two truck axle loads W1 and W2 spaced d = 4.3 m apart.',
    ),
    figureCaption:
      'Figure 7: Beam with overhang carrying the moving axle loads W₁ and W₂ (Situation 7).',
    options: opts('524.98 kN-m', '384.33 kN-m', '498.78 kN-m', '452.12 kN-m'),
    ...solved(23, 'C', '498.78 kN-m', 101, 102),
  },

  // Item 24
  {
    id: 'psad-may2015-q24',
    number: 24,
    pageNumber: 76,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Moving Loads on a Beam',
    text: 'Situation 7 (continued) – The maximum negative moment that can be developed in the beam.',
    options: opts('58.8 kN-m', '204.4 kN-m', '235.8 kN-m', '263.2 kN-m'),
    ...solved(24, 'C', '235.8 kN-m', 101, 102),
  },

  // Item 25
  {
    id: 'psad-may2015-q25',
    number: 25,
    pageNumber: 76,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Moving Loads on a Beam',
    text: 'Situation 7 (continued) – The maximum negative shear that can be developed in the beam.',
    options: opts('105.87 kN', '94.37 kN', '76.35 kN', '82.84 kN'),
    ...solved(25, 'B', '94.37 kN', 101, 102),
  },

  // Item 26
  {
    id: 'psad-may2015-q26',
    number: 26,
    pageNumber: 76,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Propped Cantilever',
    text: 'Situation 8 – The beam AB shown in the figure supports the load of w = 36 kN/m. The beam is fixed at B and simply supported at A. Length of beam AB is L = 8 m and height of column AC is H = 6 m. Determine the moment at B.',
    figureSvg: psadMay2015Figure(
      8,
      'Figure 8: Beam AB of length L carrying a uniform load w, fixed at B and propped at A by column AC of height H.',
    ),
    figureCaption:
      'Figure 8: Propped cantilever AB with column AC (Situation 8).',
    options: opts('-384 kN-m', '-288 kN-m', '-164.57 kN-m', '-460.8 kN-m'),
    ...solved(26, 'B', '-288 kN-m', 102),
  },

  // Item 27
  {
    id: 'psad-may2015-q27',
    number: 27,
    pageNumber: 76,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Propped Cantilever',
    text: 'Situation 8 (continued) – Determine the location of the point of maximum moment from point A.',
    options: opts('3 m', '3.43 m', '2.67 m', '2.4 m'),
    ...solved(27, 'A', '3 m', 102),
  },

  // Item 28
  {
    id: 'psad-may2015-q28',
    number: 28,
    pageNumber: 77,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Propped Cantilever',
    text: 'Situation 8 (continued) – Determine the load of column AC.',
    options: opts('86.4 kN', '90 kN', '108 kN', '123.4 kN'),
    ...solved(28, 'C', '108 kN', 102),
  },

  // Item 29
  {
    id: 'psad-may2015-q29',
    number: 29,
    pageNumber: 77,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Cantilever Retaining Wall',
    text: 'Situation 9 – A 3-m-high cantilever retaining wall is acted on by an active force that varies uniformly from 3 kN/m at the top to 54 kN/m at the base. Assume that the flexural rigidity of the wall is constant. See figure above. Compute the maximum moment in the wall.',
    figureSvg: psadMay2015Figure(
      9,
      'Figure 9: Cantilever retaining wall 3 m high, fixed at the base A and free at the top B, loaded by a pressure varying from 3 kN/m at the top to 54 kN/m at the base.',
    ),
    figureCaption:
      'Figure 9: Cantilever wall under a linearly varying pressure, 3 kN/m at top to 54 kN/m at base (Situation 9).',
    options: opts('100 kN-m', '70 kN-m', '90 kN-m', '80 kN-m'),
    ...solved(29, 'C', '90 kN-m', 102, 103),
  },

  // Item 30
  {
    id: 'psad-may2015-q30',
    number: 30,
    pageNumber: 77,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Propped Cantilever',
    text: 'Situation 9 (continued) – If the wall is simply supported at the top, compute the maximum moment in the wall.',
    options: opts('33.975 kN-m', '40.125 kN-m', '31.125 kN-m', '29.625 kN-m'),
    ...solved(30, 'A', '33.975 kN-m', 102, 103),
  },
];

import { Question } from '../../../types/exam';
import { solved, opts } from './may2015Helpers';
import { psadMay2015Figure } from '../../psadMay2015Images';

export const PSAD_MAY2015_PART1: Question[] = [
  // Item 1
  {
    id: 'psad-may2015-q1',
    number: 1,
    pageNumber: 72,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Material Properties',
    text: 'The material composition is the same but its mechanical properties are different in every direction.',
    options: opts('isotropic material', 'orthotropic material', 'homogeneous material', 'elastic material'),
    ...solved(1, 'B', 'orthotropic material', 94),
  },

  // Item 2
  {
    id: 'psad-may2015-q2',
    number: 2,
    pageNumber: 72,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Material Properties',
    text: 'Refers to the tendency of solid materials to return to their original shape after being forces are applied on them. When the forces are removed, the object will return to its initial shape and size.',
    options: opts('buckling', 'yielding', 'strain hardening', 'elasticity'),
    ...solved(2, 'D', 'elasticity', 94),
  },

  // Item 3
  {
    id: 'psad-may2015-q3',
    number: 3,
    pageNumber: 72,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Material Properties',
    text: 'Refers to the stress at which a material begins to deform plastically.',
    options: opts('strain hardening', 'buckling', 'yielding', 'rapture'),
    ...solved(3, 'C', 'yielding', 94),
  },

  // Item 4
  {
    id: 'psad-may2015-q4',
    number: 4,
    pageNumber: 72,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Dynamics - Newton’s Second Law',
    text: 'A car is being towed up on an incline with an angle of 15° with the horizontal. Find the force (parallel to the incline) needed to pull the car with an acceleration of 1.2 m/s². The car weighs 20 kN. Neglect friction.',
    options: opts('5.18 kN', '8.36 kN', '2.45 kN', '7.62 kN'),
    ...solved(4, 'D', '7.62 kN', 94),
  },

  // Item 5
  {
    id: 'psad-may2015-q5',
    number: 5,
    pageNumber: 72,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Statics - Frames and Machines',
    text: 'Situation 1 – The portable camping table shown in the Figure is to support a load P = 1500 N at a variable distance x from D. If x = 0.60 m, determine the following: The reaction at A.',
    figureSvg: psadMay2015Figure(
      1,
      'Figure 1: Portable camping table, 1.50 m between A and B, with load P applied at distance x from D on the top member DE and X-braced legs.',
    ),
    figureCaption:
      'Figure 1: Camping table with load P at distance x from D (Situation 1).',
    options: opts('600 N', '800 N', '750 N', '900 N'),
    ...solved(5, 'D', '900 N', 95),
  },

  // Item 6
  {
    id: 'psad-may2015-q6',
    number: 6,
    pageNumber: 73,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Statics - Frames and Machines',
    text: 'Situation 1 (continued) – The reaction at B.',
    options: opts('750 N', '600 N', '900 N', '800 N'),
    ...solved(6, 'B', '600 N', 95),
  },

  // Item 7
  {
    id: 'psad-may2015-q7',
    number: 7,
    pageNumber: 73,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Statics - Frames and Machines',
    text: 'Situation 1 (continued) – The reaction at D.',
    options: opts('800 N', '900 N', '600 N', '750 N'),
    ...solved(7, 'B', '900 N', 95),
  },

  // Item 8
  {
    id: 'psad-may2015-q8',
    number: 8,
    pageNumber: 73,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Statics - Cables',
    text: 'Situation 2 – The towers at the opposite side of the river supports the load W = 50 kN as shown in the Figure. The distance L = 20 m and the sag d = 1.5 m. At what distance from A should the load be positioned such that the tensions in AC and BC are equal?',
    figureSvg: psadMay2015Figure(
      2,
      'Figure 2: Cable suspended between two towers A and B a distance L apart, carrying load W at point C with sag d, split into spans x1 and x2.',
    ),
    figureCaption:
      'Figure 2: Cable between two towers with load W at C, spans x₁ and x₂, sag d (Situation 2).',
    options: opts('5 m', '15 m', '10 m', '12 m'),
    ...solved(8, 'C', '10 m', 96),
  },

  // Item 9
  {
    id: 'psad-may2015-q9',
    number: 9,
    pageNumber: 73,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Statics - Cables',
    text: 'Situation 2 (continued) – If $x_1$ = 5 m, what is the tension in segment BC?',
    options: opts('130.50 kN', '128.36 kN', '120.45 kN', '125.62 kN'),
    ...solved(9, 'D', '125.62 kN', 96),
  },

  // Item 10
  {
    id: 'psad-may2015-q10',
    number: 10,
    pageNumber: 73,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Statics - Cables',
    text: 'Situation 2 (continued) – If $x_1$ = 5 m, what is the total length of the cable?',
    options: opts('20.375 m', '21.025 m', '20.295 m', '20.985 m'),
    ...solved(10, 'C', '20.295 m', 96),
  },

  // Item 11
  {
    id: 'psad-may2015-q11',
    number: 11,
    pageNumber: 73,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Three-Hinged Arch',
    text: 'Situation 3 – The three-hinged arch shown in the Figure is loaded with vertical loads only. Distance H = 12 m and s = 4 m. Determine the horizontal reaction at A.',
    figureSvg: psadMay2015Figure(
      3,
      'Figure 3: Symmetric three-hinged arch with hinge C at the crown, rise H = 12 m, six panels of s = 4 m, loaded 90 kN, 240 kN, 240 kN, 90 kN.',
    ),
    figureCaption:
      'Figure 3: Three-hinged arch, rise H, panels of width s, with four vertical loads (Situation 3).',
    options: opts('210 kN', '170 kN', '180 kN', '190 kN'),
    ...solved(11, 'D', '190 kN', 97),
  },

  // Item 12
  {
    id: 'psad-may2015-q12',
    number: 12,
    pageNumber: 73,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Three-Hinged Arch',
    text: 'Situation 3 (continued) – Determine the vertical reaction at B.',
    options: opts('330 kN', '90 kN', '190 kN', '240 kN'),
    ...solved(12, 'A', '330 kN', 97),
  },

  // Item 13
  {
    id: 'psad-may2015-q13',
    number: 13,
    pageNumber: 74,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Three-Hinged Arch',
    text: 'Situation 3 (continued) – Determine the vertical reaction at C.',
    options: opts('0', '330 kN', '240 kN', '90 kN'),
    ...solved(13, 'A', '0', 97),
  },

  // Item 14
  {
    id: 'psad-may2015-q14',
    number: 14,
    pageNumber: 74,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Frames under Wind Load',
    text: 'Situation 4 – The frame shown in the figure is acted on by wind load pressure of q = 1.44 kPa. These frames are spaced 6 m apart normal to the paper. Consider the roller support at B and the joint at D as pin. Determine the vertical component of the reaction at A.',
    figureSvg: psadMay2015Figure(
      4,
      'Figure 4: Gable frame 9 m wide, 6 m eaves height, with wind pressure 1.44 kPa acting on both the windward and leeward faces; wind coefficients c = 0.8, 0.1, 0.2 and 0.4 are marked.',
    ),
    figureCaption:
      'Figure 4: Gable frame under wind pressure q = 1.44 kPa, frames spaced 6 m (Situation 4).',
    options: opts('23.653 kN', '27.756 kN', '16.092 kN', '32.685 kN'),
    ...solved(14, 'B', '27.756 kN', 98),
  },

  // Item 15
  {
    id: 'psad-may2015-q15',
    number: 15,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Frames under Wind Load',
    text: 'Situation 4 (continued) – Determine the vertical component of the reaction at B.',
    options: opts('32.685 kN', '16.092 kN', '23.653 kN', '27.756 kN'),
    ...solved(15, 'B', '16.092 kN', 98),
  },
];

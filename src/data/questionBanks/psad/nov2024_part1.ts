import { Question } from '../../../types/exam';
import { solved } from './nov2024Helpers';
import {
  PSAD_NOV_2024_SITUATIONS,
  getPsadNov2024FigureHtml,
} from '../../situationImages';

const S2_FIG = getPsadNov2024FigureHtml(2);
const S2_CAP = PSAD_NOV_2024_SITUATIONS[2].caption;

const S3_FIG = getPsadNov2024FigureHtml(3);
const S3_CAP = PSAD_NOV_2024_SITUATIONS[3].caption;

const S4_FIG = getPsadNov2024FigureHtml(4);
const S4_CAP = PSAD_NOV_2024_SITUATIONS[4].caption;

export const PSAD_NOV2024_PART1: Question[] = [
  // Item 1
  {
    id: 'psad-nov2024-q1',
    number: 1,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Material Behaviour',
    text: 'Situation 1 — Identify the behaviour of materials described:\n\n1. When a material is subjected to repeated cycles of stress or strain, what causes its structure to breakdown ultimately leading to fracture?',
    options: [
      { label: 'A', text: 'creep' },
      { label: 'B', text: 'plasticity' },
      { label: 'C', text: 'fatigue' },
      { label: 'D', text: 'yielding' },
    ],
    ...solved(1, 'C', 'fatigue (Option C)'),
  },

  // Item 2
  {
    id: 'psad-nov2024-q2',
    number: 2,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Material Behaviour',
    text: 'Situation 1 — 2. When a material has to support a load for a long period of time, what causes it to continue to deform until a sudden fracture occurs?',
    options: [
      { label: 'A', text: 'plasticity' },
      { label: 'B', text: 'fatigue' },
      { label: 'C', text: 'creep' },
      { label: 'D', text: 'yielding' },
    ],
    ...solved(2, 'C', 'creep (Option C)'),
  },

  // Item 3
  {
    id: 'psad-nov2024-q3',
    number: 3,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Material Behaviour',
    text: 'Situation 1 — 3. In what condition is a material when it breaks down and deforms permanently even due to a slight increase in stress above the elastic limit?',
    options: [
      { label: 'A', text: 'plasticity' },
      { label: 'B', text: 'fatigue' },
      { label: 'C', text: 'yielding' },
      { label: 'D', text: 'creep' },
    ],
    ...solved(3, 'C', 'yielding (Option C)'),
  },

  // Item 4
  {
    id: 'psad-nov2024-q4',
    number: 4,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Trusses with Cable Diagonals',
    text: 'Situation 2 — For the truss configuration shown, members AD and BC are cables.\nGiven: V = 10 kN, H = 6 kN, a = 1.5 m, b = 4 m, c = 6 m.\n\n4. Calculate the vertical reaction (kN) at A.',
    figureCaption: S2_CAP,
    figureSvg: S2_FIG,
    options: [
      { label: 'A', text: '15.14' },
      { label: 'B', text: '10.00' },
      { label: 'C', text: '4.86' },
      { label: 'D', text: '3.79' },
    ],
    ...solved(4, 'A', '15.14 (Option A)'),
  },

  // Item 5
  {
    id: 'psad-nov2024-q5',
    number: 5,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Trusses with Cable Diagonals',
    text: 'Situation 2 — 5. Calculate the force (kN) in member AC.',
    figureCaption: S2_CAP,
    figureSvg: S2_FIG,
    options: [
      { label: 'A', text: '15.61 T' },
      { label: 'B', text: '15.61 C' },
      { label: 'C', text: '16.51 T' },
      { label: 'D', text: '16.51 C' },
    ],
    ...solved(5, 'B', '15.61 C (Option B)'),
  },

  // Item 6
  {
    id: 'psad-nov2024-q6',
    number: 6,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Trusses with Cable Diagonals',
    text: 'Situation 2 — 6. Calculate the force (kN) in member BD.',
    figureCaption: S2_CAP,
    figureSvg: S2_FIG,
    options: [
      { label: 'A', text: '10.31 T' },
      { label: 'B', text: '13.11 C' },
      { label: 'C', text: '10.31 C' },
      { label: 'D', text: '13.11 T' },
    ],
    ...solved(6, 'C', '10.31 C (Option C)'),
  },

  // Item 7
  {
    id: 'psad-nov2024-q7',
    number: 7,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Cable Guy Systems',
    text: 'Situation 3 — A flagpole is supported by four cables as shown in the figure.\nGiven: P = 5 kN, a = 12 m, b = 12 m, h = 20 m. Diameter of cable = 12 mm, E = 200 GPa.\n\n7. Calculate the tensile stress (MPa) in cable AF.',
    figureCaption: S3_CAP,
    figureSvg: S3_FIG,
    options: [
      { label: 'A', text: '44.2' },
      { label: 'B', text: '32.3' },
      { label: 'C', text: '104.2' },
      { label: 'D', text: '112.4' },
    ],
    ...solved(7, 'C', '104.2 (Option C)'),
  },

  // Item 8
  {
    id: 'psad-nov2024-q8',
    number: 8,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Cable Guy Systems',
    text: 'Situation 3 — 8. What is the elongation (mm) of cable AF if the stress in the cable is 220 MPa?',
    figureCaption: S3_CAP,
    figureSvg: S3_FIG,
    options: [
      { label: 'A', text: '8.8' },
      { label: 'B', text: '9.5' },
      { label: 'C', text: '18.7' },
      { label: 'D', text: '13.2' },
    ],
    ...solved(8, 'C', '18.7 (Option C)'),
  },

  // Item 9
  {
    id: 'psad-nov2024-q9',
    number: 9,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Cable Guy Systems',
    text: 'Situation 3 — 9. If the elongation of AF is 22 mm, find the horizontal displacement (mm) at G.',
    figureCaption: S3_CAP,
    figureSvg: S3_FIG,
    options: [
      { label: 'A', text: '51.9' },
      { label: 'B', text: '36.7' },
      { label: 'C', text: '31.3' },
      { label: 'D', text: '7.6' },
    ],
    ...solved(9, 'A', '51.9 (Option A)'),
  },

  // Item 10
  {
    id: 'psad-nov2024-q10',
    number: 10,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Engineering Mechanics - Statics & Friction',
    text: 'Situation 4 — Two cylinders A and B, weighing 750 N and 420 N, respectively, are connected by a rigid curved rod parallel to the cylindrical surface. Neglect the diameter of the cylinders. Given: θ = 90°, R = 6 m.\n\n10. If the surfaces are frictionless, what is the value of angle α to maintain equilibrium?',
    figureCaption: S4_CAP,
    figureSvg: S4_FIG,
    options: [
      { label: 'A', text: '50.17°' },
      { label: 'B', text: '60.75°' },
      { label: 'C', text: '45.14°' },
      { label: 'D', text: '76.12°' },
    ],
    ...solved(10, 'B', '60.75° (Option B)'),
  },

  // Item 11
  {
    id: 'psad-nov2024-q11',
    number: 11,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Engineering Mechanics - Statics & Friction',
    text: 'Situation 4 — 11. If the coefficient of friction is μ_s = 0.2 in the contacting surfaces, what is the smallest value of angle α to prevent counterclockwise rotation?',
    figureCaption: S4_CAP,
    figureSvg: S4_FIG,
    options: [
      { label: 'A', text: '56.88°' },
      { label: 'B', text: '49.44°' },
      { label: 'C', text: '38.66°' },
      { label: 'D', text: '50.17°' },
    ],
    ...solved(11, 'C', '38.66° (Option C)'),
  },

  // Item 12
  {
    id: 'psad-nov2024-q12',
    number: 12,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Engineering Mechanics - Statics & Friction',
    text: 'Situation 4 — 12. If the coefficient of friction is μ_s = 0.015 in the contacting surfaces, which of the following is the smallest value of angle α to impend motion?',
    figureCaption: S4_CAP,
    figureSvg: S4_FIG,
    options: [
      { label: 'A', text: '47.15°' },
      { label: 'B', text: '34.34°' },
      { label: 'C', text: '62.34°' },
      { label: 'D', text: '59.15°' },
    ],
    ...solved(12, 'D', '59.15° (Option D)'),
  },

  // Item 13
  {
    id: 'psad-nov2024-q13',
    number: 13,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Engineering Mechanics - Dynamics & Conical Pendulum',
    text: 'Situation 5 — A pendulum is rotated in a conical manner at a constant velocity. The length of the string cable is 450 mm, and the weight of the pendulum bob attached at the end of the string is 600 N.\n\n13. If the string makes an angle of 30° with the vertical, find the tension (N) in the cable.',
    options: [
      { label: 'A', text: '692.8' },
      { label: 'B', text: '1200.0' },
      { label: 'C', text: '519.6' },
      { label: 'D', text: '364.4' },
    ],
    ...solved(13, 'A', '692.8 (Option A)'),
  },

  // Item 14
  {
    id: 'psad-nov2024-q14',
    number: 14,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Engineering Mechanics - Dynamics & Conical Pendulum',
    text: 'Situation 5 — 14. If the string makes an angle of 30° with the vertical and if the allowable tension in the cable is 1250 N, find the maximum weight (N) of the bob attached.',
    options: [
      { label: 'A', text: '625.0' },
      { label: 'B', text: '1082.5' },
      { label: 'C', text: '721.7' },
      { label: 'D', text: '1443.4' },
    ],
    ...solved(14, 'B', '1082.5 (Option B)'),
  },

  // Item 15
  {
    id: 'psad-nov2024-q15',
    number: 15,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Engineering Mechanics - Dynamics & Conical Pendulum',
    text: 'Situation 5 — 15. Find the pulling force (N) at the plane of circumference, if it is rotated at a constant speed of v = 2.5 m/s.',
    options: [
      { label: 'A', text: '643.1' },
      { label: 'B', text: '346.1' },
      { label: 'C', text: '692.9' },
      { label: 'D', text: '992.6' },
    ],
    ...solved(15, 'D', '992.6 (Option D)'),
  },
];

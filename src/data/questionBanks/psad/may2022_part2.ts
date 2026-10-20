import { Question } from '../../../types/exam';
import {
  psadFigure,
  psadMay2022SolutionImages,
  psadMay2022SolutionPage,
  psadMay2022SolutionPageEnd,
} from '../../psadMay2022Images';

const sol = (situation: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: psadMay2022SolutionPage(situation),
  pageNumberEnd: psadMay2022SolutionPageEnd(situation),
  images: psadMay2022SolutionImages(situation),
});

const opt = (a: string, b: string, c: string, d: string) => [
  { label: 'A' as const, text: a },
  { label: 'B' as const, text: b },
  { label: 'C' as const, text: c },
  { label: 'D' as const, text: d },
];

const SITUATION_7 =
  'Situation 7 — A girder of a bridge with a span of 24 m is simply supported at its ends. The girder is crossed by a standard H loading consisting of a front wheel load of 17.8 kN and a rear wheel load of 71.2 kN which are 4.3 m apart. Determine the following forces on the girder due to these loads:';

const SITUATION_8 =
  'Situation 8 — A 20-m long precast pile is to be lifted from its casting bed. The pile weighs 4 kN/m.';

const SITUATION_9 =
  'Situation 9 — Given the following data of the beam shown:\n\nLength, L = 10 m\nUniform load, w = 15 kN/m';

const SITUATION_10 =
  'Situation 10 — The semi-circular arc shown is subjected to three forces.\n\nGiven:  Radius R = 2.5 m\n  Forces: P₁ = 2.2 kN; P₂ = 1.8 kN; P₃ = 1.2 kN\n  Angles: α = 45°; β = 30°';

const SITUATION_11 =
  'Situation 11 — A flat steel bar is 5 mm thick by 50 mm wide by 300 mm long. Use E = 200 GPa. The bar is bent by moment applied at its ends.';

const SITUATION_12 =
  'Situation 12 — The GERTC signage is supported by a hollow circular pole as shown. Given the following data:\n\nDimensions:\n  a = 0.4 m;  w = 2.4 m\n  h = 1.2 m;  H = 9 m\nOutside diameter of pole = 270 mm\nThickness of pole = 12 mm\nWind force acting on the signage = 5 kN';

export const PSAD_MAY2022_PART2: Question[] = [
  // --- SITUATION 7 (Items 19 - 21) ---
  {
    id: 'psad-may2022-q19',
    number: 19,
    pageNumber: 440,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 7 — Bridge Girder: Maximum Support Reaction',
    text: `${SITUATION_7}\n\n19. The maximum support reaction (kN).`,
    options: opt('76.3', '96.3', '85.8', '102.4'),
    correctAnswer: 'C',
    solution: { ...sol(7), finalAnswer: '85.8 kN (Option C)' },
  },
  {
    id: 'psad-may2022-q20',
    number: 20,
    pageNumber: 440,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 7 — Bridge Girder: Maximum Bending Moment',
    text: '20. The maximum bending moment (kN-m).',
    options: opt('632.8', '724.2', '496.4', '587.4'),
    correctAnswer: 'C',
    solution: { ...sol(7), finalAnswer: '496.4 kN-m (Option C)' },
  },
  {
    id: 'psad-may2022-q21',
    number: 21,
    pageNumber: 440,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 7 — Bridge Girder: Maximum Shear at Midspan',
    text: '21. The maximum shear (kN) at midspan.',
    options: opt('41.3', '56.9', '98.7', '102.5'),
    correctAnswer: 'A',
    solution: { ...sol(7), finalAnswer: '41.3 kN (Option A)' },
  },

  // --- SITUATION 8 (Items 22 - 24) ---
  {
    id: 'psad-may2022-q22',
    number: 22,
    pageNumber: 440,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 8 — Precast Pile: Maximum Positive Moment',
    text: `${SITUATION_8}\n\n22. With its left end on the ground, the pile is lifted at a point 4 m from its right end. What is the maximum positive moment (kN-m) in the pile?`,
    options: opt('124.8', '112.5', '136.2', '254.4'),
    correctAnswer: 'B',
    solution: { ...sol(8), finalAnswer: '112.5 kN-m (Option B)' },
  },
  {
    id: 'psad-may2022-q23',
    number: 23,
    pageNumber: 440,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 8 — Precast Pile: Optimum Lifting Point for Flexure',
    text: '23. At what equal distance (m) from the ends must the pile be lifted such that the maximum flexural stress is the least possible?',
    options: opt('4.36', '4.14', '3.58', '5.12'),
    correctAnswer: 'B',
    solution: { ...sol(8), finalAnswer: '4.14 m (Option B)' },
  },
  {
    id: 'psad-may2022-q24',
    number: 24,
    pageNumber: 440,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 8 — Precast Pile: Optimum Lifting Point for Shear',
    text: '24. At what equal distance (m) from the ends must the pile be lifted such that the maximum shear is the least possible?',
    options: opt('4', '5.5', '4.5', '5'),
    correctAnswer: 'D',
    solution: { ...sol(8), finalAnswer: '5 m (Option D)' },
  },

  // --- SITUATION 9 (Items 25 - 27) ---
  {
    id: 'psad-may2022-q25',
    number: 25,
    pageNumber: 440,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 9 — Beam with Overhangs: Maximum Bending Moment',
    text: `${SITUATION_9}\n\n25. If x₁ = 2 m, how much is the maximum bending moment (kN-m) in the beam?`,
    figureSvg: psadFigure(9, 'Situation 9: beam with overhangs and support positions x1 and x2'),
    figureCaption: 'Situation 9: beam with overhangs and support positions x₁ and x₂',
    options: opt('37.5', '42.5', '30', '32.5'),
    correctAnswer: 'A',
    solution: { ...sol(9), finalAnswer: '37.5 kN-m (Option A)' },
  },
  {
    id: 'psad-may2022-q26',
    number: 26,
    pageNumber: 440,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 9 — Beam with Overhangs: Zero Midspan Moment',
    text: '26. Compute the value of x₁ (m) such that the moment at the midspan is zero.',
    options: opt('2.1', '2.7', '2.5', '2.0'),
    correctAnswer: 'C',
    solution: { ...sol(9), finalAnswer: 'x₁ = 2.5 m (Option C)' },
  },
  {
    id: 'psad-may2022-q27',
    number: 27,
    pageNumber: 441,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 9 — Beam with Overhangs: Least Flexural Stress',
    text: '27. Determine the value of x₂ (m) such that the maximum flexural stress in the beam is the least possible value.',
    options: opt('3.65', '2.07', '5.86', '5.24'),
    correctAnswer: 'C',
    solution: { ...sol(9), finalAnswer: 'x₂ = 5.86 m (Option C)' },
  },

  // --- SITUATION 10 (Items 28 - 30) ---
  {
    id: 'psad-may2022-q28',
    number: 28,
    pageNumber: 441,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 10 — Semi-Circular Arc: Resultant of Three Forces',
    text: `${SITUATION_10}\n\n28. Compute the resultant (kN) of the three forces.`,
    figureSvg: psadFigure(10, 'Situation 10: semi-circular arc loaded by P1, P2 and P3'),
    figureCaption: 'Situation 10: semi-circular arc loaded by P₁, P₂ and P₃',
    options: opt('3.9', '3.7', '1.1', '4.2'),
    correctAnswer: 'A',
    solution: { ...sol(10), finalAnswer: '3.9 kN (Option A)' },
  },
  {
    id: 'psad-may2022-q29',
    number: 29,
    pageNumber: 441,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 10 — Semi-Circular Arc: Reaction at A',
    text: '29. How much is the resultant reaction (kN) at A.',
    options: opt('2.36', '2.15', '1.87', '1.06'),
    correctAnswer: 'B',
    solution: { ...sol(10), finalAnswer: '2.15 kN (Option B)' },
  },
  {
    id: 'psad-may2022-q30',
    number: 30,
    pageNumber: 441,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 10 — Semi-Circular Arc: Bending Moment at E',
    text: '30. Determine the bending moment (kN-m) at E.',
    options: opt('1.37', '1.87', '2.36', '3.24'),
    correctAnswer: 'A',
    solution: { ...sol(10), finalAnswer: '1.37 kN-m (Option A)' },
  },

  // --- SITUATION 11 (Items 31 - 33) ---
  {
    id: 'psad-may2022-q31',
    number: 31,
    pageNumber: 442,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 11 — Bent Steel Bar: Radius of Curvature',
    text: `${SITUATION_11}\n\n31. Determine the radius of curvature (m) of the bar is the maximum bending stress in the bar is 124 MPa.`,
    options: opt('5.36', '4.03', '3.25', '2.89'),
    correctAnswer: 'B',
    solution: { ...sol(11), finalAnswer: '4.03 m (Option B)' },
  },
  {
    id: 'psad-may2022-q32',
    number: 32,
    pageNumber: 442,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 11 — Bent Steel Bar: Applied Moment',
    text: '32. Determine the moment (N-m) if the maximum bending stress in the bar is 164 MPa.',
    options: opt('69.8', '105.4', '358.9', '34.2'),
    correctAnswer: 'D',
    solution: { ...sol(11), finalAnswer: '34.2 N-m (Option D)' },
  },
  {
    id: 'psad-may2022-q33',
    number: 33,
    pageNumber: 442,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 11 — Bent Steel Bar: Deflection',
    text: '33. Determine the deflection (mm) if the applied moment at the ends is 0.25 kN-m.',
    options: opt('26.7', '12.4', '16.8', '22.4'),
    correctAnswer: 'A',
    solution: { ...sol(11), finalAnswer: '26.7 mm (Option A)' },
  },

  // --- SITUATION 12 (Items 34 - 36) ---
  {
    id: 'psad-may2022-q34',
    number: 34,
    pageNumber: 442,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 12 — Signage Pole: Maximum Bending Stress',
    text: `${SITUATION_12}\n\n34. Determine the maximum bending stress (MPa) in the pole due to wind force.`,
    figureSvg: psadFigure(12, 'Situation 12: GERTC signage on a hollow circular pole'),
    figureCaption: 'Situation 12: GERTC signage on a hollow circular pole',
    options: opt('95.4', '72.5', '79.9', '102.8'),
    correctAnswer: 'C',
    solution: { ...sol(12), finalAnswer: '79.9 MPa (Option C)' },
  },
  {
    id: 'psad-may2022-q35',
    number: 35,
    pageNumber: 443,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 12 — Signage Pole: Longitudinal Shear Stress',
    text: '35. Compute the maximum longitudinal shearing stress (MPa) in the pole due to wind force.',
    options: opt('1.28', '0.87', '1.03', '1.45'),
    correctAnswer: 'C',
    solution: { ...sol(12), finalAnswer: '1.03 MPa (Option C)' },
  },
  {
    id: 'psad-may2022-q36',
    number: 36,
    pageNumber: 443,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 12 — Signage Pole: Torsional Shear Stress',
    text: '36. How much is the maximum torsional shearing stress (MPa) in the pole due to wind force?',
    options: opt('8.9', '9.2', '7.4', '6.7'),
    correctAnswer: 'D',
    solution: { ...sol(12), finalAnswer: '6.7 MPa (Option D)' },
  },
];

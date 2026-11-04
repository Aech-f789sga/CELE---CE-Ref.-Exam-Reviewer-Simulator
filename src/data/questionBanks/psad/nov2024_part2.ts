import { Question } from '../../../types/exam';
import { solved } from './nov2024Helpers';
import {
  PSAD_NOV_2024_SITUATIONS,
  getPsadNov2024FigureHtml,
} from '../../situationImages';

const S6_FIG = getPsadNov2024FigureHtml(6);
const S6_CAP = PSAD_NOV_2024_SITUATIONS[6].caption;

const S7_FIG = getPsadNov2024FigureHtml(7);
const S7_CAP = PSAD_NOV_2024_SITUATIONS[7].caption;

const S8_FIG = getPsadNov2024FigureHtml(8);
const S8_CAP = PSAD_NOV_2024_SITUATIONS[8].caption;

export const PSAD_NOV2024_PART2: Question[] = [
  // Item 16
  {
    id: 'psad-nov2024-q16',
    number: 16,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Pinned Frameworks',
    text: 'Situation 6 — The frame shown are pinned at A, B, and C, with details as shown.\nGiven: L = 1.5 m, θ = 30°, E = 200 GPa.\nBar sizes: Bar AC: 6 mm × 50 mm; Bar BC: 8 mm × 50 mm.\n\n16. If the tensile stress of AC is f_t = 124 MPa, what is the value of W (kN)?',
    figureCaption: S6_CAP,
    figureSvg: S6_FIG,
    options: [
      { label: 'A', text: '18.6' },
      { label: 'B', text: '24.8' },
      { label: 'C', text: '32.2' },
      { label: 'D', text: '23.2' },
    ],
    ...solved(16, 'A', '18.6 (Option A)'),
  },

  // Item 17
  {
    id: 'psad-nov2024-q17',
    number: 17,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Pinned Frameworks',
    text: 'Situation 6 — 17. What is the value of W (kN) if the strain of AC is 0.0002 mm/mm?',
    figureCaption: S6_CAP,
    figureSvg: S6_FIG,
    options: [
      { label: 'A', text: '8' },
      { label: 'B', text: '10.4' },
      { label: 'C', text: '14' },
      { label: 'D', text: '6' },
    ],
    ...solved(17, 'D', '6 (Option D)'),
  },

  // Item 18
  {
    id: 'psad-nov2024-q18',
    number: 18,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Cable Sizing',
    text: 'Situation 6 — 18. If AC is replaced by a 12-mm-diameter cable, find the maximum W (kN). Nominal stress = 148 MPa. Use a factor of safety, FS = 2.0.',
    figureCaption: S6_CAP,
    figureSvg: S6_FIG,
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '4' },
      { label: 'C', text: '10' },
      { label: 'D', text: '35' },
    ],
    ...solved(18, 'B', '4 (Option B)'),
  },

  // Item 19
  {
    id: 'psad-nov2024-q19',
    number: 19,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Bolted Connections & Stresses',
    text: 'Situation 7 — The hoisting beam assembly shown is supported by 2-22 mm diameter bolts at A and a 150 mm × 200 mm plate at B.\nGiven: L₁ = 1 m, L₂ = 2.5 m, W = 80 kN.\n\n19. Determine the tensile stress (MPa) in the anchor bolts.',
    figureCaption: S7_CAP,
    figureSvg: S7_FIG,
    options: [
      { label: 'A', text: '263' },
      { label: 'B', text: '526' },
      { label: 'C', text: '625' },
      { label: 'D', text: '632' },
    ],
    ...solved(19, 'A', '263 (Option A)'),
  },

  // Item 20
  {
    id: 'psad-nov2024-q20',
    number: 20,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Bearing Stress',
    text: 'Situation 7 — 20. Determine the bearing stress (MPa) in the plate.',
    figureCaption: S7_CAP,
    figureSvg: S7_FIG,
    options: [
      { label: 'A', text: '4.67' },
      { label: 'B', text: '18.7' },
      { label: 'C', text: '9.33' },
      { label: 'D', text: '17.8' },
    ],
    ...solved(20, 'C', '9.33 (Option C)'),
  },

  // Item 21
  {
    id: 'psad-nov2024-q21',
    number: 21,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Bolted Connections & Stresses',
    text: 'Situation 7 — 21. If the allowable tensile stress of a bolt, F_t = 145 MPa, calculate the maximum W (kN).',
    figureCaption: S7_CAP,
    figureSvg: S7_FIG,
    options: [
      { label: 'A', text: '44' },
      { label: 'B', text: '33' },
      { label: 'C', text: '55' },
      { label: 'D', text: '22' },
    ],
    ...solved(21, 'A', '44 (Option A)'),
  },

  // Item 22
  {
    id: 'psad-nov2024-q22',
    number: 22,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Torsion of Shafts',
    text: 'Situation 8 — Given the following data of the figure shown. Dimensions: a = 200 mm; b = 750 mm; c = 600 mm. Load, P = 180 N. Diameter of rod BD = 40 mm. Modulus of rigidity, G = 78 GPa. Assume full fixity at D.\n\n22. Calculate the maximum shearing stress (MPa) in the rod.',
    figureCaption: S8_CAP,
    figureSvg: S8_FIG,
    options: [
      { label: 'A', text: '7.53' },
      { label: 'B', text: '15.10' },
      { label: 'C', text: '11.50' },
      { label: 'D', text: '5.73' },
    ],
    ...solved(22, 'D', '5.73 (Option D)'),
  },

  // Item 23
  {
    id: 'psad-nov2024-q23',
    number: 23,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Torsion of Shafts',
    text: 'Situation 8 — 23. Compute the maximum angle of twist (degrees) of BD.',
    figureCaption: S8_CAP,
    figureSvg: S8_FIG,
    options: [
      { label: 'A', text: '0.284' },
      { label: 'B', text: '0.158' },
      { label: 'C', text: '0.005' },
      { label: 'D', text: '0.003' },
    ],
    ...solved(23, 'B', '0.158 (Option B)'),
  },

  // Item 24
  {
    id: 'psad-nov2024-q24',
    number: 24,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Torsion of Hollow Shafts',
    text: 'Situation 8 — 24. Calculate the maximum shear stress (MPa) at D if member BD is hollowed with diameter, D = 50 mm and a uniform thickness of 5 mm.',
    figureCaption: S8_CAP,
    figureSvg: S8_FIG,
    options: [
      { label: 'A', text: '4.97' },
      { label: 'B', text: '2.93' },
      { label: 'C', text: '7.94' },
      { label: 'D', text: '3.29' },
    ],
    ...solved(24, 'A', '4.97 (Option A)'),
  },

  // Item 25
  {
    id: 'psad-nov2024-q25',
    number: 25,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Tension Test',
    text: 'Situation 9 — A steel specimen was tested in tension with the following data:\nInitial diameter = 12 mm, Initial length (gage length) = 50 mm, Diameter at rupture = 11 mm, Load at proportional limit = 28 kN, Elongation at proportional limit = 0.068 mm, Maximum load = 65 kN, Load at rupture = 55 kN, Length at rupture = 58 mm.\n\n25. What is the ductility of the material?',
    options: [
      { label: 'A', text: '19.01%' },
      { label: 'B', text: '15.97%' },
      { label: 'C', text: '13.60%' },
      { label: 'D', text: '16.30%' },
    ],
    ...solved(25, 'B', '15.97% (Option B)'),
  },

  // Item 26
  {
    id: 'psad-nov2024-q26',
    number: 26,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Modulus of Elasticity',
    text: 'Situation 9 — 26. Calculate the modulus of elasticity of the specimen (GPa).',
    options: [
      { label: 'A', text: '178' },
      { label: 'B', text: '220' },
      { label: 'C', text: '156' },
      { label: 'D', text: '182' },
    ],
    ...solved(26, 'D', '182 (Option D)'),
  },

  // Item 27
  {
    id: 'psad-nov2024-q27',
    number: 27,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Ultimate Tensile Strength',
    text: 'Situation 9 — 27. Calculate the ultimate tensile stress of the specimen (MPa).',
    options: [
      { label: 'A', text: '575' },
      { label: 'B', text: '490' },
      { label: 'C', text: '670' },
      { label: 'D', text: '765' },
    ],
    ...solved(27, 'A', '575 (Option A)'),
  },

  // Item 28
  {
    id: 'psad-nov2024-q28',
    number: 28,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Flexural Beam Capacity (Shear)',
    text: 'Situation 10 — A 12-meter-long beam is simply supported at both ends. It is carrying a uniform load w (kN/m) including beam weight distributed throughout the span, along with two concentrated loads of P = 30 kN located 3 meters from each end of the span. Bending is about the major x-axis.\nProperties of W520×150:\nArea, A = 19,225 mm², Depth, d = 540 mm, Flange width, b_f = 310 mm, Flange thickness, t_f = 20 mm, Web thickness, t_w = 12.5 mm, Elastic section modulus: S_x = 3.72 × 10⁶ mm³, S_y = 0.66 × 10⁶ mm³, Modulus of elasticity, E = 200 GPa.\n\n28. Compute the maximum w (kN/m) based on shear. Allowable web shear, F_vw = 88 MPa.',
    options: [
      { label: 'A', text: '96.5' },
      { label: 'B', text: '94.0' },
      { label: 'C', text: '99.0' },
      { label: 'D', text: '47.0' },
    ],
    ...solved(28, 'B', '94.0 (Option B)'),
  },

  // Item 29
  {
    id: 'psad-nov2024-q29',
    number: 29,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Flexural Beam Capacity (Moment)',
    text: 'Situation 10 — 29. Compute the maximum w (kN/m) based on moment. Allowable bending stress, F_b = 135 MPa.',
    options: [
      { label: 'A', text: '27.90' },
      { label: 'B', text: '11.45' },
      { label: 'C', text: '22.90' },
      { label: 'D', text: '7.63' },
    ],
    ...solved(29, 'C', '22.90 (Option C)'),
  },

  // Item 30
  {
    id: 'psad-nov2024-q30',
    number: 30,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Camber & Deflection',
    text: 'Situation 10 — 30. What camber (mm) should be provided at the midspan to offset the deflection due to loads P only?',
    options: [
      { label: 'A', text: '7.40' },
      { label: 'B', text: '5.60' },
      { label: 'C', text: '6.50' },
      { label: 'D', text: '4.70' },
    ],
    ...solved(30, 'A', '7.40 (Option A)'),
  },
];

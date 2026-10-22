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

const SITUATION_19 =
  'Situation 19 — Given the following data of the figure shown:\n\n| Property | Value |\n| :--- | :--- |\n| Beam width, $b$ | 350 mm |\n| $h_1$ | 100 mm |\n| $h_2$ | 400 mm |\n| Tension steel, $A_s$ | Eight – 20 mm diameter bar |\n| Compression steel, $A\'_s$ | Four – 20 mm diameter bar |\n| Lateral ties, $d_s$ | 10 mm |\n| $\\alpha$ | 45 mm |\n| Concrete compressive strength, $f\'_c$ | 34 MPa |\n| Longitudinal bars, $f_{y1}$ | 413 MPa |\n| Transverse ties, $f_{yv}$ | 275 MPa |\n| Clear concrete cover | 40 mm |\n\n';

const SITUATION_20 =
  'Situation 20 — A 400-mm-thick footing supports a 300-mm-thick concrete wall. The allowable soil bearing pressure is 192 kPa. Concrete strength $f\'_c = 27.5$ MPa and steel yield strength $f_y = 415$ MPa.\n\n';

const SITUATION_21 =
  'Situation 21 — A square column is located at the center of a pile cap as shown in the figure.\n\nGiven:\n\n| | |\n| :--- | :--- |\n| $s_1 = 600$ mm | $s_3 = 600$ mm |\n| $s_2 = 1200$ mm | $s_4 = 1000$ mm |\n\n| Property | Value |\n| :--- | :--- |\n| Column dimension | 600 mm × 600 mm |\n| Pile dimension | 350 mm × 350 mm |\n| Effective depth of the pile cap | 400 mm |\n| Net ultimate axial load | 3060 kN |\n| Net ultimate moment about the Y-axis | 180 kN-m |\n| Concrete compressive strength, $f\'_c$ | 20.7 MPa |\n| Steel yield strength, $f_y$ | 413 MPa |\n| Strength reduction factor, shear | 0.75 |\n| Strength reduction factor, moment | 0.90 |\n\n';

const SITUATION_22 = 'Situation 22 — Answer the following behaviour of materials:\n\n';

const SITUATION_23 = 'Situation 23 — Answer the following questions:\n\n';

export const PSAD_NOV2021_PART4: Question[] = [
  // Item 55 — Situation 19
  {
    id: 'psad-nov2021-q55',
    number: 55,
    pageNumber: 336,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 19 — Flanged Beam Shear: Concrete Contribution',
    text: `${SITUATION_19}55. Compute the shear strength (kN) provided by concrete.`,
    figureSvg: psadNov2021Figure(55, 'Figure 19: Flanged beam section with tension and compression bars and 10 mm ties'),
    figureCaption: 'Flanged beam section',
    options: [
      { label: 'A', text: '159.5' },
      { label: 'B', text: '144.8' },
      { label: 'C', text: '187.4' },
      { label: 'D', text: '151.8' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(55), finalAnswer: 'Vc = 144.848 kN ≈ 144.8 kN (Option B)' },
  },

  // Item 56 — Situation 19
  {
    id: 'psad-nov2021-q56',
    number: 56,
    pageNumber: 337,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 19 — Flanged Beam Shear: Tie Contribution',
    text: `${SITUATION_19}56. If the ties are spaced at 100 mm on centers, how much is the shear strength (kN) provided by shear reinforcement.`,
    options: [
      { label: 'A', text: '298' },
      { label: 'B', text: '199' },
      { label: 'C', text: '180' },
      { label: 'D', text: '284' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(56), finalAnswer: 'Vs = 180.347 kN ≈ 180 kN (Option C)' },
  },

  // Item 57 — Situation 19
  {
    id: 'psad-nov2021-q57',
    number: 57,
    pageNumber: 337,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 19 — Flanged Beam Shear: Maximum Tie Spacing',
    text: `${SITUATION_19}57. What is the maximum allowable tie spacing based on minimum shear reinforcement?`,
    options: [
      { label: 'A', text: '218' },
      { label: 'B', text: '328' },
      { label: 'C', text: '365' },
      { label: 'D', text: '340' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(57), finalAnswer: 's = 341 mm ≈ 340 mm (Option D)' },
  },

  // Item 58 — Situation 20
  {
    id: 'psad-nov2021-q58',
    number: 58,
    pageNumber: 338,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 20 — Wall Footing: Width to Prevent Uplift',
    text: `${SITUATION_20}58. The footing is subjected to a moment of 186 kN-m and a total vertical load of 310 kN. Compute the minimum width (m) of the footing to prevent uplift.`,
    options: [
      { label: 'A', text: '3.6' },
      { label: 'B', text: '3.0' },
      { label: 'C', text: '2.7' },
      { label: 'D', text: '3.3' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(58), finalAnswer: 'Bmin = 3.6 m (Option A)' },
  },

  // Item 59 — Situation 20
  {
    id: 'psad-nov2021-q59',
    number: 59,
    pageNumber: 339,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 20 — Wall Footing: Maximum Width Without Uplift',
    text: `${SITUATION_20}59. The footing is subjected to the following forces:\n\n| Given | Value |\n| :--- | :--- |\n| Resisting moment | 480 kN-m |\n| Overturning moment | 280 kN-m |\n| Total vertical load | 280 kN |\n\nCompute the maximum width (m) of the footing to prevent uplift.`,
    options: [
      { label: 'A', text: '1.9' },
      { label: 'B', text: '2.1' },
      { label: 'C', text: '2.3' },
      { label: 'D', text: '1.7' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(59), finalAnswer: 'Bmax = 2.14 m ≈ 2.1 m (Option B)' },
  },

  // Item 60 — Situation 20
  {
    id: 'psad-nov2021-q60',
    number: 60,
    pageNumber: 339,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 20 — Wall Footing: Maximum Soil Bearing Pressure',
    text: `${SITUATION_20}60. Given:\n\n| Given | Value |\n| :--- | :--- |\n| Width of footing | 3 m |\n| Resisting moment | 550 kN-m |\n| Overturning moment | 295 kN-m |\n| Total vertical load | 345 kN |\n\nDetermine the maximum soil bearing pressure in kPa.`,
    options: [
      { label: 'A', text: '189' },
      { label: 'B', text: '236' },
      { label: 'C', text: '290' },
      { label: 'D', text: '311' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(60), finalAnswer: 'qmax = 311.2 kPa ≈ 311 kPa (Option D)' },
  },

  // Item 61 — Situation 21
  {
    id: 'psad-nov2021-q61',
    number: 61,
    pageNumber: 339,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 21 — Pile Cap: Maximum Beam Shear Stress',
    text: `${SITUATION_21}61. How much is the maximum beam shear stress (MPa) in the pile cap?`,
    figureSvg: psadNov2021Figure(61, 'Figure 21: Nine-pile cap with the column at the centre and the pile spacing s1 to s4'),
    figureCaption: 'Square column at the center of the pile cap',
    options: [
      { label: 'A', text: '0.68' },
      { label: 'B', text: '0.86' },
      { label: 'C', text: '1.14' },
      { label: 'D', text: '1.02' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(61), finalAnswer: 'vw = 1.14 MPa (Option C)' },
  },

  // Item 62 — Situation 21
  {
    id: 'psad-nov2021-q62',
    number: 62,
    pageNumber: 339,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 21 — Pile Cap: Punching Shear Stress',
    text: `${SITUATION_21}62. Compute the punching shear stress (MPa) in the most heavily loaded pile.`,
    options: [
      { label: 'A', text: '0.41' },
      { label: 'B', text: '0.25' },
      { label: 'C', text: '0.52' },
      { label: 'D', text: '0.30' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(62), finalAnswer: 'vp = 0.406 MPa ≈ 0.41 MPa (Option A)' },
  },

  // Item 63 — Situation 21
  {
    id: 'psad-nov2021-q63',
    number: 63,
    pageNumber: 339,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 21 — Pile Cap: Bar Spacing for the Critical Moment',
    text: `${SITUATION_21}63. Determine the required spacing (mm) of the 20-mm-diameter bars for the critical moment. Use 75 mm clear bar cover.`,
    options: [
      { label: 'A', text: '156' },
      { label: 'B', text: '112' },
      { label: 'C', text: '198' },
      { label: 'D', text: '137' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(63), finalAnswer: 's = 137 mm (Option D)' },
  },

  // Item 64 — Situation 22
  {
    id: 'psad-nov2021-q64',
    number: 64,
    pageNumber: 340,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 22 — Behaviour of Materials: Permanent Deformation',
    text: `${SITUATION_22}64. A material condition that causes it to deform permanently even due to slight increase of stress.`,
    options: [
      { label: 'A', text: 'plasticity' },
      { label: 'B', text: 'yielding' },
      { label: 'C', text: 'fatigue' },
      { label: 'D', text: 'creep' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(64), finalAnswer: 'Yielding (Option B)' },
  },

  // Item 65 — Situation 22
  {
    id: 'psad-nov2021-q65',
    number: 65,
    pageNumber: 340,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 22 — Behaviour of Materials: Repeated Stress Cycles',
    text: `${SITUATION_22}65. Fracture caused when a material is subjected to repeated cycles of stress or strain.`,
    options: [
      { label: 'A', text: 'yielding' },
      { label: 'B', text: 'creep' },
      { label: 'C', text: 'plasticity' },
      { label: 'D', text: 'fatigue' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(65), finalAnswer: 'Fatigue (Option D)' },
  },

  // Item 66 — Situation 22
  {
    id: 'psad-nov2021-q66',
    number: 66,
    pageNumber: 340,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 22 — Behaviour of Materials: Long-Term Deformation',
    text: `${SITUATION_22}66. When a material is loaded over a long period, it causes it to deform continuously until fracture.`,
    options: [
      { label: 'A', text: 'creep' },
      { label: 'B', text: 'yielding' },
      { label: 'C', text: 'fatigue' },
      { label: 'D', text: 'plasticity' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(66), finalAnswer: 'Creep (Option A)' },
  },

  // Item 67 — Situation 23
  {
    id: 'psad-nov2021-q67',
    number: 67,
    pageNumber: 340,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 23 — Seismic Terminology: Inter-Storey Movement',
    text: `${SITUATION_23}67. Refers to the lateral displacement of one level relative to the level above or below.`,
    options: [
      { label: 'A', text: 'storey drift' },
      { label: 'B', text: 'lateral displacement' },
      { label: 'C', text: 'spring constant' },
      { label: 'D', text: 'eccentricity' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(67), finalAnswer: 'Storey drift (Option A)' },
  },

  // Item 68 — Situation 23
  {
    id: 'psad-nov2021-q68',
    number: 68,
    pageNumber: 340,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 23 — Seismic Terminology: Mass and Rigidity Offset',
    text: `${SITUATION_23}68. Occurs when the structure's center of mass does not coincide with its center of rigidity.`,
    options: [
      { label: 'A', text: 're-entrant corners' },
      { label: 'B', text: 'torsional shear stress' },
      { label: 'C', text: 'storey drift' },
      { label: 'D', text: 'out-of-plane offset' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(68), finalAnswer: 'Torsional shear stress (Option B)' },
  },

  // Item 69 — Situation 23
  {
    id: 'psad-nov2021-q69',
    number: 69,
    pageNumber: 341,
    subject: 'PSAD',
    year: 2021,
    month: 'November',
    category: 'Situation 23 — Seismic Terminology: Period Coincidence',
    text: `${SITUATION_23}69. It occurs when the structure's period coincides with the earthquake period.`,
    options: [
      { label: 'A', text: 'torsional shear stress' },
      { label: 'B', text: 'out-of-plane offset' },
      { label: 'C', text: 'resonance' },
      { label: 'D', text: 'accidental eccentricity' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(69), finalAnswer: 'Resonance (Option C)' },
  },
];

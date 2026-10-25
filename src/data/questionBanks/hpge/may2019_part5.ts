import { Question } from '../../../types/exam';
import {
  hgeMay2019SolutionImages,
  hgeMay2019SolutionPage,
  hgeMay2019SolutionPageEnd,
} from '../../hgeMay2019Images';

const solution = (n: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: hgeMay2019SolutionPage(n),
  pageNumberEnd: hgeMay2019SolutionPageEnd(n),
  images: hgeMay2019SolutionImages(n),
});

const base = { subject: 'HPGE' as const, year: 2019, month: 'May' as const };

const SITUATION_11 =
  'Situation 11 — In a tri-axial test for a normally consolidated soil, the normal ' +
  'stress at failure is equal to 450 kPa and the shear stress at failure is equal to ' +
  '300 kPa.';

const SITUATION_12 =
  'Situation 12 — A square footing, 1.5 m × 1.5 m in plan, is founded 1.20 m below ' +
  'the ground surface for which the bulk unit weight of the soil is 18 kN/m³, the ' +
  'cohesion strength is 10 kPa, and the angle of internal friction is 30°. The ground ' +
  'water table is at a level that does not affect the unit weight of the soil. Under ' +
  'the condition of general shear failure, evaluate the contribution of the following ' +
  'to the ultimate bearing capacity, in kPa:';

const SITUATION_13 =
  'Situation 13 — A footing, 2 m × 3 m in plan and 0.60 m thick, is designed to ' +
  'support a 0.50-m-square column. Due to architectural requirement, the column is so ' +
  'located that its external face is flush with the shorter edge of the footing. The ' +
  'column, however, is located along the minor principal axis of the footing. The ' +
  'column load, including the weight of the column itself, is 50 kN. Assume the ' +
  'concrete to weigh 24 kN/m³.';

export const HGE_MAY2019_PART5: Question[] = [
  // Item 39
  {
    ...base,
    id: 'hpge-may2019-q39',
    number: 39,
    pageNumber: 43,
    category: 'Geotechnical — Angle of Internal Friction from Triaxial Data',
    text: `${SITUATION_11} Compute the angle of friction in degrees.`,
    options: [
      { label: 'A', text: '31.8' },
      { label: 'B', text: '36.8' },
      { label: 'C', text: '29.4' },
      { label: 'D', text: '33.7' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(39), finalAnswer: '33.69° (Option D)' },
  },

  // Item 40
  {
    ...base,
    id: 'hpge-may2019-q40',
    number: 40,
    pageNumber: 43,
    category: 'Geotechnical — Angle of the Failure Plane',
    text: `${SITUATION_11} Compute the angle of failure plane with the major principal axis, in degrees.`,
    options: [
      { label: 'A', text: '60.9' },
      { label: 'B', text: '61.9' },
      { label: 'C', text: '63.4' },
      { label: 'D', text: '59.7' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(40), finalAnswer: '61.85° (Option B)' },
  },

  // Item 41
  {
    ...base,
    id: 'hpge-may2019-q41',
    number: 41,
    pageNumber: 43,
    category: 'Geotechnical — Maximum Principal Stress at Failure',
    text: `${SITUATION_11} Compute the maximum principal stress of failure, in kPa.`,
    options: [
      { label: 'A', text: '1254' },
      { label: 'B', text: '954' },
      { label: 'C', text: '1368' },
      { label: 'D', text: '1011' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(41), finalAnswer: '1010.56 kPa (Option D)' },
  },

  // Item 42
  {
    ...base,
    id: 'hpge-may2019-q42',
    number: 42,
    pageNumber: 44,
    category: 'Geotechnical — Bearing Capacity: Cohesion Contribution',
    text: `${SITUATION_12} Cohesion strength`,
    options: [
      { label: 'A', text: '452' },
      { label: 'B', text: '207' },
      { label: 'C', text: '483' },
      { label: 'D', text: '325' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(42), finalAnswer: '483.08 kPa (Option C)' },
  },

  // Item 43
  {
    ...base,
    id: 'hpge-may2019-q43',
    number: 43,
    pageNumber: 44,
    category: 'Geotechnical — Bearing Capacity: Surcharge Contribution',
    text: `${SITUATION_12} Soil overburden`,
    options: [
      { label: 'A', text: '452' },
      { label: 'B', text: '325' },
      { label: 'C', text: '485' },
      { label: 'D', text: '207' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(43), finalAnswer: '485.14 kPa (Option C)' },
  },

  // Item 44
  {
    ...base,
    id: 'hpge-may2019-q44',
    number: 44,
    pageNumber: 44,
    category: 'Geotechnical — Bearing Capacity: Footing Dimension Contribution',
    text: `${SITUATION_12} Footing dimension`,
    options: [
      { label: 'A', text: '207' },
      { label: 'B', text: '485' },
      { label: 'C', text: '325' },
      { label: 'D', text: '452' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(44), finalAnswer: '206.6 kPa (Option A)' },
  },

  // Item 45
  {
    ...base,
    id: 'hpge-may2019-q45',
    number: 45,
    pageNumber: 44,
    category: 'Geotechnical — Total Downward Load on an Eccentric Footing',
    text: `${SITUATION_13} Evaluate the total downward load acting on the supporting ground, in kN.`,
    options: [
      { label: 'A', text: '124.5' },
      { label: 'B', text: '156.9' },
      { label: 'C', text: '178.5' },
      { label: 'D', text: '136.4' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(45), finalAnswer: '136.4 kN (Option D)' },
  },

  // Item 46
  {
    ...base,
    id: 'hpge-may2019-q46',
    number: 46,
    pageNumber: 45,
    category: 'Geotechnical — Overturning Moment on a Footing',
    text: `${SITUATION_13} Evaluate the overturning moment on the footing, in kN-m.`,
    options: [
      { label: 'A', text: '62.5' },
      { label: 'B', text: '76.5' },
      { label: 'C', text: '54.2' },
      { label: 'D', text: '86.3' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(46), finalAnswer: '62.5 kN-m (Option A)' },
  },

  // Item 47
  {
    ...base,
    id: 'hpge-may2019-q47',
    number: 47,
    pageNumber: 45,
    category: 'Geotechnical — Maximum Bearing Pressure with Eccentricity',
    text: `${SITUATION_13} Evaluate the maximum pressure induced on the supporting soil, in kPa.`,
    options: [
      { label: 'A', text: '63.25' },
      { label: 'B', text: '72.89' },
      { label: 'C', text: '43.57' },
      { label: 'D', text: '54.87' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(47), finalAnswer: '43.57 kPa (Option C)' },
  },
];

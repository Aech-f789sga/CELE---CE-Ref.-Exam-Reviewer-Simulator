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

const SITUATION_8 =
  'Situation 8 — A sample of saturated clay has a water content of 56 percent. ' +
  'Assume $G_s = 2.72$. Compute the following:';

const SITUATION_9 =
  'Situation 9 — A layer of clay 8.8 m thick is overlain by a deposit of sand 15.5 m ' +
  'thick to ground surface. When the water table is at ground surface level, the ' +
  'saturated unit weight of the sand was determined to be 21.2 kN/m³ for which its ' +
  'dry unit weight is 18.2 kN/m³. The saturated unit weight of the clay is ' +
  '18.8 kN/m³. When the ground water table lowered by 7.2 m, the degree of ' +
  'saturation of the sand above the water table was lowered at 30%.';

const SITUATION_10 =
  'Situation 10 — A 300 mm diameter test well penetrates 27 meters below the static ' +
  'water table. After 24 hours of pumping at 75 liters/sec, the water level in an ' +
  'observation well at a distance of 95 m from the test well is lowered 0.5 m and the ' +
  'other observation well at a distance of 35 m from the test well, the water level ' +
  'dropped by 1.1 m.';

export const HGE_MAY2019_PART4: Question[] = [
  // Item 30
  {
    ...base,
    id: 'hpge-may2019-q30',
    number: 30,
    pageNumber: 42,
    category: 'Geotechnical — Void Ratio of a Saturated Clay',
    text: `${SITUATION_8} The voids ratio of the soil.`,
    options: [
      { label: 'A', text: '1.12' },
      { label: 'B', text: '0.87' },
      { label: 'C', text: '1.52' },
      { label: 'D', text: '1.36' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(30), finalAnswer: '1.523 (Option C)' },
  },

  // Item 31
  {
    ...base,
    id: 'hpge-may2019-q31',
    number: 31,
    pageNumber: 42,
    category: 'Geotechnical — Saturated Unit Weight',
    text: `${SITUATION_8} The saturated unit weight in kN/m³.`,
    options: [
      { label: 'A', text: '16.5' },
      { label: 'B', text: '17.4' },
      { label: 'C', text: '18.9' },
      { label: 'D', text: '19.3' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(31), finalAnswer: '16.5 kN/m³ (Option A)' },
  },

  // Item 32
  {
    ...base,
    id: 'hpge-may2019-q32',
    number: 32,
    pageNumber: 43,
    category: 'Geotechnical — Porosity of the Soil',
    text: `${SITUATION_8} The porosity of the soil in percent.`,
    options: [
      { label: 'A', text: '60.4' },
      { label: 'B', text: '65.8' },
      { label: 'C', text: '52.3' },
      { label: 'D', text: '46.8' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(32), finalAnswer: '60.36% (Option A)' },
  },

  // Item 33
  {
    ...base,
    id: 'hpge-may2019-q33',
    number: 33,
    pageNumber: 43,
    category: 'Geotechnical — Effective Stress with the Water Table at the Surface',
    text: `${SITUATION_9} Evaluate the effective pressure at the mid-height of the clay layer before lowering of the water table.`,
    options: [
      { label: 'A', text: '263.8 kPa' },
      { label: 'B', text: '185.4 kPa' },
      { label: 'C', text: '325.7 kPa' },
      { label: 'D', text: '216.1 kPa' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(33), finalAnswer: '216.1 kPa (Option D)' },
  },

  // Item 34
  {
    ...base,
    id: 'hpge-may2019-q34',
    number: 34,
    pageNumber: 43,
    category: 'Geotechnical — Effective Stress After Lowering the Water Table',
    text: `${SITUATION_9} Evaluate the effective pressure at the mid-height of the clay layer after lowering of the water table.`,
    options: [
      { label: 'A', text: '254.2 kPa' },
      { label: 'B', text: '398.7 kPa' },
      { label: 'C', text: '289.6 kPa' },
      { label: 'D', text: '271.6 kPa' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(34), finalAnswer: '271.61 kPa (Option D)' },
  },

  // Item 35
  {
    ...base,
    id: 'hpge-may2019-q35',
    number: 35,
    pageNumber: 43,
    category: 'Geotechnical — Effective Stress in the Moist Condition',
    text: `${SITUATION_9} Evaluate the effective pressure at the mid-height of the clay layer when there is no water in the sand layer but remain in the moist condition at the same degree of saturation.`,
    options: [
      { label: 'A', text: '335.6 kPa' },
      { label: 'B', text: '456.8 kPa' },
      { label: 'C', text: '524.1 kPa' },
      { label: 'D', text: '632.8 kPa' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(35), finalAnswer: '335.6 kPa (Option A)' },
  },

  // Item 36
  {
    ...base,
    id: 'hpge-may2019-q36',
    number: 36,
    pageNumber: 43,
    category: 'Geotechnical — Well Discharge Rate',
    text: `${SITUATION_10} What is the rate of flow in m³/day?`,
    options: [
      { label: 'A', text: '8640' },
      { label: 'B', text: '270' },
      { label: 'C', text: '6480' },
      { label: 'D', text: '2160' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(36), finalAnswer: '6480 m³/day (Option C)' },
  },

  // Item 37
  {
    ...base,
    id: 'hpge-may2019-q37',
    number: 37,
    pageNumber: 43,
    category: 'Geotechnical — Coefficient of Permeability from a Pumping Test',
    text: `${SITUATION_10} Compute the coefficient of permeability of the aquifer in m/day.`,
    options: [
      { label: 'A', text: '65.51' },
      { label: 'B', text: '76.36' },
      { label: 'C', text: '52.14' },
      { label: 'D', text: '95.78' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(37), finalAnswer: '65.51 m/day (Option A)' },
  },

  // Item 38
  {
    ...base,
    id: 'hpge-may2019-q38',
    number: 38,
    pageNumber: 43,
    category: 'Geotechnical — Transmissivity of an Aquifer',
    text: `${SITUATION_10} Compute the transmissivity of the aquifer in m²/day.`,
    options: [
      { label: 'A', text: '1876.8' },
      { label: 'B', text: '1716.3' },
      { label: 'C', text: '1678.8' },
      { label: 'D', text: '6188.7' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(38), finalAnswer: '1716.3 m²/day (Option B)' },
  },
];

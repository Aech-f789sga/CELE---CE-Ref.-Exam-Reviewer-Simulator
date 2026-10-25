import { Question } from '../../../types/exam';
import {
  hgeMay2019Figure,
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

const SITUATION_5 =
  'Situation 5 — An open rectangular tank 2 m wide, 6 m long, and 2 m high is ' +
  'mounted on a truck. The depth of water in the tank is 1.5 m.';

const SITUATION_6 =
  'Situation 6 — A water tank has the form of a right circular cone of diameter ' +
  '3.66 m and height of 3.66 m is surmounted with a right circular cylinder of the ' +
  'same diameter and having a height of 3.66 m. There is an orifice at the vertex of ' +
  'the cone whose area is 0.0929 m². Initially the tank is full of water. Assume ' +
  'coefficient of discharge $C = 0.60$. Evaluate the following after the orifice is ' +
  'opened:';

const SITUATION_7 =
  'Situation 7 — Three pipes $A$, $B$ and $C$ are connected in parallel. If the ' +
  'combined discharged of the three pipes is equal to 0.63 m³/s and assuming they ' +
  'have equal values of friction factor $f$, compute the following using the ' +
  'tabulated data shown:\n\n' +
  '| Line | Diameter (m) | Length (m) |\n' +
  '| --- | --- | --- |\n' +
  '| 1 | 0.15 | 650 |\n' +
  '| 2 | 0.20 | 550 |\n' +
  '| 3 | 0.10 | 720 |';

export const HGE_MAY2019_PART3: Question[] = [
  // Item 21
  {
    ...base,
    id: 'hpge-may2019-q21',
    number: 21,
    pageNumber: 41,
    category: 'Fluid Mechanics — Maximum Acceleration Without Spillage',
    text: `${SITUATION_5} Determine the maximum acceleration without spillage in m/s².`,
    options: [
      { label: 'A', text: '1.635' },
      { label: 'B', text: '1.587' },
      { label: 'C', text: '1.963' },
      { label: 'D', text: '2.125' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(21), finalAnswer: '1.635 m/s² (Option A)' },
  },

  // Item 22
  {
    ...base,
    id: 'hpge-may2019-q22',
    number: 22,
    pageNumber: 41,
    category: 'Fluid Mechanics — Force to Accelerate the Water Mass',
    text: `${SITUATION_5} In part 1, determine the force to accelerate the water mass, in kN.`,
    options: [
      { label: 'A', text: '32.6' },
      { label: 'B', text: '22.7' },
      { label: 'C', text: '25.7' },
      { label: 'D', text: '29.4' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(22), finalAnswer: '29.43 kN (Option D)' },
  },

  // Item 23
  {
    ...base,
    id: 'hpge-may2019-q23',
    number: 23,
    pageNumber: 41,
    category: 'Fluid Mechanics — Volume Spilled at a Higher Acceleration',
    text: `${SITUATION_5} If the acceleration is increased to 6 m/s², how much water is spilled out in cubic meters?`,
    options: [
      { label: 'A', text: '8.72' },
      { label: 'B', text: '6.23' },
      { label: 'C', text: '9.28' },
      { label: 'D', text: '11.36' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(23), finalAnswer: '9.28 m³ (Option C)' },
  },

  // Item 24
  {
    ...base,
    id: 'hpge-may2019-q24',
    number: 24,
    pageNumber: 41,
    category: 'Fluid Mechanics — Time to Empty the Cylindrical Part of a Tank',
    text: `${SITUATION_6} The time to empty the cylindrical part of the tank.`,
    options: [
      { label: 'A', text: '75.4 sec' },
      { label: 'B', text: '67.6 sec' },
      { label: 'C', text: '57.2 sec' },
      { label: 'D', text: '83.7 sec' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(24), finalAnswer: '67.535 sec (Option B)' },
  },

  // Item 25
  {
    ...base,
    id: 'hpge-may2019-q25',
    number: 25,
    pageNumber: 41,
    category: 'Fluid Mechanics — Time to Empty the Conical Part of a Tank',
    text: `${SITUATION_6} The time to empty the conical part of the tank.`,
    options: [
      { label: 'A', text: '40.6 sec' },
      { label: 'B', text: '48.4 sec' },
      { label: 'C', text: '32.6 sec' },
      { label: 'D', text: '37.5 sec' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(25), finalAnswer: '32.61 sec (Option C)' },
  },

  // Item 26
  {
    ...base,
    id: 'hpge-may2019-q26',
    number: 26,
    pageNumber: 41,
    category: 'Fluid Mechanics — Total Time to Empty the Tank',
    text: `${SITUATION_6} The total time to empty the tank.`,
    options: [
      { label: 'A', text: '116 sec' },
      { label: 'B', text: '100 sec' },
      { label: 'C', text: '105 sec' },
      { label: 'D', text: '121 sec' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(26), finalAnswer: '100.15 sec (Option B)' },
  },

  // Item 27
  {
    ...base,
    id: 'hpge-may2019-q27',
    number: 27,
    pageNumber: 41,
    category: 'Fluid Mechanics — Flow in Three Parallel Pipes',
    text: `${SITUATION_7} Compute the rate of flow of line 1 in lit/sec.`,
    figureSvg: hgeMay2019Figure(
      27,
      'Figure 1: Three pipes labelled 1, 2 and 3 connected in parallel between a common inlet and outlet, with discharge Q entering and leaving',
    ),
    figureCaption: 'Three parallel pipes with discharge Q entering and leaving',
    options: [
      { label: 'A', text: '196.5' },
      { label: 'B', text: '176.2' },
      { label: 'C', text: '134.5' },
      { label: 'D', text: '201.8' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(27), finalAnswer: '176.2 L/s (Option B)' },
  },

  // Item 28
  {
    ...base,
    id: 'hpge-may2019-q28',
    number: 28,
    pageNumber: 42,
    category: 'Fluid Mechanics — Flow in Three Parallel Pipes',
    text: `${SITUATION_7} Compute the rate of flow of line 2 in lit/sec.`,
    options: [
      { label: 'A', text: '287' },
      { label: 'B', text: '393' },
      { label: 'C', text: '425' },
      { label: 'D', text: '342' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(28), finalAnswer: '393 L/s (Option B)' },
  },

  // Item 29
  {
    ...base,
    id: 'hpge-may2019-q29',
    number: 29,
    pageNumber: 42,
    category: 'Fluid Mechanics — Flow in Three Parallel Pipes',
    text: `${SITUATION_7} Compute the rate of flow of line 3 in lit/sec.`,
    options: [
      { label: 'A', text: '70.5' },
      { label: 'B', text: '102.3' },
      { label: 'C', text: '91.5' },
      { label: 'D', text: '60.8' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(29), finalAnswer: '60.8 L/s (Option D)' },
  },
];

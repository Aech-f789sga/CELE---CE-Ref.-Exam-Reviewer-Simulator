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

const SITUATION_1 =
  'Situation 1 — A circular gate with radius of 300 mm is submerged in water. ' +
  'The top of the gate is flushed with the water surface.';

export const HGE_MAY2019_PART1: Question[] = [
  // Item 1
  {
    ...base,
    id: 'hpge-may2019-q1',
    number: 1,
    pageNumber: 38,
    category: 'Fluid Mechanics — Pressure in a Vertically Accelerated Container',
    text: 'A bucket with water 0.4 m deep is carried inside an elevator that accelerates at 3 m/s². Evaluate the pressure, in kPa, exerted by the water at the base of the bucket if the elevator is travelling downward.',
    options: [
      { label: 'A', text: '3.84' },
      { label: 'B', text: '5.12' },
      { label: 'C', text: '2.04' },
      { label: 'D', text: '2.72' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(1), finalAnswer: '2.72 kPa (Option D)' },
  },

  // Item 2
  {
    ...base,
    id: 'hpge-may2019-q2',
    number: 2,
    pageNumber: 38,
    category: 'Fluid Mechanics — Discharge of a Rectangular Canal',
    text: 'Water flows through a rectangular irrigation canal 500 mm deep by 1.2 meter wide with a mean velocity of 2 m/sec. Determine the rate of flow in m³/min.',
    options: [
      { label: 'A', text: '1.2' },
      { label: 'B', text: '72' },
      { label: 'C', text: '36' },
      { label: 'D', text: '2.4' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(2), finalAnswer: '72 m³/min (Option B)' },
  },

  // Item 3
  {
    ...base,
    id: 'hpge-may2019-q3',
    number: 3,
    pageNumber: 38,
    category: 'Fluid Mechanics — Bernoulli Energy Equation for a Tapering Pipe',
    text: 'The diameter of a pipe carrying water changes gradually from 150 mm at $A$ to 450 mm at $B$, $A$ is 5 m lower than $B$. What will be the difference in pressure in kPa between $A$ and $B$, when 180 liter/sec is flowing loss of energy being neglected?',
    options: [
      { label: 'A', text: '2.8' },
      { label: 'B', text: '-2.8' },
      { label: 'C', text: '2.2' },
      { label: 'D', text: '-2.2' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(3), finalAnswer: '-2.2 kPa (Option D)' },
  },

  // Item 4
  {
    ...base,
    id: 'hpge-may2019-q4',
    number: 4,
    pageNumber: 38,
    category: 'Geotechnical — Unit Weight from Container Volume',
    text: 'A sample of soil weighing 145 grams is placed inside the container having a volume of 500 cm³. Determine the unit weight (kN/m³) of the soil if the volume of water added to the container with soil is 420 cm³.',
    options: [
      { label: 'A', text: '18.52' },
      { label: 'B', text: '17.78' },
      { label: 'C', text: '14.52' },
      { label: 'D', text: '16.78' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(4), finalAnswer: '17.78 kN/m³ (Option B)' },
  },

  // Item 5
  {
    ...base,
    id: 'hpge-may2019-q5',
    number: 5,
    pageNumber: 38,
    category: 'Geotechnical — Consolidation Settlement from Void Ratio Change',
    text: 'A 10-m thick layer of soft clay has an initial void ratio of 1.2. Under a compressive load applied above it, the void ratio decreased by one-half. Evaluate the reduction in the thickness of the clay layer, in meters.',
    options: [
      { label: 'A', text: '3.27' },
      { label: 'B', text: '2.73' },
      { label: 'C', text: '2.37' },
      { label: 'D', text: '3.72' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(5), finalAnswer: '2.73 m (Option B)' },
  },

  // Item 6
  {
    ...base,
    id: 'hpge-may2019-q6',
    number: 6,
    pageNumber: 38,
    category: 'Geotechnical — Consolidation Settlement of a Plastic Clay',
    text:
      'A layer of plastic-clay is subjected to the following load conditions:\n\n' +
      '- Initial intergranular pressure = 200 kPa\n' +
      '- Increase in intergranular pressure = 120 kPa\n' +
      '- Thickness of the clay layer = 8 m\n' +
      '- Coefficient of consolidation = 0.315\n' +
      '- Void ratio of the clay = 1.125\n\n' +
      'Evaluate the plastic settlement.',
    options: [
      { label: 'A', text: '0.242' },
      { label: 'B', text: '0.365' },
      { label: 'C', text: '0.128' },
      { label: 'D', text: '0.563' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(6), finalAnswer: '0.242 m (Option A)' },
  },

  // Item 7
  {
    ...base,
    id: 'hpge-may2019-q7',
    number: 7,
    pageNumber: 39,
    category: 'Geotechnical — Constant-Head Permeability Test',
    text: 'The permeameter in a permeability test setup involves a soil sample 200 mm diameter and a length of 300 mm. The height of water is kept constant at 400 mm in a duration of 4 minutes, water was collected in the graduated flask having a volume of 320 cu.cm. Determine the coefficient of permeability in cm/hr.',
    options: [
      { label: 'A', text: '15.36' },
      { label: 'B', text: '24.58' },
      { label: 'C', text: '11.46' },
      { label: 'D', text: '19.10' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(7), finalAnswer: '11.46 cm/hr (Option C)' },
  },

  // Item 8
  {
    ...base,
    id: 'hpge-may2019-q8',
    number: 8,
    pageNumber: 39,
    category: 'Geotechnical — Constant-Head Permeability Test',
    text: 'The permeameter in a permeability test setup involves a cylindrical soil sample 40 mm in diameter and height 200 mm. The hydraulic head of the test was held constant at 300 mm. In a duration of one minute, the water collected in the graduate was recorded at 1.6 liters. Evaluate the coefficient of permeability of the soil sample, in cm/sec.',
    options: [
      { label: 'A', text: '2.15' },
      { label: 'B', text: '1.12' },
      { label: 'C', text: '1.42' },
      { label: 'D', text: '1.87' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(8), finalAnswer: '1.42 cm/s (Option C)' },
  },

  // Item 9
  {
    ...base,
    id: 'hpge-may2019-q9',
    number: 9,
    pageNumber: 39,
    category: 'Fluid Mechanics — Hydrostatic Force on a Circular Gate',
    text: `${SITUATION_1} Calculate the total force acting on the gate in N.`,
    options: [
      { label: 'A', text: '31' },
      { label: 'B', text: '43' },
      { label: 'C', text: '62' },
      { label: 'D', text: '86' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(9), finalAnswer: '31 N (Option A)' },
  },

  // Item 10
  {
    ...base,
    id: 'hpge-may2019-q10',
    number: 10,
    pageNumber: 39,
    category: 'Fluid Mechanics — Center of Pressure of a Circular Gate',
    text: `${SITUATION_1} Calculate the location of the force from the centroid of the gate in mm.`,
    options: [
      { label: 'A', text: '27' },
      { label: 'B', text: '30' },
      { label: 'C', text: '25' },
      { label: 'D', text: '22' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(10), finalAnswer: '25 mm (Option C)' },
  },

  // Item 11
  {
    ...base,
    id: 'hpge-may2019-q11',
    number: 11,
    pageNumber: 39,
    category: 'Fluid Mechanics — Depth to the Center of Pressure',
    text: `${SITUATION_1} Calculate the location of the force from the top of water in mm.`,
    options: [
      { label: 'A', text: '140' },
      { label: 'B', text: '125' },
      { label: 'C', text: '160' },
      { label: 'D', text: '150' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(11), finalAnswer: '125 mm (Option B)' },
  },
];

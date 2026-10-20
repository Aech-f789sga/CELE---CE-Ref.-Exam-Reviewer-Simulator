import { Question } from '../../../types/exam';
import {
  HPGE_MAY_2022_SOLUTION_IMAGES,
  HPGE_MAY_2022_SOLUTION_PAGES,
} from '../../hpgeMay2022Images';

const solution = (n: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: HPGE_MAY_2022_SOLUTION_PAGES[n],
  images: HPGE_MAY_2022_SOLUTION_IMAGES[n],
});

export const HPGE_MAY2022_PART1: Question[] = [
  // Item 1
  {
    id: 'hpge-may2022-q1',
    number: 1,
    pageNumber: 412,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Fluid Mechanics — Pressure Variation in a Fluid Column',
    text: 'An airplane climbed from an altitude of 6 km to 10 km. Assuming that the unit weight of air is constant at 12 N/m³, obtain the increase in pressure.',
    options: [
      { label: 'A', text: '4.8 kPa' },
      { label: 'B', text: '48 kPa' },
      { label: 'C', text: '52 kPa' },
      { label: 'D', text: '5.2 kPa' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(1), finalAnswer: '48 kPa (Option B)' },
  },

  // Item 2
  {
    id: 'hpge-may2022-q2',
    number: 2,
    pageNumber: 412,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Fluid Mechanics — Pressure in an Accelerating Vessel',
    text: 'A water container filled to a depth of 400 mm is inside the elevator. Compute the pressure at the bottom of the container when the elevator accelerates upward at 2 m/s².',
    options: [
      { label: 'A', text: '3.92 kPa' },
      { label: 'B', text: '23.17 kPa' },
      { label: 'C', text: '3.12 kPa' },
      { label: 'D', text: '4.72 kPa' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(2), finalAnswer: '4.72 kPa (Option D)' },
  },

  // Item 3
  {
    id: 'hpge-may2022-q3',
    number: 3,
    pageNumber: 412,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Buoyancy — Wood Submerged with a Lead Sinker',
    text: 'A piece of wood having a specific gravity of 0.65 is 70 mm square and 1.5 m long. How much lead (in kg) need to be fastened at one end to submerged the wood with 0.25 m above the surface? Specific gravity of lead is 11.2.',
    options: [
      { label: 'A', text: '1.48' },
      { label: 'B', text: '1.21' },
      { label: 'C', text: '1.75' },
      { label: 'D', text: '2.83' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(3), finalAnswer: '1.48 kg (Option A)' },
  },

  // Item 4
  {
    id: 'hpge-may2022-q4',
    number: 4,
    pageNumber: 412,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Buoyancy — Draft of a Loaded Barge',
    text: 'A rectangular barge weighing 400 kN when empty is 6 m wide, 15 m long, and 3 m high. The barge transports 6000 bags of cement along the Pasig River, each bag weighs 40 kg. Assuming that the specific gravity of water is 1.02, evaluate the draft of the barge in meters.',
    options: [
      { label: 'A', text: '2.76' },
      { label: 'B', text: '3.32' },
      { label: 'C', text: '3.06' },
      { label: 'D', text: '2.19' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(4), finalAnswer: '3.059 m ≈ 3.06 m (Option C)' },
  },

  // Item 5 — Situation 1
  {
    id: 'hpge-may2022-q5',
    number: 5,
    pageNumber: 412,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 1 — Vertical Triangular Gate: Total Hydrostatic Force',
    text: 'Situation 1 — A vertical triangular gate with base width of 1.5 m and altitude of 3 m is submerged in water (vertex down) with its horizontal edge 2 m below the water surface.\n\n5. Compute the total force acting on one side of the gate, in kN.',
    options: [
      { label: 'A', text: '52.12' },
      { label: 'B', text: '76.34' },
      { label: 'C', text: '89.43' },
      { label: 'D', text: '66.22' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(5), finalAnswer: '66.21 kN ≈ 66.22 kN (Option D)' },
  },

  // Item 6 — Situation 1
  {
    id: 'hpge-may2022-q6',
    number: 6,
    pageNumber: 412,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 1 — Vertical Triangular Gate: Eccentricity',
    text: 'Situation 1 — A vertical triangular gate with base width of 1.5 m and altitude of 3 m is submerged in water (vertex down) with its horizontal edge 2 m below the water surface.\n\n6. Compute the distance from the center of gravity to the center of pressure, in meters.',
    options: [
      { label: 'A', text: '0.167' },
      { label: 'B', text: '0.321' },
      { label: 'C', text: '0.125' },
      { label: 'D', text: '0.248' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(6), finalAnswer: 'e = 0.167 m (Option A)' },
  },

  // Item 7 — Situation 1
  {
    id: 'hpge-may2022-q7',
    number: 7,
    pageNumber: 413,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 1 — Vertical Triangular Gate: Depth to Center of Pressure',
    text: 'Situation 1 — A vertical triangular gate with base width of 1.5 m and altitude of 3 m is submerged in water (vertex down) with its horizontal edge 2 m below the water surface.\n\n7. Compute the distance from the water surface to the center of pressure, in meters.',
    options: [
      { label: 'A', text: '3.248' },
      { label: 'B', text: '3.321' },
      { label: 'C', text: '3.125' },
      { label: 'D', text: '3.167' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(7), finalAnswer: '3 + 0.167 = 3.167 m (Option D)' },
  },

  // Item 8 — Situation 2
  {
    id: 'hpge-may2022-q8',
    number: 8,
    pageNumber: 413,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 2 — Vertical Rectangular Gate: Total Hydrostatic Force',
    text: 'Situation 2 — A vertical rectangular gate 2 m wide and 3.6 m high is submerged in water with its top edge 2 m below the water surface.\n\n8. Compute the total force acting on one side of the gate, in kN.',
    options: [
      { label: 'A', text: '321.8' },
      { label: 'B', text: '268.4' },
      { label: 'C', text: '287.5' },
      { label: 'D', text: '356.2' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(8), finalAnswer: '268.4 kN (Option B)' },
  },

  // Item 9 — Situation 2
  {
    id: 'hpge-may2022-q9',
    number: 9,
    pageNumber: 413,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 2 — Vertical Rectangular Gate: Eccentricity',
    text: 'Situation 2 — A vertical rectangular gate 2 m wide and 3.6 m high is submerged in water with its top edge 2 m below the water surface.\n\n9. Compute the distance from the center of gravity to the center of pressure, in meters.',
    options: [
      { label: 'A', text: '0.284' },
      { label: 'B', text: '0.235' },
      { label: 'C', text: '0.321' },
      { label: 'D', text: '0.187' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(9), finalAnswer: 'e = 0.284 m (Option A)' },
  },

  // Item 10 — Situation 2
  {
    id: 'hpge-may2022-q10',
    number: 10,
    pageNumber: 413,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 2 — Vertical Rectangular Gate: Depth to Center of Pressure',
    text: 'Situation 2 — A vertical rectangular gate 2 m wide and 3.6 m high is submerged in water with its top edge 2 m below the water surface.\n\n10. Compute the distance from the water surface to the center of pressure, in meters.',
    options: [
      { label: 'A', text: '3.987' },
      { label: 'B', text: '4.084' },
      { label: 'C', text: '4.035' },
      { label: 'D', text: '4.121' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(10), finalAnswer: '3.8 + 0.284 = 4.084 m (Option B)' },
  },

  // Item 11 — Situation 3
  {
    id: 'hpge-may2022-q11',
    number: 11,
    pageNumber: 413,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 3 — Triangular Gate (Vertex at Surface): Total Force',
    text: 'Situation 3 — A vertical triangular gate with base width of 500 mm and altitude of 1200 mm is submerged in water with its vertex at the water surface and lower base horizontal.\n\n11. Compute the total force acting on one side of the gate, in kN.',
    options: [
      { label: 'A', text: '2.45' },
      { label: 'B', text: '2.35' },
      { label: 'C', text: '2.68' },
      { label: 'D', text: '2.97' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(11), finalAnswer: '2.35 kN (Option B)' },
  },

  // Item 12 — Situation 3
  {
    id: 'hpge-may2022-q12',
    number: 12,
    pageNumber: 413,
    subject: 'HPGE',
    year: 2022,
    month: 'May',
    category: 'Situation 3 — Triangular Gate (Vertex at Surface): Eccentricity',
    text: 'Situation 3 — A vertical triangular gate with base width of 500 mm and altitude of 1200 mm is submerged in water with its vertex at the water surface and lower base horizontal.\n\n12. Compute the distance from the center of gravity to the center of pressure, in meters.',
    options: [
      { label: 'A', text: '0.20' },
      { label: 'B', text: '0.15' },
      { label: 'C', text: '0.10' },
      { label: 'D', text: '0.05' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(12), finalAnswer: 'e = 0.1 m (Option C)' },
  },
];

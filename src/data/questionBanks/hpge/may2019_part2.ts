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

const SITUATION_2 =
  'Situation 2 — A rectangular gate 1.60 m wide and 2.4 m high has water on one ' +
  'side and is inclined 45° with the horizontal. Water is 1.50 m above the top of ' +
  'the gate.';

const SITUATION_3 =
  'Situation 3 — A circular gate 1.5 m in diameter is inclined at an angle of 45°. ' +
  'Fresh water stands on one side of the gate to a height of 10 m above the center ' +
  'of the gate.';

const SITUATION_4 =
  'Situation 4 — A cylinder having a diameter of 1.20 m, height of 1.1 m, and ' +
  'weighing 800 N is held in position in sea water by a cable tied to an anchor ' +
  'block resting at the bottom of the sea such that 0.30 m of the cylinder is below ' +
  'the surface of the water with its axis vertical. The anchor block has a volume of ' +
  '0.50 cubic meter and weighs 24 kN per cubic meter in air. Assume sea water to ' +
  'have a specific gravity = 1.03. Neglecting the weight and volume of the cable,';

export const HGE_MAY2019_PART2: Question[] = [
  // Item 12
  {
    ...base,
    id: 'hpge-may2019-q12',
    number: 12,
    pageNumber: 39,
    category: 'Fluid Mechanics — Hydrostatic Force on an Inclined Rectangular Gate',
    text: `${SITUATION_2} Compute the hydrostatic force, in kN, acting on the gate.`,
    options: [
      { label: 'A', text: '58.8' },
      { label: 'B', text: '85.8' },
      { label: 'C', text: '88.5' },
      { label: 'D', text: '96.8' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(12), finalAnswer: '88.49 kN (Option C)' },
  },

  // Item 13
  {
    ...base,
    id: 'hpge-may2019-q13',
    number: 13,
    pageNumber: 39,
    category: 'Fluid Mechanics — Center of Pressure of an Inclined Gate',
    text: `${SITUATION_2} Evaluate the location, in meters, of the center of pressure from the top of the gate.`,
    options: [
      { label: 'A', text: '1.56' },
      { label: 'B', text: '1.34' },
      { label: 'C', text: '1.49' },
      { label: 'D', text: '1.64' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(13), finalAnswer: '1.344 m (Option B)' },
  },

  // Item 14
  {
    ...base,
    id: 'hpge-may2019-q14',
    number: 14,
    pageNumber: 40,
    category: 'Fluid Mechanics — Force to Open a Hinged Gate',
    text: `${SITUATION_2} If the gate is hinged at the top, what force, in kN, normal to the gate is needed at the bottom to open the gate. Neglect the weight of the gate.`,
    options: [
      { label: 'A', text: '45.21' },
      { label: 'B', text: '62.87' },
      { label: 'C', text: '49.55' },
      { label: 'D', text: '56.32' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(14), finalAnswer: '49.55 kN (Option C)' },
  },

  // Item 15
  {
    ...base,
    id: 'hpge-may2019-q15',
    number: 15,
    pageNumber: 40,
    category: 'Fluid Mechanics — Total Force on an Inclined Circular Gate',
    text: `${SITUATION_3} Evaluate the total force on the gate.`,
    options: [
      { label: 'A', text: '145.2' },
      { label: 'B', text: '173.4' },
      { label: 'C', text: '215.7' },
      { label: 'D', text: '116.9' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(15), finalAnswer: '173.35 kN (Option B)' },
  },

  // Item 16
  {
    ...base,
    id: 'hpge-may2019-q16',
    number: 16,
    pageNumber: 40,
    category: 'Fluid Mechanics — Point of Action on an Inclined Circular Gate',
    text: `${SITUATION_3} Locate the point of action of the total force from the bottom on the plane of the gate.`,
    options: [
      { label: 'A', text: '0.52' },
      { label: 'B', text: '0.83' },
      { label: 'C', text: '0.65' },
      { label: 'D', text: '0.74' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(16), finalAnswer: '0.74 m (Option D)' },
  },

  // Item 17
  {
    ...base,
    id: 'hpge-may2019-q17',
    number: 17,
    pageNumber: 40,
    category: 'Fluid Mechanics — Force to Open a Hinged Circular Gate',
    text: `${SITUATION_3} If the gate is hinged at the top, evaluate the force normal to the gate at the bottom that will require to open it in kN. Neglect the weight of the gate.`,
    options: [
      { label: 'A', text: '82.54' },
      { label: 'B', text: '75.36' },
      { label: 'C', text: '87.82' },
      { label: 'D', text: '92.47' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(17), finalAnswer: '87.82 kN (Option C)' },
  },

  // Item 18
  {
    ...base,
    id: 'hpge-may2019-q18',
    number: 18,
    pageNumber: 40,
    category: 'Fluid Mechanics — Buoyant Force on a Submerged Cylinder',
    text: `${SITUATION_4} Evaluate the buoyant force on the cylinder for the position described, in kN.`,
    options: [
      { label: 'A', text: '2.54' },
      { label: 'B', text: '4.25' },
      { label: 'C', text: '3.86' },
      { label: 'D', text: '3.43' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(18), finalAnswer: '3.428 kN (Option D)' },
  },

  // Item 19
  {
    ...base,
    id: 'hpge-may2019-q19',
    number: 19,
    pageNumber: 40,
    category: 'Fluid Mechanics — Cable Tension for a Partly Submerged Cylinder',
    text: `${SITUATION_4} Evaluate the tensile force in the wire when the top of the cylinder is 0.60 m above the water surface, in kN.`,
    options: [
      { label: 'A', text: '4.91' },
      { label: 'B', text: '5.68' },
      { label: 'C', text: '6.32' },
      { label: 'D', text: '5.28' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(19), finalAnswer: '4.914 kN (Option A)' },
  },

  // Item 20
  {
    ...base,
    id: 'hpge-may2019-q20',
    number: 20,
    pageNumber: 40,
    category: 'Fluid Mechanics — Tide Rise to Lift an Anchor',
    text: `${SITUATION_4} Evaluate the rise in the tide that will lift the anchor from the bottom of the sea, in meters.`,
    options: [
      { label: 'A', text: '0.587' },
      { label: 'B', text: '0.378' },
      { label: 'C', text: '0.738' },
      { label: 'D', text: '0.254' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(20), finalAnswer: '0.378 m (Option B)' },
  },
];

import { Question } from '../../../types/exam';
import { solved } from './nov2024Helpers';

export const HPGE_NOV2024_PART3: Question[] = [
  // Item 25
  {
    id: 'hpge-nov2024-q25',
    number: 25,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Mohr-Coulomb Triaxial Failure',
    text: 'A tri-axial test is performed on cohesionless soil. The soil fails under the following conditions:\n• Confining pressure = 250 kPa\n• Deviator stress = 450 kPa\n\nObtain the normal stress at the failure plane.',
    options: [
      { label: 'A', text: '368' },
      { label: 'B', text: '289' },
      { label: 'C', text: '145' },
      { label: 'D', text: '331' },
    ],
    ...solved(25, 'A', '368 (Option A)'),
  },

  // Item 26
  {
    id: 'hpge-nov2024-q26',
    number: 26,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Phase Relationships',
    text: 'If Vv = Vs, the porosity (n) and void ratio (e) are equal to:',
    options: [
      { label: 'A', text: 'n = 1, e = 0.5' },
      { label: 'B', text: 'n = 1, e = 0' },
      { label: 'C', text: 'n = 0.5, e = 1' },
      { label: 'D', text: 'n = 0, e = 1' },
    ],
    ...solved(26, 'C', 'n = 0.5, e = 1 (Option C)'),
  },

  // Item 27
  {
    id: 'hpge-nov2024-q27',
    number: 27,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Hydrostatic Force on Submerged Gates',
    text: 'Situation 1 — A rectangular gate 3 m high and 1.5 m wide is hinged at the top. A force to keep the gate closed is applied at the bottom with an angle of 45° with the vertical. Compute the magnitude of this force in kN if:\n\nPart 1: The water surface is level with the top of the gate.',
    options: [
      { label: 'A', text: '70.54' },
      { label: 'B', text: '90.52' },
      { label: 'C', text: '62.43' },
      { label: 'D', text: '35.18' },
    ],
    ...solved(27, 'C', '62.43 (Option C)'),
  },

  // Item 28
  {
    id: 'hpge-nov2024-q28',
    number: 28,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Hydrostatic Force on Submerged Gates',
    text: 'Situation 1 — Part 2: The water surface is 0.9 m above the top of the gate.',
    options: [
      { label: 'A', text: '70.54' },
      { label: 'B', text: '90.52' },
      { label: 'C', text: '62.43' },
      { label: 'D', text: '35.18' },
    ],
    ...solved(28, 'B', '90.52 (Option B)'),
  },

  // Item 29
  {
    id: 'hpge-nov2024-q29',
    number: 29,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Hydrostatic Force on Submerged Gates',
    text: 'Situation 1 — Part 3: The water surface is 0.9 m below the top of the gate.',
    options: [
      { label: 'A', text: '70.54' },
      { label: 'B', text: '90.52' },
      { label: 'C', text: '62.43' },
      { label: 'D', text: '35.18' },
    ],
    ...solved(29, 'D', '35.18 (Option D)'),
  },

  // Item 30
  {
    id: 'hpge-nov2024-q30',
    number: 30,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Hydrostatic Force on Inclined Submerged Surfaces',
    text: 'Situation 2 — A triangular gate is 1.2 m wide at the base and 0.9 m high. Its vertex is located 2 m below the water surface. The gate is inclined at 60° to the horizontal, with its base parallel to the water surface.\n\nPart 1: Obtain the force in kN acting on one side of the gate.',
    options: [
      { label: 'A', text: '16.44' },
      { label: 'B', text: '13.35' },
      { label: 'C', text: '18.21' },
      { label: 'D', text: '14.56' },
    ],
    ...solved(30, 'B', '13.35 (Option B)'),
  },

  // Item 31
  {
    id: 'hpge-nov2024-q31',
    number: 31,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Center of Pressure on Triangular Surface',
    text: 'Situation 2 — Part 2: What is the location (m) of the hydrostatic force from the center of gravity of the gate?',
    options: [
      { label: 'A', text: '0.013' },
      { label: 'B', text: '0.014' },
      { label: 'C', text: '0.015' },
      { label: 'D', text: '0.011' },
    ],
    ...solved(31, 'C', '0.015 (Option C)'),
  },

  // Item 32
  {
    id: 'hpge-nov2024-q32',
    number: 32,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Gate Equilibrium & Opening Force',
    text: 'Situation 2 — Part 3: Find the normal force at the vertex to open the gate if the gate is hinged at the bottom.',
    options: [
      { label: 'A', text: '4.61' },
      { label: 'B', text: '4.25' },
      { label: 'C', text: '4.56' },
      { label: 'D', text: '4.22' },
    ],
    ...solved(32, 'D', '4.22 (Option D)'),
  },

  // Item 33
  {
    id: 'hpge-nov2024-q33',
    number: 33,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Open Channel Flow - Hydraulic Radius',
    text: 'Situation 3 — A rectangular flume has a discharge of 0.30 m³/s, a Manning\'s roughness coefficient of 0.012, a width of 0.90 m, and a flow depth of 0.60 m.\n\nPart 1: Determine the hydraulic radius in meters.',
    options: [
      { label: 'A', text: '0.257' },
      { label: 'B', text: '0.337' },
      { label: 'C', text: '0.187' },
      { label: 'D', text: '0.287' },
    ],
    ...solved(33, 'A', '0.257 (Option A)'),
  },

  // Item 34
  {
    id: 'hpge-nov2024-q34',
    number: 34,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Open Channel Flow - Mean Velocity',
    text: 'Situation 3 — Part 2: Obtain the mean velocity (m/s).',
    options: [
      { label: 'A', text: '0.665' },
      { label: 'B', text: '0.664' },
      { label: 'C', text: '0.446' },
      { label: 'D', text: '0.556' },
    ],
    ...solved(34, 'D', '0.556 (Option D)'),
  },

  // Item 35
  {
    id: 'hpge-nov2024-q35',
    number: 35,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Open Channel Flow - Manning Equation',
    text: 'Situation 3 — Part 3: Obtain the slope using Manning\'s Formula.',
    options: [
      { label: 'A', text: '0.00021' },
      { label: 'B', text: '0.00012' },
      { label: 'C', text: '0.00027' },
      { label: 'D', text: '0.00014' },
    ],
    ...solved(35, 'C', '0.00027 (Option C)'),
  },
];

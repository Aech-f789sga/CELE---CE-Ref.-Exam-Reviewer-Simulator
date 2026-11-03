import { Question } from '../../../types/exam';
import { solved, opts } from './nov2017Helpers';

/**
 * Situation 1 is printed once and shared by items 4-6. The stem is repeated on
 * each of the three items so that any one of them can be answered on its own.
 */
const SIT1 =
  'Situation 1 – A cylinder buoy 1.2 m in diameter and 2 m high weighing 800 N was being held stable by a cable connected to a 0.5 m³ anchor block weighing 24 kN in air. The cylinder floats in seawater with a draft of 0.3 m. Specific gravity of seawater is 1.03.';

const SIT2 =
  'Situation 2 – A vertical triangular gate has a base width of 200 mm and height of 480 mm. The vertex of the gate is flushed with the water surface.';

const SIT3 =
  'Situation 3 – A triangular gate with height of 0.9 m and base width of 1.2 m is inclined 60° with the horizontal with the vertex at the top and the base parallel with the water surface. The vertex is 2 m below the water surface.';

export const HPGE_NOV2017_PART1: Question[] = [
  // ── Item 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q1',
    number: 1,
    pageNumber: 588,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Pressure',
    text: 'Approximately how many times is the pressure of mercury greater than the pressure exerted by water?',
    options: opts('15.4', '8.2', '13.6', '9.8'),
    ...solved(1, 'C', '13.6'),
  },

  // ── Item 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q2',
    number: 2,
    pageNumber: 588,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Pressure in Layered Fluids',
    text: 'A container is filled with 3 m of kerosene having unit weight of 9 kN/m³ and 7 m of water. Obtain the gage pressure at the interface of the two liquids.',
    options: opts('27 kPa', '95.67 kPa', '68.67 kPa', '57 kPa'),
    ...solved(2, 'A', '27 kPa'),
  },

  // ── Item 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q3',
    number: 3,
    pageNumber: 588,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Buoyancy',
    text: 'An iceberg with specific gravity of 0.9 floats in seawater with 500 cubic meters above the water surface. Evaluate the total volume of iceberg of the sp. gr. of seawater is 1.03?',
    options: opts('3692 m³', '3962 m³', '3296 m³', '2936 m³'),
    ...solved(3, 'B', '3962 m³'),
  },

  // ── Item 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q4',
    number: 4,
    pageNumber: 588,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Buoyancy',
    text: SIT1 + '\n\n(1) What is the buoyant force on the cylinder?',
    options: opts('3.43 kN', '4.25 kN', '2.63 kN', '5.24 kN'),
    ...solved(4, 'A', '3.428 kN'),
  },

  // ── Item 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q5',
    number: 5,
    pageNumber: 588,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Buoyancy and Cable Tension',
    text:
      SIT1 +
      '\n\n(2) Determine the tension in the cable if the top of the cylinder is 0.6 m above the water surface.',
    options: opts('16.8 kN', '15.2 kN', '16 kN', '16.8 kN'),
    ...solved(
      5,
      'B',
      '15.2 kN',
      'The booklet prints "16.8 kN" as both option A and option D, so two of the four choices are identical. The printed key is B, which agrees with the booklet\'s own working: $T = 16 - 0.8 = 15.2\\ \\text{kN}$.',
    ),
  },

  // ── Item 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q6',
    number: 6,
    pageNumber: 588,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Buoyancy',
    text: SIT1 + '\n\n(3) Find the rise of the seawater to move the block from the seabed?',
    options: opts('1.623 m', '1.214 m', '1.428 m', '1.524 m'),
    ...solved(6, 'C', '1.428 m'),
  },

  // ── Item 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q7',
    number: 7,
    pageNumber: 588,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Hydrostatic Force on a Gate',
    text: SIT2 + '\n\n(1) Find the total hydrostatic force acting on one side of the gate.',
    options: opts('155.2 N', '146.3 N', '140.8 N', '150.7 N'),
    ...solved(7, 'D', '150.7 N'),
  },

  // ── Item 8 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q8',
    number: 8,
    pageNumber: 588,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Centre of Pressure',
    text:
      SIT2 +
      '\n\n(2) Obtain the location of the total hydrostatic force from the center of gravity of the gate.',
    options: opts('50 mm', '20 mm', '30 mm', '40 mm'),
    ...solved(8, 'D', '40 mm'),
  },

  // ── Item 9 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q9',
    number: 9,
    pageNumber: 588,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Centre of Pressure',
    text:
      SIT2 +
      '\n\n(3) Obtain the location of the total hydrostatic force from the vertex of the gate.',
    options: opts('350 mm', '360 mm', '370 mm', '340 mm'),
    ...solved(9, 'B', '360 mm'),
  },

  // ── Item 10 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q10',
    number: 10,
    pageNumber: 589,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Hydrostatic Force on an Inclined Gate',
    text: SIT3 + '\n\n(1) Compute the total hydrostatic force acting on one side of the gate.',
    options: opts('15.87 kN', '10.21 kN', '12.36 kN', '13.35 kN'),
    ...solved(10, 'D', '13.347 kN'),
  },

  // ── Item 11 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q11',
    number: 11,
    pageNumber: 589,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Centre of Pressure',
    text:
      SIT3 +
      '\n\n(2) Obtain the location of the total force measured from the vertex of the gate.',
    options: opts('0.725 m', '0.521 m', '0.684 m', '0.615 m'),
    ...solved(11, 'D', '0.6155 m'),
  },

  // ── Item 12 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2017-q12',
    number: 12,
    pageNumber: 589,
    subject: 'HPGE',
    year: 2017,
    month: 'November',
    category: 'Fluid Mechanics — Gate Hinge Force',
    text:
      SIT3 +
      '\n\n(3) If the base is hinged, what normal force at the vertex is needed to open the gate?',
    options: opts('4.22 kN', '5.24 kN', '6.32 kN', '3.54 kN'),
    ...solved(12, 'A', '4.22 kN'),
  },
];

import { Question } from '../../../types/exam';
import { solved, recall, opts } from './nov2015Helpers';

export const HPGE_NOV2015_PART2: Question[] = [
  // ── Item 14 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q14',
    number: 14,
    pageNumber: 165,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 3 — Total Force on an Inclined Circular Gate',
    text: 'Situation 3 – A circular gate 1.5 m in diameter is inclined 45° with the vertical. The center of the gate is 10 m below the water surface.\n\n14. Calculate the total force on the gate.',
    options: opts('160.36 kN', '173.36 kN', '186.36 kN', '147.35 kN'),
    ...solved('s03', 'B', '173.36 kN (Option B)', 177),
  },

  // ── Item 15 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q15',
    number: 15,
    pageNumber: 165,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 3 — Location of the Total Force',
    text: 'Situation 3 (continued) – Calculate the distance of the total force from the bottom of the gate.',
    options: opts('0.69 m', '0.74 m', '0.76 m', '0.81 m'),
    ...solved('s03', 'B', '0.74 m (Option B)', 177),
  },

  // ── Item 16 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q16',
    number: 16,
    pageNumber: 165,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 3 — Normal Force at the Bottom',
    text: 'Situation 3 (continued) – If the gate is hinged at its top, find the normal force applied at the bottom required to open the gate.',
    options: opts('74.83 kN', '81.33 kN', '87.83 kN', '94.33 kN'),
    ...solved('s03', 'C', '87.83 kN (Option C)', 177),
  },

  // ── Item 17 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q17',
    number: 17,
    pageNumber: 165,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Buoyancy — Archimedes’ Principle',
    text: 'Which of the following states the law of buoyancy?',
    options: opts('Archimedes', 'Bernoulli', 'Pascal', 'Boyle'),
    ...recall(
      'A',
      'Archimedes (Option A)',
      'A body immersed in a fluid is buoyed up by a force equal to the weight of the fluid it displaces — Archimedes’ principle. The booklet prints the answer without working.',
    ),
  },

  // ── Item 18 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q18',
    number: 18,
    pageNumber: 165,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Buoyancy — Concrete Cube on a Sea Bed',
    text: 'A concrete cube ($\\gamma = 23.5\\ \\text{kN/m}^3$) 0.60 m on an edge is submerged in 5 m of sea water (SG = 1.03). Calculate the force to lift the cube if there is no seepage pressure at the bottom of the cube.',
    options: opts('23.3 kN', '26.9 kN', '27.7 kN', '28.5 kN'),
    ...solved('i18', 'A', '23.3 kN (Option A)', 178),
  },

  // ── Item 19 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q19',
    number: 19,
    pageNumber: 166,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 4 — Volume of a Submerged Stone',
    text: 'Situation 4 – A stone weighs 400 N in air and 240 N in water. Determine the following:\n\n19. The volume of stone in cubic meter.',
    options: opts('0.0183', '0.0143', '0.0163', '0.0153'),
    ...solved('s04', 'C', '0.0163 m³ (Option C)', 178, 179),
  },

  // ── Item 20 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q20',
    number: 20,
    pageNumber: 166,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 4 — Unit Weight of the Stone',
    text: 'Situation 4 (continued) – The unit weight of stone in kN/m³.',
    options: opts('21.80', '24.53', '28.03', '26.16'),
    ...solved('s04', 'B', '24.53 kN/m³ (Option B)', 178, 179),
  },

  // ── Item 21 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q21',
    number: 21,
    pageNumber: 166,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 4 — Specific Gravity of the Stone',
    text: 'Situation 4 (continued) – The specific gravity of the stone.',
    options: opts('2.50', '2.22', '2.86', '2.67'),
    ...solved('s04', 'A', '2.50 (Option A)', 178, 179),
  },

  // ── Item 22 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q22',
    number: 22,
    pageNumber: 166,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 5 — Draft of a Loaded Barge',
    text: 'Situation 5 – A barge floating in a river, in the form of rectangular parallelepiped 10 m wide by 30 m long by 3 m high, is loaded with 4500 kN of sand. Its centroid is located 4 m from the barge bottom. Specific gravity of water is 1.01. Determine the following:\n\n22. The draft of the barge.',
    options: opts('1.51 m', '1.85 m', '1.21 m', '2.32 m'),
    ...solved('s05', 'A', '1.51 m (Option A)', 179),
  },

  // ── Item 23 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q23',
    number: 23,
    pageNumber: 166,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 5 — Metacentric Height for Rolling',
    text: 'Situation 5 (continued) – The metacentric height for rotation along about its longest centreline or rolling.',
    options: opts('4.58 m', '5.5 m', '2.26 m', '3.65 m'),
    ...solved('s05', 'C', '2.26 m (Option C)', 179),
  },

  // ── Item 24 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q24',
    number: 24,
    pageNumber: 166,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 5 — Metacentric Height for Pitching',
    text: 'Situation 5 (continued) – The metacentric height for rotation along about its shortest centreline or pitching.',
    options: opts('49.5 m', '52.3 m', '55.4 m', '46.3 m'),
    ...solved('s05', 'D', '46.3 m (Option D)', 179),
  },

  // ── Item 25 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q25',
    number: 25,
    pageNumber: 166,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 6 — Liquid Surface Under Horizontal Acceleration',
    text: 'Situation 6 – A rectangular tank filled with water is moving horizontally with acceleration of ½ g.\n\n25. What is the angle of the water surface with the horizontal?',
    options: opts('26.57°', '14.04°', '39.87°', '30.96°'),
    ...solved('s06', 'A', '26.57° (Option A)', 180),
  },

  // ── Item 26 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q26',
    number: 26,
    pageNumber: 166,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 6 — Angle With the Vertical',
    text: 'Situation 6 (continued) – What is the angle of the water surface with the vertical?',
    options: opts('75.96°', '59.04°', '63.43°', '53.13°'),
    ...solved('s06', 'C', '63.43° (Option C)', 180),
  },

  // ── Item 27 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q27',
    number: 27,
    pageNumber: 166,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 6 — Pressure Difference Along the Tank',
    text: 'Situation 6 (continued) – If the tank is 4 meters long, what is the difference in pressure between the rear end and front end of the tank?',
    options: opts('29.43 kPa', '9.81 kPa', '19.62 kPa', '23.54 kPa'),
    ...solved('s06', 'C', '19.62 kPa (Option C)', 180),
  },
];

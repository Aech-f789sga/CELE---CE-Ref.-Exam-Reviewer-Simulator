import { Question } from '../../../types/exam';
import { hpgeMay2016Figure } from '../../hpgeMay2016Images';
import { solved, opts } from './may2016Helpers';

/**
 * HPGE — May 2016, items 1–13.
 *
 * Situations 1–3 (hydrostatic force on a vertical gate, flotation of a solid,
 * and a spinning tank) plus the standalone hydraulics items that open the paper.
 */
export const HPGE_MAY2016_PART1: Question[] = [
  // ── Item 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q1',
    number: 1,
    pageNumber: 277,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Fluid Properties — Hydrostatic Pressure',
    text: 'Determine the pressure in a vessel of mercury at a point 250 mm below the liquid surface, expressing the answer in kPa absolute.',
    options: opts('107', '33.4', '56.8', '135'),
    ...solved(1, 'D', '135 kPa absolute (Option D)', 285),
  },

  // ── Item 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q2',
    number: 2,
    pageNumber: 277,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Fluid Statics — Manometry',
    text: 'For the tank shown in the Figure, obtain the depth $d$, in meters, of the oil if its specific gravity is 0.84. Given: $H_1 = 3\\text{ m}$ and $H_2 = 4\\text{ m}$.',
    figureSvg: hpgeMay2016Figure(
      'fig02_tank',
      'Tank of oil floating on water, with piezometer tubes showing depths d, H1 and H2',
    ),
    options: opts('1.786', '1.248', '1.0', '2.136'),
    ...solved(
      2,
      'A',
      '$d = 1.786\\text{ m}$ (Option A)',
      285,
      285,
      'The printed stem gives $H_1 = 3$ m and $H_2 = 4$ m — a 1 m difference — which the balance $\\gamma_o d = \\gamma_w (H_2 - H_1)$ turns into $d = 1/0.84 = 1.190$ m, and that is not one of the choices. The booklet\'s own substitution reaches 1.786 m, which needs a 1.5 m difference, so the intended $H_1$ is 2.5 m.',
    ),
  },

  // ── Item 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q3',
    number: 3,
    pageNumber: 277,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 1 — Hydrostatic Force on a Vertical Gate',
    text: 'Situation 1 – A vertical rectangular gate is 1.5 m wide and 3 m high. The horizontal top of the gate is 2 m below the water surface.\n\nEvaluate the total force acting on one side of the gate.',
    options: opts('158.49 kN', '154.5 kN', '165.84 kN', '168.96 kN'),
    ...solved(3, 'B', '$F = 154.508\\text{ kN}$ (Option B)', 285),
  },

  // ── Item 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q4',
    number: 4,
    pageNumber: 277,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 1 — Center of Pressure',
    text: 'Situation 1 (continued) – Obtain the location of the force from the center of gravity of the plate, in m.',
    options: opts('0.182 m', '0.125 m', '0.214 m', '0.256 m'),
    ...solved(4, 'C', '$e = 0.214\\text{ m}$ (Option C)', 285, 286),
  },

  // ── Item 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q5',
    number: 5,
    pageNumber: 277,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 1 — Depth of the Center of Pressure',
    text: 'Situation 1 (continued) – Obtain the location of the force from the water surface.',
    options: opts('3.625 m', '3.756 m', '3.682 m', '3.714 m'),
    ...solved(5, 'D', '$y_p = 3.714\\text{ m}$ (Option D)', 286),
  },

  // ── Item 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q6',
    number: 6,
    pageNumber: 277,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 2 — Buoyancy and Flotation',
    text: 'Situation 2 – A solid object having a specific gravity of 3.5 is floating on a liquid having a specific gravity of 13.6. The volume of the object is 0.02 m³.\n\nDetermine the weight of the object in kN.',
    options: opts('0.751', '0.687', '0.624', '0.566'),
    ...solved(6, 'B', '$W = 0.6867\\text{ kN}$ (Option B)', 286),
  },

  // ── Item 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q7',
    number: 7,
    pageNumber: 277,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 2 — Volume Exposed Above the Liquid',
    text: 'Situation 2 (continued) – What percentage of the total volume of the object is exposed above the liquid surface?',
    options: opts('74.27%', '70.12%', '78.96%', '65.32%'),
    ...solved(7, 'A', '74.26% exposed (Option A)', 286),
  },

  // ── Item 8 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q8',
    number: 8,
    pageNumber: 277,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 2 — Force to Submerge',
    text: 'Situation 2 (continued) – What additional vertical force, in kN, is required to completely submerge the object?',
    options: opts('3.22', '2.05', '1.98', '1.05'),
    ...solved(8, 'C', '$F = 1.982\\text{ kN}$ (Option C)', 286),
  },

  // ── Item 9 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q9',
    number: 9,
    pageNumber: 278,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Buoyancy — Balloon Lift',
    text: 'A spherical balloon 5.8 m in diameter is filled with gas weighing 5 N/m³. In standard air weighing 12 N/m³, evaluate the maximum load, in N, excluding its own weight, that the balloon can lift.',
    options: opts('1226', '715', '935', '624'),
    ...solved(
      9,
      'B',
      '$W = 715.53\\text{ N}$ (Option B)',
      287,
      287,
      'The printed stem gives the diameter as "5.5 ft" while the gas and air weights are in N/m³. The working uses 5.8 m (radius 2.9 m), and only that value reproduces the keyed 715 N — with a 5.5 ft sphere the lift would be about 17 N.',
    ),
  },

  // ── Item 10 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q10',
    number: 10,
    pageNumber: 278,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Buoyancy — Barge Draft',
    text: 'A barge, weighing 350 kN when empty, is 6 m wide, 15 m long, and 3 m high. Floating upright, evaluate the draft of the barge, in meters, when transporting 3000 bags of cement along a river, each bag having a mass of 40 kg. Assume the specific gravity of the water in the river to be 1.03.',
    options: opts('1.68', '1.52', '1.24', '1.95'),
    ...solved(10, 'A', '$d = 1.679\\text{ m}$ (Option A)', 287),
  },

  // ── Item 11 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q11',
    number: 11,
    pageNumber: 278,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Buoyancy — Ship Displacement',
    text: 'A ship having a displacement of 25,000 metric tons enters a harbour of fresh water. The ship captain recorded a draft of 8.4 m while the ship was still in sea water. The specific gravity of sea water is 1.03. Obtain the draft, in meters, of the ship in fresh water if the horizontal section of the ship below the waterline is 3000 m² in both instances.',
    options: opts('8.64', '8.16', '9.21', '8.87'),
    ...solved(11, 'A', '$8.4 + 0.243 = 8.643\\text{ m}$ (Option A)', 288),
  },

  // ── Item 12 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q12',
    number: 12,
    pageNumber: 278,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 3 — Rotating Liquid Mass',
    text: 'Situation 3 – An open cylindrical tank 1.3 m in diameter and 2.1 m tall is 2/3 full of water. The tank is revolved about its vertical axis at a constant angular speed of 90 rpm.\n\nWhat is the height of the paraboloid formed by the water surface?',
    options: opts('1.91 m', '1.85 m', '1.98 m', '1.75 m'),
    ...solved(12, 'A', '$y = 1.913\\text{ m}$ (Option A)', 289),
  },

  // ── Item 13 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q13',
    number: 13,
    pageNumber: 278,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 3 — Volume Spilled',
    text: 'Situation 3 (continued) – How much water is spilled out?',
    options: opts('425.84 liters', '289.65 liters', '365.42 liters', '340.76 liters'),
    ...solved(13, 'D', '340.5 liters spilled (Option D)', 289),
  },
];

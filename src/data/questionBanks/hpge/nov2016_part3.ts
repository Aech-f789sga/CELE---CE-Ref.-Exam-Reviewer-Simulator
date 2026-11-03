import { Question } from '../../../types/exam';
import { solved, recall, opts } from './nov2016Helpers';

/**
 * HPGE November 2016, items 27–38.
 *
 * Closes Situation 6 (items 27–28), then the open-channel and sieve items and
 * the switch from hydraulics to geotechnics: soil weight–volume relations
 * (Situation 7, items 33–35), consolidation settlement, the triaxial friction
 * angle and the seepage through a sloping permeable layer.
 *
 * Item 31 is a recall item — the booklet prints the key but no working, because
 * the item asks which of four statements is not true of a cohesive soil.
 */
export const HPGE_NOV2016_PART3: Question[] = [
  // ── Item 27 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q27',
    number: 27,
    pageNumber: 381,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 6 — Flow in Pipe 2',
    text: 'Situation 6 – Given the following data for three pipes in parallel:\n\nPipe 1: $D_1 = 450\\text{ mm}$, $L_1 = 800\\text{ m}$\nPipe 2: $D_2 = 400\\text{ mm}$, $L_2 = 700\\text{ m}$\nPipe 3: $D_3 = 500\\text{ mm}$, $L_3 = 600\\text{ m}$\n\nThe total flow is $0.86\\ \\text{m}^3/\\text{s}$. Assuming $f = 0.02$ for all pipes, evaluate the following:\n\nThe flow in pipe 2 in $\\text{m}^3/\\text{s}$.',
    options: opts('0.261', '0.356', '0.208', '0.392'),
    ...solved(27, 'C', '$0.208\\ \\text{m}^3/\\text{s}$ (Option C)', 393),
  },

  // ── Item 28 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q28',
    number: 28,
    pageNumber: 381,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 6 — Flow in Pipe 3',
    text: 'Situation 6 – Given the following data for three pipes in parallel:\n\nPipe 1: $D_1 = 450\\text{ mm}$, $L_1 = 800\\text{ m}$\nPipe 2: $D_2 = 400\\text{ mm}$, $L_2 = 700\\text{ m}$\nPipe 3: $D_3 = 500\\text{ mm}$, $L_3 = 600\\text{ m}$\n\nThe total flow is $0.86\\ \\text{m}^3/\\text{s}$. Assuming $f = 0.02$ for all pipes, evaluate the following:\n\nThe flow in pipe 3 in $\\text{m}^3/\\text{s}$.',
    options: opts('0.392', '0.208', '0.261', '0.356'),
    ...solved(28, 'A', '$0.392\\ \\text{m}^3/\\text{s}$ (Option A)', 393),
  },

  // ── Item 29 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q29',
    number: 29,
    pageNumber: 381,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Open-Channel Flow — Trapezoidal Canal',
    text: 'Water flows through a trapezoidal irrigation canal, 500 mm deep, by 2 m wide at the top by 1 m wide at bottom, with a mean velocity of 2 m/s. Determine the rate of flow in $\\text{m}^3/\\text{minute}$.',
    options: opts('12.5', '90', '1.5', '105'),
    ...solved(29, 'B', '$90\\ \\text{m}^3/\\text{min}$ (Option B)', 393),
  },

  // ── Item 30 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q30',
    number: 30,
    pageNumber: 381,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Soil Classification — No. 200 Sieve',
    text: 'What is the largest grain size that may pass through a No. 200 sieve?',
    options: opts('0.074 mm', '0.02 mm', '0.054 mm', '0.06 mm'),
    ...solved(30, 'A', '$0.074\\text{ mm}$ (Option A)', 393),
  },

  // ── Item 31 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q31',
    number: 31,
    pageNumber: 381,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Soil Properties — Cohesive Soils',
    text: 'Which of the following is not a characteristic of cohesive soil?',
    options: opts(
      'possess low shear strength',
      'practically permeable',
      'plastic and compressible',
      'decrease shear strength when disturbed',
    ),
    ...recall(
      'A',
      'possess low shear strength (Option A)',
      'Recall item — the booklet prints no working for this one. Cohesive soils are plastic, compressible and of low permeability, and they lose shear strength when remoulded (thixotropy); what they do not generally lack is shear strength, since it is their cohesion that carries the load. Option A is therefore the statement that is not a characteristic.',
    ),
  },

  // ── Item 32 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q32',
    number: 32,
    pageNumber: 381,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Soil Weight–Volume Relations — Void Ratio',
    text: 'A soil has a unit weight of $21.1\\ \\text{kN/m}^3$ and a moisture content of 9.8%. When the soil is saturated, the unit weight is $22.52\\ \\text{kN/m}^3$. Determine the void ratio of the soil.',
    options: opts('0.63', '0.98', '0.89', '0.51'),
    ...solved(32, 'D', '0.51 (Option D)', 393),
  },

  // ── Item 33 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q33',
    number: 33,
    pageNumber: 381,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 7 — Specific Gravity of the Solids',
    text: 'Situation 7 – A soil has a dry unit weight of $15\\ \\text{kN/m}^3$ and void ratio of 0.50.\n\nEvaluate the specific gravity of the soil solids.',
    options: opts('2.29', '2.56', '2.78', '2.84'),
    ...solved(33, 'A', '2.29 (Option A)', 394),
  },

  // ── Item 34 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q34',
    number: 34,
    pageNumber: 381,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 7 — Saturated Unit Weight',
    text: 'Situation 7 – A soil has a dry unit weight of $15\\ \\text{kN/m}^3$ and void ratio of 0.50.\n\nObtain the unit weight of the sample, in $\\text{kN/m}^3$, when fully saturated.',
    options: opts('19.32', '18.27', '20.14', '22.63'),
    ...solved(34, 'B', '$18.27\\ \\text{kN/m}^3$ (Option B)', 394),
  },

  // ── Item 35 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q35',
    number: 35,
    pageNumber: 381,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 7 — Critical Hydraulic Gradient',
    text: 'Situation 7 – A soil has a dry unit weight of $15\\ \\text{kN/m}^3$ and void ratio of 0.50.\n\nObtain the hydraulic gradient of the soil at critical condition.',
    options: opts('1.214', '0.754', '0.956', '0.862'),
    ...solved(35, 'D', '0.862 (Option D)', 394),
  },

  // ── Item 36 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q36',
    number: 36,
    pageNumber: 381,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Consolidation — Reduction in Layer Thickness',
    text: 'A layer of soft clay having an initial void ratio of 0.90 is 12 m thick. Under a compressive load applied above it, the void ratio decreased by 1/3. Evaluate the reduction in the thickness of the clay layer, in meter(s).',
    options: opts('3.789', '2.125', '1.895', '1.634'),
    ...solved(36, 'C', '$1.895\\text{ m}$ (Option C)', 394),
  },

  // ── Item 37 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q37',
    number: 37,
    pageNumber: 382,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Shear Strength — Triaxial Angle of Internal Friction',
    text: 'In a triaxial shear test of a clay sample, the soil is subjected to a confining pressure of 100 kPa inside the chamber. It was observed that failure of the sample in shear occurred when the total axial stress reached 200 kPa. Estimate the angle of internal friction in degrees.',
    options: opts('19.5', '22.3', '27.5', '22.8'),
    ...solved(37, 'A', '$19.5^\\circ$ (Option A)', 394),
  },

  // ── Item 38 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q38',
    number: 38,
    pageNumber: 382,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Seepage — Flow Through a Sloping Permeable Layer',
    text: 'A permeable soil layer that is underlain by an impervious layer slopes $5^\\circ$ to the horizontal and is 4 m thick measured vertically. The coefficient of permeability of the permeable layer is $k = 0.005\\ \\text{cm/sec}$. Obtain the rate of seepage per meter width of permeable layer, in liters per hour.',
    options: opts('52.4', '59.1', '62.8', '66.9'),
    ...solved(38, 'C', '$62.8\\text{ L/hr}$ (Option C)', 395),
  },
];

import { Question } from '../../../types/exam';
import { psadNov2015Figure } from '../../psadNov2015Images';
import { solved, opts } from './nov2015Helpers';

export const PSAD_NOV2015_PART6: Question[] = [
  // ── Item 76 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q76',
    number: 76,
    pageNumber: 209,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 25 — Nominal Shear Strength Vny',
    text: 'Situation 25 (continued) – If the ties are spaced at 100 mm on centers, calculate the nominal shear strength Vny of the column.',
    options: opts('686 kN', '498 kN', '416 kN', '591 kN'),
    ...solved(76, 'D', '591 kN (Option D)', 237),
  },

  // ── Item 77 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q77',
    number: 77,
    pageNumber: 210,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 26 — Minimum Diameter of a Spiral Column',
    text: 'Situation 26 – A circular spiral column supports a factored axial load of 2900 kN. Concrete strength f\'c = 21 MPa and steel yield strength is 415 MPa.\n\n77. Using a steel ratio of 0.025, what is the minimum diameter of the column?',
    options: opts('457 mm', '432 mm', '486 mm', '506 mm'),
    ...solved(77, 'A', '457 mm (Option A)', 237),
  },

  // ── Item 78 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q78',
    number: 78,
    pageNumber: 210,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 26 — Minimum Diameter of Main Reinforcement',
    text: 'Situation 26 (continued) – Using six longitudinal bars and a steel ratio of 0.02, find the minimum diameter of main reinforcement.',
    options: opts('25 mm', '22 mm', '32 mm', '28 mm'),
    ...solved(78, 'D', '28 mm (Option D)', 237, 238),
  },

  // ── Item 79 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q79',
    number: 79,
    pageNumber: 210,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 26 — Design Strength of the Column',
    text: 'Situation 26 (continued) – If the column is 500 mm in diameter and reinforced with six 28 mm longitudinal bars, what is the design strength of the column?',
    options: opts('3169 kN', '2856 kN', '3563 kN', '2548 kN'),
    ...solved(79, 'A', '3169 kN (Option A)', 238),
  },

  // ── Item 80 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q80',
    number: 80,
    pageNumber: 210,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 27 — Top Fibre Stress at End Span from Prestress',
    text: 'Situation 27 – The section of a double tee (DT) prestress concrete joist is shown in Figure CO65-4526. The joists are simply supported on a span of 7.5 m and are pre-tensioned with total initial force of 1100 kN from low-relaxation strands. The joist supports a total dead load of 2.3 kPa (including beam weight) and live load of 6.2 kPa. There is a loss of prestress of 20% at service loads. Unit weight of concrete is 24 kN/m³.\n\nProperties of the sections:\nA = 200,000 mm²\nINA = 1.890 × 10⁹ mm⁴\n\n80. Calculate the stress at the top fibers of the DT at end span due to initial prestressing force only.',
    figureSvg: psadNov2015Figure(
      'fig27_dt',
      'Figure CO65-4526: double-tee section 2.40 m wide, top flange 88 mm thick, overall depth 267 mm below the flange, with two tapered webs each containing a prestressing strand located 75 mm above the soffit. The neutral axis is marked N.A.',
    ),
    options: opts('5.21 MPa C', '3.65 MPa T', '4.39 MPa T', '2.85 MPa C'),
    ...solved(80, 'C', '4.39 MPa T (Option C)', 238),
  },

  // ── Item 81 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q81',
    number: 81,
    pageNumber: 210,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 27 — Bottom Fibre Stress at Midspan from Prestress',
    text: 'Situation 27 (continued) – Calculate the compressive stress at the bottom fibers of the DT at midspan due to initial prestressing force only.',
    options: opts('35.49 MPa C', '8.04 MPa T', '38.65 MPa T', '28.65 MPa C'),
    ...solved(81, 'A', '35.49 MPa C (Option A)', 239),
  },

  // ── Item 82 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q82',
    number: 82,
    pageNumber: 211,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 27 — Additional Load to Zero the Bottom Fibre Stress',
    text: 'Situation 27 (continued) – Calculate the additional load in kPa such that the stress at the bottom fibers of the DT at midspan (due to service loads and prestress force) will be zero.',
    options: opts('8.04', '5.65', '3.35', '4.86'),
    ...solved(82, 'C', '3.35 kPa (Option C)', 239),
  },

  // ── Item 83 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q83',
    number: 83,
    pageNumber: 211,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 28 — Absolute Volumes of Cement, Water and Coarse Aggregate',
    text: 'Situation 28 – Given the following data for a concrete mix:\n\nTarget mean strength = 42 MPa\nSlump = 50 mm to 100 mm\nWater-cement ratio = 0.41\nUnit weight of concrete = 23.6 kN/m³\nWater content = 180 kg/m³\nEntrapped air = 1%\nCoarse aggregate = 10.1 kN/m³\n\nSpecific gravity of materials:\nCement = 3.15\nFine aggregate = 2.64\nCoarse aggregate = 2.68\n\n83. Calculate the volume (m³) of cement, water, and coarse aggregate per cubic meter of concrete.',
    options: opts('0.632', '0.703', '0.745', '0.526'),
    ...solved(83, 'B', '0.703 m³ (Option B)', 240),
  },

  // ── Item 84 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q84',
    number: 84,
    pageNumber: 211,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 28 — Weight of Cement for 10 m³',
    text: 'Situation 28 (continued) – Calculate the weight (kN) of cement needed for 10 m³ of concrete.',
    options: opts('40.65', '43.05', '45.89', '38.32'),
    ...solved(84, 'B', '43.05 kN (Option B)', 240),
  },

  // ── Item 85 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q85',
    number: 85,
    pageNumber: 211,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 28 — Volume of Fine Aggregate for 0.55 m³',
    text: 'Situation 28 (continued) – Calculate the required volume (m³) of fine aggregates required for a 0.55 m³ of concrete.',
    options: opts('0.215', '0.125', '0.158', '0.185'),
    ...solved(85, 'C', '0.158 m³ (Option C)', 240),
  },

  // ── Item 86 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q86',
    number: 86,
    pageNumber: 212,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 29 — Combined Weight of Cement and Water',
    text: 'Situation 29 – Given the following data for a concrete mixture:\n\nTarget concrete strength = 40 MPa\nSlump = 75 mm to 150 mm\nWater-cement ratio = 0.48\nWater content per cubic meter of concrete = 180 kg/m³\nEntrapped air = 1%\nFine aggregates = 33% of total volume of aggregates\n\nSpecific gravity of materials:\nCement = 3.15\nFine aggregates = 2.68\nCoarse aggregates = 2.64\n\nUnit weight of concrete = 23.4 kN/m³\n\n86. Calculate the required weight (kg) of cement and water per cubic meter of concrete.',
    options: opts('530', '587', '632', '555'),
    ...solved(86, 'D', '555 kg (Option D)', 241),
  },

  // ── Item 87 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q87',
    number: 87,
    pageNumber: 212,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 29 — Weight of Fine Aggregates',
    text: 'Situation 29 (continued) – Calculate the required weight (kg) of fine aggregates per cubic meter of concrete.',
    options: opts('611', '745', '562', '452'),
    ...solved(87, 'A', '611 kg (Option A)', 241),
  },

  // ── Item 88 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q88',
    number: 88,
    pageNumber: 212,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 29 — Weight of Coarse Aggregates',
    text: 'Situation 29 (continued) – Calculate the required weight (kg) of coarse aggregates per cubic meter of concrete.',
    options: opts('1222', '1124', '904', '1490'),
    ...solved(88, 'A', '1222 kg (Option A)', 241, 242),
  },
];

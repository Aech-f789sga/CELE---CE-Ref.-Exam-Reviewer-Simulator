import { Question } from '../../../types/exam';
import { solved, worked, opts } from './may2016Helpers';

/** Terzaghi's bearing-capacity factors, reproduced from Table 01 (folio 283). */
const TERZAGHI_TABLE = [
  '| φ (°) | Nc | Nq | Nγ |',
  '|---:|---:|---:|---:|',
  '| 0 | 5.70 | 1.00 | 0.00 |',
  '| 1 | 6.00 | 1.10 | 0.01 |',
  '| 2 | 6.30 | 1.22 | 0.04 |',
  '| 3 | 6.62 | 1.35 | 0.06 |',
  '| 4 | 6.97 | 1.49 | 0.10 |',
  '| 5 | 7.34 | 1.64 | 0.14 |',
  '| 6 | 7.73 | 1.81 | 0.20 |',
  '| 7 | 8.15 | 2.00 | 0.27 |',
  '| 8 | 8.60 | 2.21 | 0.35 |',
  '| 9 | 9.09 | 2.44 | 0.44 |',
  '| 10 | 9.61 | 2.69 | 0.56 |',
  '| 11 | 10.16 | 2.98 | 0.69 |',
  '| 12 | 10.76 | 3.29 | 0.85 |',
  '| 13 | 11.41 | 3.63 | 1.04 |',
  '| 14 | 12.11 | 4.02 | 1.26 |',
  '| 15 | 12.86 | 4.45 | 1.52 |',
  '| 16 | 13.68 | 4.92 | 1.82 |',
  '| 17 | 14.60 | 5.45 | 2.18 |',
  '| 18 | 15.12 | 6.04 | 2.59 |',
  '| 19 | 16.56 | 6.70 | 3.07 |',
  '| 20 | 17.69 | 7.44 | 3.64 |',
  '| 21 | 18.92 | 8.26 | 4.31 |',
  '| 22 | 20.27 | 9.19 | 5.09 |',
  '| 23 | 21.75 | 10.23 | 6.00 |',
  '| 24 | 23.36 | 11.40 | 7.08 |',
  '| 25 | 25.13 | 12.72 | 8.34 |',
  '| 26 | 27.09 | 14.21 | 9.84 |',
  '| 27 | 29.24 | 15.90 | 11.60 |',
  '| 28 | 31.61 | 17.81 | 13.70 |',
  '| 29 | 34.24 | 19.98 | 16.18 |',
  '| 30 | 37.16 | 22.46 | 19.13 |',
  '| 31 | 40.41 | 25.28 | 22.65 |',
  '| 32 | 44.04 | 28.52 | 26.87 |',
  '| 33 | 48.09 | 32.23 | 31.94 |',
  '| 34 | 52.64 | 36.50 | 38.04 |',
  '| 35 | 57.75 | 41.44 | 45.41 |',
  '| 36 | 63.53 | 47.16 | 54.36 |',
  '| 37 | 70.01 | 53.80 | 65.27 |',
  '| 38 | 77.50 | 61.55 | 78.61 |',
  '| 39 | 85.97 | 70.61 | 95.03 |',
  '| 40 | 95.66 | 81.27 | 115.30 |',
  '| 41 | 106.80 | 93.85 | 140.50 |',
  '| 42 | 119.70 | 108.80 | 172.00 |',
  '| 43 | 134.60 | 126.50 | 211.60 |',
  '| 44 | 151.95 | 147.70 | 261.60 |',
  '| 45 | 172.30 | 173.30 | 325.30 |',
  '| 46 | 196.20 | 204.20 | 407.10 |',
  '| 47 | 224.60 | 241.80 | 512.80 |',
  '| 48 | 258.30 | 287.90 | 650.70 |',
  '| 49 | 298.70 | 344.60 | 831.99 |',
  '| 50 | 347.50 | 415.10 | 1072.80 |',
].join('\n');

const SCAN_GAP =
  'The scanned volume jumps from booklet folio 297 — which ends part-way through item 46 — straight to folio 315, so no working for items 47–50 survives in this copy. The answer below is written out from the printed data and checked against the printed key.';

/**
 * HPGE — May 2016, items 39–50.
 *
 * Closes the seepage flow net (Situation 8), then the triaxial and unconfined
 * compression tests, the Boussinesq line-load items (Situation 9) and the
 * Terzaghi bearing-capacity set (Situation 10).
 *
 * Items 47–50 have no booklet page to crop — the scan omits folio 298 — so their
 * working is written out and flagged in a note.
 */
export const HPGE_MAY2016_PART4: Question[] = [
  // ── Item 39 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q39',
    number: 39,
    pageNumber: 282,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 8 — Seepage Through a Dam Foundation',
    text: 'Situation 8 – The coefficient of permeability below a dam is 4 m/day. The water on the upstream side is 20 meters higher than on the downstream side. To estimate the seepage below the dam a flow net is graphically drawn such that the number of potential drops is $N_d = 10$ and the number of flow channels is $N_f = 4$. The base of the dam is founded 1 m below the ground. Between the heel and the toe of the dam, a distance of 30 meters, there are 8 potential drops.\n\nEstimate the seepage per meter length of dam in liters per minute.',
    options: opts('25.4', '22.2', '21.7', '24.6'),
    ...solved(
      39,
      'C',
      '21.7 L/min per m (Option C) — the printed key',
      295,
      296,
      'The printed key marks C, but the working on the same page does not reach it: $q = kH(N_f/N_d) = 4(20)(4/10) = 32\\text{ m}^3/\\text{day per m}$, and $32{,}000/(60 \\times 24) = 22.22$ L/min — option B, which the booklet itself prints as "q = 22.22 lit/min per meter". Key and working disagree; the app grades the printed key.',
    ),
  },

  // ── Item 40 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q40',
    number: 40,
    pageNumber: 282,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 8 — Uplift Pressure at the Heel',
    text: 'Situation 8 (continued) – What is the uplift pressure at the heel in kPa?',
    options: opts('165', '177', '152', '196'),
    ...solved(40, 'B', '$176.58\\text{ kPa}$ (Option B)', 296),
  },

  // ── Item 41 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q41',
    number: 41,
    pageNumber: 282,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 8 — Uplift Pressure at the Toe',
    text: 'Situation 8 (continued) – What is the uplift pressure at the toe in kPa?',
    options: opts('24.5', '15.3', '17.5', '19.6'),
    ...solved(41, 'D', '$19.62\\text{ kPa}$ (Option D)', 296),
  },

  // ── Item 42 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q42',
    number: 42,
    pageNumber: 282,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Triaxial Shear — Angle of Internal Friction',
    text: 'In a triaxial shear test of a cohesionless soil, the soil cylinder was subjected to a liquid pressure of 26 kPa inside the chamber. It was observed that failure of the sample in shear occurred when the axial compressive stress reached 40 kPa. The angle of internal friction in degrees is nearest to',
    options: opts('25.8', '26.9', '29.5', '30.4'),
    ...solved(
      42,
      'A',
      '$\\phi = 25.77°$ (Option A)',
      296,
      296,
      'The working reads the printed "axial compressive stress" of 40 kPa as the *additional* axial stress on top of the 26 kPa chamber pressure, giving $\\sigma_1 = 66$ kPa and $\\sin\\phi = 40/92$. Read as the total axial stress instead — the usual convention, since the chamber pressure is already part of it — $\\sigma_1 = 40$ kPa and $\\phi = 12.2°$.',
    ),
  },

  // ── Item 43 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q43',
    number: 43,
    pageNumber: 282,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Unconfined Compression Test',
    text: 'An unconfined compression test was conducted on a sample of clay having a diameter of 50 mm. The failure load was recorded at 225 N. The cohesion strength of the clay, in kPa, is nearest to:',
    options: opts('63.5', '57.3', '59.8', '91.4'),
    ...solved(43, 'B', '$c_u = 57.3\\text{ kPa}$ (Option B)', 297),
  },

  // ── Item 44 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q44',
    number: 44,
    pageNumber: 283,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 9 — Stress from a Line Load',
    text: 'Situation 9 – According to the elastic theory, the vertical stress induced by a flexible line load of infinite length, of intensity $q$ per unit length on the surface of a semi-infinite soil mass, can be estimated by $\\Delta p = 0.637q / N$ where $N = z[1 + (r/z)^2]^2$, $r$ being the horizontal distance of the point from the line load and $z$ the depth at which the stress is induced.\n\nA masonry wall weighing 9 kN per lineal meter is carried by a wall footing 0.60 m wide.\n\nEvaluate the bearing pressure, kPa, exerted by the footing onto the supporting soil.',
    options: opts('17', '13', '10', '15'),
    ...solved(44, 'D', '$q = 15\\text{ kPa}$ (Option D)', 297),
  },

  // ── Item 45 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q45',
    number: 45,
    pageNumber: 283,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 9 — Stress Below the Load',
    text: 'Situation 9 (continued) – Evaluate the stress in the soil caused by the load at a depth equal to twice its width.',
    options: opts('4.78', '7.96', '8.32', '3.47'),
    ...solved(45, 'A', '$\\Delta p = 4.78\\text{ kPa}$ (Option A)', 297),
  },

  // ── Item 46 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q46',
    number: 46,
    pageNumber: 283,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 9 — Stress Off the Load Axis',
    text: 'Situation 9 (continued) – Evaluate the stress at a depth of 2 m and a horizontal distance of 3 m from the line of the load.',
    options: opts('0.271', '0.524', '0.452', '0.765'),
    ...solved(46, 'A', '$\\Delta p = 0.271\\text{ kPa}$ (Option A)', 297),
  },

  // ── Item 47 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q47',
    number: 47,
    pageNumber: 283,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 10 — Terzaghi Bearing Capacity',
    text: [
      'Situation 10 – A square footing 4 m on a side is founded 1.20 m below the ground surface, for which the bulk unit weight of the soil is 20 kN/m³. The cohesion of the soil is 20 kPa and the angle of internal friction is 20°. Consider the condition of general shear failure and evaluate the contribution of the following to the soil bearing capacity, in kPa, using Terzaghi\'s equation for a square footing. Use Table Q1.',
      '',
      '**Table Q1 – Terzaghi\'s Bearing Capacity Factors (general shear failure)**',
      '',
      TERZAGHI_TABLE,
      '',
      'Evaluate the cohesion strength.',
    ].join('\n'),
    options: opts('287', '235', '259', '230'),
    ...worked(
      'D',
      '230 kPa (Option D)',
      [
        "Terzaghi's equation for a square footing is $q_u = 1.3 c N_c + q N_q + 0.4 \\gamma B N_\\gamma$.",
        'The overburden pressure is $q = \\gamma D_f = 20(1.20) = 24$ kPa.',
        'At $\\phi = 20°$ Table Q1 gives $N_c = 17.69$, $N_q = 7.44$ and $N_\\gamma = 3.64$.',
        'The cohesion term is $1.3cN_c = 1.3(20)(17.69) = 459.9$ kPa.',
        'The keyed 230 kPa is exactly $1.3(10)(17.69)$, i.e. the same term evaluated at $c = 10$ kPa — half the cohesion printed in the stem. The other two contributions do use the printed data: $24(7.44) = 178.6$ kPa and $0.4(20)(4)(3.64) = 116.5$ kPa.',
      ],
      `${SCAN_GAP} The keyed 230 kPa corresponds to $c = 10$ kPa, not the 20 kPa printed in the stem; with 20 kPa the cohesion term is 459.9 kPa, which is not among the choices.`,
    ),
  },

  // ── Item 48 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q48',
    number: 48,
    pageNumber: 283,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 10 — Overburden Contribution',
    text: 'Situation 10 (continued) – Evaluate the soil overburden contribution.',
    options: opts('185', '247', '260', '179'),
    ...worked(
      'D',
      '179 kPa (Option D)',
      [
        'The overburden term of the same equation is $q N_q$ with $q = \\gamma D_f$.',
        '$q = 20(1.20) = 24$ kPa.',
        'At $\\phi = 20°$, $N_q = 7.44$.',
        '$q N_q = 24(7.44) = 178.56$ kPa, which rounds to 179 kPa.',
      ],
      SCAN_GAP,
    ),
  },

  // ── Item 49 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q49',
    number: 49,
    pageNumber: 283,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Situation 10 — Footing Dimension Contribution',
    text: 'Situation 10 (continued) – Evaluate the footing-dimension contribution.',
    options: opts('102', '128', '116', '98'),
    ...worked(
      'C',
      '116 kPa (Option C)',
      [
        'The footing-dimension term of the square-footing equation is $0.4 \\gamma B N_\\gamma$.',
        '$0.4(20)(4)(3.64) = 116.48$ kPa.',
        'Summing the three contributions with the keyed cohesion value: $230 + 178.6 + 116.5 = 525.1$ kPa gross ultimate bearing capacity.',
      ],
      SCAN_GAP,
    ),
  },

  // ── Item 50 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2016-q50',
    number: 50,
    pageNumber: 284,
    subject: 'HPGE',
    year: 2016,
    month: 'May',
    category: 'Deep Foundations — Pile Skin Friction',
    text: 'Evaluate the resisting capacity against axial load due to skin friction of the pile with the following given data: size of pile = 0.30 m square; depth of penetration into the soil = 15 m; unconfined compression strength = 110 kPa; adhesion factor, α = 1.0.',
    options: opts('1020 kN', '990 kN', '930 kN', '1140 kN'),
    ...worked(
      'B',
      '$Q_s = 990\\text{ kN}$ (Option B)',
      [
        'Skin friction capacity is $Q_s = \\alpha c_u A_s$, where $c_u$ is the undrained shear strength of the clay.',
        '$c_u = q_u / 2 = 110/2 = 55$ kPa.',
        'The shaft area of a 0.30 m square pile driven 15 m is $A_s = 4(0.30)(15) = 18\\text{ m}^2$.',
        '$Q_s = 1.0(55)(18) = 990$ kN.',
      ],
      SCAN_GAP,
    ),
  },
];

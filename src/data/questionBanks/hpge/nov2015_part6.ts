import { Question } from '../../../types/exam';
import { solved, opts } from './nov2015Helpers';

export const HPGE_NOV2015_PART6: Question[] = [
  // ── Item 74 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q74',
    number: 74,
    pageNumber: 172,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Deep Foundations — Skin Friction of a Pile',
    text: 'A prestressed concrete pile 400 mm × 400 mm in cross-section and 20 m long is driven in clayey soil with unconfined compression strength $q_u = 110$ kPa. Compute the skin friction using an adhesion factor $\\alpha = 0.75$.',
    options: opts('2640 kN', '860 kN', '960 kN', '1320 kN'),
    ...solved('i74', 'D', '1320 kN (Option D)', 191),
  },

  // ── Item 75 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q75',
    number: 75,
    pageNumber: 172,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Deep Foundations — Skin Friction With Full Adhesion',
    text: 'A prestressed concrete pile 300 mm × 300 mm in cross-section and 10 m long is driven in clayey soil with unconfined compression strength $q_u = 110$ kPa. Compute the skin friction using an adhesion factor $\\alpha = 1$.',
    options: opts('870 kN', '920 kN', '660 kN', '1250 kN'),
    ...solved('i75', 'C', '660 kN (Option C)', 191),
  },

  // ── Item 76 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q76',
    number: 76,
    pageNumber: 172,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'NSCP — Fill Slopes',
    text: 'Section 302.4.1 NSCP. Steepness of the fill (above natural ground) shall not exceed:',
    options: opts('1:5', '1:2', '1:1.5', '1:3'),
    ...solved('i76', 'B', '1:2 (Option B)', 192),
  },

  // ── Item 77 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q77',
    number: 77,
    pageNumber: 172,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'NSCP — Cut Slopes',
    text: 'Section 302.2.2 NSCP. Steepness of the cut shall not exceed:',
    options: opts('1:5', '1:2', '1:1.5', '1:3'),
    ...solved('i77', 'B', '1:2 (Option B)', 192),
  },

  // ── Item 78 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q78',
    number: 78,
    pageNumber: 172,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 16 — Allowable Foundation Pressure',
    text: 'Situation 16 – According to Section 304.2 of NSCP, the designated allowable foundation pressure of 75 kPa (in Table 304-1 of NSCP) is for footing having a minimum footing width of 300 mm and minimum depth of 300 mm into the natural grade. An increase of 20% is allowed for each additional 300 mm of width and/or depth to a maximum value of three times the designated value.\n\n78. Calculate the allowable foundation pressure (in kPa) of square footing 1.20 m in width and 300 mm in depth.',
    options: opts('135', '120', '105', '150'),
    ...solved('s16', 'B', '120 kPa (Option B)', 192, 193),
  },

  // ── Item 79 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q79',
    number: 79,
    pageNumber: 172,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 16 — Pressure for a Deeper Footing',
    text: 'Situation 16 (continued) – Calculate the allowable foundation pressure (in kPa) of square footing 1.20 m in width and 900 mm in depth.',
    options: opts('200', '225', '135', '150'),
    ...solved('s16', 'D', '150 kPa (Option D)', 192, 193),
  },

  // ── Item 80 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q80',
    number: 80,
    pageNumber: 172,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 16 — Safe Load on the Footing',
    text: 'Situation 16 (continued) – Based on the second question, find the safe load (in kN) on top of footing.',
    options: opts('216', '194', '288', '324'),
    ...solved('s16', 'A', '216 kN (Option A)', 192, 193),
  },
];

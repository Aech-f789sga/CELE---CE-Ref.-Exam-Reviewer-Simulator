import { Question } from '../../../types/exam';
import { besaMar2026HpgeSolutionImages } from '../../besaMar2026HpgeImages';

/** Four-choice item whose key the booklet marks with a pointing hand. */
const keyed = (
  correct: 'A' | 'B' | 'C' | 'D',
  answer: string,
  page: number,
) => ({
  correctAnswer: correct,
  referenceSource: 'Besavilla' as const,
  solution: {
    summary: '',
    steps: [] as string[],
    finalAnswer: answer,
    pageNumber: page,
    pageNumberEnd: page,
  },
});

/** Worked-solution item: no choices, scanned solution revealed on demand. */
const worked = (key: string, page: number, pageEnd: number, answer: string) => ({
  options: [] as Question['options'],
  correctAnswer: 'A' as const,
  workedSolution: true,
  referenceSource: 'Besavilla' as const,
  solution: {
    summary: '',
    steps: [] as string[],
    finalAnswer: answer,
    pageNumber: page,
    pageNumberEnd: pageEnd,
    images: besaMar2026HpgeSolutionImages(key),
  },
});

export const BESA_HPGE_MAR2026_PART1: Question[] = [
  // ── Item 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q1',
    number: 1,
    pageNumber: 222,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Types of Flow',
    text:
      'If velocities of fluid particles vary from point to point in magnitude and direction, as well as from instant to instant, the flow is said to be ______.',
    options: [
      { label: 'A', text: 'non-uniform' },
      { label: 'B', text: 'turbulent' },
      { label: 'C', text: 'laminar' },
      { label: 'D', text: 'uniform' },
    ],
    ...keyed('B', 'turbulent', 222),
  },

  // ── Item 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q2',
    number: 2,
    pageNumber: 222,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Shear Strength Factors',
    text:
      'Which of the following is the primary factor that LEAST affects the shear strength of the soil?',
    options: [
      { label: 'A', text: 'Particle size' },
      { label: 'B', text: 'Density' },
      { label: 'C', text: 'Moisture content' },
      { label: 'D', text: 'None of choices' },
    ],
    ...keyed('A', 'Particle size', 222),
  },

  // ── Item 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q3',
    number: 3,
    pageNumber: 222,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: "Fluid Mechanics — Bernoulli's Equation",
    text: "Which of the following statements about Bernoulli's equation is true?",
    options: [
      { label: 'A', text: 'it only applies to turbulent flow' },
      { label: 'B', text: 'it assumes no energy loss due to friction' },
      { label: 'C', text: 'it ignores gravitational effects' },
      { label: 'D', text: 'it is only applicable in vacuum' },
    ],
    ...keyed('B', 'it assumes no energy loss due to friction', 222),
  },

  // ── Item 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q4',
    number: 4,
    pageNumber: 222,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Unconfined Compression Test',
    text: 'What does an unconfined compression test not apply to?',
    options: [
      { label: 'A', text: 'Saturated clays' },
      { label: 'B', text: 'Dry sands' },
      { label: 'C', text: 'Cohesive soils' },
      { label: 'D', text: 'Silty clays' },
    ],
    ...keyed('B', 'Dry sands', 222),
  },

  // ── Item 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q5',
    number: 5,
    pageNumber: 222,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Slope Stability',
    text:
      'A slope in Nueva Ecija with angle 28° and φ = 26° failed after several days of rainfall. Which condition most likely triggered failure?',
    options: [
      { label: 'A', text: 'Decrease in permeability' },
      { label: 'B', text: 'Capillary rise' },
      { label: 'C', text: 'Pore pressure increase' },
      { label: 'D', text: 'Increase in cohesion' },
    ],
    ...keyed('C', 'Pore pressure increase', 222),
  },

  // ── Item 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q6',
    number: 6,
    pageNumber: 222,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Consolidation Settlement',
    text:
      'A building constructed on reclaimed land in Manila experiences continued settlement 5 years after completion. This is most likely due to',
    options: [
      { label: 'A', text: 'Immediate settlement' },
      { label: 'B', text: 'Seismic activity' },
      { label: 'C', text: 'Secondary compression' },
      { label: 'D', text: 'Primary consolidation' },
    ],
    ...keyed('D', 'Primary consolidation', 222),
  },

  // ── Item 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q7',
    number: 7,
    pageNumber: 222,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Piezometers',
    text: 'Piezometers are used to measure ______.',
    options: [
      { label: 'A', text: 'pressure in water channels, pipes, etc.' },
      { label: 'B', text: 'very low pressure' },
      { label: 'C', text: 'atmospheric pressure' },
      { label: 'D', text: 'difference in pressure at two points' },
    ],
    ...keyed('A', 'pressure in water channels, pipes, etc.', 222),
  },

  // ── Item 8 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q8',
    number: 8,
    pageNumber: 222,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Buoyancy and Specific Gravity',
    // The booklet drops the verb here ("will a person that more easily?"); the
    // only reading that makes the item answerable is "float more easily".
    text: 'In which body of water will a person float more easily?',
    options: [
      { label: 'A', text: 'Pacific Ocean' },
      { label: 'B', text: 'Dead Sea' },
      { label: 'C', text: 'Batangas Bay' },
      { label: 'D', text: 'Laguna Lake' },
    ],
    ...keyed('B', 'Dead Sea', 222),
  },

  // ── Item 9 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q9',
    number: 9,
    pageNumber: 223,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Time-Dependent Settlement',
    text:
      'One of the following is the primary factor for the time-dependent settlement of an as-built structure.',
    options: [
      { label: 'A', text: 'elastic settlement of underlying compressible soil layers' },
      { label: 'B', text: 'liquefaction of underlying soil deposits' },
      { label: 'C', text: 'vibration' },
      { label: 'D', text: 'consolidation of the underlying compressible soil layers' },
    ],
    ...keyed('D', 'consolidation of the underlying compressible soil layers', 223),
  },

  // ── Item 10 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q10',
    number: 10,
    pageNumber: 223,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Effective Stress',
    text: 'Why is effective stress important in analyzing soil strength?',
    options: [
      { label: 'A', text: 'it determines the soil color.' },
      { label: 'B', text: "it measures the soil's plasticity" },
      { label: 'C', text: 'it measures water content' },
      { label: 'D', text: 'it controls the strength and deformation' },
    ],
    ...keyed('D', 'it controls the strength and deformation', 223),
  },
];

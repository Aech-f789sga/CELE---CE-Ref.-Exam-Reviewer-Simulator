import { Question } from '../../../types/exam';

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

export const BESA_HPGE_MAR2026_PART2: Question[] = [
  // ── Item 11 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q11',
    number: 11,
    pageNumber: 223,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Strength of Soil as a Construction Material',
    text:
      'The utilization of soil as a construction material depends upon its strength in ______.',
    options: [
      { label: 'A', text: 'compression' },
      { label: 'B', text: 'tension' },
      { label: 'C', text: 'shear' },
      { label: 'D', text: 'consolidation or compaction' },
    ],
    ...keyed('C', 'shear', 223),
  },

  // ── Item 12 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q12',
    number: 12,
    pageNumber: 223,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Components of Soil Stress',
    text: 'Which of the following is NOT a component of soil stress?',
    options: [
      { label: 'A', text: 'pore water pressure' },
      { label: 'B', text: 'effective stress' },
      { label: 'C', text: 'cohesion' },
      { label: 'D', text: 'total stress' },
    ],
    ...keyed('C', 'cohesion', 223),
  },

  // ── Item 13 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q13',
    number: 13,
    pageNumber: 223,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Deep Foundations',
    text:
      'What is the most probable reason for choosing a deep foundation instead of a shallow one?',
    options: [
      { label: 'A', text: 'Short construction time' },
      { label: 'B', text: 'Poor soil near the surface' },
      { label: 'C', text: 'Cheaper construction cost' },
      { label: 'D', text: 'Simpler excavation procedure' },
    ],
    ...keyed('B', 'Poor soil near the surface', 223),
  },

  // ── Item 14 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q14',
    number: 14,
    pageNumber: 223,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Parameters of Dry Sand',
    text: 'Which of the following parameters is typically zero for dry sand?',
    options: [
      { label: 'A', text: 'Angle of internal friction' },
      { label: 'B', text: 'Void ratio' },
      { label: 'C', text: 'Cohesion' },
      { label: 'D', text: 'Unit weight' },
    ],
    ...keyed('C', 'Cohesion', 223),
  },

  // ── Item 15 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q15',
    number: 15,
    pageNumber: 223,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Angle of Internal Friction',
    text:
      'The angle of internal friction (φ) is most influenced by which factor in granular soils?',
    options: [
      { label: 'A', text: 'Capillarity' },
      { label: 'B', text: 'Cementation' },
      { label: 'C', text: 'Particle shape and gradation' },
      { label: 'D', text: 'Atterberg limits' },
    ],
    ...keyed('C', 'Particle shape and gradation', 223),
  },

  // ── Item 16 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q16',
    number: 16,
    pageNumber: 223,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Permeability Tests',
    text: 'Enumerate 3 types of permeability test commonly used in the Philippines.',
    options: [
      { label: 'A', text: 'Constant head, Falling head and laboratory test' },
      { label: 'B', text: 'Constant head, Falling head and Pumping test' },
      { label: 'C', text: 'Falling head, Pumping test, and nuclear test' },
      { label: 'D', text: 'Constant head, Soaking test, and Core cutter method' },
    ],
    ...keyed('B', 'Constant head, Falling head and Pumping test', 223),
  },

  // ── Item 17 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q17',
    number: 17,
    pageNumber: 224,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Soil Properties and Particle Size',
    text:
      'Which of the following soil properties is most influenced by the size and distribution of the soil particles?',
    options: [
      { label: 'A', text: 'Density' },
      { label: 'B', text: 'Permeability' },
      { label: 'C', text: 'Porosity' },
      { label: 'D', text: 'All of the given choices' },
    ],
    ...keyed('B', 'Permeability', 224),
  },

  // ── Item 18 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q18',
    number: 18,
    pageNumber: 224,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Geotechnical — Compaction and Optimum Moisture Content',
    // The booklet prints "Why is knowing is the optimum moisture content
    // important"; the duplicated verb is a printing slip.
    text:
      'Why is knowing the optimum moisture content important in soil compaction for roadworks in provinces like Quezon or Batangas?',
    options: [
      { label: 'A', text: 'It ensures maximum dry density is achieved' },
      { label: 'B', text: 'it makes the soil waterproof' },
      { label: 'C', text: 'it determines the type of asphalt to be used' },
      { label: 'D', text: 'it prevents typhoons from eroding soil' },
    ],
    ...keyed('A', 'It ensures maximum dry density is achieved', 224),
  },

  // ── Item 19 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q19',
    number: 19,
    pageNumber: 224,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Atmospheric Pressure',
    text:
      'The atmospheric pressure at sea level is equivalent to a water column of how many meters?',
    options: [
      { label: 'A', text: '10.3' },
      { label: 'B', text: '9.81' },
      { label: 'C', text: '8.2' },
      { label: 'D', text: '7.5' },
    ],
    ...keyed('A', '10.3', 224),
  },

  // ── Item 20 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-mar2026-besa-q20',
    number: 20,
    pageNumber: 224,
    subject: 'HPGE',
    year: 2026,
    month: 'March',
    category: 'Fluid Mechanics — Continuity Equation',
    text:
      'Which law ensures that what flows into a pipe section must flow out, assuming incompressible fluid?',
    options: [
      { label: 'A', text: "Bernoulli's Principle" },
      { label: 'B', text: "Torricelli's Law" },
      { label: 'C', text: 'Continuity Equation' },
      { label: 'D', text: "Pascal's principle" },
    ],
    ...keyed('C', 'Continuity Equation', 224),
  },
];

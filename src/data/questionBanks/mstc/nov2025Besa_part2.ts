import { Question } from '../../../types/exam';
import {
  besaMstcNov2025Figure,
  besaMstcNov2025SolutionImages,
} from '../../besaMstcNov2025Images';

/** Worked-solution item: no choices, scanned solution revealed on demand. */
const worked = (key: string, page: number, pageEnd: number, answer: string) => ({
  options: [] as Question['options'],
  correctAnswer: 'A' as const,
  workedSolution: true,
  referenceSource: 'Besavilla' as const,
  solution: {
    summary: '',
    steps: [],
    finalAnswer: answer,
    pageNumber: page,
    pageNumberEnd: pageEnd,
    images: besaMstcNov2025SolutionImages(key),
  },
});

const figure = (key: string) => besaMstcNov2025Figure(key);

export const BESA_MSTC_NOV2025_PART2: Question[] = [
  // ── Situation 13 (multiple choice) ─────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q13',
    number: 13,
    pageNumber: 262,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Materials — Properties of Coarse Aggregate',
    referenceSource: 'Besavilla',
    text:
      'Which are TRUE for coarse aggregate?\n\n' +
      '**I.** Use of allowable particle size usually results in less drying shrinkage and more ' +
      'economical concrete.\n\n' +
      '**II.** More water is usually required for small aggregate than for large.\n\n' +
      '**III.** For a given water-cement ratio, the amount of Portland cement required decreases ' +
      'as the maximum size of coarse aggregate increases.\n\n' +
      '**IV.** It is well-graded when particles range uniformly from 3/8 in. up to the largest size ' +
      'that may be used on the kind of work to be done.',
    options: [
      { label: 'A', text: 'II and IV' },
      { label: 'B', text: 'I, II, III, IV' },
      { label: 'C', text: 'I, II, IV' },
      { label: 'D', text: 'I, III, IV' },
    ],
    correctAnswer: 'B',
    solution: {
      summary:
        'All four statements are standard properties of coarse aggregate: grading to the largest ' +
        'allowable size cuts shrinkage and cement demand, small aggregate needs more water, and a ' +
        'well-graded aggregate runs uniformly from 3/8 in. to the largest usable size.',
      steps: [],
      finalAnswer: 'I, II, III and IV are all true — Option B',
      pageNumber: 262,
    },
  },

  // ── Situation 14 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q14',
    number: 14,
    pageNumber: 262,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Management — Fast Tracking',
    text:
      'Fast tracking is a special case of crashing. In fast tracking, activities that would have ' +
      'been scheduled in sequence are scheduled with some overlap instead. The project is to paint ' +
      'a house. The original schedule calls for one crew of people to scrape off loose paint, ' +
      'apply the primer and then apply the finish coat. The schedule calls for the three activities ' +
      'to be done in sequence. To fast track the completion of the project, what is the effect if ' +
      'two crews were utilized?',
    figureSvg: figure('F14'),
    figureCaption: 'Painting of House — the three activities in sequence, 12 + 8 + 10 hours',
    ...worked(
      'S14',
      262,
      262,
      'Project duration drops from **30 hours to 22 hours** (the 8-hour primer overlaps the ' +
        'scraping, so only 8 hours are saved)',
    ),
  },

  // ── Situation 15 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q15',
    number: 15,
    pageNumber: 263,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Statistics — Confidence Interval for a Mean',
    text:
      'The City of Danao is running out of space in its landfill, so it limits each household to a ' +
      'maximum of 5 garbage bags during each weekly pickup. The city commissioned a survey that ' +
      'draws from a random sample of 20,000 households in Danao and gathers data regarding ' +
      'household size and number of garbage bags disposed of per week. The frequency table shows ' +
      'how many households disposed of each quantity of garbage bags per week.\n\n' +
      '| Total number of garbage bags | 1 Person | 2 People | 3 or more |\n' +
      '| --- | --- | --- | --- |\n' +
      '| 1 | 4 | 0 | 0 |\n' +
      '| 2 | 29 | 32 | 3 |\n' +
      '| 3 | 391 | 179 | 73 |\n' +
      '| 4 | 429 | 466 | 359 |\n' +
      '| 5 | 72 | 536 | 993 |\n' +
      '| **Total** | **925** | **1213** | **1428** |\n\n' +
      'Researchers determine that at a 95% confidence level, their margin of error for the mean of ' +
      'garbage bag disposal for a single-person household is 1.3 garbage bags per week. If the ' +
      'actual mean is within the confidence interval, which of the following best approximates the ' +
      'fewest number of trash bags that could be thrown away by the single-person households in ' +
      'Danao this week?',
    ...worked(
      'S15',
      263,
      263,
      'Mean $= 3.58$ bags/week, lower bound $= 3.58 - 1.3 = 2.28$; proportion single-person ' +
        '$= \\dfrac{925}{3566} = 0.259$, so $20{,}000(0.259)(2.28) = \\mathbf{11{,}810}$ bags',
    ),
  },

  // ── Situation 16 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q16',
    number: 16,
    pageNumber: 264,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Engineering Economy — Comparison of Site Alternatives',
    text:
      'PLD Construction was recently awarded by the DPWH a contract to resurface a national road. ' +
      'They have a choice of two alternative sites for the asphalt batching plant. The contractor ' +
      'estimates that it will cost P1.15 per cu.m. per kilometer to haul the asphalt paving ' +
      'material from the batching plant to the job site. Factors relating to the two site ' +
      'alternatives are as follows (production costs at each site are the same). If site B is ' +
      'selected, there will be an added charge of P96 per day for a flagman. The job involves ' +
      '50,000 cu.m. of mixed asphalt paving material. It is estimated that four months (17 weeks ' +
      'of 5 working days per week) will be required for the job. Compare the two sites in terms of ' +
      'their fixed, variable and total costs. What are the total costs for site A and site B ' +
      'respectively?\n\n' +
      '| Cost functions | Site A | Site B |\n' +
      '| --- | --- | --- |\n' +
      '| Average hauling distance | 4.3 km | 6 km |\n' +
      '| Monthly rental of site | P1,000 | P5,000 |\n' +
      '| Cost to set up and remove equipment | P15,000 | P25,000 |\n' +
      '| Hauling equipment | P1.15/m³/km | P1.15/m³/km |',
    ...worked(
      'S16',
      264,
      264,
      'Site A $= \\mathbf{P364{,}000}$; Site B $= \\mathbf{P300{,}410}$ — as printed, the booklet ' +
        'prices site A at the 6 km haul and site B at the 4.3 km haul',
    ),
  },

  // ── Situation 17 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q17',
    number: 17,
    pageNumber: 264,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Plane Trigonometry — Angles of Elevation',
    text:
      'The traffic pattern for aircraft landing into NAIA airport is over the heart of the city ' +
      'proper. The CAAP imposes restrictions on the heights of new construction. A telco company ' +
      'wishes to erect a microwave tower on top of a building. According to the engineer\u2019s ' +
      'design, the angle of elevation from a point on the ground to the top of the 40 m tower is ' +
      '56\u00b0. The angle of elevation from the ground to the top of the building is 42\u00b0. ' +
      'The maximum allowed height of any structure is 100 m. Will the CAAP allow the construction ' +
      'of this tower?',
    figureSvg: figure('F17'),
    figureCaption: 'Building with the microwave tower, elevation angles to the roof and to the tower top',
    ...worked(
      'S17',
      264,
      264,
      'Total height $= 40 + 62 = \\mathbf{102}$ m — the CAAP will **not** allow it since ' +
        '$102 > 100$',
    ),
  },

  // ── Situation 18 (multiple choice) ─────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q18',
    number: 18,
    pageNumber: 265,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Safety — Shoring Systems',
    referenceSource: 'Besavilla',
    text:
      'Shoring is a form of temporary support to existing structures with the primary function of ' +
      'providing the necessary precautions to avoid damage to any person or property from collapse ' +
      'of the supported structure. What shoring system is shown?',
    figureSvg: figure('F18'),
    figureCaption: 'Shoring detail: a vertical member carrying the beam, with two flanking posts',
    options: [
      { label: 'A', text: 'Dead shore' },
      { label: 'B', text: 'Raking shore' },
      { label: 'C', text: 'Flying shore' },
      { label: 'D', text: 'Cantilever shore' },
    ],
    correctAnswer: 'A',
    solution: {
      summary:
        'A dead shore is a vertical prop standing directly under the member it carries; raking ' +
        'shores lean, flying shores span between two buildings, and cantilever shores project ' +
        'from one wall. The detail shows a vertical post under the beam, so it is a dead shore.',
      steps: [],
      finalAnswer: 'Dead shore — Option A',
      pageNumber: 265,
    },
  },

  // ── Situation 19 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q19',
    number: 19,
    pageNumber: 265,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Traffic Engineering — Optimal Cycle Length',
    text:
      'Given the optimal cycle length\n\n' +
      '$C_{opt} = \\dfrac{1.5L + 5}{1 - \\sum y_i}$\n\n' +
      'where $n$ = number of critical lanes and $L$ = total lost time.\n\n' +
      'What is the optimal cycle length in seconds for the intersection of Mango Avenue and ' +
      'Gorordo Avenue, where the two critical approaches have a $V/S$ ratio of 0.3 and the lost ' +
      'time equals 15 seconds?',
    ...worked('S19', 265, 265, '$C_{opt} = \\mathbf{68.75}$ sec'),
  },

  // ── Situation 20 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q20',
    number: 20,
    pageNumber: 265,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Differential Calculus — Error Propagation',
    text:
      'It is required to fabricate a circular bushing with an area of 1000 cm² for a backhoe ' +
      'bucket. If the allowable error of tolerance is ±5 cm² for the area of the bushing, how ' +
      'close to the ideal radius, in cm, must the machinist control the radius?',
    ...worked('S20', 265, 265, 'The radius must be held within $\\mathbf{0.0446}$ cm'),
  },

  // ── Situation 21 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q21',
    number: 21,
    pageNumber: 266,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Surveying — Area by Simpson\u2019s 1/3 Rule',
    text:
      'A cliff and a traverse line border a mountain-view property. The offsets measured from the ' +
      'traverse line to the cliff, at 5 m intervals, are 4.2 m, 8.1 m, 6.7 m, 7.8 m and 8.3 m. ' +
      'What is the total area in sq.m. between the cliff and the traverse line using Simpson\u2019s ' +
      '1/3 Rule?',
    figureSvg: figure('F21'),
    figureCaption: 'Cliff profile with the five offsets at 5 m intervals',
    ...worked('S21', 266, 266, '$A = \\mathbf{149.17}$ sq.m.'),
  },

  // ── Situation 22 (multiple choice) ─────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q22',
    number: 22,
    pageNumber: 266,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Safety — Types of Structural Collapse',
    referenceSource: 'Besavilla',
    text:
      'It is a type of collapse which is characterized by a building that shifts at the upper end, ' +
      'leaning into adjacent buildings, or totally sideways in the absence of an adjacent building.',
    options: [
      { label: 'A', text: 'Lean-over collapse' },
      { label: 'B', text: '90\u00b0 wall collapse' },
      { label: 'C', text: 'Inward-outward collapse' },
      { label: 'D', text: 'Curtain wall collapse' },
    ],
    correctAnswer: 'A',
    solution: {
      summary:
        'A lean-over collapse is the toppling of the upper storeys, either against the neighbouring ' +
        'building or, with nothing to lean on, flat on its side.',
      steps: [],
      finalAnswer: 'Lean-over collapse — Option A',
      pageNumber: 266,
    },
  },

  // ── Situation 23 (multiple choice) ─────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q23',
    number: 23,
    pageNumber: 266,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Safety — Trench Entry',
    referenceSource: 'Besavilla',
    text: 'Which is NOT a safety measure before entering a trench?',
    options: [
      { label: 'A', text: 'Safe access or egress is unavailable' },
      { label: 'B', text: 'Trench is free of standing water and atmospheric hazards' },
      { label: 'C', text: 'Cave-in protection measures are in place' },
      { label: 'D', text: 'Trench is inspected by a competent person' },
    ],
    correctAnswer: 'A',
    solution: {
      summary:
        'Every entry requires a safe means of access and egress; its absence is a prohibition, not ' +
        'a safety measure.',
      steps: [],
      finalAnswer: 'Safe access or egress is unavailable — Option A',
      pageNumber: 266,
    },
  },

  // ── Situation 24 (multiple choice) ─────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q24',
    number: 24,
    pageNumber: 266,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Safety — Hierarchy of Controls',
    referenceSource: 'Besavilla',
    text:
      'There are varieties of devices and garments designed to serve as a barrier between workers ' +
      'and workplace hazards.',
    options: [
      { label: 'A', text: 'Personal Protective Equipment' },
      { label: 'B', text: 'Elimination of hazards' },
      { label: 'C', text: 'Engineering Controls' },
      { label: 'D', text: 'Administrative Controls' },
    ],
    correctAnswer: 'A',
    solution: {
      summary:
        'Devices and garments worn by the worker as a barrier are, by definition, personal ' +
        'protective equipment — the last line of the hierarchy of controls.',
      steps: [],
      finalAnswer: 'Personal Protective Equipment — Option A',
      pageNumber: 266,
    },
  },

  // ── Situation 25 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q25',
    number: 25,
    pageNumber: 266,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Functions of Two Variables — Thermal Discharge',
    text:
      'The temperature of water at a point on a river where an ethanol production plant discharges ' +
      'its hot waste is approximated by $T(x,y) = 2x + 5y + xy - 40$, where $x$ represents the ' +
      'temperature of the river water in degrees Celsius before it reaches the power plant and ' +
      '$y$ is the number of megawatts (in hundreds) of electricity being produced by the plant. ' +
      'What is the temperature in degrees Celsius of the discharged water if the water reaching ' +
      'the plant has a temperature of 8 \u00b0C and 300 megawatts of electricity are being produced?',
    ...worked('S25', 266, 266, '$T = \\mathbf{15}$ \u00b0C'),
  },
];

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

export const BESA_MSTC_NOV2025_PART3: Question[] = [
  // ── Situation 26 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q26',
    number: 26,
    pageNumber: 267,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Traffic Engineering — Speed\u2013Density Relationship',
    text:
      'A linear relationship is observed between speed and density on a certain section of a ' +
      'highway. The free-flow speed is observed to be 80 kph and the jam density is estimated as ' +
      '100 vehicles per km length. Determine the maximum flow expected on this section.',
    ...worked('S26', 267, 267, '$q_{max} = \\mathbf{2000}$ veh/hr'),
  },

  // ── Situation 27 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q27',
    number: 27,
    pageNumber: 267,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Soil Mechanics — Load and Shrinkage Factors',
    text:
      'The weight per loose unit volume of soil is 1163 kg/m³, the weight per bank unit volume is ' +
      '1661 kg/m³ and the weight per compacted unit volume is 2077 kg/m³. What is the value of its ' +
      'load factor and shrinkage factor?',
    ...worked(
      'S27',
      267,
      267,
      'Load factor $= \\dfrac{1163}{1661} = \\mathbf{0.70}$; shrinkage factor ' +
        '$= \\dfrac{1661}{2077} = \\mathbf{0.80}$',
    ),
  },

  // ── Situation 28 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q28',
    number: 28,
    pageNumber: 267,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Differential Calculus — Maximum Density of Water',
    text:
      'Between 0 \u00b0C and 30 \u00b0C, the volume (in cu.cm) of 1 kg of water at temperature ' +
      '$T$ is given approximately by the formula ' +
      '$V = 999.87 - 0.06426T + 0.0085043T^2 - 0.0000679T^3$. Find the temperature for the ' +
      'maximum density of water.',
    ...worked('S28', 267, 267, '$T = \\mathbf{3.9665}$ \u00b0C (the other root is outside 0\u201330 \u00b0C)'),
  },

  // ── Situation 29 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q29',
    number: 29,
    pageNumber: 268,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Differential Calculus — Average Velocity',
    text:
      'The table shows the position of a motorcyclist after accelerating from rest.\n\n' +
      '| $t$ (sec.) | 2 | 3 | 4 | 5 | 6 |\n' +
      '| --- | --- | --- | --- | --- | --- |\n' +
      '| $s$ (feet) | 20.6 | 46.5 | 79.2 | 124.8 | 176.7 |\n\n' +
      'Find the average velocity for the time interval $[2, 4]$.',
    ...worked('S29', 268, 268, '$\\bar{v} = \\mathbf{29.3}$ ft/sec'),
  },

  // ── Situation 30 (multiple choice, with a printed worked solution) ─────────
  {
    id: 'mstc-nov2025-besa-q30',
    number: 30,
    pageNumber: 268,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Matrices — Transition (Transmission) Matrix',
    referenceSource: 'Besavilla',
    text:
      'Surveys regarding change in housing patterns in urban areas observe that 75% of the ' +
      'population lives in single-family dwellings and 25% in multiple housing. In a follow-up ' +
      'survey 5 years later, of those who lived in single-family dwellings 90% still do but 10% ' +
      'had moved to multiple-family dwellings. Of those in multiple-family housing, 95% still ' +
      'live there while 5% had moved to single-family dwellings. What is the transmission matrix ' +
      'for this information?\n\n' +
      'Each option is a 2 \u00d7 2 matrix whose rows are the *from* state (Single, Multiple) and ' +
      'whose columns are the *to* state (Single, Multiple).',
    options: [
      { label: 'A', text: 'Row Single: [0.90, 0.10]; Row Multiple: [0.05, 0.95]' },
      { label: 'B', text: 'Row Single: [0.10, 0.05]; Row Multiple: [0.95, 0.90]' },
      { label: 'C', text: 'Row Single: [0.05, 0.95]; Row Multiple: [0.90, 0.10]' },
      { label: 'D', text: 'Row Single: [0.95, 0.90]; Row Multiple: [0.10, 0.10]' },
    ],
    correctAnswer: 'A',
    solution: {
      summary:
        'A transmission matrix records the probability of moving from the row state to the column ' +
        'state, and each row must sum to 1.',
      steps: [],
      finalAnswer: 'Transmission matrix A — Option A',
      pageNumber: 268,
      images: besaMstcNov2025SolutionImages('S30'),
    },
  },

  // ── Situation 31 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q31',
    number: 31,
    pageNumber: 268,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Surveying — Contour Interpolation',
    text:
      'When the reduced levels (RL) of all intersection points are obtained, the contours are ' +
      'located by linear interpolation between the levels, on the assumption of a uniform ground ' +
      'slope between each pair of points. The figure shows grid points B2 and B3 with reduced ' +
      'levels of 30.20 m and 34.60 m respectively and a horizontal grid interval of 20 m. The ' +
      'height difference between B2 and B3 is 4.40 m and the 31 m contour is 0.80 m above B2. ' +
      'What is the horizontal distance of the 31 m and 32 m contours from B2 respectively?',
    figureSvg: figure('F31'),
    figureCaption: 'Grid points B2 and B3 with the 31 m to 34 m contours interpolated between them',
    ...worked(
      'S31',
      268,
      268,
      '$x_1 = \\dfrac{0.80}{4.40}(20) = \\mathbf{3.64}$ m and ' +
        '$x_2 = \\dfrac{1.80}{4.40}(20) = \\mathbf{8.18}$ m from B2',
    ),
  },

  // ── Situation 32 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q32',
    number: 32,
    pageNumber: 269,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Wave Mechanics — Velocity in a Rail',
    text:
      'What is the velocity, in m/s, of mechanical waves in railroad tracks made of steel? Given ' +
      'that the expression for the velocity of longitudinal waves traveling along the length of a ' +
      'solid rod is $V = \\sqrt{\\dfrac{Y}{\\rho}}$, where $Y$ = Young\u2019s modulus and ' +
      '$\\rho$ = density. Young\u2019s modulus is $2 \\times 10^{11}$ N/m² and its density is ' +
      '$7.8 \\times 10^{3}$ kg/m³.',
    ...worked('S32', 269, 269, '$V = \\mathbf{5064}$ m/s'),
  },

  // ── Situation 33 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q33',
    number: 33,
    pageNumber: 269,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Algebra — Cost Function of a Box',
    text:
      'A rectangular box has a square copper base, wooden sides and a wooden top. Copper costs P21 ' +
      'per sq.m. and wood costs P2 per sq.m. What is the expression giving the total cost of the ' +
      'material used to make the box in terms of the dimensions?',
    figureSvg: figure('F33'),
    figureCaption: 'Rectangular box: square copper base of side x, wooden sides of height h, wooden top',
    ...worked('S33', 269, 269, '$C = \\mathbf{23x^2 + 8hx}$'),
  },

  // ── Situation 34 (multiple choice) ─────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q34',
    number: 34,
    pageNumber: 269,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Equipment — Earthmoving Terms',
    referenceSource: 'Besavilla',
    text:
      'What is the average distance that separates the centroids of the excavation and embankment ' +
      'areas on the profile diagram?',
    options: [
      { label: 'A', text: 'Haul distance' },
      { label: 'B', text: 'Free haul distance' },
      { label: 'C', text: 'Base line distance' },
      { label: 'D', text: 'Overhaul distance' },
    ],
    correctAnswer: 'A',
    solution: {
      summary:
        'The haul distance is measured between the centroids of the cut and the fill; the free-haul ' +
        'distance is the portion paid at the haul rate, and overhaul is the excess beyond it.',
      steps: [],
      finalAnswer: 'Haul distance — Option A',
      pageNumber: 269,
    },
  },

  // ── Situation 35 (multiple choice) ─────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q35',
    number: 35,
    pageNumber: 269,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Safety — Demolition Work',
    referenceSource: 'Besavilla',
    text:
      'Which of the following must be done before demolition work will commence?\n\n' +
      '**I.** Implementing all necessary steps or controls to prevent injury to any person or ' +
      'damage to adjoining property.\n\n' +
      '**II.** Shutdown or disconnect all existing gas, electrical and other services that are ' +
      'likely to endanger a worker.',
    options: [
      { label: 'A', text: 'I and II' },
      { label: 'B', text: 'I only' },
      { label: 'C', text: 'II only' },
      { label: 'D', text: 'None of these' },
    ],
    correctAnswer: 'A',
    solution: {
      summary:
        'Both precautions are mandatory: protect persons and adjoining property, and isolate every ' +
        'service that could endanger a worker.',
      steps: [],
      finalAnswer: 'I and II — Option A',
      pageNumber: 269,
    },
  },

  // ── Situation 36 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q36',
    number: 36,
    pageNumber: 270,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Integral Calculus — Arc Length',
    text: 'Find the length of the arc of the parabola $y^2 = x$ from $(0,0)$ to $(1,1)$.',
    figureSvg: figure('F36'),
    figureCaption: 'The parabola y² = x with the arc from (0, 0) to (1, 1)',
    ...worked(
      'S36',
      270,
      270,
      '$L = \\dfrac{2\\sqrt{5} + \\ln\\left(2 + \\sqrt{5}\\right)}{4} = \\mathbf{1.4789}$',
    ),
  },

  // ── Situation 37 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q37',
    number: 37,
    pageNumber: 270,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Highway Engineering — Sight Distance on a Horizontal Curve',
    text:
      'A two-way horizontal curve has a length of 200 m and the width of the pavement is 8 m. For ' +
      'a stopping sight distance of 75 m, what is the required setback from the centreline of the ' +
      'inner lane of the pavement?',
    ...worked('S37', 270, 270, '$M = \\mathbf{2.356}$ m'),
  },

  // ── Situation 38 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q38',
    number: 38,
    pageNumber: 271,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Integral Calculus — Height of a Rocket',
    text:
      'A rocket is fired vertically into the air. Its velocity at $t$ seconds after lift-off is ' +
      '$V(t) = 6t + 0.5$ m/s. Prior to launching, the top of the rocket was 8 m above the launch ' +
      'pad. Given $S(t) = \\int V(t)\\,dt$, find the height of the rocket (measured from the top of ' +
      'the rocket to the launch pad) at time $t$.',
    ...worked('S38', 271, 271, '$S(t) = \\mathbf{3t^2 + 0.5t + 8}$ m'),
  },
];

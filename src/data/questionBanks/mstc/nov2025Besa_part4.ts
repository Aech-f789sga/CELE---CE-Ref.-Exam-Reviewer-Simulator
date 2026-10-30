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

export const BESA_MSTC_NOV2025_PART4: Question[] = [
  // ── Situation 39 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q39',
    number: 39,
    pageNumber: 271,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Kinematics — Runway Length',
    text:
      'An A-321 passenger jet starts from rest with an acceleration of 3 m/sec² and makes a run of ' +
      '35 seconds before taking off. What is the minimum length, in meters, of the required runway?',
    ...worked('S39', 271, 271, '$S = 1837.5$, say $\\mathbf{1838}$ m'),
  },

  // ── Situation 40 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q40',
    number: 40,
    pageNumber: 271,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Statics — Biceps Force on the Forearm',
    text:
      'If 10 kg is the maximum mass that a person can hold in a hand when the arm is positioned ' +
      'with a 120\u00b0 angle at the elbow as shown, what is the maximum force $F$ that the biceps ' +
      'muscle exerts on the forearm? Neglect the weight of the forearm and the hand, and note that ' +
      'the muscle attaches 5 cm from the elbow.',
    figureSvg: figure('F40'),
    figureCaption: 'Forearm at 120\u00b0 with the biceps force F at 5 cm and the 10 kg load at 35 cm',
    ...worked('S40', 271, 271, '$F = \\mathbf{793}$ N'),
  },

  // ── Situation 41 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q41',
    number: 41,
    pageNumber: 272,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Equipment — Backhoe Output',
    text:
      'What is the net output in m³/hour of allowing 30% bulking or swell of soil material for a ' +
      'backhoe with a 1 m³ capacity bucket engaged in normal trench excavation of clayey soil and ' +
      'discharging directly into a waiting dump truck, given the following relevant data:\n\n' +
      'Optimum output = 60 bucket loads per hour\n\n' +
      'Task efficiency factor = 0.80\n\n' +
      'Operator efficiency factor = 75%',
    ...worked('S41', 272, 272, 'Net output $= \\mathbf{25}$ m\u00b3/hr'),
  },

  // ── Situation 42 (multiple choice) ─────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q42',
    number: 42,
    pageNumber: 272,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Safety — Scaffolding',
    referenceSource: 'Besavilla',
    text:
      'This consists of a working platform in the form of a cradle which is suspended from ' +
      'cantilever beams or outriggers from the roof of a tall building to give access to the ' +
      'facade for carrying out maintenance and cleaning activities. High-rise buildings have a ' +
      'permanent system installed at roof level and it is recommended for all buildings over 30 m ' +
      'high.',
    options: [
      { label: 'A', text: 'Suspended scaffold' },
      { label: 'B', text: 'Cantilever scaffold' },
      { label: 'C', text: 'Slung scaffold' },
      { label: 'D', text: 'Birdcage scaffold' },
    ],
    correctAnswer: 'A',
    solution: {
      summary:
        'A cradle hung from roof outriggers is a suspended scaffold; a cantilever scaffold is ' +
        'carried by beams projecting from the wall and a birdcage is a grid of standards inside a ' +
        'room.',
      steps: [],
      finalAnswer: 'Suspended scaffold — Option A',
      pageNumber: 272,
    },
  },

  // ── Situation 43 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q43',
    number: 43,
    pageNumber: 272,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Surveying — Baseline Corrections',
    text:
      'A baseline was measured in catenary in four lengths giving 30.126, 29.973, 30.066 and ' +
      '22.536 m. The differences of level were respectively 0.45, 0.60, 0.30 and 0.45 m. The ' +
      'temperature during observation was 10 \u00b0C and the tension applied was 15 kg. The tape ' +
      'was standardized as 30 m at 20 \u00b0C on the flat with a tension of 5 kg. The coefficient ' +
      'of expansion was 0.000011 per \u00b0C, the weight of the tape 1 kg, the cross-sectional area ' +
      'is 3 mm², $E = 210 \\times 10^3$ N/mm² (210 kN/mm²), gravitational acceleration ' +
      '$g = 9.80665$ m/s². Calculate the length of the base.\n\n' +
      'Length of tape $L = 112.701$ m.\n\n' +
      'Hint:\n\n' +
      'Correction for tension: $C_p = \\dfrac{(T_2 - T_1)L}{AE}$\n\n' +
      'Correction for temperature: $C_t = K(T_2 - T_1)L$\n\n' +
      'Correction for sag: $C_s = \\dfrac{w^2 L^3}{24\\,T^2}$',
    ...worked('S43', 272, 272, 'Corrected length of the base $= \\mathbf{112.67}$ m'),
  },

  // ── Situation 44 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q44',
    number: 44,
    pageNumber: 273,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Transportation — Logit Mode Choice',
    text:
      'The utility functions for auto and transit are as follows:\n\n' +
      'Auto: $U_A = -0.46 - 0.35T_1 - 0.08T_2 - 0.005C$\n\n' +
      'Transit: $U_T = -0.07 - 0.05T_1 - 0.15T_2 - 0.005C$\n\n' +
      'where $T_1$ = total travel time (minutes), $T_2$ = waiting time (minutes), ' +
      '$C$ = cost (cents).\n\n' +
      'The travel characteristics between two zones are as follows:\n\n' +
      '| | Auto | Transit |\n' +
      '| --- | --- | --- |\n' +
      '| $T_1$ | 20 | 30 |\n' +
      '| $T_2$ | 8 | 6 |\n' +
      '| $C$ | 320 | 100 |\n\n' +
      'Given the utility of each mode $U_x = \\sum a_i x_i$, where $U_x$ = utility of mode $x$, ' +
      '$n$ = number of attributes, $x$ = attribute value (time, cost and so forth) and $a$ = ' +
      'coefficient value for attribute $i$ (negative since the values are disutilities).\n\n' +
      'If two modes, auto (A) and jeepney (T), are being considered, the probability of selecting ' +
      'the auto mode (A) can be written as\n\n' +
      '$P(A) = \\dfrac{e^{U_A}}{e^{U_A} + e^{U_T}}$\n\n' +
      'What are the probabilities for auto and jeepney respectively?',
    ...worked(
      'S44',
      273,
      273,
      '$U_A = -9.70$, $U_T = -11.55$; $P_A = \\mathbf{0.86}$, $P_T = \\mathbf{0.14}$',
    ),
  },

  // ── Situation 45 (multiple choice) ─────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q45',
    number: 45,
    pageNumber: 274,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Management — Activity Relationships',
    referenceSource: 'Besavilla',
    text:
      'If a contractor were to precast concrete, two of the activities that are of concern would be ' +
      'assembling the rebar cage and setting out the casting-bed forms. In order to ensure that ' +
      'these two items will be ready for concrete pouring, what type of relationship should be ' +
      'used in the schedule between these two activities?',
    options: [
      { label: 'A', text: 'Finish \u2013 finish' },
      { label: 'B', text: 'Start \u2013 finish' },
      { label: 'C', text: 'Start \u2013 start' },
      { label: 'D', text: 'Finish \u2013 start' },
    ],
    correctAnswer: 'A',
    solution: {
      summary:
        'Both activities must be complete before the pour, so neither may finish ahead of the ' +
        'other: the relationship is finish-to-finish.',
      steps: [],
      finalAnswer: 'Finish \u2013 finish — Option A',
      pageNumber: 274,
    },
  },

  // ── Situation 46 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q46',
    number: 46,
    pageNumber: 274,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Traffic Engineering — Conflict Points',
    text:
      'How many conflict points are there in a 2-road intersection when both roads are two-way?',
    ...worked('S46', 274, 274, 'Total number of conflict points $= \\mathbf{24}$'),
  },

  // ── Situation 47 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q47',
    number: 47,
    pageNumber: 274,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Integral Calculus — Marginal Cost',
    text:
      'A mining company estimates that the marginal cost of extracting $x$ tons of copper ore from ' +
      'a mine is $0.6 + 0.008x$, measured in thousand dollars per ton. Start-up costs are ' +
      'P100,000. What is the cost of extracting the first 50 tons of copper?',
    ...worked('S47', 274, 274, 'Total cost $= \\mathbf{P140{,}000}$'),
  },

  // ── Situation 48 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q48',
    number: 48,
    pageNumber: 274,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Algebra — Manipulating a Power Relation',
    text:
      'The time it takes a car to accelerate from a complete stop to a speed of 60 km per hour is ' +
      'based on the velocity $V$ in meters per second, the car\u2019s average power $P$ in watts ' +
      'and the mass of the car $m$ in kilograms. Given that $V = \\sqrt[3]{\\dfrac{3PT}{m}}$, ' +
      'which expression gives the value of $T$, the time in seconds, in terms of $V$, $P$ and $m$?',
    ...worked('S48', 274, 274, '$T = \\dfrac{mV^3}{3P}$'),
  },

  // ── Situation 49 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q49',
    number: 49,
    pageNumber: 275,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Engineering Economy — Spare-Parts Inventory Policy',
    text:
      'An electric rebar cutter has 3 parts, namely motor ($P_1$), gear ($P_2$) and blade ' +
      '($P_3$), which need to be replaced. By studying past records of failures of the item and ' +
      'inventory costs, the following values have been found:\n\n' +
      '$P_1 = 0.90$, $P_2 = 0.24$, $P_3 = 0.17$\n\n' +
      '$H_1 = 15$, $H_2 = 40$, $H_3 = 9$ (pesos)\n\n' +
      'Given that $C(M) = NL\\left[(1-P_1)(1-P_2)(1-P_3)(1-P_4)(1-P_5) + \\ldots\\right]$, where ' +
      '$M$ represents the policies of carrying all parts and no parts respectively, and given ' +
      '$L = 54$, what is the optimal policy for the expected cost per repair per time period?\n\n' +
      'Hint: $M = H_2 + H_3 + NL\\left[1 - (1-P_1)\\right]\\ldots$ and $N = 3$.',
    ...worked(
      'S49',
      275,
      275,
      'Stock $P_1$ and $P_3$ only (since $H_1 \\le P_1L$ and $H_3 \\le P_3L$, but ' +
        '$H_2 > P_2L$); expected cost $M = \\mathbf{73.79}$',
    ),
  },

  // ── Situation 50 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q50',
    number: 50,
    pageNumber: 275,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Differential Calculus — Minimum Isosceles Triangle',
    text:
      'An isosceles triangle is circumscribed about the unit circle so that the equal sides meet at ' +
      'point $(0, a)$ on the $y$-axis. What is the value of $a$ that minimizes the lengths of the ' +
      'equal sides?',
    figureSvg: figure('F50'),
    figureCaption: 'Isosceles triangle circumscribing the unit circle, apex at (0, a)',
    ...worked('S50', 275, 275, '$a = \\mathbf{1.62}$'),
  },
];

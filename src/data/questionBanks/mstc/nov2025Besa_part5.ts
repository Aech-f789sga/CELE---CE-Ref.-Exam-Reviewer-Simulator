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

export const BESA_MSTC_NOV2025_PART5: Question[] = [
  // ── Situation 51 (multiple choice) ─────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q51',
    number: 51,
    pageNumber: 276,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Statics — Pulley Systems',
    referenceSource: 'Besavilla',
    text:
      'Which pulley requires the maximum force to lift the 200 N load? The four arrangements are ' +
      'shown in the figure, lettered (a) to (d) from left to right.',
    figureSvg: figure('F51'),
    figureCaption: 'Four pulley arrangements (a)\u2013(d) lifting the same 200 N load',
    options: [
      { label: 'A', text: 'Arrangement (a) \u2014 single fixed pulley' },
      { label: 'B', text: 'Arrangement (b) \u2014 three-sheave block and tackle' },
      { label: 'C', text: 'Arrangement (c) \u2014 two-sheave block and tackle' },
      { label: 'D', text: 'Arrangement (d) \u2014 two movable pulleys' },
    ],
    correctAnswer: 'B',
    solution: {
      summary:
        'The mechanical advantage equals the number of rope falls supporting the load. The ' +
        'three-sheave block and tackle in (b) carries the most falls and therefore needs the least ' +
        'effort; the single fixed pulley (a) needs the full 200 N, so (b) is the printed key.',
      steps: [],
      finalAnswer: 'Arrangement (b) — Option B (the booklet prints "Answer: b")',
      pageNumber: 276,
    },
  },

  // ── Situation 52 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q52',
    number: 52,
    pageNumber: 276,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Recurrence Relations — Tiling a Board',
    text:
      'What is the expression for how many ways a $2 \\times n$ rectangular board can be tiled ' +
      'using $1 \\times 2$ and $2 \\times 2$ pieces?\n\n' +
      'Hint: $T_n = T_{n-1} + 2T_{n-2}$',
    ...worked('S52', 276, 276, '$T_n = \\dfrac{2^{\\,n+1} + (-1)^n}{3}$'),
  },

  // ── Situation 53 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q53',
    number: 53,
    pageNumber: 277,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Algebra — Forming a System of Equations',
    text:
      'A person deposits P6000 into different savings accounts. One account earns interest at 5%, ' +
      'another at 5\u00bd%, and another at 6%. The total interest earned at the end of 1 year was ' +
      'P340. Which system of equations satisfies the narrative?',
    ...worked(
      'S53',
      277,
      277,
      '$x + y + z = 6000$; $0.06x + 0.055y + 0.05z = 340$; $0.06x - 0.057z = 135$',
    ),
  },

  // ── Situation 54 (multiple choice) ─────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q54',
    number: 54,
    pageNumber: 277,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Engineering Economy — Break-Even Assumptions',
    referenceSource: 'Besavilla',
    text:
      'The relations among sales, revenues, cost and profits may be expressed mathematically if ' +
      'certain useful assumptions are made. Which of these are the relevant assumptions?\n\n' +
      '**I.** The variable costs are linearly proportional to the production value (rate in the ' +
      'range 0 to 100% capacity).\n\n' +
      '**II.** The fixed charges are constant regardless of the annual production.\n\n' +
      '**III.** There is no income other than that from operations.\n\n' +
      '**IV.** All units produced are sold at a constant price per unit.',
    options: [
      { label: 'A', text: 'I, II, III, IV' },
      { label: 'B', text: 'I, III, IV' },
      { label: 'C', text: 'I, IV' },
      { label: 'D', text: 'II, III' },
    ],
    correctAnswer: 'A',
    solution: {
      summary:
        'All four are the standard break-even assumptions: linear variable cost, constant fixed ' +
        'charges, operating income only, and a constant unit price.',
      steps: [],
      finalAnswer: 'I, II, III and IV — Option A',
      pageNumber: 277,
    },
  },

  // ── Situation 55 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q55',
    number: 55,
    pageNumber: 277,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Pavement Design — Cumulative Standard Axles',
    text:
      'A two-lane carriageway is to be designed for a design life of 15 years. The total two-way ' +
      'traffic intensity after the completion of construction is expected to be 2000 commercial ' +
      'vehicles per day. The vehicle damage factor is 3 and the lane distribution factor is 0.75. ' +
      'Assuming an annual growth rate of 7.5%, what is the design traffic expressed as a cumulative ' +
      'number of standard axles?\n\n' +
      'Hint:\n\n' +
      '$N = 365\\left[\\dfrac{(1+r)^n - 1}{r}\\right](\\text{VDF})(\\text{LDF})$\n\n' +
      'where VDF = vehicle damage factor and LDF = lane distribution factor.',
    ...worked('S55', 277, 277, '$N = \\mathbf{42.9 \\times 10^{6}}$ standard axles'),
  },

  // ── Situation 56 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q56',
    number: 56,
    pageNumber: 278,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Differential Equations — Newton\u2019s Law of Cooling',
    text:
      'The daytime temperature in a BPO office building is maintained at 70 \u00b0F. The heating is ' +
      'shut off at 10 p.m. and turned on again at 6 a.m. On a certain day, the temperature inside ' +
      'the building at 2 a.m. is found to be 65 \u00b0F. The outside temperature was 50 \u00b0F at ' +
      '10 p.m. and had dropped to 40 \u00b0F by 6 a.m. What was the temperature inside the building ' +
      'when the heat was turned on at 6 a.m.?\n\n' +
      'Hint: Newton\u2019s Law of Cooling $\\dfrac{dT}{dt} = k(T - T_A)$, where $T$ is the ' +
      'temperature inside the building, $T_A$ is the temperature outside the building and $k$ is ' +
      'the cooling constant.',
    ...worked(
      'S56',
      278,
      278,
      '$k = -0.056$; at 6 a.m. $T = 45 + 25e^{-0.448} = \\mathbf{61}$ \u00b0F — a drop of 9 \u00b0F',
    ),
  },

  // ── Situation 57 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q57',
    number: 57,
    pageNumber: 278,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Strength of Materials — Axial Stress',
    text:
      'A tensile testing apparatus is designed to withstand a maximum load of 220,000 N. The design ' +
      'calls for two cylindrical posts, each of which supports half of the minimum load. Further, ' +
      'plain-carbon steel shafting rounds are to be used; the minimum yield and tensile stress of ' +
      'this alloy are 310 MPa and 565 MPa respectively. Factor of safety $N = 5$. What is the ' +
      'diameter of these supports in mm?',
    ...worked('S57', 278, 278, '$d = \\mathbf{47.5}$ mm'),
  },

  // ── Situation 58 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q58',
    number: 58,
    pageNumber: 279,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Engineering Economy — Annuity',
    text:
      'A developer agrees to pay P15,000,000 for a parcel of land. This amount with interest will ' +
      'be paid over 4 years, with semi-annual payments, at an interest rate of 12% compounded ' +
      'semi-annually. What is the amount of each payment?',
    ...worked('S58', 279, 279, '$A = \\mathbf{P2{,}415{,}538}$ every six months'),
  },

  // ── Situation 59 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q59',
    number: 59,
    pageNumber: 279,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Management — Field Office Area',
    text:
      'What is the area required in m² for the field office of a construction manager and his site ' +
      'agent and assistant, plus an allowance for 3 personnel? The standard internal height of an ' +
      'office van is 2.4 m and its width is 3.7 m. Ergonomics require an area of 3.7 m² per person ' +
      'and a minimum volume of 11.5 m³ per person.',
    ...worked('S59', 279, 279, 'Area required $= \\mathbf{28.75}$ m\u00b2 $> 22.2$ m\u00b2'),
  },

  // ── Situation 60 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q60',
    number: 60,
    pageNumber: 280,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Numerical Methods — Bisection Method',
    text:
      'Use two iterations of the bisection method to find the root of $f(x) = x^3 - 2x - 7$, ' +
      'assuming the initial interval $[0, 0.5]$.',
    ...worked('S60', 280, 280, 'Approximate root $= \\mathbf{0.125}$'),
  },

  // ── Situation 61 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q61',
    number: 61,
    pageNumber: 280,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Differential Equations — Curve from a Second Derivative',
    text:
      'What is the equation that has a second derivative $y\u2019\u2019 = 4x - 2$ and that has a ' +
      'slope of 1 at the point $(2, 9)$?',
    ...worked(
      'S61',
      280,
      280,
      '$y = \\dfrac{2}{3}x^3 - x^2 - 3x - \\dfrac{41}{3}$',
    ),
  },
];

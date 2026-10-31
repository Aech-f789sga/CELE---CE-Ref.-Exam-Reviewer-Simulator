import { Question } from '../../../types/exam';
import {
  besaMar2026MstcFigure,
  besaMar2026MstcSolutionImages,
} from '../../besaMar2026MstcImages';

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
    images: besaMar2026MstcSolutionImages(key),
  },
});

const figure = (key: string) => besaMar2026MstcFigure(key);

export const BESA_MSTC_MAR2026_PART2: Question[] = [
  // ── Situation 16 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q16',
    number: 16,
    pageNumber: 288,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Project Risk Management — Best and Worst Case',
    text:
      'The risks of a potential project are shown in the table. What is the value of the best case and worst case scenario?\n\n' +
      '| Risk Event | Impact | Probability | Expected Value |\n' +
      '| --- | --- | --- | --- |\n' +
      '| Project cost | −2,000,000 | — | −2,000,000 |\n' +
      '| Project revenue | 2,200,000 | — | +2,200,000 |\n' +
      '| Fail acceptance test | −100,000 | 10% | −10,000 |\n' +
      '| Warranty failure | −40,000 | 15% | −6,000 |\n' +
      '| Additional orders | 75,000 | 30% | +22,500 |\n' +
      '| Penalty for delivery | −50,000 | 5% | −2,500 |\n' +
      '| Incentive for early delivery | 100,000 | 30% | +30,000 |',
    ...worked('S16', 288, 288, 'Best case $375,000; worst case $10,000'),
  },

  // ── Situation 17 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q17',
    number: 17,
    pageNumber: 288,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Functions — Profit as a Composite Function',
    text:
      'The profit from the production and sale of $x$ bags of skim coat is given by $P(x) = 180x - \\dfrac{x^2}{100} - 200$. In a particular month, the number of bags produced on day 1 of the month is $x = q(t) = 1000 + 10t$. What is $P(q(t))$, to express the profit as a function of the day of the month?',
    ...worked('S17', 288, 288, '$P(x) = 169{,}800 + 1600t - t^2$'),
  },

  // ── Situation 18 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q18',
    number: 18,
    pageNumber: 289,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Project Risk Management — Expected Value of a Risk',
    text:
      'A project manager is reviewing the risk of her project. One of the risks she is reviewing has an impact of $25,000 and an associated probability of 10%. The risk is associated with an activity that is the predecessor to seven other activities in the schedule. All eight activities are on the critical path. The seven other activities have a budget of $75,000. What is the expected value of this risk?',
    ...worked('S18', 289, 289, '$2,500'),
  },

  // ── Situation 19 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q19',
    number: 19,
    pageNumber: 289,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Engineering Economy — Annual Depreciation and Interest Cost',
    text:
      'If a piece of equipment had an original cost of $71,500, anticipated salvage value of $10,000, and an estimated life of 5 years, what would be the annual depreciation and interest cost at an interest rate of 6%? The tires cost $4,000 and are included in the purchase price of $71,500.',
    ...worked('S19', 289, 289, 'A = $14,250 per year'),
  },

  // ── Situation 20 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q20',
    number: 20,
    pageNumber: 289,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Linear Systems — Traffic Flow at an Intersection',
    text:
      'During rush hours, substantial traffic congestion is encountered at the intersections shown in the figure. The arrows indicate one-way streets. The city wishes to improve the signals at these corners to speed the flow of traffic. The traffic engineers first gather data. As the figure shows, 700 cars per hour come down M Street to intersection A, and 300 cars per hour come down 10th Street to intersection A. $x_1$ of these cars leave A on M Street and $x_4$ cars leave A on 10th Street. The number of cars entering A must equal the number leaving, so that\n\n' +
      '$x_1 + x_4 = 700 + 300 = 1000$\n\n' +
      'For intersection B, $x_1$ cars enter on M Street and $x_2$ on 11th Street. The figure shows that 900 cars leave B on 11th Street and 200 cars leave B on M Street. So we have\n\n' +
      '$x_1 + x_2 = 900 + 200 = 1100$\n\n' +
      'What are the equations that describe the traffic flow system?',
    figureSvg: figure('S20'),
    figureCaption: 'Four one-way intersections A, B, C and D with hourly volumes',
    ...worked(
      'S20',
      289,
      290,
      '$x_1 + x_4 = 1000$; $x_1 + x_2 = 1100$; $x_2 + x_3 = 700$; $x_3 + x_4 = 600$',
    ),
  },

  // ── Situation 21 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q21',
    number: 21,
    pageNumber: 290,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Strength of Materials — Force Constant of a Wire',
    text:
      'A wire 1 m long and 1 mm in radius is stretched 0.60 mm when a load of 20 kg is hung from it. Calculate the force constant of the wire.',
    ...worked('S21', 290, 290, '$k = 327{,}000$ N/m $= 3.27 \\times 10^5$ N/m'),
  },

  // ── Situation 22 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q22',
    number: 22,
    pageNumber: 290,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Differential Calculus — Maximum of a Learning Curve',
    text:
      'Auxiliary work contractors tend to have a high turnover of employees, forcing the company to invest time and effort in training new workers. It has been found that a worker who is new to the operation of a certain task will fabricate $P(t)$ items on day $t$, where $P(t) = 25 - 25e^{-0.3t}$. What is the maximum number of items the worker can fabricate?',
    ...worked('S22', 290, 290, '25 items'),
  },

  // ── Situation 23 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q23',
    number: 23,
    pageNumber: 291,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Route Surveying — Low Point of a Vertical Curve',
    text:
      'A vertical curve of length $L = 8$ stations joins a $-2.0\\%$ grade to a $+1.6\\%$ grade. The PVI is at Station $87+00$ with elevation 743 m. Where is the low point station for the vertical curve located? Determine the stationing of the lowest point of the vertical curve.',
    figureSvg: figure('S23'),
    figureCaption: 'Vertical curve with PVC, PVI, EVC and the lowest point marked',
    ...worked('S23', 291, 291, 'Station $87 + 44$'),
  },

  // ── Situation 24 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q24',
    number: 24,
    pageNumber: 291,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Probability — Accident Rate at Intersections',
    text:
      'In a certain barangay hearing, constituents identified three intersections as potentially dangerous. Based on the data collected for each intersection, find the probability that a vehicle entering the intersection will be involved in an accident. Which intersection is the most dangerous? Use 365 days per year.\n\n' +
      '| | A | B | C |\n' +
      '| --- | --- | --- | --- |\n' +
      '| No. of vehicles per day | 25,500 | 3,890 | 8,580 |\n' +
      '| No. of vehicles in accidents/year | 182 | 51 | 118 |',
    ...worked(
      'S24',
      291,
      291,
      '$P(A) = 0.0000196$, $P(B) = 0.0000359$, $P(C) = 0.00003768$ — intersection C is the most dangerous',
    ),
  },

  // ── Situation 25 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q25',
    number: 25,
    pageNumber: 291,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Engineering Economy — Most Economical Span',
    text:
      'A steel bridge spans a 1400-ft crossing. The cost of steel and an individual pier are estimated to be as follows:\n\n' +
      '$C_s = 600{,}000 + 7{,}200S$ and $C_p = 420{,}000 - 85S$\n\n' +
      'where $C_s$ is the average cost of steel in pesos, $C_p$ is the average cost in pesos of a pier, and $S$ = span length. Determine the most economical span length for this bridge.\n\n' +
      'Hint:\n\n' +
      'Economical span length of the bridge is obtained by minimising the total cost with respect to $S$.',
    ...worked('S25', 291, 292, '$S = 1400$ ft — Option A, 5 spans × 280 ft'),
  },

  // ── Situation 26 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q26',
    number: 26,
    pageNumber: 293,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Construction Cost Estimating — Parametric Adjustment',
    text:
      'Last year, your construction company built a 100,000 square foot, five-story parking garage for $5,395,621. The parking garage included one elevator, which costs $126,345, and its cost is included in the $5,395,621. Using this information, prepare a cost estimate for a 95,000 square foot, five-story parking garage with two elevators. It is estimated that costs have risen 3% during the last year. Determine the cost per square foot for the parking garage, excluding the elevator.',
    ...worked('S26', 293, 293, '$52.69 per sq ft; total estimate $5,415,987, say $5,420,000'),
  },

  // ── Situation 27 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q27',
    number: 27,
    pageNumber: 293,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Logistic Growth — Population Forecast',
    text:
      'The population in a resort town grows according to a logistic model with an initial population of 1000. The town’s carrying capacity is 10,000. The population grows to 2500 after one year. What will the population be after another three years?\n\n' +
      'Hint:\n\n' +
      '$A = \\dfrac{\\mu - P_0}{P_0}$ and $P(t) = \\dfrac{\\mu}{1 + Ae^{-kt}}$',
    ...worked('S27', 293, 293, '9000'),
  },

  // ── Situation 28 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q28',
    number: 28,
    pageNumber: 293,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Strength of Materials — Strain',
    text:
      'A 5.08 cm gage length is marked on a copper rod. The rod is strained so that the gage marks are 5.77 cm apart. Calculate the strain.',
    ...worked('S28', 293, 293, 'Strain = 0.136'),
  },

  // ── Situation 29 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q29',
    number: 29,
    pageNumber: 294,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Algebra — Recurrence over Three Days',
    text:
      'Grass on a golf course grows every day by 2% of the height on the previous day. The groundsmen trim and reduce the height of the grass by 1 mm every day. The grass is completely trimmed in 3 days. What was the height of the grass on the first day before the trimming? Assume trimming is at the end of the day, after which the grass grows at the beginning of the next day.',
    ...worked('S29', 294, 294, '2.94 mm'),
  },

  // ── Situation 30 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q30',
    number: 30,
    pageNumber: 294,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Engineering Mechanics — Moment of Inertia of Rotor Blades',
    text:
      'A helicopter has two blades. Each blade has a mass of 240 kg and can be approximated as a thin rod of length 6.7 m. The blades are rotating at an angular speed of 44 rad/sec. What is the total moment of inertia of the two blades about the axis of rotation?',
    ...worked('S30', 294, 294, '$I = 7.18 \\times 10^3$ kg·m²'),
  },
];

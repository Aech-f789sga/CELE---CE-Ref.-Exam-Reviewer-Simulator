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

/**
 * Four-choice item that also prints a worked solution. The booklet answers it
 * with a circled option *and* a short derivation, so the item is marked against
 * the printed key and the scanned reasoning is attached for review.
 */
const keyed = (
  key: string,
  correct: 'A' | 'B' | 'C' | 'D',
  answer: string,
  page: number,
  pageEnd: number,
) => ({
  correctAnswer: correct,
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

export const BESA_MSTC_MAR2026_PART3: Question[] = [
  // ── Situation 31 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q31',
    number: 31,
    pageNumber: 294,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Construction Management — Man-Days and Productivity',
    text:
      '50 workers of equal productivity were hired to complete a work in 90 days. After 30 days, the 50 workers had completed only 25% of the work. Had 25 additional workers, each having a productivity equal to each of the initial 50 workers, been employed after 30 days, the work could have been completed on time. How long did it actually take to complete the work?',
    ...worked('S31', 294, 294, '120 days'),
  },

  // ── Situation 32 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q32',
    number: 32,
    pageNumber: 295,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Series — Sum of a Maclaurin Expansion',
    text:
      'The given series is\n\n' +
      '$\\dfrac{\\pi}{1!} - \\dfrac{\\pi^3}{3!} + \\dfrac{\\pi^5}{5!} - \\dfrac{\\pi^7}{7!} + \\cdots + \\dfrac{(-1)^n \\pi^{2n+1}}{(2n+1)!}$\n\n' +
      'What is the sum of the Maclaurin series?',
    ...worked('S32', 295, 295, 'The sum of the series = 0'),
  },

  // ── Situation 33 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q33',
    number: 33,
    pageNumber: 295,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Engineering Economy — Time for Prices to Double',
    text:
      'The inflation rate in the economy averages 8% per year, assuming continuous compounding. Given that $P$ is deposited at a rate of interest $i$, compounding continuously for $n$ years, the compound amount is $A = Pe^{rt}$. How many years would it take for the general level of prices to double?',
    ...worked('S33', 295, 295, '$t = 8.7$, say 9 years'),
  },

  // ── Situation 34 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q34',
    number: 34,
    pageNumber: 295,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Highway Engineering — Capacity of a Roundabout',
    text:
      'A roundabout is provided with an average entry width of 8.4 m, width of weaving section of 14 m and length of weaving section between channelizing islands of 35 m. The crossing traffic and total traffic on the weaving section are 1000 and 2000 PCU per hour respectively. What is the nearest rounded capacity of the roundabout in PCU per hour?\n\n' +
      'Hint:\n\n' +
      '$p = \\dfrac{\\text{crossing traffic on the weaving section}}{\\text{total traffic on the weaving section}}$\n\n' +
      '$Q = \\dfrac{280w\\left(1 + \\dfrac{e}{w}\\right)\\left(1 - \\dfrac{p}{3}\\right)}{1 + \\dfrac{w}{L}}$\n\n' +
      'where $e$ = average entering width, $w$ = width of weaving section, $L$ = length of weaving section, $Q$ = rounded capacity.',
    ...worked('S34', 295, 295, '$Q = 3733.3$, say 3700 PCU per hour'),
  },

  // ── Situation 35 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q35',
    number: 35,
    pageNumber: 296,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Integral Calculus — Average Value of a Function',
    text:
      'The cost for $x$ table lamps is given as $C(x) = 400 + x + 0.3x^2$. Compute the average value of $C(x)$ for 10 to 20 lamps.',
    ...worked('S35', 296, 296, 'Average cost = 485'),
  },

  // ── Situation 36 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q36',
    number: 36,
    pageNumber: 296,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Probability — Normal Distribution',
    text:
      'The amount of paper discarded by a household per week is normally distributed with mean 9.4 lb and a standard deviation of 4.2 lb. Determine the percentage of households that could throw out at least 10 lb of paper per week.',
    ...worked('S36', 296, 296, '$P = 0.4435$, about 44%'),
  },

  // ── Situation 37 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q37',
    number: 37,
    pageNumber: 297,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Engineering Mechanics — Braking Force',
    text:
      'A Toyota Vios with a mass of 1500 kg travelling at 20 m/s stops within a distance of 50 m. What is the braking force in newtons?',
    ...worked('S37', 297, 297, '$F = -6000$ N'),
  },

  // ── Situation 38 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q38',
    number: 38,
    pageNumber: 297,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Probability — Exponential Distribution',
    text:
      'The length of time spent waiting in line at a certain bank is modeled by an exponential density function with mean 8 minutes. What is the probability that a customer has to wait more than 10 minutes?\n\n' +
      'Hint: the probability density function is\n\n' +
      '$f(t) = \\begin{cases} 0 & \\text{if } t < 0 \\\\[4pt] \\dfrac{1}{8}e^{-t/8} & \\text{if } t \\ge 0 \\end{cases}$',
    ...worked('S38', 297, 297, '$P = 0.2865$'),
  },

  // ── Situation 39 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q39',
    number: 39,
    pageNumber: 297,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Strength of Materials — Thermal Stress in a Constrained Rail',
    text:
      'A steel rail was installed when its temperature was 5°C, $L = 20$ m, $A = 60 \\times 10^{-4}$ m². The rail was installed without allowance for expansion and the ends were constrained by adjacent rails. The coefficient for linear expansion is $11.7 \\times 10^{-6}$ /°C. What is the compressive force in the rail at 25°C? Modulus of elasticity of steel = $20 \\times 10^{10}$ Pa.',
    ...worked('S39', 297, 297, '$F = 280{,}800$ N, say 281 kN'),
  },

  // ── Situation 40 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q40',
    number: 40,
    pageNumber: 297,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Kinematics — Minimum Travel Time Between Stations',
    text:
      'A Tokyo Express bullet train accelerates and decelerates at the rate of 4 ft/sec². Its maximum cruising speed is 90 mph. Find the minimum time that the train takes to travel between two consecutive stations that are 45 miles apart.',
    ...worked('S40', 297, 298, '$t = 1833$ sec $= 30.55$ minutes'),
  },

  // ── Situation 41 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q41',
    number: 41,
    pageNumber: 298,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Traffic Engineering — Queue at a Signalised Intersection',
    text:
      'An approach at a pretimed signalized intersection has an arrival rate of 0.10 veh/sec and a saturation flow rate of 0.7 veh/sec. 20 seconds of effective green are given in a 60-second cycle. What is the proportion of the vehicles stopped and the maximum number of vehicles in the queue?\n\n' +
      'Hint:\n\n' +
      '$P_s = \\dfrac{\\lambda(r + t_c)}{r + g}$ and $Q_{max} = \\lambda r$\n\n' +
      'where $C$ = cycle length, $t_c$ = time to queue clearance.',
    ...worked('S41', 298, 298, '$P_s = 0.775$; $Q_{max} = 4$ vehicles'),
  },

  // ── Situation 42 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q42',
    number: 42,
    pageNumber: 299,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Engineering Economy — Present Worth of Deferred Work',
    text:
      'Retrofitting of an existing warehouse may be implemented immediately for $10,000. If the retrofitting work is deferred for 4 years, the estimated cost will be $25,000. The useful life of the warehouse is not affected by when the retrofit was made. There are no extra costs incurred by postponing the work. If the company requires a 20% annual return on its investment, when should the repairs be made?',
    options: [
      { label: 'A', text: 'Repairs should be made after waiting for 8 years' },
      { label: 'B', text: 'Repairs should be made now' },
      { label: 'C', text: 'Repairs should be made after waiting for 4 years' },
      { label: 'D', text: 'Repairs should be made next year' },
    ],
    ...keyed('S42', 'B', 'Repairs should be made now — $12,056.33 > $10,000', 299, 299),
  },

  // ── Situation 43 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q43',
    number: 43,
    pageNumber: 299,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Differential Calculus — Critical Points',
    text: 'Find the critical points of $f(x) = 2x^3 - 21x^2 + 60x - 10$.',
    ...worked('S43', 299, 299, 'Maximum at $(2, 62)$; minimum at $(5, 35)$'),
  },

  // ── Situation 44 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q44',
    number: 44,
    pageNumber: 300,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Machine Design — Belt Drive Speed Ratio',
    text:
      'The belt drive has a diameter of the small driving pulley of 15 in and the diameter of the driven pulley is 45 in. A 6 hp motor drives the input pulley at 600 rpm. Given the equality $\\omega_1 r_1 = \\omega_2 r_2$, what is the revolution per minute of the driven pulley?',
    figureSvg: figure('S44'),
    figureCaption: 'Belt drive connecting the driving and driven pulleys',
    ...worked('S44', 300, 300, '$\\omega_2 = 200$ rpm'),
  },

  // ── Situation 45 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q45',
    number: 45,
    pageNumber: 300,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Engineering Mechanics — Banking Angle of a Curve',
    text:
      'What is the required banking angle for a curve of radius 160 m in the inclined plane negotiated at a speed of 22.2 m/s without the need of friction force?',
    ...worked('S45', 300, 300, '$\\theta = 17.43°$'),
  },
];

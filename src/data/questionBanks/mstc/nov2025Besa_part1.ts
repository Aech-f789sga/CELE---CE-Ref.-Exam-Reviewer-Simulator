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

export const BESA_MSTC_NOV2025_PART1: Question[] = [
  // ── Situation 1 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q1',
    number: 1,
    pageNumber: 257,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Queuing Theory — Expected Number of Units in the System',
    text:
      'An empty ramp can hold 15 vehicles. Vehicles can enter the expressway at 1 vehicle every ' +
      '6 seconds and vehicles arrive at the ramp at 1 vehicle every 8 seconds. What is the expected ' +
      'number of vehicles on the ramp in the peak hour, given that the expected number of units in ' +
      'the system is required?\n\n' +
      'Hint:\n\n' +
      '$E(n) = \\dfrac{P\\left[1 - (N+1)P^{N} + N\\,P^{N+1}\\right]}{(1 - P)\\left(1 - P^{N+1}\\right)}$\n\n' +
      'where the service factor $P = \\dfrac{\\lambda}{\\mu}$, $\\lambda$ = arrival rate, ' +
      '$\\mu$ = departure rate, and $N$ = maximum number of units in the system.',
    ...worked('S01', 257, 257, '$E(n) = 2.84$, say $\\mathbf{3}$ vehicles'),
  },

  // ── Situation 2 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q2',
    number: 2,
    pageNumber: 258,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Kinematics — Free Fall from a Cliff',
    text:
      'A rock fall occurs at the edge of the Trans-Central Highway cliff with a speed of 12 m/s. ' +
      'It strikes the ground 110 m below the place where the rock fall occurred. How long does it ' +
      'take for the boulder to reach the ground?',
    ...worked('S02', 258, 258, '$t = \\mathbf{6.12}$ sec'),
  },

  // ── Situation 3 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q3',
    number: 3,
    pageNumber: 258,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Probability — Counting the Sample Space',
    text:
      'The Montesclaros couple plan to purchase paint for the walls and the baseboard in their ' +
      'living room. They will select one colour for the walls and one colour for the baseboard ' +
      'from the following colours. Determine the number of points in the sample space.\n\n' +
      '| Walls | Baseboard |\n' +
      '| --- | --- |\n' +
      '| Alabaster | Sable |\n' +
      '| Java | White |\n' +
      '| Oyster | Chocolate |',
    ...worked('S03', 258, 258, '$3 \\times 3 = \\mathbf{9}$ points in the sample space'),
  },

  // ── Situation 4 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q4',
    number: 4,
    pageNumber: 258,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Highway Engineering — Horsepower Produced',
    text:
      'Determine the horsepower produced by a passenger car traveling at a speed of 65 mph on a ' +
      'straight road of 5% grade with a smooth pavement. Assume the weight of the car is 4000 lb ' +
      'and the cross-sectional area of the car is 40 ft².\n\n' +
      'Given the following equation to determine the air resistance:\n\n' +
      '$R_a = 0.5\\,\\dfrac{2.15\\,\\rho\\,C_D\\,A\\,u^2}{g}$\n\n' +
      'where $R_a$ = air resistance; $\\rho$ = density of air (0.0766 lb/ft³ at sea level, less at ' +
      'higher elevation); $C_D$ = aerodynamic drag coefficient (current average value for a ' +
      'passenger car is 0.40, for trucks the value ranges from 0.5 to 0.8 but a typical value is ' +
      '0.50); $A$ = frontal cross-sectional area (sq.ft.); $u$ = vehicle speed in mph; ' +
      '$g$ = acceleration of gravity (32.2 ft/sec²).\n\n' +
      'Use the formula for rolling resistance:\n\n' +
      '$R_r = \\left(C_{rs} + 2.15\\,C_{rv}\\,u^2\\right)W$\n\n' +
      'where $R_r$ = rolling resistance; $C_{rs}$ = constant = 0.012; $C_{rv}$ = constant = ' +
      '$0.65 \\times 10^{-6}$; $u$ = vehicle speed in mph.\n\n' +
      'Grade resistance = weight $\\times$ grade.\n\n' +
      'Horsepower produced:\n\n' +
      '$P = \\dfrac{1.47\\,R\\,u}{550}$\n\n' +
      'where $R$ = total resistance = air resistance + rolling resistance + grade resistance.',
    ...worked('S04', 258, 258, '$P = \\mathbf{77.3}$ hp'),
  },

  // ── Situation 5 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q5',
    number: 5,
    pageNumber: 259,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Probability — Standard Error of a Proportion',
    text:
      'According to the Mendelian Law of Segregation in genetics, when certain types of peas are ' +
      'crossed the probability that the plant yields a yellow pea is $\\tfrac{3}{4}$ and that it ' +
      'yields a green pea is $\\tfrac{1}{4}$. For a plant giving 400 peas, determine the standard ' +
      'error of the proportion of peas.\n\n' +
      'Hint: Standard error $= \\sqrt{\\dfrac{p(1-p)}{n}}$',
    ...worked('S05', 259, 259, 'Standard error $= \\mathbf{0.0217}$'),
  },

  // ── Situation 6 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q6',
    number: 6,
    pageNumber: 259,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Integral Calculus — Accumulated Maintenance Cost',
    text:
      'Maintenance costs for a home tend to increase as a house gets older. Statistical records ' +
      "determine that the rate of increase in maintenance costs for a small house is given by " +
      "$M'(x) = 9x^2 + 50$, where $x$ is the age of the house in years and $M(x)$ is the total " +
      'accumulated cost of maintenance for $x$ years. What is the total maintenance cost from 5 to ' +
      '10 years after the house was built?',
    ...worked('S06', 259, 259, '$M = \\mathbf{2875}$'),
  },

  // ── Situation 7 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q7',
    number: 7,
    pageNumber: 260,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Wave Mechanics — Wavelength in a Steel Rod',
    text:
      "If the frequency of the source is 240 Hz, what is the wavelength in meters of the waves in " +
      'steel, given that the expression for the velocity of longitudinal waves traveling along the ' +
      'length of a solid rod is $V = \\sqrt{\\dfrac{Y}{\\rho}}$, where $Y$ = Young\u2019s modulus and ' +
      '$\\rho$ = density? Young\u2019s modulus for steel is $2 \\times 10^{11}$ N/m², its density is ' +
      '$7.8 \\times 10^{3}$ kg/m³, and the wavelength is $\\lambda = \\dfrac{V}{f}$, where ' +
      '$V$ = velocity and $f$ = frequency.',
    ...worked('S07', 260, 260, '$\\lambda = \\mathbf{21.10}$ m'),
  },

  // ── Situation 8 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q8',
    number: 8,
    pageNumber: 260,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Integral Calculus — Volume of Leakage',
    text:
      'Water is leaking from a tank at the rate of $f(t) = 10 \\ln(t+1)$ gallons per hour for ' +
      '$0 \\le t \\le 10$, where $t$ is measured in hours. How many gallons of water have leaked ' +
      'from the tank after exactly 5 hours?',
    ...worked('S08', 260, 260, '$V = \\mathbf{57.506}$ gallons'),
  },

  // ── Situation 9 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q9',
    number: 9,
    pageNumber: 260,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Differential Calculus — Minimum Cost of a Haul',
    text:
      'A dump truck burns diesel at the rate of $f(x) = \\dfrac{1}{200}\\left(800 + x^2\\right)$ ' +
      'liters per kilometer when traveling $x$ kilometers per hour on a straight level road. If ' +
      'diesel costs P2 per liter, what is the speed in km/hour that will produce the minimum total ' +
      'cost for a 1000-kilometer trip?',
    ...worked('S09', 260, 260, '$x = \\mathbf{28.3}$ km/hour'),
  },

  // ── Situation 10 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q10',
    number: 10,
    pageNumber: 260,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Algebra — Formulating a Polynomial Model',
    text:
      'Many people invest in bitcoin annually. For the last four birthdays a person purchased ' +
      'bitcoins for P6, P18, P24 and P18. The current value of these is modeled by ' +
      '$T(x) = 6x^4 + 18x^3 + 24x^2 + 18x$, where $x$ represents the average rate of return plus ' +
      'one. If the average of the bitcoins is worth P81.58, formulate the approximate expression.',
    ...worked('S10', 260, 260, '$T(x) = \\mathbf{6x^4 + 18x^3 + 24x^2 + 18x}$'),
  },

  // ── Situation 11 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q11',
    number: 11,
    pageNumber: 261,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Differential Equations — Draining Tank',
    text:
      'Water flows from a cylindrical tank with a plug at the bottom. Given $A\\,v = A_y\\,\\Delta t$ ' +
      'where $\\Delta V$ is a volume of the outflow at time $\\Delta t$ and $A$ is the area, what is ' +
      'the height of the water in the tank at any time $t$ if the tank has a diameter of 2 m, the ' +
      'plug has diameter 1 cm, and the initial height of the water when the plug is opened is ' +
      '2.25 m?',
    ...worked('S11', 261, 261, '$h = \\left(15 - 0.00033\\,t\\right)^2$ m'),
  },

  // ── Situation 12 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2025-besa-q12',
    number: 12,
    pageNumber: 262,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Algebra — System of Linear Equations',
    text:
      'Construction workers are paid weekly on a cash basis. They usually change their large bills ' +
      'for small bills to settle cash advances. A particular worker has a total of 70 bills of 50-, ' +
      '100- and 200-peso denominations. The number of fifties is three times the hundreds and his ' +
      'weekly wage is P9600. How many does he have of each denomination?',
    ...worked(
      'S12',
      262,
      262,
      '**24** fifty-peso, **8** one-hundred-peso and **38** two-hundred-peso bills',
    ),
  },
];

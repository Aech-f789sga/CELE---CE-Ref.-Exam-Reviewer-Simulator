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

/** Four-choice item whose key the booklet marks with a pointing hand. */
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

export const BESA_MSTC_MAR2026_PART5: Question[] = [
  // ── Situation 61 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q61',
    number: 61,
    pageNumber: 307,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Construction Safety — Excavation',
    text: 'What is a major concern during excavation, as this can cause cave-ins?',
    options: [
      { label: 'A', text: 'Water accumulation' },
      { label: 'B', text: 'Soil moisture (or soil pressure)' },
      { label: 'C', text: 'Sheet pile wall' },
      { label: 'D', text: 'Sloping and benching systems' },
    ],
    ...keyed('S61', 'A', 'Water accumulation', 307, 307),
  },

  // ── Situation 62 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q62',
    number: 62,
    pageNumber: 307,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Construction Materials — Paint',
    text:
      'Paint is a mixture of minute solid particles known as pigment, suspended in the liquid medium referred to as the vehicle. The pigment generally provides hiding power and color. What are the components of the vehicle?',
    options: [
      { label: 'A', text: 'Solvent or thinner and primer' },
      { label: 'B', text: 'Binder and primer' },
      { label: 'C', text: 'Primer and under coaters' },
      { label: 'D', text: 'Solvent or thinner and binder' },
    ],
    ...keyed('S62', 'D', 'Solvent or thinner and binder', 307, 307),
  },

  // ── Situation 63 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q63',
    number: 63,
    pageNumber: 307,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Acoustics — Transmission of Airborne Sound',
    text:
      'Airborne sound is produced by indoor and outdoor sources that radiate sound directly into the air, such as people talking or power tool operation. In what way is airborne sound transmitted?',
    options: [
      { label: 'A', text: 'Background noise and reflection of sound waves' },
      {
        label: 'B',
        text: 'By way of flanking paths such as open doors or along interconnecting structures',
      },
      { label: 'C', text: 'Through intervening constructions and reflection of sound waves' },
      {
        label: 'D',
        text:
          'Through intervening constructions and by way of flanking paths such as open doors or along interconnecting structures',
      },
    ],
    ...keyed(
      'S63',
      'D',
      'Through intervening constructions and by way of flanking paths',
      307,
      307,
    ),
  },

  // ── Situation 64 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q64',
    number: 64,
    pageNumber: 308,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Construction Safety — Hierarchy of Control',
    text:
      'Which is the hierarchy of control measures?\n\n' +
      'I. Avoid working at height unless it is essential, at ground level, and then crane the steel and line guard rails into position.\n\n' +
      'II. Prevent falls by using an existing safe place that does not require the use or addition of work equipment to prevent fall.\n\n' +
      'III. Prevent falls by using work equipment that protects all those at risk.\n\n' +
      'IV. Prevent falls by using work equipment that protects the individual.\n\n' +
      'V. Mitigate falls by using work equipment to minimize the distance and consequences of fall and protect all those at risk.\n\n' +
      'VI. Mitigate falls by using work equipment to minimize the distance and consequences of fall and protect the individual.\n\n' +
      'VII. Mitigate falls by using work equipment that minimizes the consequences of a fall.\n\n' +
      'VIII. Mitigate falls through training, instruction or other means.',
    options: [
      { label: 'A', text: 'I, II, III, IV, V, VI, VII, VIII' },
      { label: 'B', text: 'I, IV, III, II, VIII, VII, V, VI' },
      { label: 'C', text: 'I, II, VI, III, VII, IV, V, VIII' },
      { label: 'D', text: 'I, III, II, IV, VI, V, VIII, VII' },
    ],
    ...keyed('S64', 'A', 'I, II, III, IV, V, VI, VII, VIII', 308, 308),
  },

  // ── Situation 65 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q65',
    number: 65,
    pageNumber: 308,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Construction Safety — Scaffolds',
    text:
      'Which are the hazards to look out for when using scaffolds?\n\n' +
      'I. Improper base support\n\n' +
      'II. Inadequate bracing or support\n\n' +
      'III. Overloading of scaffold\n\n' +
      'IV. Properly secured cross-braces',
    options: [
      { label: 'A', text: 'II, III, IV' },
      { label: 'B', text: 'I, IV' },
      { label: 'C', text: 'I, III' },
      { label: 'D', text: 'I, II, III' },
    ],
    ...keyed('S65', 'D', 'I, II, III', 308, 308),
  },

  // ── Situation 66 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q66',
    number: 66,
    pageNumber: 308,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Construction Materials — Metal Roofing',
    text:
      'Which are the properties of metal roofing?\n\n' +
      'I. Shed water and prevent its penetration into the building\n\n' +
      'II. Resist corrosion caused by exposure to atmosphere and pollutants\n\n' +
      'III. Resist puncture, abrasion and other damages during installation and use\n\n' +
      'IV. Formable metal that can be worked to the correct shape and retain that shape after installation',
    options: [
      { label: 'A', text: 'II, III, IV' },
      { label: 'B', text: 'I, II, III' },
      { label: 'C', text: 'I, II, IV' },
      { label: 'D', text: 'I, II, III, IV' },
    ],
    ...keyed('S66', 'D', 'I, II, III, IV', 308, 308),
  },

  // ── Situation 67 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q67',
    number: 67,
    pageNumber: 308,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Electrical Systems — Lightning Protection',
    text:
      'A good lightning protection should provide an easy, direct path for an electrical current to follow to reach the ground. Which of the following are included in a lightning protection system?\n\n' +
      'I. Air terminals (lightning rods)\n\n' +
      'II. Main insulators\n\n' +
      'III. Branch conductors\n\n' +
      'IV. Lightning arrestors\n\n' +
      'V. Ground connections',
    options: [
      { label: 'A', text: 'II, III, IV, V' },
      { label: 'B', text: 'I, II, III, IV' },
      { label: 'C', text: 'I, III, IV, V' },
      { label: 'D', text: 'I, II, IV, V' },
    ],
    ...keyed('S67', 'C', 'I, III, IV, V', 308, 308),
  },

  // ── Situation 68 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q68',
    number: 68,
    pageNumber: 308,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Project Management — Time Management Processes',
    text:
      'Project time management is the process used to ensure the timely completion of the project. There are five major activities that are required to do proper project time management:\n\n' +
      '1. Activity sequencing\n\n' +
      '2. Schedule development\n\n' +
      '3. Activity definition\n\n' +
      '4. Activity duration estimating\n\n' +
      '5. Schedule control\n\n' +
      'What is the sequence of the processes?',
    options: [
      { label: 'A', text: '2-3-5-1-4' },
      { label: 'B', text: '5-4-2-3-1' },
      { label: 'C', text: '1-5-3-4-2' },
      { label: 'D', text: '3-1-4-2-5' },
    ],
    ...keyed('S68', 'D', '3-1-4-2-5', 308, 308),
  },

  // ── Situation 69 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q69',
    number: 69,
    pageNumber: 309,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Construction Contracts — Bonds',
    text:
      'This is a type of bond that guarantees the disbursement of the contractor’s bill for labor and materials used on the project. It acts as protection for third parties and the owner, who are exempted from any liabilities in connection with claims against the project.',
    options: [
      { label: 'A', text: 'Bid bond' },
      { label: 'B', text: 'Surety bond' },
      { label: 'C', text: 'Performance bond' },
      { label: 'D', text: 'Payment bond' },
    ],
    ...keyed('S69', 'D', 'Payment bond', 309, 309),
  },

  // ── Situation 70 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q70',
    number: 70,
    pageNumber: 309,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Engineering Economy — Continuous Cash Flow Integral',
    text:
      'The rate of continuous cash flow is given by $f(x) = 1000x^2 - 100x$. Given that the present value of cash flow is $P\\int_0^{10} f(x)e^{-10x}\\,dx$, where $i$ = interest rate and $f(x)$ = rate of continuous cash flow, what equation represents this cash flow at the end of 10 years at 10% compounded continuously?',
    options: [
      { label: 'A', text: '$\\int_0^{10} (100x^2 + 1000x)e^{-10x}\\,dx$' },
      { label: 'B', text: '$\\int_0^{10} (100x^2 - 1000x)e^{-10x}\\,dx$' },
      { label: 'C', text: '$\\int_0^{10} (1000x^2 + 100x)e^{-10x}\\,dx$' },
      { label: 'D', text: '$\\int_0^{10} (1000x^2 - 100x)e^{-10x}\\,dx$' },
    ],
    ...keyed('S70', 'D', '$\\int_0^{10} (1000x^2 - 100x)e^{-10x}\\,dx$', 309, 309),
  },

  // ── Situation 71 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q71',
    number: 71,
    pageNumber: 309,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Engineering Mechanics — Power',
    text:
      'A 40-kg cement bag is hoisted by an electric winch to a height of 25 m in one (1) minute. What is the required power in watts?\n\n' +
      'Given: Power $P = \\dfrac{\\text{work}}{t}$, where work $= Fs$, $t$ = time.',
    ...worked('S71', 309, 309, '163.5 watts'),
  },

  // ── Situation 72 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q72',
    number: 72,
    pageNumber: 309,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Kinematics — Angular Displacement',
    text:
      'A grinding disk rotating initially with an angular velocity of 6 rad/s receives a constant acceleration of 2 rad/s². What angular displacement, in radians, will it describe in 3 sec?\n\n' +
      'Given angular displacement: $\\theta = \\omega t + \\dfrac{1}{2}\\alpha t^2$, where $\\omega$ = angular velocity, $t$ = time, $\\alpha$ = angular acceleration.',
    ...worked('S72', 309, 309, '$\\theta = 27$ radians'),
  },

  // ── Situation 73 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q73',
    number: 73,
    pageNumber: 310,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Geodetic Surveying — Error Propagation in a Weisbach Triangle',
    text:
      'In an underground correlation survey, the sides of a Weisbach triangle were measured as follows: $W_1W_2 = 5.435$ m, $W_1W = 2.844$ m, $W_2W = 8.274$ m. Using the measurements in the cosine rule, the calculated angle $\\angle WW_1W_2 = 175°48\'24"$. If the standard error of each of the measured sides is 1/20000, calculate the standard error of the calculated angle in seconds of arc.\n\n' +
      'Hint:\n\n' +
      '$\\sigma_{w_1} = \\dfrac{c}{ab\\sin W_1}\\left(\\sigma_a^2 + \\sigma_b^2 + \\sigma_c^2\\right)^{1/2}$',
    figureSvg: figure('S73'),
    figureCaption: 'Weisbach triangle W1–W2–W with sides 5.435 m, 2.844 m and 8.274 m',
    ...worked('S73', 310, 310, '$\\sigma_{w_1} = 770"$'),
  },
];

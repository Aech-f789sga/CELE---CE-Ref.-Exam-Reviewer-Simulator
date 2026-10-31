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
 * with a marked option *and* a short derivation, so the item is marked against
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

export const BESA_MSTC_MAR2026_PART4: Question[] = [
  // ── Situation 46 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q46',
    number: 46,
    pageNumber: 300,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Geodetic Surveying — Curvature and Refraction',
    text:
      'A gas drilling rig is set up on the sea bed 48 km from each of two survey stations which are on the coast and several kilometers apart. In order that the exact position of the rig may be obtained, it is necessary to erect a beacon on the rig so that it may be clearly visible from theodolites situated at the survey stations, each at a height of 36 m above the high-water mark. Neglecting the effects of refraction, and assuming that the minimum distance between the line of sight and calm water is to be 3 m at high water, calculate the least height of the beacon above the high-water mark at the rig.\n\n' +
      'Given:\n\n' +
      '$D = (2RC_1)^{1/2}$ horizontal distance\n\n' +
      '$R = 6273$ km\n\n' +
      '$C_1$ = error caused by curvature of the earth',
    figureSvg: figure('S46'),
    figureCaption: 'Rig and coast stations with the grazing ray over the sea surface',
    ...worked('S46', 300, 301, 'Height of beacon = 61 + 3 = 64 m'),
  },

  // ── Situation 47 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q47',
    number: 47,
    pageNumber: 301,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Integral Calculus — Moments of a Lamina',
    text:
      'What are the moments $M_x$ and $M_y$ respectively of a lamina with the given density and shape?\n\n' +
      'Hint:\n\n' +
      '$M_x = \\dfrac{\\rho}{2}\\int_a^b \\left[f(x)^2 - y_1^2\\right]dx$\n\n' +
      '$M_y = \\rho\\int_a^b x\\left[f(x) - y_1\\right]dx$',
    figureSvg: figure('S47'),
    figureCaption: 'Quarter circle of radius 4 over a rectangle extending to y = −2',
    ...worked('S47', 301, 301, '$M_x = 80$; $M_y = 224$'),
  },

  // ── Situation 48 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q48',
    number: 48,
    pageNumber: 302,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Numerical Integration — Simpson’s Rule',
    text:
      'The graph of the acceleration $a(t)$ of a car is measured in ft/sec² as shown. Using Simpson’s Rule, estimate the increase in the velocity of the car during the 6-sec time interval.\n\n' +
      'Hint:\n\n' +
      'Simpson’s Rule\n\n' +
      '$\\int_a^b f(x)\\,dx = S_n$ or $\\int_a^b f(t)\\,dt = S_n$, $\\Delta t = \\dfrac{b-a}{n}$\n\n' +
      '$S_n = \\dfrac{\\Delta t}{3}\\left[f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \\cdots + 2f(x_{n-2}) + 4f(x_{n-1}) + f(x_n)\\right]$',
    figureSvg: figure('S48'),
    figureCaption: 'Acceleration against time, plain and with the ordinates marked',
    ...worked('S48', 302, 302, 'Velocity = 37.73 ft/sec'),
  },

  // ── Situation 49 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q49',
    number: 49,
    pageNumber: 303,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Structural Analysis — Deflection by Virtual Work',
    text:
      'A triangular pin-connected truss carries a load of 4448 N as shown. Each member has the same modulus of elasticity and cross-sectional area. The truss member properties are $E = 200 \\times 10^6$ kPa and $A = 2580.6$ mm². Determine the deflection at point B.',
    figureSvg: figure('S49'),
    figureCaption: 'Triangular truss ABC with 4448 N applied at B',
    ...worked('S49', 303, 304, '$\\delta = 0.25$ mm'),
  },

  // ── Situation 50 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q50',
    number: 50,
    pageNumber: 304,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Integral Calculus — Arc Length of a Sine Profile',
    text:
      'A manufacturer of corrugated metal roofing wants to produce panels that are 28 in. wide and 2 in. high by processing flat sheets of metal as shown in the figure. The profile of the roofing takes the shape of a sine wave. Which equation is the integral equation used to evaluate the width that is needed to make a 28-in. panel?',
    figureSvg: figure('S50'),
    figureCaption: 'Flat sheet and the corrugated profile, with the four integral options',
    options: [
      { label: 'A', text: 'Integral (a)' },
      { label: 'B', text: 'Integral (b)' },
      { label: 'C', text: 'Integral (c)' },
      { label: 'D', text: 'Integral (d)' },
    ],
    ...keyed('S50', 'A', 'Integral (a)', 304, 304),
  },

  // ── Situation 51 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q51',
    number: 51,
    pageNumber: 305,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Rational Functions — Shape of a Cost Curve',
    text:
      'Cebu Steel estimates that the cost of a production run for G-40 rebar is\n\n' +
      '$C(x) = 30(x - 1) + \\dfrac{3000}{x + 10}$\n\n' +
      'where $x$ = the number of machines used. Which graph represents the total cost function for values of $x \\ge 1$?',
    figureSvg: figure('S51'),
    figureCaption: 'Four candidate graphs, a) to d)',
    options: [
      { label: 'A', text: 'Graph (a)' },
      { label: 'B', text: 'Graph (b)' },
      { label: 'C', text: 'Graph (c)' },
      { label: 'D', text: 'Graph (d)' },
    ],
    ...keyed('S51', 'A', 'Graph (a)', 305, 305),
  },

  // ── Situation 52 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q52',
    number: 52,
    pageNumber: 305,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Set Theory — Three-Set Venn Diagram',
    text:
      'SEALON is a VECO accredited contractor. His crew cuts trees, climbs poles and splices wires. SEALON reported the following information to VECO to build for a project. Of the 100 employees, 45 can cut trees, 50 can climb poles, 57 can splice wires, 20 can climb poles and splice wires, 28 can cut trees and climb poles, 25 can cut trees and splice wires, 11 can do all three, and 9 cannot do any of these activities. Which represents the data supplied by SEALON?',
    figureSvg: figure('S52'),
    figureCaption: 'Four candidate Venn diagrams, (1) to (4)',
    options: [
      { label: 'A', text: 'Diagram (1)' },
      { label: 'B', text: 'Diagram (2)' },
      { label: 'C', text: 'Diagram (3)' },
      { label: 'D', text: 'Diagram (4)' },
    ],
    ...keyed('S52', 'D', 'Diagram (4)', 305, 305),
  },

  // ── Situation 53 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q53',
    number: 53,
    pageNumber: 305,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Geometry — Height of a Chute Support',
    text:
      'Samuel is fabricating a chute to convey concrete to a foundation work. If the supports are 5 m apart and the slide is 20 m long, how tall, in meters, is the first support as shown in the figure?',
    figureSvg: figure('S53'),
    figureCaption: '20 m chute rising over a 15 m run, with the first support at 5 m',
    ...worked('S53', 305, 306, '$y = 4.40$ m'),
  },

  // ── Situation 54 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q54',
    number: 54,
    pageNumber: 306,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Construction Materials — Retaining Walls',
    text:
      'What is the type of retaining wall shown, produced from individual boxes made from panels of wire mesh, divided internally and filled with stones? These units are stacked and overlapping and applied in several layers to retain soil.',
    figureSvg: figure('S54'),
    figureCaption: 'Wire-mesh box with selvedge wire, length, width and height marked',
    options: [
      { label: 'A', text: 'Crib wall' },
      { label: 'B', text: 'Gabion' },
      { label: 'C', text: 'Segment wall' },
      { label: 'D', text: 'Mattress' },
    ],
    ...keyed('S54', 'B', 'Gabion', 306, 306),
  },

  // ── Situation 55 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q55',
    number: 55,
    pageNumber: 306,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Construction Equipment — Backhoe Components',
    text:
      'Which part of the backhoe is used to provide maneuverability, allowing the operator to adjust the angle of the boom?',
    options: [
      { label: 'A', text: 'Front discharge bucket' },
      { label: 'B', text: 'Dipper arm' },
      { label: 'C', text: 'Hydraulic arm' },
      { label: 'D', text: 'Diesel engine power unit' },
    ],
    ...keyed('S55', 'C', 'Hydraulic arm', 306, 306),
  },

  // ── Situation 56 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q56',
    number: 56,
    pageNumber: 306,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Construction Law — Setting Out of Works',
    text:
      'Which is NOT the responsibility of the contractor with regard to setting out?\n\n' +
      'I. True and proper setting out of the works, and for the correctness of the position, levels and dimensions.\n\n' +
      'II. Alignment of all parts of the works, and for the provision of all necessary instruments, appliances and labor in connection.\n\n' +
      'III. Any error shall appear or arise in the position, levels, dimensions or alignment of any part of the works, the contractor, on being required so to do by the engineer, shall at his own cost rectify such error.\n\n' +
      'IV. Checking of any setting out or of any line or level by the engineer or the engineer’s representative shall relieve the contractor of his responsibility for correctness.',
    options: [
      { label: 'A', text: 'I' },
      { label: 'B', text: 'II' },
      { label: 'C', text: 'III' },
      { label: 'D', text: 'IV' },
    ],
    ...keyed('S56', 'D', 'IV — a check by the engineer does not relieve the contractor', 306, 306),
  },

  // ── Situation 57 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q57',
    number: 57,
    pageNumber: 306,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Quantity Surveying — Measurement of Formwork',
    text: 'What is the method of measurement of formwork based on code provisions?',
    options: [
      {
        label: 'A',
        text:
          'The actual surface of any type of formwork in contact with concrete or any other material requiring formwork shall be measured in m²',
      },
      { label: 'B', text: 'Moulded or rounded edges shall be measured in lineal meters' },
      {
        label: 'C',
        text:
          'The actual surface of any type of formwork in contact with concrete or any other material requiring formwork shall be measured in m³',
      },
      {
        label: 'D',
        text: 'Formwork shall be so specified, described and measured separately for appropriate payment',
      },
    ],
    ...keyed('S57', 'A', 'Measured in m² of the actual surface in contact with concrete', 306, 306),
  },

  // ── Situation 58 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q58',
    number: 58,
    pageNumber: 307,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Fire Protection — Stages of a Fire',
    text:
      'What are the four stages, if permitted to follow its natural course with no extinguishment, that a fire that is not ventilation-limited will often pass through?',
    options: [
      { label: 'A', text: 'Free burning, flashover, smoldering/decay, incipient' },
      { label: 'B', text: 'Smoldering/decay, incipient, free burning, flashover' },
      { label: 'C', text: 'Flashover, smoldering/decay, incipient, free burning' },
      { label: 'D', text: 'Incipient, free burning, flashover, smoldering/decay' },
    ],
    ...keyed('S58', 'D', 'Incipient, free burning, flashover, smoldering/decay', 307, 307),
  },

  // ── Situation 59 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q59',
    number: 59,
    pageNumber: 307,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Construction Safety — Unsafe Conditions',
    text:
      'An unsafe condition is defined as a hazardous physical condition or circumstance which could directly permit the occurrence of an accident. Which is an example of an unsafe condition?',
    options: [
      { label: 'A', text: 'Poor illumination' },
      { label: 'B', text: 'Properly ventilated work area' },
      { label: 'C', text: 'Secured scaffolding' },
      { label: 'D', text: 'Unobstructed scaffolding' },
    ],
    ...keyed('S59', 'A', 'Poor illumination', 307, 307),
  },

  // ── Situation 60 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q60',
    number: 60,
    pageNumber: 307,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Construction Safety — Demolition',
    text: 'Which is NOT a safety measure to be taken before demolition?',
    options: [
      {
        label: 'A',
        text:
          'Structural or load-supporting members on any floor must not be removed until all structures above that floor have been removed',
      },
      {
        label: 'B',
        text: 'Demolition of exterior walls and floors must begin at the top of the structure and proceed downward',
      },
      { label: 'C', text: 'Shutting off the electricity, water and other service lines' },
      {
        label: 'D',
        text:
          'Permitting personnel to enter where work structure collapse hazards exist without shoring, bracing or other means',
      },
    ],
    ...keyed('S60', 'D', 'Allowing entry where collapse hazards exist without shoring or bracing', 307, 307),
  },
];

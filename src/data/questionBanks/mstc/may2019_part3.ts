import { Question } from '../../../types/exam';
import {
  msteMay2019SolutionImages,
  msteMay2019SolutionPage,
  msteMay2019SolutionPageEnd,
} from '../../msteMay2019Images';

const sol = (item: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: msteMay2019SolutionPage(item),
  pageNumberEnd: msteMay2019SolutionPageEnd(item),
  images: msteMay2019SolutionImages(item),
});

const opt = (a: string, b: string, c: string, d: string) => [
  { label: 'A' as const, text: a },
  { label: 'B' as const, text: b },
  { label: 'C' as const, text: c },
  { label: 'D' as const, text: d },
];

const base = { subject: 'MSTC' as const, year: 2019, month: 'May' as const };

export const MSTE_MAY2019_PART3: Question[] = [
  {
    ...base,
    id: 'mstc-may2019-q31',
    number: 31,
    pageNumber: 5,
    category: 'Analytic Geometry — Parabola',
    text:
      'A parabolic dish is in the form of a paraboloid 12 m in diameter and 2 m deep. Find the distance of the receiver from the vertex of paraboloid.',
    options: opt('2.6', '4.5', '6.25', '4.0'),
    correctAnswer: 'B',
    solution: { ...sol(31), finalAnswer: '$a = 4.5$ m (Option B)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q32',
    number: 32,
    pageNumber: 5,
    category: 'Analytic Geometry — Polar Coordinates',
    text: 'Find a polar equation that has the same graph as the circle $x^2 + y^2 = 4y$.',
    options: opt(
      '$r = 4\\cos\\theta$',
      '$r = 4\\sin\\theta + \\cos\\theta$',
      '$r = 4(\\sin\\theta + \\cos\\theta)$',
      '$r = 4\\sin\\theta$'
    ),
    correctAnswer: 'D',
    solution: { ...sol(32), finalAnswer: '$r = 4\\sin\\theta$ (Option D)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q33',
    number: 33,
    pageNumber: 5,
    category: 'Calculus — Differential Equation',
    text:
      'Find the equation of the curve passing through the point $(3, 2)$ and having the slope $5x^2 - x$ at every point $(x, y)$.',
    options: opt(
      '$y = \\dfrac{5}{3}x^3 - \\dfrac{1}{2}x^2 - \\dfrac{77}{2}$',
      '$y = \\dfrac{5}{3}x^3 - \\dfrac{1}{2}x^2 + 77$',
      '$y = \\dfrac{5}{3}x^3 - \\dfrac{1}{2}x^2 + \\dfrac{77}{2}$',
      '$y = \\dfrac{5}{3}x^3 + 2x^2 - 77$'
    ),
    correctAnswer: 'A',
    solution: {
      ...sol(33),
      finalAnswer: '$y = \\tfrac{5}{3}x^3 - \\tfrac{1}{2}x^2 - \\tfrac{77}{2}$ (Option A)',
    },
  },
  {
    ...base,
    id: 'mstc-may2019-q34',
    number: 34,
    pageNumber: 6,
    category: 'Calculus — Maxima/Minima',
    text:
      'A long rectangular sheet of metal, 12 cm wide, is to be made a rain gutter by turning up two sides so that they are perpendicular to the sheet. How many centimetres should be turned up to give the gutter its greatest capacity?',
    options: opt('3', '4', '6', '5'),
    correctAnswer: 'A',
    solution: { ...sol(34), finalAnswer: '$x = 3$ cm (Option A)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q35',
    number: 35,
    pageNumber: 6,
    category: 'Calculus — Trigonometric Optimization',
    text:
      'The number of hours daylight $D(t)$ at a particular time of the year can be approximated by\n\n' +
      '$$D(t) = \\frac{k}{2}\\sin\\left[\\frac{2\\pi}{365}(t - 79)\\right] + 12$$\n\n' +
      'for $t$ days and $t = 0$ corresponding to January 1. The constant $k$ determines the total variation in day length and depends on the latitude of the locale. When is the day length the shortest? Assume $k = 6$.',
    options: opt('August 20', 'March 20', 'December 20', 'June 20'),
    correctAnswer: 'C',
    solution: { ...sol(35), finalAnswer: 'December 20 (Option C)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q36',
    number: 36,
    pageNumber: 6,
    category: 'Calculus — Related Rates',
    text:
      'A circular pool of water is expanding at the rate of $16\\pi\\ \\text{in}^2/\\text{sec}$. At what rate is the radius expanding when the radius is 4 inches (in inches per minute)?',
    options: opt('120', '2', '60', '0.033'),
    correctAnswer: 'A',
    solution: { ...sol(36), finalAnswer: '$120$ in/min (Option A)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q37',
    number: 37,
    pageNumber: 6,
    category: 'Statics — Inclined Plane',
    text:
      'If 300 pounds of force is required to push 1000 pound safe up a ramp, then what is the angle of inclination of the ramp?',
    options: opt('$19.36^\\circ$', '$14.11^\\circ$', '$22.25^\\circ$', '$17.46^\\circ$'),
    correctAnswer: 'D',
    solution: { ...sol(37), finalAnswer: '$\\theta = 17.46^\\circ$ (Option D)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q38',
    number: 38,
    pageNumber: 6,
    category: 'Dynamics — Kinematics',
    text:
      "A person driving her car 45 kph approaches an intersection just as the traffic lights turns yellow. She knows that the yellow light lasts only 2.0 sec before turning red and she is 28 m from the near side of the intersection. Should she try to stop, or she speeds up to cross the intersection before the light turns red? The intersection is 15 m wide. Her car's maximum deceleration is $-5.8\\ \\text{m/s}^2$, whereas it can accelerate from 45 kph to 65 kph in 6.0 sec. Ignore the length of her car and her reaction time.",
    options: opt(
      'She should speed up to cross the intersection before the light turns red.',
      'She should adjust the rate of deceleration and wait for the next red light.',
      'She should adjust the rate of deceleration, stop and wait for the next green light.',
      'She should maintain the rate of deceleration and continue as she would pass through the intersection against the green light.'
    ),
    correctAnswer: 'C',
    solution: {
      ...sol(38),
      finalAnswer: 'She can stop in 13.47 m < 28 m — stop and wait (Option C)',
    },
  },
  {
    ...base,
    id: 'mstc-may2019-q39',
    number: 39,
    pageNumber: 7,
    category: 'Dynamics — Circular Motion',
    text:
      'A 2 kg body is tied to the end of a chord and whirled in a horizontal circle of radius 1.5 m at 3 revolutions per sec. Neglecting the attraction due to gravity, find the acceleration of the body toward the center of the circle in $\\text{m/s}^2$?',
    options: opt('532.96', '325.69', '253.96', '625.39'),
    correctAnswer: 'A',
    solution: { ...sol(39), finalAnswer: '$a = 532.96\\ \\text{m/s}^2$ (Option A)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q40',
    number: 40,
    pageNumber: 7,
    category: 'Engineering Economy — Depreciation',
    text:
      'A machine was purchased at an original cost of ₱400,000 with a salvage value of ₱20,000. Life of this machine expected to last for 6 years. It was used for 4000 hours, in the first year, 6000 hours, in the second year, and 6000 hours, on the 3rd year. The machine is expected to last for 38000 hours in the period of 6 years. Which of the following gives the depreciation at the end of the second year?',
    options: opt('₱300,000', '₱100,000', '₱200,000', '₱150,000'),
    correctAnswer: 'B',
    solution: { ...sol(40), finalAnswer: '₱100,000 (Option B)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q41',
    number: 41,
    pageNumber: 7,
    category: 'Engineering Economy — Bond',
    text:
      "A new corporate bond is being offered in the market for ₱93,000. The bond has a face value of ₱100,000 and matures in 10 years. The issuing corporation promises to pay ₱7,000 in interest every year. What is the company's cost of the capital raised through this bond issue if the stockbroker's fee is ₱1500 per bond sold?",
    options: opt('6.2%', '15.2%', '12.6%', '8.3%'),
    correctAnswer: 'D',
    solution: { ...sol(41), finalAnswer: '$i = 8.28\\% \\approx 8.3\\%$ (Option D)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q42',
    number: 42,
    pageNumber: 7,
    category: 'Engineering Economy — Capitalized Cost',
    text:
      'An electric rebar bender has a first cost of ₱324,000 and a salvage value of ₱50,000 at the end of its life for 4 years. Money is worth 6% annually. If there is no salvage value and the annual maintenance cost is ₱18,000, find the capitalized cost of perpetual service.',
    options: opt('₱856,000', '₱714,000', '₱624,000', '₱936,000'),
    correctAnswer: 'C',
    solution: { ...sol(42), finalAnswer: '₱624,000 (Option C)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q43',
    number: 43,
    pageNumber: 7,
    category: 'Engineering Economy — Rate of Return',
    text:
      'A proposed manufacturing plant will require a fixed capital investment of ₱8M and an estimated working capital of ₱1.5M. The annual profit is ₱2M and the annual depreciation is to be 8% of the fixed capital investment. Compute the rate of return of the total investment.',
    options: opt('15.68%', '13.42%', '14.32%', '21.43%'),
    correctAnswer: 'C',
    solution: { ...sol(43), finalAnswer: '14.32% (Option C)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q44',
    number: 44,
    pageNumber: 8,
    category: 'Engineering Economy — Inflation',
    text:
      'A man bought a government bond which cost ₱1M and will pay ₱50,000 interest each year for 20 yrs. The bond will mature at the end of 20 years and he will receive the original ₱1M. If there is 2% annual inflation during this period, what rate of return will the investor receive after considering the effect of inflation?',
    options: opt('2.94%', '1.82%', '3.14%', '2.41%'),
    correctAnswer: 'A',
    solution: { ...sol(44), finalAnswer: '$R = 2.94\\%$ (Option A)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q45',
    number: 45,
    pageNumber: 8,
    category: 'Engineering Economy — EUAC',
    text:
      'A machine cost ₱400,000 to purchase with a life of 10 years with no salvage value. If the rate of interest is 10% per annum compounded annually, compute the equivalent uniform annual cost of the machine if it will cost ₱100,000 per year to operate?',
    options: opt('₱196,452', '₱165,098', '₱256,307', '₱214,450'),
    correctAnswer: 'B',
    solution: { ...sol(45), finalAnswer: '₱165,098 (Option B)' },
  },
];

import { Question } from '../../../types/exam';
import { solved, opts } from './nov2015Helpers';

/**
 * MSTC — November 2015, items 46–60.
 *
 * The booklet prints its own working for every item in this paper, so the
 * solution shown is a crop of that page rather than a retyped derivation.
 * The last argument of `solved` is the booklet folio the crop was taken from;
 * items whose working runs over a page turn carry the closing folio too.
 */
export const MSTC_NOV2015_PART4: Question[] = [
  // Item 46
  {
    id: 'mstc-nov2015-q46',
    number: 46,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Linear Functions',
    text: 'In 2006, the median price of an existing home in the country is $222,000. In 2001 the median price of an existing home was $150,900. Let $y$ be the median price of an existing home in the year $x$, where $x = 0$ represents 2001. Write a linear equation that models the median price of an existing home in terms of year $x$.',
    options: opts('y = 190,500 − 14,220x', 'y = 190,500 + 12,420x', 'y = 190,950 + 12,420x', 'y = 150,900 + 14,220x'),
    ...solved(46, 'D', 'y = 150,900 + 14,220x (Option D)', 148, 149),
  },

  // Item 47
  {
    id: 'mstc-nov2015-q47',
    number: 47,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Analytic Geometry - Hyperbola',
    text: 'Find the conjugate axis of the equilateral hyperbola $xy = 9$.',
    options: opts('8.485', '4.243', '6.325', '10.125'),
    ...solved(47, 'A', '8.485 (Option A)', 149),
  },

  // Item 48
  {
    id: 'mstc-nov2015-q48',
    number: 48,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Analytic Geometry - Conics',
    text: 'Point $P(x, y)$ moves with a distance from point $(0, 1)$ one half of its distance from the line $y = 4$. What is the eccentricity of the curve?',
    options: opts('0.5', '0.33', '0.67', '2'),
    ...solved(48, 'A', '0.5 (Option A)', 149),
  },

  // Item 49
  {
    id: 'mstc-nov2015-q49',
    number: 49,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Analytic Geometry - Circles',
    text: 'Determine the length of the tangent to the circle $x^2 + y^2 - 4x - 5 = 0$ from $(4, 6)$.',
    options: opts('5.568', '5.632', '5.897', '6.025'),
    ...solved(49, 'A', '5.568 (Option A)', 150),
  },

  // Item 50
  {
    id: 'mstc-nov2015-q50',
    number: 50,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Analytic Geometry - Parabola',
    text: 'What is the length of the latus rectum of the curve $r = \\dfrac{2}{1 - \\sin\\theta}$?',
    options: opts('4', '2', '0.50', '0.25'),
    ...solved(50, 'A', '4 (Option A; the printed key lists ¼, a booklet defect)', 150, 150,
      "The booklet prints $\\frac{1}{4}$ for the latus rectum, but its own working reduces the curve to $x^2 = 4(y+1)$, so $4a = 4$: the correct length is 4, Option A. The printed key repeats the slip."),
  },

  // Item 51
  {
    id: 'mstc-nov2015-q51',
    number: 51,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Calculus - Optimization',
    text: 'A manufacturing company has determined that the total cost of producing an item can be determined from the equation $C = 8x^2 - 192x + 1800$, where $x$ is the number of units that the company makes. How many units should the company manufacture in order to minimize the cost?',
    options: opts('11', '12', '10', '13'),
    ...solved(51, 'B', '12 units (Option B)', 151),
  },

  // Item 52
  {
    id: 'mstc-nov2015-q52',
    number: 52,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Calculus - Optimization',
    text: 'Find the maximum value (in pesos) taken by the cost function: $C(q) = 98 + 1.64q - 0.0002q^2$, $0 \\le q \\le 5000$.',
    options: opts('P4,100', 'P5,200', 'P3,600', 'P3,460'),
    ...solved(52, 'D', 'P3,460 (Option D)', 151),
  },

  // Item 53
  {
    id: 'mstc-nov2015-q53',
    number: 53,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Calculus - Optimization',
    text: 'An open top box with a square bottom and rectangular sides is to have a volume of 864 cu. inches. Find the dimensions that require the minimum amount of material. Hint: The amount of material needed for box is equal to the surface area.',
    options: opts('12 in × 6 in', '8 in × 13.5 in', '14 in × 4.4 in', '10 in × 8.6 in'),
    ...solved(53, 'A', '12 in × 6 in (Option A)', 151),
  },

  // Item 54
  {
    id: 'mstc-nov2015-q54',
    number: 54,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Calculus - Parametric Motion',
    text: 'A particle\'s position in the $xy$-plane at any time $t$ is given by $x = 3t^2 + 2$ and $y = t^4$. Find the $x$-component of the particle\'s velocity at time $t = 4$.',
    options: opts('15', '24', '20', '16'),
    ...solved(54, 'B', '24 (Option B)', 151),
  },

  // Item 55
  {
    id: 'mstc-nov2015-q55',
    number: 55,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Calculus - Related Rates',
    text: 'A cylindrical tank radius 10 feet is being filled with water at the rate of 314 cu feet per minute. How fast is the depth of the water increasing in feet per minute?',
    options: opts('1', '0.5', '0.25', '1.5'),
    ...solved(55, 'A', '1 ft/min (Option A)', 152),
  },

  // Item 56
  {
    id: 'mstc-nov2015-q56',
    number: 56,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Calculus - Related Rates',
    text: 'A 3-meter long steel pipe has its upper end leaning against a vertical wall and lower end on a level ground. The lower end moves away at a constant rate of 2 cm/s. How fast is the pipe rotating when the lower end is 2 meter from the wall in rad/sec?',
    options: opts('0.00489', '0.00725', '0.00894', '0.00984'),
    ...solved(56, 'C', '0.00894 rad/s (Option C)', 152),
  },

  // Item 57
  {
    id: 'mstc-nov2015-q57',
    number: 57,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Calculus - Related Rates',
    text: 'A man drives at a rate of 25 kph towards the foot of an 8-m-tall monument. At what rate is he approaching the top when he is 42 m from the foot of the monument?',
    options: opts('6.82 kph', '21.45 kph', '24.56 kph', '31.58 kph'),
    ...solved(57, 'C', '24.56 kph (Option C)', 152, 153),
  },

  // Item 58
  {
    id: 'mstc-nov2015-q58',
    number: 58,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Calculus - Integration',
    text: 'It is known that $f(x) = 4$ when $x = 2$. What is the value of $f(x)$ when $x = 0$.\n\n$f(x) = \\int (3x^3 - 7x)\\,dx$',
    options: opts('4', '5', '6', '7'),
    ...solved(58, 'C', '6 (Option C)', 153),
  },

  // Item 59
  {
    id: 'mstc-nov2015-q59',
    number: 59,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Probability - Counting',
    text: 'To setup a sound system, a man has to purchase three different components. There are 9 different CD players, 10 different speakers, and 4 different amplifiers. If he will purchase one of each component, how many different sound systems are possible?',
    options: opts('480', '360', '540', '620'),
    ...solved(59, 'B', '360 (Option B)', 153),
  },

  // Item 60
  {
    id: 'mstc-nov2015-q60',
    number: 60,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Probability - Binomial',
    text: 'Statistical record shows that 25% of smokers wants to quit smoking. In a random of 15 smokers, what is the probability that exactly 8 wants to quit smoking?',
    options: opts('0.08361', '0.00952', '0.02562', '0.01311'),
    ...solved(60, 'D', '0.01311 (Option D)', 153),
  },
];

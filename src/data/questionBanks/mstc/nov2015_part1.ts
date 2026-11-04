import { Question } from '../../../types/exam';
import { solved, opts } from './nov2015Helpers';

/**
 * MSTC — November 2015, items 1–15.
 *
 * The booklet prints its own working for every item in this paper, so the
 * solution shown is a crop of that page rather than a retyped derivation.
 * The last argument of `solved` is the booklet folio the crop was taken from;
 * items whose working runs over a page turn carry the closing folio too.
 */
export const MSTC_NOV2015_PART1: Question[] = [
  // Item 1
  {
    id: 'mstc-nov2015-q1',
    number: 1,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Factoring',
    text: 'Factor $x^4 - y^4 + y - x^2$ as possible.',
    options: opts('$(x^2 - y)(x^2 + y - 1)$', '$(x^2 + y)(x^2 + y - 1)$', '$(x^2 + y)(x^2 - y - 1)$', '$(x^2 - y)(x^2 + y + 1)$'),
    ...solved(1, 'A', '$(x^2 - y)(x^2 + y - 1)$ (Option A)', 136),
  },

  // Item 2
  {
    id: 'mstc-nov2015-q2',
    number: 2,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Function Evaluation',
    text: 'Given the function $f(x) = x^3 - 2x^2 + 5x - 8$. Evaluate $f(3)$.',
    options: opts('17', '14', '16', '15'),
    ...solved(2, 'C', '16 (Option C)', 136),
  },

  // Item 3
  {
    id: 'mstc-nov2015-q3',
    number: 3,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Factoring',
    text: 'An object is dropped from the top of a 256-m tower. The height of the object above the ground after $t$ seconds is modelled by the polynomial $256 - 16t^2$. Factor this expression completely.',
    options: opts('$16(4 + t)(4 - t)$', '$4(4 + t)(4 - t)$', '$(4 + t)(4 - t)$', '$16(4 - t)(4 - t)$'),
    ...solved(3, 'A', '$16(4 + t)(4 - t)$ (Option A)', 136),
  },

  // Item 4
  {
    id: 'mstc-nov2015-q4',
    number: 4,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Inequalities',
    text: 'Solve the inequality: $\\dfrac{2}{5}(x - 6) \\ge x - 1$.',
    options: opts('$x \\le 7/3$', '$x \\le -7/3$', '$x \\le 5/3$', '$x \\le -5/3$'),
    ...solved(4, 'B', '$x \\le -7/3$ (Option B)', 136),
  },

  // Item 5
  {
    id: 'mstc-nov2015-q5',
    number: 5,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Remainder Theorem',
    text: 'Given that $f(x) = (x - 4)(x + 3) + 9$, when $f(x)$ is divided by $(x - k)$ the remainder is $k$. Find the positive value of $k$.',
    options: opts('4', '5', '3', '2'),
    ...solved(5, 'C', 'k = 3 (Option C)', 136),
  },

  // Item 6
  {
    id: 'mstc-nov2015-q6',
    number: 6,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Radicals',
    text: 'If $y = x^3$, find the value of $y$ if $\\sqrt[3]{8\\sqrt{2}\\,\\sqrt[3]{8x}} = 2$.',
    options: opts('16', '2', '4', '8'),
    ...solved(6, 'D', 'y = 8 (Option D)', 137),
  },

  // Item 7
  {
    id: 'mstc-nov2015-q7',
    number: 7,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Rational Functions',
    text: 'The amount of evaporation from the surface of a large body of water can be expressed by the function $E = \\dfrac{w}{20\\sqrt{a}}$, where $a$ is the surface area in square miles, $w$ is the wind speed over the water in mph, and $E$ is the water evaporation in inches per day. Determine the evaporation on the lake with water surface area of 9 square miles if the wind speed is 10 mph.',
    options: opts('1/2', '1/9', '1/4', '1/6'),
    ...solved(7, 'D', '1/6 (Option D)', 137),
  },

  // Item 8
  {
    id: 'mstc-nov2015-q8',
    number: 8,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Variation',
    text: 'Pairs of markings a set distance apart are made on highways so that police can detect drivers exceeding speed limit. Over a fixed distance the speed $V$ varies inversely with the time $T$. In one particular pair of markings, $V$ is 48 kph when $T$ is 6 seconds. Find the speed of a car that travels the given distance in 4 seconds.',
    options: opts('72 kph', '76 kph', '68 kph', '32 kph'),
    ...solved(8, 'A', '72 kph (Option A)', 137),
  },

  // Item 9
  {
    id: 'mstc-nov2015-q9',
    number: 9,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Arithmetic Sequence',
    text: 'An auditorium has 54 seats in the first row, 58 seats in the second row, 62 seats in the third row, and so on. Find the general term of this arithmetic sequence.',
    options: opts('$a_n = 50 + n$', '$a_n = 54 + 4n$', '$a_n = 54 + n$', '$a_n = 50 + 4n$'),
    ...solved(9, 'D', '$a_n = 50 + 4n$ (Option D)', 137),
  },

  // Item 10
  {
    id: 'mstc-nov2015-q10',
    number: 10,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Motion Problems',
    text: 'A man "A" set out from a certain point and travelled at the rate of 6 kph. After "A" had gone two hours, another man "B" set out to overtake "A" and went 4 km the first hour, 5 km the second hour, 6 km the third hour and so on gaining 1 km every hour. How many hours after "B" left will they be together?',
    options: opts('8', '10', '7', '9'),
    ...solved(10, 'A', '8 hours (Option A)', 137, 138),
  },

  // Item 11
  {
    id: 'mstc-nov2015-q11',
    number: 11,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Arithmetic Progression',
    text: 'If the sum of the first 13 terms of two arithmetic progressions are in the ratio 8/3 what is the ratio of their corresponding seventh terms?',
    options: opts('5/3', '10/3', '8/3', '7/3'),
    ...solved(11, 'C', '8/3 (Option C)', 138),
  },

  // Item 12
  {
    id: 'mstc-nov2015-q12',
    number: 12,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Exponential Growth',
    text: 'The population size of the bacterial culture growing under controlled conditions is doubling each day. Predict how large the culture will be at the beginning of day 7 if it measures 10 units at the beginning of day 1.',
    options: opts('540', '580', '640', '680'),
    ...solved(12, 'C', '640 (Option C)', 138),
  },

  // Item 13
  {
    id: 'mstc-nov2015-q13',
    number: 13,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Exponential Growth',
    text: 'The population of a community of lemmings is defined by $P = P_0 e^{0.15t}$, where $t$ is the time in months and $P_0$ is the initial population. Estimate their population after 8 months if there were 5000 lemmings initially.',
    options: opts('16,200', '16,600', '16,800', '16,100'),
    ...solved(13, 'B', '16,600 (Option B)', 139),
  },

  // Item 14
  {
    id: 'mstc-nov2015-q14',
    number: 14,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Word Problems',
    text: 'China, USA, and Europe are the countries with the most number of cellular subscribers in the world. Together, they contribute 34.8% of the total world subscribers. If China is 3.1% less than 4 times the percentage of the world subscribers in Europe and the percent of the world subscribers in USA is 4.3% more than the percent of the world subscribers in China, find the percent of world subscribers in China.',
    options: opts('5.6%', '15.4%', '19.3%', '9.9%'),
    ...solved(14, 'C', '19.3% (Option C)', 139),
  },

  // Item 15
  {
    id: 'mstc-nov2015-q15',
    number: 15,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'November',
    category: 'Algebra - Work Problems',
    text: 'Mary can clean a house in 4 hours and her brother John can do it in 7 hours. They agreed to clean the house together before their mother arrives in 3 hours. How long will it take them to clean the house?',
    options: opts('2-2/9 hours', '2-3/8 hours', '2-6/13 hours', '2-6/11 hours'),
    ...solved(15, 'D', '2-6/11 hours (Option D)', 139),
  },
];

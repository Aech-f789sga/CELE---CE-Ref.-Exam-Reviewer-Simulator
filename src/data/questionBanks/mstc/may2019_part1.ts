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

export const MSTE_MAY2019_PART1: Question[] = [
  {
    ...base,
    id: 'mstc-may2019-q1',
    number: 1,
    pageNumber: 1,
    category: 'Algebra — Polynomials',
    text: 'Simplify if possible: $7x^3 + 2x^3$.',
    options: opt('$14x^6$', '$9x^3$', '$14x^3$', '$9x^6$'),
    correctAnswer: 'B',
    solution: { ...sol(1), finalAnswer: '$9x^3$ (Option B)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q2',
    number: 2,
    pageNumber: 1,
    category: 'Algebra — Word Problem',
    text:
      'To stimulate his son in the pursuit of calculus, a math professor offered to pay him ₱400 for every problem correctly solved and to fine him ₱250 for every incorrect solution. At the end of 26 problems, neither owed any money to the other. How many did the boy solved correctly?',
    options: opt('12', '14', '16', '10'),
    correctAnswer: 'D',
    solution: { ...sol(2), finalAnswer: '10 problems (Option D)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q3',
    number: 3,
    pageNumber: 1,
    category: 'Algebra — Work Problem',
    text:
      'In 2 minutes, a conveyor belt can move 300 pounds of recyclable aluminum from the delivery truck to a storage area. A smaller belt can move the same quantity of cans the same distance in 6 minutes. If both belts are used, find how long it takes to move the cans to the storage area.',
    options: opt('2.5 minutes', '1 minute', '2.0 minutes', '1.5 minutes'),
    correctAnswer: 'D',
    solution: { ...sol(3), finalAnswer: '1.5 minutes (Option D)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q4',
    number: 4,
    pageNumber: 1,
    category: 'Algebra — Consecutive Integers',
    text:
      'During the 2006 Winter Olympic Games in Torino, Italy, the total number of gold medals won by Germany, Canada, and United States were three consecutive odd integers. Of these three countries, Germany won the most of gold medals and Canada won the fewest. If the sum of the first integer, twice the second integer, and four times the third integer is 69, find the number of gold medals won by each country.',
    options: opt(
      'Germany: 11; U.S: 9, and Canada: 7',
      'Germany: 12; U.S: 10, and Canada: 8',
      'Germany: 13; U.S: 11, and Canada: 9',
      'Germany: 14; U.S: 12, and Canada: 10'
    ),
    correctAnswer: 'A',
    solution: { ...sol(4), finalAnswer: 'Germany 11, U.S. 9, Canada 7 (Option A)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q5',
    number: 5,
    pageNumber: 1,
    category: 'Algebra — Capacity Planning',
    text:
      'Ian wants to calculate how many baristas are required in his coffee shop. He operates 313 days a year for 11 hours per day. Ian wants a capacity cushion of 12% to deal with unexpected fluctuation demand. This year Ian is forecasting 500,000 customers with an average time of 3 minutes.',
    options: opt('10', '9', '17', '7'),
    correctAnswer: 'B',
    solution: { ...sol(5), finalAnswer: '9 baristas (Option B)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q6',
    number: 6,
    pageNumber: 2,
    category: 'Algebra — Plane Geometry',
    text:
      'If the perimeter of a rectangle is 68 meters and the length is 14 m more than the width, what is the area of the rectangle in square meter?',
    options: opt('360', '240', '120', '480'),
    correctAnswer: 'B',
    solution: { ...sol(6), finalAnswer: '$240\\ \\text{m}^2$ (Option B)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q7',
    number: 7,
    pageNumber: 2,
    category: 'Algebra — Cost Function',
    text:
      'Many printing presses are designed with large plates that print a fixed number of pages as a unit. Each unit is called a signature. A particular press prints a signature is 16 pages each. Suppose $C(p)$ is the cost of printing a book of $p$ pages, assuming each signature printed cost ₱1400. What is the cost of printing a book of 128 pages?',
    options: opt('₱179,200', '₱11,200', '₱24,300', '₱5,200'),
    correctAnswer: 'B',
    solution: { ...sol(7), finalAnswer: '₱11,200 (Option B)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q8',
    number: 8,
    pageNumber: 2,
    category: 'Algebra — System of Equations',
    text: 'Solve for $x$ from the following equations:\n\n$$xy = 12; \\quad yz = 20; \\quad zx = 15$$',
    options: opt('$\\pm 3$', '$\\pm 5$', '$\\pm 4$', '$\\pm 2$'),
    correctAnswer: 'A',
    solution: { ...sol(8), finalAnswer: '$x = \\pm 3$ (Option A)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q9',
    number: 9,
    pageNumber: 2,
    category: 'Algebra — Arithmetic Sequence',
    text:
      'Suppose you receive $x$ dollars in January. Each month thereafter you receive $100 more than you received the month before. Write a factored polynomial that describes the total dollar amount you received from January through April.',
    options: opt('$x + 150$', '$x + 100$', '$4(x + 150)$', '$4(x + 100)$'),
    correctAnswer: 'C',
    solution: { ...sol(9), finalAnswer: '$4(x + 150)$ (Option C)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q10',
    number: 10,
    pageNumber: 2,
    category: 'Algebra — Exponential Growth',
    text:
      'A germ population has a growth curve $Ae^{0.4t}$. At what value of $t$ does its original value doubled?',
    options: opt('3.17', '1.37', '3.71', '1.73'),
    correctAnswer: 'D',
    solution: { ...sol(10), finalAnswer: '$t = 1.73$ (Option D)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q11',
    number: 11,
    pageNumber: 2,
    category: 'Algebra — Linear Function',
    text:
      'The cost of electricity in a certain city is given by formula $C = 0.07n + 6.5$, where $C$ is the cost and $n$ is the number of kilowatt hours used. Solve for $n$ and find the number of kWh used for costs of ₱49.97, ₱76.50 and ₱125.',
    options: opt(
      '621; 1200; 1548',
      '752; 1000; 2147',
      '854; 1500; 1963',
      '621; 1000; 1963'
    ),
    correctAnswer: 'D',
    solution: { ...sol(11), finalAnswer: '621; 1000; 1693 kWh (Option D)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q12',
    number: 12,
    pageNumber: 2,
    category: 'Algebra — Radical Equation',
    text:
      'A manufacturer of custom windows produces $y$ windows per week using $x$ hours of labor per week, where $y = 1.75\\sqrt{x}$. How many hours of labor are required to keep production at 28 windows per week?',
    options: opt('128', '256', '64', '512'),
    correctAnswer: 'B',
    solution: { ...sol(12), finalAnswer: '256 hours (Option B)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q13',
    number: 13,
    pageNumber: 3,
    category: 'Algebra — Logarithms',
    text:
      "Newton's Law of cooling states that the rate at which an object cools is directly proportional to the difference in the temperature between the object and its surrounding medium. Newton's law can be used to show that under certain conditions the temperature $T$ (in °C) of an object at $t$ (in hours) is given $T = 75e^{-2t}$. Express $t$ as a function of $T$.",
    options: opt(
      '$\\dfrac{1}{2}\\ln(T/75)$',
      '$\\ln(75/T)$',
      '$2\\ln(T/75)$',
      '$\\dfrac{1}{2}\\ln(75/T)$'
    ),
    correctAnswer: 'D',
    solution: { ...sol(13), finalAnswer: '$t = \\tfrac{1}{2}\\ln(75/T)$ (Option D)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q14',
    number: 14,
    pageNumber: 3,
    category: 'Algebra — Quadratic Motion',
    text:
      'The Wollomombi Falls in Australia have a height of 1100 ft. A pebble is thrown upward from the top of the falls with an initial velocity of 20 ft/sec. The height of the pebble "$h$" after the "$t$" sec is given by the equation $h = -16t^2 + 20t + 1100$. How long after the pebble is thrown will hit the ground?',
    options: opt('10.58', '8.94', '12.37', '13.69'),
    correctAnswer: 'B',
    solution: { ...sol(14), finalAnswer: '$t = 8.94$ seconds (Option B)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q15',
    number: 15,
    pageNumber: 3,
    category: 'Algebra — Distance/Rate',
    text:
      'Two trains going in opposite directions leave the time. One train travel 15 mph faster than the other, in 6 hours, the trains are 630 miles apart. Find the speed of the faster train.',
    options: opt('60 mph', '45 mph', '75 mph', '30 mph'),
    correctAnswer: 'A',
    solution: { ...sol(15), finalAnswer: '60 mph (Option A)' },
  },
];

import { Question } from '../../../types/exam';
import {
  msteNov2019SolutionImages,
  msteNov2019SolutionPage,
  msteNov2019SolutionPageEnd,
} from '../../msteNov2019Images';

const sol = (item: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: msteNov2019SolutionPage(item),
  pageNumberEnd: msteNov2019SolutionPageEnd(item),
  images: msteNov2019SolutionImages(item),
});

const opt = (a: string, b: string, c: string, d: string) => [
  { label: 'A' as const, text: a },
  { label: 'B' as const, text: b },
  { label: 'C' as const, text: c },
  { label: 'D' as const, text: d },
];

const base = { subject: 'MSTC' as const, year: 2019, month: 'November' as const };

const MIX_DESIGN_TABLE =
  '| Materials | Specific Gravity | % of Weight | Bulk Sp. Gravity |\n' +
  '| --- | --- | --- | --- |\n' +
  '| Asphalt cement | 1.03 | 6.0 | |\n' +
  '| Mineral filler | 3.10 | 8.0 | |\n' +
  '| Fine aggregates | | 30.0 | 2.690 |\n' +
  '| Coarse aggregates | | 56.0 | 2.611 |';

export const MSTE_NOV2019_PART2: Question[] = [
  {
    ...base,
    id: 'mstc-nov2019-q16',
    number: 16,
    pageNumber: 113,
    category: 'Differential Calculus — Related Rates',
    text:
      'Sand pouring from a conveyor form into a conical pile whose height is approximately $4/3$ of its base radius. Determine how fast the volume of the conical sand is changing when the radius of the base is 3 feet, if the rate of change of the radius is 3 inches per minute.',
    options: opt('$4\\pi$ ft/min', '$2\\pi$ ft/min', '$5\\pi$ ft/min', '$3\\pi$ ft/min'),
    correctAnswer: 'D',
    solution: { ...sol(16), finalAnswer: '$dV/dt = 3\\pi$ ft/min (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q17',
    number: 17,
    pageNumber: 114,
    category: 'Differential Calculus — Optimization',
    text:
      'Georgine wants to make a box with no lid from a rectangular sheet of cardboard that is 18 inches by 24 inches. The box is to be made by cutting a square of side $x$ from each corner of the sheet and folding up the sides. Find the value of $x$ that maximizes the volume of the box.',
    options: opt('4.3 inches', '5.2 inches', '10.6 inches', '3.4 inches'),
    correctAnswer: 'D',
    solution: { ...sol(17), finalAnswer: '$x = 3.39$ in ≈ 3.4 inches (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q18',
    number: 18,
    pageNumber: 114,
    category: 'Integral Calculus — Arc Length',
    text:
      'Find the length of arc of the curve $y = \\dfrac{1}{2}x^2 + 3$ at interval $[0, 1]$.',
    options: opt('1.325', '1.148', '0.958', '1.239'),
    correctAnswer: 'B',
    solution: { ...sol(18), finalAnswer: '1.148 units (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q19',
    number: 19,
    pageNumber: 114,
    category: 'Probability — System Reliability',
    text:
      'An automated sandwich-making machine in a food manufacturer\'s factory has six major components, with individual reliabilities as follows:\n\n' +
      '| Component | Reliability |\n' +
      '| --- | --- |\n' +
      '| Bread slicer | 0.97 |\n' +
      '| Butter applicator | 0.96 |\n' +
      '| Salad filler | 0.94 |\n' +
      '| Meat filler | 0.92 |\n' +
      '| Top slice of bread applicator | 0.96 |\n' +
      '| Wrapper | 0.91 |\n\n' +
      'If one of these parts of the production line fails, the system will stop working. Therefore, the reliability of the whole system is:',
    options: opt('0.678', '0.687', '0.704', '0.740'),
    correctAnswer: 'C',
    solution: { ...sol(19), finalAnswer: '0.7035 ≈ 0.704 (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q20',
    number: 20,
    pageNumber: 114,
    category: 'Probability — Hypergeometric',
    // The booklet mislabels this item's options: the left column prints "B." and
    // "C." instead of "A." and "B.", so "C." appears twice. Options are
    // normalised to A-D by printed position. The printed key entry 20B and the
    // printed solution both point at 0.049, which is the first option, hence A.
    text:
      'A box contains 5 defective and 195 non-defective cell phones. A quality control engineer selects 2 cell phones at random without replacement. What is the probability that exactly 1 is defective?',
    options: opt('0.049', '0.043', '0.038', '0.027'),
    correctAnswer: 'A',
    solution: { ...sol(20), finalAnswer: '0.049 (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q21',
    number: 21,
    pageNumber: 114,
    category: 'Probability — Infinite Series',
    text:
      'Smith and Jones, both 50% marksmen, decide to fight a duel in which they exchange alternate shots until one is hit. What are the odds in favor of the man who shoots first?',
    options: opt('$2/3$', '$1/4$', '$1/3$', '$1/2$'),
    correctAnswer: 'A',
    solution: { ...sol(21), finalAnswer: '$P = 2/3$ (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q22',
    number: 22,
    pageNumber: 114,
    category: 'Statistics — Standard Deviation',
    text:
      'If the standard deviation of a set of observation is 0, you can conclude',
    options: opt(
      'That all observations are the same value.',
      'That there is no relationship between the observations.',
      'That the average value is 0.',
      'That a mistake in arithmetic has been made.'
    ),
    correctAnswer: 'A',
    solution: { ...sol(22), finalAnswer: 'All observations are the same value (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q23',
    number: 23,
    pageNumber: 115,
    category: 'Engineering Economy — Payback Period',
    text:
      'Rosenberg Engineering has offices in northern California, where a heat pump can be used for cooling in the summer and heating in the winter. Replacing the current system will cost $1,500 in May and $500 in June. Starting in July, it will save $200 per month for the summer months (June–August), $100 for the fall and spring months, and $150 for the winter months (November–March). What is the payback period for the heat pump?',
    options: opt('12 months', '18 months', '14 months', '16 months'),
    correctAnswer: 'D',
    solution: { ...sol(23), finalAnswer: '1.29 years ≈ 16 months (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q24',
    number: 24,
    pageNumber: 115,
    category: 'Engineering Economy — Annual Cost',
    text:
      'A contractor can buy a dump truck for P800,000 each (surplus) or rent them for P1,189 per truck per day. The truck has salvage value of P100,000 at the end of its useful life of 5 years. Annual cost of maintenance is P20,000. If money is worth 14% per annum, determine the number of days per year that a truck must be used to warrant the purchase of the truck.',
    options: opt('198', '199', '200', '197'),
    correctAnswer: 'C',
    solution: { ...sol(24), finalAnswer: '200 days (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q25',
    number: 25,
    pageNumber: 115,
    category: 'Engineering Economy — Rate of Return',
    text:
      'A company must decide to spend P900,000 on a new project. This project will cost P50,000 per year for operations and it will increase revenues by P200,000 annually. Both costs and revenues will continue for 10 years. How much interest is incurred in this project?',
    options: opt('8.25%', '10.56%', '12.36%', '6.32%'),
    correctAnswer: 'B',
    solution: { ...sol(25), finalAnswer: '$i = 10.56\\%$ (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q26',
    number: 26,
    pageNumber: 115,
    category: 'Engineering Economy — Benefit-Cost Ratio',
    text:
      'Calculate the benefit-cost ratio for a highway project with the following benefits and costs. The project life is 40 years, the interest rate is 10%, and the project\'s right-of-way is worth $5M in 40 years.\n\n' +
      '| Item | Description | Note |\n' +
      '| --- | --- | --- |\n' +
      '| $20M | Construction cost (includes acquiring right-of-way) | |\n' +
      '| $350K | Annual maintenance | |\n' +
      '| $3M | Repaving every 8 years | |\n' +
      '| $1M | Annual value of lives saved (1 per year) | $20/hour × 0.25 hrs/trip × 250,000 trips/year |\n' +
      '| $1.25M | Time savings for commercial traffic | |\n' +
      '| $1M | Time savings for commuter and recreational traffic | $5/hour × 0.25 hrs/trip × 800,000 trips/year |',
    options: opt('2.36', '1.07', '1.22', '1.58'),
    correctAnswer: 'C',
    solution: { ...sol(26), finalAnswer: 'B/C = 1.22 (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q27',
    number: 27,
    pageNumber: 116,
    category: 'Engineering Economy — Value of a Statistical Life',
    text:
      'Data over the last 5 years indicate that for each fatality, there are 40 nonfatal injury accidents ($15,000 present cost each) and 300 property damage accidents ($2000 present cost each). What is the breakeven value of a statistical life (VSL) needed to justify a highway project if $i$ is 8%?\n\n' +
      'The death rate on a particular three-lane road is 8 per 100 million vehicle-miles. Adding a lane would reduce this to 5 per 100 million, and other accidents would be reduced proportionately. The lane would cost $1.5M per mile to build, and annual maintenance would be 3% of the first cost. Assume that the lane would last 40 years. The road carries 10,000 vehicles per day.',
    options: opt('$387.4K', '$295.1K', '$359.8K', '$255.9K'),
    correctAnswer: 'C',
    solution: { ...sol(27), finalAnswer: 'VSL = $359,728 ≈ $359.8K (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q28',
    number: 28,
    pageNumber: 116,
    category: 'Surveying — Curvature and Refraction',
    text:
      'The slope distance and zenith angle between points A and B were observed with a total station instrument as 9585.26 feet and $81^\\circ42\'20"$ respectively. The H.I. and rod readings $r$ were equal. If the elevation of $A$ is 1238.42 ft, compute the elevation of $B$. Consider the effect of curvature and refraction correction. Hint: $H_{cr} = 0.0206M^2$ where $M$ is in thousands of feet.',
    options: opt('2,621 feet', '2,612 feet', '1,632 feet', '2,623 feet'),
    correctAnswer: 'D',
    solution: { ...sol(28), finalAnswer: '2,623.04 feet (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q29',
    number: 29,
    pageNumber: 116,
    category: 'Construction — Equipment Resistance',
    text:
      'A wheel tractor-scraper weighing 91 tons is operated on a haul road with a tire penetration of 5 cm. What is the total resistance and effective grade when the scraper is ascending a slope of 5%?',
    options: opt(
      '4,550 kg; 10%',
      '9,100 kg; 10%',
      '9,100 kg; 5%',
      '4,550 kg; 5%'
    ),
    correctAnswer: 'B',
    solution: { ...sol(29), finalAnswer: '9,100 kg; 10% (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q30',
    number: 30,
    pageNumber: 116,
    category: 'Materials — Asphalt Mix Design',
    // The table is printed at the foot of booklet p. 116 and the question line
    // with its options at the top of p. 117; they are one item.
    text:
      'The table below lists data used in obtaining a mix design for an asphalt paving mixture.\n\n' +
      MIX_DESIGN_TABLE +
      '\n\nIf the maximum specific gravity of the mixture is 2.535, determine the effective specific gravity of the aggregates in the mix.',
    options: opt('2.796', '2.697', '2.967', '2.976'),
    correctAnswer: 'A',
    solution: { ...sol(30), finalAnswer: '$G_{aggeff} = 2.796$ (Option A)' },
  },
];

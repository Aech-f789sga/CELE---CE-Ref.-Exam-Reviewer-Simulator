import { Question } from '../../../types/exam';
import {
  mstcFigure,
  mstcNov2021SolutionImages,
  mstcNov2021SolutionPage,
  mstcNov2021SolutionPageEnd,
} from '../../mstcNov2021Images';

const sol = (item: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: mstcNov2021SolutionPage(item),
  pageNumberEnd: mstcNov2021SolutionPageEnd(item),
  images: mstcNov2021SolutionImages(item),
});

const opt = (a: string, b: string, c: string, d: string) => [
  { label: 'A' as const, text: a },
  { label: 'B' as const, text: b },
  { label: 'C' as const, text: c },
  { label: 'D' as const, text: d },
];

const base = { subject: 'MSTC' as const, year: 2021, month: 'November' as const };

export const MSTC_NOV2021_PART3: Question[] = [
  {
    ...base,
    id: 'mstc-nov2021-q37',
    number: 37,
    pageNumber: 247,
    category: 'Probability — Independent Events',
    text:
      'A message will be transmitted from Terminal $A$ to Terminal $B$ if the relays $R_1$, $R_2$, $R_3$ and $R_4$ are closed. If the probabilities of these relays are closed are respectively 0.5, 0.7, 0.8 and 0.8, determine the probability that the message will get through assuming that the relays function independently.',
    options: opt('0.224', '0.424', '0.242', '0.442'),
    correctAnswer: 'A',
    solution: { ...sol(37), finalAnswer: '0.224 (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q38',
    number: 38,
    pageNumber: 247,
    category: 'Probability — Series of Trials',
    text:
      "To encourage Elmer's promising tennis career, his father offers him a prize if he wins (at least) two tennis sets in a row in a three-set series to be played with his father and the club champion alternately: father-champion-father or champion-father-champion, according to Elmer's choice. The champion is a better player than Elmer's father. Which series should Elmer choose? Assume that Elmer's chance of winning against his father is 80% and against the champion is 40%.",
    options: opt(
      'Father-Champion-Father with 0.384 probability',
      'Father-Champion-Father with 0.512 probability',
      'Champion-Father-Champion with 0.384 probability',
      'Champion-Father-Champion with 0.512 probability',
    ),
    correctAnswer: 'D',
    solution: { ...sol(38), finalAnswer: 'Champion-Father-Champion with 0.512 (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q39',
    number: 39,
    pageNumber: 248,
    category: 'Surveying — Traverse Azimuth',
    text:
      "A traverse was run on a small jobsites using 20-second theodolite and a chain. Assume the angles were measured with equal precision. The direction of $AB$ is 54°10′. Determine the azimuth or bearing at the line $CA$.\n\n" +
      '| Pt. | Field Angle | Adjustment | Adj. Angle | Dist. |\n' +
      '|:---:|:---:|:---:|:---:|:---:|\n' +
      '| A | 52°26′ | -01′ | 52°25′ | 322.52 |\n' +
      '| B | 53°05′ | -01′ | 53°04′ | 265.25 |\n' +
      '| C | 74°32′ | -01′ | 74°31′ | 267.66 |\n' +
      '| **Sum** | **180°03′** | | **180°00′** | |',
    options: opt("181°06′", "286°35′", "414°10′", "234°10′"),
    correctAnswer: 'B',
    solution: { ...sol(39), finalAnswer: '286°35′ (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q40',
    number: 40,
    pageNumber: 248,
    category: 'Coastal Engineering — Wave Height',
    text:
      'A tropical typhoon hits the country with an estimated wind speed of 140 kph. This causes a storm surge in a coastal town with a period of 7.47 seconds in a point having a depth of 9 m. Compute the height of the wave if it has a steepness of 0.14.',
    options: opt('10.68 m', '11.51 m', '12.20 m', '11.56 m'),
    correctAnswer: 'C',
    solution: { ...sol(40), finalAnswer: '12.20 m (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q41',
    number: 41,
    pageNumber: 248,
    category: 'Coastal Engineering — Wave Celerity',
    text:
      "The path of typhoon 'Odet' passes thru an open ocean whose depth of water above the bottom of the sea equal to 150 m. Determine the approximate velocity of the wave propagation in kph.",
    options: opt('74.7 kph', '68.6 kph', '77.9 kph', '65.8 kph'),
    correctAnswer: 'C',
    solution: { ...sol(41), finalAnswer: '77.9 kph (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q42',
    number: 42,
    pageNumber: 248,
    category: 'Work Study — Basic and Standard Time',
    text:
      'A time study showed that the average time taken to deal with health insurance request by BPO agents in Cebu, was 7 minutes. The analyst rated the observed worker at 90%, meaning the worker performed 90% of basic time when the observed were made. The firm has an allowance factor of 8%. Calculate the basic and standard time for the operation.\n\n' +
      'Hint: Basic Time = (Average observed time) × (Performance rating factor) & Standard time = Basic time/(1-Allowance factor).',
    options: opt(
      '6.85 mins. & 6.30 mins. respectively',
      '6.30 mins. & 6.85 mins. respectively',
      '6.47 mins. & 6.98 mins. respectively',
      '6.98 mins. & 6.47 mins. respectively',
    ),
    correctAnswer: 'B',
    solution: { ...sol(42), finalAnswer: 'Basic 6.30 min, Standard 6.85 min (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q43',
    number: 43,
    pageNumber: 248,
    category: 'Work Study — Standard Time',
    text:
      'A cleaning contractor of Shangri-La Hotel wants to calculate the standard time for cleaning a room. Given an allowance factor of 15%, what is the standard time for the whole operation?\n\n' +
      '| Job element | 1 | 2 | 3 | 4 | 5 | 6 | 7 | Rating |\n' +
      '|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n' +
      '| Empty bins | 1.00 | 0.90 | 0.75 | 1.20 | 1.40 | 0.60 | 0.80 | 0.90 |\n' +
      '| Vacuum floor | 3.00 | 4.50 | 3.50 | 3.00 | 3.75 | 4.25 | 4.25 | 1.25 |',
    options: opt('6.946', '6.469', '4.696', '6.521'),
    correctAnswer: 'D',
    solution: { ...sol(43), finalAnswer: '6.521 min (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q44',
    number: 44,
    pageNumber: 249,
    category: 'Construction Equipment — Loader Production',
    text:
      'Estimate the hourly production in loose volume (Lm³) of a 2.68-m³ wheel loader excavating sand and gravel (average material) form pit and moving it to stockpile. The average haul distance is 61 m, the effective grade is 6%, the bucket fill factor is 1.00, and job efficiency is 50 min/h.\n\n' +
      '| Loading Conditions | Articulated Wheel Loader | Track Loader |\n' +
      '|:---|:---:|:---:|\n' +
      '| Loose materials | 0.35 | 0.30 |\n' +
      '| Average materials | 0.50 | 0.35 |\n' +
      '| Hard materials | 0.65 | 0.45 |\n\n' +
      '*Table: Basic loader cycle time (min)*',
    figureSvg: mstcFigure(44, 'Figure: Travel time, wheel loader (haul + return)'),
    figureCaption: 'Figure: Travel time, wheel loader (haul + return)',
    options: opt('158 Lm³/hr', '188 Lm³/hr', '168 Lm³/hr', '178 Lm³/hr'),
    correctAnswer: 'C',
    solution: { ...sol(44), finalAnswer: '168 Lm³/hr (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q45',
    number: 45,
    pageNumber: 250,
    category: 'Matrix Algebra — Scalar Multiplication',
    text:
      'The purchase prices and delivery cost (per unit) for wood, sliding and roofing used in construction of a temporary shelter are given by the table below. Then the table of unit costs may be represented by matrix $C$.\n\n' +
      '| | Wood | Sliding | Roofing |\n' +
      '|:---|:---:|:---:|:---:|\n' +
      '| Purchase | 6 | 4 | 2 |\n' +
      '| Delivery | 1 | 1 | 0.5 |\n\n' +
      '$$C = \\begin{bmatrix} 6 & 4 & 2 \\\\ 1 & 1 & 0.5 \\end{bmatrix}$$\n\n' +
      'If the supplier announces a 10% increase on both purchased and delivery of these items, find the-new unit cost matrix.',
    options: opt(
      '[6.6 4.5 2.3; 1.2 1.6 0.52; 6.5 4.5 2.2]',
      '[1.5 1.5 0.55]',
      '[6.6 4.50 2.10; 1.15 1.10 0.55; 6.6 4.4 2.2]',
      '[1.1 1.1 0.55]',
    ),
    correctAnswer: 'D',
    solution: { ...sol(45), finalAnswer: '1.1 × C = [6.6 4.4 2.2; 1.1 1.1 0.55] (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q46',
    number: 46,
    pageNumber: 250,
    category: 'Construction Equipment — Excavator Production',
    text:
      'Find the expected production in loose cubic meters (Lm³) per hour of small hydraulic excavator. Heaped bucket capacity is 0.57 m³. The material is sand and gravel with a bucket fill factor of 0.95. Job efficiency is 50 min/h. Average depth of cut 4.3 m. Maximum depth of cut is 6.1 m, and average swing is 90°.\n\n' +
      'Hint: Production (LCY/h) = $C \\times S \\times V \\times B \\times E$, Cycle output = 250 cycles/60 min. Swing-depth factor = 1.00.',
    options: opt('113 Lm³/hr', '111 Lm³/hr', '131 Lm³/h', '133 Lm³/h'),
    correctAnswer: 'A',
    solution: { ...sol(46), finalAnswer: '113 Lm³/hr (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q47',
    number: 47,
    pageNumber: 250,
    category: 'Traffic Engineering — Queuing Delay',
    text:
      'Morning peak traffic upstream of a toll booth is given below. The toll plaza consists of three booths, each of which can handle an average of one vehicle every 6 s. Using queuing diagram, determine the total delay.\n\n' +
      '| Time period | 10-min. volume | Cumulative volume |\n' +
      '|:---|:---:|:---:|\n' +
      '| 7:00-7:10 | 200 | 200 |\n' +
      '| 7:10-7:20 | 400 | 600 |\n' +
      '| 7:20-7:30 | 500 | 1,100 |\n' +
      '| 7:30-7:40 | 250 | 1,350 |\n' +
      '| 7:40-7:50 | 200 | 1,550 |\n' +
      '| 7:50-8:00 | 150 | 1,700 |',
    options: opt('133 veh-h', '144 veh-h', '155 veh-h', '166 veh-h'),
    correctAnswer: 'A',
    solution: { ...sol(47), finalAnswer: '133 veh-h (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q48',
    number: 48,
    pageNumber: 251,
    category: 'Transportation — Signal Progression',
    text:
      'The north-south streets of a grid have block length of 140 m and the east-west streets have block lengths of 240 m. Desired speeds of progression are 50 km/h east-west. Determine the actual speed of progression for two-way progression in both orientation of the grid. Round the cycle to the nearest 5 s.\n\n' +
      'Hint: Convert desired speeds of progression to m/s and determine cycle lengths, $C = 2NL/s$',
    options: opt(
      '43.4 km/h North-South, 50.2 East-West',
      '50.2 km/h North-South, 43.2 km/h East-West',
      '50.4 km/h North-South, 43.2 km/h East-West',
      '43.2 km/h North-South, 50.4 East-West',
    ),
    correctAnswer: 'C',
    solution: { ...sol(48), finalAnswer: '50.4 km/h N-S, 43.2 km/h E-W (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q49',
    number: 49,
    pageNumber: 251,
    category: 'Concrete — Unit Mixes',
    text:
      'A concrete-unit mix contains 136 kg of gravel, 95 kg of sand, 42.5 kg of Portland cement and 22.5 kg of water, plus 5% entrained air. How many unit mixes are required to build a low retaining wall, 28.6 m × 1.22 m × 0.305 m? The aggregate is non-porous.\n\n' +
      '| Material | True Specific Gravity | Bulk Specific Gravity |\n' +
      '|:---|:---:|:---:|\n' +
      '| Gravel | 2.60 | 1.76 |\n' +
      '| Sand | 2.65 | 1.68 |\n' +
      '| Cement | 3.25 | 1.50 |',
    options: opt('81.7 unit mixes', '87.1 unit mixes', '85.2 unit mixes', '82.5 unit mixes'),
    correctAnswer: 'A',
    solution: { ...sol(49), finalAnswer: '81.7 unit mixes (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q50',
    number: 50,
    pageNumber: 251,
    category: 'Construction Safety — Definitions',
    text:
      'These are circumstances or deviation from standard condition which could permit an occurrence of accident or incident.',
    options: opt('hazard', 'unsafe act', 'unsafe condition', 'risk'),
    correctAnswer: 'A',
    solution: { ...sol(50), finalAnswer: 'Hazard (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q51',
    number: 51,
    pageNumber: 251,
    category: 'Coastal Engineering — Environment',
    text: 'It is the single most important environmental factor in the broad field of coastal engineering.',
    options: opt('coastal erosion', 'sand', 'sea', 'wave'),
    correctAnswer: 'D',
    solution: { ...sol(51), finalAnswer: 'Wave (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q52',
    number: 52,
    pageNumber: 251,
    category: 'Concrete — Curing',
    text:
      'It is a construction operation that concrete should be protected so that moisture is not lost during the early stages of hardening, and it should be kept at a temperature that will promote hydration and also protect against injury from subsequent construction activities.',
    options: opt('Curing', 'Scaling', 'Sprinkling', 'Ponding'),
    correctAnswer: 'A',
    solution: { ...sol(52), finalAnswer: 'Curing (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q53',
    number: 53,
    pageNumber: 252,
    category: 'Construction Safety — Definitions',
    text:
      'It is combination of the likelihood of an occurrence of a hazardous event with specified period in specified circumstances and the severity of injury or damage of health of the people, property, environment or any combination of these caused by the event.',
    options: opt('Hazard', 'Unsafe Condition', 'Risk', 'Unsafe Act'),
    correctAnswer: 'C',
    solution: { ...sol(53), finalAnswer: 'Risk (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q54',
    number: 54,
    pageNumber: 252,
    category: 'Coastal Engineering — Design Conditions',
    text: 'What is the worst condition which should be considered in relation to the design of coastal defence works?',
    options: opt(
      'Position in relation to still water level',
      'Offshore wave climate',
      'Extreme wave height',
      'Combination of unusually high sea level with severe wave action',
    ),
    correctAnswer: 'D',
    solution: { ...sol(54), finalAnswer: 'Combination of unusually high sea level with severe wave action (Option D)' },
  },
];

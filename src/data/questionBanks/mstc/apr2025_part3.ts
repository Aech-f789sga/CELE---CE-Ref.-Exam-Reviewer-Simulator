import { Question } from '../../../types/exam';
import { solved } from './apr2025Helpers';

export const MSTC_APR2025_PART3: Question[] = [
  // Item 28
  {
    id: 'mstc-apr2025-q28',
    number: 28,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Discrete Mathematics - Combinatorics & Password Possibilities',
    text: 'Each user on a computer system has a password, which is six to eight characters long, where each character is an uppercase letter or a digit. Each password must contain at least one digit. How many possible passwords are there?',
    options: [
      { label: 'A', text: '(36⁵ - 26⁵) + (36⁶ - 26⁶) + (36⁷ - 26⁷)' },
      { label: 'B', text: '(36⁶ - 26⁶) + (36⁷ - 26⁷) + (36⁸ - 26⁸)' },
      { label: 'C', text: '(36⁷ - 26⁷) + (36⁸ - 26⁸) + (36⁹ - 26⁹)' },
      { label: 'D', text: '(36⁸ - 26⁸) + (36⁵ - 26⁵) + (36⁶ - 26⁶)' },
    ],
    ...solved(28, 'B', '(36⁶ - 26⁶) + (36⁷ - 26⁷) + (36⁸ - 26⁸) (Option B)'),
  },

  // Item 29
  {
    id: 'mstc-apr2025-q29',
    number: 29,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Probability & Statistics - Binomial Distribution (Defective Bolts)',
    text: 'Five percent of a large batch of high-strength steel bolts purchased for bridge construction are defective. If seven bolts are randomly sampled, what is the probability that exactly three will be defective?\n\nHint: P{x} = f(x) = (n C x) p^x q^{n-x}',
    options: [
      { label: 'A', text: '0.00536' },
      { label: 'B', text: '0.00365' },
      { label: 'C', text: '0.00356' },
      { label: 'D', text: '0.00653' },
    ],
    ...solved(29, 'C', '0.00356 (Option C)'),
  },

  // Item 30
  {
    id: 'mstc-apr2025-q30',
    number: 30,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Probability & Statistics - Binomial Forecast Accuracy',
    text: 'The local weather person has been accurate in her "within 2 degrees" temperature forecast 80% of the time. Find the probability that she is accurate exactly 3 of the next 5 days.\n\nHint: P(x) = (n C x) p^x q^{n-x}',
    options: [
      { label: 'A', text: '0.2084' },
      { label: 'B', text: '0.2480' },
      { label: 'C', text: '0.2408' },
      { label: 'D', text: '0.2048' },
    ],
    ...solved(30, 'D', '0.2048 (Option D)'),
  },

  // Item 31
  {
    id: 'mstc-apr2025-q31',
    number: 31,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Set Theory & Discrete Mathematics - Inclusion-Exclusion Principle',
    text: 'In a discrete mathematics class, every student is a major in computer science or mathematics, or both. The number of students having computer science as a major (possibly along with mathematics) is 25; the number of students having mathematics as a major (possibly along with computer science) is 13; and the number of students majoring in both computer science and mathematics is 8. How many students are in this class?',
    options: [
      { label: 'A', text: '25' },
      { label: 'B', text: '8' },
      { label: 'C', text: '30' },
      { label: 'D', text: '13' },
    ],
    ...solved(31, 'C', '30 (Option C)'),
  },

  // Item 32
  {
    id: 'mstc-apr2025-q32',
    number: 32,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Statistics & Data Analysis - Scatterplot & Slope of Best Fit Line',
    text: 'The scatterplot above shows the fuel efficiency, in miles per gallon, of a variety of vehicles weighing between 1.5 and 4 tons. Based on the line of best fit to the data represented, which of the following is the closest to the decrease in the fuel efficiency of a vehicle per additional ton of weight?',
    figureCaption: 'Figure 32: Vehicle fuel efficiency vs vehicle weight scatterplot',
    figureSvg: `<svg viewBox="0 0 460 320" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="250" y="305" text-anchor="middle" font-family="monospace" font-size="11" fill="#475569">Weight (in Tons)</text>
  <text x="25" y="160" text-anchor="middle" transform="rotate(-90 25 160)" font-family="monospace" font-size="11" fill="#475569">Miles per gallon</text>

  <!-- Grid lines -->
  <g stroke="#e2e8f0" stroke-width="1">
    <line x1="80" y1="50" x2="420" y2="50"/>
    <line x1="80" y1="90" x2="420" y2="90"/>
    <line x1="80" y1="130" x2="420" y2="130"/>
    <line x1="80" y1="170" x2="420" y2="170"/>
    <line x1="80" y1="210" x2="420" y2="210"/>
    <line x1="80" y1="250" x2="420" y2="250"/>
    
    <line x1="80" y1="50" x2="80" y2="250"/>
    <line x1="148" y1="50" x2="148" y2="250"/>
    <line x1="216" y1="50" x2="216" y2="250"/>
    <line x1="284" y1="50" x2="284" y2="250"/>
    <line x1="352" y1="50" x2="352" y2="250"/>
    <line x1="420" y1="50" x2="420" y2="250"/>
  </g>

  <!-- Axes -->
  <line x1="80" y1="250" x2="420" y2="250" stroke="#1e293b" stroke-width="2"/>
  <line x1="80" y1="50" x2="80" y2="250" stroke="#1e293b" stroke-width="2"/>

  <!-- Y labels -->
  <text x="70" y="254" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">10</text>
  <text x="70" y="214" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">15</text>
  <text x="70" y="174" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">20</text>
  <text x="70" y="134" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">25</text>
  <text x="70" y="94" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">30</text>
  <text x="70" y="54" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">35</text>

  <!-- X labels -->
  <text x="80" y="268" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">1.5</text>
  <text x="148" y="268" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">2.0</text>
  <text x="216" y="268" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">2.5</text>
  <text x="284" y="268" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">3.0</text>
  <text x="352" y="268" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">3.5</text>
  <text x="420" y="268" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">4.0</text>

  <!-- Scatter points -->
  <circle cx="140" cy="65" r="3" fill="#1e293b"/>
  <circle cx="142" cy="85" r="3" fill="#1e293b"/>
  <circle cx="148" cy="75" r="3" fill="#1e293b"/>
  <circle cx="180" cy="105" r="3" fill="#1e293b"/>
  <circle cx="190" cy="140" r="3" fill="#1e293b"/>
  <circle cx="216" cy="118" r="3" fill="#1e293b"/>
  <circle cx="240" cy="155" r="3" fill="#1e293b"/>
  <circle cx="250" cy="115" r="3" fill="#1e293b"/>
  <circle cx="280" cy="148" r="3" fill="#1e293b"/>
  <circle cx="290" cy="182" r="3" fill="#1e293b"/>
  <circle cx="310" cy="165" r="3" fill="#1e293b"/>
  <circle cx="320" cy="190" r="3" fill="#1e293b"/>
  <circle cx="340" cy="170" r="3" fill="#1e293b"/>
  <circle cx="350" cy="210" r="3" fill="#1e293b"/>
  <circle cx="370" cy="180" r="3" fill="#1e293b"/>
  <circle cx="390" cy="225" r="3" fill="#1e293b"/>
  <circle cx="410" cy="215" r="3" fill="#1e293b"/>

  <!-- Best fit regression line -->
  <line x1="120" y1="60" x2="420" y2="230" stroke="#dc2626" stroke-width="2.5"/>
</svg>`,
    options: [
      { label: 'A', text: '0.67' },
      { label: 'B', text: '1.60' },
      { label: 'C', text: '3.67' },
      { label: 'D', text: '8.80' },
    ],
    ...solved(32, 'D', '8.80 (Option D)'),
  },

  // Item 33
  {
    id: 'mstc-apr2025-q33',
    number: 33,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Traffic Engineering & Queueing Theory - Ramp Metering Queue Probability',
    text: 'A ramp has an arrival rate of 200 cars an hour and the ramp meter only permits 250 cars per hour, while the ramp can store 40 cars before spilling over. What is the probability that it is half-full?\n\nHint: P(n) = [(1 - ρ) / (1 - ρ^{N+1})] (ρ)^n',
    options: [
      { label: 'A', text: '0.0320' },
      { label: 'B', text: '0.0230' },
      { label: 'C', text: '0.0023' },
      { label: 'D', text: '0.0032' },
    ],
    ...solved(33, 'C', '0.0023 (Option C)'),
  },

  // Item 34
  {
    id: 'mstc-apr2025-q34',
    number: 34,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Surveying & Error Theory - Total Angle Error in Triangle',
    text: 'Three angles of a triangle each have a standard error of 2". What is the total error (σ_T) in the triangle?',
    options: [
      { label: 'A', text: '3.0"' },
      { label: 'B', text: '2.0"' },
      { label: 'C', text: '3.5"' },
      { label: 'D', text: '2.5"' },
    ],
    ...solved(34, 'C', '3.5" (Option C)'),
  },

  // Item 35
  {
    id: 'mstc-apr2025-q35',
    number: 35,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Probability & Statistics - Normal Distribution Confidence Limits',
    text: 'The mean income per household in a certain state is $9500 with a standard deviation of $1750. The middle 95% of incomes are between what two values?',
    options: [
      { label: 'A', text: '$5422 and $13,578' },
      { label: 'B', text: '$6070 and $12,930' },
      { label: 'C', text: '$6621 and $12,379' },
      { label: 'D', text: '$7260 and $11,740' },
    ],
    ...solved(35, 'B', '$6070 and $12,930 (Option B)'),
  },

  // Item 36
  {
    id: 'mstc-apr2025-q36',
    number: 36,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Statics & Mechanics - Symmetric Cable Equilibrium',
    text: 'A 1250-lb weight hangs from two ropes of equal lengths suspended from a support as shown. Find the tension in each rope.',
    figureCaption: 'Figure 36: Weight supported by two symmetric ropes angled at 55.0° to horizontal',
    figureSvg: `<svg viewBox="0 0 460 260" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  
  <!-- Horizontal ceiling beam -->
  <rect x="100" y="30" width="260" height="15" fill="#64748b" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="80" y1="45" x2="380" y2="45" stroke="#1e293b" stroke-width="2"/>

  <!-- Left Cable -->
  <line x1="150" y1="45" x2="230" y2="150" stroke="#1e293b" stroke-width="2.5"/>
  <!-- Right Cable -->
  <line x1="310" y1="45" x2="230" y2="150" stroke="#1e293b" stroke-width="2.5"/>

  <!-- Joint A -->
  <circle cx="230" cy="150" r="4.5" fill="#dc2626"/>
  <text x="245" y="155" font-family="monospace" font-size="12" font-weight="bold" fill="#1e293b">A</text>

  <!-- Hanging Weight -->
  <line x1="230" y1="150" x2="230" y2="185" stroke="#1e293b" stroke-width="2.5"/>
  <rect x="195" y="185" width="70" height="40" fill="#f1f5f9" stroke="#1e293b" stroke-width="2" rx="4"/>
  <text x="230" y="210" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#0f172a">1250 lb</text>

  <!-- Angle 55.0 deg indicators -->
  <path d="M 175,45 A 25 25 0 0 1 168,68" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <text x="175" y="65" font-family="monospace" font-size="11" font-weight="bold" fill="#2563eb">55.0°</text>

  <path d="M 285,45 A 25 25 0 0 0 292,68" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <text x="285" y="65" font-family="monospace" font-size="11" font-weight="bold" fill="#2563eb">55.0°</text>

  <!-- Tension Labels -->
  <text x="175" y="115" font-family="monospace" font-size="11" font-weight="bold" fill="#dc2626">T₁</text>
  <text x="280" y="115" font-family="monospace" font-size="11" font-weight="bold" fill="#dc2626">T₂</text>
</svg>`,
    options: [
      { label: 'A', text: '637 lb' },
      { label: 'B', text: '736 lb' },
      { label: 'C', text: '763 lb' },
      { label: 'D', text: '637 lb' },
    ],
    ...solved(36, 'C', '763 lb (Option C)'),
  },

  // Item 37
  {
    id: 'mstc-apr2025-q37',
    number: 37,
    pageNumber: 11,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Physics & Dynamics - Centripetal Acceleration & Apparent Weightlessness',
    text: 'How many revolutions per minute would a 15 m diameter Ferris wheel need to make for the passengers to feel "weightless" at the topmost point?',
    options: [
      { label: 'A', text: '6 rpm' },
      { label: 'B', text: '5.5 rpm' },
      { label: 'C', text: '8.6 rpm' },
      { label: 'D', text: '11 rpm' },
    ],
    ...solved(37, 'D', '11 rpm (Option D)'),
  },

  // Item 38
  {
    id: 'mstc-apr2025-q38',
    number: 38,
    pageNumber: 11,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Highway Engineering & Dynamics - Vehicle Curve Skidding & Friction',
    text: 'A 1000-kg car rounds a curve on a flat road of radius 50 m at a speed of 15 m/s (54 km/h). Will the car follow the curve, or will it skid? Assume the pavement is dry and the coefficient of static friction is μ_s = 0.60.',
    options: [
      { label: 'A', text: 'Since a friction force of only 4500 N is needed the car can follow the curve.' },
      { label: 'B', text: 'Since a friction force of only 5880 N is needed the car can follow the curve.' },
      { label: 'C', text: 'Since a friction force of 4500 N is needed the car will skid.' },
      { label: 'D', text: 'Since a friction force of 5880 N is needed the car will skid.' },
    ],
    ...solved(38, 'A', 'Since a friction force of only 4500 N is needed the car can follow the curve. (Option A)'),
  },

  // Item 39
  {
    id: 'mstc-apr2025-q39',
    number: 39,
    pageNumber: 11,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Surveying & Geodesy - Mean Sea Level Distance Correction',
    text: 'The distance from A to B taken at elevation 1200 m above sea level is 6,750 m. Determine the sea-level distance. (Use radius of earth = 6,400 km).\n\nHint: C_{msl} = hL/R',
    options: [
      { label: 'A', text: '6748.77 m' },
      { label: 'B', text: '6751.27 m' },
      { label: 'C', text: '6748.73 m' },
      { label: 'D', text: '6751.23 m' },
    ],
    ...solved(39, 'C', '6748.73 m (Option C)'),
  },

  // Item 40
  {
    id: 'mstc-apr2025-q40',
    number: 40,
    pageNumber: 11,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Surveying & Traverse Computations - Double Meridian Distance (DMD)',
    text: 'Using the DMDs, calculate the area within the traverse.\n\n| Course | Balanced Departure (ft) | Balanced Latitude (ft) |\n|---|---|---|\n| AB | +517.44 | -388.84 |\n| BC | +5.96 | -202.95 |\n| CD | +192.88 | +694.02 |\n| DE | -590.57 | +153.69 |\n| EA | +125.72 | -255.93 |',
    options: [
      { label: 'A', text: '276,002 ft²' },
      { label: 'B', text: '272,060 ft²' },
      { label: 'C', text: '276,020 ft²' },
      { label: 'D', text: '272,600 ft²' },
    ],
    ...solved(40, 'D', '272,600 ft² (Option D)'),
  },
];

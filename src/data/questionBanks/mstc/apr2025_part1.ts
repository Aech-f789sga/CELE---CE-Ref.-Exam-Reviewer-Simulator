import { Question } from '../../../types/exam';
import { solved } from './apr2025Helpers';

export const MSTC_APR2025_PART1: Question[] = [
  // Item 1
  {
    id: 'mstc-apr2025-q1',
    number: 1,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Applied Mathematics - Cost Functions & Inequalities',
    text: 'A long-distance phone call cost 36 cents for the first three minutes and 11 cents for each additional minute. How long can you talk for less than $2?',
    options: [
      { label: 'A', text: '17' },
      { label: 'B', text: '18' },
      { label: 'C', text: '19' },
      { label: 'D', text: '16' },
    ],
    ...solved(1, 'A', '17 (Option A)'),
  },

  // Item 2
  {
    id: 'mstc-apr2025-q2',
    number: 2,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Differential Calculus - Marginal Output & Incremental Change',
    text: 'It is estimated that the weekly output at a certain plant is Q(x) = 50x² + 9,000x units, where x is the number of workers employed at the plant. Currently there are 30 workers employed at the plant. Use calculus to estimate the change in the weekly output that will result from the addition of 1 worker to the force.',
    options: [
      { label: 'A', text: '14,000' },
      { label: 'B', text: '12,000' },
      { label: 'C', text: '13,000' },
      { label: 'D', text: '11,000' },
    ],
    ...solved(2, 'B', '12,000 (Option B)'),
  },

  // Item 3
  {
    id: 'mstc-apr2025-q3',
    number: 3,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Applied Mathematics - Nested Stacks & Linear Functions',
    text: 'The figure shows three stacks of identical storage containers. Figure I illustrates how a container stacks inside the one below it. Figure II shows a stack of four containers with a height of 36 inches, and Figure III shows a stack of six containers with a height of 42 inches. Which of the following functions gives the height in inches, f(n), of a stack of n storage containers, for all n ≥ 1?',
    figureCaption: 'Figure 3: Stacks of nested storage containers (Figure I, II, and III)',
    figureSvg: `<svg viewBox="0 0 460 300" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="20" y1="260" x2="440" y2="260" stroke="#475569" stroke-width="2"/>
  
  <!-- Figure I: Single Container -->
  <g transform="translate(60, 160)">
    <polygon points="10,0 50,0 44,70 16,70" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
    <rect x="6" y="-12" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <text x="30" y="95" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#334155">Figure I</text>
  </g>

  <!-- Figure II: Stack of 4 Containers -->
  <g transform="translate(180, 70)">
    <polygon points="10,60 50,60 44,130 16,130" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
    <rect x="6" y="48" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <rect x="6" y="32" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <rect x="6" y="16" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <rect x="6" y="0" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <!-- Dimension 36" -->
    <line x1="70" y1="0" x2="70" y2="130" stroke="#2563eb" stroke-width="1.5"/>
    <line x1="65" y1="0" x2="75" y2="0" stroke="#2563eb" stroke-width="1.5"/>
    <line x1="65" y1="130" x2="75" y2="130" stroke="#2563eb" stroke-width="1.5"/>
    <text x="82" y="70" font-family="monospace" font-size="11" font-weight="bold" fill="#2563eb">36"</text>
    <text x="30" y="155" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#334155">Figure II</text>
  </g>

  <!-- Figure III: Stack of 6 Containers -->
  <g transform="translate(320, 40)">
    <polygon points="10,90 50,90 44,160 16,160" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
    <rect x="6" y="78" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <rect x="6" y="62" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <rect x="6" y="46" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <rect x="6" y="30" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <rect x="6" y="14" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <rect x="6" y="-2" width="48" height="12" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
    <!-- Dimension 42" -->
    <line x1="70" y1="-2" x2="70" y2="160" stroke="#2563eb" stroke-width="1.5"/>
    <line x1="65" y1="-2" x2="75" y2="-2" stroke="#2563eb" stroke-width="1.5"/>
    <line x1="65" y1="160" x2="75" y2="160" stroke="#2563eb" stroke-width="1.5"/>
    <text x="82" y="85" font-family="monospace" font-size="11" font-weight="bold" fill="#2563eb">42"</text>
    <text x="30" y="185" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#334155">Figure III</text>
  </g>
</svg>`,
    options: [
      { label: 'A', text: 'f(n) = 3n + 12' },
      { label: 'B', text: 'f(n) = 3n + 24' },
      { label: 'C', text: 'f(n) = 3n + 27' },
      { label: 'D', text: 'f(n) = 6n + 12' },
    ],
    ...solved(3, 'B', 'f(n) = 3n + 24 (Option B)'),
  },

  // Item 4
  {
    id: 'mstc-apr2025-q4',
    number: 4,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Analytical Geometry & Kinematics - Parabolic Trajectory',
    text: 'The graph below shows the partial trajectory of a projectile thrown from an elevated platform. If y represents vertical distance and x represents horizontal distance, then which of the following equations could represent the trajectory of the projectile shown above?',
    figureCaption: 'Figure 4: Partial Trajectory of a Projectile (Vertical Distance in ft vs Horizontal Distance in ft)',
    figureSvg: `<svg viewBox="0 0 460 320" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="230" y="25" text-anchor="middle" font-family="monospace" font-size="13" font-weight="bold" fill="#0f172a">Partial Trajectory of a Projectile</text>
  
  <!-- Y-axis Label -->
  <text x="25" y="160" text-anchor="middle" transform="rotate(-90 25 160)" font-family="monospace" font-size="11" fill="#475569">Vertical Distance (in feet)</text>
  <!-- X-axis Label -->
  <text x="250" y="305" text-anchor="middle" font-family="monospace" font-size="11" fill="#475569">Horizontal Distance (in feet)</text>

  <!-- Grid lines & Axes -->
  <g stroke="#e2e8f0" stroke-width="1">
    <line x1="80" y1="50" x2="420" y2="50"/>
    <line x1="80" y1="80" x2="420" y2="80"/>
    <line x1="80" y1="110" x2="420" y2="110"/>
    <line x1="80" y1="140" x2="420" y2="140"/>
    <line x1="80" y1="170" x2="420" y2="170"/>
    <line x1="80" y1="200" x2="420" y2="200"/>
    <line x1="80" y1="230" x2="420" y2="230"/>
    <line x1="80" y1="260" x2="420" y2="260"/>
    
    <line x1="80" y1="50" x2="80" y2="260"/>
    <line x1="125" y1="50" x2="125" y2="260"/>
    <line x1="170" y1="50" x2="170" y2="260"/>
    <line x1="215" y1="50" x2="215" y2="260"/>
    <line x1="260" y1="50" x2="260" y2="260"/>
    <line x1="305" y1="50" x2="305" y2="260"/>
    <line x1="350" y1="50" x2="350" y2="260"/>
    <line x1="395" y1="50" x2="395" y2="260"/>
  </g>
  
  <!-- Main Axes -->
  <line x1="80" y1="260" x2="420" y2="260" stroke="#1e293b" stroke-width="2"/>
  <line x1="80" y1="50" x2="80" y2="260" stroke="#1e293b" stroke-width="2"/>

  <!-- Y-axis Numbers -->
  <text x="70" y="264" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">0</text>
  <text x="70" y="234" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">5</text>
  <text x="70" y="204" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">10</text>
  <text x="70" y="174" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">15</text>
  <text x="70" y="144" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">20</text>
  <text x="70" y="114" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">25</text>
  <text x="70" y="84" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">30</text>
  <text x="70" y="54" text-anchor="end" font-family="monospace" font-size="10" fill="#334155">35</text>

  <!-- X-axis Numbers -->
  <text x="80" y="278" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">0</text>
  <text x="125" y="278" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">0.5</text>
  <text x="170" y="278" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">1.0</text>
  <text x="215" y="278" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">1.5</text>
  <text x="260" y="278" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">2.0</text>
  <text x="305" y="278" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">2.5</text>
  <text x="350" y="278" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">3.0</text>
  <text x="395" y="278" text-anchor="middle" font-family="monospace" font-size="10" fill="#334155">3.5</text>

  <!-- Parabola Plot curve: y = -5x^2 + 20x + 15 -->
  <!-- x=0 -> y=15 (80, 170) -->
  <!-- x=1.0 -> y=30 (170, 80) -->
  <!-- x=2.0 -> y=35 (260, 50) vertex -->
  <!-- x=3.0 -> y=30 (350, 80) -->
  <!-- x=3.5 -> y=23.75 (395, 117.5) -->
  <path d="M 80,170 Q 170,30 260,50 T 395,117.5" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <circle cx="80" cy="170" r="3.5" fill="#1e40af"/>
  <circle cx="125" cy="117.5" r="3.5" fill="#1e40af"/>
  <circle cx="170" cy="80" r="3.5" fill="#1e40af"/>
  <circle cx="215" cy="57.5" r="3.5" fill="#1e40af"/>
  <circle cx="260" cy="50" r="3.5" fill="#dc2626"/>
  <circle cx="305" cy="57.5" r="3.5" fill="#1e40af"/>
  <circle cx="350" cy="80" r="3.5" fill="#1e40af"/>
  <circle cx="395" cy="117.5" r="3.5" fill="#1e40af"/>
</svg>`,
    options: [
      { label: 'A', text: 'y = -5x² + 20x + 15' },
      { label: 'B', text: 'y = 5x² + 20x - 15' },
      { label: 'C', text: 'y = -5x² - 20x - 15' },
      { label: 'D', text: 'y = 5x² + 20x + 15' },
    ],
    ...solved(4, 'A', 'y = -5x² + 20x + 15 (Option A)'),
  },

  // Item 5
  {
    id: 'mstc-apr2025-q5',
    number: 5,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Mechanics & Polynomial Equations - Beam Deflection',
    text: 'A steel beam is supported by two pilings 200 feet apart. If a weight is placed x feet from the piling on the left, a vertical deflection d equals 0.0000008x²(200 - x). How far is the weight if the vertical deflection is 0.8 feet?',
    figureCaption: 'Figure 5: Steel beam deflection between two pilings 200 ft apart',
    figureSvg: `<svg viewBox="0 0 460 220" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  
  <!-- Left Piling -->
  <rect x="50" y="70" width="24" height="110" fill="#94a3b8" stroke="#1e293b" stroke-width="2"/>
  <!-- Right Piling -->
  <rect x="386" y="70" width="24" height="110" fill="#94a3b8" stroke="#1e293b" stroke-width="2"/>

  <!-- Deflected Beam curve -->
  <path d="M 62,80 Q 230,135 398,80" fill="none" stroke="#1e293b" stroke-width="6"/>
  <!-- Original horizontal reference -->
  <line x1="62" y1="80" x2="398" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- Load point & arrow -->
  <g transform="translate(230, 75)">
    <line x1="0" y1="-35" x2="0" y2="30" stroke="#dc2626" stroke-width="2.5"/>
    <polygon points="-5,30 5,30 0,40" fill="#dc2626"/>
    <!-- Deflection arrow d -->
    <line x1="15" y1="5" x2="15" y2="33" stroke="#2563eb" stroke-width="1.5"/>
    <polygon points="12,5 18,5 15,0" fill="#2563eb"/>
    <polygon points="12,33 18,33 15,38" fill="#2563eb"/>
    <text x="25" y="22" font-family="monospace" font-size="12" font-weight="bold" fill="#2563eb">d</text>
  </g>

  <!-- Distance x Dimension -->
  <line x1="62" y1="45" x2="230" y2="45" stroke="#475569" stroke-width="1.5"/>
  <line x1="62" y1="40" x2="62" y2="50" stroke="#475569" stroke-width="1.5"/>
  <line x1="230" y1="40" x2="230" y2="50" stroke="#475569" stroke-width="1.5"/>
  <text x="146" y="38" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#475569">x</text>

  <!-- 200 ft Span Dimension -->
  <line x1="62" y1="195" x2="398" y2="195" stroke="#475569" stroke-width="1.5"/>
  <line x1="62" y1="190" x2="62" y2="200" stroke="#475569" stroke-width="1.5"/>
  <line x1="398" y1="190" x2="398" y2="200" stroke="#475569" stroke-width="1.5"/>
  <text x="230" y="190" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#475569">200 ft</text>
</svg>`,
    options: [
      { label: 'A', text: '150 ft' },
      { label: 'B', text: '125 ft' },
      { label: 'C', text: '100 ft' },
      { label: 'D', text: '175 ft' },
    ],
    ...solved(5, 'C', '100 ft (Option C)'),
  },

  // Item 6
  {
    id: 'mstc-apr2025-q6',
    number: 6,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Transportation & Highway Safety - Crash Reduction Factors',
    text: 'At a single location, three countermeasures with CRs of 40%, 28%, and 20% are proposed. Determine the overall CRF if all countermeasures are used.\n\nHint: $$CR = 1 - \\prod_{i=1}^m (1 - CR_i)$$',
    options: [
      { label: 'A', text: '0.55' },
      { label: 'B', text: '0.44' },
      { label: 'C', text: '0.66' },
      { label: 'D', text: '0.33' },
    ],
    ...solved(6, 'C', '0.66 (Option C)'),
  },

  // Item 7
  {
    id: 'mstc-apr2025-q7',
    number: 7,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Analytic Geometry - Equation of a Circle',
    text: 'A circle graphed in the xy-plane has the equation x² + y² - 4x + 2y - 4 = 0. Which of the following equivalent forms of the equation of the circle has the square of the radius as a coefficient or constant?',
    options: [
      { label: 'A', text: 'x² + y² - 4x + 2y - 1 = 3' },
      { label: 'B', text: 'y² + 2y - 2 = 2 + 4x - x²' },
      { label: 'C', text: '(x - 2)² + (y + 1)² - 4 = 5' },
      { label: 'D', text: '(x - 2)² + (y + 1)² = 9' },
    ],
    ...solved(7, 'D', '(x - 2)² + (y + 1)² = 9 (Option D)'),
  },

  // Item 8
  {
    id: 'mstc-apr2025-q8',
    number: 8,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Applied Mathematics - Matrix Operations in Production Cost',
    text: 'The number of hours of labor required to manufacture one sofa of various sizes is summarized in matrix $L$:\n\n| Sofa Size | Cutting | Assembly | Packing |\n| :--- | :---: | :---: | :---: |\n| Small | 1.4 hr | 0.7 hr | 0.3 hr |\n| Medium | 1.8 hr | 1.4 hr | 0.3 hr |\n| Large | 2.7 hr | 2.8 hr | 0.5 hr |\n\nThe hourly labor rates for cutting, assembly, and packing at the Ames City Plant and at the Bay City Plant are given in matrix $C$:\n\n| Department | Ames City | Bay City |\n| :--- | :---: | :---: |\n| Cutting | $14 | $12 |\n| Assembly | $10 | $9 |\n| Packaging | $7 | $5 |\n\nWhat is the total labor cost for manufacturing a small-sized sofa at the Ames City plant?',
    options: [
      { label: 'A', text: '$28.70' },
      { label: 'B', text: '$27.80' },
      { label: 'C', text: '$28.07' },
      { label: 'D', text: '$20.78' },
    ],
    ...solved(8, 'A', '$28.70 (Option A)'),
  },

  // Item 9
  {
    id: 'mstc-apr2025-q9',
    number: 9,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Strength of Materials - Ductility & Percent Reduction in Area',
    text: 'A cylindrical specimen of steel having an original diameter of 12.8 mm is tensile tested to fracture and found to have an engineering fracture strength $\\sigma_f$ of 460 MPa. If its cross-sectional diameter at fracture is 10.7 mm, determine the ductility in terms of percent reduction in area.\n\nHint: $\\%RA = \\frac{A_0 - A_f}{A_0} \\times 100$',
    options: [
      { label: 'A', text: '20%' },
      { label: 'B', text: '10%' },
      { label: 'C', text: '30%' },
      { label: 'D', text: '40%' },
    ],
    ...solved(9, 'C', '30% (Option C)'),
  },

  // Item 10
  {
    id: 'mstc-apr2025-q10',
    number: 10,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Geometry - Polygon Angles & Arithmetic Sequences',
    text: 'The measures of the angles of a polygon form an arithmetic sequence. The least measurement in the sequence is 85°. The greatest measurement is 215°. Find the number of sides in this polygon.',
    options: [
      { label: 'A', text: '16' },
      { label: 'B', text: '14' },
      { label: 'C', text: '10' },
      { label: 'D', text: '12' },
    ],
    ...solved(10, 'D', '12 (Option D)'),
  },

  // Item 11
  {
    id: 'mstc-apr2025-q11',
    number: 11,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Trigonometry - Law of Cosines & Ambiguous Case',
    text: 'Visitors near a certain national park can tune to a local radio station to find out about the activities that are happening in the park. The transmission tower for the radio station is along Park Road about 30 miles from the intersection of this road and the interstate. The interstate and the road form a 47° angle. If the transmitter has a range of 25 miles, how far along the interstate can the passengers in a car hear the broadcast?',
    figureCaption: 'Figure 11: Radio transmitter broadcast coverage along interstate',
    figureSvg: `<svg viewBox="0 0 460 260" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  
  <!-- Interstate (Horizontal road) -->
  <line x1="40" y1="210" x2="420" y2="210" stroke="#334155" stroke-width="3"/>
  <text x="70" y="195" font-family="monospace" font-size="11" fill="#475569">Interstate</text>

  <!-- Park Road (Angled road) -->
  <line x1="390" y1="210" x2="250" y2="60" stroke="#334155" stroke-width="2.5"/>
  <text x="345" y="125" font-family="monospace" font-size="11" fill="#475569" transform="rotate(-47 345 125)">Park Road (30 mi)</text>

  <!-- Intersection Angle 47 deg -->
  <path d="M 355,210 A 35 35 0 0 1 368,187" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <text x="350" y="200" font-family="monospace" font-size="10" font-weight="bold" fill="#2563eb">47°</text>

  <!-- Transmitter Point -->
  <circle cx="250" cy="60" r="5" fill="#dc2626"/>
  <text x="250" y="45" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#dc2626">Transmitter</text>

  <!-- Circular broadcast range (25 mi arc) -->
  <path d="M 120,210 A 140 140 0 0 1 340,210" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- Chord/Interstate Intersections (d1 and d2) -->
  <line x1="250" y1="60" x2="140" y2="210" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="250" y1="60" x2="330" y2="210" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="180" y="130" font-family="monospace" font-size="10" fill="#dc2626">25 mi</text>
  <text x="300" y="130" font-family="monospace" font-size="10" fill="#dc2626">25 mi</text>

  <!-- Coverage Length L on Interstate -->
  <line x1="140" y1="235" x2="330" y2="235" stroke="#2563eb" stroke-width="2"/>
  <line x1="140" y1="230" x2="140" y2="240" stroke="#2563eb" stroke-width="2"/>
  <line x1="330" y1="230" x2="330" y2="240" stroke="#2563eb" stroke-width="2"/>
  <text x="235" y="250" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#2563eb">L = 23.9 mi</text>
</svg>`,
    options: [
      { label: 'A', text: '23.9 miles' },
      { label: 'B', text: '29.3 miles' },
      { label: 'C', text: '39.2 miles' },
      { label: 'D', text: '32.9 miles' },
    ],
    ...solved(11, 'A', '23.9 miles (Option A)'),
  },

  // Item 12
  {
    id: 'mstc-apr2025-q12',
    number: 12,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Surveying & Geometry - Retaining Wall Dimensions & Angles',
    text: 'Find length x and angles α and β for the retaining wall.\nGiven: Total wall height = 24.50 m, top crest = 3.50 m, vertical drop = 4.00 m, total base width = 32.00 m, toe shelf = 3.00 m, toe height = 2.50 m.',
    figureCaption: 'Figure 12: Retaining wall geometry and dimensions',
    figureSvg: `<svg viewBox="0 0 460 300" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  
  <!-- Retaining Wall Cross Section -->
  <polygon points="120,40 160,40 160,85 360,225 390,225 390,250 120,250" fill="#f1f5f9" stroke="#1e293b" stroke-width="2.5"/>

  <!-- Right angle triangle dashed helper -->
  <line x1="160" y1="85" x2="160" y2="225" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="160" y1="225" x2="360" y2="225" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- Angle alpha and beta arcs -->
  <path d="M 160,65 A 20 20 0 0 1 175,95" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <text x="145" y="75" font-family="monospace" font-size="11" font-weight="bold" fill="#2563eb">α</text>

  <path d="M 345,225 A 20 20 0 0 1 350,215" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <text x="340" y="240" font-family="monospace" font-size="11" font-weight="bold" fill="#2563eb">β</text>

  <!-- Dimensions -->
  <!-- 24.50 m Total Height -->
  <line x1="90" y1="40" x2="90" y2="250" stroke="#475569" stroke-width="1.5"/>
  <line x1="85" y1="40" x2="95" y2="40" stroke="#475569" stroke-width="1.5"/>
  <line x1="85" y1="250" x2="95" y2="250" stroke="#475569" stroke-width="1.5"/>
  <text x="80" y="150" text-anchor="end" font-family="monospace" font-size="11" font-weight="bold" fill="#475569">24.50 m</text>

  <!-- 3.50 m Top Crest -->
  <line x1="120" y1="25" x2="160" y2="25" stroke="#475569" stroke-width="1.5"/>
  <text x="140" y="20" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#475569">3.50 m</text>

  <!-- 4.00 m Drop -->
  <text x="180" y="65" font-family="monospace" font-size="10" font-weight="bold" fill="#475569">4.00 m</text>

  <!-- Sloping length x -->
  <text x="270" y="145" font-family="monospace" font-size="12" font-weight="bold" fill="#dc2626">x</text>

  <!-- 3.00 m Toe Shelf & 2.50 m Toe Height -->
  <text x="375" y="215" font-family="monospace" font-size="10" font-weight="bold" fill="#475569">3.00 m</text>
  <text x="400" y="240" font-family="monospace" font-size="10" font-weight="bold" fill="#475569">2.50 m</text>

  <!-- 32.00 m Total Base -->
  <line x1="120" y1="275" x2="390" y2="275" stroke="#475569" stroke-width="1.5"/>
  <line x1="120" y1="270" x2="120" y2="280" stroke="#475569" stroke-width="1.5"/>
  <line x1="390" y1="270" x2="390" y2="280" stroke="#475569" stroke-width="1.5"/>
  <text x="255" y="290" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#475569">32.00 m</text>
</svg>`,
    options: [
      { label: 'A', text: 'x = 32.11 m, α = 122.25°, β = 144.78°' },
      { label: 'B', text: 'x = 31.21 m, α = 125.22°, β = 144.78°' },
      { label: 'C', text: 'x = 32.11 m, α = 122.25°, β = 147.48°' },
      { label: 'D', text: 'x = 31.21 m, α = 125.22°, β = 147.48°' },
    ],
    ...solved(12, 'B', 'x = 31.21 m, α = 125.22°, β = 144.78° (Option B)'),
  },

  // Item 13
  {
    id: 'mstc-apr2025-q13',
    number: 13,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Surveying & Trigonometry - Concyclic Observations & Mayon Smoke Height',
    text: "Immediately after Mayon Volcano showed telltale sights of activity the PHIVOLCS set up stations to monitor the volcano. Two such stations were located at points A and B, 7 km apart and on the same horizontal plane as the base of the volcano, B being closer to the volcano. From A, the angle of elevation of the top of Mayon Volcano is 8°. At the height of Mayon Volcano's wrath, the vertical smoke emitted from the volcano's crater subtended an angle of 64° on each stations A and B. Assuming the smoke and the two stations are on the same vertical plane, find the height of the smoke.",
    options: [
      { label: 'A', text: '36.42 km' },
      { label: 'B', text: '32.46 km' },
      { label: 'C', text: '32.64 km' },
      { label: 'D', text: '36.24 km' },
    ],
    ...solved(13, 'D', '36.24 km (Option D)'),
  },

  // Item 14
  {
    id: 'mstc-apr2025-q14',
    number: 14,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Calculus - Kinematics & Maximum Acceleration',
    text: 'The velocity function of a moving particle is v(t) = t³/3 - 2t² + 5 for 0 ≤ t ≤ 6. What is the maximum acceleration of the particle on the interval 0 ≤ t ≤ 6?',
    options: [
      { label: 'A', text: '5' },
      { label: 'B', text: '12' },
      { label: 'C', text: '-4' },
      { label: 'D', text: '8' },
    ],
    ...solved(14, 'B', '12 (Option B)'),
  },
];

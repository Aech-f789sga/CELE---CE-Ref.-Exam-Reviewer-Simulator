import { Question } from '../../../types/exam';

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
    correctAnswer: 'B',
    solution: {
      summary: 'For a password of length L with 26 letters and 10 digits (36 total characters), the total number of arrangements is 36^L, and the number of arrangements containing only letters (no digits) is 26^L. By complementary counting, valid passwords with at least one digit = 36^L - 26^L. Summing for lengths 6, 7, and 8 gives (36⁶ - 26⁶) + (36⁷ - 26⁷) + (36⁸ - 26⁸).',
      formulas: [
        'N = 26 + 10 = 36',
        'P_L = 36^L - 26^L',
        'P = P_6 + P_7 + P_8 = (36^6 - 26^6) + (36^7 - 26^7) + (36^8 - 26^8)',
      ],
      steps: [
        'Step 1: The alphabet of possible characters consists of 26 uppercase letters + 10 digits = 36 characters.',
        'Step 2: For any fixed length L, total possible strings = 36^L.',
        'Step 3: Strings containing zero digits (letters only) = 26^L.',
        'Step 4: Valid passwords containing at least one digit = 36^L - 26^L.',
        'Step 5: Summing over all allowed lengths L = 6, 7, and 8: (36⁶ - 26⁶) + (36⁷ - 26⁷) + (36⁸ - 26⁸) (Option B).',
      ],
      finalAnswer: '(36⁶ - 26⁶) + (36⁷ - 26⁷) + (36⁸ - 26⁸) (Option B)',
      pageNumber: 338,
    },
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
    correctAnswer: 'C',
    solution: {
      summary: 'Use the binomial probability distribution formula with n = 7, x = 3, p = 0.05 (probability of defective), and q = 1 - p = 0.95. P(3) = (7 C 3) (0.05)³ (0.95)⁴ = 35 × 0.000125 × 0.814506 = 0.00356.',
      formulas: [
        'P(x) = \\binom{n}{x} p^x q^{n-x}',
        'P(3) = \\binom{7}{3} (0.05)^3 (0.95)^{7-3}',
        '\\binom{7}{3} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35',
        'P(3) = 35 \\times (0.000125) \\times (0.814506) = 0.003563 \\approx 0.00356',
      ],
      steps: [
        'Step 1: Identify parameters: n = 7 bolts sampled, x = 3 defectives, p = 0.05, q = 1 - 0.05 = 0.95.',
        'Step 2: Calculate combinations: 7 C 3 = 35.',
        'Step 3: Calculate powers: (0.05)³ = 0.000125 and (0.95)⁴ = 0.814506.',
        'Step 4: Multiply: 35 × 0.000125 × 0.814506 = 0.00356 (Option C).',
      ],
      finalAnswer: '0.00356 (Option C)',
      pageNumber: 338,
    },
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
    correctAnswer: 'D',
    solution: {
      summary: 'Apply the binomial probability formula with n = 5 days, x = 3 accurate forecasts, p = 0.80, and q = 0.20. P(3) = (5 C 3) (0.80)³ (0.20)² = 10 × 0.512 × 0.04 = 0.2048.',
      formulas: [
        'P(x) = \\binom{n}{x} p^x q^{n-x}',
        'P(3) = \\binom{5}{3} (0.80)^3 (0.20)^{5-3}',
        '\\binom{5}{3} = \\frac{5 \\times 4}{2 \\times 1} = 10',
        'P(3) = 10 \\times (0.512) \\times (0.04) = 0.2048',
      ],
      steps: [
        'Step 1: Set up binomial parameters: n = 5, x = 3, p = 0.80, q = 1 - 0.80 = 0.20.',
        'Step 2: Number of combinations: 5 C 3 = 10.',
        'Step 3: Powers: (0.80)³ = 0.512, (0.20)² = 0.04.',
        'Step 4: Compute probability: 10 × 0.512 × 0.04 = 0.2048 (Option D).',
      ],
      finalAnswer: '0.2048 (Option D)',
      pageNumber: 338,
    },
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
    correctAnswer: 'C',
    solution: {
      summary: 'By the principle of inclusion and exclusion: |C ∪ M| = |C| + |M| - |C ∩ M|. With |C| = 25, |M| = 13, and |C ∩ M| = 8: |C ∪ M| = 25 + 13 - 8 = 30 students. Alternatively, via Venn diagram disjoint regions: (25 - 8) + 8 + (13 - 8) = 17 + 8 + 5 = 30.',
      formulas: [
        '|C \\cup M| = |C| + |M| - |C \\cap M|',
        '|C \\cup M| = 25 + 13 - 8 = 30',
        '(25 - 8) + 8 + (13 - 8) = 17 + 8 + 5 = 30',
      ],
      steps: [
        'Step 1: Let C = set of students majoring in Computer Science, |C| = 25.',
        'Step 2: Let M = set of students majoring in Mathematics, |M| = 13.',
        'Step 3: Double majors |C ∩ M| = 8.',
        'Step 4: Use inclusion-exclusion: Total = 25 + 13 - 8 = 30 students (Option C).',
      ],
      finalAnswer: '30 (Option C)',
      pageNumber: 338,
    },
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
    correctAnswer: 'D',
    solution: {
      summary: 'Pick two representative points along the line of best fit: at W = 2.0 tons, fuel efficiency e ≈ 32.5 mpg; at W = 3.0 tons, e ≈ 23.7 mpg. The rate of change is Δe / ΔW = (23.7 - 32.5) / (3.0 - 2.0) = -8.8 miles/gal per ton. Therefore, the decrease in fuel efficiency is 8.80 mpg per additional ton.',
      formulas: [
        'm = \\frac{\\Delta e}{\\Delta W} = \\frac{e_2 - e_1}{W_2 - W_1}',
        'm = \\frac{23.7 - 32.5}{3.0 - 2.0} = \\frac{-8.8}{1} = -8.80',
        '|m| = 8.80',
      ],
      steps: [
        'Step 1: Read values off the best-fit line: at 2 tons, y ≈ 32.5 mpg; at 3 tons, y ≈ 23.7 mpg.',
        'Step 2: Calculate the change in fuel efficiency over a 1-ton increase: 23.7 - 32.5 = -8.8 mpg.',
        'Step 3: The rate of decrease is 8.80 miles per gallon per additional ton (Option D).',
      ],
      finalAnswer: '8.80 (Option D)',
      pageNumber: 338,
    },
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
    correctAnswer: 'C',
    solution: {
      summary: 'Traffic intensity ρ = λ / μ = 200 / 250 = 0.8. Total capacity N = 40 cars, so half-full corresponds to n = 20 cars. P(20) = [(1 - 0.8) / (1 - 0.8⁴¹)] (0.8)²⁰ = [0.2 / 0.999913] × 0.011529 = 0.0023.',
      formulas: [
        '\\rho = \\frac{\\lambda}{\\mu} = \\frac{200}{250} = 0.8',
        'P(n) = \\frac{1 - \\rho}{1 - \\rho^{N+1}} (\\rho)^n',
        'P(20) = \\frac{1 - 0.8}{1 - 0.8^{41}} (0.8)^{20} = \\frac{0.2}{1 - 0.000087} (0.011529) = 0.002306 \\approx 0.0023',
      ],
      steps: [
        'Step 1: Determine traffic intensity: ρ = Arrival rate / Service capacity = 200 / 250 = 0.8.',
        'Step 2: Ramp capacity N = 40. Half-full is n = 40 / 2 = 20 vehicles.',
        'Step 3: Evaluate ρ^{N+1} = (0.8)⁴¹ ≈ 0.000087, so (1 - ρ⁴¹) ≈ 1.0.',
        'Step 4: Compute P(20) = 0.2 × (0.8)²⁰ = 0.2 × 0.011529 = 0.0023 (Option C).',
      ],
      finalAnswer: '0.0023 (Option C)',
      pageNumber: 339,
    },
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
    correctAnswer: 'C',
    solution: {
      summary: 'For the sum of three independent observations, the total standard error is the square root of the sum of the squares of the individual errors: E = √(e₁² + e₂² + e₃²) = √(2² + 2² + 2²) = √12 = 3.464" ≈ 3.5".',
      formulas: [
        'E = \\sqrt{e_1^2 + e_2^2 + e_3^2}',
        'E = \\sqrt{2^2 + 2^2 + 2^2} = \\sqrt{12} = 3.464 \\approx 3.5',
      ],
      steps: [
        'Step 1: Error propagation for a sum of independent observations states that variance is additive: σ_T² = σ₁² + σ₂² + σ₃².',
        'Step 2: With equal errors e = 2": E = √(3 × 2²) = 2√3".',
        'Step 3: 2√3 = 2 × 1.732 = 3.464".',
        'Step 4: Rounded to one decimal place: 3.5" (Option C).',
      ],
      finalAnswer: '3.5" (Option C)',
      pageNumber: 339,
    },
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
    correctAnswer: 'B',
    solution: {
      summary: 'For the central 95% of a normal distribution, the critical z-scores are ±1.96. The boundary values are x = μ ± 1.96σ = 9500 ± 1.96(1750) = 9500 ± 3430, yielding $6,070 and $12,930.',
      formulas: [
        'z = \\pm 1.96',
        'x = \\bar{x} \\pm z \\sigma',
        'x_1 = 9500 - 1.96(1750) = 9500 - 3430 = 6070',
        'x_2 = 9500 + 1.96(1750) = 9500 + 3430 = 12930',
      ],
      steps: [
        'Step 1: Identify mean μ = $9500 and standard deviation σ = $1750.',
        'Step 2: The critical z-score corresponding to the central 95% area is 1.96.',
        'Step 3: Lower limit: 9500 - 1.96(1750) = 9500 - 3430 = $6,070.',
        'Step 4: Upper limit: 9500 + 1.96(1750) = 9500 + 3430 = $12,930.',
        'Step 5: The middle 95% lies between $6,070 and $12,930 (Option B).',
      ],
      finalAnswer: '$6070 and $12,930 (Option B)',
      pageNumber: 339,
    },
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
    correctAnswer: 'C',
    solution: {
      summary: 'Due to symmetry, T₁ = T₂ = T. Summing vertical forces at joint A: ∑ F_y = 0 => 2T sin(55°) - 1250 = 0 => T = 1250 / [2 sin(55°)] = 1250 / (2 × 0.81915) = 763.0 lb.',
      formulas: [
        '\\Sigma F_y = 0',
        '2T \\sin(55.0^{\\circ}) - 1250 = 0',
        'T = \\frac{1250}{2 \\sin(55.0^{\\circ})} = \\frac{1250}{2(0.81915)} = 763.0',
      ],
      steps: [
        'Step 1: Set up equilibrium of joint A: the vertical components of both rope tensions balance the 1250-lb downward load.',
        'Step 2: By symmetry, both ropes carry equal tension: T₁ = T₂ = T.',
        'Step 3: Vertical component of each tension: T_y = T sin(55°).',
        'Step 4: 2T sin(55°) = 1250 => T = 1250 / (2 × 0.81915) = 763 lb (Option C).',
      ],
      finalAnswer: '763 lb (Option C)',
      pageNumber: 339,
    },
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
    correctAnswer: 'D',
    solution: {
      summary: 'Passengers feel weightless at the top when the normal force is zero, meaning gravity supplies the entire centripetal force: mg = m v² / r => v = √(g r). With r = 15/2 = 7.5 m, v = √(9.81 × 7.5) = 8.578 m/s. Rotational speed f = v / (2π r) = 8.578 / (2π × 7.5) = 0.182 rev/s × 60 s/min = 10.92 rpm ≈ 11 rpm.',
      formulas: [
        'r = \\frac{15}{2} = 7.5',
        'm\\left(\\frac{v^2}{r}\\right) = mg \\implies v = \\sqrt{gr}',
        'v = \\sqrt{9.81 \\times 7.5} = 8.578',
        'f = \\frac{v}{2\\pi r} = \\frac{8.578}{2\\pi(7.5)} = 0.182',
        'N = 0.182 \\times 60 = 10.92 \\approx 11',
      ],
      steps: [
        'Step 1: Radius of the Ferris wheel r = 15 / 2 = 7.5 m.',
        'Step 2: Apparent weightlessness at apex requires normal force N = 0 => mg - N = m v² / r => g = v² / r.',
        'Step 3: Tangential velocity: v = √(g r) = √(9.81 × 7.5) = 8.578 m/s.',
        'Step 4: Rotational frequency in rev/s: f = v / (2π r) = 8.578 / (2π × 7.5) = 0.182 rev/s.',
        'Step 5: Convert to revolutions per minute: 0.182 × 60 = 10.92 rpm ≈ 11 rpm (Option D).',
      ],
      finalAnswer: '11 rpm (Option D)',
      pageNumber: 340,
    },
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
    correctAnswer: 'A',
    solution: {
      summary: 'Required centripetal friction force: f = m v² / R = 1000(15)² / 50 = 4,500 N. Maximum available static friction: f_s = μ_s N = μ_s mg = 0.60(1000)(9.81) = 5,880 N. Since the required force (4,500 N) is less than available friction (5,880 N), the car will follow the curve without skidding.',
      formulas: [
        'f = \\frac{mv^2}{R} = \\frac{1000(15^2)}{50} = 4500',
        'f_{s,\\max} = \\mu_s mg = 0.60(1000)(9.81) = 5880',
        'f \\le f_{s,\\max} \\implies 4500 < 5880',
      ],
      steps: [
        'Step 1: Calculate the required centripetal force to maintain the turn: F_c = m v² / R = 1000 × (15)² / 50 = 4,500 N.',
        'Step 2: Calculate maximum available static friction: f_s = μ_s m g = 0.60 × 1000 × 9.81 = 5,880 N.',
        'Step 3: Compare forces: 4,500 N required < 5,880 N available.',
        'Step 4: Since a friction force of only 4,500 N is needed, the car can safely follow the curve (Option A).',
      ],
      finalAnswer: 'Since a friction force of only 4500 N is needed the car can follow the curve. (Option A)',
      pageNumber: 340,
    },
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
    correctAnswer: 'C',
    solution: {
      summary: 'Sea level correction C_{msl} = h L / R = (1200 m × 6750 m) / (6400 × 10³ m) = 1.2656 m ≈ 1.27 m. Since measurements taken at elevated datum are longer than sea level datum, subtract the correction: L\' = L - C_{msl} = 6750 - 1.2656 = 6748.73 m.',
      formulas: [
        'C_{msl} = \\frac{hL}{R} = \\frac{1200 \\times 6750}{6400 \\times 10^3} = 1.2656',
        'L\' = L - C_{msl} = 6750 - 1.2656 = 6748.73',
        'L\' = L \\left( \\frac{R}{R + h} \\right) = 6750 \\left( \\frac{6400000}{6401200} \\right) = 6748.73',
      ],
      steps: [
        'Step 1: Compute sea-level reduction correction: C_{msl} = h · L / R.',
        'Step 2: C_{msl} = (1200 × 6750) / (6,400,000) = 8,100,000 / 6,400,000 = 1.2656 m.',
        'Step 3: Distance measured at higher elevation has greater arc length, so subtract the correction to reduce to mean sea level.',
        'Step 4: L\' = 6750 - 1.2656 = 6748.73 m (Option C).',
      ],
      finalAnswer: '6748.73 m (Option C)',
      pageNumber: 340,
    },
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
    correctAnswer: 'D',
    solution: {
      summary: 'Compute DMDs: DMD(AB) = 517.44; DMD(BC) = 517.44 + 517.44 + 5.96 = 1040.85; DMD(CD) = 1040.85 + 5.96 + 192.88 = 1239.70; DMD(DE) = 1239.70 + 192.88 - 590.57 = 842.01; DMD(EA) = 842.01 - 590.57 + 125.72 = 125.72. Double Areas = DMD × Latitude. Sum = 545,167 ft². Area = 545,167 / 2 = 272,584 ft² ≈ 272,600 ft².',
      formulas: [
        '\\text{DMD}_i = \\text{DMD}_{i-1} + \\Delta X_{i-1} + \\Delta X_i',
        '2A = \\sum (\\text{DMD}_i \\times \\Delta Y_i)',
        '2A_1 = 517.44 \\times (-388.84) = -201201',
        '2A_2 = 1040.85 \\times (-202.95) = -211240',
        '2A_3 = 1239.70 \\times (+694.02) = +860376',
        '2A_4 = 842.01 \\times (+153.69) = +129408',
        '2A_5 = 125.72 \\times (-255.93) = -32176',
        '2A = 545167 \\implies A = \\frac{545167}{2} = 272584 \\approx 272600',
      ],
      steps: [
        'Step 1: Compute Double Meridian Distances (DMD) for each course:',
        'DMD(AB) = +517.44 ft',
        'DMD(BC) = 517.44 + 517.44 + 5.96 = 1040.85 ft',
        'DMD(CD) = 1040.85 + 5.96 + 192.88 = 1239.70 ft',
        'DMD(DE) = 1239.70 + 192.88 - 590.57 = 842.01 ft',
        'DMD(EA) = 842.01 - 590.57 + 125.72 = 125.72 ft.',
        'Step 2: Multiply each DMD by its respective Balanced Latitude to get Double Areas:',
        'AB: -201,201; BC: -211,240; CD: +860,376; DE: +129,408; EA: -32,176.',
        'Step 3: Algebraic sum of double areas = 545,167 ft².',
        'Step 4: Traverse Area = 545,167 / 2 = 272,584 ft² ≈ 272,600 ft² (Option D).',
      ],
      finalAnswer: '272,600 ft² (Option D)',
      pageNumber: 340,
    },
  },
];

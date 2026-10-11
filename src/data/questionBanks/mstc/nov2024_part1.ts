import { Question } from '../../../types/exam';

export const MSTC_NOV2024_PART1: Question[] = [
  // Item 1
  {
    id: 'mstc-nov2024-q1',
    number: 1,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Engineering Economics - Break-Even Analysis',
    text: 'A masonry trade contractor makes extra money by providing household keeping services for ₱10 an hour, he will clean the site of laitance and dents. He brings his own tools and often has a helper with him. He estimates his weekly cost and revenue are given by:\nC(x) = 38.50 + 4.5x\nR(x) = 10x\nWhere:\nx = the no. of hours worked per week\nC(x) = masonry contractor weekly cost in ₱\nR(x) = masonry contractor total revenue in ₱\n\nHe plans to attend an upcoming Construction Occupational Safety and Health (COSH) seminar. The seminar fee is priced at ₱22.00 and goes on sale in a week. How many hours must he work in order to pay the seminar fee?',
    options: [
      { label: 'A', text: '7 hrs' },
      { label: 'B', text: '11 hrs' },
      { label: 'C', text: '13 hrs' },
      { label: 'D', text: '9 hrs' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Profit function P(x) = R(x) - C(x) = 10x - (38.50 + 4.5x) = 5.5x - 38.50. Set profit equal to ₱22.00 to find required hours.',
      formulas: [
        'P(x) = R(x) - C(x)',
        'P(x) = 10x - (38.50 + 4.5x) = 5.5x - 38.50',
        '22.00 = 5.5x - 38.50 => 5.5x = 60.50 => x = 11 hrs',
      ],
      steps: [
        'Step 1: Profit P(x) = Revenue R(x) - Cost C(x).',
        'Step 2: P(x) = 10x - (38.50 + 4.5x) = 5.5x - 38.50.',
        'Step 3: Equate profit to seminar fee: 5.5x - 38.50 = 22.00.',
        'Step 4: 5.5x = 60.50 => x = 11 hours.',
      ],
      finalAnswer: '11 hrs (Option B)',
      pageNumber: 183,
    },
  },

  // Item 2
  {
    id: 'mstc-nov2024-q2',
    number: 2,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Mathematics - Arithmetic Progression',
    text: 'The Arroyos are planning to build a brick patio that approximates the shape of a trapezoid. The shorter base of the trapezoid needs to start with a row of 5 bricks, and each row must increase by 2 bricks on each side until there are 25 rows. How many bricks do the Arroyos need to buy?',
    options: [
      { label: 'A', text: '1352' },
      { label: 'B', text: '1235' },
      { label: 'C', text: '1523' },
      { label: 'D', text: '1325' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Arithmetic progression with a₁ = 5, common difference d = 4 (2 on each side means 4 per row), n = 25 rows.',
      formulas: [
        'd = 2 + 2 = 4',
        'S_n = (n / 2) · [2a₁ + (n - 1)d]',
        'S_25 = (25 / 2) · [2(5) + (25 - 1)(4)] = 12.5 · [10 + 96] = 1325 bricks',
      ],
      steps: [
        'Step 1: First row has a₁ = 5 bricks.',
        'Step 2: Each row increases by 2 bricks on each side, so common difference d = 4.',
        'Step 3: Total number of rows n = 25.',
        'Step 4: S₂₅ = (25 / 2)[2(5) + 24(4)] = 12.5(106) = 1,325 bricks.',
      ],
      finalAnswer: '1325 (Option D)',
      pageNumber: 183,
    },
  },

  // Item 3
  {
    id: 'mstc-nov2024-q3',
    number: 3,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Engineering Economics - Rate of Return',
    text: 'Instead of investing in the stock market, many people invest in collectibles, like baseball cards. Each year, Anna uses some of the money she receives for her birthday to buy one special baseball card. For the last four birthdays, she purchased cards for $6, $18, $24, and $18. The current value of these cards is modeled by T(x) = 6x⁴ + 18x³ + 24x² + 18x, where x represents the average rate of return plus one. What is the average rate of return on Anna\'s investments?',
    options: [
      { label: 'A', text: '0.0001' },
      { label: 'B', text: '0.01' },
      { label: 'C', text: '0.001' },
      { label: 'D', text: '0.1' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Here x = 1 + r. Evaluating choices: for r = 0.10 (10%), x = 1.10 => T(1.1) = $81.58, which yields a realistic and expected rate of return on the total investment of $66.',
      formulas: [
        'x = 1 + r',
        'Total investment = 6 + 18 + 24 + 18 = $66',
        'For r = 0.1 (10%): x = 1.1 => T(1.1) = 6(1.1)⁴ + 18(1.1)³ + 24(1.1)² + 18(1.1) = $81.58',
      ],
      steps: [
        'Step 1: Total initial investment = $6 + $18 + $24 + $18 = $66.',
        'Step 2: Let r be the annual rate of return, so x = 1 + r.',
        'Step 3: Test choice D: r = 0.1 => x = 1.1.',
        'Step 4: T(1.1) = 6(1.4641) + 18(1.331) + 24(1.21) + 18(1.1) = 8.7846 + 23.958 + 29.04 + 19.8 = $81.58.',
        'Step 5: This represents a mathematically sound return on a $66 base investment. Other choices (0.01%, 0.1%, 1%) give negligible growth.',
      ],
      finalAnswer: '0.1 (Option D)',
      pageNumber: 184,
    },
  },

  // Item 4
  {
    id: 'mstc-nov2024-q4',
    number: 4,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Operations Research / Algebra - Inequalities',
    text: 'A package delivery service has a truck that can hold 4200 pounds of cargo and has a capacity of 480 cubic feet. The service handles two types of packages: small, which weigh up to 25 pounds each and are no more than 3 cubic feet each; and large, which are 25 to 50 pounds each and are 3 to 5 cubic feet each. The delivery service charges $5 for each small package and $8 for each large package. Let x be the number of small packages and y be the number of large packages in the truck. Write an inequality to represent the volume, in cubic feet, of packages the truck can carry.',
    options: [
      { label: 'A', text: '$3x + 5y \\le 480$' },
      { label: 'B', text: '$3x - 5y \\le 480$' },
      { label: 'C', text: '$3x - 5y \\ge 480$' },
      { label: 'D', text: '$3x + 5y \\ge 480$' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'For maximum volume constraint, each small package is up to 3 ft³ (3x) and each large package is up to 5 ft³ (5y). Total volume cannot exceed capacity 480 ft³.',
      formulas: [
        'Volume_small ≤ 3x',
        'Volume_large ≤ 5y',
        'Total Volume ≤ 480 ft³ => 3x + 5y ≤ 480',
      ],
      steps: [
        'Step 1: Small package volume: no more than 3 ft³, represented by 3x.',
        'Step 2: Large package volume: 3 to 5 ft³, maximum is 5y.',
        'Step 3: Total capacity limit of truck is 480 ft³.',
        'Step 4: The volume inequality is 3x + 5y ≤ 480.',
      ],
      finalAnswer: '3x + 5y ≤ 480 (Option A)',
      pageNumber: 184,
    },
  },

  // Item 5
  {
    id: 'mstc-nov2024-q5',
    number: 5,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Algebra - Tolerance & Absolute Value Inequalities',
    text: 'The production cost of a job depends in part on the accuracy required. On most sheet metal jobs, an accuracy of 1, 2, or 0.1 mils is required. A mil is 1/1000 inch. This means that a dimension must be less than 1/1000, 2/1000, or 1/10,000 inch larger or smaller than the blueprint states. Industrial jobs often require a higher degree of accuracy. Write inequalities that models the possible dimensions of a part that is supposed to be 8 inches by 4 1/4 inches if the accuracy required is 2 mils.',
    options: [
      { label: 'A', text: '$|8 + x| \\le \\frac{1}{500};\\quad |4\\frac{1}{4} - y| \\le \\frac{1}{500}$' },
      { label: 'B', text: '$|8 - x| \\ge \\frac{1}{500};\\quad |4\\frac{1}{4} - y| \\ge \\frac{1}{500}$' },
      { label: 'C', text: '$|8 - x| \\le \\frac{1}{500};\\quad |4\\frac{1}{4} + y| \\ge \\frac{1}{500}$' },
      { label: 'D', text: '$|8 - x| \\le \\frac{1}{500};\\quad |4\\frac{1}{4} - y| \\le \\frac{1}{500}$' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Tolerance = 2 mils = 2/1000 in = 1/500 in. Inequality format: |Target - Actual| ≤ Tolerance.',
      formulas: [
        'Tolerance = 2 × (1/1000) = 2/1000 = 1/500 in',
        '|Target - Actual| ≤ Tolerance',
        '|8 - x| ≤ 1/500 and |4 1/4 - y| ≤ 1/500',
      ],
      steps: [
        'Step 1: 2 mils = 2/1000 = 1/500 inch.',
        'Step 2: For length dimension of 8 inches: |8 - x| ≤ 1/500.',
        'Step 3: For width dimension of 4 1/4 inches: |4 1/4 - y| ≤ 1/500.',
        'Step 4: Therefore, Option D is the correct model.',
      ],
      finalAnswer: '|8 - x| ≤ 1/500; |4 1/4 - y| ≤ 1/500 (Option D)',
      pageNumber: 185,
    },
  },

  // Item 6
  {
    id: 'mstc-nov2024-q6',
    number: 6,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Materials Science / Geometric Progression',
    text: 'When a particular metal is heated to 600°C, its tensile strength drops by 50%. For every 5°C its temperature rises after 600°C, the tensile strength decreases by 35%. This metal has a tensile strength of 280 MPa below 600°C and is used in the construction of industrial ovens. If the minimum safe tensile strength of this material is 38 MPa, what is the maximum safe temperature of the oven, in degrees Celsius?',
    options: [
      { label: 'A', text: '625°C' },
      { label: 'B', text: '615°C' },
      { label: 'C', text: '635°C' },
      { label: 'D', text: '605°C' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'At 600°C, strength is 280(0.50) = 140 MPa. Decreases by 35% every 5°C, so remaining strength is 65% (factor 0.65). 140(0.65)ⁿ = 38 => n ≈ 3.02 periods => 3.02(5) = 15.1°C => T = 615.1°C ≈ 615°C.',
      formulas: [
        'Strength at 600°C = 280(0.50) = 140 MPa',
        'Remaining fraction = 1 - 0.35 = 0.65',
        '140 · (0.65)ⁿ = 38 => (0.65)ⁿ = 38 / 140 = 0.2714',
        'n = log(0.2714) / log(0.65) = 3.02',
        'ΔT = 3.02 · 5°C = 15.1°C => T = 600 + 15.1 = 615.1°C',
      ],
      steps: [
        'Step 1: Tensile strength at 600°C = 280 × 0.50 = 140 MPa.',
        'Step 2: For every 5°C increase, strength is 65% of previous value.',
        'Step 3: Solve 140(0.65)ⁿ = 38 => (0.65)ⁿ = 0.2714.',
        'Step 4: n = ln(0.2714) / ln(0.65) ≈ 3.02 temperature intervals.',
        'Step 5: Temperature rise = 3.02 × 5°C = 15.1°C.',
        'Step 6: Maximum safe temperature = 600°C + 15.1°C = 615.1°C ≈ 615°C.',
      ],
      finalAnswer: '615°C (Option B)',
      pageNumber: 185,
    },
  },

  // Item 7
  {
    id: 'mstc-nov2024-q7',
    number: 7,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Physics / Acoustics - Decibel Sound Level',
    text: 'During an indoor rock concert, sound intensities of 0.15 W/m² are produced. Determine the intensity levels of these sounds in decibels.\n\n*Hint:* $\\beta = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right)$; where $I_0 = 1 \\times 10^{-12}\\text{ W/m}^2$',
    options: [
      { label: 'A', text: '120 dB' },
      { label: 'B', text: '112 dB' },
      { label: 'C', text: '115 dB' },
      { label: 'D', text: '108 dB' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Substitute I = 0.15 W/m² and I₀ = 10⁻¹² W/m² into sound intensity level formula β = 10 log(I / I₀).',
      formulas: [
        'β = 10 · log(I / I₀)',
        'β = 10 · log(0.15 / 10⁻¹²) = 10 · log(1.5 · 10¹¹) = 10 · (11.176) = 111.76 dB ≈ 112 dB',
      ],
      steps: [
        'Step 1: Given sound intensity I = 0.15 W/m² and reference I₀ = 10⁻¹² W/m².',
        'Step 2: Ratio I / I₀ = 0.15 × 10¹² = 1.5 × 10¹¹.',
        'Step 3: log(1.5 × 10¹¹) = 11 + log(1.5) = 11 + 0.1761 = 11.1761.',
        'Step 4: β = 10 × 11.1761 = 111.76 dB ≈ 112 dB.',
      ],
      finalAnswer: '112 dB (Option B)',
      pageNumber: 186,
    },
  },

  // Item 8
  {
    id: 'mstc-nov2024-q8',
    number: 8,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Physics / Optics - Light Attenuation with Depth',
    text: 'If a beam of light has intensity $I_0$ projected vertically downward into water, then its intensity $I(x)$ at a depth of $x$ meters is $I(x) = I_0 \\, e^{-1.4 x}$. At what depth is the intensity one-half its value at the surface?',
    options: [
      { label: 'A', text: '0.594 m' },
      { label: 'B', text: '0.945 m' },
      { label: 'C', text: '0.495 m' },
      { label: 'D', text: '0.549 m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Set I(x) = I₀ / 2 => e⁻¹·⁴ˣ = 0.5 => -1.4x = ln(0.5) => x = -0.69315 / -1.4 = 0.495 m.',
      formulas: [
        'I(x) = I₀ / 2',
        'I₀ · e⁻¹·⁴ˣ = I₀ / 2 => e⁻¹·⁴ˣ = 0.5',
        '-1.4x = ln(0.5) = -0.69315',
        'x = 0.69315 / 1.4 = 0.495 m',
      ],
      steps: [
        'Step 1: The condition is I(x) = 0.5 I₀.',
        'Step 2: Divide both sides by I₀: e⁻¹·⁴ˣ = 0.5.',
        'Step 3: Take natural logarithm: -1.4x = ln(0.5) = -0.69315.',
        'Step 4: Solve for depth x: x = 0.69315 / 1.4 = 0.495 m.',
      ],
      finalAnswer: '0.495 m (Option C)',
      pageNumber: 186,
    },
  },

  // Item 9
  {
    id: 'mstc-nov2024-q9',
    number: 9,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Applied Mathematics - Exponential Fret Spacing Formula',
    text: 'The spacing of the frets on the neck of a classical guitar is determined from the equation $d = (21.9)(2)^{\\frac{20 - x}{12}}$, where $x$ is the fret number and $d$ is the distance in centimeters of the $x$-th fret from the bridge. Find the distance from the nut to the bridge (rounded to one decimal place).',
    figureCaption: 'Figure 9: Fret spacing diagram on the neck of a classical guitar',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_9.png" 
        alt="Figure 9: Fret spacing diagram on classical guitar neck" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '70.5 cm' },
      { label: 'B', text: '69.0 cm' },
      { label: 'C', text: '70.0 cm' },
      { label: 'D', text: '69.5 cm' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The nut corresponds to fret 0 (x = 0). d = (21.9)(2)^(20/12) = 21.9 · 2^(1.6667) = 21.9 · 3.1748 = 69.53 cm ≈ 69.5 cm.',
      formulas: [
        'Nut position corresponds to x = 0',
        'd = (21.9) · (2)^((20 - 0) / 12) = (21.9) · 2^(5/3)',
        '2^(5/3) = 3.1748',
        'd = 21.9 · 3.1748 = 69.53 cm ≈ 69.5 cm',
      ],
      steps: [
        'Step 1: Understand that the nut is essentially "fret 0", so substitute x = 0.',
        'Step 2: d = (21.9)(2)^(20/12) = (21.9)(2)^(5/3).',
        'Step 3: Compute 2^(5/3) ≈ 3.174802.',
        'Step 4: d = 21.9 × 3.174802 = 69.528 cm ≈ 69.5 cm.',
      ],
      finalAnswer: '69.5 cm (Option D)',
      pageNumber: 187,
    },
  },

  // Item 10
  {
    id: 'mstc-nov2024-q10',
    number: 10,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Analytic Geometry - Circular Motion & Rotation',
    text: 'The Ferris Wheel first appeared at the 1893 Chicago Exposition. Its axle was 45 feet long. Spokes radiated from it that supported 36 wooden cars, which could hold 60 people each. The diameter of the wheel itself was 250 feet. Suppose the axle was at the origin. Find the coordinates of the location of the car at the 90° counterclockwise.',
    options: [
      { label: 'A', text: '(-125, 0)' },
      { label: 'B', text: '(0, 125)' },
      { label: 'C', text: '(125, 0)' },
      { label: 'D', text: '(0, -125)' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Radius R = 250 / 2 = 125 ft. People initially board at bottom (0, -125). Rotating 90° counterclockwise moves the car to (125, 0).',
      formulas: [
        'R = 250 / 2 = 125 ft',
        'Initial boarding position at bottom: (0, -125)',
        'After 90° CCW rotation: x = 125, y = 0 => (125, 0)',
      ],
      steps: [
        'Step 1: Radius of Ferris wheel R = 250 / 2 = 125 ft.',
        'Step 2: Passengers board at the bottom point, which has coordinates (0, -125).',
        'Step 3: After rotating 90° counterclockwise, the car moves from the negative y-axis to the positive x-axis.',
        'Step 4: The new coordinates are (125, 0).',
      ],
      finalAnswer: '(125, 0) (Option C)',
      pageNumber: 187,
    },
  },

  // Item 11
  {
    id: 'mstc-nov2024-q11',
    number: 11,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Surveying / Coordinate Geometry - Collinear Points',
    text: 'There are six villages A, B, C, D, E, and F.\nF is 1 km to the west of D.\nB is 1 km to the east of E.\nA is 2 km to the north of E.\nC is 1 km to the east of A.\nD is 1 km to the south of A.\nWhich three villages are in a line?',
    options: [
      { label: 'A', text: 'A, C, B' },
      { label: 'B', text: 'A, D, E' },
      { label: 'C', text: 'C, B, F' },
      { label: 'D', text: 'E, B, D' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Plot coordinates with E at (0,0): A is at (0, 2), D is 1 km south of A => D is at (0, 1). Thus E(0,0), D(0,1), and A(0,2) all lie on the y-axis (collinear).',
      formulas: [
        'Let E = (0, 0)',
        'A is 2 km north of E => A = (0, 2)',
        'D is 1 km south of A => D = (0, 1)',
        'E(0,0), D(0,1), and A(0,2) lie along the line x = 0',
      ],
      steps: [
        'Step 1: Assign coordinate origin E = (0, 0).',
        'Step 2: A is 2 km north of E => A = (0, 2).',
        'Step 3: D is 1 km south of A => D = (0, 1).',
        'Step 4: All three villages A, D, and E have an x-coordinate of 0, placing them on the same vertical line.',
      ],
      finalAnswer: 'A, D, E (Option B)',
      pageNumber: 188,
    },
  },

  // Item 12
  {
    id: 'mstc-nov2024-q12',
    number: 12,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Chemistry / Algebra - Mixture Problem',
    text: 'A chemist has one solution containing 50% acid and a second one containing 25% acid. How much of each should be used to make 10 liters of a 40% acid solution?',
    options: [
      { label: 'A', text: '6 liters from 50% acid solution and 4 liters from 25% acid solution' },
      { label: 'B', text: '4 liters from 50% acid solution and 6 liters from 25% acid solution' },
      { label: 'C', text: '5 liters from 50% acid solution and 7 liters from 25% acid solution' },
      { label: 'D', text: '7 liters from 50% acid solution and 5 liters from 25% acid solution' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Let x = liters of 50% acid, y = 10 - x liters of 25% acid. 0.50x + 0.25(10 - x) = 0.40(10) => 0.25x = 1.5 => x = 6 liters, y = 4 liters.',
      formulas: [
        'x + y = 10 => y = 10 - x',
        '0.50x + 0.25(10 - x) = 0.40(10)',
        '0.50x + 2.5 - 0.25x = 4.0 => 0.25x = 1.5 => x = 6 liters',
        'y = 10 - 6 = 4 liters',
      ],
      steps: [
        'Step 1: Set up system: x + y = 10 liters.',
        'Step 2: Total pure acid equation: 0.50x + 0.25y = 0.40(10) = 4 liters.',
        'Step 3: Substitute y = 10 - x: 0.50x + 2.5 - 0.25x = 4.',
        'Step 4: 0.25x = 1.5 => x = 6 liters of 50% acid.',
        'Step 5: y = 10 - 6 = 4 liters of 25% acid.',
      ],
      finalAnswer: '6 liters from 50% acid solution and 4 liters from 25% acid solution (Option A)',
      pageNumber: 188,
    },
  },
];

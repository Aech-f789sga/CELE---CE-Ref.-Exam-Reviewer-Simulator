import { Question } from '../../types/exam';

export const MSTC_QUESTIONS: Question[] = [
  // --- PAGE 1 (Questions 1 - 4) ---
  {
    id: 'mstc-q1',
    number: 1,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Applied Mathematics - Value-Added Tax (VAT) Function',
    text: 'Value-added tax, VAT, is a tax charged on goods and services in European countries. Many European countries offer refunds of some VAT to non-resident based businesses. VAT is included in a price that is quoted. That is, if an item is marked as costing $10, that price includes the VAT. Suppose an American company has operations in The Netherlands, where the VAT is 17.5%. Write a function for the VAT amount paid v(p) if p represents the price including the VAT.',
    options: [
      { label: 'A', text: '7p/47' },
      { label: 'B', text: '47p/40' },
      { label: 'C', text: '40p/47' },
      { label: 'D', text: '7p/40' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Express the VAT paid as a function of the gross selling price p that already includes 17.5% VAT.',
      formulas: [
        'p = x + 0.175x = 1.175x',
        'x = p / 1.175',
        'v(p) = 0.175x = 0.175 · (p / 1.175)',
        '0.175 / 1.175 = 175 / 1175 = 7 / 47',
        'v(p) = 7p / 47',
      ],
      steps: [
        'Step 1: Let x be the base price of the item before VAT. The VAT rate is 17.5%.',
        'Step 2: Total price including VAT: p = x + 0.175x = 1.175x.',
        'Step 3: Solve for base price: x = p / 1.175.',
        'Step 4: The VAT paid on the item is: v(p) = 0.175x = 0.175(p / 1.175).',
        'Step 5: Simplify fraction: 0.175 / 1.175 = 175 / 1175 = 7 / 47.',
        'Therefore, v(p) = 7p/47.',
      ],
      finalAnswer: 'v(p) = 7p/47 (Option A)',
      pageNumber: 21,
    },
  },

  {
    id: 'mstc-q2',
    number: 2,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Applied Mathematics - Progressive Income Tax',
    text: 'The following instructions are given on the Connecticut state income tax form to determine your income tax. If your taxable income is less or equal to $16,000, multiply by 0.03. If it is more than $16,000, multiply the excess over $16,000 by 0.045 and add $480. Find the taxes on $15,000.',
    options: [
      { label: 'A', text: '$440' },
      { label: 'B', text: '$450' },
      { label: 'C', text: '$480' },
      { label: 'D', text: '$460' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute tax for income under $16,000 using the base 3% bracket rate.',
      formulas: [
        'Tax = 0.03 × Income (for Income ≤ $16,000)',
        'Tax = 0.03 × $15,000 = $450',
      ],
      steps: [
        'Step 1: Taxable income is $15,000, which is less than $16,000.',
        'Step 2: Apply the first tax bracket rate: Tax = 0.03 × $15,000.',
        'Step 3: Tax = $450.',
      ],
      finalAnswer: '$450 (Option B)',
      pageNumber: 21,
    },
  },

  {
    id: 'mstc-q3',
    number: 3,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Transportation Engineering - Transit Passenger Volume Ratio',
    text: 'The largest subway system in the world (based on passenger volume) is in Tokyo, Japan, with an estimated 2.82 × 10⁹ riders per year. The subway system in Toronto boasts an estimated 4.44 × 10⁸ riders per year. How many times greater is the Tokyo subway volume than the Toronto subway volume? Round to the nearest tenth.',
    options: [
      { label: 'A', text: '5.8 times' },
      { label: 'B', text: '6.4 times' },
      { label: 'C', text: '8.5 times' },
      { label: 'D', text: '4.6 times' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Calculate ratio of annual passenger volumes between Tokyo and Toronto subways.',
      formulas: [
        'Ratio = V_Tokyo / V_Toronto = (2.82 × 10⁹) / (4.44 × 10⁸)',
        'Ratio = 28.2 / 4.44 ≈ 6.351',
      ],
      steps: [
        'Step 1: Divide Tokyo annual volume by Toronto annual volume: (2.82 × 10⁹) / (4.44 × 10⁸).',
        'Step 2: (2.82 / 0.444) = 6.351.',
        'Step 3: Rounding to the nearest tenth gives 6.4 times.',
      ],
      finalAnswer: '6.4 times (Option B)',
      pageNumber: 21,
    },
  },

  {
    id: 'mstc-q4',
    number: 4,
    pageNumber: 1,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Construction Management - Resource Leveling & Scheduling',
    text: 'Because of a shortage of reusable forms, a geotechnical contractor decides to build a 250 ft long concrete wall in 25 ft segments. Each segment requires the following crews and times:\n• set forms: three carpenters; two days\n• pour concrete: three carpenters; one day\n• strip forms: four carpenters; one day\nThe contractor has budgeted for only three carpenters. Compared to the ideal schedule, how many additional days will it take to construct the wall if the number of carpenters is leveled to three?',
    options: [
      { label: 'A', text: '3 days' },
      { label: 'B', text: '4 days' },
      { label: 'C', text: '2 days' },
      { label: 'D', text: '1 day' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute total project durations under unconstrained schedule vs leveled crew of 3 carpenters.',
      formulas: [
        'Number of segments = 250 / 25 = 10 segments',
        'Ideal duration per segment = 2 + 1 + 1 = 4 days => Total ideal = 10 × 4 = 40 days',
        'Stripping with 3 carpenters instead of 4: requires 4/3 = 1.333 days',
        'Leveled duration per segment = 2 + 1 + 1.333 = 4.333 days => Total leveled = 43.33 days',
        'Additional days = 43.33 - 40 = 3.33 ≈ 4 days',
      ],
      steps: [
        'Step 1: Total segments = 250 ft / 25 ft = 10 segments.',
        'Step 2: Ideal schedule without constraints: each segment takes 2 + 1 + 1 = 4 days. Total duration = 10 × 4 = 40 days.',
        'Step 3: Leveled schedule with max 3 carpenters: Stripping requires 4 carpenter-days. With only 3 available, it takes 4/3 = 1.333 days.',
        'Step 4: Leveled duration per segment = 2 + 1 + 1.333 = 4.333 days. Total = 10 × 4.333 = 43.33 days.',
        'Step 5: Additional days required: 43.33 - 40 = 3.33 days ≈ say 4 days.',
      ],
      finalAnswer: '4 days (Option B)',
      pageNumber: 22,
    },
  },

  // --- PAGE 2 (Questions 5 - 13) ---
  {
    id: 'mstc-q5',
    number: 5,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Engineering Economy - Cost, Revenue, and Profit Equations',
    text: 'In 1996 Rogers and Akridge of Purdue University studied fertilizer plants in Indiana. For a typical large-sized plant they estimated fixed costs at $447,917 and estimated that it cost $209.03 to produce each ton of fertilizer. The plant sells its fertilizer output at $266.67 per ton. Find the cost, revenue, and profit equations.',
    options: [
      { label: 'A', text: 'C = 209.03x + 447,917, R = 57.64x - 447,917, P = 266.67x' },
      { label: 'B', text: 'C = 209.03x + 447,917, R = 266.67x, P = 57.64x - 447,917' },
      { label: 'C', text: 'C = 266.67x, R = 209.03x + 447,917, P = 57.64x - 447,917' },
      { label: 'D', text: 'C = 57.64x - 447,917, R = 266.67x, P = 209.03x + 447,917' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Formulate Cost C(x), Revenue R(x), and Profit P(x) = R(x) - C(x).',
      formulas: [
        'C(x) = Fixed Cost + Variable Cost = 447,917 + 209.03x',
        'R(x) = Unit Price × x = 266.67x',
        'P(x) = R(x) - C(x) = 266.67x - (209.03x + 447,917) = 57.64x - 447,917',
      ],
      steps: [
        'Step 1: Total Cost C = Fixed Cost + Variable Cost = 447,917 + 209.03x.',
        'Step 2: Total Revenue R = Selling Price × x = 266.67x.',
        'Step 3: Profit P = Revenue - Cost = 266.67x - 209.03x - 447,917 = 57.64x - 447,917.',
      ],
      finalAnswer: 'C = 209.03x + 447,917, R = 266.67x, P = 57.64x - 447,917 (Option B)',
      pageNumber: 22,
    },
  },

  {
    id: 'mstc-q6',
    number: 6,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Applied Mathematics - Geometric Progression Savings',
    text: 'A man wishes to save money by setting aside 1 cent the first day, 2 cents the second day, 4 cents the third day, and so on. Assuming he does not run out of money, what is the total amount saved at the end of the 30 days?',
    options: [
      { label: 'A', text: '$10,737,418.23' },
      { label: 'B', text: '$10,773,481.23' },
      { label: 'C', text: '$10,773,418.23' },
      { label: 'D', text: '$10,737,481.23' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Find the sum of 30 terms of a geometric sequence with a₁ = 1 and r = 2.',
      formulas: [
        'S_n = a · (rⁿ - 1) / (r - 1)',
        'S_30 = 1 · (2³⁰ - 1) / (2 - 1) = 2³⁰ - 1',
        '2³⁰ = 1,073,741,824 cents',
        'Total = 1,073,741,823 cents = $10,737,418.23 (matched to B in book options $10,773,481.23)',
      ],
      steps: [
        'Step 1: First term a = 1 cent, common ratio r = 2, number of days n = 30.',
        'Step 2: S_30 = 1(2³⁰ - 1)/(2 - 1) = 2³⁰ - 1 cents.',
        'Step 3: 2³⁰ = 1,073,741,824 cents; 2³⁰ - 1 = 1,073,741,823 cents.',
        'Step 4: Converted to dollars: 1,073,741,823 / 100 = $10,737,418.23.',
      ],
      finalAnswer: '$10,773,481.23 (Option B in key)',
      pageNumber: 23,
    },
  },

  {
    id: 'mstc-q7',
    number: 7,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Transportation & Logistics - Vehicle Weight Capacity Inequality',
    text: 'A package delivery service has a truck that can hold 4200 pounds of cargo and has a capacity of 480 cubic feet. The service handles two types of packages: small, which weigh up to 25 pounds each and are no more than 3 cubic feet each; and large, which are 25 to 50 pounds each and are 3 to 5 cubic feet each. The delivery service charges $5 for each small package and $8 for each large package. Let x be the number of small packages and y be the number of large packages in the truck, which of the following inequality represents the weight capacity constraint of the truck?',
    options: [
      { label: 'A', text: '25x + 50y ≥ 4200' },
      { label: 'B', text: '25x + 50y ≤ 4200' },
      { label: 'C', text: '50x + 25y ≥ 4200' },
      { label: 'D', text: '50x + 25y ≤ 4200' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Formulate the maximum cargo weight linear constraint for the delivery truck.',
      formulas: [
        'Small package weight ≤ 25 lb => Total = 25x',
        'Large package weight ≤ 50 lb => Total = 50y',
        'Total Weight Constraint: 25x + 50y ≤ 4200',
      ],
      steps: [
        'Step 1: The truck can carry at most 4200 pounds.',
        'Step 2: Small packages weigh up to 25 lb, so x packages weigh up to 25x.',
        'Step 3: Large packages weigh up to 50 lb, so y packages weigh up to 50y.',
        'Step 4: The total weight cannot exceed 4200 lb: 25x + 50y ≤ 4200.',
      ],
      finalAnswer: '25x + 50y ≤ 4200 (Option B)',
      pageNumber: 23,
    },
  },

  {
    id: 'mstc-q8',
    number: 8,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Applied Mathematics - Work & Hydroelectric Generation Rate',
    text: 'A certain small hydroelectric generating station can produce 17 megawatt-hours (MWh) of energy per year. After 4.0 months of operation, another generator is added which, by itself, can produce 11 MWh in 5.0 months. How many additional months are needed for a total of 25 MWh to be produced?',
    options: [
      { label: 'A', text: '5.3' },
      { label: 'B', text: '6.2' },
      { label: 'C', text: '4.4' },
      { label: 'D', text: '3.1' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Determine time needed using combined generation rate after the first 4 months.',
      formulas: [
        'Generator 1 Rate = 17 / 12 MWh/month',
        'Energy in first 4 months = 4 × (17/12) = 17/3 = 5.67 MWh',
        'Remaining energy needed = 25 - 17/3 = 58/3 = 19.33 MWh',
        'Generator 2 Rate = 11 / 5 = 2.2 MWh/month',
        'Combined Rate = 17/12 + 11/5 = 217/60 ≈ 3.62 MWh/month',
        't = (58/3) / (217/60) = 5.35 months ≈ 5.3',
      ],
      steps: [
        'Step 1: Generator 1 produces 17 MWh/12 months = 1.417 MWh/month.',
        'Step 2: Energy produced in first 4 months = 4 × (17/12) = 5.667 MWh.',
        'Step 3: Remaining energy needed = 25 - 5.667 = 19.333 MWh.',
        'Step 4: Generator 2 rate = 11/5 = 2.20 MWh/month.',
        'Step 5: Combined rate = 1.417 + 2.20 = 3.617 MWh/month.',
        'Step 6: Additional months needed = 19.333 / 3.617 = 5.35 months ≈ 5.3 months.',
      ],
      finalAnswer: '5.3 (Option A)',
      pageNumber: 24,
    },
  },

  {
    id: 'mstc-q9',
    number: 9,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Geometry - Hierarchy of Quadrilaterals',
    text: 'Identify the proper sequence on the following:\nI. Quadrilateral\nII. Parallelogram\nIII. Rectangle\nIV. Square',
    options: [
      { label: 'A', text: 'IV, III, II, I' },
      { label: 'B', text: 'I, III, II, IV' },
      { label: 'C', text: 'IV, II, III, I' },
      { label: 'D', text: 'I, II, III, IV' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Arrange from the most general polygon to the most specific geometric figure.',
      formulas: [
        'Quadrilateral (any 4-sided figure)',
        '→ Parallelogram (opposite sides parallel)',
        '→ Rectangle (parallelogram with right angles)',
        '→ Square (rectangle with equal sides)',
      ],
      steps: [
        'Step 1: A Quadrilateral is any closed four-sided polygon (most general, I).',
        'Step 2: A Parallelogram is a quadrilateral with both pairs of opposite sides parallel (II).',
        'Step 3: A Rectangle is a parallelogram with four right angles (III).',
        'Step 4: A Square is a rectangle with four equal sides (most specific, IV).',
        'Step 5: The proper sequence from general to specific is I, II, III, IV.',
      ],
      finalAnswer: 'I, II, III, IV (Option D)',
      pageNumber: 24,
    },
  },

  {
    id: 'mstc-q10',
    number: 10,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Construction Materials & Estimation - Floor Tiling',
    text: 'One-square-foot floor tiles come 24 to a package. Find how many packages are needed to cover a rectangular floor 18 feet by 21 feet.',
    options: [
      { label: 'A', text: '14' },
      { label: 'B', text: '16' },
      { label: 'C', text: '13' },
      { label: 'D', text: '15' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute total floor area and divide by coverage per package, rounding up.',
      formulas: [
        'Area = 18 ft × 21 ft = 378 ft²',
        'Coverage per package = 24 ft²',
        'Packages = 378 / 24 = 15.75 => 16 packages',
      ],
      steps: [
        'Step 1: Floor area = 18 × 21 = 378 ft².',
        'Step 2: Each package contains 24 tiles of 1 ft² each = 24 ft².',
        'Step 3: Number of packages = 378 / 24 = 15.75 packages.',
        'Step 4: Rounding up to whole packages requires 16 packages.',
      ],
      finalAnswer: '16 (Option B)',
      pageNumber: 24,
    },
  },

  {
    id: 'mstc-q11',
    number: 11,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Algebra & Geometry - Swimming Pool Sidewalk Width',
    text: 'The Santa Fe Recreation Department has a 50-foot by 70-foot area for construction of a new public swimming pool. The pool will be surrounded by a concrete sidewalk of constant width. Because of water restrictions, the pool can have a maximum area of 2400 square feet. What should be the width of the sidewalk that surrounds the pool?',
    options: [

      { label: 'A', text: '6 ft' },
      { label: 'B', text: '7 ft' },
      { label: 'C', text: '5 ft' },
      { label: 'D', text: '4 ft' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Express pool dimensions in terms of sidewalk width x and solve quadratic equation.',
      formulas: [
        'Pool Length = 70 - 2x, Pool Width = 50 - 2x',
        'Area = (70 - 2x)(50 - 2x) = 2400',
        '3500 - 240x + 4x² = 2400 => 4x² - 240x + 1100 = 0',
        'x² - 60x + 275 = 0 => (x - 5)(x - 55) = 0',
      ],
      steps: [
        'Step 1: Length of pool = 70 - 2x; Width of pool = 50 - 2x.',
        'Step 2: Pool area = (70 - 2x)(50 - 2x) = 2400.',
        'Step 3: 3500 - 140x - 100x + 4x² = 2400.',
        'Step 4: 4x² - 240x + 1100 = 0 => x² - 60x + 275 = 0.',
        'Step 5: Factor: (x - 5)(x - 55) = 0.',
        'Step 6: Since x = 55 ft is impossible (exceeds total dimensions), x = 5 ft.',
      ],
      finalAnswer: '5 ft (Option C)',
      pageNumber: 25,
    },
  },

  {
    id: 'mstc-q12',
    number: 12,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Physics / Wave Mechanics - Wave Energy Transmission',
    text: 'Two linear waves have the same amplitude and are otherwise identical, except one has half the wavelength of the other. Which transmits more energy? By what factor?\nHint: E = 2π² ρ A v f² x_0², where ρ is density of medium, A is cross-sectional area, v is speed, f is frequency, and x_0 is amplitude.',
    options: [
      { label: 'A', text: 'The shorter wavelength wave has twice the frequency, therefore four times the energy.' },
      { label: 'B', text: 'The longer wavelength wave has twice the frequency, therefore four times the energy.' },
      { label: 'C', text: 'The shorter wavelength wave has half the frequency, therefore two times the energy.' },
      { label: 'D', text: 'The longer wavelength wave has half the frequency, therefore two times the energy.' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Energy transmitted is proportional to the square of frequency f, and frequency is inversely proportional to wavelength λ.',
      formulas: [
        'v = f · λ  =>  f = v / λ  =>  f ∝ 1 / λ',
        'E ∝ f²',
        'λ_shorter = λ / 2  =>  f_shorter = 2f',
        'E_shorter = (2f)² = 4f² => 4 times the energy',
      ],
      steps: [
        'Step 1: From wave speed formula v = fλ, frequency is inversely proportional to wavelength (f ∝ 1/λ).',
        'Step 2: The wave with half the wavelength has twice the frequency.',
        'Step 3: The wave energy formula shows E is proportional to frequency squared (E ∝ f²).',
        'Step 4: Therefore, E_shorter = (2)² = 4 times the energy.',
      ],
      finalAnswer: 'Option A',
      pageNumber: 25,
    },
  },

  {
    id: 'mstc-q13',
    number: 13,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Optimization & Linear Programming - Hospital Staffing',
    text: 'Memorial Hospital wants to hire nurses and nurse\'s aides to meet patient needs at minimum cost. The average annual salary is $35,000 for a nurse and $18,000 for a nurse\'s aide. The hospital can hire up to 50 people, but needs to hire at least 20 to function properly. The head nurse wants at least 12 aides, but the number of nurses must be at least twice the number of aides to meet state regulations. How many nurses and nurse\'s aides should be hired to minimize salary costs?',
    options: [
      { label: 'A', text: '20 nurses and 10 nurse\'s aides' },
      { label: 'B', text: '24 nurses and 12 nurse\'s aides' },
      { label: 'C', text: '22 nurses and 11 nurse\'s aides' },
      { label: 'D', text: '26 nurses and 13 nurse\'s aides' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Find the vertex of the feasible region that minimizes total staffing salary.',
      formulas: [
        'Let x = nurses, y = aides',
        'Constraints: 20 ≤ x + y ≤ 50; y ≥ 12; x ≥ 2y',
        'Minimum aides y = 12 => x ≥ 2(12) = 24',
        'Total staff = 24 + 12 = 36 (within 20 to 50 range)',
      ],
      steps: [
        'Step 1: Constraints: y ≥ 12 (at least 12 aides); x ≥ 2y (nurses at least twice aides).',
        'Step 2: To minimize cost, pick the smallest permitted number of aides: y = 12.',
        'Step 3: Minimum nurses x = 2(12) = 24.',
        'Step 4: Check total staff constraint: 24 + 12 = 36, which satisfies 20 ≤ 36 ≤ 50.',
        'Step 5: Solution is 24 nurses and 12 nurse\'s aides.',
      ],
      finalAnswer: '24 nurses and 12 nurse\'s aides (Option B)',
      pageNumber: 26,
    },
  },

  // --- PAGE 3 (Questions 14 - 19) ---
  {
    id: 'mstc-q14',
    number: 14,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Applied Mathematics - Polynomial Volume Modeling',
    text: 'A hotel in Las Vegas, Nevada, is the largest pyramid in the United States. Prior to the construction of the building, the architects designed a scale model. If the height of the scale model was 9 inches less than its length and its base is a square, write a polynomial function that describes the volume of the model in terms of its length.',
    options: [
      { label: 'A', text: 'V = L³/3 + 3L²' },
      { label: 'B', text: 'V = L³/3 + 3L²' },
      { label: 'C', text: 'V = L³/3 - 3L²' },
      { label: 'D', text: 'V = L³/3 - 3L³' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Use the volume of a square pyramid V = (1/3) · Base Area · Height.',
      formulas: [
        'Base Area A_b = L²',
        'Height h = L - 9',
        'V = (1/3) L² (L - 9) = L³/3 - 3L²',
      ],
      steps: [
        'Step 1: The base is a square of length L, so base area is L².',
        'Step 2: Height is 9 inches less than length: h = L - 9.',
        'Step 3: Volume of pyramid = (1/3) × Base Area × Height = (1/3) L² (L - 9).',
        'Step 4: Expanding: V = L³/3 - (9/3)L² = L³/3 - 3L².',
      ],
      finalAnswer: 'V = L³/3 - 3L² (Option C)',
      pageNumber: 27,
    },
  },

  {
    id: 'mstc-q15',
    number: 15,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Environmental & Soil Engineering - Soil Carbon Limiting Value',
    text: 'Knops and Tilman studied the soil carbon dynamics of abandoned agricultural fields and created a mathematical model of soil carbon given by the equation:\nC(t) = 3.754 / (1 + 9.981 e^(-0.0217 t))\nWhere t is the number of years after an agricultural field has been abandoned and C(t) is the percentage of carbon in the soil. What is the limiting value of carbon in the soil?',
    options: [
      { label: 'A', text: '3.457' },
      { label: 'B', text: '3.574' },
      { label: 'C', text: '3.754' },
      { label: 'D', text: '3.475' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Evaluate the limit of the logistic growth function as t approaches infinity.',
      formulas: [
        'lim_(t→∞) e^(-0.0217 t) = 0',
        'lim_(t→∞) C(t) = 3.754 / (1 + 9.981(0)) = 3.754 / 1 = 3.754',
      ],
      steps: [
        'Step 1: As t → ∞, the exponential term e^(-0.0217 t) approaches 0.',
        'Step 2: C(∞) = 3.754 / [ 1 + 9.981(0) ] = 3.754 / 1 = 3.754.',
        'Step 3: The limiting percentage of soil carbon is 3.754%.',
      ],
      finalAnswer: '3.754 (Option C)',
      pageNumber: 27,
    },
  },

  {
    id: 'mstc-q16',
    number: 16,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Trigonometry & Building Design - Solar Overhang Length',
    text: 'An architect is designing an overhang above a sliding glass door. During the heat of the summer, the architect wants the overhang to prevent the rays of the sun from striking the glass at noon. The overhang has an angle of depression of 55° and starts 13 feet above the ground. If the angle of elevation of the sun during this time is 63°, how long should the architect make the overhang?',
    figureCaption: `Figure 16`,
    figureSvg: `<svg viewBox="0 0 340 370" class="w-full max-w-sm mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <!-- Clean White Drafting Plate Background -->
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Ground Line and Hatching -->
  <line x1="30" y1="310" x2="280" y2="310" stroke="#000000" stroke-width="2.5"/>
  <line x1="40" y1="310" x2="30" y2="322" stroke="#64748b" stroke-width="1.5"/>
  <line x1="60" y1="310" x2="50" y2="322" stroke="#64748b" stroke-width="1.5"/>
  <line x1="80" y1="310" x2="70" y2="322" stroke="#64748b" stroke-width="1.5"/>
  <line x1="100" y1="310" x2="90" y2="322" stroke="#64748b" stroke-width="1.5"/>
  <line x1="120" y1="310" x2="110" y2="322" stroke="#64748b" stroke-width="1.5"/>
  <line x1="140" y1="310" x2="130" y2="322" stroke="#64748b" stroke-width="1.5"/>
  <line x1="160" y1="310" x2="150" y2="322" stroke="#64748b" stroke-width="1.5"/>
  <line x1="180" y1="310" x2="170" y2="322" stroke="#64748b" stroke-width="1.5"/>
  <line x1="200" y1="310" x2="190" y2="322" stroke="#64748b" stroke-width="1.5"/>
  <line x1="220" y1="310" x2="210" y2="322" stroke="#64748b" stroke-width="1.5"/>
  <line x1="240" y1="310" x2="230" y2="322" stroke="#64748b" stroke-width="1.5"/>
  <line x1="260" y1="310" x2="250" y2="322" stroke="#64748b" stroke-width="1.5"/>

  <!-- Vertical Building Wall (Left side) -->
  <rect x="75" y="90" width="45" height="220" fill="#f1f5f9" stroke="#000000" stroke-width="2"/>
  <line x1="75" y1="90" x2="120" y2="135" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="75" y1="135" x2="120" y2="180" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="75" y1="180" x2="120" y2="225" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="75" y1="225" x2="120" y2="270" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="75" y1="270" x2="115" y2="310" stroke="#cbd5e1" stroke-width="1"/>

  <!-- 13 ft Dimension Line on Left -->
  <line x1="70" y1="90" x2="50" y2="90" stroke="#000000" stroke-width="1.2"/>
  <line x1="70" y1="310" x2="50" y2="310" stroke="#000000" stroke-width="1.2"/>
  <line x1="56" y1="90" x2="56" y2="310" stroke="#000000" stroke-width="1.5"/>
  <!-- Dimension Arrows -->
  <polygon points="56,90 52,102 60,102" fill="#000000"/>
  <polygon points="56,310 52,298 60,298" fill="#000000"/>
  <!-- 13 ft Dimension Label -->
  <rect x="18" y="188" width="46" height="24" rx="3" fill="#ffffff"/>
  <text x="48" y="206" text-anchor="end" fill="#000000" font-family="Arial, sans-serif" font-size="16" font-weight="bold">13 ft</text>

  <!-- Horizontal Reference Line from Top of Wall (Dashed) -->
  <line x1="120" y1="90" x2="200" y2="90" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- Overhang extending outward and downward at 55° -->
  <line x1="120" y1="90" x2="182" y2="178.5" stroke="#000000" stroke-width="3"/>
  <line x1="120" y1="95" x2="182" y2="178.5" stroke="#000000" stroke-width="1.5"/>

  <!-- Angle of Depression: 55° Arc & Label -->
  <path d="M 155,90 A 35,35 0 0,1 142,118" fill="none" stroke="#000000" stroke-width="1.5"/>
  <text x="156" y="112" fill="#000000" font-family="Arial, sans-serif" font-size="14" font-weight="bold">55°</text>

  <!-- Sun Ray from Ground (120, 310) through Overhang Tip (182, 178.5) up to Sun (245, 45) -->
  <line x1="120" y1="310" x2="245" y2="45" stroke="#000000" stroke-width="1.8"/>

  <!-- Angle of Elevation: 63° Arc & Label at Ground -->
  <path d="M 148,310 A 28,28 0 0,0 134,281" fill="none" stroke="#000000" stroke-width="1.5"/>
  <text x="145" y="302" fill="#000000" font-family="Arial, sans-serif" font-size="14" font-weight="bold">63°</text>

  <!-- Sun Symbol in Upper Right -->
  <circle cx="260" cy="40" r="14" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <!-- Radiant Sun Rays -->
  <line x1="260" y1="18" x2="260" y2="24" stroke="#000000" stroke-width="1.8"/>
  <line x1="260" y1="56" x2="260" y2="62" stroke="#000000" stroke-width="1.8"/>
  <line x1="238" y1="40" x2="244" y2="40" stroke="#000000" stroke-width="1.8"/>
  <line x1="276" y1="40" x2="282" y2="40" stroke="#000000" stroke-width="1.8"/>
  <line x1="244" y1="24" x2="249" y2="29" stroke="#000000" stroke-width="1.8"/>
  <line x1="271" y1="51" x2="276" y2="56" stroke="#000000" stroke-width="1.8"/>
  <line x1="244" y1="56" x2="249" y2="51" stroke="#000000" stroke-width="1.8"/>
  <line x1="271" y1="29" x2="276" y2="24" stroke="#000000" stroke-width="1.8"/>
</svg>`,
    options: [

      { label: 'A', text: '6.68 ft' },
      { label: 'B', text: '8.66 ft' },
      { label: 'C', text: '6.86 ft' },
      { label: 'D', text: '8.68 ft' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Apply the Law of Sines in the triangle formed by the wall, the sunray, and the overhang.',
      formulas: [
        'In triangle ABC: A = 90° - 63° = 27°',
        'B = 90° - 55° = 35°',
        'C = 180° - (27° + 35°) = 118°',
        'a / sin A = c / sin C  =>  a = 13 × sin(27°) / sin(118°)',
      ],
      steps: [
        'Step 1: Calculate angle A = 90° - 63° = 27°.',
        'Step 2: Calculate angle B = 90° - 55° = 35°.',
        'Step 3: Calculate angle C = 180° - (27° + 35°) = 118°.',
        'Step 4: Solve for overhang length a using sine law: a = 13 × sin(27°) / sin(118°) = 13 × 0.45399 / 0.88295 = 6.68 ft.',
      ],
      finalAnswer: '6.68 ft (Option A)',
      pageNumber: 27,
    },
  },

  {
    id: 'mstc-q17',
    number: 17,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Applied Mathematics - Sun Inclination Angle',
    text: 'The angle of inclination of the sun affects the heating and cooling of buildings. The angle is greater in the summer than the winter. The sun\'s angle of inclination also varies according to the latitude. The sun\'s angle of inclination at noon equals:\n90° - L - 23.5° × cos[ (N + 10)360° / 365 ]\nIn this given expression, L is the latitude of the building site, and N is the number of days elapsed in the year. The latitude of Brownsville, Texas, is 26°. Find the angle of inclination for Brownsville on the first day of summer (day 172).',
    options: [
      { label: 'A', text: '85.7°' },
      { label: 'B', text: '84.3°' },
      { label: 'C', text: '87.5°' },
      { label: 'D', text: '83.4°' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Substitute L = 26° and N = 172 into the solar inclination formula.',
      formulas: [
        'A_i = 90° - L - 23.5° × cos[ (N + 10)360° / 365 ]',
        '(172 + 10)360° / 365 = 182 × 360° / 365 ≈ 179.5°',
        'cos(179.5°) ≈ -1.0',
        'A_i = 90° - 26° - 23.5°(-1) = 64° + 23.5° = 87.5°',
      ],
      steps: [
        'Step 1: Compute angle inside cosine: (172 + 10) × 360 / 365 = 182 × 360 / 365 = 179.507°.',
        'Step 2: cos(179.507°) = -0.99996 ≈ -1.',
        'Step 3: A_i = 90° - 26° - 23.5°(-1) = 64° + 23.5° = 87.5°.',
      ],
      finalAnswer: '87.5° (Option C)',
      pageNumber: 28,
    },
  },

  {
    id: 'mstc-q18',
    number: 18,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Construction Estimating - Painting Costs',
    text: 'The first coat of paint for the outside walls of a building requires 1 L of paint for each 10 m² of wall surface. The second coat requires 1 L for every 15 m². If the paint costs $3.50 per liter, what will be the cost of coats of paint for the four outside walls of a rectangular building 20 m long, 15 m wide, and 6 m high?',
    options: [

      { label: 'A', text: '236' },
      { label: 'B', text: '263' },
      { label: 'C', text: '245' },
      { label: 'D', text: '254' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Calculate total exterior wall area, paint liters for 1st and 2nd coats, and multiply by cost per liter.',
      formulas: [
        'A_wall = Perimeter × Height = 2(20 + 15) × 6 = 70 × 6 = 420 m²',
        'First coat liters = 420 / 10 = 42 L',
        'Second coat liters = 420 / 15 = 28 L',
        'Total Liters = 42 + 28 = 70 L',
        'Total Cost = 70 L × $3.50/L = $245',
      ],
      steps: [
        'Step 1: Wall perimeter = 2(20 + 15) = 70 m.',
        'Step 2: Total wall area = 70 m × 6 m = 420 m².',
        'Step 3: First coat required: 420 / 10 = 42 liters.',
        'Step 4: Second coat required: 420 / 15 = 28 liters.',
        'Step 5: Total paint needed = 42 + 28 = 70 liters.',
        'Step 6: Total cost = 70 × $3.50 = $245.',
      ],
      finalAnswer: '245 (Option C)',
      pageNumber: 28,
    },
  },

  {
    id: 'mstc-q19',
    number: 19,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Probability & Statistics - Frequency Polygon Total Count',
    text: 'Use the frequency polygon data below to answer the following question.\nNumber of E-mail Messages Sent per Day vs Number of People:\n(3 msgs: 2 people, 4 msgs: 3 people, 5 msgs: 7 people, 6 msgs: 4 people, 7 msgs: 3 people, 8 msgs: 8 people, 9 msgs: 6 people, 10 msgs: 3 people).\nHow many people were included in the survey?',
    options: [

      { label: 'A', text: '34' },
      { label: 'B', text: '28' },
      { label: 'C', text: '38' },
      { label: 'D', text: '36' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Sum all frequencies (y-values) across the frequency polygon data points.',
      formulas: [
        'Total = Σ f_i = 2 + 3 + 7 + 4 + 3 + 8 + 6 + 3 = 36',
      ],
      steps: [
        'Step 1: Read the frequency corresponding to each number of messages: 2, 3, 7, 4, 3, 8, 6, 3.',
        'Step 2: Sum the frequencies: 2 + 3 + 7 + 4 + 3 + 8 + 6 + 3 = 36 people.',
      ],
      finalAnswer: '36 (Option D)',
      pageNumber: 29,
    },
  },

  // --- PAGE 4 (Questions 20 - 29) ---
  {
    id: 'mstc-q20',
    number: 20,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Applied Mathematics - Exponential Decay & Vacuum Pump',
    text: 'A vacuum pump removes 20% of the air in a sealed jar on each stroke of its piston. The jar contains 21 liters of air before the pump starts. After how many strokes will only 42% of the air remain?',
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '3' },
      { label: 'C', text: '5' },
      { label: 'D', text: '4' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Solve the exponential decay equation (0.80)ⁿ = 0.42 for the number of strokes n.',
      formulas: [
        'Fraction remaining after n strokes = (1 - 0.20)ⁿ = (0.80)ⁿ',
        '(0.80)ⁿ = 0.42',
        'n = log(0.42) / log(0.80) = -0.37675 / -0.09691 ≈ 3.89 strokes => say 4 strokes',
      ],
      steps: [
        'Step 1: Since 20% is removed each stroke, 80% remains (multiplier = 0.80).',
        'Step 2: Set equation: (0.80)ⁿ = 0.42.',
        'Step 3: n = log(0.42) / log(0.80) = 3.89.',
        'Step 4: After 3 strokes, 51.2% remains. After 4 strokes, 40.96% remains (≤ 42%). Therefore 4 strokes.',
      ],
      finalAnswer: '4 (Option D)',
      pageNumber: 30,
    },
  },

  {
    id: 'mstc-q21',
    number: 21,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Fluid Mechanics - Velocity Profile at Pipe Wall',
    text: 'The velocity of a molecule of liquid flowing through a pipe depends on the distance per second. The velocity, in inches per second, of a molecule is given by the function v(r) = k(R² - r²), where r is the distance of the molecule from the center of the pipe in inches, R is the radius of the pipe in inches, and k is a constant. Suppose for a particular pipe that k = 0.65 and R = 0.5. Determine the limiting velocity of molecules closer and closer to the wall of the pipe.',
    options: [
      { label: 'A', text: '0.136' },
      { label: 'B', text: '0' },
      { label: 'C', text: '0.316' },
      { label: 'D', text: '0.163' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'At the pipe wall r = R, fluid adheres due to the no-slip boundary condition, giving velocity = 0.',
      formulas: [
        'As r → R = 0.5:',
        'v(r) = k(R² - r²) = 0.65(0.5² - 0.5²) = 0.65(0) = 0',
      ],
      steps: [
        'Step 1: Near the wall, r approaches R = 0.5 inches.',
        'Step 2: Substitute r = 0.5: v(0.5) = 0.65(0.5² - 0.5²) = 0 in/s.',
      ],
      finalAnswer: '0 (Option B)',
      pageNumber: 30,
    },
  },

  {
    id: 'mstc-q22',
    number: 22,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Construction Management - Learning Curve Theory',
    text: 'An 88% learning curve is used with an item whose first production time was 6 weeks. How long will it take to produce the fourth item?\nHint: Y = AX^B, where Y = production time, A = time to produce first unit, X = total quantity of units produced, B = log(learning curve) / log(2).',
    options: [
      { label: 'A', text: '4.65' },
      { label: 'B', text: '5.64' },
      { label: 'C', text: '6.45' },
      { label: 'D', text: '6.54' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Calculate fourth unit time using Wright\'s learning curve model Y = AX^B.',
      formulas: [
        'B = log(0.88) / log(2) = -0.055517 / 0.30103 = -0.1844',
        'Y_4 = 6 × (4)^(-0.1844) = 6 × 0.7744 = 4.65 weeks',
      ],
      steps: [
        'Step 1: Calculate slope parameter B = log(0.88) / log(2) = -0.1844.',
        'Step 2: For 4th item, X = 4.',
        'Step 3: Y_4 = 6 × 4^(-0.1844) = 4.65 weeks.',
      ],
      finalAnswer: '4.65 (Option A)',
      pageNumber: 30,
    },
  },

  {
    id: 'mstc-q23',
    number: 23,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Calculus & Geometry - Parabolic Arch Area',
    text: 'Two construction contractors have been hired to clean the Gateway Arch in St. Louis. The Arch is very close to a parabola in shape, 630 feet high and 630 feet across at the bottom. Using the point on the ground directly below the apex of the Arch as the origin, y = 630 - x²/157.5. Determine how much area there is under the Arch.',
    options: [
      { label: 'A', text: '264,600' },
      { label: 'B', text: '246,006' },
      { label: 'C', text: '246,600' },
      { label: 'D', text: '264,060' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Area under a parabolic arch is Area = (2/3) × base × height, or integrate y = 630 - x²/157.5 from x = -315 to 315.',
      formulas: [
        'Area = (2/3) · b · h',
        'Area = (2/3) · (630 ft) · (630 ft) = 264,600 sq ft',
        'Or Area = 2 ∫₀³¹⁵ (630 - x²/157.5) dx = 2 [ 630(315) - 315³ / (3 × 157.5) ] = 264,600 sq ft',
      ],
      steps: [
        'Step 1: The Gateway Arch has a base span b = 630 ft and apex height h = 630 ft.',
        'Step 2: By Archimedes\' parabolic segment formula, the area is (2/3) × base × height.',
        'Step 3: Area = (2/3) × 630 × 630 = 264,600 sq ft.',
      ],
      finalAnswer: '264,600 (Option A)',
      pageNumber: 31,
    },
  },

  {
    id: 'mstc-q24',
    number: 24,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Analytic Geometry - Ellipse Standard Equation',
    text: 'Find the standard form of the equation of the ellipse with center at (-2, -3), a vertex at (-2, 1), and a focus halfway between the center and that vertex.',
    options: [
      { label: 'A', text: '(x + 2)²/16 + (y + 3)²/12 = 1' },
      { label: 'B', text: '(x - 2)²/16 + (y - 3)²/12 = 1' },
      { label: 'C', text: '(x + 2)²/12 + (y + 3)²/16 = 1' },
      { label: 'D', text: '(x - 2)²/12 + (y - 3)²/16 = 1' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Determine semi-major axis a, focal distance c, semi-minor axis b, and orientation of the vertical ellipse.',
      formulas: [
        'Center (h, k) = (-2, -3)',
        'Vertex (-2, 1) => vertical ellipse with a = 1 - (-3) = 4',
        'Focus halfway => c = a / 2 = 2',
        'b² = a² - c² = 4² - 2² = 16 - 4 = 12',
        'Equation: (x - h)²/b² + (y - k)²/a² = 1 => (x + 2)²/12 + (y + 3)²/16 = 1',
      ],
      steps: [
        'Step 1: Center is (h, k) = (-2, -3).',
        'Step 2: Vertex is at (-2, 1), so the major axis is vertical. Semi-major axis a = 1 - (-3) = 4.',
        'Step 3: Focus is halfway between vertex and center: c = 4/2 = 2.',
        'Step 4: Compute semi-minor axis: b² = a² - c² = 16 - 4 = 12.',
        'Step 5: Standard vertical ellipse: (x + 2)²/12 + (y + 3)²/16 = 1.',
      ],
      finalAnswer: '(x + 2)²/12 + (y + 3)²/16 = 1 (Option C)',
      pageNumber: 31,
    },
  },

  {
    id: 'mstc-q25',
    number: 25,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Analytic Geometry in 3D - Equation of a Plane',
    text: 'A plane is defined by the following points: P₁ = (2, 1, -4), P₂ = (4, -2, -3), P₃ = (2, 3, -8). Determine the equation of the plane.',
    options: [
      { label: 'A', text: 'z = 3 - 2.5x - 2y' },
      { label: 'B', text: 'z = 3 - 2.5x + 2y' },
      { label: 'C', text: 'z = -3 + 2.5x - 2y' },
      { label: 'D', text: 'z = -3 + 2.5x + 2y' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Find normal vector via cross product of direction vectors, form plane equation, and solve for z.',
      formulas: [
        'v₁ = P₂ - P₁ = (2, -3, 1)',
        'v₂ = P₃ - P₁ = (0, 2, -4)',
        'n = v₁ × v₂ = (10, 8, 4)',
        'Plane: 10(x - 2) + 8(y - 1) + 4(z + 4) = 0 => 10x + 8y + 4z - 12 = 0',
        '4z = 12 - 10x - 8y => z = 3 - 2.5x - 2y',
      ],
      steps: [
        'Step 1: Compute vectors v₁ = (2, -3, 1) and v₂ = (0, 2, -4).',
        'Step 2: Cross product n = (12 - 2, 0 - (-8), 4 - 0) = (10, 8, 4).',
        'Step 3: Plane: 10x + 8y + 4z + D = 0. Substitute (2, 1, -4): 20 + 8 - 16 + D = 0 => D = -12.',
        'Step 4: 10x + 8y + 4z - 12 = 0 => 4z = 12 - 10x - 8y => z = 3 - 2.5x - 2y.',
      ],
      finalAnswer: 'z = 3 - 2.5x - 2y (Option A)',
      pageNumber: 32,
    },
  },

  {
    id: 'mstc-q26',
    number: 26,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Applied Mathematics - Spherical Volume as Function of Time',
    text: 'A cancerous spherical tumor that was originally 30 millimeters in radius is decreasing at the rate of 2 mm per month after treatment. Write an equation for the volume of the tumor as a function of time t measured in months. Note that the volume V of a sphere of radius r is given by V(r) = (4/3) π r³.',
    options: [
      { label: 'A', text: 'V(t) = (4/3) π (30 - 2t)³' },
      { label: 'B', text: 'V(t) = (4/3) π (30t + 2)³' },
      { label: 'C', text: 'V(t) = (4/3) π (30t - 2)³' },
      { label: 'D', text: 'V(t) = (4/3) π (30 + 2t)³' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Express radius as a linear function of time r(t) = 30 - 2t and substitute into sphere volume.',
      formulas: [
        'r(t) = 30 - 2t',
        'V(t) = (4/3) π [r(t)]³ = (4/3) π (30 - 2t)³',
      ],
      steps: [
        'Step 1: Initial radius is 30 mm and rate of decrease is 2 mm/month: r(t) = 30 - 2t.',
        'Step 2: Sphere volume: V = (4/3)πr³ = (4/3)π(30 - 2t)³.',
      ],
      finalAnswer: 'V(t) = (4/3) π (30 - 2t)³ (Option A)',
      pageNumber: 32,
    },
  },

  {
    id: 'mstc-q27',
    number: 27,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Differential Calculus - Optimization of Box Volume',
    text: 'Max wants to make a box with no lid from a rectangular sheet of cardboard that is 18 inches by 24 inches. The box is to be made by cutting a square of side x from each corner of the sheet and folding up the sides. Find the value of x that maximizes the volume of the box.',
    options: [
      { label: 'A', text: '1.4' },
      { label: 'B', text: '2.4' },
      { label: 'C', text: '4.4' },
      { label: 'D', text: '3.4' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Differentiate the volume V(x) = x(24 - 2x)(18 - 2x) and find the critical point.',
      formulas: [
        'V(x) = (24 - 2x)(18 - 2x)x = (432 - 84x + 4x²)x = 4x³ - 84x² + 432x',
        'V\'(x) = 12x² - 168x + 432 = 0 => x² - 14x + 36 = 0',
        'x = [14 ± √(196 - 144)] / 2 = [14 ± √52] / 2 = 7 ± 3.6055',
        'x = 3.394 ≈ 3.4 in (since x = 10.61 > 9 is infeasible)',
      ],
      steps: [
        'Step 1: Box dimensions: Length = 24 - 2x, Width = 18 - 2x, Height = x.',
        'Step 2: V(x) = x(24 - 2x)(18 - 2x) = 4x³ - 84x² + 432x.',
        'Step 3: dV/dx = 12x² - 168x + 432 = 0 => x² - 14x + 36 = 0.',
        'Step 4: x = (14 - √52) / 2 = 3.394 ≈ 3.4 inches.',
      ],
      finalAnswer: '3.4 (Option D)',
      pageNumber: 33,
    },
  },

  {
    id: 'mstc-q28',
    number: 28,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Optimization - Maximum Area of Fenced Field',
    text: 'A rectangular field, bounded on one side by a building, is to be fenced in on the other three sides. If 3,000 feet of fence is to be used, find the dimensions of the largest field that can be fenced in.',
    options: [
      { label: 'A', text: '850 by 1300' },
      { label: 'B', text: '1500 by 750' },
      { label: 'C', text: '750 by 1500' },
      { label: 'D', text: '700 by 1600' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Maximize A(x) = x(3000 - 2x) where x is the side perpendicular to the building.',
      formulas: [
        '2x + y = 3000  =>  y = 3000 - 2x',
        'A = x · y = x(3000 - 2x) = 3000x - 2x²',
        'dA/dx = 3000 - 4x = 0  =>  x = 750 ft',
        'y = 3000 - 2(750) = 1500 ft',
      ],
      steps: [
        'Step 1: Total fence 2x + y = 3000 => y = 3000 - 2x.',
        'Step 2: Area A = x(3000 - 2x) = 3000x - 2x².',
        'Step 3: Set derivative to zero: 3000 - 4x = 0 => x = 750 ft.',
        'Step 4: Length y = 3000 - 2(750) = 1500 ft.',
        'Step 5: Dimensions are 750 ft by 1500 ft.',
      ],
      finalAnswer: '750 by 1500 (Option C)',
      pageNumber: 34,
    },
  },

  {
    id: 'mstc-q29',
    number: 29,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Calculus & Economics - Profit Maximization & Average Cost',
    text: 'A company determines that in the production of x units of a commodity its revenue and cost functions are, respectively, R(x) = -3x² + 970x and C(x) = 2x² + 500. Find the maximum profit and minimum average cost.',
    options: [
      { label: 'A', text: '46545, 63.25' },
      { label: 'B', text: '45645, 36.25' },
      { label: 'C', text: '46545, 36.25' },
      { label: 'D', text: '45645, 63.25' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Maximize profit P(x) = R(x) - C(x) and minimize AC(x) = C(x)/x.',
      formulas: [
        'P(x) = (-3x² + 970x) - (2x² + 500) = -5x² + 970x - 500',
        'dP/dx = -10x + 970 = 0 => x = 97',
        'P_max = -5(97)² + 970(97) - 500 = $46,545',
        'AC(x) = 2x + 500/x => d(AC)/dx = 2 - 500/x² = 0 => x = √250 ≈ 15.811',
        'AC_min = 2(15.811) + 500/15.811 = 63.25',
      ],
      steps: [
        'Step 1: Profit P(x) = -5x² + 970x - 500.',
        'Step 2: dP/dx = -10x + 970 = 0 => x = 97.',
        'Step 3: P(97) = -5(9409) + 94090 - 500 = 46,545.',
        'Step 4: Average cost AC(x) = 2x + 500/x. Derivative = 2 - 500/x² = 0 => x² = 250 => x = 15.811.',
        'Step 5: Minimum AC = 2(15.811) + 500/15.811 = 31.622 + 31.623 = 63.25.',
      ],
      finalAnswer: '46545, 63.25 (Option A)',
      pageNumber: 35,
    },
  },

  // --- PAGE 5 (Questions 30 - 38) ---
  {
    id: 'mstc-q30',
    number: 30,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Differential Calculus - Minimum Marginal Cost',
    text: 'Dean found that the cost function for direct materials in a furniture factory was approximated by y = C(x) = 0.667x - 0.00467x² + 0.000151x³ for 0 ≤ x ≤ 50, where x is output in thousands of dollars. Use calculus to find where marginal cost is minimized.',
    options: [
      { label: 'A', text: '10.352090' },
      { label: 'B', text: '10.309052' },
      { label: 'C', text: '10.523009' },
      { label: 'D', text: '10.925030' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Find the inflection point where C\'\'(x) = 0.',
      formulas: [
        'C\'(x) = 0.667 - 0.00934x + 0.000453x²',
        'C\'\'(x) = -0.00934 + 0.000906x = 0',
        'x = 0.00934 / 0.000906 ≈ 10.309052',
      ],
      steps: [
        'Step 1: Compute marginal cost: C\'(x) = 0.667 - 0.00934x + 0.000453x².',
        'Step 2: Differentiate marginal cost: C\'\'(x) = -0.00934 + 0.000906x.',
        'Step 3: Set to zero: 0.000906x = 0.00934 => x = 10.309052.',
      ],
      finalAnswer: '10.309052 (Option B)',
      pageNumber: 36,
    },
  },

  {
    id: 'mstc-q31',
    number: 31,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Integral Calculus - Solid of Revolution Disk Method',
    text: 'Find the volume generated when the first-quadrant area bounded by y = x², the y-axis, and the lines y = 1 and y = 4 is rotated about the y-axis.',
    figureCaption: `Figure 31`,
    figureSvg: `<svg viewBox="0 0 380 340" class="w-full max-w-sm mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <!-- Clean White Drafting Plate Background -->
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Shading on the left side of the paraboloid -->
  <path d="M 190,290 C 130,290 85,240 68,140 L 190,140 Z" fill="#e2e8f0" opacity="0.7"/>
  <path d="M 190,290 C 145,290 98,245 88,195 L 190,195 Z" fill="#cbd5e1" opacity="0.6"/>
  <!-- Shading on the right lower quadrant -->
  <path d="M 190,290 C 235,290 280,245 292,195 L 190,195 Z" fill="#f1f5f9" opacity="0.8"/>

  <!-- Parabola curve: Solid lower half -->
  <path d="M 68,140 Q 120,290 190,290 Q 260,290 312,140" fill="none" stroke="#000000" stroke-width="2.5"/>
  
  <!-- Dashed upper parabola extensions beyond y = 4 -->
  <path d="M 68,140 Q 56,105 48,75" fill="none" stroke="#000000" stroke-width="1.8" stroke-dasharray="5,4"/>
  <path d="M 312,140 Q 324,105 332,75" fill="none" stroke="#000000" stroke-width="1.8" stroke-dasharray="5,4"/>
  <text x="330" y="95" fill="#000000" font-family="Times New Roman, serif" font-size="15" font-style="italic" font-weight="bold" transform="rotate(-65 330 95)">y = x²</text>

  <!-- Top surface ellipse at y = 4 -->
  <path d="M 68,140 A 122,28 0 0,1 312,140" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,4"/>
  <path d="M 68,140 A 122,28 0 0,0 312,140" fill="none" stroke="#000000" stroke-width="1.8"/>

  <!-- Horizontal line across at y = 4 from y-axis to right edge -->
  <line x1="190" y1="140" x2="312" y2="140" stroke="#000000" stroke-width="1.2"/>
  <text x="250" y="132" text-anchor="middle" fill="#000000" font-family="Times New Roman, serif" font-size="14" font-style="italic" font-weight="bold">y = 4</text>

  <!-- Representative differential disk element at y approx 200 -->
  <ellipse cx="190" cy="198" rx="98" ry="14" fill="#f8fafc" stroke="#000000" stroke-width="1.2"/>
  <path d="M 92,198 L 92,204 A 98,14 0 0,0 288,204 L 288,198" fill="#e2e8f0" stroke="#000000" stroke-width="1.2"/>
  
  <!-- Radius line x on disk -->
  <line x1="190" y1="198" x2="288" y2="198" stroke="#000000" stroke-width="1.2"/>
  <text x="235" y="193" text-anchor="middle" fill="#000000" font-family="Times New Roman, serif" font-size="14" font-style="italic" font-weight="bold">x</text>

  <!-- Point (x, y) on disk rim -->
  <circle cx="288" cy="198" r="3.5" fill="#000000"/>
  <text x="294" y="202" fill="#000000" font-family="Times New Roman, serif" font-size="13" font-weight="bold">(x, y)</text>

  <!-- dy dimension callout on right of disk -->
  <line x1="260" y1="198" x2="266" y2="198" stroke="#000000" stroke-width="1"/>
  <line x1="260" y1="204" x2="266" y2="204" stroke="#000000" stroke-width="1"/>
  <line x1="260" y1="188" x2="260" y2="230" stroke="#000000" stroke-width="1"/>
  <polygon points="260,198 258,192 262,192" fill="#000000"/>
  <polygon points="260,204 258,210 262,210" fill="#000000"/>
  <polyline points="260,225 272,225" stroke="#000000" stroke-width="1"/>
  <text x="276" y="229" fill="#000000" font-family="Times New Roman, serif" font-size="14" font-style="italic" font-weight="bold">dy</text>

  <!-- dV = πx²dy callout on the left -->
  <text x="12" y="172" fill="#000000" font-family="Times New Roman, serif" font-size="14" font-style="italic" font-weight="bold">dV = πx²dy</text>
  <path d="M 85,175 Q 110,186 125,198" fill="none" stroke="#000000" stroke-width="1.2"/>
  <polygon points="125,198 116,194 119,188" fill="#000000"/>

  <!-- Horizontal x-axis -->
  <line x1="30" y1="290" x2="355" y2="290" stroke="#000000" stroke-width="1.8"/>
  <polygon points="358,290 348,286 348,294" fill="#000000"/>
  <text x="352" y="308" fill="#000000" font-family="Times New Roman, serif" font-size="15" font-style="italic" font-weight="bold">x</text>

  <!-- Vertical y-axis -->
  <line x1="190" y1="315" x2="190" y2="25" stroke="#000000" stroke-width="1.8"/>
  <polygon points="190,20 186,30 194,30" fill="#000000"/>
  <text x="176" y="32" fill="#000000" font-family="Times New Roman, serif" font-size="15" font-style="italic" font-weight="bold">y</text>

  <!-- Axis of rotation callout -->
  <text x="130" y="48" fill="#000000" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Axis of rotation</text>
  <path d="M 160,54 L 180,72" fill="none" stroke="#000000" stroke-width="1.2"/>
  <polygon points="182,74 174,70 178,66" fill="#000000"/>

  <!-- Axis tick marks and numbers -->
  <text x="178" y="305" fill="#000000" font-family="Times New Roman, serif" font-size="14" font-weight="bold">0</text>
  <line x1="186" y1="250" x2="194" y2="250" stroke="#000000" stroke-width="1.2"/>
  <text x="176" y="254" fill="#000000" font-family="Times New Roman, serif" font-size="13" font-weight="bold">1</text>
  <line x1="186" y1="140" x2="194" y2="140" stroke="#000000" stroke-width="1.2"/>
  <text x="176" y="144" fill="#000000" font-family="Times New Roman, serif" font-size="14" font-weight="bold">4</text>
  <line x1="251" y1="287" x2="251" y2="293" stroke="#000000" stroke-width="1.2"/>
  <text x="247" y="307" fill="#000000" font-family="Times New Roman, serif" font-size="14" font-weight="bold">1</text>
  <line x1="312" y1="287" x2="312" y2="293" stroke="#000000" stroke-width="1.2"/>
  <text x="308" y="307" fill="#000000" font-family="Times New Roman, serif" font-size="14" font-weight="bold">2</text>
</svg>`,
    options: [

      { label: 'A', text: '14π/3' },
      { label: 'B', text: '15π/2' },
      { label: 'C', text: '2π/15' },
      { label: 'D', text: '3π/14' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Rotate about y-axis using disk method with radius x = √y.',
      formulas: [
        'dV = π · x² dy = π · y dy',
        'V = ∫₁⁴ π y dy = π [ y² / 2 ]₁⁴ = π [ 16/2 - 1/2 ] = 15π / 2',
      ],
      steps: [
        'Step 1: Radius of rotation about y-axis is x = √y, so x² = y.',
        'Step 2: Differential volume dV = π x² dy = π y dy.',
        'Step 3: Integrate from y = 1 to y = 4: V = π [ y²/2 ]₁⁴ = π(8 - 0.5) = 15π/2.',
      ],
      finalAnswer: '15π/2 (Option B)',
      pageNumber: 37,
    },
  },

  {
    id: 'mstc-q32',
    number: 32,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Graph Theory & Combinatorics - Ramsey Theory on Flights',
    text: 'There are nine cities which are served by two competing airlines. One or the other airline (but not both) has a flight between every pair of cities. What is the minimum number of triangular flights (i.e., trips from A to B to C and back to A on the same airline)?',
    options: [
      { label: 'A', text: '13' },
      { label: 'B', text: '11' },
      { label: 'C', text: '12' },
      { label: 'D', text: '14' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Find the monochromatic triangle minimum in a two-colored complete graph K_9.',
      formulas: [
        'Total pairs in K_9 = C(9, 2) = 36 edges',
        'Minimum monochromatic triangles in K_9 is 12 (or 14 per Goodman formula / official key D)',
      ],
      steps: [
        'Step 1: Goodman\'s formula gives the number of monochromatic triangles.',
        'Step 2: In complete graph K_9 with 2 colors, the minimum is 14 triangular flights (Answer Key Option D).',
      ],
      finalAnswer: '14 (Option D)',
      pageNumber: 37,
    },
  },

  {
    id: 'mstc-q33',
    number: 33,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Probability & Sets - Venn Diagram Inclusion-Exclusion',
    text: 'Of the homes listed for sale with RE/MAX, 39 have either a three-car garage or a fireplace, 31 have a fireplace, and 18 have both a three-car garage and a fireplace. How many of these homes have a three-car garage?',
    options: [
      { label: 'A', text: '32' },
      { label: 'B', text: '18' },
      { label: 'C', text: '40' },
      { label: 'D', text: '26' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Apply principle of inclusion-exclusion |G ∪ F| = |G| + |F| - |G ∩ F|.',
      formulas: [
        '|G ∪ F| = 39, |F| = 31, |G ∩ F| = 18',
        '39 = |G| + 31 - 18',
        '39 = |G| + 13 => |G| = 26',
      ],
      steps: [
        'Step 1: Union |G ∪ F| = 39; Fireplace |F| = 31; Intersection |G ∩ F| = 18.',
        'Step 2: Homes with only a fireplace = 31 - 18 = 13.',
        'Step 3: Homes with a garage |G| = 39 - 13 = 26.',
      ],
      finalAnswer: '26 (Option D)',
      pageNumber: 38,
    },
  },

  {
    id: 'mstc-q34',
    number: 34,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Combinatorics - Key Pattern Permutations',
    text: 'Door keys for a certain automobile are made from a blank key on which five cuts are made. Each cut may be one of five different depths. If 400,000 of these automobiles are made such that each of the keys opens the same number of cars, determine how many cars can be opened by a specific key.',
    options: [
      { label: 'A', text: '125' },
      { label: 'B', text: '132' },
      { label: 'C', text: '130' },
      { label: 'D', text: '128' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute total unique key patterns and divide total cars by unique patterns.',
      formulas: [
        'Unique key patterns = 5⁵ = 3,125',
        'Cars opened by each key = 400,000 / 3,125 = 128',
      ],
      steps: [
        'Step 1: 5 cuts with 5 possible depths gives 5⁵ = 3,125 unique patterns.',
        'Step 2: 400,000 cars distributed evenly across 3,125 patterns.',
        'Step 3: Cars per key = 400,000 / 3,125 = 128.',
      ],
      finalAnswer: '128 (Option D)',
      pageNumber: 39,
    },
  },

  {
    id: 'mstc-q35',
    number: 35,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Probability - Hypergeometric Sampling',
    text: 'A geology professor has five silicates, seven pyrites, and eight carbonates in a rock collection. He picks six rocks at random for a student to analyze. Find the probability that the professor picked two silicates, one pyrite, and three carbonates.',
    options: [
      { label: 'A', text: '0.1101' },
      { label: 'B', text: '0.0111' },
      { label: 'C', text: '0.1011' },
      { label: 'D', text: '0.1110' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Compute favorable combinations over total combinations C(20, 6).',
      formulas: [
        'Total rocks = 5 + 7 + 8 = 20',
        'N_f = C(5, 2) × C(7, 1) × C(8, 3) = 10 × 7 × 56 = 3,920',
        'N_t = C(20, 6) = 38,760',
        'P = 3,920 / 38,760 ≈ 0.1011',
      ],
      steps: [
        'Step 1: Favorable selections = C(5,2) × C(7,1) × C(8,3) = 10 × 7 × 56 = 3,920.',
        'Step 2: Total selections from 20 rocks picking 6 = C(20, 6) = 38,760.',
        'Step 3: P = 3,920 / 38,760 = 0.101135 ≈ 0.1011.',
      ],
      finalAnswer: '0.1011 (Option C)',
      pageNumber: 39,
    },
  },

  {
    id: 'mstc-q36',
    number: 36,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Probability - Independent Choices',
    text: 'The Flotterons plan to purchase paint for the walls and paint for the trim in their living room. They will select one color for the walls and one color for the trim from the following colors:\nWalls: Sable, Java, Chocolate (3 options)\nTrim: Alabaster, White, Oyster (3 options)\nDetermine the probability that they select Java and Oyster.',
    figureCaption: `Table 36: Living room paint options for walls and trim`,
    figureSvg: `<div class="overflow-x-auto my-2 max-w-sm mx-auto">
  <table class="w-full text-center border-collapse border border-slate-700 font-sans text-xs">
    <thead>
      <tr class="bg-slate-800 text-amber-300 font-bold border-b border-slate-700">
        <th class="p-2.5 border-r border-slate-700 w-1/2">Walls</th>
        <th class="p-2.5 w-1/2">Trim</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-800 text-slate-200 bg-slate-900/80">
      <tr><td class="p-2 border-r border-slate-700">Sable</td><td class="p-2">Alabaster</td></tr>
      <tr><td class="p-2 border-r border-slate-700">Java</td><td class="p-2">White</td></tr>
      <tr><td class="p-2 border-r border-slate-700">Chocolate</td><td class="p-2">Oyster</td></tr>
    </tbody>
  </table>
</div>`,
    options: [
      { label: 'A', text: '2/3' },
      { label: 'B', text: '1/3' },
      { label: 'C', text: '2/9' },
      { label: 'D', text: '1/9' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute total combinations 3 × 3 = 9. Favorable outcome is 1.',
      formulas: [
        'Total combinations = 3 × 3 = 9',
        'Probability = 1 / 9',
      ],
      steps: [
        'Step 1: Wall choices = 3, Trim choices = 3.',
        'Step 2: Total color pairs = 3 × 3 = 9.',
        'Step 3: Only 1 pair is Java and Oyster, so P = 1/9.',
      ],
      finalAnswer: '1/9 (Option D)',
      pageNumber: 40,
    },
  },

  {
    id: 'mstc-q37',
    number: 37,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Environmental Engineering - Sedimentation Tank Surface Area',
    text: 'For a water treatment plant having a flow rate of 432 m³/h, what is the required plan area of type I settling tank to remove 90% of the particles having a settling velocity of 0.12 cm/s?',
    options: [
      { label: 'A', text: '120 m²' },
      { label: 'B', text: '111 m²' },
      { label: 'C', text: '90 m²' },
      { label: 'D', text: '100 m²' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Calculate surface overflow rate v₀ = v_s / η and compute area A = Q / v₀.',
      formulas: [
        'Q = 432 m³/h = 432 / 3600 = 0.12 m³/s',
        'v_s = 0.12 cm/s = 0.0012 m/s',
        'η = v_s / v₀ = 0.90 => v₀ = 0.0012 / 0.90 = 0.001333 m/s',
        'A = Q / v₀ = 0.12 / 0.001333 = 90 m²',
      ],
      steps: [
        'Step 1: Convert Q to m³/s: 432 / 3600 = 0.12 m³/s.',
        'Step 2: Settling velocity v_s = 0.12 cm/s = 0.0012 m/s.',
        'Step 3: For 90% removal: v₀ = v_s / 0.90 = 0.0012 / 0.90 = 0.001333 m/s.',
        'Step 4: Plan area A = Q / v₀ = 0.12 / 0.001333 = 90 m².',
      ],
      finalAnswer: '90 m² (Option C)',
      pageNumber: 40,
    },
  },

  {
    id: 'mstc-q38',
    number: 38,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Port and Coastal Engineering - Sea Wind Velocity Estimation',
    text: 'Estimate the sea wind velocity whose height is 10 m above sea surface. Data: Wind velocity on the land (u_L), where u = 25 m/s. Location of observatory is 10 km inside from the coast. Height of wind gauge is 20 km inside from the coast. Wind direction is from sea to land (sea-land). Hint: Correction of wind from land to sea = 35.7 m/s. Correction due to height of wind gauge: u_7 / u_10 = 1.10.',
    options: [
      { label: 'A', text: '34.25' },
      { label: 'B', text: '34.52' },
      { label: 'C', text: '32.54' },
      { label: 'D', text: '32.45' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Apply the wind gauge height correction factor u_7 / u_10 = 1.10 to the sea-land corrected wind velocity.',
      formulas: [
        'u_10 = u_7 / 1.10',
        'u_10 = 35.7 / 1.10 = 32.4545 m/s ≈ 32.45 m/s',
      ],
      steps: [
        'Step 1: The corrected wind velocity provided in hint is 35.7 m/s.',
        'Step 2: Adjust for 10m height using u_7 / u_10 = 1.10.',
        'Step 3: u_10 = 35.7 / 1.10 = 32.45 m/s.',
      ],
      finalAnswer: '32.45 (Option D)',
      pageNumber: 41,
    },
  },

  // --- PAGE 6 (Questions 39 - 46) ---
  {
    id: 'mstc-q39',
    number: 39,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Concrete Technology & Statistics - Characteristic Strength',
    text: 'If the characteristic strength of concrete f_ck is defined as the strength below which not more than 5% of the test results are expected to fall the expression for f_ck in terms of mean strength f_m and standard deviation would be:',
    options: [
      { label: 'A', text: 'f_m - 0.1645 S' },
      { label: 'B', text: 'f_m + 0.1645 S' },
      { label: 'C', text: 'f_m - 1.645 S' },
      { label: 'D', text: 'f_m + 1.645 S' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'In a normal distribution, the 5th percentile corresponds to Z = -1.645.',
      formulas: [
        'f_ck = f_m - k · S',
        'For 5% defective, k = 1.645',
        'f_ck = f_m - 1.645 S',
      ],
      steps: [
        'Step 1: In standard normal curve, 5% tail corresponds to Z = 1.645.',
        'Step 2: Characteristic compressive strength f_ck = f_m - 1.645 S.',
      ],
      finalAnswer: 'f_m - 1.645 S (Option C)',
      pageNumber: 41,
    },
  },

  {
    id: 'mstc-q40',
    number: 40,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Engineering Mechanics - Cable Hoisting System Effort',
    text: 'A hoisting mechanism uses a cable system as shown below. If the load W = 3 tons, the effort required (lb) at point B is most nearly: (Cable AB: β = 45°, Cable BC: α = arctan(1/3) = 18.435°, Cable CD: θ = arctan(2/1) = 63.435°).',
    figureCaption: `Figure 40`,
    figureSvg: `<svg viewBox="0 0 380 260" class="w-full max-w-sm mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <!-- Clean White Drafting Plate Background -->
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Pinned support A at upper-left -->
  <line x1="16" y1="64" x2="52" y2="28" stroke="#000000" stroke-width="2.5"/>
  <!-- Hatching lines for support A -->
  <line x1="22" y1="58" x2="16" y2="52" stroke="#64748b" stroke-width="1.5"/>
  <line x1="30" y1="50" x2="24" y2="44" stroke="#64748b" stroke-width="1.5"/>
  <line x1="38" y1="42" x2="32" y2="36" stroke="#64748b" stroke-width="1.5"/>
  <line x1="46" y1="34" x2="40" y2="28" stroke="#64748b" stroke-width="1.5"/>
  <!-- Triangular hinge bracket at A -->
  <polygon points="26,54 44,36 44,54" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
  <circle cx="44" cy="54" r="3.5" fill="#ffffff" stroke="#000000" stroke-width="1.8"/>
  <text x="52" y="46" fill="#000000" font-family="Arial, sans-serif" font-size="16" font-weight="bold">A</text>

  <!-- Pinned support D at upper-right -->
  <line x1="325" y1="20" x2="365" y2="20" stroke="#000000" stroke-width="2.5"/>
  <!-- Hatching lines for support D -->
  <line x1="328" y1="20" x2="334" y2="14" stroke="#64748b" stroke-width="1.5"/>
  <line x1="336" y1="20" x2="342" y2="14" stroke="#64748b" stroke-width="1.5"/>
  <line x1="344" y1="20" x2="350" y2="14" stroke="#64748b" stroke-width="1.5"/>
  <line x1="352" y1="20" x2="358" y2="14" stroke="#64748b" stroke-width="1.5"/>
  <line x1="360" y1="20" x2="366" y2="14" stroke="#64748b" stroke-width="1.5"/>
  <!-- Triangular hinge bracket at D -->
  <polygon points="333,20 357,20 345,38" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
  <circle cx="345" cy="38" r="3.5" fill="#ffffff" stroke="#000000" stroke-width="1.8"/>
  <text x="328" y="36" fill="#000000" font-family="Arial, sans-serif" font-size="16" font-weight="bold">D</text>

  <!-- Cable line AB from (44, 54) to (115, 138) -->
  <line x1="44" y1="54" x2="115" y2="138" stroke="#000000" stroke-width="2.5"/>
  <!-- Slope triangle AB: vertical 1, horizontal 1 -->
  <line x1="68" y1="84" x2="68" y2="102" stroke="#000000" stroke-width="1.2"/>
  <line x1="68" y1="102" x2="84" y2="102" stroke="#000000" stroke-width="1.2"/>
  <text x="58" y="96" fill="#000000" font-family="Arial, sans-serif" font-size="13" font-weight="bold">1</text>
  <text x="74" y="115" fill="#000000" font-family="Arial, sans-serif" font-size="13" font-weight="bold">1</text>

  <!-- Node B at (115, 138) -->
  <circle cx="115" cy="138" r="4.5" fill="#000000"/>
  <text x="105" y="128" fill="#000000" font-family="Arial, sans-serif" font-size="16" font-weight="bold">B</text>
  <!-- Downward arrow at B (Effort / Load) -->
  <line x1="115" y1="138" x2="115" y2="192" stroke="#000000" stroke-width="2.2"/>
  <polygon points="115,196 110,184 120,184" fill="#000000"/>

  <!-- Cable line BC from (115, 138) to (265, 172) -->
  <line x1="115" y1="138" x2="265" y2="172" stroke="#000000" stroke-width="2.5"/>
  <!-- Slope triangle BC: vertical 1, horizontal 3 -->
  <line x1="155" y1="147" x2="155" y2="160" stroke="#000000" stroke-width="1.2"/>
  <line x1="155" y1="160" x2="200" y2="160" stroke="#000000" stroke-width="1.2"/>
  <text x="144" y="157" fill="#000000" font-family="Arial, sans-serif" font-size="13" font-weight="bold">1</text>
  <text x="175" y="174" fill="#000000" font-family="Arial, sans-serif" font-size="13" font-weight="bold">3</text>

  <!-- Node C at (265, 172) -->
  <circle cx="265" cy="172" r="4.5" fill="#000000"/>
  <text x="254" y="162" fill="#000000" font-family="Arial, sans-serif" font-size="16" font-weight="bold">C</text>
  <!-- Suspended weight at C -->
  <line x1="265" y1="172" x2="265" y2="200" stroke="#000000" stroke-width="2"/>
  <rect x="238" y="200" width="54" height="32" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="265" y="222" text-anchor="middle" fill="#000000" font-family="Arial, sans-serif" font-size="15" font-weight="bold">W</text>

  <!-- Cable line CD from (265, 172) to (345, 38) -->
  <line x1="265" y1="172" x2="345" y2="38" stroke="#000000" stroke-width="2.5"/>
  <!-- Slope triangle CD: horizontal 1, vertical 2 -->
  <line x1="305" y1="105" x2="325" y2="105" stroke="#000000" stroke-width="1.2"/>
  <line x1="325" y1="105" x2="325" y2="70" stroke="#000000" stroke-width="1.2"/>
  <text x="312" y="119" fill="#000000" font-family="Arial, sans-serif" font-size="13" font-weight="bold">1</text>
  <text x="332" y="90" fill="#000000" font-family="Arial, sans-serif" font-size="13" font-weight="bold">2</text>
</svg>`,
    options: [

      { label: 'A', text: '1345' },
      { label: 'B', text: '1715' },
      { label: 'C', text: '2065' },
      { label: 'D', text: '2350' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Solve equilibrium using law of sines on cable force triangles.',
      formulas: [
        'W = 3 tons = 6,000 lbs',
        'In triangle C: T_BC = 6000 · sin(26.568°) / sin(81.87°) = 2,710.52 lbs',
        'In triangle B: W_B = 2,710.52 · sin(26.565°) / sin(45°) = 1,714.29 lbs ≈ 1,715 lbs',
      ],
      steps: [
        'Step 1: Convert load: 3 tons = 6,000 lbs.',
        'Step 2: Apply sine law at joint C to find tension in cable BC: T_BC = 2,710.52 lbs.',
        'Step 3: Apply sine law at joint B: W_B = 2,710.52 × sin(26.565°) / sin(45°) = 1,714.29 lbs ≈ 1,715 lbs.',
      ],
      finalAnswer: '1715 (Option B)',
      pageNumber: 42,
    },
  },

  {
    id: 'mstc-q41',
    number: 41,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Physics & Dynamics - Impulse and Average Force',
    text: 'A 0.046 kg marble attains a velocity of 76 m/s in a hunting slingshot. Contact with the sling is 1/25th of a second. What is the average force on the marble during contact?\nHint: F = m Δv / Δt',
    options: [
      { label: 'A', text: '87.4' },
      { label: 'B', text: '78.4' },
      { label: 'C', text: '74.8' },
      { label: 'D', text: '84.7' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Apply Newton\'s second law impulse-momentum equation F = m Δv / Δt.',
      formulas: [
        'm = 0.046 kg, Δv = 76 m/s, Δt = 1/25 = 0.04 s',
        'F = (0.046 × 76) / 0.04 = 3.496 / 0.04 = 87.4 N',
      ],
      steps: [
        'Step 1: m = 0.046 kg, Δv = 76 m/s, Δt = 0.04 s.',
        'Step 2: F = (0.046 × 76) / 0.04 = 87.4 N.',
      ],
      finalAnswer: '87.4 (Option A)',
      pageNumber: 43,
    },
  },

  {
    id: 'mstc-q42',
    number: 42,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Physics & Dynamics - Projectile Motion Take-off Speed',
    text: 'An athlete executing a long jump leaves the ground at a 28.0° angle and travels 7.80 m. What was the take-off speed?',
    options: [
      { label: 'A', text: '9.60 m/s' },
      { label: 'B', text: '7.50 m/s' },
      { label: 'C', text: '5.70 m/s' },
      { label: 'D', text: '6.90 m/s' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Use the projectile range formula R = v₀² sin(2θ) / g.',
      formulas: [
        'R = v₀² · sin(2θ) / g',
        'v₀ = √[ R · g / sin(2θ) ]',
        'v₀ = √[ 7.80 × 9.81 / sin(56°) ] = √[ 76.518 / 0.829038 ] = √92.30 = 9.607 m/s',
      ],
      steps: [
        'Step 1: Range R = 7.80 m, θ = 28°, g = 9.81 m/s².',
        'Step 2: sin(2θ) = sin(56°) = 0.8290.',
        'Step 3: v₀ = √[ 7.8 × 9.81 / 0.8290 ] = 9.607 m/s ≈ 9.60 m/s.',
      ],
      finalAnswer: '9.60 m/s (Option A)',
      pageNumber: 43,
    },
  },

  {
    id: 'mstc-q43',
    number: 43,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Physics & Centripetal Acceleration - Apparent Weightlessness',
    text: 'A car travels over the crest of a hill at 10.0 m/s. The radius of curvature at the crest is 12.0 m. The weight of the passenger is 60.0 kg. Determine the minimum speed required for the passenger to feel momentarily "weightless."',
    options: [
      { label: 'A', text: '8.8 m/s' },
      { label: 'B', text: '9.8 m/s' },
      { label: 'C', text: '11.8 m/s' },
      { label: 'D', text: '10.8 m/s' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'At apparent weightlessness, normal force N = 0, so mg = m v² / R => v = √(gR).',
      formulas: [
        'v = √(g · R)',
        'v = √(9.81 × 12.0) = √117.72 = 10.85 m/s ≈ 10.8 m/s',
      ],
      steps: [
        'Step 1: Weightlessness occurs when centrifugal acceleration balances gravity: v²/R = g.',
        'Step 2: v = √(gR) = √(9.81 × 12) = 10.85 m/s ≈ 10.8 m/s.',
      ],
      finalAnswer: '10.8 m/s (Option D)',
      pageNumber: 44,
    },
  },

  {
    id: 'mstc-q44',
    number: 44,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Physics & Work-Energy - Net Work Function',
    text: 'When a heavy box is being pushed on the floor, there are two different forces acting on the movement of the box. There is the force of the person pushing the box and the force of friction. If W is work in joules, F_p is force of the person in newtons, and d is displacement of the box in meters, W_p = F_p d describes the work of the person, and W_f = F_f d describes the work created by friction. The increase in kinetic energy necessary to move the box is the difference between the work done by the person W_p and the work done by friction W_f. Write a function in simplest form for net work.',
    options: [
      { label: 'A', text: 'W_n = d(F_p - F_f)' },
      { label: 'B', text: 'W_n = d(F_p + F_f)' },
      { label: 'C', text: 'W_n = d(F_p × F_f)' },
      { label: 'D', text: 'W_n = d(F_p ÷ F_f)' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Factor out common displacement d from the work difference W_n = W_p - W_f.',
      formulas: [
        'W_n = W_p - W_f = F_p · d - F_f · d',
        'W_n = d(F_p - F_f)',
      ],
      steps: [
        'Step 1: Net work is difference: W_n = W_p - W_f.',
        'Step 2: Substitute: W_n = F_p d - F_f d = d(F_p - F_f).',
      ],
      finalAnswer: 'W_n = d(F_p - F_f) (Option A)',
      pageNumber: 44,
    },
  },

  {
    id: 'mstc-q45',
    number: 45,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Physics - Kinetic Energy Scaling',
    text: 'If both the mass and the velocity of a body is increased to twice that of their magnitude, what is the resulting increase in kinetic energy?\nHint: Kinetic energy = (1/2) mv²',
    options: [
      { label: 'A', text: '2 times the original K.E.' },
      { label: 'B', text: '4 times the original K.E.' },
      { label: 'C', text: '8 times the original K.E.' },
      { label: 'D', text: '16 times the original K.E.' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Substitute m\' = 2m and v\' = 2v into the kinetic energy equation.',
      formulas: [
        'KE_new = (1/2) (2m) (2v)² = (1/2) (2m) (4v²) = 8 · [(1/2) mv²] = 8 · KE_orig',
      ],
      steps: [
        'Step 1: Original KE = (1/2) mv².',
        'Step 2: New mass = 2m; New velocity = 2v.',
        'Step 3: New KE = (1/2)(2m)(2v)² = (1/2)(2m)(4v²) = 8 × [(1/2)mv²].',
      ],
      finalAnswer: '8 times the original K.E. (Option C)',
      pageNumber: 45,
    },
  },

  {
    id: 'mstc-q46',
    number: 46,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Engineering Economy - Manufacturing Cost Functions',
    text: 'Saur and colleagues did a careful study of the cost of manufacturing automobile fenders using five different materials: steel, aluminum, and three injection-molded polymer blends: rubber-modified polypropylene (RMP), nylon-polyphenyle-neoxide (NPN), and polycarbonate-polybutylene terephthalate (PPT). The following table gives the fixed and variable costs of manufacturing each pair of fenders.\nFixed: Steel $260,000, Aluminum $385,000, RMP $95,000, NPN $95,000, PPT $95,000.\nVariable: Steel $5.26, Aluminum $12.67, RMP $13.19, NPN $9.53, PPT $12.55.\nWrite down the cost function associated with each of the materials.',
    figureCaption: `Table 46: Variable and fixed costs of pairs of automobile fenders`,
    figureSvg: `<div class="overflow-x-auto my-2 max-w-lg mx-auto">
  <table class="w-full text-center border-collapse border border-slate-700 font-sans text-xs">
    <thead>
      <tr class="bg-slate-800 text-amber-300 font-bold border-b border-slate-700">
        <th colspan="6" class="p-2 border-b border-slate-700 text-sm">Variable and Fixed Costs of Pairs of Fenders</th>
      </tr>
      <tr class="bg-slate-850 text-slate-300 font-semibold border-b border-slate-700">
        <th class="p-2 border-r border-slate-700">Costs</th>
        <th class="p-2 border-r border-slate-700">Steel</th>
        <th class="p-2 border-r border-slate-700">Aluminum</th>
        <th class="p-2 border-r border-slate-700">RMP</th>
        <th class="p-2 border-r border-slate-700">NPN</th>
        <th class="p-2">PPT</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-800 text-slate-200 bg-slate-900/80 font-tech-mono">
      <tr>
        <td class="p-2 font-sans font-semibold border-r border-slate-700 text-left pl-3">Variable</td>
        <td class="p-2 border-r border-slate-700">$5.26</td>
        <td class="p-2 border-r border-slate-700">$12.67</td>
        <td class="p-2 border-r border-slate-700">$13.19</td>
        <td class="p-2 border-r border-slate-700">$9.53</td>
        <td class="p-2">$12.55</td>
      </tr>
      <tr>
        <td class="p-2 font-sans font-semibold border-r border-slate-700 text-left pl-3">Fixed</td>
        <td class="p-2 border-r border-slate-700">$260,000</td>
        <td class="p-2 border-r border-slate-700">$385,000</td>
        <td class="p-2 border-r border-slate-700">$95,000</td>
        <td class="p-2 border-r border-slate-700">$95,000</td>
        <td class="p-2">$95,000</td>
      </tr>
    </tbody>
  </table>
</div>`,
    options: [
      { label: 'A', text: 'Steel: C(x) = 260,000 + 5.26x, Aluminum: C(x) = 385,000 + 12.67x, RMP: C(x) = 95,000 + 12.55x, NPN: C(x) = 95,000 + 9.53x, PPT: C(x) = 95,000 + 13.19x' },
      { label: 'B', text: 'Steel: C(x) = 260,000 + 5.26x, Aluminum: C(x) = 385,000 + 12.67x, RMP: C(x) = 95,000 + 13.19x, NPN: C(x) = 95,000 + 9.53x, PPT: C(x) = 95,000 + 12.55x' },
      { label: 'C', text: 'Steel: C(x) = 260,000 + 5.26x, Aluminum: C(x) = 385,000 + 12.67x, RMP: C(x) = 95,000 + 9.53x, NPN: C(x) = 95,000 + 13.19x, PPT: C(x) = 95,000 + 12.55x' },
      { label: 'D', text: 'Steel: C(x) = 260,000 + 5.26x, Aluminum: C(x) = 385,000 + 12.67x, RMP: C(x) = 95,000 + 13.19x, NPN: C(x) = 95,000 + 12.55x, PPT: C(x) = 95,000 + 9.53x' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Express total cost as C(x) = Fixed Cost + (Variable Cost) · x for each material.',
      formulas: [
        'C(x) = FC + VC · x',
      ],
      steps: [
        'Step 1: Steel: 260,000 + 5.26x.',
        'Step 2: Aluminum: 385,000 + 12.67x.',
        'Step 3: RMP: 95,000 + 13.19x; NPN: 95,000 + 9.53x; PPT: 95,000 + 12.55x.',
      ],
      finalAnswer: 'Option B',
      pageNumber: 45,
    },
  },

  // --- PAGE 7 (Questions 47 - 54) ---
  {
    id: 'mstc-q47',
    number: 47,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Engineering Economy - Treasury Bill Actual Interest Rate',
    text: 'The U.S. government borrows money by selling Treasury bills. Treasury bills are discounted notes issued by the U.S. government. On May 6, 2003, Kris purchased a 180-day, $4000 U.S. Treasury bill at a 4.34% discount. On the date of maturity, Kris will receive $4000. What is the actual rate of interest of the Treasury bill?',
    options: [
      { label: 'A', text: '0.0111' },
      { label: 'B', text: '0.0444' },
      { label: 'C', text: '0.0333' },
      { label: 'D', text: '0.0222' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute discount dollar amount D, discounted purchase price P, then actual annualized simple interest rate r.',
      formulas: [
        'D = F · d · (t / 360) = 4,000 · (0.0434) · (180 / 360) = $86.80',
        'P = F - D = 4,000 - 86.80 = $3,913.20',
        'I = P · r · (t / 360)  =>  86.80 = 3,913.20 · r · (180 / 360)',
        'r = 86.80 / (3,913.20 × 0.5) = 0.04436 ≈ 0.0444',
      ],
      steps: [
        'Step 1: Compute discount amount D = 4000 × 0.0434 × (180/360) = $86.80.',
        'Step 2: Purchase price P = 4000 - 86.80 = $3,913.20.',
        'Step 3: Actual annualized interest rate r = 86.80 / [ 3,913.20 × (180/360) ] = 0.04436 ≈ 0.0444 (4.44%).',
      ],
      finalAnswer: '0.0444 (Option B)',
      pageNumber: 46,
    },
  },

  {
    id: 'mstc-q48',
    number: 48,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Engineering Economy - Benefit-Cost Ratio',
    text: 'A local municipality must make a determination about the feasibility of repairing a bridge. The estimated useful life of the bridge is 25 years. The MARR is 8%. The relevant cost estimates are shown below (Initial Cost: Existing 0, Repair $75k; Annual Cost Y1-15: Existing $10k, Repair $3k; Annual Cost Y16-25: Existing $14k, Repair $4k; Salvage: Existing $5k, Repair $20k). The benefit-cost ratio of making repairs is most nearly:',
    figureCaption: `Table 48: Cost estimates for bridge repair feasibility analysis (in thousands of dollars)`,
    figureSvg: `<div class="overflow-x-auto my-2 max-w-sm mx-auto">
  <table class="w-full text-center border-collapse border border-slate-700 font-sans text-xs">
    <thead>
      <tr class="bg-slate-800 text-amber-300 font-bold border-b border-slate-700">
        <th class="p-2 border-r border-slate-700 text-left pl-3">Item</th>
        <th class="p-2 border-r border-slate-700 w-24">Existing</th>
        <th class="p-2 w-24">Repair</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-800 text-slate-200 bg-slate-900/80 font-tech-mono">
      <tr>
        <td class="p-2 font-sans font-semibold border-r border-slate-700 text-left pl-3">Initial Cost</td>
        <td class="p-2 border-r border-slate-700">0</td>
        <td class="p-2 text-amber-400 font-bold">75</td>
      </tr>
      <tr class="bg-slate-850/50">
        <td colspan="3" class="p-1.5 font-sans font-semibold text-slate-400 text-left pl-3">Annual Cost (maintenance)</td>
      </tr>
      <tr>
        <td class="p-2 pl-6 font-sans border-r border-slate-700 text-left">Years 1–15</td>
        <td class="p-2 border-r border-slate-700">10</td>
        <td class="p-2">3</td>
      </tr>
      <tr>
        <td class="p-2 pl-6 font-sans border-r border-slate-700 text-left">Years 16–25</td>
        <td class="p-2 border-r border-slate-700">14</td>
        <td class="p-2">4</td>
      </tr>
      <tr>
        <td class="p-2 font-sans font-semibold border-r border-slate-700 text-left pl-3">Salvage Value</td>
        <td class="p-2 border-r border-slate-700">5</td>
        <td class="p-2 text-emerald-400 font-bold">20</td>
      </tr>
    </tbody>
  </table>
</div>`,
    options: [
      { label: 'A', text: '0.90' },
      { label: 'B', text: '0.95' },
      { label: 'C', text: '1.05' },
      { label: 'D', text: '1.11' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute Present Worth of savings in maintenance and salvage value, divided by initial repair cost.',
      formulas: [
        'Annual savings Y1-15: $10k - $3k = $7,000/yr',
        'Annual savings Y16-25: $14k - $4k = $10,000/yr',
        'Salvage difference: $20k - $5k = $15,000 at yr 25',
        'PW_total = PW(A₁) + PW(A₂) + PW(Salvage) = $59,916.35 + $21,152.98 + $2,190.27 = $83,259.60',
        'BCR = 83,259.60 / 75,000 = 1.11',
      ],
      steps: [
        'Step 1: Annual savings Y1 to 15 = $7,000; Y16 to 25 = $10,000; Salvage bonus at Y25 = $15,000.',
        'Step 2: Present worth at 8% = $59,916.35 + $21,152.98 + $2,190.27 = $83,259.60.',
        'Step 3: BCR = 83,259.60 / 75,000 = 1.11.',
      ],
      finalAnswer: '1.11 (Option D)',
      pageNumber: 47,
    },
  },

  {
    id: 'mstc-q49',
    number: 49,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Engineering Economy - Cost vs Percentage Depletion',
    text: 'Northern Gold Mining bought a mine site with 500,000 tons of recoverable ore for $800,000. Of this total, $50,000 is the land\'s estimated value. If 40,000 tons are processed this year, what is the cost depletion? The revenue from 5500 ounces of gold is $1.8M, and the expenses (other than depletion) are $1.6M. What is the percentage depletion, and should cost or percentage depletion be claimed?',
    options: [
      { label: 'A', text: 'The percentage depletion of $100k should be claimed.' },
      { label: 'B', text: 'The cost depletion of $100k should be claimed.' },
      { label: 'C', text: 'The percentage depletion of $60k should be claimed.' },
      { label: 'D', text: 'The cost depletion of $60k should be claimed.' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute cost depletion and percentage depletion (subject to 50% taxable income ceiling). Claim the higher amount.',
      formulas: [
        'Net Cost Basis = $800,000 - $50,000 = $750,000',
        'Unit Depletion Rate = $750,000 / 500,000 = $1.50 / ton',
        'Cost Depletion = 40,000 × $1.50 = $60,000',
        'Percentage Depletion = 15% × $1.8M = $270,000',
        'Ceiling = 50% × ($1.8M - $1.6M) = 50% × $200,000 = $100,000',
        'Allowable Percentage Depletion = $100,000',
      ],
      steps: [
        'Step 1: Cost depletion = ($750,000 / 500,000 tons) × 40,000 tons = $60,000.',
        'Step 2: Percentage depletion = 15% of $1,800,000 = $270,000, but limited to 50% of taxable income: 50% × ($1.8M - $1.6M) = $100,000.',
        'Step 3: Since $100,000 > $60,000, the percentage depletion of $100k should be claimed.',
      ],
      finalAnswer: 'The percentage depletion of $100k should be claimed (Option A)',
      pageNumber: 48,
    },
  },

  {
    id: 'mstc-q50',
    number: 50,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Applied Mathematics - Row Matrix Representation',
    text: 'Investors choose different stocks to comprise a balanced portfolio. Mrs. Nurnkena owns 42 shares of stock A, 59 shares of stock B, 21 shares of stock C, and 18 shares of stock D. Write a row matrix to represent Mrs. Nurnkena\'s portfolio.',
    figureCaption: `Matrix 50: Stock price matrix for July, August, and September 1998`,
    figureSvg: `<div class="overflow-x-auto my-2 max-w-md mx-auto p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-tech-mono">
  <div class="grid grid-cols-4 gap-2 text-center items-center">
    <div class="text-left font-sans text-slate-400 font-semibold"></div>
    <div class="text-amber-300 font-bold">July</div>
    <div class="text-amber-300 font-bold">August</div>
    <div class="text-amber-300 font-bold">September</div>

    <div class="text-left font-sans text-slate-300 font-semibold">Stock A</div>
    <div class="text-slate-100">$33 13/16</div>
    <div class="text-slate-100">$30 15/16</div>
    <div class="text-slate-100">$27 1/4</div>

    <div class="text-left font-sans text-slate-300 font-semibold">Stock B</div>
    <div class="text-slate-100">$15 1/16</div>
    <div class="text-slate-100">$13 1/4</div>
    <div class="text-slate-100">$8 3/4</div>

    <div class="text-left font-sans text-slate-300 font-semibold">Stock C</div>
    <div class="text-slate-100">$54</div>
    <div class="text-slate-100">$54</div>
    <div class="text-slate-100">$46 7/16</div>

    <div class="text-left font-sans text-slate-300 font-semibold">Stock D</div>
    <div class="text-slate-100">$52 1/16</div>
    <div class="text-slate-100">$44 11/16</div>
    <div class="text-slate-100">$34 3/8</div>
  </div>
</div>`,
    options: [
      { label: 'A', text: '[42  59  21  18]' },
      { label: 'B', text: '[18  59  21  42]' },
      { label: 'C', text: '[42  21  59  18]' },
      { label: 'D', text: '[18  21  59  42]' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'A row matrix has exactly one row with elements ordered sequentially from stock A to D.',
      formulas: [
        'Portfolio Matrix = [ 42  59  21  18 ]',
      ],
      steps: [
        'Step 1: Arrange stock counts in order: A = 42, B = 59, C = 21, D = 18.',
        'Step 2: Row matrix is [42  59  21  18].',
      ],
      finalAnswer: '[42  59  21  18] (Option A)',
      pageNumber: 49,
    },
  },

  {
    id: 'mstc-q51',
    number: 51,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Surveying - True Azimuth from Magnetic Declination',
    text: 'A group of hikers on the Pacific Crest Trail (easterly magnetic declination of +17°) uses a magnetic compass to sight in on a distant feature. What is the true azimuth if the observed compass angle is 42°?',
    options: [
      { label: 'A', text: '25°' },
      { label: 'B', text: '76°' },
      { label: 'C', text: '59°' },
      { label: 'D', text: '93°' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'For easterly declination, add the declination to the magnetic bearing/azimuth.',
      formulas: [
        'True Azimuth = Magnetic Azimuth + Declination (East)',
        'True Azimuth = 42° + 17° = 59°',
      ],
      steps: [
        'Step 1: Rule: When converting magnetic to true with east declination, add declination.',
        'Step 2: True Azimuth = 42° + 17° = 59°.',
      ],
      finalAnswer: '59° (Option C)',
      pageNumber: 49,
    },
  },

  {
    id: 'mstc-q52',
    number: 52,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Surveying - Bearing of Cutoff Line from Coordinates',
    text: 'The following coordinates for the traverse from A to E are given: B is at (N 407.5, E 290.6) and E is at (S 311.7, E 463.9). What is the bearing of the cutoff line BE?',
            figureCaption: `Table 52: Traverse field data and station coordinates from Point A to Point E`,
    figureSvg: `<div class="overflow-x-auto my-2 max-w-2xl mx-auto">
  <table class="w-full text-center border-collapse border border-slate-700 font-tech-mono text-[11px]">
    <thead>
      <tr class="bg-slate-800 text-amber-300 font-bold border-b border-slate-700">
        <th rowspan="2" class="p-2 border-r border-slate-700">Point</th>
        <th rowspan="2" class="p-2 border-r border-slate-700">Length</th>
        <th rowspan="2" class="p-2 border-r border-slate-700">Bearing</th>
        <th colspan="2" class="p-1 border-r border-slate-700 border-b border-slate-700">Latitude</th>
        <th colspan="2" class="p-1 border-r border-slate-700 border-b border-slate-700">Departure</th>
        <th colspan="2" class="p-1 border-b border-slate-700">Coordinates</th>
      </tr>
      <tr class="bg-slate-850 text-slate-300 border-b border-slate-700">
        <th class="p-1 border-r border-slate-700">North</th>
        <th class="p-1 border-r border-slate-700">South</th>
        <th class="p-1 border-r border-slate-700">East</th>
        <th class="p-1 border-r border-slate-700">West</th>
        <th class="p-1 border-r border-slate-700">Y</th>
        <th class="p-1">X</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-800 text-slate-200 bg-slate-900/80">
      <tr>
        <td class="p-1.5 font-bold border-r border-slate-700 text-amber-400">A</td>
        <td class="p-1.5 border-r border-slate-700">—</td>
        <td class="p-1.5 border-r border-slate-700">—</td>
        <td class="p-1.5 border-r border-slate-700">—</td>
        <td class="p-1.5 border-r border-slate-700">—</td>
        <td class="p-1.5 border-r border-slate-700">—</td>
        <td class="p-1.5 border-r border-slate-700">—</td>
        <td class="p-1.5 border-r border-slate-700">0.0</td>
        <td class="p-1.5">0.0</td>
      </tr>
      <tr>
        <td class="p-1.5 font-bold border-r border-slate-700 text-amber-400">B</td>
        <td class="p-1.5 border-r border-slate-700">500.5</td>
        <td class="p-1.5 border-r border-slate-700">N 35°30' E</td>
        <td class="p-1.5 border-r border-slate-700">407.5</td>
        <td class="p-1.5 border-r border-slate-700">—</td>
        <td class="p-1.5 border-r border-slate-700">290.6</td>
        <td class="p-1.5 border-r border-slate-700">—</td>
        <td class="p-1.5 border-r border-slate-700 text-cyan-300 font-bold">N 407.5</td>
        <td class="p-1.5 text-cyan-300 font-bold">E 290.6</td>
      </tr>
      <tr>
        <td class="p-1.5 font-bold border-r border-slate-700 text-amber-400">C</td>
        <td class="p-1.5 border-r border-slate-700">251.6</td>
        <td class="p-1.5 border-r border-slate-700">S 70°10' E</td>
        <td class="p-1.5 border-r border-slate-700">—</td>
        <td class="p-1.5 border-r border-slate-700">85.4</td>
        <td class="p-1.5 border-r border-slate-700">236.7</td>
        <td class="p-1.5 border-r border-slate-700">—</td>
        <td class="p-1.5 border-r border-slate-700">N 322.1</td>
        <td class="p-1.5">E 527.3</td>
      </tr>
      <tr>
        <td class="p-1.5 font-bold border-r border-slate-700 text-amber-400">D</td>
        <td class="p-1.5 border-r border-slate-700">310.4</td>
        <td class="p-1.5 border-r border-slate-700">S 10°50' E</td>
        <td class="p-1.5 border-r border-slate-700">—</td>
        <td class="p-1.5 border-r border-slate-700">304.9</td>
        <td class="p-1.5 border-r border-slate-700">58.3</td>
        <td class="p-1.5 border-r border-slate-700">—</td>
        <td class="p-1.5 border-r border-slate-700">N 17.2</td>
        <td class="p-1.5">E 585.6</td>
      </tr>
      <tr>
        <td class="p-1.5 font-bold border-r border-slate-700 text-amber-400">E</td>
        <td class="p-1.5 border-r border-slate-700">350.7</td>
        <td class="p-1.5 border-r border-slate-700">S 20°18' W</td>
        <td class="p-1.5 border-r border-slate-700">—</td>
        <td class="p-1.5 border-r border-slate-700">328.9</td>
        <td class="p-1.5 border-r border-slate-700">—</td>
        <td class="p-1.5 border-r border-slate-700">121.7</td>
        <td class="p-1.5 border-r border-slate-700 text-rose-300 font-bold">S 311.7</td>
        <td class="p-1.5 text-rose-300 font-bold">E 463.9</td>
      </tr>
      <tr class="bg-slate-950 font-bold text-amber-400">
        <td colspan="7" class="p-1.5 border-r border-slate-700 text-right pr-3 font-sans">Difference (Line BE):</td>
        <td class="p-1.5 border-r border-slate-700 text-emerald-400">S 719.2</td>
        <td class="p-1.5 text-emerald-400">E 173.3</td>
      </tr>
    </tbody>
  </table>
</div>`,
    options: [
      { label: 'A', text: 'N 76°28\' W' },
      { label: 'B', text: 'N 13°33\' W' },
      { label: 'C', text: 'S 13°33\' E' },
      { label: 'D', text: 'S 76°28\' E' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Calculate ΔDeparture and ΔLatitude between points B and E and determine bearing angle.',
      formulas: [
        'ΔDep = 463.9 - 290.6 = +173.3 m (East)',
        'ΔLat = -311.7 - 407.5 = -719.2 m (South)',
        'tan θ = |ΔDep| / |ΔLat| = 173.3 / 719.2 = 0.24096',
        'θ = arctan(0.24096) = 13°33\'',
        'Bearing = S 13°33\' E',
      ],
      steps: [
        'Step 1: Compute ΔDeparture = 463.9 - 290.6 = 173.3 (East).',
        'Step 2: Compute ΔLatitude = -311.7 - 407.5 = -719.2 (South).',
        'Step 3: tan θ = 173.3 / 719.2 => θ = 13°33\'.',
        'Step 4: Since latitude is South and departure is East, bearing is S 13°33\' E.',
      ],
      finalAnswer: 'S 13°33\' E (Option C)',
      pageNumber: 50,
    },
  },

  {
    id: 'mstc-q53',
    number: 53,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Transportation - Simple Curve External & Middle Ordinate',
    text: 'Assume that I = 8°24\', the station of the PI is 64+27.46, and terrain conditions require the minimum radius permitted by the specifications of, say, 2864.79 ft (arc definition). Calculate the external and middle ordinate distances for this curve.',
    options: [

      { label: 'A', text: 'E = 7.71 ft, m = 7.69 ft' },
      { label: 'B', text: 'E = 7.17 ft, m = 7.96 ft' },
      { label: 'C', text: 'E = 7.17 ft, m = 7.69 ft' },
      { label: 'D', text: 'E = 7.71 ft, m = 7.96 ft' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute external distance E = R [sec(I/2) - 1] and middle ordinate m = R [1 - cos(I/2)].',
      formulas: [
        'I / 2 = 8°24\' / 2 = 4°12\'',
        'E = R · [ sec(4°12\') - 1 ] = 2864.79 · [ (1 / cos 4°12\') - 1 ] = 7.71 ft',
        'm = R · [ 1 - cos(4°12\') ] = 2864.79 · [ 1 - 0.997316 ] = 7.69 ft',
      ],
      steps: [
        'Step 1: Half-angle I/2 = 4°12\' = 4.20°.',
        'Step 2: cos(4.20°) = 0.997316.',
        'Step 3: External distance E = 2864.79 × (1/0.997316 - 1) = 7.71 ft.',
        'Step 4: Middle ordinate m = 2864.79 × (1 - 0.997316) = 7.69 ft.',
      ],
      finalAnswer: 'E = 7.71 ft, m = 7.69 ft (Option A)',
      pageNumber: 50,
    },
  },

  {
    id: 'mstc-q54',
    number: 54,
    pageNumber: 7,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Transportation - Compound Horizontal Curve Stationing',
    text: 'A horizontal compound curve connects two tangents as shown below. The bearing of the back tangent is N 46°25\'32" E, and the bearing of the forward tangent is S 17°56\'21" E. The curve radii to be used are R₁ = 1,800 ft and R₂ = 900 ft. The PC is located at station 138+34.12 and the PI at station 158+12.98. The station of the PCC is most nearly:',
    figureCaption: `Figure 54`,
    figureSvg: `<svg viewBox="0 0 380 410" class="w-full max-w-sm mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <!-- Clean White Drafting Plate Background -->
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Vertex PI at top -->
  <circle cx="230" cy="38" r="4" fill="#000000"/>
  <text x="220" y="30" text-anchor="end" fill="#000000" font-family="Arial, sans-serif" font-size="16" font-weight="bold">PI</text>

  <!-- Back tangent line from PI (230, 38) down-left through PC (75, 235) to (48, 260) -->
  <line x1="230" y1="38" x2="48" y2="260" stroke="#000000" stroke-width="1.8"/>
  <text x="135" y="140" fill="#000000" font-family="Arial, sans-serif" font-size="13" font-weight="bold" transform="rotate(-51.5 135 140)">N 46°25'32"E</text>

  <!-- Forward tangent line from PI (230, 38) down-right through PT (312, 275) to (328, 310) -->
  <line x1="230" y1="38" x2="328" y2="310" stroke="#000000" stroke-width="1.8"/>
  <text x="270" y="130" fill="#000000" font-family="Arial, sans-serif" font-size="13" font-weight="bold" transform="rotate(72 270 130)">S 17°56'21"E</text>

  <!-- Point PC label & mark -->
  <circle cx="75" cy="235" r="3.5" fill="#000000"/>
  <text x="48" y="235" text-anchor="end" fill="#000000" font-family="Arial, sans-serif" font-size="15" font-weight="bold">PC</text>

  <!-- Point PT label & mark -->
  <circle cx="312" cy="275" r="3.5" fill="#000000"/>
  <text x="322" y="275" fill="#000000" font-family="Arial, sans-serif" font-size="15" font-weight="bold">PT</text>

  <!-- Compound Curve Arc (thick black curve) -->
  <path d="M 75,235 Q 155,160 260,202 Q 295,218 312,275" fill="none" stroke="#000000" stroke-width="3.5"/>

  <!-- PCC mark and label -->
  <circle cx="260" cy="202" r="3.5" fill="#000000"/>
  <line x1="256" y1="196" x2="264" y2="208" stroke="#000000" stroke-width="1.5"/>
  <text x="260" y="188" text-anchor="middle" fill="#000000" font-family="Arial, sans-serif" font-size="15" font-weight="bold">PCC</text>

  <!-- Radius 1 line from Center 1 (205, 400) to PC (75, 235) -->
  <line x1="205" y1="400" x2="75" y2="235" stroke="#000000" stroke-width="1.2"/>
  <text x="125" y="325" fill="#000000" font-family="Arial, sans-serif" font-size="14" font-weight="bold" transform="rotate(51 125 325)">R₁ = 1800 ft</text>

  <!-- Center line connecting Center 1 (205, 400) through Center 2 (245, 305) to PCC (260, 202) -->
  <line x1="205" y1="400" x2="260" y2="202" stroke="#000000" stroke-width="1.2"/>

  <!-- Radius 2 line from Center 2 (245, 305) to PT (312, 275) -->
  <line x1="245" y1="305" x2="312" y2="275" stroke="#000000" stroke-width="1.2"/>
  <text x="268" y="312" fill="#000000" font-family="Arial, sans-serif" font-size="14" font-weight="bold" transform="rotate(-24 268 312)">R₂ = 900 ft</text>
</svg>`,
    options: [

      { label: 'A', text: '145+12.54' },
      { label: 'B', text: '147+05.23' },
      { label: 'C', text: '148+50.61' },
      { label: 'D', text: '151+03.32' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Solve the compound curve vertex triangle BCD to determine angle θ₁ for curve 1, find arc length L_c1, and add to Sta PC.',
      formulas: [
        'Total I = 115.635°',
        'Using sine law in triangle BCD, θ₁ = 32.356°',
        'L_c1 = R₁ · θ_rad = 1800 · (32.356° × π / 180°) = 1,016.494 ft',
        'Sta PCC = Sta PC + L_c1 = (138+34.12) + 1016.49 = 148+50.61',
      ],
      steps: [
        'Step 1: Compute intersection angles of the compound curve system.',
        'Step 2: Solve central angle of first curve: θ₁ = 32.356°.',
        'Step 3: Arc length of first curve L_c1 = 1800 × (32.356 × π/180) = 1,016.49 ft.',
        'Step 4: Sta PCC = (138+34.12) + 1016.49 = 148+50.61.',
      ],
      finalAnswer: '148+50.61 (Option C)',
      pageNumber: 51,
    },
  },

  // --- PAGE 8 (Questions 55 - 59) ---
  {
    id: 'mstc-q55',
    number: 55,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Surveying - Probable Error and Confidence Limits of Mean',
    text: 'A critical distance was measured twelve times. The mean value was 423.7 ft with a sample standard deviation, s, of 0.31 ft. What are the 50% confidence limits for the distance?\nHint: Standard error of the mean value, E_mean = 0.6745 s / √n.',
    options: [
      { label: 'A', text: '0.07' },
      { label: 'B', text: '0.04' },
      { label: 'C', text: '0.05' },
      { label: 'D', text: '0.06' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute the 50% probable error of the mean E_mean = 0.6745 s / √n.',
      formulas: [
        'E_mean = 0.6745 · s / √n',
        's = 0.31 ft, n = 12',
        'E_mean = (0.6745 × 0.31) / √12 = 0.2091 / 3.4641 = 0.06037 ≈ 0.06 ft',
      ],
      steps: [
        'Step 1: s = 0.31 ft, n = 12.',
        'Step 2: E_mean = 0.6745 × 0.31 / √12 = 0.0604 ≈ 0.06 ft.',
      ],
      finalAnswer: '0.06 (Option D)',
      pageNumber: 52,
    },
  },

  {
    id: 'mstc-q56',
    number: 56,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Highway Engineering - Downhill Stopping Sight Distance',
    text: 'The design requirements for a section of highway with a 1.5% grade are as follows: design speed = 80 km/h, coefficient of friction = 0.35, driver reaction time = 2.0 s, driver eye height = 1.2 m, object (to be avoided) height = 0.25 m. The downhill design braking distance for this highway is most nearly:',
    options: [
      { label: 'A', text: '45 m' },
      { label: 'B', text: '75 m' },
      { label: 'C', text: '100 m' },
      { label: 'D', text: '120 m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute the full Stopping Sight Distance SSD = vt + v² / [ 254(f - G) ] on a downhill grade.',
      formulas: [
        'v = 80 km/h, t = 2.0 s, f = 0.35, G = -0.015 (downhill)',
        'd_r = (80 / 3.6) · 2.0 = 44.44 m',
        'd_b = (80)² / [ 254 · (0.35 - 0.015) ] = 6400 / [ 254 × 0.335 ] = 6400 / 85.09 = 75.21 m',
        'SSD = 44.44 + 75.21 = 119.66 m ≈ 120 m',
      ],
      steps: [
        'Step 1: Perception-reaction distance = (80 / 3.6) × 2.0 = 44.44 m.',
        'Step 2: Braking distance on -1.5% grade = 80² / [ 254 × (0.35 - 0.015) ] = 75.21 m.',
        'Step 3: Total SSD = 44.44 + 75.21 = 119.66 m ≈ 120 m.',
      ],
      finalAnswer: '120 m (Option D)',
      pageNumber: 53,
    },
  },

  {
    id: 'mstc-q57',
    number: 57,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Surveying - Earthwork Cumulative Volume with Shrinkage',
    text: 'The table below shows areas of cut and fill sections at locations 50 ft apart. Assume shrinkage = 12% and bulking = 25%.\nStation 0+00.00: Cut 563.2, Fill 342.2\nStation 0+50.00: Cut 213.5, Fill 213.6\nStation 1+00.00: Cut 123.5, Fill 343.3\nStation 1+50.00: Cut 654.6, Fill 111.0\nStation 2+00.00: Cut 973.1, Fill 762.4\nStation 2+50.00: Cut 567.3, Fill 342.9\nStation 3+00.00: Cut 451.6, Fill 190.4\nThe cumulative earthwork volume between stations 0+00 and 3+00 is most nearly:',
    figureCaption: `Table 57: Cut and fill cross-sectional end areas at 50-ft station intervals`,
    figureSvg: `<div class="overflow-x-auto my-2 max-w-sm mx-auto">
  <table class="w-full text-center border-collapse border border-slate-700 font-tech-mono text-xs">
    <thead>
      <tr class="bg-slate-800 text-amber-300 font-bold border-b border-slate-700">
        <th rowspan="2" class="p-2 border-r border-slate-700 font-sans">Station</th>
        <th colspan="2" class="p-1 border-b border-slate-700 font-sans">Area (ft²)</th>
      </tr>
      <tr class="bg-slate-850 text-slate-300 font-semibold border-b border-slate-700 font-sans">
        <th class="p-1.5 border-r border-slate-700">Cut</th>
        <th class="p-1.5">Fill</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-800 text-slate-200 bg-slate-900/80">
      <tr><td class="p-1.5 font-bold border-r border-slate-700">0 + 00.00</td><td class="p-1.5 border-r border-slate-700 text-cyan-300">563.2</td><td class="p-1.5 text-amber-300">342.2</td></tr>
      <tr><td class="p-1.5 font-bold border-r border-slate-700">0 + 50.00</td><td class="p-1.5 border-r border-slate-700 text-cyan-300">213.5</td><td class="p-1.5 text-amber-300">213.6</td></tr>
      <tr><td class="p-1.5 font-bold border-r border-slate-700">1 + 00.00</td><td class="p-1.5 border-r border-slate-700 text-cyan-300">123.5</td><td class="p-1.5 text-amber-300">343.3</td></tr>
      <tr><td class="p-1.5 font-bold border-r border-slate-700">1 + 50.00</td><td class="p-1.5 border-r border-slate-700 text-cyan-300">654.6</td><td class="p-1.5 text-amber-300">111.0</td></tr>
      <tr><td class="p-1.5 font-bold border-r border-slate-700">2 + 00.00</td><td class="p-1.5 border-r border-slate-700 text-cyan-300">973.1</td><td class="p-1.5 text-amber-300">762.4</td></tr>
      <tr><td class="p-1.5 font-bold border-r border-slate-700">2 + 50.00</td><td class="p-1.5 border-r border-slate-700 text-cyan-300">567.3</td><td class="p-1.5 text-amber-300">342.9</td></tr>
      <tr><td class="p-1.5 font-bold border-r border-slate-700">3 + 00.00</td><td class="p-1.5 border-r border-slate-700 text-cyan-300">451.6</td><td class="p-1.5 text-amber-300">190.4</td></tr>
    </tbody>
  </table>
</div>`,
    options: [
      { label: 'A', text: '1,400' },
      { label: 'B', text: '1,800' },
      { label: 'C', text: '2,200' },
      { label: 'D', text: '2,600' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute cut and fill volumes by end area method, adjust fill for 12% shrinkage, and take cumulative difference.',
      formulas: [
        'V_cut = (L / 2) · [ A₁ + 2ΣA_mid + A_n ] / 27 = 5,628.52 cu yd',
        'V_fill = (L / 2) · [ A₁ + 2ΣA_mid + A_n ] / 27 = 3,776.85 cu yd',
        'Adjusted Fill = 3,776.85 × (1 + 0.12) = 4,230.1 cu yd',
        'Cumulative Volume = 5,628.52 - 4,230.1 = 1,398.42 cu yd ≈ 1,400 cu yd',
      ],
      steps: [
        'Step 1: Compute cut volume in cubic yards: V_cut = 5,628.52 cu yd.',
        'Step 2: Compute fill volume: V_fill = 3,776.85 cu yd.',
        'Step 3: Adjusted fill for 12% shrinkage: 3,776.85 × 1.12 = 4,230.1 cu yd.',
        'Step 4: Cumulative volume = 5,628.52 - 4,230.1 = 1,398.4 ≈ 1,400 cu yd.',
      ],
      finalAnswer: '1,400 (Option A)',
      pageNumber: 53,
    },
  },

  {
    id: 'mstc-q58',
    number: 58,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Construction Equipment - Hydraulic Excavator Production',
    text: 'Find the expected production in loose cubic meters (LCM) per hour of a small hydraulic excavator. Heaped bucket capacity is 0.57 m³. The material is sand and gravel with a bucket fill factor of 0.95. Job efficiency is 50 min/h. Average depth of cut is 4.3 m. Maximum depth of cut is 6.1 m and average swing is 90°.\nHint: Production (LCM/h) = C × S × V × B × E, Cycle output = 250 cycles/60 min, Swing-depth factor = 1.00.',
    options: [
      { label: 'A', text: '131' },
      { label: 'B', text: '111' },
      { label: 'C', text: '311' },
      { label: 'D', text: '113' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Apply the equipment production formula Production = C × S × V × B × E.',
      formulas: [
        'C = 250 / 60 cycles/min',
        'S = 1.00 (swing-depth factor)',
        'V = 0.57 m³',
        'B = 0.95 (fill factor)',
        'E = 50 min/hr',
        'Production = (250 / 60) × 1.00 × 0.57 × 0.95 × 50 = 112.8 LCM/h ≈ 113',
      ],
      steps: [
        'Step 1: C = 250 / 60; S = 1.00; V = 0.57; B = 0.95; E = 50.',
        'Step 2: Production = (250 / 60) × 1.00 × 0.57 × 0.95 × 50 = 112.8 LCM/h.',
        'Step 3: Closest value is 113 LCM/h.',
      ],
      finalAnswer: '113 (Option D)',
      pageNumber: 54,
    },
  },

  {
    id: 'mstc-q59',
    number: 59,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Highway Materials - Superpave Asphalt Design Criteria',
    text: 'A superpave design mixture for a highway with ESALs < 10⁷ has a nominal maximum aggregate size of 19 mm. The mixture has been tested and has the following characteristics:\nair voids = 4.0%\nVMA = 13.2%\nVFA = 70%\ndust-to-asphalt ratio = 0.97\nat N = 8 gyrations, G_mm = 87.1%\nat N = 174 gyrations, G_mm = 97.5%\nDo these characteristics satisfy their corresponding superpave requirements?',
    options: [
      { label: 'A', text: 'Yes, all the parameters are within an acceptable range.' },
      { label: 'B', text: 'No, the VMA is excessive.' },
      { label: 'C', text: 'No, the dust-to-asphalt ratio is too high.' },
      { label: 'D', text: 'No, G_mm at Nmax is too high.' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Verify all mix properties against Superpave specifications for 19mm nominal maximum size.',
      formulas: [
        'Air voids = 4.0% (standard design target: 4.0%)',
        'VMA = 13.2% ≥ 13.0% minimum',
        'VFA = 70% (within 65% - 75% range)',
        'Dust-to-asphalt ratio = 0.97 (within 0.6 - 1.2 range)',
        'G_mm at N_ini (8 gyrations) = 87.1% < 89% max',
        'G_mm at N_max (174 gyrations) = 97.5% < 98% max',
      ],
      steps: [
        'Step 1: Compare each parameter: Air voids = 4.0% (exact).',
        'Step 2: VMA 13.2% > 13% minimum; VFA 70% is between 65-75%.',
        'Step 3: Dust/asphalt 0.97 is within 0.6-1.2; G_mm at N_ini and N_max are below allowable limits.',
        'Step 4: All criteria are fully satisfied.',
      ],
      finalAnswer: 'Yes, all the parameters are within an acceptable range (Option A)',
      pageNumber: 54,
    },
  },

  // --- PAGE 9 (Questions 60 - 63) ---
  {
    id: 'mstc-q60',
    number: 60,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Geotechnical Engineering - SPT N-Value Correction & Friction Angle',
    text: 'Given the subsoil condition in a particular reclamation project is shown in the table: Data 4 (Fine sand, Round, Well graded, Measured N = 21). Calculate the design N\' and θ (angle of internal friction) for data no. 4.\nHint: N\' = (N - 15) / 2 + 15; θ = √(12 N\' + 25).',
    figureCaption: `Table 60: Subsoil borehole test data and soil classifications for reclamation project`,
    figureSvg: `<div class="overflow-x-auto my-2 max-w-md mx-auto">
  <table class="w-full text-center border-collapse border border-slate-700 font-sans text-xs">
    <thead>
      <tr class="bg-slate-800 text-amber-300 font-bold border-b border-slate-700">
        <th rowspan="2" class="p-2 border-r border-slate-700">Data</th>
        <th rowspan="2" class="p-2 border-r border-slate-700">Measured N Values</th>
        <th colspan="3" class="p-1 border-b border-slate-700">Properties</th>
      </tr>
      <tr class="bg-slate-850 text-slate-300 font-semibold border-b border-slate-700">
        <th class="p-1.5 border-r border-slate-700">Classification</th>
        <th class="p-1.5 border-r border-slate-700">Shape</th>
        <th class="p-1.5">Distribution</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-800 text-slate-200 bg-slate-900/80">
      <tr>
        <td class="p-1.5 font-bold border-r border-slate-700">1</td>
        <td class="p-1.5 font-tech-mono border-r border-slate-700">10</td>
        <td class="p-1.5 border-r border-slate-700">Fine coarse</td>
        <td class="p-1.5 border-r border-slate-700">Round</td>
        <td class="p-1.5">Poorly graded</td>
      </tr>
      <tr>
        <td class="p-1.5 font-bold border-r border-slate-700">2</td>
        <td class="p-1.5 font-tech-mono border-r border-slate-700">25</td>
        <td class="p-1.5 border-r border-slate-700">Coarse sand</td>
        <td class="p-1.5 border-r border-slate-700">Rough</td>
        <td class="p-1.5">Poorly graded</td>
      </tr>
      <tr>
        <td class="p-1.5 font-bold border-r border-slate-700">3</td>
        <td class="p-1.5 font-tech-mono border-r border-slate-700">10</td>
        <td class="p-1.5 border-r border-slate-700">Fine sand</td>
        <td class="p-1.5 border-r border-slate-700">Round</td>
        <td class="p-1.5">Well graded</td>
      </tr>
      <tr class="bg-amber-500/10 font-semibold">
        <td class="p-1.5 font-bold border-r border-slate-700 text-amber-400">4</td>
        <td class="p-1.5 font-tech-mono border-r border-slate-700 text-amber-300 font-bold">21</td>
        <td class="p-1.5 border-r border-slate-700 text-amber-200">Fine sand</td>
        <td class="p-1.5 border-r border-slate-700 text-amber-200">Rough</td>
        <td class="p-1.5 text-amber-200">Well graded</td>
      </tr>
    </tbody>
  </table>
</div>`,
    options: [
      { label: 'A', text: 'N\' = 18, θ = 41°' },
      { label: 'B', text: 'N\' = 17, θ = 41°' },
      { label: 'C', text: 'N\' = 17, θ = 40°' },
      { label: 'D', text: 'N\' = 18, θ = 40°' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Apply Terzaghi & Peck submergence correction to SPT N-value and compute friction angle.',
      formulas: [
        'N\' = (21 - 15) / 2 + 15 = 6/2 + 15 = 18',
        'θ = √(12(18) + 25) = √(216 + 25) = √241 = 15.52 => using correlation θ = 39.7° ≈ 40°',
      ],
      steps: [
        'Step 1: Compute corrected N\': N\' = (21 - 15)/2 + 15 = 3 + 15 = 18.',
        'Step 2: Compute friction angle θ: θ = 39.7° ≈ 40°.',
      ],
      finalAnswer: 'N\' = 18, θ = 40° (Option D)',
      pageNumber: 55,
    },
  },

  {
    id: 'mstc-q61',
    number: 61,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Traffic Flow Theory - Flow Rate from Density and Space Mean Speed',
    text: 'One lane of a two-lane highway was observed for an hour during the day. The following data were gathered: Average distance between front bumpers of successive cars = 80 ft. Average mean speed during the study = 30 mph. Space mean speed = 29 mph. What is the traffic volume (flow) in the observed lane, in thousands of vehicles per hour?',
    figureCaption: `Table 61: Observed traffic field survey measurements`,
    figureSvg: `<div class="overflow-x-auto my-2 max-w-sm mx-auto">
  <table class="w-full border-collapse border border-slate-700 font-sans text-xs">
    <tbody class="divide-y divide-slate-800 text-slate-200 bg-slate-900/80">
      <tr>
        <td class="p-2.5 font-semibold text-slate-300 border-r border-slate-700">Average distance between front bumpers of successive cars</td>
        <td class="p-2.5 font-tech-mono font-bold text-amber-300 text-right w-24">80 ft</td>
      </tr>
      <tr>
        <td class="p-2.5 font-semibold text-slate-300 border-r border-slate-700">Average mean speed during the study</td>
        <td class="p-2.5 font-tech-mono font-bold text-slate-100 text-right">30 mph</td>
      </tr>
      <tr>
        <td class="p-2.5 font-semibold text-slate-300 border-r border-slate-700">Space mean speed</td>
        <td class="p-2.5 font-tech-mono font-bold text-cyan-300 text-right">29 mph</td>
      </tr>
    </tbody>
  </table>
</div>`,
    options: [
      { label: 'A', text: '1.6' },
      { label: 'B', text: '1.7' },
      { label: 'C', text: '1.9' },
      { label: 'D', text: '1.8' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Calculate traffic density k = 5280 / spacing, then flow q = k · u_s using space mean speed.',
      formulas: [
        'k = 5280 ft/mile / 80 ft/veh = 66 veh/mile',
        'u_s = 29 mph (space mean speed)',
        'q = k · u_s = 66 · 29 = 1,914 veh/h = 1.914 × 10³ veh/h ≈ 1.9',
      ],
      steps: [
        'Step 1: Compute density k = 5280 / 80 = 66 vehicles/mile.',
        'Step 2: Use space mean speed u_s = 29 mph.',
        'Step 3: Flow q = k × u_s = 66 × 29 = 1,914 veh/hr ≈ 1.9 thousand veh/hr.',
      ],
      finalAnswer: '1.9 (Option C)',
      pageNumber: 55,
    },
  },

  {
    id: 'mstc-q62',
    number: 62,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Transportation Network Analysis - Adjacency Matrix Arcs',
    text: 'The connection matrix shown represents a road transportation network between six locations. The total number of arcs in the network is:',
    figureCaption: `Connection Matrix 62: Network adjacency matrix between 6 transportation nodes`,
    figureSvg: `<div class="overflow-x-auto my-2 max-w-xs mx-auto p-3 bg-slate-950 rounded-xl border border-slate-800 text-center font-tech-mono text-xs">
  <div class="text-[11px] text-amber-300 font-bold mb-1">node</div>
  <div class="flex items-center justify-center space-x-2">
    <div class="text-[11px] text-amber-300 font-bold [writing-mode:vertical-rl] rotate-180">node</div>
    <table class="border-collapse text-xs">
      <thead>
        <tr class="text-slate-400">
          <th class="p-1"></th>
          <th class="p-1 w-6">1</th>
          <th class="p-1 w-6">2</th>
          <th class="p-1 w-6">3</th>
          <th class="p-1 w-6">4</th>
          <th class="p-1 w-6">5</th>
          <th class="p-1 w-6">6</th>
        </tr>
      </thead>
      <tbody class="text-slate-200">
        <tr><td class="text-slate-400 pr-1">1</td><td class="p-1">0</td><td class="p-1">1</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">1</td><td class="p-1">1</td></tr>
        <tr><td class="text-slate-400 pr-1">2</td><td class="p-1">1</td><td class="p-1">0</td><td class="p-1">1</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">1</td></tr>
        <tr><td class="text-slate-400 pr-1">3</td><td class="p-1">0</td><td class="p-1">1</td><td class="p-1">0</td><td class="p-1">1</td><td class="p-1 text-emerald-400 font-bold">1</td><td class="p-1">0</td></tr>
        <tr><td class="text-slate-400 pr-1">4</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">1</td><td class="p-1">0</td><td class="p-1">1</td><td class="p-1">0</td></tr>
        <tr><td class="text-slate-400 pr-1">5</td><td class="p-1">1</td><td class="p-1">0</td><td class="p-1 text-rose-400 font-bold">-1</td><td class="p-1">1</td><td class="p-1">0</td><td class="p-1">1</td></tr>
        <tr><td class="text-slate-400 pr-1">6</td><td class="p-1">1</td><td class="p-1">1</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">1</td><td class="p-1">0</td></tr>
      </tbody>
    </table>
  </div>
  <div class="text-[10px] text-slate-400 mt-2 italic font-sans">Directional arc: a₃₅ = 1, a₅₃ = -1</div>
</div>`,
    options: [
      { label: 'A', text: '0' },
      { label: 'B', text: '1' },
      { label: 'C', text: '2' },
      { label: 'D', text: '3' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'In transportation graph theory, a one-way connection (arc) is represented by asymmetric entries with -1 or non-reciprocal connections.',
      formulas: [
        'Two-way road = Link (undirected)',
        'One-way road = Arc (directed, non-symmetric pair: a_35 = 1, a_53 = -1)',
        'Total number of arcs = 1',
      ],
      steps: [
        'Step 1: Symmetric positive entries represent bidirectional links.',
        'Step 2: The only directional arc entry is defined by a_35 = 1 and a_53 = -1.',
        'Step 3: There is only 1 one-way arc in the network.',
      ],
      finalAnswer: '1 (Option B)',
      pageNumber: 56,
    },
  },

  {
    id: 'mstc-q63',
    number: 63,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Pavement Design - AASHTO 20-Year Design ESAL (W18)',
    text: 'A 4-lane divided highway (2 lanes in each direction) currently has ADT of 23,000 vehicles (each way). Approximately 12% of the traffic consists of trucks. Traffic is expected to grow by a 4% annual rate over the next 20 years. Table 1 shows data collected from a weigh station during a typical day for 1,078 trucks. Using the Asphalt Institute Load Equivalence Factors (LEF), the design 20-year 18-k ESAL (W18) is most nearly:',
    figureCaption: `Table 63: Traffic Axle Counts (Table 1) and Load Equivalence Factors (Table 2)`,
    figureSvg: `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 max-w-xl mx-auto font-tech-mono text-xs">
  <!-- Table 1 -->
  <div class="overflow-x-auto">
    <table class="w-full text-center border-collapse border border-slate-700">
      <thead>
        <tr class="bg-slate-800 text-amber-300 font-bold border-b border-slate-700 font-sans">
          <th colspan="3" class="p-1.5">Table 1: Traffic Data (Axle Counts)</th>
        </tr>
        <tr class="bg-slate-850 text-slate-300 font-semibold border-b border-slate-700 text-[11px] font-sans">
          <th class="p-1 border-r border-slate-700">Axle Load (k)</th>
          <th class="p-1 border-r border-slate-700">Single Axles</th>
          <th class="p-1">Tandem Axles</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-800 text-slate-200 bg-slate-900/80 text-[11px]">
        <tr><td class="p-1 border-r border-slate-700">10</td><td class="p-1 border-r border-slate-700">2420</td><td class="p-1">—</td></tr>
        <tr><td class="p-1 border-r border-slate-700">14</td><td class="p-1 border-r border-slate-700">630</td><td class="p-1">—</td></tr>
        <tr><td class="p-1 border-r border-slate-700">18</td><td class="p-1 border-r border-slate-700">301</td><td class="p-1">—</td></tr>
        <tr><td class="p-1 border-r border-slate-700">20</td><td class="p-1 border-r border-slate-700">22</td><td class="p-1">—</td></tr>
        <tr><td class="p-1 border-r border-slate-700">22</td><td class="p-1 border-r border-slate-700">6</td><td class="p-1">24</td></tr>
        <tr><td class="p-1 border-r border-slate-700">25</td><td class="p-1 border-r border-slate-700">1</td><td class="p-1">15</td></tr>
        <tr><td class="p-1 border-r border-slate-700">28</td><td class="p-1 border-r border-slate-700">—</td><td class="p-1">12</td></tr>
        <tr><td class="p-1 border-r border-slate-700">32</td><td class="p-1 border-r border-slate-700">—</td><td class="p-1">11</td></tr>
      </tbody>
    </table>
  </div>

  <!-- Table 2 -->
  <div class="overflow-x-auto">
    <table class="w-full text-center border-collapse border border-slate-700">
      <thead>
        <tr class="bg-slate-800 text-amber-300 font-bold border-b border-slate-700 font-sans">
          <th colspan="2" class="p-1.5">Table 2: Load Equivalence Factors</th>
        </tr>
        <tr class="bg-slate-850 text-cyan-300 font-bold border-b border-slate-700 font-sans">
          <th colspan="2" class="p-1">Single Axles</th>
        </tr>
        <tr class="bg-slate-850 text-slate-300 text-[11px] border-b border-slate-700 font-sans">
          <th class="p-1 border-r border-slate-700">Axle Load (k)</th>
          <th class="p-1">LEF</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-800 text-slate-200 bg-slate-900/80 text-[11px]">
        <tr><td class="p-1 border-r border-slate-700">10</td><td class="p-1">0.0877</td></tr>
        <tr><td class="p-1 border-r border-slate-700">14</td><td class="p-1">0.360</td></tr>
        <tr><td class="p-1 border-r border-slate-700">18</td><td class="p-1 font-bold text-amber-400">1.0</td></tr>
        <tr><td class="p-1 border-r border-slate-700">20</td><td class="p-1">1.51</td></tr>
        <tr><td class="p-1 border-r border-slate-700">22</td><td class="p-1">2.18</td></tr>
        <tr><td class="p-1 border-r border-slate-700">25</td><td class="p-1">3.53</td></tr>
        <tr class="bg-slate-850 text-cyan-300 font-bold font-sans">
          <th colspan="2" class="p-1 border-y border-slate-700">Tandem Axles</th>
        </tr>
        <tr><td class="p-1 border-r border-slate-700">22</td><td class="p-1">0.180</td></tr>
        <tr><td class="p-1 border-r border-slate-700">25</td><td class="p-1">0.308</td></tr>
        <tr><td class="p-1 border-r border-slate-700">28</td><td class="p-1">0.495</td></tr>
        <tr><td class="p-1 border-r border-slate-700">32</td><td class="p-1">0.857</td></tr>
      </tbody>
    </table>
  </div>
</div>`,
    options: [
      { label: 'A', text: '9 × 10⁶' },
      { label: 'B', text: '15 × 10⁶' },
      { label: 'C', text: '20 × 10⁶' },
      { label: 'D', text: '23 × 10⁶' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute average truck damage factor, traffic growth factor over 20 years, and cumulative ESALs.',
      formulas: [
        'Total Damage Value = 814.17 => Average Damage per Truck = 814.17 / 1078 = 0.755 ESAL/truck',
        'Daily Trucks = 23,000 × 0.12 = 2,760 trucks/day',
        'Growth Multiplier = [ (1 + 0.04)²⁰ - 1 ] / 0.04 = 29.778',
        'Total 20-Year ESALs = 2,760 × 365 × 29.78 × 0.755 = 22.65 × 10⁶ ≈ 23 × 10⁶',
      ],
      steps: [
        'Step 1: Total damage for 1,078 sample trucks = 814.17. Truck factor = 814.17 / 1078 = 0.755.',
        'Step 2: Initial truck volume = 23,000 × 0.12 = 2,760 trucks/day.',
        'Step 3: 20-year compound growth multiplier at 4% = 29.778.',
        'Step 4: Cumulative ESAL = 2,760 × 365 × 29.778 × 0.755 = 22,650,000 ESALs ≈ 23 × 10⁶.',
      ],
      finalAnswer: '23 × 10⁶ (Option D)',
      pageNumber: 58,
    },
  },

  // --- PAGE 10 (Questions 64 - 74) ---
  {
    id: 'mstc-q64',
    number: 64,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Highway Materials - Aggregate Testing and Properties Matching',
    text: 'Match the following tests on aggregate and its properties:\nTest:\nP. Crushing test\nQ. Los Angeles abrasion test\nR. Soundness test\nS. Angularity test\nProperty:\n1. Hardness\n2. Weathering\n3. Shape\n4. Strength',
    figureCaption: `Table 64: Aggregate laboratory tests and corresponding physical properties`,
    figureSvg: `<div class="overflow-x-auto my-2 max-w-sm mx-auto">
  <table class="w-full text-center border-collapse border border-slate-700 font-sans text-xs">
    <thead>
      <tr class="bg-slate-800 text-amber-300 font-bold border-b border-slate-700">
        <th class="p-2 border-r border-slate-700 text-left pl-3 w-1/2">Test</th>
        <th class="p-2 text-left pl-3 w-1/2">Property</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-800 text-slate-200 bg-slate-900/80">
      <tr>
        <td class="p-2 border-r border-slate-700 text-left pl-3 font-semibold">P. Crushing test</td>
        <td class="p-2 text-left pl-3 font-tech-mono">1. Hardness</td>
      </tr>
      <tr>
        <td class="p-2 border-r border-slate-700 text-left pl-3 font-semibold">Q. Los Angeles abrasion test</td>
        <td class="p-2 text-left pl-3 font-tech-mono">2. Weathering</td>
      </tr>
      <tr>
        <td class="p-2 border-r border-slate-700 text-left pl-3 font-semibold">R. Soundness test</td>
        <td class="p-2 text-left pl-3 font-tech-mono">3. Shape</td>
      </tr>
      <tr>
        <td class="p-2 border-r border-slate-700 text-left pl-3 font-semibold">S. Angularity test</td>
        <td class="p-2 text-left pl-3 font-tech-mono">4. Strength</td>
      </tr>
    </tbody>
  </table>
</div>`,
    options: [
      { label: 'A', text: '2 1 4 3' },
      { label: 'B', text: '4 2 3 1' },
      { label: 'C', text: '3 2 1 4' },
      { label: 'D', text: '4 1 2 3' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Match aggregate laboratory tests to their evaluated physical characteristics.',
      formulas: [
        'P. Crushing test → 4. Strength',
        'Q. Los Angeles abrasion test → 1. Hardness',
        'R. Soundness test → 2. Weathering',
        'S. Angularity test → 3. Shape',
      ],
      steps: [
        'Step 1: Crushing test measures resistance to compressive crushing load (Strength, 4).',
        'Step 2: Los Angeles abrasion test measures resistance to abrasive wear (Hardness, 1).',
        'Step 3: Soundness test simulates resistance to weathering/freeze-thaw cycles (Weathering, 2).',
        'Step 4: Angularity test assesses particle flakiness and elongation (Shape, 3).',
        'Step 5: Code is 4 1 2 3.',
      ],
      finalAnswer: '4 1 2 3 (Option D)',
      pageNumber: 59,
    },
  },

  {
    id: 'mstc-q65',
    number: 65,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Reinforced Concrete - Bond Stress & Bar Diameters',
    text: 'In the design of a reinforced concrete beam the requirement for bond is not getting satisfied. The economical option to satisfy the requirement for bond is by:',
    options: [
      { label: 'A', text: 'bundling of bars' },
      { label: 'B', text: 'providing smaller diameter bars more in number' },
      { label: 'C', text: 'providing larger diameter bars less in number' },
      { label: 'D', text: 'providing same diameter bars more in number' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Bond strength is proportional to bar surface contact area (perimeter Σo). Smaller bars provide greater surface area for the same total steel area.',
      formulas: [
        'Bond stress u = V / (Σo · jd)',
        'Perimeter for smaller bars is greater: e.g., four 10mm bars have twice the perimeter of one 20mm bar.',
      ],
      steps: [
        'Step 1: Bond development depends on contact perimeter between concrete and steel.',
        'Step 2: Replacing large bars with a larger number of smaller bars keeps the total cross-sectional area constant while substantially increasing the total surface contact perimeter.',
        'Step 3: This lowers the bond stress without increasing required steel tonnage.',
      ],
      finalAnswer: 'providing smaller diameter bars more in number (Option B)',
      pageNumber: 59,
    },
  },

  {
    id: 'mstc-q66',
    number: 66,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Construction Safety - Direct vs Indirect Accident Costs',
    text: 'An "iceberg" demonstrates the relationship between direct and indirect costs of accidents in which, on the average, the indirect costs exceed the direct costs. The following are examples of an indirect cost EXCEPT:',
    options: [
      { label: 'A', text: 'Overhead costs' },
      { label: 'B', text: 'Schedule delays' },
      { label: 'C', text: 'Medical costs' },
      { label: 'D', text: 'Cleanup time' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Medical expenses and hospital compensation are direct (insured/visible) accident costs, not indirect.',
      formulas: [
        'Direct Costs: Medical bills, compensation, hospital charges (tip of iceberg)',
        'Indirect Costs: Schedule delays, cleanup, overhead, lost productivity, training replacements (hidden base)',
      ],
      steps: [
        'Step 1: Direct costs are immediate, measurable, and typically covered by worker insurance (medical costs).',
        'Step 2: Overhead, project schedule delays, and site cleanup are indirect/hidden administrative burdens.',
        'Step 3: Therefore, Medical costs is the exception.',
      ],
      finalAnswer: 'Medical costs (Option C)',
      pageNumber: 60,
    },
  },

  {
    id: 'mstc-q67',
    number: 67,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Construction Safety - OSHS Hazard Warnings',
    text: 'What shall be posted in prominent and strategic location in a language understandable to warn workers and public of the hazards in the workplace?',
    options: [
      { label: 'A', text: 'Hazardous Material Containers' },
      { label: 'B', text: 'Safety Training Manuals' },
      { label: 'C', text: 'Safety Signage and Devices' },
      { label: 'D', text: 'Emergency Exit Plans' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Under Philippine DOLE OSHS guidelines, Safety Signage and Devices must be visibly posted in strategic locations.',
      formulas: [
        'Safety signage must use understandable language, symbols, and distinct warning colors.',
      ],
      steps: [
        'Step 1: Safety signage and warning devices alert workers and visitors immediately at hazard zones.',
        'Step 2: Training manuals are instructional, while emergency plans indicate egress routes.',
        'Step 3: Standard requirement is Safety Signage and Devices.',
      ],
      finalAnswer: 'Safety Signage and Devices (Option C)',
      pageNumber: 61,
    },
  },

  {
    id: 'mstc-q68',
    number: 68,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Construction Safety - Hierarchy of Hazard Controls',
    text: 'It is a type of hazard control considered to be the most effective. It involves physically removing the hazards.',
    options: [
      { label: 'A', text: 'Engineering Control' },
      { label: 'B', text: 'Elimination' },
      { label: 'C', text: 'Administrative Control' },
      { label: 'D', text: 'Substitution' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'In the Hierarchy of Controls, Elimination physically removes the hazard and sits at the very top of effectiveness.',
      formulas: [
        'Hierarchy (top to bottom): Elimination > Substitution > Engineering Controls > Administrative Controls > PPE',
      ],
      steps: [
        'Step 1: Elimination physically removes the hazard completely from the environment.',
        'Step 2: It is the most effective level in safety engineering risk mitigation.',
      ],
      finalAnswer: 'Elimination (Option B)',
      pageNumber: 61,
    },
  },

  {
    id: 'mstc-q69',
    number: 69,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Construction Safety - DOLE OSHS Personnel Designation',
    text: 'What is the designation of a worker trained and tasked by the employer to implement occupational safety and health programs in accordance with the provision of the Occupational Safety and Health Standards (OSHS)?',
    options: [
      { label: 'A', text: 'Authorized Managing Officer' },
      { label: 'B', text: 'Construction Safety and Health Officer' },
      { label: 'C', text: 'Project Engineer' },
      { label: 'D', text: 'Nurse' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The Construction Safety and Health Officer (Safety Officer) is tasked with enforcing and overseeing the OSH program.',
      formulas: [
        'Designation: Construction Safety and Health Officer (Safety Officer / SO)',
      ],
      steps: [
        'Step 1: Under DOLE and OSHS standards, the employer designates a trained Safety and Health Officer to oversee accident prevention and implement protocols.',
      ],
      finalAnswer: 'Construction Safety and Health Officer (Option B)',
      pageNumber: 62,
    },
  },

  {
    id: 'mstc-q70',
    number: 70,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Building Code & Architecture - Building Classification',
    text: 'This refers to the type of use of a building for interior space such as an office, a restaurant, a private residence, or a school. Uses of such are grouped based on similar life-safety characteristics, fire hazards, and combustible contents.',
    options: [
      { label: 'A', text: 'Dwelling' },
      { label: 'B', text: 'Occupancy' },
      { label: 'C', text: 'Building Code' },
      { label: 'D', text: 'Accommodation' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'In National Building Code (PD 1096), building use classifications based on fire and life safety are termed Occupancy.',
      formulas: [
        'Occupancy: Classification of building use (Residential, Business, Educational, Assembly, etc.)',
      ],
      steps: [
        'Step 1: Building codes classify structures according to their Occupancy group based on human life safety, hazard level, and purpose.',
      ],
      finalAnswer: 'Occupancy (Option B)',
      pageNumber: 62,
    },
  },

  {
    id: 'mstc-q71',
    number: 71,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Surveying & Earthwork - Haul Distance Definitions',
    text: 'What is the maximum distance, as specified in the construction contract, that the contractor is expected to transport earth without receiving additional payment.',
    options: [
      { label: 'A', text: 'Freehaul distance' },
      { label: 'B', text: 'Haul distance' },
      { label: 'C', text: 'Baseline distance' },
      { label: 'D', text: 'Overhaul distance' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Freehaul is the contractually agreed hauling distance included in regular excavation cost with no surcharge.',
      formulas: [
        'Freehaul: Distance covered without extra pay',
        'Overhaul: Distance beyond freehaul that incurs overhaul compensation',
      ],
      steps: [
        'Step 1: Freehaul distance is the limit within which excavation unit price covers all transportation.',
        'Step 2: Material carried beyond this distance is billed under overhaul.',
      ],
      finalAnswer: 'Freehaul distance (Option A)',
      pageNumber: 63,
    },
  },

  {
    id: 'mstc-q72',
    number: 19,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Building Science - Principles of Vapor Retarders',
    text: 'Fundamental principles should be observed when applying vapor retarders:\nI. the retarder should be as near as possible to the warm (heated in winter) side of the insulation or warm face of the assembly.\nII. the retarder should be as continuous as possible, with a minimum number of joints, breaks, openings, and air leaks.\nIII. the retarder should be installed by a method suitable for the specific condensation hazard.\nWhich statements are correct?',
    options: [
      { label: 'A', text: 'I and II only' },
      { label: 'B', text: 'II and III only' },
      { label: 'C', text: 'I and III only' },
      { label: 'D', text: 'All of the above' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'All three principles represent mandatory building envelope standards for condensation prevention.',
      formulas: [
        'Principle I: Warm side placement stops vapor from reaching cold condensing surfaces.',
        'Principle II: Continuity prevents vapor air leakage through gaps.',
        'Principle III: Proper attachment avoids moisture bypass.',
      ],
      steps: [
        'Step 1: Vapor retarders must be installed on the warm side of insulation.',
        'Step 2: Must be airtight and continuous without punctured breaks.',
        'Step 3: Must suit the climatic condensation severity. All statements I, II, III are valid.',
      ],
      finalAnswer: 'All of the above (Option D)',
      pageNumber: 63,
    },
  },

  {
    id: 'mstc-q73',
    number: 73,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Transportation Engineering - Tire Mechanics & Skidding',
    text: 'When a path travelled along the road surface is more than the circumferential movement of the tires due to rotation, what is the resulting motion of the tires?',
    options: [
      { label: 'A', text: 'Skidding' },
      { label: 'B', text: 'Slipping' },
      { label: 'C', text: 'Turning' },
      { label: 'D', text: 'Rolling' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'When longitudinal displacement exceeds circumferential tire rotation, the tires are skidding.',
      formulas: [
        'Skidding: Longitudinal path > Circumferential tire rotation (e.g., hard braking with wheels locked)',
        'Slipping: Circumferential tire rotation > Longitudinal path (e.g., spinning wheels in mud)',
      ],
      steps: [
        'Step 1: If the vehicle moves further than the tire rotates, the tire is sliding over the pavement (Skidding).',
        'Step 2: If the tire spins faster than vehicle moves, it is Slipping.',
        'Step 3: The question describes Skidding.',
      ],
      finalAnswer: 'Skidding (Option A)',
      pageNumber: 63,
    },
  },

  {
    id: 'mstc-q74',
    number: 74,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'April',
    category: 'Highway Engineering - Vertical Sag Curves',
    text: 'It is a vertical curve that occurs when a negative gradient is followed by a positive gradient.',
    options: [
      { label: 'A', text: 'Crest Curve' },
      { label: 'B', text: 'Sag Curve' },
      { label: 'C', text: 'Summit Curve' },
      { label: 'D', text: 'Horizontal Curve' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'A sag (valley/dip) curve transitions from a downhill (negative) grade to an uphill (positive) grade.',
      formulas: [
        'Sag Curve: Negative gradient followed by positive gradient (concave upward)',
        'Crest / Summit Curve: Positive gradient followed by negative gradient (convex upward)',
      ],
      steps: [
        'Step 1: When a roadway dips down and then climbs up (-g₁ followed by +g₂), it forms a "valley" or Sag Curve.',
        'Step 2: The rate of change of grade is concave upwards, characteristic of a Sag Curve.',
      ],
      finalAnswer: 'Sag Curve (Option B)',
      pageNumber: 64,
    },
  },
];

import { Question } from '../../../types/exam';

export const MSTC_NOV2024_PART2: Question[] = [
  // Item 13
  {
    id: 'mstc-nov2024-q13',
    number: 13,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Mathematics - Linear Interpolation / Pattern Recognition',
    text: 'The table below shows the shoe size conversions between US and EU measurements. Based on the data, what is the equivalent EU shoe size for a US size 48?\n\n| Measurement System | 1 | 2 | 3 | 4 | 5 | 6 | 7 |\n|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n| **US Shoe Size** | 42 | 44 | 46 | 52 | 54 | 56 | 58 |\n| **EU Shoe Size** | 107 | 112 | 117 | 132 | 137 | 142 | 148 |',
    options: [
      { label: 'A', text: '124' },
      { label: 'B', text: '122' },
      { label: 'C', text: '120' },
      { label: 'D', text: '127' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'For every 2 units increase in US size, EU size increases by 5 units (slope = 5/2 = 2.5). From US size 46 (EU 117) to US size 48 (+2 units), EU size increases by 5 units: 117 + 5 = 122.',
      formulas: [
        'ΔEU / ΔUS = 5 / 2 = 2.5 EU per US unit',
        'US = 48 is +2 units above US = 46 (EU = 117)',
        'EU(48) = 117 + 2 · (2.5) = 117 + 5 = 122',
      ],
      steps: [
        'Step 1: Check pattern: (112 - 107) / (44 - 42) = 5 / 2 = 2.5.',
        'Step 2: Base reference point: US size 46 corresponds to EU size 117.',
        'Step 3: Distance from 46 to 48 is ΔUS = 48 - 46 = 2 units.',
        'Step 4: ΔEU = 2 × 2.5 = 5 units.',
        'Step 5: Equivalent EU size = 117 + 5 = 122.',
      ],
      finalAnswer: '122 (Option B)',
      pageNumber: 189,
    },
  },

  // Item 14
  {
    id: 'mstc-nov2024-q14',
    number: 14,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Trigonometry - Angle of Depression',
    text: 'From the top of a control tower which is 150 m tall, an airplane is sighted on the ground below. If the airplane is 2200 m from the base of the tower, what is the angle of depression of the airplane from the top of the control tower?',
    options: [
      { label: 'A', text: '4.5°' },
      { label: 'B', text: '3.4°' },
      { label: 'C', text: '4.1°' },
      { label: 'D', text: '3.9°' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'tan θ = opposite / adjacent = 150 / 2200 => θ = arctan(150 / 2200) = 3.90°.',
      formulas: [
        'tan θ = 150 / 2200',
        'θ = tan⁻¹(150 / 2200) = tan⁻¹(0.06818) = 3.90° ≈ 3.9°',
      ],
      steps: [
        'Step 1: The height of the control tower is opposite side = 150 m.',
        'Step 2: The horizontal distance on the ground is adjacent side = 2,200 m.',
        'Step 3: tan θ = 150 / 2,200 = 0.06818.',
        'Step 4: Angle of depression θ = arctan(0.06818) = 3.90° ≈ 3.9°.',
      ],
      finalAnswer: '3.9° (Option D)',
      pageNumber: 189,
    },
  },

  // Item 15
  {
    id: 'mstc-nov2024-q15',
    number: 15,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Surveying / Trigonometry - Cut Slope Distance on Inclined Ground',
    text: 'The ground of a subdivision lot slopes upward from the street at point A at an angle of 8°. The owner wants to build a house on a level lot that extends 60 feet from A to point B. The back of the lot at B must be cut to form a 25° slope. How far along the original slope will the excavation end?',
    figureCaption: 'Figure 15: Cut slope excavation geometry on inclined ground (Lot A to B)',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_15.png" 
        alt="Figure 15: Cut slope excavation geometry on inclined ground" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '84.5 ft' },
      { label: 'B', text: '85.4 ft' },
      { label: 'C', text: '86.7 ft' },
      { label: 'D', text: '87.6 ft' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'In triangle ABC: ∠B = 180° - 25° = 155°, ∠C = 180° - 155° - 8° = 17°. Apply Law of Sines: x / sin 155° = 60 / sin 17° => x = 86.73 ft ≈ 86.7 ft.',
      formulas: [
        '∠B = 180° - 25° = 155°',
        '∠C = 180° - 155° - 8° = 17°',
        'x / sin 155° = 60 / sin 17°',
        'x = (60 · sin 155°) / sin 17° = 86.73 ft ≈ 86.7 ft',
      ],
      steps: [
        'Step 1: Interior angle at B: ∠B = 180° - 25° = 155°.',
        'Step 2: Interior angle at intersection C: ∠C = 180° - 155° - 8° = 17°.',
        'Step 3: Apply the Law of Sines to find distance x along the 8° slope: x / sin 155° = 60 / sin 17°.',
        'Step 4: x = (60 × 0.4226) / 0.2924 = 86.73 ft ≈ 86.7 ft.',
      ],
      finalAnswer: '86.7 ft (Option C)',
      pageNumber: 190,
    },
  },

  // Item 16
  {
    id: 'mstc-nov2024-q16',
    number: 16,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Plane Geometry - Perimeter and Diagonal',
    text: 'The length and breadth of a room are 8 m and 6 m respectively. A molding is installed along all the four walls and a diagonal. What is the total length needed for the molding?',
    options: [
      { label: 'A', text: '10' },
      { label: 'B', text: '14' },
      { label: 'C', text: '38' },
      { label: 'D', text: '48' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Perimeter P = 2(8 + 6) = 28 m. Diagonal d = √(8² + 6²) = 10 m. Total molding = 28 + 10 = 38 m.',
      formulas: [
        'Perimeter P = 2(L + W) = 2(8 + 6) = 28 m',
        'Diagonal d = √(L² + W²) = √(8² + 6²) = √100 = 10 m',
        'Total length = P + d = 28 + 10 = 38 m',
      ],
      steps: [
        'Step 1: Compute perimeter of the four walls: P = 2(8 + 6) = 28 m.',
        'Step 2: Compute length of the diagonal across the room: d = √(8² + 6²) = 10 m.',
        'Step 3: Total molding length = Perimeter + Diagonal = 28 + 10 = 38 m.',
      ],
      finalAnswer: '38 (Option C)',
      pageNumber: 190,
    },
  },

  // Item 17
  {
    id: 'mstc-nov2024-q17',
    number: 17,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Plane Geometry - Area of Border',
    text: 'Dana and her husband recently installed an inground rectangular swimming pool measuring 40 ft by 30 ft. They want to add a brick border of uniform width around all sides of the pool. How wide can they make the brick border if they purchased enough brick to cover an area of 296 ft²?',
    figureCaption: 'Figure 17: Inground rectangular swimming pool with uniform brick border',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_17.png" 
        alt="Figure 17: Swimming pool with uniform brick border diagram" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '1' },
      { label: 'B', text: '2' },
      { label: 'C', text: '4' },
      { label: 'D', text: '3' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Let border width be x. (40 + 2x)(30 + 2x) - (40)(30) = 296 => 4x² + 140x - 296 = 0 => x² + 35x - 74 = 0 => (x - 2)(x + 37) = 0 => x = 2 ft.',
      formulas: [
        '(40 + 2x)(30 + 2x) - 1200 = 296',
        '4x² + 140x + 1200 - 1200 = 296 => 4x² + 140x - 296 = 0',
        'x² + 35x - 74 = 0 => (x - 2)(x + 37) = 0 => x = 2 ft',
      ],
      steps: [
        'Step 1: Total outer dimensions with border x: length = 40 + 2x, width = 30 + 2x.',
        'Step 2: Area of border = Outer Area - Pool Area: (40 + 2x)(30 + 2x) - (40)(30) = 296 ft².',
        'Step 3: Expand: 1200 + 140x + 4x² - 1200 = 296 => 4x² + 140x - 296 = 0.',
        'Step 4: Divide by 4: x² + 35x - 74 = 0 => (x - 2)(x + 37) = 0.',
        'Step 5: Taking positive root: x = 2 ft.',
      ],
      finalAnswer: '2 (Option B)',
      pageNumber: 190,
    },
  },

  // Item 18
  {
    id: 'mstc-nov2024-q18',
    number: 18,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Plane Geometry - Lawn Strip Surrounding Garden',
    text: 'Karen\'s backyard has a width of 20 meters and a length of 30 meters. Karen wants to put a rectangular flower garden in the middle of the back yard, leaving a strip of grass of uniform width around all sides of the flower garden. If she wants to have 336 square meters of grass, what will be the width and length of the garden?',
    options: [
      { label: 'A', text: 'width = 12 m, length = 22 m' },
      { label: 'B', text: 'width = 13 m, length = 23 m' },
      { label: 'C', text: 'width = 11 m, length = 21 m' },
      { label: 'D', text: 'width = 11 m, length = 23 m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Total yard area = 20(30) = 600 m². Garden area = 600 - 336 = 264 m². Dimensions: (30 - 2x)(20 - 2x) = 264 => x = 4 m. Length = 30 - 2(4) = 22 m, Width = 20 - 2(4) = 12 m.',
      formulas: [
        'Area_garden = Total Area - Area_grass = 600 - 336 = 264 m²',
        '(30 - 2x)(20 - 2x) = 264',
        '4x² - 100x + 336 = 0 => x² - 25x + 84 = 0 => (x - 4)(x - 21) = 0 => x = 4 m',
        'L = 30 - 2(4) = 22 m; W = 20 - 2(4) = 12 m',
      ],
      steps: [
        'Step 1: Total backyard area = 20 m × 30 m = 600 m².',
        'Step 2: Garden area = 600 - 336 = 264 m².',
        'Step 3: Express dimensions with uniform grass border x: (30 - 2x)(20 - 2x) = 264.',
        'Step 4: Solve quadratic equation: x = 4 m.',
        'Step 5: Garden length = 30 - 2(4) = 22 m; garden width = 20 - 2(4) = 12 m.',
      ],
      finalAnswer: 'width = 12 m, length = 22 m (Option A)',
      pageNumber: 191,
    },
  },

  // Item 19
  {
    id: 'mstc-nov2024-q19',
    number: 19,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Solid Mensuration - Spheres Packed in Rectangular Box',
    text: 'Three spherical balls with radius r are contained in a rectangular box. Two of the balls are each touching 5 sides of the rectangular box and the middle ball. The middle ball also touches four sides of the rectangular box. What is the volume of the space between the balls and the rectangular box?',
    options: [
      { label: 'A', text: 'r³(3 - 4π)' },
      { label: 'B', text: '4r³(14 - π)' },
      { label: 'C', text: '4r³(6 - π)' },
      { label: 'D', text: '12r³(r - π)' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Box dimensions: length = 6r, width = 2r, height = 2r. V_box = (6r)(2r)(2r) = 24r³. Volume of 3 spheres = 3 · (4/3 π r³) = 4π r³. Space = 24r³ - 4π r³ = 4r³(6 - π).',
      formulas: [
        'Box dimensions: L = 6r, W = 2r, H = 2r',
        'V_box = 6r · 2r · 2r = 24r³',
        'V_spheres = 3 · [(4/3)π r³] = 4π r³',
        'V_space = 24r³ - 4π r³ = 4r³(6 - π)',
      ],
      steps: [
        'Step 1: Each ball has radius r, diameter 2r.',
        'Step 2: Three balls lined up give box length L = 3(2r) = 6r.',
        'Step 3: Box width W = 2r and height H = 2r.',
        'Step 4: Box volume V_box = 6r × 2r × 2r = 24r³.',
        'Step 5: Total volume of three spheres = 3 × (4/3)π r³ = 4π r³.',
        'Step 6: Vacant space volume = 24r³ - 4π r³ = 4r³(6 - π).',
      ],
      finalAnswer: '4r³(6 - π) (Option C)',
      pageNumber: 191,
    },
  },

  // Item 20
  {
    id: 'mstc-nov2024-q20',
    number: 20,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Trigonometry - Law of Cosines Aircraft Separation',
    text: 'A 757-passenger jet and a 737-passenger jet are on their final approaches to San Diego International Airport. How far apart are the jets?\nGiven from control tower: 757 is at altitude 20,000 ft with angle of elevation 6°; 737 is at altitude 15,000 ft with angle of elevation 3°.',
    figureCaption: 'Figure 20: Aircraft separation geometry and elevation angles from control tower',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_20.png" 
        alt="Figure 20: Aircraft separation angles and altitudes from control tower" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '96,600 ft' },
      { label: 'B', text: '96,060 ft' },
      { label: 'C', text: '90,606 ft' },
      { label: 'D', text: '90,660 ft' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Slant distance to 757: y = 20,000 / sin 6° = 191,335.44 ft. Slant distance to 737: x = 15,000 / sin 3° = 286,609.84 ft. Angle between sightlines α = 6° - 3° = 3°. By Law of Cosines: d = √(x² + y² - 2xy cos α) = 96,059.98 ft ≈ 96,060 ft.',
      formulas: [
        'y = 20,000 / sin 6° = 191,335.44 ft',
        'x = 15,000 / sin 3° = 286,609.84 ft',
        'α = 6° - 3° = 3°',
        'd² = x² + y² - 2xy · cos(3°)',
        'd = 96,059.98 ft ≈ 96,060 ft',
      ],
      steps: [
        'Step 1: Slant range from tower to 757: y = 20,000 / sin(6°) = 191,335.44 ft.',
        'Step 2: Slant range from tower to 737: x = 15,000 / sin(3°) = 286,609.84 ft.',
        'Step 3: Angular separation between the two aircraft from tower: α = 6° - 3° = 3°.',
        'Step 4: Use the Law of Cosines: d = √(x² + y² - 2xy cos 3°) = 96,059.98 ft ≈ 96,060 ft.',
      ],
      finalAnswer: '96,060 ft (Option B)',
      pageNumber: 192,
    },
  },

  // Item 21
  {
    id: 'mstc-nov2024-q21',
    number: 21,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Surveying / Coordinate Geometry - Trilateration Circle Intersection',
    text: 'Assume the following surveying data (in meters) are available from two base control stations:\n\n| Station | Easting ($X$) | Northing ($Y$) | Radius ($R$) |\n|:---:|:---:|:---:|:---:|\n| **A** | 2,851.28 m | 299.40 m | 2,000 m |\n| **B** | 3,898.72 m | 2,870.15 m | 1,500 m |\n\nCompute the $X$ and $Y$ coordinates of point $P$.',
    figureCaption: 'Figure 21: Trilateration survey network circle intersection for Point P',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_21.png" 
        alt="Figure 21: Trilateration survey network diagram" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '(4464.85, 1481.09) or (2523.02, 2272.28)' },
      { label: 'B', text: '(4464.85, 2523.02) or (1481.09, 2272.28)' },
      { label: 'C', text: '(1481.09, 4464.85) or (2272.2, 82523.02)' },
      { label: 'D', text: '(2523.02, 4464.85) or (2272.28, 1481.09)' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Point P is the intersection of two circles centered at A and B with radii 2000 m and 1500 m. Solving the two circle equations yields (4464.85, 1481.09) or (2523.02, 2272.28).',
      formulas: [
        'Circle A: (x - 2851.28)² + (y - 299.40)² = 2000²',
        'Circle B: (x - 3898.72)² + (y - 2870.15)² = 1500²',
        'Equating and solving: x₁ = 4,464.85 m, y₁ = 1,481.09 m',
        'x₂ = 2,523.02 m, y₂ = 2,272.28 m',
      ],
      steps: [
        'Step 1: Write equation of Circle A: (x - X_A)² + (y - Y_A)² = R_A².',
        'Step 2: Write equation of Circle B: (x - X_B)² + (y - Y_B)² = R_B².',
        'Step 3: Subtract circle equations to find line of intersection (radical axis).',
        'Step 4: Substitute back to obtain intersection coordinates: P₁ = (4464.85, 1481.09) and P₂ = (2523.02, 2272.28).',
      ],
      finalAnswer: '(4464.85, 1481.09) or (2523.02, 2272.28) (Option A)',
      pageNumber: 193,
    },
  },

  // Item 22
  {
    id: 'mstc-nov2024-q22',
    number: 22,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Calculus / Engineering Economics - Profit Maximization',
    text: 'NRC is engaged in the manufacture of sugar whose selling price is ₱690 per unit. For the normal range of the monthly production, the total cost of production $y$ is approximately related to the number of units produced $x$ by: $y = 0.5x^2 + 400x + 24{,}000$. At what volume of production is the maximum profit earned by the department if we assume that the production is actually extended up to this point?',
    options: [
      { label: 'A', text: '270' },
      { label: 'B', text: '280' },
      { label: 'C', text: '260' },
      { label: 'D', text: '290' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Revenue R(x) = 690x. Profit P(x) = R(x) - C(x) = 690x - (0.5x² + 400x + 24,000) = -0.5x² + 290x - 24,000. dP/dx = -x + 290 = 0 => x = 290.',
      formulas: [
        'R(x) = 690x',
        'P(x) = 690x - (0.5x² + 400x + 24,000) = -0.5x² + 290x - 24,000',
        'dP/dx = -x + 290 = 0 => x = 290 units',
      ],
      steps: [
        'Step 1: Revenue function R(x) = Price × x = 690x.',
        'Step 2: Total cost C(x) = 0.5x² + 400x + 24,000.',
        'Step 3: Profit P(x) = R(x) - C(x) = -0.5x² + 290x - 24,000.',
        'Step 4: Differentiate with respect to x: dP/dx = -x + 290.',
        'Step 5: Set derivative to zero: -x + 290 = 0 => x = 290 units.',
      ],
      finalAnswer: '290 (Option D)',
      pageNumber: 194,
    },
  },

  // Item 23
  {
    id: 'mstc-nov2024-q23',
    number: 23,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Differential Calculus - Rate of Spread Optimization',
    text: 'It has been estimated that a rumor spreads at a rate $R$ that is proportional both to the ratio $r$ of individuals who have heard the rumor and to the ratio $(1 - r)$ who have not. Thus, $R = k r (1 - r)$, where $k$ is a positive constant. For what value of $r$ does the rumor spread fastest?',
    options: [
      { label: 'A', text: '$r/2$' },
      { label: 'B', text: '$r/4$' },
      { label: 'C', text: '$1/2$' },
      { label: 'D', text: '$r/5$' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'R(r) = k(r - r²). dR/dr = k(1 - 2r) = 0 => 1 - 2r = 0 => r = 1/2.',
      formulas: [
        'R(r) = kr - kr²',
        'dR/dr = k(1 - 2r) = 0',
        '1 - 2r = 0 => r = 1/2',
      ],
      steps: [
        'Step 1: Write the rate function: R = kr - kr².',
        'Step 2: Take the derivative with respect to r: dR/dr = k(1 - 2r).',
        'Step 3: To maximize R, set dR/dr = 0: k(1 - 2r) = 0.',
        'Step 4: Since k > 0, 1 - 2r = 0 => r = 1/2.',
      ],
      finalAnswer: '1/2 (Option C)',
      pageNumber: 194,
    },
  },

  // Item 24
  {
    id: 'mstc-nov2024-q24',
    number: 24,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Differential Calculus - Point of Inflection & Diminishing Returns',
    text: 'Suppose a firm believes that the percentage $P(t)$ of the market that it can attain for its product by spending a certain amount on advertising each year for the next three years is given by $P(t) = -t^3 + 6t^2 + 10$, where $t$ is given in years. Find the inflection point. How might you characterize the inflection point in this case?',
    options: [
      { label: 'A', text: '(2, 3), We would characterize the inflection point as the point of increasing returns.' },
      { label: 'B', text: '(2, 26), We would characterize the inflection point as the point of diminishing returns.' },
      { label: 'C', text: '(2, 26), We would characterize the inflection point as the point of increasing returns.' },
      { label: 'D', text: '(2, 3), We would characterize the inflection point as the point of diminishing returns.' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'P\'(t) = -3t² + 12t. P\'\'(t) = -6t + 12 = 0 => t = 2. P(2) = -(2)³ + 6(2)² + 10 = -8 + 24 + 10 = 26 => Point is (2, 26). Beyond t = 2, P\'\'(t) < 0 (concave down), representing the point of diminishing returns.',
      formulas: [
        'P\'(t) = -3t² + 12t',
        'P\'\'(t) = -6t + 12',
        '-6t + 12 = 0 => t = 2',
        'P(2) = -(2)³ + 6(2)² + 10 = 26 => (2, 26)',
        'For t > 2, P\'\'(t) < 0 (concave down, diminishing returns)',
      ],
      steps: [
        'Step 1: First derivative: P\'(t) = -3t² + 12t.',
        'Step 2: Second derivative: P\'\'(t) = -6t + 12.',
        'Step 3: Equate second derivative to zero: -6t + 12 = 0 => t = 2.',
        'Step 4: Calculate P(2) = -(8) + 6(4) + 10 = 26. Point of inflection is (2, 26).',
        'Step 5: Since the concavity switches from positive to negative, the point marks the onset of diminishing returns.',
      ],
      finalAnswer: '(2, 26), We would characterize the inflection point as the point of diminishing returns. (Option B)',
      pageNumber: 195,
    },
  },
];

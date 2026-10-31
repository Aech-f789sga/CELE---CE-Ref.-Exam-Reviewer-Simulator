import { Question } from '../../../types/exam';

export const MSTC_MAY2015_PART2: Question[] = [
  // Item 16
  {
    id: 'mstc-may2015-q16',
    number: 16,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane and Spherical Trigonometry - Angles of Elevation',
    text: 'The angle of elevation of the top of the vertical tower from points A and B are 25° and 50°, respectively. The points A and B are 300 m apart and on the same horizontal plane with the foot of the tower. The horizontal angle subtended by A and B at the foot of the tower is 90°. Find the height of the tower.',
    options: [
      { label: 'A', text: '140.54 m' },
      { label: 'B', text: '128.65 m' },
      { label: 'C', text: '112.55 m' },
      { label: 'D', text: '130.27 m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The two horizontal distances are perpendicular, so their squares add to 300²; each is expressed through the tower height.',
      formulas: [
        'd_1 = \\frac{h}{\\tan 25^\\circ} = 2.1445h,\\quad d_2 = \\frac{h}{\\tan 50^\\circ} = 0.8391h',
        'd_1^2 + d_2^2 = 300^2',
        'h^2(4.5989 + 0.7037) = 90\\,000 \\Rightarrow h = 130.27 \\text{ m}',
      ],
      steps: [
        'Step 1: The foot of the tower, A and B form a right triangle at the foot.',
        'Step 2: d₁ = h/tan25° = 2.1445h and d₂ = h/tan50° = 0.8391h.',
        'Step 3: (2.1445h)² + (0.8391h)² = 300².',
        'Step 4: 5.3026h² = 90 000, so h = 130.27 m.',
      ],
      finalAnswer: '130.27 m (Option D)',
    },
  },

  // Item 17
  {
    id: 'mstc-may2015-q17',
    number: 17,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Circles and Sectors',
    text: 'Determine the area of a sector of a circle if its perimeter is 19 inches and radius is 6 inches.',
    options: [
      { label: 'A', text: '21 in²' },
      { label: 'B', text: '22.5 in²' },
      { label: 'C', text: '31.5 in²' },
      { label: 'D', text: '27 in²' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Perimeter of a sector is arc plus two radii; the area is half the product of radius and arc.',
      formulas: [
        'P = 2r + s \\Rightarrow s = 19 - 2(6) = 7 \\text{ in}',
        'A = \\frac{1}{2}rs = \\frac{1}{2}(6)(7) = 21 \\text{ in}^2',
      ],
      steps: [
        'Step 1: The perimeter includes the two radii: s = 19 − 12 = 7 in.',
        'Step 2: Area of a sector = ½ r s.',
        'Step 3: A = ½(6)(7) = 21 in².',
      ],
      finalAnswer: '21 in² (Option A)',
    },
  },

  // Item 18
  {
    id: 'mstc-may2015-q18',
    number: 18,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Tangent Circles',
    text: 'Two circles are tangent to a third circle internally and are tangent to each other externally. If the distances between their centers are 10 cm, 7 cm and 5 cm, respectively, compute the radius of the biggest circle.',
    options: [
      { label: 'A', text: '11' },
      { label: 'B', text: '12' },
      { label: 'C', text: '8' },
      { label: 'D', text: '6' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The two inner circles touch each other, so the smallest centre distance is r₁ + r₂; the other two distances are R − r.',
      formulas: [
        'R - r_1 = 10,\\quad R - r_2 = 7,\\quad r_1 + r_2 = 5',
        '2R - (r_1 + r_2) = 17 \\Rightarrow 2R = 22',
        'R = 11 \\text{ cm}',
      ],
      steps: [
        'Step 1: The inner circles are externally tangent, so their centre distance equals the sum of their radii: r₁ + r₂ = 5.',
        'Step 2: Each inner circle is internally tangent to the big circle, so the centre distances are R − r₁ = 10 and R − r₂ = 7.',
        'Step 3: Adding the three distances: 2R − (r₁ + r₂) = 17, hence 2R = 17 + 5.',
        'Step 4: R = 11 cm.',
      ],
      finalAnswer: '11 cm (Option A)',
    },
  },

  // Item 19
  {
    id: 'mstc-may2015-q19',
    number: 19,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Intersecting Circles',
    text: 'The length of common chord of two intersecting circles is 48 cm. The radius of one of the circles is 25 cm. If the distance between their centers is 39 cm, what is the diameter of the other circle?',
    options: [
      { label: 'A', text: '100' },
      { label: 'B', text: '60' },
      { label: 'C', text: '40' },
      { label: 'D', text: '80' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Each centre lies on the perpendicular bisector of the common chord; subtract the two half-distances from 39 cm.',
      formulas: [
        'd_1 = \\sqrt{25^2 - 24^2} = 7 \\text{ cm}',
        'd_2 = 39 - 7 = 32 \\text{ cm}',
        'r_2 = \\sqrt{24^2 + 32^2} = 40 \\text{ cm} \\Rightarrow D = 80 \\text{ cm}',
      ],
      steps: [
        'Step 1: The common chord is bisected perpendicularly, so each half is 24 cm.',
        'Step 2: For the 25-cm circle, d₁ = √(25² − 24²) = 7 cm from the chord.',
        'Step 3: The other centre is 39 − 7 = 32 cm from the chord.',
        'Step 4: r₂ = √(24² + 32²) = 40 cm, so the diameter is 80 cm.',
      ],
      finalAnswer: '80 cm (Option D)',
    },
  },

  // Item 20
  {
    id: 'mstc-may2015-q20',
    number: 20,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Sectors and Segments',
    text: 'A sector of a circle of radius 4 feet has a central angle of 30 degrees. A line connecting one of the endpoints of the arc to the midpoint of the opposite edge is then drawn. Determine the area between the line, the arc and the edge adjacent to the drawn line and arc.',
    options: [
      { label: 'A', text: '395.19 in²' },
      { label: 'B', text: '335.19 in²' },
      { label: 'C', text: '459.19 in²' },
      { label: 'D', text: '315.19 in²' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Convert the radius to inches, subtract the triangle formed by the drawn line from the whole sector.',
      formulas: [
        'A_{sector} = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(48)^2\\left(\\frac{\\pi}{6}\\right) = 603.19 \\text{ in}^2',
        'A_{triangle} = \\frac{1}{2}(48)(24)\\sin 30^\\circ = 288 \\text{ in}^2',
        'A = 603.19 - 288 = 315.19 \\text{ in}^2',
      ],
      steps: [
        'Step 1: r = 4 ft = 48 in and θ = 30° = π/6.',
        'Step 2: Sector area = ½(48)²(π/6) = 603.19 in².',
        'Step 3: The drawn line runs from the arc endpoint to the midpoint of the opposite radius, so the triangle has sides 48 and 24 with included angle 30°.',
        'Step 4: Triangle area = ½(48)(24) sin30° = 288 in².',
        'Step 5: Required area = 603.19 − 288 = 315.19 in².',
      ],
      finalAnswer: '315.19 in² (Option D)',
    },
  },

  // Item 21
  {
    id: 'mstc-may2015-q21',
    number: 21,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Circles and Inscribed Quadrilaterals',
    text: 'A quadrilateral ABCD is inscribed in a semi-circle with side AD as its diameter. If point O is the center of the semi-circle, determine the angle DCO if angle CAD is 39°.',
    options: [
      { label: 'A', text: '51°' },
      { label: 'B', text: '55°' },
      { label: 'C', text: '46°' },
      { label: 'D', text: '59°' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'An angle inscribed in a semicircle is 90°, and triangle OCD is isosceles because OC = OD.',
      formulas: [
        '\\angle ACD = 90^\\circ \\Rightarrow \\angle CDA = 180^\\circ - 90^\\circ - 39^\\circ = 51^\\circ',
        'OC = OD \\Rightarrow \\angle DCO = \\angle CDO = 51^\\circ',
      ],
      steps: [
        'Step 1: AD is a diameter, so ∠ACD = 90°.',
        'Step 2: In triangle ACD, ∠CDA = 180° − 90° − 39° = 51°.',
        'Step 3: O is the centre, so OC = OD and triangle OCD is isosceles.',
        'Step 4: ∠DCO = ∠CDO = 51°.',
      ],
      finalAnswer: '51° (Option A)',
    },
  },

  // Item 22
  {
    id: 'mstc-may2015-q22',
    number: 22,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Circle Segments',
    text: 'Two perpendicular chords both 5 cm from the center of a circle divide the circle into four parts. If the radius of the circle is 13 cm, compute the area of the smallest part.',
    options: [
      { label: 'A', text: '38 cm²' },
      { label: 'B', text: '35 cm²' },
      { label: 'C', text: '28 cm²' },
      { label: 'D', text: '31 cm²' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The smallest piece is the circular segment cut by a chord plus the right triangle between the chord and the two perpendicular chord lines.',
      formulas: [
        '\\text{half-chord} = \\sqrt{13^2 - 5^2} = 12 \\text{ cm}',
        '\\theta = 2\\arcsin\\frac{12}{13} = 134.76^\\circ \\text{ (segment)}, \\text{ corner chord subtends } 44.76^\\circ',
        'A_{segment} = \\frac{1}{2}(169)\\left(0.7813 - \\sin 44.76^\\circ\\right) = 6.49 \\text{ cm}^2',
        'A = 6.49 + \\frac{1}{2}(7)(7) = 30.99 \\approx 31 \\text{ cm}^2',
      ],
      steps: [
        'Step 1: Each chord has half-length √(13² − 5²) = 12 cm.',
        'Step 2: The two chord lines meet at (5, 5), leaving a 7 × 7 right triangle in the corner.',
        'Step 3: The chord joining (5, 12) and (12, 5) subtends 44.76° and cuts a segment of 6.49 cm².',
        'Step 4: Total = 6.49 + 24.5 = 30.99 ≈ 31 cm².',
      ],
      finalAnswer: '31 cm² (Option D)',
    },
  },

  // Item 23
  {
    id: 'mstc-may2015-q23',
    number: 23,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Regular Polygons',
    text: 'A square is inscribed in a semi-circle having a radius of 15 m. The base of the square is on the base diameter of the semi-circle. Find the area of an octagon inscribed in the square.',
    options: [
      { label: 'A', text: '96.57 m²' },
      { label: 'B', text: '132.87 m²' },
      { label: 'C', text: '149.12 m²' },
      { label: 'D', text: '118.6 m²' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Get the square side from the semicircle, then use the regular octagon area formula A = 2(√2 − 1)s².',
      formulas: [
        '\\left(\\frac{s}{2}\\right)^2 + s^2 = 15^2 \\Rightarrow s^2 = 180',
        'A_{oct} = 2(\\sqrt{2}-1)s^2 = 2(0.41421)(180)',
        'A_{oct} = 149.12 \\text{ m}^2',
      ],
      steps: [
        'Step 1: The top corners of the square lie on the semicircle, so (s/2)² + s² = 15².',
        'Step 2: 1.25s² = 225 gives s² = 180 m².',
        'Step 3: A regular octagon inscribed in a square of side s has area 2(√2 − 1)s².',
        'Step 4: A = 2(0.41421)(180) = 149.12 m².',
      ],
      finalAnswer: '149.12 m² (Option C)',
    },
  },

  // Item 24
  {
    id: 'mstc-may2015-q24',
    number: 24,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Cyclic Quadrilaterals',
    text: 'Find the area of quadrilateral ABCD inscribed in a circle where AB = 8 cm, BC = 15 cm, CD = 12 cm and DA = 18 cm.',
    options: [
      { label: 'A', text: '161.93 cm²' },
      { label: 'B', text: '173.6 cm²' },
      { label: 'C', text: '160.99 cm²' },
      { label: 'D', text: '172.52 cm²' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'A cyclic quadrilateral is solved directly by Brahmagupta\'s formula.',
      formulas: [
        's = \\frac{8+15+12+18}{2} = 26.5',
        'A = \\sqrt{(s-a)(s-b)(s-c)(s-d)}',
        'A = \\sqrt{(18.5)(11.5)(14.5)(8.5)} = 161.93 \\text{ cm}^2',
      ],
      steps: [
        'Step 1: Semi-perimeter s = 53/2 = 26.5 cm.',
        'Step 2: The four factors are 18.5, 11.5, 14.5 and 8.5.',
        'Step 3: A = √26 223.4 = 161.93 cm².',
      ],
      finalAnswer: '161.93 cm² (Option A)',
    },
  },

  // Item 25
  {
    id: 'mstc-may2015-q25',
    number: 25,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Cyclic Quadrilaterals',
    text: 'A quadrilateral inscribed in a circle has sides of lengths 2 in, 4 in, 6 in and 8.224 in. Determine the area of the quadrilateral.',
    options: [
      { label: 'A', text: '20.12 in²' },
      { label: 'B', text: '19.62 in²' },
      { label: 'C', text: '19.87 in²' },
      { label: 'D', text: '20.54 in²' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Apply Brahmagupta\'s formula with the four given sides.',
      formulas: [
        's = \\frac{2+4+6+8.224}{2} = 10.112',
        'A = \\sqrt{(8.112)(6.112)(4.112)(1.888)} = 19.62 \\text{ in}^2',
      ],
      steps: [
        'Step 1: Semi-perimeter s = 20.224/2 = 10.112 in.',
        'Step 2: The four factors are 8.112, 6.112, 4.112 and 1.888.',
        'Step 3: A = √384.9 = 19.62 in².',
      ],
      finalAnswer: '19.62 in² (Option B)',
    },
  },

  // Item 26
  {
    id: 'mstc-may2015-q26',
    number: 26,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Arcs and Inscribed Angles',
    text: 'Points A, B, C, D and E are in the periphery of a circle. If arc BAC is 340° and arcs AB, BC, and CD are equal, find the angle DEA.',
    options: [
      { label: 'A', text: '45°' },
      { label: 'B', text: '90°' },
      { label: 'C', text: '30°' },
      { label: 'D', text: '60°' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Arc BAC leaves 20° for arc BC; the three equal arcs then fix arc DA at 60°, and the inscribed angle is half of it.',
      formulas: [
        '\\text{arc } BC = 360^\\circ - 340^\\circ = 20^\\circ',
        '\\text{arc } AB = BC = CD = 20^\\circ',
        '\\angle DEA = \\frac{1}{2}(\\text{arc } DA) = \\frac{1}{2}(20^\\circ + 20^\\circ + 20^\\circ) = 30^\\circ',
      ],
      steps: [
        'Step 1: Arc BAC = 340°, so the remaining arc BC = 20°.',
        'Step 2: Arcs AB, BC and CD are equal, so each is 20°.',
        'Step 3: The angle at E subtends arc DA measured away from E: 20° + 20° + 20° = 60°.',
        'Step 4: ∠DEA = 60°/2 = 30°.',
      ],
      finalAnswer: '30° (Option C)',
    },
  },

  // Item 27
  {
    id: 'mstc-may2015-q27',
    number: 27,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Circles',
    text: 'Points A, P and Q are in the periphery of a circle whose center is O. The ratio of arcs AP to PQ is 3 to 4. If angle POA is 15°, determine the angle PQO.',
    options: [
      { label: 'A', text: '40°' },
      { label: 'B', text: '80°' },
      { label: 'C', text: '70°' },
      { label: 'D', text: '50°' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Arc AP is the central angle 15°; the 3:4 ratio gives arc PQ, and triangle POQ is isosceles.',
      formulas: [
        '\\text{arc } AP = 15^\\circ,\\quad \\text{arc } PQ = \\frac{4}{3}(15^\\circ) = 20^\\circ',
        '\\angle PQO = \\frac{180^\\circ - 20^\\circ}{2} = 80^\\circ',
      ],
      steps: [
        'Step 1: ∠POA = 15° means arc AP = 15°.',
        'Step 2: Arc AP : arc PQ = 3 : 4, so arc PQ = 20°.',
        'Step 3: Central angle POQ = 20°; triangle POQ is isosceles with OP = OQ.',
        'Step 4: ∠PQO = (180° − 20°)/2 = 80°.',
      ],
      finalAnswer: '80° (Option B)',
    },
  },

  // Item 28
  {
    id: 'mstc-may2015-q28',
    number: 28,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Inscribed Angles',
    text: 'Quadrilateral ABCD is inscribed in a 25-cm-diameter circle with side AB as diameter. Angle ACD is 30° and CDB is 20°. Determine the length of side BC.',
    options: [
      { label: 'A', text: '7.15' },
      { label: 'B', text: '7.73' },
      { label: 'C', text: '8.55' },
      { label: 'D', text: '8.21' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Angle CDB subtends arc CB, whose chord follows from the diameter.',
      formulas: [
        '\\angle CDB = 20^\\circ \\Rightarrow \\text{arc } CB = 40^\\circ',
        'BC = D\\sin 20^\\circ = 25(0.34202) = 8.55 \\text{ cm}',
      ],
      steps: [
        'Step 1: An inscribed angle is half its intercepted arc, so arc CB = 40°.',
        'Step 2: A chord subtending a central angle θ in a circle of diameter D has length D sin(θ/2).',
        'Step 3: BC = 25 sin 20° = 8.55 cm.',
      ],
      finalAnswer: '8.55 cm (Option C)',
    },
  },

  // Item 29
  {
    id: 'mstc-may2015-q29',
    number: 29,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Inscribed Angles',
    text: 'Quadrilateral ABCD is inscribed in a 25-cm-diameter circle with side AB as diameter. If angle BDC is 15° and AD is 7 cm, determine the length of side DC.',
    options: [
      { label: 'A', text: '19.52' },
      { label: 'B', text: '18.88' },
      { label: 'C', text: '21.37' },
      { label: 'D', text: '20.59' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Build triangle BCD: BD from the right triangle ADB, ∠BCD from the inscribed angles, then the sine law.',
      formulas: [
        'BD = \\sqrt{25^2 - 7^2} = 24 \\text{ cm}',
        '\\angle ACD = \\arcsin\\frac{7}{25} = 16.26^\\circ \\Rightarrow \\angle BCD = 90^\\circ + 16.26^\\circ = 106.26^\\circ',
        '\\angle DBC = 180^\\circ - 15^\\circ - 106.26^\\circ = 58.74^\\circ',
        'DC = \\frac{24\\sin 58.74^\\circ}{\\sin 106.26^\\circ} = 21.37 \\text{ cm}',
      ],
      steps: [
        'Step 1: ∠ADB = 90° because AB is a diameter, so BD = √(625 − 49) = 24 cm.',
        'Step 2: ∠ACB = 90° and ∠ACD subtends chord AD = 7 cm, so ∠ACD = 16.26°.',
        'Step 3: ∠BCD = 90° + 16.26° = 106.26°.',
        'Step 4: In triangle BCD, ∠DBC = 58.74°.',
        'Step 5: DC/sin 58.74° = 24/sin 106.26° gives DC = 21.37 cm.',
      ],
      finalAnswer: '21.37 cm (Option C)',
    },
  },

  // Item 30
  {
    id: 'mstc-may2015-q30',
    number: 30,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Solid Geometry - Polyhedra',
    text: 'A regular tetrahedron has an edge 4 feet long. Determine the volume.',
    options: [
      { label: 'A', text: '8.26 ft³' },
      { label: 'B', text: '7.54 ft³' },
      { label: 'C', text: '12.75 ft³' },
      { label: 'D', text: '11.88 ft³' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Volume of a regular tetrahedron of edge a is a³/(6√2).',
      formulas: [
        'V = \\frac{a^3}{6\\sqrt{2}}',
        'V = \\frac{64}{8.4853} = 7.54 \\text{ ft}^3',
      ],
      steps: [
        'Step 1: The base is an equilateral triangle of side 4, area 4√3 = 6.928 ft².',
        'Step 2: The height is a√(2/3) = 3.266 ft.',
        'Step 3: V = (1/3)(6.928)(3.266) = 7.54 ft³.',
      ],
      finalAnswer: '7.54 ft³ (Option B)',
    },
  },
];

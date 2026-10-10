import { Question } from '../../../types/exam';

export const HPGE_PART4: Question[] = [
  // --- QUESTION 37 (Situation 2 Part 1) ---
  {
    id: 'hpge-q37',
    number: 37,
    pageNumber: 8,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Shear Strength - Triaxial Test Internal Friction Angle',
    text: 'Situation 2 - The result of a consolidated drained tri-axial soil test conducted on consolidated clay are as follows:\nChamber confining pressure = 250 kPa\nDeviator stress at failure = 350 kPa\n\nEvaluate the angle of internal friction of the soil sample in degrees.',
    options: [
      { label: 'A', text: '22.31°' },
      { label: 'B', text: '24.31°' },
      { label: 'C', text: '21.31°' },
      { label: 'D', text: '20.31°' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute major principal stress σ₁ = σ₃ + Δσ = 600 kPa. Mohr circle radius R = 175 kPa, center OC = 425 kPa. sin φ = R / OC.',
      formulas: [
        'σ₃ = 250 kPa, Δσ = 350 kPa => σ₁ = 250 + 350 = 600 kPa',
        'R = Δσ / 2 = 350 / 2 = 175 kPa',
        'OC = σ₃ + R = 250 + 175 = 425 kPa',
        'sin φ = R / OC = 175 / 425 = 0.41176',
        'φ = arcsin(0.41176) = 24.316° ≈ 24.31°',
      ],
      steps: [
        'Step 1: Major principal stress at failure: σ₁ = 250 + 350 = 600 kPa.',
        'Step 2: Radius of Mohr\'s circle: R = (600 - 250) / 2 = 175 kPa.',
        'Step 3: Distance from origin to center: OC = (600 + 250) / 2 = 425 kPa.',
        'Step 4: From right triangle formed by tangent line: sin φ = R / OC = 175 / 425 = 0.41176.',
        'Step 5: Solve for friction angle: φ = 24.31°.',
      ],
      finalAnswer: '24.31° (Option B)',
      pageNumber: 100,
    },
  },

  // --- QUESTION 38 (Situation 2 Part 2) ---
  {
    id: 'hpge-q38',
    number: 38,
    pageNumber: 8,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Shear Strength - Shear Stress on Failure Plane',
    text: 'Situation 2 (Cont.) - Chamber confining pressure = 250 kPa, Deviator stress = 350 kPa:\nEvaluate the shear stress (kPa) on the failure plane.',
    options: [
      { label: 'A', text: '159' },
      { label: 'B', text: '195' },
      { label: 'C', text: '145' },
      { label: 'D', text: '154' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'In the right triangle FEC, shear stress on failure plane is: τ_f = R · cos φ.',
      formulas: [
        'τ_f = R · cos φ',
        'τ_f = 175 · cos(24.316°) = 175 · (0.9113) = 159.48 kPa ≈ 159 kPa',
      ],
      steps: [
        'Step 1: Radius of Mohr circle R = 175 kPa.',
        'Step 2: Failure plane tangent point has height τ_f = R cos φ.',
        'Step 3: τ_f = 175 × cos(24.316°) = 159.48 kPa ≈ 159 kPa.',
      ],
      finalAnswer: '159 kPa (Option A)',
      pageNumber: 100,
    },
  },

  // --- QUESTION 39 (Situation 2 Part 3) ---
  {
    id: 'hpge-q39',
    number: 39,
    pageNumber: 8,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Shear Strength - Normal Stress on Plane of Maximum Shear',
    text: 'Situation 2 (Cont.) - Chamber confining pressure = 250 kPa, Deviator stress = 350 kPa:\nEvaluate the normal stress (kPa) on the plane of maximum shear.',
    options: [
      { label: 'A', text: '452' },
      { label: 'B', text: '542' },
      { label: 'C', text: '425' },
      { label: 'D', text: '524' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The plane of maximum shear corresponds to the top apex of Mohr\'s circle, where normal stress equals the center abscissa OC.',
      formulas: [
        'σ_D = OC = (σ₁ + σ₃) / 2',
        'σ_D = (600 + 250) / 2 = 425 kPa',
      ],
      steps: [
        'Step 1: The peak of Mohr\'s circle occurs directly above the circle\'s center.',
        'Step 2: The normal stress at maximum shear is the average principal stress: (σ₁ + σ₃) / 2.',
        'Step 3: σ_D = (600 + 250) / 2 = 425 kPa.',
      ],
      finalAnswer: '425 kPa (Option C)',
      pageNumber: 100,
    },
  },

  // --- QUESTION 40 (Situation 3 Part 1) ---
  {
    id: 'hpge-q40',
    number: 40,
    pageNumber: 9,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Effective Stress - Water Table at Ground Surface',
    text: 'Situation 3 - A layer of clay 8.6 m thick is overlain by a deposit of sand 15.2 m thick to the ground surface. When the water table is level with the ground surface, the saturated unit weight of the sand was determined to be 21.2 kN/m³ and its dry unit weight is 18.2 kN/m³. When the ground water table is lowered by 7.6 m, the degree of saturation of the sand above the water table was lowered to 30%. The saturated unit weight of clay layer is 18.8 kN/m³.\n\nDetermine the effective pressure (kPa) at mid-height of the clay layer before lowering the water table.',
    options: [
      { label: 'A', text: '212' },
      { label: 'B', text: '280' },
      { label: 'C', text: '270' },
      { label: 'D', text: '329' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Before lowering, GWT is at surface. Compute p_eff = γ\'_sand · (15.2) + γ\'_clay · (4.3).',
      formulas: [
        'γ\'_sand = γ_sat - γ_w = 21.2 - 9.81 = 11.39 kN/m³',
        'γ\'_clay = 18.8 - 9.81 = 8.99 kN/m³',
        'p_eff = 11.39 · (15.2) + 8.99 · (4.3) = 173.128 + 38.657 = 211.785 kPa ≈ 212 kPa',
      ],
      steps: [
        'Step 1: Submerged unit weight of sand = 21.2 - 9.81 = 11.39 kN/m³.',
        'Step 2: Submerged unit weight of clay = 18.8 - 9.81 = 8.99 kN/m³.',
        'Step 3: Mid-height of clay is at depth 15.2 m + 4.3 m = 19.5 m below ground.',
        'Step 4: Effective stress = (11.39 × 15.2) + (8.99 × 4.3) = 173.13 + 38.66 = 211.79 kPa ≈ 212 kPa.',
      ],
      finalAnswer: '212 kPa (Option A)',
      pageNumber: 101,
    },
  },

  // --- QUESTION 41 (Situation 3 Part 2) ---
  {
    id: 'hpge-q41',
    number: 41,
    pageNumber: 9,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Effective Stress - Water Table Lowered by 7.6 m',
    text: 'Situation 3 (Cont.) - Sand layer 15.2 m (γ_sat = 21.2, γ_d = 18.2 kN/m³), Clay layer 8.6 m (γ_sat = 18.8 kN/m³):\nDetermine the effective pressure (kPa) at mid-height of the clay layer after lowering the water table by 7.6 m (degree of saturation of upper sand becomes 30%).',
    options: [
      { label: 'A', text: '212' },
      { label: 'B', text: '280' },
      { label: 'C', text: '270' },
      { label: 'D', text: '329' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Moist unit weight of upper 7.6 m sand is γ_m = γ_d + S · (γ_sat - γ_d) = 19.1 kN/m³. Lower 7.6 m sand and 4.3 m clay remain submerged.',
      formulas: [
        'γ_m = 18.2 + 0.30 · (21.2 - 18.2) = 18.2 + 0.9 = 19.1 kN/m³',
        'p_eff = γ_m · (7.6) + γ\'_sand · (7.6) + γ\'_clay · (4.3)',
        'p_eff = 19.1 · (7.6) + (11.39) · (7.6) + (8.99) · (4.3) = 145.16 + 86.564 + 38.657 = 270.38 kPa ≈ 270 kPa',
      ],
      steps: [
        'Step 1: Compute moist unit weight of upper 7.6 m sand: γ_m = 18.2 + 0.30(3.0) = 19.1 kN/m³.',
        'Step 2: Effective stress from upper sand = 19.1 × 7.6 = 145.16 kPa.',
        'Step 3: Effective stress from lower submerged sand = (21.2 - 9.81) × 7.6 = 86.56 kPa.',
        'Step 4: Effective stress from upper half of clay = (18.8 - 9.81) × 4.3 = 38.66 kPa.',
        'Step 5: Total effective stress = 145.16 + 86.56 + 38.66 = 270.38 kPa ≈ 270 kPa.',
      ],
      finalAnswer: '270 kPa (Option C)',
      pageNumber: 101,
    },
  },

  // --- QUESTION 42 (Situation 3 Part 3) ---
  {
    id: 'hpge-q42',
    number: 42,
    pageNumber: 9,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Effective Stress - No Water in Sand Layer (Moist Condition)',
    text: 'Situation 3 (Cont.) - Sand layer 15.2 m, Clay layer 8.6 m:\nDetermine the effective pressure (kPa) at the mid-height of the clay layer when there is no water in the sand layer but remain in moist condition at the same degree of saturation.',
    options: [
      { label: 'A', text: '212' },
      { label: 'B', text: '280' },
      { label: 'C', text: '270' },
      { label: 'D', text: '329' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'All 15.2 m sand is above water table with γ_m = 19.1 kN/m³. Clay (4.3 m) is submerged: p_eff = γ_m · (15.2) + γ\'_clay · (4.3).',
      formulas: [
        'p_eff = γ_m_sand · (15.2) + γ\'_clay · (4.3)',
        'p_eff = 19.1 · (15.2) + (18.8 - 9.81) · (4.3) = 290.32 + 38.657 = 328.98 kPa ≈ 329 kPa',
      ],
      steps: [
        'Step 1: The entire 15.2 m of sand has moist unit weight γ_m = 19.1 kN/m³.',
        'Step 2: Sand layer effective stress contribution = 19.1 × 15.2 = 290.32 kPa.',
        'Step 3: Clay mid-height submerged contribution = (18.8 - 9.81) × 4.3 = 38.66 kPa.',
        'Step 4: Total effective stress = 290.32 + 38.66 = 328.98 kPa ≈ 329 kPa.',
      ],
      finalAnswer: '329 kPa (Option D)',
      pageNumber: 102,
    },
  },

  // --- QUESTION 43 (Situation 4 Part 1) ---
  {
    id: 'hpge-q43',
    number: 43,
    pageNumber: 10,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Properties - Moisture Content of Saturated Soil',
    text: 'Situation 4 - The total weight of the soil when fully saturated is 1600 grams and the weight of the soil after drying is 1000 grams. The specific gravity of the soil grains is 2.67.\n\nWhat is the moisture content of the saturated soil?',
    options: [
      { label: 'A', text: '37.5%' },
      { label: 'B', text: '60%' },
      { label: 'C', text: '70%' },
      { label: 'D', text: '73.5%' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute moisture content: MC = (M_w / M_s) · 100% = [ (M_sat - M_d) / M_d ] · 100%.',
      formulas: [
        'M_w = 1600 - 1000 = 600 g',
        'M_s = 1000 g',
        'MC = (600 / 1000) · 100% = 60%',
      ],
      steps: [
        'Step 1: Mass of evaporated water M_w = 1600 g - 1000 g = 600 g.',
        'Step 2: Oven-dry solid mass M_s = 1000 g.',
        'Step 3: Moisture content MC = (600 / 1000) × 100% = 60%.',
      ],
      finalAnswer: '60% (Option B)',
      pageNumber: 102,
    },
  },

  // --- QUESTION 44 (Situation 4 Part 2) ---
  {
    id: 'hpge-q44',
    number: 44,
    pageNumber: 10,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Properties - Void Ratio of Saturated Soil',
    text: 'Situation 4 (Cont.) - Saturated weight = 1600 g, Dry weight = 1000 g, Gs = 2.67:\nWhat is the void ratio of the saturated soil?',
    options: [
      { label: 'A', text: '0.90' },
      { label: 'B', text: '0.82' },
      { label: 'C', text: '1.60' },
      { label: 'D', text: '1.10' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'For fully saturated soil S = 1.0, so e = Gs · MC.',
      formulas: [
        'G_s · MC = S · e',
        '2.67 · (0.60) = 1 · e => e = 1.602 ≈ 1.60',
      ],
      steps: [
        'Step 1: Fully saturated soil has degree of saturation S = 1.0.',
        'Step 2: From basic phase relation: e = w Gs / S.',
        'Step 3: Void ratio e = 0.60 × 2.67 = 1.602 ≈ 1.60.',
      ],
      finalAnswer: '1.60 (Option C)',
      pageNumber: 102,
    },
  },

  // --- QUESTION 45 (Situation 4 Part 3) ---
  {
    id: 'hpge-q45',
    number: 45,
    pageNumber: 10,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Soil Properties - Porosity of Soil',
    text: 'Situation 4 (Cont.) - Saturated weight = 1600 g, Dry weight = 1000 g, Gs = 2.67:\nWhat is the porosity of the soil?',
    options: [
      { label: 'A', text: '61.6' },
      { label: 'B', text: '66.1' },
      { label: 'C', text: '54.6' },
      { label: 'D', text: '64.5' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute porosity from void ratio: n = [ e / (1 + e) ] · 100%.',
      formulas: [
        'n = [ e / (1 + e) ] · 100%',
        'n = [ 1.602 / (1 + 1.602) ] · 100% = [ 1.602 / 2.602 ] · 100% = 61.57% ≈ 61.6%',
      ],
      steps: [
        'Step 1: Void ratio e = 1.602.',
        'Step 2: Porosity n = 1.602 / (1 + 1.602) = 1.602 / 2.602 = 0.6157.',
        'Step 3: In percentage form, n = 61.57% ≈ 61.6%.',
      ],
      finalAnswer: '61.6 (Option A)',
      pageNumber: 103,
    },
  },

  // --- QUESTION 46 (Situation 5 Part 1) ---
  {
    id: 'hpge-q46',
    number: 46,
    pageNumber: 10,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Fluid Statics - Hydrostatic Force on Submerged Circular Plate',
    text: 'Situation 5 - A circular plate of radius r = 0.4 m is vertically submerged in water with its top edge 2 m below the liquid surface.\n\nEvaluate the total force (kN) acting on one side of the plate.',
    options: [
      { label: 'A', text: '2.71' },
      { label: 'B', text: '2.96' },
      { label: 'C', text: '18.1' },
      { label: 'D', text: '11.8' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Centroid depth h̄ = 2 + 0.4 = 2.4 m. Area A = π · r² = 0.16π m². Compute F = γ_w · h̄ · A.',
      formulas: [
        'h̄ = 2.0 + 0.4 = 2.4 m',
        'A = π · (0.4)² = 0.16π m²',
        'F = γ_w · h̄ · A = 9.81 · (2.4) · (0.16π) = 11.835 kN ≈ 11.8 kN',
      ],
      steps: [
        'Step 1: Top edge is at 2.0 m depth, so centroid is at h̄ = 2.0 + 0.4 = 2.4 m.',
        'Step 2: Area of circular disk A = π × (0.4)² = 0.16π = 0.50265 m².',
        'Step 3: Total hydrostatic force F = 9.81 × 2.4 × 0.50265 = 11.835 kN ≈ 11.8 kN.',
      ],
      finalAnswer: '11.8 kN (Option D)',
      pageNumber: 103,
    },
  },

  // --- QUESTION 47 (Situation 5 Part 2) ---
  {
    id: 'hpge-q47',
    number: 47,
    pageNumber: 10,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Fluid Statics - Center of Pressure Eccentricity from Centroid',
    text: 'Situation 5 (Cont.) - Submerged circular plate r = 0.4 m, top edge 2 m below liquid surface:\nObtain the location (mm) of the force from the center of gravity of the plate.',
    options: [
      { label: 'A', text: '66.7' },
      { label: 'B', text: '16.7' },
      { label: 'C', text: '76.7' },
      { label: 'D', text: '17.6' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Eccentricity between cg and cp: e = I_g / (A · h̄) = [ (π/4) r⁴ ] / [ (π r²) · h̄ ] = r² / (4 h̄).',
      formulas: [
        'I_g = (π/4) · (0.4)⁴ = 0.0064π m⁴',
        'e = I_g / (A · h̄) = (0.0064π) / [ (0.16π) · (2.4) ] = 0.0064 / 0.384 = 0.01667 m = 16.67 mm ≈ 16.7 mm',
      ],
      steps: [
        'Step 1: Centroidal moment of inertia of circular area I_g = π r⁴ / 4 = 0.0064π m⁴.',
        'Step 2: Distance from cg to cp: e = I_g / (A × h̄).',
        'Step 3: e = 0.0064π / (0.16π × 2.4) = 0.01667 m = 16.67 mm ≈ 16.7 mm.',
      ],
      finalAnswer: '16.7 mm (Option B)',
      pageNumber: 103,
    },
  },

  // --- QUESTION 48 (Situation 5 Part 3) ---
  {
    id: 'hpge-q48',
    number: 48,
    pageNumber: 10,
    subject: 'HPGE',
    year: 2024,
    month: 'April',
    category: 'Fluid Statics - Center of Pressure Depth from Liquid Surface',
    text: 'Situation 5 (Cont.) - Submerged circular plate r = 0.4 m, top edge 2 m below liquid surface:\nObtain the location (m) of the force from the liquid surface.',
    options: [
      { label: 'A', text: '3.14' },
      { label: 'B', text: '2.42' },
      { label: 'C', text: '2.24' },
      { label: 'D', text: '4.13' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Depth to center of pressure: y_cp = h̄ + e = 2.4 + 0.01667 = 2.4167 m ≈ 2.42 m.',
      formulas: [
        'y_cp = h̄ + e',
        'y_cp = 2.4 + 0.01667 = 2.4167 m ≈ 2.42 m',
      ],
      steps: [
        'Step 1: Depth of centroid from water surface h̄ = 2.4 m.',
        'Step 2: Eccentricity e = 0.01667 m.',
        'Step 3: Distance of center of pressure from water surface: y_cp = 2.4 + 0.01667 = 2.4167 m ≈ 2.42 m.',
      ],
      finalAnswer: '2.42 m (Option B)',
      pageNumber: 103,
    },
  },
];

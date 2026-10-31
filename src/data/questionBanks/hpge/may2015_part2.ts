import { Question } from '../../../types/exam';

export const HPGE_MAY2015_PART2: Question[] = [
  // Item 16
  {
    id: 'hpge-may2015-q16',
    number: 16,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Open Channel (Manning)',
    text: 'A rectangular canal 3.2 m wide and 1.2 m deep has a full capacity of 8.5 m³/s. Assuming n = 0.015 what is the slope of the canal bed?',
    options: [
      { label: 'A', text: '0.00506' },
      { label: 'B', text: '0.00081' },
      { label: 'C', text: '0.00283' },
      { label: 'D', text: '0.00182' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute A, the wetted perimeter and R, then solve Manning for the slope.',
      formulas: [
        'A = bd = 3.2(1.2) = 3.84\\ \\text{m}^2',
        'P = b + 2d = 3.2 + 2.4 = 5.6\\ \\text{m}, \\quad R = \\dfrac{A}{P} = 0.6857\\ \\text{m}',
        'S = \\left(\\dfrac{nV}{R^{2/3}}\\right)^2',
      ],
      steps: [
        'Step 1: $A = 3.2 \\times 1.2 = 3.84\\ \\text{m}^2$; $V = 8.5/3.84 = 2.214\\ \\text{m/s}$.',
        'Step 2: $P = 3.2 + 2(1.2) = 5.6\\ \\text{m}$; $R = 3.84/5.6 = 0.6857\\ \\text{m}$.',
        'Step 3: $R^{2/3} = 0.7775$.',
        'Step 4: $S = \\left[\\dfrac{0.015(2.214)}{0.7775}\\right]^2 = (0.0427)^2 = 0.00182$.',
      ],
      finalAnswer: '0.00182 (Option D)',
    },
  },

  // Item 17
  {
    id: 'hpge-may2015-q17',
    number: 17,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Orifices and Jets',
    text: 'Water is issued vertically at the rate of 30 liters per second through a 50-mm-diameter nozzle. Neglecting losses, how high above the nozzle tip can the water jet support a load of 250 N?',
    options: [
      { label: 'A', text: '8.36 meters' },
      { label: 'B', text: '9.32 meters' },
      { label: 'C', text: '7.52 meters' },
      { label: 'D', text: '6.25 meters' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'At the height where the jet balances the load, the momentum flux ρQV equals the load; that fixes the residual velocity and hence the rise.',
      formulas: [
        'V = \\dfrac{Q}{A} = \\dfrac{0.030}{\\pi(0.05)^2/4} = 15.28\\ \\text{m/s}',
        'F = \\rho Q V_h \\Rightarrow V_h = \\dfrac{250}{1000(0.030)} = 8.333\\ \\text{m/s}',
        'h = \\dfrac{V^2 - V_h^2}{2g}',
      ],
      steps: [
        'Step 1: $A = 0.0019635\\ \\text{m}^2$; $V = 0.030/0.0019635 = 15.28\\ \\text{m/s}$.',
        'Step 2: The jet holds the load by momentum: $\\rho Q V_h = 250\\ \\text{N}$.',
        'Step 3: $V_h = 250/(1000 \\times 0.030) = 8.333\\ \\text{m/s}$.',
        'Step 4: $h = (15.28^2 - 8.333^2)/(2 \\times 9.81) = (233.4 - 69.4)/19.62$.',
        'Step 5: $h = 8.36\\ \\text{m}$.',
      ],
      finalAnswer: '8.36 m (Option A)',
    },
  },

  // Item 18
  {
    id: 'hpge-may2015-q18',
    number: 18,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Definitions)',
    text: 'The ratio between the volume of water and the volume of voids:',
    options: [
      { label: 'A', text: 'degree of saturation' },
      { label: 'B', text: 'moisture content' },
      { label: 'C', text: 'void ratio' },
      { label: 'D', text: 'porosity' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'S = Vw/Vv is the degree of saturation, expressed as a percentage.',
      formulas: ['S = \\dfrac{V_w}{V_v} \\times 100\\%'],
      steps: [
        'Step 1: Both volumes are void-space volumes, so the ratio is a saturation measure.',
        'Step 2: $S = V_w/V_v$ is the degree of saturation — 100 % when the voids are full.',
      ],
      finalAnswer: 'degree of saturation (Option A)',
    },
  },

  // Item 19
  {
    id: 'hpge-may2015-q19',
    number: 19,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Definitions)',
    text: 'The ratio between the volume of voids and the volume of the soil mass:',
    options: [
      { label: 'A', text: 'void ratio' },
      { label: 'B', text: 'porosity' },
      { label: 'C', text: 'degree of saturation' },
      { label: 'D', text: 'moisture content' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'n = Vv/V is porosity; void ratio e = Vv/Vs uses the solids volume instead.',
      formulas: ['n = \\dfrac{V_v}{V} \\times 100\\%'],
      steps: [
        'Step 1: The denominator is the total volume $V$, not the solids volume.',
        'Step 2: $n = V_v/V$ is the porosity.',
      ],
      finalAnswer: 'porosity (Option B)',
    },
  },

  // Item 20
  {
    id: 'hpge-may2015-q20',
    number: 20,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Definitions)',
    text: 'The ratio between the weight of water and the weight of solid particles:',
    options: [
      { label: 'A', text: 'porosity' },
      { label: 'B', text: 'degree of saturation' },
      { label: 'C', text: 'moisture content' },
      { label: 'D', text: 'void ratio' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'w = Ww/Ws is the water content, always quoted on a dry-weight basis.',
      formulas: ['w = \\dfrac{W_w}{W_s} \\times 100\\%'],
      steps: [
        'Step 1: Both quantities are weights, and the reference is the weight of solids.',
        'Step 2: $w = W_w/W_s$ is the moisture (water) content.',
      ],
      finalAnswer: 'moisture content (Option C)',
    },
  },

  // Item 21
  {
    id: 'hpge-may2015-q21',
    number: 21,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Volume-Weight Relations)',
    text: 'In its natural state, a soil mass has a unit weight of 21.7 kN/m³. When fully saturated with water, the soil weighs 22.57 kN/m³. If its moisture content is 8%, what is the porosity of the soil?',
    options: [
      { label: 'A', text: '22.69%' },
      { label: 'B', text: '24.12%' },
      { label: 'C', text: '23.65%' },
      { label: 'D', text: '25.25%' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Get the dry unit weight from the natural state, then use γsat − γdry = nγw.',
      formulas: [
        '\\gamma_d = \\dfrac{\\gamma}{1 + w} = \\dfrac{21.7}{1.08} = 20.093\\ \\text{kN/m}^3',
        '\\gamma_{sat} - \\gamma_d = n\\gamma_w',
      ],
      steps: [
        'Step 1: $\\gamma_d = 21.7/(1 + 0.08) = 20.093\\ \\text{kN/m}^3$.',
        'Step 2: $\\gamma_{sat} - \\gamma_d = 22.57 - 20.093 = 2.477\\ \\text{kN/m}^3$.',
        'Step 3: $n = 2.477/9.81 = 0.2525$.',
        'Step 4: $n = 25.25\\%$.',
      ],
      finalAnswer: '25.25% (Option D)',
    },
  },

  // Item 22
  {
    id: 'hpge-may2015-q22',
    number: 22,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Volume-Weight Relations)',
    text: 'A soil mass has Gs = 2.40. What is the largest possible unit weight of this soil?',
    options: [
      { label: 'A', text: '22.542 kN/m³' },
      { label: 'B', text: '20.896 kN/m³' },
      { label: 'C', text: '23.544 kN/m³' },
      { label: 'D', text: '24.000 kN/m³' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The unit weight peaks when the voids vanish (e → 0), leaving solid rock.',
      formulas: [
        '\\gamma_{sat} = \\dfrac{G_s + e}{1 + e}\\gamma_w',
        '\\lim_{e \\to 0} \\gamma_{sat} = G_s\\gamma_w',
      ],
      steps: [
        'Step 1: Write the saturated unit weight in terms of $G_s$ and $e$.',
        'Step 2: As $e \\to 0$ the expression tends to $G_s\\gamma_w$.',
        'Step 3: $\\gamma_{max} = 2.40(9.81) = 23.544\\ \\text{kN/m}^3$.',
      ],
      finalAnswer: '23.544 kN/m³ (Option C)',
    },
  },

  // Item 23
  {
    id: 'hpge-may2015-q23',
    number: 23,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Volume-Weight Relations)',
    text: 'A soil sample has Gs = 2.60, e = 40%, and S = 20%. What is the saturated unit weight of this soil?',
    options: [
      { label: 'A', text: '18.78 kN/m³' },
      { label: 'B', text: '21.02 kN/m³' },
      { label: 'C', text: '19.63 kN/m³' },
      { label: 'D', text: '20.78 kN/m³' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The saturated unit weight depends only on Gs and e — the given S is not needed.',
      formulas: ['\\gamma_{sat} = \\dfrac{G_s + e}{1 + e}\\gamma_w = \\dfrac{2.60 + 0.40}{1.40}(9.81)'],
      steps: [
        'Step 1: $G_s + e = 3.00$; $1 + e = 1.40$.',
        'Step 2: $\\gamma_{sat} = (3.00/1.40)(9.81) = 2.1429(9.81)$.',
        'Step 3: $\\gamma_{sat} = 21.02\\ \\text{kN/m}^3$.',
      ],
      finalAnswer: '21.02 kN/m³ (Option B)',
    },
  },

  // Item 24
  {
    id: 'hpge-may2015-q24',
    number: 24,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Volume-Weight Relations)',
    text: 'A soil sample has Gs = 2.60, e = 40%, and S = 20%. What is the dry unit weight of this soil?',
    options: [
      { label: 'A', text: '17.85 kN/m³' },
      { label: 'B', text: '16.32 kN/m³' },
      { label: 'C', text: '18.69 kN/m³' },
      { label: 'D', text: '18.22 kN/m³' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Dry unit weight follows from Gs and e alone.',
      formulas: ['\\gamma_d = \\dfrac{G_s\\gamma_w}{1 + e} = \\dfrac{2.60(9.81)}{1.40}'],
      steps: [
        'Step 1: $G_s\\gamma_w = 2.60(9.81) = 25.506\\ \\text{kN/m}^3$.',
        'Step 2: $\\gamma_d = 25.506/1.40$.',
        'Step 3: $\\gamma_d = 18.22\\ \\text{kN/m}^3$.',
      ],
      finalAnswer: '18.22 kN/m³ (Option D)',
    },
  },

  // Item 25
  {
    id: 'hpge-may2015-q25',
    number: 25,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Shear Strength (Triaxial Test)',
    text: 'In a triaxial test, a cohesionless soil is subjected to a confining pressure of 14 kPa. The soil fails when the increase in axial stress by the plunger reaches 40 kPa. What is the angle of shearing resistance of the soil?',
    options: [
      { label: 'A', text: '36°' },
      { label: 'B', text: '34°' },
      { label: 'C', text: '30°' },
      { label: 'D', text: '28°' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'For c = 0 the Mohr failure criterion reduces to sin φ = (σ1 − σ3)/(σ1 + σ3).',
      formulas: [
        '\\sigma_3 = 14\\ \\text{kPa}, \\quad \\sigma_1 = 14 + 40 = 54\\ \\text{kPa}',
        '\\sin\\phi = \\dfrac{\\sigma_1 - \\sigma_3}{\\sigma_1 + \\sigma_3}',
      ],
      steps: [
        'Step 1: Confining pressure $\\sigma_3 = 14\\ \\text{kPa}$; the plunger adds the deviator stress.',
        'Step 2: $\\sigma_1 = 14 + 40 = 54\\ \\text{kPa}$.',
        'Step 3: $\\sin\\phi = (54 - 14)/(54 + 14) = 40/68 = 0.5882$.',
        'Step 4: $\\phi = 36.0°$.',
      ],
      finalAnswer: '36° (Option A)',
    },
  },

  // Item 26
  {
    id: 'hpge-may2015-q26',
    number: 26,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Shear Strength (Triaxial Test)',
    text: 'The results of a triaxial test conducted on a cohesionless soil are as follows: confining pressure = 60 kPa, plunger pressure = 80 kPa. What is the angle of shearing resistance?',
    options: [
      { label: 'A', text: '24.3°' },
      { label: 'B', text: '25.8°' },
      { label: 'C', text: '22.5°' },
      { label: 'D', text: '23.6°' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The plunger pressure is the deviator stress, so σ1 = 60 + 80.',
      formulas: ['\\sin\\phi = \\dfrac{80}{140 + 60} = \\dfrac{80}{200}'],
      steps: [
        'Step 1: $\\sigma_3 = 60\\ \\text{kPa}$; $\\sigma_1 = 60 + 80 = 140\\ \\text{kPa}$.',
        'Step 2: $\\sin\\phi = (140 - 60)/(140 + 60) = 0.40$.',
        'Step 3: $\\phi = 23.58° \\approx 23.6°$.',
      ],
      finalAnswer: '23.6° (Option D)',
    },
  },

  // Item 27
  {
    id: 'hpge-may2015-q27',
    number: 27,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Consolidation',
    text: 'A 10-mm-thick soil sample has a void ratio of 1.8. If its void ratio is decreased to one-half, what would be its new thickness?',
    options: [
      { label: 'A', text: '6.79 mm' },
      { label: 'B', text: '5.00 mm' },
      { label: 'C', text: '4.36 mm' },
      { label: 'D', text: '8.52 mm' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The solids thickness is constant, so H scales with (1 + e).',
      formulas: ['H_2 = H_1\\dfrac{1 + e_2}{1 + e_1} = 10\\dfrac{1 + 0.9}{1 + 1.8}'],
      steps: [
        'Step 1: The new void ratio is $e_2 = 1.8/2 = 0.90$.',
        'Step 2: $H_2 = 10(1.90/2.80)$.',
        'Step 3: $H_2 = 6.79\\ \\text{mm}$.',
      ],
      finalAnswer: '6.79 mm (Option A)',
    },
  },

  // Item 28
  {
    id: 'hpge-may2015-q28',
    number: 28,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Consolidation Settlement',
    text: 'For a normally consolidated clay layer in the field, the following values are given:\n\nThickness, H = 3 m\nNatural void ratio = 1.30\nCompression index, $C_c$ = 0.30\nAverage effective pressure in the layer is 125 kPa\n\nEstimate the primary consolidation settlement of the layer caused by an increase in pressure of 55 kPa.',
    options: [
      { label: 'A', text: '68 mm' },
      { label: 'B', text: '62 mm' },
      { label: 'C', text: '73 mm' },
      { label: 'D', text: '85 mm' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Normally consolidated clay: apply the Cc formula with p0 and p0 + Δp.',
      formulas: [
        'S = \\dfrac{C_c H}{1 + e_0}\\log_{10}\\dfrac{p_0 + \\Delta p}{p_0}',
        'S = \\dfrac{0.30(3000)}{1 + 1.30}\\log\\dfrac{180}{125}',
      ],
      steps: [
        'Step 1: $p_0 = 125\\ \\text{kPa}$; $p_0 + \\Delta p = 125 + 55 = 180\\ \\text{kPa}$.',
        'Step 2: $C_c H/(1 + e_0) = 0.30(3000)/2.30 = 391.3\\ \\text{mm}$.',
        'Step 3: $\\log(180/125) = \\log 1.44 = 0.1584$.',
        'Step 4: $S = 391.3(0.1584) = 61.97\\ \\text{mm}$.',
      ],
      finalAnswer: '62 mm (Option B)',
    },
  },

  // Item 29
  {
    id: 'hpge-may2015-q29',
    number: 29,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Buoyancy and Flotation',
    text: 'Situation 1 – A stone weighs 350 N in air and 240 N in water. Determine the following: The volume of the stone.',
    options: [
      { label: 'A', text: '0.0112 m³' },
      { label: 'B', text: '0.0102 m³' },
      { label: 'C', text: '0.0092 m³' },
      { label: 'D', text: '0.0133 m³' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The apparent loss of weight is the buoyant force, which equals the weight of the displaced water.',
      formulas: [
        'F_B = 350 - 240 = 110\\ \\text{N}',
        'V = \\dfrac{F_B}{\\gamma_w} = \\dfrac{110}{9810}',
      ],
      steps: [
        'Step 1: Buoyant force $= 350 - 240 = 110\\ \\text{N}$.',
        'Step 2: $V = 110/9810$.',
        'Step 3: $V = 0.0112\\ \\text{m}^3$.',
      ],
      finalAnswer: '0.0112 m³ (Option A)',
    },
  },

  // Item 30
  {
    id: 'hpge-may2015-q30',
    number: 30,
    pageNumber: 41,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Buoyancy and Flotation',
    text: 'Situation 1 (continued) – The unit weight of the stone.',
    options: [
      { label: 'A', text: '31.21 kN/m³' },
      { label: 'B', text: '37.06 kN/m³' },
      { label: 'C', text: '26.41 kN/m³' },
      { label: 'D', text: '34.34 kN/m³' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Divide the weight in air by the volume found in item 29.',
      formulas: ['\\gamma = \\dfrac{W}{V} = \\dfrac{0.350}{0.011213}'],
      steps: [
        'Step 1: $W = 350\\ \\text{N} = 0.350\\ \\text{kN}$.',
        'Step 2: $\\gamma = 0.350/0.011213$.',
        'Step 3: $\\gamma = 31.21\\ \\text{kN/m}^3$.',
      ],
      finalAnswer: '31.21 kN/m³ (Option A)',
    },
  },
];

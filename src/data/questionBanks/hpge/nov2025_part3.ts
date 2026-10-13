import { Question } from '../../../types/exam';

export const HPGE_NOV2025_PART3: Question[] = [
  // Item 25
  {
    id: 'hpge-nov2025-q25',
    number: 25,
    pageNumber: 552,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Consolidation - Primary Plastic Settlement of Clay Layer',
    text: 'Evaluate the plastic settlement, in meters, in a layer of plastic clay due to an increase of pressure caused by loads above it under the following conditions: Initial intergranular pressure = 205 kPa Increase in intergranular pressure = 150 kPa Thickness of the clay layer = 10 m Coefficient of consolidation = 0.315 Void ratio of the clay = 1.5.\nA. 0.18 m\nB. 0.30 m\nC. 0.25 m\nD. 0.35 m',
    options: [
      { label: 'A', text: '0.18 m' },
      { label: 'B', text: '0.30 m' },
      { label: 'C', text: '0.25 m' },
      { label: 'D', text: '0.35 m' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute primary consolidation settlement using Terzaghi\'s 1D consolidation settlement equation: ΔH = H · [Cc / (1 + e0)] · log10[(p0 + Δp) / p0].',
      formulas: [
        '\\Delta H = H \\frac{C_c}{1 + e_0} \\log\\left(\\frac{p_0 + \\Delta p}{p_0}\\right)',
        '\\Delta H = 10 \\frac{0.315}{1 + 1.5} \\log\\left(\\frac{205 + 150}{205}\\right)',
        '\\Delta H = 10(0.126) \\log(1.7317) = 1.26(0.2385) = 0.3005 \\approx 0.30',
      ],
      steps: [
        'Step 1: Formula for 1D consolidation settlement: ΔH = H · [Cc / (1 + e0)] · log[(p0 + Δp) / p0].',
        'Step 2: Given layer thickness H = 10 m, compression index Cc = 0.315, initial void ratio e0 = 1.5, p0 = 205 kPa, Δp = 150 kPa.',
        'Step 3: Stress ratio: (p0 + Δp) / p0 = (205 + 150) / 205 = 355 / 205 = 1.7317.',
        'Step 4: log10(1.7317) = 0.23847.',
        'Step 5: Settlement: ΔH = 10 × [0.315 / 2.5] × 0.23847 = 10 × 0.126 × 0.23847 = 0.3005 m ≈ 0.30 m (Option B).',
      ],
      finalAnswer: '0.30 m (Option B)',
      pageNumber: 570,
    },
  },

  // Item 26
  {
    id: 'hpge-nov2025-q26',
    number: 26,
    pageNumber: 552,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Consolidation - Coefficient of Consolidation Cv under Double Drainage',
    text: 'Field monitoring data shows that a clay layer with a thickness of 4 m reached a degree of consolidation of 90% after 365 days. Assuming double drainage, calculate the coefficient of consolidation in m²/day.\nA. 0.00541\nB. 0.00929\nC. 0.00763\nD. 0.00464',
    options: [
      { label: 'A', text: '0.00541' },
      { label: 'B', text: '0.00929' },
      { label: 'C', text: '0.00763' },
      { label: 'D', text: '0.00464' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute coefficient of consolidation Cv from dimensionless time factor Tv: Cv = Tv · Hdr² / t.',
      formulas: [
        'T_v = 0.848 \\quad (U = 90\\%)',
        'H_{dr} = \\frac{H}{2} = \\frac{4}{2} = 2',
        'C_v = \\frac{T_v H_{dr}^2}{t} = \\frac{0.848(2^2)}{365} = \\frac{3.392}{365} = 0.009293 \\approx 0.00929',
      ],
      steps: [
        'Step 1: For a 90% degree of consolidation (U = 90%), the theoretical time factor is Tv = 0.848.',
        'Step 2: Under double drainage, the maximum drainage path is half the layer thickness: Hdr = 4 m / 2 = 2 m.',
        'Step 3: Elapsed consolidation time: t = 365 days.',
        'Step 4: Solve for Cv: Cv = (Tv · Hdr²) / t = [0.848 × (2)²] / 365 = 3.392 / 365 = 0.009293 m²/day ≈ 0.00929 m²/day (Option B).',
      ],
      finalAnswer: '0.00929 (Option B)',
      pageNumber: 570,
    },
  },

  // Item 27
  {
    id: 'hpge-nov2025-q27',
    number: 27,
    pageNumber: 552,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Shear Strength - Triaxial Test on Cohesionless Soil',
    text: 'A cohesionless soil sample was subjected to a triaxial test. The soil is consolidated to an all-around chamber pressure of 60 kPa. The axial load was then increased, and failure occurred when the plunger stress reached 120 kPa. Obtain the angle of internal friction of the specimen.\nA. 40°\nB. 33°\nC. 42°\nD. 30°',
    options: [
      { label: 'A', text: '40°' },
      { label: 'B', text: '33°' },
      { label: 'C', text: '42°' },
      { label: 'D', text: '30°' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'For a cohesionless soil (c = 0), construct Mohr\'s circle at failure: sin φ = R / (σ3 + R). With plunger deviator stress σd = 120 kPa, sin φ = 60 / 120 = 0.5, yielding φ = 30°.',
      formulas: [
        'R = \\frac{1}{2}\\sigma_d = \\frac{120}{2} = 60',
        '\\sin\\phi = \\frac{R}{\\sigma_3 + R}',
        '\\sin\\phi = \\frac{60}{60 + 60} = \\frac{60}{120} = 0.5',
        '\\phi = \\sin^{-1}(0.5) = 30^\\circ',
      ],
      steps: [
        'Step 1: Chamber confining pressure σ3 = 60 kPa.',
        'Step 2: Deviator (plunger) stress at failure σd = 120 kPa.',
        'Step 3: Radius of Mohr\'s circle: R = σd / 2 = 120 / 2 = 60 kPa.',
        'Step 4: Distance from origin to circle center: C = σ3 + R = 60 + 60 = 120 kPa.',
        'Step 5: For cohesionless soil, the failure envelope passes through the origin tangent to Mohr\'s circle: sin φ = R / C = 60 / 120 = 0.5.',
        'Step 6: Internal friction angle: φ = arcsin(0.5) = 30° (Option D).',
      ],
      finalAnswer: '30° (Option D)',
      pageNumber: 570,
    },
  },

  // Item 28
  {
    id: 'hpge-nov2025-q28',
    number: 28,
    pageNumber: 552,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Shear Strength - Consolidated Drained Triaxial Test Angle of Friction',
    text: 'A consolidated drained triaxial test conducted on a consolidated clay specimen has the following results:\nChamber confining pressure = 150 kPa\nTotal axial stress at failure = 300 kPa\nObtain the angle of internal friction of the soil in degrees.\nA. 27°\nB. 42°\nC. 30°\nD. 33°',
    options: [
      { label: 'A', text: '27°' },
      { label: 'B', text: '42°' },
      { label: 'C', text: '30°' },
      { label: 'D', text: '33°' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'For normally consolidated drained clay (c = 0), the Mohr-Coulomb failure envelope is tangent to the circle from the origin: sin φ = (σ1 - σ3) / (σ1 + σ3). Here sin φ = 0.5 giving φ = 30°.',
      formulas: [
        '\\sigma_1 = 300, \\quad \\sigma_3 = 100',
        'R = \\frac{\\sigma_1 - \\sigma_3}{2} = 100',
        '\\sin\\phi = \\frac{R}{\\sigma_3 + R} = \\frac{100}{100 + 100} = 0.5',
        '\\phi = \\sin^{-1}(0.5) = 30^\\circ',
      ],
      steps: [
        'Step 1: In a consolidated drained (CD) test on normally consolidated clay, effective cohesion c\' = 0.',
        'Step 2: The Mohr-Coulomb failure criterion simplifies to sin φ = (σ1 - σ3) / (σ1 + σ3).',
        'Step 3: With circle radius R = (300 - 100) / 2 = 100 kPa and distance to center = 100 + 100 = 200 kPa.',
        'Step 4: sin φ = 100 / 200 = 0.5.',
        'Step 5: Internal friction angle φ = arcsin(0.5) = 30° (Option C).',
      ],
      finalAnswer: '30° (Option C)',
      pageNumber: 571,
    },
  },

  // Item 29
  {
    id: 'hpge-nov2025-q29',
    number: 29,
    pageNumber: 552,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Foundation Engineering - Terzaghi Square Footing Allowable Column Load',
    text: 'A square footing with dimensions of 3 m × 3 m is designed to support a concentric column load, P. The footing is embedded in a layer of sand at a depth of 2.2 m below the ground surface.\nThe supporting sand layer possesses the following geotechnical properties:\n• Unit Weight of Sand: 18 kN/m³\n• Angle of Internal Friction: 35°\n• Bearing Capacity Factors: Nc = 58, Nq = 42, and Nγ = 46\nUsing Terzaghi\'s bearing capacity theory for square footings and a Factor of Safety of 2.6 based on the ultimate bearing capacity, compute the maximum allowable column load that the footing can support in kilonewtons (kN).\nA. 9197\nB. 9932\nC. 9439\nD. 8391',
    options: [
      { label: 'A', text: '9197' },
      { label: 'B', text: '9932' },
      { label: 'C', text: '9439' },
      { label: 'D', text: '8391' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Compute ultimate bearing capacity for a square footing in cohesionless sand using Terzaghi\'s formula: qult = γ · Df · Nq + 0.4 · γ · B · Nγ. Then apply FS = 2.6 to find Pallow = qallow · A.',
      formulas: [
        'q_{\\text{ult}} = 1.3 c N_c + \\gamma D_f N_q + 0.4 \\gamma B N_\\gamma',
        'c = 0 \\implies q_{\\text{ult}} = \\gamma D_f N_q + 0.4 \\gamma B N_\\gamma',
        'q_{\\text{ult}} = (18)(2.2)(42) + 0.4(18)(3)(46) = 1663.2 + 993.6 = 2656.8',
        'q_{\\text{allow}} = \\frac{q_{\\text{ult}}}{FS} = \\frac{2656.8}{2.6} = 1021.85',
        'P_{\\text{allow}} = q_{\\text{allow}} A = (1021.85)(3 \\times 3) = 9196.6 \\approx 9197',
      ],
      steps: [
        'Step 1: Terzaghi ultimate bearing capacity equation for square footing in sand (c = 0): qult = γ·Df·Nq + 0.4·γ·B·Nγ.',
        'Step 2: Surcharge term: γ · Df · Nq = 18 × 2.2 × 42 = 1663.2 kPa.',
        'Step 3: Width term: 0.4 · γ · B · Nγ = 0.4 × 18 × 3 × 46 = 993.6 kPa.',
        'Step 4: Ultimate capacity: qult = 1663.2 + 993.6 = 2656.8 kPa.',
        'Step 5: Allowable soil pressure with FS = 2.6: qallow = 2656.8 / 2.6 = 1021.85 kPa.',
        'Step 6: Footing area: A = 3 m × 3 m = 9 m².',
        'Step 7: Maximum allowable concentric column load: Pallow = qallow × A = 1021.85 × 9 = 9196.6 kN ≈ 9197 kN (Option A).',
      ],
      finalAnswer: '9197 (Option A)',
      pageNumber: 571,
    },
  },

  // Item 30
  {
    id: 'hpge-nov2025-q30',
    number: 30,
    pageNumber: 553,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Stress Distribution - Boussinesq Vertical Stress at Culvert Crown',
    text: 'A concentrated load of 1,500 kN is applied at the ground surface. Directly below this load, a circular culvert with a diameter of 2.0 m is buried. The center of the culvert is located at a depth of 8.0 m from the ground surface. Determine the vertical stress at the top (crown) of the culvert.\nUse Boussinesq\'s equation:\np = (0.477 Q N) / z²; N = 1 / [1 + 2(r/z)²]^(2.5)\nA. 14.6\nB. 19.9\nC. 7.2\nD. 178.9',
    options: [
      { label: 'A', text: '14.6' },
      { label: 'B', text: '19.9' },
      { label: 'C', text: '7.2' },
      { label: 'D', text: '178.9' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Find the depth to the culvert crown (z = 8.0 - 1.0 = 7.0 m). Directly beneath the point load, radial distance r = 0, so N = 1.0. Evaluate vertical stress p = 0.477 · Q / z².',
      formulas: [
        'z = 8.0 - \\frac{2.0}{2} = 7.0',
        'r = 0 \\implies N = \\frac{1}{\\left(1 + 2\\left(\\frac{0}{7}\\right)^2\\right)^{2.5}} = 1',
        'p = \\frac{0.477 Q N}{z^2} = \\frac{0.477(1500)(1)}{(7)^2} = \\frac{715.5}{49} = 14.602 \\approx 14.6',
      ],
      steps: [
        'Step 1: Culvert center is at depth 8.0 m with diameter 2.0 m (radius = 1.0 m).',
        'Step 2: Depth to the crown (top) of the culvert: z = 8.0 m - 1.0 m = 7.0 m.',
        'Step 3: The point lies directly beneath the point load on the vertical axis: r = 0.',
        'Step 4: Influence factor: N = 1 / [1 + 2(0/7)²]^(2.5) = 1.0.',
        'Step 5: Vertical stress: p = [0.477 × 1500 × 1] / (7)² = 715.5 / 49 = 14.602 kPa ≈ 14.6 kPa (Option A).',
      ],
      finalAnswer: '14.6 (Option A)',
      pageNumber: 572,
    },
  },

  // Item 31
  {
    id: 'hpge-nov2025-q31',
    number: 31,
    pageNumber: 553,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Compaction - Factors Governing Maximum Dry Density',
    text: 'The maximum dry density up to which any soil can be compacted depends upon:\nA. Moisture content only\nB. Amount of compaction energy only\nC. Both moisture content and amount of compaction energy\nD. None of the above',
    options: [
      { label: 'A', text: 'Moisture content only' },
      { label: 'B', text: 'Amount of compaction energy only' },
      { label: 'C', text: 'Both moisture content and amount of compaction energy' },
      { label: 'D', text: 'None of the above' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Maximum dry density achieved during soil compaction depends simultaneously on moisture content (lubricating particles to optimal packing) and compaction energy (effort expelling air voids).',
      formulas: [],
      steps: [
        'Step 1: Water acts as a lubricating agent between soil particles, allowing them to slip into a denser configuration up to an Optimum Moisture Content (OMC).',
        'Step 2: Compaction energy (compactive effort) supplies mechanical work to pack grains together and expel entrapped air.',
        'Step 3: Increasing compaction energy raises maximum dry density and lowers optimum moisture content.',
        'Step 4: Hence, compaction outcome is governed by both moisture content and amount of compaction energy (Option C).',
      ],
      finalAnswer: 'Both moisture content and amount of compaction energy (Option C)',
      pageNumber: 573,
    },
  },

  // Item 32
  {
    id: 'hpge-nov2025-q32',
    number: 32,
    pageNumber: 553,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Compaction - Geotechnical Property Improvements',
    text: 'What property increases when soil is compacted?\nA. Void Ratio\nB. Compressibility\nC. Permeability\nD. Angle of internal friction',
    options: [
      { label: 'A', text: 'Void Ratio' },
      { label: 'B', text: 'Compressibility' },
      { label: 'C', text: 'Permeability' },
      { label: 'D', text: 'Angle of internal friction' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compaction drives particles closer together, decreasing void ratio, compressibility, and permeability while increasing dry unit weight, particle interlocking, and angle of internal friction (φ).',
      formulas: [
        'e \\downarrow, \\quad m_v \\downarrow, \\quad k \\downarrow',
        '\\gamma_d \\uparrow, \\quad \\phi \\uparrow',
      ],
      steps: [
        'Step 1: Compaction reduces the volume of air voids, which decreases void ratio (e).',
        'Step 2: Denser soil exhibits less settlement under applied load, meaning compressibility decreases.',
        'Step 3: Constricted void channels make water percolation harder, reducing hydraulic conductivity/permeability (k).',
        'Step 4: Enhanced grain-to-grain contact and physical interlocking directly increase shear strength and the angle of internal friction φ (Option D).',
      ],
      finalAnswer: 'Angle of internal friction (Option D)',
      pageNumber: 573,
    },
  },

  // Item 33
  {
    id: 'hpge-nov2025-q33',
    number: 33,
    pageNumber: 553,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Testing - In-Situ Field Stress Fidelity Limitations',
    text: 'What test is not reliable to show the present field condition of soil?\nA. Unconfined Compression Test\nB. Direct Shear Test\nC. Standard Penetration Test\nD. Tri-axial Shear Test',
    options: [
      { label: 'A', text: 'Unconfined Compression Test' },
      { label: 'B', text: 'Direct Shear Test' },
      { label: 'C', text: 'Standard Penetration Test' },
      { label: 'D', text: 'Tri-axial Shear Test' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The Unconfined Compression Test (UCT) lacks all lateral confining pressure (σ3 = 0), unlike true underground conditions where soil is bounded laterally by surrounding earth.',
      formulas: [
        '\\sigma_3 = 0',
      ],
      steps: [
        'Step 1: In nature, subsurface soil experiences 3D confining pressure from surrounding soil mass.',
        'Step 2: The Unconfined Compression Test provides zero lateral confinement (σ3 = 0).',
        'Step 3: Without lateral support, fissured or disturbed samples fail prematurely along planes of weakness, providing an unreliable measure of in-situ field conditions.',
        'Step 4: By contrast, SPT is conducted directly in the ground, and triaxial tests accurately replicate lateral confinement (Option A).',
      ],
      finalAnswer: 'Unconfined Compression Test (Option A)',
      pageNumber: 574,
    },
  },

  // Item 34
  {
    id: 'hpge-nov2025-q34',
    number: 34,
    pageNumber: 553,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Mechanics - Neutral Stress Definition & Physical Meaning',
    text: 'The neutral stress in soil mass is?\nA. Stress taken up by solid particles\nB. Stress taken up by the pore water\nC. Force per effective area\nD. Force per neutral area',
    options: [
      { label: 'A', text: 'Stress taken up by solid particles' },
      { label: 'B', text: 'Stress taken up by the pore water' },
      { label: 'C', text: 'Force per effective area' },
      { label: 'D', text: 'Force per neutral area' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'In soil mechanics, pore water pressure u is known as neutral stress because fluid exerts isotropic pressure equally in all directions without resisting shear or causing compaction of the skeleton.',
      formulas: [
        '\\sigma = \\sigma\' + u',
        '\\sigma\' = \\sigma - u',
      ],
      steps: [
        'Step 1: Terzaghi\'s effective stress equation is σ = σ\' + u.',
        'Step 2: The effective stress σ\' is borne by grain-to-grain contact points of the solid soil skeleton.',
        'Step 3: The pore water pressure u is referred to as neutral stress because water has no shear strength and cannot compress soil grains.',
        'Step 4: Therefore, neutral stress is the stress taken up by the pore water (Option B).',
      ],
      finalAnswer: 'Stress taken up by the pore water (Option B)',
      pageNumber: 575,
    },
  },

  // Item 35
  {
    id: 'hpge-nov2025-q35',
    number: 35,
    pageNumber: 554,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Shear Testing - Drainage Control & Pore Pressure Measurement',
    text: 'Which laboratory test can be performed under all three drainage conditions with complete control over pore pressure?\nA. Triaxial Shear Test\nB. Unconfined Compression Test\nC. Vane Shear Test\nD. Direct Shear Test',
    options: [
      { label: 'A', text: 'Triaxial Shear Test' },
      { label: 'B', text: 'Unconfined Compression Test' },
      { label: 'C', text: 'Vane Shear Test' },
      { label: 'D', text: 'Direct Shear Test' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The triaxial shear test encloses the soil in an impervious rubber membrane inside a pressurized cell, enabling complete drainage valve control to run UU, CU, and CD tests with pore pressure monitoring.',
      formulas: [],
      steps: [
        'Step 1: In a triaxial apparatus, specimens are isolated in a membrane with independent cell pressure and drainage lines.',
        'Step 2: The operator can open or close drainage valves to simulate UU (Unconsolidated Undrained), CU (Consolidated Undrained), and CD (Consolidated Drained) conditions.',
        'Step 3: Electronic transducers accurately measure pore water pressure throughout shearing.',
        'Step 4: Direct shear and vane tests cannot fully isolate and control pore pressure during all three states (Option A).',
      ],
      finalAnswer: 'Triaxial Shear Test (Option A)',
      pageNumber: 576,
    },
  },

  // Item 36
  {
    id: 'hpge-nov2025-q36',
    number: 36,
    pageNumber: 554,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Shear Strength - Rapid Loading & Undrained Failure in Clay',
    text: 'In a rapid loading test, why is clay prone to shear failure?\nA. Because there is no drainage\nB. Because it will dissipate\nC. Because the void ratio remains constant\nD. Because the angle of internal friction is zero',
    options: [
      { label: 'A', text: 'Because there is no drainage' },
      { label: 'B', text: 'Because it will dissipate' },
      { label: 'C', text: 'Because the void ratio remains constant' },
      { label: 'D', text: 'Because the angle of internal friction is zero' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Due to very low permeability, clay cannot dissipate pore water during rapid loading, generating high excess pore water pressure that prevents effective stress increase and triggers undrained shear failure.',
      formulas: [
        '\\Delta u > 0',
        '\\sigma\' = \\sigma - u',
      ],
      steps: [
        'Step 1: Saturated clays have extremely low hydraulic permeability (k ≈ 10⁻⁷ to 10⁻⁹ cm/s).',
        'Step 2: When loading is applied rapidly, pore water lacks sufficient time to escape from the voids (no drainage occurs).',
        'Step 3: This undrained condition causes total load to be transferred to pore water, raising excess pore water pressure.',
        'Step 4: Because effective stress cannot build up through consolidation, the soil fails prematurely under undrained shear (Option A).',
      ],
      finalAnswer: 'Because there is no drainage (Option A)',
      pageNumber: 577,
    },
  },
];

import { Question } from '../../../types/exam';

export const PSAD_NOV2024_PART1: Question[] = [
  // Item 1
  {
    id: 'psad-nov2024-q1',
    number: 1,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Material Behaviour',
    text: 'Situation 1 — Identify the behaviour of materials described:\n\n1. When a material is subjected to repeated cycles of stress or strain, what causes its structure to breakdown ultimately leading to fracture?',
    options: [
      { label: 'A', text: 'creep' },
      { label: 'B', text: 'plasticity' },
      { label: 'C', text: 'fatigue' },
      { label: 'D', text: 'yielding' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Fatigue is the progressive structural damage and failure of a material subjected to cyclic or fluctuating loads below its ultimate tensile strength.',
      steps: [
        'Fatigue: The failure of a material due to repeated or fluctuating cyclic stresses, even if the stress remains below the ultimate tensile strength or yield strength.',
        'Creep: Slow, progressive, time-dependent permanent deformation under sustained static load, prominent at elevated temperatures.',
        'Plasticity: The property of a material to undergo permanent irreversible deformation without fracture after the elastic limit is exceeded.',
        'Yielding: The onset of plastic deformation where deformation increases noticeably with little or no increase in stress.',
      ],
      finalAnswer: 'fatigue (Option C)',
      pageNumber: 282,
    },
  },

  // Item 2
  {
    id: 'psad-nov2024-q2',
    number: 2,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Material Behaviour',
    text: 'Situation 1 — 2. When a material has to support a load for a long period of time, what causes it to continue to deform until a sudden fracture occurs?',
    options: [
      { label: 'A', text: 'plasticity' },
      { label: 'B', text: 'fatigue' },
      { label: 'C', text: 'creep' },
      { label: 'D', text: 'yielding' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Creep is the time-dependent, continuous deformation of a structural material subjected to constant mechanical stress over an extended duration.',
      steps: [
        'Creep: The slow, gradual deformation of a material under a constant sustained load over a long period of time, leading eventually to creep rupture.',
        'Fatigue: Failure resulting from dynamic cyclic loading.',
        'Yielding: Stress-level transition from elastic to plastic behavior.',
        'Plasticity: Inherent property permitting non-elastic strain.',
      ],
      finalAnswer: 'creep (Option C)',
      pageNumber: 282,
    },
  },

  // Item 3
  {
    id: 'psad-nov2024-q3',
    number: 3,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Material Behaviour',
    text: 'Situation 1 — 3. In what condition is a material when it breaks down and deforms permanently even due to a slight increase in stress above the elastic limit?',
    options: [
      { label: 'A', text: 'plasticity' },
      { label: 'B', text: 'fatigue' },
      { label: 'C', text: 'yielding' },
      { label: 'D', text: 'creep' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Yielding is the physical phenomenon where a material exhibits a marked increase in strain without an appreciable increase in stress once the elastic limit is exceeded.',
      steps: [
        'Yielding: The condition where a material begins to deform plastically and permanently after reaching the elastic limit.',
        'Plasticity: The general capacity of a material to sustain permanent deformation without cracking.',
        'Fatigue: Fracture from alternating stress reversals.',
        'Creep: Long-term duration-dependent strain under constant static load.',
      ],
      finalAnswer: 'yielding (Option C)',
      pageNumber: 282,
    },
  },

  // Item 4
  {
    id: 'psad-nov2024-q4',
    number: 4,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Trusses with Cable Diagonals',
    text: 'Situation 2 — For the truss configuration shown, members AD and BC are cables.\nGiven: V = 10 kN, H = 6 kN, a = 1.5 m, b = 4 m, c = 6 m.\n\n4. Calculate the vertical reaction (kN) at A.',
    options: [
      { label: 'A', text: '15.14' },
      { label: 'B', text: '10.00' },
      { label: 'C', text: '4.86' },
      { label: 'D', text: '3.79' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Under the leftward lateral load H = 6 kN at D, the frame sways leftward. Diagonal AD goes slack (zero force), while diagonal BC develops tension. Analyze joint equilibrium at D and C to find the force in AC, then resolve at joint A to find reaction Av.',
      formulas: [
        '\\tan\\beta = \\frac{c}{a} = \\frac{6}{1.5} = 4 \\implies \\beta = 75.96^{\\circ}',
        '\\tan\\alpha = \\frac{c}{b + a} = \\frac{6}{5.5} = 1.0909 \\implies \\alpha = 47.49^{\\circ}',
        '\\text{Joint D: } \\sum F_v = 0 \\implies F_{BD}\\sin 75.96^{\\circ} - 10 = 0 \\implies F_{BD} = 10.308\\text{ kN (C)}',
        '\\sum F_h = 0 \\implies F_{CD} - 6 - 10.308\\cos 75.96^{\\circ} = 0 \\implies F_{CD} = 8.5\\text{ kN (C)}',
        '\\text{Joint C: } \\sum F_h = 0 \\implies F_{BC}\\cos 47.49^{\\circ} + F_{AC}\\cos 75.96^{\\circ} - 8.5 = 0',
        '\\sum F_v = 0 \\implies F_{AC}\\sin 75.96^{\\circ} - 10 - F_{BC}\\sin 47.49^{\\circ} = 0',
        'F_{AC} = 15.61\\text{ kN (C)}',
        'A_v = F_{AC}\\sin 75.96^{\\circ} = 15.61\\sin 75.96^{\\circ} = 15.14\\text{ kN}',
      ],
      steps: [
        'Step 1: Geometry: Angle of member BD with horizontal: tan β = 6 / 1.5 = 4 => β = 75.96°. Angle of diagonal cable BC: tan α = 6 / (4 + 1.5) = 6 / 5.5 => α = 47.49°.',
        'Step 2: Joint D equilibrium: ΣFv = 0 => F_BD sin 75.96° - 10 = 0 => F_BD = 10.308 kN (Compression). ΣFh = 0 => F_CD = 6 + 10.308 cos 75.96° = 8.5 kN (Compression).',
        'Step 3: Joint C equilibrium: ΣFh = 0 => F_BC cos 47.49° + F_AC cos 75.96° - 8.5 = 0. ΣFv = 0 => F_AC sin 75.96° - 10 - F_BC sin 47.49° = 0.',
        'Step 4: Solve simultaneous equations: F_AC = 15.61 kN (Compression) and F_BC = 6.98 kN (Tension).',
        'Step 5: Vertical reaction at support A: Av = F_AC sin 75.96° = 15.61 sin 75.96° = 15.14 kN.',
      ],
      finalAnswer: '15.14 (Option A)',
      pageNumber: 283,
    },
  },

  // Item 5
  {
    id: 'psad-nov2024-q5',
    number: 5,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Trusses with Cable Diagonals',
    text: 'Situation 2 — 5. Calculate the force (kN) in member AC.',
    options: [
      { label: 'A', text: '15.61 T' },
      { label: 'B', text: '15.61 C' },
      { label: 'C', text: '16.51 T' },
      { label: 'D', text: '16.51 C' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'From joint equilibrium of the top chord members and joints C and D, member AC acts as an inclined post carrying compressive force.',
      formulas: [
        'F_{AC} = 15.61\\text{ kN (Compression)}',
      ],
      steps: [
        'Step 1: Member AD is a cable that goes slack when lateral sway occurs toward the left.',
        'Step 2: Joint C equilibrium gives F_AC = 15.61 kN in compression.',
      ],
      finalAnswer: '15.61 C (Option B)',
      pageNumber: 284,
    },
  },

  // Item 6
  {
    id: 'psad-nov2024-q6',
    number: 6,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Trusses with Cable Diagonals',
    text: 'Situation 2 — 6. Calculate the force (kN) in member BD.',
    options: [
      { label: 'A', text: '10.31 T' },
      { label: 'B', text: '13.11 C' },
      { label: 'C', text: '10.31 C' },
      { label: 'D', text: '13.11 T' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Summing vertical forces at joint D directly gives the compressive axial force in member BD.',
      formulas: [
        '\\sum F_v = 0 \\implies F_{BD}\\sin 75.96^{\\circ} - 10 = 0 \\implies F_{BD} = \\frac{10}{\\sin 75.96^{\\circ}} = 10.308\\text{ kN (C)}',
      ],
      steps: [
        'Step 1: Isolate Joint D.',
        'Step 2: Vertical loads at Joint D: applied downward load V = 10 kN.',
        'Step 3: ΣFv = 0 => F_BD sin(75.96°) = 10 => F_BD = 10.31 kN (Compression).',
      ],
      finalAnswer: '10.31 C (Option C)',
      pageNumber: 283,
    },
  },

  // Item 7
  {
    id: 'psad-nov2024-q7',
    number: 7,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Cable Guy Systems',
    text: 'Situation 3 — A flagpole is supported by four cables as shown in the figure.\nGiven: P = 5 kN, a = 12 m, b = 12 m, h = 20 m. Diameter of cable = 12 mm, E = 200 GPa.\n\n7. Calculate the tensile stress (MPa) in cable AF.',
    options: [
      { label: 'A', text: '44.2' },
      { label: 'B', text: '32.3' },
      { label: 'C', text: '104.2' },
      { label: 'D', text: '112.4' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The lateral load P = 5 kN at top height G produces a overturning moment. Equilibrium about base hinge E shows cable AF carries the entire resisting moment. Solve for tension T in AF, then compute normal stress f_t = T / A.',
      formulas: [
        '\\sum M_E = 0 \\implies P(h) - T\\sin 45^{\\circ}(a) = 0 \\implies 5(20) - T\\sin 45^{\\circ}(12) = 0',
        'T = \\frac{100}{12\\sin 45^{\\circ}} = 11.785\\text{ kN}',
        'A = \\frac{\\pi}{4}(12)^2 = 113.097\\text{ mm}^2',
        'f_t = \\frac{T}{A} = \\frac{11,785\\text{ N}}{113.097\\text{ mm}^2} = 104.2\\text{ MPa}',
      ],
      steps: [
        'Step 1: Pole height h = 20 m, anchor distance a = 12 m. Guy cable AF connects to the pole at height 12 m at angle 45°.',
        'Step 2: Moment about pole base E: ΣM_E = 0 => 5(20) - T sin 45°(12) = 0 => T = 11.785 kN.',
        'Step 3: Cable cross-sectional area: A = (π/4)(12)² = 113.1 mm².',
        'Step 4: Tensile stress: f_t = 11,785 / 113.1 = 104.2 MPa.',
      ],
      finalAnswer: '104.2 (Option C)',
      pageNumber: 285,
    },
  },

  // Item 8
  {
    id: 'psad-nov2024-q8',
    number: 8,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Cable Guy Systems',
    text: 'Situation 3 — 8. What is the elongation (mm) of cable AF if the stress in the cable is 220 MPa?',
    options: [
      { label: 'A', text: '8.8' },
      { label: 'B', text: '9.5' },
      { label: 'C', text: '18.7' },
      { label: 'D', text: '13.2' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Compute the initial length of cable AF from geometry: L_AF = √(12² + 12²) = 16.97 m. Use Hooke’s law δ = σ L / E.',
      formulas: [
        'L_{AF} = \\sqrt{12^2 + 12^2} = 16.97056\\text{ m} = 16,970.56\\text{ mm}',
        '\\delta = \\frac{\\sigma L}{E} = \\frac{220(16,970.56)}{200,000} = 18.668\\text{ mm} \\approx 18.7\\text{ mm}',
      ],
      steps: [
        'Step 1: Length of cable AF: L = √(12² + 12²) = 16.971 m = 16,970.56 mm.',
        'Step 2: Given stress σ = 220 MPa, E = 200,000 MPa.',
        'Step 3: Elongation δ = σ·L / E = 220 × 16,970.56 / 200,000 = 18.67 mm ≈ 18.7 mm.',
      ],
      finalAnswer: '18.7 (Option C)',
      pageNumber: 285,
    },
  },

  // Item 9
  {
    id: 'psad-nov2024-q9',
    number: 9,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Mechanics of Deformable Bodies - Cable Guy Systems',
    text: 'Situation 3 — 9. If the elongation of AF is 22 mm, find the horizontal displacement (mm) at G.',
    options: [
      { label: 'A', text: '51.9' },
      { label: 'B', text: '36.7' },
      { label: 'C', text: '31.3' },
      { label: 'D', text: '7.6' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Apply small deformation kinematics: cable elongation δ_AF = 22 mm relates to horizontal displacement at attachment point F (height 12 m) via x_F = δ_AF / cos 45° = 31.11 mm. By proportional triangles along the 20 m rigid pole, displacement at top G is δ_Gh = (20 / 12) × 31.11 = 51.87 mm.',
      formulas: [
        'x_F = \\frac{\\delta_{AF}}{\\cos 45^{\\circ}} = \\frac{22}{\\cos 45^{\\circ}} = 31.113\\text{ mm}',
        '\\frac{\\delta_{Gh}}{h} = \\frac{x_F}{h_F} \\implies \\frac{\\delta_{Gh}}{20} = \\frac{31.113}{12}',
        '\\delta_{Gh} = 31.113 \\times \\frac{20}{12} = 51.855\\text{ mm} \\approx 51.9\\text{ mm}',
      ],
      steps: [
        'Step 1: Horizontal displacement at cable attachment point F: x_F = 22 / cos 45° = 31.113 mm.',
        'Step 2: By similar triangles for rotation of the rigid pole about base E: δ_Gh / 20 m = x_F / 12 m.',
        'Step 3: δ_Gh = (20 / 12) × 31.113 = 51.86 mm ≈ 51.9 mm.',
      ],
      finalAnswer: '51.9 (Option A)',
      pageNumber: 285,
    },
  },

  // Item 10
  {
    id: 'psad-nov2024-q10',
    number: 10,
    pageNumber: 1,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Engineering Mechanics - Statics & Friction',
    text: 'Situation 4 — Two cylinders A and B, weighing 750 N and 420 N, respectively, are connected by a rigid curved rod parallel to the cylindrical surface. Neglect the diameter of the cylinders. Given: θ = 90°, R = 6 m.\n\n10. If the surfaces are frictionless, what is the value of angle α to maintain equilibrium?',
    options: [
      { label: 'A', text: '50.17°' },
      { label: 'B', text: '60.75°' },
      { label: 'C', text: '45.14°' },
      { label: 'D', text: '76.12°' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Take moments about center of curvature O: normal reaction forces from frictionless surface pass through O, leaving only the weights producing moments. ΣM_O = 0: W_B (R cos β) - W_A (R cos α) = 0 with α + β = 90°.',
      formulas: [
        '\\alpha + \\beta = 90^{\\circ} \\implies \\beta = 90^{\\circ} - \\alpha',
        '\\sum M_O = 0 \\implies 420(R\\cos\\beta) - 750(R\\cos\\alpha) = 0',
        '420\\cos(90^{\\circ} - \\alpha) = 750\\cos\\alpha \\implies 420\\sin\\alpha = 750\\cos\\alpha',
        '\\tan\\alpha = \\frac{750}{420} = 1.7857 \\implies \\alpha = 60.75^{\\circ}',
      ],
      steps: [
        'Step 1: Equilibrium about center O: 420 R cos β - 750 R cos α = 0.',
        'Step 2: Since θ = 90°, α + β = 90° => cos β = sin α.',
        'Step 3: 420 sin α = 750 cos α => tan α = 750 / 420 = 1.7857.',
        'Step 4: α = arctan(1.7857) = 60.75°.',
      ],
      finalAnswer: '60.75° (Option B)',
      pageNumber: 286,
    },
  },

  // Item 11
  {
    id: 'psad-nov2024-q11',
    number: 11,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Engineering Mechanics - Statics & Friction',
    text: 'Situation 4 — 11. If the coefficient of friction is μ_s = 0.2 in the contacting surfaces, what is the smallest value of angle α to prevent counterclockwise rotation?',
    options: [
      { label: 'A', text: '56.88°' },
      { label: 'B', text: '49.44°' },
      { label: 'C', text: '38.66°' },
      { label: 'D', text: '50.17°' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'With friction μ = 0.2, the angle of friction is φ = arctan(0.2) = 11.31°. For counterclockwise rotation impending, the equilibrium equation yields α = 38.66°.',
      formulas: [
        '\\phi = \\tan^{-1}(0.2) = 11.31^{\\circ}',
        '\\frac{W_A}{W_A + W_B} = \\frac{\\cos(45^{\\circ} - \\phi)}{\\cos(45^{\\circ} - \\alpha)} \\sin(\\alpha + \\phi)',
        '\\frac{750}{750 + 420} = \\frac{\\cos(45^{\\circ} - 11.31^{\\circ})}{\\cos(45^{\\circ} - \\alpha)} \\sin(\\alpha + 11.31^{\\circ})',
        '\\alpha = 38.66^{\\circ}',
      ],
      steps: [
        'Step 1: Compute angle of friction: φ = arctan(0.20) = 11.31°.',
        'Step 2: Set up moment equilibrium about contact point B with impending counterclockwise motion.',
        'Step 3: Solve trigonometric relationship for α: α = 38.66°.',
      ],
      finalAnswer: '38.66° (Option C)',
      pageNumber: 287,
    },
  },

  // Item 12
  {
    id: 'psad-nov2024-q12',
    number: 12,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Engineering Mechanics - Statics & Friction',
    text: 'Situation 4 — 12. If the coefficient of friction is μ_s = 0.015 in the contacting surfaces, which of the following is the smallest value of angle α to impend motion?',
    options: [
      { label: 'A', text: '47.15°' },
      { label: 'B', text: '34.34°' },
      { label: 'C', text: '62.34°' },
      { label: 'D', text: '59.15°' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'With friction coefficient μ = 0.015, angle of friction φ = arctan(0.015) = 0.859°. Check both impending counterclockwise (α = 59.15°) and clockwise (α = 62.34°) motion limits; the smallest angle is 59.15°.',
      formulas: [
        '\\phi = \\tan^{-1}(0.015) = 0.859^{\\circ}',
        '\\text{Counterclockwise: } \\alpha = 59.15^{\\circ}',
        '\\text{Clockwise: } \\alpha = 62.34^{\\circ}',
        '\\alpha_{\\text{min}} = 59.15^{\\circ}',
      ],
      steps: [
        'Step 1: Compute angle of friction: φ = arctan(0.015) = 0.859°.',
        'Step 2: Impending counterclockwise rotation gives α = 59.15°.',
        'Step 3: Impending clockwise rotation gives α = 62.34°.',
        'Step 4: The smallest angle to impend motion is 59.15°.',
      ],
      finalAnswer: '59.15° (Option D)',
      pageNumber: 288,
    },
  },

  // Item 13
  {
    id: 'psad-nov2024-q13',
    number: 13,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Engineering Mechanics - Dynamics & Conical Pendulum',
    text: 'Situation 5 — A pendulum is rotated in a conical manner at a constant velocity. The length of the string cable is 450 mm, and the weight of the pendulum bob attached at the end of the string is 600 N.\n\n13. If the string makes an angle of 30° with the vertical, find the tension (N) in the cable.',
    options: [
      { label: 'A', text: '692.8' },
      { label: 'B', text: '1200.0' },
      { label: 'C', text: '519.6' },
      { label: 'D', text: '364.4' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Vertical equilibrium of the bob gives T cos θ = W.',
      formulas: [
        'T\\cos\\theta = W \\implies T = \\frac{W}{\\cos\\theta}',
        'T = \\frac{600}{\\cos 30^{\\circ}} = 692.82\\text{ N}',
      ],
      steps: [
        'Step 1: Identify vertical force equilibrium: T cos θ - W = 0.',
        'Step 2: Solve for cable tension: T = 600 / cos 30° = 692.82 N.',
      ],
      finalAnswer: '692.8 (Option A)',
      pageNumber: 288,
    },
  },

  // Item 14
  {
    id: 'psad-nov2024-q14',
    number: 14,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Engineering Mechanics - Dynamics & Conical Pendulum',
    text: 'Situation 5 — 14. If the string makes an angle of 30° with the vertical and if the allowable tension in the cable is 1250 N, find the maximum weight (N) of the bob attached.',
    options: [
      { label: 'A', text: '625.0' },
      { label: 'B', text: '1082.5' },
      { label: 'C', text: '721.7' },
      { label: 'D', text: '1443.4' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Using vertical equilibrium W = T cos θ with allowable tension T_all = 1250 N.',
      formulas: [
        'W = T\\cos\\theta = 1250\\cos 30^{\\circ} = 1082.53\\text{ N}',
      ],
      steps: [
        'Step 1: Vertical component of allowable tension balances weight: W = T cos θ.',
        'Step 2: W = 1250 cos 30° = 1082.53 N.',
      ],
      finalAnswer: '1082.5 (Option B)',
      pageNumber: 289,
    },
  },

  // Item 15
  {
    id: 'psad-nov2024-q15',
    number: 15,
    pageNumber: 2,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Engineering Mechanics - Dynamics & Conical Pendulum',
    text: 'Situation 5 — 15. Find the pulling force (N) at the plane of circumference, if it is rotated at a constant speed of v = 2.5 m/s.',
    options: [
      { label: 'A', text: '643.1' },
      { label: 'B', text: '346.1' },
      { label: 'C', text: '692.9' },
      { label: 'D', text: '992.6' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The pulling force at the plane of rotation is the centripetal force CF = (W/g) · (v² / R). With R = L sin θ and tan θ = v² / (g R), solve for angle θ = 58.85° and compute CF = 992.6 N.',
      formulas: [
        '\\tan\\theta = \\frac{v^2}{g R} = \\frac{v^2}{g L\\sin\\theta} \\implies \\sin\\theta\\tan\\theta = \\frac{v^2}{g L}',
        '\\sin\\theta\\tan\\theta = \\frac{2.5^2}{9.81(0.45)} = 1.4158 \\implies \\theta = 58.85^{\\circ}',
        'R = L\\sin\\theta = 0.45\\sin(58.85^{\\circ}) = 0.385\\text{ m}',
        'CF = \\frac{W v^2}{g R} = \\frac{600(2.5)^2}{9.81(0.385)} = 992.6\\text{ N}',
      ],
      steps: [
        'Step 1: Centripetal force balance: tan θ = v² / (g · R), where R = L sin θ = 0.45 sin θ.',
        'Step 2: sin θ tan θ = (2.5)² / [9.81(0.45)] = 1.4158 => θ = 58.85°.',
        'Step 3: Radius R = 0.45 sin(58.85°) = 0.385 m.',
        'Step 4: Centripetal pulling force CF = (600 / 9.81) × (2.5)² / 0.385 = 992.6 N.',
      ],
      finalAnswer: '992.6 (Option D)',
      pageNumber: 289,
    },
  },
];

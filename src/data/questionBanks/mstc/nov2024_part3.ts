import { Question } from '../../../types/exam';

export const MSTC_NOV2024_PART3: Question[] = [
  // Item 25
  {
    id: 'mstc-nov2024-q25',
    number: 25,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Integral Calculus - Properties of Definite Integrals',
    text: 'If a function $f$ is continuous for all values of $x$, which of the following statements is/are always true?\n\nI. $\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx$\nII. $\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx - \\int_b^c f(x)\\,dx$\nIII. $\\int_a^b f(x)\\,dx = \\int_b^c f(x)\\,dx - \\int_c^a f(x)\\,dx$',
    options: [
      { label: 'A', text: 'I & II' },
      { label: 'B', text: 'I & III' },
      { label: 'C', text: 'II & III' },
      { label: 'D', text: 'I, II, & III' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Statement I is the fundamental interval additivity property (TRUE). Statement II has an incorrect minus sign. Statement III: ∫_bᶜ f(x) dx - ∫_cᵃ f(x) dx = ∫_bᶜ f(x) dx + ∫ₐᶜ f(x) dx = ∫ₐᵇ f(x) dx (TRUE). Thus I & III are true.',
      formulas: [
        'Statement I: ∫ₐᵇ f = ∫ₐᶜ f + ∫_cᵇ f (Additivity, TRUE)',
        'Statement II: -∫_bᶜ f = ∫_cᵇ f => gives ∫ₐᶜ f + ∫_cᵇ f (FALSE as written with reversed limits)',
        'Statement III: -∫_cᵃ f = ∫ₐᶜ f => ∫ₐᶜ f + ∫_cᵇ f = ∫ₐᵇ f (TRUE)',
      ],
      steps: [
        'Step 1: Statement I is standard additivity for any intermediate point c, which is always TRUE.',
        'Step 2: Statement II simplifies to ∫ₐᶜ f(x) dx + ∫_cᵇ f(x) dx only if reversed correctly; as stated, it is FALSE.',
        'Step 3: Statement III: -∫_cᵃ f(x) dx = ∫ₐᶜ f(x) dx. Adding ∫_bᶜ f(x) dx and reversing appropriately yields ∫ₐᵇ f(x) dx, so Statement III is TRUE.',
        'Step 4: Therefore, Statements I & III are true.',
      ],
      finalAnswer: 'I & III (Option B)',
      pageNumber: 195,
    },
  },

  // Item 26
  {
    id: 'mstc-nov2024-q26',
    number: 26,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Integral Calculus - Parabolic Tunnel Excavation Volume',
    text: 'In order to distribute stress, mine tunnels are sometimes rounded. Suppose that the vertical cross sections of a tunnel can be modeled by the parabola $y = 6 - 0.06x^2$. If $x$ and $y$ are measured in feet, how much rock would have to be moved to make such a tunnel that is 100 feet long?',
    figureCaption: 'Figure 26: Parabolic mine tunnel cross section excavation',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_26.png" 
        alt="Figure 26: Parabolic mine tunnel cross section excavation" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '9000' },
      { label: 'B', text: '8000' },
      { label: 'C', text: '7000' },
      { label: 'D', text: '6000' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Set y = 0 => 6 - 0.06x² = 0 => x² = 100 => x = ±10 ft (base width b = 20 ft, height h = 6 ft). Area = 2/3 b h = 2/3(20)(6) = 80 ft². Volume = Area × Length = 80 × 100 = 8,000 ft³.',
      formulas: [
        'y = 6 - 0.06x² = 0 => x = ±10 ft',
        'Base b = 20 ft, Height h = 6 ft',
        'Area_parabola = (2/3) · b · h = (2/3) · (20) · (6) = 80 ft²',
        'Volume = 80 ft² · 100 ft = 8,000 ft³',
      ],
      steps: [
        'Step 1: Find the tunnel floor width where y = 0: 6 - 0.06x² = 0 => x = ±10 ft.',
        'Step 2: Base width b = 10 - (-10) = 20 ft; height h = 6 ft at x = 0.',
        'Step 3: Parabolic area = 2/3 × base × height = (2/3) × 20 × 6 = 80 ft² (or via ∫₋₁₀¹⁰ (6 - 0.06x²) dx = 80).',
        'Step 4: Excavation volume = 80 ft² × 100 ft = 8,000 ft³.',
      ],
      finalAnswer: '8000 (Option B)',
      pageNumber: 196,
    },
  },

  // Item 27
  {
    id: 'mstc-nov2024-q27',
    number: 27,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Integral Calculus - Solid with Known Cross Sections',
    text: 'What is the volume of the solid whose base is the region enclosed by the graphs of $y = x^2$ and $y = x + 2$ and whose cross sections perpendicular to the $x$-axis are squares?',
    options: [
      { label: 'A', text: '$79/10$' },
      { label: 'B', text: '$81/10$' },
      { label: 'C', text: '$77/10$' },
      { label: 'D', text: '$83/10$' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Intersection points: x + 2 = x² => x² - x - 2 = 0 => x = -1 and x = 2. Side of square s = (x + 2) - x². V = ∫₋₁² [(x + 2) - x²]² dx = 81/10.',
      formulas: [
        'x² = x + 2 => (x - 2)(x + 1) = 0 => x = -1, 2',
        's(x) = y_upper - y_lower = (x + 2) - x²',
        'V = ∫₋₁² [(x + 2) - x²]² dx = 81/10',
      ],
      steps: [
        'Step 1: Intersections: x² - x - 2 = 0 => x = -1 and x = 2.',
        'Step 2: Cross section is a square with side length s = (x + 2 - x²).',
        'Step 3: Cross-sectional area A(x) = s² = (x + 2 - x²)² = x⁴ - 2x³ - 3x² + 4x + 4.',
        'Step 4: Integrate from -1 to 2: [x⁵/5 - x⁴/2 - x³ + 2x² + 4x]₋₁² = 81/10.',
      ],
      finalAnswer: '81/10 (Option B)',
      pageNumber: 197,
    },
  },

  // Item 28
  {
    id: 'mstc-nov2024-q28',
    number: 28,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Engineering Mechanics / Statics - Varignon\'s Theorem & Center of Gravity',
    text: 'A one-meter rod is suspended at its middle so that it balances. Suppose one-gram weights are hung on the rod at the following distances from one end:\n\n| Weight # | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n| **Distance from End** | 5 cm | 20 cm | 37 cm | 44 cm | 52 cm | 68 cm | 71 cm | 85 cm |\n\nThe rod does not balance at the 50-centimeter mark. Where must a one-gram weight be hung so that the rod will balance at the 50-centimeter mark?',
    options: [
      { label: 'A', text: '83' },
      { label: 'B', text: '50' },
      { label: 'C', text: '68' },
      { label: 'D', text: '72' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Total weights = 9 (eight existing + one new at distance x). By Varignon\'s Theorem / Center of Gravity: 9 × 50 = 5 + 20 + 37 + 44 + 52 + 68 + 71 + 85 + x => 450 = 382 + x => x = 68 cm.',
      formulas: [
        'Total weights N = 9',
        'Σ(W · x) = (ΣW) · x_bar',
        '9 · (50) = 5 + 20 + 37 + 44 + 52 + 68 + 71 + 85 + x',
        '450 = 382 + x => x = 68 cm',
      ],
      steps: [
        'Step 1: There are currently 8 one-gram weights, and adding 1 more makes 9 weights in total.',
        'Step 2: To balance at the 50 cm mark, the center of gravity of all 9 weights must be at x̄ = 50 cm.',
        'Step 3: Sum of moments about x = 0: 9 × 50 = 450 g·cm.',
        'Step 4: Sum of current 8 positions = 5 + 20 + 37 + 44 + 52 + 68 + 71 + 85 = 382 g·cm.',
        'Step 5: Solve for missing location: x = 450 - 382 = 68 cm.',
      ],
      finalAnswer: '68 (Option C)',
      pageNumber: 198,
    },
  },

  // Item 29
  {
    id: 'mstc-nov2024-q29',
    number: 29,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Physics / Dynamics - Conservation of Linear Momentum',
    text: 'A child in a boat throws a 6.40 kg package out horizontally with a speed of 10.0 m/s. Calculate the velocity of the boat immediately after, assuming it was initially at rest. The mass of the child is 26.0 kg and that of the boat is 45.0 kg. Ignore water resistance.',
    options: [
      { label: 'A', text: '-0.701 m/s' },
      { label: 'B', text: '-0.901 m/s' },
      { label: 'C', text: '-0.901 m/s' },
      { label: 'D', text: '-0.801 m/s' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Conservation of momentum: (m_child + m_boat) · v\'₂ + m_package · v₁ = 0 => (26 + 45) · v\'₂ + (6.4)(10) = 0 => 71 v\'₂ = -64 => v\'₂ = -0.901 m/s.',
      formulas: [
        'Σ(mv)_initial = Σ(mv)_final = 0',
        'm₁ = 6.4 kg, v₁ = 10 m/s',
        'm₂ = 26 + 45 = 71 kg',
        '71 · v\'₂ + (6.4)(10) = 0 => v\'₂ = -64 / 71 = -0.901 m/s',
      ],
      steps: [
        'Step 1: System begins from rest, so initial total linear momentum = 0.',
        'Step 2: Total mass of child and boat = 26 kg + 45 kg = 71 kg.',
        'Step 3: Momentum of package thrown forward = 6.4 kg × 10 m/s = 64 kg·m/s.',
        'Step 4: By conservation of momentum: 71(v\'₂) + 64 = 0 => v\'₂ = -0.901 m/s (recoiling backwards).',
      ],
      finalAnswer: '-0.901 m/s (Option B)',
      pageNumber: 198,
    },
  },

  // Item 30
  {
    id: 'mstc-nov2024-q30',
    number: 30,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Transportation / Physics - Skid Marks & Work-Energy Theorem',
    text: 'At an accident scene on a level road, investigators measure a car\'s skid mark to be 88 m long. The accident occurred on a rainy day and the coefficient of kinetic friction was estimated to be 0.42. Use these data to determine the speed of the car when the driver slammed on (and locked) the brakes. (Why does this mass not matter?)',
    options: [
      { label: 'A', text: '27 m/s, mass is not needed because the braking force acts in the same direction from the direction of the car\'s motion' },
      { label: 'B', text: '27 m/s, mass is not needed because the kinetic friction acts in the opposite direction from the direction of the car\'s motion' },
      { label: 'C', text: '27 m/s, mass is not needed because the kinetic friction acts in the same direction from the direction of the car\'s motion' },
      { label: 'D', text: '27 m/s, mass is not needed because the braking force acts in the opposite direction from the direction of the car\'s motion' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Work-Energy: 1/2 m v² = μ_k m g d => v = √(2 μ_k g d) = √(2 · 0.42 · 9.81 · 88) = 26.93 m/s ≈ 27 m/s. Mass cancels out because both friction force and kinetic energy are proportional to mass. The braking force acts opposite to motion.',
      formulas: [
        '1/2 m v² = μ_k · m · g · d',
        'v = √(2 · μ_k · g · d)',
        'v = √(2 · 0.42 · 9.81 · 88) = √725.155 = 26.93 m/s ≈ 27 m/s',
      ],
      steps: [
        'Step 1: Work done by friction opposes car motion: W = f_k × d = μ_k m g d.',
        'Step 2: Equate to initial kinetic energy: 1/2 m v² = μ_k m g d.',
        'Step 3: Mass m cancels out on both sides.',
        'Step 4: v = √(2 × 0.42 × 9.81 × 88) = 26.93 m/s ≈ 27 m/s.',
        'Step 5: Mass is not needed because braking force acts opposite to motion and cancels in the energy equation.',
      ],
      finalAnswer: '27 m/s, mass is not needed because the braking force acts in the opposite direction from the direction of the car\'s motion (Option D)',
      pageNumber: 199,
    },
  },

  // Item 31
  {
    id: 'mstc-nov2024-q31',
    number: 31,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Highway Engineering - Minimum Radius of Horizontal Curve',
    text: 'A road is being designed for a speed of 110 km/h on a horizontal curve with a super-elevation of 8%. If the coefficient of side friction is 0.1, the minimum radius of the curve (in m) required for safe vehicular movement is:',
    options: [
      { label: 'A', text: '115' },
      { label: 'B', text: '152' },
      { label: 'C', text: '264.3' },
      { label: 'D', text: '528.74' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'R_min = v² / [g(e + f)]. v = 110 / 3.6 = 30.556 m/s. R_min = (30.556)² / [9.81(0.08 + 0.10)] = 933.64 / 1.7658 = 528.74 m.',
      formulas: [
        'v = 110 km/h = 110 / 3.6 = 30.556 m/s',
        'R_min = v² / [g(e + f)] = V² / [127(e + f)]',
        'R_min = (110)² / [127 · (0.08 + 0.10)] = 12,100 / 22.86 = 528.74 m',
      ],
      steps: [
        'Step 1: Design speed V = 110 km/h, superelevation e = 0.08, side friction f = 0.10.',
        'Step 2: Highway engineering minimum radius formula: R_min = V² / [127(e + f)].',
        'Step 3: R_min = (110)² / [127 × (0.08 + 0.10)] = 12,100 / (127 × 0.18).',
        'Step 4: R_min = 12,100 / 22.86 = 528.74 m.',
      ],
      finalAnswer: '528.74 (Option D)',
      pageNumber: 199,
    },
  },

  // Item 32
  {
    id: 'mstc-nov2024-q32',
    number: 32,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Physics / Work-Energy Theorem - Spring Bumper Constant',
    text: 'A 4500 kg ore car rolls down an incline and passes point A traveling at 1.2 m/s. The ore car is stopped by a spring bumper that compresses 0.6 m. A constant friction force of 220 N acts on the car at all times. What is the spring constant?\nGiven: Distance along incline d = 75 m from A to spring, then 60 m level track; vertical drop = 1 m.',
    figureCaption: 'Figure 32: Ore car rolling down incline to spring bumper',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_32.png" 
        alt="Figure 32: Ore car rolling down incline to spring bumper" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '99.5 kN/m' },
      { label: 'B', text: '96.5 kN/m' },
      { label: 'C', text: '98.5 kN/m' },
      { label: 'D', text: '97.5 kN/m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Work-Energy from A to stalled spring C: 1/2 m v_A² + m g h - F_f · (d_total) = 1/2 k x². 1/2(4500)(1.2)² + 4500(9.81)(1) - 220(75 + 60 + 0.6) = 1/2 k (0.6)². 3240 + 44145 - 29832 = 0.18 k => 17553 = 0.18 k => k = 97,516.67 N/m = 97.5 kN/m.',
      formulas: [
        'KE_A + PE_A - Work_friction = PE_spring',
        '1/2 · (4500) · (1.2)² + 4500 · (9.81) · (1) - 220 · (75 + 60 + 0.6) = 1/2 · k · (0.6)²',
        '3240 + 44145 - 29832 = 0.18 · k',
        '17,553 = 0.18 · k => k = 97,516.67 N/m = 97.5 kN/m',
      ],
      steps: [
        'Step 1: Initial kinetic energy at A: KE_A = 1/2(4500)(1.2)² = 3,240 J.',
        'Step 2: Potential energy loss from vertical drop of 1 m: PE = 4500 × 9.81 × 1 = 44,145 J.',
        'Step 3: Total distance traveled by car = 75 m + 60 m + 0.6 m = 135.6 m.',
        'Step 4: Work done by friction = 220 N × 135.6 m = 29,832 J.',
        'Step 5: Net energy absorbed by spring: 3240 + 44145 - 29832 = 17,553 J.',
        'Step 6: 1/2 k (0.6)² = 0.18 k = 17,553 => k = 97,516.67 N/m = 97.5 kN/m.',
      ],
      finalAnswer: '97.5 kN/m (Option D)',
      pageNumber: 201,
    },
  },

  // Item 33
  {
    id: 'mstc-nov2024-q33',
    number: 33,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Probability & Statistics - Mathematical Expectation',
    text: 'Assume that a person spins the pointer and is awarded the amount indicated by the pointer. If it costs ₱8 to play the game, determine the expectation of a person who plays the game.\nSpinner division: ₱2 covers 1/4 of circle, ₱5 covers 1/4, ₱10 covers 1/4; two other 1/8 sectors are ₱5 and ₱20.',
    figureCaption: 'Figure 33: Circular prize wheel spinner sectors',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_33.png" 
        alt="Figure 33: Circular prize wheel spinner sectors" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '-0.652' },
      { label: 'B', text: '-0.562' },
      { label: 'C', text: '-0.265' },
      { label: 'D', text: '-0.625' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Probabilities: P(2) = 1/4, P(5) = 1/4 + 1/8 = 3/8, P(10) = 1/4, P(20) = 1/8. Expected payout = (1/4)(2) + (1/4)(5) + (1/8)(5) + (1/4)(10) + (1/8)(20) = 0.5 + 1.25 + 0.625 + 2.5 + 2.5 = 7.375. Expected value E = 7.375 - 8 = -₱0.625.',
      formulas: [
        'E = Σ[x · P(x)] - Cost',
        'Payout = (1/4)(2) + (1/4)(5) + (1/8)(5) + (1/4)(10) + (1/8)(20) = 7.375',
        'E = 7.375 - 8 = -0.625',
      ],
      steps: [
        'Step 1: Compute expected winnings: E(X) = (1/4)(2) + (1/4)(5) + (1/8)(5) + (1/4)(10) + (1/8)(20).',
        'Step 2: E(X) = 0.50 + 1.25 + 0.625 + 2.50 + 2.50 = ₱7.375.',
        'Step 3: Subtract cost to play: Expectation = 7.375 - 8.00 = -₱0.625.',
      ],
      finalAnswer: '-0.625 (Option D)',
      pageNumber: 201,
    },
  },

  // Item 34
  {
    id: 'mstc-nov2024-q34',
    number: 34,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Probability & Statistics - Sampling Without Replacement',
    text: 'A new medicine was given to a sample of 25 of Dr. Cleary\'s patients with flu symptoms. Of the total, 19 patients reacted favorably, 2 reacted unfavorably, and 4 were unaffected. Three of these patients are selected at random. Determine the probability of all three reacted favorably.',
    options: [
      { label: 'A', text: '19/725' },
      { label: 'B', text: '969/2300' },
      { label: 'C', text: '114/115' },
      { label: 'D', text: '1/115' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Sampling without replacement: P = (19/25) · (18/24) · (17/23) = 5814 / 13800 = 969 / 2300.',
      formulas: [
        'P(all 3 favorable) = (19 / 25) · (18 / 24) · (17 / 23)',
        'P = 5,814 / 13,800 = 969 / 2,300',
      ],
      steps: [
        'Step 1: First favorable patient: 19 / 25.',
        'Step 2: Second favorable patient: 18 / 24.',
        'Step 3: Third favorable patient: 17 / 23.',
        'Step 4: Total probability = (19 × 18 × 17) / (25 × 24 × 23) = 5,814 / 13,800 = 969 / 2,300.',
      ],
      finalAnswer: '969/2300 (Option B)',
      pageNumber: 202,
    },
  },

  // Item 35
  {
    id: 'mstc-nov2024-q35',
    number: 35,
    pageNumber: 5,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Probability & Statistics - Conditional / Prior Probability',
    text: 'Certain birth defects and syndromes are polygenetic in nature. Typically, the chance that an offspring will be born with a polygenetic affliction is small. However, once an offspring is born with the affliction, the probability that future offspring of the same parents will be born with the same affliction increases. Let\'s assume that the probability of a child being born with affliction A is 0.001. If a child is born with this affliction, the probability of a future child being born with the same affliction becomes 0.04. A couple plans to have one child. Determine the probability that the child will be born with this affliction.',
    options: [
      { label: 'A', text: '0.04' },
      { label: 'B', text: '0.001' },
      { label: 'C', text: '0.96' },
      { label: 'D', text: '0.999' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The couple has not had any previous children with the affliction. The elevated 0.04 probability applies only to future children after an afflicted child is born. For their first/only child, the standard rate 0.001 applies.',
      formulas: [
        'P(first child afflicted) = 0.001',
        'P(subsequent child afflicted | prior child afflicted) = 0.04',
      ],
      steps: [
        'Step 1: The couple is having their first child.',
        'Step 2: They do not already have an afflicted child, so the conditional probability of 0.04 does not apply.',
        'Step 3: The baseline general population probability applies: 0.001.',
      ],
      finalAnswer: '0.001 (Option B)',
      pageNumber: 202,
    },
  },

  // Item 36
  {
    id: 'mstc-nov2024-q36',
    number: 36,
    pageNumber: 6,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Probability & Set Theory - Venn Diagram Stock Categorization',
    text: 'Many local newspapers list "stocks of local interest." Suppose that on a certain day, a prospective investor categorized 23 stocks according to whether:\n• their closing price on the previous day was less than $50/share (set C)\n• their price-to-earnings ratio was less than 20 (set P)\n• their dividend per share was at least $1.50 (set D)\nOf these 23 stocks:\n16 belonged to set P; 12 belonged to set C; 8 belonged to set D;\n3 belonged to both C and D; 10 belonged to both C and P; 7 belonged to both D and P; 2 belonged to all three sets\nWhich of the following Venn diagrams fits the data perfectly?',
    figureCaption: 'Figure 36: Venn diagrams for Stock categorization (Sets C, P, D)',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_36.png" 
        alt="Figure 36: Venn diagrams for Stock categorization" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: 'Diagram a' },
      { label: 'B', text: 'Diagram b' },
      { label: 'C', text: 'Diagram c' },
      { label: 'D', text: 'Diagram d' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Center = 2. C ∩ P = 10 => C ∩ P only = 10 - 2 = 8. D ∩ P = 7 => D ∩ P only = 7 - 2 = 5. C ∩ D = 3 => C ∩ D only = 3 - 2 = 1. Only P = 16 - (8 + 2 + 5) = 1. Only C = 12 - (8 + 2 + 1) = 1. Only D = 8 - (5 + 2 + 1) = 0. Outside = 23 - (1 + 8 + 1 + 5 + 2 + 1 + 0) = 5. This matches Diagram d.',
      formulas: [
        'P ∩ C ∩ D = 2',
        'P ∩ C only = 10 - 2 = 8; P ∩ D only = 7 - 2 = 5; C ∩ D only = 3 - 2 = 1',
        'P only = 16 - 15 = 1; C only = 12 - 11 = 1; D only = 8 - 8 = 0',
        'Outside = 23 - 18 = 5 => Exactly Diagram d',
      ],
      steps: [
        'Step 1: Start with the intersection of all three sets: 2.',
        'Step 2: Two-set exclusive intersections: C & P only = 10 - 2 = 8; D & P only = 7 - 2 = 5; C & D only = 3 - 2 = 1.',
        'Step 3: Exclusive individual sets: P only = 16 - (8 + 2 + 5) = 1; C only = 12 - (8 + 2 + 1) = 1; D only = 8 - (5 + 2 + 1) = 0.',
        'Step 4: Sum in sets = 1 + 8 + 1 + 5 + 2 + 1 + 0 = 18. Outside = 23 - 18 = 5.',
        'Step 5: Diagram d displays these numbers exactly.',
      ],
      finalAnswer: 'Diagram d (Option D)',
      pageNumber: 203,
    },
  },
];

import { Question } from '../../../types/exam';

export const MSTC_APR2025_PART4: Question[] = [
  // Item 41
  {
    id: 'mstc-apr2025-q41',
    number: 41,
    pageNumber: 12,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Traffic Engineering & Queueing Theory - D/D/1 Intersection Queue Length',
    text: 'An approach at a pretimed signalized intersection has an arrival rate of 500 veh/hr and a saturation flow rate of 3000 veh/hr. 30 seconds of effective green are given in a 100-second cycle. Provide analysis of the intersection assuming D/D/1 queueing by describing the maximum number of vehicles in the queue.\n\nHint: Q_{max} = λ r',
    options: [
      { label: 'A', text: '7' },
      { label: 'B', text: '9' },
      { label: 'C', text: '10' },
      { label: 'D', text: '8' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Convert vehicle arrival rate λ = 500 veh/hr = 0.1389 veh/sec. The effective red time is r = C - g = 100 - 30 = 70 seconds. In deterministic queueing, the maximum queue occurs right at the end of the red interval: Q_{max} = λ r = 0.1389 × 70 = 9.72 ≈ 10 vehicles.',
      formulas: [
        '\\lambda = \\frac{500}{3600} = 0.1389',
        'r = C - g = 100 - 30 = 70',
        'Q_{\\max} = \\lambda r = 0.1389 \\times 70 = 9.72 \\approx 10',
      ],
      steps: [
        'Step 1: Convert arrival rate to vehicles per second: λ = 500 / 3600 = 0.1389 veh/s.',
        'Step 2: Effective red time is the portion of the cycle when vehicles queue up: r = 100 s - 30 s = 70 s.',
        'Step 3: Under D/D/1 conditions, maximum queue is accumulated during red time: Q_{max} = λ · r = 0.1389 × 70 = 9.72 vehicles.',
        'Step 4: Rounding to the nearest whole vehicle gives 10 vehicles (Option C).',
      ],
      finalAnswer: '10 (Option C)',
      pageNumber: 341,
    },
  },

  // Item 42
  {
    id: 'mstc-apr2025-q42',
    number: 42,
    pageNumber: 12,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Transportation & Accident Reconstruction - Skid Distance & Initial Velocity',
    text: 'You are shown an accident scene with a vehicle and a light pole. The vehicle was estimated to hit the light pole at 50 km/hr. The skid marks are measured to be 210, 205, 190, and 195 meters. A trial run that is conducted to help measure the coefficient of friction reveals that a car traveling at 60 km/hr can stop in 100 meters under conditions present at the time of the accident. How fast was the vehicle traveling to begin with?\n\nHint: Average the skid marks, d_b = (v_i² - v_e²) / [2g(f cos(θ) - sin(θ))]',
    options: [
      { label: 'A', text: '89 km/h' },
      { label: 'B', text: '87 km/h' },
      { label: 'C', text: '78 km/h' },
      { label: 'D', text: '98 km/h' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'From the test skid run at 60 km/h (16.667 m/s) stopping in 100 m: f = v² / (2g d_b) = (16.667)² / [2(9.81)(100)] = 0.1416. Average accident skid mark d_b = (210 + 205 + 190 + 195) / 4 = 200 m. Final impact velocity v_e = 50 km/h = 13.889 m/s. Solving v_i² = v_e² + 2g f d_b gives v_i = 27.358 m/s = 98.49 km/h ≈ 98 km/h.',
      formulas: [
        'f = \\frac{v_i^2}{2g d_b} = \\frac{(16.667)^2}{2(9.81)(100)} = 0.1416',
        'd_b = \\frac{210 + 205 + 190 + 195}{4} = 200',
        'v_i = \\sqrt{v_e^2 + 2g f d_b} = \\sqrt{(13.889)^2 + 2(9.81)(0.1416)(200)} = 27.358',
        'v_i = 27.358 \\times 3.6 = 98.49 \\approx 98',
      ],
      steps: [
        'Step 1: Determine pavement friction f from trial run: 60 km/h = 60 / 3.6 = 16.667 m/s. f = (16.667)² / [2(9.81)(100)] = 0.1416.',
        'Step 2: Average the four skid marks: d_b = (210 + 205 + 190 + 195) / 4 = 200 meters.',
        'Step 3: Convert impact velocity: v_e = 50 km/h = 50 / 3.6 = 13.889 m/s.',
        'Step 4: Use work-energy principle: v_i² = v_e² + 2g f d_b = 13.889² + 2(9.81)(0.1416)(200) = 192.90 + 555.65 = 748.55 (m/s)²',
        'Step 5: v_i = √748.55 = 27.358 m/s × 3.6 = 98.49 km/h ≈ 98 km/h (Option D).',
      ],
      finalAnswer: '98 km/h (Option D)',
      pageNumber: 341,
    },
  },

  // Item 43
  {
    id: 'mstc-apr2025-q43',
    number: 43,
    pageNumber: 13,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Transportation & Traffic Safety - Critical Crash Rate Analysis',
    text: 'An urban arterial street segment 0.2 mile long has an average annual daily traffic (AADT) of 15,400 veh/day. In a three-year period, there have been eight crashes resulting in death and/or injuries and 15 involving property damage only. The statewide average crash experience for similar types of roadway is 375 per 100 mvm for a three-year period of which 120 involved death and/or injury and 255 caused property damage only. Is the 0.2 mile long street segment hazardous? In identifying hazardous locations, consider that a single death/injury crash is equivalent to three property damage crashes. Use a 95% confidence level.\n\nHint:\nTB = (Years × AADT × segment length × 365 days per year) / 100 million\nAVR = 615 equivalent crashes per 100 mvm per year\nTF = 1.96\nCR = AVR + 0.5/TB + TF √(AVR/TB)',
    options: [
      { label: 'A', text: '0.72' },
      { label: 'B', text: '0.98' },
      { label: 'C', text: '1.62' },
      { label: 'D', text: '1.29' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Traffic base TB = (3 × 15,400 × 0.2 × 365) / 10⁸ = 0.033726 per 100 mvm. Segment weighted crashes = 3(8) + 15 = 39 equivalent crashes, giving an observed rate of 39 / 0.033726 = 1,156.4 crashes/100mvm. Critical Rate CR = 615 + 0.5/0.033726 + 1.96 √(615 / 0.033726) = 615 + 14.83 + 264.7 = 894.5 ≈ 895. Crash Ratio = 1157 / 895 = 1.29. Since Crash Ratio > 1.0, the site is classified as hazardous.',
      formulas: [
        'TB = \\frac{3 \\times 15400 \\times 0.20 \\times 365}{10^8} = 0.033726',
        'E = 3(8) + 15 = 39',
        'R = \\frac{39}{0.033726} = 1156.4',
        'CR = 615 + \\frac{0.5}{0.033726} + 1.96 \\sqrt{\\frac{615}{0.033726}} = 894.54 \\approx 895',
        'R = \\frac{1156.4}{894.5} = 1.29',
      ],
      steps: [
        'Step 1: Compute vehicle exposure in hundred million vehicle miles (100 mvm): TB = (3 × 15,400 × 0.20 × 365) / 100,000,000 = 0.033726.',
        'Step 2: Equivalent segment crash history: 1 death/injury = 3 PDO crashes => 3(8) + 15 = 39 equivalent crashes.',
        'Step 3: Actual crash rate on segment = 39 / 0.033726 = 1,156.4 crashes per 100 mvm.',
        'Step 4: Statewide Critical Rate: CR = 615 + 0.5/0.033726 + 1.96√(615/0.033726) = 615 + 14.83 + 264.71 = 894.5 ≈ 895 crashes/100mvm.',
        'Step 5: Crash Ratio = 1156.4 / 895 = 1.29 (Option D).',
      ],
      finalAnswer: '1.29 (Option D)',
      pageNumber: 342,
    },
  },

  // Item 44
  {
    id: 'mstc-apr2025-q44',
    number: 44,
    pageNumber: 13,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Management - Overall Labor Premium Factor',
    text: 'The total duration of a project was estimated as follows:\n522 working days at 6 days per week and 10 hr a day of work.\n30 days (10 hr per day) for contingencies such as bad weather, which would be worked on weekends and holidays.\nThe labor agreement defines the regular workday as an 8-hr-long weekday. Labor cost for premium time is 50% for hours during the week, and 80% for weekend work. What is most nearly the overall labor premium rate for the project?',
    options: [
      { label: 'A', text: '1.25' },
      { label: 'B', text: '1.28' },
      { label: 'C', text: '1.31' },
      { label: 'D', text: '1.34' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Project duration = 522 / 6 = 87 weeks. Total weekday regular hours = 5 days/wk × 87 wks × 8 hr = 3,480 hrs (factor 1.0). Weekday overtime hours = 5 days/wk × 87 wks × 2 hr = 870 hrs (factor 1.5). Weekend/contingency hours = (87 wks × 10 hr) + (30 days × 10 hr) = 1,170 hrs (factor 1.8). Overall premium factor = [3480(1.0) + 870(1.5) + 1170(1.8)] / [3480 + 870 + 1170] = 6,891 / 5,520 = 1.248 ≈ 1.25.',
      formulas: [
        'W = \\frac{522}{6} = 87',
        'H_{\\text{reg}} = 5 \\times 87 \\times 8 = 3480',
        'H_{\\text{ot}} = 5 \\times 87 \\times 2 = 870',
        'H_{\\text{wknd}} = (87 \\times 10) + (30 \\times 10) = 1170',
        'H_{\\text{tot}} = 3480 + 870 + 1170 = 5520',
        'P = \\frac{3480(1.0) + 870(1.5) + 1170(1.8)}{5520} = \\frac{6891}{5520} = 1.248 \\approx 1.25',
      ],
      steps: [
        'Step 1: Duration in weeks = 522 working days / 6 days/week = 87 weeks.',
        'Step 2: Base weekday hours (8 hr/day, 5 days/wk): 5 × 87 × 8 = 3,480 hours at 1.0x rate.',
        'Step 3: Weekday overtime hours (2 hr/day, 5 days/wk): 5 × 87 × 2 = 870 hours at 1.5x rate.',
        'Step 4: Weekend work (6th day of 87 weeks + 30 contingency days at 10 hr/day): (87 × 10) + (30 × 10) = 1,170 hours at 1.8x rate.',
        'Step 5: Weighted average rate = [3480(1.0) + 870(1.5) + 1170(1.8)] / 5520 = 6,891 / 5,520 = 1.248 ≈ 1.25 (Option A).',
      ],
      finalAnswer: '1.25 (Option A)',
      pageNumber: 342,
    },
  },

  // Item 45
  {
    id: 'mstc-apr2025-q45',
    number: 45,
    pageNumber: 14,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Management - Critical Path Method (CPM) Network',
    text: 'A construction project network consisting of activities B through F is shown, along with their durations in days. The critical path consists of the activities:',
    figureCaption: 'Figure 45: CPM Project Network Diagram with activity durations',
    figureSvg: `<svg viewBox="0 0 460 220" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/>
    </marker>
  </defs>

  <!-- Node A (Start) -->
  <circle cx="60" cy="110" r="18" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <text x="60" y="115" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#0f172a">A</text>
  <text x="40" y="90" font-family="monospace" font-size="10" fill="#475569">start</text>

  <!-- Node B (Duration 4) -->
  <circle cx="150" cy="50" r="18" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <text x="150" y="47" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#0f172a">B</text>
  <text x="150" y="60" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb">4</text>

  <!-- Node C (Duration 6) -->
  <circle cx="150" cy="170" r="18" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <text x="150" y="167" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#0f172a">C</text>
  <text x="150" y="180" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb">6</text>

  <!-- Node D (Duration 5) -->
  <circle cx="240" cy="110" r="18" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <text x="240" y="107" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#0f172a">D</text>
  <text x="240" y="120" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb">5</text>

  <!-- Node E (Duration 2) -->
  <circle cx="330" cy="50" r="18" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <text x="330" y="47" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#0f172a">E</text>
  <text x="330" y="60" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb">2</text>

  <!-- Node F (Duration 3) -->
  <circle cx="330" cy="170" r="18" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <text x="330" y="167" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#0f172a">F</text>
  <text x="330" y="180" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb">3</text>

  <!-- Node G (End) -->
  <circle cx="410" cy="110" r="18" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <text x="410" y="115" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#0f172a">G</text>
  <text x="415" y="90" font-family="monospace" font-size="10" fill="#475569">end</text>

  <!-- Connecting Arrows -->
  <line x1="75" y1="98" x2="135" y2="58" stroke="#1e293b" stroke-width="1.8" marker-end="url(#arrow)"/>
  <line x1="75" y1="122" x2="135" y2="162" stroke="#1e293b" stroke-width="1.8" marker-end="url(#arrow)"/>

  <line x1="168" y1="50" x2="312" y2="50" stroke="#1e293b" stroke-width="1.8" marker-end="url(#arrow)"/>
  <line x1="162" y1="62" x2="225" y2="98" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arrow)"/>

  <line x1="252" y1="122" x2="315" y2="158" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arrow)"/>
  <line x1="168" y1="170" x2="312" y2="170" stroke="#1e293b" stroke-width="1.8" marker-end="url(#arrow)"/>

  <line x1="345" y1="58" x2="395" y2="98" stroke="#1e293b" stroke-width="1.8" marker-end="url(#arrow)"/>
  <line x1="345" y1="162" x2="395" y2="122" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arrow)"/>
</svg>`,
    options: [
      { label: 'A', text: 'A-B-E-G' },
      { label: 'B', text: 'A-B-D-G' },
      { label: 'C', text: 'A-B-D-F-G' },
      { label: 'D', text: 'A-C-F-G' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Calculate the total duration of each path through the CPM network from Start (A) to End (G): Path A-B-E-G = 4 + 2 = 6 days; Path A-B-D-G = 4 + 5 = 9 days; Path A-C-F-G = 6 + 3 = 9 days; Path A-B-D-F-G = 4 + 5 + 3 = 12 days. The critical path is the longest sequence, which is A-B-D-F-G with 12 days.',
      formulas: [
        'T_{A-B-E-G} = 4 + 2 = 6',
        'T_{A-B-D-G} = 4 + 5 = 9',
        'T_{A-C-F-G} = 6 + 3 = 9',
        'T_{A-B-D-F-G} = 4 + 5 + 3 = 12',
      ],
      steps: [
        'Step 1: Identify all available paths connecting node A to node G.',
        'Step 2: Path A-B-E-G duration = 4 + 2 = 6 days.',
        'Step 3: Path A-B-D-G duration = 4 + 5 = 9 days.',
        'Step 4: Path A-C-F-G duration = 6 + 3 = 9 days.',
        'Step 5: Path A-B-D-F-G duration = 4 + 5 + 3 = 12 days.',
        'Step 6: The critical path is the sequence with the longest total duration: A-B-D-F-G (Option C).',
      ],
      finalAnswer: 'A-B-D-F-G (Option C)',
      pageNumber: 343,
    },
  },

  // Item 46
  {
    id: 'mstc-apr2025-q46',
    number: 46,
    pageNumber: 14,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Highway Engineering - Concrete Carriageway & Granular Subbase Shortcomings',
    text: 'Which of the following is/are the shortcomings of using granular sub-base in concrete carriageway?\n\nI. Since sub-base is permeable, water can seep through sub-base and soil particles will be pumped out through contraction/expansion joints when subject to traffic load.\nII. Voids can form underneath the pavement structure and the concrete pavement may crack under severe traffic loading.\nIII. Due to workmanship problem, it may have uneven distribution of sub-base and this results in cracking of concrete carriageway when subject to severe traffic loading.',
    options: [
      { label: 'A', text: 'I and II' },
      { label: 'B', text: 'II and III' },
      { label: 'C', text: 'I and III' },
      { label: 'D', text: 'All of the above' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'All three statements represent well-documented physical and construction shortcomings of unbound granular subbases beneath rigid concrete pavements: pumping of fines through joints due to water infiltration (I), void creation leading to loss of support and fatigue cracking (II), and compaction/workmanship unevenness inducing differential settlement (III).',
      formulas: [],
      steps: [
        'Step 1: Statement I is true: Water entering joints mixes with erodible granular fines; heavy wheel loads generate high pore water pressure that ejects (pumps) fines out through joints.',
        'Step 2: Statement II is true: The removal of fines creates voids under the slab edges and corners, resulting in loss of subbase support and subsequent slab cracking.',
        'Step 3: Statement III is true: Inconsistent grading or compaction during construction yields uneven density and differential settlement under traffic.',
        'Step 4: Therefore, all three statements are genuine shortcomings (Option D).',
      ],
      finalAnswer: 'All of the above (Option D)',
      pageNumber: 343,
    },
  },

  // Item 47
  {
    id: 'mstc-apr2025-q47',
    number: 47,
    pageNumber: 14,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Geotechnical Engineering - Slope Stabilization & Soil Nailing Methods',
    text: 'Which of the following is/are methods to treat minor slips?\n\nI. Adoption of larger diameter size bars at closer spacing;\nII. Installation of tie beams at the same horizontal levels;\nIII. Provision of steel wire meshes in-between soil nails;\nIV. Provision of short soil nails in combination of long soil nails.',
    options: [
      { label: 'A', text: 'I, II, and III' },
      { label: 'B', text: 'II, III, and IV' },
      { label: 'C', text: 'I, III, and IV' },
      { label: 'D', text: 'All of the above' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Method I (larger diameter bars at closer spacing) is specified for heavy stabilization of major, deep-seated slips. For minor, shallow surface slips, appropriate engineering solutions include tie beams to distribute loads across nails (II), steel wire mesh to retain shallow surface raveling (III), and short soil nails hybridizing with long nails to pin the surficial layer (IV).',
      formulas: [],
      steps: [
        'Step 1: Method I is unsuitable for minor slips: heavy reinforcement is designated for deep global slope failure, whereas minor slips require surface control rather than massive tensile capacity.',
        'Step 2: Method II (horizontal tie beams) links adjacent soil nail heads, redistributing localized surface forces across the system.',
        'Step 3: Method III (wire mesh / facing) prevents shallow unravelling and spalling of soil between nail locations.',
        'Step 4: Method IV (combining short nails with long nails) pins shallow instability without wasteful deep embedment for every nail.',
        'Step 5: Thus, methods II, III, and IV are correct (Option B).',
      ],
      finalAnswer: 'II, III, and IV (Option B)',
      pageNumber: 343,
    },
  },

  // Item 48
  {
    id: 'mstc-apr2025-q48',
    number: 48,
    pageNumber: 15,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Geotechnical Engineering - Soil Nail Pull-Out Testing',
    text: 'Which of the following is/are the main reasons for conducting pull-out tests for soil nails?\n\nI. To check and verify the bond strength between soil and grout adopted during the design of soil nails. This is the main objective of conducting soil nail pull-out test.\nII. To determine the bond strength between soil and grout for future design purpose. However, if this target is to be achieved, the test nails should be loaded to determine the ultimate soil/grout bond with an upper limit of 80% of ultimate tensile strength of steel bars.\nIII. To check if there is any slippage or creep occurrence.\nIV. To check the elastic and plastic deformations of test nails. This is observed during the repeated loading and unloading cycles of soil nails.',
    options: [
      { label: 'A', text: 'I, II, and III' },
      { label: 'B', text: 'II, III, and IV' },
      { label: 'C', text: 'I, III, and IV' },
      { label: 'D', text: 'All of the above' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'All statements describe valid technical objectives of sacrificial verification and production pull-out testing on soil nails: verifying assumed design grout-ground bond (I), obtaining ultimate skin friction values up to the 80% yield/UTS bar limit for future calibration (II), monitoring long-term creep and slip under sustained test loads (III), and evaluating elastic and residual plastic deformations across cyclic loading stages (IV).',
      formulas: [],
      steps: [
        'Step 1: Verification tests primarily confirm the designer\'s assumed ultimate soil-grout bond stress under site-specific conditions (Statement I).',
        'Step 2: Ultimate capacity testing intentionally pushes the grout-ground interface to failure while remaining below 80% of steel tensile strength to avoid premature tendon fracture (Statement II).',
        'Step 3: Creep testing observes displacement under constant sustained proof load over time (Statement III).',
        'Step 4: Cyclic loading-unloading curves separate reversible elastic tendon stretch from non-recoverable plastic movement (Statement IV).',
        'Step 5: Hence, all four are valid objectives (Option D).',
      ],
      finalAnswer: 'All of the above (Option D)',
      pageNumber: 344,
    },
  },

  // Item 49
  {
    id: 'mstc-apr2025-q49',
    number: 49,
    pageNumber: 15,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Materials - Timber Moisture Mechanics',
    text: 'Which of the following refers to the property of wood that it expands when it absorbs moisture and shrinks when it dries or loses moisture?',
    options: [
      { label: 'A', text: 'Susceptibility' },
      { label: 'B', text: 'Moisture content' },
      { label: 'C', text: 'Seasoning' },
      { label: 'D', text: 'Hygroscopic' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Hygroscopicity is the intrinsic physical property of timber to exchange moisture with the ambient atmosphere, swelling as moisture is adsorbed below the fiber saturation point and shrinking as bound water is desorbed during drying.',
      formulas: [],
      steps: [
        'Step 1: Susceptibility describes vulnerability to biological decay or pest infestation.',
        'Step 2: Moisture content is the quantitative ratio of water weight to oven-dry wood weight.',
        'Step 3: Seasoning is the controlled industrial process of drying lumber.',
        'Step 4: Hygroscopic refers specifically to the reversible dimensional property of expanding with moisture gain and shrinking with moisture loss (Option D).',
      ],
      finalAnswer: 'Hygroscopic (Option D)',
      pageNumber: 344,
    },
  },

  // Item 50
  {
    id: 'mstc-apr2025-q50',
    number: 50,
    pageNumber: 15,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Materials - Physical & Electrical Properties of Glass',
    text: 'Which of the following is NOT TRUE about glass?\n\nA. When light falls on a piece of glass, some of that light is reflected and some is absorbed.\nB. It is nonporous and nonabsorptive, and thus is impervious to many common elements that affect other materials.\nC. Offers low resistance to the passage of electricity.\nD. Glass is fatigue resistant, this means that if pressure is applied to glass, causing it to bend or stretch, the glass will return exactly to its original shape when the bending or stretching force is removed.',
    options: [
      { label: 'A', text: 'When light falls on a piece of glass, some of that light is reflected and some is absorbed.' },
      { label: 'B', text: 'It is nonporous and nonabsorptive, and thus is impervious to many common elements that affect other materials.' },
      { label: 'C', text: 'Offers low resistance to the passage of electricity.' },
      { label: 'D', text: 'Glass is fatigue resistant, this means that if pressure is applied to glass, causing it to bend or stretch, the glass will return exactly to its original shape when the bending or stretching force is removed.' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Glass is an excellent electrical insulator with an extremely high electrical resistivity (typically 10¹¹ to 10¹⁵ Ω·m at room temperature). Therefore, the claim that glass "offers low resistance to the passage of electricity" is completely false.',
      formulas: [],
      steps: [
        'Step 1: Statement A is true: Optical transmission, reflection, and absorption govern glass behavior.',
        'Step 2: Statement B is true: Amorphous silicate glass is completely non-porous and chemically inert against water and many acids.',
        'Step 3: Statement C is false: Glass exhibits extraordinarily high electrical resistance and is universally used as high-voltage dielectric insulation, not a low-resistance conductor.',
        'Step 4: Statement D is true: Glass exhibits virtually ideal linear elastic behavior up to brittle fracture with no dislocation-driven mechanical fatigue plasticity.',
        'Step 5: The incorrect statement is C (Option C).',
      ],
      finalAnswer: 'Offers low resistance to the passage of electricity. (Option C)',
      pageNumber: 344,
    },
  },

  // Item 51
  {
    id: 'mstc-apr2025-q51',
    number: 51,
    pageNumber: 15,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Surveying - Measurement & Observation Classifications',
    text: 'An observation that is secured when it is not possible to apply a measuring instrument directly to the quantity to be observed.',
    options: [
      { label: 'A', text: 'Direct observation' },
      { label: 'B', text: 'Indirect observation' },
      { label: 'C', text: 'Random observation' },
      { label: 'D', text: 'Systematic observation' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'In surveying measurement theory, an indirect observation is one where the unknown quantity cannot be measured directly with an instrument, but is calculated through mathematical relationships with directly observed related quantities (such as determining an inaccessible horizontal distance from measured angles and baseline).',
      formulas: [],
      steps: [
        'Step 1: Direct observation involves direct physical application of an instrument (e.g. measuring distance with a steel tape or angle with a total station).',
        'Step 2: Indirect observation occurs when the target quantity is obtained indirectly via mathematical relationships with other observed parameters.',
        'Step 3: Random and systematic observations describe categories of error behavior, not measurement accessibility.',
        'Step 4: The required term is Indirect observation (Option B).',
      ],
      finalAnswer: 'Indirect observation (Option B)',
      pageNumber: 344,
    },
  },

  // Item 52
  {
    id: 'mstc-apr2025-q52',
    number: 52,
    pageNumber: 16,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Materials - Concrete Testing Methods Matching',
    text: 'Column I gives a list of test methods for evaluating properties of concrete and Column II gives the list of properties.\n\n| Column I (Test Method) | Column II (Property) |\n|---|---|\n| P. Resonant frequency | 1. Tensile strength test |\n| Q. Rebound hammer test | 2. Dynamic modulus of elasticity |\n| R. Split cylinder test | 3. Workability |\n| S. Compacting factor test | 4. Compressive strength |\n\nThe correct match of the test with the property is:',
    options: [
      { label: 'A', text: 'P-2, Q-4, R-1, S-3' },
      { label: 'B', text: 'P-2, Q-1, R-4, S-3' },
      { label: 'C', text: 'P-2, Q-4, R-3, S-1' },
      { label: 'D', text: 'P-4, Q-3, R-1, S-2' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Matching test methods to evaluated properties:\nP. Resonant frequency -> 2. Dynamic modulus of elasticity\nQ. Rebound hammer test -> 4. Compressive strength\nR. Split cylinder test -> 1. Tensile strength test\nS. Compacting factor test -> 3. Workability\nHence, P-2, Q-4, R-1, S-3.',
      formulas: [],
      steps: [
        'Step 1: Resonant frequency testing vibrates a concrete prism to determine its fundamental frequency, from which the dynamic modulus of elasticity (E_d) is computed (P -> 2).',
        'Step 2: Rebound (Schmidt) hammer evaluates surface hardness, which is correlated through empirical calibration curves to compressive strength (Q -> 4).',
        'Step 3: The Brazilian split-cylinder test applies diametral compressive line loads to induce uniform lateral tensile failure, measuring splitting tensile strength (R -> 1).',
        'Step 4: Compacting factor test measures the degree of compaction achieved by a standard amount of work, quantifying workability for low-slump mixes (S -> 3).',
        'Step 5: The correct match is P-2, Q-4, R-1, S-3 (Option A).',
      ],
      finalAnswer: 'P-2, Q-4, R-1, S-3 (Option A)',
      pageNumber: 345,
    },
  },

  // Item 53
  {
    id: 'mstc-apr2025-q53',
    number: 53,
    pageNumber: 16,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Materials - Water-Cement Ratio Definition',
    text: 'Water-cement ratio is the measure of water and cement used per cubic meter of concrete.',
    options: [
      { label: 'A', text: 'volume by volume' },
      { label: 'B', text: 'weight by weight' },
      { label: 'C', text: 'weight by volume' },
      { label: 'D', text: 'volume by weight' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'In standard concrete mix design (ACI / ASTM), the water-cement ratio (w/c) is defined strictly as the ratio of the weight (or mass) of mixing water to the weight (or mass) of cementitious material: weight by weight.',
      formulas: [
        '\\frac{w}{c} = \\frac{W_w}{W_c}'
      ],
      steps: [
        'Step 1: Cement and water have widely differing densities, and bulk cement volume varies drastically with compaction and aeration.',
        'Step 2: Consequently, volumetric ratios would introduce substantial batching errors.',
        'Step 3: Standard specifications specify w/c strictly as mass of water divided by mass of cement (weight by weight).',
        'Step 4: Therefore, the ratio is weight by weight (Option B).',
      ],
      finalAnswer: 'weight by weight (Option B)',
      pageNumber: 345,
    },
  },
];

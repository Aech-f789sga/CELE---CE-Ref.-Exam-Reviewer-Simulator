import { Question } from '../../../types/exam';

export const MSTC_APR2025_PART5: Question[] = [
  // Item 54
  {
    id: 'mstc-apr2025-q54',
    number: 54,
    pageNumber: 16,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Management & Contracts - Bid Bond Validity',
    text: 'Which of the following statements is valid for a bid bond?\n\nA. It pays for costs incurred by the bidder if the bid deadline is missed.\nB. It represents the costs that the owner incurs if the bidder fails to enter into a contract.\nC. It represents the costs incurred by subcontractors if a project is underbid.\nD. It pays for office overhead costs related to a bid.',
    options: [
      { label: 'A', text: 'It pays for costs incurred by the bidder if the bid deadline is missed.' },
      { label: 'B', text: 'It represents the costs that the owner incurs if the bidder fails to enter into a contract.' },
      { label: 'C', text: 'It represents the costs incurred by subcontractors if a project is underbid.' },
      { label: 'D', text: 'It pays for office overhead costs related to a bid.' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'A bid bond is a surety instrument that guarantees the owner that the winning bidder will execute the contract at their tendered price and provide required performance/payment bonds. If the contractor defaults or refuses to sign, the surety compensates the owner for the cost difference to award to the next lowest bidder, up to the bond penal sum.',
      formulas: [],
      steps: [
        'Step 1: The purpose of a bid bond is to protect the project owner from default by the lowest responsive bidder.',
        'Step 2: If the winning bidder fails to execute the contract, the bid bond covers the difference between the low bid and the next lowest bid, plus administrative costs.',
        'Step 3: Therefore, it represents the costs that the owner incurs if the bidder fails to enter into a contract (Option B).',
      ],
      finalAnswer: 'It represents the costs that the owner incurs if the bidder fails to enter into a contract. (Option B)',
      pageNumber: 345,
    },
  },

  // Item 55
  {
    id: 'mstc-apr2025-q55',
    number: 55,
    pageNumber: 16,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Management - Supply Chain & Logistics',
    text: 'The process of planning, implementing, and controlling the efficient and effective flow and storage of goods, services, and related information from origination to consumption as required by the customer.',
    options: [
      { label: 'A', text: 'Shipping' },
      { label: 'B', text: 'Transportation' },
      { label: 'C', text: 'Freight' },
      { label: 'D', text: 'Logistics' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'According to the Council of Supply Chain Management Professionals (CSCMP), Logistics is defined as the part of supply chain management that plans, implements, and controls the efficient, effective forward and reverse flow and storage of goods, services, and related information between the point of origin and the point of consumption in order to meet customers\' requirements.',
      formulas: [],
      steps: [
        'Step 1: Shipping and freight describe the physical carriage or consignment of cargo.',
        'Step 2: Transportation refers specifically to the vehicular movement mechanism (road, rail, water, air).',
        'Step 3: Logistics is the overarching management process encompassing procurement, flow, storage, inventory, and distribution.',
        'Step 4: The correct term is Logistics (Option D).',
      ],
      finalAnswer: 'Logistics (Option D)',
      pageNumber: 345,
    },
  },

  // Item 56
  {
    id: 'mstc-apr2025-q56',
    number: 56,
    pageNumber: 16,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Highway Engineering - Flexible Pavement Stratigraphy',
    text: 'Which of the following are the correct layers of a flexible pavement constructed above the subgrade?',
    figureCaption: 'Figure 56: Structural layer hierarchy of a flexible asphalt pavement',
    figureSvg: `<svg viewBox="0 0 460 260" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  
  <!-- Surface Course (Asphalt) -->
  <rect x="80" y="35" width="300" height="40" fill="#334155" stroke="#0f172a" stroke-width="2"/>
  <text x="230" y="60" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#ffffff">Surface Course (Asphalt Concrete)</text>

  <!-- Base Course -->
  <rect x="80" y="75" width="300" height="50" fill="#94a3b8" stroke="#0f172a" stroke-width="2"/>
  <text x="230" y="105" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#0f172a">Base Course (Crushed Aggregate)</text>

  <!-- Subbase Course -->
  <rect x="80" y="125" width="300" height="55" fill="#cbd5e1" stroke="#0f172a" stroke-width="2"/>
  <text x="230" y="157" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#0f172a">Subbase Course (Granular Material)</text>

  <!-- Prepared Subgrade (Native Soil) -->
  <rect x="80" y="180" width="300" height="50" fill="#f1f5f9" stroke="#0f172a" stroke-width="2"/>
  <text x="230" y="210" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#475569">Prepared Subgrade (Native Soil)</text>

  <!-- Left Arrow Sequence -->
  <path d="M 50,205 L 50,55" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="40" y="130" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb" transform="rotate(-90 40 130)">From Subgrade Up</text>
</svg>`,
    options: [
      { label: 'A', text: 'Subbase Course, Base Course, Surface Course' },
      { label: 'B', text: 'Base Course, Surface Course, Binder Course' },
      { label: 'C', text: 'Base Course, Wearing Course, Seal Coat' },
      { label: 'D', text: 'Subbase Course, Bituminous Layer, Wearing Course' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'In conventional flexible pavement engineering, structural layers placed above the prepared natural subgrade follow an ascending quality and strength sequence from bottom to top: Subbase Course directly over the subgrade, followed by Base Course, and topped by the Surface Course (wearing and binder asphalt layers).',
      formulas: [],
      steps: [
        'Step 1: Subbase Course: Lowest structural layer directly overlying the compacted subgrade, providing frost protection and drainage using cost-effective granular aggregates.',
        'Step 2: Base Course: Middle high-strength layer of densely graded crushed stone or stabilized material designed to distribute concentrated axle wheel loads.',
        'Step 3: Surface Course: Uppermost bituminous layer providing smooth, skid-resistant driving qualities and preventing water ingress.',
        'Step 4: The sequence from subgrade upwards is Subbase Course, Base Course, Surface Course (Option A).',
      ],
      finalAnswer: 'Subbase Course, Base Course, Surface Course (Option A)',
      pageNumber: 345,
    },
  },

  // Item 57
  {
    id: 'mstc-apr2025-q57',
    number: 57,
    pageNumber: 17,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Safety - Demolition Safety Exclusion Zones',
    text: 'The demolition area where work is done by mechanical devices such as weight balls or power shovels shall be barricaded for a minimum distance of _____ times the height of the structure.',
    options: [
      { label: 'A', text: '1/4' },
      { label: 'B', text: '1 1/2' },
      { label: 'C', text: '1/2' },
      { label: 'D', text: '1' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Under OSHA 29 CFR 1926.859 (Mechanical Demolition) and standard civil construction safety codes, any demolition area where mechanical equipment such as wrecking balls, clamshells, or high-reach excavators are operated must be secured and barricaded to a minimum radius of 1.5 times the height of the structure being demolished to protect against uncontrolled debris trajectory and collapse.',
      formulas: [
        'R \\ge 1.5 H'
      ],
      steps: [
        'Step 1: Standard safety regulations for mechanical demolition require an exclusion buffer zone around the falling perimeter.',
        'Step 2: To account for structural rebound, swinging equipment reach, and flying fragments, the exclusion perimeter must extend at least 1.5 times the structure height (e.g., a 20 m building requires a 30 m exclusion radius).',
        'Step 3: The minimum required distance is 1 1/2 times the height (Option B).',
      ],
      finalAnswer: '1 1/2 (Option B)',
      pageNumber: 346,
    },
  },

  // Item 58
  {
    id: 'mstc-apr2025-q58',
    number: 58,
    pageNumber: 17,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Safety - OSHA Scaffolding Clearance Tolerances',
    text: 'Each platform unit (e.g., scaffold plank, fabricated plank, fabricated deck, or fabricated platform) shall be installed so that the space between adjacent units and the space between the platform and the uprights is no more than _____ inch.',
    figureCaption: 'Figure 58: OSHA Scaffold Platform Unit Clearance Limits (≤ 1 inch)',
    figureSvg: `<svg viewBox="0 0 460 220" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  
  <!-- Left Upright Post -->
  <rect x="40" y="30" width="18" height="150" fill="#475569" stroke="#0f172a" stroke-width="2"/>
  <text x="49" y="195" text-anchor="middle" font-family="monospace" font-size="10" fill="#475569">Upright</text>

  <!-- Gap between Upright and Platform Plank 1 (<= 1 inch) -->
  <line x1="58" y1="80" x2="80" y2="80" stroke="#dc2626" stroke-width="2"/>
  <text x="69" y="72" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#dc2626">≤ 1"</text>

  <!-- Platform Plank 1 -->
  <rect x="80" y="55" width="140" height="90" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
  <text x="150" y="105" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#1e293b">Scaffold Plank 1</text>

  <!-- Gap between adjacent units (<= 1 inch) -->
  <line x1="220" y1="80" x2="242" y2="80" stroke="#dc2626" stroke-width="2"/>
  <text x="231" y="72" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#dc2626">≤ 1"</text>

  <!-- Platform Plank 2 -->
  <rect x="242" y="55" width="140" height="90" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="2"/>
  <text x="312" y="105" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#1e293b">Scaffold Plank 2</text>

  <!-- Right Upright Post -->
  <rect x="404" y="30" width="18" height="150" fill="#475569" stroke="#0f172a" stroke-width="2"/>
  <text x="413" y="195" text-anchor="middle" font-family="monospace" font-size="10" fill="#475569">Upright</text>

  <!-- Dimension Indicator -->
  <text x="230" y="30" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#2563eb">OSHA 1926.451 Standard: Gap ≤ 1 inch</text>
</svg>`,
    options: [
      { label: 'A', text: '1 foot' },
      { label: 'B', text: '3 feet' },
      { label: 'C', text: '3 inches' },
      { label: 'D', text: '1 inch' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Per OSHA 29 CFR 1926.451(b)(1)(i), each platform unit on working scaffold decks shall be installed so that the space between adjacent units and the space between the platform and the uprights is no more than 1 inch (2.5 cm) wide, unless the employer can demonstrate that a wider space is necessary.',
      formulas: [],
      steps: [
        'Step 1: Scaffolding safety regulations mandate maximum plank spacing to prevent dropped tools, material slippage, and worker foot-entrapment or tripping hazards.',
        'Step 2: Under OSHA rules, the maximum permissible gap between adjacent platform boards or between planks and upright posts is strictly 1 inch.',
        'Step 3: The correct answer is 1 inch (Option D).',
      ],
      finalAnswer: '1 inch (Option D)',
      pageNumber: 346,
    },
  },

  // Item 59
  {
    id: 'mstc-apr2025-q59',
    number: 59,
    pageNumber: 17,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Highway Engineering - Geometric Highway Design Criteria',
    text: 'The _____ is defined as a selected rate of travel used to determine the various geometric features of the roadway.',
    options: [
      { label: 'A', text: 'Average speed' },
      { label: 'B', text: 'Design speed' },
      { label: 'C', text: 'Running speed' },
      { label: 'D', text: 'Maximum speed' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'According to AASHTO Policy on Geometric Design of Highways and Streets (the Green Book), Design Speed is explicitly defined as a selected speed used to determine the various geometric design features of the roadway, including horizontal curvature, superelevation, sight distance, and gradient.',
      formulas: [],
      steps: [
        'Step 1: Design speed is the foundational design control chosen by the transportation engineer to correlate the physical roadway dimensions (radius, sight distance, lane width, grade) with safe vehicular dynamics.',
        'Step 2: Average speed and running speed are operational traffic metrics observed during travel.',
        'Step 3: Maximum speed is a statutory regulatory limit.',
        'Step 4: The correct terminology is Design speed (Option B).',
      ],
      finalAnswer: 'Design speed (Option B)',
      pageNumber: 346,
    },
  },

  // Item 60
  {
    id: 'mstc-apr2025-q60',
    number: 60,
    pageNumber: 17,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Project Management - Comprehensive Project Success Criteria',
    text: 'Successful project management can then be defined as achieving a continuous stream of project objectives:\n\nI. within time\nII. within cost\nIII. at the desired performance/technology level\nIV. utilizing the assigned resources effectively and efficiently\nV. having the results accepted by the customer and/or stakeholder',
    options: [
      { label: 'A', text: 'I, II, III, and IV' },
      { label: 'B', text: 'I, II, III, and V' },
      { label: 'C', text: 'I, II, IV, and V' },
      { label: 'D', text: 'All of the above' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'In modern project management theory (Kerzner, PMBOK), project success encompasses not only the classic triple constraint (time, cost, scope/performance quality), but also internal resource productivity efficiency and ultimate client/stakeholder acceptance. All five criteria are essential.',
      formulas: [],
      steps: [
        'Step 1: Meeting project milestones and finishing within scheduled time (Criterion I).',
        'Step 2: Completing all deliverables within approved budgetary limits (Criterion II).',
        'Step 3: Fulfilling defined quality and technical performance specifications (Criterion III).',
        'Step 4: Maximizing efficiency of labor, equipment, and capital resources (Criterion IV).',
        'Step 5: Gaining client and stakeholder acceptance and customer satisfaction (Criterion V).',
        'Step 6: Therefore, all five elements constitute successful project management (Option D).',
      ],
      finalAnswer: 'All of the above (Option D)',
      pageNumber: 346,
    },
  },

  // Item 61
  {
    id: 'mstc-apr2025-q61',
    number: 61,
    pageNumber: 17,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Project Management - Risk Management Process Stages',
    text: 'Risk management is the act or practice of dealing with risk. It includes:',
    options: [
      { label: 'A', text: 'Risk planning, risk identification, risk analysis, risk response, risk monitoring and controlling' },
      { label: 'B', text: 'Risk planning, risk analysis, risk identification, risk response, risk monitoring and controlling' },
      { label: 'C', text: 'Risk planning, risk identification, risk response, risk analysis, risk monitoring and controlling' },
      { label: 'D', text: 'Risk planning, risk analysis, risk response, risk identification, risk monitoring and controlling' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The standard sequential lifecycle of project risk management consists of five structured stages in order: (1) Risk planning, (2) Risk identification, (3) Risk analysis (qualitative/quantitative), (4) Risk response planning, and (5) Risk monitoring and controlling.',
      formulas: [],
      steps: [
        'Step 1: Risk planning: Establishing procedural frameworks and responsibilities.',
        'Step 2: Risk identification: Uncovering and listing potential threats and opportunities.',
        'Step 3: Risk analysis: Evaluating probability of occurrence and potential impact.',
        'Step 4: Risk response: Developing mitigation, avoidance, transference, or acceptance strategies.',
        'Step 5: Risk monitoring and controlling: Tracking identified risks and auditing response effectiveness.',
        'Step 6: The proper order is stated in Option A.',
      ],
      finalAnswer: 'Risk planning, risk identification, risk analysis, risk response, risk monitoring and controlling (Option A)',
      pageNumber: 346,
    },
  },

  // Item 62
  {
    id: 'mstc-apr2025-q62',
    number: 62,
    pageNumber: 18,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Equipment - Mobile Elevating Work Platforms (MEWPs)',
    text: 'The 3 basic types of Mobile Elevating Work Platforms (MEWPs) are:',
    figureCaption: 'Figure 62: Basic categories of MEWPs (Scissor lift, Articulating boom, Telescopic boom)',
    figureSvg: `<svg viewBox="0 0 460 220" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  
  <!-- Scissor Lift (Type a) -->
  <g transform="translate(40, 40)">
    <rect x="10" y="120" width="60" height="15" fill="#334155" rx="3"/>
    <circle cx="20" cy="138" r="7" fill="#0f172a"/>
    <circle cx="60" cy="138" r="7" fill="#0f172a"/>
    <!-- Scissor lattice -->
    <line x1="15" y1="120" x2="65" y2="70" stroke="#ea580c" stroke-width="3"/>
    <line x1="65" y1="120" x2="15" y2="70" stroke="#ea580c" stroke-width="3"/>
    <line x1="15" y1="70" x2="65" y2="20" stroke="#ea580c" stroke-width="3"/>
    <line x1="65" y1="70" x2="15" y2="20" stroke="#ea580c" stroke-width="3"/>
    <rect x="10" y="5" width="60" height="15" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
    <text x="40" y="160" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#334155">(a) Scissor Lift</text>
  </g>

  <!-- Articulating Boom Lift (Type b) -->
  <g transform="translate(180, 40)">
    <rect x="10" y="120" width="60" height="15" fill="#334155" rx="3"/>
    <circle cx="20" cy="138" r="7" fill="#0f172a"/>
    <circle cx="60" cy="138" r="7" fill="#0f172a"/>
    <!-- Jointed knuckle arms -->
    <line x1="25" y1="120" x2="55" y2="60" stroke="#2563eb" stroke-width="3.5"/>
    <circle cx="55" cy="60" r="4" fill="#1e293b"/>
    <line x1="55" y1="60" x2="25" y2="20" stroke="#2563eb" stroke-width="3.5"/>
    <circle cx="25" cy="20" r="4" fill="#1e293b"/>
    <line x1="25" y1="20" x2="60" y2="10" stroke="#2563eb" stroke-width="2.5"/>
    <rect x="60" y="0" width="22" height="18" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/>
    <text x="40" y="160" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#334155">(b) Articulating Boom</text>
  </g>

  <!-- Telescopic Boom Lift (Type c) -->
  <g transform="translate(320, 40)">
    <rect x="10" y="120" width="60" height="15" fill="#334155" rx="3"/>
    <circle cx="20" cy="138" r="7" fill="#0f172a"/>
    <circle cx="60" cy="138" r="7" fill="#0f172a"/>
    <!-- Straight extending boom -->
    <line x1="25" y1="120" x2="80" y2="15" stroke="#16a34a" stroke-width="4.5"/>
    <line x1="55" y1="65" x2="95" y2="10" stroke="#86efac" stroke-width="2.5"/>
    <rect x="85" y="0" width="22" height="18" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/>
    <text x="45" y="160" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#334155">(c) Telescopic Boom</text>
  </g>
</svg>`,
    options: [
      { label: 'A', text: 'Scissor lift, articulating boom lift, telescopic boom lift' },
      { label: 'B', text: 'Derrick, mast climber, cherry picker' },
      { label: 'C', text: 'Vertical mast lift, boom truck, crane platform' },
      { label: 'D', text: 'Telescopic handler, derrick, forklift' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'According to OSHA, ANSI/SAIA A92 standards, and ISO 16368, the three fundamental primary classifications of Mobile Elevating Work Platforms (MEWPs) are Scissor lifts (vertical elevation), Articulating boom lifts (multiple hinged knuckle sections to reach over obstacles), and Telescopic boom lifts (straight line extending reach).',
      formulas: [],
      steps: [
        'Step 1: Scissor lift: Provides vertical elevation through crisscrossing mechanical pantograph supports.',
        'Step 2: Articulating boom lift: Features multiple hinged joints enabling up-and-over access around structural obstacles.',
        'Step 3: Telescopic boom lift: Extends straight outward and upward, providing maximum horizontal reach and elevation.',
        'Step 4: These three constitute the core MEWP family (Option A).',
      ],
      finalAnswer: 'Scissor lift, articulating boom lift, telescopic boom lift (Option A)',
      pageNumber: 347,
    },
  },

  // Item 63
  {
    id: 'mstc-apr2025-q63',
    number: 63,
    pageNumber: 18,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Project Scheduling - Lead and Lag Time Principles',
    text: 'All of the following are true regarding lead and lag time except which one?\n\nA. Leads and lags are used when there are delays between dependent and independent activities in the project schedule\nB. Leads require time to be subtracted from the start date or the finish date of the dependent activity\nC. Lags delay successor activities and require time to be added to the start date or the finish date of the dependent activity\nD. Lead time is used more often than lag time',
    options: [
      { label: 'A', text: 'Leads and lags are used when there are delays between dependent and independent activities in the project schedule' },
      { label: 'B', text: 'Leads require time to be subtracted from the start date or the finish date of the dependent activity' },
      { label: 'C', text: 'Lags delay successor activities and require time to be added to the start date or the finish date of the dependent activity' },
      { label: 'D', text: 'Lead time is used more often than lag time' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'In project scheduling, lag time (waiting periods, such as concrete curing or paint drying) is encountered far more frequently in practical construction schedules than lead time (acceleration / fast-tracking). Therefore, statement D ("Lead time is used more often than lag time") is false.',
      formulas: [],
      steps: [
        'Step 1: Statement A is true: Leads and lags modify the logical dependency relationships between project schedule activities.',
        'Step 2: Statement B is true: A lead represents an acceleration where successor start date is moved forward (subtracted time).',
        'Step 3: Statement C is true: A lag is a mandatory waiting delay where successor start date is pushed back (added time).',
        'Step 4: Statement D is false: In real construction practice, mandatory physical delays (e.g., concrete curing, inspection clearances) make lag time vastly more common than lead time.',
        'Step 5: The exception is Option D.',
      ],
      finalAnswer: 'Lead time is used more often than lag time (Option D)',
      pageNumber: 347,
    },
  },

  // Item 64
  {
    id: 'mstc-apr2025-q64',
    number: 64,
    pageNumber: 18,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Foundation Engineering - Perimeter-Inward Pile Driving Sequence',
    text: 'Which of the following is/are true for piles driven from outside perimeter inwards?\n\nI. Little soil lateral movements.\nII. Well-compacted center with an excess pore water pressure built up to resist the loading of piles.\nIII. Shorter pile lengths than the original designed ones may result.\nIV. Excess pore water pressure is dissipated, and the shorter driven piles may not be able to take up the original design loads.',
    options: [
      { label: 'A', text: 'I, II, and III' },
      { label: 'B', text: 'II, III, and IV' },
      { label: 'C', text: 'I, III, IV' },
      { label: 'D', text: 'All of the above' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'When displacement piles are driven from the outside boundary toward the center of a pile group, the outer ring confines the interior ground, resulting in minimal outward lateral displacement (I). The trapped interior soil builds up heavy compaction and high excess pore water pressure that increases driving resistance (II), causing interior piles to reach premature refusal at shorter driven lengths (III). Once the temporary excess pore pressures dissipate, the shorter interior piles may fail to achieve the required long-term geotechnical bearing capacity (IV).',
      formulas: [],
      steps: [
        'Step 1: Perimeter piles installed first act as a retaining barrier, preventing lateral soil displacement (Statement I).',
        'Step 2: Driving inward progressively densifies the inner soil mass and generates severe excess pore pressures (Statement II).',
        'Step 3: High dynamic resistance causes interior piles to encounter early refusal, resulting in shorter pile lengths than designed (Statement III).',
        'Step 4: Over time, excess pore water pressures dissipate, leaving shorter piles with deficient long-term capacity (Statement IV).',
        'Step 5: All four statements are correct (Option D).',
      ],
      finalAnswer: 'All of the above (Option D)',
      pageNumber: 347,
    },
  },

  // Item 65
  {
    id: 'mstc-apr2025-q65',
    number: 65,
    pageNumber: 18,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Construction Safety - OSHA Trench Egress Ladder Requirements',
    text: 'An excavation trench is 5 ft deep, 6 ft wide, and 95 ft long. According to OSHA standards, how many ladders are required to provide egress from the trench?',
    figureCaption: 'Figure 65: OSHA Trench Egress Ladder Spacing (25 ft maximum lateral travel)',
    figureSvg: `<svg viewBox="0 0 460 220" class="w-full max-w-md mx-auto my-2" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="230" y="30" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#0f172a">Plan View: 95 ft Excavation Trench</text>

  <!-- Trench boundary -->
  <rect x="50" y="60" width="360" height="70" fill="#334155" stroke="#0f172a" stroke-width="2" rx="3"/>
  <rect x="55" y="65" width="350" height="60" fill="#1e293b"/>

  <!-- Ladder 1 at 25 ft -->
  <g transform="translate(145, 55)">
    <rect x="-8" y="0" width="16" height="80" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="-8" y1="15" x2="8" y2="15" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="-8" y1="30" x2="8" y2="30" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="-8" y1="45" x2="8" y2="45" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="-8" y1="60" x2="8" y2="60" stroke="#dc2626" stroke-width="1.5"/>
    <text x="0" y="-8" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#dc2626">Ladder #1 (25 ft)</text>
  </g>

  <!-- Ladder 2 at 70 ft -->
  <g transform="translate(315, 55)">
    <rect x="-8" y="0" width="16" height="80" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="-8" y1="15" x2="8" y2="15" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="-8" y1="30" x2="8" y2="30" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="-8" y1="45" x2="8" y2="45" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="-8" y1="60" x2="8" y2="60" stroke="#dc2626" stroke-width="1.5"/>
    <text x="0" y="-8" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#dc2626">Ladder #2 (70 ft)</text>
  </g>

  <!-- Spacing dimensions -->
  <!-- 0 to 25 ft -->
  <line x1="50" y1="145" x2="145" y2="145" stroke="#2563eb" stroke-width="1.5"/>
  <text x="97" y="158" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb">25 ft</text>

  <!-- 25 to 70 ft (45 ft spacing) -->
  <line x1="145" y1="145" x2="315" y2="145" stroke="#2563eb" stroke-width="1.5"/>
  <text x="230" y="158" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb">45 ft (Max 25 ft travel)</text>

  <!-- 70 to 95 ft (25 ft) -->
  <line x1="315" y1="145" x2="410" y2="145" stroke="#2563eb" stroke-width="1.5"/>
  <text x="362" y="158" text-anchor="middle" font-family="monospace" font-size="10" fill="#2563eb">25 ft</text>

  <!-- Total 95 ft Dimension -->
  <line x1="50" y1="185" x2="410" y2="185" stroke="#475569" stroke-width="1.5"/>
  <line x1="50" y1="180" x2="50" y2="190" stroke="#475569" stroke-width="1.5"/>
  <line x1="410" y1="180" x2="410" y2="190" stroke="#475569" stroke-width="1.5"/>
  <text x="230" y="200" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#475569">Total Length = 95 ft (Depth = 5 ft)</text>
</svg>`,
    options: [
      { label: 'A', text: '4' },
      { label: 'B', text: '3' },
      { label: 'C', text: '2' },
      { label: 'D', text: '1' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'OSHA standard 29 CFR 1926.651(c)(2) requires a stairway, ladder, ramp, or other safe means of egress in trench excavations 4 feet or deeper, located so as to require no more than 25 feet of lateral travel for employees. Each ladder covers 25 ft in each direction (50 ft zone of coverage). For a 95-ft trench: 95 ft / 50 ft = 1.9 => round up to 2 ladders (placed at the 25-ft and 70-ft points).',
      formulas: [
        'd_{\\max} = 25',
        'L_{\\text{cov}} = 2 \\times 25 = 50',
        'N = \\frac{95}{50} = 1.9 \\implies 2',
      ],
      steps: [
        'Step 1: Check depth threshold: Since the trench is 5 ft deep (> 4 ft), OSHA requires safe egress.',
        'Step 2: Rule requirement: Workers must not have to travel more than 25 feet laterally in any direction to reach a ladder.',
        'Step 3: A single ladder placed along the trench covers 25 feet to its left and 25 feet to its right, giving an effective coverage length of 50 feet.',
        'Step 4: For a 95-foot trench: 95 / 50 = 1.9, which rounds up to 2 ladders.',
        'Step 5: Locating ladders at 25 ft and 70 ft from one end ensures all workers along the 95 ft trench are within 25 ft of an egress point (Option C).',
      ],
      finalAnswer: '2 (Option C)',
      pageNumber: 347,
    },
  },

  // Item 66
  {
    id: 'mstc-apr2025-q66',
    number: 66,
    pageNumber: 19,
    subject: 'MSTC',
    year: 2025,
    month: 'April',
    category: 'Geotechnical Engineering & Concrete - Bulking of Sand',
    text: 'Bulking is',
    options: [
      { label: 'A', text: 'increase in volume of sand due to moisture which keeps sand particles apart.' },
      { label: 'B', text: 'increase in density of sand due to impurities like clay, organic matter.' },
      { label: 'C', text: 'ramming of sand so that it occupies minimum volume.' },
      { label: 'D', text: 'compacting of sand.' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Bulking of sand is the phenomenon of volume expansion that occurs when dry fine aggregate absorbs moisture (typically 4% to 8% water content). Surface tension creates a thin water film around each sand grain that exerts meniscal repulsive pressure, pushing adjacent particles apart and increasing the bulk volume.',
      formulas: [
        'B = \\frac{V - V_{\\text{dry}}}{V_{\\text{dry}}} \\times 100',
      ],
      steps: [
        'Step 1: When small amounts of water are mixed with fine aggregate, moisture films form around sand particles.',
        'Step 2: Surface tension in these water films prevents particles from coming into direct grain-to-grain contact, pushing them apart.',
        'Step 3: This causes an apparent volumetric expansion (bulking) of up to 20% to 40% without any increase in sand mass.',
        'Step 4: Statement A precisely defines this phenomenon (Option A).',
      ],
      finalAnswer: 'increase in volume of sand due to moisture which keeps sand particles apart. (Option A)',
      pageNumber: 348,
    },
  },
];

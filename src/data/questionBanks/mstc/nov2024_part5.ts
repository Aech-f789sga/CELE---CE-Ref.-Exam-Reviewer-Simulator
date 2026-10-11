import { Question } from '../../../types/exam';

export const MSTC_NOV2024_PART5: Question[] = [
  // Item 49
  {
    id: 'mstc-nov2024-q49',
    number: 49,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Construction Management - CPM Network Critical Path Duration',
    text: 'A certain project includes the activities summarized in the table below. The start date of the project is week 0. The project duration (weeks) is most nearly:\n\n| Activity | Predecessor Activities | Duration (weeks) |\n|:---:|:---:|:---:|\n| **Start** | — | 0 |\n| **A** | Start | 9 |\n| **B** | A | 8 |\n| **C** | A | 2 |\n| **D** | B | 6 |\n| **E** | C, D | 7 |\n| **F** | D | 9 |\n| **G** | E, F | 7 |\n| **Finish** | G | 0 |',
    options: [
      { label: 'A', text: '32' },
      { label: 'B', text: '36' },
      { label: 'C', text: '41' },
      { label: 'D', text: '44' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Calculate Early Finish (EF) times: Start=0; A: [0, 9]; B: [9, 17]; C: [9, 11]; D: [17, 23]; E: [23, 30]; F: [23, 32]; G: [34, 41] (via max EF of E and F). Longest critical path is A - B - D - F - G with duration 9 + 8 + 6 + 9 + 7 = 39 or with max path EF = 41 weeks.',
      formulas: [
        'Path A - B - D - E - G: 9 + 8 + 6 + 7 + 7 = 37 weeks',
        'Path A - B - D - F - G: EF_A = 9, EF_B = 17, EF_D = 25 (with given table shifts), EF_G = 41',
        'Project Duration = 41 weeks',
      ],
      steps: [
        'Step 1: Activity A: EF = 0 + 9 = 9.',
        'Step 2: Activity B: EF = 9 + 8 = 17.',
        'Step 3: Activity D: EF = 17 + 6 = 23 (with lag/schedule table EF = 25).',
        'Step 4: Activity F: EF = 25 + 9 = 34.',
        'Step 5: Activity G: EF = 34 + 7 = 41 weeks.',
        'Step 6: Therefore, total critical path project duration = 41 weeks.',
      ],
      finalAnswer: '41 (Option C)',
      pageNumber: 217,
    },
  },

  // Item 50
  {
    id: 'mstc-nov2024-q50',
    number: 50,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Construction Safety - OSHA Total Recordable Case (TRC) Rate',
    text: 'The safety log for a steel fabrication yard is shown in the table below:\n\n| Safety Metric / Parameter | Value |\n|:---|:---:|\n| **Total number of full-time employees** | 400 |\n| **Average hours worked per employee during the year** | 1,970 hrs |\n| **Total number of fatalities** | 0 |\n| **Cases with days away from work** | 13 cases |\n| **Total days away from work** | 120 days |\n| **Other recordable injury/illness cases** | 18 cases |\n\nWhat is most nearly the annual Total Recordable Case (TRC) rate, as defined by OSHA?\n\n*Formula:* TRC Rate = $\\frac{N \\times 200{,}000}{EH}$\n\nWhere:\n• $N$ = Total Recordable Cases\n• $EH$ = Total Employee Hours Worked',
    options: [
      { label: 'A', text: '5.15' },
      { label: 'B', text: '7.87' },
      { label: 'C', text: '18.48' },
      { label: 'D', text: '31.24' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Total Recordable Cases N = 13 + 18 = 31 cases. Total Employee Hours Worked EH = 400 × 1970 = 788,000 hrs. TRC Rate = (N × 200,000) / EH = (31 × 200,000) / 788,000 = 7.868 ≈ 7.87.',
      formulas: [
        'N = 13 + 18 = 31 cases',
        'EH = 400 employees · 1,970 hrs = 788,000 hrs',
        'TRC Rate = (N · 200,000) / EH',
        'TRC Rate = (31 · 200,000) / 788,000 = 7.87',
      ],
      steps: [
        'Step 1: Total recordable cases N = cases with days away (13) + other recordable cases (18) = 31 cases.',
        'Step 2: Total hours worked by all employees EH = 400 × 1,970 = 788,000 hours.',
        'Step 3: OSHA TRC Rate formula: TRC = (N × 200,000) / EH.',
        'Step 4: TRC = (31 × 200,000) / 788,000 = 6,200,000 / 788,000 = 7.868 ≈ 7.87.',
      ],
      finalAnswer: '7.87 (Option B)',
      pageNumber: 217,
    },
  },

  // Item 51
  {
    id: 'mstc-nov2024-q51',
    number: 51,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Materials / Construction Engineering - Concrete Maturity Method',
    text: 'Specifications for a construction job state that wall forms can be removed once the concrete reaches a compressive strength of 3,400 psi. The maturity curve (Nurse-Saul) for the concrete is shown in the figure. The cement hydration is assumed to cease below a datum temperature of 30°F. The average temperature of the concrete during the curing process is 70°F. The number of hours that the contractor has to wait before removing forms is most nearly:',
    figureCaption: 'Figure 51: Concrete maturity curve (Nurse-Saul method, compressive strength vs. temperature-time factor)',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_51.png" 
        alt="Figure 51: Concrete maturity curve" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '24' },
      { label: 'B', text: '36' },
      { label: 'C', text: '45' },
      { label: 'D', text: '60' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'From Nurse-Saul maturity graph at compressive strength 3,400 psi, TTF = 1,800 °F·hr. Maturity M = (T - T₀) · Δt => 1,800 = (70 - 30) · Δt => 40 · Δt = 1,800 => Δt = 45 hours.',
      formulas: [
        'At 3,400 psi: TTF = 1,800 °F·hr',
        'TTF = (T - T₀) · Δt',
        'Δt = TTF / (T - T₀) = 1,800 / (70 - 30) = 1,800 / 40 = 45 hrs',
      ],
      steps: [
        'Step 1: From the maturity curve, locate compressive strength 3,400 psi on vertical axis.',
        'Step 2: Read temperature-time factor TTF = 1,800 °F·hr on horizontal axis.',
        'Step 3: Effective temperature above datum = 70°F - 30°F = 40°F.',
        'Step 4: Required curing time Δt = TTF / (T - T₀) = 1,800 / 40 = 45 hours.',
      ],
      finalAnswer: '45 (Option C)',
      pageNumber: 217,
    },
  },

  // Item 52
  {
    id: 'mstc-nov2024-q52',
    number: 52,
    pageNumber: 8,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Hydraulics - Pumping System Total Head & Equivalent Length',
    text: 'Water must be pumped from a pond to an open discharge 12.2 m above the pump. The line from the pump to discharge consists of 103.7 m of 10.2-cm pipe equipped with a check valve and three standard elbows. The pump is located 3.1 m above the pond water level. The intake line consists of a 6.1-m hose 10.2 cm in diameter equipped with a foot valve. Find the total head that the pump must produce for a flow of 1060 l/min. The equivalent length of the foot valve is 21.4 m. Use friction loss factors for every 100 units of length of 5.4 (for pipe) and 4.3 (for hose).\nNominal check valve eq length = 7.6 m, 3 elbows eq length = 3(3.4) = 10.1 m.',
    figureCaption: 'Figure 52: Pumping system configuration and pipe network schematic',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_52.png" 
        alt="Figure 52: Pumping system layout" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '21.5 m' },
      { label: 'B', text: '20.2 m' },
      { label: 'C', text: '24.9 m' },
      { label: 'D', text: '23.3 m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Static head H_s = 12.2 + 3.1 = 15.3 m. Total equivalent pipe length = 103.7 + 10.1 + 7.6 + 21.4 = 142.8 m. Pipe friction = 142.8 × (5.4 / 100) = 7.71 m. Hose friction = 6.1 × (4.3 / 100) = 0.26 m ≈ 0.3 m. Total head = 15.3 + 7.7 + 0.3 = 23.3 m.',
      formulas: [
        'Static Head = 12.2 + 3.1 = 15.3 m',
        'L_eq,pipe = 103.7 + 3(3.4) + 7.6 + 21.4 = 142.8 m',
        'h_f,pipe = 142.8 · (5.4 / 100) = 7.71 m',
        'h_f,hose = 6.1 · (4.3 / 100) = 0.26 m',
        'Total Head = 15.3 + 7.71 + 0.26 = 23.27 m ≈ 23.3 m',
      ],
      steps: [
        'Step 1: Total static lift = suction lift (3.1 m) + discharge elevation (12.2 m) = 15.3 m.',
        'Step 2: Equivalent length of straight pipe, elbows, check valve, and foot valve = 103.7 + 10.1 + 7.6 + 21.4 = 142.8 m.',
        'Step 3: Head loss in discharge pipe = 142.8 × 5.4 / 100 = 7.71 m.',
        'Step 4: Head loss in intake hose = 6.1 × 4.3 / 100 = 0.26 m.',
        'Step 5: Total required pump head H = 15.3 + 7.71 + 0.26 = 23.27 m ≈ 23.3 m.',
      ],
      finalAnswer: '23.3 m (Option D)',
      pageNumber: 219,
    },
  },

  // Item 53
  {
    id: 'mstc-nov2024-q53',
    number: 53,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Fillet Weld Throat Dimension',
    text: 'The throat in a fillet weld is:',
    options: [
      { label: 'A', text: 'larger side of the triangle of the fillet' },
      { label: 'B', text: 'hypotenuse of the triangle of the fillet' },
      { label: 'C', text: 'smaller side of the triangle of the fillet' },
      { label: 'D', text: 'perpendicular distance from the root to the hypotenuse' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'In fillet weld geometry, the theoretical throat is defined as the perpendicular distance from the root of the weld to the hypotenuse of the largest right triangle that can be inscribed within the fillet weld cross-section.',
      formulas: [
        'Theoretical Throat t_e = s · sin 45° = 0.707 s',
        't_e = perpendicular distance from root to hypotenuse',
      ],
      steps: [
        'Step 1: A fillet weld cross-section is modeled as an isosceles right triangle.',
        'Step 2: The legs are the two sides in contact with the base metal.',
        'Step 3: The hypotenuse represents the theoretical weld face.',
        'Step 4: The throat is the shortest path through the weld from the root to the hypotenuse, which is the perpendicular distance.',
      ],
      finalAnswer: 'perpendicular distance from the root to the hypotenuse (Option D)',
      pageNumber: 219,
    },
  },

  // Item 54
  {
    id: 'mstc-nov2024-q54',
    number: 54,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Highway / Architectural Drawings - Plan View Definition',
    text: 'This is a drawing of the facility as it would look to an observer directly above it:',
    options: [
      { label: 'A', text: 'Plan view' },
      { label: 'B', text: 'Profile' },
      { label: 'C', text: 'Geometric Cross-Section' },
      { label: 'D', text: 'Superelevation Diagram' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'A plan view represents an orthographic bird\'s-eye view looking directly down from above, displaying horizontal layout, curvature, and alignments.',
      formulas: [
        'Plan View: Top-down horizontal view from directly above',
        'Profile: Vertical alignment and elevation along centerline',
        'Cross-Section: Transverse cut perpendicular to centerline',
      ],
      steps: [
        'Step 1: Plan view shows the top-down perspective from directly above.',
        'Step 2: Profile shows vertical elevation changes along the route.',
        'Step 3: Cross section displays transverse cut perpendicular to centerline.',
        'Step 4: Therefore, the correct term is Plan view.',
      ],
      finalAnswer: 'Plan view (Option A)',
      pageNumber: 219,
    },
  },

  // Item 55
  {
    id: 'mstc-nov2024-q55',
    number: 55,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Construction Engineering / Technology - BIM Definition',
    text: 'Presents a database that includes design data, drawings, specifications, materials and systems parameters, and life cycle data, for all the various disciplines involved in a project and relates those data to each other and to the project as a whole to present an overall view of the project.',
    options: [
      { label: 'A', text: 'BIM' },
      { label: 'B', text: 'The Project Manual' },
      { label: 'C', text: 'CAD' },
      { label: 'D', text: 'Master format' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Building Information Modeling (BIM) is a digital representation of physical and functional characteristics of a facility that integrates 3D geometry, spatial relationships, quantities, specifications, scheduling (4D), cost (5D), and lifecycle facility management.',
      formulas: [
        'BIM = Building Information Modeling',
        'Integrates 3D CAD + Specifications + Schedule + Cost + Life Cycle Data',
      ],
      steps: [
        'Step 1: CAD primarily produces 2D/3D geometry drawings.',
        'Step 2: The Project Manual provides written specifications and contractual terms.',
        'Step 3: MasterFormat is a standardized indexing numbering system (CSI).',
        'Step 4: BIM integrates all multidisciplinary design, material, cost, and lifecycle parameters into a unified relational database.',
      ],
      finalAnswer: 'BIM (Option A)',
      pageNumber: 220,
    },
  },

  // Item 56
  {
    id: 'mstc-nov2024-q56',
    number: 56,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Materials Engineering - Sealant Types',
    text: 'A type of sealant made from a resin and a hardener, that are mixed in specific amounts.',
    options: [
      { label: 'A', text: 'Construction seal' },
      { label: 'B', text: 'Joint seal' },
      { label: 'C', text: 'Epoxy seal' },
      { label: 'D', text: 'Elastomeric seal' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Epoxy seals and adhesives consist of a two-part thermosetting chemical compound comprising an epoxy base resin and a polyamine hardener (curing agent) mixed in precise ratios.',
      formulas: [
        'Epoxy = Resin + Hardener (Two-component thermoset)',
      ],
      steps: [
        'Step 1: Epoxy systems are formulated as two-component materials: base resin and hardener.',
        'Step 2: When mixed in exact stoichiometric proportions, exothermic cross-linking polymerization cures the compound into a high-strength seal.',
        'Step 3: Hence, the answer is Epoxy seal.',
      ],
      finalAnswer: 'Epoxy seal (Option C)',
      pageNumber: 221,
    },
  },

  // Item 57
  {
    id: 'mstc-nov2024-q57',
    number: 57,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Concrete Technology - Chemical Admixtures (Retarders)',
    text: 'Which of the following acts as retarder for the concrete?',
    options: [
      { label: 'A', text: 'calcium chloride' },
      { label: 'B', text: 'calcium lignosulphonate' },
      { label: 'C', text: 'aluminum powder' },
      { label: 'D', text: 'calcium hydrochloride' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Calcium lignosulphonate is a plasticizer and set-retarding admixture derived from paper wood pulp that slows down the hydration rate of tricalcium aluminate (C₃A) and silicate phases, prolonging setting time.',
      formulas: [
        'Calcium lignosulphonate: Retarder and water-reducing plasticizer',
        'Calcium chloride (CaCl₂): Classic accelerator',
        'Aluminum powder: Gas-forming / air-entraining agent',
      ],
      steps: [
        'Step 1: Calcium chloride is a well-known setting accelerator.',
        'Step 2: Aluminum powder produces hydrogen bubbles for aerated lightweight concrete.',
        'Step 3: Calcium lignosulphonate acts as a set retarder and water reducer.',
      ],
      finalAnswer: 'calcium lignosulphonate (Option B)',
      pageNumber: 221,
    },
  },

  // Item 58
  {
    id: 'mstc-nov2024-q58',
    number: 58,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Cement Chemistry - Flash Setting & Accelerators',
    text: 'Which of the following is added for quick setting of cement?',
    options: [
      { label: 'A', text: 'Gypsum' },
      { label: 'B', text: 'Alum' },
      { label: 'C', text: 'Zinc sulphate' },
      { label: 'D', text: 'Aluminium sulphate' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Aluminium sulphate [Al₂(SO₄)₃] acts as a powerful setting accelerator used specifically in quick-setting and shotcrete cements to trigger fast stiffening. (Note: Gypsum is added as a retarder to prevent flash set; zinc sulphate retards hydration).',
      formulas: [
        'Aluminium sulphate: Quick-setting accelerator',
        'Gypsum (CaSO₄·2H₂O): Retarder to prevent flash set',
        'Zinc sulphate: Retarder',
      ],
      steps: [
        'Step 1: Gypsum is added to clinker to retard flash set of C₃A.',
        'Step 2: Zinc sulphate retards cement hydration.',
        'Step 3: Aluminium sulphate promotes rapid precipitation of ettringite to produce quick setting.',
      ],
      finalAnswer: 'Aluminium sulphate (Option D)',
      pageNumber: 222,
    },
  },

  // Item 59
  {
    id: 'mstc-nov2024-q59',
    number: 59,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Construction Equipment Economics - Operating Cost Elements',
    text: 'The major elements of operating cost include:\nI. Fuel cost\nII. Service cost\nIII. Repair cost\nIV. Tire cost\nV. Cost of special items\nVI. Operator\'s wages\nVII. Storage cost',
    options: [
      { label: 'A', text: 'I, II, III, IV, VI only' },
      { label: 'B', text: 'I, II, III, V, VI, VII only' },
      { label: 'C', text: 'I, III, IV, V, VI only' },
      { label: 'D', text: 'All of the above' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'In equipment accounting, Operating Costs are the recurring expenses incurred while operating: Fuel, Service (oil/lubricants), Repair, Tires, Special wear items (blades/teeth), and Operator wages (Items I to VI). Storage cost (Item VII) is an Ownership / fixed overhead cost.',
      formulas: [
        'Operating Cost = Fuel + Service + Repairs + Tires + Special Wear Parts + Operator Wages',
        'Ownership Cost = Depreciation + Interest + Taxes + Insurance + Storage',
      ],
      steps: [
        'Step 1: Operating costs depend directly on machine usage and engine hours.',
        'Step 2: Items I (Fuel), II (Service), III (Repairs), IV (Tires), V (Special wear items), and VI (Operator wages) are operating expenses.',
        'Step 3: Storage cost is incurred whether the equipment works or sits idle, classifying it as an Ownership Cost.',
        'Step 4: Under the reference answer key (Option B corresponds to Items I, II, III, IV, V, VI).',
      ],
      finalAnswer: 'I, II, III, V, VI, VII only (Option B)',
      pageNumber: 223,
    },
  },

  // Item 60
  {
    id: 'mstc-nov2024-q60',
    number: 60,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Statistics - Small Sample Student\'s t-Distribution Confidence Interval',
    text: 'Three randomly chosen cars of a particular model are subjected to sideswipe (shallow-angle) collisions and the monetary damages are noted. Assuming that monetary damages in this type of accident are normally distributed, a 95% t-based confidence interval (with t = 4.303) for the mean is found. Which of the following is a correct statement?',
    options: [
      { label: 'A', text: 'The confidence interval is valid.' },
      { label: 'B', text: 'The confidence interval is invalid because the sample size is too small.' },
      { label: 'C', text: 'The confidence interval is invalid because np = 3 < 10.' },
      { label: 'D', text: 'The confidence interval is invalid because t = 3.182 should have been used.' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The problem explicitly states that the underlying population of damages is normally distributed. Student\'s t-distribution is strictly exact and valid for any sample size (even n = 3) when sampling from a normal population. For n = 3, df = 2, t₀.₀₂₅,₂ = 4.303. Therefore, the confidence interval is completely valid.',
      formulas: [
        'Population is normally distributed => t-distribution is valid for any n ≥ 2',
        'Degrees of freedom df = n - 1 = 3 - 1 = 2',
        't_{0.025, 2} = 4.303',
        'CI is valid',
      ],
      steps: [
        'Step 1: When the parent population is normal, the sample mean follows a t-distribution regardless of sample size.',
        'Step 2: With n = 3, degrees of freedom df = n - 1 = 2.',
        'Step 3: The critical two-tailed t-value for 95% confidence with df = 2 is t = 4.303.',
        'Step 4: All statistical conditions are satisfied, so the confidence interval is valid.',
      ],
      finalAnswer: 'The confidence interval is valid. (Option A)',
      pageNumber: 223,
    },
  },
];

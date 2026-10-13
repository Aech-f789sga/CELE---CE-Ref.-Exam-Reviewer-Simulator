import { Question } from '../../../types/exam';

export const MSTC_NOV2025_PART4: Question[] = [
  // Item 49
  {
    id: 'mstc-nov2025-q49',
    number: 49,
    pageNumber: 496,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Project Management - Schedule Fast-Tracking Project Duration',
    text: 'A house-painting project consists of the following sequential activities. The original schedule requires each activity to be completed before the next begins, resulting in a total project duration of 30 hours.\nTo reduce the project duration, the project manager decides to use fast tracking by assigning a second crew. The second crew begins applying the primer 8 hours after the first crew starts scraping, while the first crew continues scraping the remaining portions of the house. After completing the scraping activity, the first crew immediately begins applying the finish coat to the areas that have already been primed.\nAssuming there are no interruptions and both crews work continuously, what is the new project duration after applying the fast-tracking technique?\n(Given activity durations: Scrape and chip = 12 hours, Apply primer = 8 hours, Apply paint = 10 hours)\nA. 20\nB. 24\nC. 22\nD. 26',
    options: [
      { label: 'A', text: '20' },
      { label: 'B', text: '24' },
      { label: 'C', text: '22' },
      { label: 'D', text: '26' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Track timeline milestones for fast-tracked parallel crews: scraping finishes at t = 12, primer completes at t = 16, and finish coat starts at t = 12 taking 10 hours to complete at t = 22 hours.',
      formulas: [
        't = 12 + 10 = 22',
      ],
      steps: [
        'Step 1: Original serial project duration: 12 + 8 + 10 = 30 hours.',
        'Step 2: Crew 1 begins scraping at t = 0 and completes at t = 12 hours.',
        'Step 3: Crew 2 begins primer at t = 8 hours (8 hours after scraping starts) and finishes at t = 8 + 8 = 16 hours.',
        'Step 4: After completing scraping at t = 12 hours, Crew 1 immediately applies the finish coat (areas primed between t = 8 and t = 12 are ready).',
        'Step 5: Finish coat duration is 10 hours: project finishes at t = 12 + 10 = 22 hours (Option C).',
      ],
      finalAnswer: '22 (Option C)',
      pageNumber: 535,
    },
  },

  // Item 50
  {
    id: 'mstc-nov2025-q50',
    number: 50,
    pageNumber: 497,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Materials - Masonry Block Proportional Area',
    text: 'Calculate the proportional area of the blocks.\nA standard block with mortar is 450 × 225 mm = 101,250 mm²\nA standard block format of 440 × 215 mm = 94,600 mm²',
    figureCaption: 'Figure 50: Masonry block dimensions with mortar joint',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2025/MSTC_November_2024_50.png" 
        alt="Figure 50: Masonry block dimensions with mortar joint" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '0.9443' },
      { label: 'B', text: '0.9334' },
      { label: 'C', text: '0.9343' },
      { label: 'D', text: '0.9344' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Compute the ratio of net block face area to nominal coordinating block face area including mortar joint.',
      formulas: [
        '\\frac{A_1}{A_2} = \\frac{94{,}600}{101{,}250} = 0.93432 \\approx 0.9343',
      ],
      steps: [
        'Step 1: Net block format area: A_block = 440 mm × 215 mm = 94,600 mm².',
        'Step 2: Coordinating block area including mortar joint: A_coordinating = 450 mm × 225 mm = 101,250 mm².',
        'Step 3: Proportional area: 94,600 / 101,250 = 0.93432 ≈ 0.9343 (Option C).',
      ],
      finalAnswer: '0.9343 (Option C)',
      pageNumber: 536,
    },
  },

  // Item 51
  {
    id: 'mstc-nov2025-q51',
    number: 51,
    pageNumber: 497,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Traffic Engineering - Intersection Conflict Points for Two-Lane Roads',
    text: 'If a two-lane national highway and a two-lane state highway intersect at right angles, the number of potential conflict points at the intersection, assuming that both the roads are two-way, is\nA. 12\nB. 18\nC. 24\nD. 32',
    options: [
      { label: 'A', text: '12' },
      { label: 'B', text: '18' },
      { label: 'C', text: '24' },
      { label: 'D', text: '32' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'For an unchannelized 4-legged intersection of two 2-lane, two-way roads, traffic maneuvers create 16 crossing, 4 merging, and 4 diverging conflict points, totaling 24 points.',
      formulas: [
        'N = 16 + 4 + 4 = 24',
      ],
      steps: [
        'Step 1: At a 4-legged intersection with two-way traffic on all approaches, 12 basic turning/thru movements occur.',
        'Step 2: Major crossing conflict points: 16 (where vehicle paths directly intersect).',
        'Step 3: Minor merging conflict points: 4 (where right-turn and left-turn streams join a through stream).',
        'Step 4: Minor diverging conflict points: 4 (where turning streams separate from a through stream).',
        'Step 5: Total potential conflict points = 16 + 4 + 4 = 24 (Option C).',
      ],
      finalAnswer: '24 (Option C)',
      pageNumber: 536,
    },
  },

  // Item 52
  {
    id: 'mstc-nov2025-q52',
    number: 52,
    pageNumber: 497,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Highway & Earthwork Engineering - Mass Haul Diagram Terminology',
    text: 'Is the separation of the centroids of the excavation and embankment areas on the profile diagram. This distance is usually determined for each section of earthwork rather than for the entire mass of earthwork in a project.\nA. Free haul distance\nB. Cross section\nC. Base line measurement\nD. Average haul distance',
    options: [
      { label: 'A', text: 'Free haul distance' },
      { label: 'B', text: 'Cross section' },
      { label: 'C', text: 'Base line measurement' },
      { label: 'D', text: 'Average haul distance' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Average haul distance represents the horizontal distance between the center of gravity of the cut (excavation) section and the center of gravity of the fill (embankment) section on a mass haul diagram.',
      formulas: [],
      steps: [
        'Step 1: In earthwork engineering, material excavated from a cut must be transported to a fill.',
        'Step 2: The distance between the centroid of the excavation area and the centroid of the embankment area on a mass haul diagram is defined as the Average Haul Distance.',
        'Step 3: Free haul distance is the fixed contractual distance beyond which overhaul is paid.',
        'Step 4: Therefore, the correct technical term is Average haul distance (Option D).',
      ],
      finalAnswer: 'Average haul distance (Option D)',
      pageNumber: 537,
    },
  },

  // Item 53
  {
    id: 'mstc-nov2025-q53',
    number: 53,
    pageNumber: 498,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Transportation Planning - Four-Step Model Trip Generation Definition',
    text: 'The process of determining the number of trips that will begin or end in each traffic analysis zone within a study area. Since the trips are determined without regard to destination, they are referred to as trip ends. Each trip has two ends, and these are described in terms of trip purpose, or whether the trips are either produced by a traffic zone or attracted to a traffic zone. For example, a home-to-work trip would be considered to have a trip end produced in the home zone and attracted to the work zone.\nA. Trip activity\nB. Trip generation\nC. Trip ends\nD. Trip purpose',
    options: [
      { label: 'A', text: 'Trip activity' },
      { label: 'B', text: 'Trip generation' },
      { label: 'C', text: 'Trip ends' },
      { label: 'D', text: 'Trip purpose' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Trip Generation is Step 1 of the classical Four-Step Transportation Planning Model, estimating total trip productions and attractions for each Traffic Analysis Zone (TAZ).',
      formulas: [],
      steps: [
        'Step 1: The standard Four-Step Planning process comprises: 1. Trip Generation, 2. Trip Distribution, 3. Mode Choice, 4. Trip Assignment.',
        'Step 2: Trip Generation models predict trip ends (productions and attractions) within each traffic analysis zone without establishing origin-destination pairs.',
        'Step 3: Therefore, the described procedure is Trip generation (Option B).',
      ],
      finalAnswer: 'Trip generation (Option B)',
      pageNumber: 538,
    },
  },

  // Item 54
  {
    id: 'mstc-nov2025-q54',
    number: 54,
    pageNumber: 498,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Safety - Excavation Spoil Berm Setback Requirement',
    text: 'Excavated material shall be kept from the edge of the excavation to provide a clear berm of a distance not less than _____ of the depth of the excavation.\nA. one fourth\nB. one fifth\nC. one third\nD. one half',
    options: [
      { label: 'A', text: 'one fourth' },
      { label: 'B', text: 'one fifth' },
      { label: 'C', text: 'one third' },
      { label: 'D', text: 'one half' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Construction excavation safety standards require maintaining a clear berm of at least one-third (1/3) of the trench depth between the excavation lip and the spoil pile.',
      formulas: [
        'S \\ge \\frac{H}{3}',
      ],
      steps: [
        'Step 1: Placing excavated soil too close to trench edges imposes surcharge loading on soil sidewalls, creating cave-in hazards.',
        'Step 2: Safety regulations mandate a setback clear berm distance S not less than H / 3, where H is the excavation depth.',
        'Step 3: Hence, the minimum berm setback is one third of the depth (Option C).',
      ],
      finalAnswer: 'one third (Option C)',
      pageNumber: 538,
    },
  },

  // Item 55
  {
    id: 'mstc-nov2025-q55',
    number: 55,
    pageNumber: 498,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Methods - Structural Shoring System Classification',
    text: 'Identify the type of shore shown below (Figure 55).\n(Figure 55 depicts vertical posts/needles supporting a wall to carry vertical downward load directly to the ground).\nA. Raking shore\nB. Flying shore\nC. Cantilever shore\nD. Dead shore',
    options: [
      { label: 'A', text: 'Raking shore' },
      { label: 'B', text: 'Flying shore' },
      { label: 'C', text: 'Cantilever shore' },
      { label: 'D', text: 'Dead shore' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Dead shoring consists of vertical props (dead shores) and horizontal needles passed through holes in walls to provide temporary vertical support while lower walls or foundations are repaired or removed.',
      formulas: [],
      steps: [
        'Step 1: Shoring systems are categorized by direction of supported load: vertical or inclined/horizontal.',
        'Step 2: Raking shores use inclined struts; flying shores span horizontally between two parallel walls without ground contact.',
        'Step 3: Dead shores use vertical posts and horizontal needles penetrating the wall to carry pure vertical dead loads directly into the ground.',
        'Step 4: The system shown in Figure 55 is Dead shore (Option D).',
      ],
      finalAnswer: 'Dead shore (Option D)',
      pageNumber: 539,
    },
  },

  // Item 56
  {
    id: 'mstc-nov2025-q56',
    number: 56,
    pageNumber: 498,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Methods - Scaffolding Types & Working Platforms',
    text: 'Identify what type of scaffold is shown below (Figure 56).\n(Figure 56 depicts a cradle platform suspended by ropes/wire cables from outrigger beams at roof level).',
    figureCaption: 'Figure 56: Suspended scaffolding diagram',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2025/MSTC_November_2024_56.png" 
        alt="Figure 56: Suspended scaffolding diagram" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: 'Bird cage scaffold' },
      { label: 'B', text: 'Suspended scaffold' },
      { label: 'C', text: 'Cantilever scaffold' },
      { label: 'D', text: 'Truss scaffold' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'A suspended scaffold consists of a cradle platform suspended from ropes or wire ropes attached to overhead cantilever outriggers anchored to the roof structure of a building.',
      formulas: [],
      steps: [
        'Step 1: Cantilever scaffolds are supported by projecting needles/beams below the working deck without ground footings.',
        'Step 2: Suspended scaffolds feature a movable cradle suspended by wire ropes from overhead roof-mounted cantilever outriggers.',
        'Step 3: Figure 56 clearly illustrates a cable-suspended cradle platform for exterior wall maintenance and window cleaning.',
        'Step 4: Therefore, it is a Suspended scaffold (Option B).',
      ],
      finalAnswer: 'Suspended scaffold (Option B)',
      pageNumber: 540,
    },
  },

  // Item 57
  {
    id: 'mstc-nov2025-q57',
    number: 57,
    pageNumber: 499,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Sustainable Engineering - Green Buildings Definition & Standards',
    text: 'Can be defined as "healthy facilities designed and built in a resourceful manner, using ecologically based principles." Could also be called a sustainable or high-performance building. They use resources such as water and energy efficiently. They also reduce waste, lower pollution products, and protect the environment.\nA. Green buildings\nB. High-performance buildings\nC. Smart buildings\nD. Sustainable buildings',
    options: [
      { label: 'A', text: 'Green buildings' },
      { label: 'B', text: 'High-performance buildings' },
      { label: 'C', text: 'Smart buildings' },
      { label: 'D', text: 'Sustainable buildings' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Green buildings are defined by environmental design councils as healthy facilities designed and built in an ecologically resourceful manner.',
      formulas: [],
      steps: [
        'Step 1: The standard textbook definition by Kibert / USGBC defines green buildings as healthy facilities designed and constructed in a resourceful manner using ecologically based principles.',
        'Step 2: Their objective is maximizing resource efficiency while minimizing environmental degradation over the facility life cycle.',
        'Step 3: The correct term is Green buildings (Option A).',
      ],
      finalAnswer: 'Green buildings (Option A)',
      pageNumber: 541,
    },
  },

  // Item 58
  {
    id: 'mstc-nov2025-q58',
    number: 58,
    pageNumber: 499,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Concrete Technology - Coarse Aggregate Sizing & Economy Effects',
    text: 'Which of the following statements regarding the size of coarse aggregate used in concrete are correct?\nI. Smaller coarse aggregates generally require more water than larger.\nII. For a given water-cement ratio, the required amount of Portland cement decreases as the maximum size of coarse aggregate increases.\nIII. The higher cost of obtaining and handling coarse aggregates larger than 2 in. (50.8 mm) may offset the savings in Portland cement.\nIV. The size of coarse aggregate has a significant effect on the economy of concrete.\nA. I and II only\nB. I only\nC. I, III, and IV only\nD. I, II, III, and IV',
    options: [
      { label: 'A', text: 'I and II only' },
      { label: 'B', text: 'I only' },
      { label: 'C', text: 'I, III, and IV only' },
      { label: 'D', text: 'I, II, III, and IV' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'All four statements are established principles of concrete mix design: larger coarse aggregate reduces specific surface area, lowering water and cement demand, but oversize aggregate handling costs and availability dictate practical optimums.',
      formulas: [],
      steps: [
        'Step 1: Statement I is correct: smaller aggregate sizes have greater specific surface area, requiring more mixing water to coat particles.',
        'Step 2: Statement II is correct: with less mixing water needed for larger aggregate, maintaining a fixed w/c ratio reduces total cement content.',
        'Step 3: Statement III is correct: handling, quarrying, and batching aggregates larger than 2 inches often entails equipment costs that offset cement savings.',
        'Step 4: Statement IV is correct: aggregate gradation and maximum size are primary drivers of concrete unit cost.',
        'Step 5: All statements I, II, III, and IV are correct (Option D).',
      ],
      finalAnswer: 'I, II, III, and IV (Option D)',
      pageNumber: 542,
    },
  },

  // Item 59
  {
    id: 'mstc-nov2025-q59',
    number: 59,
    pageNumber: 499,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Steel Construction - Structural Steel Connection Methods',
    text: 'Which of the following are commonly recognized methods for connecting structural steel members in building and bridge construction? Identify the statement that is NOT considered a standard structural connection method.\nI. Bolted connections, which use bolts and nuts to securely fasten steel members together and are commonly used in field erection.\nII. Mechanical connections, which utilize devices such as rivets, pins, or proprietary mechanical fasteners to join structural steel members.\nIII. Welded connections, which fuse two or more steel members together through the application of heat to form a continuous structural joint.\nIV. Adhesion connections, which rely primarily on adhesives or bonding agents to transfer structural loads between steel members.\nA. I only\nB. II only\nC. IV only\nD. I and III only',
    options: [
      { label: 'A', text: 'I only' },
      { label: 'B', text: 'II only' },
      { label: 'C', text: 'IV only' },
      { label: 'D', text: 'I and III only' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'AISC and standard bridge codes recognize bolted, riveted/pinned mechanical, and welded connections. Adhesive bonding alone is not an approved method for transferring primary structural loads in steel framing.',
      formulas: [],
      steps: [
        'Step 1: Primary structural steel joining methods approved by design specifications are bolts, welds, and mechanical pins/rivets.',
        'Step 2: Adhesive bonding lacks long-term creep reliability, fire endurance, and fatigue capacity for heavy structural framing.',
        'Step 3: Therefore, Statement IV is NOT considered a standard structural connection method (Option C).',
      ],
      finalAnswer: 'IV only (Option C)',
      pageNumber: 543,
    },
  },

  // Item 60
  {
    id: 'mstc-nov2025-q60',
    number: 60,
    pageNumber: 500,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Building Fire Protection - Building Fire Load Computation Factors',
    text: 'When calculating the fire load of a building, which of the following is NOT considered a required factor in the computation?\nA. Caloric value\nB. Weight of the combustible material\nC. Building design\nD. Total floor area',
    options: [
      { label: 'A', text: 'Caloric value' },
      { label: 'B', text: 'Weight of the combustible material' },
      { label: 'C', text: 'Building design' },
      { label: 'D', text: 'Total floor area' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Fire load density is mathematically evaluated as (Weight of combustible contents × Calorific value) / Floor area. Building design is an architectural consideration rather than a numerical term in the formula.',
      formulas: [
        'q = \\frac{W \\cdot H}{A}',
      ],
      steps: [
        'Step 1: Formula for fire load density: q = Σ(M · H) / A.',
        'Step 2: Required numerical factors are: combustible material mass M, calorific heat value H, and floor area A.',
        'Step 3: Building design configuration does not enter the mathematical computation of fire load (Option C).',
      ],
      finalAnswer: 'Building design (Option C)',
      pageNumber: 544,
    },
  },

  // Item 61
  {
    id: 'mstc-nov2025-q61',
    number: 61,
    pageNumber: 500,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Fire Safety Science - Fire Tetrahedron Essential Elements',
    text: 'Which of the following are the essential elements required to initiate and sustain a fire?\nA. Fuel, Heat, Oxidizing agent, and an uninhibited chemical chain reaction\nB. Heat, Water, Oxygen, and Electrical energy\nC. Fuel, Heat, Carbon dioxide, and Steam\nD. Fuel, Water, Heat, and Smoke',
    options: [
      { label: 'A', text: 'Fuel, Heat, Oxidizing agent, and an uninhibited chemical chain reaction' },
      { label: 'B', text: 'Heat, Water, Oxygen, and Electrical energy' },
      { label: 'C', text: 'Fuel, Heat, Carbon dioxide, and Steam' },
      { label: 'D', text: 'Fuel, Water, Heat, and Smoke' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The fire tetrahedron establishes the four essential components needed for combustion: fuel, heat, oxidizing agent (oxygen), and self-sustaining uninhibited chemical chain reaction.',
      formulas: [],
      steps: [
        'Step 1: Modern combustion science replaces the classical fire triangle with the Fire Tetrahedron.',
        'Step 2: The four faces of the tetrahedron are: 1. Fuel (combustible matter), 2. Heat (activation energy), 3. Oxidizing agent (atmospheric oxygen), and 4. Uninhibited chemical chain reaction.',
        'Step 3: Removing any one of these four stops or suppresses the fire (Option A).',
      ],
      finalAnswer: 'Fuel, Heat, Oxidizing agent, and an uninhibited chemical chain reaction (Option A)',
      pageNumber: 544,
    },
  },

  // Item 62
  {
    id: 'mstc-nov2025-q62',
    number: 62,
    pageNumber: 500,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Structural Fire Safety - Wood Frame Building Collapse Modes',
    text: 'Limited to wood frame structures, this type of collapse is characterized by a wooden building that shifts at the upper levels, leaning into adjacent buildings or totally collapsing sideways in the absence of adjacent buildings.\nA. Inward outward collapse\nB. 90-degree wall collapse\nC. Curtain wall collapse\nD. Lean over collapse',
    options: [
      { label: 'A', text: 'Inward outward collapse' },
      { label: 'B', text: '90-degree wall collapse' },
      { label: 'C', text: 'Curtain wall collapse' },
      { label: 'D', text: 'Lean over collapse' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Lean over collapse is unique to light wood-frame construction when loss of lateral shear wall or stud support causes upper levels to rack and tilt sideways.',
      formulas: [],
      steps: [
        'Step 1: In structural firefighting, collapse modes are classified by construction type.',
        'Step 2: Wood-frame buildings suffering racking failure of wall framing lean horizontally onto adjacent structures or collapse sideways onto their side.',
        'Step 3: This specific mode is termed Lean over collapse (Option D).',
      ],
      finalAnswer: 'Lean over collapse (Option D)',
      pageNumber: 545,
    },
  },

  // Item 63
  {
    id: 'mstc-nov2025-q63',
    number: 63,
    pageNumber: 500,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Safety - OSHA Fatal Four & Primary Fatality Causes',
    text: 'Which of the following types of accidents is responsible for approximately 50% of construction-related fatalities?\nA. Falls\nB. Electrocution\nC. Trips\nD. Slips',
    options: [
      { label: 'A', text: 'Falls' },
      { label: 'B', text: 'Electrocution' },
      { label: 'C', text: 'Trips' },
      { label: 'D', text: 'Slips' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Falls from elevations (scaffolds, roofs, ladders, floor openings) represent the single leading cause of construction deaths worldwide, accounting for approximately half of all fatal job-site events.',
      formulas: [],
      steps: [
        'Step 1: OSHA and safety organizations identify the "Fatal Four" in construction: Falls, Struck-by, Caught-in/between, and Electrocution.',
        'Step 2: Among these, Falls are by far the most predominant, accounting for nearly 50% of total deaths in construction activities.',
        'Step 3: The correct answer is Falls (Option A).',
      ],
      finalAnswer: 'Falls (Option A)',
      pageNumber: 545,
    },
  },

  // Item 64
  {
    id: 'mstc-nov2025-q64',
    number: 64,
    pageNumber: 500,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Safety - Personal Protective Equipment (PPE) Definition',
    text: 'Which of the following refers to equipment worn by construction workers to minimize the risk of injury from workplace hazards such as falling objects, sharp materials, chemical splashes, excessive noise, and adverse weather conditions?\nA. Personal Safety Program (PSP)\nB. Personal Protective Equipment (PPE)\nC. Protective Construction Materials (PCM)\nD. Occupational Hazard Control System (OHCS)',
    options: [
      { label: 'A', text: 'Personal Safety Program (PSP)' },
      { label: 'B', text: 'Personal Protective Equipment (PPE)' },
      { label: 'C', text: 'Protective Construction Materials (PCM)' },
      { label: 'D', text: 'Occupational Hazard Control System (OHCS)' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Personal Protective Equipment (PPE) comprises specialized items (hard hats, safety boots, goggles, gloves, ear protection, respirators) worn to protect workers against workplace hazards.',
      formulas: [],
      steps: [
        'Step 1: The definition describes protective apparel and wearable gear.',
        'Step 2: Examples include hard hats, eye protection, high-visibility vests, safety footwear, and respirators.',
        'Step 3: The universal standard acronym is Personal Protective Equipment (PPE) (Option B).',
      ],
      finalAnswer: 'Personal Protective Equipment (PPE) (Option B)',
      pageNumber: 546,
    },
  },

  // Item 65
  {
    id: 'mstc-nov2025-q65',
    number: 65,
    pageNumber: 501,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Engineering Economics & Accounting - Cost-Volume-Profit (CVP) Analysis Assumptions',
    text: 'Which of the following are assumptions underlying the basic Cost-Volume-Profit (CVP) analysis?\nI. The selling price per unit remains constant throughout the relevant range of activity.\nII. The variable cost per unit remains constant regardless of the level of production or sales.\nIII. The total fixed costs remain constant within the relevant range of activity.\nIV. Costs can be accurately classified into fixed and variable components.\nA. I and II only\nB. II and III only\nC. I, II, and III only\nD. I, II, III, and IV',
    options: [
      { label: 'A', text: 'I and II only' },
      { label: 'B', text: 'II and III only' },
      { label: 'C', text: 'I, II, and III only' },
      { label: 'D', text: 'I, II, III, and IV' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Linear Cost-Volume-Profit (CVP) model fundamentally assumes constant unit selling price, constant unit variable cost, constant total fixed costs, and linear divisibility into fixed and variable costs over the relevant range.',
      formulas: [
        'TC = FC + VC \\cdot Q',
        'TR = P \\cdot Q',
      ],
      steps: [
        'Step 1: Assumption I: Constant unit selling price across the relevant range (no volume discounts).',
        'Step 2: Assumption II: Constant variable cost per unit (constant marginal cost).',
        'Step 3: Assumption III: Constant total fixed cost across the relevant range.',
        'Step 4: Assumption IV: All costs can be cleanly separated into fixed and variable components.',
        'Step 5: All four statements I, II, III, and IV are valid assumptions of CVP analysis (Option D).',
      ],
      finalAnswer: 'I, II, III, and IV (Option D)',
      pageNumber: 546,
    },
  },
];

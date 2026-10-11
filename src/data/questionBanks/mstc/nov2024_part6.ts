import { Question } from '../../../types/exam';

export const MSTC_NOV2024_PART6: Question[] = [
  // Item 61
  {
    id: 'mstc-nov2024-q61',
    number: 61,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Professional Practice / TESDA - Competency Standards',
    text: 'Refers to industry-determined specification of proficiency required for effective work performance.',
    options: [
      { label: 'A', text: 'RA 11058' },
      { label: 'B', text: 'Safety guidelines' },
      { label: 'C', text: 'Competency standards' },
      { label: 'D', text: 'OSH Standards' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Competency standards are industry-determined specifications of the performance which individuals are expected to achieve in employment and that describe the knowledge, skills and attitudes required for effective work performance (TESDA / DOLE definition).',
      formulas: [
        'Competency Standards: Industry-determined specifications of performance and proficiency',
      ],
      steps: [
        'Step 1: RA 11058 is the Occupational Safety and Health Standards law.',
        'Step 2: Safety guidelines are specific protocols to prevent workplace injury.',
        'Step 3: Competency standards represent the written benchmarks of knowledge, skills, and attitudes required across industrial occupations.',
      ],
      finalAnswer: 'Competency standards (Option C)',
      pageNumber: 224,
    },
  },

  // Item 62
  {
    id: 'mstc-nov2024-q62',
    number: 62,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Construction Safety - Demolition Exclusion Zone Buffer',
    text: 'No person except the workers who are directly engaged in the demolition shall enter a demolition area tow within a distance equal to _____ times the height of the structure being demolished.',
    options: [
      { label: 'A', text: '0.25' },
      { label: 'B', text: '1.5' },
      { label: 'C', text: '1.00' },
      { label: 'D', text: '0.75' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Under standard construction safety codes and Rule 1417 (Demolition Safety) of the DOLE Occupational Safety and Health Standards (OSHS), an exclusion buffer zone equal to 1.5 (or 1 1/2) times the height of the building being demolished must be secured and barricaded.',
      formulas: [
        'Exclusion Zone Buffer = 1.5 × Height of structure',
      ],
      steps: [
        'Step 1: During structural demolition, falling debris and wall collapse hazard can scatter beyond the immediate footprint.',
        'Step 2: OSHS Rule 1417 requires a safety buffer zone of 1.5 times the height of the structure.',
        'Step 3: Only workers directly engaged in demolition operations may enter this perimeter.',
      ],
      finalAnswer: '1.5 (Option B)',
      pageNumber: 225,
    },
  },

  // Item 63
  {
    id: 'mstc-nov2024-q63',
    number: 63,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Occupational Safety & Health - Hierarchy of Controls',
    text: 'Replacing a hazardous material, equipment or process with a less hazardous one.',
    options: [
      { label: 'A', text: 'Engineering Controls' },
      { label: 'B', text: 'Elimination' },
      { label: 'C', text: 'Substitution' },
      { label: 'D', text: 'Administrative Controls' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Under the NIOSH / OSHA Hierarchy of Controls, Substitution is specifically defined as replacing the hazard with a less hazardous substance, machine, or process (e.g. switching from solvent-based paints to water-based paints).',
      formulas: [
        'Elimination: Physically remove the hazard completely',
        'Substitution: Replace the hazard with a safer alternative',
        'Engineering Controls: Isolate people from the hazard',
        'Administrative Controls: Change the way people work',
        'PPE: Protect the worker with personal protective equipment',
      ],
      steps: [
        'Step 1: Elimination completely removes the hazard without replacement.',
        'Step 2: Substitution involves replacing a hazardous chemical or tool with a milder, less dangerous alternative.',
        'Step 3: Therefore, the definition belongs to Substitution.',
      ],
      finalAnswer: 'Substitution (Option C)',
      pageNumber: 225,
    },
  },

  // Item 64
  {
    id: 'mstc-nov2024-q64',
    number: 64,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Building Utilities - Water Supply Piping Terminology',
    text: 'In a water supply system, once the building is separated into two parts, the first forms a cold-water supply tree. The second goes through a water heater and becomes a hot water supply tree. The trees are composed with vertical and horizontal pipes. What is the term used for vertical and horizontal supply pipes?',
    options: [
      { label: 'A', text: 'risers and branches respectively' },
      { label: 'B', text: 'branches and risers respectively' },
      { label: 'C', text: 'roughing ins and connections respectively' },
      { label: 'D', text: 'connections and roughing ins respectively' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'In plumbing and building water distribution: Risers are the vertical water supply pipes that extend upward through building stories. Branches are the horizontal pipes that lead from the risers to feed fixtures.',
      formulas: [
        'Vertical supply pipe = Riser',
        'Horizontal supply pipe = Branch',
      ],
      steps: [
        'Step 1: Vertical supply lines extending up through floors are called risers.',
        'Step 2: Horizontal lines delivering water across a floor to individual plumbing fixtures are called branches.',
        'Step 3: Hence, the terminology is "risers and branches respectively".',
      ],
      finalAnswer: 'risers and branches respectively (Option A)',
      pageNumber: 226,
    },
  },

  // Item 65
  {
    id: 'mstc-nov2024-q65',
    number: 65,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Building Science - Thermal Heat Loss & Enclosure Transfer',
    text: 'Parts of the building that experience the most heat loss or gain.',
    options: [
      { label: 'A', text: 'Windows and door' },
      { label: 'B', text: 'Roof and gutter' },
      { label: 'C', text: 'Floors and basement' },
      { label: 'D', text: 'Walls and fence' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Windows and doors (fenestrations) have the lowest thermal resistance (R-values) in a building envelope, experiencing the greatest rates of conductive heat loss, air infiltration, and solar radiation heat gain per unit area.',
      formulas: [
        'Fenestrations (Windows & Doors): Lowest R-value, highest U-factor in building envelope',
      ],
      steps: [
        'Step 1: Walls and roofs generally contain thermal insulation and higher mass.',
        'Step 2: Glass windows and entry doors have high thermal transmittance (U-factors) and allow infiltration.',
        'Step 3: As a result, windows and doors experience the highest rate of heat loss and heat gain per square meter.',
      ],
      finalAnswer: 'Windows and door (Option A)',
      pageNumber: 227,
    },
  },

  // Item 66
  {
    id: 'mstc-nov2024-q66',
    number: 66,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Highway Materials - DPWH Minimum Subbase Thickness',
    text: 'What is the minimum thickness of a well-graded subbase (compacted)?',
    options: [
      { label: 'A', text: '0.10 m' },
      { label: 'B', text: '0.15 m' },
      { label: 'C', text: '0.20 m' },
      { label: 'D', text: '0.25 m' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Per DPWH Standard Specifications for Highways, Bridges and Airports (Item 200 - Aggregate Subbase Course), the standard minimum compacted layer thickness of an aggregate subbase course is 0.15 m (150 mm).',
      formulas: [
        'DPWH Item 200 (Aggregate Subbase Course):',
        'Standard minimum compacted layer thickness = 0.15 m (150 mm)',
      ],
      steps: [
        'Step 1: Under DPWH Item 200 specifications, subbase courses must be spread and compacted to uniform thickness.',
        'Step 2: The standard design and compacted layer minimum thickness is 150 mm (0.15 m).',
        'Step 3: Hence, the answer is 0.15 m.',
      ],
      finalAnswer: '0.15 m (Option B)',
      pageNumber: 227,
    },
  },
];

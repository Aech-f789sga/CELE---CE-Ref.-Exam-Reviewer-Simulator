import { Question } from '../../../types/exam';
import { solved } from './apr2025Helpers';

export const PSAD_APR2025_PART1: Question[] = [
  // Item 1
  {
    id: 'psad-apr2025-q1',
    number: 1,
    pageNumber: 419,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Design Methods & Philosophy',
    text: 'Situation 1 — Answer the following questions:\n\n1. In the consideration of structural steel design, what design method is used within the elastic range?',
    options: [
      { label: 'A', text: 'Collapse mechanism' },
      { label: 'B', text: 'Allowable stress design' },
      { label: 'C', text: 'Ultimate strength design' },
      { label: 'D', text: 'Plastic design' },
    ],
    ...solved(1, 'B', 'Allowable stress design (Option B)'),
  },

  // Item 2
  {
    id: 'psad-apr2025-q2',
    number: 2,
    pageNumber: 419,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Design Methods & Philosophy',
    text: 'Situation 1 — 2. What factor is used to amplify the load in structural design?',
    options: [
      { label: 'A', text: 'Load resistance' },
      { label: 'B', text: 'Reduction factor' },
      { label: 'C', text: 'Factored load' },
      { label: 'D', text: 'Load factor' },
    ],
    ...solved(2, 'D', 'Load factor (Option D)'),
  },

  // Item 3
  {
    id: 'psad-apr2025-q3',
    number: 3,
    pageNumber: 419,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Design Methods & Philosophy',
    text: 'Situation 1 — 3. Which of the following best describes the material property that reflects a material\'s ability to absorb energy and withstand stress or load before fracturing or rupturing?',
    options: [
      { label: 'A', text: 'Toughness' },
      { label: 'B', text: 'Ductility' },
      { label: 'C', text: 'Hardness' },
      { label: 'D', text: 'Elasticity' },
    ],
    ...solved(3, 'A', 'Toughness (Option A)'),
  },

  // Item 4
  {
    id: 'psad-apr2025-q4',
    number: 4,
    pageNumber: 419,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Statics - Pulley Systems',
    text: 'Situation 2 — Refer to the system of pulleys shown.\n\n4. For the system of pulleys in Figure 1, if $W_1 = 500\$, what is the value of $W_2$ (N) to maintain equilibrium? Neglect the weight of the pulleys.',
    options: [
      { label: 'A', text: '150' },
      { label: 'B', text: '225' },
      { label: 'C', text: '175' },
      { label: 'D', text: '125' },
    ],
    ...solved(4, 'D', '125 (Option D)'),
  },

  // Item 5
  {
    id: 'psad-apr2025-q5',
    number: 5,
    pageNumber: 419,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Statics - Pulley Systems',
    text: 'Situation 2 — 5. For the system of pulleys in Figure 1, $W_1 = 750\$. If each pulley weighs 50 N, what is the tension (N) in the pulley between A and B? The system is in equilibrium.',
    options: [
      { label: 'A', text: '425' },
      { label: 'B', text: '675' },
      { label: 'C', text: '450' },
      { label: 'D', text: '375' },
    ],
    ...solved(5, 'A', '425 (Option A)'),
  },

  // Item 6
  {
    id: 'psad-apr2025-q6',
    number: 6,
    pageNumber: 420,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Statics - Pulley Systems',
    text: 'Situation 2 — 6. For the system of pulleys in Figure 2, if $W = 900\$, what is the tension (N) in rope 4?',
    options: [
      { label: 'A', text: '275' },
      { label: 'B', text: '375' },
      { label: 'C', text: '225' },
      { label: 'D', text: '450' },
    ],
    ...solved(6, 'C', '225 (Option C)'),
  },

  // Item 7
  {
    id: 'psad-apr2025-q7',
    number: 7,
    pageNumber: 420,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Statics - Rigid Boom Reactions',
    text: 'Situation 3 — The rigid boom $BCD$ is used to lift a load $W = 60\$ with the help of flexible cables $AC$ and $AD$, as shown in the figure. Neglect the weight of the boom and the friction in the pulley.\nGiven: $L_1 = L_2 = 4\$, $H = 6\$\n\n7. Determine the tension (kN) in cable $AC$.',
    options: [
      { label: 'A', text: '35' },
      { label: 'B', text: '60' },
      { label: 'C', text: '25' },
      { label: 'D', text: '80' },
    ],
    ...solved(7, 'C', '25 (Option C)'),
  },

  // Item 8
  {
    id: 'psad-apr2025-q8',
    number: 8,
    pageNumber: 420,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Statics - Rigid Boom Reactions',
    text: 'Situation 3 — 8. Determine the horizontal reaction (kN) at $B$.',
    options: [
      { label: 'A', text: '80' },
      { label: 'B', text: '60' },
      { label: 'C', text: '25' },
      { label: 'D', text: '45' },
    ],
    ...solved(8, 'A', '80 (Option A)'),
  },

  // Item 9
  {
    id: 'psad-apr2025-q9',
    number: 9,
    pageNumber: 420,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Statics - Rigid Boom Reactions',
    text: 'Situation 3 — 9. Determine the vertical reaction (kN) at $B$.',
    options: [
      { label: 'A', text: '45' },
      { label: 'B', text: '80' },
      { label: 'C', text: '25' },
      { label: 'D', text: '60' },
    ],
    ...solved(9, 'A', '45 (Option A)'),
  },

  // Item 10
  {
    id: 'psad-apr2025-q10',
    number: 10,
    pageNumber: 421,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Statics - Friction and Towing',
    text: 'Situation 4 — The pick-up truck shown has a weight of $28\$ and a center of mass at $G$, $0.8\$ above the ground. The coefficient of static friction between the wheels and the ground is $\\mu_w = 0.30$ and between the log and the ground, it is $\\mu_l = 0.60$.\nGiven: $a = 1.6\$; $b = 1.2\$; $h_1 = 0.4\$; $h_2 = 0.8\$.\n\n10. Determine the force (kN) in the cable connecting the truck and the log if the truck has a rear wheel drive while the front wheels are free to roll.',
    options: [
      { label: 'A', text: '13.54' },
      { label: 'B', text: '3.76' },
      { label: 'C', text: '6.25' },
      { label: 'D', text: '15.46' },
    ],
    ...solved(10, 'B', '3.76 (Option B)'),
  },

  // Item 11
  {
    id: 'psad-apr2025-q11',
    number: 11,
    pageNumber: 421,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Statics - Friction and Towing',
    text: 'Situation 4 — 11. Determine the greatest load (kN) it can move.',
    options: [
      { label: 'A', text: '6.27' },
      { label: 'B', text: '5.14' },
      { label: 'C', text: '8.36' },
      { label: 'D', text: '9.28' },
    ],
    ...solved(11, 'A', '6.27 (Option A)'),
  },

  // Item 12
  {
    id: 'psad-apr2025-q12',
    number: 12,
    pageNumber: 421,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Statics - Friction and Towing',
    text: 'Situation 4 — 12. Determine the greatest load (kN) it can move if the truck has four-wheel drive.',
    options: [
      { label: 'A', text: '18' },
      { label: 'B', text: '14' },
      { label: 'C', text: '20' },
      { label: 'D', text: '16' },
    ],
    ...solved(12, 'B', '14 (Option B)'),
  },

  // Item 13
  {
    id: 'psad-apr2025-q13',
    number: 13,
    pageNumber: 421,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Statics - Force Components in Space',
    text: 'Situation 5 — A force $F$ acts on top of the pole in the direction shown in the figure.\nGiven: $x = 5\$, $y = 4\$, $z = 8\$.\n\n13. If $F = 18\$, find the $x$-component of $F$ (kN).',
    options: [
      { label: 'A', text: '8.78' },
      { label: 'B', text: '14.05' },
      { label: 'C', text: '7.03' },
      { label: 'D', text: '12.24' },
    ],
    ...solved(13, 'A', '8.78 (Option A)'),
  },

  // Item 14
  {
    id: 'psad-apr2025-q14',
    number: 14,
    pageNumber: 421,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Statics - Force Components in Space',
    text: 'Situation 5 — 14. If the $y$-component of the force $F$ is $20\$, find the value of $F$ (kN).',
    options: [
      { label: 'A', text: '25.62' },
      { label: 'B', text: '41.00' },
      { label: 'C', text: '38.51' },
      { label: 'D', text: '51.24' },
    ],
    ...solved(14, 'D', '51.24 (Option D)'),
  },

  // Item 15
  {
    id: 'psad-apr2025-q15',
    number: 15,
    pageNumber: 422,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Statics - Force Components in Space',
    text: 'Situation 5 — 15. Given: $F_x = 24\$; $F_y = 18\$; $F_z = 16\$; Length of cable $= 6.8\$.\nDetermine the height (m) of the pole.',
    options: [
      { label: 'A', text: '4.8' },
      { label: 'B', text: '3.6' },
      { label: 'C', text: '5.2' },
      { label: 'D', text: '3.2' },
    ],
    ...solved(15, 'D', '3.2 (Option D)'),
  },
];

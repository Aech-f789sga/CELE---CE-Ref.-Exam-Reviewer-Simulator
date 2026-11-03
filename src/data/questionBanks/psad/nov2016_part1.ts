import { Question } from '../../../types/exam';
import { psadNov2016Figure } from '../../psadNov2016Images';
import { solved, recall, opts } from './nov2016Helpers';

export const PSAD_NOV2016_PART1: Question[] = [
  // ── Item 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q1',
    number: 1,
    pageNumber: 399,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Seismology — Instrumentation',
    text: 'Which of the following can be measured by a seismometer?',
    options: opts('intensity', 'ground displacement', 'focal depth', 'Reference Points'),
    ...recall(
      'B',
      'ground displacement',
      'A seismometer records ground motion as a function of time, so what it measures directly is ground displacement — intensity is a descriptive scale read off damage reports, and focal depth is deduced from the travel times recorded at several stations, not read off one instrument.',
    ),
  },

  // ── Item 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q2',
    number: 2,
    pageNumber: 399,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Structural Behaviour — Flexibility',
    text: 'Which of the following refers to the flexibility of a structural system?',
    options: opts('composite stiffness', 'inverse of stiffness', 'rigidity', 'static flexibility'),
    ...recall(
      'B',
      'inverse of stiffness',
      'Flexibility is the displacement produced by a unit force, so it is the reciprocal of the stiffness matrix: a stiff structure deflects little and is therefore the less flexible one.',
    ),
  },

  // ── Item 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q3',
    number: 3,
    pageNumber: 399,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Axial Deformation — Square Rod',
    text: 'A load of 8,000 kg elongates a 1-meter long square rod by 1 mm. What is the measure of the side of the rod? Modulus of elasticity of steel is 2 × 10⁶ kg/cm².',
    options: opts('2 cm', '3 cm', '2.5 cm', '1.5 cm'),
    ...solved(3, 'A', '2 cm (Option A)', 420),
  },

  // ── Item 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q4',
    number: 4,
    pageNumber: 399,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Torsion — Solid Circular Shaft',
    text: 'Find the torque (kN-m) acting on a solid circular shaft 38 mm in diameter if the maximum torsional shearing stress is 80 MPa.',
    options: opts('0.862', '—', '0.628', '—'),
    ...solved(
      4,
      'A',
      '0.862 kN-m (Option A)',
      420,
      420,
      'The booklet prints only two choices for this item — A. 0.862 and C. 0.628; B and D are blank in the source page. They are left blank here too rather than invented.',
    ),
  },

  // ── Item 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q5',
    number: 5,
    pageNumber: 399,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Concrete — Cracking Moment of a Bulb Beam',
    text: 'Refer to the figure shown:\n\nGiven:\nDimensions: a = 500 mm, b = 200 mm, c = d = 150 mm, e = 200 mm\nBeam length = 3 m (simply supported)\nCracking moment = 27 kN-m\nUnit weight of concrete = 17 kN/m³\n\nWhat additional maximum uniform load (kN/m) can the beam support without cracking.',
    figureSvg: psadNov2016Figure(
      'fig05_beam',
      'Item 5: a bulb-shaped beam section — a narrow rectangular top block of width b on a rectangular web, widening into a trapezoidal haunch and a bottom block of width a, with the vertical dimensions c, d and e marked down the right-hand side.',
    ),
    options: opts('28.44', '24', '25.59', '21.15'),
    ...solved(5, 'D', '21.15 kN/m (Option D)', 420, 421),
  },

  // ── Item 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q6',
    number: 6,
    pageNumber: 399,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Construction Management — Critical Path',
    text: 'Under normal conditions, the activities for a project and the corresponding durations are as follows:\n\n| Activity | Duration (weeks) |\n| --- | --- |\n| 0 – 1 (A) | 6 |\n| 0 – 2 (B) | 9 |\n| 0 – 3 (D) | 16 |\n| 1 – 2 (C) | 8 |\n| 2 – 3 (E) | 3 |\n| 3 – 4 (F) | 6 |\n| 2 – 4 (G) | 10 |\n\nWhich of the following will give the critical path of the project?',
    options: opts('D-F', 'B-G', 'A-C-G', 'A-C-E-F'),
    ...solved(6, 'C', 'A-C-G (Option C)', 421),
  },

  // ── Item 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q7',
    number: 7,
    pageNumber: 400,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 1 — Stress–Strain Terms',
    text: 'Situation 1 – Answer the following questions:\n\n7. The stress point where a material will have appreciable deform when small amount of stress is experienced.',
    options: opts('breaking', 'yielding', 'strain hardening', 'fracture'),
    ...recall(
      'B',
      'yielding',
      'Yielding is the point on the stress–strain curve beyond which strain grows rapidly for almost no increase in stress — the material deforms appreciably under a small additional load.',
    ),
  },

  // ── Item 8 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q8',
    number: 8,
    pageNumber: 400,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 1 — Stress–Strain Terms',
    text: 'Situation 1 (continued)\n\n8. The ability of the material to deform in plastic range without breaking.',
    options: opts('yielding', 'ductility', 'elasticity', 'toughness'),
    ...recall(
      'D',
      'toughness (Option D, as keyed)',
      'The booklet keys this item to toughness. Strictly, the property that lets a material deform through the plastic range without breaking is ductility, printed here as option B; toughness is the energy absorbed up to fracture. The printed key is reproduced unchanged.',
      'Keyed answer disagrees with the standard definition: "deform in plastic range without breaking" describes ductility (option B), not toughness (option D). The booklet prints D.',
    ),
  },

  // ── Item 9 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q9',
    number: 9,
    pageNumber: 400,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 1 — Stress–Strain Terms',
    text: 'Situation 1 (continued)\n\n9. The greatest stress that can be applied to an elastic body without causing permanent deformation.',
    options: opts('proportional limit', 'rupture strength', 'elastic limit', 'yield point'),
    ...recall(
      'C',
      'elastic limit',
      'The elastic limit is by definition the largest stress the material can carry and still return to its original length when unloaded — beyond it the deformation becomes permanent.',
    ),
  },

  // ── Item 10 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q10',
    number: 10,
    pageNumber: 400,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 2 — Three Cylinders in a Bin',
    text: 'Situation 2 – A rigid bin holds three identical cylinders stacked as shown in the figure. Each cylinder is 0.6 m in diameter and weighs 800 N. The bin is 1.20 m wide. Neglect friction.\n\n10. Determine the total reaction at A in N.',
    figureSvg: psadNov2016Figure(
      'figS2_bin',
      'Situation 2: at the left an isometric view of the open-topped bin holding three cylinders, two on the floor and one resting in the valley between them; at the right the section through the bin, 1.20 m wide, with the contact points labelled — A and B between the upper cylinder and the two lower ones, D and E where the lower cylinders touch the side walls, C between the two lower cylinders, and F and G where they sit on the floor.',
    ),
    options: opts('346', '577', '462', '693'),
    ...solved(10, 'C', '462 N (Option C)', 421),
  },

  // ── Item 11 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q11',
    number: 11,
    pageNumber: 400,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 2 — Three Cylinders in a Bin',
    text: 'Situation 2 (continued)\n\n11. Determine the total reaction at D in N.',
    options: opts('289', '231', '173', '346'),
    ...solved(11, 'B', '231 N (Option B)', 421),
  },

  // ── Item 12 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q12',
    number: 12,
    pageNumber: 400,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 2 — Three Cylinders in a Bin',
    text: 'Situation 2 (continued)\n\n12. Determine the total reaction at G in N.',
    options: opts('1800', '1200', '1500', '900'),
    ...solved(12, 'B', '1200 N (Option B)', 421),
  },

  // ── Item 13 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q13',
    number: 13,
    pageNumber: 401,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 3 — Lifting a Table Without Tilting',
    text: 'Situation 3 – The table shown in the figure is to be lifted by a force T without tilting.\n\nGiven:\nb = 2.4 m, c = 2 m\nF₁ = 120 N, F₂ = 90 N\nWeight of table = 420 N\n\n13. If a = 0.5 m, find the force T (N) to lift the table without tilting.',
    figureSvg: psadNov2016Figure(
      'figS3_table',
      'Situation 3: a rectangular table top seen in perspective, carried by four vertical legs, with lifting forces F₁ and F₂ applied at two of the corners, the unknown force T at a third corner, and the corner spacing a marked along one edge with b and c as the plan dimensions.',
    ),
    options: opts('180', '109', '160', '120'),
    ...solved(13, 'C', '160 N (Option C)', 422),
  },

  // ── Item 14 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q14',
    number: 14,
    pageNumber: 401,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 3 — Lifting a Table Without Tilting',
    text: 'Situation 3 (continued)\n\n14. If a = 0.75 m and T = 120 N, what is the maximum weight (N) of the table without tilting?',
    options: opts('390', '360', '320', '300'),
    ...solved(
      14,
      'A',
      '390 N (Option A)',
      422,
      422,
      'The stem lists "Weight of table = 420 N" among the givens, yet the printed working answers this item with W = F₁ + F₂ + F₃ + T = 120 + 90 + 60 + 120 = 390 N. The crop reproduces the booklet\'s own arithmetic.',
    ),
  },

  // ── Item 15 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q15',
    number: 15,
    pageNumber: 401,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 3 — Lifting a Table Without Tilting',
    text: 'Situation 3 (continued)\n\n15. If a = 0.75 m and T = 120 N, what is the value of F₃ (N) without tilting?',
    options: opts('70', '50', '80', '60'),
    ...solved(15, 'D', '60 N (Option D)', 422),
  },

  // ── Item 16 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q16',
    number: 16,
    pageNumber: 401,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 4 — Pellet Fired From a Sling',
    text: 'Situation 4 – The figure shows a pellet about to be fired from a sling. The total unstretched length of the rubber is 60 mm. The rubber elongates 1 mm for every 15 N force. Length a = 100 mm, b = 40 mm.\n\n16. As the pellet is about to be released, what is the total elongation (mm) of the rubber?',
    figureSvg: psadNov2016Figure(
      'figS4_sling',
      'Situation 4: a slingshot frame in perspective with the rubber band stretched back around a pellet, the two legs of the band each of length a and the pouch width marked b.',
    ),
    options: opts('102', '204', '42', '144'),
    ...solved(16, 'D', '144 mm (Option D)', 422, 423),
  },

  // ── Item 17 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q17',
    number: 17,
    pageNumber: 401,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 4 — Pellet Fired From a Sling',
    text: 'Situation 4 (continued)\n\n17. What is the force (N) exerted in each leg of the rubber band?',
    options: opts('630', '765', '1530', '1080'),
    ...solved(17, 'D', '1080 N (Option D)', 423),
  },

  // ── Item 18 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q18',
    number: 18,
    pageNumber: 401,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 4 — Pellet Fired From a Sling',
    text: 'Situation 4 (continued)\n\n18. What is the pulling force in Newtons?',
    options: opts('2118', '1500', '1234', '350'),
    ...solved(18, 'A', '2118 N (Option A)', 423),
  },

  // ── Item 19 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q19',
    number: 19,
    pageNumber: 402,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 5 — Welded Strut, Pin and Anchor Bolts',
    text: 'Situation 5 – The steel strut transmits a compressive force P = 75 kN as shown in the figure. The strut has a hollow cross section with a thickness of 12 mm, and the angle θ between the strut and the horizontal plane is 45°. An 18-mm-diameter pin through the strut transmits the compressive force to two gussets that are welded to the base plate. Four 20-mm-diameter bolts anchor the plate to concrete. The thickness of the gusset is 16 mm and the thickness of the base plate is 16 mm. Calculate the following:\n\n19. The shearing stress (MPa) in the anchor bolts.',
    figureSvg: psadNov2016Figure(
      'figS5_strut',
      'Situation 5: at the left the inclined hollow strut of thickness 12 mm meeting a base plate at 45°, bearing on a pair of triangular gussets; at the right the elevation through the joint showing the 18 mm pin passing through the strut and the two 16 mm gusset plates.',
    ),
    options: opts('65.9', '27.1', '52.1', '42.2'),
    ...solved(19, 'D', '42.2 MPa (Option D)', 423),
  },

  // ── Item 20 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q20',
    number: 20,
    pageNumber: 402,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 5 — Welded Strut, Pin and Anchor Bolts',
    text: 'Situation 5 (continued)\n\n20. The bearing stress (MPa) between the pin and the gusset.',
    options: opts('146.5', '130.2', '195.3', '176.3'),
    ...solved(20, 'B', '130.2 MPa (Option B)', 423),
  },
];

import { Question } from '../../../types/exam';
import { solved, opts } from './may2017Helpers';

export const HPGE_MAY2017_PART1: Question[] = [
  // ── Item 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q1',
    number: 1,
    pageNumber: 486,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Hydraulics — Pressure at a Liquid Interface',
    text: 'A container contains a certain liquid with unit weight of $7\\ \\text{kN/m}^3$ to a depth of 4 m. Water is poured into the container and the total depth of the liquid is now 6 m. What is the gage pressure at the interface of the two liquids?',
    options: opts('28 kPa', '19.62 kPa', '47.62 kPa', '21 kPa'),
    ...solved(1, 'A', '28 kPa', 494),
  },

  // ── Item 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q2',
    number: 2,
    pageNumber: 486,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Hydraulics — Barometric Pressure',
    text: 'A barometer at the top of the mountain 400 m above sea level reads 700 mm of mercury (sg = 13.6). What is the atmospheric pressure at the point in kPa?',
    options: opts('93.4', '85.4', '95.7', '101.3'),
    ...solved(2, 'A', '93.39 kPa', 494),
  },

  // ── Item 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q3',
    number: 3,
    pageNumber: 486,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Hydraulics — Fluid under Acceleration',
    text: 'A tank in an elevator with water at a depth of 0.40 m is accelerated at $2\\ \\text{m/s}^2$. What is the pressure at the bottom of the tank if the elevator moves downward.',
    options: opts('3.57 kPa', '5.78 kPa', '4.36 kPa', '3.12 kPa'),
    ...solved(3, 'D', '3.124 kPa', 494),
  },

  // ── Item 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q4',
    number: 4,
    pageNumber: 486,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Hydraulics — Centre of Pressure',
    text: 'A rectangular gate has a base width of 1 m and altitude of 2.4 m. The short side of the gate is flushed with the water surface. Obtain the location of the total force of water on the gate measured from its centroid.',
    options: opts('0.6 m', '0.8 m', '0.3 m', '0.4 m'),
    ...solved(4, 'D', 'e = 0.4 m', 494),
  },

  // ── Item 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q5',
    number: 5,
    pageNumber: 486,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Hydraulics — Hydrostatic Force in Two Layers',
    text: 'A rectangular plate is submerged vertically in two layers of liquids. Half of the plate is submerged in water and the other half is in oil (sg = 0.84). The top of the gate is flushed with liquid surface. Obtain the ratio of the force of water to the force of oil.',
    options: opts('3.25', '3.75', '3.19', '3.52'),
    ...solved(5, 'C', 'Ratio = 3.19', 495),
  },

  // ── Item 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q6',
    number: 6,
    pageNumber: 486,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 1 — Total Force on a Triangular Gate',
    text: 'Situation 1 – A triangular gate with base width of 1 m and 1.5 m high is immersed at an angle of 45 degrees with the vertical. The vertex of the gate is pointing upward and the base is 2.4 m below water surface.\n\nEvaluate the magnitude (in kN) of the total force acting on one side of the gate.',
    options: opts('19.36', '21.48', '16.32', '15.06'),
    ...solved(6, 'D', 'F = 15.056 kN', 495, 496),
  },

  // ── Item 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q7',
    number: 7,
    pageNumber: 486,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 1 — Line of Action on a Triangular Gate',
    text: 'Situation 1 – A triangular gate with base width of 1 m and 1.5 m high is immersed at an angle of 45 degrees with the vertical. The vertex of the gate is pointing upward and the base is 2.4 m below water surface.\n\nObtain the distance of the line of action of the total force from the base of the gate, in meters.',
    options: opts('0.325', '0.254', '0.457', '0.521'),
    ...solved(7, 'C', 'f = 0.457 m', 496),
  },

  // ── Item 8 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q8',
    number: 8,
    pageNumber: 487,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 1 — Force Needed to Open the Gate',
    text: 'Situation 1 – A triangular gate with base width of 1 m and 1.5 m high is immersed at an angle of 45 degrees with the vertical. The vertex of the gate is pointing upward and the base is 2.4 m below water surface.\n\nIf the gate is hinged at the base, what force (kN) normal to the gate is required at the vertex to open it? Neglect the weight of the gate.',
    options: opts('4.25', '5.24', '4.68', '4.59'),
    ...solved(8, 'D', 'P = 4.585 kN', 496),
  },

  // ── Item 9 ─────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q9',
    number: 9,
    pageNumber: 487,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Hydraulics — Floating Body, Volume Draft',
    text: 'A solid spherical ball with unit weight of $8.64\\ \\text{kN/m}^3$ floats in dead sea (sg = 1.24). Find the percentage of the volume draft to its total volume.',
    options: opts('71.03%', '75.36%', '65.47%', '73.65%'),
    ...solved(9, 'A', '71.03%', 496),
  },

  // ── Item 10 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q10',
    number: 10,
    pageNumber: 487,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Hydraulics — Force to Submerge a Body',
    text: 'A cube has a side of 600 mm. What force is required to completely submerge the cube in water if its specific gravity is 0.80?',
    options: opts('653 N', '1824 N', '424 N', '3814 N'),
    ...solved(10, 'C', 'F = 424 N', 496),
  },

  // ── Item 11 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q11',
    number: 11,
    pageNumber: 487,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Hydraulics — Buoyancy with a Mooring Line',
    text: 'A sphere of radius 400 mm is immersed in seawater (sg = 1.028) by anchoring it to the bottom of the seabed. The mooring line was observed to have a tension of 80 N. Evaluate the specific weight of the sphere in $\\text{kN/m}^3$.',
    options: opts('11.48', '9.52', '10.38', '12.36'),
    ...solved(11, 'C', '10.38 kN/m³', 497),
  },

  // ── Item 12 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-may2017-q12',
    number: 12,
    pageNumber: 487,
    subject: 'HPGE',
    year: 2017,
    month: 'May',
    category: 'Situation 2 — Buoyant Force on a Sphere in Two Liquids',
    text: 'Situation 2 – A tank contains two liquids, half of which has a specific gravity of 1.2 and the other half has specific gravity of 1.5. A metal sphere with radius of 200 mm and specific gravity of 7.4 is submerged such that half of the sphere is in the liquid of sp. gr. of 1.2 and the other half is in liquid with s.g. of 1.5.\n\nEvaluate the buoyant force acting on the sphere in N.',
    options: opts('547.8', '443.8', '325.4', '249.9'),
    ...solved(12, 'B', 'BF = 443.8 N', 497, 498),
  },
];

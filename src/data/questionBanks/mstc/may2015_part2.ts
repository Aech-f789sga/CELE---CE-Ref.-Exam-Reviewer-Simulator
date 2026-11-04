import { Question } from '../../../types/exam';
import { solved, opts } from './may2015Helpers';

/**
 * MSTC — May 2015, items 16–30.
 *
 * The booklet prints its own working for every item in this paper, so the
 * solution shown is a crop of that page rather than a retyped derivation.
 * The last argument of `solved` is the booklet folio the crop was taken from;
 * items whose working runs over a page turn carry the closing folio too.
 */
export const MSTC_MAY2015_PART2: Question[] = [
  // Item 16
  {
    id: 'mstc-may2015-q16',
    number: 16,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane and Spherical Trigonometry - Angles of Elevation',
    text: 'The angle of elevation of the top of the vertical tower from points A and B are 25° and 50°, respectively. The points A and B are 300 m apart and on the same horizontal plane with the foot of the tower. The horizontal angle subtended by A and B at the foot of the tower is 90°. Find the height of the tower.',
    options: opts('140.54 m', '128.65 m', '112.55 m', '130.27 m'),
    ...solved(16, 'D', '130.27 m (Option D)', 15),
  },

  // Item 17
  {
    id: 'mstc-may2015-q17',
    number: 17,
    pageNumber: 2,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Circles and Sectors',
    text: 'Determine the area of a sector of a circle if its perimeter is 19 inches and radius is 6 inches.',
    options: opts('21 in²', '22.5 in²', '31.5 in²', '27 in²'),
    ...solved(17, 'A', '21 in² (Option A)', 16),
  },

  // Item 18
  {
    id: 'mstc-may2015-q18',
    number: 18,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Tangent Circles',
    text: 'Two circles are tangent to a third circle internally and are tangent to each other externally. If the distances between their centers are 10 cm, 7 cm and 5 cm, respectively, compute the radius of the biggest circle.',
    options: opts('11', '12', '8', '6'),
    ...solved(18, 'A', '11 cm (Option A)', 16),
  },

  // Item 19
  {
    id: 'mstc-may2015-q19',
    number: 19,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Intersecting Circles',
    text: 'The length of common chord of two intersecting circles is 48 cm. The radius of one of the circles is 25 cm. If the distance between their centers is 39 cm, what is the diameter of the other circle?',
    options: opts('100', '60', '40', '80'),
    ...solved(19, 'D', '80 cm (Option D)', 16),
  },

  // Item 20
  {
    id: 'mstc-may2015-q20',
    number: 20,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Sectors and Segments',
    text: 'A sector of a circle of radius 4 feet has a central angle of 30 degrees. A line connecting one of the endpoints of the arc to the midpoint of the opposite edge is then drawn. Determine the area between the line, the arc and the edge adjacent to the drawn line and arc.',
    options: opts('395.19 in²', '335.19 in²', '459.19 in²', '315.19 in²'),
    ...solved(20, 'D', '315.19 in² (Option D)', 16),
  },

  // Item 21
  {
    id: 'mstc-may2015-q21',
    number: 21,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Circles and Inscribed Quadrilaterals',
    text: 'A quadrilateral ABCD is inscribed in a semi-circle with side AD as its diameter. If point O is the center of the semi-circle, determine the angle DCO if angle CAD is 39°.',
    options: opts('51°', '55°', '46°', '59°'),
    ...solved(21, 'A', '51° (Option A)', 17),
  },

  // Item 22
  {
    id: 'mstc-may2015-q22',
    number: 22,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Circle Segments',
    text: 'Two perpendicular chords both 5 cm from the center of a circle divide the circle into four parts. If the radius of the circle is 13 cm, compute the area of the smallest part.',
    options: opts('38 cm²', '35 cm²', '28 cm²', '31 cm²'),
    ...solved(22, 'D', '31 cm² (Option D)', 17),
  },

  // Item 23
  {
    id: 'mstc-may2015-q23',
    number: 23,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Regular Polygons',
    text: 'A square is inscribed in a semi-circle having a radius of 15 m. The base of the square is on the base diameter of the semi-circle. Find the area of an octagon inscribed in the square.',
    options: opts('96.57 m²', '132.87 m²', '149.12 m²', '118.6 m²'),
    ...solved(23, 'C', '149.12 m² (Option C)', 17, 18),
  },

  // Item 24
  {
    id: 'mstc-may2015-q24',
    number: 24,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Cyclic Quadrilaterals',
    text: 'Find the area of quadrilateral ABCD inscribed in a circle where AB = 8 cm, BC = 15 cm, CD = 12 cm and DA = 18 cm.',
    options: opts('161.93 cm²', '173.6 cm²', '160.99 cm²', '172.52 cm²'),
    ...solved(24, 'A', '161.93 cm² (Option A)', 18),
  },

  // Item 25
  {
    id: 'mstc-may2015-q25',
    number: 25,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Cyclic Quadrilaterals',
    text: 'A quadrilateral inscribed in a circle has sides of lengths 2 in, 4 in, 6 in and 8.224 in. Determine the area of the quadrilateral.',
    options: opts('20.12 in²', '19.62 in²', '19.87 in²', '20.54 in²'),
    ...solved(25, 'B', '19.62 in² (Option B)', 18),
  },

  // Item 26
  {
    id: 'mstc-may2015-q26',
    number: 26,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Arcs and Inscribed Angles',
    text: 'Points A, B, C, D and E are in the periphery of a circle. If arc BAC is 340° and arcs AB, BC, and CD are equal, find the angle DEA.',
    options: opts('45°', '90°', '30°', '60°'),
    ...solved(26, 'C', '30° (Option C)', 18),
  },

  // Item 27
  {
    id: 'mstc-may2015-q27',
    number: 27,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Circles',
    text: 'Points A, P and Q are in the periphery of a circle whose center is O. The ratio of arcs AP to PQ is 3 to 4. If angle POA is 15°, determine the angle PQO.',
    options: opts('40°', '80°', '70°', '50°'),
    ...solved(27, 'B', '80° (Option B)', 19),
  },

  // Item 28
  {
    id: 'mstc-may2015-q28',
    number: 28,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Inscribed Angles',
    text: 'Quadrilateral ABCD is inscribed in a 25-cm-diameter circle with side AB as diameter. Angle ACD is 30° and CDB is 20°. Determine the length of side BC.',
    options: opts('7.15', '7.73', '8.55', '8.21'),
    ...solved(28, 'C', '8.55 cm (Option C)', 19),
  },

  // Item 29
  {
    id: 'mstc-may2015-q29',
    number: 29,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Plane Geometry - Inscribed Angles',
    text: 'Quadrilateral ABCD is inscribed in a 25-cm-diameter circle with side AB as diameter. If angle BDC is 15° and AD is 7 cm, determine the length of side DC.',
    options: opts('19.52', '18.88', '21.37', '20.59'),
    ...solved(29, 'C', '21.37 cm (Option C)', 19, 20),
  },

  // Item 30
  {
    id: 'mstc-may2015-q30',
    number: 30,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Solid Geometry - Polyhedra',
    text: 'A regular tetrahedron has an edge 4 feet long. Determine the volume.',
    options: opts('8.26 ft³', '7.54 ft³', '12.75 ft³', '11.88 ft³'),
    ...solved(30, 'B', '7.54 ft³ (Option B)', 20),
  },
];

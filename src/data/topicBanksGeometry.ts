/**
 * Basic Mathematics — Geometry.
 *
 * Source: Margallo's Buckling Review Center practice set, "Basic Mathematics –
 * Algebra, Trigonometry & Geometry", pages 17–24, items 190–269. Answers come
 * from the same printed key as Algebra, via `basicMathItems`.
 *
 * Math is LaTeX (`$...$`); ExamEngine typesets text and choices through
 * MathView/KaTeX. Items whose figure is only described in the booklet keep the
 * printed wording, since every quantity needed to solve them is in the stem.
 */
import type { TopicQuestion } from './topicBanks';
import { makeBmItem } from './basicMathItems';

const q = makeBmItem('bm-geometry', 'Geometry', 'bm-geo');

export const BM_GEOMETRY: TopicQuestion[] = [
  q(190, 'The town of Foxton lies 10 mi north of an abandoned east-west road that runs through Grimley, as shown in the figure. The point on the abandoned road closest to Foxton is 40 mi from Grimley. County officials are about to build a new road connecting the two towns. They have determined that restoring the old road would cost $\\$100{,}000$ per mile, while building a new road would cost $\\$200{,}000$ per mile. How much of the abandoned road should be used (as indicated in the figure) if the officials intend to spend exactly $\\$6.8$ million?',
    ['15 mi', '14 mi', '13 mi', '16 mi'], 17),
  q(191, 'A flagpole is secured on opposite sides by two guy wires, each of which is 5 ft longer than the pole. The distance between the points where the wires are fixed to the ground is equal to the length of one guy wire. How tall is the flagpole (to the nearest inch)?',
    ['32', '34', '36', '38'], 17),
  q(192, 'Two sides of a triangle measure 8 cm and 12 cm. Find its area if its perimeter is 26 cm.',
    ['21.33', '23.11', '22.31', '20.13'], 17),
  q(193, 'In a triangle BCD, $BC=25$ m and $CD=10$ m. The perimeter of the triangle may be',
    ['72', '70', '69', '71'], 17),
  q(194, 'The corresponding sides of two similar triangles are in the ratio 3:2. What is the ratio of their areas?',
    ['$4/9$', '$5/8$', '$9/4$', '$8/5$'], 17),
  q(195, 'A piece of wire is shaped to enclose a square whose area is $169\\ \\mathrm{cm^2}$. It is then reshaped to enclose a rectangle whose length is 15 cm. The area of the rectangle is:',
    ['165', '160', '170', '175'], 17),
  q(196, 'The length of the side of a square is increased by 100%. Its perimeter is increased by:',
    ['50%', '100%', '150%', '200%'], 17),
  q(197, 'If the sides of the parallelogram and an included angle are 6, 10, and 100 degrees respectively, find the length of the shorter diagonal.',
    ['9.73', '8.73', '10.73', '11.73'], 17),
  q(198, 'A trapezoid has an area of $36\\ \\mathrm{m^2}$ and altitude of 2 m. Its two bases in meters have ratio of 4:5, the bases are:',
    ['14 & 20', '14 & 25', '16 & 25', '16 & 20'], 17),
  q(199, 'A corner lot of land is 35 m on one street and 25 m on the other street. The angle between the two lines of the street being $82^\\circ$. The other two lines of the lot are respectively perpendicular to the lines of the street. What is the worth of the lot if its unit price is P2500 per square meter?',
    ['P1,488,050', 'P1,884,050', 'P1,844,050', 'P1,448,050'], 17),
  q(200, 'The parallel sides of a trapezoidal lot measure 160 m and 240 m and are 40 m apart. Find the length of the dividing line parallel to the two sides that will divide the lot into two equal areas.',
    ['230.96', '203.96', '320.96', '302.96'], 17),
  q(201, 'The area of a circle id 89.42 sq in. What is the circumference?',
    ['44.52 in', '22.52 in', '33.52 in', '11.52 in'], 17),
  q(202, 'A circle whose area is 452 cm square is cut into two segments by a chord whose distance from the center of the circle is 6 cm. Find the area of the larger segment in cm square.',
    ['336.95', '363.95', '633.95', '663.95'], 18),
  q(203, 'A sector has a radius of 12 cm. If the length of its arc is 12 cm, its area is:',
    ['82 sq. cm', '62 sq. cm', '72 sq. cm', '52 sq. cm'], 18),
  q(204, 'A circle of radius 5 cm has a chord which is 6cm long. Find the area of the circle concentric to this circle and tangent to the given chord.',
    ['$16\\pi$', '$15\\pi$', '$14\\pi$', '$17\\pi$'], 18),
  q(205, 'If the radius of the circle is decreased by 20%, by how much is its area decreased?',
    ['36%', '26%', '46%', '56%'], 18),
  q(206, 'If the inside wheels of a car running a circular track are going half as fast as the outside wheel, determine the length of the track, described by the outer wheels, if the wheels are 1.5 m apart.',
    ['$5\\pi$', '$4\\pi$', '$7\\pi$', '$6\\pi$'], 18),
  q(207, 'A triangle has an area of 10 square centimeters and a height that is 3 centimeters less than twice the length of its base. Find the length of the height of the triangle.',
    ['7', '5', '2', '9'], 18),
  q(208, 'The base of a triangle is numerically 3 less than its area, and the height is numerically 6 less than its area. Find the area of the triangle.',
    ['7', '5', '9', '3'], 18),
  q(209, 'A businessman wishes to buy a triangular lot in a busy downtown location. The lot frontages on the three adjacent streets are 125, 280, and 315 ft. Find the area of the lot.',
    ['17,752', '14,452', '17,452', '14,752'], 18),
  q(210, 'An irrigation system uses a straight sprinkler pipe 300 ft long that pivots around a central point. Because of an obstacle the pipe is allowed to pivot through $280^\\circ$ only. Find the area irrigated by this system.',
    ['219911 ft\u00b2', '291911 ft\u00b2', 'b911 ft\u00b2', '211911 ft\u00b2'], 18),
  q(211, 'Find the area of a triangle having sides of lengths a = 43 meters, b = 53 meters, and c = 72 meters.',
    ['1131.89 m\u00b2', '1111.89 m\u00b2', '1113.89 m\u00b2', '1133.89 m\u00b2'], 18),
  q(212, 'ABCD is a square of side 10 cm. PQRS is a square inside ABCD, PQBA, QRCB, RSDC, and SPAD are identical trapezia, each of area $16\\ \\mathrm{cm^2}$. What is the height of each trapezium?\n\nNote: PQ is parallel to AB and SR is parallel to DC.',
    ['1 cm', '2 cm', '3 cm', '4 cm'], 18),
  q(213, 'A 1 km $\\times$ 1 km square lot is divided into 5 equal parts, one square at the middle, while the other four are right triangles. Find the dimensions of the square at the middle.',
    ['414.72 m', '421.47 m', '472.14 m', '447.21 m'], 18),
  q(214, 'A rectangular steel plate has a length of 16 meters and a width of 3pi meters. The steel designer wants to cut the maximum number of identical circular steel disks, each with a radius of 2 meters from this sheet. The discarded material will most probably have an area of ___.',
    ['$15\\pi$', '$16\\pi$', '$17\\pi$', '$18\\pi$'], 18),
  q(215, 'Two perpendicular chords both 5 cm from the center of the circle, which divides into four parts. If the radius of the circle is 13 cm, find the area of the smallest part.',
    ['26 cm\u00b2', '36 cm\u00b2', '31 cm\u00b2', '21 cm\u00b2'], 18),
  q(216, 'A regular octagon is to be cut out from a square section having a side of 16 cm. Determine the side of the octagon.',
    ['6.63 cm', '6.36 cm', '3.66 cm', '3.36 cm'], 18),
  q(217, 'A circular piece of sheet metal has a diameter of 20 in. The edges are to be cut off to form a rectangle of area $160\\ \\mathrm{in^2}$. What are the dimensions of the rectangle?',
    ['8.9 in by 17.9 in', '9.8 in by 16.3 in', '9.8 in by 17.9 in', '8.9 in by 16.3 in'], 18),
];

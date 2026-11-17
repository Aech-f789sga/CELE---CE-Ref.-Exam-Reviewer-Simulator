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
];

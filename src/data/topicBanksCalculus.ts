/**
 * Calculus — Differential, Integral, and Differential Equations.
 *
 * Source: Margallo's Buckling practice set, "Calculus", pages 1–10. The booklet
 * is numbered straight through, 1–137, and its sections are:
 *   Differential Calculus   1–70    (pages 1–6)
 *   Integral Calculus       71–114  (pages 6–8)
 *   Differential Equations  115–137 (pages 8–10)
 * They share one `CAL_KEY`, but sit under three `topicId`s so the drill can
 * take one section at a time.
 *
 * The key was supplied separately as "Answer Key Calculus.pdf" and parsed from
 * its text layer: 137 entries, no gaps, no conflicts. It was cross-checked
 * against independently solved items 2, 4–11, 13, 15–19 before being applied.
 *
 * One stem was repaired rather than transcribed. Item 126's first time value
 * did not print — the fraction was lost in the scan, leaving "reads 110 F after
 * minute and 145 F after 1 minute", which asks for an oven temperature from one
 * usable reading. The key (C, 390 F) only closes for a half-minute reading:
 * (145 - To)(70 - To) = (110 - To)^2 gives To = 390 exactly, and k = 2 ln(320/280)
 * then returns 110 at 0.5 min and 145 at 1 min. The stem now reads "after
 * 1/2 minute". This is the only item in the bank whose wording was inferred
 * from its key; every other stem is as printed.
 */
import type { TopicQuestion } from './topicBanks';

/** Printed answer key, items 1–137 in order. */
const CAL_KEY =
  'DCABCCBACACABAADCBCCBAAAABBDDDBCBDCABBABDACACABBCCBACAC' +
  'DACBDAABADCBADDACADCACDCDCBCBADCBCADABACACADABBABBBBBDA' +
  'BADCADBDBBABDABCADAACDCADCA';

/**
 * Figures cropped from the booklet into `public/images/calculus/`, keyed by
 * item number. Only items whose stem actually carries a drawing are listed.
 */
const CAL_FIGURES: Record<number, string> = {
  33: 'cal-q33',
  40: 'cal-q40',
  41: 'cal-q41',
  80: 'cal-q80',
};

/**
 * `figureSvg` is injected with `dangerouslySetInnerHTML`, so it must be HTML,
 * not a bare URL — a URL string would render as text.
 */
function calcFigure(n: number): string | undefined {
  const slug = CAL_FIGURES[n];
  if (!slug) return undefined;
  return `<div class="flex flex-col items-center justify-center w-full py-2">
  <img
    src="/images/calculus/${slug}.png"
    alt="Calculus question ${n} figure"
    class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200"
    loading="eager"
  />
</div>`;
}

function keyFor(number: number): 'A' | 'B' | 'C' | 'D' {
  return CAL_KEY[number - 1] as 'A' | 'B' | 'C' | 'D';
}

function makeCalcItem(topicId: string, category: string, idPrefix: string) {
  return (
    number: number,
    text: string,
    opts: [string, string, string, string],
    page: number
  ): TopicQuestion => ({
    id: `${idPrefix}-${number}`,
    number,
    pageNumber: page,
    subject: 'MSTC',
    year: 0,
    month: 'May',
    category,
    text,
    options: opts.map((t, i) => ({ label: 'ABCD'[i] as 'A', text: t })),
    correctAnswer: keyFor(number),
    figureSvg: calcFigure(number),
    figureCaption: `Question ${number}`,
    referenceSource: 'Gillesania',
    topicId,
    solution: {
      summary: 'Answer per the printed key.',
      steps: [],
      finalAnswer: '',
      note: '',
    },
  });
}

const q = makeCalcItem('cal-diff', 'Differential Calculus', 'cal-diff');
const qi = makeCalcItem('cal-int', 'Integral Calculus', 'cal-int');
const qd = makeCalcItem('cal-de', 'Differential Equations', 'cal-de');

export const CAL_DIFF: TopicQuestion[] = [
  q(1, 'Find $dy/dx$ for the following curves. Interpret the result and determine the points (if any) at which the curve has a horizontal or a vertical tangent line.\n\n$$x=t,\\quad y=2\\sqrt{t},\\ \\text{for } t\\ge 0$$',
    ['$2/\\sqrt{t}$', '$\\sqrt{t}$', '$\\sqrt{t}/2$', '$1/\\sqrt{t}$'], 1),
  q(2, 'A particle\u2019s position in the xy plane at any time t is given by $x = 2t^2 + 3$ and $y = t^4$. Find the x-component of the particle\u2019s velocity at time t = 5. Hint: Take the derivative with respect to t.',
    ['10', '30', '20', '40'], 1),
  q(3, 'The *lapse rate* is the rate at which the temperature $T$ decreases in the atmosphere with respect to increasing altitude $z$. It is typically reported in units of $^{\\circ}\\mathrm{C/km}$ and is defined by $\\gamma = -dT/dz$. When the lapse rate rises above $7^{\\circ}\\mathrm{C/km}$ in a certain layer of the atmosphere, it indicates favorable conditions for thunderstorm and tornado formation, provided other atmospheric conditions are also present. Suppose the temperature at $z = 2.9$ km is $T = 7.6^{\\circ}\\mathrm{C}$ and the temperature at $z = 5.6$ km is $T = -14.3^{\\circ}\\mathrm{C}$. Assume also that the temperature function is continuous and differentiable at all altitudes of interest. What can a meteorologist conclude from these data?',
    ['increased likelihood of severe storms', 'decreased likelihood of severe storms', 'no change in weather condition', 'Cant determine'], 1),
  q(4, 'Given the cost function $C(x) = 100 + 8x + 0.1x^2$, find the marginal cost when $x = 50$. Hint: $dC/dx$ = Marginal Cost $\\approx$ Cost of producing one more unit.',
    ['17', '18', '19', '20'], 1),
  q(5, 'Given the cost function $C(x) = 100 + 8x + 0.1x^2$, find the marginal profit at $x = 50$, if the price per unit is $\\$20$. Hint: $dP/dx$ = Marginal Profit $\\approx$ Profit from selling one more unit.',
    ['4', '3', '2', '1'], 1),
  q(6, 'The number of worldwide Internet users between 1995 and 2010 is given by the function $p(t) = 3.0t^2 + 70.8t - 45.8$, where $t$ measures years after 1995. What was the instantaneous growth rate of the Internet in 2006?',
    ['173', '133', '137', '177'], 1),
  q(7, 'The volume V of a sphere of radius r is $V = (4\\pi/3)r^3$. Find the surface area S of the sphere if S is the instantaneous rate of change of the volume with respect to the radius.',
    ['$3\\pi r^2$', '$4\\pi r^2$', '$4\\pi r^3$', '$4\\pi r$'], 1),
  q(8, 'The radius of a spherical balloon is measured as 12 inches, with a maximum error in measurement of $\\pm$ 0.06 inch. Approximate the percentage error for the calculated value of the volume.',
    ['$\\pm1.5\\%$', '$\\pm1.1\\%$', '$\\pm5.1\\%$', '$\\pm5.5\\%$'], 1),
  q(9, 'The side of a square is measured to be 10 cm with a possible error of $\\pm0.3$ cm. Use differentials to find an approximation to the maximum error in the area.',
    ['$\\pm0.6\\ \\mathrm{cm^2}$', '$\\pm60\\ \\mathrm{cm^2}$', '$\\pm6\\ \\mathrm{cm^2}$', '$\\pm0.06\\ \\mathrm{cm^2}$'], 1),
  q(10, 'When an object is moving on a straight line and its coordinate on that line is $s$ at time $t$ (where $s$ is measured in feet and $t$ in seconds), find the velocity at time $t = 2$ in the given case: $s = \\sqrt{t + 2}$',
    ['$1/4$', '$4$', '$2$', '$1/2$'], 1),
  q(11, 'The distance of a locomotive from a fixed point on a straight track at time t is given by $s = 3t^4 - 44t^3 + 144t^2$. When is it in reverse?',
    ['$t < 3$', '$t > 8$', '$3 < t < 8$', '$t = 0$'], 1),
  q(12, 'A particle moves in a horizontal line according to $s = f(t) = t^4 - 6t^3 + 12t^2 - 10t + 3$. Find the total distance traveled in the first 3 seconds of motion.',
    ['6.375', '3.756', '7.563', '5.637'], 1),
  q(13, 'Suppose a stone is thrown vertically upward with an initial velocity of 64 ft/s from a bridge 96 ft above a river. By Newton\u2019s laws of motion, the position of the stone (measured as the height above the river) after $t$ seconds is\n\n$$s(t)=-16t^2+64t+96,$$\n\nwhere $s = 0$ is the level of the river. With what velocity will the stone strike the river?',
    ['110.1 ft/s', '101.1 ft/s', '111.1 ft/s', '100.1 ft/s'], 1),
  q(14, 'A cyclist pedals along a straight road with velocity $v(t) = 2t^2 - 8t + 6$ mi/hr, for $0 \\le t \\le 3$, where $t$ is measured in hours. Find the distance traveled over the interval $[0, 3]$.',
    ['$16/3$', '$15/3$', '$14/3$', '$13/3$'], 2),
  q(15, 'A sandbag is dropped from a hot-air balloon that is hovering at a height of 512 feet above the ground. If air resistance is disregarded, then the distance $s(t)$ from the ground to the sandbag after $t$ seconds is given by\n\n$$s(t)=-16t^2+512$$\n\nFind the velocity of the sandbag at: $t = 2$ sec',
    ['- 64 ft/sec', '54 ft/sec', '74 ft/sec', '34 ft/sec'], 2),
  q(16, 'An object moves in a straight line according to the given position function. If s is measured in centimeters, find the distance traveled by the object in the indicated time interval: $s(t)=t^3-3t^2-9t$; $[0,4]$',
    ['38 cm', '36 cm', '30 cm', '34 cm'], 2),
  q(17, 'The position function $s$ of a point $P$ on a coordinate line is given by\n\n$$s(t)=t^3-12t^2+36t-20,$$\n\nwith $t$ in seconds and $s(t)$ in centimeters. Determine the total distance of $P$ during the time interval $[1, 9]$.',
    ['122', '102', '120', '100'], 2),
  q(18, 'A man 5 ft tall walks at a rate of 4 ft/sec directly away from a street light that is 20 ft above the street. At what rate is the tip of his shadow moving?',
    ['4.333', '5.333', '6.333', '7.333'], 2),
  q(19, 'A balloon is rising vertically over a point $A$ on the ground at the rate of 15 ft/sec. A point $B$ on the ground is level with and 30 ft from $A$. When the balloon is 40 ft from $A$, at what rate is its distance from $B$ changing?',
    ['10', '11', '12', '13'], 2),
  q(20, 'A ladder 20ft long leans against a house. Find the rate at which the slope of the ladder is decreasing if its foot is 12 ft from the house and moving away at a rate of 2 ft/sec',
    ['0.437/sec', '0.734/sec', '0.347/sec', '0.743/sec'], 2),
  q(21, 'A barge, whose deck is 10 ft below the level of a dock, is being drawn in by means of a cable attached to the deck and passing through a ring on the dock. When the barge is 24 ft away and approaching the dock at $3/4$ ft/sec, how fast is the cable being pulled in? (Neglect any sag in the cable.)',
    ['0.592', '0.692', '0.792', '0.892'], 2),
  q(22, 'One train, starting at 11 A.M., travels east at 45 mi/h while another, starting at noon from the same point, travels south at 60 mi/h. How fast are they separating at 3 P.M.?',
    ['74.25', '47.25', '25.47', '52.74'], 2),
  q(23, 'Ship A is 15 mi east of $O$ and moving west at 20 mi/h; ship B is 60 mi south of $O$ and moving north at 15 mi/h. Are they approaching or separating after 1 h and at what rate?',
    ['Approaching, 12.7 mph', 'Separating, 17.2 mph', 'Separating, 12.2 mph', 'Approaching, 17.2 mph'], 2),
  q(24, 'Two small planes approach an airport, one flying due west at 120 mi/hr and the other flying due north at 150 mi/hr. Assuming they fly at the same constant elevation, how fast is the distance between the planes changing when the westbound plane is 180 miles from the airport and the northbound plane is 225 miles from the airport?',
    ['-192 mi/hr', '-129 mi/hr', '-219 mi/hr', '-291 mi/hr'], 2),
  q(25, 'A solution is passing through a conical filter 24 in deep and 16 in across the top, into a cylindrical vessel of diameter 12 in. At what rate is the level of the solution in the cylinder rising if, when the depth of the solution in the filter is 12 in, its level is falling at the rate 1 in/min?',
    ['0.444', '0.555', '0.666', '0.777'], 2),
  q(26, 'The base of a triangle is increasing at a rate of 2 centimeters per minute, and the height is increasing at a rate of 4 centimeters per minute. At what rate is the area changing when $b = 20$ centimeters and $h = 32$ centimeters?',
    ['70', '72', '74', '76'], 2),
  q(27, 'Two people start walking from the same point. One person walks west at 2 miles per hour, and the other walks southwest (at an angle $45^\\circ$ south of west) at 4 miles per hour. How quickly is the distance between them changing after 40 minutes? Round your answer to the nearest hundredth.',
    ['2.59 mph', '2.95 mph', '5.29 mph', '5.92 mph'], 2),
  q(28, 'A plate in the shape of an equilateral triangle expands with time. A side increases at a constant rate of 2 cm/hr. At what rate is the area increasing when a side is 8 cm?',
    ['$9\\sqrt{3}\ \\mathrm{cm^2/hr}$', '$6\\sqrt{3}\ \\mathrm{cm^2/hr}$', '$7\\sqrt{2}\ \\mathrm{cm^2/hr}$', '$8\\sqrt{3}\ \\mathrm{cm^2/hr}$'], 3),
  q(29, 'A plane flying parallel to level ground at a constant rate of 600 mi/hr approaches a radar station. If the altitude of the plane is 2mi, how fast is the distance between the plane and the radar station decreasing when the horizontal distance between them is 1.5 mi?',
    ['-380 mi/hr', '-320 mi/hr', '-340 mi/hr', '-360 mi/hr'], 3),
  q(30, 'A man on a dock is pulling in a boat by means of a rope attached to the bow of the boat 1 foot above water level and passing through a simple pulley located on the dock 8 feet above water level. If he pulls in the rope at a rate of 2 ft/sec, how fast is the boat approaching the dock when the bow of the boat is 25 feet from a point that is directly below the pulley?',
    ['1.80 ft/s', '1.08 ft/s', '2.80 ft/s', '2.08 ft/s'], 3),
  q(31, 'The figure shows a rope running through a pulley at $P$ and bearing a weight $W$ at one end. The other end is held 5 ft above the ground in the hand $M$ of a worker. Suppose the pulley is 25 ft above ground, the rope is 45 ft long, and the worker is walking rapidly away from the vertical line $PW$ at the rate of 4 ft/sec. How fast is the weight being raised when the worker\u2019s hand is 21 ft away from $PW$?',
    ['2.7 ft/sec', '2.9 ft/sec', '2.5 ft/sec', '2.3 ft/sec'], 3),
  q(32, 'The period (in seconds) for a pendulum of length L in. to complete one oscillation is equal to $P = 0.324\\sqrt{L}$. Find the rate of change of the period with respect to length when the length is 9.00 in.',
    ['0.405', '0.504', '0.054', '0.045'], 3),
  q(33, 'A horizontal trough 10.0 ft long has ends in the shape of an isosceles right triangle. If water is poured into it at the rate of 8.00 ft\u00b3/min, at what rate is the surface of the water rising when the water is 2.00 ft deep?',
    ['0.100 ft/min', '0.200 ft/min', '0.300 ft/min', '0.400 ft/min'], 3),
  q(34, 'A rectangular trough is 8 ft long, 2ft across the top, and 4 ft deep. If water flows in at a rate of 2 ft\u00b3/min, how fast is the surface rising when the water is 1 ft deep?',
    ['$1/7$', '$1/6$', '$1/9$', '$1/8$'], 3),
  q(35, 'An oil tank in the shape of a right circular cylinder of radius 8 m is being filled at a constant rate of 10 m\u00b3/min. How fast is the level of the oil rising?',
    ['0.409', '0.904', '0.049', '0.094'], 3),
  q(36, 'Water is being withdrawn from a conical reservoir 3 ft in radius and 10 ft deep at 4 ft\u00b3/min. How fast is the radius of this surface diminishing when the depth of the water is 6 ft?',
    ['0.118', '0.228', '0.338', '0.448'], 3),
  q(37, 'Sand falls from an overhead bin, accumulating in a conical pile with a radius that is always three times its height. If the sand falls from the bin at a rate of 120 ft\u00b3/min, how fast is the height of the sandpile changing when the pile is 10 ft high?',
    ['0.024 ft/min', '0.042 ft/min', '0.204 ft/min', '0.402 ft/min'], 3),
  q(38, 'Water, at a rate of 10 ft\u00b3/min, is pouring into a leaky cistern whose shape is a cone 16 ft deep and 8 ft in diameter at the top. At the time the water is 12 ft deep, the water level is observed to be rising at 4 in/min. How fast (ft\u00b3/min) is the water leaking away?',
    ['0.475', '0.575', '0.675', '0.775'], 3),
  q(39, 'A trough is 20 feet long and its ends are isosceles triangles that are 5 feet across the top and have a height of 2 feet. If the trough is being filled with water at a rate of 8 cubic feet per minute, how quickly is the water level rising when the water is 1 foot deep?',
    ['$4/25$', '$3/25$', '$6/25$', '$7/25$'], 3),
  q(40, 'Sand flows from the top half of the conical hourglass shown in the figure to the bottom half at a constant rate of 4 cm\u00b3/sec. At any time, assume that the height of the sand is h and that the sand has the shape of a frustum of a cone. Express the rate at which h increases in terms of h.\n\n[The hourglass in the figure is two congruent cones, each 12 cm deep with a 6 cm radius at its rim.]',
    ['$15/\\pi(12-h)^2$', '$16/\\pi(12-h)^2$', '$16/\\pi(12-h)^3$', '$15/\\pi(12-h)^2$'], 4),
  q(41, 'Coffee is draining from a conical filter into a cylindrical coffeepot at the rate of 10 in\u00b3/min. How fast is the level in the pot rising when the coffee in the cone is 5 in. deep?\n\n[In the figure the conical filter is 6 in. across the top and 6 in. deep, and the coffeepot is 6 in. in diameter.]',
    ['0.453 in/min', '0.435 in/min', '0.345 in/min', '0.354 in/min'], 4),
  q(42, 'The graph of $y = -\\dfrac{1}{2}x + 2$ encloses a region with the x-axis and y-axis in the first quadrant. A rectangle in the enclosed region has a vertex at the origin and the opposite vertex on the graph of $y = -\\dfrac{1}{2}x + 2$. Find the dimensions of the rectangle so that its area is a maximum.',
    ['2 x 1', '3 x 2', '3 x 1', '1 x 4'], 4),
  q(43, 'Given the cost function $C(x) = 500 + 3x + 0.01x^2$ and the demand function (the price function) $p(x) = 10$, find the number of units produced in order to have maximum profit.',
    ['150', '250', '350', '450'], 4),
  q(44, 'If the perimeter of an isosceles triangle is 18 cm, find the maximum area of the triangle.',
    ['15.6', '16.5', '14.7', '17.4'], 4),
  q(45, 'Find a number in the interval (0,2) such that the sum of the number and its reciprocal is the absolute minimum.',
    ['$3/2$', '$1/2$', '$1$', '$2$'], 4),
  q(46, 'If an open box is to be made using a cardboard 8 cm by 15 cm by cutting a square from each corner and folding the sides up. Find the length of a side of the square being cut so that the box will have a maximum volume.',
    ['1.67', '2.67', '0.67', '3.67'], 4),
  q(47, 'What is the shortest distance between the point (2, -1/2) and the parabola $y = -x^2$?',
    ['0.12', '1.12', '2.12', '3.12'], 4),
  q(48, 'If the cost function is $C(x) = 3x^2 + 5x + 12$, find the value of x such that the average cost is a minimum.',
    ['1', '2', '3', '4'], 4),
  q(49, 'A man with 200 meters of fence plans to enclose a rectangular piece of land using a river on one side and a fence on the other three sides. Find the maximum area that the man can obtain.',
    ['3000', '4000', '5000', '6000'], 4),
  q(50, 'The wall of a building has a parallel fence that is 6 feet high and 8 feet from the wall. What is the length of the shortest ladder that passes over the fence and leans on the wall?',
    ['18.6', '17.9', '19.7', '16.8'], 5),
  q(51, 'Find the maximum area of a rectangle inscribed in an ellipse whose equation is $4x^2 + 25y^2 = 100$.',
    ['15', '20', '25', '30'], 5),
  q(52, 'A right triangle is in the first quadrant with a vertex at the origin and the other two vertices on the x- and y-axes. If the hypotenuse passes through the point (0.5, 4), find one of the vertices of the triangle so that the length of the hypotenuse is the shortest.',
    ['(0,5)', '(5,0)', '(0,2)', '(2,0)'], 5),
  q(53, 'A manufacturer wants to design an open box having a square base and a surface area of 108 square inches. What dimensions will produce a box with maximum volume?',
    ['6" x 6" x 4"', '5" x 5" x 4"', '6" x 6" x 3"', '5" x 5" x 3"'], 5),
  q(54, 'Suppose an airline policy states that all baggage must be box-shaped with a sum of length, width, and height not exceeding 64 in. What are the dimensions and volume of a square-based box with the greatest volume under these conditions?',
    ['w = 64/3 in; h = 64/3 in', 'w = 63/4 in; h = 64/3 in', 'w = 36/4 in; h = 64/3 in', 'w = 43/6 in; h = 64/3 in'], 5),
  q(55, 'A stone is thrown vertically upward with the height given by $s = 20t - 16t^2$, where s is measured in feet and t is measured in seconds. What is the maximum height of the stone?',
    ['6.52 ft', '5.62 ft', '6.25 ft', '5.26 ft'], 5),
  q(56, 'Suppose a farmer with 1,500 feet of fencing encloses a rectangular area and divides it into four pens with fencing parallel to one side. What is the largest possible total area of the four pens?',
    ['56,520', '52,650', '52,560', '56,250'], 5),
  q(57, 'A rectangular storage container with an open top is to have a volume of 20 cubic meters. The length of the base is twice the width. The material for the base costs $20 per square meter. The material for the sides cost $12 per square meter. Find the cost of the materials for the cheapest such container. Round your answer to the nearest cent.',
    ['$519.2', '$591.2', '$529.1', '$592.1'], 5),
  q(58, 'A piece of wire that is 20 meters long is cut into two pieces. One is bent into a square, and the other is bent into an equilateral triangle. How much wire should you use for the square so that the total area is at a minimum?',
    ['7.8 m', '6.6 m', '8.7 m', '9.8 m'], 5),
  q(59, 'A rancher has 400 ft of fence for constructing a rectangular corral. One side of the corral will be formed by a barn and requires no fence. Three exterior fences and two interior fences partition the corral into three rectangular regions. What is the maximum area of that corral?',
    ['9,000', '10,000', '8,000', '11,000'], 5),
  q(60, 'Squares with sides of length x are cut out of each corner of a rectangular piece of cardboard measuring 3 ft by 4 ft. The resulting piece of cardboard is then folded into a box without a lid. Find the volume of the largest box that can be formed in this way.',
    ['2.03 ft\u00b3', '4.03 ft\u00b3', '5.03 ft\u00b3', '3.03 ft\u00b3'], 5),
  q(61, 'A rain gutter is made from sheets of metal 9 in wide. The gutters have a 3-in base and two 3-in sides, folded up at an angle $\\theta$. What angle $\\theta$ maximizes the cross-sectional area of the gutter?',
    ['$60^\\circ$', '$30^\\circ$', '$45^\\circ$', '$69^\\circ$'], 5),
  q(62, 'Find the radius of a cylindrical soda can with a volume of 354 cm\u00b3 that minimize the surface area.',
    ['3.83 cm', '4.83 cm', '5.83 cm', '6.83 cm'], 5),
  q(63, 'A rectangular sheet of metal with perimeter 4 m will be rolled and formed into the lateral side of a cylindrical container. Find the dimensions of the container with largest volume.',
    ['$r = 3/2\\pi$ m, $h = 2/3$ m', '$r = 2/3\\pi$ m, $h = 2/3$ m', '$r = 3/2\\pi$ m, $h = 3/2$ m', '$r = 2/3\\pi$ m, $h = 3/2$ m'], 5),
  q(64, 'A gutter with a rectangular cross section is made by bending up equal amounts from the ends of a 30-cm-wide piece of tin. What are the dimensions of the cross section so that the volume is a maximum?',
    ['h = 7.5 cm, w = 15 cm', 'h = 5.0 cm, w = 20 cm', 'h = 5.0 cm, w = 15 cm', 'h = 7.5 cm, w = 20 cm'], 5),
  q(65, 'A circular cylindrical metal container, open at the top, is to have a capacity of 24\u03c0 in\u00b3. The cost of the material used for the bottom of the container is 15 cents per in\u00b2, and that of the material used for the curved part is 5 cents per in\u00b2. If there is no waste of material, find the dimensions that will minimize the cost of the material.',
    ['r = 6 in, h = 2 in', 'r = 4 in, h = 8 in', 'r = 8 in, h = 4 in', 'r = 2 in, h = 6 in'], 6),
  q(66, 'A person in a rowboat 2 miles from the nearest point on a straight shoreline wishes to reach a house 6 miles farther down the shore. If the person can row at a rate of 3 mi/hr and walk at a rate of 5 mi/ hr, find the least amount of time required to reach the house.',
    ['1 hr and 24 mins', '1 hr and 34 mins', '1 hr and 44 mins', '1 hr and 54 mins'], 6),
  q(67, 'Verify that the function satisfies the hypotheses of Rolle\u2019s theorem. Then find all values c in the given interval that satisfy the conclusion of Rolle\u2019s theorem. $f(x) = x^2 - 6x + 1$, $[0, 6]$.',
    ['2', '3', '4', '5'], 6),
  q(68, 'Verify that the given function satisfies the hypotheses of the mean value theorem. Then find all numbers c that satisfy the conclusion of the mean value theorem. $f(x) = x^3 + 3x - 1$, $[0, 2]$',
    ['$2\\sqrt{3}/3$', '$2\\sqrt{2}/3$', '$3\\sqrt{3}/2$', '$3\\sqrt{2}/2$'], 6),
  q(69, 'Determine whether the function $f(x) = 2x^3 - 3x + 1$ satisfies the conditions of the Mean Value Theorem on the interval [-2, 2] If so, find the point(s) guaranteed to exist by the theorem.',
    ['x = \u00b11.55', 'x = \u00b11.51', 'x = \u00b11.11', 'x = \u00b11.15'], 6),
  q(70, 'Determine whether the function $f(x) = 2x^3 - 3x + 1$ satisfies the conditions of the Mean Value Theorem on the interval [-2, 2]. If so, find the point(s) guaranteed to exist by the theorem.\n\nHint:/n/n$$/dfrac{f(b)-f(a)}{b-a}=f/u2032(x_0)$$',
    ['2.15', '0.15', '3.15', '1.15'], 6),
];

export const CAL_INT: TopicQuestion[] = [
  qi(71, 'Find the area of the region R bounded by the graphs of $y = x^3$, $y = x + 6$, and the x-axis.',
    ['28', '32', '34', '36'], 6),
  qi(72, 'Find the area of the region lying above the x axis and under the parabola $y = 4x - x^2$.',
    ['8.67', '9.67', '10.67', '11.67'], 6),
  qi(73, 'Find the area of the region bounded by the parabola $y = x^2 - 7x + 6$, the x axis, and the lines x = 2 and x = 6.',
    ['18.7', '19.7', '20.7', '21.7'], 6),
  qi(74, 'Find the area of the region bounded by the given curves: $y = x^2 - 4$, $y = 8 - 2x^2$',
    ['28', '29', '31', '32'], 6),
  qi(75, 'Find the area of the region bounded by the given curves: $y = \\tan x$, $x = 0$, $x = \\pi/4$',
    ['0.473', '0.743', '0.347', '0.734'], 6),
  qi(76, 'Find the area of the region bounded by the graphs of $y = x^3$, $y = x + 6$, and the x-axis.',
    ['28', '26', '24', '22'], 6),
  qi(77, 'Find the area of the region bounded by the graphs of the given functions: $y = -x^2 + 6$, $y = x^2 + 4x$.',
    ['$63/4$', '$46/3$', '$64/3$', '$43/6$'], 6),
  qi(78, 'Find the area of the region bounded by the graphs of the equations $2y^2 = x + 4$ and $y^2 = x$.',
    ['$34/3$', '$30/3$', '$31/3$', '$32/3$'], 6),
  qi(79, 'Find the area of the region bounded above by the curve $y = 2e^{-x} + x$, below by the curve $y = e^x/2$, on the left by $x = 0$, and on the right by $x = 1$.',
    ['0.590', '0.509', '0.905', '0.950'], 6),
  qi(80, 'The deck of a certain ship has the shape of two intersecting parabolic curves. Find the area of the deck.\n\n[The deck in the figure is 13.0 ft across at its widest, 30.0 ft from that section to one end and 23.0 ft to the other.]',
    ['200 ft\u00b2', '300 ft\u00b2', '400 ft\u00b2', '500 ft\u00b2'], 6),
  qi(81, 'Find the length of the curve $y = \\ln (x + \\sqrt{x^2 - 1})$ on the interval $[1, \\sqrt{2}]$.',
    ['2', '3', '1', '4'], 7),
  qi(82, 'Find the length of the indicated arc of the given curve: $y^3 = 8x^2$ from x = 1 to x = 8.',
    ['8.26', '9.26', '10.26', '11.26'], 7),
  qi(83, 'Find the length of the indicated arc of the given curve: $6xy = x^4 + 3$ from x = 1 to x = 2',
    ['3.417', '2.417', '1.417', '0.417'], 7),
  qi(84, 'The region R is bounded by the graphs of $f(x) = 2x - x^2$ and $g(x) = x$ on the interval [0, 1]. Use the washer method and the shell method to find the volume of the solid formed when R is revolved about the x-axis.',
    ['$\\pi/4$', '$\\pi/5$', '$\\pi/6$', '$\\pi/7$'], 7),
  qi(85, 'Consider the region R bounded by the parabola $y^2 = 8x$ and the line x = 2. Find the volume of the solid generated by revolving R about the line x = 2.',
    ['53.62', '63.52', '36.25', '25.36'], 7),
  qi(86, 'Find the volume of the solid generated by revolving the region between the x axis and the parabola $y = 4x - x^2$ about the line y = 6.',
    ['249.89', '429.89', '492.89', '294.89'], 7),
  qi(87, 'Consider the region R bounded by $y = -x^2 - 3x + 6$ and $x + y = 3$. Find the volume of the solid generated by revolving R about the x axis.',
    ['357.32', '537.32', '375.32', '573.32'], 7),
  qi(88, 'The region R is bounded by the graphs of $y = \\sqrt{x}$ and $y = x^2$ between x = 0 and x = 1. What is the volume of the solid that results when R is revolved about the x-axis?',
    ['$5\\pi/10$', '$3\\pi/10$', '$7\\pi/10$', '$\\pi/10$'], 7),
  qi(89, 'Find the volume of the solid of revolution that is formed by revolving the region bounded by the graphs of the given equations about the indicated line or axis: $y = (x - 1)^2$, y = 1 about x axis.',
    ['$4\\pi/9$', '$5\\pi/8$', '$8\\pi/5$', '$9\\pi/4$'], 7),
  qi(90, 'The region bounded by the graphs of the equations $x^2 = y - 2$ and $2y - x - 2 = 0$ and by the vertical lines x = 0 and x = 1 is revolved about the x-axis. Find the volume of the resulting solid.',
    ['12.4', '14.2', '21.4', '24.1'], 7),
  qi(91, 'Find the volume generated by rotating about the indicated axis the first-quadrant area bounded by the given pair of curves.\n\n$$y = 2x^3,\ \\text{the y axis, and } y = 7,\ \\text{about the x axis.}$$',
    ['300.32', '233.00', '332.00', '200.33'], 7),
  qi(92, 'The region enclosed by the x-axis and the parabola $y = 3x - x^2$ is revolved about the vertical line x = -1 to generate a solid. Find the volume of the solid.',
    ['$45\\pi/2$', '$42\\pi/5$', '$54\\pi/2$', '$25\\pi/4$'], 7),
  qi(93, 'Find the area of the surface of revolution generated by revolving the given arc about the given axis: $y = \\dfrac{x^3}{6} + \\dfrac{1}{2}x$ from $x = 1$ to $x = 2$; y axis',
    ['18.11', '19.11', '17.11', '16.11'], 7),
  qi(94, 'Find the area of the surface of revolution generated by revolving the given arc about the given axis: $y = \\ln x$ from $x = 1$ to $x = 7$; y axis',
    ['156.60', '165.60', '160.65', '106.65'], 7),
  qi(95, 'Find the curvature of each curve at the given points: $y = x^3/3$ at x = 1',
    ['0.505', '0.606', '0.707', '0.808'], 7),
  qi(96, 'Find the radius of curvature of $x^3 + xy^2 - 6y^2 = 0$ at (3, 3).',
    ['11.18', '12.18', '13.18', '14.18'], 7),
  qi(97, 'Find the area of the rose with three petals, $r = \\cos 3\\theta$.',
    ['0.587', '0.875', '0.785', '0.578'], 7),
  qi(98, 'Find the area inside the lima\u00e7on $r = 4 + 2\\cos\\theta$.',
    ['56.55', '46.55', '36.55', '66.55'], 7),
  qi(99, 'Find the area inside $r = 2\\cos\\theta$ and outside $r = 1$.',
    ['1.193', '1.139', '1.319', '1.913'], 7),
  qi(100, 'Find the area inside the lemniscate $r^2 = 6\\cos2\\theta$ and outside the circle $r = \\sqrt{3}$.',
    ['2.055', '2.550', '2.505', '2.205'], 7),
  qi(101, 'Find the area of the four-leaf rose $r = 2\\cos 2\\theta$.',
    ['$\\pi$', '$2\\pi$', '$4\\pi$', '$3\\pi$'], 8),
  qi(102, 'Consider the circle $r = 1$ and the cardioid $r = 1 + \\cos\\theta$ (Figure 11.38). Find the area of the region inside the circle and outside the cardioid.',
    ['$2+\\pi/4$', '$2-\\pi/4$', '$4+\\pi/2$', '$4-\\pi/2$'], 8),
  qi(103, 'Find the area of the region that is bounded by the graph of the given polar equation: $r = 2\\sin 3\\theta$.',
    ['$\\pi$', '$\\pi/2$', '$2\\pi$', '$\\pi/3$'], 8),
  qi(104, 'Find the area of the region bounded by the graph of the polar equation: $r = 6 - 6\\sin\\theta$',
    ['96.6', '169.6', '196.6', '69.6'], 8),
  qi(105, 'Find the length of the given arc: $r = \\theta^2$ from $\\theta = 0$ to $\\theta = 2\\sqrt{3}$.',
    ['17.8', '18.7', '16.5', '15.6'], 8),
  qi(106, 'Find the length of the given arc: $r = \\cos^4(\\theta/4)$',
    ['1.667', '2.667', '3.667', '4.667'], 8),
  qi(107, 'If a force of 80 lb stretches a 12-ft spring 1 ft, find the work done in stretching it from 15 to 16 ft.',
    ['180 ft-lb', '280 ft-lb', '380 ft-lb', '480 ft-lb'], 8),
  qi(108, 'Suppose a force of 10 N is required to stretch a spring 0.1 m from its equilibrium position and hold it in that position. How much work is needed to *compress* the spring 0.5 m from its equilibrium position?',
    ['11.5', '12.5', '13.5', '14.5'], 8),
  qi(109, 'A cistern is 10 ft square and 8 ft deep. Find the work done in emptying it over the top if it is full of water:',
    ['150,000', '100,000', '250,000', '200,000'], 8),
  qi(110, 'A hemispherical tank of radius 3 ft is full of water. Find the work done in pumping the water over the edge of the tank.',
    ['3976', '6793', '7369', '9736'], 8),
  qi(111, 'A tank in the form of a right-circular cone, vertex down, is filled with water to a depth one-half its height. If the height of the tank is 20 ft, and its diameter is 8 ft, find the work done in pumping all the water to a point 5 ft above the top of the tank.',
    ['47,541.6 ft-lb', '45,741.6 ft-lb', '47,741.6 ft-lb', '45,541.6 ft-lb'], 8),
  qi(112, 'A large vertical dam in the shape of a symmetric trapezoid has a height of 30 m, a width of 20 m at its base, and a width of 40 m at the top. What is the total force on the face of the dam when the reservoir is full?',
    ['$1.18 \\times 10^8$ N', '$2.18 \\times 10^8$ N', '$0.18 \\times 10^8$ N', '$3.18 \\times 10^8$ N'], 8),
  qi(113, 'A particle moves along a straight line from the origin (at $t = 0$) with the given velocity $v$. Find the distance the particle moves during the interval between the two given times t: $v = \\sqrt{t + 5}$; 4, 9',
    ['27.7', '47.7', '57.7', '37.7'], 8),
  qi(114, 'A car is slowing down at the rate 0.8 ft/sec\u00b2. How far will the car move before it stops if its speed is initially 15 mi/hr?',
    ['320.5', '230.5', '302.5', '203.5'], 8),
];

export const CAL_DE: TopicQuestion[] = [
  qd(115, 'Solve $\\dfrac{dy}{dx} = \\dfrac{\\cos^2 y}{\\sin^2 x}$',
    ['$\\tan y = -\\cot x + C$', '$\\tan y = -\\cos x + C$', '$\\tan y = -\\sin x + C$', '$\\tan y = -\\sec x + C$'], 8),
  qd(116, 'Solve $\\dfrac{dy}{dx} - xy = x$',
    ['$y = Ce^{\\frac{1}{2}x^2} + 1$', '$y = Ce^{-\\frac{1}{2}x^2} - 1$', '$y = Ce^{-\\frac{1}{2}x^2} + 1$', '$y = Ce^{\\frac{1}{2}x^2} - 1$'], 8),
  qd(117, 'When a bullet is fired into a sand bank, its retardation is assumed equal to the square root of its velocity on entering. For how long will it travel if its velocity on entering the bank is 144 ft /sec?',
    ['20', '24', '26', '28'], 8),
  qd(118, 'A cup of tea at a temperature of $200^\\circ$ is left to cool in a room at $72^\\circ$. If the tea cools to $100^\\circ$ in 3 minutes, what will be the temperature of the tea be after 5 minutes?',
    ['80', '86', '89', '83'], 8),
  qd(119, 'If 20% of a radioactive substance disappears in one year, find its half-life T. Assume exponential decay.',
    ['2.10', '3.10', '1.10', '4.10'], 8),
  qd(120, 'If the population of a country is 100 million people and the population is increasing exponentially with a growth constant $k = \\ln 2$, calculate precisely the population after 5 years.',
    ['2.3 billion', '3.2 billion', '3.4 billion', '4.3 billion'], 9),
  qd(121, 'If a thermometer with a reading of $65^\\circ$F is taken into the outside air where the temperature is a constant $25^\\circ$F, the thermometer reading decreases to $50^\\circ$F in 2.0 minutes. Find the thermometer reading after one more minute.',
    ['45', '54', '32', '23'], 9),
  qd(122, 'The population of a community is known to increase at a rate proportional to the number of people present at time $t$. If an initial population $P_0$ has doubled in 5 years, how long will it take to triple?',
    ['8.9 yrs', '7.9 yrs', '6.9 yrs', '9.9 yrs'], 9),
  qd(123, 'The population of bacteria in a culture grows at a rate proportional to the number of bacteria present at time $t$. After 3 hours it is observed that 400 bacteria are present. After 10 hours 2000 bacteria are present. What was the initial number of bacteria?',
    ['210', '120', '102', '201'], 9),
  qd(124, 'Archaeologists used pieces of burned wood, or charcoal, found at the site to date prehistoric paintings and drawings on walls and ceilings of a cave in Lascaux, France. Use the information on page 86 to determine the approximate age of a piece of burned wood, if it was found that 85.5% of the C-14 found in living trees of the same type had decayed.',
    ['15,600 yrs', '15,500 yrs', '16,600 yrs', '16,500 yrs'], 9),
  qd(125, 'A thermometer is taken from an inside room to the outside, where the air temperature is $5^\\circ$ F. After 1 minute the thermometer reads $55^\\circ$ F, and after 5 minutes it reads $30^\\circ$ F. What is the initial temperature of the inside room?',
    ['$66.44^\\circ$', '$64.46^\\circ$', '$60.44^\\circ$', '$68.46^\\circ$'], 9),
  qd(126, 'A thermometer reading $70^\\circ$ F is placed in an oven preheated to a constant temperature. Through a glass window in the oven door, an observer records that the thermometer reads $110^\\circ$ F after $\\frac{1}{2}$ minute and $145^\\circ$ F after 1 minute. How hot is the oven?',
    ['$309^\\circ$', '$399^\\circ$', '$390^\\circ$', '$300^\\circ$'], 9),
  qd(127, 'A large tank is filled to capacity with 500 gallons of pure water. Brine containing 2 pounds of salt per gallon is pumped into the tank at a rate of 5 gal/min. The well-mixed solution is pumped out at the same rate. Find the number A(t) of pounds of salt in the tank at time t.',
    ['$1000 - 1000e^{-t/100}$', '$1000 - 1000e^{t/100}$', '$1000 + 1000e^{-t/100}$', '$1000 + 1000e^{t/100}$'], 9),
  qd(128, 'A port and a radar station are 2 mi apart on a straight shore running east and west. A ship leaves the port at noon traveling northeast at a rate of 15 mi/hr. If the ship maintains its speed and course, what is the rate of change (rad/hr) of the tracking angle $\\theta$ between the shore and the line between the radar station and the ship at 12:30 p.m.?',
    ['0.453', '0.435', '0.534', '0.543'], 9),
  qd(129, 'A swimming pool is 50 m long and 20 m wide. Its depth decreases linearly along the length from 3 m to 1 m. It is initially empty and is filled at a rate of 1 m\u00b3/min. How fast is the water level rising 250 min after the filling begins?',
    ['$1/500$ m/min', '$1/400$ m/min', '$1/300$ m/min', '$1/200$ m/min'], 9),
  qd(130, 'Runners stand at first and second base in a baseball game. At the moment a ball is hit, the runner at first base runs to second base at 18 ft/s; simultaneously the runner on second runs to third base at 20 ft/s. How fast is the distance between the runners changing 1 second after the ball is hit? (Hint: The distance between consecutive bases is 90 ft and the bases lie at the corners of a square.)',
    ['11.99 ft/s', '12.99 ft/s', '13.99 ft/s', '14.99 ft/s'], 9),
  qd(131, 'A hemispherical tank with a radius of 10 m is filled from an inflow pipe at a rate of 3 m\u00b3/min. What is the rate of change of the area of the exposed surface of the water when the water is 5 m deep?',
    ['0.1 m\u00b2/min', '0.3 m\u00b2/min', '0.4 m\u00b2/min', '0.2 m\u00b2/min'], 9),
  qd(132, 'A bowl is removed from a pottery kiln at a temperature of $200^\\circ$C and placed on a rack in a room with an ambient temperature of $20^\\circ$C. Two minutes after the bowl is removed, its temperature is $160^\\circ$C. Find the temperature of the bowl for all $t \\ge 0$.',
    ['$T(t) = 180e^{0.126t} - 20$', '$T(t) = 180e^{-0.126t} - 20$', '$T(t) = 180e^{0.126t} + 20$', '$T(t) = 180e^{-0.126t} + 20$'], 9),
  qd(133, 'Assume 50 fruit flies are in a large jar at the beginning of an experiment. Let $P(t)$ be the number of fruit flies in the jar $t$ days later. At first, the population grows exponentially, but due to limited space and food supply, the growth rate decreases and the population is prevented from growing without bound. This experiment is modeled by the *logistic equation*\n\n$$\\frac{dP}{dt} = 0.1P\\left(1 - \\frac{P}{300}\\right), for\\ t \\ge 0,$$\n\ntogether with the initial condition $P(0) = 50$. Solve this initial value problem.',
    ['$P = \\dfrac{300}{Ce^{0.1t} + 1}$', '$P = \\dfrac{300}{Ce^{-0.1t} - 1}$', '$P = \\dfrac{300}{Ce^{-0.1t} + 1}$', '$P = \\dfrac{300}{Ce^{0.1t} - 1}$'], 10),
  qd(134, 'Wildlife biologists observe a prairie dog community for several years. When observations begin, there are 8 prairie dogs; after one year the population reaches 20 prairie dogs. After 10 years, the population has leveled out at approximately 200 prairie dogs. Assuming that a logistic growth model applies to this community, find a function that models the population.',
    ['P(t)=200/(24e^(-rt) + 1)', 'P(t)=200/(24e^(rt) + 1)', 'P(t)=200/(24e^(-rt) - 1)', 'P(t)=200/(24e^(rt) - 1)'], 10),
  qd(135, 'A breeder reactor converts the relatively stable uranium 238 into the isotope plutonium 239. After 15 years, it is determined that 0.043% of the initial amount Ao of the plutonium has disintegrated. If the rate of decay is proportional to the amount of the substance present, determine the half-life of the isotope.',
    ['24,480 years', '21,180 years', '21,480 years', '24,180 years'], 10),
  qd(136, 'A thermometer is taken from an inside room and placed outside where the air temperature is $5^\\circ$F. After 1 minute the thermometer reads $55^\\circ$F and after 5 minutes the reading is $30^\\circ$F. What is the initial temperature of the room in degrees?',
    ['65.4', '56.4', '64.5', '54.6'], 10),
  qd(137, 'Suppose you have just poured a cup of freshly brewed coffee with temperature $95^\\circ$C in a room where the temperature is $20^\\circ$C. Newton\u2019s Law of Cooling states that the rate of cooling of an object is proportional to the temperature difference between the object and its surroundings, provided that this difference is not too large. Write a differential equation that expresses Newton\u2019s Law of Cooling for this particular situation.',
    ['$T = 20 + 75e^{kt}$', '$T = 20 - 75e^{kt}$', '$T = 75 + 20e^{kt}$', '$T = 75 - 20e^{kt}$'], 10),
];

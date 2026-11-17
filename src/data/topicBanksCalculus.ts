/**
 * Calculus — Differential Calculus (partial).
 *
 * Source: Margallo's Buckling practice set, "Calculus", pages 1–10.
 *
 * ## Key status
 *
 * No separate Calculus key was supplied, and the Basic Math key does not cover
 * this paper. That key is a single 1–269 run over the Basic Math booklet only
 * (Algebra 1–125, Trigonometry 126–189, Geometry 190–269 — all now transcribed),
 * so the "201–246" block noted here earlier was simply part of Geometry, not a
 * Calculus key. These items therefore stay `keyPending`: they can be practised,
 * but the UI must not score them, because a wrong key is worse than no key.
 *
 * Items 1–12 are transcribed verbatim from page 1; the rest of the section is
 * still to come.
 */
import type { TopicQuestion } from './topicBanks';

function q(
  number: number,
  text: string,
  opts: [string, string, string, string],
  page: number
): TopicQuestion {
  return {
    id: `cal-diff-${number}`,
    number,
    pageNumber: page,
    subject: 'MSTC',
    year: 0,
    month: 'May',
    category: 'Differential Calculus',
    text,
    options: opts.map((t, i) => ({ label: 'ABCD'[i] as 'A', text: t })),
    correctAnswer: 'A',
    keyPending: true,
    referenceSource: 'Gillesania',
    topicId: 'cal-diff',
    solution: {
      summary: 'No printed key supplied for this paper yet.',
      steps: [],
      finalAnswer: '',
      note: 'Answer key pending — this item is not scored.',
    },
  };
}

export const CAL_DIFF_PENDING: number[] = [];

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
  q(14, 'A cyclist pedals along a straight road with velocity $v(t) = 2t^2 - 8t + 6$ mi/hr, for $0 \le t \le 3$, where $t$ is measured in hours. Find the distance traveled over the interval $[0, 3]$.',
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
  q(27, 'Two people start walking from the same point. One person walks west at 2 miles per hour, and the other walks southwest (at an angle $45^\circ$ south of west) at 4 miles per hour. How quickly is the distance between them changing after 40 minutes? Round your answer to the nearest hundredth.',
    ['2.59 mph', '2.95 mph', '5.29 mph', '5.92 mph'], 2),
  q(28, 'A plate in the shape of an equilateral triangle expands with time. A side increases at a constant rate of 2 cm/hr. At what rate is the area increasing when a side is 8 cm?',
    ['$9\sqrt{3}\ \mathrm{cm^2/hr}$', '$6\sqrt{3}\ \mathrm{cm^2/hr}$', '$7\sqrt{2}\ \mathrm{cm^2/hr}$', '$8\sqrt{3}\ \mathrm{cm^2/hr}$'], 3),
  q(29, 'A plane flying parallel to level ground at a constant rate of 600 mi/hr approaches a radar station. If the altitude of the plane is 2mi, how fast is the distance between the plane and the radar station decreasing when the horizontal distance between them is 1.5 mi?',
    ['-380 mi/hr', '-320 mi/hr', '-340 mi/hr', '-360 mi/hr'], 3),
  q(30, 'A man on a dock is pulling in a boat by means of a rope attached to the bow of the boat 1 foot above water level and passing through a simple pulley located on the dock 8 feet above water level. If he pulls in the rope at a rate of 2 ft/sec, how fast is the boat approaching the dock when the bow of the boat is 25 feet from a point that is directly below the pulley?',
    ['1.80 ft/s', '1.08 ft/s', '2.80 ft/s', '2.08 ft/s'], 3),
  q(31, 'The figure shows a rope running through a pulley at $P$ and bearing a weight $W$ at one end. The other end is held 5 ft above the ground in the hand $M$ of a worker. Suppose the pulley is 25 ft above ground, the rope is 45 ft long, and the worker is walking rapidly away from the vertical line $PW$ at the rate of 4 ft/sec. How fast is the weight being raised when the worker\u2019s hand is 21 ft away from $PW$?',
    ['2.7 ft/sec', '2.9 ft/sec', '2.5 ft/sec', '2.3 ft/sec'], 3),
  q(32, 'The period (in seconds) for a pendulum of length L in. to complete one oscillation is equal to $P = 0.324\sqrt{L}$. Find the rate of change of the period with respect to length when the length is 9.00 in.',
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
];

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
];

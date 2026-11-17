/**
 * Calculus — Differential Calculus (partial).
 *
 * Source: Margallo's Buckling practice set, "Calculus", pages 1–6.
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
 * Items 1–4 are transcribed; the rest of the section is still to come. Those
 * four are paraphrased rather than verbatim and should be re-read at 3–4× and
 * rewritten before the section is extended.
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

export const CAL_DIFF_PENDING = [5];

export const CAL_DIFF: TopicQuestion[] = [
  q(1, 'Find dy/dx for the curve x = t, y = 2\u221at, for t \u2265 0. Interpret the result and determine the points (if any) at which the curve has a horizontal or a vertical tangent line.',
    ['2/\u221at', '\u221at', '\u221at/2', '1/\u221at'], 1),
  q(2, 'A particle\u2019s position in the xy plane at any time t is given by x = 2t\u00b2 + 3 and y = t\u2074. Find the x-component of the particle\u2019s velocity at time t = 5. (Take the derivative with respect to t.)',
    ['10', '30', '20', '40'], 1),
  q(3, 'The lapse rate is the rate at which the temperature T decreases in the atmosphere with respect to increasing altitude z, defined by \u03b3 = \u2212dT/dz, reported in \u00b0C/km. When the lapse rate rises above 7\u00b0C/km in a layer, it indicates favourable conditions for thunderstorm and tornado formation. Suppose the temperature at z = 2.9 km is T = 7.6\u00b0C and at z = 5.6 km is T = \u221214.3\u00b0C, and the temperature function is continuous and differentiable at all altitudes of interest. What can a meteorologist conclude from these data?',
    ['Increased likelihood of severe storms', 'Decreased likelihood of severe storms', 'No change in weather condition', 'Cannot determine'], 1),
  q(4, 'Given the cost function C(x) = 100 + 8x + 0.1x\u00b2, find the marginal cost when x = 50. (dC/dx \u2248 cost of producing one more unit.)',
    ['17', '18', '19', '20'], 1),
];

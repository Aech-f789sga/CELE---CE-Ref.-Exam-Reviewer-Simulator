/**
 * Shared plumbing for the Basic Mathematics topics (Algebra, Trigonometry,
 * Geometry) of Margallo's Buckling Review Center practice set.
 *
 * The booklet prints one answer key covering all 269 items, numbered straight
 * through the three sections: Algebra 1-125, Trigonometry 126-189, Geometry
 * 190-269. The key lives here once so the three per-topic modules can stay
 * purely declarative and cannot drift apart.
 *
 * The figure wiring lives here for the same reason: all 24 pages were audited
 * for drawings, and the sixteen that carry one are cropped into
 * `public/images/basicmath/` and attached by `bmFigure`. Keeping the map in one
 * place means the three topic modules never repeat the boilerplate, and an item
 * only gains a figure by appearing in `BM_FIGURES`.
 */
import type { TopicQuestion } from './topicBanks';

/** Printed key, items 1-269. Index is `number - 1`. */
export const BM_KEY: string[] = [
  'A', 'B', 'B', 'C', 'A', 'D', 'C', 'C', 'A', 'C',
  'A', 'C', 'B', 'C', 'D', 'B', 'D', 'A', 'C', 'C',
  'B', 'A', 'B', 'C', 'D', 'A', 'A', 'B', 'B', 'C',
  'A', 'B', 'B', 'B', 'A', 'D', 'C', 'B', 'C', 'A',
  'D', 'B', 'C', 'B', 'A', 'A', 'C', 'B', 'D', 'A',
  'A', 'A', 'B', 'C', 'C', 'D', 'C', 'A', 'B', 'C',
  'B', 'A', 'C', 'B', 'B', 'A', 'C', 'B', 'B', 'C',
  'A', 'D', 'C', 'A', 'B', 'A', 'D', 'D', 'A', 'D',
  'C', 'D', 'C', 'A', 'D', 'B', 'B', 'C', 'C', 'C',
  'A', 'D', 'A', 'C', 'D', 'C', 'D', 'C', 'B', 'A',
  'A', 'A', 'A', 'D', 'A', 'A', 'B', 'C', 'D', 'C',
  'B', 'C', 'D', 'B', 'B', 'A', 'A', 'B', 'B', 'C',
  'B', 'B', 'B', 'B', 'B', 'A', 'D', 'B', 'C', 'A',
  'B', 'B', 'C', 'A', 'D', 'D', 'B', 'A', 'C', 'A',
  'D', 'B', 'C', 'D', 'A', 'C', 'B', 'D', 'B', 'D',
  'D', 'A', 'A', 'D', 'B', 'B', 'B', 'C', 'C', 'C',
  'D', 'C', 'D', 'B', 'C', 'D', 'B', 'C', 'A', 'C',
  'B', 'A', 'C', 'B', 'D', 'D', 'C', 'A', 'D', 'B',
  'C', 'A', 'B', 'A', 'D', 'A', 'D', 'C', 'B', 'D',
  'A', 'A', 'C', 'C', 'A', 'B', 'C', 'D', 'B', 'B',
  'C', 'B', 'C', 'A', 'A', 'D', 'B', 'C', 'C', 'A',
  'A', 'B', 'D', 'B', 'C', 'A', 'A', 'C', 'B', 'A',
  'A', 'C', 'D', 'B', 'B', 'C', 'B', 'A', 'D', 'B',
  'A', 'B', 'D', 'D', 'C', 'B', 'D', 'B', 'B', 'A',
  'B', 'C', 'D', 'B', 'C', 'D', 'A', 'B', 'A', 'B',
  'C', 'B', 'B', 'C', 'A', 'A', 'A', 'C', 'A', 'D',
  'B', 'A', 'B', 'A', 'C', 'D', 'C', 'D', 'C',
];

/**
 * Figures cropped from the booklet into `public/images/basicmath/`, keyed by
 * item number. Only items whose page actually prints a drawing are listed.
 *
 * The booklet is a tiled raster scan, so each figure was located by eye on a
 * 1.5× page render and then cut at 3.4–4.2×; every crop was viewed back to
 * confirm the whole drawing was inside the box and no item text bled in.
 *
 *   item  page  drawing
 *     32     3  bar chart, "Life Objectives of College Freshmen, 1969–2009"
 *    107    10  cantilever beam, deflection curve, l / x / y dimensions
 *    175    15  triangle A-B-C across a river, 200 ft, 82° and 52°
 *    178    15  quadrilateral A-B-C-D with both diagonals dashed
 *    190    17  map of Foxton and Grimley with the new and abandoned roads
 *    191    17  flagpole guyed by two wires
 *    217    18  circular sheet with the rectangle cut from it
 *    223    19  two rollers, 23.4 in and 15.8 in, centres 38.8 in apart
 *    224    19  seven equal cables inside a circular conduit
 *    246    21  rectangular sheet (x by y) beside the cylinder it forms
 *    247    21  frustum of a cone with a / b / h dimensions
 *    256    22  wall cross-section, inside/outside faces, t_i and t_o
 *    259    23  satellite dish, 12 ft across and 2 ft deep
 *    260    23  parabolic arch over a roadway, 115 m and 224 m
 *    261    23  football field marked x = −20, 0, 20
 *    268    24  semi-elliptical bridge arch, 30 ft span and 10 ft rise
 */
const BM_FIGURES: Record<number, string> = {
  32: 'bm-q32',
  107: 'bm-q107',
  175: 'bm-q175',
  178: 'bm-q178',
  190: 'bm-q190',
  191: 'bm-q191',
  217: 'bm-q217',
  223: 'bm-q223',
  224: 'bm-q224',
  246: 'bm-q246',
  247: 'bm-q247',
  256: 'bm-q256',
  259: 'bm-q259',
  260: 'bm-q260',
  261: 'bm-q261',
  268: 'bm-q268',
};

/**
 * `figureSvg` is injected with `dangerouslySetInnerHTML`, so it must be HTML,
 * not a bare URL — a URL string would render as text.
 */
function bmFigure(n: number): string | undefined {
  const slug = BM_FIGURES[n];
  if (!slug) return undefined;
  return `<div class="flex flex-col items-center justify-center w-full py-2">
  <img
    src="/images/basicmath/${slug}.png"
    alt="Basic Mathematics question ${n} figure"
    class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200"
    loading="eager"
  />
</div>`;
}

/**
 * Builds the `q(number, stem, [a, b, c, d], page)` helper each topic module
 * uses. The answer is looked up from `BM_KEY` rather than typed per item, so a
 * transcription slip can never silently disagree with the printed key.
 */
export function makeBmItem(
  topicId: string,
  category: string,
  idPrefix: string
): (
  number: number,
  text: string,
  opts: [string, string, string, string],
  page: number
) => TopicQuestion {
  return (number, text, opts, page) => ({
    id: `${idPrefix}-${number}`,
    number,
    pageNumber: page,
    subject: 'MSTC',
    year: 0,
    month: 'May',
    category,
    text,
    options: opts.map((t, i) => ({ label: 'ABCD'[i] as 'A', text: t })),
    correctAnswer: (BM_KEY[number - 1] ?? 'A') as 'A' | 'B' | 'C' | 'D',
    figureSvg: bmFigure(number),
    figureCaption: `Question ${number}`,
    referenceSource: 'Gillesania',
    topicId,
    solution: {
      summary: 'Printed key only — this booklet carries no worked solutions.',
      steps: [],
      finalAnswer: BM_KEY[number - 1] ?? '',
    },
  });
}

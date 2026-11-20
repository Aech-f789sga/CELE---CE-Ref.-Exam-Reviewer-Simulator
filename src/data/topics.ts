/**
 * Turning a question's free-text `category` into a topic bucket.
 *
 * `category` is a *title*, not a taxonomy. Across the banks there are 2,474
 * distinct strings for 3,034 questions — "Trigonometry & Building Design -
 * Solar Overhang Length" describes one item, so grouping by the raw string
 * produces one bucket per question and no analytics at all.
 *
 * Two cheaper approaches fail:
 *
 *   - Splitting on " - " leaves 398 distinct heads, still full of aliases
 *     ("Geotechnical" vs "Geotechnical Engineering", "Steel Design" vs
 *     "Structural Steel Design").
 *   - A hand-written alias table for 398 heads is unmaintainable and silently
 *     rots the moment a new paper is transcribed.
 *
 * So classification is keyword-driven and **scoped to the subject**, which is
 * the strongest signal available: a PSAD paper can never contain a question
 * about open-channel flow, so the candidate set drops from 26 topics to 8
 * before any text is read. Among the topics that do match, the one whose
 * keyword appears **earliest in the string** wins, then the longest keyword.
 * Position beats length because titles lead with their subject: "Integral
 * Calculus & Economics" is a calculus item, and "Concrete Technology &
 * Statistics" is a concrete item, even though the trailing word is longer.
 *
 * Anything that matches nothing returns `null` rather than a guess. Callers
 * must report unmapped items as a count, never fold them into a topic — a
 * wrong bucket is worse than an admitted gap, because it silently moves a
 * weakness out of the "study this" list.
 */
import type { SubjectArea } from '../types/exam';

export interface TopicDef {
  id: string;
  label: string;
  subject: SubjectArea;
  /** Matched as a substring of the lowercased category. Order is irrelevant. */
  keywords: string[];
}

/**
 * The canonical buckets, grouped by subject. Keywords are deliberately
 * specific where a generic word would swallow a neighbour — "reinforced
 * concrete" is listed before bare "concrete", and "mechanics of materials"
 * before "mechanics".
 */
export const TOPICS: TopicDef[] = [
  // ── MSTC: Mathematics, Surveying & Transportation ────────────────────────
  {
    id: 'surveying',
    label: 'Surveying & Earthwork',
    subject: 'MSTC',
    keywords: [
      'surveying', 'survey', 'earthwork', 'azimuth', 'bearing', 'leveling', 'levelling',
      'stadia', 'topographic', 'parcel', 'lot area', 'subdivision', 'traverse',
    ],
  },
  {
    id: 'highway',
    label: 'Highway & Transportation',
    subject: 'MSTC',
    keywords: [
      'highway', 'transportation', 'traffic', 'pavement', 'road', 'skidding',
      'logistics', 'vehicle', 'transit', 'trip generation', 'parking',
    ],
  },
  {
    id: 'construction',
    label: 'Construction Management & Safety',
    subject: 'MSTC',
    keywords: [
      'construction', 'safety', 'contract', 'estimat', 'project management',
      'fire protection', 'building', 'architectural', 'cpm', 'pert',
    ],
  },
  {
    id: 'engineering-economy',
    label: 'Engineering Economy',
    subject: 'MSTC',
    keywords: [
      'econom', 'financial', 'annuity', 'depreciation', 'accounting', 'interest',
      'present worth', 'rate of return', 'break-even',
    ],
  },
  {
    id: 'calculus',
    label: 'Calculus',
    subject: 'MSTC',
    keywords: [
      'calculus', 'derivative', 'integral', 'related rates', 'optimization',
      'maxima', 'minima', 'differential equation',
    ],
  },
  {
    id: 'algebra',
    label: 'Algebra',
    subject: 'MSTC',
    keywords: [
      'algebra', 'equation', 'sequence', 'series', 'variation', 'inequality',
      'function', 'quadratic', 'logarithm', 'matrix', 'binomial',
    ],
  },
  {
    id: 'trigonometry',
    label: 'Trigonometry',
    subject: 'MSTC',
    keywords: ['trigonometry', 'trigonometric', 'spherical', 'sine', 'cosine', 'oblique triangle'],
  },
  {
    id: 'analytic-geometry',
    label: 'Analytic Geometry',
    subject: 'MSTC',
    keywords: [
      'analytic geometry', 'analytical geometry', 'coordinate', 'conic',
      'parabola', 'ellipse', 'hyperbola', 'locus',
    ],
  },
  {
    id: 'geometry',
    label: 'Plane & Solid Geometry',
    subject: 'MSTC',
    keywords: [
      'geometry', 'mensuration', 'polygon', 'circle', 'area', 'volume',
      'prism', 'cone', 'cylinder', 'sphere', 'pyramid', 'frustum',
    ],
  },
  {
    id: 'probability',
    label: 'Probability & Statistics',
    subject: 'MSTC',
    keywords: [
      'probabilit', 'statistic', 'combinatoric', 'counting', 'permutation',
      'combination', 'regression', 'correlation', 'standard deviation', 'variance',
    ],
  },
  {
    id: 'applied-math',
    label: 'Applied Mathematics & Physics',
    subject: 'MSTC',
    keywords: [
      'chemistry', 'physics', 'graph theory', 'game theory', 'clock',
      'kinematics', 'dynamics', 'impulse', 'momentum', 'work-energy',
      'vector', 'geometric sequence', 'arithmetic sequence', 'complex number',
      'progression', 'growth', 'decay', 'collision', 'numerical integration',
      'discrete', 'set theory', 'counting technique',
    ],
  },
  {
    /*
     * MSTC papers carry a general-engineering tail that is not mathematics,
     * surveying or transportation: statics, strength of materials, machine
     * design, electrical and acoustics items all appear under this subject.
     * Without their own bucket they fell through as "uncategorised" and the
     * learner's real weakness in them stayed invisible.
     */
    id: 'engineering-sciences',
    label: 'General Engineering Sciences',
    subject: 'MSTC',
    keywords: [
      'engineering mechanics', 'strength of materials', 'mechanics', 'statics',
      'hydraulics', 'concrete', 'materials engineering', 'machine design',
      'electrical', 'acoustics', 'thermodynamics', 'fluid',
    ],
  },
  {
    id: 'coastal',
    label: 'Coastal & Port Engineering',
    subject: 'MSTC',
    keywords: ['coastal', 'port', 'harbor', 'harbour', 'breakwater', 'tide'],
  },

  // ── HPGE: Hydraulics & Geotechnical ──────────────────────────────────────
  {
    id: 'fluid-statics',
    label: 'Fluid Statics',
    subject: 'HPGE',
    keywords: [
      'fluid static', 'hydrostatic', 'pressure', 'buoyancy', 'flotation',
      'manometer', 'centre of pressure', 'center of pressure', 'submerged',
      'fluid properties', 'surface tension', 'fluid mechanics',
    ],
  },
  {
    id: 'fluid-flow',
    label: 'Fluid Flow & Open Channel',
    subject: 'HPGE',
    keywords: [
      'open channel', 'fluid flow', 'flow', 'discharge', 'energy head',
      'hydraulic grade', 'orifice', 'weir', 'unsteady', 'pipe network',
      'bernoulli', 'reynolds', 'friction loss', 'classification',
    ],
  },
  {
    id: 'hydraulics',
    label: 'Hydraulics & Machinery',
    subject: 'HPGE',
    keywords: [
      'hydraulic machinery', 'hydraulics', 'pump', 'turbine', 'machinery',
      'venturi', 'water hammer', 'specific speed', 'hydroelectric',
    ],
  },
  {
    id: 'soil-mechanics',
    label: 'Soil Mechanics',
    subject: 'HPGE',
    keywords: [
      'soil', 'effective stress', 'compaction', 'grain-size', 'grain size',
      'clay', 'shear strength', 'consolidation', 'permeability', 'atterberg',
      'sieve', 'moisture', 'plasticity', 'void ratio',
    ],
  },
  {
    id: 'geotechnical',
    label: 'Geotechnical & Foundation',
    subject: 'HPGE',
    keywords: [
      'geotech', 'bearing capacity', 'foundation', 'settlement', 'terzaghi',
      'slope stability', 'lateral earth', 'retaining wall', 'pile',
    ],
  },
  {
    id: 'environmental',
    label: 'Environmental Engineering',
    subject: 'HPGE',
    keywords: ['environmental', 'water treatment', 'wastewater', 'pollution', 'solid waste'],
  },
  {
    id: 'hydrology',
    label: 'Hydrology',
    subject: 'HPGE',
    keywords: ['hydrology', 'rainfall', 'runoff', 'watershed', 'precipitation', 'flood'],
  },

  // ── PSAD: Structural Analysis & Design ───────────────────────────────────
  {
    id: 'steel-design',
    label: 'Structural Steel Design',
    subject: 'PSAD',
    keywords: [
      'structural steel', 'steel design', 'steel', 'welded', 'weld', 'bolt',
      'base plate', 'plate girder', 'aisc', 'purlin', 'built-up', 'connection',
    ],
  },
  {
    id: 'prestressed',
    label: 'Prestressed Concrete',
    subject: 'PSAD',
    keywords: ['prestressed', 'pre-stressed', 'post-tension', 'pre-tension'],
  },
  {
    id: 'reinforced-concrete',
    label: 'Reinforced Concrete',
    subject: 'PSAD',
    keywords: [
      'reinforced concrete', 'rc design', 'concrete', 'rebar', 'nscp', 'beam',
      'column', 'slab', 'footing', 'bond stress', 'development length', 't-beam',
    ],
  },
  {
    id: 'structural-analysis',
    label: 'Structural Analysis',
    subject: 'PSAD',
    keywords: [
      'structural analysis', 'indeterminate', 'truss', 'influence line',
      'frame', 'deflection', 'moment distribution', 'slope deflection',
      'statically', 'structural mechanics', 'seismolog', 'seismic',
      'moving load', 'combined load',
    ],
  },
  {
    id: 'mechanics-materials',
    label: 'Mechanics of Deformable Bodies',
    subject: 'PSAD',
    keywords: [
      'mechanics of deformable', 'mechanics of materials', 'axial deformation',
      'torsion', 'thermal stress', 'pressure vessel', 'strain', 'flexure',
      'bending stress', 'mohr', 'thin-walled', 'combined stress',
      'mechanical properties',
    ],
  },
  {
    id: 'statics',
    label: 'Statics & Engineering Mechanics',
    subject: 'PSAD',
    keywords: [
      'statics', 'engineering mechanics', 'equilibrium', 'friction', 'centroid',
      'reaction', 'resultant', 'moment of inertia', 'cable',
    ],
  },
  {
    id: 'timber',
    label: 'Timber Design',
    subject: 'PSAD',
    keywords: ['timber', 'wood', 'lumber'],
  },
  {
    id: 'foundation',
    label: 'Foundation Design',
    subject: 'PSAD',
    keywords: ['foundation', 'pile', 'retaining wall', 'mat foundation'],
  },
];

const TOPIC_BY_ID = new Map(TOPICS.map((t) => [t.id, t]));

/** Topics available to a subject, in declaration order. */
export function topicsForSubject(subject: SubjectArea): TopicDef[] {
  return TOPICS.filter((t) => t.subject === subject);
}

export function topicById(id: string): TopicDef | undefined {
  return TOPIC_BY_ID.get(id);
}

/**
 * The descriptive part of a category, before its em-dash or hyphen separator.
 *
 * "Fluid Mechanics — Pressure" → "Fluid Mechanics"
 * "Algebra & Geometry"        → "Algebra & Geometry" (no separator)
 */
export function categoryHead(category: string): string {
  return category.split(/\s+[—–-]\s+/)[0].trim();
}

interface Match {
  topic: TopicDef;
  index: number;
  length: number;
}

/**
 * Map a free-text category onto a canonical topic id for the given subject.
 *
 * Returns `null` when nothing matches — callers must surface that as an
 * "uncategorised" count rather than inventing a bucket.
 */
export function normaliseTopic(category: string, subject: SubjectArea): string | null {
  if (!category) return null;

  const candidates = topicsForSubject(subject);
  if (candidates.length === 0) return null;

  const head = categoryHead(category).toLowerCase();
  const full = category.toLowerCase();

  // The head is tried first: it is where the author named the subject. Only if
  // it yields nothing do we read the whole title, which rescues heads like
  // "Fluid Mechanics" whose real subject lives after the dash.
  for (const haystack of [head, full]) {
    let best: Match | null = null;

    for (const topic of candidates) {
      for (const keyword of topic.keywords) {
        const index = haystack.indexOf(keyword);
        if (index === -1) continue;

        const candidate: Match = { topic, index, length: keyword.length };
        if (
          best === null ||
          candidate.index < best.index ||
          (candidate.index === best.index && candidate.length > best.length)
        ) {
          best = candidate;
        }
      }
    }

    if (best) return best.topic.id;
  }

  return null;
}

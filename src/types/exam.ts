export type SubjectArea = 'MSTC' | 'HPGE' | 'PSAD';

export type ExamMonth = 'March' | 'May' | 'November' | 'April' | 'October';

/**
 * Which review reference a question set was transcribed from.
 *
 * - `Gillesania` — the PRC board-examination compilations (printed A–D choices
 *   plus a printed answer key at the back of the booklet).
 * - `Besavilla` — the solved-problem review books, where each "situation" is
 *   split into a/b/c sub-parts and the worked solution is printed directly
 *   underneath. Those items carry no choices, so they are answered by
 *   self-marking after the scanned solution is revealed.
 */
export type ReferenceSource = 'Gillesania' | 'Besavilla';

export const REFERENCE_SOURCES: ReferenceSource[] = ['Gillesania', 'Besavilla'];

export const REFERENCE_SOURCE_META: Record<
  ReferenceSource,
  { label: string; author: string; blurb: string; badge: string }
> = {
  Gillesania: {
    label: 'Gillesania',
    author: 'Diego Inocencio T. Gillesania',
    blurb: 'PRC board exam compilations with printed answer keys',
    badge: 'Vol 4–6',
  },
  Besavilla: {
    label: 'Besavilla',
    author: 'Venancio I. Besavilla Jr.',
    blurb: 'Solved-problem review book — reveal & self-mark',
    badge: 'Solved Problems',
  },
};

export type TimerMode = 'exam_timer' | 'stopwatch' | 'no_limit';

export type ExamMode = 'interactive' | 'non_interactive';

export interface SubjectConfig {
  code: SubjectArea;
  name: string;
  fullName: string;
  description: string;
  referenceBook?: string;
  weight: number; // e.g. 0.35 for 35%
  weightPercent: number; // 35
  defaultMinutes: number; // 300 for MSTC (5h), 240 for HPGE (4h), 360 for PSAD (6h)
  defaultHoursLabel: string;
  color: string;
  accentColor: string;
  badgeBg: string;
  borderColor: string;
}

export const SUBJECT_CONFIGS: Record<SubjectArea, SubjectConfig> = {
  MSTC: {
    code: 'MSTC',
    name: 'Mathematics, Surveying & Transportation',
    fullName: 'Mathematics, Surveying and Transportation Engineering',
    description: 'Algebra, Calculus, Economy, Surveying, Highway, Traffic & Transportation',
    referenceBook: 'Gillesania CE Reference Book Volume 4-6',
    weight: 0.35,
    weightPercent: 35,
    defaultMinutes: 300, // 5 hours
    defaultHoursLabel: '5 Hours (Standard PRC)',
    color: 'amber',
    accentColor: 'text-amber-400',
    badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    borderColor: 'border-amber-500',
  },
  HPGE: {
    code: 'HPGE',
    name: 'Hydraulics & Geotechnical Engineering',
    fullName: 'Hydraulics and Geotechnical Engineering',
    description: 'Fluid Mechanics, Pipe Flow, Open Channel, Soil Mechanics & Foundation',
    referenceBook: 'Gillesania CE Reference Book Volume 4-6',
    weight: 0.30,
    weightPercent: 30,
    defaultMinutes: 240, // 4 hours
    defaultHoursLabel: '4 Hours (Standard PRC)',
    color: 'cyan',
    accentColor: 'text-cyan-400',
    badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    borderColor: 'border-cyan-500',
  },
  PSAD: {
    code: 'PSAD',
    name: 'Structural Analysis & Design',
    fullName: 'Principles of Structural Analysis and Design',
    description: 'Statics, Strength of Materials, Concrete NSCP 2015, Steel AISC, Timber',
    referenceBook: 'Gillesania CE Reference Book Volume 4-6',
    weight: 0.35,
    weightPercent: 35,
    defaultMinutes: 360, // 6 hours
    defaultHoursLabel: '6 Hours (Standard PRC)',
    color: 'emerald',
    accentColor: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    borderColor: 'border-emerald-500',
  },
};

export interface QuestionOption {
  label: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface QuestionSolution {
  summary: string;
  steps: string[];
  formulas?: string[];
  finalAnswer: string;
  pageNumber?: number; // Corresponding solution page (e.g. Page 11 - 33)
  /**
   * Last page of a multi-page solution, when the worked solution spills over
   * more than one booklet page.
   */
  pageNumberEnd?: number;
  /**
   * Scanned worked-solution crops taken from the source booklet. When present,
   * the UI shows these images as the solution instead of the text breakdown.
   */
  images?: string[];
}

export interface Question {
  id: string;
  number: number;
  pageNumber: number; // Page 1 to 10
  subject: SubjectArea;
  year: number;
  month: ExamMonth;
  category: string;
  text: string;
  figureSvg?: string;
  figureCaption?: string;
  figureWidth?: number;
  options: QuestionOption[];
  /**
   * The printed key. Worked-solution items (Besavilla) have no choices, so the
   * learner self-marks: {@link SELF_MARK_SOLVED} records "I solved it" and
   * {@link SELF_MARK_MISSED} records "I missed it". Both are stored in the same
   * answer map so scoring, the palette and paused sessions need no extra state.
   */
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  /**
   * `true` for Besavilla-style worked examples: no A–D choices, the scanned
   * worked solution is revealed on demand and the learner marks themselves.
   */
  workedSolution?: boolean;
  /** Which review reference the item was transcribed from. */
  referenceSource?: ReferenceSource;
  solution: QuestionSolution;
}

/** Answer label written when the learner reports solving a worked item. */
export const SELF_MARK_SOLVED = 'A';
/** Answer label written when the learner reports missing a worked item. */
export const SELF_MARK_MISSED = 'B';

export interface ExamAttempt {
  id: string;
  attemptIndexInSubject: number; // 1st, 2nd, etc. for this subject
  subject: SubjectArea;
  year: number;
  month: ExamMonth;
  /** Review reference the paper came from (absent on pre-Besavilla attempts). */
  source?: ReferenceSource;
  date: string; // ISO string
  timeSpentSeconds: number;
  timerMode: TimerMode;
  isInteractive: boolean;
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  score: number;
  totalQuestions: number;
  ratingPercentage: number;
  passedArea: boolean; // >= 50%
  scratchpadId?: string; // Linked rough sheets document ID
}

export interface PairedCycle {
  cycleNumber: number; // 1 = paired Attempt 1 across all 3 subjects
  mstcAttempt?: ExamAttempt;
  hpgeAttempt?: ExamAttempt;
  psadAttempt?: ExamAttempt;
  isComplete: boolean; // all 3 subjects taken
  compositeRating: number | null; // (MSTC*0.35 + HPGE*0.30 + PSAD*0.35)
  isPassed: boolean | null; // composite >= 70% AND all >= 50%
  failureReason?: string;
}

export interface PausedExamSession {
  id: string; // e.g. `paused-${subject}-${year}-${month}`
  subject: SubjectArea;
  year: number;
  month: ExamMonth;
  /** Review reference the paused paper came from (defaults to Gillesania). */
  source?: ReferenceSource;
  timerMode: 'stopwatch' | 'no_limit';
  examMode: 'interactive';
  currentIndex: number;
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  flaggedQuestions: Record<string, boolean>;
  secondsElapsed: number;
  savedAt: string; // ISO string
  totalQuestions: number;
  answeredCount: number;
  scratchpadId?: string; // Linked rough sheets document ID
}


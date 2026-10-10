export type SubjectArea = 'MSTC' | 'HPGE' | 'PSAD';

export type ExamMonth = 'May' | 'November' | 'April' | 'October';

export type TimerMode = 'exam_timer' | 'stopwatch' | 'no_limit';

export type ExamMode = 'interactive' | 'non_interactive';

export interface SubjectConfig {
  code: SubjectArea;
  name: string;
  fullName: string;
  description: string;
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
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  solution: QuestionSolution;
}

export interface ExamAttempt {
  id: string;
  attemptIndexInSubject: number; // 1st, 2nd, etc. for this subject
  subject: SubjectArea;
  year: number;
  month: ExamMonth;
  date: string; // ISO string
  timeSpentSeconds: number;
  timerMode: TimerMode;
  isInteractive: boolean;
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  score: number;
  totalQuestions: number;
  ratingPercentage: number;
  passedArea: boolean; // >= 50%
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

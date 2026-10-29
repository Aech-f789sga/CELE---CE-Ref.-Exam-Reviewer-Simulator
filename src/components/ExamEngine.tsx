import React, { useState, useEffect, useRef } from 'react';
import {
  Question,
  SubjectArea,
  TimerMode,
  ExamMode,
  ExamMonth,
  ReferenceSource,
  SUBJECT_CONFIGS,
  SELF_MARK_SOLVED,
  SELF_MARK_MISSED,
} from '../types/exam';
import {
  Clock,
  Timer,
  ChevronLeft,
  ChevronRight,
  Flag,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Send,
  AlertTriangle,
  Lightbulb,
  FileText,
  RotateCcw,
  Pause,
  Play,
  BookmarkCheck,
  PenTool,
  Gauge,
  Zap,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Activity,
  Eye,
  ThumbsUp,
  ThumbsDown,
} from 'lucide-react';
import { EngineeringFigure } from './EngineeringFigure';
import { SolutionFigures } from './SolutionFigures';
import { MathView } from './MathView';
import { deletePausedSession, getExamStorageBase } from '../utils/storage';
import { Scratchpad } from './Scratchpad';
import { syncExamScratchpadRecord } from '../utils/scratchpadStorage';

interface ExamEngineProps {
  subject: SubjectArea;
  year: number;
  month: ExamMonth;
  /** Review reference the paper came from; namespaces the scratchpad. */
  source?: ReferenceSource;
  questions: Question[];
  timerMode: TimerMode;
  totalDurationSeconds: number;
  examMode: ExamMode;
  initialCurrentIndex?: number;
  initialUserAnswers?: Record<string, 'A' | 'B' | 'C' | 'D'>;
  initialFlaggedQuestions?: Record<string, boolean>;
  initialSecondsElapsed?: number;
  onSubmit: (userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>, timeSpentSeconds: number) => void;
  onExit: () => void;
  onSaveAndExit?: (state: {
    currentIndex: number;
    userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
    flaggedQuestions: Record<string, boolean>;
    secondsElapsed: number;
  }) => void;
}

export const ExamEngine: React.FC<ExamEngineProps> = ({
  subject,
  year,
  month,
  source = 'Gillesania',
  questions,
  timerMode,
  totalDurationSeconds,
  examMode,
  initialCurrentIndex,
  initialUserAnswers,
  initialFlaggedQuestions,
  initialSecondsElapsed,
  onSubmit,
  onExit,
  onSaveAndExit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialCurrentIndex ?? 0);
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>(initialUserAnswers ?? {});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>(initialFlaggedQuestions ?? {});
  const [secondsRemaining, setSecondsRemaining] = useState(totalDurationSeconds);
  const [secondsElapsed, setSecondsElapsed] = useState(initialSecondsElapsed ?? 0);
  const [isPaused, setIsPaused] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showSolutionForCurrent, setShowSolutionForCurrent] = useState(false);
  const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
  const [isScratchpadDocked, setIsScratchpadDocked] = useState(false);
  const [showPacingDetails, setShowPacingDetails] = useState(false);

  const subjectConfig = SUBJECT_CONFIGS[subject];
  const examStorageBase = getExamStorageBase(subject, year, month, source);
  const examStoragePrefix = `${examStorageBase}_`;
  const currentQuestion = questions[currentIndex];
  const isInteractive = examMode === 'interactive';
  const isPauseEligible = isInteractive && (timerMode === 'stopwatch' || timerMode === 'no_limit');
  /** Besavilla-style worked example: no A–D choices, self-marked after reveal. */
  const isWorkedItem = !!currentQuestion?.workedSolution;

  // Timer reference
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);

      if (timerMode === 'exam_timer') {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            // Auto submit when timer runs out
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerMode, isPaused]);

  const handleSaveAndExit = () => {
    const storageKeyPrefix = examStoragePrefix;
    syncExamScratchpadRecord({
      subject,
      year,
      month,
      storageKeyPrefix,
    }).catch((e) => console.warn('Failed to sync scratchpad record on pause:', e));

    if (onSaveAndExit) {
      onSaveAndExit({
        currentIndex,
        userAnswers,
        flaggedQuestions,
        secondsElapsed,
      });
    } else {
      onExit();
    }
  };

  const handleDiscardAndExit = () => {
    deletePausedSession(subject, year, month, source);
    onExit();
  };

  // Reset interactive solution open state when switching question
  useEffect(() => {
    setShowSolutionForCurrent(false);
  }, [currentIndex]);

  const handleSelectOption = (label: 'A' | 'B' | 'C' | 'D') => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: label,
    }));
  };

  const handleToggleFlag = () => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));
  };

  const handleSubmit = () => {
    const timeSpent = timerMode === 'exam_timer'
      ? totalDurationSeconds - secondsRemaining
      : secondsElapsed;

    const storageKeyPrefix = examStoragePrefix;
    syncExamScratchpadRecord({
      subject,
      year,
      month,
      storageKeyPrefix,
    }).catch((e) => console.warn('Failed to sync scratchpad record on submit:', e));

    onSubmit(userAnswers, Math.max(1, timeSpent));
  };

  // Format time strings (HH:MM:SS)
  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = questions.length - answeredCount;
  const currentAnswer = userAnswers[currentQuestion?.id];
  const isCurrentCorrect = currentAnswer === currentQuestion?.correctAnswer;

  // ----------------------------------------------------
  // REAL-TIME PACING INDICATOR CALCULATIONS
  // ----------------------------------------------------
  const totalQuestions = questions.length;
  const timeSpent = timerMode === 'exam_timer'
    ? Math.max(0, totalDurationSeconds - secondsRemaining)
    : secondsElapsed;

  // Recommended time allocated per question (in seconds)
  // For exam_timer: total exam seconds / totalQuestions (e.g. 14,400s / 55 = 262s = 4m 22s)
  // For stopwatch / no_limit: standard Philippine Board Exam allotment (~4.0 - 4.36 min per question)
  const targetSecPerQuestion = timerMode === 'exam_timer' && totalDurationSeconds > 0
    ? Math.round(totalDurationSeconds / totalQuestions)
    : (totalQuestions >= 70 ? 240 : 262);

  // Expected progress (questions that should ideally be completed by current timeSpent)
  const expectedQuestionsAnswered = targetSecPerQuestion > 0
    ? timeSpent / targetSecPerQuestion
    : 0;

  // Expected elapsed time for the number of questions answered so far
  const targetTimeForAnsweredCount = answeredCount * targetSecPerQuestion;

  // Delta in seconds: positive means user has saved time (AHEAD), negative means behind schedule
  const paceDeltaSeconds = answeredCount > 0
    ? targetTimeForAnsweredCount - timeSpent
    : Math.round(targetSecPerQuestion - timeSpent);

  const paceDeltaQuestions = answeredCount - expectedQuestionsAnswered;

  // Status classification
  let paceStatus: 'ahead' | 'on_track' | 'behind' = 'on_track';
  if (paceDeltaSeconds > 75 || paceDeltaQuestions > 0.45) {
    paceStatus = 'ahead';
  } else if (paceDeltaSeconds < -75 || paceDeltaQuestions < -0.45) {
    paceStatus = 'behind';
  } else {
    paceStatus = 'on_track';
  }

  // Average time spent per answered question
  const userAvgSecPerQuestion = answeredCount > 0
    ? Math.round(timeSpent / answeredCount)
    : timeSpent;

  // Projected remaining seconds and buffer
  const remainingQuestions = Math.max(0, totalQuestions - answeredCount);
  const projectedRemainingSec = userAvgSecPerQuestion * remainingQuestions;
  const projectedBufferSec = timerMode === 'exam_timer'
    ? secondsRemaining - projectedRemainingSec
    : 0;

  const formatPaceTime = (secs: number) => {
    const abs = Math.abs(secs);
    const m = Math.floor(abs / 60);
    const s = abs % 60;
    if (m === 0) return `${s}s`;
    return `${m}m ${s.toString().padStart(2, '0')}s`;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      {/* Top Sticky Test Bar */}
      <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 sticky top-18 z-30 shadow-xl backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <span className="font-arnie text-xl font-bold text-amber-400">
            {subject}
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-tech-mono">
            {month} {year}
          </span>
          <span className="hidden sm:inline text-xs text-slate-400">
            Booklet p. {currentQuestion?.pageNumber ?? '—'}
          </span>
        </div>

        {/* Timer Display */}
        <div className="flex w-full flex-wrap items-center justify-end gap-2 sm:w-auto sm:gap-4">
          {timerMode === 'exam_timer' && (
            <div className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl border font-tech-mono text-sm font-bold ${
              secondsRemaining < 600
                ? 'bg-rose-500/10 border-rose-500/30 text-rose-400 animate-pulse'
                : 'bg-slate-950 border-slate-800 text-amber-400'
            }`}>
              <Timer className="w-4 h-4" />
              <span>{formatTime(secondsRemaining)}</span>
              <span className="text-[10px] text-slate-400 uppercase hidden sm:inline">Remaining</span>
            </div>
          )}

          {timerMode === 'stopwatch' && (
            <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-xl border bg-slate-950 border-slate-800 font-tech-mono text-sm font-bold text-cyan-400">
              <Clock className="w-4 h-4" />
              <span>{formatTime(secondsElapsed)}</span>
              <span className="text-[10px] text-slate-400 uppercase hidden sm:inline">Elapsed</span>
            </div>
          )}

          {timerMode === 'no_limit' && (
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 text-xs font-medium">
              <span>Untimed Review</span>
            </div>
          )}

          {/* Real-Time Pacing Indicator Badge */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowPacingDetails((prev) => !prev)}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all shadow-sm ${
                paceStatus === 'ahead'
                  ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/25 shadow-emerald-500/10'
                  : paceStatus === 'behind'
                  ? 'bg-rose-500/15 border-rose-500/40 text-rose-300 hover:bg-rose-500/25 shadow-rose-500/10 animate-pulse'
                  : 'bg-amber-500/15 border-amber-500/40 text-amber-300 hover:bg-amber-500/25 shadow-amber-500/10'
              }`}
              title="Click to view real-time pacing breakdown and speed management"
            >
              {paceStatus === 'ahead' && <Zap className="w-3.5 h-3.5 text-emerald-400" />}
              {paceStatus === 'behind' && <AlertCircle className="w-3.5 h-3.5 text-rose-400" />}
              {paceStatus === 'on_track' && <Gauge className="w-3.5 h-3.5 text-amber-400" />}

              <div className="flex flex-col text-left leading-none">
                <span className="text-[9px] uppercase font-mono tracking-wider opacity-80">
                  Pace: {paceStatus === 'ahead' ? 'Ahead' : paceStatus === 'behind' ? 'Behind' : 'On Track'}
                </span>
                <span className="font-tech-mono font-bold text-xs mt-0.5">
                  {paceStatus === 'ahead' && `+${formatPaceTime(paceDeltaSeconds)}`}
                  {paceStatus === 'behind' && `-${formatPaceTime(paceDeltaSeconds)}`}
                  {paceStatus === 'on_track' && `±${formatPaceTime(Math.abs(paceDeltaSeconds))}`}
                </span>
              </div>

              <span className="text-[10px] opacity-60 ml-0.5 hidden sm:inline">
                {showPacingDetails ? '▲' : '▼'}
              </span>
            </button>

            {/* Interactive Pacing Details Dropdown Popover */}
            {showPacingDetails && (
              <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 p-4 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl z-50 text-xs space-y-3 animate-in fade-in zoom-in-95">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center space-x-1.5 text-slate-200 font-bold">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span>Real-Time Exam Pacing</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase font-mono ${
                    paceStatus === 'ahead'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : paceStatus === 'behind'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  }`}>
                    {paceStatus === 'ahead' ? 'Ahead of Pace' : paceStatus === 'behind' ? 'Behind Schedule' : 'Balanced Pace'}
                  </span>
                </div>

                {/* Pacing Visual Bar: Actual vs Target */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Questions Progress</span>
                    <span className="text-white font-bold">{answeredCount} of {totalQuestions} answered</span>
                  </div>
                  <div className="relative w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    {/* Target Pace Marker */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-cyan-400 z-10 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                      style={{ left: `${Math.min(100, Math.max(0, (expectedQuestionsAnswered / totalQuestions) * 100))}%` }}
                      title={`Target Pace: ${expectedQuestionsAnswered.toFixed(1)} questions`}
                    />
                    {/* User answered bar */}
                    <div
                      className={`h-full transition-all duration-300 ${
                        paceStatus === 'ahead' ? 'bg-emerald-400' : paceStatus === 'behind' ? 'bg-rose-400' : 'bg-amber-400'
                      }`}
                      style={{ width: `${Math.min(100, (answeredCount / totalQuestions) * 100)}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <span>Actual: {answeredCount} Qs</span>
                    <span className="text-cyan-400 font-semibold">Target: {expectedQuestionsAnswered.toFixed(1)} Qs</span>
                  </div>
                </div>

                {/* 2x2 Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800/80">
                    <span className="text-slate-400 block text-[9px] uppercase font-mono">Target Speed</span>
                    <span className="text-white font-bold font-tech-mono">{formatPaceTime(targetSecPerQuestion)} / item</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800/80">
                    <span className="text-slate-400 block text-[9px] uppercase font-mono">Your Speed</span>
                    <span className={`font-bold font-tech-mono ${
                      userAvgSecPerQuestion <= targetSecPerQuestion ? 'text-emerald-400' : 'text-rose-400'
                    }`}>
                      {answeredCount > 0 ? `${formatPaceTime(userAvgSecPerQuestion)} / item` : 'Pending...'}
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800/80">
                    <span className="text-slate-400 block text-[9px] uppercase font-mono">Pace Delta</span>
                    <span className={`font-bold font-tech-mono ${
                      paceStatus === 'ahead' ? 'text-emerald-400' : paceStatus === 'behind' ? 'text-rose-400' : 'text-amber-400'
                    }`}>
                      {paceDeltaSeconds >= 0 ? `+${formatPaceTime(paceDeltaSeconds)} ahead` : `-${formatPaceTime(paceDeltaSeconds)} behind`}
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800/80">
                    <span className="text-slate-400 block text-[9px] uppercase font-mono">Projected Buffer</span>
                    <span className="text-cyan-300 font-bold font-tech-mono">
                      {timerMode === 'exam_timer' 
                        ? (projectedBufferSec >= 0 ? `+${formatPaceTime(projectedBufferSec)} spare` : `-${formatPaceTime(projectedBufferSec)} deficit`)
                        : 'N/A (Untimed)'}
                    </span>
                  </div>
                </div>

                {/* Strategic Pace Coaching Tip */}
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-[10px] text-slate-300 leading-snug">
                  {paceStatus === 'ahead' && (
                    <span className="text-emerald-300">
                      💡 <strong>Ahead of pace:</strong> You have built a comfortable time reserve. Take your time to double-check structural calculations and flagged questions.
                    </span>
                  )}
                  {paceStatus === 'behind' && (
                    <span className="text-rose-300">
                      ⚠️ <strong>Behind pace:</strong> You are currently trailing the target speed. Bookmark complex multi-step problems and answer standard recall items first.
                    </span>
                  )}
                  {paceStatus === 'on_track' && (
                    <span className="text-amber-300">
                      🎯 <strong>Optimal pace:</strong> You are matching the official PRC Civil Engineering board examination pace standard. Maintain this focus!
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <button
            type="button"
            onClick={() => setIsScratchpadOpen((prev) => !prev)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all shadow-sm ${
              isScratchpadOpen
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-cyan-500/20'
                : 'bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white border-cyan-500/30'
            }`}
            title="Toggle persistent scratchpad for rough calculations, drawings & notes"
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>Scratchpad</span>
            {isScratchpadOpen && isScratchpadDocked && (
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-200 uppercase font-mono font-bold">
                Docked
              </span>
            )}
          </button>

          {isPauseEligible && (
            <button
              type="button"
              onClick={() => setIsPaused(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-amber-500/30 text-xs font-semibold cursor-pointer transition-colors shadow-sm"
              title="Pause study session & continue later"
            >
              <Pause className="w-3.5 h-3.5 fill-amber-300" />
              <span>Pause</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setShowSubmitModal(true)}
            className="flex items-center space-x-1.5 px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold font-arnie tracking-wide transition-colors shadow-md cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>SUBMIT EXAM</span>
          </button>

          <button
            type="button"
            onClick={() => setShowExitConfirm(true)}
            className="text-xs text-slate-400 hover:text-slate-200 px-2 py-1 cursor-pointer"
          >
            Exit
          </button>
        </div>
      </div>

      {/* Main Examination Grid */}
      <div className={`grid grid-cols-1 ${
        isScratchpadOpen && isScratchpadDocked
          ? 'xl:grid-cols-12 gap-6'
          : 'lg:grid-cols-4 gap-6'
      }`}>
        {/* Left Column: Question Content */}
        <div className={`${
          isScratchpadOpen && isScratchpadDocked
            ? 'xl:col-span-5 space-y-6'
            : 'lg:col-span-3 space-y-6'
        }`}>
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 relative">
            {/* Header: Question Number & Tags */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <span className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-arnie text-lg font-bold">
                  #{currentIndex + 1}
                </span>
                <div>
                  <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block">
                    {currentQuestion.category}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Booklet Page {currentQuestion.pageNumber} •{' '}
                    {isWorkedItem ? 'Worked solution — reveal & self-mark' : 'Standard 4 Choices'}
                  </span>
                </div>
              </div>

              {/* Flag / Bookmark Button */}
              <button
                type="button"
                onClick={handleToggleFlag}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
                  flaggedQuestions[currentQuestion.id]
                    ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
                <span>{flaggedQuestions[currentQuestion.id] ? 'Flagged' : 'Flag'}</span>
              </button>
            </div>

            {/* Question Text */}
            <div className="space-y-4">
              <div className="font-arnie text-lg sm:text-xl font-medium text-slate-100 leading-relaxed tracking-wide">
                <MathView text={currentQuestion.text} />
              </div>

              {/* Engineering Figure / Diagram (if question has one) */}
              {currentQuestion.figureSvg && (
                <EngineeringFigure
                  figureSvg={currentQuestion.figureSvg}
                  figureCaption={currentQuestion.figureCaption}
                />
              )}
            </div>

            {/* Options List */}
            {!isWorkedItem && (
            <div className="space-y-3 pt-2">
              {currentQuestion.options.map((option) => {
                const isSelected = currentAnswer === option.label;
                const isCorrect = option.label === currentQuestion.correctAnswer;

                let optionStyles = 'border-slate-800 bg-slate-950/60 hover:border-slate-700 text-slate-200';

                if (isSelected && !isInteractive) {
                  optionStyles = 'border-amber-400 bg-amber-500/15 text-white font-medium shadow-md shadow-amber-500/10';
                } else if (isInteractive && currentAnswer) {
                  if (isSelected && isCorrect) {
                    optionStyles = 'border-emerald-500 bg-emerald-500/20 text-emerald-200 shadow-md shadow-emerald-500/10 font-bold';
                  } else if (isSelected && !isCorrect) {
                    optionStyles = 'border-rose-500 bg-rose-500/20 text-rose-200 shadow-md shadow-rose-500/10 font-bold';
                  } else if (isCorrect) {
                    // Show correct answer outline in interactive mode after user clicked
                    optionStyles = 'border-emerald-500/60 bg-emerald-500/10 text-emerald-300';
                  }
                }

                return (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => handleSelectOption(option.label)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-start space-x-3.5 cursor-pointer ${optionStyles}`}
                  >
                    <span className="w-7 h-7 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-xs font-bold font-tech-mono shrink-0">
                      {option.label}
                    </span>
                    <span className="text-sm sm:text-base font-normal leading-relaxed pt-0.5">
                      <MathView text={option.text} />
                    </span>
                  </button>
                );
              })}
            </div>
            )}

            {/* Worked-solution item (Besavilla): reveal, then self-mark */}
            {isWorkedItem && (
              <div className="space-y-4 pt-2">
                <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4 flex items-start space-x-3">
                  <PenTool className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-cyan-100/90 leading-relaxed">
                    This item comes from a <strong className="text-cyan-300">solved-problem review
                    book</strong>, so it has no A–D choices. Work it out on the scratchpad, then
                    reveal the booklet's printed solution and mark yourself honestly — your
                    self-mark is what gets scored.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowSolutionForCurrent((v) => !v)}
                  className={`w-full py-3 rounded-xl border-2 font-bold text-sm font-arnie tracking-wide flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                    showSolutionForCurrent
                      ? 'border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'border-amber-400 bg-amber-500/15 text-amber-300 hover:bg-amber-500/25'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>{showSolutionForCurrent ? 'HIDE WORKED SOLUTION' : 'REVEAL WORKED SOLUTION'}</span>
                </button>

                {showSolutionForCurrent && (
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between text-amber-400 font-semibold border-b border-slate-800 pb-2">
                      <span className="font-arnie text-sm">
                        {currentQuestion.solution.images?.length
                          ? `Worked Solution • ${
                              currentQuestion.solution.pageNumberEnd &&
                              currentQuestion.solution.pageNumberEnd !== currentQuestion.solution.pageNumber
                                ? `Booklet pp. ${currentQuestion.solution.pageNumber}–${currentQuestion.solution.pageNumberEnd}`
                                : `Booklet p. ${currentQuestion.solution.pageNumber ?? '—'}`
                            }`
                          : 'Worked Solution'}
                      </span>
                      <span className="font-tech-mono text-xs">
                        <MathView text={currentQuestion.solution.finalAnswer} />
                      </span>
                    </div>
                    {currentQuestion.solution.images?.length ? (
                      <SolutionFigures
                        images={currentQuestion.solution.images}
                        alt={`${currentQuestion.category} worked solution`}
                      />
                    ) : (
                      <div className="text-xs text-slate-300 italic leading-relaxed">
                        <MathView text={currentQuestion.solution.summary} />
                      </div>
                    )}
                  </div>
                )}

                {/* Self-mark row — only meaningful once the solution is visible */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleSelectOption(SELF_MARK_SOLVED)}
                    className={`py-3 rounded-xl border-2 font-bold text-xs font-arnie tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                      currentAnswer === SELF_MARK_SOLVED
                        ? 'border-emerald-500 bg-emerald-500/20 text-emerald-200'
                        : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-emerald-500/50'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>I SOLVED IT</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectOption(SELF_MARK_MISSED)}
                    className={`py-3 rounded-xl border-2 font-bold text-xs font-arnie tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                      currentAnswer === SELF_MARK_MISSED
                        ? 'border-rose-500 bg-rose-500/20 text-rose-200'
                        : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-rose-500/50'
                    }`}
                  >
                    <ThumbsDown className="w-4 h-4" />
                    <span>I MISSED IT</span>
                  </button>
                </div>

                {currentAnswer && (
                  <div
                    className={`p-3 rounded-xl border text-xs flex items-center space-x-2 ${
                      currentAnswer === SELF_MARK_SOLVED
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                        : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                    }`}
                  >
                    {currentAnswer === SELF_MARK_SOLVED ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 shrink-0" />
                    )}
                    <span className="font-semibold">
                      Self-marked as{' '}
                      {currentAnswer === SELF_MARK_SOLVED ? 'solved' : 'missed'} — counted in your
                      score.
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Interactive Mode Immediate Popups & Solution reveal */}
            {!isWorkedItem && isInteractive && currentAnswer && (
              <div className={`mt-4 p-4 rounded-xl border flex flex-col space-y-3 ${
                isCurrentCorrect
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : 'bg-rose-500/10 border-rose-500/30'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {isCurrentCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold text-sm">
                          CORRECT!
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-400" />
                        <span className="text-rose-400 font-bold text-sm">
                          INCORRECT — Correct Answer is ({currentQuestion.correctAnswer})
                        </span>
                      </>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowSolutionForCurrent(!showSolutionForCurrent)}
                    className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                    <span>{showSolutionForCurrent ? 'Hide Solution' : 'View Solution & Steps'}</span>
                  </button>
                </div>

                {/* Instant Solution Drawer */}
                {showSolutionForCurrent && (
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3 text-xs text-slate-300">
                    <div className="flex items-center justify-between text-amber-400 font-semibold border-b border-slate-800 pb-2">
                      <span className="font-arnie text-sm">
                        {currentQuestion.solution.images?.length
                          ? `Worked Solution • ${currentQuestion.solution.pageNumberEnd && currentQuestion.solution.pageNumberEnd !== currentQuestion.solution.pageNumber ? `Booklet pp. ${currentQuestion.solution.pageNumber}–${currentQuestion.solution.pageNumberEnd}` : `Booklet p. ${currentQuestion.solution.pageNumber ?? '—'}`}`
                          : `Page ${currentQuestion.solution.pageNumber || 11} Solution`}
                      </span>
                      <span className="font-tech-mono">
                        <MathView text={currentQuestion.solution.finalAnswer} />
                      </span>
                    </div>

                    {currentQuestion.solution.images?.length ? (
                      <SolutionFigures
                        images={currentQuestion.solution.images}
                        alt={`${currentQuestion.category} solution`}
                      />
                    ) : (
                      <>
                        <div className="text-slate-300 italic">
                          <MathView text={currentQuestion.solution.summary} />
                        </div>

                        {currentQuestion.solution.formulas && (
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-amber-300 space-y-1.5">
                        <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">
                          Key Governing Formulas (LaTeX):
                        </span>
                        {currentQuestion.solution.formulas.map((f, i) => (
                          <div key={i} className="flex items-start space-x-2 py-0.5">
                            <span className="text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                            <MathView formula block={false} text={f} className="text-amber-200" />
                          </div>
                        ))}
                      </div>
                    )}

                        <div className="space-y-1.5 pt-1">
                          {currentQuestion.solution.steps.map((st, i) => (
                            <div key={i} className="leading-relaxed p-1.5 rounded bg-slate-900/40 border border-slate-800/40">
                              <MathView text={st} />
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons (Prev / Next) */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <span className="text-xs text-slate-400 font-tech-mono">
                {currentIndex + 1} of {questions.length}
              </span>

              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                disabled={currentIndex === questions.length - 1}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Docked Scratchpad alongside exam question */}
        {isScratchpadOpen && isScratchpadDocked && (
          <div className="xl:col-span-4 h-[750px] min-h-[520px] sticky top-28">
            <Scratchpad
              isOpen={isScratchpadOpen}
              onClose={() => {
                setIsScratchpadOpen(false);
                syncExamScratchpadRecord({
                  subject,
                  year,
                  month,
                  storageKeyPrefix: examStoragePrefix,
                }).catch((e) => console.warn('Sync on close error:', e));
              }}
              isDocked={true}
              onToggleDock={() => setIsScratchpadDocked(false)}
              storageKeyPrefix={examStoragePrefix}
              title={`${subject} ${month} ${year} Exam Rough Sheets`}
              documentId={examStorageBase}
            />
          </div>
        )}

        {/* Right Column: Question Navigator Matrix */}
        <div className={`${
          isScratchpadOpen && isScratchpadDocked
            ? 'xl:col-span-3 space-y-4'
            : 'space-y-4'
        }`}>
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-arnie text-sm font-bold text-white tracking-wide">
                Question Palette
              </h3>
              <span className="text-xs text-amber-400 font-tech-mono">
                {answeredCount}/{questions.length} Answered
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
              <div
                className="bg-amber-400 h-full transition-all duration-300"
                style={{ width: `${(answeredCount / questions.length) * 100}%` }}
              />
            </div>

            {/* Number grid */}
            <div className="grid grid-cols-5 gap-2 max-h-72 overflow-y-auto pr-1">
              {questions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = !!userAnswers[q.id];
                const isFlagged = !!flaggedQuestions[q.id];

                let btnClass = 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700';

                if (isCurrent) {
                  btnClass = 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20 scale-105';
                } else if (isFlagged) {
                  btnClass = 'bg-rose-500/20 text-rose-300 border-rose-500/40';
                } else if (isAnswered) {
                  btnClass = 'bg-slate-800 text-amber-300 border-slate-700 font-semibold';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-lg border text-xs font-tech-mono transition-all flex items-center justify-center relative cursor-pointer ${btnClass}`}
                  >
                    <span>{idx + 1}</span>
                    {isFlagged && (
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 absolute top-1 right-1" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1.5">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded bg-amber-500" />
                <span>Current Question</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded bg-slate-800 border border-slate-700" />
                <span>Answered</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded bg-rose-500/20 border border-rose-500/40" />
                <span>Flagged for Review</span>
              </div>
            </div>

            {/* Submit Button in Palette */}
            <button
              type="button"
              onClick={() => setShowSubmitModal(true)}
              className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-arnie font-bold text-xs tracking-wider transition-colors shadow-md mt-2 cursor-pointer flex items-center justify-center space-x-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>SUBMIT EXAMINATION</span>
            </button>
          </div>

          {/* Real-Time Pacing Monitor Card in Palette Column */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1.5">
                <Gauge className="w-4 h-4 text-cyan-400" />
                <h4 className="font-arnie text-xs font-bold text-white tracking-wide">
                  Pacing Monitor
                </h4>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold font-mono uppercase ${
                paceStatus === 'ahead'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : paceStatus === 'behind'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              }`}>
                {paceStatus === 'ahead' ? 'Ahead' : paceStatus === 'behind' ? 'Behind' : 'On Track'}
              </span>
            </div>

            {/* Progress: Target Pace Marker vs Actual Questions Answered */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Progress vs Schedule</span>
                <span className={`font-bold ${
                  paceStatus === 'ahead' ? 'text-emerald-400' : paceStatus === 'behind' ? 'text-rose-400' : 'text-amber-400'
                }`}>
                  {paceDeltaSeconds >= 0 ? `+${formatPaceTime(paceDeltaSeconds)} ahead` : `-${formatPaceTime(paceDeltaSeconds)} behind`}
                </span>
              </div>
              <div className="relative w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                {/* Ideal Pace Marker */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-cyan-400 z-10 shadow-[0_0_8px_rgba(56,189,248,1)]"
                  style={{ left: `${Math.min(100, Math.max(0, (expectedQuestionsAnswered / totalQuestions) * 100))}%` }}
                  title={`Ideal Pace Target: ${expectedQuestionsAnswered.toFixed(1)} items`}
                />
                {/* Actual Answered Bar */}
                <div
                  className={`h-full transition-all duration-300 ${
                    paceStatus === 'ahead' ? 'bg-emerald-400' : paceStatus === 'behind' ? 'bg-rose-400' : 'bg-amber-400'
                  }`}
                  style={{ width: `${Math.min(100, (answeredCount / totalQuestions) * 100)}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[9px] text-slate-500 font-mono">
                <span>Answered: {answeredCount}</span>
                <span className="text-cyan-400">Target: {expectedQuestionsAnswered.toFixed(1)}</span>
              </div>
            </div>

            {/* Speed Comparison Grid */}
            <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-mono">
              <div className="p-1.5 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="text-slate-500 block text-[8px] uppercase">TARGET PACE</span>
                <span className="text-slate-200 font-bold">{formatPaceTime(targetSecPerQuestion)}/item</span>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="text-slate-500 block text-[8px] uppercase">YOUR SPEED</span>
                <span className={`font-bold ${userAvgSecPerQuestion <= targetSecPerQuestion ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {answeredCount > 0 ? `${formatPaceTime(userAvgSecPerQuestion)}/item` : '—'}
                </span>
              </div>
            </div>

            {/* Quick Coaching Advice */}
            <p className="text-[10px] text-slate-400 leading-tight">
              {paceStatus === 'ahead' && '⚡ Excellent time management. You have buffer to review flagged questions.'}
              {paceStatus === 'behind' && '⚠️ Pacing alert: Consider answering standard items first to recover time.'}
              {paceStatus === 'on_track' && '🎯 Steady pace matching standard CE Board time allotment.'}
            </p>
          </div>
        </div>
      </div>

      {/* Floating Scratchpad when not docked */}
      {isScratchpadOpen && !isScratchpadDocked && (
        <Scratchpad
          isOpen={isScratchpadOpen}
          onClose={() => {
            setIsScratchpadOpen(false);
            syncExamScratchpadRecord({
              subject,
              year,
              month,
              storageKeyPrefix: `exam_${subject}_${year}_${month}_`,
            }).catch((e) => console.warn('Sync on close error:', e));
          }}
          isDocked={false}
          onToggleDock={() => setIsScratchpadDocked(true)}
          storageKeyPrefix={examStoragePrefix}
          title={`${subject} ${month} ${year} Exam Rough Sheets`}
          documentId={examStorageBase}
        />
      )}

      {/* Floating Quick Scratchpad Trigger when closed */}
      {!isScratchpadOpen && (
        <button
          type="button"
          onClick={() => setIsScratchpadOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center space-x-2 px-4 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-2xl shadow-cyan-500/30 border border-cyan-300 transition-all hover:scale-105 cursor-pointer group"
          title="Open Scratchpad for rough calculations and notes"
        >
          <PenTool className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          <span>Scratchpad</span>
        </button>
      )}

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl">
            <div className="flex items-center space-x-3 text-amber-400">
              <AlertTriangle className="w-6 h-6" />
              <h3 className="font-arnie text-xl font-bold text-white">
                Submit Examination?
              </h3>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              You are about to submit your {subject} paper. Once submitted, your score will be recorded, and the full <strong className="text-amber-400">Page 11 Answer Keys</strong> and <strong className="text-amber-400">Pages 11–33 Solutions</strong> will be revealed.
            </p>

            <div className="grid grid-cols-2 gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-center font-tech-mono">
              <div className="p-2 bg-slate-900 rounded-lg">
                <span className="text-slate-400 block text-[10px]">ANSWERED</span>
                <span className="text-base font-bold text-emerald-400">{answeredCount}</span>
              </div>
              <div className="p-2 bg-slate-900 rounded-lg">
                <span className="text-slate-400 block text-[10px]">UNANSWERED</span>
                <span className={`text-base font-bold ${unansweredCount > 0 ? 'text-amber-400' : 'text-slate-400'}`}>
                  {unansweredCount}
                </span>
              </div>
            </div>

            {unansweredCount > 0 && (
              <p className="text-[11px] text-amber-400/90 italic">
                Notice: You have {unansweredCount} unanswered questions. Unanswered items are counted as incorrect.
              </p>
            )}

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800 transition-colors"
              >
                Back to Exam
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-arnie tracking-wide shadow-md transition-all cursor-pointer"
              >
                Yes, Submit Paper
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pause Modal (Interactive Study Mode Only) */}
      {isPaused && (
        <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-md w-full p-6 sm:p-7 space-y-5 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                  <Pause className="w-5 h-5 fill-amber-400/30" />
                </div>
                <div>
                  <h3 className="font-arnie text-lg font-bold text-white tracking-wide">
                    Study Session Paused
                  </h3>
                  <span className="text-[11px] text-amber-400 font-medium">
                    Interactive Mode • {timerMode === 'stopwatch' ? 'Stopwatch Timing' : 'Unlimited Practice'}
                  </span>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-tech-mono">
                {month} {year}
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                <span className="text-[10px] text-slate-400 block uppercase font-medium">Current</span>
                <span className="font-arnie text-base font-bold text-white">
                  #{currentIndex + 1}
                  <span className="text-xs text-slate-400 font-normal"> / {questions.length}</span>
                </span>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                <span className="text-[10px] text-slate-400 block uppercase font-medium">Answered</span>
                <span className="font-arnie text-base font-bold text-amber-400">
                  {answeredCount}
                  <span className="text-xs text-slate-400 font-normal"> / {questions.length}</span>
                </span>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                <span className="text-[10px] text-slate-400 block uppercase font-medium">Time</span>
                <span className="font-tech-mono text-sm font-bold text-cyan-400">
                  {timerMode === 'stopwatch' ? formatTime(secondsElapsed) : 'Untimed'}
                </span>
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-xs text-amber-200/90 leading-relaxed">
              Your answered choices, flagged questions, and time are tracked. You can resume now, or save your progress to continue anytime later from the exam portal.
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-1">
              <button
                type="button"
                onClick={() => setIsPaused(false)}
                className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm font-arnie tracking-wider flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/10 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>RESUME STUDY SESSION</span>
              </button>

              <button
                type="button"
                onClick={handleSaveAndExit}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <BookmarkCheck className="w-4 h-4 text-emerald-400" />
                <span>Save & Continue Later</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsPaused(false);
                  setShowExitConfirm(true);
                }}
                className="w-full py-1 text-center text-xs text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
              >
                Discard Session & Return to Portal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exit Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl">
            <h3 className="font-arnie text-lg font-bold text-white">
              {isPauseEligible ? 'Leave Examination?' : 'Exit Examination?'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isPauseEligible
                ? 'You are in Interactive Study Mode. You can save your progress and continue right where you left off later, or discard this session.'
                : 'Exiting will cancel this exam attempt without recording it. Are you sure you want to return to the portal?'}
            </p>
            <div className="flex flex-col space-y-2 pt-2">
              {isPauseEligible && (
                <button
                  type="button"
                  onClick={handleSaveAndExit}
                  className="w-full px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-arnie tracking-wide flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                >
                  <BookmarkCheck className="w-4 h-4 text-slate-950" />
                  <span>Save & Continue Later</span>
                </button>
              )}
              <div className="flex items-center justify-end space-x-3 pt-1">
                <button
                  type="button"
                  onClick={() => setShowExitConfirm(false)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  Back to Exam
                </button>
                <button
                  type="button"
                  onClick={handleDiscardAndExit}
                  className="px-4 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white font-bold text-xs border border-rose-500/40 transition-colors cursor-pointer"
                >
                  {isPauseEligible ? 'Discard & Exit' : 'Confirm Exit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

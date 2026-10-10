import React, { useState, useEffect, useRef } from 'react';
import {
  Question,
  SubjectArea,
  TimerMode,
  ExamMode,
  ExamMonth,
  SUBJECT_CONFIGS,
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
} from 'lucide-react';
import { EngineeringFigure } from './EngineeringFigure';
import { MathView } from './MathView';

interface ExamEngineProps {
  subject: SubjectArea;
  year: number;
  month: ExamMonth;
  questions: Question[];
  timerMode: TimerMode;
  totalDurationSeconds: number;
  examMode: ExamMode;
  onSubmit: (userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>, timeSpentSeconds: number) => void;
  onExit: () => void;
}

export const ExamEngine: React.FC<ExamEngineProps> = ({
  subject,
  year,
  month,
  questions,
  timerMode,
  totalDurationSeconds,
  examMode,
  onSubmit,
  onExit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [secondsRemaining, setSecondsRemaining] = useState(totalDurationSeconds);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showSolutionForCurrent, setShowSolutionForCurrent] = useState(false);

  const subjectConfig = SUBJECT_CONFIGS[subject];
  const currentQuestion = questions[currentIndex];
  const isInteractive = examMode === 'interactive';

  // Timer reference
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
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
  }, [timerMode]);

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
            Page {currentQuestion?.pageNumber} of 10
          </span>
        </div>

        {/* Timer Display */}
        <div className="flex items-center space-x-4">
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

          {/* Quick Actions */}
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
            className="text-xs text-slate-400 hover:text-slate-200 px-2 py-1"
          >
            Exit
          </button>
        </div>
      </div>

      {/* Main Examination Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column: Question Content (3 columns on lg) */}
        <div className="lg:col-span-3 space-y-6">
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
                    Booklet Page {currentQuestion.pageNumber} • Standard 4 Choices
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

            {/* Interactive Mode Immediate Popups & Solution reveal */}
            {isInteractive && currentAnswer && (
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
                      <span className="font-arnie text-sm">Page {currentQuestion.solution.pageNumber || 11} Solution</span>
                      <span className="font-tech-mono">
                        <MathView text={currentQuestion.solution.finalAnswer} />
                      </span>
                    </div>

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

        {/* Right Column: Question Navigator Matrix */}
        <div className="space-y-4">
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
        </div>
      </div>

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

      {/* Exit Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl">
            <h3 className="font-arnie text-lg font-bold text-white">
              Exit Examination?
            </h3>
            <p className="text-xs text-slate-300">
              Exiting will cancel this exam attempt without recording it. Are you sure you want to return to the portal?
            </p>
            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setShowExitConfirm(false)}
                className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
              >
                Continue Exam
              </button>
              <button
                type="button"
                onClick={onExit}
                className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-400 text-white font-bold text-xs"
              >
                Confirm Exit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import {
  SubjectArea,
  ExamMonth,
  TimerMode,
  ExamMode,
  SUBJECT_CONFIGS,
} from '../types/exam';
import { ALL_YEARS, ALL_MONTHS, getSubjectStats } from '../data/questionBankManager';
import {
  Calculator,
  Compass,
  Building2,
  Clock,
  Timer,
  Infinity as InfinityIcon,
  HelpCircle,
  Play,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Zap,
  Eye,
} from 'lucide-react';

interface SubjectSelectorProps {
  selectedSubject: SubjectArea;
  onSubjectChange: (sub: SubjectArea) => void;
  selectedYear: number;
  onYearChange: (year: number) => void;
  selectedMonth: ExamMonth;
  onMonthChange: (month: ExamMonth) => void;
  timerMode: TimerMode;
  onTimerModeChange: (mode: TimerMode) => void;
  customMinutes: number;
  onCustomMinutesChange: (mins: number) => void;
  examMode: ExamMode;
  onExamModeChange: (mode: ExamMode) => void;
  onStartExam: () => void;
}

export const SubjectSelector: React.FC<SubjectSelectorProps> = ({
  selectedSubject,
  onSubjectChange,
  selectedYear,
  onYearChange,
  selectedMonth,
  onMonthChange,
  timerMode,
  onTimerModeChange,
  customMinutes,
  onCustomMinutesChange,
  examMode,
  onExamModeChange,
  onStartExam,
}) => {
  const [showCustomTimeInput, setShowCustomTimeInput] = useState(false);
  const currentConfig = SUBJECT_CONFIGS[selectedSubject];
  const stats = getSubjectStats(selectedSubject);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Hero Banner with Arnie Font Title */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 sm:p-8 border border-slate-700/80 shadow-2xl bg-blueprint-grid">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRC Board Exam Questions 2011–2025</span>
          </div>
          <h1 className="font-arnie text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Civil Engineering Board Examination
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-light">
            Simulate the official PRC examination with comprehensive questions (Pages 1–10), official answer keys (Page 11), and step-by-step engineering solutions with formulas (Pages 11–33).
          </p>
        </div>
      </div>

      {/* STEP 1: Select Area / Subject */}
      <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-sm">
              1
            </span>
            <h2 className="text-lg font-bold text-white font-arnie tracking-wide">
              Select Examination Area
            </h2>
          </div>
          <span className="text-xs text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
            MSTC Active &amp; Ready First
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* MSTC Card */}
          <button
            type="button"
            onClick={() => onSubjectChange('MSTC')}
            className={`text-left p-5 rounded-xl border-2 transition-all relative overflow-hidden flex flex-col justify-between ${
              selectedSubject === 'MSTC'
                ? 'border-amber-400 bg-amber-500/10 shadow-lg shadow-amber-500/10'
                : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Calculator className="w-5 h-5" />
                </div>
                <div className="flex items-center space-x-1 px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-bold font-tech-mono">
                  <span>35%</span>
                  <span className="text-[10px] text-amber-400/70">WEIGHT</span>
                </div>
              </div>
              <h3 className="font-arnie text-xl font-bold text-amber-300">MSTC</h3>
              <p className="text-xs text-white font-semibold mt-0.5">
                Mathematics, Surveying &amp; Transportation
              </p>
              <p className="text-[11px] text-slate-400 mt-2 line-clamp-2">
                Calculus, Economy, Surveying, Highway Curves, Superelevation &amp; Wave Mechanics.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="text-amber-400 font-tech-mono">Std. Time: 5 Hours</span>
              {selectedSubject === 'MSTC' && (
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
              )}
            </div>
          </button>

          {/* HPGE Card */}
          <button
            type="button"
            onClick={() => onSubjectChange('HPGE')}
            className={`text-left p-5 rounded-xl border-2 transition-all relative overflow-hidden flex flex-col justify-between ${
              selectedSubject === 'HPGE'
                ? 'border-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/10'
                : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="flex items-center space-x-1 px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-bold font-tech-mono">
                  <span>30%</span>
                  <span className="text-[10px] text-cyan-400/70">WEIGHT</span>
                </div>
              </div>
              <h3 className="font-arnie text-xl font-bold text-cyan-300">HPGE</h3>
              <p className="text-xs text-white font-semibold mt-0.5">
                Hydraulics &amp; Geotechnical Engineering
              </p>
              <p className="text-[11px] text-slate-400 mt-2 line-clamp-2">
                Fluid Statics, Darcy Pipe Flow, Soil Void Ratio, Lateral Earth Pressure &amp; Permeability.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="text-cyan-400 font-tech-mono">Std. Time: 4 Hours</span>
              {selectedSubject === 'HPGE' && (
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              )}
            </div>
          </button>

          {/* PSAD Card */}
          <button
            type="button"
            onClick={() => onSubjectChange('PSAD')}
            className={`text-left p-5 rounded-xl border-2 transition-all relative overflow-hidden flex flex-col justify-between ${
              selectedSubject === 'PSAD'
                ? 'border-emerald-400 bg-emerald-500/10 shadow-lg shadow-emerald-500/10'
                : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="flex items-center space-x-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-bold font-tech-mono">
                  <span>35%</span>
                  <span className="text-[10px] text-emerald-400/70">WEIGHT</span>
                </div>
              </div>
              <h3 className="font-arnie text-xl font-bold text-emerald-300">PSAD</h3>
              <p className="text-xs text-white font-semibold mt-0.5">
                Principles of Structural Analysis &amp; Design
              </p>
              <p className="text-[11px] text-slate-400 mt-2 line-clamp-2">
                NSCP 2015 RC Beams, AISC Steel Tension Members, Shear &amp; Moment Diagrams.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="text-emerald-400 font-tech-mono">Std. Time: 6 Hours</span>
              {selectedSubject === 'PSAD' && (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* STEP 2: Select Year & Month (2011 - 2025) */}
      <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-6">
        <div className="flex items-center space-x-2.5">
          <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-sm">
            2
          </span>
          <h2 className="text-lg font-bold text-white font-arnie tracking-wide">
            Select Past Board Exam Year &amp; Month
          </h2>
        </div>

        {/* Year Selector (2011 to 2025) */}
        <div>
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center space-x-2">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Examination Year (2011 – 2025)</span>
          </label>
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-15 gap-1.5">
            {ALL_YEARS.map((yr) => (
              <button
                key={yr}
                type="button"
                onClick={() => onYearChange(yr)}
                className={`py-2 px-1 text-center rounded-lg text-xs font-tech-mono font-medium transition-colors ${
                  selectedYear === yr
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20 scale-105'
                    : 'bg-slate-950/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>

        {/* Month Selector */}
        <div>
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center space-x-2">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Examination Month</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ALL_MONTHS.map((mon) => (
              <button
                key={mon}
                type="button"
                onClick={() => onMonthChange(mon)}
                className={`p-3 rounded-xl border text-sm font-semibold transition-all flex items-center justify-between ${
                  selectedMonth === mon
                    ? 'border-amber-400 bg-amber-500/10 text-amber-300'
                    : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span>{mon} Exam</span>
                {selectedMonth === mon && (
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                )}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            Selected Set: <strong className="text-amber-400">{selectedMonth} {selectedYear}</strong> — {currentConfig.fullName}
          </p>
        </div>
      </div>

      {/* STEP 3: Timer & Simulation Mode */}
      <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-6">
        <div className="flex items-center space-x-2.5">
          <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-sm">
            3
          </span>
          <h2 className="text-lg font-bold text-white font-arnie tracking-wide">
            Select Timing &amp; Interactive Mode
          </h2>
        </div>

        {/* Timer Mode Selection */}
        <div>
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">
            Timer Configuration
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Standard PRC Countdown */}
            <button
              type="button"
              onClick={() => {
                onTimerModeChange('exam_timer');
                setShowCustomTimeInput(false);
              }}
              className={`p-4 rounded-xl border text-left transition-all ${
                timerMode === 'exam_timer' && !showCustomTimeInput
                  ? 'border-amber-400 bg-amber-500/10 text-white'
                  : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1">
                <Timer className="w-4 h-4 text-amber-400" />
                <span className="font-semibold text-sm">PRC Official Timer</span>
              </div>
              <p className="text-xs text-amber-300 font-tech-mono">
                {currentConfig.defaultHoursLabel}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Standard countdown timer matching official board exam regulation.
              </p>
            </button>

            {/* Stopwatch Mode */}
            <button
              type="button"
              onClick={() => {
                onTimerModeChange('stopwatch');
                setShowCustomTimeInput(false);
              }}
              className={`p-4 rounded-xl border text-left transition-all ${
                timerMode === 'stopwatch'
                  ? 'border-amber-400 bg-amber-500/10 text-white'
                  : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold text-sm">Stopwatch (Elapsed)</span>
              </div>
              <p className="text-xs text-cyan-300 font-tech-mono">Counts Up</p>
              <p className="text-[11px] text-slate-400 mt-1">
                Track how long it takes you to complete without hard cutoff.
              </p>
            </button>

            {/* No Limit Mode */}
            <button
              type="button"
              onClick={() => {
                onTimerModeChange('no_limit');
                setShowCustomTimeInput(false);
              }}
              className={`p-4 rounded-xl border text-left transition-all ${
                timerMode === 'no_limit'
                  ? 'border-amber-400 bg-amber-500/10 text-white'
                  : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1">
                <InfinityIcon className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-sm">No Time Limit</span>
              </div>
              <p className="text-xs text-emerald-300 font-tech-mono">Untimed Review</p>
              <p className="text-[11px] text-slate-400 mt-1">
                Relaxed study pace to digest concepts and solutions carefully.
              </p>
            </button>
          </div>

          {/* Option to set custom minutes */}
          <div className="mt-3 flex items-center space-x-3 text-xs">
            <button
              type="button"
              onClick={() => {
                setShowCustomTimeInput(!showCustomTimeInput);
                if (!showCustomTimeInput) onTimerModeChange('exam_timer');
              }}
              className="text-amber-400 hover:underline font-medium"
            >
              {showCustomTimeInput ? '• Use standard time' : '+ Custom timer duration (specify minutes)'}
            </button>

            {showCustomTimeInput && (
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min="5"
                  max="600"
                  value={customMinutes}
                  onChange={(e) => onCustomMinutesChange(Math.max(1, parseInt(e.target.value) || 60))}
                  className="w-20 px-2 py-1 bg-slate-950 border border-slate-700 rounded text-center text-amber-300 font-tech-mono"
                />
                <span className="text-slate-400">minutes ({ (customMinutes / 60).toFixed(1) } hrs)</span>
              </div>
            )}
          </div>
        </div>

        {/* Interactive vs Non-interactive */}
        <div>
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">
            Interactive vs. Non-Interactive Mode
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Interactive */}
            <button
              type="button"
              onClick={() => onExamModeChange('interactive')}
              className={`p-4 rounded-xl border text-left transition-all ${
                examMode === 'interactive'
                  ? 'border-amber-400 bg-amber-500/10 text-white'
                  : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-sm">Interactive Mode</span>
                </div>
                {examMode === 'interactive' && (
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                )}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Clicking an answer immediately pops whether <strong className="text-emerald-400">Correct</strong> or <strong className="text-rose-400">Wrong</strong>. You can click to see the step-by-step engineering solution immediately during the test.
              </p>
            </button>

            {/* Non-Interactive */}
            <button
              type="button"
              onClick={() => onExamModeChange('non_interactive')}
              className={`p-4 rounded-xl border text-left transition-all ${
                examMode === 'non_interactive'
                  ? 'border-amber-400 bg-amber-500/10 text-white'
                  : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-slate-300" />
                  <span className="font-bold text-sm">Non-Interactive (Simulation)</span>
                </div>
                {examMode === 'non_interactive' && (
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                )}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Strict PRC board exam simulation: only questions and choices appear during the test. Complete answer keys and solutions are revealed upon submission.
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Launch Exam CTA */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 rounded-2xl p-6 text-slate-950 flex flex-col sm:flex-row items-center justify-between shadow-2xl gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider bg-slate-950 text-amber-400 px-2.5 py-0.5 rounded-full inline-block mb-1">
            Ready to Begin
          </span>
          <h3 className="font-arnie text-2xl font-bold">
            Proceed to {selectedSubject} Examination
          </h3>
          <p className="text-xs text-slate-900 mt-1">
            {selectedMonth} {selectedYear} • Mode: {examMode === 'interactive' ? 'Interactive' : 'Official Simulation'} • Timing: {timerMode}
          </p>
        </div>

        <button
          type="button"
          onClick={onStartExam}
          className="w-full sm:w-auto px-8 py-3.5 bg-slate-950 hover:bg-slate-900 text-white rounded-xl font-bold text-base flex items-center justify-center space-x-2 shadow-xl hover:scale-105 transition-all cursor-pointer font-arnie tracking-wider"
        >
          <Play className="w-5 h-5 text-amber-400 fill-amber-400" />
          <span>START EXAMINATION</span>
        </button>
      </div>
    </div>
  );
};

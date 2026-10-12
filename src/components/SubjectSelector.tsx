import React, { useState } from 'react';
import {
  SubjectArea,
  ExamMonth,
  TimerMode,
  ExamMode,
  SUBJECT_CONFIGS,
} from '../types/exam';
import {
  ALL_YEARS,
  ALL_MONTHS,
  getSubjectStats,
  hasExamData,
  isYearAvailable,
  isMonthAvailable,
} from '../data/questionBankManager';
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
  Lock,
  AlertCircle,
} from 'lucide-react';
import { Scene3D } from './Scene3D';
import { Tilt3D } from './Tilt3D';
import { useTheme } from '../context/ThemeContext';

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
  const { themeConfig } = useTheme();
  const isAurora = themeConfig.id === 'aurora_glass';
  const currentConfig = SUBJECT_CONFIGS[selectedSubject];
  const stats = getSubjectStats(selectedSubject, selectedYear, selectedMonth);

  const hasSelectedData = hasExamData(selectedSubject, selectedYear, selectedMonth);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Hero Banner */}
      <div className="hero-aurora relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 sm:p-8 border border-slate-700/80 shadow-2xl bg-blueprint-grid">
        {isAurora && (
          <div className="absolute inset-y-0 right-0 w-full sm:w-3/5 opacity-60 sm:opacity-100 pointer-events-none">
            <Scene3D variant="hero" accent={themeConfig.accent} />
          </div>
        )}
        <div className="relative z-10 space-y-3 sm:max-w-[60%]">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRC Board Exam Questions • April 2024 &amp; November 2024</span>
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
            MSTC (Nov 2024: 66 Qs, Apr 2024: 50 Qs), HPGE (48 Qs) &amp; PSAD (75 Qs)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* MSTC Card */}
          <Tilt3D>
          <button
            type="button"
            onClick={() => onSubjectChange('MSTC')}
            className={`text-left p-5 rounded-xl border-2 transition-all relative overflow-hidden flex flex-col justify-between cursor-pointer ${
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
          </Tilt3D>

          {/* HPGE Card */}
          <Tilt3D>
          <button
            type="button"
            onClick={() => onSubjectChange('HPGE')}
            className={`text-left p-5 rounded-xl border-2 transition-all relative overflow-hidden flex flex-col justify-between cursor-pointer ${
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
          </Tilt3D>

          {/* PSAD Card */}
          <Tilt3D>
          <button
            type="button"
            onClick={() => onSubjectChange('PSAD')}
            className={`text-left p-5 rounded-xl border-2 transition-all relative overflow-hidden flex flex-col justify-between cursor-pointer ${
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
                Shear &amp; Moment, NSCP 2015 RC Beams, Footing Punching, Welded Joints &amp; Steel Columns.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="text-emerald-400 font-tech-mono">Std. Time: 5 Hours</span>
              {selectedSubject === 'PSAD' && (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              )}
            </div>
          </button>
          </Tilt3D>
        </div>
      </div>

      {/* STEP 2: Select Past Board Exam Year & Month */}
      <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-sm">
              2
            </span>
            <h2 className="text-lg font-bold text-white font-arnie tracking-wide">
              Select Past Board Exam Year &amp; Month
            </h2>
          </div>
          <span className="text-xs text-slate-400 font-tech-mono">
            Available Sets: <strong className="text-amber-400">April 2024 (MSTC, HPGE, PSAD)</strong> • <strong className="text-cyan-400">November 2024 (MSTC • 66 Items, HPGE • 46 Items, PSAD • 75 Items)</strong>
          </span>
        </div>

        {/* Year Selector (2011 to 2025) */}
        <div>
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Examination Year (2011 – 2025)</span>
            </span>
            <span className="text-[10px] text-slate-400 normal-case">
              Years without uploaded question data are blurred out
            </span>
          </label>
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-15 gap-1.5">
            {ALL_YEARS.map((yr) => {
              const hasData = isYearAvailable(yr, selectedSubject);
              const isSelected = selectedYear === yr;

              return (
                <button
                  key={yr}
                  type="button"
                  onClick={() => {
                    if (hasData) {
                      onYearChange(yr);
                    }
                  }}
                  disabled={!hasData}
                  title={
                    hasData
                      ? `Select ${yr} (Contains exam questions)`
                      : `${yr} - No questions uploaded yet (Locked)`
                  }
                  className={`py-2 px-1 text-center rounded-lg text-xs font-tech-mono font-medium transition-all relative ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20 scale-105 z-10'
                      : hasData
                      ? 'bg-slate-950/70 text-slate-200 hover:bg-slate-800 hover:text-white border border-slate-700 cursor-pointer'
                      : 'bg-slate-950/20 text-slate-600 border border-slate-800/40 opacity-35 filter blur-[0.6px] hover:blur-none select-none cursor-not-allowed'
                  }`}
                >
                  <span>{yr}</span>
                  {!hasData && (
                    <span className="sr-only">Unavailable</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Month Selector */}
        <div>
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Examination Month</span>
            </span>
            <span className="text-[10px] text-slate-400 normal-case">
              Months without uploaded question data are blurred out
            </span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ALL_MONTHS.map((mon) => {
              const hasData = isMonthAvailable(mon, selectedYear, selectedSubject);
              const isSelected = selectedMonth === mon;

              return (
                <button
                  key={mon}
                  type="button"
                  onClick={() => {
                    if (hasData) {
                      onMonthChange(mon);
                    }
                  }}
                  disabled={!hasData}
                  title={
                    hasData
                      ? `Select ${mon} ${selectedYear} examination`
                      : `${mon} ${selectedYear} - No questions uploaded yet (Locked)`
                  }
                  className={`p-3 rounded-xl border text-sm font-semibold transition-all flex items-center justify-between ${
                    isSelected
                      ? 'border-amber-400 bg-amber-500/10 text-amber-300 shadow-md ring-1 ring-amber-400/40'
                      : hasData
                      ? 'border-slate-800 bg-slate-950/60 text-slate-200 hover:border-slate-700 cursor-pointer'
                      : 'border-slate-800/40 bg-slate-950/20 text-slate-600 opacity-35 filter blur-[0.6px] hover:blur-none select-none cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {!hasData && <Lock className="w-3.5 h-3.5 text-slate-500" />}
                    <span>{mon} Exam</span>
                  </div>

                  {isSelected && hasData && (
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  )}
                  {!hasData && (
                    <span className="text-[10px] font-tech-mono text-slate-500 font-normal">
                      No Data
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Current Set Status Notice */}
          <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
            <div className="flex items-center space-x-2 text-slate-300">
              <span>Selected Set:</span>
              <strong className="text-amber-400 font-tech-mono">
                {selectedMonth} {selectedYear}
              </strong>
              <span>— {currentConfig.fullName}</span>
            </div>

            {hasSelectedData ? (
              <span className="text-emerald-400 flex items-center space-x-1 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified PRC Exam Set Ready ({stats.total} Questions)</span>
              </span>
            ) : (
              <span className="text-amber-400 flex items-center space-x-1 font-semibold">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>No question data uploaded yet for this period.</span>
              </span>
            )}
          </div>
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
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center space-x-2">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Clock &amp; Timing Rules</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => onTimerModeChange('exam_timer')}
              className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                timerMode === 'exam_timer'
                  ? 'border-amber-400 bg-amber-500/10 text-white shadow-md'
                  : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-sm">Standard PRC Timer</span>
                </div>
                {timerMode === 'exam_timer' && (
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                )}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Countdown timer for {selectedSubject}: {currentConfig.defaultMinutes / 60} hours ({currentConfig.defaultMinutes} minutes). Auto-submits on timeout.
              </p>
            </button>

            <button
              type="button"
              onClick={() => onTimerModeChange('stopwatch')}
              className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                timerMode === 'stopwatch'
                  ? 'border-amber-400 bg-amber-500/10 text-white shadow-md'
                  : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center space-x-2">
                  <Timer className="w-4 h-4 text-cyan-400" />
                  <span className="font-bold text-sm">Stopwatch Mode</span>
                </div>
                {timerMode === 'stopwatch' && (
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                )}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Counts elapsed time upwards from 00:00:00 without hard cutoff. Ideal for measuring problem pacing.
              </p>
            </button>

            <button
              type="button"
              onClick={() => onTimerModeChange('no_limit')}
              className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                timerMode === 'no_limit'
                  ? 'border-amber-400 bg-amber-500/10 text-white shadow-md'
                  : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center space-x-2">
                  <InfinityIcon className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-sm">Untimed Practice</span>
                </div>
                {timerMode === 'no_limit' && (
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                )}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                No clock or time pressure. Solve equations and check solutions at your own relaxed pace.
              </p>
            </button>
          </div>
        </div>

        {/* Custom duration toggle if in exam timer mode */}
        {timerMode === 'exam_timer' && (
          <div className="pt-2 border-t border-slate-800/80">
            <button
              type="button"
              onClick={() => setShowCustomTimeInput(!showCustomTimeInput)}
              className="text-xs text-amber-400 hover:underline flex items-center space-x-1 cursor-pointer"
            >
              <span>{showCustomTimeInput ? '− Hide custom duration' : '+ Customize duration (default ' + currentConfig.defaultMinutes + ' mins)'}</span>
            </button>
            {showCustomTimeInput && (
              <div className="mt-3 flex items-center space-x-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                <label className="text-xs text-slate-300">Set Timer in Minutes:</label>
                <input
                  type="number"
                  min="5"
                  max="600"
                  value={customMinutes}
                  onChange={(e) => onCustomMinutesChange(Number(e.target.value))}
                  className="w-24 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-tech-mono"
                />
                <span className="text-xs text-slate-400">({Math.round(customMinutes / 6) / 10} hours)</span>
              </div>
            )}
          </div>
        )}

        {/* Interactive vs Non-Interactive Mode */}
        <div>
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center space-x-2">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Question Feedback Mode</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => onExamModeChange('interactive')}
              className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                examMode === 'interactive'
                  ? 'border-amber-400 bg-amber-500/10 text-white shadow-md'
                  : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-sm">Interactive Study Mode</span>
                </div>
                {examMode === 'interactive' && (
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                )}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Instant feedback on choice selection. Reveals immediate correct/wrong validation with the official engineering solution and step derivations.
              </p>
            </button>

            <button
              type="button"
              onClick={() => onExamModeChange('non_interactive')}
              className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                examMode === 'non_interactive'
                  ? 'border-amber-400 bg-amber-500/10 text-white shadow-md'
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
              <p className="text-xs text-slate-400 leading-relaxed">
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
            {hasSelectedData ? 'Ready to Begin' : 'Awaiting Data Update'}
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
          disabled={!hasSelectedData}
          className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-base flex items-center justify-center space-x-2 shadow-xl transition-all font-arnie tracking-wider ${
            hasSelectedData
              ? 'bg-slate-950 hover:bg-slate-900 text-white hover:scale-105 cursor-pointer'
              : 'bg-slate-950/50 text-slate-500 cursor-not-allowed opacity-60'
          }`}
        >
          <Play className="w-5 h-5 text-amber-400 fill-amber-400" />
          <span>START EXAMINATION</span>
        </button>
      </div>
    </div>
  );
};

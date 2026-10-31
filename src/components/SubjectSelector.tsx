import React, { useState, useEffect } from 'react';
import {
  SubjectArea,
  ExamMonth,
  TimerMode,
  ExamMode,
  ReferenceSource,
  SUBJECT_CONFIGS,
  REFERENCE_SOURCE_META,
  REFERENCE_SOURCES,
  PausedExamSession,
} from '../types/exam';
import {
  ALL_YEARS,
  ALL_MONTHS,
  hasExamData,
  isYearAvailable,
  isMonthAvailable,
  countSetsForSource,
} from '../data/questionBankManager';
import {
  Calculator,
  Compass,
  Building2,
  Clock,
  Timer,
  Infinity as InfinityIcon,
  Play,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Zap,
  Eye,
  Lock,
  Pause,
  BookmarkCheck,
  RotateCcw,
  Trash2,
  ArrowRight,
  PenTool,
  BookOpen,
  Heart,
} from 'lucide-react';
import { Scene3D } from './Scene3D';
import { TerrariumOrb3D } from './TerrariumOrb3D';
import { Matilda3D } from './Matilda3D';
import { ParticleSystem3D } from './ParticleSystem3D';
import { SubmergedEra3D } from './SubmergedEra3D';
import { Tilt3D } from './Tilt3D';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { PWAInstallButton } from './PWAInstallButton';
import {
  getPausedSession,
  getAllPausedSessions,
  deletePausedSession,
  clearAllPausedSessions,
} from '../utils/storage';

interface SubjectSelectorProps {
  selectedSubject: SubjectArea;
  onSubjectChange: (sub: SubjectArea) => void;
  selectedSource: ReferenceSource;
  onSourceChange: (source: ReferenceSource) => void;
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
  onResumeExam: (session: PausedExamSession) => void;
  onNavigateToFlashcards?: () => void;
  onOpenTour?: () => void;
  onOpenDonation?: () => void;
}

export const SubjectSelector: React.FC<SubjectSelectorProps> = ({
  selectedSubject,
  onSubjectChange,
  selectedSource,
  onSourceChange,
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
  onResumeExam,
  onNavigateToFlashcards,
  onOpenTour,
  onOpenDonation,
}) => {
  const [showCustomTimeInput, setShowCustomTimeInput] = useState(false);
  const [pausedSessionsList, setPausedSessionsList] = useState<PausedExamSession[]>(() => getAllPausedSessions());

  useEffect(() => {
    const handleUpdate = () => {
      setPausedSessionsList(getAllPausedSessions());
    };
    window.addEventListener('ce_board_paused_sessions_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('ce_board_paused_sessions_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const [sessionToDiscard, setSessionToDiscard] = useState<PausedExamSession | 'ALL' | null>(null);
  const { themeConfig } = useTheme();
  const { user, profile, openAuthModal } = useAuth();
  const activeUser = profile || user;
  const isAurora = themeConfig.id === 'aurora_glass';
  const isTerrarium = themeConfig.id === 'terrarium_orb';
  const isMatilda = themeConfig.id === 'matilda_3d';
  const isParticle = themeConfig.id === 'particle_flow';
  const isSubmerged = themeConfig.id === 'submerged_era';
  const currentConfig = SUBJECT_CONFIGS[selectedSubject];
  const refBadge =
    selectedSource === 'Besavilla'
      ? 'Ref: Besavilla Solved Problems'
      : 'Ref: Gillesania CE Reference Vol 4–6';

  const currentPausedSession = pausedSessionsList.find(
    (s) =>
      s.subject === selectedSubject &&
      Number(s.year) === Number(selectedYear) &&
      s.month === selectedMonth &&
      (s.source ?? 'Gillesania') === selectedSource
  ) || null;
  const allPausedSessions = pausedSessionsList;
  const otherPausedSessions = allPausedSessions.filter(
    (s) =>
      !(
        s.subject === selectedSubject &&
        Number(s.year) === Number(selectedYear) &&
        s.month === selectedMonth &&
        (s.source ?? 'Gillesania') === selectedSource
      )
  );

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const hasSelectedData = hasExamData(selectedSubject, selectedYear, selectedMonth, selectedSource);

  return (
    <div className="max-w-6xl mx-auto pb-12 space-y-6">
      {/* Hero Banner */}
      <div className="hero-aurora relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 sm:p-7 border border-slate-700/80 shadow-2xl bg-blueprint-grid">
        {isSubmerged && (
          <div className="absolute inset-y-0 right-0 w-full sm:w-1/2 md:w-3/5 opacity-95 sm:opacity-100 pointer-events-auto">
            <SubmergedEra3D mode="hero" interactive={true} />
          </div>
        )}
        {isAurora && (
          <div className="absolute inset-y-0 right-0 w-full sm:w-3/5 opacity-60 sm:opacity-100 pointer-events-none">
            <Scene3D variant="hero" accent={themeConfig.accent} />
          </div>
        )}
        {isTerrarium && (
          <div className="absolute inset-y-0 right-0 w-full sm:w-1/2 md:w-3/5 opacity-90 sm:opacity-100 pointer-events-auto">
            <TerrariumOrb3D mode="hero" interactive={true} accent={themeConfig.accent} />
          </div>
        )}
        {isMatilda && (
          <div className="absolute inset-y-0 right-0 w-full sm:w-1/2 md:w-3/5 opacity-95 sm:opacity-100 pointer-events-auto">
            <Matilda3D mode="hero" interactive={true} accent={themeConfig.accent} />
          </div>
        )}
        {isParticle && (
          <div className="absolute inset-y-0 right-0 w-full sm:w-1/2 md:w-3/5 opacity-95 sm:opacity-100 pointer-events-auto">
            <ParticleSystem3D mode="hero" interactive={true} />
          </div>
        )}
        <div className="relative z-10 space-y-2.5 sm:max-w-[55%]">
          {isSubmerged ? (
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-[11px] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>Submerged Era 3D • Animated Lilies, Swimming Koi &amp; Sakura Breeze</span>
            </div>
          ) : isParticle ? (
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-[11px] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>3D Particle Theme • Reactive Background &amp; Hand Gestures Active</span>
            </div>
          ) : null}
          <h1 className="font-arnie text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            Civil Engineering Board Examination
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md">
            Select your examination area, board set, and timing to begin the simulated PRC
            examination.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_360px] gap-6 items-start">
        <div className="space-y-6">

      {/* STEP 1: Select Area / Subject */}
      <div className="bg-slate-900/90 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400">
              Step 01
            </span>
            <h2 className="text-lg font-bold text-white font-arnie tracking-wide leading-tight">
              Select Examination Area
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                if (onOpenDonation) onOpenDonation();
                else window.dispatchEvent(new CustomEvent('open-admin-donation'));
              }}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/40 text-blue-300 hover:text-white text-xs font-bold transition-all hover:scale-[1.02] cursor-pointer shadow-sm"
              title="Admin Donation & Platform Support (GCash / InstaPay)"
            >
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-500/30" />
              <span>Admin Donation</span>
            </button>
            {onOpenTour && (
              <button
                type="button"
                onClick={onOpenTour}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold transition-all hover:scale-[1.02] cursor-pointer shadow-sm"
                title="Launch dynamic animated tour of all web functions and capabilities"
              >
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Interactive Tour &amp; Guide</span>
              </button>
            )}
          </div>
        </div>

        {/* Reference Source Toggle */}
        <div data-tour="reference-source" className="rounded-xl border border-slate-800 bg-slate-950/50 p-3.5 space-y-2.5">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 flex items-center space-x-1.5">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Reference Source</span>
            </span>
            <span className="text-[10px] text-slate-500 font-tech-mono">
              {countSetsForSource(selectedSource, selectedSubject)} sitting
              {countSetsForSource(selectedSource, selectedSubject) === 1 ? '' : 's'} for{' '}
              {selectedSubject}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {REFERENCE_SOURCES.map((src) => {
              const meta = REFERENCE_SOURCE_META[src];
              const active = selectedSource === src;
              const sittings = countSetsForSource(src, selectedSubject);
              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => onSourceChange(src)}
                  className={`text-left px-3.5 py-2.5 rounded-xl border-2 transition-all flex items-start justify-between gap-2 cursor-pointer ${
                    active
                      ? 'border-cyan-400 bg-cyan-500/10 shadow-md shadow-cyan-500/10'
                      : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                  }`}
                >
                  <span className="min-w-0">
                    <span className="flex items-center space-x-1.5">
                      <span
                        className={`text-sm font-bold font-arnie tracking-wide ${
                          active ? 'text-cyan-300' : 'text-slate-200'
                        }`}
                      >
                        {meta.label}
                      </span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 font-tech-mono uppercase">
                        {meta.badge}
                      </span>
                    </span>
                    <span className="block text-[10px] text-slate-500 truncate mt-0.5">
                      {meta.blurb}
                    </span>
                  </span>
                  <span className="shrink-0 flex items-center space-x-1.5">
                    <span
                      className={`text-[10px] font-tech-mono font-bold ${
                        sittings > 0 ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {sittings}
                    </span>
                    {active && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* MSTC Card */}
          <button
            data-tour="subject-mstc"
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
              <div className="mt-2 inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-300 font-semibold">
                <BookOpen className="w-3 h-3 text-amber-400 shrink-0" />
                <span>{refBadge}</span>
              </div>
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
            data-tour="subject-hpge"
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
              <div className="mt-2 inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-[10px] text-cyan-300 font-semibold">
                <BookOpen className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>{refBadge}</span>
              </div>
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
            data-tour="subject-psad"
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
              <div className="mt-2 inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-300 font-semibold">
                <BookOpen className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>{refBadge}</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="text-emerald-400 font-tech-mono">Std. Time: 5 Hours</span>
              {selectedSubject === 'PSAD' && (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              )}
            </div>
          </button>
        </div>

        {/* Reference Citation Only */}
        <div className="flex items-center space-x-2 text-xs text-slate-400 pt-1">
          <BookOpen className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>
            Reference:{' '}
            <strong className="font-semibold text-slate-300">
              {selectedSource === 'Besavilla'
                ? 'Besavilla — Civil Engineering Licensure Examinations, Solved Problems'
                : 'Gillesania CE Reference Book Volume 4-6'}
            </strong>
          </span>
        </div>
      </div>

      {/* STEP 2: Select Past Board Exam Year & Month */}
      <div data-tour="exam-year-month" className="bg-slate-900/90 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl space-y-5">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400">
            Step 02
          </span>
          <h2 className="text-lg font-bold text-white font-arnie tracking-wide leading-tight">
            Select Past Board Exam Year &amp; Month
          </h2>
        </div>

        {/* Year Selector (newest to oldest, derived from ALL_YEARS) */}
        <div>
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>
                Examination Year ({ALL_YEARS[ALL_YEARS.length - 1]} – {ALL_YEARS[0]})
              </span>
            </span>
          </label>
          <div className="grid grid-cols-5 sm:grid-cols-8 gap-1.5">
            {ALL_YEARS.map((yr) => {
              const hasData = isYearAvailable(yr, selectedSubject, selectedSource);
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
                      : 'bg-slate-950/40 text-slate-600 border border-slate-800/60 opacity-70 select-none cursor-not-allowed'
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
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ALL_MONTHS.map((mon) => {
              const hasData = isMonthAvailable(mon, selectedYear, selectedSubject, selectedSource);
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
                  className={`p-2.5 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between gap-1.5 ${
                    isSelected
                      ? 'border-amber-400 bg-amber-500/10 text-amber-300 shadow-md ring-1 ring-amber-400/40'
                      : hasData
                      ? 'border-slate-800 bg-slate-950/60 text-slate-200 hover:border-slate-700 cursor-pointer'
                      : 'border-slate-800/60 bg-slate-950/40 text-slate-600 opacity-70 select-none cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center space-x-1.5 min-w-0">
                    {!hasData && <Lock className="w-3 h-3 text-slate-500 shrink-0" />}
                    <span className="whitespace-nowrap">{mon} Exam</span>
                  </div>

                  {isSelected && hasData && (
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </div>

        </div>

        <aside className="space-y-5 xl:sticky xl:top-20">
          {/* STEP 3: Timer & Simulation Mode */}
          <div data-tour="timer-mode" className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 shadow-xl">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400">
                Step 03
              </span>
              <h2 className="text-lg font-bold text-white font-arnie tracking-wide leading-tight">
                Timing &amp; Mode
              </h2>
            </div>

            {/* Clock */}
            <div className="mt-4">
              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-2 flex items-center space-x-1.5">
                <Clock className="w-3 h-3" />
                <span>Clock</span>
              </div>
              <div className="space-y-1.5">
                {(
                  [
                    {
                      id: 'exam_timer' as TimerMode,
                      label: 'Standard PRC Timer',
                      hint: `${currentConfig.defaultMinutes / 60}h countdown · auto-submit`,
                      icon: Clock,
                    },
                    {
                      id: 'stopwatch' as TimerMode,
                      label: 'Stopwatch',
                      hint: 'Counts up · no cutoff',
                      icon: Timer,
                    },
                    {
                      id: 'no_limit' as TimerMode,
                      label: 'Untimed Practice',
                      hint: 'No clock · own pace',
                      icon: InfinityIcon,
                    },
                  ] as const
                ).map((opt) => {
                  const active = timerMode === opt.id;
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => onTimerModeChange(opt.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg border transition-all flex items-center justify-between gap-2 cursor-pointer ${
                        active
                          ? 'border-amber-400 bg-amber-500/10'
                          : 'border-slate-800 bg-slate-950/40 hover:border-slate-700'
                      }`}
                    >
                      <span className="flex items-center space-x-2 min-w-0">
                        <Icon
                          className={`w-3.5 h-3.5 shrink-0 ${active ? 'text-amber-400' : 'text-slate-500'}`}
                        />
                        <span className="min-w-0">
                          <span
                            className={`block text-xs font-bold truncate ${
                              active ? 'text-white' : 'text-slate-300'
                            }`}
                          >
                            {opt.label}
                          </span>
                          <span className="block text-[10px] text-slate-500 truncate">{opt.hint}</span>
                        </span>
                      </span>
                      {active && <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {timerMode === 'exam_timer' && (
                <div className="mt-2">
                  <button
                    type="button"
                    onClick={() => setShowCustomTimeInput(!showCustomTimeInput)}
                    className="text-[11px] text-amber-400 hover:underline cursor-pointer"
                  >
                    {showCustomTimeInput
                      ? '− Hide custom duration'
                      : `+ Custom duration (default ${currentConfig.defaultMinutes} min)`}
                  </button>
                  {showCustomTimeInput && (
                    <div className="mt-2 flex items-center space-x-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                      <input
                        type="number"
                        min="5"
                        max="600"
                        value={customMinutes}
                        onChange={(e) => onCustomMinutesChange(Number(e.target.value))}
                        className="w-20 px-2 py-1.5 rounded-md bg-slate-900 border border-slate-700 text-white text-xs font-tech-mono"
                      />
                      <span className="text-[11px] text-slate-400">minutes</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Feedback mode */}
            <div className="mt-5 pt-4 border-t border-slate-800">
              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-2 flex items-center space-x-1.5">
                <Zap className="w-3 h-3" />
                <span>Feedback</span>
              </div>
              <div className="space-y-1.5">
                {(
                  [
                    {
                      id: 'interactive' as ExamMode,
                      label: 'Interactive Study',
                      hint: 'Instant feedback + solution',
                      icon: Zap,
                    },
                    {
                      id: 'non_interactive' as ExamMode,
                      label: 'Official Simulation',
                      hint: 'Keys released after submit',
                      icon: Eye,
                    },
                  ] as const
                ).map((opt) => {
                  const active = examMode === opt.id;
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => onExamModeChange(opt.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg border transition-all flex items-center justify-between gap-2 cursor-pointer ${
                        active
                          ? 'border-amber-400 bg-amber-500/10'
                          : 'border-slate-800 bg-slate-950/40 hover:border-slate-700'
                      }`}
                    >
                      <span className="flex items-center space-x-2 min-w-0">
                        <Icon
                          className={`w-3.5 h-3.5 shrink-0 ${active ? 'text-amber-400' : 'text-slate-500'}`}
                        />
                        <span className="min-w-0">
                          <span
                            className={`block text-xs font-bold truncate ${
                              active ? 'text-white' : 'text-slate-300'
                            }`}
                          >
                            {opt.label}
                          </span>
                          <span className="block text-[10px] text-slate-500 truncate">{opt.hint}</span>
                        </span>
                      </span>
                      {active && <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Launch Exam CTA */}
          <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 rounded-2xl p-5 text-slate-950 shadow-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] bg-slate-950 text-amber-400 px-2.5 py-1 rounded-full inline-block">
              {hasSelectedData ? 'Ready to Begin' : 'Awaiting Data Update'}
            </span>
            <h3 className="font-arnie text-xl font-bold mt-2.5 leading-tight">
              Proceed to {selectedSubject} Examination
            </h3>
            <p className="text-[11px] text-slate-900/80 mt-1">
              {selectedMonth} {selectedYear} ·{' '}
              {examMode === 'interactive' ? 'Interactive Study' : 'Official Simulation'} ·{' '}
              {timerMode === 'exam_timer'
                ? 'Timed'
                : timerMode === 'stopwatch'
                ? 'Stopwatch'
                : 'Untimed'}
            </p>

            <div className="mt-4 space-y-2">
              {currentPausedSession ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      if (!activeUser) {
                        openAuthModal('Please sign in or create an account first to resume an exam session.');
                        return;
                      }
                      onResumeExam(currentPausedSession);
                    }}
                    className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-xl transition-all font-arnie tracking-wider bg-slate-950 hover:bg-slate-900 text-amber-400 hover:scale-[1.02] cursor-pointer"
                  >
                    {activeUser ? (
                      <>
                        <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <span>RESUME SESSION</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 text-amber-400" />
                        <span>SIGN IN TO RESUME</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (!activeUser) {
                        openAuthModal('Please sign in or create an account first to start the examination.');
                        return;
                      }
                      deletePausedSession(selectedSubject, selectedYear, selectedMonth, selectedSource);
                      setPausedSessionsList(getAllPausedSessions());
                      onStartExam();
                    }}
                    className="w-full py-2.5 rounded-lg font-bold text-[11px] flex items-center justify-center space-x-1.5 transition-all font-arnie tracking-wider bg-slate-950/15 hover:bg-slate-950/25 text-slate-950 border border-slate-950/30 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>START FRESH</span>
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    if (!activeUser) {
                      openAuthModal('Please sign in or create an account first to start the examination.');
                      return;
                    }
                    onStartExam();
                  }}
                  disabled={!hasSelectedData}
                  className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-xl transition-all font-arnie tracking-wider ${
                    hasSelectedData
                      ? 'bg-slate-950 hover:bg-slate-900 text-white hover:scale-[1.02] cursor-pointer'
                      : 'bg-slate-950/50 text-slate-500 cursor-not-allowed opacity-60'
                  }`}
                >
                  {activeUser ? (
                    <>
                      <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span>START EXAMINATION</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 text-amber-400" />
                      <span>SIGN IN TO START EXAM</span>
                    </>
                  )}
                </button>
              )}

              {!activeUser && (
                <p className="text-[10px] text-slate-950 font-semibold text-center flex items-center justify-center gap-1 pt-1 opacity-90">
                  <Lock className="w-3 h-3 text-slate-950 shrink-0" />
                  <span>Sign up or log in first to begin official exam simulation</span>
                </p>
              )}
            </div>
          </div>

          {/* PWA Install Card for Offline Review */}
          <PWAInstallButton variant="card" />

        </aside>
      </div>

      {/* Paused Study Session Card (if saved session exists for this exam) */}
      {currentPausedSession && (
        <div className="bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border-2 border-amber-500/50 rounded-2xl p-6 shadow-2xl relative overflow-hidden animate-in fade-in">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center space-x-2.5">
                <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <BookmarkCheck className="w-3.5 h-3.5" />
                  <span>Paused Session Found</span>
                </span>
                <span className="text-xs text-slate-400 font-tech-mono">
                  Saved {new Date(currentPausedSession.savedAt).toLocaleDateString()} at{' '}
                  {new Date(currentPausedSession.savedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>

              <h4 className="font-arnie text-xl font-bold text-white">
                Continue {selectedSubject} {selectedMonth} {selectedYear}
              </h4>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <div className="flex items-center space-x-1.5">
                  <span className="text-slate-400">Next Question:</span>
                  <span className="font-bold text-amber-400 font-arnie text-sm">
                    #{currentPausedSession.currentIndex + 1}
                  </span>
                  <span className="text-slate-400">/ {currentPausedSession.totalQuestions}</span>
                </div>
                <span className="text-slate-600">•</span>
                <div className="flex items-center space-x-1.5">
                  <span className="text-slate-400">Answered:</span>
                  <span className="font-bold text-emerald-400">
                    {currentPausedSession.answeredCount} items ({Math.round((currentPausedSession.answeredCount / currentPausedSession.totalQuestions) * 100)}%)
                  </span>
                </div>
                {currentPausedSession.timerMode === 'stopwatch' && (
                  <>
                    <span className="text-slate-600">•</span>
                    <div className="flex items-center space-x-1.5 font-tech-mono">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-cyan-300">{formatTime(currentPausedSession.secondsElapsed)} elapsed</span>
                    </div>
                  </>
                )}
                {currentPausedSession.timerMode === 'no_limit' && (
                  <>
                    <span className="text-slate-600">•</span>
                    <span className="text-emerald-400 font-medium">Untimed Practice</span>
                  </>
                )}
                <span className="text-slate-600">•</span>
                <div className="flex items-center space-x-1.5 font-tech-mono text-cyan-400">
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Rough Sheets Saved</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-950/80 rounded-full h-2 overflow-hidden border border-slate-800 max-w-md mt-1">
                <div
                  className="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full transition-all"
                  style={{
                    width: `${Math.max(5, Math.round((currentPausedSession.answeredCount / currentPausedSession.totalQuestions) * 100))}%`,
                  }}
                />
              </div>
            </div>

            {/* Resume / Discard Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => {
                  if (!activeUser) {
                    openAuthModal('Please sign in or create an account first to resume an exam session.');
                    return;
                  }
                  onResumeExam(currentPausedSession);
                }}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm font-arnie tracking-wider flex items-center space-x-2 shadow-lg shadow-amber-500/20 hover:scale-105 transition-all cursor-pointer"
              >
                {activeUser ? (
                  <>
                    <Play className="w-4 h-4 fill-slate-950" />
                    <span>RESUME STUDY (Q#{currentPausedSession.currentIndex + 1})</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-slate-950" />
                    <span>SIGN IN TO RESUME</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setSessionToDiscard(currentPausedSession)}
                className="px-3.5 py-3 rounded-xl bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 border border-slate-700 hover:border-rose-500/30 text-xs font-semibold transition-colors cursor-pointer flex items-center space-x-1.5"
                title="Discard saved progress and start fresh"
              >
                <Trash2 className="w-4 h-4" />
                <span className="hidden sm:inline">Discard</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Other Paused Sessions Notification Bar */}
      {otherPausedSessions.length > 0 && (
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2 text-slate-300">
            <Pause className="w-4 h-4 text-cyan-400" />
            <span>
              You have <strong className="text-white">{otherPausedSessions.length}</strong> other paused study session{otherPausedSessions.length > 1 ? 's' : ''}:
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {otherPausedSessions.map((s) => (
              <div
                key={s.id}
                className="flex items-center rounded-lg bg-slate-800 border border-slate-700 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => onResumeExam(s)}
                  className="flex items-center space-x-1.5 px-2.5 py-1 text-slate-200 hover:text-amber-300 hover:bg-slate-700/80 text-xs transition-colors cursor-pointer"
                >
                  <span className="font-bold text-amber-400">{s.subject}</span>
                  <span>{s.month} {s.year}</span>
                  <span className="text-[10px] text-slate-400 font-tech-mono">({s.answeredCount}/{s.totalQuestions})</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </button>
                <button
                  type="button"
                  onClick={() => setSessionToDiscard(s)}
                  className="px-2 py-1 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 border-l border-slate-700 transition-colors cursor-pointer"
                  title={`Discard ${s.subject} ${s.month} ${s.year} session`}
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            ))}

            {allPausedSessions.length > 1 && (
              <button
                type="button"
                onClick={() => setSessionToDiscard('ALL')}
                className="px-2.5 py-1 rounded-lg text-xs text-rose-400/90 hover:text-rose-300 hover:bg-rose-500/10 border border-rose-500/20 transition-colors cursor-pointer"
              >
                Clear All ({allPausedSessions.length})
              </button>
            )}
          </div>
        </div>
      )}

      {/* Formula Deck & Term Quiz Quick Access */}
      {onNavigateToFlashcards && (
        <div className="bg-slate-900/80 border border-amber-500/30 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
              <Layers className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  Formula Deck &amp; Term Quiz
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  971 Cards &middot; 1,059 Terms
                </span>
              </div>
              <h4 className="text-base font-bold text-white mt-0.5">
                Flip Formula Cards &amp; Drill CE Terms
              </h4>
            </div>
          </div>

          <button
            type="button"
            onClick={onNavigateToFlashcards}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-500/40 text-xs font-bold font-arnie tracking-wider transition-all flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>OPEN FORMULA CARDS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* In-App Discard Confirmation Modal */}
      {sessionToDiscard && (
        <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex items-center space-x-3 text-rose-400">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center shrink-0">
                <Trash2 className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <h3 className="font-arnie text-lg font-bold text-white">
                  {sessionToDiscard === 'ALL' ? 'Clear All Paused Sessions?' : 'Discard Paused Session?'}
                </h3>
                <span className="text-[11px] text-slate-400">This action cannot be undone</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {sessionToDiscard === 'ALL' ? (
                <>
                  Are you sure you want to discard all <strong className="text-white">{allPausedSessions.length}</strong> saved paused study sessions? All saved answers and elapsed timers will be deleted.
                </>
              ) : (
                <>
                  Are you sure you want to discard your saved session for <strong className="text-amber-400">{sessionToDiscard.subject} {sessionToDiscard.month} {sessionToDiscard.year}</strong> ({sessionToDiscard.answeredCount} of {sessionToDiscard.totalQuestions} answered)?
                </>
              )}
            </p>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setSessionToDiscard(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (sessionToDiscard === 'ALL') {
                    clearAllPausedSessions();
                  } else {
                    deletePausedSession(
                      sessionToDiscard.subject,
                      sessionToDiscard.year,
                      sessionToDiscard.month,
                      sessionToDiscard.source ?? 'Gillesania'
                    );
                  }
                  setPausedSessionsList(getAllPausedSessions());
                  setSessionToDiscard(null);
                }}
                className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-400 text-white font-bold text-xs flex items-center space-x-1.5 transition-colors cursor-pointer shadow-md shadow-rose-500/20"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Yes, Discard</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

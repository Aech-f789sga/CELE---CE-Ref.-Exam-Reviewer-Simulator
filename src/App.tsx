import React, { useState, useEffect } from 'react';
import {
  SubjectArea,
  ExamMonth,
  TimerMode,
  ExamMode,
  Question,
  ExamAttempt,
  SUBJECT_CONFIGS,
  PausedExamSession,
} from './types/exam';
import { getQuestionsForExam, hasExamData } from './data/questionBankManager';
import {
  getStoredAttempts,
  saveAttempt,
  savePausedSession,
  deletePausedSession,
  getSessionKey,
} from './utils/storage';
import { Navbar } from './components/Navbar';
import { SubjectSelector } from './components/SubjectSelector';
import { ExamEngine } from './components/ExamEngine';
import { ExamResults } from './components/ExamResults';
import { PerformanceReview } from './components/PerformanceReview';
import { AdminPanel } from './components/AdminPanel';
import { LeaderboardView } from './components/LeaderboardView';
import { AnnouncementSection } from './components/AnnouncementSection';
import { ThemeModal } from './components/ThemeModal';
import { AuthModal } from './components/AuthModal';
import { useTheme } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Scene3D } from './components/Scene3D';
import { TerrariumOrb3D } from './components/TerrariumOrb3D';
import { Matilda3D } from './components/Matilda3D';
import { ParticleSystem3D } from './components/ParticleSystem3D';
import { SubmergedEra3D } from './components/SubmergedEra3D';
import { useParticleTheme, PARTICLE_COLOR_PRESETS } from './context/ParticleThemeContext';
import {
  Sparkles,
  Sliders,
  ChevronUp,
  ChevronDown,
  Hand,
  Camera,
  Heart,
  Flower2,
  Globe,
  Flame,
  Atom,
} from 'lucide-react';
import { recordExamAttempt, fetchAnnouncements, SystemAnnouncement } from './services/firebase';

function MainApp() {
  const [currentTab, setCurrentTab] = useState<
    'setup' | 'leaderboard' | 'announcements' | 'performance' | 'admin'
  >('setup');
  const [isThemeModalOpen, setIsThemeModalOpen] = useState<boolean>(false);
  const [latestAnnouncement, setLatestAnnouncement] = useState<SystemAnnouncement | null>(null);
  const { themeConfig } = useTheme();
  const particleTheme = useParticleTheme();
  const [isParticleRemoteOpen, setIsParticleRemoteOpen] = useState<boolean>(false);
  const { user, profile } = useAuth();
  const activeUser = profile || user;

  // Selection states
  const [selectedSubject, setSelectedSubject] = useState<SubjectArea>('MSTC'); // Default MSTC first
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [selectedMonth, setSelectedMonth] = useState<ExamMonth>('April');
  const [timerMode, setTimerMode] = useState<TimerMode>('exam_timer');
  const [customMinutes, setCustomMinutes] = useState<number>(300); // 5h for MSTC default
  const [examMode, setExamMode] = useState<ExamMode>('interactive'); // default interactive mode

  // Exam session states
  const [isExamRunning, setIsExamRunning] = useState<boolean>(false);
  const [isExamFinished, setIsExamFinished] = useState<boolean>(false);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [lastUserAnswers, setLastUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [lastTimeSpent, setLastTimeSpent] = useState<number>(0);
  const [resumedSession, setResumedSession] = useState<PausedExamSession | null>(null);

  // Stored attempts
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);

  // Load stored attempts and announcements on mount
  useEffect(() => {
    setAttempts(getStoredAttempts());
    fetchAnnouncements(true)
      .then((list) => {
        if (list.length > 0) {
          setLatestAnnouncement(list[0]);
        }
      })
      .catch(() => {});
  }, []);

  // Sync default timer duration when subject changes
  const handleSubjectChange = (newSub: SubjectArea) => {
    setSelectedSubject(newSub);
    const config = SUBJECT_CONFIGS[newSub];
    setCustomMinutes(config.defaultMinutes);
    // If current selected month has no data for the newly selected subject, adjust to an available month
    if (!hasExamData(newSub, selectedYear, selectedMonth)) {
      if (hasExamData(newSub, selectedYear, 'April')) {
        setSelectedMonth('April');
      }
    }
  };

  const handleStartExam = () => {
    setResumedSession(null);
    const qList = getQuestionsForExam(selectedSubject, selectedYear, selectedMonth);
    setActiveQuestions(qList);
    setIsExamRunning(true);
    setIsExamFinished(false);
  };

  const handleResumeExam = (session: PausedExamSession) => {
    setSelectedSubject(session.subject);
    setSelectedYear(session.year);
    setSelectedMonth(session.month);
    setTimerMode(session.timerMode);
    setExamMode('interactive');
    setResumedSession(session);
    const qList = getQuestionsForExam(session.subject, session.year, session.month);
    setActiveQuestions(qList);
    setIsExamRunning(true);
    setIsExamFinished(false);
  };

  const handleSaveAndExitExam = (state: {
    currentIndex: number;
    userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
    flaggedQuestions: Record<string, boolean>;
    secondsElapsed: number;
  }) => {
    const sessionToSave: PausedExamSession = {
      id: getSessionKey(selectedSubject, selectedYear, selectedMonth),
      subject: selectedSubject,
      year: selectedYear,
      month: selectedMonth,
      timerMode: timerMode === 'stopwatch' ? 'stopwatch' : 'no_limit',
      examMode: 'interactive',
      currentIndex: state.currentIndex,
      userAnswers: state.userAnswers,
      flaggedQuestions: state.flaggedQuestions,
      secondsElapsed: state.secondsElapsed,
      savedAt: new Date().toISOString(),
      totalQuestions: activeQuestions.length,
      answeredCount: Object.keys(state.userAnswers).length,
    };
    savePausedSession(sessionToSave);
    setIsExamRunning(false);
    setResumedSession(null);
    setCurrentTab('setup');
  };

  const handleSubmitExam = (
    userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>,
    timeSpentSeconds: number
  ) => {
    let correctCount = 0;
    activeQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const ratingPercentage = Math.round((correctCount / activeQuestions.length) * 10000) / 100;
    const passedArea = ratingPercentage >= 50.0;

    const newAttempt: ExamAttempt = {
      id: `attempt-${Date.now()}`,
      attemptIndexInSubject: 1, // Will be computed inside saveAttempt
      subject: selectedSubject,
      year: selectedYear,
      month: selectedMonth,
      date: new Date().toISOString(),
      timeSpentSeconds,
      timerMode,
      isInteractive: examMode === 'interactive',
      userAnswers,
      score: correctCount,
      totalQuestions: activeQuestions.length,
      ratingPercentage,
      passedArea,
    };

    const updatedList = saveAttempt(newAttempt);
    setAttempts(updatedList);

    // If user is authenticated, also sync attempt to Firestore
    if (activeUser) {
      recordExamAttempt({
        userId: activeUser.uid,
        userEmail: activeUser.email || '',
        subject: selectedSubject,
        year: selectedYear,
        month: selectedMonth,
        score: correctCount,
        totalQuestions: activeQuestions.length,
        ratingPercentage,
        passedArea,
        timeSpentSeconds,
        timerMode,
        completedAt: new Date().toISOString(),
      }).catch((e) => console.warn('Cloud attempt record fallback:', e));
    }

    deletePausedSession(selectedSubject, selectedYear, selectedMonth);
    setResumedSession(null);
    setLastUserAnswers(userAnswers);
    setLastTimeSpent(timeSpentSeconds);
    setIsExamRunning(false);
    setIsExamFinished(true);
  };

  const handleRetakeSameArea = () => {
    handleStartExam();
  };

  const handleTakeNextArea = (nextSub: SubjectArea) => {
    handleSubjectChange(nextSub);
    setIsExamFinished(false);
    setCurrentTab('setup');
  };

  const handleViewPerformance = () => {
    setIsExamFinished(false);
    setCurrentTab('performance');
  };

  const handleExitHome = () => {
    setIsExamRunning(false);
    setIsExamFinished(false);
    setResumedSession(null);
    setCurrentTab('setup');
  };

  // Compute duration in seconds for timer
  const totalDurationSeconds =
    timerMode === 'exam_timer' ? customMinutes * 60 : 0;

  const isAurora = themeConfig.id === 'aurora_glass';
  const isTerrarium = themeConfig.id === 'terrarium_orb';
  const isMatilda = themeConfig.id === 'matilda_3d';
  const isParticle = themeConfig.id === 'particle_flow';
  const isSubmerged = themeConfig.id === 'submerged_era';
  const is3DTheme = isAurora || isTerrarium || isMatilda || isParticle || isSubmerged;

  return (
    <>
      {isSubmerged && (
        <div className="scene-layer opacity-65 pointer-events-none">
          <SubmergedEra3D mode="background" interactive={false} />
        </div>
      )}
      {isAurora && (
        <div className="scene-layer">
          <Scene3D variant="background" accent={themeConfig.accent} />
        </div>
      )}
      {isTerrarium && (
        <div className="scene-layer opacity-50 pointer-events-none">
          <TerrariumOrb3D mode="background" accent={themeConfig.accent} interactive={false} />
        </div>
      )}
      {isMatilda && (
        <div className="scene-layer opacity-45 pointer-events-none">
          <Matilda3D mode="background" accent={themeConfig.accent} interactive={false} />
        </div>
      )}
      {isParticle && (
        <>
          {/* Dynamic Reactive Background Atmosphere that morphs when 3D particles are manipulated */}
          <div
            className="fixed inset-0 pointer-events-none z-0 transition-all duration-300"
            style={{
              background: `radial-gradient(${Math.round(35 + particleTheme.effectiveTension * 32)}rem ${Math.round(
                25 + particleTheme.effectiveTension * 24
              )}rem at 50% 12%, ${particleTheme.primaryColor}${Math.round(
                Math.min(255, (0.08 + particleTheme.effectiveTension * 0.12) * 255)
              ).toString(16).padStart(2, '0')}, transparent 70%),
              radial-gradient(${Math.round(38 + particleTheme.effectiveTension * 28)}rem ${Math.round(
                28 + particleTheme.effectiveTension * 24
              )}rem at 85% 85%, ${particleTheme.secondaryColor}${Math.round(
                Math.min(255, (0.06 + particleTheme.effectiveTension * 0.10) * 255)
              ).toString(16).padStart(2, '0')}, transparent 70%),
              radial-gradient(40rem 35rem at 15% 75%, ${particleTheme.primaryColor}16, transparent 75%),
              #040714`,
            }}
          />
          <div className="scene-layer opacity-60 pointer-events-none">
            <ParticleSystem3D mode="background" interactive={false} />
          </div>
        </>
      )}
      <div
        className={`min-h-screen flex flex-col transition-colors duration-250 ${is3DTheme ? 'app-above-scene' : ''}`}
        style={{
          backgroundColor: is3DTheme ? 'transparent' : themeConfig.bgPage,
          color: themeConfig.textPrimary,
        }}
      >
        <Navbar
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          activeSubject={selectedSubject}
          onSubjectChange={handleSubjectChange}
          isExamRunning={isExamRunning}
          onOpenThemeModal={() => setIsThemeModalOpen(true)}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* VIEW 1: Active Exam Engine */}
          {isExamRunning && (
            <ExamEngine
              subject={selectedSubject}
              year={selectedYear}
              month={selectedMonth}
              questions={activeQuestions}
              timerMode={timerMode}
              totalDurationSeconds={totalDurationSeconds}
              examMode={examMode}
              initialCurrentIndex={resumedSession?.currentIndex}
              initialUserAnswers={resumedSession?.userAnswers}
              initialFlaggedQuestions={resumedSession?.flaggedQuestions}
              initialSecondsElapsed={resumedSession?.secondsElapsed}
              onSubmit={handleSubmitExam}
              onExit={handleExitHome}
              onSaveAndExit={handleSaveAndExitExam}
            />
          )}

          {/* VIEW 2: Exam Results */}
          {!isExamRunning && isExamFinished && (
            <ExamResults
              subject={selectedSubject}
              year={selectedYear}
              month={selectedMonth}
              questions={activeQuestions}
              userAnswers={lastUserAnswers}
              timeSpentSeconds={lastTimeSpent}
              onRetakeSameArea={handleRetakeSameArea}
              onTakeNextArea={handleTakeNextArea}
              onViewPerformance={handleViewPerformance}
              onExitHome={handleExitHome}
            />
          )}

          {/* VIEW 3: Standard Navigation Views */}
          {!isExamRunning && !isExamFinished && (
            <>
              {/* Optional Top Announcement Alert Banner on Exam Portal */}
              {currentTab === 'setup' && latestAnnouncement && (
                <div className="max-w-7xl mx-auto mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in">
                  <div className="flex items-start sm:items-center space-x-3">
                    <span className="p-2 rounded-xl bg-amber-500/20 text-amber-300 shrink-0">
                      📣
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-xs">
                          {latestAnnouncement.title}
                        </span>
                        {latestAnnouncement.isPinned && (
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500 text-slate-950 font-black">
                            PINNED
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                        {latestAnnouncement.message}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentTab('announcements')}
                    className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shrink-0 cursor-pointer self-start sm:self-auto"
                  >
                    Read All Updates
                  </button>
                </div>
              )}

              {currentTab === 'setup' && (
                <SubjectSelector
                  selectedSubject={selectedSubject}
                  onSubjectChange={handleSubjectChange}
                  selectedYear={selectedYear}
                  onYearChange={setSelectedYear}
                  selectedMonth={selectedMonth}
                  onMonthChange={setSelectedMonth}
                  timerMode={timerMode}
                  onTimerModeChange={setTimerMode}
                  customMinutes={customMinutes}
                  onCustomMinutesChange={setCustomMinutes}
                  examMode={examMode}
                  onExamModeChange={setExamMode}
                  onStartExam={handleStartExam}
                  onResumeExam={handleResumeExam}
                />
              )}

              {currentTab === 'leaderboard' && (
                <LeaderboardView
                  onTakeExamArea={(sub) => {
                    handleSubjectChange(sub);
                    setCurrentTab('setup');
                  }}
                />
              )}

              {currentTab === 'announcements' && (
                <AnnouncementSection
                  onNavigateToAdmin={() => setCurrentTab('admin')}
                  onTakeExam={() => setCurrentTab('setup')}
                />
              )}

              {currentTab === 'performance' && (
                <PerformanceReview
                  attempts={attempts}
                  onAttemptsChange={setAttempts}
                  onTakeExamArea={(sub) => {
                    handleSubjectChange(sub);
                    setCurrentTab('setup');
                  }}
                />
              )}

              {currentTab === 'admin' && (
                <AdminPanel
                  onNavigateToExam={(sub) => {
                    handleSubjectChange(sub);
                    setCurrentTab('setup');
                  }}
                />
              )}
            </>
          )}
        </main>

        {/* Authentication Modal */}
        <AuthModal />

        {/* Theme & Fonts Customizer Modal */}
        <ThemeModal
          isOpen={isThemeModalOpen}
          onClose={() => setIsThemeModalOpen(false)}
        />

        {/* Footer */}
        <footer
          className="border-t py-6 text-center text-xs transition-colors"
          style={{
            borderColor: themeConfig.border,
            backgroundColor: themeConfig.bgPage,
            color: themeConfig.textMuted,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="font-tech-mono">
              Philippine Civil Engineering Licensure Examination (CE Board Exam) Simulator
            </p>
            <p className="text-[11px]" style={{ color: themeConfig.textMuted }}>
              PRC Criteria: GWA ≥ 70.00% • MSTC 35% • HPGE 30% • PSAD 35% • No Rating &lt; 50.00%
            </p>
          </div>
        </footer>
        {/* Floating Quick Particle Controller for the Theme (Available from any tab or during exams) */}
        {isParticle && (
          <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end">
            {isParticleRemoteOpen ? (
              <div
                className="p-3 rounded-2xl border shadow-2xl backdrop-blur-xl max-w-xs w-72 flex flex-col space-y-2.5 animate-in fade-in slide-in-from-bottom-2 duration-200"
                style={{
                  backgroundColor: 'rgba(10, 16, 38, 0.95)',
                  borderColor: 'rgba(56, 189, 248, 0.4)',
                }}
              >
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                  <div className="flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-xs font-bold text-cyan-200">Particle &amp; BG Remote</span>
                  </div>
                  <button
                    onClick={() => setIsParticleRemoteOpen(false)}
                    className="text-slate-400 hover:text-white text-xs px-1 rounded cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="text-[10px] text-cyan-300/80 bg-cyan-950/40 p-1.5 rounded-lg border border-cyan-500/20">
                  Manipulating particles dynamically changes the background lighting in real-time.
                </div>

                {/* Template quick buttons */}
                <div className="grid grid-cols-3 gap-1">
                  {(
                    [
                      { id: 'heart', label: 'Heart', icon: <Heart className="w-3 h-3 text-rose-400" /> },
                      { id: 'flower', label: 'Lotus', icon: <Flower2 className="w-3 h-3 text-pink-400" /> },
                      { id: 'saturn', label: 'Saturn', icon: <Globe className="w-3 h-3 text-amber-400" /> },
                      { id: 'buddha', label: 'Buddha', icon: <Atom className="w-3 h-3 text-emerald-400" /> },
                      { id: 'fireworks', label: 'Fireworks', icon: <Flame className="w-3 h-3 text-orange-400" /> },
                      { id: 'galaxy', label: 'Galaxy', icon: <Sparkles className="w-3 h-3 text-cyan-400" /> },
                    ] as const
                  ).map((tpl) => (
                    <button
                      key={tpl.id}
                      onClick={() => particleTheme.setActiveTemplate(tpl.id)}
                      className={`flex items-center justify-center space-x-1 py-1 px-1.5 rounded-lg text-[10px] font-semibold border transition-all cursor-pointer ${
                        particleTheme.activeTemplate === tpl.id
                          ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                          : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {tpl.icon}
                      <span>{tpl.label}</span>
                    </button>
                  ))}
                </div>

                {/* Tension slider */}
                <div className="space-y-1 pt-1 border-t border-slate-800">
                  <div className="flex justify-between text-[10px] text-slate-300">
                    <span className="flex items-center space-x-1">
                      <Sliders className="w-3 h-3 text-cyan-400" />
                      <span>Tension / Expansion:</span>
                    </span>
                    <span className="font-mono text-cyan-300 font-bold">
                      {particleTheme.effectiveTension.toFixed(1)}x
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="2.6"
                    step="0.05"
                    value={particleTheme.tensionScale}
                    onChange={(e) => {
                      particleTheme.setTensionScale(parseFloat(e.target.value));
                      particleTheme.setAutoPulse(false);
                    }}
                    className="w-full accent-cyan-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-slate-400">
                    <button
                      onClick={() => particleTheme.setTensionScale(0.3)}
                      className="hover:text-cyan-300 cursor-pointer"
                    >
                      Pinch (0.3x)
                    </button>
                    <button
                      onClick={() => particleTheme.setTensionScale(1.0)}
                      className="hover:text-cyan-300 cursor-pointer"
                    >
                      Normal (1.0x)
                    </button>
                    <button
                      onClick={() => particleTheme.setTensionScale(2.2)}
                      className="hover:text-cyan-300 cursor-pointer"
                    >
                      Expand (2.2x)
                    </button>
                    <button
                      onClick={() => particleTheme.setAutoPulse(!particleTheme.autoPulse)}
                      className={`font-semibold cursor-pointer ${
                        particleTheme.autoPulse ? 'text-pink-400' : 'hover:text-cyan-300'
                      }`}
                    >
                      Pulse
                    </button>
                  </div>
                </div>

                {/* Color presets & camera */}
                <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                  <div className="flex items-center space-x-1">
                    {PARTICLE_COLOR_PRESETS.map((preset) => (
                      <button
                        key={preset.name}
                        onClick={() => particleTheme.applyColorPreset(preset)}
                        className="w-4 h-4 rounded-full border border-white/20 transition-transform hover:scale-125 cursor-pointer"
                        style={{
                          background: `linear-gradient(135deg, ${preset.primary}, ${preset.secondary})`,
                        }}
                        title={preset.name}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => particleTheme.setIsCameraActive(!particleTheme.isCameraActive)}
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-lg border transition-all cursor-pointer ${
                      particleTheme.isCameraActive
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                        : 'border-cyan-500/40 text-cyan-200 hover:bg-cyan-900/40'
                    }`}
                  >
                    {particleTheme.isCameraActive ? 'Camera ON' : 'Camera Hands'}
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsParticleRemoteOpen(true)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold border shadow-xl backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
                style={{
                  backgroundColor: 'rgba(10, 16, 38, 0.92)',
                  borderColor: 'rgba(56, 189, 248, 0.45)',
                  color: '#7dd3fc',
                }}
                title="Open 3D Particle & Background Controller"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                <span>Particle &amp; BG Remote</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

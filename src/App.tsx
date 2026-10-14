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
import { recordExamAttempt, fetchAnnouncements, SystemAnnouncement } from './services/firebase';

function MainApp() {
  const [currentTab, setCurrentTab] = useState<
    'setup' | 'leaderboard' | 'announcements' | 'performance' | 'admin'
  >('setup');
  const [isThemeModalOpen, setIsThemeModalOpen] = useState<boolean>(false);
  const [latestAnnouncement, setLatestAnnouncement] = useState<SystemAnnouncement | null>(null);
  const { themeConfig } = useTheme();
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

  return (
    <>
      {isAurora && (
        <div className="scene-layer">
          <Scene3D variant="background" accent={themeConfig.accent} />
        </div>
      )}
      <div
        className={`min-h-screen flex flex-col transition-colors duration-250 ${isAurora ? 'app-above-scene' : ''}`}
        style={{
          backgroundColor: isAurora ? 'transparent' : themeConfig.bgPage,
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

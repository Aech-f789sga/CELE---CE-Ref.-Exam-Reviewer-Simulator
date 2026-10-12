import React, { useState, useEffect } from 'react';
import {
  SubjectArea,
  ExamMonth,
  TimerMode,
  ExamMode,
  Question,
  ExamAttempt,
  SUBJECT_CONFIGS,
} from './types/exam';
import { getQuestionsForExam, hasExamData } from './data/questionBankManager';
import { getStoredAttempts, saveAttempt } from './utils/storage';
import { Navbar } from './components/Navbar';
import { SubjectSelector } from './components/SubjectSelector';
import { ExamEngine } from './components/ExamEngine';
import { ExamResults } from './components/ExamResults';
import { PerformanceReview } from './components/PerformanceReview';
import { BookletView } from './components/BookletView';
import { ThemeModal } from './components/ThemeModal';
import { useTheme } from './context/ThemeContext';
import { Scene3D } from './components/Scene3D';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'setup' | 'performance' | 'booklet'>('setup');
  const [isThemeModalOpen, setIsThemeModalOpen] = useState<boolean>(false);
  const { themeConfig } = useTheme();
  
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

  // Stored attempts
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);

  // Load stored attempts on mount
  useEffect(() => {
    setAttempts(getStoredAttempts());
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
    const qList = getQuestionsForExam(selectedSubject, selectedYear, selectedMonth);
    setActiveQuestions(qList);
    setIsExamRunning(true);
    setIsExamFinished(false);
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
            onSubmit={handleSubmitExam}
            onExit={handleExitHome}
          />
        )}

        {/* VIEW 2: Exam Results (Answer Keys Page 11 & Solutions Pages 11-33) */}
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

        {/* VIEW 3: Standard Tabs when not taking an exam */}
        {!isExamRunning && !isExamFinished && (
          <>
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

            {currentTab === 'booklet' && (
              <BookletView
                activeSubject={selectedSubject}
                activeYear={selectedYear}
                activeMonth={selectedMonth}
                onSubjectChange={handleSubjectChange}
                onYearChange={setSelectedYear}
                onMonthChange={setSelectedMonth}
                onStartExam={handleStartExam}
              />
            )}
          </>
        )}
      </main>

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

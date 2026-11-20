import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import {
  SubjectArea,
  ExamMonth,
  TimerMode,
  ExamMode,
  Question,
  ExamAttempt,
  ReferenceSource,
  SUBJECT_CONFIGS,
  PausedExamSession,
} from './types/exam';
import {
  getQuestionsForExam,
  hasExamData,
  firstAvailableSet,
  isWorkedSolutionSet,
} from './data/questionBankManager';
import {
  getStoredAttempts,
  saveAttempt,
  savePausedSession,
  deletePausedSession,
  getSessionKey,
  getExamStorageBase,
} from './utils/storage';
import {
  belongsTo,
  clearLiveSession,
  loadLiveSession,
  resolveLiveQuestions,
  resumeElapsed,
  resumeRemaining,
  type LiveSession,
} from './data/liveSession';
import { Navbar } from './components/Navbar';
import { SubjectSelector } from './components/SubjectSelector';
import { UpdatePrompt } from './components/UpdatePrompt';
import { ExamEngine } from './components/ExamEngine';
import { ResumeSessionModal } from './components/ResumeSessionModal';
import { ExamResults } from './components/ExamResults';
import { PerformanceReview } from './components/PerformanceReview';
import { AdminPanel } from './components/AdminPanel';
import { LeaderboardView } from './components/LeaderboardView';
import { AnnouncementSection } from './components/AnnouncementSection';
import { ThemeModal } from './components/ThemeModal';
import { AuthModal } from './components/AuthModal';
import { InteractiveTourModal } from './components/InteractiveTourModal';
import { CustomCursor } from './components/CustomCursor';
import { ContactAdminModal } from './components/ContactAdminModal';
import { useTheme } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Scene3D } from './components/Scene3D';
import { TerrariumOrb3D } from './components/TerrariumOrb3D';
import { Matilda3D } from './components/Matilda3D';
import { ParticleSystem3D } from './components/ParticleSystem3D';
import { SubmergedEra3D } from './components/SubmergedEra3D';
import { UnderwaveBackdrop } from './components/UnderwaveBackdrop';
import { CyberdeckBackdrop } from './components/CyberdeckBackdrop';
import { CyberdeckAudioPanel } from './components/CyberdeckAudioPanel';
import { CyberdeckAudioProvider } from './context/CyberdeckAudioContext';
import { cyberdeckAudio } from './audio/cyberdeckAudio';
import { useParticleTheme, PARTICLE_COLOR_PRESETS } from './context/ParticleThemeContext';
import { ScratchpadHub } from './components/ScratchpadHub';
import { FormulaCardsHub } from './components/FormulaCardsHub';
import { OfflineIndicator } from './components/OfflineIndicator';
import { syncExamScratchpadRecord } from './utils/scratchpadStorage';
import { useUserActivityTracker } from './hooks/useUserActivityTracker';
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
  Megaphone,
} from 'lucide-react';
import { recordExamAttempt, fetchAnnouncements, formatAnnouncerName, SystemAnnouncement } from './services/firebase';
import { isPublishable, isTopicDrill, summariseScore } from './data/grading';
import { watchTopicLock } from './data/topicLock';

function CustomBgLayer() {
  const [bg, setBg] = useState<string | null>(null);
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ce_custom_bg');
      if (saved) setBg(saved);
    } catch {}
    const handler = () => {
      try {
        const saved = localStorage.getItem('ce_custom_bg');
        setBg(saved);
      } catch {}
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);
  if (!bg) return null;
  return (
    <div
      className="fixed inset-0 z-0"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    />
  );
}

function MainApp() {
  const [currentTab, setCurrentTab] = useState<
    'setup' | 'leaderboard' | 'announcements' | 'performance' | 'admin' | 'scratchpad' | 'flashcards'
  >(() => {
    try {
      const saved = localStorage.getItem('ce_board_current_tab');
      if (
        saved &&
        ['setup', 'leaderboard', 'announcements', 'performance', 'admin', 'scratchpad', 'flashcards'].includes(saved)
      ) {
        return saved as any;
      }
    } catch {}
    return 'setup';
  });

  // Persist active tab so page refresh or re-entry keeps user on CARDS or active section
  useEffect(() => {
    try {
      localStorage.setItem('ce_board_current_tab', currentTab);
    } catch {}
  }, [currentTab]);

  const [selectedScratchpadId, setSelectedScratchpadId] = useState<string | undefined>(undefined);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState<boolean>(false);
  const [isTourOpen, setIsTourOpen] = useState<boolean>(false);
  const [isContactAdminOpen, setIsContactAdminOpen] = useState<boolean>(false);
  const [contactAdminInitialTab, setContactAdminInitialTab] = useState<'message' | 'donation' | 'my_messages'>('message');

  const handleOpenDonation = () => {
    setContactAdminInitialTab('donation');
    setIsContactAdminOpen(true);
  };

  const handleOpenContactAdmin = (tab: 'message' | 'donation' | 'my_messages' = 'message') => {
    setContactAdminInitialTab(tab);
    setIsContactAdminOpen(true);
  };
  const [latestAnnouncement, setLatestAnnouncement] = useState<SystemAnnouncement | null>(null);
  const { themeConfig } = useTheme();
  const particleTheme = useParticleTheme();
  const [isParticleRemoteOpen, setIsParticleRemoteOpen] = useState<boolean>(false);
  const { user, profile, openAuthModal, isAdmin, loading: authLoading } = useAuth();
  const activeUser = profile || user;

  /**
   * The admin tab is restored from localStorage, so hiding it in the navbar is
   * not enough: anyone can set `ce_board_current_tab` to 'admin' and land on the
   * panel. Bounce them back once auth has settled -- waiting for `authLoading`
   * keeps a real administrator from being kicked off the tab during the brief
   * window before their cached profile is read.
   */
  useEffect(() => {
    if (!authLoading && !isAdmin && currentTab === 'admin') {
      setCurrentTab('setup');
    }
  }, [authLoading, isAdmin, currentTab]);

  /**
   * "By topics" is admin-gated. The switch lives in Firestore, so follow it
   * live rather than reading once: the admin can open or close the mode while
   * someone already has the page loaded, and that has to take effect without a
   * refresh. The entry stays visible either way -- a locked mode is worth
   * advertising -- so this only decides whether it reads as open or locked.
   *
   * `known` keeps the entry from claiming "Locked" during the first round-trip.
   * Until the flag lands it simply looks normal, and the modal says it is
   * checking rather than guessing.
   */
  const [topicExamState, setTopicExamState] = useState<{ known: boolean; open: boolean }>({
    known: false,
    open: false,
  });
  useEffect(
    () => watchTopicLock((lock) => setTopicExamState({ known: true, open: lock.unlocked })),
    []
  );
  const canOpenTopicExam = isAdmin || topicExamState.open;
  const topicExamLocked = topicExamState.known && !canOpenTopicExam;

  // Selection states
  const [selectedSource, setSelectedSource] = useState<ReferenceSource>('Gillesania');
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

  /**
   * A sitting that was interrupted — a refresh, a closed tab, a killed app —
   * recovered from the engine's autosave. Offered as a choice on boot rather
   * than resumed silently, because the learner may have come back for something
   * else entirely. See `data/liveSession.ts`.
   */
  const [interrupted, setInterrupted] = useState<LiveSession | null>(null);
  /** Whether the boot check has run; it must not re-open on every re-render. */
  const [interruptedChecked, setInterruptedChecked] = useState(false);
  /**
   * Where the engine should start when a sitting is recovered. Kept apart from
   * `resumedSession` because only this one can carry a countdown to restore.
   */
  const [resumePoint, setResumePoint] = useState<{
    currentIndex: number;
    userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
    flaggedQuestions: Record<string, boolean>;
    secondsElapsed: number;
    secondsRemaining: number;
  } | null>(null);

  // Stored attempts
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);

  /**
   * Offer back whatever was interrupted. Runs once, and only after auth has
   * settled: the sitting is per account, and a refresh normally keeps the user
   * signed in, so deciding before the profile lands would throw away a paper
   * that was perfectly resumable.
   */
  useEffect(() => {
    if (authLoading || interruptedChecked) return;
    setInterruptedChecked(true);
    const saved = loadLiveSession();
    if (!saved) return;
    // Someone else's sitting on a shared browser is not ours to offer.
    if (!belongsTo(saved, activeUser?.uid)) {
      clearLiveSession();
      return;
    }
    setInterrupted(saved);
  }, [authLoading, activeUser, interruptedChecked]);

  const handleResumeInterrupted = () => {
    if (!interrupted) return;
    if (!activeUser) {
      openAuthModal('Please sign in to resume the examination you left unfinished.');
      return;
    }
    const questions = resolveLiveQuestions(interrupted);
    if (!questions) {
      // The bank changed under the sitting. Resuming would score a different
      // paper, so the only honest option is to let it go.
      clearLiveSession();
      setInterrupted(null);
      return;
    }
    // Restore the identity too, or the report and the leaderboard would label
    // the recovered paper with whatever happened to be selected on the setup
    // screen — the same mistake the drill reporting had.
    setSelectedSubject(interrupted.subject);
    setSelectedYear(interrupted.year);
    setSelectedMonth(interrupted.month);
    setSelectedSource(interrupted.source);
    setTimerMode(interrupted.timerMode);
    setExamMode(interrupted.examMode);
    if (interrupted.timerMode === 'exam_timer') {
      // `totalDurationSeconds` is derived from this, and the restored countdown
      // has to be measured against the same clock the sitting started on.
      setCustomMinutes(Math.max(1, Math.round(interrupted.totalDurationSeconds / 60)));
    }
    setResumedSession(null);
    setResumePoint({
      currentIndex: interrupted.currentIndex,
      userAnswers: interrupted.userAnswers,
      flaggedQuestions: interrupted.flaggedQuestions,
      secondsElapsed: resumeElapsed(interrupted),
      secondsRemaining: resumeRemaining(interrupted),
    });
    setActiveQuestions(questions);
    setIsExamRunning(true);
    setIsExamFinished(false);
    setInterrupted(null);
  };

  const handleDiscardInterrupted = () => {
    clearLiveSession();
    if (interrupted?.kind === 'paper') {
      // Point the setup screen at the paper that was dropped, so "start a new
      // one" means restarting that paper rather than hunting for it again.
      setSelectedSubject(interrupted.subject);
      setSelectedYear(interrupted.year);
      setSelectedMonth(interrupted.month);
      setSelectedSource(interrupted.source);
    }
    setInterrupted(null);
  };

  /**
   * Where the engine starts. A deliberately paused session and a recovered
   * interruption are the same thing to the engine, but only the latter carries
   * a countdown, so the two sources are merged here rather than threaded
   * through as separate props.
   */
  const engineStart = useMemo(
    () =>
      resumePoint ??
      (resumedSession
        ? {
            currentIndex: resumedSession.currentIndex,
            userAnswers: resumedSession.userAnswers,
            flaggedQuestions: resumedSession.flaggedQuestions,
            secondsElapsed: resumedSession.secondsElapsed,
            secondsRemaining: undefined,
          }
        : null),
    [resumePoint, resumedSession]
  );

  /**
   * Whether the recovered sitting can still be rebuilt. Checked here rather
   * than on click so the prompt never offers a Resume button that would fail.
   */
  const interruptedResolvable = useMemo(
    () => (interrupted ? resolveLiveQuestions(interrupted) !== null : false),
    [interrupted]
  );

  // User activity & presence tracking (Admin feature usage analytics)
  useUserActivityTracker({
    user: activeUser,
    currentTab,
    isExamRunning,
    isExamFinished,
    examDetails: {
      subject: selectedSubject,
      year: selectedYear,
      month: selectedMonth,
    },
    isThemeModalOpen,
    isContactAdminOpen,
  });

  // Load stored attempts, announcements, and register tour & donation listeners on mount
  useEffect(() => {
    setAttempts(getStoredAttempts());
    fetchAnnouncements(true)
      .then((list) => {
        if (list.length > 0) {
          setLatestAnnouncement(list[0]);
        }
      })
      .catch(() => {});

    const handleOpenTour = () => setIsTourOpen(true);
    const handleDonationEvent = () => handleOpenDonation();
    window.addEventListener('open_ce_tour', handleOpenTour);
    window.addEventListener('open-admin-donation', handleDonationEvent);
    return () => {
      window.removeEventListener('open_ce_tour', handleOpenTour);
      window.removeEventListener('open-admin-donation', handleDonationEvent);
    };
  }, []);

  // Sync default timer duration when subject changes
  const handleSubjectChange = (newSub: SubjectArea) => {
    setSelectedSubject(newSub);
    const config = SUBJECT_CONFIGS[newSub];
    setCustomMinutes(config.defaultMinutes);
    // If the current sitting has no data for the newly selected subject, snap to
    // the newest sitting that does.
    if (!hasExamData(newSub, selectedYear, selectedMonth, selectedSource)) {
      const fallback = firstAvailableSet(selectedSource, newSub);
      if (fallback) {
        setSelectedYear(fallback.year);
        setSelectedMonth(fallback.month);
      }
    }
  };

  // Switching review reference changes which sittings exist, so re-snap the
  // year/month selectors onto the newest sitting the new reference covers.
  const handleSourceChange = (newSource: ReferenceSource) => {
    setSelectedSource(newSource);
    if (!hasExamData(selectedSubject, selectedYear, selectedMonth, newSource)) {
      const fallback = firstAvailableSet(newSource, selectedSubject);
      if (fallback) {
        setSelectedYear(fallback.year);
        setSelectedMonth(fallback.month);
      }
    }
  };

  const handleStartExam = () => {
    if (!activeUser) {
      openAuthModal('Please sign in or create an account first to start the examination.');
      return;
    }
    setResumedSession(null);
    // A fresh sitting must not inherit the recovered position.
    setResumePoint(null);
    // Worked-solution papers have no printed choices, so they can only be
    // scored in Interactive Study mode.
    if (isWorkedSolutionSet(selectedSubject, selectedYear, selectedMonth, selectedSource)) {
      setExamMode('interactive');
    }
    const qList = getQuestionsForExam(selectedSubject, selectedYear, selectedMonth, selectedSource);
    setActiveQuestions(qList);
    setIsExamRunning(true);
    setIsExamFinished(false);
  };

  /**
   * By topics: the paper is already drawn, so there is no sitting to look up.
   * Same guards as a normal start — an account is still required for scoring
   * and for the leaderboard to stay meaningful.
   */
  const handleStartTopicExam = (questions: import('./data/topicBanks').TopicQuestion[]) => {
    if (!activeUser) {
      openAuthModal('Please sign in or create an account first to start the examination.');
      return;
    }
    setResumedSession(null);
    setResumePoint(null);
    setExamMode('interactive');
    setActiveQuestions(questions);
    setIsExamRunning(true);
    setIsExamFinished(false);
  };

  const handleResumeExam = (session: PausedExamSession) => {
    if (!activeUser) {
      openAuthModal('Please sign in or create an account first to resume your exam session.');
      return;
    }
    const sessionSource = session.source ?? 'Gillesania';
    setSelectedSource(sessionSource);
    setSelectedSubject(session.subject);
    setSelectedYear(session.year);
    setSelectedMonth(session.month);
    setTimerMode(session.timerMode);
    setExamMode('interactive');
    setResumedSession(session);
    // A paused session and a recovered interruption are both "where to start";
    // the one just chosen wins.
    setResumePoint(null);
    const qList = getQuestionsForExam(session.subject, session.year, session.month, sessionSource);
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
    const scratchpadId = getExamStorageBase(selectedSubject, selectedYear, selectedMonth, selectedSource);
    const storageKeyPrefix = `${scratchpadId}_`;

    syncExamScratchpadRecord({
      subject: selectedSubject,
      year: selectedYear,
      month: selectedMonth,
      storageKeyPrefix,
    }).catch((e) => console.warn('Failed to sync scratchpad record on pause in App:', e));

    const sessionToSave: PausedExamSession = {
      id: getSessionKey(selectedSubject, selectedYear, selectedMonth, selectedSource),
      subject: selectedSubject,
      year: selectedYear,
      month: selectedMonth,
      source: selectedSource,
      timerMode: timerMode === 'stopwatch' ? 'stopwatch' : 'no_limit',
      examMode: 'interactive',
      currentIndex: state.currentIndex,
      userAnswers: state.userAnswers,
      flaggedQuestions: state.flaggedQuestions,
      secondsElapsed: state.secondsElapsed,
      savedAt: new Date().toISOString(),
      totalQuestions: activeQuestions.length,
      answeredCount: Object.keys(state.userAnswers).length,
      scratchpadId,
    };
    savePausedSession(sessionToSave);
    // The sitting now lives in the paused list, which is what the setup screen
    // offers. Keeping the autosave too would prompt for the same paper twice.
    clearLiveSession();
    setIsExamRunning(false);
    setResumedSession(null);
    setResumePoint(null);
    setCurrentTab('setup');
  };

  const handleSubmitExam = (
    userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>,
    timeSpentSeconds: number
  ) => {
    /*
     * Items whose key has not been encoded are excluded, not marked wrong.
     * `percentage` is null when the whole paper is unkeyed — today that is any
     * Statics drill — and such an attempt must not reach the leaderboards: a
     * recorded 0/176 would rank the learner last for a paper that cannot be
     * passed yet, and would drag down the GWA computed from it.
     *
     * A topic drill is excluded even when every item is keyed. Drills are
     * practice: randomly drawn, short, narrowly scoped, and different for every
     * learner, so ranking one against a board paper is meaningless in both
     * directions. Note that this cannot be inferred from `selectedSubject` /
     * `selectedYear` — those still hold whatever was last picked on the setup
     * screen, which is exactly how drills used to end up filed as "MSTC May"
     * attempts and counted on the leaderboards.
     */
    const topicDrill = isTopicDrill(activeQuestions);
    const summary = summariseScore(activeQuestions, userAnswers);
    const correctCount = summary.correct;
    const ratingPercentage = summary.percentage ?? 0;
    const passedArea = summary.percentage !== null && ratingPercentage >= 50.0;
    const gradable = isPublishable(summary) && !topicDrill;
    const attemptId = `attempt-${Date.now()}`;
    const scratchpadId = getExamStorageBase(selectedSubject, selectedYear, selectedMonth, selectedSource);
    const storageKeyPrefix = `${scratchpadId}_`;

    syncExamScratchpadRecord({
      subject: selectedSubject,
      year: selectedYear,
      month: selectedMonth,
      storageKeyPrefix,
      attemptId,
      ...(gradable
        ? { score: correctCount, totalQuestions: summary.scorable, ratingPercentage }
        : {}),
    }).catch((e) => console.warn('Failed to sync scratchpad record on submit in App:', e));

    const newAttempt: ExamAttempt = {
      id: attemptId,
      attemptIndexInSubject: 1, // Will be computed inside saveAttempt
      subject: selectedSubject,
      year: selectedYear,
      month: selectedMonth,
      source: selectedSource,
      date: new Date().toISOString(),
      timeSpentSeconds,
      timerMode,
      isInteractive: examMode === 'interactive',
      userAnswers,
      score: correctCount,
      totalQuestions: summary.scorable,
      ratingPercentage,
      passedArea,
      scratchpadId,
    };

    /*
     * An ungradable paper is not written to local history or to Firestore.
     * Both feed the GWA, the paired-cycle report and the leaderboards, and a
     * row scored against a placeholder key would follow the learner around
     * long after the real key arrives. The sitting still ends normally — the
     * results screen explains that the score is pending.
     */
    if (gradable) {
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
          totalQuestions: summary.scorable,
          ratingPercentage,
          passedArea,
          timeSpentSeconds,
          timerMode,
          completedAt: new Date().toISOString(),
        }).catch((e) => console.warn('Cloud attempt record fallback:', e));
      }
    } else {
      console.info(
        topicDrill
          ? `Drill not recorded: a by-topics drill is practice and does not count towards the leaderboards.`
          : `Attempt not recorded: ${summary.pending} of ${activeQuestions.length} items have no answer key yet.`
      );
    }

    deletePausedSession(selectedSubject, selectedYear, selectedMonth, selectedSource);
    setResumedSession(null);
    setResumePoint(null);
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
    setResumePoint(null);
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
  const isUnderwave = themeConfig.id === 'underwave';
  const isCyberpunk = themeConfig.id === 'cyberdeck_2077';
  const is3DTheme =
    isAurora ||
    isTerrarium ||
    isMatilda ||
    isParticle ||
    isSubmerged ||
    isUnderwave ||
    isCyberpunk;

  // Cyberdeck mod: tab-insert blip when the user changes views
  const prevTabRef = React.useRef(currentTab);
  useEffect(() => {
    if (isCyberpunk && prevTabRef.current !== currentTab) {
      cyberdeckAudio.tab();
    }
    prevTabRef.current = currentTab;
  }, [currentTab, isCyberpunk]);

  return (
    <CyberdeckAudioProvider active={isCyberpunk}>
      {isSubmerged && (
        <div className="scene-layer opacity-65 pointer-events-none">
          <SubmergedEra3D mode="background" interactive={false} />
        </div>
      )}
      {isUnderwave && <UnderwaveBackdrop />}
      {isCyberpunk && <CyberdeckBackdrop />}
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
          onOpenTour={() => setIsTourOpen(true)}
          onOpenContactAdmin={() => handleOpenContactAdmin('message')}
        />

        {/* Offers the new build when the service worker has one waiting */}
        <UpdatePrompt />

        {/* Offers back a sitting interrupted by a refresh or a closed tab */}
        {interrupted && (
          <ResumeSessionModal
            session={interrupted}
            canResume={interruptedResolvable}
            onResume={handleResumeInterrupted}
            onDiscard={handleDiscardInterrupted}
            onLater={() => setInterrupted(null)}
          />
        )}

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* VIEW 1: Active Exam Engine */}
          {isExamRunning && (
            <ExamEngine
              subject={selectedSubject}
              year={selectedYear}
              month={selectedMonth}
              source={selectedSource}
              questions={activeQuestions}
              timerMode={timerMode}
              totalDurationSeconds={totalDurationSeconds}
              examMode={examMode}
              initialCurrentIndex={engineStart?.currentIndex}
              initialUserAnswers={engineStart?.userAnswers}
              initialFlaggedQuestions={engineStart?.flaggedQuestions}
              initialSecondsElapsed={engineStart?.secondsElapsed}
              initialSecondsRemaining={engineStart?.secondsRemaining}
              ownerId={activeUser?.uid}
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
              source={selectedSource}
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
                <div className="max-w-6xl mx-auto mb-6 px-0.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 animate-in fade-in">
                  <div className="flex items-start sm:items-center space-x-3 min-w-0">
                    <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                      <Megaphone className="w-4 h-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-xs truncate">
                          {latestAnnouncement.title}
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold shrink-0">
                          Announcer: {formatAnnouncerName(latestAnnouncement)}
                        </span>
                        {latestAnnouncement.isPinned && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 font-bold shrink-0">
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
                    className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] transition-colors shrink-0 cursor-pointer self-start sm:self-auto"
                  >
                    Read All Updates
                  </button>
                </div>
              )}

              {currentTab === 'setup' && (
                <SubjectSelector
                  onStartTopicExam={handleStartTopicExam}
                  topicExamLocked={topicExamLocked}
                  selectedSubject={selectedSubject}
                  onSubjectChange={handleSubjectChange}
                  selectedSource={selectedSource}
                  onSourceChange={handleSourceChange}
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
                  onNavigateToFlashcards={() => setCurrentTab('flashcards')}
                  onOpenTour={() => setIsTourOpen(true)}
                  onOpenDonation={handleOpenDonation}
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
                  onNavigateTab={(tab) => setCurrentTab(tab)}
                  onOpenThemeModal={() => setIsThemeModalOpen(true)}
                  onOpenContactAdmin={() => handleOpenContactAdmin('message')}
                  onOpenDonation={handleOpenDonation}
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
                  onOpenScratchpad={(padId) => {
                    setSelectedScratchpadId(padId);
                    setCurrentTab('scratchpad');
                  }}
                  onOpenDonation={handleOpenDonation}
                  isAdmin={isAdmin}
                />
              )}

              {currentTab === 'scratchpad' && (
                <ScratchpadHub
                  onBackToPortal={() => {
                    setSelectedScratchpadId(undefined);
                    setCurrentTab('setup');
                  }}
                  initialOpenPadId={selectedScratchpadId}
                  onOpenDonation={handleOpenDonation}
                />
              )}

              {currentTab === 'flashcards' && (
                <FormulaCardsHub onOpenDonation={handleOpenDonation} />
              )}

              {currentTab === 'admin' && isAdmin && (
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

        {/* Message the Administrator Modal */}
        <ContactAdminModal
          isOpen={isContactAdminOpen}
          onClose={() => setIsContactAdminOpen(false)}
          initialTab={contactAdminInitialTab}
        />

        {/* Dynamic & Animated Web Tour / Walkthrough Guide */}
        <InteractiveTourModal
          isOpen={isTourOpen}
          onClose={() => setIsTourOpen(false)}
          onNavigateTab={(tab) => {
            setCurrentTab(tab);
          }}
          onSelectSubject={(sub) => {
            handleSubjectChange(sub);
          }}
          onOpenThemeModal={() => setIsThemeModalOpen(true)}
          onOpenContactAdmin={() => handleOpenContactAdmin('message')}
        />

        {/* Smooth Transparent Negative-Filter Custom Cursor */}
        <CustomCursor />

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

      {/* Offline connectivity indicator */}
      <OfflineIndicator />

      {/* Cyberdeck mod audio controls (music / SFX) */}
      {isCyberpunk && <CyberdeckAudioPanel />}
    </CyberdeckAudioProvider>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
      <Analytics />
    </AuthProvider>
  );
}

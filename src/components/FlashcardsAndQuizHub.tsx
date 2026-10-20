import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Layers,
  HelpCircle,
  RotateCcw,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Shuffle,
  Volume2,
  Sliders,
  Award,
  Sparkles,
  BookOpen,
  Filter,
  RefreshCw,
  Search,
  Check,
  ChevronRight,
  Share2,
  Eye,
  EyeOff,
  Flame,
  Zap,
  ArrowLeftRight,
} from 'lucide-react';
import { SubjectArea, SUBJECT_CONFIGS } from '../types/exam';
import { useTheme } from '../context/ThemeContext';
import { ENGINEEEYA_TERMS, EngineereyaTerm } from '../data/engineereyaTerms';
import { playGxSound } from '../utils/gxSound';

type HubView = 'flashcards' | 'quiz' | 'glossary';
type FlashcardStatus = 'unseen' | 'known' | 'learning';
type QuizMode = 'instant' | 'exam';

interface ShuffledQuizQuestion {
  term: EngineereyaTerm;
  questionText: string;
  options: { label: string; text: string; isCorrect: boolean }[];
  correctOptionLabel: string;
  selectedOptionLabel?: string;
  isAnswered: boolean;
  isFlagged: boolean;
}

export const FlashcardsAndQuizHub: React.FC = () => {
  const { themeConfig } = useTheme();

  // Primary active hub view
  const [activeView, setActiveView] = useState<HubView>('flashcards');

  // Shared Settings
  const [selectedSubject, setSelectedSubject] = useState<'ALL' | SubjectArea>('ALL');
  const [itemCount, setItemCount] = useState<number>(20);
  const [customItemCount, setCustomItemCount] = useState<string>('20');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // ----------------------------------------------------
  // FLASHCARDS STATE
  // ----------------------------------------------------
  const [flashcardDeck, setFlashcardDeck] = useState<EngineereyaTerm[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [cardStatusMap, setCardStatusMap] = useState<Record<string, FlashcardStatus>>({});
  const [flashcardFilter, setFlashcardFilter] = useState<'all' | 'learning' | 'known'>('all');
  const [flashcardOrderMode, setFlashcardOrderMode] = useState<'term_first' | 'definition_first'>('term_first');
  const [isAutoSpeech, setIsAutoSpeech] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  // ----------------------------------------------------
  // QUIZ STATE
  // ----------------------------------------------------
  const [quizQuestions, setQuizQuestions] = useState<ShuffledQuizQuestion[]>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [quizMode, setQuizMode] = useState<QuizMode>('instant');
  const [isQuizSubmitted, setIsQuizSubmitted] = useState<boolean>(false);
  const [quizAttemptSeed, setQuizAttemptSeed] = useState<number>(1);

  // Filter master dataset by subject
  const subjectFilteredTerms = useMemo(() => {
    if (selectedSubject === 'ALL') return ENGINEEEYA_TERMS;
    return ENGINEEEYA_TERMS.filter((t) => t.subject === selectedSubject);
  }, [selectedSubject]);

  // Utility to shuffle an array (Fisher-Yates)
  const shuffleArray = useCallback(<T,>(arr: T[]): T[] => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, []);

  // ----------------------------------------------------
  // Initialize / Reset Flashcards Session
  // ----------------------------------------------------
  const initFlashcards = useCallback(() => {
    let pool = [...subjectFilteredTerms];
    pool = shuffleArray(pool);
    const count = Math.min(itemCount, pool.length);
    setFlashcardDeck(pool.slice(0, count));
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setShowHint(false);
  }, [subjectFilteredTerms, itemCount, shuffleArray]);

  useEffect(() => {
    initFlashcards();
  }, [initFlashcards]);

  // Filtered active cards in flashcards view (All vs Learning / Wrong vs Known)
  const activeFlashcards = useMemo(() => {
    if (flashcardFilter === 'all') return flashcardDeck;
    return flashcardDeck.filter((c) => {
      const status = cardStatusMap[c.id] || 'unseen';
      return flashcardFilter === status;
    });
  }, [flashcardDeck, flashcardFilter, cardStatusMap]);

  // Ensure current card index stays in bounds when filter changes
  useEffect(() => {
    if (currentCardIndex >= activeFlashcards.length) {
      setCurrentCardIndex(Math.max(0, activeFlashcards.length - 1));
    }
    setIsFlipped(false);
    setShowHint(false);
  }, [activeFlashcards.length, currentCardIndex, flashcardFilter]);

  const currentCard = activeFlashcards[currentCardIndex] || null;

  // Flashcard counts
  const stats = useMemo(() => {
    let known = 0;
    let learning = 0;
    flashcardDeck.forEach((card) => {
      const st = cardStatusMap[card.id];
      if (st === 'known') known++;
      else if (st === 'learning') learning++;
    });
    return {
      total: flashcardDeck.length,
      known,
      learning,
      unseen: flashcardDeck.length - known - learning,
      percentKnown: flashcardDeck.length > 0 ? Math.round((known / flashcardDeck.length) * 100) : 0,
    };
  }, [flashcardDeck, cardStatusMap]);

  // Text to speech helper
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Flashcard actions:
  // 1. Know / Answered right
  const handleMarkKnown = () => {
    if (!currentCard) return;
    setCardStatusMap((prev) => ({ ...prev, [currentCard.id]: 'known' }));
    handleNextCard();
  };

  // 2. Don't know / Wrong answer
  const handleMarkLearning = () => {
    if (!currentCard) return;
    setCardStatusMap((prev) => ({ ...prev, [currentCard.id]: 'learning' }));
    handleNextCard();
  };

  // 3. Next / Pass button (does not change mastery status)
  const handleNextCard = () => {
    setIsFlipped(false);
    setShowHint(false);
    if (currentCardIndex < activeFlashcards.length - 1) {
      setCurrentCardIndex((prev) => prev + 1);
    } else {
      // Loop or stay
      setCurrentCardIndex(0);
    }
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setShowHint(false);
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prev) => prev - 1);
    } else {
      setCurrentCardIndex(Math.max(0, activeFlashcards.length - 1));
    }
  };

  // Keyboard navigation for Flashcards
  useEffect(() => {
    if (activeView !== 'flashcards') return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((f) => !f);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleMarkKnown();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handleMarkLearning();
      } else if (e.code === 'ArrowDown' || e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        handleNextCard();
      } else if (e.code === 'ArrowUp' || e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        handlePrevCard();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeView, currentCard, currentCardIndex, activeFlashcards.length]);

  // ----------------------------------------------------
  // Initialize / Reset Terms Quiz
  // 4 choices arranged at RANDOM every attempt, distractors relevant & confusing
  // ----------------------------------------------------
  const initQuiz = useCallback(() => {
    let pool = [...subjectFilteredTerms];
    pool = shuffleArray(pool);
    const count = Math.min(itemCount, pool.length);
    const selectedTerms = pool.slice(0, count);

    const questions: ShuffledQuizQuestion[] = selectedTerms.map((term, index) => {
      // Correct answer is the term itself
      // Distractors are 3 relevant/confusing terms
      const rawOptions = [
        { text: term.term, isCorrect: true },
        ...term.distractors.slice(0, 3).map((dist) => ({ text: dist, isCorrect: false })),
      ];

      // Shuffle choices at random every attempt!
      const shuffled = shuffleArray(rawOptions);
      const labels = ['A', 'B', 'C', 'D'];
      const formattedOptions = shuffled.map((opt, i) => ({
        label: labels[i],
        text: opt.text,
        isCorrect: opt.isCorrect,
      }));

      const correctOpt = formattedOptions.find((o) => o.isCorrect)?.label || 'A';

      // Alternate question styles: "Which term is defined as..." or "Identify the concept..."
      const questionPhrasing =
        index % 2 === 0
          ? `Which civil engineering term is defined as: "${term.definition}"?`
          : `According to Engineereya's review: "${term.definition}". What is this called?`;

      return {
        term,
        questionText: questionPhrasing,
        options: formattedOptions,
        correctOptionLabel: correctOpt,
        isAnswered: false,
        isFlagged: false,
      };
    });

    setQuizQuestions(questions);
    setCurrentQuizIndex(0);
    setIsQuizSubmitted(false);
    setQuizAttemptSeed((s) => s + 1);
  }, [subjectFilteredTerms, itemCount, shuffleArray]);

  useEffect(() => {
    if (activeView === 'quiz') {
      initQuiz();
    }
  }, [activeView, initQuiz]);

  // Handle quiz answer selection
  const handleSelectQuizOption = (optionLabel: string) => {
    if (isQuizSubmitted && quizMode === 'exam') return;

    setQuizQuestions((prev) => {
      const updated = [...prev];
      const current = { ...updated[currentQuizIndex] };
      current.selectedOptionLabel = optionLabel;
      current.isAnswered = true;
      updated[currentQuizIndex] = current;
      return updated;
    });
  };

  const handleToggleFlagQuiz = (index: number) => {
    setQuizQuestions((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], isFlagged: !updated[index].isFlagged };
      return updated;
    });
  };

  // Quiz evaluation metrics
  const quizScore = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q) => {
      if (q.selectedOptionLabel === q.correctOptionLabel) {
        correct++;
      }
    });
    const total = quizQuestions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return {
      correct,
      total,
      percentage,
      answeredCount: quizQuestions.filter((q) => q.isAnswered).length,
    };
  }, [quizQuestions]);

  // Change item count handler
  const handleItemCountChange = (val: number) => {
    setItemCount(val);
    setCustomItemCount(val.toString());
  };

  // Glossary filter search
  const glossaryFilteredTerms = useMemo(() => {
    return subjectFilteredTerms.filter((item) => {
      if (!searchTerm) return true;
      const q = searchTerm.toLowerCase();
      return (
        item.term.toLowerCase().includes(q) ||
        item.definition.toLowerCase().includes(q) ||
        item.subCategory.toLowerCase().includes(q) ||
        item.vlogMnemonic?.toLowerCase().includes(q) ||
        item.tags?.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [subjectFilteredTerms, searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Banner & Header */}
      <div
        className="p-6 rounded-2xl border transition-all relative overflow-hidden"
        style={{
          backgroundColor: themeConfig.bgCard,
          borderColor: themeConfig.border,
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider border"
                style={{
                  backgroundColor: themeConfig.accentBadge,
                  borderColor: `${themeConfig.accent}40`,
                  color: themeConfig.accent,
                }}
              >
                Engineereya&apos;s Vlog Special
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono">
                Source: Engineereya Review Vlogs
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Civil Engineering Terms, Flashcards &amp; Quizzes
            </h1>
            <p className="text-sm mt-1 max-w-3xl" style={{ color: themeConfig.textSecondary }}>
              Master high-yield board exam definitions, mnemonics, and tricky concepts from Engineereya&apos;s
              vlogs. Test yourself with active recall flashcards and randomized 4-choice terms quizzes.
            </p>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900/80 border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveView('flashcards')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeView === 'flashcards'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Flashcards</span>
            </button>
            <button
              onClick={() => setActiveView('quiz')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeView === 'quiz'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Terms Quiz</span>
            </button>
            <button
              onClick={() => setActiveView('glossary')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeView === 'glossary'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Glossary</span>
            </button>
          </div>
        </div>

        {/* Global Controls Bar: Subject filter & Number of Items Modifier */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          {/* Subject Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mr-1">
              <Filter className="w-3.5 h-3.5 text-amber-400" /> Subject:
            </span>
            {(['ALL', 'MSTC', 'HPGE', 'PSAD'] as const).map((sub) => {
              const isSelected = selectedSubject === sub;
              const label =
                sub === 'ALL'
                  ? 'All Subjects'
                  : sub === 'MSTC'
                  ? 'MSTC (Surveying & Transpo)'
                  : sub === 'HPGE'
                  ? 'HPGE (Hydraulics & Geotech)'
                  : 'PSAD (Structural & Codes)';
              return (
                <button
                  key={sub}
                  onClick={() => setSelectedSubject(sub)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-amber-400/20 text-amber-300 border-amber-400/50 shadow-sm'
                      : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Number of Items Selector / Modifier */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-amber-400" /> Items:
            </span>
            {[10, 20, 30, 50].map((num) => (
              <button
                key={num}
                onClick={() => handleItemCountChange(num)}
                className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all border ${
                  itemCount === num
                    ? 'bg-amber-400 text-slate-950 font-bold border-amber-400'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
              >
                {num}
              </button>
            ))}
            <div className="flex items-center space-x-1 pl-1">
              <input
                type="number"
                min="5"
                max={subjectFilteredTerms.length}
                value={customItemCount}
                onChange={(e) => {
                  setCustomItemCount(e.target.value);
                  const parsed = parseInt(e.target.value, 10);
                  if (!isNaN(parsed) && parsed > 0) {
                    setItemCount(Math.min(parsed, subjectFilteredTerms.length));
                  }
                }}
                className="w-14 px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-white text-center focus:outline-none focus:border-amber-400"
                title="Custom number of items"
              />
              <span className="text-[11px] text-slate-500 font-mono">
                / {subjectFilteredTerms.length} max
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. FLASHCARDS VIEW */}
      {/* ========================================================================= */}
      {activeView === 'flashcards' && (
        <div className="space-y-6">
          {/* Deck Status Bar and Sorting Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            {/* Sorting / Deck selection */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono text-slate-400 uppercase mr-1">Filter Deck:</span>
              <button
                onClick={() => setFlashcardFilter('all')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  flashcardFilter === 'all'
                    ? 'bg-slate-700 text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All Cards ({flashcardDeck.length})
              </button>
              <button
                onClick={() => setFlashcardFilter('learning')}
                className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  flashcardFilter === 'learning'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold'
                    : 'text-rose-400/80 hover:text-rose-300'
                }`}
              >
                <XCircle className="w-3.5 h-3.5" />
                <span>Need Review ({stats.learning})</span>
              </button>
              <button
                onClick={() => setFlashcardFilter('known')}
                className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  flashcardFilter === 'known'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                    : 'text-emerald-400/80 hover:text-emerald-300'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Already Know ({stats.known})</span>
              </button>
            </div>

            {/* Quick Actions & Progress Stats */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Order Mode Switcher: Term First vs Definition First */}
              <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800">
                <span className="text-[11px] font-mono text-slate-500 uppercase px-1.5 flex items-center gap-1">
                  <ArrowLeftRight className="w-3 h-3 text-amber-400" /> Order:
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setFlashcardOrderMode('term_first');
                    setIsFlipped(false);
                  }}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-all ${
                    flashcardOrderMode === 'term_first'
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Term on front, guess the definition, flip to verify"
                >
                  Term First
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFlashcardOrderMode('definition_first');
                    setIsFlipped(false);
                  }}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-all ${
                    flashcardOrderMode === 'definition_first'
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Definition on front, guess the term, flip to reveal"
                >
                  Definition First
                </button>
              </div>

              <button
                onClick={initFlashcards}
                className="flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                title="Shuffle and reset cards"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Shuffle</span>
              </button>
              <div className="flex items-center space-x-2 text-xs font-mono">
                <span className="text-emerald-400 font-semibold">{stats.known} Known</span>
                <span className="text-slate-600">•</span>
                <span className="text-rose-400 font-semibold">{stats.learning} Need Review</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400 font-bold">{stats.percentKnown}% Mastered</span>
              </div>
            </div>
          </div>

          {/* Flashcard Progress Bar */}
          <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden flex border border-slate-800">
            <div
              className="bg-emerald-500 transition-all duration-300"
              style={{ width: `${(stats.known / (stats.total || 1)) * 100}%` }}
              title="Known / Mastered"
            />
            <div
              className="bg-rose-500 transition-all duration-300"
              style={{ width: `${(stats.learning / (stats.total || 1)) * 100}%` }}
              title="Need Review / Wrong"
            />
          </div>

          {/* The Flashcard */}
          {activeFlashcards.length === 0 ? (
            <div className="p-12 text-center rounded-2xl border border-slate-800 bg-slate-900/40">
              <Award className="w-12 h-12 text-amber-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white">No cards in this filtered deck</h3>
              <p className="text-sm text-slate-400 mt-1">
                {flashcardFilter === 'learning'
                  ? 'Great job! You have no cards marked for review.'
                  : flashcardFilter === 'known'
                  ? 'You have not marked any cards as known yet. Review the deck and mark cards you know!'
                  : 'No flashcards available for the selected subject filter.'}
              </p>
              <button
                onClick={() => setFlashcardFilter('all')}
                className="mt-4 px-4 py-2 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider hover:bg-amber-300"
              >
                Show All Cards
              </button>
            </div>
          ) : currentCard ? (
            <div className="space-y-4">
              {/* Card Meta & Header */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-2">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-400 font-bold">
                    Card {currentCardIndex + 1} of {activeFlashcards.length}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-300">{currentCard.subCategory}</span>
                  <span className="text-slate-500 hidden sm:inline">•</span>
                  <span className="text-amber-400/80 hidden sm:inline">
                    {flashcardOrderMode === 'term_first' ? 'Term → Definition' : 'Definition → Term'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      if (flashcardOrderMode === 'term_first') {
                        speakText(isFlipped ? `${currentCard.term}. ${currentCard.definition}` : currentCard.term);
                      } else {
                        speakText(isFlipped ? `${currentCard.term}. ${currentCard.definition}` : currentCard.definition);
                      }
                    }}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    title="Read aloud"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setShowHint((h) => !h)}
                    className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-mono transition-colors border ${
                      showHint
                        ? 'bg-amber-400/20 text-amber-300 border-amber-500/40'
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {showHint ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{showHint ? 'Hide Clue' : 'Clue / Mnemonic'}</span>
                  </button>
                </div>
              </div>

              {/* Main 3D Flipping Flashcard */}
              <div
                onClick={() => setIsFlipped((f) => !f)}
                className="group relative cursor-pointer min-h-[360px] sm:min-h-[400px] rounded-3xl p-8 border transition-all duration-300 shadow-2xl flex flex-col justify-between"
                style={{
                  backgroundColor: themeConfig.bgCard,
                  borderColor: isFlipped ? '#f59e0b40' : themeConfig.border,
                }}
              >
                {/* Top Badges */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border ${
                      currentCard.subject === 'MSTC'
                        ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                        : currentCard.subject === 'HPGE'
                        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                        : 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                    }`}
                  >
                    {currentCard.subject} • {currentCard.subCategory}
                  </span>

                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1 group-hover:text-amber-400 transition-colors">
                    <RefreshCw className="w-3.5 h-3.5" /> Click anywhere or Space to {isFlipped ? 'show Front' : 'Flip'}
                  </span>
                </div>

                {/* Card Content (Front vs Back based on flashcardOrderMode) */}
                <div className="py-6 flex-1 flex flex-col justify-center text-center">
                  {flashcardOrderMode === 'term_first' ? (
                    // 1. TERM FIRST MODE
                    !isFlipped ? (
                      // FRONT OF CARD: TERM
                      <div className="space-y-4">
                        <div className="text-xs font-mono text-amber-400/80 uppercase tracking-widest font-semibold">
                          CIVIL ENGINEERING TERM
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                          {currentCard.term}
                        </h2>
                        <p className="text-xs text-slate-400 font-mono max-w-md mx-auto">
                          Do you remember what this means in the CE Board Exam?
                        </p>

                        {showHint && currentCard.vlogMnemonic && (
                          <div className="mt-4 inline-block max-w-xl mx-auto p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 text-left">
                            <span className="font-bold flex items-center gap-1 mb-1">
                              <Sparkles className="w-3.5 h-3.5" /> Engineereya Vlog Clue:
                            </span>
                            {currentCard.vlogMnemonic}
                          </div>
                        )}
                      </div>
                    ) : (
                      // BACK OF CARD: DEFINITION & INSIGHTS
                      <div className="space-y-4 text-left max-w-2xl mx-auto">
                        <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold flex items-center gap-1">
                          <Check className="w-4 h-4" /> DEFINITION &amp; BOARD EXAM INSIGHT
                        </div>

                        <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
                          {currentCard.term}
                        </h3>

                        <p className="text-base text-slate-200 leading-relaxed font-sans">
                          {currentCard.definition}
                        </p>

                        {currentCard.exampleOrFormula && (
                          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                            <span className="font-bold text-slate-400 block mb-0.5">Key Equation / Standard Rate:</span>
                            {currentCard.exampleOrFormula}
                          </div>
                        )}

                        {currentCard.vlogMnemonic && (
                          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 font-mono">
                            <span className="font-bold text-amber-400 flex items-center gap-1.5 mb-1">
                              <Flame className="w-3.5 h-3.5 text-amber-400" /> Engineereya&apos;s Vlog Mnemonic:
                            </span>
                            {currentCard.vlogMnemonic}
                          </div>
                        )}

                        {currentCard.boardExamTip && (
                          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200 font-mono">
                            <span className="font-bold text-purple-400 flex items-center gap-1.5 mb-1">
                              <Zap className="w-3.5 h-3.5 text-purple-400" /> PRC Board Exam Trap / Watch Out:
                            </span>
                            {currentCard.boardExamTip}
                          </div>
                        )}
                      </div>
                    )
                  ) : (
                    // 2. DEFINITION FIRST MODE (GUESS THE TERM)
                    !isFlipped ? (
                      // FRONT OF CARD: DEFINITION
                      <div className="space-y-4 text-left max-w-2xl mx-auto">
                        <div className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold flex items-center gap-1 justify-center sm:justify-start">
                          <BookOpen className="w-4 h-4" /> DEFINITION &amp; CONCEPT (GUESS THE TERM)
                        </div>

                        <p className="text-lg sm:text-xl font-medium text-slate-100 leading-relaxed font-sans bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80 shadow-inner">
                          &ldquo;{currentCard.definition}&rdquo;
                        </p>

                        <div className="text-center sm:text-left text-xs text-amber-300 font-mono pt-1">
                          Question: Which Civil Engineering term matches this definition?
                        </div>

                        {showHint && currentCard.vlogMnemonic && (
                          <div className="mt-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 text-left">
                            <span className="font-bold flex items-center gap-1 mb-1">
                              <Sparkles className="w-3.5 h-3.5" /> Vlog Memory Clue:
                            </span>
                            {currentCard.vlogMnemonic}
                          </div>
                        )}
                      </div>
                    ) : (
                      // BACK OF CARD: REVEALED TERM
                      <div className="space-y-4 text-left max-w-2xl mx-auto">
                        <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold flex items-center gap-1">
                          <Check className="w-4 h-4" /> REVEALED CIVIL ENGINEERING TERM
                        </div>

                        <div className="border-b border-slate-800 pb-3">
                          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            {currentCard.term}
                          </h2>
                          <span className="text-xs font-mono text-amber-400 mt-1 block">
                            {currentCard.subject} • {currentCard.subCategory}
                          </span>
                        </div>

                        <div className="text-sm text-slate-300 font-sans leading-relaxed">
                          {currentCard.definition}
                        </div>

                        {currentCard.exampleOrFormula && (
                          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                            <span className="font-bold text-slate-400 block mb-0.5">Key Equation / Standard Rate:</span>
                            {currentCard.exampleOrFormula}
                          </div>
                        )}

                        {currentCard.vlogMnemonic && (
                          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 font-mono">
                            <span className="font-bold text-amber-400 flex items-center gap-1.5 mb-1">
                              <Flame className="w-3.5 h-3.5 text-amber-400" /> Engineereya&apos;s Vlog Mnemonic:
                            </span>
                            {currentCard.vlogMnemonic}
                          </div>
                        )}

                        {currentCard.boardExamTip && (
                          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200 font-mono">
                            <span className="font-bold text-purple-400 flex items-center gap-1.5 mb-1">
                              <Zap className="w-3.5 h-3.5 text-purple-400" /> PRC Board Exam Trap / Watch Out:
                            </span>
                            {currentCard.boardExamTip}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>

                {/* Bottom Source & Card Status Tag */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-3 border-t border-slate-800/60">
                  <span>Source: Engineereya&apos;s Vlog</span>
                  <div>
                    {cardStatusMap[currentCard.id] === 'known' ? (
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Marked as Known
                      </span>
                    ) : cardStatusMap[currentCard.id] === 'learning' ? (
                      <span className="text-rose-400 font-bold flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" /> Marked for Review
                      </span>
                    ) : (
                      <span className="text-slate-500">Unanswered</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Don't Know / Wrong, Pass / Next, Already Know */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                {/* Previous Card Button */}
                <button
                  onClick={handlePrevCard}
                  className="flex items-center justify-center space-x-1.5 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all text-xs font-mono"
                  title="Previous Card (Up / P)"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Prev</span>
                </button>

                {/* Don't Know / Need Review (Wrong answer) */}
                <button
                  onClick={handleMarkLearning}
                  className="flex-1 max-w-[200px] flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-rose-500/10 text-rose-300 border border-rose-500/30 hover:bg-rose-500/20 active:scale-95 transition-all text-sm font-semibold shadow-sm"
                  title="Mark as Don't Know / Need Review (Left Arrow)"
                >
                  <XCircle className="w-5 h-5 text-rose-400" />
                  <span>Don&apos;t Know / Wrong</span>
                </button>

                {/* Next / Pass Button */}
                <button
                  onClick={handleNextCard}
                  className="flex-1 max-w-[180px] flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 active:scale-95 transition-all text-sm font-semibold shadow-sm"
                  title="Skip or Pass without marking (Down Arrow / N)"
                >
                  <ArrowRight className="w-5 h-5 text-amber-400" />
                  <span>Next (Pass)</span>
                </button>

                {/* Already Know / Answered Right */}
                <button
                  onClick={handleMarkKnown}
                  className="flex-1 max-w-[200px] flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 active:scale-95 transition-all text-sm font-semibold shadow-sm"
                  title="Mark as Already Know / Mastered (Right Arrow)"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Already Know It</span>
                </button>
              </div>

              {/* Keyboard shortcuts tip */}
              <div className="text-center text-[11px] font-mono text-slate-500 pt-2">
                Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Space</kbd> to flip,{' '}
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">←</kbd> Don&apos;t Know,{' '}
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">→</kbd> Already Know,{' '}
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">↓</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">N</kbd> Next / Pass.
              </div>
            </div>
          ) : null}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. TERMS QUIZ VIEW (SEPARATE FROM EXAM, RANDOMIZED CHOICES) */}
      {/* ========================================================================= */}
      {activeView === 'quiz' && (
        <div className="space-y-6">
          {/* Quiz Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono text-slate-400 uppercase">Quiz Mode:</span>
              <button
                onClick={() => setQuizMode('instant')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                  quizMode === 'instant'
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
                title="Reveals right answer and distractor explanations immediately upon clicking"
              >
                Instant Feedback
              </button>
              <button
                onClick={() => setQuizMode('exam')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                  quizMode === 'exam'
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
                title="Practice under test conditions, submit at the end"
              >
                Test &amp; Submit Mode
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={initQuiz}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                title="Shuffles question order and all 4 choices at random!"
              >
                <Shuffle className="w-3.5 h-3.5 text-amber-400" />
                <span>Randomize Choices &amp; Retake</span>
              </button>

              <div className="text-xs font-mono text-slate-400">
                Score:{' '}
                <span className="text-amber-400 font-bold">
                  {quizScore.correct} / {quizScore.total} ({quizScore.percentage}%)
                </span>
              </div>
            </div>
          </div>

          {quizQuestions.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Question Navigator (Sidebar on Desktop) */}
              <div className="lg:col-span-1 order-2 lg:order-1 bg-slate-900/50 p-4 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                  <span>Questions ({quizQuestions.length})</span>
                  <span>{quizScore.answeredCount} Answered</span>
                </div>

                <div className="grid grid-cols-5 gap-1.5 max-h-[360px] overflow-y-auto pr-1">
                  {quizQuestions.map((q, idx) => {
                    const isCurrent = idx === currentQuizIndex;
                    const isAnswered = q.isAnswered;
                    const isCorrect = q.selectedOptionLabel === q.correctOptionLabel;

                    let bgClass = 'bg-slate-800/80 text-slate-300 hover:border-slate-600';
                    if (quizMode === 'instant' && isAnswered) {
                      bgClass = isCorrect
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        : 'bg-rose-500/20 text-rose-300 border-rose-500/40';
                    } else if (isAnswered) {
                      bgClass = 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentQuizIndex(idx)}
                        className={`h-9 rounded-lg text-xs font-mono font-bold transition-all relative border ${bgClass} ${
                          isCurrent ? 'ring-2 ring-amber-400 scale-105' : ''
                        }`}
                      >
                        {idx + 1}
                        {q.isFlagged && (
                          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 ring-2 ring-slate-900" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {quizMode === 'exam' && !isQuizSubmitted && (
                  <button
                    onClick={() => setIsQuizSubmitted(true)}
                    className="w-full py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider hover:bg-amber-300 shadow-md transition-all"
                  >
                    Submit Quiz
                  </button>
                )}

                {isQuizSubmitted && (
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-center space-y-1">
                    <div className="text-xs font-mono text-slate-400">Final Quiz Score</div>
                    <div className="text-2xl font-extrabold text-amber-400">
                      {quizScore.percentage}%
                    </div>
                    <div className="text-[11px] font-mono text-slate-300">
                      {quizScore.correct} of {quizScore.total} Correct
                    </div>
                    <button
                      onClick={initQuiz}
                      className="mt-2 w-full py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs font-mono"
                    >
                      Retake with New Choices
                    </button>
                  </div>
                )}
              </div>

              {/* Main Active Question Card */}
              <div className="lg:col-span-3 order-1 lg:order-2 space-y-4">
                {(() => {
                  const currentQ = quizQuestions[currentQuizIndex];
                  if (!currentQ) return null;
                  const isAnswered = currentQ.isAnswered;
                  const showExplanation =
                    (quizMode === 'instant' && isAnswered) || (quizMode === 'exam' && isQuizSubmitted);

                  return (
                    <div
                      className="p-6 sm:p-8 rounded-2xl border transition-all"
                      style={{
                        backgroundColor: themeConfig.bgCard,
                        borderColor: themeConfig.border,
                      }}
                    >
                      {/* Question Header & Subject Badge */}
                      <div className="flex items-center justify-between text-xs font-mono mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-400 font-bold">
                            Question {currentQuizIndex + 1} of {quizQuestions.length}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded border ${
                              currentQ.term.subject === 'MSTC'
                                ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                                : currentQ.term.subject === 'HPGE'
                                ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                                : 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                            }`}
                          >
                            {currentQ.term.subject} • {currentQ.term.subCategory}
                          </span>
                        </div>

                        <button
                          onClick={() => handleToggleFlagQuiz(currentQuizIndex)}
                          className={`text-xs font-mono px-2 py-1 rounded transition-colors ${
                            currentQ.isFlagged
                              ? 'bg-amber-400/20 text-amber-300 border border-amber-500/30'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {currentQ.isFlagged ? '★ Flagged' : '☆ Flag for Review'}
                        </button>
                      </div>

                      {/* Question Text */}
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed mb-6">
                        {currentQ.questionText}
                      </h3>

                      {/* 4 Choices Arranged at Random Every Attempt */}
                      <div className="space-y-3">
                        {currentQ.options.map((opt) => {
                          const isSelected = currentQ.selectedOptionLabel === opt.label;
                          let optStyle = 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-200';

                          if (showExplanation) {
                            if (opt.isCorrect) {
                              optStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-semibold ring-1 ring-emerald-500';
                            } else if (isSelected && !opt.isCorrect) {
                              optStyle = 'bg-rose-500/20 border-rose-500 text-rose-200 font-semibold ring-1 ring-rose-500';
                            } else {
                              optStyle = 'bg-slate-900/40 border-slate-800 text-slate-500 opacity-60';
                            }
                          } else if (isSelected) {
                            optStyle = 'bg-amber-400/20 border-amber-400 text-amber-200 font-semibold ring-1 ring-amber-400';
                          }

                          return (
                            <button
                              key={opt.label}
                              onClick={() => handleSelectQuizOption(opt.label)}
                              disabled={isQuizSubmitted && quizMode === 'exam'}
                              className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3 cursor-pointer ${optStyle}`}
                            >
                              <span
                                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                                  isSelected
                                    ? 'bg-amber-400 text-slate-950'
                                    : 'bg-slate-800 text-slate-400'
                                }`}
                              >
                                {opt.label}
                              </span>
                              <div className="flex-1 text-sm pt-0.5">{opt.text}</div>
                              {showExplanation && opt.isCorrect && (
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                              )}
                              {showExplanation && isSelected && !opt.isCorrect && (
                                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation & Distractor Confusion Notes */}
                      {showExplanation && (
                        <div className="mt-6 p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                          <div className="flex items-center space-x-2 text-xs font-mono font-bold text-amber-400 uppercase">
                            <Sparkles className="w-4 h-4" />
                            <span>Engineereya&apos;s Vlog Clarification &amp; Why Distractors Confuse:</span>
                          </div>

                          <div className="text-sm text-slate-300 leading-relaxed">
                            <strong className="text-white">Correct Answer: {currentQ.term.term}.</strong>{' '}
                            {currentQ.term.definition}
                          </div>

                          {currentQ.term.vlogMnemonic && (
                            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300">
                              <span className="font-bold block mb-0.5">Vlog Mnemonic:</span>
                              {currentQ.term.vlogMnemonic}
                            </div>
                          )}

                          {currentQ.term.distractorNotes && (
                            <div className="space-y-1.5 pt-1">
                              <span className="text-xs font-mono text-slate-400 block font-semibold">
                                Why other choices were common exam traps:
                              </span>
                              {Object.entries(currentQ.term.distractorNotes).map(([distName, note]) => (
                                <div key={distName} className="text-xs text-slate-400 font-mono">
                                  • <strong className="text-rose-300">{distName}</strong>: {note}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Question Navigation Bottom Controls */}
                      <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                        <button
                          onClick={() => setCurrentQuizIndex((idx) => Math.max(0, idx - 1))}
                          disabled={currentQuizIndex === 0}
                          className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 disabled:opacity-40 hover:text-white"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Previous</span>
                        </button>

                        <button
                          onClick={() =>
                            setCurrentQuizIndex((idx) => Math.min(quizQuestions.length - 1, idx + 1))
                          }
                          disabled={currentQuizIndex === quizQuestions.length - 1}
                          className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs font-mono disabled:opacity-40 hover:bg-amber-300"
                        >
                          <span>Next Question</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. GLOSSARY / SEARCH DIRECTORY VIEW */}
      {/* ========================================================================= */}
      {activeView === 'glossary' && (
        <div className="space-y-6">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search terms, formulas, mnemonics, or definitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="text-xs font-mono text-slate-400 px-1">
            Showing {glossaryFilteredTerms.length} civil engineering terms
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {glossaryFilteredTerms.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-xl border space-y-3 transition-all hover:border-slate-700"
                style={{
                  backgroundColor: themeConfig.bgCard,
                  borderColor: themeConfig.border,
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-base font-bold text-white tracking-tight">{item.term}</h4>
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border shrink-0 ${
                      item.subject === 'MSTC'
                        ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                        : item.subject === 'HPGE'
                        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                        : 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                    }`}
                  >
                    {item.subject} • {item.subCategory}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.definition}</p>

                {item.vlogMnemonic && (
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300">
                    <span className="font-bold text-amber-400">Vlog Clue: </span>
                    {item.vlogMnemonic}
                  </div>
                )}

                {item.boardExamTip && (
                  <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[11px] font-mono text-purple-300">
                    <span className="font-bold text-purple-400">Board Exam Trap: </span>
                    {item.boardExamTip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

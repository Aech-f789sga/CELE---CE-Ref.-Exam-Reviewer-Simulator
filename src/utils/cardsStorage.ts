/**
 * Storage and activity persistence manager for Formula Cards & Term Quiz (CARDS).
 * Preserves user scores, active question position, marked cards, quiz session state,
 * and review history across page reloads, tab navigation, and browser exit/re-entry.
 */

export interface DeckActivityState {
  cat: string;
  filter: 'all' | 'unseen' | 'review' | 'known';
  index: number;
  cardId?: string;
  lastStudiedAt: string;
}

export interface McqQuizActivityState {
  cat: string;
  order: number[];
  pos: number;
  score: { right: number; wrong: number };
  missed: number[];
  completed: boolean;
  updatedAt: string;
}

export interface TermCardsActivityState {
  cat: string;
  queue: number[];
  qpos: number;
  known: number[];
  review: number[];
  dir: 'term' | 'def';
  updatedAt: string;
}

export interface CardsUserRecord {
  activeTab: 'deck' | 'quiz' | 'glossary';
  deckActivity: DeckActivityState;
  marks: Record<string, 'known' | 'review'>;
  quizMode: 'mcq' | 'cards';
  mcqActivity: McqQuizActivityState | null;
  termCardsActivity: TermCardsActivityState | null;
  overallStats: {
    totalMcqAnswered: number;
    totalMcqRight: number;
    totalMcqWrong: number;
    totalTermsMastered: number;
    totalFormulasMastered: number;
    quizzesCompleted: number;
    lastActiveAt: string;
  };
}

const STORAGE_KEY_PREFIX = 'ce_cards_activity_';
const LEGACY_MARK_KEY = 'ce_fc_marks_v1';
const LEGACY_QUIZ_KEY = 'ce_fc_quiz_stats_v1';

export function getCardsStorageKey(userId?: string): string {
  if (userId && userId.trim()) {
    return `${STORAGE_KEY_PREFIX}${userId.trim()}`;
  }
  return `${STORAGE_KEY_PREFIX}guest`;
}

function getDefaultRecord(): CardsUserRecord {
  return {
    activeTab: 'deck',
    deckActivity: {
      cat: 'all',
      filter: 'all',
      index: 0,
      lastStudiedAt: new Date().toISOString(),
    },
    marks: {},
    quizMode: 'mcq',
    mcqActivity: null,
    termCardsActivity: null,
    overallStats: {
      totalMcqAnswered: 0,
      totalMcqRight: 0,
      totalMcqWrong: 0,
      totalTermsMastered: 0,
      totalFormulasMastered: 0,
      quizzesCompleted: 0,
      lastActiveAt: new Date().toISOString(),
    },
  };
}

/**
 * Loads the user's Cards record from localStorage.
 * Automatically migrates existing legacy marks if present.
 */
export function loadCardsActivity(userId?: string): CardsUserRecord {
  const key = getCardsStorageKey(userId);
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<CardsUserRecord>;
      const def = getDefaultRecord();
      return {
        activeTab: parsed.activeTab || def.activeTab,
        deckActivity: { ...def.deckActivity, ...(parsed.deckActivity || {}) },
        marks: { ...(parsed.marks || {}) },
        quizMode: parsed.quizMode || def.quizMode,
        mcqActivity: parsed.mcqActivity || null,
        termCardsActivity: parsed.termCardsActivity || null,
        overallStats: { ...def.overallStats, ...(parsed.overallStats || {}) },
      };
    }

    // Check legacy marks migration
    const legacyMarksRaw = localStorage.getItem(LEGACY_MARK_KEY);
    const legacyMarks = legacyMarksRaw ? JSON.parse(legacyMarksRaw) : null;
    const def = getDefaultRecord();
    if (legacyMarks && typeof legacyMarks === 'object') {
      def.marks = legacyMarks;
    }
    return def;
  } catch (e) {
    console.warn('Failed to parse cards activity storage:', e);
    return getDefaultRecord();
  }
}

/**
 * Saves or updates portions of the user's Cards record in localStorage.
 */
export function saveCardsActivity(
  update: Partial<CardsUserRecord>,
  userId?: string,
): CardsUserRecord {
  const key = getCardsStorageKey(userId);
  const current = loadCardsActivity(userId);

  const merged: CardsUserRecord = {
    ...current,
    ...update,
    deckActivity: {
      ...current.deckActivity,
      ...(update.deckActivity || {}),
      lastStudiedAt: new Date().toISOString(),
    },
    marks: {
      ...current.marks,
      ...(update.marks || {}),
    },
    overallStats: {
      ...current.overallStats,
      ...(update.overallStats || {}),
      lastActiveAt: new Date().toISOString(),
    },
  };

  try {
    localStorage.setItem(key, JSON.stringify(merged));
    // Keep legacy key in sync for backwards compatibility
    if (merged.marks) {
      localStorage.setItem(LEGACY_MARK_KEY, JSON.stringify(merged.marks));
    }
  } catch (e) {
    console.warn('Failed to save cards activity to localStorage:', e);
  }

  return merged;
}

/**
 * Updates deck mark for a card ('known' or 'review') and persists.
 */
export function saveCardMark(
  cardId: string,
  mark: 'known' | 'review',
  userId?: string,
): CardsUserRecord {
  const current = loadCardsActivity(userId);
  const nextMarks = { ...current.marks, [cardId]: mark };
  const knownCount = Object.values(nextMarks).filter((m) => m === 'known').length;

  return saveCardsActivity(
    {
      marks: nextMarks,
      overallStats: {
        ...current.overallStats,
        totalFormulasMastered: knownCount,
      },
    },
    userId,
  );
}

/**
 * Saves current deck position and category.
 */
export function saveDeckPosition(
  cat: string,
  filter: 'all' | 'unseen' | 'review' | 'known',
  index: number,
  cardId?: string,
  userId?: string,
): void {
  const current = loadCardsActivity(userId);
  saveCardsActivity(
    {
      deckActivity: {
        ...current.deckActivity,
        cat,
        filter,
        index,
        cardId,
        lastStudiedAt: new Date().toISOString(),
      },
    },
    userId,
  );
}

/**
 * Saves ongoing MCQ quiz state (question position, score, missed items, order).
 */
export function saveMcqQuizState(
  mcq: McqQuizActivityState,
  userId?: string,
): void {
  const current = loadCardsActivity(userId);
  const stats = { ...current.overallStats };
  if (mcq.completed) {
    stats.quizzesCompleted = (stats.quizzesCompleted || 0) + 1;
    stats.totalMcqAnswered = (stats.totalMcqAnswered || 0) + mcq.order.length;
    stats.totalMcqRight = (stats.totalMcqRight || 0) + mcq.score.right;
    stats.totalMcqWrong = (stats.totalMcqWrong || 0) + mcq.score.wrong;
  }

  saveCardsActivity(
    {
      quizMode: 'mcq',
      mcqActivity: mcq,
      overallStats: stats,
    },
    userId,
  );
}

/**
 * Resets the MCQ quiz session to start fresh.
 */
export function resetMcqQuizSession(userId?: string): void {
  const key = getCardsStorageKey(userId);
  const current = loadCardsActivity(userId);
  current.mcqActivity = null;
  try {
    localStorage.setItem(key, JSON.stringify(current));
  } catch {}
}

/**
 * Saves ongoing Term Flashcard practice state (queue, position, known/review sets).
 */
export function saveTermCardsState(
  cards: TermCardsActivityState,
  userId?: string,
): void {
  const current = loadCardsActivity(userId);
  const stats = {
    ...current.overallStats,
    totalTermsMastered: cards.known.length,
  };

  saveCardsActivity(
    {
      quizMode: 'cards',
      termCardsActivity: cards,
      overallStats: stats,
    },
    userId,
  );
}

/**
 * Resets the Term Flashcard practice session to start fresh.
 */
export function resetTermCardsSession(userId?: string): void {
  const key = getCardsStorageKey(userId);
  const current = loadCardsActivity(userId);
  current.termCardsActivity = null;
  try {
    localStorage.setItem(key, JSON.stringify(current));
  } catch {}
}

/**
 * "How hard was that?" — the learner's own rating of a drill item, and what it
 * does to the next draw.
 *
 * A drill is drawn at random, so without a rating every item in a topic is
 * equally likely to come back. That is wrong for revision: the two items you
 * could not do are exactly the two you need again, and the ten you found easy
 * are the ones wasting the sitting. A flag therefore *weights* the draw rather
 * than filtering it — nothing is ever excluded, the pool just leans.
 *
 * ## Why the weights are 1 : 2 : 4
 *
 * Weighted sampling makes an item's chance of appearing proportional to its
 * weight, so over many drills a `hard` item turns up **twice as often as a
 * `mid` one and four times as often as an `easy` one**. Those ratios are the
 * whole contract, and they are deliberately gentle: a harsher spread (say
 * 1 : 10) would starve the easy items out of the rotation entirely, which is
 * not what "less often" means, and would make a topic with many hard flags
 * unable to fill a quota with anything else.
 *
 * An unrated item is treated as `mid`. A learner who never touches the control
 * gets exactly the uniform draw they had before this existed, because every
 * item then carries the same weight.
 *
 * ## Why this lives in localStorage
 *
 * It is a private judgement about one's own study, not a record anyone else
 * reads, and it changes while the learner is mid-item. Writing it to Firestore
 * would mean a new collection, a new rule to publish, and a network round trip
 * on every tap — for a preference that is useful only on the device you are
 * revising on. So it is kept locally, keyed by account so two people sharing a
 * browser do not inherit each other's ratings.
 *
 * The trade-off is real and worth stating: flags do not follow the account to
 * another device, and clearing site data clears them. If they ever need to
 * sync, the shape below is already a plain `Record<itemId, flag>` and can be
 * mirrored into a document without touching any caller.
 */

/** How hard the learner found an item. */
export type ItemDifficulty = 'easy' | 'mid' | 'hard';

/** Ordered easiest → hardest, which is also the order the control shows. */
export const DIFFICULTIES: ItemDifficulty[] = ['easy', 'mid', 'hard'];

/** Every item's rating, keyed by question id. Absent means unrated. */
export type DifficultyMap = Record<string, ItemDifficulty>;

/**
 * Draw weight per rating. The ratio is the feature: `hard` is drawn twice as
 * often as `mid`, which is drawn twice as often as `easy`.
 */
export const DIFFICULTY_WEIGHT: Record<ItemDifficulty, number> = {
  easy: 1,
  mid: 2,
  hard: 4,
};

/** The weight of an item nobody has rated, and therefore of `mid`. */
export const DEFAULT_WEIGHT = DIFFICULTY_WEIGHT.mid;

const STORAGE_PREFIX = 'ce_board_item_difficulty_v1';

/** One bucket per account, so a shared browser keeps ratings apart. */
function storageKey(ownerId?: string): string {
  return ownerId ? `${STORAGE_PREFIX}:${ownerId}` : STORAGE_PREFIX;
}

function isDifficulty(value: unknown): value is ItemDifficulty {
  return value === 'easy' || value === 'mid' || value === 'hard';
}

/**
 * Read the ratings for one account.
 *
 * Anything unreadable — no storage, corrupt JSON, a value from an older build —
 * degrades to "no ratings", which draws a uniform paper. That is the safe
 * direction: a bad read must never make a drill impossible to fill.
 */
export function loadDifficulty(ownerId?: string): DifficultyMap {
  try {
    const raw = localStorage.getItem(storageKey(ownerId));
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return {};
    const out: DifficultyMap = {};
    for (const [id, value] of Object.entries(parsed as Record<string, unknown>)) {
      if (isDifficulty(value)) out[id] = value;
    }
    return out;
  } catch {
    return {};
  }
}

/**
 * Write the ratings back. Storage can fail (private mode, quota) and there is
 * nothing useful to do about it mid-drill, so a failure is swallowed: the flag
 * still applies to the rest of this session through React state.
 */
export function saveDifficulty(map: DifficultyMap, ownerId?: string): void {
  try {
    localStorage.setItem(storageKey(ownerId), JSON.stringify(map));
  } catch {
    /* the rating is already live in memory; losing it on reload is survivable */
  }
}

/**
 * Set, change or clear one item's rating. `null` clears it back to unrated,
 * which is how the control lets a mis-tap be undone.
 *
 * Returns the new map so the caller can hold it in state without a second read.
 */
export function setItemDifficulty(
  itemId: string,
  value: ItemDifficulty | null,
  ownerId?: string
): DifficultyMap {
  const map = loadDifficulty(ownerId);
  if (value) map[itemId] = value;
  else delete map[itemId];
  saveDifficulty(map, ownerId);
  return map;
}

/** The draw weight of one item: its rating's weight, or the default if unrated. */
export function weightOf(map: DifficultyMap, itemId: string): number {
  const flag = map[itemId];
  return flag ? DIFFICULTY_WEIGHT[flag] : DEFAULT_WEIGHT;
}

/**
 * How many items carry each rating, optionally restricted to a set of ids.
 *
 * Used to tell the learner, before a drill starts, that their flags are being
 * honoured — a weighting nobody can see is indistinguishable from no weighting.
 */
export function tallyDifficulty(
  map: DifficultyMap,
  ids?: string[]
): Record<ItemDifficulty, number> {
  const tally: Record<ItemDifficulty, number> = { easy: 0, mid: 0, hard: 0 };
  const entries = ids ? ids.map((id) => [id, map[id]] as const) : Object.entries(map);
  for (const [, value] of entries) {
    if (isDifficulty(value)) tally[value]++;
  }
  return tally;
}

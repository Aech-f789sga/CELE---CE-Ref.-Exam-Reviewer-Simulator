# Prompt: add questions (and answer keys) to the "By topics" drill bank

**How to use.** Copy everything from the first horizontal rule to the end of this
file into a fresh session. Fill in the `CONFIG` block. Delete any line marked
`(guidance)` once you have read it — those are notes to the human, not to the AI.

This prompt covers the **By topics** bank only: the drill mode where a learner
picks subjects and item counts, not a whole board paper. If the task is
transcribing a *paper* (MSTC May 2017, PSAD November 2024), stop and use
`docs/TRANSCRIPTION_PROMPT_GENERIC.md` instead — the two banks have different
shapes and different rules, and mixing them corrupts both.

---

## CONFIG — fill this in, or say "unknown" and let Phase 0 ask

```
REPO:     absolute path to the project
TOPIC:    an existing topic id, or "new topic: <name>"
SOURCE:   absolute path(s) to the booklet PDF / scans
KEY:      "printed key at <path>" | "key is inside the booklet" | "none supplied"
SCOPE:    "all items" | "items <a>–<b>" | "section <name>"
FIGURES:  "printed, need cropping" | "none" | "already cropped at <path>"
```

If a line is blank, wrong, or points at a file that does not open, **go to Phase 0
and ask.** Never fill in a path by guessing, and never substitute a different
volume that happens to be on disk.

---

## 0. The two rules that override everything else

**Never invent an answer key.** If the key is not printed and you were not given
it, the item is `keyPending: true` and is not scored. A guessed key produces a
confident wrong verdict on a learner who answered correctly, which is worse than
saying nothing. This is not negotiable and it is not a judgement call.

**Never retype a printed drawing as prose.** If the booklet prints a figure, the
item gets a crop of that page. "A manometer with two limbs, heights 300 mm and
150 mm" is a description of a drawing you have not seen correctly; the crop is
the evidence. See `docs/TRANSCRIPTION_PROMPT_GENERIC.md` §0 for the full
argument — it applies here unchanged.

---

## 1. Where the code is

```
src/data/topicBanks.ts            assembly: TOPIC_SUBJECTS, TOPICS, TOPIC_QUESTIONS,
                                  TopicQuestion, planTopicDrill, pickTopicQuestions
src/data/topicBanksBasicMath.ts   Algebra     1–125   bm-alg-*
src/data/topicBanksTrig.ts        Trigonometry 126–189 bm-trig-*
src/data/topicBanksGeometry.ts    Geometry    190–269  bm-geo-*
src/data/topicBanksCalculus.ts    Differential / Integral / DE   cal-diff-*, cal-int-*, cal-de-*
src/data/topicBanksStatics.ts     Forces / Equilibrium / Frames  stat-forces-*, stat-equil-*, stat-frames-*
src/data/topicBanksFluid.ts       Fluid Mechanics 1–148, nine sections, fluid-NNN
src/data/basicMathItems.ts        BM_KEY (the printed key) + makeBmItem
src/data/grading.ts               isKeyPending / summariseScore — the ONLY scoring switch
public/images/<subject>/           figure crops
scripts/check_topic_bank.cjs      structural check, see §8
```

One module per subject. A topic lives in the module for its subject; `topicBanks.ts`
only imports the section arrays and spreads them into `TOPIC_QUESTIONS`.

---

## 2. The data model

```ts
export interface TopicQuestion extends Question {
  topicId: string;          // the hub topic, e.g. 'buoyancy'
  keyPending?: boolean;     // no key supplied → never scored
  situation?: number;       // the booklet's "Situation N" this item hangs off
  situationText?: string;   // that situation's shared wording, repeated on each item
}
```

`Question` (in `src/types/exam.ts`) supplies `id, number, pageNumber, subject,
year, month, category, text, options, correctAnswer, solution` and optionally
`figureSvg, figureCaption`.

Two fields are **placeholders and must stay that way**:

- `subject` is always `'MSTC'`, `year` is always `0`, `month` is always `'May'`.
  `Question.subject` is typed to the three board areas and a drill is not one of
  them. The real classification is `topicId` (plus `category` for display). Do not
  widen the union, and do not "fix" these values.
- `correctAnswer` on a pending item is a placeholder `'A'`, not a fact. Nothing
  may compare against it while `keyPending` is set.

Every module defines a factory rather than repeating 25 fields per item:

```ts
function makeFluidItem(topicId: string, category: string) {
  return (number, text, opts: [string, string, string, string], page, extra = {}): TopicQuestion => ({
    id: `fluid-${String(number).padStart(3, '0')}`,
    number, pageNumber: page,
    subject: 'MSTC', year: 0, month: 'May',
    category,
    text: extra.situation ? `${SITUATIONS[extra.situation]}\n\n${text}` : text,
    figureSvg: extra.figure ? fluidFigure(extra.figure, extra.caption) : undefined,
    options: opts.map((t, i) => ({ label: 'ABCD'[i] as 'A', text: t })),
    correctAnswer: 'A',
    keyPending: true,
    topicId,
    situation: extra.situation,
    situationText: SITUATIONS[extra.situation],
    solution: { summary: 'No printed key supplied for this booklet yet.', steps: [], finalAnswer: '', note: 'Answer key pending — this item is not scored.' },
  });
}
```

**Follow the module you are extending.** Basic Math keeps its key in `BM_KEY` and
looks it up by item number; Calculus and Statics take an `idPrefix`; Fluid has its
own figure helper. Do not introduce a second convention beside the one already in
the file.

---

## 3. Adding items to an existing topic

1. Read the module's header comment. It records the source, the item ranges, the
   key status and any known booklet defects. Do not contradict it silently — if
   the range changes, update the comment.
2. Add the items to that topic's exported array, in booklet order.
3. Use the existing factory and the existing id prefix. Ids must be unique across
   the whole bank, not just the file.
4. Every item needs **exactly four** options labelled `A B C D`. A blank choice is
   a transcription failure, not a booklet style.
5. If the item reads off a printed figure, attach the crop (§6) and set
   `situation`/`situationText` if it belongs to a "Situation N" block.
6. Run the checks in §8 before you say you are done.

---

## 4. Adding a new topic or a new subject

A new topic touches **six** places. Missing any one of them fails silently.

1. **The bank module** — a new exported section array, e.g.
   `export const SOIL_BEARING: TopicQuestion[] = [ … ]`.
2. **`topicBanks.ts` imports** — add it to the import block.
3. **`TOPIC_QUESTIONS`** — spread it into the assembly array. Forget this and the
   items exist but are never drawn.
4. **`TOPICS`** — one entry: `{ id, subject, name, boardArea, keyPending? }`.
   `boardArea` is **required** and must be `'MSTC' | 'HPGE' | 'PSAD'`. It is what
   lets analytics say "your buoyancy is weak" and mean an HPGE topic. A topic
   without it is a type error, deliberately.
5. **`TOPIC_SUBJECTS`** — only if you are adding a whole new subject, not a topic
   inside an existing one. Add `{ id, name, blurb }`; `TopicSubject` is a union, so
   extend it too.
6. **`src/components/FeatureAccessSection.tsx`** — the blurb lists the subjects
   ("Algebra, Trigonometry, Geometry, Calculus, Statics and Fluid Mechanics").
   Update the sentence if a subject is added.

Then check whether the topic name should fold into an existing analytics bucket.
`data/analytics.ts::bucketForDrillTopic` tries `topicById(topicId)` (the board-paper
taxonomy in `data/topics.ts`), then `topicDefById(topicId)` → `normaliseTopic(name,
boardArea)`. So a drill topic named "Algebra" folds into the same bar as the
board-paper Algebra items, while "Metacenter" keeps its own row. Both are fine —
but decide deliberately, because folding moves a weakness into another topic's
average.

You do **not** need to edit `data/topics.ts` for a drill topic. That table maps
free-text board-paper categories and is a different question.

---

## 5. Answer keys — switching scoring on

`src/data/grading.ts::isKeyPending` is the **only** switch. There is no second
flag and adding one will desynchronise scoring from the UI.

To key a topic that is currently pending:

1. **Per item**: set `correctAnswer` to the printed letter and delete
   `keyPending: true` from the factory's return, or make it conditional on the
   item actually having a key.
2. **Per topic**: in `TOPICS`, delete `keyPending: true` from that topic's entry.
   This one drives the UI copy — the drill modal's "answer key not yet encoded,
   so they will not be scored" notice and its subject list are derived from it, so
   nothing else needs editing.
3. **Update the module header comment** — it states the key status, and a comment
   that says "no key yet" above keyed items is how the next person loses an hour.
4. Run `npx tsc --noEmit` and `npm run check:bank`.

Partial keys are allowed and expected: `keyPending` is per item, so a topic can
have some keyed items and some pending. Keep `TopicDef.keyPending` set only while
the topic as a whole is unkeyed.

What changes once an item is keyed, with no other edits:

- the engine reveals right/wrong and the results screen scores it;
- `topicBreakdown` starts counting it toward topic mastery;
- drill ledger rows start carrying real `scorable` totals;
- `summariseScore` stops excluding it from the percentage.

If the key is supplied as a separate list (a printed answer sheet), the house
pattern is a `const …_KEY: string[] = [...]` indexed by item number, exactly like
`BM_KEY` in `basicMathItems.ts`. Do not paste letters into 148 item literals.

---

## 6. Figures

`figureSvg` is injected with `dangerouslySetInnerHTML`, so it must be **HTML
containing an `<img>`**, not a bare URL. A URL string renders as literal text.

```ts
function fluidFigure(key: string, caption: string): string {
  return `<div class="flex flex-col items-center justify-center w-full py-2">
  <img src="/images/fluid/${key}.png" alt="Fluid Mechanics figure — ${caption}"
    class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" loading="eager" />
</div>`;
}
```

- Crops go in `public/images/<subject>/`, named `sit-NN` for a shared situation
  figure and `item-NNN` for a one-off drawing.
- Keep them ≤ 900 px wide. These are scans; a 300 dpi crop is megabytes and the
  drill loads a dozen at once.
- Crop **wider than the ink**. Truncating a dimension label or a leader line
  silently changes the problem. A crop with a stray margin is fine; a crop missing
  a label is a defect.
- The check script verifies every `src="/images/…"` exists on disk. Use it.

---

## 7. Maths in the text

Question text and every option are rendered through `MathView`, which typesets
`$…$` with KaTeX. Rules that matter:

- **Inline only.** Wrap the expression, never the sentence:
  `'Find the value of $x^2 + 3x$ when $x = 2$.'` — not `'$Find the value…$'`.
- **Escape nothing else.** Backslashes are literal in a template string but must
  be doubled in a normal quoted string: `'\\alpha = 25^\\circ'`.
- **Currency is plain text.** `'$16,650'` needs no escaping and is not maths.
  Inside a maths span, a literal dollar must be escaped: `'$\\$500{,}000$'`.
- **Unicode is tolerated but discouraged.** `MathView` converts `²`, `γ`, `·`, `√`
  and friends, so `21.8 × 10⁸ N/m²` renders. Prefer `$21.8 \\times 10^8$` for
  anything with more than one symbol.
- An unpaired `$` renders as a stray dollar sign, not a crash. The check script
  flags odd counts, but it cannot tell a price from a delimiter — when it
  complains, open the item with `--show` and look.

---

## 8. Verify before you say you are done

```bash
npx tsc --noEmit                 # types; must be silent
npm run check:bank               # structure; must exit 0
npm run build                    # production build
```

`check:bank` reads the real exported objects, so it cannot drift from what the app
draws. It reports:

- **problems** (exit 1): duplicate ids, an unknown `topicId`, a topic without
  `boardArea`, an item without exactly four options, wrong option labels, a keyed
  item with an unusable `correctAnswer`, a `situation` with no `situationText`, a
  figure path that does not exist.
- **worth a look** (exit 0): a duplicated option (one was probably misread), an
  unexplained `$`, a topic with no items.

Useful flag: `node scripts/check_topic_bank.cjs --show <item-id> [more…]` prints
the item in full — text, options, key, situation, figure path. Reading the flagged
item is always the next step after it complains.

Report the counts it prints (items per topic, keyed vs pending) in your summary.
If it reports a problem that predates your change, say so and leave it alone —
do not fix unrelated data in the same commit.

---

## 9. Commit

- One commit per topic or per section. A 300-item transcription in one commit
  cannot be reviewed.
- Subject line states the change, imperative, no prefix: `Key the Fluid Mechanics
  practice set`, `Add soil bearing capacity to the drill bank`.
- Say in the body what the source was, the item range, and the key status.
- **Do not commit files you did not change.** Another session may be working in
  the same checkout; check `git status` and stage only your paths. If you find
  someone else's half-finished work, leave it uncommitted and mention it.

---

## 10. Traps that have already bitten

- **A drill must never identify itself as a board paper.** `ExamEngine` branches on
  `topicDrill` for the sticky bar, the rough-sheet title and the submit modal. Do
  not pass a `subject`/`year`/`month` into a drill to "make the label nicer" — the
  drill is not MSTC April 2024 and stamping it as one was a reported bug.
- **`ExamAttempt` and the drill ledger are different things.** A drill is never
  written as an attempt (`isTopicDrill()` blocks it); it goes to
  `data/drillResults.ts`, keyed by `topicId`, and only the mastery panel reads it.
  Do not make a drill produce an attempt.
- **Renumbering is done at draw time.** `pickTopicQuestions` renumbers the drawn
  items 1..n, so the `number` field is the booklet's own numbering and is not what
  the learner sees. Do not renumber the bank to match a drill.
- **Items sharing a situation must stay contiguous** in the array, and each must
  repeat the shared wording in `text`. A paired item shown alone is unsolvable.
- **Read the item at 3–4× before declaring a booklet defect.** The Basic Math
  module header records four items that were "blank choices" or "cut off stems"
  and were simply misread at 2×.
- **Ids are global.** `bm-alg-12` and `fluid-012` are fine; two items both called
  `cal-diff-40` will silently shadow each other in every `Map` keyed by id.

---

## 11. Report back

When you finish, state:

1. items added, per topic, and the new total;
2. keyed vs still-pending counts, and exactly which topics changed state;
3. what `npx tsc --noEmit`, `npm run check:bank` and `npm run build` said;
4. anything you could not resolve — a missing crop, an illegible option, a key
   that disagrees with the booklet's own working — with the item id.

Never report a range as complete when part of it is unreadable. Say which items
are missing and why.

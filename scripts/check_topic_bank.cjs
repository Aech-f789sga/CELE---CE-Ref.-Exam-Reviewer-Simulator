/**
 * Structural check for the "By topics" drill bank.
 *
 *   node scripts/check_topic_bank.cjs
 *
 * Types are `npx tsc --noEmit`'s job. This is for the things the compiler cannot
 * see: ids that collide, options that are not four, a `$` that never closes, a
 * figure that points at a crop nobody made, a situation whose shared wording is
 * missing, a topic nobody has transcribed anything into.
 *
 * It bundles `src/data/topicBanks.ts` with esbuild and reads the real exported
 * objects, so it cannot drift from what the app actually draws.
 *
 * Exit code is 1 when anything is wrong, so it can gate a commit.
 */
const path = require('path');
const fs = require('fs');
const os = require('os');
const { buildSync } = require('esbuild');

const ROOT = path.resolve(__dirname, '..');
// Overridable so the checks themselves can be exercised against a broken bank.
const ENTRY = process.env.TOPIC_BANK_ENTRY
  ? path.resolve(ROOT, process.env.TOPIC_BANK_ENTRY)
  : path.join(ROOT, 'src/data/topicBanks.ts');
const OUT = path.join(os.tmpdir(), `topic-bank-check-${process.pid}.cjs`);

buildSync({
  entryPoints: [ENTRY],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  outfile: OUT,
  logLevel: 'error',
  loader: { '.ts': 'ts' },
});

const bank = require(OUT);
fs.unlinkSync(OUT);

const { TOPICS, TOPIC_QUESTIONS, topicDefById } = bank;

/*
 * `--show <id> [id…]` prints the items in full and exits. Reading the flagged
 * item is the first thing anyone does after this script complains, and hunting
 * a generated id through a factory-built array is otherwise guesswork.
 */
const showAt = process.argv.indexOf('--show');
if (showAt !== -1) {
  const ids = process.argv.slice(showAt + 1);
  if (ids.length === 0) {
    console.log('usage: node scripts/check_topic_bank.cjs --show <item-id> [item-id…]');
    process.exit(1);
  }
  for (const id of ids) {
    const q = TOPIC_QUESTIONS.find((x) => x.id === id);
    if (!q) {
      console.log(`--- ${id}: not found ---\n`);
      continue;
    }
    console.log(`--- ${id} ---  topic=${q.topicId}  key=${q.correctAnswer}  pending=${!!q.keyPending}`);
    console.log(`TEXT: ${q.text.replace(/\n/g, ' ⏎ ')}`);
    for (const o of q.options ?? []) console.log(`  ${o.label}  ${o.text}`);
    if (q.situationText) console.log(`SITUATION ${q.situation}: ${q.situationText}`);
    if (q.figureSvg) {
      const src = /src="([^"]+)"/.exec(q.figureSvg);
      console.log(`FIGURE: ${src ? src[1] : '(no img src)'}`);
    }
    console.log('');
  }
  process.exit(0);
}

/*
 * Two channels, because they need different treatment.
 *
 * `problems` are structural: the app will render the wrong thing, crash, or
 * score the wrong item. They fail the script.
 *
 * `warnings` are things only a human can judge — a duplicated option, a `$` the
 * heuristic cannot classify. They are printed and the script still passes,
 * because a bank that is merely worth a second look should not block a commit.
 */
const problems = [];
const warnings = [];
const bad = (msg) => problems.push(msg);
const warn = (msg) => warnings.push(msg);

/**
 * Count `$` that cannot be explained, i.e. a maths span that never closed.
 *
 * `$` does double duty here — it opens inline KaTeX *and* it starts a peso
 * amount — so a raw count flags most of the Basic Math and Calculus sets. The
 * question worth asking is not "how many" but "is anything broken", and the
 * first filter is free: an even number of `$` cannot leave a span open, and a
 * lone price renders as text because `MathView` refuses a span that is not
 * maths. So only an odd count is investigated at all.
 *
 * For those, dollars followed by a bare number (`$16,650`, `$20 per`) are
 * struck out as prices and whatever remains is the suspect. A number continued
 * by a maths character stays a delimiter — `$4$`, `$15/\pi`, `$7.64^\circ$` —
 * which is why the lookahead names them. This is a heuristic and it is reported
 * as such: it can miss a price and an unclosed span that cancel out.
 */
function unexplainedDollars(text) {
  const noEscapes = text.replace(/\\\$/g, 'X');
  if ((noEscapes.match(/\$/g) || []).length % 2 === 0) return 0;
  const noPrices = noEscapes.replace(/\$\d[\d,]*(?:\.\d+)?(?![\dA-Za-z/\\^_*+($.-])/g, 'X');
  return (noPrices.match(/\$/g) || []).length;
}

/* ---------------------------------------------------------------- *
 * Topics
 * ---------------------------------------------------------------- */

const topicIds = new Set(TOPICS.map((t) => t.id));
if (topicIds.size !== TOPICS.length) {
  const seen = new Set();
  for (const t of TOPICS) {
    if (seen.has(t.id)) bad(`duplicate topic id in TOPICS: ${t.id}`);
    seen.add(t.id);
  }
}

for (const t of TOPICS) {
  if (!t.boardArea) bad(`topic ${t.id} has no boardArea (analytics needs it)`);
  if (!['MSTC', 'HPGE', 'PSAD'].includes(t.boardArea)) {
    bad(`topic ${t.id} has boardArea "${t.boardArea}" — must be MSTC, HPGE or PSAD`);
  }
  if (!t.name || !t.name.trim()) bad(`topic ${t.id} has no name`);
}

/* ---------------------------------------------------------------- *
 * Items
 * ---------------------------------------------------------------- */

const ids = new Map();
const byTopic = new Map();
const LETTERS = ['A', 'B', 'C', 'D'];

for (const q of TOPIC_QUESTIONS) {
  const where = q.id || '(no id)';

  if (ids.has(q.id)) bad(`duplicate item id ${where} (also used by a previous item)`);
  ids.set(q.id, q);

  if (!q.topicId) bad(`${where}: no topicId`);
  else if (!topicIds.has(q.topicId)) bad(`${where}: topicId "${q.topicId}" is not in TOPICS`);
  else byTopic.set(q.topicId, (byTopic.get(q.topicId) ?? 0) + 1);

  if (!q.text || !q.text.trim()) bad(`${where}: empty question text`);

  if (!Array.isArray(q.options) || q.options.length !== 4) {
    bad(`${where}: ${q.options ? q.options.length : 0} options — every item needs exactly 4`);
  } else {
    const labels = q.options.map((o) => o.label).join('');
    if (labels !== 'ABCD') bad(`${where}: option labels are "${labels}", expected "ABCD"`);
    const texts = q.options.map((o) => (o.text ?? '').trim());
    if (texts.some((t) => !t)) bad(`${where}: an option is blank`);
    const dupes = texts.filter((t, i) => t && texts.indexOf(t) !== i);
    if (dupes.length) {
      warn(`${where}: duplicate option text "${dupes[0]}" — check the booklet, one was probably misread`);
    }
  }

  if (!LETTERS.includes(q.correctAnswer)) {
    bad(`${where}: correctAnswer "${q.correctAnswer}" is not A–D`);
  }

  /*
   * A pending item's `correctAnswer` is a placeholder, not a fact, so it is
   * allowed to be anything. A keyed item's must be a real letter — that is the
   * one thing that makes scoring mean something.
   */
  if (!q.keyPending && !LETTERS.includes(q.correctAnswer)) {
    bad(`${where}: keyed item without a usable correctAnswer`);
  }

  // `$` is the inline-maths delimiter. An odd count means one never closed and
  // the rest of the sentence will render as raw LaTeX.
  const dollars = unexplainedDollars(q.text);
  if (dollars % 2 !== 0) {
    warn(`${where}: ${dollars} unexplained $ in the text — a maths span may be unclosed`);
  }
  for (const o of q.options ?? []) {
    if (unexplainedDollars(o.text ?? '') % 2 !== 0) {
      warn(`${where}: unexplained $ in option ${o.label} — a maths span may be unclosed`);
    }
  }

  if (q.situation !== undefined) {
    if (!q.situationText || !q.situationText.trim()) {
      bad(`${where}: sits in situation ${q.situation} but has no situationText`);
    }
    if (!q.text.includes(q.situationText)) {
      warn(`${where}: situationText is not repeated at the top of the item text`);
    }
  }

  // Figures are HTML with an <img src="/images/...">; the crop has to exist or
  // the item renders a broken image box.
  const src = /src="(\/images\/[^"]+)"/.exec(q.figureSvg ?? '');
  if (src) {
    const onDisk = path.join(ROOT, 'public', src[1].replace(/^\//, ''));
    if (!fs.existsSync(onDisk)) bad(`${where}: figure ${src[1]} does not exist on disk`);
  }
}

/* ---------------------------------------------------------------- *
 * Coverage
 * ---------------------------------------------------------------- */

for (const t of TOPICS) {
  const n = byTopic.get(t.id) ?? 0;
  if (n === 0) warn(`topic ${t.id} ("${t.name}") has no items`);
}

/* ---------------------------------------------------------------- *
 * Report
 * ---------------------------------------------------------------- */

const keyed = TOPIC_QUESTIONS.filter((q) => !q.keyPending).length;
const pending = TOPIC_QUESTIONS.length - keyed;

console.log(`topics: ${TOPICS.length}   items: ${TOPIC_QUESTIONS.length}   keyed: ${keyed}   pending: ${pending}\n`);

const width = Math.max(...TOPICS.map((t) => t.name.length), 10);
for (const t of TOPICS) {
  const n = byTopic.get(t.id) ?? 0;
  const mine = TOPIC_QUESTIONS.filter((q) => q.topicId === t.id);
  const k = mine.filter((q) => !q.keyPending).length;
  const state = n === 0 ? 'EMPTY' : k === 0 ? 'no key' : k === n ? 'keyed' : `${k}/${n} keyed`;
  console.log(
    `  ${t.name.padEnd(width)}  ${String(n).padStart(4)} items  ${t.boardArea}  ${state}`
  );
}

if (warnings.length) {
  console.log(`\nworth a look (${warnings.length}) — not necessarily wrong`);
  for (const w of warnings) console.log(`  ? ${w}`);
}

if (problems.length) {
  console.log('\nproblems');
  for (const p of problems) console.log(`  x ${p}`);
  console.log(`\n${problems.length} problem(s) — the app will misbehave until these are fixed.`);
  process.exit(1);
}

console.log('\nno structural problems found.');

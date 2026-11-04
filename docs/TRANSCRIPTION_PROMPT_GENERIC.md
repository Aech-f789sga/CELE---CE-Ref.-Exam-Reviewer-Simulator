# Prompt: transcribe one booklet section into the reviewer app

**How to use.** Copy everything from the first horizontal rule to the end of this
file into a fresh session. Fill in the `CONFIG` block. Delete any line marked
`(guidance)` once you have read it — those are notes to the human, not to the AI.

The prompt is written to be publisher-agnostic. It assumes nothing about whether
the booklet is Gillesania or Besavilla, one volume or two, 50 items or 75. Every
number that could be inherited is instead something the AI is told to *measure
and report*.

---

## CONFIG — fill this in, or say "unknown" and let Phase 0 ask

```
PUBLISHER:    Gillesania | Besavilla | other — name it
SUBJECT:      PSAD | MSTC | HPGE | other — name it
SECTION:      <Month> <Year>            e.g. PSAD November 2016
BOOKLET:      absolute path(s) to the PDF(s), comma-separated if more than one
TARGET:       absolute path to the repo, or "no repo — produce files only"
IMITATE:      path to an already-finished section to copy the shape from, if any
SCOPE:        one section | a list of sections | every remaining section
```

If a line is blank, wrong, or points at a file that does not open, **go to Phase 0
and ask.** Never fill in a path by guessing, and never substitute a different
volume that happens to be on disk.

---

## 0. The one rule that overrides everything else

**Every item whose working the booklet prints must show that working as a crop of
the booklet page — never a retyped derivation.**

Not a paraphrase. Not a recomputed solution. Not "the method is standard, so here
is the algebra". A cropped JPEG of the actual printed page, placed in the item's
image array.

- `images` and `steps` are mutually exclusive in the UI. An item gets one or the
  other, never both.
- A cropped item can still carry a `note`; notes render outside that branch.
- If a crop is *ugly* — a stray margin, a band of white space — that is
  acceptable. If a crop is *truncated*, that is a defect and must be fixed.
  Truncation is always the worse failure. When in doubt, include more paper.

The reason is not aesthetic. A retyped derivation silently acquires the
transcriber's own arithmetic, notation and rounding, and there is then no way to
tell a booklet error from a transcription error. The crop is the evidence.

---

## 0.5. Ask, don't guess — the input contract

Before any reading, confirm all of the following. Anything you cannot confirm,
**stop and ask in one message**, listing every gap at once rather than one per
turn.

1. **The booklet file opens** and is the volume that actually contains this
   section. Open it and check, do not infer from the filename.
2. **The section is present and complete.** A missing run of pages is a real
   thing that happens to scans. If more than a couple of folios are absent, stop
   and report — do not reconstruct a section from a partial scan.
3. **The target repo** exists and contains at least one finished section you can
   imitate. If `TARGET` is "no repo", confirm the output format instead.
4. **The publisher and edition.** Layout conventions differ between publishers
   and between editions of the same publisher. Do not carry one booklet's
   conventions into another's.

Ask in this shape:

> I have the booklet but I cannot confirm three things before starting:
> (a) `BOOKLET` points to `<path>`, which appears to be volume N covering
> <range> — is the <SECTION> section in a different file?
> (b) there is no finished section under `TARGET` to imitate; should I follow the
> schema described in this prompt instead?
> (c) the scan has no pages for folios 298–314; is that expected?
> I will not start reading questions until these are answered.

**Never download a copy of the booklet from the internet to fill a gap.** Page
numbering, cropping and key layout will not match the file the human is holding,
and every folio reference you produce afterwards will be wrong.

---

## 1. What "done" means

A section is done when all of these are true, and you can show the evidence:

- every item has a stem, four choices, and a correct answer letter;
- every item that has printed working points at a crop of that working;
- every crop has been visually audited and contains no running head, no folio
  number, and no fragment of a neighbouring item;
- the item count matches the booklet's own answer key, not the number you
  expected;
- every booklet defect is written down as a note, and none were silently fixed;
- the repo typechecks, builds, and renders the section in a browser;
- the changes are committed and pushed.

Until all seven hold, report progress, not completion.

---

## 2. Phase 0 — locate and classify the inputs

Do this before reading a single question. It takes ten minutes and saves hours.

### 2.1 Determine the structural class

This is the fork that changes the entire workflow. Look at the table of contents
and three sample pages, then decide:

| Class | What the booklet looks like | Where the working lives | Consequence |
| --- | --- | --- | --- |
| **A. Key, then solutions** | questions, then an answer key, then worked solutions in item order | after the key | two independent page ranges to map |
| **B. Interleaved** | each problem followed immediately by its solution | inline, same page | no separate solution range; band per item is short |
| **C. Split volumes** | questions in one file, solutions in another | a different PDF | two folio maps, and item order may differ between them |
| **D. Answers only** | a key with no printed working anywhere | nowhere | every item is note-only; **confirm with the human before producing a section with zero crops** |

State the class you concluded and the evidence for it. If the booklet is a mix
(some subjects interleaved, some keyed at the end), say which is which — do not
average them into one workflow.

### 2.2 Determine the scan geometry

- **One book page per PDF page, or two?** Two-up scans put two folios on one PDF
  page, usually with the even folio on the left. If two-up, every x coordinate
  halves and the folio map needs a parity rule.
- **Is there a text layer?** Try extracting text. Photographed or photocopied
  booklets usually have none, which means OCR and crops, not copy-paste.
- **Is the scan rotated or skewed?** Check whether horizontal rules are actually
  horizontal. A page-level deskew is fine; a per-row variance deskew will clamp
  against the page edge and mangle everything. Do not build one.

### 2.3 Reuse before writing

If the target repo or scratch directory already contains scripts from a previous
section, read them first. Clipping, OCR, contact-sheet and manifest generators
are almost always reusable with a different constants table. Say which scripts
you reused and which you had to write.

---

## 3. Phase 1 — folio arithmetic and boundaries

The booklet's printed page numbers are **not** PDF page numbers.

1. Read the folio off the header band of two or three pages. Derive
   `folio = pdf_page ± k`.
2. **Verify the offset is constant across your whole range.** In some volumes the
   binding is re-scanned partway through and the offset changes. Check the two
   ends and the middle; if it changes, record both offsets and where the switch
   happens.
3. **Check the folio sequence for gaps before reading anything else.** List the
   missing folios. A handful of blank versos is normal; a contiguous run of
   fifteen is a missing signature.
4. Locate three boundaries and write them down: first question page, answer key
   page(s), first solution page. Then the last page of each.
5. **Count the items from the key's last entry**, not from the range you assumed.
   Item counts of 50, 65, 72 and 75 all occur, and a paper may letter fewer slots
   than its key grid has — trailing bare numbers in the grid are unused slots,
   not missing answers.

### Reading the answer key

Key layouts differ by publisher and by edition. Do not assume the layout you saw
in another volume. Probe it:

- Render the key page at 3–4× and look at the whole grid at once.
- Determine: how many columns, whether it reads across or down, whether it is
  split into blocks, and whether the last few items sit in a separate column.
- Transcribe **all** entries, then read the page again and diff your two passes.
  A single transposed column is invisible until an item fails its own working.

**Never infer a key from the working.** If the key and the working disagree, that
is a booklet defect to record — the repo keeps the key's answer unless the human
says otherwise.

---

## 4. Phase 2 — read the questions

- Render each question page at a scale where the whole page is legible in one
  read (`1.6` works for a 300-dpi two-column page). One whole-page read beats
  four narrow strips of the same page, both in cost and in comprehension.
- Transcribe stems and all four choices exactly: numbers, units, symbols (`kPa`,
  `kN·m`, `m³`, `φ`, `γ`). Preserve printed wording, including awkward phrasing
  and typos.
- Watch for, and **record rather than fix**:
  - the same value printed twice among the choices;
  - a choice carrying the wrong unit;
  - a stem that contradicts its own working;
  - a stem that references a figure or table that is not on the page;
  - an answer key that contradicts the printed working.
- Figures and tables referenced by questions get their own crop, sized
  1200–1400 px wide, and must be checked for a clipped right column or a missing
  last row. A table cropped one row short is the single most common figure defect.

---

## 5. Phase 3 — map the solution blocks

You need, for every item that has working, the page and the vertical extent of
that working. Everything else in this phase is about finding those extents
reliably.

### 5.1 Find how the booklet marks a solution

Look at three pages before building anything. The start of each worked solution
is usually marked by one of:

- a small glyph plus the item number in the left margin;
- the item number alone, bold, at the left margin;
- a `Solution` / `Sol.` / `Soln.` heading;
- a horizontal rule under the question;
- nothing at all — in which case solutions run in strict item order and you can
  segment by position alone.

Confirm which one applies, and say so. Do not build a glyph detector because a
different booklet used a glyph.

### 5.2 Expect the label position to drift

These are photographed spreads. The left-margin offset shifts page to page, and
on some pages the marker is too washed out for any ink threshold.

Detectors that have been tried and **failed** on real scans, do not rebuild them:

- fixed-x column scanning;
- template matching of the glyph;
- "margin has ink but body does not" row tests;
- structural "short line at the left margin" heuristics;
- per-row variance deskew.

What works: render the page with a **red y-ruler down the blank left margin**,
numbered in the same pixel units your crop tool consumes, then read the label
positions off the ruler by eye. It is a few seconds per page and it does not
silently fail.

### 5.3 Build the band table

```python
BANDS = {
    1: [(481, 2200, 2925)],                    # item -> [(pdf_page, y0, y1), ...]
    6: [(483, 1180, 2800), (484, 500, 1290)],  # two entries = crosses a page break
}
```

Structural cases to handle explicitly:

- **Grouped situations.** One derivation printed once, tagged `Part 1 / Part 2 /
  Part 3` with no per-item label. Give each member item its own part band; give
  the first item of the group the situation statement as well. Map items by the
  quantity each question asks, **never by the tag number** — tags are frequently
  out of reading order.
- **Items crossing a page break.** Two bands. The continuation band must open
  *below* the running head. Measure where the head sits on your scan rather than
  reusing a constant; open continuations at least 20 px under it.
- **Items with no printed working.** No crop. A `note` explaining why, and an
  entry in a `NO_CROP` list whose doc comment says what the list means.
- **Key-only items.** Same treatment.

---

## 6. Phase 4 — generate the crops

- Output one file per band, with a deterministic name including the item number
  and a suffix for a second band (`i07.jpg`, `i07b.jpg`).
- Width ~1500 px, `JPEG quality=78, optimize=True` is a good default; check the
  total section weight and come down if it is large.
- **Delete the previous crops before regenerating.** Stale files from an earlier
  band table will pollute the audit and inflate your file count, and you will
  spend an hour reconciling a number that was never real.

### Three traps that cost real time

1. **`pymupdf.Matrix` scale is `dpi/72`, not `72/dpi`.** Keep a
   points-per-pixel factor for building `clip` rects, and render with
   `Matrix(dpi/72, dpi/72)`. Mixing the two conventions silently yields a
   postage stamp and no error.
2. **Trim only the blank tail; never hunt for "the last dense text row".** A band
   that is mostly a figure — a thin cable, a small diagram — has few dark pixels
   per row, so a density rule will cut the entire computation away. Trim the tail
   and nothing else:

   ```python
   def snap_end(pno, y0, y1, limit):
       """Trim only the blank tail of a band. Truncation is a far worse defect
       than a little white space."""
       counts = ink_rows(pno)
       hi = min(len(counts) - 1, limit, int(y1))
       last = None
       for j in range(hi, int(y0), -1):
           if counts[j] > 30:
               last = j
               break
       if last is None:
           return int(y1)
       return int(min(hi, last + 20))
   ```

3. **Do not auto-detect the top of a block.** Scan speckle puts 100–300 dark
   pixels on blank paper, so gap detection is meaningless. Measure each block top
   off the ruler and hard-code it in a table. It feels less clever and it works.

---

## 7. Phase 5 — audit every crop before wiring anything

Two sweeps, both mandatory. Do not skip the second because the first looked fine.

**a) Visual contact sheets.** Build labelled vertical sheets of 8–9 crops and
read them. For every panel confirm: starts at the item marker and not
mid-sentence, is not clipped at the top, ends after the final printed answer, and
contains no fragment of the neighbouring item.

**b) Header-leak sweep.** OCR the top ~60 px of every crop and search for
running-title text or a folio number. Target: zero hits. This catches what the
contact sheets miss, because a thin strip of header reads as a harmless line at
sheet scale.

Expect one round of 10–15 px corrections after the first sheets. That is normal:
the first ruler reading is usually slightly low and clips the top of the item
number. Patch the band table, regenerate, re-audit. Do not start wiring until the
sheets are clean.

---

## 8. Phase 6 — wire it into the target

Match the shape of the section you were told to imitate. The contract is:

- one item = stem, four choices, a correct letter, and **either** an image list
  **or** a step list, plus an optional note;
- images resolve to real files that exist;
- items are grouped into parts small enough to review;
- one aggregator per section, registered in the exam-set inventory and in the
  dispatcher.

If the repo does not have a dispatcher, an inventory, or an existing section to
imitate, **ask for the intended shape** rather than inventing one. A section that
is internally consistent but does not plug in is not finished.

Keep a doc comment at the top of the aggregator listing the recall items, the
items with duplicated choices, and every other booklet defect. That comment is
the only place a future reader will learn why item 72 says D when the key says C.

---

## 9. Phase 7 — gates

All must pass. Use the repo's own scripts; if a script is missing, say so and
build the equivalent rather than declaring the gate unnecessary.

| Gate | What to run | Pass condition |
| --- | --- | --- |
| Typecheck | the repo's typecheck script | no output |
| Integrity | a bundled script, below | every assertion green |
| Build | the repo's build script | completes without error |
| Browser | a scripted walk | every probe green, zero broken images, zero stray `$` |

**Integrity check.** A TypeScript runner usually cannot import `.jpg`, so bundle
first with the images inlined:

```bash
npx esbuild check_<section>.ts --bundle --platform=node --format=cjs \
  --loader:.jpg=dataurl --outfile=check.cjs --log-level=error && node check.cjs
```

Assert: the item count matches the key; every cropped item resolves all its
images; `images` and `steps` are never both set; note-only items have a note and
no crop; every crop file exists; folios are within the mapped range; no choice is
an empty string.

**Browser walk.** Probe at least: a plain item, a two-band page-break item, a
figure item, a note-only item, a grouped-situation member, and the last item.
Each probe logs the folio, the note, the crop count and dimensions, broken-image
count and stray-dollar count, and saves a screenshot. Read the screenshots for
the interesting probes — a green log with a blank image is a failure the log
cannot see.

Confirm any recurring console error is pre-existing before chasing it. A
deployment-injected 404 is not your bug; check it with a direct request and move
on.

---

## 10. Phase 8 — ship and report

1. `git status --short` first. Stage exactly the section's own paths. **Do not
   stage lockfiles** produced as a side effect of `npx`.
2. Commit with the publisher, subject, month, year and item count in the subject
   line.
3. Push.
4. Append to the project work log: folio map, item count **and why it is not the
   round number**, structural quirks, scan problems and the workaround that
   actually worked, editorial defects, and the reusable script list.
5. Present the proof screenshots, then summarise.

---

## 11. Credit and attention discipline

You are being judged on cost as well as correctness.

- Use OCR to **locate** things — page layout, marker positions, folio numbers. It
  is far cheaper than image reads.
- Use image reads only for genuine ambiguity: the answer key, a duplicated
  choice, a marker position you cannot resolve, a crop that might be clipped.
- Read one whole page at a workable scale instead of several strips of it.
- Never re-read a page you have already transcribed.
- Batch OCR across a range in one command, then grep the output.
- When a detector fails twice, stop tuning it and go back to reading the page
  directly. The ruler exists because three clever detectors each failed on part
  of the range.

---

## 12. Reporting shape

When the section is done, report exactly this:

- **Counts table:** items, items with crops, crop files, why there are more crop
  files than cropped items, note-only items, figures, editorial notes, total
  image weight.
- **What the screenshots prove**, one line each.
- **Every gate with its actual output**, not a claim that it passed.
- **Editorial defects as a numbered list**, each with the item number and what
  the booklet gets wrong. Never paper over a booklet error.
- **Dead ends encountered**, so they are not re-attempted.
- **Any assumption you had to make**, and what would change if it is wrong.

Do not begin the next section. Stop and wait for `next`.

---

## 13. Publisher appendix — treat all of this as hypothesis

Nothing in this table is a fact to apply blindly. It records what has been seen,
so you know what to test first.

| Question | Gillesania, Vol. 4 | Besavilla | Your job |
| --- | --- | --- | --- |
| Where is the working? | after the key, in item order (class A) | often inline with each problem (class B), sometimes a companion solutions volume (class C) | confirm the class in Phase 0 |
| Key layout | multi-column grid, read column-major, last items in an extra column | frequently keyed per problem set or per page rather than in one grid | probe at 3–4×, do not assume a grid exists |
| Solution marker | small open-book glyph + item number in the left margin | often a bold item number at the left margin, or a `Solution` heading | look at three pages before building a detector |
| Item count | varies: 50, 65, 72, 75 | varies by volume and subject | read the last key entry |
| Grouped items | `Situation` blocks with `Part n` tags, tags out of order | situations occur but are less standardised | map by quantity asked, never by tag |
| Scan quality | photographed spreads, drifting margins, speckle | variable; some volumes are photocopies of photocopies | measure geometry per volume |

If your booklet contradicts this table, **the booklet wins** — and say so in the
report, because the next section will inherit your finding.

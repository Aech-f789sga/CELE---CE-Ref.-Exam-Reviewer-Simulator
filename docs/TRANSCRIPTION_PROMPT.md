# Prompt: transcribe a Gillesania booklet section into the CE Reviewer

Copy everything inside the horizontal rules into a fresh session, and edit the  
one `SECTION:` line at the top.

---

You are transcribing one section of a Philippine CE board-exam booklet into an  
existing React app. Work through the phases in order. Do not skip a gate, and do  
not report a section as finished until every gate in Phase 7 passes.

**SECTION:** `<SUBJECT> <MONTH> <YEAR>` — e.g. `PSAD November 2016`,  
`MSTC May 2017`, `HPGE May 2017`.

---

## 0. The one rule that overrides everything else

**Every item whose working the booklet prints must show that working as a crop of  
the booklet page — never a retyped derivation.** Not a paraphrase, not a  
recomputed solution, not "the working is standard". A cropped JPEG of the actual  
printed solution, placed in `QuestionSolution.images[]`.

`images` and `steps` are mutually exclusive in the UI. `note` renders outside  
that branch, so a cropped item *can* still carry a note.

If a crop is ugly (stray margin, a little white space), that is acceptable. If a  
crop is *truncated*, that is a defect and must be fixed. Truncation is always the  
worse failure.

---

## 1. Environment

- Repo: `C:/Users/gamao/WorkBuddy AI/Coding Mode/cele`
- Stack: React 19 + TypeScript + Vite 8, Tailwind v4
- Reference PDF (844 pages, **no text layer**):  
  `C:/Users/gamao/Downloads/CE REFERENCES [ONLINE PDFs]-20260901T025035Z-1-001/CE REFERENCES [ONLINE PDFs]/2015 MAY to 2018 NOV - Gillesania Civil Engineering Reference Volume 4.pdf`
- Python: `C:/Users/gamao/.workbuddy-ai/binaries/python/envs/default/Scripts/python.exe`  
  (has `pymupdf`, `numpy`, `Pillow`, `rapidocr_onnxruntime`, `cv2`)
- Scratch dir: `C:/Users/gamao/AppData/Local/Temp/g4/` — **reuse the scripts  
  already there** before writing new ones (`clip.py`, `qpage.py`, `ocrpage.py`,  
  `labels.py`, `margin2.py`, `head.py`, `ruler_page.py`, `vsheet_hp.py`,  
  `bsheet.py`, `edge.py`). `crops_*.py` and `gen_images_*.py` from the previous  
  sections are the best templates.
- Playwright harness: `C:/Users/gamao/WorkBuddy AI/Coding Mode/.pw/`  
  (`playwright-core` + `chromium.launch({ channel: 'chrome' })`)
- Preview server: `npx vite preview --port 4173 --strictPort`

---

## 2. Folio arithmetic — get this right first

The booklet's printed page numbers are **not** PDF page numbers, and the offset  
changes partway through the volume.

- `folio = pdf_page − 4` up to pdf 301
- `folio = pdf_page + 13` from pdf 302 onward

Verify it yourself for your section rather than trusting this: read the folio off  
the header band of two or three pages (`folio.py` / `head.py`) and confirm the  
offset is constant across your range.

**Also verify the section actually exists.** One sitting (PSAD May 2016) turned  
out to have folios 298–314 physically missing from the scan. Check the folio  
sequence for gaps *before* reading questions. If more than a couple of folios are  
absent, stop and report — do not reconstruct a section from a partial scan.

---

## 3. Phase 1 — recon

1. OCR the question pages (`ocrpage.py`) to find: where questions start, where  
   the answer key sits, where solutions start.
2. Locate the answer key. Gillesania keys are laid out **column-major in a  
   6-column × 2-block grid, plus a 7th/8th column for items 61–75.** Read it at  
   high zoom (3–4×) and transcribe all 75 entries. Do not infer a key from  
   working.
3. Read the header band of every solution page to confirm the solution range and  
   to catch any intervening divider (e.g. a table-only page, or a  
   "Geotechnical Engineering" section break).
4. Note the section's item count. It is not always 50 or 75 — check the key's  
   last entry.

---

## 4. Phase 2 — read the questions

- Render each question page at `1.6` scale (`qpage.py`) and read it whole. One  
  read per page beats many narrow crops.
- Transcribe stems and all four choices exactly: numbers, units, symbols  
  (`kPa`, `kN·m`, `m³`, `φ`, `γ`). Preserve the printed wording, including  
  awkward phrasing and typos.
- Watch for: choices printed twice with the same value; choices labelled with the  
  wrong unit; a stem that disagrees with the working. **Record these as editorial  
  notes — never silently "fix" them.**
- Tables and figures referenced by questions get their own crop in  
  `src/images/<Bank>/figNN_*.jpg`, sized 1200–1400 px wide, q80–82, and must be  
  checked for a clipped right column or a missing last row.

---

## 5. Phase 3 — map the solution blocks

Each solution block is tagged in the left margin by a small open-book glyph plus  
the item number, sitting around x 480–530 at 300 dpi.

**The label x-offset drifts from page to page** (these are photographed spreads,  
not flatbed scans), and on some pages the glyph is too washed out for any ink  
threshold. Fixed-x detectors, template matching, and "margin ink but no body ink"  
row tests all fail on part of the range. Expect that.

What works: render the page with a **red y-ruler down the blank left margin**  
(`ruler_page.py`) and read the label positions off it. The ruler numbers are in  
300-dpi pixel units, which is exactly what the crop clip consumes.

Then build a `BANDS` table in `crops_<section>.py`:

```python
BANDS = {
    1: [(481, 2200, 2925)],                 # item -> [(pdf_page, y0, y1), ...]
    6: [(483, 1180, 2800), (484, 500, 1290)],  # two entries = crosses a page break
}
```

Structural patterns to expect:

- **Multi-part situations**: one derivation printed once, tagged Part 1 / Part 2  
  / Part 3 with no per-item label. Give each member item only its own part band;  
  give the first item of the group the situation statement as well.
- **Items that cross a page break**: two bands. The continuation band must be  
  clipped *below* the running head — headers sit around y 420–490 on many pages,  
  so open continuations at y ≥ 495, not 460.
- **Items with no printed working**: they get no crop, just a `note`  
  explanation. Record them in a `NO_CROP` list and explain why in the doc comment.
- **Answer-key-only items**: same treatment.

---

## 6. Phase 4 — generate the crops

Reference implementation: `crops_may17.py`, `crops_hp17.py`.

- Output: `src/images/<Bank><Month><Year>/i<NN>.jpg` (and `i<NN>b.jpg` for the  
  second band of a page-break item).
- Width 1500 px, `JPEG quality=78, optimize=True`.
- `rm -f *.jpg` before every regeneration. Stale crops from an earlier band table  
  will otherwise pollute the audit and inflate the file count.

**Two traps that cost real time:**

1. **`pymupdf.Matrix` scale is `dpi/72`, not `72/dpi`.** Keep `S = 72.0/300.0`  
   as a *points-per-pixel* factor for building `clip` rects, then render with  
   `Matrix(300/72, 300/72)`. Mixing the conventions silently yields a tiny page.
2. **Trim only the blank tail, never hunt for "the last dense text row."** A  
   block that is mostly a figure (a thin cable, a diagram) has few dark pixels per  
   row, so a density rule cuts the entire computation. Use:
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

**Do not auto-detect `BODY_TOP`.** The scan's background speckle makes an  
ink-per-row histogram return 100–300 dark pixels even on blank paper, so gap  
detection is meaningless. Measure the top of each block off the ruler and hard-code  
it in a `BODY_TOP` dict.

---

## 7. Phase 5 — audit every crop before wiring

Two sweeps, both mandatory.

**a) Visual contact sheets.** Build labelled vertical sheets of 8–9 crops  
(`vsheet_*.py`) and read them. For each panel confirm: starts at the item label  
(not mid-sentence, not clipped at the top), ends after the final printed answer,  
contains no part of the neighbouring item.

**b) Header-leak sweep.** OCR the top 60 px of every crop (`edge.py`) and search  
for running-title text or a folio number. Target: `headers: 0`.

Expect a round of ~10–15 px offset corrections after the first sheets. That is  
normal — the first ruler reading is usually slightly low, clipping the top of the  
item number. Patch the `BANDS` table, regenerate, re-audit.

---

## 8. Phase 6 — wire it in

Four files per section, following the existing pattern:

1. `src/data/<bank><Month><Year>Images.ts` — generated by a  
   `gen_images_<section>.py` script. Static imports, plus  
   `SOLUTION_CROPS`, `SOLUTION_PAGES`, `<BANK>_<MONTH>_<YEAR>_FIGURES`, and the  
   exported accessors `…SolutionImages`, `…HasSolutionCrop`, `…SolutionPage`,  
   `…Figure`.
2. `src/data/questionBanks/<bank>/<month><year>Helpers.ts` — `solved()`,  
   `recall()`, `opts()`.
3. `src/data/questionBanks/<bank>/<month><year>_part1..4.ts` — items in four  
   parts of ~20.
4. `src/data/questionBanks/<bank>/<month><year>Questions.ts` — the concatenation,  
   plus a doc comment listing the recall items, the duplicated-choice items, and  
   any other booklet defects.

Then three edits to `src/data/questionBankManager.ts`:

- import the aggregator next to the neighbouring sections;
- append an inventory entry to `AVAILABLE_EXAM_SETS` (`{ year, month, subjects,
  source: 'Gillesania' }`);
- add the dispatcher branch.

---

## 9. Phase 7 — gates (all must pass)

| Gate      | Command            | Pass condition                                   |
| --------- | ------------------ | ------------------------------------------------ |
| Typecheck | `npx tsc --noEmit` | no output                                        |
| Integrity | see below          | `problems: none`                                 |
| Build     | `npm run build`    | `✓ built in …`                                   |
| Browser   | Playwright walk    | every probe green, `broken: 0`, `strayDollar: 0` |

**Integrity check.** `tsx` cannot import `.jpg`, so bundle first:

```bash
npx esbuild check_<section>.ts --bundle --platform=node --format=cjs \
  --loader:.jpg=dataurl --outfile=check.cjs --log-level=error && node check.cjs
```

It should assert: item count, that every cropped item resolves its images, that  
`images`/`steps` are never both set, that recall items have a note and no crop,


that every crop file exists, that folios are in range, and that no choice is an  
empty string. Template: `check_mstc_may2017.ts`, `check_hpge_may2017.ts`.

**Browser walk.** Clone the previous section's walk script and swap the item list  
and screenshot prefix. Probe at least: a plain item, a two-crop page-break item, a  
figure item, a note item, a recall item, and the last item. Each probe logs the  
booklet folio, notes, crops, crop dimensions, broken count and stray-dollar count,  
and saves a screenshot. Read the screenshots for the interesting ones.

The one console 404 you will see is the pre-existing `_vercel/insights/script.js`  
— confirm it with a direct request probe so you are not chasing a phantom.

---

## 10. Phase 8 — ship

1. `git status --short` first. Stage exactly the nine section paths. **Do not  
   stage `package-lock.json`** — it is an `npx` by-product.
2. Commit: `Add Gillesania <SUBJECT> <MONTH> <YEAR> (<N> items) with booklet
   solution crops`.
3. `git push`.
4. Append a section to  
   `C:/Users/gamao/WorkBuddy AI/Coding Mode/.workbuddy-ai/memory/YYYY-MM-DD.md`  
   recording: folio map, item count and why it is not 75, structure quirks  
   (situations, page-break items, recall items), scan problems and the workaround  
   that actually worked, editorial defects, and the reusable script list.
5. `present_files` the proof screenshots, then summarise: counts table, what the  
   screenshots show, verification results, and the editorial defects.

---

## 11. Credit discipline

You are being judged on cost as well as correctness.

- Use **RapidOCR to locate** things (page layout, label positions, folio  
  numbers). It is dramatically cheaper than image reads.
- Use **`ViewImage` only for genuine ambiguity**: the answer key, a duplicated  
  choice, a label position you cannot resolve, a crop that might be clipped.
- Read a **whole page at 1.6 scale in one call** rather than several narrow  
  strips of the same page.
- Never re-read a page you have already transcribed.
- Batch the OCR: `ocrpage.py $(seq 481 494)` in one command, then grep the output  
  files.

---

## 12. Reporting

When the section is done, report in this shape:

- Counts table: items, items with crops, crop files (and why there are more than  
  items with crops), recall items, figures, editorial notes, image weight.
- What the screenshots prove, one line each.
- Every gate with its actual output.
- **Editorial defects as a numbered list, each with the item number and what the  
  booklet gets wrong.** Never paper over a booklet error; record it.
- Any dead end encountered, so it is not re-attempted.

Do not begin the next section. Stop and wait for `next`.

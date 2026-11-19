/**
 * The admin's switch for the "By topics" exam.
 *
 * Presentational on purpose: the lock state lives in `AdminPanel` so the
 * section tab can show an Open/Locked badge without opening the section. This
 * component only renders the switch and reports intent.
 *
 * The wording matters here. The flag gates *visibility*, not secrecy — the
 * topic items ship inside the bundle — so the footnote says so rather than
 * implying the questions are protected. An admin who reads "locked" and assumes
 * the content is hidden would be wrong, and that is worth one line of copy.
 */
import { AlertTriangle, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Props {
  /** null while the first read is in flight. */
  unlocked: boolean | null;
  saving: boolean;
  error: string | null;
  /** Where the current value came from, so a silent fallback is visible. */
  readSource?: 'firestore' | 'fallback' | null;
  /** Firebase error code from the read, e.g. `permission-denied`. */
  readError?: string | null;
  onToggle: (next: boolean) => void;
}

export function FeatureAccessSection({
  unlocked,
  saving,
  error,
  readSource = null,
  readError = null,
  onToggle,
}: Props) {
  const { themeConfig } = useTheme();
  const busy = saving || unlocked === null;

  return (
    <div
      className="rounded-3xl border p-6 shadow-xl space-y-5 animate-in fade-in"
      style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}
    >      <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
          <Layers className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-white text-lg">Feature Access</h3>
          <p className="text-xs text-slate-400">Exam modes you can open or close for everyone else.</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-bold text-white">By topics exam</span>
            <span
              data-testid="topic-status"
              className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                unlocked ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'
              }`}
            >
              {unlocked === null ? 'Checking…' : unlocked ? 'Open to everyone' : 'Admin only'}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Topic drills across Algebra, Trigonometry, Geometry, Calculus and Statics. While this is
            off, reviewees still see the entry but it shows as locked; unlocking takes effect on
            their screens straight away, with no reload.
          </p>
        </div>

        <button
          type="button"
          role="switch"
          aria-checked={unlocked === true}
          aria-label="Allow reviewees to open the By topics exam"
          disabled={busy}
          onClick={() => onToggle(unlocked !== true)}
          className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
            unlocked ? 'bg-emerald-500 border-emerald-400' : 'bg-slate-800 border-slate-700'
          }`}
        >
          <span
            className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
              unlocked ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-rose-500/40 bg-rose-500/10 p-3 text-[11px] text-rose-200">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <p className="text-[11px] text-slate-500">
        The switch applies to everyone else immediately — it is stored in Firestore, not in this
        browser. It gates visibility only: the topic items ship inside the app bundle.
      </p>

      {/* Diagnostic. "Locked" and "denied" look identical from the outside and
          need different fixes, so say which one this is. */}
      <div
        data-testid="topic-lock-source"
        className={`text-[10px] font-tech-mono ${readError ? 'text-rose-300' : 'text-slate-500'}`}
      >
        read: {readSource ?? 'pending'}
        {readError ? ` (${readError})` : ''}
        {readSource === 'fallback' && !readError ? ' — not confirmed by the server' : ''}
      </div>
    </div>
  );
}

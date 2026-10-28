import React, { useState, useEffect } from 'react';
import {
  Bell,
  Megaphone,
  Pin,
  Calendar,
  ShieldCheck,
  Search,
  Filter,
  AlertTriangle,
  Info,
  Sparkles,
  ExternalLink,
  Plus,
  RefreshCw,
  Clock,
  MessageSquare,
  PenTool,
  Trophy,
  BarChart3,
  Layers,
  Palette,
  Heart,
  BookOpen as BookIcon,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import {
  SystemAnnouncement,
  fetchAnnouncements,
  subscribeAnnouncements,
  formatAnnouncerName,
} from '../services/firebase';

interface AnnouncementSectionProps {
  onNavigateToAdmin?: () => void;
  onTakeExam?: () => void;
  onNavigateTab?: (tab: 'setup' | 'leaderboard' | 'announcements' | 'performance' | 'scratchpad' | 'flashcards') => void;
  onOpenThemeModal?: () => void;
  onOpenContactAdmin?: () => void;
  onOpenDonation?: () => void;
}

export const AnnouncementSection: React.FC<AnnouncementSectionProps> = ({
  onNavigateToAdmin,
  onTakeExam,
  onNavigateTab,
  onOpenThemeModal,
  onOpenContactAdmin,
  onOpenDonation,
}) => {
  const { themeConfig } = useTheme();
  const { isAdmin, designatedAdminEmail } = useAuth();
  const [announcements, setAnnouncements] = useState<SystemAnnouncement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const loadAnnouncements = async () => {
    setLoading(true);
    try {
      const data = await fetchAnnouncements(true);
      setAnnouncements(data);
    } catch (e) {
      console.error('Error fetching announcements:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAnnouncements();
    // Subscribe to real-time updates
    const unsubscribe = subscribeAnnouncements((updatedList) => {
      setAnnouncements(updatedList);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const categories = ['All', 'Exam Notice', 'PRC Advisory', 'Schedule', 'Tip', 'General'];

  const filteredAnnouncements = announcements.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      (item.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.message || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const pinnedItems = filteredAnnouncements.filter((a) => a.isPinned);
  const regularItems = filteredAnnouncements.filter((a) => !a.isPinned);

  const getPriorityBadge = (priority?: string) => {
    switch (priority) {
      case 'urgent':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3 text-rose-400" />
            URGENT
          </span>
        );
      case 'important':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            IMPORTANT
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            NOTICE
          </span>
        );
    }
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div
        className="rounded-3xl p-6 sm:p-8 border shadow-2xl relative overflow-hidden"
        style={{
          backgroundColor: themeConfig.bgCard,
          borderColor: themeConfig.border,
        }}
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span
                className="text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold border flex items-center gap-1.5"
                style={{
                  backgroundColor: themeConfig.accentBadge,
                  borderColor: `${themeConfig.accent}50`,
                  color: themeConfig.accent,
                }}
              >
                <Megaphone className="w-3.5 h-3.5" />
                OFFICIAL BULLETIN BOARD
              </span>
              <span className="text-xs font-mono text-slate-400">
                Live Admin Broadcasts
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black font-arnie text-white tracking-tight">
              System Announcements &amp; Updates
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Official broadcasts, syllabus references, and licensure exam guidelines.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <button
              type="button"
              onClick={() => {
                if (onOpenDonation) onOpenDonation();
                else window.dispatchEvent(new CustomEvent('open-admin-donation'));
              }}
              className="px-3.5 py-2 rounded-2xl bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 hover:text-white transition-colors border border-blue-500/40 cursor-pointer flex items-center gap-1.5 text-xs font-bold shadow-sm"
              title="Admin Donation & Platform Support (GCash / InstaPay)"
            >
              <Heart className="w-4 h-4 text-rose-400 fill-rose-500/30" />
              <span>Admin Donation</span>
            </button>

            {onOpenContactAdmin && (
              <button
                type="button"
                onClick={onOpenContactAdmin}
                className="px-3.5 py-2 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 transition-colors border border-amber-500/35 cursor-pointer flex items-center gap-1.5 text-xs font-bold shadow-sm"
                title="Send a message or material request to the administrator"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Message Admin</span>
              </button>
            )}

            <button
              onClick={loadAnnouncements}
              className="p-2.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700 cursor-pointer flex items-center gap-1.5 text-xs font-bold"
              title="Refresh announcements"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            {isAdmin && onNavigateToAdmin && (
              <button
                onClick={onNavigateToAdmin}
                className="px-4 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Post Announcement</span>
              </button>
            )}
          </div>
        </div>

        {/* Decorative background glow */}
        <div
          className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ backgroundColor: themeConfig.accent }}
        />
      </div>

      {/* Official PRC Passing Rule (permanent bulletin) */}
      <div
        className="rounded-2xl border p-5 sm:p-6"
        style={{
          backgroundColor: themeConfig.bgCard,
          borderColor: themeConfig.border,
        }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div className="flex items-start gap-3.5">
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{
                backgroundColor: themeConfig.accentBadge,
                color: themeConfig.accent,
              }}
            >
              <ShieldCheck className="w-5 h-5" />
            </span>
            <div>
              <span
                className="text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: themeConfig.accent }}
              >
                PRC Rule
              </span>
              <h2 className="text-base font-bold text-white mt-0.5">
                Official Passing Criteria
              </h2>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed max-w-md">
                A candidate passes only when the general weighted average reaches 70.00% and no
                single subject rating falls below 50.00%.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-stretch gap-2.5 shrink-0">
            <div
              className="px-4 py-2.5 rounded-xl border"
              style={{ backgroundColor: themeConfig.bgCardSubtle, borderColor: themeConfig.border }}
            >
              <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Overall Passing
              </div>
              <div className="text-sm font-bold text-emerald-400 mt-0.5">≥ 70.00% GWA</div>
            </div>

            <div
              className="px-4 py-2.5 rounded-xl border"
              style={{ backgroundColor: themeConfig.bgCardSubtle, borderColor: themeConfig.border }}
            >
              <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Min. Per Subject
              </div>
              <div className="text-sm font-bold mt-0.5" style={{ color: themeConfig.accent }}>
                ≥ 50.00%
              </div>
            </div>

            <div
              className="px-4 py-2.5 rounded-xl border"
              style={{ backgroundColor: themeConfig.bgCardSubtle, borderColor: themeConfig.border }}
            >
              <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Subject Weights
              </div>
              <div className="text-xs font-bold mt-0.5 flex items-center gap-2">
                <span className="text-amber-400">MSTC 35%</span>
                <span className="text-slate-600">•</span>
                <span className="text-cyan-400">HPGE 30%</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400">PSAD 35%</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Failure if any subject rating is below 50.00%, regardless of the general average.</span>
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div
        className="rounded-2xl p-4 border flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{
          backgroundColor: themeConfig.bgCard,
          borderColor: themeConfig.border,
        }}
      >
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 shadow-md scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search updates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
          />
        </div>
      </div>

      {/* Announcement List */}
      <div data-tour="announcements-content" className="space-y-4">
        {loading ? (
          <div className="p-12 text-center text-slate-400 text-sm flex flex-col items-center justify-center space-y-3">
            <RefreshCw className="w-6 h-6 animate-spin text-amber-400" />
            <p>Fetching official broadcast updates...</p>
          </div>
        ) : filteredAnnouncements.length === 0 ? (
          <div
            className="rounded-3xl p-12 text-center border space-y-3"
            style={{
              backgroundColor: themeConfig.bgCard,
              borderColor: themeConfig.border,
            }}
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto">
              <Megaphone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">No Announcements Found</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              {searchQuery || selectedCategory !== 'All'
                ? 'No updates match your search criteria. Try selecting another category or clear the search.'
                : 'The administrator has not posted any announcements yet. Check back soon for review updates!'}
            </p>
            {isAdmin && onNavigateToAdmin && (
              <button
                onClick={onNavigateToAdmin}
                className="mt-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                Post the First Announcement
              </button>
            )}
          </div>
        ) : (
          <>
            {/* PINNED ANNOUNCEMENTS */}
            {pinnedItems.map((ann) => (
              <div
                key={ann.id}
                className="rounded-3xl p-6 border shadow-2xl relative overflow-hidden transition-all hover:border-amber-500/60"
                style={{
                  backgroundColor: themeConfig.bgCard,
                  borderColor: 'rgba(245, 158, 11, 0.4)',
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500 text-slate-950 flex items-center gap-1 shadow-sm">
                      <Pin className="w-3 h-3 fill-slate-950" />
                      PINNED ADVISORY
                    </span>
                    {getPriorityBadge(ann.priority)}
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                      {ann.category || 'General'}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 shrink-0">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {formatDate(ann.createdAt)}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-arnie text-white mb-2.5 flex items-center gap-2">
                  <span>{ann.title}</span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line mb-4 font-sans">
                  {ann.message}
                </p>

                {/* Feature testing grid for capabilities announcement */}
                {ann.id === 'ann-capabilities-directory' && (
                  <div className="mt-4 mb-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Interactive Feature Tester — Click to Test
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                      <button
                        type="button"
                        onClick={() => (onNavigateTab ? onNavigateTab('setup') : onTakeExam?.())}
                        className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400 text-left transition-all cursor-pointer group"
                      >
                        <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs group-hover:translate-x-0.5 transition-transform">
                          <BookIcon className="w-3.5 h-3.5" />
                          <span>Exam Portal</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1">2011–2025 sets &amp; KaTeX</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => onNavigateTab?.('leaderboard')}
                        className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400 text-left transition-all cursor-pointer group"
                      >
                        <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs group-hover:translate-x-0.5 transition-transform">
                          <Trophy className="w-3.5 h-3.5" />
                          <span>Leaderboard</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1">Real-time GWA rankings</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => onNavigateTab?.('performance')}
                        className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400 text-left transition-all cursor-pointer group"
                      >
                        <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs group-hover:translate-x-0.5 transition-transform">
                          <BarChart3 className="w-3.5 h-3.5" />
                          <span>Performance</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1">Paired cycles &amp; 70% threshold</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => onNavigateTab?.('scratchpad')}
                        className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-400 text-left transition-all cursor-pointer group"
                      >
                        <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs group-hover:translate-x-0.5 transition-transform">
                          <PenTool className="w-3.5 h-3.5" />
                          <span>Scratchpad Hub</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1">Canvas drawing &amp; PDF</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => onNavigateTab?.('flashcards')}
                        className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-400 text-left transition-all cursor-pointer group"
                      >
                        <div className="flex items-center space-x-2 text-purple-400 font-bold text-xs group-hover:translate-x-0.5 transition-transform">
                          <Layers className="w-3.5 h-3.5" />
                          <span>Formula Cards</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1">971 APJO formula cards</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => onNavigateTab?.('flashcards')}
                        className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400 text-left transition-all cursor-pointer group"
                      >
                        <div className="flex items-center space-x-2 text-cyan-400 font-bold text-xs group-hover:translate-x-0.5 transition-transform">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Term Quiz</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1">1,059 speed drill terms</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => onOpenThemeModal?.()}
                        className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-pink-400 text-left transition-all cursor-pointer group"
                      >
                        <div className="flex items-center space-x-2 text-pink-400 font-bold text-xs group-hover:translate-x-0.5 transition-transform">
                          <Palette className="w-3.5 h-3.5" />
                          <span>Themes &amp; 3D</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1">10 themes &amp; soundscapes</p>
                      </button>

                      {onOpenContactAdmin && (
                        <button
                          type="button"
                          onClick={onOpenContactAdmin}
                          className="p-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-400 text-left transition-all cursor-pointer group"
                        >
                          <div className="flex items-center space-x-2 text-amber-300 font-bold text-xs group-hover:translate-x-0.5 transition-transform">
                            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                            <span>Message Admin</span>
                          </div>
                          <p className="text-[10px] text-slate-400 mt-1">Send request or material</p>
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Free platform assurance + Message Admin quick button */}
                {ann.id === 'ann-dev-mission-references' && onOpenContactAdmin && (
                  <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between flex-wrap gap-2">
                    <span className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
                      <Heart className="w-3.5 h-3.5 fill-emerald-500/20" />
                      100% Free Educational Reviewer — No Ads, No Fees, No Commercial Gain
                    </span>
                    <button
                      type="button"
                      onClick={onOpenContactAdmin}
                      className="px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/35 text-amber-300 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                      <span>Message Admin with Request</span>
                    </button>
                  </div>
                )}

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2 text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span className="text-[11px]">
                      Announcer: <strong className="text-white font-semibold">{formatAnnouncerName(ann)}</strong> (Official Broadcast)
                    </span>
                  </div>
                  {onTakeExam && (
                    <button
                      onClick={onTakeExam}
                      className="text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Go to Exam Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* REGULAR ANNOUNCEMENTS */}
            {regularItems.map((ann) => (
              <div
                key={ann.id}
                className="rounded-3xl p-6 border shadow-lg transition-all hover:border-slate-600"
                style={{
                  backgroundColor: themeConfig.bgCard,
                  borderColor: themeConfig.border,
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    {getPriorityBadge(ann.priority)}
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                      {ann.category || 'General'}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 shrink-0">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {formatDate(ann.createdAt)}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-arnie text-white mb-2">
                  {ann.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line mb-4">
                  {ann.message}
                </p>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2 text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span className="text-[11px]">
                      Announcer: <strong className="text-white font-semibold">{formatAnnouncerName(ann)}</strong> (Official Broadcast)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

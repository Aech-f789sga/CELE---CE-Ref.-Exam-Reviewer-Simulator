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
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import {
  SystemAnnouncement,
  fetchAnnouncements,
  subscribeAnnouncements,
} from '../services/firebase';

interface AnnouncementSectionProps {
  onNavigateToAdmin?: () => void;
  onTakeExam?: () => void;
}

export const AnnouncementSection: React.FC<AnnouncementSectionProps> = ({
  onNavigateToAdmin,
  onTakeExam,
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
              Real-time advisories, review tips, exam timetable announcements, and PRC licensure updates posted by the designated System Administrator (
              <span className="text-amber-300 font-mono font-medium">{designatedAdminEmail}</span>).
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
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
      <div className="space-y-4">
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

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2 text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span className="text-[11px]">
                      Posted by <strong className="text-white">{ann.authorName || 'Derrick Darrack'}</strong> ({ann.authorEmail})
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
                      Posted by <strong className="text-white">{ann.authorName || 'System Admin'}</strong> ({ann.authorEmail})
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

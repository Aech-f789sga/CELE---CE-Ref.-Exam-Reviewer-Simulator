import React from 'react';
import { SubjectArea } from '../types/exam';
import {
  GraduationCap,
  BookOpen,
  BarChart3,
  Clock,
  Palette,
  Type,
  ShieldCheck,
  LogIn,
  LogOut,
  User,
  ChevronDown,
  Trophy,
  Megaphone,
  KeyRound,
  Sparkles,
  PenTool,
  Layers,
  Menu,
  X,
  Compass,
  MessageSquare,
  Inbox,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { Cube3D } from './Cube3D';

interface NavbarProps {
  currentTab: 'setup' | 'leaderboard' | 'announcements' | 'performance' | 'admin' | 'scratchpad' | 'flashcards';
  setCurrentTab: (tab: 'setup' | 'leaderboard' | 'announcements' | 'performance' | 'admin' | 'scratchpad' | 'flashcards') => void;
  activeSubject: SubjectArea;
  onSubjectChange?: (subject: SubjectArea) => void;
  isExamRunning: boolean;
  onOpenThemeModal: () => void;
  onOpenTour?: () => void;
  onOpenContactAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  activeSubject,
  onSubjectChange,
  isExamRunning,
  onOpenThemeModal,
  onOpenTour,
  onOpenContactAdmin,
}) => {
  const { themeConfig, fontId, setThemeId } = useTheme();
  const { user, profile, isAdmin, openAuthModal, signOut, loading: authLoading } = useAuth();
  const isAurora = themeConfig.id === 'aurora_glass';
  const isTerrarium = themeConfig.id === 'terrarium_orb';
  const isMatilda = themeConfig.id === 'matilda_3d';
  const isParticle = themeConfig.id === 'particle_flow';
  const activeUser = profile || user;
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  const navItems: {
    id: 'setup' | 'leaderboard' | 'announcements' | 'performance' | 'scratchpad' | 'flashcards' | 'admin';
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    hint?: string;
  }[] = [
    { id: 'setup', label: 'Exam Portal', icon: BookOpen },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'announcements', label: 'Announcements', icon: Megaphone },
    { id: 'performance', label: 'Performance', icon: BarChart3 },
    { id: 'scratchpad', label: 'Scratchpads', icon: PenTool },
    { id: 'flashcards', label: 'Formula Cards', icon: Layers },
    ...(isAdmin ? [{ id: 'admin' as const, label: 'Admin', icon: ShieldCheck }] : []),
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        isAurora ? 'pt-3 px-3 sm:px-6 lg:px-8' : 'border-b backdrop-blur-md'
      }`}
      style={
        isAurora
          ? undefined
          : {
              backgroundColor: isTerrarium
                ? 'rgba(11, 24, 21, 0.82)'
                : isMatilda
                ? 'rgba(36, 26, 32, 0.85)'
                : isParticle
                ? 'rgba(10, 16, 38, 0.85)'
                : themeConfig.bgCard,
              borderColor: themeConfig.border,
            }
      }
    >
      <div
        className={`max-w-[1720px] w-full mx-auto transition-all ${
          isAurora
            ? 'rounded-full px-4 sm:px-6 border shadow-[0_20px_40px_rgba(0,0,0,0.2)]'
            : 'px-4 sm:px-6 lg:px-8'
        }`}
        style={
          isAurora
            ? {
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.18)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
              }
            : undefined
        }
      >
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Title */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => {
                if (!isExamRunning) setCurrentTab('setup');
              }}
              className="flex items-center space-x-3 text-left group cursor-pointer focus:outline-none"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-md group-hover:scale-105"
                style={{
                  backgroundColor: themeConfig.accent,
                  color: themeConfig.accentText,
                }}
              >
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-arnie text-[15px] font-bold tracking-tight text-white transition-colors whitespace-nowrap">
                  CE BOARD EXAM
                </span>
              </div>
            </button>
          </div>

          {/* Center Navigation Tabs (Only when NOT actively taking exam) */}
          <div data-tour="portal-nav" className="hidden min-[1360px]:flex items-center justify-center space-x-1 min-w-0 px-2 shrink-0">
            {!isExamRunning && (
              <>
                <button
                  data-tour="tab-setup"
                  onClick={() => setCurrentTab('setup')}
                  title="Exam Portal"
                  className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    currentTab === 'setup' ? 'shadow-md font-semibold' : 'hover:opacity-80'
                  }`}
                  style={{
                    backgroundColor: currentTab === 'setup' ? themeConfig.accent : 'transparent',
                    color: currentTab === 'setup' ? themeConfig.accentText : themeConfig.textSecondary,
                  }}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Exam Portal</span>
                </button>

                <button
                  data-tour="tab-leaderboard"
                  onClick={() => setCurrentTab('leaderboard')}
                  title="Leaderboard"
                  className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    currentTab === 'leaderboard' ? 'shadow-md font-semibold' : 'hover:opacity-80'
                  }`}
                  style={{
                    backgroundColor: currentTab === 'leaderboard' ? themeConfig.accent : 'transparent',
                    color: currentTab === 'leaderboard' ? themeConfig.accentText : themeConfig.textSecondary,
                  }}
                >
                  <Trophy className="w-4 h-4" />
                  <span>Leaderboard</span>
                </button>

                <button
                  data-tour="tab-announcements"
                  onClick={() => setCurrentTab('announcements')}
                  title="Announcements"
                  className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    currentTab === 'announcements' ? 'shadow-md font-semibold' : 'hover:opacity-80'
                  }`}
                  style={{
                    backgroundColor: currentTab === 'announcements' ? themeConfig.accent : 'transparent',
                    color: currentTab === 'announcements' ? themeConfig.accentText : themeConfig.textSecondary,
                  }}
                >
                  <Megaphone className="w-4 h-4" />
                  <span>Announcements</span>
                </button>

                <button
                  data-tour="tab-performance"
                  onClick={() => setCurrentTab('performance')}
                  title="Performance"
                  className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    currentTab === 'performance' ? 'shadow-md font-semibold' : 'hover:opacity-80'
                  }`}
                  style={{
                    backgroundColor: currentTab === 'performance' ? themeConfig.accent : 'transparent',
                    color: currentTab === 'performance' ? themeConfig.accentText : themeConfig.textSecondary,
                  }}
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Performance</span>
                </button>

                <button
                  data-tour="scratchpad-tab"
                  onClick={() => setCurrentTab('scratchpad')}
                  className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    currentTab === 'scratchpad' ? 'shadow-md font-semibold' : 'hover:opacity-80'
                  }`}
                  style={{
                    backgroundColor: currentTab === 'scratchpad' ? themeConfig.accent : 'transparent',
                    color: currentTab === 'scratchpad' ? themeConfig.accentText : themeConfig.textSecondary,
                  }}
                  title="View, edit, and export rough sheets, calculations, and standalone notebooks"
                >
                  <PenTool className="w-4 h-4" />
                  <span>Scratchpads</span>
                </button>

                <button
                  data-tour="flashcards-tab"
                  onClick={() => setCurrentTab('flashcards')}
                  className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    currentTab === 'flashcards' ? 'shadow-md font-semibold' : 'hover:opacity-80'
                  }`}
                  style={{
                    backgroundColor: currentTab === 'flashcards' ? themeConfig.accent : 'transparent',
                    color: currentTab === 'flashcards' ? themeConfig.accentText : themeConfig.textSecondary,
                  }}
                  title="Formula Deck & Term Quiz — 971 formula cards and 1,059 terms"
                >
                  <Layers className="w-4 h-4" />
                  <span>Cards</span>
                </button>

                {/* Admin Tab (Only visible to admin) */}
                {isAdmin && (
                  <button
                    onClick={() => setCurrentTab('admin')}
                    className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                      currentTab === 'admin'
                        ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                        : 'text-amber-400 hover:bg-amber-500/10 border border-amber-500/30'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-tech-mono font-bold">Admin</span>
                  </button>
                )}
              </>
            )}
          </div>

          {/* Right Side Navigation, Auth & Theme Button */}
          <div className="flex items-center space-x-2 shrink-0">
            {isExamRunning && (
              <div
                className="hidden sm:flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-semibold animate-pulse"
                style={{
                  backgroundColor: themeConfig.accentBadge,
                  borderColor: `${themeConfig.accent}60`,
                  color: themeConfig.accent,
                }}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>EXAM SESSION IN PROGRESS</span>
              </div>
            )}

            {/* Tablet Portrait & Mobile drawer trigger (three lines) */}
            <button
              type="button"
              onClick={() => setMobileNavOpen((v) => !v)}
              className="min-[1360px]:hidden p-2 rounded-lg border transition-colors cursor-pointer"
              style={{
                backgroundColor: themeConfig.bgCardSubtle,
                borderColor: themeConfig.border,
                color: themeConfig.textPrimary,
              }}
              aria-expanded={mobileNavOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileNavOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

            {/* Inbox for Admin, or Message Admin for Examinees */}
            {isAdmin ? (
              <button
                type="button"
                onClick={() => setCurrentTab('admin')}
                title="Admin Inbox — Reviewee Messages & Requests"
                className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold border transition-all hover:scale-105 shadow-sm cursor-pointer whitespace-nowrap shrink-0"
                style={{
                  backgroundColor: currentTab === 'admin' ? themeConfig.accent : themeConfig.bgCardSubtle,
                  borderColor: currentTab === 'admin' ? themeConfig.accent : themeConfig.border,
                  color: currentTab === 'admin' ? themeConfig.accentText : themeConfig.textPrimary,
                }}
              >
                <Inbox className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="hidden min-[1580px]:inline">Inbox</span>
              </button>
            ) : onOpenContactAdmin ? (
              <button
                data-tour="contact-admin-trigger"
                type="button"
                onClick={onOpenContactAdmin}
                title="Message the Administrator / Send Request"
                className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold border transition-all hover:scale-105 shadow-sm cursor-pointer whitespace-nowrap shrink-0"
                style={{
                  backgroundColor: themeConfig.bgCardSubtle,
                  borderColor: themeConfig.border,
                  color: themeConfig.textPrimary,
                }}
              >
                <MessageSquare className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="hidden min-[1580px]:inline">Message Admin</span>
              </button>
            ) : null}

            {/* Theme & Fonts Customizer Trigger */}
            <button
              data-tour="theme-trigger"
              onClick={onOpenThemeModal}
              title="Customize Theme & Typography"
              className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold border transition-all hover:scale-105 shadow-sm cursor-pointer"
              style={{
                backgroundColor: themeConfig.bgCardSubtle,
                borderColor: themeConfig.border,
                color: themeConfig.textPrimary,
              }}
            >
              <Palette className="w-3.5 h-3.5" style={{ color: themeConfig.accent }} />
              <span className="hidden sm:inline">Theme</span>
              <span
                className="w-2 h-2 rounded-full ml-0.5"
                style={{ backgroundColor: themeConfig.accent }}
              />
            </button>

            {/* Google Authentication Control */}
            {activeUser ? (
              <div data-tour="auth-trigger" className="flex items-center space-x-1.5 pl-1">
                <button
                  type="button"
                  onClick={() => openAuthModal()}
                  title="Manage Profile & Username"
                  className="flex items-center space-x-2 px-2.5 py-1 rounded-xl border text-xs transition-all hover:scale-102 cursor-pointer"
                  style={{
                    backgroundColor: themeConfig.bgCardSubtle,
                    borderColor: isAdmin ? '#f59e0b' : themeConfig.border,
                  }}
                >
                  {activeUser.photoURL ? (
                    <img
                      src={activeUser.photoURL}
                      alt={activeUser.displayName || 'User'}
                      className="w-5 h-5 rounded-full"
                    />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center font-bold text-[10px]">
                      {activeUser.email ? activeUser.email[0].toUpperCase() : 'U'}
                    </div>
                  )}
                  <div className="hidden xl:flex flex-col text-left">
                    <span className="text-[11px] font-medium text-white max-w-28 truncate">
                      {activeUser.displayName?.split(' ')[0] || activeUser.email?.split('@')[0]}
                    </span>
                    <span
                      className="text-[9px] font-mono leading-none"
                      style={{ color: isAdmin ? '#f59e0b' : '#94a3b8' }}
                    >
                      {isAdmin ? 'ADMIN' : 'USER'}
                    </span>
                  </div>
                  {isAdmin ? (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      ADMIN
                    </span>
                  ) : (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                      USER
                    </span>
                  )}
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                <button
                  type="button"
                  onClick={signOut}
                  title="Sign Out"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                data-tour="auth-trigger"
                type="button"
                onClick={() => openAuthModal()}
                disabled={authLoading}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 border border-amber-400 shadow-md transition-all hover:scale-105 cursor-pointer ml-1 whitespace-nowrap shrink-0"
                title="Sign in with Password or Google"
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign In / Register</span>
                <span className="sm:hidden">Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tablet Portrait & Mobile drawer navigation panel */}
      {mobileNavOpen && !isExamRunning && (
        <div
          className={`min-[1360px]:hidden px-3 sm:px-4 py-3 sm:py-4 mt-2 ${
            isAurora
              ? 'rounded-2xl border shadow-xl'
              : 'rounded-2xl border shadow-xl bg-slate-900/95'
          }`}
          style={{
            borderColor: isAurora ? 'rgba(255, 255, 255, 0.18)' : themeConfig.border,
            backgroundColor: isAurora ? 'rgba(255, 255, 255, 0.08)' : themeConfig.bgCard,
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setCurrentTab(item.id);
                    setMobileNavOpen(false);
                  }}
                  className={`flex items-center space-x-2 px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    active ? 'shadow-md font-bold' : 'hover:opacity-85'
                  }`}
                  style={{
                    backgroundColor: active ? themeConfig.accent : themeConfig.bgCardSubtle,
                    borderColor: active ? themeConfig.accent : themeConfig.border,
                    color: active ? themeConfig.accentText : themeConfig.textSecondary,
                  }}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}

            {isAdmin ? (
              <button
                type="button"
                onClick={() => {
                  setCurrentTab('admin');
                  setMobileNavOpen(false);
                }}
                className="col-span-2 sm:col-span-3 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all hover:scale-102 cursor-pointer bg-amber-500/15 border-amber-500/40 text-amber-300 hover:bg-amber-500/25 shadow-sm"
              >
                <Inbox className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Admin Inbox (User Messages &amp; Replies)</span>
              </button>
            ) : onOpenContactAdmin ? (
              <button
                type="button"
                onClick={() => {
                  onOpenContactAdmin();
                  setMobileNavOpen(false);
                }}
                className="col-span-2 sm:col-span-3 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all hover:scale-102 cursor-pointer bg-amber-500/15 border-amber-500/40 text-amber-300 hover:bg-amber-500/25 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Message Administrator / Send Request</span>
              </button>
            ) : null}
          </div>
        </div>
      )}
    </header>
  );
};

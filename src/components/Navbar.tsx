import React from 'react';
import { SubjectArea } from '../types/exam';
import {
  GraduationCap,
  BookOpen,
  BarChart3,
  Clock,
  Sparkles,
  Palette,
  Type,
  ShieldCheck,
  LogIn,
  LogOut,
  User,
  ChevronDown,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { Cube3D } from './Cube3D';

interface NavbarProps {
  currentTab: 'setup' | 'performance' | 'booklet' | 'admin';
  setCurrentTab: (tab: 'setup' | 'performance' | 'booklet' | 'admin') => void;
  activeSubject: SubjectArea;
  onSubjectChange?: (subject: SubjectArea) => void;
  isExamRunning: boolean;
  onOpenThemeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  activeSubject,
  onSubjectChange,
  isExamRunning,
  onOpenThemeModal,
}) => {
  const { themeConfig, fontId } = useTheme();
  const { user, profile, isAdmin, openAuthModal, signOut, loading: authLoading } = useAuth();
  const isAurora = themeConfig.id === 'aurora_glass';
  const activeUser = profile || user;

  return (
    <header
      className="border-b sticky top-0 z-40 transition-colors backdrop-blur-md"
      style={{
        backgroundColor: isAurora ? 'rgba(15, 23, 42, 0.75)' : themeConfig.bgCard,
        borderColor: themeConfig.border,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Title */}
          <div className="flex items-center space-x-3">
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
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-arnie text-lg font-bold tracking-tight text-white transition-colors">
                    CE BOARD EXAM
                  </span>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold border"
                    style={{
                      backgroundColor: themeConfig.accentBadge,
                      borderColor: `${themeConfig.accent}40`,
                      color: themeConfig.accent,
                    }}
                  >
                    2024 UPDATE
                  </span>
                </div>
                <p className="text-[11px] leading-tight" style={{ color: themeConfig.textMuted }}>
                  Nov 2024 (MSTC 66 • HPGE 46 • PSAD 75) + Apr 2024 (100)
                </p>
              </div>
            </button>
          </div>

          {/* Center Navigation Tabs (Only when NOT actively taking exam) */}
          <div className="hidden md:flex items-center space-x-1">
            {!isExamRunning && (
              <>
                <button
                  onClick={() => setCurrentTab('setup')}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
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
                  onClick={() => setCurrentTab('performance')}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
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
                  onClick={() => setCurrentTab('booklet')}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    currentTab === 'booklet' ? 'shadow-md font-semibold' : 'hover:opacity-80'
                  }`}
                  style={{
                    backgroundColor: currentTab === 'booklet' ? themeConfig.accent : 'transparent',
                    color: currentTab === 'booklet' ? themeConfig.accentText : themeConfig.textSecondary,
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="hidden md:inline">Pages 1-33 Booklet</span>
                  <span className="md:hidden">Booklet</span>
                </button>

                {/* Admin Tab (Only visible to admin) */}
                {isAdmin && (
                  <button
                    onClick={() => setCurrentTab('admin')}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
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
          <div className="flex items-center space-x-2">
            {isExamRunning && (
              <div
                className="flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-semibold animate-pulse"
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

            {/* Theme & Fonts Customizer Trigger */}
            <button
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
              <div className="flex items-center space-x-1.5 pl-1">
                <button
                  type="button"
                  onClick={openAuthModal}
                  title="Manage Account & Roles"
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
                type="button"
                onClick={openAuthModal}
                disabled={authLoading}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 shadow transition-all hover:scale-105 cursor-pointer ml-1"
                title="Sign in with Google Account"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span className="hidden sm:inline">Google Sign In</span>
                <span className="sm:hidden">Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* PRC Quick Weights Banner */}
      <div
        className="border-t px-4 py-1 text-center text-[11px] flex items-center justify-center space-x-4 overflow-x-auto transition-colors"
        style={{
          borderColor: `${themeConfig.border}80`,
          backgroundColor: `${themeConfig.bgPage}80`,
          color: themeConfig.textMuted,
        }}
      >
        <span className="font-semibold" style={{ color: themeConfig.accent }}>
          PRC Rule:
        </span>
        <span style={{ color: themeConfig.textSecondary }}>
          Overall Passing: <strong className="text-emerald-400">≥ 70.00% GWA</strong>
        </span>
        <span>•</span>
        <span style={{ color: themeConfig.textSecondary }}>
          Min. Per Subject: <strong style={{ color: themeConfig.accent }}>≥ 50.00%</strong> (Failure if &lt;50%)
        </span>
        <span>•</span>
        <span>
          MSTC: <span style={{ color: themeConfig.accent }}>35%</span>
        </span>
        <span>•</span>
        <span>
          HPGE: <span className="text-cyan-400">30%</span>
        </span>
        <span>•</span>
        <span>
          PSAD: <span className="text-emerald-400">35%</span>
        </span>
      </div>
    </header>
  );
};

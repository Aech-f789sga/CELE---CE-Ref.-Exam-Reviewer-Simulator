import React from 'react';
import { SubjectArea } from '../types/exam';
import { GraduationCap, BookOpen, BarChart3, Clock, Sparkles, Palette, Type } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Cube3D } from './Cube3D';

interface NavbarProps {
  currentTab: 'setup' | 'performance' | 'booklet';
  setCurrentTab: (tab: 'setup' | 'performance' | 'booklet') => void;
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
  const isAurora = themeConfig.id === 'aurora_glass';

  return (
    <header
      className="border-b sticky top-0 z-40 transition-colors backdrop-blur-md"
      style={{
        backgroundColor: `${themeConfig.bgPage}f0`,
        borderColor: themeConfig.border,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Title */}
          <div className="flex items-center space-x-3">
            {isAurora ? (
              <div className="w-10 h-10 flex items-center justify-center">
                <Cube3D size={28} />
              </div>
            ) : (
            <div
              className="w-10 h-10 rounded-xl p-0.5 shadow-md flex items-center justify-center transition-transform hover:scale-105"
              style={{
                backgroundColor: themeConfig.accent,
              }}
            >
              <div
                className="w-full h-full rounded-[10px] flex items-center justify-center"
                style={{ backgroundColor: themeConfig.bgCard }}
              >
                <GraduationCap className="w-5 h-5" style={{ color: themeConfig.accent }} />
              </div>
            </div>
            )}
            <div>
              <div className="flex items-center space-x-2">
                <span
                  className="font-arnie text-xl font-bold tracking-wide"
                  style={{ color: themeConfig.accent }}
                >
                  CE BOARD EXAM
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-tech-mono border"
                  style={{
                    backgroundColor: themeConfig.bgCardSubtle,
                    borderColor: themeConfig.border,
                    color: themeConfig.textSecondary,
                  }}
                >
                  PRC PHILIPPINES
                </span>
              </div>
              <p className="text-[11px] hidden sm:block" style={{ color: themeConfig.textMuted }}>
                Licensure Simulator • MSTC (35%) • HPGE (30%) • PSAD (35%)
              </p>
            </div>
          </div>

          {/* Right Side Navigation & Theme Button */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {!isExamRunning && (
              <>
                <button
                  onClick={() => setCurrentTab('setup')}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
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
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
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
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
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
              </>
            )}

            {/* Exam status indicator if exam is running */}
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
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all hover:scale-105 shadow-sm"
              style={{
                backgroundColor: themeConfig.bgCardSubtle,
                borderColor: themeConfig.border,
                color: themeConfig.textPrimary,
              }}
            >
              <Palette className="w-4 h-4" style={{ color: themeConfig.accent }} />
              <span className="hidden sm:inline">Theme & Fonts</span>
              <span
                className="w-2 h-2 rounded-full ml-1"
                style={{ backgroundColor: themeConfig.accent }}
              />
            </button>
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
        <span className="font-semibold" style={{ color: themeConfig.accent }}>PRC Rule:</span>
        <span style={{ color: themeConfig.textSecondary }}>Overall Passing: <strong className="text-emerald-400">≥ 70.00% GWA</strong></span>
        <span>•</span>
        <span style={{ color: themeConfig.textSecondary }}>Min. Per Subject: <strong style={{ color: themeConfig.accent }}>≥ 50.00%</strong> (Failure if &lt;50%)</span>
        <span>•</span>
        <span>MSTC: <span style={{ color: themeConfig.accent }}>35%</span></span>
        <span>•</span>
        <span>HPGE: <span className="text-cyan-400">30%</span></span>
        <span>•</span>
        <span>PSAD: <span className="text-emerald-400">35%</span></span>
      </div>
    </header>
  );
};

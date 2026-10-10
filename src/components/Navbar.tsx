import React from 'react';
import { SubjectArea } from '../types/exam';
import { GraduationCap, BookOpen, BarChart3, Clock, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentTab: 'setup' | 'performance' | 'booklet';
  setCurrentTab: (tab: 'setup' | 'performance' | 'booklet') => void;
  activeSubject: SubjectArea;
  onSubjectChange?: (subject: SubjectArea) => void;
  isExamRunning: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  activeSubject,
  onSubjectChange,
  isExamRunning,
}) => {
  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 p-0.5 shadow-lg shadow-amber-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-arnie text-xl font-bold tracking-wide text-amber-400">
                  CE BOARD EXAM
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-tech-mono border border-slate-700">
                  PRC PHILIPPINES
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Licensure Simulator • MSTC (35%) • HPGE (30%) • PSAD (35%)
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          {!isExamRunning && (
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                onClick={() => setCurrentTab('setup')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentTab === 'setup'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Exam Portal</span>
              </button>

              <button
                onClick={() => setCurrentTab('performance')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentTab === 'performance'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Performance & Cycles</span>
              </button>

              <button
                onClick={() => setCurrentTab('booklet')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentTab === 'booklet'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span className="hidden md:inline">Pages 1-33 Booklet</span>
                <span className="md:hidden">Booklet</span>
              </button>
            </div>
          )}

          {/* Exam status indicator if exam is running */}
          {isExamRunning && (
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold animate-pulse">
              <Clock className="w-3.5 h-3.5" />
              <span>EXAM SESSION IN PROGRESS</span>
            </div>
          )}
        </div>
      </div>

      {/* PRC Quick Weights Banner */}
      <div className="bg-slate-950/60 border-t border-slate-800/80 px-4 py-1 text-center text-[11px] text-slate-400 flex items-center justify-center space-x-4 overflow-x-auto">
        <span className="text-amber-400 font-semibold">PRC Rule:</span>
        <span className="text-slate-300">Overall Passing: <strong className="text-emerald-400">≥ 70.00% GWA</strong></span>
        <span>•</span>
        <span className="text-slate-300">Min. Per Subject: <strong className="text-amber-300">≥ 50.00%</strong> (Failure if &lt;50%)</span>
        <span>•</span>
        <span className="text-slate-400">MSTC: <span className="text-amber-300">35%</span></span>
        <span>•</span>
        <span className="text-slate-400">HPGE: <span className="text-cyan-300">30%</span></span>
        <span>•</span>
        <span className="text-slate-400">PSAD: <span className="text-emerald-300">35%</span></span>
      </div>
    </header>
  );
};

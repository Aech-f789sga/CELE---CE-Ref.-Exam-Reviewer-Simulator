import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  X,
  BookOpen,
  PenTool,
  Layers,
  Palette,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  Lock,
} from 'lucide-react';
import { SubjectArea } from '../types/exam';

interface WalkthroughStep {
  id: string;
  targetSelector: string;
  tab?: 'setup' | 'leaderboard' | 'announcements' | 'performance' | 'admin' | 'scratchpad' | 'flashcards';
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  preferredPlacement?: 'top' | 'bottom' | 'left' | 'right';
  actionLabel?: string;
  onAction?: () => void;
  referenceBadge?: string;
  securityBadge?: string;
}

interface InteractiveTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (
    tab: 'setup' | 'leaderboard' | 'announcements' | 'performance' | 'admin' | 'scratchpad' | 'flashcards'
  ) => void;
  onSelectSubject?: (subject: SubjectArea) => void;
  onOpenThemeModal?: () => void;
}

export const InteractiveTourModal: React.FC<InteractiveTourModalProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
  onSelectSubject,
  onOpenThemeModal,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [cardPos, setCardPos] = useState<{ x: number; y: number; placement: 'top' | 'bottom' | 'left' | 'right' }>({
    x: 0,
    y: 0,
    placement: 'bottom',
  });
  const cardRef = useRef<HTMLDivElement>(null);

  const steps: WalkthroughStep[] = [
    {
      id: 'portal-nav',
      targetSelector: '[data-tour="portal-nav"]',
      tab: 'setup',
      badge: 'Step 01 · Navigation Tabs',
      title: 'Portal Navigation Tabs',
      subtitle: 'Seamless Switching Across the Entire Licensure Suite',
      description:
        'Easily switch between the Exam Portal, Reviewee Leaderboard, Announcements, Performance Analytics, Scratchpad Notebooks, and Active Recall Flashcards without losing your progress.',
      accentColor: '#f59e0b',
      preferredPlacement: 'bottom',
    },
    {
      id: 'subject-mstc',
      targetSelector: '[data-tour="subject-mstc"]',
      tab: 'setup',
      badge: 'Step 02 · MSTC Subject',
      title: 'MSTC (35% Weight) — CE Reference Vol 4–6',
      subtitle: 'Mathematics, Surveying & Transportation Engineering',
      description:
        'Differential & Integral Calculus, Higher Engineering Mathematics, Engineering Economy (Annuities, Depreciation), Advanced Surveying, Highway Curves, Superelevation, and Wave Mechanics. Fully referenced from CE Reference Volume 4-6 review books.',
      accentColor: '#f59e0b',
      preferredPlacement: 'bottom',
      referenceBadge: 'Curriculum Core: CE Reference Volume 4-6 Books (Gillesania / Besavilla)',
      actionLabel: 'Select MSTC Subject',
      onAction: () => {
        if (onSelectSubject) onSelectSubject('MSTC');
      },
    },
    {
      id: 'subject-hpge',
      targetSelector: '[data-tour="subject-hpge"]',
      tab: 'setup',
      badge: 'Step 03 · HPGE Subject',
      title: 'HPGE (30% Weight) — CE Reference Vol 4–6',
      subtitle: 'Hydraulics & Geotechnical Engineering',
      description:
        'Hydrostatics, Buoyancy & Stability, Pipe Flow (Darcy-Weisbach, Hazen-Williams), Open Channel Hydraulics, Soil Classification (USCS/AASHTO), Effective Stress, Consolidation, Shear Strength, and Bearing Capacity. Aligned with CE Reference Volume 4-6 standards.',
      accentColor: '#38bdf8',
      preferredPlacement: 'bottom',
      referenceBadge: 'Curriculum Core: CE Reference Volume 4-6 Books',
      actionLabel: 'Select HPGE Subject',
      onAction: () => {
        if (onSelectSubject) onSelectSubject('HPGE');
      },
    },
    {
      id: 'subject-psad',
      targetSelector: '[data-tour="subject-psad"]',
      tab: 'setup',
      badge: 'Step 04 · PSAD Subject',
      title: 'PSAD (35% Weight) — CE Reference Vol 4–6',
      subtitle: 'Principles of Structural Analysis & Design',
      description:
        'Statics, Strength of Materials, Indeterminate Analysis (Moment Distribution, Three-Moment Equation), NSCP 2015 Ultimate Strength Design (USD) for Reinforced Concrete, and AISC 360 Structural Steel. Referenced from CE Reference Volume 4-6 books.',
      accentColor: '#10b981',
      preferredPlacement: 'bottom',
      referenceBadge: 'Curriculum Core: CE Reference Volume 4-6 Books (NSCP 2015 provisions)',
      actionLabel: 'Select PSAD Subject',
      onAction: () => {
        if (onSelectSubject) onSelectSubject('PSAD');
      },
    },
    {
      id: 'exam-year-month',
      targetSelector: '[data-tour="exam-year-month"]',
      tab: 'setup',
      badge: 'Step 05 · Question Bank',
      title: 'Past Board Exam Question Sets',
      subtitle: 'Real PRC Board Sets (2011 – 2025)',
      description:
        'Filter by year and examination month (April & November). Each problem contains step-by-step mathematical solutions, formulas in KaTeX, and dynamic SVG engineering figures.',
      accentColor: '#eab308',
      preferredPlacement: 'top',
    },
    {
      id: 'timer-mode',
      targetSelector: '[data-tour="timer-mode"]',
      tab: 'setup',
      badge: 'Step 06 · Timing & Mode',
      title: 'Official Timers & Pacing Modes',
      subtitle: 'Standard PRC Time Constraints or Untimed Study',
      description:
        'Choose standard 5-hour, 4-hour, or 6-hour official exam countdowns, practice with an elapsed stopwatch, or study untimed with instant step-by-step solution feedback.',
      accentColor: '#ec4899',
      preferredPlacement: 'left',
    },
    {
      id: 'scratchpad-tab',
      targetSelector: '[data-tour="scratchpad-tab"]',
      tab: 'setup',
      badge: 'Step 07 · In-Exam Scratchpad',
      title: 'Draggable & Minimizable Scratchpad Studio',
      subtitle: 'Solve Calculations Side-by-Side with Exam Problems',
      description:
        'Open the scratchpad during any exam, freely drag it across your screen so it never blocks problem figures, minimize it to a floating bar, use engineering grid rules, and export multi-page notebooks to high-res PDF or PNG.',
      accentColor: '#10b981',
      preferredPlacement: 'bottom',
      actionLabel: 'Open Scratchpad Hub',
      onAction: () => {
        onNavigateTab('scratchpad');
      },
    },
    {
      id: 'flashcards-tab',
      targetSelector: '[data-tour="flashcards-tab"]',
      tab: 'setup',
      badge: 'Step 08 · Flashcards & Quizzes',
      title: 'Flashcards & 4-Choice Recall Quizzes',
      subtitle: 'Engineereya’s Vlog Terms & Core Code Provisions',
      description:
        'Master essential structural provisions, soil terminology, and hydraulic formulas with interactive 3D card flips and rapid 4-choice recall quizzes.',
      accentColor: '#a855f7',
      preferredPlacement: 'bottom',
      actionLabel: 'Go to Flashcards',
      onAction: () => {
        onNavigateTab('flashcards');
      },
    },
    {
      id: 'theme-trigger',
      targetSelector: '[data-tour="theme-trigger"]',
      tab: 'setup',
      badge: 'Step 09 · Themes & 3D Environments',
      title: 'Themes, 3D WebGL Scenes & Audio',
      subtitle: 'Blueprint, Cyberdeck 2077, 3D Terrarium & Particle Remote',
      description:
        'Personalize your study atmosphere with 10 visual themes, interactive 3D WebGL backdrops, webcam gesture particle controls, and the Cyberdeck 2077 atmospheric soundtrack.',
      accentColor: '#06b6d4',
      preferredPlacement: 'bottom',
      actionLabel: 'Open Theme Palette',
      onAction: () => {
        if (onOpenThemeModal) onOpenThemeModal();
      },
    },
    {
      id: 'privacy-shield',
      targetSelector: '[data-tour="auth-trigger"]',
      tab: 'setup',
      badge: 'Step 10 · Security & Privacy',
      title: '100% Google Cloud Firebase Security',
      subtitle: 'Your Emails & Passwords Are Strictly Isolated',
      description:
        'Privacy Reassurance: Reviewee passwords and email addresses are NEVER accessible to administrators or instructors. All authentication is executed directly and securely by Google Cloud Firebase. Only your chosen public display username and exam scores are shown on the leaderboard.',
      accentColor: '#22c55e',
      preferredPlacement: 'left',
      securityBadge: 'Google Identity Shield: Admins cannot view passwords or private emails',
    },
  ];

  const currentStepData = steps[currentStep] || steps[0];

  // Measure and position the floating card relative to the target element
  const updateTargetPosition = useCallback(() => {
    if (!isOpen) return;

    const selector = currentStepData.targetSelector;
    let el = document.querySelector(selector) as HTMLElement | null;

    // Fallback: If element not found directly, try finding by text or generic selector
    if (!el && currentStepData.id === 'privacy-shield') {
      el = document.querySelector('[data-tour="auth-trigger"]') as HTMLElement | null;
    }

    if (!el) {
      // If still not found, center on screen
      setTargetRect(null);
      setCardPos({
        x: Math.max(16, (window.innerWidth - 380) / 2),
        y: Math.max(16, (window.innerHeight - 340) / 2),
        placement: 'bottom',
      });
      return;
    }

    const rect = el.getBoundingClientRect();
    setTargetRect(rect);

    // Compute ideal placement for the floating card
    const cardWidth = Math.min(380, window.innerWidth - 32);
    const cardHeight = 280; // approximate
    const margin = 20;

    let placement = currentStepData.preferredPlacement || 'bottom';
    let x = rect.left + rect.width / 2 - cardWidth / 2;
    let y = rect.bottom + margin;

    if (placement === 'bottom') {
      if (rect.bottom + cardHeight + margin > window.innerHeight && rect.top - cardHeight - margin > 0) {
        placement = 'top';
        y = rect.top - cardHeight - margin;
      } else {
        y = rect.bottom + margin;
      }
    } else if (placement === 'top') {
      if (rect.top - cardHeight - margin < 0 && rect.bottom + cardHeight + margin < window.innerHeight) {
        placement = 'bottom';
        y = rect.bottom + margin;
      } else {
        y = rect.top - cardHeight - margin;
      }
    } else if (placement === 'left') {
      if (rect.left - cardWidth - margin < 0) {
        placement = 'bottom';
        y = rect.bottom + margin;
      } else {
        x = rect.left - cardWidth - margin;
        y = rect.top + rect.height / 2 - cardHeight / 2;
      }
    }

    // Clamp inside viewport
    x = Math.max(16, Math.min(window.innerWidth - cardWidth - 16, x));
    y = Math.max(70, Math.min(window.innerHeight - cardHeight - 16, y));

    setCardPos({ x, y, placement });
  }, [isOpen, currentStepData]);

  // When step changes, ensure the required tab is active and scroll smoothly to target
  useEffect(() => {
    if (!isOpen) return;

    if (currentStepData.tab) {
      onNavigateTab(currentStepData.tab);
    }

    const timer = setTimeout(() => {
      const el = document.querySelector(currentStepData.targetSelector) as HTMLElement | null;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }
      updateTargetPosition();
    }, 120);

    return () => clearTimeout(timer);
  }, [isOpen, currentStep, currentStepData, onNavigateTab, updateTargetPosition]);

  // Update position continuously on scroll & resize
  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => {
      updateTargetPosition();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Run animation frame for smooth tracking during scroll
    let rafId: number;
    const loop = () => {
      updateTargetPosition();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [isOpen, updateTargetPosition]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        if (currentStep < steps.length - 1) setCurrentStep((p) => p + 1);
        else onClose();
      } else if (e.key === 'ArrowLeft') {
        if (currentStep > 0) setCurrentStep((p) => p - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentStep, steps.length, onClose]);

  if (!isOpen) return null;

  // Compute Bezier pointing line coordinates
  let targetPoint = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  if (targetRect) {
    targetPoint = {
      x: targetRect.left + targetRect.width / 2,
      y: targetRect.top + targetRect.height / 2,
    };
  }

  // Floating card anchor point (closest to target)
  const cardWidth = cardRef.current ? cardRef.current.offsetWidth : 360;
  const cardHeight = cardRef.current ? cardRef.current.offsetHeight : 280;

  const cardCenterX = cardPos.x + cardWidth / 2;
  const cardCenterY = cardPos.y + cardHeight / 2;

  let cardAnchor = { x: cardCenterX, y: cardPos.y };
  if (targetPoint.y > cardCenterY) {
    cardAnchor = { x: cardCenterX, y: cardPos.y + cardHeight }; // bottom edge
  } else if (targetPoint.y < cardPos.y) {
    cardAnchor = { x: cardCenterX, y: cardPos.y }; // top edge
  } else if (targetPoint.x < cardPos.x) {
    cardAnchor = { x: cardPos.x, y: cardCenterY }; // left edge
  } else {
    cardAnchor = { x: cardPos.x + cardWidth, y: cardCenterY }; // right edge
  }

  // Bezier curve control points
  const dx = targetPoint.x - cardAnchor.x;
  const dy = targetPoint.y - cardAnchor.y;
  const cp1 = { x: cardAnchor.x + dx * 0.25, y: cardAnchor.y + dy * 0.75 };
  const cp2 = { x: cardAnchor.x + dx * 0.75, y: cardAnchor.y + dy * 0.25 };

  const pathData = `M ${cardAnchor.x} ${cardAnchor.y} C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${targetPoint.x} ${targetPoint.y}`;

  const progressPercent = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="fixed inset-0 z-[9990] pointer-events-none select-none">
      {/* 
        1. AMBIENT BACKDROP: 
        Subtle dark veil to dim other UI while keeping the web visible beneath
      */}
      <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-[2px] transition-opacity duration-300 pointer-events-auto" />

      {/* 
        2. DYNAMIC SPOTLIGHT HALO AROUND TARGET FUNCTION:
        A luminous glowing boundary surrounding the real UI element
      */}
      {targetRect && (
        <div
          className="fixed pointer-events-none z-[9992] rounded-2xl transition-all duration-300 ease-out"
          style={{
            top: targetRect.top - 8,
            left: targetRect.left - 8,
            width: targetRect.width + 16,
            height: targetRect.height + 16,
            border: `2px solid ${currentStepData.accentColor}`,
            boxShadow: `0 0 25px ${currentStepData.accentColor}70, inset 0 0 15px ${currentStepData.accentColor}30`,
          }}
        >
          {/* Pulsing corner anchors */}
          <span
            className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full animate-ping"
            style={{ backgroundColor: currentStepData.accentColor }}
          />
          <span
            className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full animate-ping"
            style={{ backgroundColor: currentStepData.accentColor }}
          />
        </div>
      )}

      {/* 
        3. ANIMATED CONNECTED POINTING LINE (SVG)
        Connects the floating info card directly to the target web function
      */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none z-[9993] overflow-visible">
        <defs>
          <linearGradient id="walkthroughGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={currentStepData.accentColor} stopOpacity="0.95" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.95" />
          </linearGradient>
          <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer ambient glow path */}
        <path
          d={pathData}
          fill="none"
          stroke={currentStepData.accentColor}
          strokeWidth="6"
          strokeOpacity="0.3"
          filter="url(#laserGlow)"
        />

        {/* Animated laser dashed path */}
        <path
          d={pathData}
          fill="none"
          stroke="url(#walkthroughGradient)"
          strokeWidth="2.5"
          strokeDasharray="8 6"
          strokeLinecap="round"
          filter="url(#laserGlow)"
          className="animate-tour-dash"
        />

        {/* Card anchor node */}
        <circle cx={cardAnchor.x} cy={cardAnchor.y} r="4.5" fill={currentStepData.accentColor} />

        {/* Target pointing ring & focal beacon */}
        <circle
          cx={targetPoint.x}
          cy={targetPoint.y}
          r="16"
          fill="none"
          stroke={currentStepData.accentColor}
          strokeWidth="2"
          className="animate-ping opacity-80"
        />
        <circle
          cx={targetPoint.x}
          cy={targetPoint.y}
          r="6"
          fill={currentStepData.accentColor}
          className="shadow-lg"
        />
      </svg>

      {/* 
        4. FLOATING CAPABILITIES & INFO CARD
        Walks the user through the function with step controls and action triggers
      */}
      <div
        ref={cardRef}
        className="fixed z-[9995] pointer-events-auto transition-all duration-300 ease-out"
        style={{
          top: cardPos.y,
          left: cardPos.x,
          width: 'min(380px, calc(100vw - 32px))',
        }}
      >
        <div
          className="bg-slate-900/95 border border-slate-700/80 rounded-2xl p-5 shadow-2xl backdrop-blur-xl text-slate-100 space-y-4"
          style={{
            boxShadow: `0 20px 50px -10px rgba(0, 0, 0, 0.8), 0 0 25px -5px ${currentStepData.accentColor}40`,
          }}
        >
          {/* Progress Strip */}
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-300 ease-out"
              style={{
                width: `${progressPercent}%`,
                backgroundColor: currentStepData.accentColor,
                boxShadow: `0 0 8px ${currentStepData.accentColor}`,
              }}
            />
          </div>

          {/* Header Bar */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <span
                className="text-[10px] font-bold uppercase tracking-wider block font-tech-mono"
                style={{ color: currentStepData.accentColor }}
              >
                {currentStepData.badge}
              </span>
              <h3 className="font-arnie text-base sm:text-lg font-bold text-white leading-tight mt-0.5">
                {currentStepData.title}
              </h3>
              <p className="text-[11px] font-semibold text-slate-300 mt-0.5">
                {currentStepData.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
              title="Exit Walkthrough (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-300 leading-relaxed">
            {currentStepData.description}
          </p>

          {/* Reference Book Note (CE Reference Volume 4-6) */}
          {currentStepData.referenceBadge && (
            <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-[11px] text-cyan-200">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="leading-tight">{currentStepData.referenceBadge}</span>
            </div>
          )}

          {/* Privacy Reassurance Note */}
          {currentStepData.securityBadge && (
            <div className="flex items-start space-x-2 p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-[11px] text-emerald-200">
              <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-tight">{currentStepData.securityBadge}</span>
            </div>
          )}

          {/* Interactive Feature Action Trigger */}
          {currentStepData.actionLabel && currentStepData.onAction && (
            <div>
              <button
                type="button"
                onClick={() => {
                  if (currentStepData.onAction) currentStepData.onAction();
                }}
                className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-white text-xs font-bold transition-all hover:scale-[1.01] cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" style={{ color: currentStepData.accentColor }} />
                <span>{currentStepData.actionLabel}</span>
              </button>
            </div>
          )}

          {/* Navigation Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
            <div className="flex items-center space-x-1">
              <button
                type="button"
                onClick={() => {
                  if (currentStep > 0) setCurrentStep((p) => p - 1);
                }}
                disabled={currentStep === 0}
                className={`p-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                  currentStep === 0
                    ? 'opacity-40 pointer-events-none border-slate-800 text-slate-600'
                    : 'border-slate-700 bg-slate-800 text-slate-300 hover:text-white'
                }`}
                title="Previous Function"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>

              <span className="text-[10px] text-slate-400 font-mono px-1.5">
                {currentStep + 1} / {steps.length}
              </span>

              <button
                type="button"
                onClick={() => {
                  if (currentStep < steps.length - 1) setCurrentStep((p) => p + 1);
                  else onClose();
                }}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 transition-all hover:scale-105 cursor-pointer shadow-md"
                style={{ backgroundColor: currentStepData.accentColor }}
              >
                <span>{currentStep === steps.length - 1 ? 'Finish' : 'Next'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-[11px] text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

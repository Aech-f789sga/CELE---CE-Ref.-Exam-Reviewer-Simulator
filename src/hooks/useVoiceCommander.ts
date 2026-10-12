import { useState, useEffect, useRef, useCallback } from 'react';
import { SubjectArea, ExamMonth } from '../types/exam';
import { AppThemeId } from '../types/theme';

export interface VoiceCommandHandlers {
  onNavigateTab: (tab: 'setup' | 'performance' | 'booklet' | 'admin') => void;
  onSubjectChange: (sub: SubjectArea) => void;
  onYearChange?: (year: number) => void;
  onMonthChange?: (month: ExamMonth) => void;
  onStartExam: () => void;
  onSearchQuestions?: (query: string) => void;
  onThemeChange?: (themeId: AppThemeId) => void;
  isAdmin?: boolean;
}

export interface VoiceCommanderState {
  isSupported: boolean;
  isListening: boolean;
  transcript: string;
  feedbackMessage: string | null;
  lastCommand: string | null;
  speechAudioEnabled: boolean;
  toggleSpeechAudio: () => void;
  startListening: () => void;
  stopListening: () => void;
  executeCommandText: (text: string) => void;
}

// Check for Web Speech API
const SpeechRecognition =
  typeof window !== 'undefined'
    ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    : null;

export function useVoiceCommander(handlers: VoiceCommandHandlers): VoiceCommanderState {
  const [isSupported] = useState<boolean>(!!SpeechRecognition);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [lastCommand, setLastCommand] = useState<string | null>(null);
  const [speechAudioEnabled, setSpeechAudioEnabled] = useState<boolean>(true);

  const recognitionRef = useRef<any>(null);
  const handlersRef = useRef<VoiceCommandHandlers>(handlers);
  handlersRef.current = handlers;

  const speakFeedback = useCallback((text: string) => {
    if (!speechAudioEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.05;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
    }
  }, [speechAudioEnabled]);

  const setFeedback = useCallback((msg: string) => {
    setFeedbackMessage(msg);
    speakFeedback(msg);
    const timer = setTimeout(() => {
      setFeedbackMessage(null);
    }, 4500);
    return () => clearTimeout(timer);
  }, [speakFeedback]);

  const processCommand = useCallback((raw: string) => {
    const text = raw.trim().toLowerCase();
    if (!text) return;
    setLastCommand(raw);

    const {
      onNavigateTab,
      onSubjectChange,
      onYearChange,
      onMonthChange,
      onStartExam,
      onSearchQuestions,
      onThemeChange,
      isAdmin,
    } = handlersRef.current;

    // 1. Search / Find command: "find [topic]" or "search [topic]"
    const searchMatch = text.match(/(?:find|search for|search|look for|locate)\s+(.+)/i);
    if (searchMatch && searchMatch[1]) {
      const query = searchMatch[1].trim();
      onNavigateTab('booklet');
      if (onSearchQuestions) {
        onSearchQuestions(query);
      }
      setFeedback(`Searching for "${query}" in exam booklet`);
      return;
    }

    // 2. Tab Navigation
    if (text.includes('admin') || text.includes('user management') || text.includes('control panel')) {
      if (isAdmin) {
        onNavigateTab('admin');
        setFeedback('Opening Admin Control Panel');
      } else {
        setFeedback('Admin panel is restricted to the system administrator.');
      }
      return;
    }

    if (text.includes('setup') || text.includes('home') || text.includes('configure') || text.includes('dashboard')) {
      onNavigateTab('setup');
      setFeedback('Opening Exam Setup');
      return;
    }

    if (text.includes('booklet') || text.includes('question bank') || text.includes('view questions') || text.includes('past paper')) {
      onNavigateTab('booklet');
      setFeedback('Opening Examination Booklet');
      return;
    }

    if (text.includes('performance') || text.includes('analytics') || text.includes('score') || text.includes('rating') || text.includes('review')) {
      onNavigateTab('performance');
      setFeedback('Opening Performance Review & PRC Analytics');
      return;
    }

    // 3. Subject Switch
    if (text.includes('mstc') || text.includes('math') || text.includes('surveying') || text.includes('transportation')) {
      onSubjectChange('MSTC');
      setFeedback('Selected Subject: MSTC (Mathematics, Surveying & Transportation)');
      return;
    }

    if (text.includes('hpge') || text.includes('hydraulics') || text.includes('geotech') || text.includes('soil')) {
      onSubjectChange('HPGE');
      setFeedback('Selected Subject: HPGE (Hydraulics & Geotechnical Engineering)');
      return;
    }

    if (text.includes('psad') || text.includes('structural') || text.includes('design') || text.includes('steel') || text.includes('concrete')) {
      onSubjectChange('PSAD');
      setFeedback('Selected Subject: PSAD (Principles of Structural Analysis & Design)');
      return;
    }

    // 4. Exam period selection
    if (text.includes('november')) {
      if (onMonthChange) onMonthChange('November');
      if (onYearChange) onYearChange(2024);
      setFeedback('Set exam period to November 2024');
      return;
    }

    if (text.includes('april')) {
      if (onMonthChange) onMonthChange('April');
      if (onYearChange) onYearChange(2024);
      setFeedback('Set exam period to April 2024');
      return;
    }

    // 5. Start Exam
    if (text.includes('start') || text.includes('begin') || text.includes('take exam') || text.includes('simulate')) {
      onStartExam();
      setFeedback('Starting Civil Engineering Board Exam Simulator');
      return;
    }

    // 6. Theme Switching
    if (onThemeChange) {
      if (text.includes('aurora') || text.includes('3d') || text.includes('glass')) {
        onThemeChange('aurora_glass');
        setFeedback('Theme changed to Structural Aurora 3D');
        return;
      }
      if (text.includes('blueprint') || text.includes('navy') || text.includes('blue')) {
        onThemeChange('blueprint_navy');
        setFeedback('Theme changed to Blueprint Navy');
        return;
      }
      if (text.includes('dark') || text.includes('engineering dark')) {
        onThemeChange('engineering_dark');
        setFeedback('Theme changed to Engineering Dark');
        return;
      }
      if (text.includes('slate')) {
        onThemeChange('pure_slate');
        setFeedback('Theme changed to Pure Slate');
        return;
      }
    }

    // Unrecognized command
    setFeedback(`Heard "${raw}". Say "open booklet", "select HPGE", or "find Mohr"`);
  }, [setFeedback]);

  // Set up speech recognition
  useEffect(() => {
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      setTranscript('');
    };

    recognition.onresult = (event: any) => {
      let current = '';
      for (let i = 0; i < event.results.length; i++) {
        current += event.results[i][0].transcript;
      }
      setTranscript(current);

      // If final result
      if (event.results[0].isFinal) {
        processCommand(current);
        setIsListening(false);
      }
    };

    recognition.onerror = (event: any) => {
      console.warn('Speech recognition status/error:', event.error);
      setIsListening(false);
      if (event.error === 'not-allowed') {
        setFeedback('Microphone permission denied. Click to type command.');
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      try {
        recognition.abort();
      } catch (e) {
        // ignore
      }
    };
  }, [processCommand, setFeedback]);

  const startListening = () => {
    if (!recognitionRef.current) return;
    try {
      recognitionRef.current.start();
    } catch (e) {
      // If already started, restart
      recognitionRef.current.stop();
      setTimeout(() => {
        try {
          recognitionRef.current.start();
        } catch (err) {
          console.warn('Recognition start error:', err);
        }
      }, 150);
    }
  };

  const stopListening = () => {
    if (!recognitionRef.current) return;
    try {
      recognitionRef.current.stop();
    } catch (e) {
      // ignore
    }
    setIsListening(false);
  };

  const toggleSpeechAudio = () => {
    setSpeechAudioEnabled((prev) => !prev);
  };

  return {
    isSupported,
    isListening,
    transcript,
    feedbackMessage,
    lastCommand,
    speechAudioEnabled,
    toggleSpeechAudio,
    startListening,
    stopListening,
    executeCommandText: processCommand,
  };
}

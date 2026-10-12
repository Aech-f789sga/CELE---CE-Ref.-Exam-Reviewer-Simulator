import React, { useState } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Sparkles, Search, Compass, X, Play, Command, ChevronUp, ChevronDown } from 'lucide-react';
import { VoiceCommanderState } from '../hooks/useVoiceCommander';
import { useTheme } from '../context/ThemeContext';

interface VoiceCommanderProps {
  commander: VoiceCommanderState;
  isAdmin?: boolean;
}

export const VoiceCommander: React.FC<VoiceCommanderProps> = ({ commander, isAdmin }) => {
  const { themeConfig } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [manualText, setManualText] = useState<string>('');

  const {
    isSupported,
    isListening,
    transcript,
    feedbackMessage,
    speechAudioEnabled,
    toggleSpeechAudio,
    startListening,
    stopListening,
    executeCommandText,
  } = commander;

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualText.trim()) return;
    executeCommandText(manualText);
    setManualText('');
  };

  const sampleCommands = [
    { label: '📖 Open Booklet', cmd: 'open booklet' },
    { label: '🌊 Select HPGE', cmd: 'select HPGE' },
    { label: '📐 Select MSTC', cmd: 'select MSTC' },
    { label: '🏗️ Select PSAD', cmd: 'select PSAD' },
    { label: '🔍 Find Mohr\'s Circle', cmd: 'find Mohr' },
    { label: '💧 Find Manning', cmd: 'find Manning' },
    { label: '📊 Open Performance', cmd: 'open performance' },
    { label: '✨ Aurora 3D Theme', cmd: 'aurora theme' },
    ...(isAdmin ? [{ label: '🛡️ Admin Panel', cmd: 'open admin' }] : []),
  ];

  return (
    <aside
      aria-label="AI Voice Commander Assistant"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto"
    >
      {/* Toast Feedback Banner */}
      {feedbackMessage && (
        <div
          role="status"
          aria-live="polite"
          className="mb-3 max-w-sm px-4 py-2.5 rounded-2xl shadow-2xl border text-xs font-medium flex items-center space-x-2.5 animate-bounce-subtle backdrop-blur-md"
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.92)',
            borderColor: themeConfig.accent,
            color: '#ffffff',
          }}
        >
          <Sparkles className="w-4 h-4 shrink-0 text-cyan-400 animate-pulse" />
          <span className="font-tech-mono tracking-wide">{feedbackMessage}</span>
        </div>
      )}

      {/* Expanded Voice Console */}
      {isOpen && (
        <div
          className="mb-3 w-84 sm:w-96 rounded-3xl border shadow-2xl p-4 backdrop-blur-xl transition-all duration-300 overflow-hidden"
          style={{
            backgroundColor: 'rgba(11, 15, 25, 0.95)',
            borderColor: 'rgba(99, 102, 241, 0.35)',
            boxShadow: '0 20px 40px -15px rgba(0,0,0,0.7), 0 0 25px rgba(99,102,241,0.2)',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${themeConfig.accent}20` }}
              >
                <Sparkles className="w-4 h-4" style={{ color: themeConfig.accent }} />
              </div>
              <div>
                <h2 className="text-xs font-bold text-white uppercase tracking-wider font-arnie">
                  AI Voice Commander
                </h2>
                <p className="text-[10px] text-slate-400">Speak or type actions & navigation</p>
              </div>
            </div>

            <div className="flex items-center space-x-1.5">
              <button
                type="button"
                onClick={toggleSpeechAudio}
                title={speechAudioEnabled ? 'Mute voice response' : 'Enable voice speech response'}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {speechAudioEnabled ? (
                  <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                ) : (
                  <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                )}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Listening Visualizer Area */}
          <div className="py-4 flex flex-col items-center justify-center text-center">
            {isListening ? (
              <div className="flex flex-col items-center space-y-3">
                {/* Audio pulse wave */}
                <div className="flex items-center justify-center space-x-1 h-10">
                  <span className="w-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s] h-6" />
                  <span className="w-1 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s] h-9" />
                  <span className="w-1 bg-pink-400 rounded-full animate-bounce h-10" />
                  <span className="w-1 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s] h-9" />
                  <span className="w-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s] h-6" />
                </div>
                <p className="text-xs text-cyan-300 font-mono animate-pulse">
                  {transcript ? `"${transcript}"` : 'Listening for command...'}
                </p>
                <button
                  type="button"
                  onClick={stopListening}
                  className="px-3 py-1 rounded-full text-[11px] bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30 cursor-pointer"
                >
                  Stop Listening
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-2.5">
                <button
                  type="button"
                  onClick={startListening}
                  disabled={!isSupported}
                  className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer ${
                    isSupported
                      ? 'bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white shadow-cyan-500/25 hover:shadow-cyan-500/40'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                  title={isSupported ? 'Click and speak command' : 'Microphone API not supported in this browser'}
                >
                  <Mic className="w-6 h-6" />
                </button>
                <span className="text-[11px] text-slate-300 font-medium">
                  {isSupported ? 'Tap mic to speak command' : 'Web Speech API unavailable — use text input below'}
                </span>
              </div>
            )}
          </div>

          {/* Quick command buttons */}
          <div className="pt-2 border-t border-slate-800/80">
            <span className="text-[10px] font-mono text-slate-400 block mb-1.5 uppercase tracking-wider">
              Sample Voice Commands
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
              {sampleCommands.map((item) => (
                <button
                  key={item.cmd}
                  type="button"
                  onClick={() => executeCommandText(item.cmd)}
                  className="px-2.5 py-1 rounded-lg text-[11px] bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer font-sans"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Text Input Fallback */}
          <form onSubmit={handleManualSubmit} className="mt-3 flex items-center gap-1.5">
            <div className="relative flex-1">
              <input
                type="text"
                value={manualText}
                onChange={(e) => setManualText(e.target.value)}
                placeholder="e.g. 'find Manning' or 'open booklet'..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 pr-7"
              />
            </div>
            <button
              type="submit"
              disabled={!manualText.trim()}
              className="px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 text-white text-xs font-semibold cursor-pointer transition-colors"
            >
              Run
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="flex items-center space-x-2">
        {isListening && (
          <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse">
            Listening...
          </span>
        )}
        <button
          type="button"
          onClick={() => {
            if (!isOpen) {
              setIsOpen(true);
              if (isSupported) startListening();
            } else {
              setIsOpen(false);
            }
          }}
          className={`h-12 px-4 rounded-2xl flex items-center space-x-2.5 shadow-2xl border transition-all duration-200 cursor-pointer ${
            isListening
              ? 'bg-rose-500 text-white border-rose-400 scale-105 shadow-rose-500/30'
              : 'bg-slate-900/90 text-white hover:border-cyan-400/60 hover:bg-slate-850'
          }`}
          style={{
            borderColor: isListening ? '#f43f5e' : `${themeConfig.accent}50`,
            boxShadow: `0 10px 25px -5px ${themeConfig.accent}30`,
          }}
          title="Open AI Voice Command Controller"
        >
          <div className="relative">
            <Mic className={`w-5 h-5 ${isListening ? 'animate-pulse text-white' : 'text-cyan-400'}`} />
            {isListening && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            )}
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-bold font-arnie leading-tight text-white tracking-wide">
              AI Voice
            </span>
            <span className="text-[9px] text-slate-400 font-mono leading-none">
              {isOpen ? 'Click to close' : 'Command & Go'}
            </span>
          </div>
        </button>
      </div>
    </aside>
  );
};

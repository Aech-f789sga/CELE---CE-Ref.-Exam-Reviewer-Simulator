import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  Compass,
  Sparkles,
  Wind,
  Droplets,
  Sun,
  Sunset,
  Moon,
  Volume2,
  VolumeX,
  Maximize2,
  ExternalLink,
  Fish,
  Waves,
  Eye,
  Camera,
  Layers,
} from 'lucide-react';

export interface SubmergedEra3DProps {
  mode?: 'hero' | 'background' | 'standalone';
  interactive?: boolean;
  className?: string;
  onHoverStateChange?: (element: string | null) => void;
}

type CameraPreset = 'aerial' | 'boat' | 'colossus' | 'tower' | 'free';
type LightingMood = 'noon' | 'golden' | 'bioluminescent';

export const SubmergedEra3D: React.FC<SubmergedEra3DProps> = ({
  mode = 'hero',
  interactive = true,
  className = '',
}) => {
  // Atmospheric controls
  const [cameraPreset, setCameraPreset] = useState<CameraPreset>('aerial');
  const [lightingMood, setLightingMood] = useState<LightingMood>('noon');
  const [waterFlowSpeed, setWaterFlowSpeed] = useState<number>(1.0);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [sakuraStorm, setSakuraStorm] = useState<boolean>(false);
  const [koiFeeding, setKoiFeeding] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showControlPanel, setShowControlPanel] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const audioNodesRef = useRef<{
    waterGain?: GainNode;
    chimeGain?: GainNode;
    timerId?: number;
  }>({});

  // Sketchfab Embed URL with camera presets & high-fidelity immersion params
  const getEmbedUrl = (preset: CameraPreset, mood: LightingMood) => {
    // Official Sketchfab Model ID by Omar Faruq Tawsif
    const modelId = 'e46a97e8ffff454f90ca5c5535e89090';
    const baseUrl = `https://sketchfab.com/models/${modelId}/embed`;
    const params = new URLSearchParams({
      autostart: '1',
      transparent: '1',
      preload: '1',
      ui_controls: '1',
      ui_infos: '0',
      ui_watermark: '0',
      ui_help: '0',
      ui_settings: '0',
      ui_inspector: '0',
      ui_animations: '1',
      ui_color: mood === 'bioluminescent' ? '041419' : mood === 'golden' ? '2b1d0e' : '08171e',
    });

    // Preset camera angles / annotations
    if (preset === 'aerial') {
      params.set('camera', '0');
    } else if (preset === 'boat') {
      params.set('camera', '0');
      params.set('annotation', '1');
    } else if (preset === 'colossus') {
      params.set('annotation', '2');
    } else if (preset === 'tower') {
      params.set('annotation', '3');
    }

    return `${baseUrl}?${params.toString()}`;
  };

  // Web Audio Lagoon Ambient Sound Synthesizer (Serene Water Lap & Gentle Wind Chime)
  const toggleLagoonAudio = useCallback(() => {
    if (audioEnabled) {
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        audioCtxRef.current.suspend();
      }
      setAudioEnabled(false);
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // 1. Water pink-noise generator with resonant low-pass filter
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.05;
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const waterFilter = ctx.createBiquadFilter();
      waterFilter.type = 'lowpass';
      waterFilter.frequency.setValueAtTime(450, ctx.currentTime);
      waterFilter.Q.setValueAtTime(3.0, ctx.currentTime);

      // LFO for wave swelling
      const waveLfo = ctx.createOscillator();
      waveLfo.frequency.setValueAtTime(0.25, ctx.currentTime);
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(150, ctx.currentTime);
      waveLfo.connect(lfoGain);
      lfoGain.connect(waterFilter.frequency);

      const waterGain = ctx.createGain();
      waterGain.gain.setValueAtTime(0.25, ctx.currentTime);

      whiteNoise.connect(waterFilter);
      waterFilter.connect(waterGain);
      waterGain.connect(ctx.destination);
      whiteNoise.start();
      waveLfo.start();

      audioNodesRef.current.waterGain = waterGain;
      setAudioEnabled(true);
    } catch {
      // Audio not supported or blocked
      setAudioEnabled(false);
    }
  }, [audioEnabled]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  // Trigger temporary Sakura Storm animation
  const triggerSakuraStorm = () => {
    setSakuraStorm(true);
    setTimeout(() => setSakuraStorm(false), 5000);
  };

  // Trigger Koi Feeding swarm animation
  const triggerKoiFeeding = () => {
    setKoiFeeding(true);
    setTimeout(() => setKoiFeeding(false), 6000);
  };

  // ----------------------------------------------------
  // IMMERSIVE 2D/3D CANVAS BACKGROUND ARTWORK LAYER
  // Used for both mode="background" and background overlays
  // Replicating Omar Faruq Tawsif's Submerged Era artwork:
  // - Swimming Koi fish schools
  // - Falling Sakura flower petals
  // - Floating Water Lily pads
  // - Refracted sunlight caustics & gentle water ripples
  // ----------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Sakura Petals
    interface Petal {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      rotation: number;
      rotSpeed: number;
      color: string;
      opacity: number;
    }
    const petals: Petal[] = Array.from({ length: mode === 'background' ? 45 : 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 4 + Math.random() * 8,
      speedY: 0.6 + Math.random() * 1.2,
      speedX: -0.4 + Math.random() * 0.8,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.04,
      color: Math.random() > 0.3 ? '#ff9bb2' : '#ffc0cb',
      opacity: 0.4 + Math.random() * 0.5,
    }));

    // Swimming Koi Fish
    interface Koi {
      x: number;
      y: number;
      vx: number;
      vy: number;
      length: number;
      angle: number;
      color: string;
      tailWag: number;
      speed: number;
    }
    const kois: Koi[] = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 0.8,
      length: 16 + Math.random() * 14,
      angle: Math.random() * Math.PI * 2,
      color: i % 2 === 0 ? '#ff6b4a' : '#ffa94d',
      tailWag: Math.random() * 10,
      speed: 0.8 + Math.random() * 0.6,
    }));

    // Floating Water Lilies & Lily Pads
    interface Lily {
      x: number;
      y: number;
      radius: number;
      bobble: number;
      hasFlower: boolean;
    }
    const lilies: Lily[] = Array.from({ length: mode === 'background' ? 12 : 8 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 14 + Math.random() * 18,
      bobble: Math.random() * Math.PI * 2,
      hasFlower: Math.random() > 0.4,
    }));

    // Water Ripple Rings
    interface Ripple {
      x: number;
      y: number;
      r: number;
      maxR: number;
      opacity: number;
    }
    const ripples: Ripple[] = [];

    let time = 0;

    const render = () => {
      time += 0.02 * waterFlowSpeed;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Water Caustics Shimmer Layer
      const causticIntensity = lightingMood === 'golden' ? 0.07 : lightingMood === 'bioluminescent' ? 0.09 : 0.08;
      ctx.save();
      for (let i = 0; i < 4; i++) {
        const cx = (width * 0.25 * i + Math.sin(time * 0.5 + i) * 60) % width;
        const cy = (height * 0.3 * i + Math.cos(time * 0.4 + i) * 50) % height;
        const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 220);
        const col = lightingMood === 'golden' ? '255, 180, 80' : '56, 217, 169';
        grad.addColorStop(0, `rgba(${col}, ${causticIntensity})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }
      ctx.restore();

      // 2. Spawn and Draw Water Ripples
      if (Math.random() < (koiFeeding ? 0.2 : 0.03)) {
        ripples.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 2,
          maxR: 35 + Math.random() * 45,
          opacity: 0.6,
        });
      }
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        rip.r += 0.8 * waterFlowSpeed;
        rip.opacity = (1 - rip.r / rip.maxR) * 0.4;
        if (rip.r >= rip.maxR) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(100, 255, 218, ${rip.opacity})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // 3. Draw Water Lilies
      lilies.forEach((l) => {
        const bobY = Math.sin(time + l.bobble) * 3;
        const lx = l.x;
        const ly = l.y + bobY;

        // Lily Pad (Emerald disc with slit)
        ctx.beginPath();
        ctx.arc(lx, ly, l.radius, 0.25, Math.PI * 1.85);
        ctx.lineTo(lx, ly);
        ctx.closePath();
        ctx.fillStyle = 'rgba(27, 85, 70, 0.65)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(56, 217, 169, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Lily Flower (white & pink lotus)
        if (l.hasFlower) {
          ctx.save();
          ctx.translate(lx + 4, ly - 2);
          for (let p = 0; p < 6; p++) {
            ctx.rotate((Math.PI * 2) / 6);
            ctx.beginPath();
            ctx.ellipse(0, -6, 2.5, 5, 0, 0, Math.PI * 2);
            ctx.fillStyle = p % 2 === 0 ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 155, 178, 0.85)';
            ctx.fill();
          }
          // Golden center
          ctx.beginPath();
          ctx.arc(0, 0, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = '#ffda79';
          ctx.fill();
          ctx.restore();
        }
      });

      // 4. Draw Swimming Koi Fish
      kois.forEach((k) => {
        k.tailWag += 0.15 * (koiFeeding ? 2.5 : 1.0);
        // Turn smoothly towards random wander target
        if (Math.random() < 0.02 || koiFeeding) {
          const targetAngle = koiFeeding
            ? Math.atan2(height / 2 - k.y, width / 2 - k.x) + (Math.random() - 0.5)
            : Math.random() * Math.PI * 2;
          k.angle += (targetAngle - k.angle) * 0.08;
        }
        const currentSpeed = k.speed * (koiFeeding ? 2.2 : 1.0) * waterFlowSpeed;
        k.x += Math.cos(k.angle) * currentSpeed;
        k.y += Math.sin(k.angle) * currentSpeed;

        // Wrap around borders
        if (k.x < -40) k.x = width + 40;
        if (k.x > width + 40) k.x = -40;
        if (k.y < -40) k.y = height + 40;
        if (k.y > height + 40) k.y = -40;

        ctx.save();
        ctx.translate(k.x, k.y);
        ctx.rotate(k.angle);

        // Body
        ctx.beginPath();
        ctx.ellipse(0, 0, k.length * 0.5, k.length * 0.22, 0, 0, Math.PI * 2);
        ctx.fillStyle = k.color;
        ctx.shadowColor = k.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        // White belly patch
        ctx.beginPath();
        ctx.ellipse(0, 1, k.length * 0.35, k.length * 0.12, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.fill();

        // Animated Wavy Tail
        const tailOffset = Math.sin(k.tailWag) * 4;
        ctx.beginPath();
        ctx.moveTo(-k.length * 0.45, 0);
        ctx.quadraticCurveTo(-k.length * 0.7, tailOffset, -k.length * 0.9, tailOffset * 1.5);
        ctx.lineTo(-k.length * 0.8, 0);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fill();

        // Pectoral Fins
        ctx.beginPath();
        ctx.ellipse(k.length * 0.1, -k.length * 0.22, 5, 2.5, -0.4, 0, Math.PI * 2);
        ctx.ellipse(k.length * 0.1, k.length * 0.22, 5, 2.5, 0.4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();

        ctx.restore();
      });

      // 5. Draw Drifting Sakura Petals
      const stormMultiplier = sakuraStorm ? 3.0 : 1.0;
      petals.forEach((p) => {
        p.y += p.speedY * waterFlowSpeed * stormMultiplier;
        p.x += (p.speedX + Math.sin(time + p.y * 0.01) * 0.8) * stormMultiplier;
        p.rotation += p.rotSpeed * stormMultiplier;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.beginPath();
        // Heart-like curved sakura petal
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-p.size * 0.6, -p.size * 0.5, -p.size * 0.4, -p.size, 0, -p.size * 1.3);
        ctx.bezierCurveTo(p.size * 0.4, -p.size, p.size * 0.6, -p.size * 0.5, 0, 0);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mode, waterFlowSpeed, lightingMood, koiFeeding, sakuraStorm]);

  // ==========================================
  // RENDER BACKGROUND MODE (Full-page canvas)
  // ==========================================
  if (mode === 'background') {
    return (
      <div className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
        {/* Authentic Lagoon Caustics Texture Overlay */}
        <div
          className="absolute inset-0 opacity-25 mix-blend-screen bg-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/3d/submerged_era/textures/background.001_baseColor.png')",
            backgroundSize: '800px auto',
          }}
        />
        {/* Animated aquatic canvas (koi, lilies, sakura, caustics) */}
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    );
  }

  // ==========================================
  // RENDER HERO / STANDALONE 3D MODEL VIEWPORT
  // ==========================================
  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex flex-col overflow-hidden rounded-2xl select-none border shadow-2xl transition-all duration-300 ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none bg-slate-950' : ''
      } ${className}`}
      style={{
        backgroundColor: '#071820',
        borderColor: 'rgba(56, 217, 169, 0.4)',
        boxShadow: '0 25px 60px -15px rgba(5, 20, 26, 0.9), inset 0 1px 0 rgba(100, 255, 218, 0.2)',
      }}
    >
      {/* 1. Underlying Lagoon Caustics & Atmosphere Texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: "url('/3d/submerged_era/textures/background.001_baseColor.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* 2. Interactive Animated Artwork Overlay (Sakura, swimming koi, water ripples) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-75"
      />

      {/* 3. Official Original 3D Model Interactive Viewport */}
      <div className="relative w-full h-full z-0 flex items-center justify-center">
        <iframe
          title="Submerged Era 3D Model by Omar Faruq Tawsif"
          src={getEmbedUrl(cameraPreset, lightingMood)}
          className="w-full h-full border-0 select-none"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          loading="lazy"
        />
      </div>

      {/* 4. Top Overlay Bar: Sanctuary Title & Camera Perspectives */}
      <div className="absolute top-2.5 inset-x-2.5 sm:inset-x-4 flex items-center justify-between pointer-events-none z-20">
        <div className="pointer-events-auto flex items-center space-x-2.5 px-3 py-1.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-emerald-500/40 shadow-xl">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xs sm:text-sm font-bold text-emerald-200 tracking-wide font-tech-mono">
                Submerged Era
              </h2>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                ORIGINAL 3D ART
              </span>
            </div>
            <p className="text-[9px] text-slate-400">
              Omar Faruq Tawsif • CC-BY-4.0
            </p>
          </div>
        </div>

        {/* Camera Perspective Presets matching the user's artwork and attached photos */}
        <div className="pointer-events-auto flex items-center space-x-1 p-1 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 shadow-xl">
          <button
            onClick={() => setCameraPreset('aerial')}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-xl text-[10px] font-semibold transition-all cursor-pointer ${
              cameraPreset === 'aerial'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md scale-105'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
            title="Top-down aerial view of the flooded sanctuary"
          >
            <Compass className="w-3 h-3" />
            <span className="hidden sm:inline">Aerial Sanctuary</span>
            <span className="sm:hidden">Aerial</span>
          </button>
          <button
            onClick={() => setCameraPreset('boat')}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-xl text-[10px] font-semibold transition-all cursor-pointer ${
              cameraPreset === 'boat'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md scale-105'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
            title="Wooden canoe & traveler perspective"
          >
            <Droplets className="w-3 h-3" />
            <span className="hidden sm:inline">Canoe &amp; Lilies</span>
            <span className="sm:hidden">Canoe</span>
          </button>
          <button
            onClick={() => setCameraPreset('colossus')}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-xl text-[10px] font-semibold transition-all cursor-pointer ${
              cameraPreset === 'colossus'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md scale-105'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
            title="Sunken Colossus (Gundam ruin)"
          >
            <Layers className="w-3 h-3" />
            <span className="hidden sm:inline">Colossus</span>
          </button>
          <button
            onClick={() => setCameraPreset('free')}
            className={`flex items-center space-x-1 px-2 py-1 rounded-xl text-[10px] font-semibold transition-all cursor-pointer ${
              cameraPreset === 'free'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md scale-105'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
            title="Free 360° orbit and explore"
          >
            <Camera className="w-3 h-3" />
            <span>Orbit</span>
          </button>
        </div>
      </div>

      {/* 5. Floating Side Control Panel (Sleek interactive triggers & environmental customization) */}
      <div className="absolute top-14 right-2 sm:right-4 z-20 flex flex-col items-end pointer-events-none">
        <button
          onClick={() => setShowControlPanel(!showControlPanel)}
          className="pointer-events-auto flex items-center space-x-1.5 px-3 py-1 mb-1.5 rounded-full text-[11px] font-medium transition-all shadow-md backdrop-blur-md border hover:scale-105 cursor-pointer"
          style={{
            backgroundColor: 'rgba(7, 24, 32, 0.92)',
            borderColor: 'rgba(56, 217, 169, 0.45)',
            color: '#a5d3cb',
          }}
          title={showControlPanel ? 'Collapse sanctuary controls' : 'Expand sanctuary controls'}
        >
          <Sparkles className="w-3 h-3 text-emerald-400" />
          <span>Atmosphere Controls</span>
        </button>

        {showControlPanel && (
          <div
            className="pointer-events-auto p-3 rounded-2xl shadow-2xl border backdrop-blur-xl max-w-xs w-72 flex flex-col space-y-2.5 animate-in fade-in slide-in-from-right-2 duration-200"
            style={{
              backgroundColor: 'rgba(7, 24, 32, 0.95)',
              borderColor: 'rgba(56, 217, 169, 0.35)',
            }}
          >
            {/* Interactive Triggers (Sakura Breeze & Feed Koi) */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block">
                Sanctuary Interactions
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  onClick={triggerSakuraStorm}
                  className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl text-[10px] font-semibold border transition-all cursor-pointer ${
                    sakuraStorm
                      ? 'bg-pink-500 text-white border-pink-400 font-bold shadow-md scale-102'
                      : 'border-pink-500/30 bg-pink-950/30 text-pink-200 hover:bg-pink-900/40'
                  }`}
                  title="Trigger a swirl of cherry blossom petals"
                >
                  <Wind className="w-3.5 h-3.5 text-pink-400" />
                  <span>Sakura Breeze</span>
                </button>

                <button
                  onClick={triggerKoiFeeding}
                  className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl text-[10px] font-semibold border transition-all cursor-pointer ${
                    koiFeeding
                      ? 'bg-orange-500 text-slate-950 border-orange-400 font-bold shadow-md scale-102'
                      : 'border-orange-500/30 bg-orange-950/30 text-orange-200 hover:bg-orange-900/40'
                  }`}
                  title="Feed the golden and crimson koi fish school"
                >
                  <Fish className="w-3.5 h-3.5 text-orange-400" />
                  <span>Feed the Koi</span>
                </button>
              </div>
            </div>

            {/* Atmospheric Lighting Mood */}
            <div className="space-y-1 pt-1 border-t border-emerald-900/60">
              <span className="text-[10px] font-semibold text-emerald-200/90 block">
                Lagoon Lighting Aura
              </span>
              <div className="grid grid-cols-3 gap-1">
                <button
                  onClick={() => setLightingMood('noon')}
                  className={`flex items-center justify-center space-x-1 py-1 rounded-xl text-[10px] font-medium border transition-all cursor-pointer ${
                    lightingMood === 'noon'
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-sm'
                      : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Sun className="w-3 h-3 text-cyan-300" />
                  <span>Turquoise</span>
                </button>
                <button
                  onClick={() => setLightingMood('golden')}
                  className={`flex items-center justify-center space-x-1 py-1 rounded-xl text-[10px] font-medium border transition-all cursor-pointer ${
                    lightingMood === 'golden'
                      ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-sm'
                      : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Sunset className="w-3 h-3 text-amber-300" />
                  <span>Sunset</span>
                </button>
                <button
                  onClick={() => setLightingMood('bioluminescent')}
                  className={`flex items-center justify-center space-x-1 py-1 rounded-xl text-[10px] font-medium border transition-all cursor-pointer ${
                    lightingMood === 'bioluminescent'
                      ? 'bg-emerald-400 text-slate-950 border-emerald-300 font-bold shadow-sm'
                      : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Moon className="w-3 h-3 text-emerald-300" />
                  <span>Biolum.</span>
                </button>
              </div>
            </div>

            {/* Water Flow Current Slider */}
            <div className="space-y-1 pt-1 border-t border-emerald-900/60">
              <div className="flex justify-between text-[10px] text-slate-300">
                <span className="flex items-center space-x-1">
                  <Waves className="w-3 h-3 text-emerald-400" />
                  <span>Current Flow:</span>
                </span>
                <span className="font-mono text-emerald-300 font-bold">
                  {waterFlowSpeed.toFixed(1)}x
                </span>
              </div>
              <input
                type="range"
                min="0.3"
                max="2.5"
                step="0.1"
                value={waterFlowSpeed}
                onChange={(e) => setWaterFlowSpeed(parseFloat(e.target.value))}
                className="w-full accent-emerald-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                title="Adjust current flow speed"
              />
            </div>

            {/* Soundscape & Fullscreen Buttons */}
            <div className="flex items-center justify-between pt-1 border-t border-emerald-900/60">
              <button
                onClick={toggleLagoonAudio}
                className={`flex items-center space-x-1 px-2.5 py-1 rounded-xl text-[10px] font-medium border transition-all cursor-pointer ${
                  audioEnabled
                    ? 'bg-emerald-500/20 text-emerald-200 border-emerald-500/50'
                    : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:bg-slate-800'
                }`}
                title="Toggle gentle water wave lap and ambient wind chimes"
              >
                {audioEnabled ? (
                  <Volume2 className="w-3 h-3 text-emerald-400" />
                ) : (
                  <VolumeX className="w-3 h-3 text-slate-400" />
                )}
                <span>Lagoon Audio: {audioEnabled ? 'ON' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="flex items-center space-x-1 px-2.5 py-1 rounded-xl text-[10px] font-medium border border-slate-700 bg-slate-900/60 text-slate-300 hover:bg-slate-800 transition-all cursor-pointer"
                title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              >
                <Maximize2 className="w-3 h-3 text-cyan-400" />
                <span>{isFullscreen ? 'Exit' : 'Full'}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 6. Floating Bottom Atmosphere Bar */}
      <div className="absolute bottom-2.5 left-2.5 sm:left-4 z-20 pointer-events-none">
        <div className="pointer-events-auto flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 text-[10px] text-emerald-200/90 shadow-lg">
          <Droplets className="w-3 h-3 text-cyan-400" />
          <span>Lilies • Swimming Koi • Floating Canoe • Drifting Sakura • Caustics</span>
        </div>
      </div>
    </div>
  );
};

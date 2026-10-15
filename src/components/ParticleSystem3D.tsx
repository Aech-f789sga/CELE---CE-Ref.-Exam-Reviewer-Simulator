import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {
  Heart,
  Flower2,
  Globe,
  Sparkles,
  Flame,
  Palette,
  Camera,
  CameraOff,
  RotateCcw,
  Play,
  Pause,
  ChevronDown,
  ChevronUp,
  Sliders,
  Expand,
  Minimize2,
  Atom,
  Hand,
  Info,
} from 'lucide-react';
import {
  useParticleTheme,
  ParticleTemplateId,
  PARTICLE_COLOR_PRESETS,
} from '../context/ParticleThemeContext';

interface ParticleSystem3DProps {
  mode?: 'background' | 'hero' | 'standalone';
  interactive?: boolean;
  className?: string;
  initialTemplate?: ParticleTemplateId;
  initialColor?: string;
}

// Particle counts tuned for maximum visual richness and silky 60-120fps performance
const HERO_PARTICLE_COUNT = 9000;
const BG_PARTICLE_COUNT = 6000;

/**
 * Creates a soft radial glow particle texture.
 */
function createGlowPointTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.2, 'rgba(255, 255, 255, 0.88)');
    grad.addColorStop(0.55, 'rgba(255, 255, 255, 0.38)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// Template Math Generators
function generateHeartPoints(count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const t = Math.random() * Math.PI * 2;
    const u = (Math.random() - 0.5) * Math.PI;
    const depthSpread = Math.pow(Math.random(), 0.6);
    const x = 16 * Math.pow(Math.sin(t), 3) * Math.cos(u) * depthSpread;
    const y =
      (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) *
      depthSpread;
    const z = 16 * Math.pow(Math.sin(t), 3) * Math.sin(u) * 0.5 * depthSpread;

    arr[i * 3] = x * 0.11;
    arr[i * 3 + 1] = y * 0.11 + 0.15;
    arr[i * 3 + 2] = z * 0.11;
  }
  return arr;
}

function generateFlowerPoints(count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  const petalCount = 8;
  for (let i = 0; i < count; i++) {
    const layer = Math.floor(Math.random() * 5);
    if (layer === 0) {
      // Golden central stamen dome
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 0.5;
      const r = Math.pow(Math.random(), 0.5) * 0.45;
      arr[i * 3] = r * Math.cos(theta);
      arr[i * 3 + 1] = Math.cos(phi) * 0.25 - 0.1;
      arr[i * 3 + 2] = r * Math.sin(theta);
    } else {
      // Layered blooming lotus petals curving upward and outward
      const theta = Math.random() * Math.PI * 2;
      const maxR = 0.5 + layer * 0.45;
      const r = 0.35 + Math.pow(Math.random(), 0.7) * (maxR - 0.35);
      const petalWobble = Math.cos(petalCount * theta * 0.5);
      const shapedR = r * (0.8 + 0.25 * Math.abs(petalWobble));
      const y = Math.sin(r * 2.2) * 0.55 - layer * 0.12 - 0.15;

      arr[i * 3] = shapedR * Math.cos(theta);
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = shapedR * Math.sin(theta);
    }
  }
  return arr;
}

function generateSaturnPoints(count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  const planetPoints = Math.floor(count * 0.32);
  const ringPoints = count - planetPoints;

  // Planet body
  for (let i = 0; i < planetPoints; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = (Math.random() - 0.5) * Math.PI;
    const r = 0.9 + (Math.random() - 0.5) * 0.08;
    arr[i * 3] = r * Math.cos(theta) * Math.cos(phi);
    arr[i * 3 + 1] = r * 0.88 * Math.sin(phi);
    arr[i * 3 + 2] = r * Math.sin(theta) * Math.cos(phi);
  }

  // Concentric Rings with dark Cassini division gap
  for (let i = 0; i < ringPoints; i++) {
    const idx = planetPoints + i;
    const theta = Math.random() * Math.PI * 2;
    let r = 1.35 + Math.random() * 1.6;
    if (r > 2.05 && r < 2.24) {
      r = Math.random() > 0.5 ? 2.0 : 2.28;
    }
    const yWobble = (Math.random() - 0.5) * 0.04;
    arr[idx * 3] = r * Math.cos(theta);
    arr[idx * 3 + 1] = yWobble;
    arr[idx * 3 + 2] = r * Math.sin(theta);
  }

  // Tilt Saturn's equatorial axis by 26.7 degrees
  const tilt = 0.46;
  const cosT = Math.cos(tilt);
  const sinT = Math.sin(tilt);
  for (let i = 0; i < count; i++) {
    const y = arr[i * 3 + 1];
    const z = arr[i * 3 + 2];
    arr[i * 3 + 1] = y * cosT - z * sinT;
    arr[i * 3 + 2] = y * sinT + z * cosT;
  }

  return arr;
}

function generateBuddhaPoints(count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const section = Math.random();

    if (section < 0.22) {
      // 1. Double Lotus Throne Base (Petaled pedestal at bottom)
      const angle = Math.random() * Math.PI * 2;
      const r = 0.85 + Math.random() * 0.95;
      const petalWobble = 0.16 * Math.sin(angle * 12);
      const shapedR = r + petalWobble;
      const y = -1.65 + Math.random() * 0.42;
      arr[i * 3] = shapedR * Math.cos(angle);
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = shapedR * Math.sin(angle);
    } else if (section < 0.44) {
      // 2. Crossed Meditating Legs in Full Lotus (Padmasana)
      const u = Math.random();
      const v = (Math.random() - 0.5) * 2;
      const legWidth = (1 - u) * 1.45;
      const x = v * legWidth;
      const y = -1.25 + u * 0.55;
      const z = (Math.random() - 0.3) * 0.85;
      arr[i * 3] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    } else if (section < 0.68) {
      // 3. Torso, Meditating Shoulders & Draped Sanghati Robe
      const y = -0.7 + Math.random() * 1.15;
      const heightNorm = (y + 0.7) / 1.15;
      const width = 0.45 + Math.sin(heightNorm * Math.PI) * 0.38;
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * width;
      arr[i * 3] = r * Math.cos(angle) * 1.12;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = r * Math.sin(angle) * 0.78;
    } else if (section < 0.84) {
      // 4. Head, Meditative Face, Elongated Ears & Ushnisha Crown
      if (Math.random() < 0.78) {
        const theta = Math.random() * Math.PI * 2;
        const phi = (Math.random() - 0.5) * Math.PI;
        const r = 0.34 + Math.random() * 0.05;
        arr[i * 3] = r * Math.cos(theta) * Math.cos(phi);
        arr[i * 3 + 1] = 0.78 + r * 1.12 * Math.sin(phi);
        arr[i * 3 + 2] = r * Math.sin(theta) * Math.cos(phi) * 0.92;
      } else {
        const angle = Math.random() * Math.PI * 2;
        const h = Math.random();
        const r = (1 - h) * 0.16;
        arr[i * 3] = r * Math.cos(angle);
        arr[i * 3 + 1] = 1.15 + h * 0.3;
        arr[i * 3 + 2] = r * Math.sin(angle);
      }
    } else {
      // 5. Prabhamandala (Radiant Aureole Halo behind Head & Torso)
      const angle = Math.random() * Math.PI * 2;
      const r = 0.45 + Math.random() * 1.1;
      arr[i * 3] = r * Math.cos(angle);
      arr[i * 3 + 1] = 0.75 + r * Math.sin(angle);
      arr[i * 3 + 2] = -0.18 - Math.random() * 0.12;
    }
  }
  return arr;
}

function generateFireworksPoints(count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = (Math.random() - 0.5) * Math.PI;
    const speed = 0.4 + Math.pow(Math.random(), 0.7) * 2.2;
    arr[i * 3] = speed * Math.cos(theta) * Math.cos(phi);
    arr[i * 3 + 1] = speed * Math.sin(phi);
    arr[i * 3 + 2] = speed * Math.sin(theta) * Math.cos(phi);
  }
  return arr;
}

function generateGalaxyPoints(count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  const arms = 2;
  for (let i = 0; i < count; i++) {
    const armIndex = i % arms;
    const armOffset = (armIndex * (Math.PI * 2)) / arms;
    const dist = Math.pow(Math.random(), 1.6) * 2.5 + 0.15;
    const angle = dist * 2.8 + armOffset;
    const spread = (Math.random() - 0.5) * (0.2 + dist * 0.18);
    const ySpread = (Math.random() - 0.5) * (0.15 + (1 / dist) * 0.08);

    arr[i * 3] = Math.cos(angle) * dist + spread;
    arr[i * 3 + 1] = ySpread;
    arr[i * 3 + 2] = Math.sin(angle) * dist + spread;
  }
  return arr;
}

const TEMPLATE_GENERATORS: Record<ParticleTemplateId, (count: number) => Float32Array> = {
  heart: generateHeartPoints,
  flower: generateFlowerPoints,
  saturn: generateSaturnPoints,
  buddha: generateBuddhaPoints,
  fireworks: generateFireworksPoints,
  galaxy: generateGalaxyPoints,
};

export const ParticleSystem3D: React.FC<ParticleSystem3DProps> = ({
  mode = 'hero',
  interactive = true,
  className = '',
}) => {
  const particleTheme = useParticleTheme();
  const {
    activeTemplate,
    setActiveTemplate,
    primaryColor,
    setPrimaryColor,
    secondaryColor,
    setSecondaryColor,
    tensionScale,
    setTensionScale,
    setEffectiveTension,
    autoPulse,
    setAutoPulse,
    autoRotate,
    setAutoRotate,
    isCameraActive,
    setIsCameraActive,
    handTrackingInfo,
    setHandTrackingInfo,
    cameraPermissionError,
    setCameraPermissionError,
  } = particleTheme;

  const mountRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cvCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const [showControls, setShowControls] = useState<boolean>(true);
  const [showVirtualHands, setShowVirtualHands] = useState<boolean>(false);
  const [virtualHandDistance, setVirtualHandDistance] = useState<number>(50); // 10 = closed/pinched, 90 = wide open

  const particleCount = mode === 'background' ? BG_PARTICLE_COUNT : HERO_PARTICLE_COUNT;

  // Three.js References
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);

  // Dynamic particle buffers
  const currentPositionsRef = useRef<Float32Array>(new Float32Array(particleCount * 3));
  const targetPositionsRef = useRef<Float32Array>(new Float32Array(particleCount * 3));
  const colorsArrayRef = useRef<Float32Array>(new Float32Array(particleCount * 3));

  // Current real-time tension ref (smoothed)
  const currentTensionRef = useRef<number>(1.0);
  const targetTensionRef = useRef<number>(tensionScale);

  // Update target positions when template changes
  useEffect(() => {
    const generator = TEMPLATE_GENERATORS[activeTemplate] || generateHeartPoints;
    const newPositions = generator(particleCount);
    targetPositionsRef.current.set(newPositions);
  }, [activeTemplate, particleCount]);

  // Update particle colors when primary/secondary color changes
  useEffect(() => {
    const c1 = new THREE.Color(primaryColor);
    const c2 = new THREE.Color(secondaryColor);
    const colors = colorsArrayRef.current;

    for (let i = 0; i < particleCount; i++) {
      const ratio = Math.sin((i / particleCount) * Math.PI);
      const mixed = c1.clone().lerp(c2, ratio);

      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.color.needsUpdate = true;
    }
  }, [primaryColor, secondaryColor, particleCount]);

  // Sync target tension from context
  useEffect(() => {
    targetTensionRef.current = tensionScale;
  }, [tensionScale]);

  // Initialize Camera Hand Gesture Tracking
  const toggleCamera = useCallback(async () => {
    if (isCameraActive) {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
      setIsCameraActive(false);
      setHandTrackingInfo({
        handsDetected: 0,
        distance: 0,
        tension: targetTensionRef.current,
        status: 'Camera gesture off (Manual Mode)',
      });
    } else {
      try {
        setCameraPermissionError(null);
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 320, height: 240, facingMode: 'user' },
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
        setIsCameraActive(true);
        setShowVirtualHands(false);
        setHandTrackingInfo({
          handsDetected: 0,
          distance: 0,
          tension: 1.0,
          status: 'Tracking hands... hold up both hands',
        });
      } catch (err: unknown) {
        console.warn('Camera access denied or unavailable:', err);
        setCameraPermissionError('Camera permission not granted. Use the Virtual Hand Pad or slider below!');
        setIsCameraActive(false);
        setShowVirtualHands(true);
      }
    }
  }, [isCameraActive, setIsCameraActive, setHandTrackingInfo, setCameraPermissionError]);

  // Clean up camera on unmount
  useEffect(() => {
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // Handle Virtual Hand Distance slider/drag
  const handleVirtualHandDistanceChange = (dist: number) => {
    setVirtualHandDistance(dist);
    // Map 10..90 to tension 0.25..2.65
    const mappedTension = THREE.MathUtils.clamp(0.25 + (dist / 100) * 2.4, 0.25, 2.65);
    setTensionScale(Number(mappedTension.toFixed(2)));
    setAutoPulse(false);
    setHandTrackingInfo({
      handsDetected: 2,
      distance: Math.round(dist * 2),
      tension: Number(mappedTension.toFixed(2)),
      status:
        mappedTension > 1.4
          ? 'Virtual Hands Expanding'
          : mappedTension < 0.7
          ? 'Virtual Hands Pinching'
          : 'Virtual Hands Balanced',
    });
  };

  // Three.js Scene Setup & Render Loop
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;
    const width = container.clientWidth || (mode === 'background' ? window.innerWidth : 400);
    const height = container.clientHeight || (mode === 'background' ? window.innerHeight : 400);

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      100
    );
    if (mode === 'background') {
      camera.position.set(0, 0, 5.8);
    } else {
      camera.position.set(0, 0.5, 4.8);
    }
    cameraRef.current = camera;

    // 3. WebGL Renderer
    const isHeadless = navigator.webdriver || /HeadlessChrome/i.test(navigator.userAgent);
    const renderer = new THREE.WebGLRenderer({
      antialias: !isHeadless,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isHeadless ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Orbit Controls (Only for interactive hero/standalone mode)
    let controls: OrbitControls | null = null;
    if (interactive && mode !== 'background') {
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enablePan = false;
      controls.minDistance = 1.4;
      controls.maxDistance = 8.5;
      controls.autoRotate = autoRotate;
      controls.autoRotateSpeed = 0.9;
      controlsRef.current = controls;
    }

    // 5. Point Cloud Geometry
    const initialPos = (TEMPLATE_GENERATORS[activeTemplate] || generateHeartPoints)(particleCount);
    currentPositionsRef.current.set(initialPos);
    targetPositionsRef.current.set(initialPos);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(currentPositionsRef.current, 3));

    // Per-particle gradient colors
    const c1 = new THREE.Color(primaryColor);
    const c2 = new THREE.Color(secondaryColor);
    const colors = colorsArrayRef.current;
    for (let i = 0; i < particleCount; i++) {
      const ratio = Math.sin((i / particleCount) * Math.PI);
      const mixed = c1.clone().lerp(c2, ratio);
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle material
    const texture = createGlowPointTexture();
    const material = new THREE.PointsMaterial({
      size: mode === 'background' ? 0.065 : 0.088,
      map: texture,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: mode === 'background' ? 0.65 : 0.95,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    pointsRef.current = points;

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth || 300;
      const h = container.clientHeight || 300;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Computer Vision Hand Tracking canvas
    const cvCanvas = document.createElement('canvas');
    cvCanvas.width = 80;
    cvCanvas.height = 60;
    const cvCtx = cvCanvas.getContext('2d', { willReadFrequently: true });
    cvCanvasRef.current = cvCanvas;

    // Animation Loop
    const clock = new THREE.Clock();
    let prevTime = 0;
    let lastCvTime = 0;
    let frameCounter = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const delta = Math.min(elapsedTime - prevTime, 0.1);
      prevTime = elapsedTime;
      frameCounter++;

      // Real-time Computer Vision Hand Tracking (every ~40ms to avoid throttling GPU)
      if (
        isCameraActive &&
        videoRef.current &&
        videoRef.current.readyState >= 2 &&
        cvCtx &&
        elapsedTime - lastCvTime > 0.04
      ) {
        lastCvTime = elapsedTime;
        try {
          cvCtx.drawImage(videoRef.current, 0, 0, 80, 60);
          const frame = cvCtx.getImageData(0, 0, 80, 60);
          const data = frame.data;

          let leftSumX = 0;
          let leftSumY = 0;
          let leftCount = 0;

          let rightSumX = 0;
          let rightSumY = 0;
          let rightCount = 0;

          for (let y = 0; y < 60; y += 2) {
            for (let x = 0; x < 80; x += 2) {
              const idx = (y * 80 + x) * 4;
              const r = data[idx];
              const g = data[idx + 1];
              const b = data[idx + 2];

              // Skin tone heuristic
              const isSkin =
                r > 60 && g > 40 && b > 20 && r > g && r > b && r - g > 15 && Math.abs(r - g) > 15;

              if (isSkin) {
                if (x < 40) {
                  leftSumX += x;
                  leftSumY += y;
                  leftCount++;
                } else {
                  rightSumX += x;
                  rightSumY += y;
                  rightCount++;
                }
              }
            }
          }

          if (leftCount > 15 && rightCount > 15) {
            const lx = leftSumX / leftCount;
            const ly = leftSumY / leftCount;
            const rx = rightSumX / rightCount;
            const ry = rightSumY / rightCount;

            const dx = rx - lx;
            const dy = ry - ly;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Map hand distance (approx 16px to 50px) to tension 0.2 to 2.8
            const rawTension = THREE.MathUtils.clamp((dist - 16) / 22, 0.2, 2.8);
            targetTensionRef.current = rawTension;

            setHandTrackingInfo({
              handsDetected: 2,
              distance: Math.round(dist),
              tension: Number(rawTension.toFixed(2)),
              status:
                rawTension > 1.4
                  ? 'Hands Expanding'
                  : rawTension < 0.7
                  ? 'Hands Pinching'
                  : 'Balanced',
            });
          } else if (leftCount > 15 || rightCount > 15) {
            const count = Math.max(leftCount, rightCount);
            const singleTension = THREE.MathUtils.clamp(count / 75, 0.5, 1.8);
            targetTensionRef.current = singleTension;

            setHandTrackingInfo({
              handsDetected: 1,
              distance: 0,
              tension: Number(singleTension.toFixed(2)),
              status: 'Single hand detected',
            });
          }
        } catch {
          // Ignore transient capture glitch
        }
      }

      // Smooth tension damping towards target
      if (autoPulse) {
        targetTensionRef.current = 1.0 + Math.sin(elapsedTime * 2.2) * 0.75;
      }

      currentTensionRef.current = THREE.MathUtils.damp(
        currentTensionRef.current,
        targetTensionRef.current,
        6.0,
        delta
      );

      const tension = currentTensionRef.current;

      // Synchronize effective tension with context every few frames so background updates continuously
      if (mode === 'hero' && frameCounter % 4 === 0) {
        setEffectiveTension(Number(tension.toFixed(2)));
      }

      // Morphing particle physics
      const currentPos = currentPositionsRef.current;
      const targetPos = targetPositionsRef.current;
      const isFireworks = activeTemplate === 'fireworks';

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const tx = targetPos[i3];
        const ty = targetPos[i3 + 1];
        const tz = targetPos[i3 + 2];

        let destX = tx * tension;
        let destY = ty * tension;
        let destZ = tz * tension;

        // Dynamic turbulence when tension is high
        if (tension > 1.4) {
          const jitter = (tension - 1.4) * 0.08;
          destX += Math.sin(elapsedTime * 8.0 + i) * jitter;
          destY += Math.cos(elapsedTime * 7.5 + i * 2) * jitter;
          destZ += Math.sin(elapsedTime * 6.8 + i * 3) * jitter;
        }

        if (isFireworks) {
          const burstCycle = (elapsedTime * 0.85 + (i % 25) * 0.04) % 2.5;
          const gravity = burstCycle * burstCycle * 0.45;
          destX = tx * burstCycle * tension;
          destY = ty * burstCycle * tension - gravity;
          destZ = tz * burstCycle * tension;
        }

        currentPos[i3] = THREE.MathUtils.damp(currentPos[i3], destX, 5.5, delta);
        currentPos[i3 + 1] = THREE.MathUtils.damp(currentPos[i3 + 1], destY, 5.5, delta);
        currentPos[i3 + 2] = THREE.MathUtils.damp(currentPos[i3 + 2], destZ, 5.5, delta);
      }

      points.geometry.attributes.position.needsUpdate = true;

      // Group rotation
      if (pointsRef.current) {
        if (activeTemplate === 'galaxy') {
          pointsRef.current.rotation.y += 0.4 * delta;
        } else if (activeTemplate === 'saturn') {
          pointsRef.current.rotation.y += 0.25 * delta;
        } else {
          pointsRef.current.rotation.y += (mode === 'background' ? 0.08 : 0.16) * delta;
        }
      }

      if (controls) {
        controls.update();
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      texture.dispose();
      if (controls) controls.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [
    activeTemplate,
    autoRotate,
    interactive,
    isCameraActive,
    autoPulse,
    mode,
    primaryColor,
    secondaryColor,
    particleCount,
    setEffectiveTension,
  ]);

  // Reset Camera Framing
  const resetCamera = () => {
    if (controlsRef.current && cameraRef.current) {
      controlsRef.current.reset();
      cameraRef.current.position.set(0, 0.5, 4.8);
      controlsRef.current.update();
    }
  };

  const templates: { id: ParticleTemplateId; label: string; icon: React.ReactNode }[] = [
    { id: 'heart', label: 'Heart', icon: <Heart className="w-3.5 h-3.5 text-rose-400" /> },
    { id: 'flower', label: 'Lotus', icon: <Flower2 className="w-3.5 h-3.5 text-pink-400" /> },
    { id: 'saturn', label: 'Saturn', icon: <Globe className="w-3.5 h-3.5 text-amber-400" /> },
    { id: 'buddha', label: 'Buddha', icon: <Atom className="w-3.5 h-3.5 text-emerald-400" /> },
    { id: 'fireworks', label: 'Fireworks', icon: <Flame className="w-3.5 h-3.5 text-orange-400" /> },
    { id: 'galaxy', label: 'Galaxy', icon: <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> },
  ];

  return (
    <div className={`relative w-full h-full flex flex-col ${className}`}>
      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        className={`w-full h-full ${
          mode === 'background'
            ? 'pointer-events-none'
            : 'cursor-grab active:cursor-grabbing select-none'
        }`}
        title={
          mode === 'background'
            ? 'Background 3D Particle Cloud'
            : 'Interactive 3D Particles: Drag to orbit, scroll to zoom'
        }
      />

      {/* Hidden Video element for Camera Gesture Processing */}
      <video ref={videoRef} autoPlay playsInline muted className="hidden" />

      {/* Picture-in-Picture Camera HUD (When Camera Gesture is Enabled) */}
      {isCameraActive && mode !== 'background' && (
        <div className="absolute top-3 left-3 z-30 p-2.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 shadow-2xl flex flex-col space-y-2 max-w-[220px] transition-all">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-[11px] font-bold text-cyan-200 uppercase tracking-wider">
                Hand Vision
              </span>
            </div>
            <button
              onClick={toggleCamera}
              className="text-slate-400 hover:text-white p-0.5 rounded"
              title="Close camera"
            >
              <CameraOff className="w-3 h-3" />
            </button>
          </div>

          <div className="bg-slate-900/90 rounded-xl p-2 border border-cyan-500/20 text-[10px] space-y-1">
            <div className="flex justify-between text-slate-300">
              <span>Hands Detected:</span>
              <strong className="text-cyan-300">{handTrackingInfo.handsDetected} / 2</strong>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Expansion:</span>
              <strong className="text-pink-300">
                {Math.round(currentTensionRef.current * 100)}%
              </strong>
            </div>
            <div className="text-[9px] text-cyan-400/90 italic truncate">
              {handTrackingInfo.status}
            </div>
          </div>

          <p className="text-[9px] text-slate-400 leading-tight">
            Move hands apart to expand particles; bring together to compress into a dense core.
          </p>
        </div>
      )}

      {/* Virtual Dual-Hand Tension Pad (For users without camera or as alternative) */}
      {showVirtualHands && !isCameraActive && mode !== 'background' && (
        <div className="absolute top-3 left-3 z-30 p-3 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-cyan-500/40 shadow-2xl flex flex-col space-y-2 max-w-[230px] animate-in fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              <Hand className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[11px] font-bold text-cyan-200 uppercase tracking-wider">
                Dual Hands Pad
              </span>
            </div>
            <button
              onClick={() => setShowVirtualHands(false)}
              className="text-slate-400 hover:text-white text-xs px-1 rounded"
              title="Close pad"
            >
              ✕
            </button>
          </div>

          <p className="text-[9px] text-slate-300 leading-tight">
            Drag the slider to bring hands together (contract) or spread apart (expand):
          </p>

          {/* Interactive hand distance bar */}
          <div className="relative py-2 flex items-center justify-between px-2 bg-slate-900/90 rounded-xl border border-slate-800">
            <span
              className="text-base transition-transform"
              style={{
                transform: `translateX(${((50 - virtualHandDistance) / 50) * 8}px)`,
              }}
              title="Left hand"
            >
              🫲
            </span>
            <div className="flex-1 mx-2 relative flex items-center">
              <div className="w-full h-1 bg-cyan-950 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400"
                  style={{ width: `${virtualHandDistance}%` }}
                />
              </div>
            </div>
            <span
              className="text-base transition-transform"
              style={{
                transform: `translateX(${((virtualHandDistance - 50) / 50) * 8}px)`,
              }}
              title="Right hand"
            >
              🫱
            </span>
          </div>

          <input
            type="range"
            min="10"
            max="95"
            value={virtualHandDistance}
            onChange={(e) => handleVirtualHandDistanceChange(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
          />

          <div className="flex items-center justify-between text-[10px] text-slate-300">
            <span>Pinch Close</span>
            <span className="font-mono text-cyan-300 font-bold">
              {Math.round(currentTensionRef.current * 100)}%
            </span>
            <span>Spread Wide</span>
          </div>
        </div>
      )}

      {/* Permission error toast */}
      {cameraPermissionError && mode !== 'background' && (
        <div className="absolute top-3 left-3 z-30 p-2.5 rounded-xl bg-rose-950/90 border border-rose-500/40 text-[11px] text-rose-200 max-w-xs shadow-lg">
          {cameraPermissionError}
        </div>
      )}

      {/* Modern Floating Control Dock (Hero & Standalone Mode) */}
      {mode !== 'background' && (
        <div className="absolute bottom-2 inset-x-2 sm:inset-x-4 flex flex-col items-center pointer-events-none z-20">
          {/* Collapse/Expand Floating Tab with Background Reactive Status */}
          <button
            onClick={() => setShowControls(!showControls)}
            className="pointer-events-auto flex items-center space-x-1.5 px-3 py-1 mb-1 rounded-full text-[11px] font-medium transition-all shadow-md backdrop-blur-md border hover:scale-105"
            style={{
              backgroundColor: 'rgba(11, 17, 38, 0.90)',
              borderColor: 'rgba(56, 189, 248, 0.45)',
              color: '#7dd3fc',
            }}
            title={showControls ? 'Collapse controls' : 'Show 3D particle controls'}
          >
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>3D Particle Controls</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-mono">
              BG Reactive
            </span>
            {showControls ? (
              <ChevronDown className="w-3 h-3 ml-1" />
            ) : (
              <ChevronUp className="w-3 h-3 ml-1" />
            )}
          </button>

          {/* Simple & Modern Control Panel */}
          {showControls && (
            <div
              className="pointer-events-auto flex flex-col gap-2 p-2.5 rounded-2xl shadow-2xl border backdrop-blur-md max-w-full w-full sm:w-auto transition-all animate-in fade-in slide-in-from-bottom-2 duration-200"
              style={{
                backgroundColor: 'rgba(10, 16, 38, 0.95)',
                borderColor: 'rgba(56, 189, 248, 0.35)',
              }}
            >
              {/* Row 1: Template Selector Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-1">
                {templates.map((tpl) => (
                  <button
                    key={tpl.id}
                    onClick={() => setActiveTemplate(tpl.id)}
                    className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-xl text-[11px] font-semibold transition-all ${
                      activeTemplate === tpl.id
                        ? 'bg-cyan-500 text-slate-950 shadow-md font-bold scale-105'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tpl.icon}
                    <span>{tpl.label}</span>
                  </button>
                ))}
              </div>

              {/* Row 2: Gesture / Hand Tension Slider & Camera Toggle */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-800/80">
                {/* Hand Tension / Expansion Control */}
                <div className="flex items-center space-x-2 flex-1 min-w-[200px]">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="text-[10px] font-medium text-slate-300 shrink-0">Tension:</span>
                  <input
                    type="range"
                    min="0.2"
                    max="2.6"
                    step="0.05"
                    value={tensionScale}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      setTensionScale(val);
                      setAutoPulse(false);
                    }}
                    className="w-full accent-cyan-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                    title="Manual Hand Tension / Expansion scale"
                  />
                  <span className="text-[10px] font-mono text-cyan-300 shrink-0 w-9 text-right">
                    {tensionScale.toFixed(1)}x
                  </span>
                </div>

                {/* Preset Expansion Quick Buttons */}
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => {
                      setTensionScale(0.3);
                      setAutoPulse(false);
                    }}
                    className="p-1 rounded-lg text-[10px] border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-300"
                    title="Pinch / Contract into core"
                  >
                    <Minimize2 className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => {
                      setTensionScale(1.0);
                      setAutoPulse(false);
                    }}
                    className="px-2 py-0.5 rounded-lg text-[10px] border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-300"
                    title="Reset to balanced 1.0x"
                  >
                    1.0x
                  </button>
                  <button
                    onClick={() => {
                      setTensionScale(2.2);
                      setAutoPulse(false);
                    }}
                    className="p-1 rounded-lg text-[10px] border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-300"
                    title="Expand outward"
                  >
                    <Expand className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => setAutoPulse(!autoPulse)}
                    className={`px-2 py-0.5 rounded-lg text-[10px] font-medium border transition-colors ${
                      autoPulse
                        ? 'bg-pink-500/30 text-pink-200 border-pink-500/60'
                        : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:bg-slate-800'
                    }`}
                    title="Cosmic pulse: automatic rhythmic breathing"
                  >
                    Pulse
                  </button>
                </div>
              </div>

              {/* Row 3: Color Palette Picker & Utilities */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-800/80">
                {/* Color Selector Presets */}
                <div className="flex items-center space-x-1.5">
                  <Palette className="w-3 h-3 text-pink-400 shrink-0" />
                  <div className="flex items-center space-x-1">
                    {PARTICLE_COLOR_PRESETS.map((preset) => (
                      <button
                        key={preset.name}
                        onClick={() => {
                          setPrimaryColor(preset.primary);
                          setSecondaryColor(preset.secondary);
                        }}
                        className="w-4 h-4 rounded-full border border-white/20 transition-transform hover:scale-125"
                        style={{
                          background: `linear-gradient(135deg, ${preset.primary}, ${preset.secondary})`,
                        }}
                        title={preset.name}
                      />
                    ))}
                  </div>

                  {/* Custom Native Color Picker */}
                  <label
                    className="flex items-center cursor-pointer ml-1"
                    title="Custom Primary Color"
                  >
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="sr-only"
                    />
                    <span
                      className="w-4 h-4 rounded-full border border-white/40 ring-1 ring-cyan-400/50 shadow-sm block"
                      style={{ backgroundColor: primaryColor }}
                    />
                  </label>
                  <label
                    className="flex items-center cursor-pointer"
                    title="Custom Secondary Gradient Color"
                  >
                    <input
                      type="color"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="sr-only"
                    />
                    <span
                      className="w-4 h-4 rounded-full border border-white/40 ring-1 ring-pink-400/50 shadow-sm block"
                      style={{ backgroundColor: secondaryColor }}
                    />
                  </label>
                </div>

                {/* Right side: Camera Gesture Toggle, Virtual Hands Toggle & Camera Controls */}
                <div className="flex items-center space-x-1">
                  {/* Camera Hand Gesture Detection Toggle */}
                  <button
                    onClick={toggleCamera}
                    className={`flex items-center space-x-1 px-2.5 py-1 rounded-xl text-[10px] font-semibold border transition-all ${
                      isCameraActive
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md'
                        : 'border-cyan-500/40 bg-cyan-950/40 text-cyan-200 hover:bg-cyan-900/50'
                    }`}
                    title={
                      isCameraActive
                        ? 'Turn off camera hand detection'
                        : 'Detect hand tension & distance using webcam'
                    }
                  >
                    {isCameraActive ? (
                      <>
                        <CameraOff className="w-3 h-3" />
                        <span>Camera ON</span>
                      </>
                    ) : (
                      <>
                        <Camera className="w-3 h-3" />
                        <span>Camera Hands</span>
                      </>
                    )}
                  </button>

                  {/* Dual Hands Gesture Pad Toggle */}
                  <button
                    onClick={() => setShowVirtualHands(!showVirtualHands)}
                    className={`flex items-center space-x-1 px-2 py-1 rounded-xl text-[10px] font-semibold border transition-all ${
                      showVirtualHands
                        ? 'bg-pink-500 text-white border-pink-400 shadow-md'
                        : 'border-pink-500/40 bg-pink-950/40 text-pink-200 hover:bg-pink-900/50'
                    }`}
                    title="Virtual Hand Gesture Pad (for pinch/spread without camera)"
                  >
                    <Hand className="w-3 h-3" />
                    <span>Hands Pad</span>
                  </button>

                  <button
                    onClick={() => setAutoRotate(!autoRotate)}
                    className={`p-1.5 rounded-lg text-[10px] border transition-colors ${
                      autoRotate
                        ? 'bg-cyan-500/20 text-cyan-200 border-cyan-500/40'
                        : 'border-slate-700 bg-slate-900/60 text-slate-400 hover:bg-slate-800'
                    }`}
                    title={autoRotate ? 'Pause rotation' : 'Enable auto-rotation'}
                  >
                    {autoRotate ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  </button>

                  <button
                    onClick={resetCamera}
                    className="p-1.5 rounded-lg text-[10px] border border-slate-700 bg-slate-900/60 text-slate-300 hover:bg-slate-800 transition-colors"
                    title="Reset 3D camera angle"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

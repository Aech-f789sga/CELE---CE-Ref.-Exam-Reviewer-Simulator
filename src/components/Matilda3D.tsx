import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {
  Sparkles,
  PartyPopper,
  RotateCcw,
  BookOpen,
  Play,
  Pause,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Wind,
  Flower2,
} from 'lucide-react';

interface Matilda3DProps {
  mode?: 'background' | 'hero' | 'standalone';
  interactive?: boolean;
  className?: string;
  accent?: string;
}

// Reusable math objects at module scope to avoid garbage collection in requestAnimationFrame
const _mouse = new THREE.Vector2();
const _targetMouse = new THREE.Vector2();

/**
 * Creates soft contact shadow texture for ground pedestal using Matilda's warm espresso tones.
 */
function createContactShadowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const radial = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
    radial.addColorStop(0, 'rgba(15, 10, 12, 0.75)');
    radial.addColorStop(0.35, 'rgba(28, 18, 22, 0.50)');
    radial.addColorStop(0.7, 'rgba(224, 122, 104, 0.14)');
    radial.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, 256, 256);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Creates a glowing study ember / botanical spore particle texture.
 */
function createSparkleTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.25, 'rgba(243, 200, 190, 0.9)');
    grad.addColorStop(0.55, 'rgba(224, 122, 104, 0.45)');
    grad.addColorStop(1, 'rgba(224, 122, 104, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export const Matilda3D: React.FC<Matilda3DProps> = ({
  mode = 'hero',
  interactive = true,
  className = '',
  accent = '#e07a68',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [activeMotion, setActiveMotion] = useState<'idle' | 'celebrate' | 'study'>('idle');
  const [breezeLevel, setBreezeLevel] = useState<'calm' | 'normal' | 'fresh' | 'gust'>('normal');
  const [autoRotate, setAutoRotate] = useState(mode !== 'hero');
  const [showControls, setShowControls] = useState(true);

  // Mutable refs for animation loop
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const confettiRef = useRef<THREE.Points | null>(null);

  // Dynamic references for realistic motion
  const hairNodesRef = useRef<THREE.Object3D[]>([]);
  const plantMeshesRef = useRef<THREE.Mesh[]>([]);
  const headNodeRef = useRef<THREE.Object3D | null>(null);

  // Shader uniforms for GPU vertex waves
  const shaderUniformsRef = useRef<{
    uTime: { value: number };
    uBreeze: { value: number };
    uBreath: { value: number };
  }>({
    uTime: { value: 0 },
    uBreeze: { value: 1.0 },
    uBreath: { value: 0 },
  });

  // Animation state refs
  const motionModeRef = useRef<'idle' | 'celebrate' | 'study'>('idle');
  const celebrateStartTimeRef = useRef<number>(0);
  const autoRotateRef = useRef<boolean>(autoRotate);

  useEffect(() => {
    motionModeRef.current = activeMotion;
  }, [activeMotion]);

  useEffect(() => {
    autoRotateRef.current = autoRotate;
    if (controlsRef.current) {
      controlsRef.current.autoRotate = autoRotate;
    }
  }, [autoRotate]);

  useEffect(() => {
    const multMap: Record<'calm' | 'normal' | 'fresh' | 'gust', number> = {
      calm: 0.4,
      normal: 1.0,
      fresh: 1.8,
      gust: 2.8,
    };
    shaderUniformsRef.current.uBreeze.value = multMap[breezeLevel];
  }, [breezeLevel]);

  // Trigger celebration animation
  const triggerCelebrate = useCallback(() => {
    setActiveMotion('celebrate');
    celebrateStartTimeRef.current = performance.now();

    // Reset back to idle after celebrate animation completes
    setTimeout(() => {
      setActiveMotion((curr) => (curr === 'celebrate' ? 'idle' : curr));
    }, 1800);
  }, []);

  // Reset camera view
  const resetCamera = useCallback(() => {
    if (controlsRef.current && cameraRef.current) {
      controlsRef.current.reset();
      if (mode === 'hero') {
        cameraRef.current.position.set(0, 0.35, 4.2);
        controlsRef.current.target.set(0, 0.05, 0);
      } else {
        cameraRef.current.position.set(0, 0.45, 4.8);
        controlsRef.current.target.set(0, 0, 0);
      }
      controlsRef.current.update();
    }
  }, [mode]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let isMounted = true;
    let animationFrameId: number;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    if (mode === 'hero') {
      camera.position.set(0, 0.35, 4.2);
    } else {
      camera.position.set(0, 0.45, 4.8);
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
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isHeadless;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Orbit Controls (if interactive)
    let controls: OrbitControls | null = null;
    if (interactive && mode !== 'background') {
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enablePan = false;
      controls.minDistance = 2.0;
      controls.maxDistance = 6.5;
      controls.maxPolarAngle = Math.PI / 2 + 0.08;
      controls.minPolarAngle = Math.PI / 6;
      controls.autoRotate = autoRotateRef.current;
      controls.autoRotateSpeed = 1.1;
      controls.target.set(0, 0.05, 0);
      controls.update();
      controlsRef.current = controls;
    }

    // 5. Studio Lighting Rig tailored to Matilda's warm palette
    // Warm sunlight / study lamp key light
    const keyLight = new THREE.DirectionalLight(0xfff3e6, 1.5);
    keyLight.position.set(3.2, 5.0, 3.5);
    keyLight.castShadow = !isHeadless;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    keyLight.shadow.normalBias = 0.02;
    scene.add(keyLight);

    // Soft sage / ambient botanical fill light
    const fillLight = new THREE.DirectionalLight(0xdcf0df, 0.75);
    fillLight.position.set(-3.5, 2.2, -1.2);
    scene.add(fillLight);

    // Warm terracotta rose rim light for silhouette pop
    const rimLight = new THREE.DirectionalLight(0xe07a68, 1.4);
    rimLight.position.set(0, 3.2, -4.2);
    scene.add(rimLight);

    // Deep warm ambient light matching espresso tones
    const ambientLight = new THREE.AmbientLight(0x281c20, 1.15);
    scene.add(ambientLight);

    // 6. Grounding: Terracotta Ceramic Pedestal & Soft Contact Shadow
    const stageGroup = new THREE.Group();
    stageGroup.position.set(0, -1.22, 0);
    scene.add(stageGroup);

    // Pedestal Disc
    const pedestalGeo = new THREE.CylinderGeometry(1.4, 1.48, 0.08, 64);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x24181d, // Deep espresso ceramic
      roughness: 0.35,
      metalness: 0.45,
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.receiveShadow = true;
    stageGroup.add(pedestal);

    // Glowing Pedestal Ring Accent in Matilda's signature terracotta rose
    const ringGeo = new THREE.TorusGeometry(1.41, 0.02, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xe07a68,
      transparent: true,
      opacity: 0.85,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = 0.04;
    stageGroup.add(ringMesh);

    // Soft Contact Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(3.2, 3.2);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: createContactShadowTexture(),
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = 0.045;
    stageGroup.add(shadowMesh);

    // 7. Floating Botanical Study Particles (Sage & Terracotta Embers)
    const particleCount = mode === 'background' ? 120 : 60;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const speedArray = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 0.4 + Math.random() * 2.2;
      const angle = Math.random() * Math.PI * 2;
      posArray[i * 3] = Math.cos(angle) * radius;
      posArray[i * 3 + 1] = -1.2 + Math.random() * 3.5;
      posArray[i * 3 + 2] = Math.sin(angle) * radius;
      speedArray[i] = 0.18 + Math.random() * 0.35;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const sparkleTexture = createSparkleTexture();
    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      map: sparkleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xf3c8be,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // 8. Celebration Confetti Sparkles (Active during celebrate)
    const confettiCount = 90;
    const confettiGeo = new THREE.BufferGeometry();
    const confettiPos = new Float32Array(confettiCount * 3);
    const confettiVel = new Float32Array(confettiCount * 3);
    const confettiColors = new Float32Array(confettiCount * 3);

    // Matilda's signature celebratory palette: terracotta rose, botanical sage, warm amber, cream ivory, deep coral
    const palette = [
      new THREE.Color(0xe07a68), // terracotta rose
      new THREE.Color(0x6c8c6a), // plant sage
      new THREE.Color(0xf59e0b), // warm amber gold
      new THREE.Color(0xfdf6f3), // warm ivory
      new THREE.Color(0xc85e4c), // terracotta clay
    ];

    for (let i = 0; i < confettiCount; i++) {
      confettiPos[i * 3] = 0;
      confettiPos[i * 3 + 1] = -10;
      confettiPos[i * 3 + 2] = 0;

      confettiVel[i * 3] = (Math.random() - 0.5) * 2.4;
      confettiVel[i * 3 + 1] = 1.8 + Math.random() * 2.4;
      confettiVel[i * 3 + 2] = (Math.random() - 0.5) * 2.4;

      const c = palette[i % palette.length];
      confettiColors[i * 3] = c.r;
      confettiColors[i * 3 + 1] = c.g;
      confettiColors[i * 3 + 2] = c.b;
    }

    confettiGeo.setAttribute('position', new THREE.BufferAttribute(confettiPos, 3));
    confettiGeo.setAttribute('color', new THREE.BufferAttribute(confettiColors, 3));

    const confettiMat = new THREE.PointsMaterial({
      size: 0.22,
      map: sparkleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      depthWrite: false,
    });
    const confettiMesh = new THREE.Points(confettiGeo, confettiMat);
    scene.add(confettiMesh);
    confettiRef.current = confettiMesh;

    // 9. Load Matilda 3D glTF Model and inject Realistic Movement Shaders
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);
    modelGroupRef.current = modelGroup;

    const loader = new GLTFLoader();
    loader.load(
      '/3d/Matilda/scene.gltf',
      (gltf) => {
        if (!isMounted) return;

        const root = gltf.scene;

        // Texture and Material Setup
        // Find existing texture
        let baseTexture: THREE.Texture | null = null;
        root.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            const mat = mesh.material as THREE.Material & { map?: THREE.Texture };
            if (mat && mat.map && !baseTexture) {
              baseTexture = mat.map;
              baseTexture.colorSpace = THREE.SRGBColorSpace;
              baseTexture.needsUpdate = true;
            }
          }
        });

        // Create specialized materials for:
        // 1. Hair (tip sway and strand flutter)
        // 2. Plant foliage (leaves flexing and fluttering in breeze)
        // 3. Clothes / Jacket / Skirt (fabric hem ripples + chest breathing expansion)
        // 4. Base body (subtle PBR response)

        const uniforms = shaderUniformsRef.current;

        // Plant Foliage Material: Realistic leaf fluttering & stem flex
        const plantMaterial = new THREE.MeshStandardMaterial({
          map: baseTexture,
          roughness: 0.55,
          metalness: 0.05,
          side: THREE.DoubleSide,
        });
        plantMaterial.onBeforeCompile = (shader) => {
          shader.uniforms.uTime = uniforms.uTime;
          shader.uniforms.uBreeze = uniforms.uBreeze;
          shader.vertexShader = `
            uniform float uTime;
            uniform float uBreeze;
          ` + shader.vertexShader;
          shader.vertexShader = shader.vertexShader.replace(
            '#include <begin_vertex>',
            `
            #include <begin_vertex>
            // Leaf flex factor increases from pot soil (Y ~106) towards leaf tips (Y ~166)
            float leafFactor = clamp((position.y - 106.0) / 55.0, 0.0, 1.0);
            float stemSway = sin(uTime * 1.8 + position.x * 0.08) * 0.9 * uBreeze;
            float tipFlutter = sin(uTime * 5.4 + position.z * 0.28 + position.x * 0.16) * 0.55 * uBreeze;
            transformed.x += (stemSway + tipFlutter * 0.4) * leafFactor;
            transformed.z += cos(uTime * 2.2 + position.y * 0.11) * 0.65 * leafFactor * uBreeze;
            transformed.y += sin(uTime * 3.8 + position.x * 0.18) * 0.28 * leafFactor * uBreeze;
            `
          );
        };

        // Hair Material: Springy bob-cut strand sway & wind ripple
        const hairMaterial = new THREE.MeshStandardMaterial({
          map: baseTexture,
          roughness: 0.65,
          metalness: 0.08,
          side: THREE.DoubleSide,
        });
        hairMaterial.onBeforeCompile = (shader) => {
          shader.uniforms.uTime = uniforms.uTime;
          shader.uniforms.uBreeze = uniforms.uBreeze;
          shader.vertexShader = `
            uniform float uTime;
            uniform float uBreeze;
          ` + shader.vertexShader;
          shader.vertexShader = shader.vertexShader.replace(
            '#include <begin_vertex>',
            `
            #include <begin_vertex>
            // Hair tip factor: roots at head crown (Y ~189) stay firm, strand tips (Y ~162) sway
            float hairTip = clamp((189.5 - position.y) / 27.0, 0.0, 1.0);
            float springFactor = pow(hairTip, 1.35);
            float hairWaveX = sin(uTime * 2.8 + position.y * 0.14 + position.z * 0.09) * 0.85 * uBreeze;
            float hairWaveZ = cos(uTime * 2.3 + position.x * 0.11 + position.y * 0.10) * 0.65 * uBreeze;
            transformed.x += hairWaveX * springFactor;
            transformed.z += hairWaveZ * springFactor;
            `
          );
        };

        // Clothes Material: Jacket hem flutter & chest breathing ripple
        const clothesMaterial = new THREE.MeshStandardMaterial({
          map: baseTexture,
          roughness: 0.68,
          metalness: 0.05,
          side: THREE.DoubleSide,
        });
        clothesMaterial.onBeforeCompile = (shader) => {
          shader.uniforms.uTime = uniforms.uTime;
          shader.uniforms.uBreeze = uniforms.uBreeze;
          shader.uniforms.uBreath = uniforms.uBreath;
          shader.vertexShader = `
            uniform float uTime;
            uniform float uBreeze;
            uniform float uBreath;
          ` + shader.vertexShader;
          shader.vertexShader = shader.vertexShader.replace(
            '#include <begin_vertex>',
            `
            #include <begin_vertex>
            // Hem ripple towards bottom of jacket & skirt (Y < 135)
            float hemFactor = clamp((135.0 - position.y) / 45.0, 0.0, 1.0);
            float clothRipple = sin(uTime * 3.2 + position.x * 0.12 + position.z * 0.15) * 0.38 * uBreeze;
            transformed += normal * clothRipple * hemFactor;
            // Chest breathing expansion zone around ribcage (Y: 115-145)
            float chestZone = smoothstep(112.0, 130.0, position.y) * (1.0 - smoothstep(142.0, 156.0, position.y));
            transformed += normal * (uBreath * 0.3) * chestZone;
            `
          );
        };

        // Base Body / Props Material (Boots, Terracotta Pot, Skin)
        const baseMaterial = new THREE.MeshStandardMaterial({
          map: baseTexture,
          roughness: 0.60,
          metalness: 0.05,
          side: THREE.DoubleSide,
        });

        const hairNodesList: THREE.Object3D[] = [];
        const plantMeshesList: THREE.Mesh[] = [];

        // Traverse scene to assign tailored materials and capture dynamic nodes
        root.traverse((child) => {
          const name = child.name || '';

          // Capture hair root nodes for secondary swinging motion
          if (
            name.includes('hairStrands_v1:Group') ||
            name.includes('hairStrands_v2:hairStrands') ||
            name.includes('hairStrands_v3:Group')
          ) {
            hairNodesList.push(child);
          }

          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = !isHeadless;
            mesh.receiveShadow = true;

            const isHair =
              name.includes('hair') ||
              name.includes('polySurface8_surface') ||
              name.includes('polySurface28') ||
              name.includes('Group52') ||
              name.includes('Group51') ||
              name.includes('Group45');

            const isPlant = [
              'polySurface62',
              'polySurface63',
              'polySurface66',
              'polySurface68',
              'polySurface69',
              'polySurface72',
            ].some((p) => name.includes(p));

            const isClothes = [
              'polySurface74',
              'polySurface75',
              'polySurface76',
              'polySurface80',
              'polySurface102',
            ].some((p) => name.includes(p));

            if (isPlant) {
              mesh.material = plantMaterial;
              plantMeshesList.push(mesh);
            } else if (isHair) {
              mesh.material = hairMaterial;
            } else if (isClothes) {
              mesh.material = clothesMaterial;
            } else {
              mesh.material = baseMaterial;
            }

            if (name.includes('polySurface85')) {
              headNodeRef.current = mesh;
            }
          }
        });

        hairNodesRef.current = hairNodesList;
        plantMeshesRef.current = plantMeshesList;

        // Compute bounding box and normalize scale & position
        const box = new THREE.Box3().setFromObject(root);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        // Target height ~2.35 units
        const targetHeight = 2.35;
        const scale = targetHeight / (size.y || 1);
        root.scale.setScalar(scale);

        // Center X & Z, and align feet so they touch the pedestal at y = -1.18
        root.position.x = -center.x * scale;
        root.position.z = -center.z * scale;
        root.position.y = -box.min.y * scale - 1.18;

        modelGroup.add(root);
        setIsLoading(false);
      },
      undefined,
      (err) => {
        console.error('Failed to load Matilda 3D model:', err);
        if (isMounted) {
          setLoadError('Failed to load 3D model asset');
          setIsLoading(false);
        }
      }
    );

    // Mouse movement parallax for interactive look-at
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      _targetMouse.set(x, y);
    };

    if (interactive) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    // Resize Observer
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

    // 10. Animation Loop: Realistic Movement across Hair, Plant, Clothes, and Posture
    const clock = new THREE.Clock();
    let prevTime = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const delta = Math.min(elapsedTime - prevTime, 0.1);
      prevTime = elapsedTime;

      // Update shader uniforms for GPU vertex waves
      const uniforms = shaderUniformsRef.current;
      uniforms.uTime.value = elapsedTime;
      const breathPhase = Math.sin(elapsedTime * 1.5);
      uniforms.uBreath.value = breathPhase;

      const currentBreeze = uniforms.uBreeze.value;

      // Smooth mouse damping
      _mouse.x = THREE.MathUtils.damp(_mouse.x, _targetMouse.x, 3.5, delta);
      _mouse.y = THREE.MathUtils.damp(_mouse.y, _targetMouse.y, 3.5, delta);

      // Model animations
      if (modelGroupRef.current) {
        const mg = modelGroupRef.current;
        const currentMotion = motionModeRef.current;

        if (currentMotion === 'celebrate') {
          // Cheerful jump & full 360° pirouette spin
          const celebElapsed = (performance.now() - celebrateStartTimeRef.current) / 1000;
          const celebDuration = 1.6;
          const progress = Math.min(celebElapsed / celebDuration, 1.0);

          // Jump arc
          const jumpArc = Math.sin(progress * Math.PI) * 0.45;
          mg.position.y = jumpArc;

          // 360° joyful spin
          mg.rotation.y = progress * Math.PI * 2;

          // Subtle squash & stretch
          const stretch = 1 + Math.sin(progress * Math.PI) * 0.08;
          mg.scale.set(1 / Math.sqrt(stretch), stretch, 1 / Math.sqrt(stretch));

          // Animate confetti burst
          if (confettiRef.current) {
            const positions = confettiRef.current.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < confettiCount; i++) {
              positions[i * 3] += confettiVel[i * 3] * delta;
              positions[i * 3 + 1] += confettiVel[i * 3 + 1] * delta;
              positions[i * 3 + 2] += confettiVel[i * 3 + 2] * delta;
              confettiVel[i * 3 + 1] -= 2.6 * delta; // Gravity
            }
            confettiRef.current.geometry.attributes.position.needsUpdate = true;
          }
        } else if (currentMotion === 'study') {
          // Slow, calm focused bobbing with deep concentration rhythm
          const bob = Math.sin(elapsedTime * 1.1) * 0.03;
          mg.position.y = THREE.MathUtils.damp(mg.position.y, bob, 4, delta);

          // Gentle breathing pulsation
          const breath = 1 + breathPhase * 0.012;
          mg.scale.set(breath, breath, breath);

          // Slight forward lean (exam study focus)
          mg.rotation.x = THREE.MathUtils.damp(mg.rotation.x, 0.08, 3, delta);

          // Subtle head tracking to mouse
          if (interactive) {
            const lookYaw = _mouse.x * 0.18;
            mg.rotation.y = THREE.MathUtils.damp(mg.rotation.y, lookYaw, 3, delta);
          }
        } else {
          // Default: Idle Float & Realistic Human Breathing
          const floatBob = Math.sin(elapsedTime * 1.6) * 0.045;
          mg.position.y = THREE.MathUtils.damp(mg.position.y, floatBob, 4, delta);

          // Gentle chest breathing rhythm
          const breath = 1 + breathPhase * 0.014;
          mg.scale.set(breath, breath, breath);

          // Interactive head & upper body sway tracking mouse cursor
          const targetRotX = -_mouse.y * 0.18;
          const targetRotY = _mouse.x * 0.32 + Math.sin(elapsedTime * 0.7) * 0.035;
          const targetRotZ = -_mouse.x * 0.06 + Math.cos(elapsedTime * 0.8) * 0.02;

          mg.rotation.x = THREE.MathUtils.damp(mg.rotation.x, targetRotX, 3.5, delta);
          mg.rotation.y = THREE.MathUtils.damp(mg.rotation.y, targetRotY, 3.5, delta);
          mg.rotation.z = THREE.MathUtils.damp(mg.rotation.z, targetRotZ, 3.5, delta);
        }

        // Secondary Node-Level Movement:
        // 1. Hair root groups sway with subtle inertia delay
        hairNodesRef.current.forEach((node, i) => {
          const swayPhase = elapsedTime * 2.2 + i * 0.35;
          node.rotation.z = Math.sin(swayPhase) * 0.025 * currentBreeze;
          node.rotation.x = Math.cos(swayPhase * 0.8) * 0.018 * currentBreeze;
        });

        // 2. Plant leaf meshes rocking with subtle natural phase offsets
        plantMeshesRef.current.forEach((leaf, i) => {
          const leafPhase = elapsedTime * 1.8 + i * 0.75;
          leaf.rotation.z = Math.sin(leafPhase) * 0.032 * currentBreeze;
          leaf.rotation.x = Math.cos(leafPhase * 1.1) * 0.022 * currentBreeze;
        });
      }

      // Floating ambient particles drifting upward like botanical spores
      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3 + 1] += speedArray[i] * delta;
          if (positions[i * 3 + 1] > 2.5) {
            positions[i * 3 + 1] = -1.2;
          }
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      // Glowing Pedestal Ring pulse in terracotta
      if (ringMesh) {
        ringMat.opacity = 0.55 + Math.sin(elapsedTime * 2.2) * 0.25;
      }

      // Update OrbitControls
      if (controls) {
        controls.update();
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (interactive) {
        container.removeEventListener('mousemove', handleMouseMove);
      }

      // Dispose Three.js objects
      pedestalGeo.dispose();
      pedestalMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      sparkleTexture.dispose();
      confettiGeo.dispose();
      confettiMat.dispose();

      if (controls) {
        controls.dispose();
      }

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [mode, interactive]);

  // Click on canvas triggers playful cheer
  const handleCanvasClick = () => {
    if (activeMotion === 'idle') {
      triggerCelebrate();
    }
  };

  const breezeOptions: { id: 'calm' | 'normal' | 'fresh' | 'gust'; label: string }[] = [
    { id: 'calm', label: 'Calm' },
    { id: 'normal', label: 'Gentle' },
    { id: 'fresh', label: 'Fresh' },
    { id: 'gust', label: 'Gusty' },
  ];

  return (
    <div className={`relative w-full h-full flex flex-col ${className}`}>
      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        onClick={handleCanvasClick}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        title="Click Matilda to celebrate! Drag to rotate 3D view."
      />

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/60 backdrop-blur-sm rounded-2xl pointer-events-none transition-opacity">
          <div className="w-10 h-10 rounded-full border-2 border-amber-600/30 border-t-amber-500 animate-spin mb-3" />
          <span className="text-xs font-semibold text-rose-200 tracking-wide">
            Loading Matilda 3D...
          </span>
          <span className="text-[10px] text-rose-300/60 mt-0.5">
            Terracotta &amp; Botanical Companion
          </span>
        </div>
      )}

      {/* Error State Fallback */}
      {loadError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-slate-950/80 rounded-2xl">
          <p className="text-xs text-rose-300 font-medium mb-2">{loadError}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-3 py-1.5 rounded-lg bg-rose-500/20 text-rose-300 text-xs hover:bg-rose-500/30 border border-rose-500/40"
          >
            Reload Model
          </button>
        </div>
      )}

      {/* Collapsible Ergonomic Bottom Control Dock (Hero Mode) */}
      {mode === 'hero' && !isLoading && !loadError && (
        <div className="absolute bottom-2 inset-x-2 sm:inset-x-4 flex flex-col items-center pointer-events-none z-20">
          {/* Collapse/Expand Tab */}
          <button
            onClick={() => setShowControls(!showControls)}
            className="pointer-events-auto flex items-center space-x-1.5 px-3 py-1 mb-1 rounded-full text-[11px] font-medium transition-all shadow-md backdrop-blur-md border hover:scale-105"
            style={{
              backgroundColor: 'rgba(36, 26, 32, 0.90)',
              borderColor: 'rgba(224, 122, 104, 0.45)',
              color: '#f3c8be',
            }}
            title={showControls ? 'Collapse dock for cinema view' : 'Show 3D interactive controls'}
          >
            <Flower2 className="w-3 h-3 text-[#e07a68]" />
            <span>Matilda &amp; Plant</span>
            {showControls ? <ChevronDown className="w-3 h-3 ml-1" /> : <ChevronUp className="w-3 h-3 ml-1" />}
          </button>

          {/* Interactive Controls Bar */}
          {showControls && (
            <div
              className="pointer-events-auto flex flex-wrap items-center justify-center gap-1.5 p-2 rounded-2xl shadow-2xl border backdrop-blur-md max-w-full transition-all animate-in fade-in slide-in-from-bottom-2 duration-200"
              style={{
                backgroundColor: 'rgba(36, 26, 32, 0.94)',
                borderColor: 'rgba(224, 122, 104, 0.38)',
              }}
            >
              {/* Motion Action Buttons */}
              <div
                className="flex items-center space-x-1 p-1 rounded-xl border"
                style={{
                  backgroundColor: 'rgba(22, 17, 20, 0.7)',
                  borderColor: 'rgba(94, 63, 75, 0.6)',
                }}
              >
                <button
                  onClick={() => setActiveMotion('idle')}
                  className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                    activeMotion === 'idle'
                      ? 'bg-[#e07a68] text-slate-950 shadow-sm'
                      : 'text-[#f3c8be] hover:text-white hover:bg-white/10'
                  }`}
                  title="Gentle float & breathing animation"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Float</span>
                </button>

                <button
                  onClick={triggerCelebrate}
                  className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                    activeMotion === 'celebrate'
                      ? 'bg-[#e07a68] text-slate-950 shadow-sm'
                      : 'text-[#f3c8be] hover:text-white hover:bg-white/10'
                  }`}
                  title="Celebrate with joyful 360 spin & celebratory confetti"
                >
                  <PartyPopper className="w-3 h-3" />
                  <span>Spin!</span>
                </button>

                <button
                  onClick={() => setActiveMotion('study')}
                  className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                    activeMotion === 'study'
                      ? 'bg-[#e07a68] text-slate-950 shadow-sm'
                      : 'text-[#f3c8be] hover:text-white hover:bg-white/10'
                  }`}
                  title="Calm exam study posture"
                >
                  <BookOpen className="w-3 h-3" />
                  <span>Study</span>
                </button>
              </div>

              {/* Breeze Intensity Selector for Hair, Clothes & Plant */}
              <div
                className="flex items-center space-x-0.5 p-1 rounded-xl border text-[11px]"
                style={{
                  backgroundColor: 'rgba(22, 17, 20, 0.7)',
                  borderColor: 'rgba(94, 63, 75, 0.6)',
                }}
                title="Breeze intensity for clothes, hair, and plant leaves"
              >
                <Wind className="w-3 h-3 text-[#6c8c6a] ml-1 mr-0.5" />
                {breezeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setBreezeLevel(opt.id)}
                    className={`px-2 py-0.5 rounded-lg text-[10px] font-medium transition-all ${
                      breezeLevel === opt.id
                        ? 'bg-[#6c8c6a] text-white font-bold shadow-sm'
                        : 'text-[#ad928c] hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Utility Toggles */}
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setAutoRotate(!autoRotate)}
                  className={`p-1.5 rounded-lg text-[11px] font-medium border transition-colors ${
                    autoRotate
                      ? 'bg-[#e07a68]/30 text-[#f3c8be] border-[#e07a68]/60'
                      : 'bg-[#22171c] text-[#ad928c] border-[#5e3f4b]/60 hover:bg-[#31232c]'
                  }`}
                  title={autoRotate ? 'Pause auto-rotation' : 'Enable auto-rotation'}
                >
                  {autoRotate ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </button>

                <button
                  onClick={resetCamera}
                  className="p-1.5 rounded-lg text-[11px] font-medium border bg-[#22171c] text-[#ad928c] border-[#5e3f4b]/60 hover:bg-[#31232c] transition-colors"
                  title="Reset camera framing"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>

              {/* License / Attribution Badge as required by CC-BY-NC-SA-4.0 */}
              <a
                href="https://sketchfab.com/3d-models/matilda-7ddedfb652bd4ea091bc3de27f98fc02"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[9px] font-mono text-[#ad928c] hover:text-[#f3c8be] transition-colors border border-[#5e3f4b]/40"
                title="Model: Matilda by nicolekeane under CC-BY-NC-SA-4.0"
              >
                <span>nicolekeane</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import {
  Trees,
  CloudSun,
  Flame,
  Shuffle,
  RotateCcw,
  Sparkles,
  Maximize2,
  Compass,
  Play,
  Pause,
} from 'lucide-react';

export type TerrariumBiome = 'alpine' | 'autumn' | 'sakura';

interface TerrariumOrb3DProps {
  mode?: 'background' | 'hero' | 'standalone';
  interactive?: boolean;
  className?: string;
  accent?: string;
}

// Pre-allocated math objects to avoid GC inside render loop
const _vec3 = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);
const _quat = new THREE.Quaternion();
const _raycaster = new THREE.Raycaster();
const _mouse = new THREE.Vector2();

/**
 * Generates a procedural 512x512 walnut wood grain texture.
 */
function createWalnutTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    // Rich walnut wood base gradient
    const grad = ctx.createLinearGradient(0, 0, 512, 0);
    grad.addColorStop(0.0, '#3a1f12');
    grad.addColorStop(0.25, '#4a2918');
    grad.addColorStop(0.5, '#331a0e');
    grad.addColorStop(0.75, '#4d2d1b');
    grad.addColorStop(1.0, '#381e11');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Fine wood grain striations
    for (let y = 0; y < 512; y += 2) {
      const alpha = 0.08 + Math.sin(y * 0.12) * 0.05 + Math.sin(y * 0.03) * 0.04;
      ctx.fillStyle = `rgba(20, 10, 5, ${Math.max(0.02, alpha)})`;
      ctx.fillRect(0, y, 512, 1.5);
    }

    // Wavy growth rings
    for (let i = 0; i < 40; i++) {
      const y0 = Math.random() * 512;
      ctx.beginPath();
      ctx.moveTo(0, y0);
      for (let x = 0; x <= 512; x += 16) {
        const wave = Math.sin((x / 512) * Math.PI * 4 + i) * 6;
        ctx.lineTo(x, y0 + wave);
      }
      ctx.strokeStyle = i % 2 === 0 ? 'rgba(78, 42, 24, 0.18)' : 'rgba(25, 12, 6, 0.22)';
      ctx.lineWidth = 1.8;
      ctx.stroke();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  return texture;
}

/**
 * Creates soft contact shadow texture for walnut stand grounding.
 */
function createContactShadowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const radial = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
    radial.addColorStop(0, 'rgba(0, 0, 0, 0.65)');
    radial.addColorStop(0.4, 'rgba(0, 0, 0, 0.35)');
    radial.addColorStop(0.8, 'rgba(0, 0, 0, 0.08)');
    radial.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, 256, 256);
  }
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export const TerrariumOrb3D: React.FC<TerrariumOrb3DProps> = ({
  mode = 'hero',
  interactive = true,
  className = '',
  accent = '#10b981',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // World Builder State
  const [biome, setBiome] = useState<TerrariumBiome>('alpine');
  const [hearthGlow, setHearthGlow] = useState<boolean>(true);
  const [cloudsActive, setCloudsActive] = useState<boolean>(true);
  const [isAutoSpinning, setIsAutoSpinning] = useState<boolean>(true);
  const [treeCount, setTreeCount] = useState<number>(14);
  const [seed, setSeed] = useState<number>(1);
  const [showControls, setShowControls] = useState<boolean>(mode === 'hero');

  // Internal mutable refs for 3D animation loop
  const sceneStateRef = useRef<{
    scene: THREE.Scene | null;
    camera: THREE.PerspectiveCamera | null;
    renderer: THREE.WebGLRenderer | null;
    planetMesh: THREE.Mesh | null;
    waterMesh: THREE.Mesh | null;
    planetGroup: THREE.Group | null;
    orbGroup: THREE.Group | null;
    treesGroup: THREE.Group | null;
    cloudsGroup: THREE.Group | null;
    fireflies: THREE.Points | null;
    cabinHearthLight: THREE.PointLight | null;
    sproutAnimList: { mesh: THREE.Object3D; targetScale: number; currentScale: number }[];
    isDragging: boolean;
    prevMousePos: { x: number; y: number };
    rotVelocity: { x: number; y: number };
    targetRot: { x: number; y: number };
    currentRot: { x: number; y: number };
    isHovered: boolean;
    autoSpin: boolean;
    hearthOn: boolean;
    cloudsOn: boolean;
    currentBiome: TerrariumBiome;
  }>({
    scene: null,
    camera: null,
    renderer: null,
    planetMesh: null,
    waterMesh: null,
    planetGroup: null,
    orbGroup: null,
    treesGroup: null,
    cloudsGroup: null,
    fireflies: null,
    cabinHearthLight: null,
    sproutAnimList: [],
    isDragging: false,
    prevMousePos: { x: 0, y: 0 },
    rotVelocity: { x: 0, y: 0 },
    targetRot: { x: 0.15, y: -0.3 },
    currentRot: { x: 0.15, y: -0.3 },
    isHovered: false,
    autoSpin: true,
    hearthOn: true,
    cloudsOn: true,
    currentBiome: 'alpine',
  });

  // Keep state refs in sync
  useEffect(() => {
    sceneStateRef.current.autoSpin = isAutoSpinning;
  }, [isAutoSpinning]);

  useEffect(() => {
    sceneStateRef.current.hearthOn = hearthGlow;
    if (sceneStateRef.current.cabinHearthLight) {
      sceneStateRef.current.cabinHearthLight.intensity = hearthGlow ? 2.8 : 0;
    }
  }, [hearthGlow]);

  useEffect(() => {
    sceneStateRef.current.cloudsOn = cloudsActive;
    if (sceneStateRef.current.cloudsGroup) {
      sceneStateRef.current.cloudsGroup.visible = cloudsActive;
    }
  }, [cloudsActive]);

  useEffect(() => {
    sceneStateRef.current.currentBiome = biome;
    recolorPlanetAndTrees(biome);
  }, [biome]);

  // Recolor helper for biomes
  const recolorPlanetAndTrees = useCallback((newBiome: TerrariumBiome) => {
    const s = sceneStateRef.current;
    if (!s.planetMesh || !s.waterMesh) return;

    const geom = s.planetMesh.geometry as THREE.BufferGeometry;
    const colors = geom.getAttribute('color');
    const positions = geom.getAttribute('position');
    if (!colors || !positions) return;

    const count = positions.count;
    const p = new THREE.Vector3();

    // Biome color palettes
    const palette = {
      alpine: {
        deepWater: new THREE.Color('#0369a1'),
        shallowWater: new THREE.Color('#38bdf8'),
        sand: new THREE.Color('#facc15'),
        grass1: new THREE.Color('#15803d'),
        grass2: new THREE.Color('#22c55e'),
        rock: new THREE.Color('#64748b'),
        snow: new THREE.Color('#f8fafc'),
        foliage: ['#166534', '#15803d', '#22c55e', '#14532d'],
      },
      autumn: {
        deepWater: new THREE.Color('#0284c7'),
        shallowWater: new THREE.Color('#7dd3fc'),
        sand: new THREE.Color('#eab308'),
        grass1: new THREE.Color('#b45309'),
        grass2: new THREE.Color('#d97706'),
        rock: new THREE.Color('#78350f'),
        snow: new THREE.Color('#fed7aa'),
        foliage: ['#c2410c', '#ea580c', '#f59e0b', '#b45309'],
      },
      sakura: {
        deepWater: new THREE.Color('#0284c7'),
        shallowWater: new THREE.Color('#67e8f9'),
        sand: new THREE.Color('#fde047'),
        grass1: new THREE.Color('#10b981'),
        grass2: new THREE.Color('#34d399'),
        rock: new THREE.Color('#475569'),
        snow: new THREE.Color('#fdf2f8'),
        foliage: ['#f472b6', '#fb7185', '#fda4af', '#f43f5e'],
      },
    }[newBiome];

    for (let i = 0; i < count; i++) {
      p.fromBufferAttribute(positions, i);
      const r = p.length();
      const col = new THREE.Color();

      if (r < 1.1) {
        col.copy(palette.deepWater);
      } else if (r < 1.13) {
        col.copy(palette.sand);
      } else if (r < 1.25) {
        col.lerpColors(palette.grass1, palette.grass2, (r - 1.13) / 0.12);
      } else if (r < 1.34) {
        col.lerpColors(palette.grass2, palette.rock, (r - 1.25) / 0.09);
      } else {
        col.copy(palette.snow);
      }

      colors.setXYZ(i, col.r, col.g, col.b);
    }
    colors.needsUpdate = true;

    // Recolor water
    const waterMat = s.waterMesh.material as THREE.MeshPhysicalMaterial;
    if (waterMat) {
      waterMat.color.copy(palette.shallowWater);
    }

    // Recolor tree crowns
    if (s.treesGroup) {
      s.treesGroup.children.forEach((tree) => {
        const crown = tree.getObjectByName('tree_crown') as THREE.Mesh;
        if (crown && crown.material) {
          const randCol = palette.foliage[Math.floor(Math.random() * palette.foliage.length)];
          (crown.material as THREE.MeshStandardMaterial).color.set(randCol);
        }
      });
    }
  }, []);

  // Main Three.js lifecycle
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 1.2, mode === 'background' ? 7.2 : 6.2);
    camera.lookAt(0, 0.1, 0);

    // 2. Renderer
    const isHeadless = typeof navigator !== 'undefined' && (/HeadlessChrome/i.test(navigator.userAgent) || navigator.webdriver);
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isHeadless ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;

    // 3. Studio Environment Map (PMREMGenerator + RoomEnvironment)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const roomEnvironment = new RoomEnvironment();
    scene.environment = pmremGenerator.fromScene(roomEnvironment, 0.04).texture;
    roomEnvironment.dispose();
    pmremGenerator.dispose();

    // 4. Lighting Rig
    // Warm Sun Key Light
    const sunLight = new THREE.DirectionalLight('#fffbeb', 2.4);
    sunLight.position.set(4.5, 6.0, 3.8);
    scene.add(sunLight);

    // Soft Ambient Fill Light
    const ambientLight = new THREE.AmbientLight('#a7f3d0', 0.85);
    scene.add(ambientLight);

    // Rim Backlight for Glass Edge Specularity
    const rimLight = new THREE.DirectionalLight('#38bdf8', 1.8);
    rimLight.position.set(-4.0, 3.5, -4.5);
    scene.add(rimLight);

    // 5. Walnut Pedestal Stand Group
    const standGroup = new THREE.Group();
    standGroup.position.set(0, -1.85, 0);
    scene.add(standGroup);

    const walnutTexture = createWalnutTexture();
    walnutTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const walnutMaterial = new THREE.MeshStandardMaterial({
      map: walnutTexture,
      roughness: 0.38,
      metalness: 0.08,
      color: new THREE.Color('#542c16'),
    });

    const brassMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#d4af37'),
      metalness: 0.85,
      roughness: 0.22,
    });

    // Sculpted Walnut Plinth Base
    const basePlinth = new THREE.Mesh(new THREE.CylinderGeometry(1.65, 1.78, 0.24, 36), walnutMaterial);
    basePlinth.position.y = 0.12;
    standGroup.add(basePlinth);

    // Turned Decorative Walnut Neck
    const neckColumn = new THREE.Mesh(new THREE.CylinderGeometry(1.12, 1.45, 0.42, 36), walnutMaterial);
    neckColumn.position.y = 0.45;
    standGroup.add(neckColumn);

    // Upper Walnut Cradle Ring
    const upperCradle = new THREE.Mesh(new THREE.CylinderGeometry(1.48, 1.18, 0.28, 36), walnutMaterial);
    upperCradle.position.y = 0.78;
    standGroup.add(upperCradle);

    // Polished Brass Beveled Ring Collar
    const brassRing = new THREE.Mesh(new THREE.TorusGeometry(1.42, 0.05, 16, 48), brassMaterial);
    brassRing.rotation.x = Math.PI / 2;
    brassRing.position.y = 0.94;
    standGroup.add(brassRing);

    // 3 Brass Curved Claw Supports cradling the orb
    for (let c = 0; c < 3; c++) {
      const angle = (c * Math.PI * 2) / 3;
      const claw = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.45, 0.18), brassMaterial);
      claw.position.set(Math.cos(angle) * 1.42, 1.05, Math.sin(angle) * 1.42);
      claw.rotation.y = -angle;
      claw.rotation.z = 0.15;
      standGroup.add(claw);
    }

    // Contact Ground Shadow
    const shadowTexture = createContactShadowTexture();
    const shadowGeo = new THREE.PlaneGeometry(4.4, 4.4);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      depthWrite: false,
      opacity: 0.65,
    });
    const contactShadow = new THREE.Mesh(shadowGeo, shadowMat);
    contactShadow.rotation.x = -Math.PI / 2;
    contactShadow.position.y = 0.01;
    standGroup.add(contactShadow);

    // 6. Interactive Orb & Terrarium Container Group
    const orbGroup = new THREE.Group();
    orbGroup.position.set(0, 0.2, 0);
    scene.add(orbGroup);

    // Translucent Physical Glass Orb Dome
    const glassGeometry = new THREE.SphereGeometry(2.02, 48, 36);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      transmission: 0.93,
      roughness: 0.04,
      ior: 1.51,
      thickness: 1.4,
      attenuationColor: new THREE.Color('#d1fae5'),
      attenuationDistance: 4.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      transparent: true,
      depthWrite: false,
    });
    const glassOrb = new THREE.Mesh(glassGeometry, glassMaterial);
    glassOrb.renderOrder = 10;
    orbGroup.add(glassOrb);

    // Brass Top Finial with Miniature Suspension Loop
    const topFinial = new THREE.Mesh(new THREE.SphereGeometry(0.14, 20, 20), brassMaterial);
    topFinial.position.y = 2.05;
    orbGroup.add(topFinial);

    const hangingRing = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.035, 12, 24), brassMaterial);
    hangingRing.position.y = 2.22;
    orbGroup.add(hangingRing);

    // 7. Suspended Faceted Terrarium Planet
    const planetGroup = new THREE.Group();
    orbGroup.add(planetGroup);

    // Low-poly Icosahedron Terrain
    const rawPlanetGeo = new THREE.IcosahedronGeometry(1.18, 1);
    const posAttr = rawPlanetGeo.getAttribute('position');
    const vertexCount = posAttr.count;

    // Displace vertices to create mountains, valleys, and oceans
    const pos = new THREE.Vector3();
    const colors = new Float32Array(vertexCount * 3);

    // Pseudo-random deterministic noise based on seed
    for (let i = 0; i < vertexCount; i++) {
      pos.fromBufferAttribute(posAttr, i);
      const len = pos.length();
      pos.normalize();

      // Multi-frequency spherical displacement
      const elevation =
        Math.sin(pos.x * 4.5 + seed * 2.1) * 0.12 +
        Math.cos(pos.y * 3.8 + pos.z * 3.2) * 0.11 +
        Math.sin(pos.z * 5.0 + seed) * 0.08;

      const newRadius = 1.15 + elevation;
      pos.multiplyScalar(newRadius);
      posAttr.setXYZ(i, pos.x, pos.y, pos.z);
    }
    rawPlanetGeo.computeVertexNormals();
    rawPlanetGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const planetMaterial = new THREE.MeshStandardMaterial({
      flatShading: true,
      vertexColors: true,
      roughness: 0.65,
      metalness: 0.08,
    });
    const planetMesh = new THREE.Mesh(rawPlanetGeo, planetMaterial);
    planetGroup.add(planetMesh);

    // Low-Poly Shimmering Crystalline Water Shell
    const waterGeo = new THREE.IcosahedronGeometry(1.15, 1);
    const waterMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#38bdf8'),
      transmission: 0.55,
      roughness: 0.12,
      ior: 1.33,
      flatShading: true,
      transparent: true,
      depthWrite: false,
    });
    const waterMesh = new THREE.Mesh(waterGeo, waterMat);
    planetGroup.add(waterMesh);

    // 8. Miniature World Builder Details (Trees, Cabin, Landmark)
    const treesGroup = new THREE.Group();
    planetGroup.add(treesGroup);

    const trunkMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#452210'),
      roughness: 0.8,
    });

    // Helper: spawn a low-poly tree on planet surface
    const spawnTree = (vPos: THREE.Vector3, treeType: 'pine' | 'oak' = 'pine') => {
      const treeHolder = new THREE.Group();
      treeHolder.position.copy(vPos);

      // Orient upright perpendicular to planet sphere normal
      const normal = vPos.clone().normalize();
      _quat.setFromUnitVectors(_up, normal);
      treeHolder.quaternion.copy(_quat);

      // Trunk
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.03, 0.14, 5), trunkMat);
      trunk.position.y = 0.07;
      treeHolder.add(trunk);

      // Foliage crown
      let crown: THREE.Mesh;
      const foliageColor = '#15803d';

      if (treeType === 'pine') {
        const pineCrownMat = new THREE.MeshStandardMaterial({
          color: new THREE.Color(foliageColor),
          flatShading: true,
          roughness: 0.6,
        });
        crown = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.22, 5), pineCrownMat);
        crown.position.y = 0.21;
      } else {
        const oakCrownMat = new THREE.MeshStandardMaterial({
          color: new THREE.Color(foliageColor),
          flatShading: true,
          roughness: 0.55,
        });
        crown = new THREE.Mesh(new THREE.DodecahedronGeometry(0.08, 0), oakCrownMat);
        crown.position.y = 0.18;
      }
      crown.name = 'tree_crown';
      treeHolder.add(crown);

      // Animate scale up on spawn
      treeHolder.scale.set(0.01, 0.01, 0.01);
      sceneStateRef.current.sproutAnimList.push({
        mesh: treeHolder,
        targetScale: 0.85 + Math.random() * 0.35,
        currentScale: 0.01,
      });

      treesGroup.add(treeHolder);
    };

    // Plant initial trees on land facets
    const tempV = new THREE.Vector3();
    let treesPlanted = 0;
    for (let i = 0; i < vertexCount; i += 2) {
      tempV.fromBufferAttribute(posAttr, i);
      const r = tempV.length();
      if (r >= 1.15 && r <= 1.32 && treesPlanted < treeCount) {
        spawnTree(tempV.clone(), treesPlanted % 3 === 0 ? 'oak' : 'pine');
        treesPlanted++;
      }
    }

    // Cozy Miniature Wooden Cabin / Cottage
    const cabinGroup = new THREE.Group();
    // Locate a nice grassy facet
    let cabinPos = new THREE.Vector3(0.5, 0.85, 0.7);
    for (let i = 0; i < vertexCount; i++) {
      tempV.fromBufferAttribute(posAttr, i);
      if (tempV.length() > 1.22 && tempV.y > 0.4) {
        cabinPos = tempV.clone();
        break;
      }
    }
    cabinGroup.position.copy(cabinPos);
    _quat.setFromUnitVectors(_up, cabinPos.clone().normalize());
    cabinGroup.quaternion.copy(_quat);

    // Cabin Walls
    const walls = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.12, 0.18),
      new THREE.MeshStandardMaterial({ color: '#542d19', roughness: 0.7 })
    );
    walls.position.y = 0.06;
    cabinGroup.add(walls);

    // Peaked Roof
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(0.16, 0.11, 4),
      new THREE.MeshStandardMaterial({ color: '#292524', roughness: 0.65, flatShading: true })
    );
    roof.position.y = 0.16;
    roof.rotation.y = Math.PI / 4;
    cabinGroup.add(roof);

    // Stone Chimney
    const chimney = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.14, 0.04),
      new THREE.MeshStandardMaterial({ color: '#78716c', roughness: 0.9 })
    );
    chimney.position.set(0.05, 0.18, 0.04);
    cabinGroup.add(chimney);

    // Glowing Orange Window
    const windowMat = new THREE.MeshBasicMaterial({ color: '#fbbf24' });
    const cabinWindow = new THREE.Mesh(new THREE.PlaneGeometry(0.05, 0.05), windowMat);
    cabinWindow.position.set(0, 0.06, 0.091);
    cabinGroup.add(cabinWindow);

    // Cozy Hearth Warm Point Light
    const cabinHearthLight = new THREE.PointLight('#f59e0b', 2.8, 3.2);
    cabinHearthLight.position.set(0, 0.15, 0);
    cabinGroup.add(cabinHearthLight);

    planetGroup.add(cabinGroup);

    // Miniature Civil Engineering Surveying Benchmark / Tripod
    const tripodGroup = new THREE.Group();
    let tripodPos = new THREE.Vector3(-0.7, 0.7, -0.6);
    for (let i = 0; i < vertexCount; i++) {
      tempV.fromBufferAttribute(posAttr, i);
      if (tempV.length() > 1.25 && tempV.x < -0.3) {
        tripodPos = tempV.clone();
        break;
      }
    }
    tripodGroup.position.copy(tripodPos);
    _quat.setFromUnitVectors(_up, tripodPos.clone().normalize());
    tripodGroup.quaternion.copy(_quat);

    // 3 Legs
    for (let leg = 0; leg < 3; leg++) {
      const legAngle = (leg * Math.PI * 2) / 3;
      const legMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.16, 4), brassMaterial);
      legMesh.position.set(Math.cos(legAngle) * 0.04, 0.08, Math.sin(legAngle) * 0.04);
      legMesh.rotation.z = Math.cos(legAngle) * 0.2;
      legMesh.rotation.x = Math.sin(legAngle) * 0.2;
      tripodGroup.add(legMesh);
    }
    // Surveying transit head
    const transit = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.03, 0.03), brassMaterial);
    transit.position.y = 0.16;
    tripodGroup.add(transit);
    planetGroup.add(tripodGroup);

    // 9. Low-Poly Clustered Fluffy Clouds
    const cloudsGroup = new THREE.Group();
    const cloudMat = new THREE.MeshStandardMaterial({
      color: '#f8fafc',
      roughness: 0.35,
      flatShading: true,
      transparent: true,
      opacity: 0.88,
    });

    for (let cl = 0; cl < 4; cl++) {
      const cloudPuffGroup = new THREE.Group();
      const puffCount = 3 + Math.floor(Math.random() * 3);
      for (let p = 0; p < puffCount; p++) {
        const puff = new THREE.Mesh(new THREE.DodecahedronGeometry(0.12 + Math.random() * 0.06, 0), cloudMat);
        puff.position.set((p - 1) * 0.11, Math.random() * 0.04, Math.random() * 0.05);
        cloudPuffGroup.add(puff);
      }
      const cloudAngle = (cl * Math.PI) / 2 + 0.3;
      const cloudRadius = 1.58 + (cl % 2) * 0.15;
      cloudPuffGroup.position.set(
        Math.cos(cloudAngle) * cloudRadius,
        0.35 + (cl % 2) * 0.45 - (cl === 3 ? 0.8 : 0),
        Math.sin(cloudAngle) * cloudRadius
      );
      cloudPuffGroup.lookAt(0, cloudPuffGroup.position.y, 0);
      cloudsGroup.add(cloudPuffGroup);
    }
    orbGroup.add(cloudsGroup);

    // 10. Floating Bioluminescent Fireflies inside the Orb
    const fireflyCount = 28;
    const fireflyGeo = new THREE.BufferGeometry();
    const fireflyPositions = new Float32Array(fireflyCount * 3);
    const fireflySpeeds = new Float32Array(fireflyCount);

    for (let f = 0; f < fireflyCount; f++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const dist = 1.25 + Math.random() * 0.65; // suspended inside orb
      const fx = dist * Math.sin(phi) * Math.cos(theta);
      const fy = dist * Math.sin(phi) * Math.sin(theta);
      const fz = dist * Math.cos(phi);

      fireflyPositions[f * 3] = fx;
      fireflyPositions[f * 3 + 1] = fy;
      fireflyPositions[f * 3 + 2] = fz;
      fireflySpeeds[f] = 0.5 + Math.random() * 1.5;
    }
    fireflyGeo.setAttribute('position', new THREE.BufferAttribute(fireflyPositions, 3));

    const fireflyMat = new THREE.PointsMaterial({
      color: new THREE.Color(accent),
      size: 0.06,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const fireflies = new THREE.Points(fireflyGeo, fireflyMat);
    orbGroup.add(fireflies);

    // Store references in state
    sceneStateRef.current = {
      ...sceneStateRef.current,
      scene,
      camera,
      renderer,
      planetMesh,
      waterMesh,
      planetGroup,
      orbGroup,
      treesGroup,
      cloudsGroup,
      fireflies,
      cabinHearthLight,
    };

    // Initial Biome Color Sync
    recolorPlanetAndTrees(biome);

    // 11. Interactive Pointer Handlers (Rotate / Click to Sprout)
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!interactive) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      sceneStateRef.current.isDragging = true;
      sceneStateRef.current.prevMousePos = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      if (sceneStateRef.current.isDragging) {
        const deltaX = clientX - sceneStateRef.current.prevMousePos.x;
        const deltaY = clientY - sceneStateRef.current.prevMousePos.y;

        sceneStateRef.current.targetRot.y += deltaX * 0.008;
        sceneStateRef.current.targetRot.x += deltaY * 0.008;

        // Clamp vertical tilt so stand stays upright
        sceneStateRef.current.targetRot.x = Math.max(
          -0.6,
          Math.min(0.65, sceneStateRef.current.targetRot.x)
        );

        sceneStateRef.current.rotVelocity = {
          x: deltaY * 0.004,
          y: deltaX * 0.004,
        };

        sceneStateRef.current.prevMousePos = { x: clientX, y: clientY };
      }
    };

    const onPointerUp = () => {
      sceneStateRef.current.isDragging = false;
    };

    // Sprout new tree on click
    const onClick = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      _mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      _mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      _raycaster.setFromCamera(_mouse, camera);
      const intersects = _raycaster.intersectObject(planetMesh, false);
      if (intersects.length > 0) {
        const hit = intersects[0];
        if (hit.point) {
          // Convert hit point into planetGroup local space
          const localHit = planetGroup.worldToLocal(hit.point.clone());
          spawnTree(localHit, Math.random() > 0.5 ? 'oak' : 'pine');
          setTreeCount((c) => c + 1);
        }
      }
    };

    canvas.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    canvas.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);
    canvas.addEventListener('click', onClick);

    // 12. Animation Game Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Inertia & Damping
      if (!sceneStateRef.current.isDragging) {
        if (sceneStateRef.current.autoSpin) {
          sceneStateRef.current.targetRot.y += 0.004;
        }
        // Momentum damping
        sceneStateRef.current.targetRot.y += sceneStateRef.current.rotVelocity.y;
        sceneStateRef.current.targetRot.x += sceneStateRef.current.rotVelocity.x;
        sceneStateRef.current.rotVelocity.x *= 0.92;
        sceneStateRef.current.rotVelocity.y *= 0.92;
      }

      // Smooth damping interpolation
      sceneStateRef.current.currentRot.x = THREE.MathUtils.damp(
        sceneStateRef.current.currentRot.x,
        sceneStateRef.current.targetRot.x,
        8,
        delta
      );
      sceneStateRef.current.currentRot.y = THREE.MathUtils.damp(
        sceneStateRef.current.currentRot.y,
        sceneStateRef.current.targetRot.y,
        8,
        delta
      );

      // Apply rotation to planet inside orb
      if (planetGroup) {
        planetGroup.rotation.y = sceneStateRef.current.currentRot.y;
        planetGroup.rotation.x = sceneStateRef.current.currentRot.x;
        // Subtle cozy hovering bobbing motion
        planetGroup.position.y = Math.sin(elapsed * 1.6) * 0.04;
      }

      // Slow orbital drift of clouds
      if (cloudsGroup && sceneStateRef.current.cloudsOn) {
        cloudsGroup.rotation.y = elapsed * 0.08;
      }

      // Floating firefly drift
      if (fireflies) {
        const positions = fireflies.geometry.attributes.position;
        if (positions) {
          const arr = positions.array as Float32Array;
          for (let f = 0; f < fireflyCount; f++) {
            const spd = fireflySpeeds[f];
            arr[f * 3 + 1] += Math.sin(elapsed * spd + f) * 0.0018;
            arr[f * 3] += Math.cos(elapsed * (spd * 0.8) + f) * 0.0012;
          }
          positions.needsUpdate = true;
        }
      }

      // Tree Sprout Animations
      const anims = sceneStateRef.current.sproutAnimList;
      for (let i = anims.length - 1; i >= 0; i--) {
        const item = anims[i];
        item.currentScale += (item.targetScale - item.currentScale) * 0.15;
        item.mesh.scale.set(item.currentScale, item.currentScale, item.currentScale);
        if (Math.abs(item.targetScale - item.currentScale) < 0.01) {
          item.mesh.scale.set(item.targetScale, item.targetScale, item.targetScale);
          anims.splice(i, 1);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // 13. Responsive Resize
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth || 400;
      const h = container.clientHeight || 400;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 14. Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      canvas.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      canvas.removeEventListener('click', onClick);

      // Dispose Three.js resources
      rawPlanetGeo.dispose();
      planetMaterial.dispose();
      waterGeo.dispose();
      waterMat.dispose();
      glassGeometry.dispose();
      glassMaterial.dispose();
      walnutTexture.dispose();
      shadowTexture.dispose();
      walnutMaterial.dispose();
      brassMaterial.dispose();
      renderer.dispose();
    };
  }, [mode, seed, interactive]);

  // Reset / Reseed World
  const handleRandomizeWorld = () => {
    setSeed((s) => s + 1);
    setTreeCount(14);
  };

  const handleResetView = () => {
    sceneStateRef.current.targetRot = { x: 0.15, y: -0.3 };
    sceneStateRef.current.rotVelocity = { x: 0, y: 0 };
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none overflow-hidden ${className}`}
    >
      {/* 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing outline-none"
        title="Drag to rotate the terrarium orb • Click to plant a miniature tree!"
      />

      {/* Semi-Interactive Miniature World Builder Toolbar */}
      {interactive && (
        <div className="absolute bottom-3 left-3 right-3 sm:left-auto sm:right-3 flex flex-col items-end gap-2 pointer-events-auto z-20">
          {/* Main Toggle Badge */}
          <div className="flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-emerald-500/30 text-emerald-400 shadow-xl">
            <Compass className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
            <span className="text-[11px] font-bold tracking-wide uppercase font-arnie">
              Cozy Terrarium Builder
            </span>
            <button
              type="button"
              onClick={() => setShowControls((v) => !v)}
              className="ml-1 text-[10px] text-slate-300 hover:text-white px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 transition-colors"
            >
              {showControls ? 'Hide HUD' : 'Controls'}
            </button>
          </div>

          {/* Expanded Controls Panel */}
          {showControls && (
            <div className="bg-slate-900/90 backdrop-blur-lg border border-emerald-500/30 rounded-2xl p-3 shadow-2xl flex flex-wrap sm:flex-col gap-2 max-w-xs animate-in fade-in slide-in-from-bottom-2">
              {/* Biome Selector */}
              <div className="flex items-center justify-between w-full text-xs pb-1 border-b border-slate-800">
                <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
                  Biome Theme
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setBiome('alpine')}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                      biome === 'alpine'
                        ? 'bg-emerald-500 text-slate-950 shadow-sm'
                        : 'bg-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    🌲 Alpine
                  </button>
                  <button
                    type="button"
                    onClick={() => setBiome('autumn')}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                      biome === 'autumn'
                        ? 'bg-amber-500 text-slate-950 shadow-sm'
                        : 'bg-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    🍂 Autumn
                  </button>
                  <button
                    type="button"
                    onClick={() => setBiome('sakura')}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                      biome === 'sakura'
                        ? 'bg-pink-500 text-slate-950 shadow-sm'
                        : 'bg-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    🌸 Sakura
                  </button>
                </div>
              </div>

              {/* Action Toggles */}
              <div className="grid grid-cols-2 gap-1.5 w-full text-[11px]">
                <button
                  type="button"
                  onClick={() => setHearthGlow((h) => !h)}
                  className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl border text-left transition-colors ${
                    hearthGlow
                      ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400'
                  }`}
                  title="Toggle cozy cabin fireplace glow"
                >
                  <Flame className="w-3.5 h-3.5 shrink-0" />
                  <span>{hearthGlow ? 'Hearth Lit' : 'Hearth Dim'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCloudsActive((c) => !c)}
                  className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl border text-left transition-colors ${
                    cloudsActive
                      ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400'
                  }`}
                  title="Toggle orbiting clouds"
                >
                  <CloudSun className="w-3.5 h-3.5 shrink-0" />
                  <span>{cloudsActive ? 'Clouds On' : 'Clear Sky'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsAutoSpinning((s) => !s)}
                  className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl border text-left transition-colors ${
                    isAutoSpinning
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400'
                  }`}
                  title="Toggle orb auto-rotation"
                >
                  {isAutoSpinning ? (
                    <Pause className="w-3.5 h-3.5 shrink-0" />
                  ) : (
                    <Play className="w-3.5 h-3.5 shrink-0" />
                  )}
                  <span>{isAutoSpinning ? 'Auto-Spin' : 'Paused'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleRandomizeWorld}
                  className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl border border-slate-700 bg-slate-800/70 hover:bg-slate-700 text-slate-200 transition-colors"
                  title="Generate a new faceted planet terrain"
                >
                  <Shuffle className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Reseed</span>
                </button>
              </div>

              {/* Status and Click-to-plant prompt */}
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800 w-full font-tech-mono">
                <span className="flex items-center space-x-1">
                  <Trees className="w-3 h-3 text-emerald-400" />
                  <span>Flora: {treeCount} planted</span>
                </span>
                <button
                  type="button"
                  onClick={handleResetView}
                  className="flex items-center space-x-1 text-slate-400 hover:text-white"
                  title="Reset view angle"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Angle</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

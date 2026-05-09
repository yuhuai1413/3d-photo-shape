import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export type PhotoLayoutVariant = 'cylinder' | 'polyhedron' | 'spiral';

interface PhotoLayout3DProps {
  images: string[];
  variant: PhotoLayoutVariant;
}

type PhotoPlacement = {
  position: THREE.Vector3;
  rotation: THREE.Euler;
  width: number;
  height: number;
};

type ScreenPoint = { x: number; y: number };
type ScreenRect = { left: number; top: number; width: number; height: number };
type MeshProjection = { rect: ScreenRect; clipPath: string };

const CYLINDER_PHOTOS_PER_RING = 16;

export default function PhotoLayout3D({ images, variant }: PhotoLayout3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(66, width / height, 0.1, 1000);
    camera.position.set(0, 0, variant === 'spiral' ? 25 : 28);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.touchAction = 'none';
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.7;
    controls.zoomSpeed = 1.1;
    controls.minDistance = 8;
    controls.maxDistance = 55;
    controls.enablePan = false;
    controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_ROTATE };

    const group = new THREE.Group();
    scene.add(group);

    const textures: THREE.Texture[] = [];
    const materials: THREE.Material[] = [];
    const meshes: THREE.Mesh[] = [];
    let previewAnimation: Animation | null = null;
    let activePreview: { element: HTMLImageElement; mesh: THREE.Mesh; index: number } | null = null;
    let selectedMesh: THREE.Mesh | null = null;

    const previewLayer = document.createElement('div');
    previewLayer.style.position = 'absolute';
    previewLayer.style.inset = '0';
    previewLayer.style.pointerEvents = 'none';
    previewLayer.style.zIndex = '20';
    container.appendChild(previewLayer);

    const createTexture = (url: string, onReady: (texture: THREE.CanvasTexture) => void) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const size = 512;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, size, size);
        const scale = Math.min(size / img.width, size / img.height);
        const drawWidth = img.width * scale;
        const drawHeight = img.height * scale;
        ctx.drawImage(img, (size - drawWidth) / 2, (size - drawHeight) / 2, drawWidth, drawHeight);

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        onReady(texture);
      };
      img.src = url;
    };

    const getCylinderPlacement = (index: number, total: number): PhotoPlacement => {
      const columns = CYLINDER_PHOTOS_PER_RING;
      const rows = Math.ceil(total / columns);
      const column = index % columns;
      const row = Math.floor(index / columns);
      const angle = (column / columns) * Math.PI * 2;
      const radius = 9.6;
      const verticalGap = 2.2;
      const y = (rows - 1) * verticalGap * 0.5 - row * verticalGap;
      const position = new THREE.Vector3(Math.sin(angle) * radius, y, Math.cos(angle) * radius);
      const rotation = new THREE.Euler(0, angle, 0);
      return { position, rotation, width: 2.35, height: 1.72 };
    };

    const getPolyhedronPlacement = (index: number, total: number): PhotoPlacement => {
      const faceIndex = index % 6;
      const facePhotoCount = Math.ceil(total / 6);
      const indexInFace = Math.floor(index / 6);
      const grid = Math.ceil(Math.sqrt(facePhotoCount));
      const row = Math.floor(indexInFace / grid);
      const column = indexInFace % grid;
      const cubeHalfSize = 6.6;
      const cellSize = (cubeHalfSize * 2) / grid;
      const photoSize = cellSize * 0.9;
      const offsetX = -cubeHalfSize + cellSize * (column + 0.5);
      const offsetY = cubeHalfSize - cellSize * (row + 0.5);
      const outwardOffset = 0.05;

      const faceConfigs = [
        {
          position: new THREE.Vector3(offsetX, offsetY, cubeHalfSize + outwardOffset),
          rotation: new THREE.Euler(0, 0, 0),
        },
        {
          position: new THREE.Vector3(-offsetX, offsetY, -cubeHalfSize - outwardOffset),
          rotation: new THREE.Euler(0, Math.PI, 0),
        },
        {
          position: new THREE.Vector3(cubeHalfSize + outwardOffset, offsetY, -offsetX),
          rotation: new THREE.Euler(0, Math.PI / 2, 0),
        },
        {
          position: new THREE.Vector3(-cubeHalfSize - outwardOffset, offsetY, offsetX),
          rotation: new THREE.Euler(0, -Math.PI / 2, 0),
        },
        {
          position: new THREE.Vector3(offsetX, cubeHalfSize + outwardOffset, -offsetY),
          rotation: new THREE.Euler(-Math.PI / 2, 0, 0),
        },
        {
          position: new THREE.Vector3(offsetX, -cubeHalfSize - outwardOffset, offsetY),
          rotation: new THREE.Euler(Math.PI / 2, 0, 0),
        },
      ];

      return { ...faceConfigs[faceIndex], width: photoSize, height: photoSize };
    };

    const getSpiralPlacement = (index: number, total: number): PhotoPlacement => {
      const progress = total === 1 ? 0.5 : index / (total - 1);
      const turns = Math.max(2.8, Math.min(7.5, total / 12));
      const angle = progress * Math.PI * 2 * turns;
      const radius = 8.8;
      const y = (0.5 - progress) * Math.max(12, Math.min(18, total * 0.18));
      const position = new THREE.Vector3(Math.sin(angle) * radius, y, Math.cos(angle) * radius);
      const rotation = new THREE.Euler(0, angle, 0);
      return { position, rotation, width: 2.1, height: 1.55 };
    };

    const getPlacement = (index: number, total: number) => {
      if (variant === 'cylinder') return getCylinderPlacement(index, total);
      if (variant === 'polyhedron') return getPolyhedronPlacement(index, total);
      return getSpiralPlacement(index, total);
    };

    images.forEach((url, index) => {
      const placement = getPlacement(index, images.length);
      const geometry = new THREE.PlaneGeometry(placement.width, placement.height, 1, 1);
      const material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        transparent: true,
        alphaTest: 0.01,
        toneMapped: false,
        color: 0xf8f7fb,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(placement.position);
      mesh.rotation.copy(placement.rotation);
      mesh.userData.imageIndex = index;
      group.add(mesh);
      meshes.push(mesh);
      materials.push(material);

      createTexture(url, (texture) => {
        textures.push(texture);
        material.map = texture;
        material.color.set(0xffffff);
        material.needsUpdate = true;
        mesh.userData.texture = texture;
      });
    });

    const setPhotoVisible = (mesh: THREE.Mesh, visible: boolean) => {
      mesh.visible = visible;
    };

    const worldPointToScreen = (point: THREE.Vector3) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const projected = point.clone().project(camera);
      return {
        x: ((projected.x + 1) / 2) * rect.width,
        y: ((1 - projected.y) / 2) * rect.height,
      };
    };

    const getSignedArea = (corners: ScreenPoint[]) => (
      corners.reduce((sum, corner, index) => {
        const next = corners[(index + 1) % corners.length];
        return sum + corner.x * next.y - corner.y * next.x;
      }, 0)
    );

    const getMeshProjection = (mesh: THREE.Mesh): MeshProjection => {
      const geometry = mesh.geometry as THREE.BufferGeometry;
      const position = geometry.getAttribute('position');
      const cornerIndices = [0, 1, 3, 2];
      const unitPoints = [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 0, y: 1 },
      ];
      const points = cornerIndices.map((cornerIndex) => {
        const point = new THREE.Vector3(
          position.getX(cornerIndex),
          position.getY(cornerIndex),
          position.getZ(cornerIndex),
        );
        mesh.localToWorld(point);
        return worldPointToScreen(point);
      });
      const orderedPoints = getSignedArea(points) >= 0 ? points : points.toReversed();
      const orderedUnitPoints = getSignedArea(points) >= 0 ? unitPoints : unitPoints.toReversed();
      const minX = Math.min(...orderedPoints.map((point) => point.x));
      const maxX = Math.max(...orderedPoints.map((point) => point.x));
      const minY = Math.min(...orderedPoints.map((point) => point.y));
      const maxY = Math.max(...orderedPoints.map((point) => point.y));
      const rect = {
        left: minX,
        top: minY,
        width: Math.max(1, maxX - minX),
        height: Math.max(1, maxY - minY),
      };
      const clipPath = `polygon(${orderedPoints
        .map((point) => {
          const x = THREE.MathUtils.clamp(((point.x - rect.left) / rect.width) * 100, 0, 100);
          const y = THREE.MathUtils.clamp(((point.y - rect.top) / rect.height) * 100, 0, 100);
          return `${x}% ${y}%`;
        })
        .join(', ')})`;
      const fullClipPath = `polygon(${orderedUnitPoints
        .map((point) => `${point.x * 100}% ${point.y * 100}%`)
        .join(', ')})`;

      return { rect, clipPath: clipPath || fullClipPath };
    };

    const getPreviewRect = (aspectRatio = 1) => {
      const viewportWidth = renderer.domElement.clientWidth;
      const viewportHeight = renderer.domElement.clientHeight;
      const maxWidth = Math.min(viewportWidth * 0.78, 860);
      const maxHeight = Math.min(viewportHeight * 0.78, 860);
      const previewWidth = Math.min(maxWidth, maxHeight * aspectRatio);
      const previewHeight = previewWidth / aspectRatio;
      return {
        left: (viewportWidth - previewWidth) / 2,
        top: (viewportHeight - previewHeight) / 2,
        width: previewWidth,
        height: previewHeight,
      };
    };

    const getCurrentElementRect = (element: HTMLImageElement) => {
      const containerRect = renderer.domElement.getBoundingClientRect();
      const rect = element.getBoundingClientRect();
      return {
        left: rect.left - containerRect.left,
        top: rect.top - containerRect.top,
        width: rect.width,
        height: rect.height,
      };
    };

    const rectToTransform = (rect: ScreenRect, base: ScreenRect) => {
      const rectCenterX = rect.left + rect.width / 2;
      const rectCenterY = rect.top + rect.height / 2;
      const baseCenterX = base.left + base.width / 2;
      const baseCenterY = base.top + base.height / 2;
      const translateX = rectCenterX - baseCenterX;
      const translateY = rectCenterY - baseCenterY;
      const scaleX = rect.width / base.width;
      const scaleY = rect.height / base.height;
      return `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;
    };

    const animatePreview = (
      element: HTMLImageElement,
      from: ScreenRect,
      to: ScreenRect,
      direction: 'open' | 'close',
      fromClipPath = 'inset(0)',
      toClipPath = 'inset(0)',
    ) => {
      previewAnimation?.cancel();
      const fromTransform = rectToTransform(from, to);

      element.style.left = `${to.left}px`;
      element.style.top = `${to.top}px`;
      element.style.width = `${to.width}px`;
      element.style.height = `${to.height}px`;
      element.style.opacity = '1';
      element.style.transform = fromTransform;
      element.style.clipPath = fromClipPath;
      previewAnimation = element.animate(
        [
          {
            transform: fromTransform,
            clipPath: fromClipPath,
            opacity: 1,
            borderRadius: direction === 'open' ? '16px' : '28px',
          },
          {
            transform: 'translate(0px, 0px) scale(1, 1)',
            clipPath: toClipPath,
            opacity: 1,
            borderRadius: direction === 'open' ? '28px' : '16px',
          },
        ],
        {
          duration: 480,
          easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
          fill: 'forwards',
          composite: 'replace',
        },
      );
      return previewAnimation;
    };

    const hidePreview = () => {
      if (!activePreview) return;
      const { element, mesh } = activePreview;
      const currentRect = getCurrentElementRect(element);
      controls.update();
      renderer.render(scene, camera);
      const targetProjection = getMeshProjection(mesh);
      const animation = animatePreview(element, currentRect, targetProjection.rect, 'close', 'inset(0)', targetProjection.clipPath);
      animation.onfinish = () => {
        element.remove();
        setPhotoVisible(mesh, true);
        activePreview = null;
        selectedMesh = null;
        previewAnimation = null;
      };
      animation.oncancel = () => {
        element.remove();
        setPhotoVisible(mesh, true);
      };
    };

    const showPreview = (mesh: THREE.Mesh, index: number) => {
      previewAnimation?.cancel();
      if (activePreview) {
        activePreview.element.remove();
        setPhotoVisible(activePreview.mesh, true);
      }
      selectedMesh = mesh;
      setPhotoVisible(mesh, false);

      const element = document.createElement('img');
      element.src = images[index];
      element.draggable = false;
      element.style.position = 'absolute';
      element.style.objectFit = 'contain';
      element.style.background = 'transparent';
      element.style.boxShadow = '0 28px 80px rgba(0, 0, 0, 0.35)';
      element.style.pointerEvents = 'auto';
      element.style.cursor = 'zoom-out';
      element.style.transformOrigin = 'center center';
      element.style.willChange = 'transform, clip-path, opacity';
      element.addEventListener('click', (event) => {
        event.stopPropagation();
        hidePreview();
      });

      const open = () => {
        const startProjection = getMeshProjection(mesh);
        const aspectRatio = element.naturalWidth > 0 && element.naturalHeight > 0
          ? element.naturalWidth / element.naturalHeight
          : 1;
        const fullscreenRect = getPreviewRect(aspectRatio);
        element.style.left = `${fullscreenRect.left}px`;
        element.style.top = `${fullscreenRect.top}px`;
        element.style.width = `${fullscreenRect.width}px`;
        element.style.height = `${fullscreenRect.height}px`;
        element.style.transform = rectToTransform(startProjection.rect, fullscreenRect);
        element.style.clipPath = startProjection.clipPath;
        previewLayer.appendChild(element);
        activePreview = { element, mesh, index };
        const animation = animatePreview(element, startProjection.rect, fullscreenRect, 'open', startProjection.clipPath, 'inset(0)');
        animation.onfinish = () => {
          previewAnimation = null;
        };
      };

      if (element.complete && element.naturalWidth > 0) open();
      else element.addEventListener('load', open, { once: true });
    };

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const onClick = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(meshes);
      if (intersects.length === 0) {
        hidePreview();
        return;
      }
      const mesh = intersects[0].object as THREE.Mesh;
      if (selectedMesh === mesh) {
        hidePreview();
      } else {
        showPreview(mesh, mesh.userData.imageIndex);
      }
    };
    renderer.domElement.addEventListener('click', onClick);

    let raf = 0;
    let cancelled = false;
    let lastFrameTime = performance.now();
    const rotateSpeed = variant === 'spiral' ? 0.035 : 0.045;
    const animate = (time = performance.now()) => {
      if (cancelled) return;
      raf = requestAnimationFrame(animate);
      const deltaSeconds = Math.min((time - lastFrameTime) / 1000, 0.05);
      lastFrameTime = time;
      if (!activePreview && !previewAnimation) {
        group.rotation.y += rotateSpeed * deltaSeconds;
        if (variant === 'polyhedron') group.rotation.x = Math.sin(time * 0.00018) * 0.12;
      }
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.domElement.removeEventListener('click', onClick);
      controls.dispose();
      previewAnimation?.cancel();
      activePreview?.element.remove();
      previewLayer.remove();
      meshes.forEach((mesh) => {
        group.remove(mesh);
        mesh.geometry.dispose();
      });
      materials.forEach((material) => material.dispose());
      textures.forEach((texture) => texture.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [images, variant]);

  return <div ref={containerRef} className="absolute inset-0" style={{ touchAction: 'none' }} />;
}

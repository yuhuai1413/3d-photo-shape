import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export type PhotoLayoutVariant = 'cylinder' | 'polyhedron' | 'spiral';

interface PhotoLayout3DProps {
  images: string[];
  variant: PhotoLayoutVariant;
  cropToSquare?: boolean;
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

const getRingColumnCount = (total: number) => {
  const targetRows = total > 140 ? 5 : total > 84 ? 4 : 3;
  return THREE.MathUtils.clamp(Math.ceil(total / targetRows), 16, 36);
};

export default function PhotoLayout3D({ images, variant, cropToSquare = true }: PhotoLayout3DProps) {
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

    const photoAspectRatio = 1.08;
    const getDefaultPhotoSize = (total: number) => THREE.MathUtils.clamp(30 / Math.sqrt(total), 1.78, 2.6);

    const framePalette = [
      ['#23d7ff', '#ff42df'],
      ['#4a7dff', '#35f0ff'],
      ['#ff52cf', '#8b5cff'],
      ['#2ae6ff', '#9d5cff'],
    ];

    const roundedRectPath = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      rectWidth: number,
      rectHeight: number,
      radiusValue: number,
    ) => {
      const cornerRadius = Math.min(radiusValue, rectWidth / 2, rectHeight / 2);
      ctx.beginPath();
      ctx.moveTo(x + cornerRadius, y);
      ctx.lineTo(x + rectWidth - cornerRadius, y);
      ctx.quadraticCurveTo(x + rectWidth, y, x + rectWidth, y + cornerRadius);
      ctx.lineTo(x + rectWidth, y + rectHeight - cornerRadius);
      ctx.quadraticCurveTo(x + rectWidth, y + rectHeight, x + rectWidth - cornerRadius, y + rectHeight);
      ctx.lineTo(x + cornerRadius, y + rectHeight);
      ctx.quadraticCurveTo(x, y + rectHeight, x, y + rectHeight - cornerRadius);
      ctx.lineTo(x, y + cornerRadius);
      ctx.quadraticCurveTo(x, y, x + cornerRadius, y);
      ctx.closePath();
    };

    const drawFramedImage = (
      ctx: CanvasRenderingContext2D,
      img: HTMLImageElement,
      size: number,
      textureIndex: number,
    ) => {
      const framePadding = 34;
      const imagePadding = 44;
      const imageSize = size - imagePadding * 2;
      const frameSize = size - framePadding * 2;
      const [primaryColor, secondaryColor] = framePalette[textureIndex % framePalette.length];
      const scale = cropToSquare
        ? Math.max(imageSize / img.width, imageSize / img.height)
        : Math.min(imageSize / img.width, imageSize / img.height);
      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;

      ctx.save();
      roundedRectPath(ctx, imagePadding, imagePadding, imageSize, imageSize, 24);
      ctx.clip();
      ctx.drawImage(
        img,
        imagePadding + (imageSize - drawWidth) / 2,
        imagePadding + (imageSize - drawHeight) / 2,
        drawWidth,
        drawHeight,
      );
      ctx.restore();

      const strokeGradient = ctx.createLinearGradient(framePadding, framePadding, size - framePadding, size - framePadding);
      strokeGradient.addColorStop(0, primaryColor);
      strokeGradient.addColorStop(0.48, '#faf7ff');
      strokeGradient.addColorStop(1, secondaryColor);

      ctx.save();
      roundedRectPath(ctx, framePadding, framePadding, frameSize, frameSize, 34);
      ctx.strokeStyle = strokeGradient;
      ctx.lineJoin = 'round';
      ctx.shadowColor = primaryColor;
      ctx.shadowBlur = 34;
      ctx.lineWidth = 20;
      ctx.globalAlpha = 0.48;
      ctx.stroke();
      ctx.shadowColor = secondaryColor;
      ctx.shadowBlur = 22;
      ctx.lineWidth = 11;
      ctx.globalAlpha = 0.58;
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(255,255,255,0.88)';
      ctx.stroke();
      ctx.restore();

      const capLength = 58;
      const capInset = 13;
      const capPositions = [
        { x1: framePadding + capInset, y1: framePadding, x2: framePadding + capInset + capLength, y2: framePadding, color: primaryColor },
        { x1: size - framePadding - capInset - capLength, y1: framePadding, x2: size - framePadding - capInset, y2: framePadding, color: secondaryColor },
        { x1: framePadding + capInset, y1: size - framePadding, x2: framePadding + capInset + capLength, y2: size - framePadding, color: secondaryColor },
        { x1: size - framePadding - capInset - capLength, y1: size - framePadding, x2: size - framePadding - capInset, y2: size - framePadding, color: primaryColor },
        { x1: framePadding, y1: framePadding + capInset, x2: framePadding, y2: framePadding + capInset + capLength, color: secondaryColor },
        { x1: size - framePadding, y1: framePadding + capInset, x2: size - framePadding, y2: framePadding + capInset + capLength, color: primaryColor },
        { x1: framePadding, y1: size - framePadding - capInset - capLength, x2: framePadding, y2: size - framePadding - capInset, color: primaryColor },
        { x1: size - framePadding, y1: size - framePadding - capInset - capLength, x2: size - framePadding, y2: size - framePadding - capInset, color: secondaryColor },
      ];

      ctx.save();
      ctx.lineCap = 'round';
      capPositions.forEach((cap) => {
        ctx.strokeStyle = cap.color;
        ctx.shadowColor = cap.color;
        ctx.shadowBlur = 18;
        ctx.lineWidth = 8;
        ctx.globalAlpha = 0.72;
        ctx.beginPath();
        ctx.moveTo(cap.x1, cap.y1);
        ctx.lineTo(cap.x2, cap.y2);
        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.lineWidth = 3;
        ctx.globalAlpha = 1;
        ctx.stroke();
      });
      ctx.restore();
    };

    const createTexture = (url: string, textureIndex: number, onReady: (texture: THREE.CanvasTexture) => void) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const size = 512;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, size, size);
        drawFramedImage(ctx, img, size, textureIndex);

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        onReady(texture);
      };
      img.src = url;
    };

    const getCylinderPlacement = (index: number, total: number): PhotoPlacement => {
      const defaultPhotoSize = getDefaultPhotoSize(total);
      const columns = getRingColumnCount(total);
      const rows = Math.ceil(total / columns);
      const column = index % columns;
      const row = Math.floor(index / columns);
      const angle = (column / columns) * Math.PI * 2;
      const radius = THREE.MathUtils.clamp(columns * 0.38, 10.8, 14.2);
      const verticalGap = THREE.MathUtils.clamp(10.6 / Math.max(1, rows - 1), 2.25, 2.95);
      const y = (rows - 1) * verticalGap * 0.5 - row * verticalGap;
      const position = new THREE.Vector3(Math.sin(angle) * radius, y, Math.cos(angle) * radius);
      const rotation = new THREE.Euler(0, angle, 0);
      const slotWidth = (Math.PI * 2 * radius) / columns;
      const photoSize = Math.min((slotWidth * 0.98) / photoAspectRatio, verticalGap * 0.98, defaultPhotoSize);
      return {
        position,
        rotation,
        width: cropToSquare ? photoSize * photoAspectRatio : photoSize * 1.28,
        height: photoSize,
      };
    };

    const getPolyhedronPlacement = (index: number, total: number): PhotoPlacement => {
      const defaultPhotoSize = getDefaultPhotoSize(total);
      const faceIndex = index % 6;
      const facePhotoCount = Math.floor((total + 5 - faceIndex) / 6);
      const indexInFace = Math.floor(index / 6);
      const columns = Math.min(5, Math.ceil(Math.sqrt(facePhotoCount)));
      const rows = Math.ceil(facePhotoCount / columns);
      const row = Math.floor(indexInFace / columns);
      const column = indexInFace % columns;
      const cubeHalfSize = 7.4;
      const cellWidth = (cubeHalfSize * 2) / columns;
      const cellHeight = (cubeHalfSize * 2) / rows;
      const photoSize = Math.min((cellWidth * 0.94) / photoAspectRatio, cellHeight * 0.94, defaultPhotoSize);
      const offsetX = -cubeHalfSize + cellWidth * (column + 0.5);
      const offsetY = cubeHalfSize - cellHeight * (row + 0.5);
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

      return {
        ...faceConfigs[faceIndex],
        width: cropToSquare ? photoSize * photoAspectRatio : photoSize * 1.28,
        height: photoSize,
      };
    };

    const getSpiralPlacement = (index: number, total: number): PhotoPlacement => {
      const defaultPhotoSize = getDefaultPhotoSize(total);
      const progress = total === 1 ? 0.5 : index / (total - 1);
      const turns = THREE.MathUtils.clamp(total / 34, 2.8, 4.8);
      const angle = progress * Math.PI * 2 * turns;
      const radius = 13.4;
      const ySpan = Math.max(defaultPhotoSize * turns * 1.18, THREE.MathUtils.clamp(total * 0.062, 8.4, 12.8));
      const y = (0.5 - progress) * ySpan;
      const position = new THREE.Vector3(Math.sin(angle) * radius, y, Math.cos(angle) * radius);
      const rotation = new THREE.Euler(0, angle, 0);
      const photosPerTurn = Math.max(1, total / turns);
      const slotWidth = (Math.PI * 2 * radius) / photosPerTurn;
      const photoSize = Math.min((slotWidth * 0.96) / photoAspectRatio, defaultPhotoSize);
      return {
        position,
        rotation,
        width: cropToSquare ? photoSize * photoAspectRatio : photoSize * 1.28,
        height: photoSize,
      };
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

      createTexture(url, index, (texture) => {
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
    const pointerStart = { x: 0, y: 0 };
    let pointerMoved = false;

    const onPointerDown = (event: PointerEvent) => {
      pointerStart.x = event.clientX;
      pointerStart.y = event.clientY;
      pointerMoved = false;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (pointerMoved) return;
      const distance = Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y);
      if (distance > 6) pointerMoved = true;
    };

    const onClick = (event: MouseEvent) => {
      if (pointerMoved) {
        pointerMoved = false;
        return;
      }
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
    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointermove', onPointerMove);
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
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.domElement.removeEventListener('pointermove', onPointerMove);
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
  }, [images, variant, cropToSquare]);

  return <div ref={containerRef} className="absolute inset-0" style={{ touchAction: 'none' }} />;
}

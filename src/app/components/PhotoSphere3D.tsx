import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

interface PhotoSphere3DProps {
  images: string[];
}

export default function PhotoSphere3D({ images }: PhotoSphere3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
    camera.position.set(0, 0, 28);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    renderer.domElement.style.touchAction = 'none';
    renderer.domElement.style.display = 'block';

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

    const radius = 11;
    const count = images.length;
    const previewAnimationDuration = 480;
    const autoRotationSpeed = 0.048;
    const meshes: THREE.Mesh[] = [];
    const backMeshes: THREE.Mesh[] = [];
    const textures: THREE.Texture[] = [];
    const materials: THREE.Material[] = [];

    // Track original scales for each mesh
    const originalScales: THREE.Vector3[] = [];
    let selectedMesh: THREE.Mesh | null = null;
    let selectedTexture: THREE.Texture | null = null;

    const ringCount = THREE.MathUtils.clamp(Math.round(Math.sqrt(count) * 1.08), 8, 18);
    const latitudeSpan = 1.94;
    const verticalGap = (radius * latitudeSpan) / Math.max(1, ringCount - 1);
    const maxPhotoSize = THREE.MathUtils.clamp(25 / Math.sqrt(count), 1.15, 2.75);

    const makeSquareTexture = (url: string, onReady: (texture: THREE.CanvasTexture) => void) => {
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

    const createPhotoMaterial = (side: THREE.Side) => new THREE.MeshBasicMaterial({
      side,
      toneMapped: false,
      color: 0xf8f7fb,
      transparent: true,
      alphaTest: 0.01,
    });

    const createBackGeometry = (geometry: THREE.BufferGeometry) => {
      const backGeometry = geometry.clone();
      const uv = backGeometry.getAttribute('uv').clone() as THREE.BufferAttribute;

      for (let index = 0; index < uv.count; index++) {
        uv.setX(index, 1 - uv.getX(index));
      }

      backGeometry.setAttribute('uv', uv);
      return backGeometry;
    };

    const createCurvedPhotoGeometry = (
      centerLat: number,
      centerLon: number,
      angularWidth: number,
      angularHeight: number,
      segments = 8,
    ) => {
      const positions: number[] = [];
      const uvs: number[] = [];
      const indices: number[] = [];

      for (let ySegment = 0; ySegment <= segments; ySegment++) {
        const v = ySegment / segments;
        const lat = THREE.MathUtils.clamp(
          centerLat + (0.5 - v) * angularHeight,
          -Math.PI / 2 + 0.04,
          Math.PI / 2 - 0.04,
        );

        for (let xSegment = 0; xSegment <= segments; xSegment++) {
          const u = xSegment / segments;
          const lon = centerLon + (u - 0.5) * angularWidth;
          const cosLat = Math.cos(lat);
          positions.push(
            Math.cos(lon) * cosLat * radius,
            Math.sin(lat) * radius,
            Math.sin(lon) * cosLat * radius,
          );
          uvs.push(u, 1 - v);
        }
      }

      for (let ySegment = 0; ySegment < segments; ySegment++) {
        for (let xSegment = 0; xSegment < segments; xSegment++) {
          const a = ySegment * (segments + 1) + xSegment;
          const b = a + 1;
          const c = a + segments + 1;
          const d = c + 1;
          indices.push(a, c, b, b, c, d);
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      geometry.setIndex(indices);
      geometry.computeVertexNormals();
      return geometry;
    };
    const rings = Array.from({ length: ringCount }, (_, ring) => {
      const normalized = ringCount === 1 ? 0.5 : ring / (ringCount - 1);
      const lat = latitudeSpan / 2 - normalized * latitudeSpan;
      const radiusRatio = Math.sqrt(Math.max(0.03, 1 - lat * lat));
      return {
        lat,
        radiusRatio,
        count: Math.max(3, Math.round(radiusRatio * count * 1.18 / ringCount)),
      };
    });

    let plannedCount = rings.reduce((sum, ring) => sum + ring.count, 0);
    while (plannedCount < count) {
      const target = rings.reduce((best, ring, index) => (
        ring.radiusRatio > rings[best].radiusRatio ? index : best
      ), 0);
      rings[target].count += 1;
      plannedCount += 1;
    }
    while (plannedCount > count) {
      const target = rings.reduce((best, ring, index) => (
        ring.count > rings[best].count ? index : best
      ), 0);
      if (rings[target].count <= 3) break;
      rings[target].count -= 1;
      plannedCount -= 1;
    }

    let photoIndex = 0;
    rings.forEach((ring, ringIndex) => {
      for (let indexInRing = 0; indexInRing < ring.count && photoIndex < count; indexInRing++) {
        const longitude = ((indexInRing + (ringIndex % 2) * 0.5) / ring.count) * Math.PI * 2;
        const ringRadius = ring.radiusRatio * radius;
        const circumference = Math.PI * 2 * ringRadius;
        const slotWidth = circumference / ring.count;
        const photoSize = Math.min(maxPhotoSize, slotWidth * 0.9, verticalGap * 0.9);
        const centerLat = Math.asin(ring.lat);
        const angularWidth = Math.min((Math.PI * 2 / ring.count) * 0.9, photoSize / Math.max(ringRadius, 0.8));
        const angularHeight = photoSize / radius;

        const geometry = createCurvedPhotoGeometry(centerLat, longitude, angularWidth, angularHeight);
        const currentIndex = photoIndex;

        const mat = createPhotoMaterial(THREE.FrontSide);
        const backMat = createPhotoMaterial(THREE.BackSide);
        materials.push(mat, backMat);

        const mesh = new THREE.Mesh(geometry, mat);
        mesh.userData.imageIndex = currentIndex;
        const backMesh = new THREE.Mesh(createBackGeometry(geometry), backMat);
        backMesh.userData.imageIndex = currentIndex;

        meshes.push(mesh);
        backMeshes.push(backMesh);
        group.add(mesh);
        group.add(backMesh);
        originalScales.push(mesh.scale.clone());
        mesh.userData.frontMesh = mesh;
        mesh.userData.backMesh = backMesh;
        backMesh.userData.frontMesh = mesh;

        makeSquareTexture(images[photoIndex], (texture) => {
          textures.push(texture);
          mat.map = texture;
          mat.color.set(0xffffff);
          mat.needsUpdate = true;
          backMat.map = texture;
          backMat.color.set(0xffffff);
          backMat.needsUpdate = true;
          mesh.userData.texture = texture;
          backMesh.userData.texture = texture;
        });

        photoIndex++;
      }
    });

    type ScreenPoint = { x: number; y: number };
    type ScreenRect = { left: number; top: number; width: number; height: number };
    type MeshProjection = { rect: ScreenRect; clipPath: string; fullClipPath: string };
    let activePreview: { element: HTMLImageElement; mesh: THREE.Mesh; index: number; projection: MeshProjection } | null = null;
    let previewAnimation: Animation | null = null;
    const previewLayer = document.createElement('div');
    previewLayer.style.position = 'absolute';
    previewLayer.style.inset = '0';
    previewLayer.style.pointerEvents = 'none';
    previewLayer.style.zIndex = '20';
    container.appendChild(previewLayer);

    const setPhotoVisible = (mesh: THREE.Mesh, visible: boolean) => {
      mesh.visible = visible;
      const backMesh = mesh.userData.backMesh as THREE.Mesh | undefined;
      if (backMesh) backMesh.visible = visible;
    };

    const worldPointToScreen = (point: THREE.Vector3) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const projected = point.clone().project(camera);
      return {
        x: ((projected.x + 1) / 2) * rect.width,
        y: ((1 - projected.y) / 2) * rect.height,
      };
    };

    const getMeshScreenOutline = (mesh: THREE.Mesh) => {
      const position = mesh.geometry.getAttribute('position');
      const segments = Math.round(Math.sqrt(position.count)) - 1;
      const outlineIndices: number[] = [];
      const unitPoints: ScreenPoint[] = [];

      for (let x = 0; x <= segments; x++) {
        outlineIndices.push(x);
        unitPoints.push({ x: x / segments, y: 0 });
      }
      for (let y = 1; y <= segments; y++) {
        outlineIndices.push(y * (segments + 1) + segments);
        unitPoints.push({ x: 1, y: y / segments });
      }
      for (let x = segments - 1; x >= 0; x--) {
        outlineIndices.push(segments * (segments + 1) + x);
        unitPoints.push({ x: x / segments, y: 1 });
      }
      for (let y = segments - 1; y >= 1; y--) {
        outlineIndices.push(y * (segments + 1));
        unitPoints.push({ x: 0, y: y / segments });
      }

      const points = outlineIndices.map((index) => {
        const point = new THREE.Vector3(position.getX(index), position.getY(index), position.getZ(index));
        mesh.localToWorld(point);
        return worldPointToScreen(point);
      });

      if (getSignedArea(points) >= 0) return { points, unitPoints };

      return {
        points: points.toReversed(),
        unitPoints: unitPoints.toReversed(),
      };
    };

    const getSignedArea = (corners: ScreenPoint[]) => (
      corners.reduce((sum, corner, index) => {
        const next = corners[(index + 1) % corners.length];
        return sum + corner.x * next.y - corner.y * next.x;
      }, 0)
    );

    const getPreviewRect = (aspectRatio = 1) => {
      const viewportWidth = renderer.domElement.clientWidth;
      const viewportHeight = renderer.domElement.clientHeight;
      const maxWidth = Math.min(viewportWidth * 0.64, 620);
      const maxHeight = Math.min(viewportHeight * 0.64, 620);
      const width = Math.min(maxWidth, maxHeight * aspectRatio);
      const height = width / aspectRatio;
      return {
        left: (viewportWidth - width) / 2,
        top: (viewportHeight - height) / 2,
        width,
        height,
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

    const getMeshProjection = (mesh: THREE.Mesh): MeshProjection => {
      const { points, unitPoints } = getMeshScreenOutline(mesh);
      const minX = Math.min(...points.map((point) => point.x));
      const maxX = Math.max(...points.map((point) => point.x));
      const minY = Math.min(...points.map((point) => point.y));
      const maxY = Math.max(...points.map((point) => point.y));
      const rect = {
        left: minX,
        top: minY,
        width: Math.max(1, maxX - minX),
        height: Math.max(1, maxY - minY),
      };
      const clipPath = `polygon(${points
        .map((point) => {
          const x = THREE.MathUtils.clamp(((point.x - rect.left) / rect.width) * 100, 0, 100);
          const y = THREE.MathUtils.clamp(((point.y - rect.top) / rect.height) * 100, 0, 100);
          return `${x}% ${y}%`;
        })
        .join(', ')})`;
      const fullClipPath = `polygon(${unitPoints
        .map((point) => `${point.x * 100}% ${point.y * 100}%`)
        .join(', ')})`;

      return { rect, clipPath, fullClipPath };
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
      const startFrame = {
        transform: fromTransform,
        clipPath: fromClipPath,
        opacity: 1,
        borderRadius: direction === 'open' ? '18px' : '28px',
      };
      const endFrame = {
        transform: 'translate(0px, 0px) scale(1, 1)',
        clipPath: toClipPath,
        opacity: 1,
        borderRadius: direction === 'open' ? '28px' : '18px',
      };
      previewAnimation = element.animate(
        [startFrame, endFrame],
        {
          duration: previewAnimationDuration,
          easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
          fill: 'forwards',
          composite: 'replace',
        },
      );
      return previewAnimation;
    };

    const animatePreviewToProjection = (
      element: HTMLImageElement,
      from: ScreenRect,
      projection: MeshProjection,
    ) => {
      return animatePreview(
        element,
        from,
        projection.rect,
        'close',
        'inset(0)',
        projection.clipPath,
      );
    };

    const hideOverlay = () => {
      if (!activePreview) return;
      const { element, mesh } = activePreview;
      const currentRect = getCurrentElementRect(element);
      setPhotoVisible(mesh, true);
      controls.update();
      renderer.render(scene, camera);
      const currentRotationY = group.rotation.y;
      group.rotation.y = currentRotationY + autoRotationSpeed * (previewAnimationDuration / 1000);
      group.updateMatrixWorld(true);
      const targetProjection = getMeshProjection(mesh);
      group.rotation.y = currentRotationY;
      group.updateMatrixWorld(true);
      const animation = animatePreviewToProjection(element, currentRect, targetProjection);
      animation.onfinish = () => {
        element.remove();
        activePreview = null;
        selectedMesh = null;
        selectedTexture = null;
        previewAnimation = null;
      };
      animation.oncancel = () => {
        element.remove();
        setPhotoVisible(mesh, true);
      };
    };

    const showOverlay = (mesh: THREE.Mesh, index: number, texture: THREE.Texture | null) => {
      if (!texture || activePreview?.mesh === mesh) return;
      if (activePreview) {
        activePreview.element.remove();
        setPhotoVisible(activePreview.mesh, true);
      }
      selectedMesh = mesh;
      selectedTexture = texture;
      setPhotoVisible(mesh, false);

      const element = document.createElement('img');
      element.src = images[index];
      element.draggable = false;
      element.style.position = 'absolute';
      element.style.objectFit = 'contain';
      element.style.background = 'transparent';
      element.style.boxShadow = '0 28px 80px rgba(0, 0, 0, 0.35)';
      element.style.willChange = 'transform, clip-path, opacity';
      element.style.pointerEvents = 'auto';
      element.style.cursor = 'zoom-out';
      element.style.transformOrigin = 'center center';
      element.addEventListener('click', (event) => {
        event.stopPropagation();
        hideOverlay();
      });

      const openPreview = () => {
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
        activePreview = { element, mesh, index, projection: startProjection };

        const animation = animatePreview(
          element,
          startProjection.rect,
          fullscreenRect,
          'open',
          startProjection.clipPath,
          'inset(0)',
        );
        animation.onfinish = () => {
          previewAnimation = null;
        };
      };

      if (element.complete && element.naturalWidth > 0) {
        openPreview();
      } else {
        element.addEventListener('load', openPreview, { once: true });
      }
    };

    // Raycaster for click detection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Click handler with Q-bouncy animation
    const onClick = (event: MouseEvent) => {
      // Calculate mouse position in normalized device coordinates (-1 to +1)
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      // Update raycaster
      raycaster.setFromCamera(mouse, camera);

      // Check for intersections
      const intersects = raycaster.intersectObjects([...meshes, ...backMeshes]);

      if (intersects.length > 0) {
        // Clicked on a photo
        const clickedIntersection = intersects[0];
        const clickedObject = clickedIntersection.object as THREE.Mesh;
        const clickedMesh = (clickedObject.userData.frontMesh as THREE.Mesh | undefined) ?? clickedObject;
        const clickedTexture = clickedMesh.userData.texture as THREE.Texture | null;

        if (selectedMesh === clickedMesh && selectedTexture === clickedTexture) {
          hideOverlay();
        } else {
          if (selectedMesh) setPhotoVisible(selectedMesh, true);
          showOverlay(clickedMesh, clickedMesh.userData.imageIndex, clickedTexture);
        }
      } else {
        hideOverlay();
      }
    };

    renderer.domElement.addEventListener('click', onClick);

    let raf = 0;
    let cancelled = false;
    let lastFrameTime = performance.now();
    const animate = (time = performance.now()) => {
      if (cancelled) return;
      raf = requestAnimationFrame(animate);
      const deltaSeconds = Math.min((time - lastFrameTime) / 1000, 0.05);
      lastFrameTime = time;
      group.rotation.y += autoRotationSpeed * deltaSeconds;
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
      previewLayer.remove();
      meshes.forEach((m) => {
        group.remove(m);
        m.geometry.dispose();
      });
      backMeshes.forEach((m) => {
        group.remove(m);
        m.geometry.dispose();
      });
      materials.forEach((m) => m.dispose());
      textures.forEach((t) => t.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [images]);

  return <div ref={containerRef} className="absolute inset-0" style={{ touchAction: 'none' }} />;
}

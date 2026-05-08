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
    let activePreview: HTMLImageElement | null = null;

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
      const columns = Math.max(8, Math.ceil(Math.sqrt(total) * 1.8));
      const rows = Math.ceil(total / columns);
      const column = index % columns;
      const row = Math.floor(index / columns);
      const angle = (column / columns) * Math.PI * 2;
      const radius = 9.8;
      const verticalGap = 2.15;
      const y = (rows - 1) * verticalGap * 0.5 - row * verticalGap;
      const position = new THREE.Vector3(Math.sin(angle) * radius, y, Math.cos(angle) * radius);
      const rotation = new THREE.Euler(0, angle, 0);
      return { position, rotation, width: 1.72, height: 1.36 };
    };

    const getPolyhedronPlacement = (index: number, total: number): PhotoPlacement => {
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));
      const t = total === 1 ? 0 : index / (total - 1);
      const y = 1 - 2 * t;
      const radiusAtY = Math.sqrt(Math.max(0.02, 1 - y * y));
      const angle = index * goldenAngle;
      const normal = new THREE.Vector3(
        Math.cos(angle) * radiusAtY,
        y,
        Math.sin(angle) * radiusAtY,
      ).normalize();
      const position = normal.clone().multiplyScalar(10.8);
      const orientation = new THREE.Matrix4().lookAt(position, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0));
      const rotation = new THREE.Euler().setFromRotationMatrix(orientation);
      return { position, rotation, width: 1.62, height: 1.62 };
    };

    const getSpiralPlacement = (index: number, total: number): PhotoPlacement => {
      const progress = total === 1 ? 0.5 : index / (total - 1);
      const turns = 3.6;
      const angle = progress * Math.PI * 2 * turns;
      const radius = 4.8 + progress * 4.6;
      const y = (0.5 - progress) * 13.5;
      const position = new THREE.Vector3(Math.sin(angle) * radius, y, Math.cos(angle) * radius);
      const rotation = new THREE.Euler(0, angle, THREE.MathUtils.degToRad(-10 + progress * 20));
      return { position, rotation, width: 1.55, height: 1.25 };
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
      });
    });

    const showPreview = (index: number) => {
      previewAnimation?.cancel();
      activePreview?.remove();
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
      element.addEventListener('click', (event) => {
        event.stopPropagation();
        previewAnimation?.cancel();
        element.remove();
        activePreview = null;
      });

      const open = () => {
        const viewportWidth = renderer.domElement.clientWidth;
        const viewportHeight = renderer.domElement.clientHeight;
        const aspectRatio = element.naturalWidth > 0 && element.naturalHeight > 0
          ? element.naturalWidth / element.naturalHeight
          : 1;
        const maxWidth = Math.min(viewportWidth * 0.64, 620);
        const maxHeight = Math.min(viewportHeight * 0.64, 620);
        const previewWidth = Math.min(maxWidth, maxHeight * aspectRatio);
        const previewHeight = previewWidth / aspectRatio;
        const left = (viewportWidth - previewWidth) / 2;
        const top = (viewportHeight - previewHeight) / 2;

        element.style.left = `${left}px`;
        element.style.top = `${top}px`;
        element.style.width = `${previewWidth}px`;
        element.style.height = `${previewHeight}px`;
        element.style.opacity = '0';
        element.style.transform = 'scale(0.88)';
        previewLayer.appendChild(element);
        activePreview = element;
        previewAnimation = element.animate(
          [
            { opacity: 0, transform: 'scale(0.88)' },
            { opacity: 1, transform: 'scale(1)' },
          ],
          { duration: 240, easing: 'cubic-bezier(0.19, 1, 0.22, 1)', fill: 'forwards' },
        );
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
        activePreview?.remove();
        activePreview = null;
        return;
      }
      const mesh = intersects[0].object as THREE.Mesh;
      showPreview(mesh.userData.imageIndex);
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
      group.rotation.y += rotateSpeed * deltaSeconds;
      if (variant === 'polyhedron') group.rotation.x = Math.sin(time * 0.00018) * 0.12;
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
      activePreview?.remove();
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

import { useState, useRef, useEffect, CSSProperties } from 'react';
import { Upload, Camera, Trash2, ArrowLeft, X, Sparkles, Shapes, Gamepad2, Smartphone, Crop, Download } from 'lucide-react';
import { PhotoSphere3D, PhotoLayout3D, LoadingSpinner, ErrorBoundary } from '../components';
import type { PhotoLayoutVariant } from '../components/3d/PhotoLayout3D';

const IMAGE_FILE_PATTERN = /\.(avif|bmp|gif|heic|heif|jpe?g|png|webp)$/i;
const STYLE_CARD_RADIUS = 48;
const STYLE_TRANSITION_MS = 620;
const STYLE_TRANSITION_SETTLE_MS = STYLE_TRANSITION_MS + 180;
const STYLE_UPLOAD_LOGO_SIZE = 112;
const STYLE_UPLOAD_TITLE_WIDTH = 320;
const STYLE_UPLOAD_TITLE_HEIGHT = 58;
const GALLERY_MIN_PHOTOS = 24;
const GALLERY_MAX_PHOTOS = 180;

type GalleryStyleId = 'sphere' | 'cylinder' | 'polyhedron' | 'spiral';

type GalleryStyle = {
  id: GalleryStyleId;
  name: string;
  subtitle: string;
  requirement: string;
  minPhotos: number;
  maxPhotos: number;
  multipleOf?: number;
  accent: string;
  surface: string;
  preview: 'orb' | 'cylinder' | 'polyhedron' | 'spiral';
  logo: string;
  variant?: PhotoLayoutVariant;
};

type StyleTransition = {
  style: GalleryStyle;
  from: DOMRect;
  logoFrom: DOMRect;
  logoTo: DOMRect;
  titleFrom: DOMRect;
  titleTo: DOMRect;
  expanded: boolean;
  fading: boolean;
  direction: 'enter' | 'exit';
};

const GALLERY_STYLES: GalleryStyle[] = [
  {
    id: 'sphere',
    name: '照片球体',
    subtitle: '照片围成立体球面，适合大量回忆的沉浸式浏览',
    requirement: `需要 ${GALLERY_MIN_PHOTOS}-${GALLERY_MAX_PHOTOS} 张`,
    minPhotos: GALLERY_MIN_PHOTOS,
    maxPhotos: GALLERY_MAX_PHOTOS,
    accent: 'from-violet-500 via-fuchsia-500 to-blue-500',
    surface: 'from-violet-950 via-purple-900 to-blue-950',
    preview: 'orb',
    logo: '/gallery-logos/sphere.png',
  },
  {
    id: 'cylinder',
    name: '圆柱画廊',
    subtitle: '像环形展厅一样环绕观看，横向浏览节奏更稳定',
    requirement: `需要 ${GALLERY_MIN_PHOTOS}-${GALLERY_MAX_PHOTOS} 张`,
    minPhotos: GALLERY_MIN_PHOTOS,
    maxPhotos: GALLERY_MAX_PHOTOS,
    accent: 'from-cyan-500 via-blue-500 to-violet-500',
    surface: 'from-cyan-950 via-blue-900 to-violet-950',
    preview: 'cylinder',
    logo: '/gallery-logos/cylinder.png',
    variant: 'cylinder',
  },
  {
    id: 'polyhedron',
    name: '多面体相册',
    subtitle: '照片分布在晶体切面上，适合更利落的高级展示',
    requirement: `需要 ${GALLERY_MIN_PHOTOS}-${GALLERY_MAX_PHOTOS} 张`,
    minPhotos: GALLERY_MIN_PHOTOS,
    maxPhotos: GALLERY_MAX_PHOTOS,
    accent: 'from-amber-400 via-rose-500 to-violet-600',
    surface: 'from-amber-950 via-rose-900 to-violet-950',
    preview: 'polyhedron',
    logo: '/gallery-logos/polyhedron.png',
    variant: 'polyhedron',
  },
  {
    id: 'spiral',
    name: '螺旋星轨',
    subtitle: '照片沿上升轨道展开，适合时间线和成长记录',
    requirement: `需要 ${GALLERY_MIN_PHOTOS}-${GALLERY_MAX_PHOTOS} 张`,
    minPhotos: GALLERY_MIN_PHOTOS,
    maxPhotos: GALLERY_MAX_PHOTOS,
    accent: 'from-emerald-400 via-cyan-500 to-indigo-600',
    surface: 'from-emerald-950 via-cyan-900 to-indigo-950',
    preview: 'spiral',
    logo: '/gallery-logos/spiral.png',
    variant: 'spiral',
  },
];

const getStyleById = (id: GalleryStyleId) => GALLERY_STYLES.find((style) => style.id === id) ?? GALLERY_STYLES[0];

function StylePreview({
  logo,
  name,
  compact = false,
  logoRef,
  transitioning = false,
}: {
  logo: string;
  name: string;
  compact?: boolean;
  logoRef?: (element: HTMLImageElement | null) => void;
  transitioning?: boolean;
}) {
  if (compact) {
    return (
      <img
        ref={logoRef}
        src={logo}
        alt={`${name} logo`}
        className={`size-28 object-contain ${transitioning ? 'opacity-0' : 'opacity-100'}`}
        draggable={false}
      />
    );
  }

  return (
    <div className={`relative flex min-h-0 w-full flex-1 items-center justify-center ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
        <img
          ref={logoRef}
          src={logo}
          alt={`${name} logo`}
          className="h-full max-h-[78%] w-full max-w-[78%] object-contain"
          draggable={false}
        />
    </div>
  );
}

export default function App() {
  const [selectedStyleId, setSelectedStyleId] = useState<GalleryStyleId | null>(null);
  const [styleTransition, setStyleTransition] = useState<StyleTransition | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({ done: 0, total: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [uploadPageVisible, setUploadPageVisible] = useState(false);
  const [homeTransitionCoverVisible, setHomeTransitionCoverVisible] = useState(false);
  const [previewSwitchingStyleId, setPreviewSwitchingStyleId] = useState<GalleryStyleId | null>(null);
  const [cropPreviewPhotos, setCropPreviewPhotos] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const styleCardRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const styleLogoRefs = useRef<Record<string, HTMLImageElement | null>>({});
  const styleTitleRefs = useRef<Record<string, HTMLHeadingElement | null>>({});
  const uploadLogoRef = useRef<HTMLImageElement | null>(null);
  const uploadTitleRef = useRef<HTMLHeadingElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewSwitchStartTimerRef = useRef<number | null>(null);
  const previewSwitchEndTimerRef = useRef<number | null>(null);
  const selectedStyle = selectedStyleId ? getStyleById(selectedStyleId) : null;
  const previewSwitchingStyle = previewSwitchingStyleId ? getStyleById(previewSwitchingStyleId) : null;
  const maxPhotos = selectedStyle?.maxPhotos ?? GALLERY_STYLES[0].maxPhotos;
  const minPhotos = selectedStyle?.minPhotos ?? GALLERY_STYLES[0].minPhotos;

  const clearPreviewSwitchTimers = () => {
    if (previewSwitchStartTimerRef.current) {
      window.clearTimeout(previewSwitchStartTimerRef.current);
      previewSwitchStartTimerRef.current = null;
    }
    if (previewSwitchEndTimerRef.current) {
      window.clearTimeout(previewSwitchEndTimerRef.current);
      previewSwitchEndTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearPreviewSwitchTimers();
    };
  }, []);

  const getUploadLogoRect = () => {
    const top = window.innerWidth >= 640 ? 64 : 56;
    return new DOMRect(
      window.innerWidth / 2 - STYLE_UPLOAD_LOGO_SIZE / 2,
      top,
      STYLE_UPLOAD_LOGO_SIZE,
      STYLE_UPLOAD_LOGO_SIZE,
    );
  };

  const getUploadTitleRect = () => {
    const logoRect = getUploadLogoRect();
    return new DOMRect(
      window.innerWidth / 2 - STYLE_UPLOAD_TITLE_WIDTH / 2,
      logoRect.bottom + 24,
      STYLE_UPLOAD_TITLE_WIDTH,
      STYLE_UPLOAD_TITLE_HEIGHT,
    );
  };

  // Downscale a photo via canvas → small JPEG blob URL.
  // Cuts a 4000×3000 iPhone photo (~5–10 MB raw) down to ~80–120 KB.
  // If decoding stalls or the browser cannot read the file, skip it and keep the rest uploading.
  const downscaleToBlobUrl = (file: File, maxSize = 512, quality = 0.8) =>
    new Promise<string | null>((resolve) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      let settled = false;

      const finish = (resultUrl: string | null, revokeOriginal: boolean) => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timeoutId);
        if (revokeOriginal) URL.revokeObjectURL(url);
        resolve(resultUrl);
      };

      const timeoutId = window.setTimeout(() => {
        finish(null, true);
      }, 8000);

      img.onload = () => {
        try {
          const ratio = Math.min(1, maxSize / Math.max(img.width, img.height));
          const w = Math.max(1, Math.round(img.width * ratio));
          const h = Math.max(1, Math.round(img.height * ratio));
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            finish(null, true);
            return;
          }
          ctx.drawImage(img, 0, 0, w, h);
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                finish(null, true);
                return;
              }
              finish(URL.createObjectURL(blob), true);
            },
            'image/jpeg',
            quality,
          );
        } catch {
          finish(null, true);
        }
      };
      img.onerror = () => {
        finish(null, true);
      };
      img.src = url;
    });

  const blobUrlToDataUrl = async (url: string) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  };

  const buildStandaloneGalleryHtml = ({
    title,
    styleId,
    styleName,
    photoDataUrls,
    cropToSquare,
  }: {
    title: string;
    styleId: GalleryStyleId;
    styleName: string;
    photoDataUrls: string[];
    cropToSquare: boolean;
  }) => {
    const payload = JSON.stringify({
      title,
      styleId,
      styleName,
      photos: photoDataUrls,
      cropToSquare,
    }).replace(/</g, '\\u003c');

    return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <style>
    * { box-sizing: border-box; }
    html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; background: #05030b; color: #fff; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    body { background: radial-gradient(circle at 20% 15%, rgba(168, 85, 247, .34), transparent 30%), radial-gradient(circle at 82% 78%, rgba(59, 130, 246, .3), transparent 34%), linear-gradient(135deg, #05030b 0%, #1b1034 52%, #020617 100%); }
    .stage { position: fixed; inset: 0; perspective: 1350px; cursor: grab; touch-action: none; overflow: hidden; }
    .stage:active { cursor: grabbing; }
    .gallery { position: absolute; left: 50%; top: 50%; width: 0; height: 0; transform-style: preserve-3d; }
    .card { position: absolute; left: 0; top: 0; width: var(--w); height: var(--h); margin-left: calc(var(--w) / -2); margin-top: calc(var(--h) / -2); padding: 7px; overflow: hidden; border: 0; border-radius: 16px; background: linear-gradient(135deg, var(--c1), rgba(255,255,255,.94) 48%, var(--c2)); box-shadow: 0 0 10px var(--c1), 0 0 20px color-mix(in srgb, var(--c2) 76%, transparent), 0 18px 48px rgba(0,0,0,.42); transform-style: preserve-3d; backface-visibility: visible; cursor: pointer; appearance: none; }
    .card::before { content: ""; position: absolute; inset: 2px; border-radius: 14px; border: 2px solid rgba(255,255,255,.78); pointer-events: none; }
    .card::after { content: ""; position: absolute; inset: 0; border-radius: 16px; box-shadow: inset 0 0 12px rgba(255,255,255,.52), inset 0 0 24px var(--c1); pointer-events: none; }
    .card img { display: block; width: 100%; height: 100%; object-fit: var(--fit); user-select: none; -webkit-user-drag: none; border-radius: 10px; background: rgba(255,255,255,.06); pointer-events: none; }
    .topbar, .hint { position: fixed; z-index: 5; border: 1px solid rgba(255,255,255,.18); background: rgba(0,0,0,.38); backdrop-filter: blur(16px); box-shadow: 0 18px 48px rgba(0,0,0,.25); }
    .topbar { left: 20px; top: 20px; display: flex; align-items: center; gap: 12px; max-width: calc(100vw - 40px); padding: 12px 16px; border-radius: 999px; }
    .title { font-weight: 800; white-space: nowrap; }
    .meta { color: rgba(255,255,255,.66); font-size: 13px; white-space: nowrap; }
    .hint { right: 20px; bottom: 20px; padding: 10px 14px; border-radius: 999px; color: rgba(255,255,255,.76); font-size: 13px; }
    .lightbox { position: fixed; inset: 0; z-index: 10; display: block; opacity: 0; pointer-events: none; background: transparent; transition: opacity 180ms ease; }
    .lightbox.open { opacity: 1; pointer-events: auto; }
    .lightbox img { position: fixed; display: block; max-width: none; max-height: none; object-fit: contain; border-radius: 18px; box-shadow: 0 28px 90px rgba(0,0,0,.55); transform-origin: center center; will-change: left, top, width, height, border-radius; pointer-events: none; }
    .close { position: fixed; right: 20px; top: 20px; width: 44px; height: 44px; border: 0; border-radius: 50%; background: rgba(255,255,255,.9); color: #111827; font-size: 24px; cursor: pointer; opacity: 0; transition: opacity 160ms ease; }
    .lightbox.open .close { opacity: 1; }
    @media (max-width: 720px) {
      .topbar { left: 12px; top: 12px; padding: 10px 12px; gap: 8px; }
      .title { max-width: 42vw; overflow: hidden; text-overflow: ellipsis; }
      .meta, .hint { font-size: 12px; }
      .hint { right: 12px; bottom: 12px; }
    }
  </style>
</head>
<body>
  <div class="topbar">
    <div class="title"></div>
    <div class="meta"></div>
  </div>
  <div class="stage" aria-label="3D 相册预览">
    <div class="gallery"></div>
  </div>
  <div class="hint">拖动旋转 · 滚轮/双指缩放 · 点击照片放大</div>
  <div class="lightbox" role="dialog" aria-modal="true">
    <button class="close" type="button" aria-label="关闭">×</button>
    <img alt="" />
  </div>
  <script>
    const data = ${payload};
    const gallery = document.querySelector('.gallery');
    const stage = document.querySelector('.stage');
    const title = document.querySelector('.title');
    const meta = document.querySelector('.meta');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = lightbox.querySelector('img');
    const closeButton = lightbox.querySelector('.close');
    const photos = data.photos;
    const fit = data.cropToSquare ? 'cover' : 'contain';
    const photoAspectRatio = 1.08;
    const pxScale = 52;
    const frameColors = [['#23d7ff', '#ff42df'], ['#4a7dff', '#35f0ff'], ['#ff52cf', '#8b5cff'], ['#2ae6ff', '#9d5cff']];
    let rotationX = data.styleId === 'spiral' ? -10 : -7;
    let rotationY = data.styleId === 'polyhedron' ? -18 : 0;
    let targetRotationX = rotationX;
    let targetRotationY = rotationY;
    let zoom = Math.min(window.innerWidth, window.innerHeight) < 720 ? .46 : .9;
    let targetZoom = zoom;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let lastX = 0;
    let lastY = 0;
    let moved = false;
    let activeCard = null;
    let lightboxIsOpen = false;
    let lightboxTransitionTimer = 0;
    const activePointers = new Map();
    let isPinching = false;
    let pinchStartDistance = 0;
    let pinchStartZoom = 1;

    title.textContent = data.styleName;
    meta.textContent = photos.length + ' 张照片';

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function getDefaultPhotoSize(total) {
      return clamp(30 / Math.sqrt(Math.max(total, 1)), 1.78, 2.6) * pxScale;
    }

    function getRingColumnCount(total) {
      const targetRows = total > 140 ? 5 : total > 84 ? 4 : 3;
      return clamp(Math.ceil(total / targetRows), 16, 36);
    }

    function buildSpherePlacements(total) {
      const radius = 11 * pxScale;
      const photoSize = getDefaultPhotoSize(total);
      const ringCount = clamp(Math.round(Math.sqrt(Math.max(total, 1)) * .72), 5, 10);
      const latitudeSpan = Math.PI * .78;
      const latitudeStart = latitudeSpan / 2;
      const latitudeGap = ringCount > 1 ? latitudeSpan / (ringCount - 1) : 0;
      const rings = Array.from({ length: ringCount }, (_, ring) => {
        const centerLat = latitudeStart - latitudeGap * ring;
        const radiusRatio = Math.max(.12, Math.cos(centerLat));
        const ringRadius = radiusRatio * radius;
        return {
          centerLat,
          radiusRatio,
          capacity: Math.max(1, Math.floor((Math.PI * 2 * ringRadius) / (photoSize * 1.08))),
          weight: Math.max(1, Math.floor((Math.PI * 2 * ringRadius) / (photoSize * 1.08))),
          count: 0,
          longitudeOffset: 0,
        };
      });

      let remaining = total;
      if (remaining >= ringCount) {
        rings.forEach((ring) => {
          if (remaining > 0) {
            ring.count = 1;
            remaining -= 1;
          }
        });
      }

      while (remaining > 0) {
        const candidates = rings.map((ring, index) => ({ ring, index })).filter(({ ring }) => ring.count < ring.capacity);
        if (candidates.length === 0) break;
        const target = candidates.reduce((best, current) => {
          const currentFill = current.ring.count / current.ring.weight;
          const bestFill = best.ring.count / best.ring.weight;
          if (currentFill !== bestFill) return currentFill < bestFill ? current : best;
          return Math.abs(current.index - (ringCount - 1) / 2) < Math.abs(best.index - (ringCount - 1) / 2) ? current : best;
        });
        const mirrorIndex = ringCount - 1 - target.index;
        const mirror = rings[mirrorIndex];
        const canAddMirror = mirrorIndex !== target.index && remaining >= 2 && mirror.count < mirror.capacity;
        target.ring.count += 1;
        remaining -= 1;
        if (canAddMirror) {
          mirror.count += 1;
          remaining -= 1;
        }
      }

      rings.forEach((ring, ringIndex) => {
        if (ring.count <= 0) return;
        const previousRing = rings[ringIndex - 1];
        ring.longitudeOffset = previousRing && previousRing.count > 0
          ? previousRing.longitudeOffset + (Math.PI * 2 / ring.count) * .5
          : 0;
      });

      const placements = [];
      rings.forEach((ring) => {
        for (let indexInRing = 0; indexInRing < ring.count && placements.length < total; indexInRing += 1) {
          const lon = (indexInRing / ring.count) * Math.PI * 2 + ring.longitudeOffset;
          const cosLat = Math.cos(ring.centerLat);
          const x = Math.cos(lon) * cosLat * radius;
          const y = Math.sin(ring.centerLat) * radius;
          const z = Math.sin(lon) * cosLat * radius;
          const ringRadius = ring.radiusRatio * radius;
          const cellAngle = (Math.PI * 2) / ring.count;
          const visualWidth = Math.min(cellAngle * ringRadius * .92, photoSize * photoAspectRatio);
          placements.push({
            x,
            y,
            z,
            rx: -ring.centerLat,
            ry: Math.PI / 2 - lon,
            rz: 0,
            w: visualWidth,
            h: photoSize,
          });
        }
      });
      return placements;
    }

    function getPlacement(index, total) {
      const mode = data.styleId;
      if (mode === 'sphere') return buildSpherePlacements(total)[index];
      if (mode === 'cylinder') {
        const photoSizeDefault = getDefaultPhotoSize(total);
        const columns = getRingColumnCount(total);
        const rows = Math.ceil(total / columns);
        const column = index % columns;
        const row = Math.floor(index / columns);
        const angle = (column / columns) * Math.PI * 2;
        const radius = clamp(columns * .38, 10.8, 14.2) * pxScale;
        const yGap = clamp(10.6 / Math.max(1, rows - 1), 2.25, 2.95) * pxScale;
        const slotWidth = (Math.PI * 2 * radius) / columns;
        const photoSize = Math.min((slotWidth * .9) / photoAspectRatio, yGap * .98, photoSizeDefault);
        return { x: Math.sin(angle) * radius, y: (rows - 1) * yGap * .5 - row * yGap, z: Math.cos(angle) * radius, rx: 0, ry: angle, rz: 0, w: photoSize * photoAspectRatio, h: photoSize };
      }
      if (mode === 'spiral') {
        const photoSizeDefault = getDefaultPhotoSize(total);
        const progress = total === 1 ? .5 : index / (total - 1);
        const turns = clamp(total / 34, 2.8, 4.8);
        const angle = progress * Math.PI * 2 * turns;
        const radius = 13.4 * pxScale;
        const ySpan = Math.max((photoSizeDefault / pxScale) * turns * 1.18, clamp(total * .062, 8.4, 12.8)) * pxScale;
        const photosPerTurn = Math.max(1, total / turns);
        const slotWidth = (Math.PI * 2 * radius) / photosPerTurn;
        const photoSize = Math.min((slotWidth * .96) / photoAspectRatio, photoSizeDefault);
        return { x: Math.sin(angle) * radius, y: (.5 - progress) * ySpan, z: Math.cos(angle) * radius, rx: 0, ry: angle, rz: 0, w: photoSize * photoAspectRatio, h: photoSize };
      }
      const photoSizeDefault = getDefaultPhotoSize(total);
      const faceIndex = index % 6;
      const facePhotoCount = Math.floor((total + 5 - faceIndex) / 6);
      const indexInFace = Math.floor(index / 6);
      const columns = Math.min(5, Math.ceil(Math.sqrt(facePhotoCount)));
      const rows = Math.ceil(facePhotoCount / columns);
      const row = Math.floor(indexInFace / columns);
      const column = indexInFace % columns;
      const cubeHalfSize = 7.4 * pxScale;
      const cellWidth = (cubeHalfSize * 2) / columns;
      const cellHeight = (cubeHalfSize * 2) / rows;
      const photoSize = Math.min((cellWidth * .94) / photoAspectRatio, cellHeight * .94, photoSizeDefault);
      const offsetX = -cubeHalfSize + cellWidth * (column + .5);
      const offsetY = cubeHalfSize - cellHeight * (row + .5);
      const out = 4;
      const faces = [
        { x: offsetX, y: offsetY, z: cubeHalfSize + out, rx: 0, ry: 0, rz: 0 },
        { x: -offsetX, y: offsetY, z: -cubeHalfSize - out, rx: 0, ry: Math.PI, rz: 0 },
        { x: cubeHalfSize + out, y: offsetY, z: -offsetX, rx: 0, ry: Math.PI / 2, rz: 0 },
        { x: -cubeHalfSize - out, y: offsetY, z: offsetX, rx: 0, ry: -Math.PI / 2, rz: 0 },
        { x: offsetX, y: cubeHalfSize + out, z: -offsetY, rx: -Math.PI / 2, ry: 0, rz: 0 },
        { x: offsetX, y: -cubeHalfSize - out, z: offsetY, rx: Math.PI / 2, ry: 0, rz: 0 },
      ];
      return { ...faces[faceIndex], w: photoSize * photoAspectRatio, h: photoSize };
    }

    function renderCards() {
      gallery.innerHTML = '';
      const placements = data.styleId === 'sphere' ? buildSpherePlacements(photos.length) : null;
      photos.forEach((src, index) => {
        const card = document.createElement('button');
        const img = document.createElement('img');
        const p = placements ? placements[index] : getPlacement(index, photos.length);
        const colors = frameColors[index % frameColors.length];
        card.className = 'card';
        card.type = 'button';
        card.dataset.index = String(index);
        card.style.setProperty('--w', p.w + 'px');
        card.style.setProperty('--h', p.h + 'px');
        card.style.setProperty('--fit', fit);
        card.style.setProperty('--c1', colors[0]);
        card.style.setProperty('--c2', colors[1]);
        card.style.transform = 'translate3d(' + p.x + 'px,' + p.y + 'px,' + p.z + 'px) rotateY(' + p.ry + 'rad) rotateX(' + p.rx + 'rad) rotateZ(' + p.rz + 'rad)';
        img.src = src;
        img.alt = '照片 ' + (index + 1);
        card.appendChild(img);
        card.addEventListener('click', (event) => {
          event.preventDefault();
        });
        gallery.appendChild(card);
      });
    }

    function updateTransform() {
      gallery.style.transform = 'translate(-50%, -50%) scale(' + zoom + ') rotateX(' + rotationX + 'deg) rotateY(' + rotationY + 'deg)';
    }

    function animate() {
      if (!isDragging && !isPinching) targetRotationY += .035;
      rotationX += (targetRotationX - rotationX) * .18;
      rotationY += (targetRotationY - rotationY) * .18;
      zoom += (targetZoom - zoom) * .2;
      updateTransform();
      requestAnimationFrame(animate);
    }

    function getPreviewRect(aspectRatio) {
      const maxWidth = Math.min(window.innerWidth * .78, 860);
      const maxHeight = Math.min(window.innerHeight * .78, 860);
      const width = Math.min(maxWidth, maxHeight * aspectRatio);
      const height = width / aspectRatio;
      return {
        left: (window.innerWidth - width) / 2,
        top: (window.innerHeight - height) / 2,
        width,
        height,
      };
    }

    function setLightboxImageRect(rect, borderRadius) {
      lightboxImage.style.left = rect.left + 'px';
      lightboxImage.style.top = rect.top + 'px';
      lightboxImage.style.width = rect.width + 'px';
      lightboxImage.style.height = rect.height + 'px';
      lightboxImage.style.borderRadius = borderRadius;
    }

    function openLightbox(src, card) {
      if (!card || lightboxIsOpen) return;
      window.clearTimeout(lightboxTransitionTimer);
      activeCard = card;
      lightboxIsOpen = true;
      const sourceRect = card.getBoundingClientRect();
      lightboxImage.src = src;
      lightboxImage.style.transition = 'none';
      lightboxImage.style.objectFit = fit;
      setLightboxImageRect(sourceRect, '14px');
      lightbox.classList.add('open');

      const startAnimation = () => {
        const aspectRatio = lightboxImage.naturalWidth > 0 && lightboxImage.naturalHeight > 0
          ? lightboxImage.naturalWidth / lightboxImage.naturalHeight
          : sourceRect.width / Math.max(1, sourceRect.height);
        const targetRect = getPreviewRect(aspectRatio);
        requestAnimationFrame(() => {
          lightboxImage.style.transition = 'left 480ms cubic-bezier(0.19, 1, 0.22, 1), top 480ms cubic-bezier(0.19, 1, 0.22, 1), width 480ms cubic-bezier(0.19, 1, 0.22, 1), height 480ms cubic-bezier(0.19, 1, 0.22, 1), border-radius 480ms cubic-bezier(0.19, 1, 0.22, 1)';
          lightboxImage.style.objectFit = 'contain';
          setLightboxImageRect(targetRect, '28px');
        });
      };

      if (lightboxImage.complete && lightboxImage.naturalWidth > 0) {
        startAnimation();
      } else {
        lightboxImage.addEventListener('load', startAnimation, { once: true });
      }
    }

    function closeLightbox() {
      if (!lightboxIsOpen) return;
      window.clearTimeout(lightboxTransitionTimer);
      const targetRect = activeCard ? activeCard.getBoundingClientRect() : {
        left: window.innerWidth / 2,
        top: window.innerHeight / 2,
        width: 1,
        height: 1,
      };
      lightboxImage.style.transition = 'left 360ms cubic-bezier(0.19, 1, 0.22, 1), top 360ms cubic-bezier(0.19, 1, 0.22, 1), width 360ms cubic-bezier(0.19, 1, 0.22, 1), height 360ms cubic-bezier(0.19, 1, 0.22, 1), border-radius 360ms cubic-bezier(0.19, 1, 0.22, 1)';
      lightboxImage.style.objectFit = fit;
      setLightboxImageRect(targetRect, '14px');
      lightboxTransitionTimer = window.setTimeout(() => {
        lightbox.classList.remove('open');
        lightboxImage.removeAttribute('src');
        activeCard = null;
        lightboxIsOpen = false;
      }, 330);
    }

    function getPointerDistance() {
      const points = Array.from(activePointers.values());
      if (points.length < 2) return 0;
      return Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
    }

    function endPointer(pointerId) {
      activePointers.delete(pointerId);
      if (activePointers.size < 2) {
        isPinching = false;
        pinchStartDistance = 0;
      }
      if (activePointers.size === 0) {
        isDragging = false;
      }
    }

    stage.addEventListener('pointerdown', (event) => {
      activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      isDragging = true;
      moved = false;
      startX = lastX = event.clientX;
      startY = lastY = event.clientY;
      stage.setPointerCapture(event.pointerId);
      if (activePointers.size === 2) {
        isPinching = true;
        moved = true;
        pinchStartDistance = getPointerDistance();
        pinchStartZoom = targetZoom;
      }
    });
    stage.addEventListener('pointermove', (event) => {
      if (!activePointers.has(event.pointerId)) return;
      activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (isPinching && activePointers.size >= 2) {
        const distance = getPointerDistance();
        if (pinchStartDistance > 0) {
          targetZoom = clamp(pinchStartZoom * (distance / pinchStartDistance), .28, 2.8);
        }
        moved = true;
        return;
      }
      if (!isDragging || activePointers.size !== 1) return;
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      if (Math.abs(event.clientX - startX) + Math.abs(event.clientY - startY) > 8) moved = true;
      targetRotationY += dx * .22;
      targetRotationX = clamp(targetRotationX - dy * .16, -78, 78);
      lastX = event.clientX;
      lastY = event.clientY;
    });
    stage.addEventListener('pointerup', (event) => {
      const wasPinching = isPinching;
      endPointer(event.pointerId);
      if (!moved) {
        const pointerTarget = document.elementFromPoint(event.clientX, event.clientY);
        const card = pointerTarget && pointerTarget.closest ? pointerTarget.closest('.card') : null;
        if (card) openLightbox(photos[Number(card.dataset.index)], card);
      }
      setTimeout(() => { if (!wasPinching) moved = false; }, 80);
    });
    stage.addEventListener('pointercancel', (event) => {
      endPointer(event.pointerId);
      moved = true;
    });
    stage.addEventListener('wheel', (event) => {
      event.preventDefault();
      const speed = event.ctrlKey ? .0032 : .0018;
      targetZoom = clamp(targetZoom * Math.exp(-event.deltaY * speed), .28, 2.8);
    }, { passive: false });
    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
      closeLightbox();
    });
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeLightbox();
    });

    renderCards();
    animate();
  </script>
</body>
</html>`;
  };

  const handleExportHtml = async () => {
    if (!selectedStyle || isExporting) return;
    setIsExporting(true);
    try {
      const photoDataUrls = await Promise.all(images.map((url) => blobUrlToDataUrl(url)));
      const html = buildStandaloneGalleryHtml({
        title: `${selectedStyle.name}-3D相册`,
        styleId: selectedStyle.id,
        styleName: selectedStyle.name,
        photoDataUrls,
        cropToSquare: cropPreviewPhotos,
      });
      const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${selectedStyle.name}-3D相册.html`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(downloadUrl);
    } catch {
      alert('导出失败，请稍后重试');
    } finally {
      setIsExporting(false);
    }
  };

  const handleFileList = async (fileArray: File[]) => {
    if (isUploading) return;

    const validFiles = fileArray.filter((f) => f.type.startsWith('image/') || IMAGE_FILE_PATTERN.test(f.name));
    const unsupportedCount = fileArray.length - validFiles.length;

    if (validFiles.length === 0) {
      alert('请选择有效的图片文件');
      return;
    }

    const remaining = maxPhotos - images.length;
    if (remaining <= 0) {
      alert(`已达上限 ${maxPhotos} 张，请先清空或减少照片再上传`);
      return;
    }

    let toProcess = validFiles;
    if (validFiles.length > remaining) {
      toProcess = validFiles.slice(0, remaining);
      alert(
        `${selectedStyle?.name ?? '当前样式'}最多 ${maxPhotos} 张，已自动只取前 ${remaining} 张（剩余 ${validFiles.length - remaining} 张被忽略）`,
      );
    }

    setIsUploading(true);
    setUploadProgress({ done: 0, total: toProcess.length });

    const uploadedUrls: string[] = [];
    let skippedDuringProcessing = 0;

    for (const file of toProcess) {
      try {
        const url = await downscaleToBlobUrl(file);
        if (url) {
          uploadedUrls.push(url);
        } else {
          skippedDuringProcessing += 1;
        }
      } catch {
        skippedDuringProcessing += 1;
      } finally {
        setUploadProgress({ done: uploadedUrls.length + skippedDuringProcessing, total: toProcess.length });
      }
    }

    const skippedCount = unsupportedCount + skippedDuringProcessing;

    setImages((prev) => {
      const availableSlots = Math.max(0, maxPhotos - prev.length);
      const urlsToAdd = uploadedUrls.slice(0, availableSlots);
      uploadedUrls.slice(availableSlots).forEach((url) => URL.revokeObjectURL(url));
      return urlsToAdd.length > 0 ? [...prev, ...urlsToAdd] : prev;
    });

    setIsUploading(false);

    if (skippedCount > 0) {
      alert(`已跳过 ${skippedCount} 个不支持或无法读取的文件，其余图片已继续上传`);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileList(Array.from(e.dataTransfer.files));
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Snapshot files BEFORE clearing input.value, since clearing can
    // invalidate the FileList while async processing is still running.
    const files = e.target.files ? Array.from(e.target.files) : [];
    e.target.value = '';
    handleFileList(files);
  };

  const getStyleSwitchError = (style: GalleryStyle) => {
    if (images.length < style.minPhotos) {
      return `${style.name} 至少需要 ${style.minPhotos} 张照片，当前只有 ${images.length} 张。`;
    }
    if (images.length > style.maxPhotos) {
      return `${style.name} 最多支持 ${style.maxPhotos} 张照片，当前已有 ${images.length} 张。`;
    }
    if (style.multipleOf && images.length % style.multipleOf !== 0) {
      const lower = Math.floor(images.length / style.multipleOf) * style.multipleOf;
      const upper = Math.min(style.maxPhotos, lower + style.multipleOf);
      return `${style.name} 每一圈 ${style.multipleOf} 张，照片数量需要是 ${style.multipleOf} 的倍数。当前 ${images.length} 张，可调整为 ${lower || style.multipleOf}${upper !== lower ? ` 或 ${upper}` : ''} 张。`;
    }
    return null;
  };

  const handleGenerate = () => {
    if (!selectedStyle) return;
    const error = getStyleSwitchError(selectedStyle);
    if (error) {
      alert(error);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsGenerating(true);
    }, 1500);
  };

  const handleReset = () => {
    clearPreviewSwitchTimers();
    images.forEach((url) => URL.revokeObjectURL(url));
    setImages([]);
    setIsGenerating(false);
    setIsLoading(false);
    setPreviewSwitchingStyleId(null);
  };

  const handleExitPreview = () => {
    clearPreviewSwitchTimers();
    setIsGenerating(false);
    setIsLoading(false);
    setPreviewSwitchingStyleId(null);
  };

  const handleSwitchPreviewStyle = (styleId: GalleryStyleId) => {
    if (styleId === selectedStyleId || previewSwitchingStyleId) return;
    const nextStyle = getStyleById(styleId);
    const error = getStyleSwitchError(nextStyle);
    if (error) {
      alert(error);
      return;
    }
    clearPreviewSwitchTimers();
    setPreviewSwitchingStyleId(styleId);
    previewSwitchStartTimerRef.current = window.setTimeout(() => {
      setSelectedStyleId(styleId);
      previewSwitchStartTimerRef.current = null;
    }, 260);
    previewSwitchEndTimerRef.current = window.setTimeout(() => {
      setPreviewSwitchingStyleId(null);
      previewSwitchEndTimerRef.current = null;
    }, 900);
  };

  const handleSelectStyle = (styleId: GalleryStyleId, element?: HTMLElement) => {
    const style = getStyleById(styleId);
    const from = element?.getBoundingClientRect();
    if (from) {
      const logoFrom = styleLogoRefs.current[styleId]?.getBoundingClientRect() ?? from;
      const titleFrom = styleTitleRefs.current[styleId]?.getBoundingClientRect() ?? from;
      setStyleTransition({
        style,
        from,
        logoFrom,
        logoTo: getUploadLogoRect(),
        titleFrom,
        titleTo: getUploadTitleRect(),
        expanded: false,
        fading: false,
        direction: 'enter',
      });
      setSelectedStyleId(styleId);
      setUploadPageVisible(false);
      setHomeTransitionCoverVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const logoTo = uploadLogoRef.current?.getBoundingClientRect() ?? getUploadLogoRect();
          const titleTo = uploadTitleRef.current?.getBoundingClientRect() ?? getUploadTitleRect();
          setStyleTransition((current) => current ? { ...current, logoTo, titleTo, expanded: true } : current);
          window.setTimeout(() => {
            setUploadPageVisible(true);
            setHomeTransitionCoverVisible(false);
          }, STYLE_TRANSITION_MS - 120);
          window.setTimeout(() => {
            setStyleTransition((current) => current ? { ...current, fading: true } : current);
          }, STYLE_TRANSITION_MS);
          window.setTimeout(() => {
            setStyleTransition(null);
          }, STYLE_TRANSITION_SETTLE_MS);
        });
      });
    } else {
      setSelectedStyleId(styleId);
      setUploadPageVisible(true);
    }
    setImages([]);
    setIsGenerating(false);
    setIsLoading(false);
    setPreviewSwitchingStyleId(null);
  };

  const handleBackToStyles = () => {
    clearPreviewSwitchTimers();
    setPreviewSwitchingStyleId(null);
    if (selectedStyle) {
      const style = selectedStyle;
      const fullViewport = new DOMRect(0, 0, window.innerWidth, window.innerHeight);
      const uploadLogoRect = uploadLogoRef.current?.getBoundingClientRect() ?? getUploadLogoRect();
      const uploadTitleRect = uploadTitleRef.current?.getBoundingClientRect() ?? getUploadTitleRect();
      setStyleTransition({
        style,
        from: fullViewport,
        logoFrom: uploadLogoRect,
        logoTo: uploadLogoRect,
        titleFrom: uploadTitleRect,
        titleTo: uploadTitleRect,
        expanded: true,
        fading: false,
        direction: 'exit',
      });
      setUploadPageVisible(false);
      setSelectedStyleId(null);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const targetCard = styleCardRefs.current[style.id];
          const targetRect = targetCard?.getBoundingClientRect() ?? fullViewport;
          const targetLogo = styleLogoRefs.current[style.id]?.getBoundingClientRect() ?? targetRect;
          const targetTitle = styleTitleRefs.current[style.id]?.getBoundingClientRect() ?? targetRect;
          setStyleTransition((current) => current ? { ...current, from: targetRect, logoFrom: targetLogo, titleFrom: targetTitle, expanded: false } : current);
          window.setTimeout(() => {
            setStyleTransition(null);
          }, STYLE_TRANSITION_SETTLE_MS);
        });
      });
      window.setTimeout(() => {
        images.forEach((url) => URL.revokeObjectURL(url));
        setImages([]);
      }, 220);
    } else {
      images.forEach((url) => URL.revokeObjectURL(url));
      setImages([]);
      setSelectedStyleId(null);
    }
    setIsGenerating(false);
    setIsLoading(false);
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setImages((prev) => {
      const removed = prev[indexToRemove];
      if (removed) URL.revokeObjectURL(removed);
      return prev.filter((_, index) => index !== indexToRemove);
    });
  };

  const renderStyleTransition = () => {
    if (!styleTransition) return null;

    const targetWidth = window.innerWidth;
    const targetHeight = window.innerHeight;
    const targetLeft = 0;
    const targetTop = 0;
    const rectStyle = styleTransition.expanded
      ? {
        left: targetLeft,
        top: targetTop,
        width: targetWidth,
        height: targetHeight,
        borderRadius: styleTransition.fading ? 0 : STYLE_CARD_RADIUS,
        opacity: styleTransition.fading ? 0 : 1,
      }
      : {
        left: styleTransition.from.left,
        top: styleTransition.from.top,
        width: styleTransition.from.width,
        height: styleTransition.from.height,
        borderRadius: STYLE_CARD_RADIUS,
        opacity: 1,
      };
    const currentLogoRect = styleTransition.expanded ? styleTransition.logoTo : styleTransition.logoFrom;
    const currentTitleRect = styleTransition.expanded ? styleTransition.titleTo : styleTransition.titleFrom;

    return (
      <div className="pointer-events-none fixed inset-0 z-50">
        <div
          className={`absolute overflow-hidden border border-white/20 bg-gradient-to-br ${styleTransition.style.surface} shadow-[0_32px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-[left,top,width,height,opacity] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]`}
          style={{ ...rectStyle, transitionDuration: `${STYLE_TRANSITION_MS}ms` }}
        >
          <div className="absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500/40 blur-3xl" />
          <div className="absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/35 blur-3xl" />
        </div>
        <img
          src={styleTransition.style.logo}
          alt=""
          aria-hidden="true"
          className="fixed object-contain transition-all ease-[cubic-bezier(0.19,1,0.22,1)]"
          style={{
            left: currentLogoRect.left,
            top: currentLogoRect.top,
            width: currentLogoRect.width,
            height: currentLogoRect.height,
            opacity: 1,
            transitionDuration: `${STYLE_TRANSITION_MS}ms`,
          }}
          draggable={false}
        />
        <div
          className="fixed whitespace-nowrap bg-gradient-to-r from-white via-fuchsia-100 to-blue-100 bg-clip-text font-bold text-transparent transition-all ease-[cubic-bezier(0.19,1,0.22,1)]"
          style={{
            left: currentTitleRect.left,
            top: currentTitleRect.top,
            width: currentTitleRect.width,
            height: currentTitleRect.height,
            fontSize: styleTransition.expanded ? '2.25rem' : '1.5rem',
            lineHeight: styleTransition.expanded ? '2.5rem' : '2rem',
            textAlign: styleTransition.expanded ? 'center' : 'left',
            opacity: 1,
            transitionDuration: `${STYLE_TRANSITION_MS}ms`,
          }}
        >
          {styleTransition.style.name}
        </div>
      </div>
    );
  };

  const renderHomeTransitionCover = () => {
    if (!homeTransitionCoverVisible) return null;

    return (
      <div className="pointer-events-none fixed inset-0 z-40 bg-gradient-to-br from-slate-950 via-purple-950 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500 blur-3xl" />
          <div className="absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500 blur-3xl" />
        </div>
      </div>
    );
  };

  if (!selectedStyle) {
    return (
      <div
        className="min-h-dvh bg-gradient-to-br from-slate-950 via-purple-950 to-black text-white relative overflow-y-auto xl:h-dvh xl:overflow-hidden"
        style={{ '--home-edge-gap': 'clamp(20px, 4.4vw, 96px)' } as CSSProperties}
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500 blur-3xl" />
          <div className="absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500 blur-3xl" />
        </div>

        <main className="relative z-10 mx-auto flex min-h-dvh w-full flex-col px-[var(--home-edge-gap)] pb-[var(--home-edge-gap)] pt-8 xl:h-dvh xl:min-h-0">
          <header className="mb-8 grid grid-cols-1 items-end justify-between gap-6 md:grid-cols-2 xl:grid-cols-[repeat(4,minmax(0,410px))]">
            <div className="md:col-span-1 xl:col-span-2">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/75 backdrop-blur-md">
                <Sparkles className="size-4" />
                高级展厅式 3D 相册
              </div>
              <h1 className="text-5xl font-bold tracking-normal sm:text-6xl">3D 影像空间</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/68">
                先选择展示样式，再按样式要求上传照片，生成可旋转、可放大的立体影像展厅。
              </p>
            </div>
            <div className="w-full rounded-[28px] border border-white/10 bg-white/10 px-5 py-4 text-sm text-white/70 backdrop-blur-xl shadow-2xl md:col-start-2 xl:col-start-4">
              <div className="flex items-center gap-2 text-white">
                <Shapes className="size-4" />
                首批 4 种空间样式
              </div>
              <p className="mt-1">照片球体 / 圆柱画廊 / 多面体相册 / 螺旋星轨</p>
            </div>
          </header>

          <section className="grid min-h-[430px] flex-1 grid-cols-1 items-stretch justify-between gap-6 md:grid-cols-2 xl:min-h-0 xl:grid-cols-[repeat(4,minmax(0,410px))]">
            {GALLERY_STYLES.map((style) => (
              <button
                key={style.id}
                type="button"
                ref={(element) => {
                  styleCardRefs.current[style.id] = element;
                }}
                onClick={(event) => handleSelectStyle(style.id, event.currentTarget)}
                className={`group relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[48px] bg-gradient-to-br ${style.surface} p-4 text-left shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 xl:min-h-0`}
              >
                <div className="relative z-10 flex min-h-0 flex-1 flex-col">
                <StylePreview
                  logo={style.logo}
                  name={style.name}
                  transitioning={styleTransition?.style.id === style.id}
                  logoRef={(element) => {
                    styleLogoRefs.current[style.id] = element;
                  }}
                />
                <div className="flex shrink-0 flex-col pt-4 xl:pt-3">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h2
                      ref={(element) => {
                        styleTitleRefs.current[style.id] = element;
                      }}
                      className={`text-2xl font-semibold text-white ${
                        styleTransition?.style.id === style.id ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      {style.name}
                    </h2>
                    <span className={`h-2.5 w-12 rounded-full bg-gradient-to-r ${style.accent}`} />
                  </div>
                  <p className="min-h-[4.5rem] text-sm leading-6 text-white/62 xl:min-h-[3.75rem] xl:leading-5">{style.subtitle}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 xl:mt-3 xl:pt-3">
                    <span className="text-sm text-white/55">{style.requirement}</span>
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition-transform group-hover:scale-105">
                      选择
                    </span>
                  </div>
                </div>
                </div>
              </button>
            ))}
          </section>
        </main>
        {renderStyleTransition()}
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSpinner message={`正在生成 ${selectedStyle.name}...`} />;
  }

  if (isGenerating) {
    return (
      <div className="size-full bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <ErrorBoundary>
          {selectedStyle.id === 'sphere' ? (
            <PhotoSphere3D images={images} cropToSquare={cropPreviewPhotos} />
          ) : (
            <PhotoLayout3D images={images} variant={selectedStyle.variant ?? 'cylinder'} cropToSquare={cropPreviewPhotos} />
          )}
        </ErrorBoundary>
        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 flex gap-3 z-10">
          <button
            onClick={handleExitPreview}
            className="px-3 py-2 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            退出预览
          </button>
          <button
            onClick={handleBackToStyles}
            className="px-3 py-2 sm:px-6 sm:py-3 bg-white/80 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base"
          >
            重新选样式
          </button>
        </div>
        <div className="absolute left-3 top-1/2 z-10 w-[180px] max-w-[calc(100vw-1.5rem)] -translate-y-1/2 rounded-[40px] border border-white/14 bg-black/28 p-4 shadow-2xl shadow-black/25 backdrop-blur-xl sm:left-6">
          <div className="flex flex-col gap-3 rounded-[28px]">
            {GALLERY_STYLES.map((style) => {
              const isActive = selectedStyle.id === style.id;
              return (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => handleSwitchPreviewStyle(style.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group flex h-14 w-full shrink-0 items-center gap-2 rounded-[26px] px-3 text-left text-sm font-semibold transition-all active:scale-95 ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-xl shadow-black/20'
                      : 'bg-white/12 text-white/90 shadow-sm hover:bg-white/20'
                  }`}
                >
                  <img
                    src={style.logo}
                    alt=""
                    aria-hidden="true"
                    className="size-7 shrink-0 object-contain"
                    draggable={false}
                  />
                  <span className="min-w-0 flex-1 whitespace-nowrap">{style.name}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="absolute top-3 right-3 sm:top-6 sm:right-6 flex max-w-[calc(100vw-1.5rem)] flex-wrap justify-end gap-3 z-10">
          <button
            type="button"
            onClick={handleExportHtml}
            disabled={isExporting}
            className="px-3 py-2 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            {isExporting ? '导出中' : '导出HTML'}
          </button>
          <button
            type="button"
            onClick={() => setCropPreviewPhotos((current) => !current)}
            aria-pressed={cropPreviewPhotos}
            className="px-3 py-2 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base"
          >
            <Crop className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>1:1 裁剪</span>
            <span
              className={`relative ml-1 h-6 w-11 rounded-full p-0.5 transition-colors ${
                cropPreviewPhotos ? 'bg-purple-600' : 'bg-slate-300'
              }`}
              aria-hidden="true"
            >
              <span
                className={`block size-5 rounded-full bg-white shadow-md transition-transform duration-200 ease-out ${
                  cropPreviewPhotos ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </span>
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-2 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base"
          >
            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
            重新开始
          </button>
        </div>
        <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-black/60 text-white px-3 py-1.5 sm:px-6 sm:py-3 rounded-full backdrop-blur-md border border-white/20 shadow-xl text-xs sm:text-base">
          📸 {selectedStyle.name} · {images.length} 张
        </div>
        <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-black/40 text-white/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm text-[10px] sm:text-sm">
          🎮 单指旋转 · 双指缩放
        </div>
        {previewSwitchingStyle && (
          <LoadingSpinner
            message={`正在切换到 ${previewSwitchingStyle.name}...`}
            className="z-30 bg-gradient-to-br from-gray-900/95 via-purple-900/95 to-black/95"
          />
        )}
      </div>
    );
  }

  const previewTileSize =
    images.length <= 1 ? 112 :
    images.length <= 4 ? 104 :
    images.length <= 12 ? 88 :
    images.length <= 36 ? 72 :
    images.length <= 80 ? 60 :
    52;
  const previewColumnCount = Math.min(Math.max(images.length, 1), 10);
  const previewGridWidth = previewTileSize * previewColumnCount + 12 * Math.max(0, previewColumnCount - 1);
  const previewPanelWidth = previewGridWidth + 32;
  const uploadedFrameWidth = Math.min(Math.max(previewPanelWidth + 44, 460), 940);
  const hasUploadedImages = images.length > 0;
  return (
    <div className={`h-dvh flex justify-center bg-gradient-to-br ${selectedStyle.surface} relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500 blur-3xl" />
      </div>
      <button
        type="button"
        onClick={handleBackToStyles}
        className="absolute left-4 top-4 z-20 rounded-full bg-white/85 px-4 py-2 text-sm text-gray-800 shadow-xl backdrop-blur-md transition-all hover:bg-white hover:text-purple-700 sm:left-6 sm:top-6"
      >
        <span className="inline-flex items-center gap-2">
          <ArrowLeft className="size-4" />
          重选样式
        </span>
      </button>
      <div className={`${hasUploadedImages ? 'max-w-[960px]' : 'max-w-2xl'} w-full px-6 pb-4 pt-14 sm:pt-16 relative z-10 flex h-full flex-col min-h-0 transition-opacity duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${uploadPageVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center mb-4 flex shrink-0 flex-col items-center">
          <div className={`mb-3 ${styleTransition ? 'opacity-0' : 'opacity-100'}`}>
            <StylePreview
              logo={selectedStyle.logo}
              name={selectedStyle.name}
              compact
              transitioning={Boolean(styleTransition)}
              logoRef={(element) => {
                uploadLogoRef.current = element;
              }}
            />
          </div>
          <h1
            ref={uploadTitleRef}
            className={`text-4xl mb-2 bg-gradient-to-r from-white via-fuchsia-100 to-blue-100 bg-clip-text text-transparent font-bold ${styleTransition ? 'opacity-0' : 'opacity-100'}`}
          >
            {selectedStyle.name}
          </h1>
          <p className="text-white/70 text-base">{selectedStyle.name}{selectedStyle.multipleOf ? `每圈 ${selectedStyle.multipleOf} 张，需上传 ${selectedStyle.multipleOf} 的倍数` : `需要上传 ${selectedStyle.minPhotos}-${selectedStyle.maxPhotos} 张照片`}</p>
        </div>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{
            width: hasUploadedImages ? `${uploadedFrameWidth}px` : 'min(100%, clamp(380px, 48dvh, 520px))',
            maxWidth: hasUploadedImages ? '92vw' : undefined,
            height: hasUploadedImages ? 'clamp(360px, 46dvh, 500px)' : 'min(100%, clamp(380px, 48dvh, 520px))',
          }}
          className={`relative border-4 border-dashed rounded-[56px] p-4 text-center transition-all duration-300 shadow-xl flex shrink-0 self-center sm:p-5 ${
            isDragging
              ? 'border-purple-500 bg-purple-100/80 scale-105 shadow-2xl shadow-purple-500/50'
              : 'border-gray-300 bg-white/80 backdrop-blur-sm hover:border-purple-400 hover:shadow-2xl'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,.heic,.heif"
            onChange={handleFileInput}
            className="hidden"
          />

          <div className="flex flex-col items-center gap-3 w-full min-h-0">
            {images.length === 0 ? (
              <div className="w-full min-h-0 flex flex-1 flex-col items-center">
                <div className="flex-1 min-h-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center shadow-xl animate-bounce">
                    <Upload className="text-white" size={40} />
                  </div>

                  <div>
                    <p className="text-2xl mb-2 font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">拖拽照片到这里</p>
                    <p className="text-gray-500">或者点击下方按钮选择文件</p>
                  </div>
                </div>

                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="group relative w-full px-10 py-4 rounded-[28px] text-white text-lg font-semibold shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 active:scale-[0.98] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] animate-[gradient-x_4s_ease_infinite]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  <span className="relative flex items-center justify-center gap-2">
                    <Camera size={22} />
                    {isUploading ? `上传中 ${uploadProgress.done}/${uploadProgress.total}` : '选择照片'}
                  </span>
                </button>
              </div>
            ) : (
              <div className="w-full min-h-0 flex flex-1 flex-col animate-fade-in">
                <div className="flex shrink-0 items-center justify-between mb-2 px-0">
                  <p className="text-base text-gray-700">
                    已上传 <span className="text-purple-600 font-bold text-xl">{images.length}</span> / {selectedStyle.maxPhotos} 张
                    {isUploading && (
                      <span className="ml-2 text-xs text-blue-600">上传中 {uploadProgress.done}/{uploadProgress.total}</span>
                    )}
                    {images.length < selectedStyle.minPhotos && (
                      <span className="ml-2 text-xs text-amber-600">还需 {selectedStyle.minPhotos - images.length} 张</span>
                    )}
                    {selectedStyle.multipleOf && images.length >= selectedStyle.minPhotos && images.length % selectedStyle.multipleOf !== 0 && (
                      <span className="ml-2 text-xs text-amber-600">需补到 {Math.min(selectedStyle.maxPhotos, Math.ceil(images.length / selectedStyle.multipleOf) * selectedStyle.multipleOf)} 张</span>
                    )}
                  </p>
                  <button
                    onClick={handleReset}
                    disabled={isUploading}
                    className="text-sm text-red-500 hover:text-red-700 hover:scale-110 transition-all px-3 py-1 rounded-full hover:bg-red-50"
                  >
                    清空
                  </button>
                </div>

                <div
                  className="flex-1 min-h-0 mx-auto overflow-y-auto overscroll-contain p-4 bg-gradient-to-br from-gray-50 to-purple-50 rounded-[34px] border border-purple-100 shadow-inner"
                  style={{ width: '100%', boxSizing: 'border-box' }}
                >
                  <div
                    className="grid gap-3 justify-start"
                    style={{
                      gridTemplateColumns: `repeat(${previewColumnCount}, ${previewTileSize}px)`,
                      width: `${previewGridWidth}px`,
                      maxWidth: '100%',
                    }}
                  >
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="group relative aspect-square rounded-[20px] overflow-hidden border-2 border-white shadow-md transition-all duration-300 hover:shadow-xl hover:z-10"
                    >
                      <img
                        src={img}
                        alt={`预览 ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        disabled={isUploading}
                        aria-label={`删除第 ${index + 1} 张照片`}
                        className="absolute top-1 right-1 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black/65 text-white opacity-100 shadow-md transition-opacity hover:bg-red-500 active:scale-95 sm:opacity-0 sm:group-hover:opacity-100"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                  </div>
                </div>

                <div className="shrink-0 pt-3 grid grid-cols-2 gap-3 w-full">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={images.length >= selectedStyle.maxPhotos || isUploading}
                    className="group relative w-full px-6 py-4 rounded-[28px] text-white text-lg font-semibold shadow-lg overflow-hidden transition-all duration-300 enabled:hover:shadow-2xl enabled:hover:shadow-blue-500/40 enabled:active:scale-[0.98] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] animate-[gradient-x_4s_ease_infinite] disabled:opacity-50 disabled:cursor-not-allowed disabled:animate-none"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                    <span className="relative flex items-center justify-center gap-2">
                      <Camera size={22} />
                      {isUploading ? `上传中 ${uploadProgress.done}/${uploadProgress.total}` : '继续上传'}
                    </span>
                  </button>
                  <button
                    onClick={handleGenerate}
                    disabled={images.length < selectedStyle.minPhotos || Boolean(selectedStyle.multipleOf && images.length % selectedStyle.multipleOf !== 0) || isUploading}
                    className="group relative w-full px-6 py-4 rounded-[28px] text-white text-lg font-semibold shadow-lg overflow-hidden transition-all duration-300 enabled:hover:shadow-2xl enabled:hover:shadow-purple-500/40 enabled:active:scale-[0.98] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-600 bg-[length:200%_100%] animate-[gradient-x_4s_ease_infinite] disabled:opacity-50 disabled:cursor-not-allowed disabled:animate-none"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                    <span className="relative flex items-center justify-center gap-2">
                      <span>✨</span>
                      开始生成
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto pb-3 pt-5 text-center space-y-2.5 shrink-0">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm font-medium text-white/80">
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 shadow-sm backdrop-blur-md">
              <Sparkles className="size-4 text-fuchsia-200" />
              <span>支持 JPG、PNG、HEIC 等格式</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 shadow-sm backdrop-blur-md">
              <Gamepad2 className="size-4 text-sky-200" />
              <span>生成后可自由旋转、缩放</span>
            </div>
          </div>
          <p className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-black/15 px-3 py-1.5 text-xs font-medium text-white/55 backdrop-blur-sm">
            <Smartphone className="size-3.5 text-white/45" />
            完美支持苹果 iPhone 相机拍摄的照片
          </p>
        </div>
      </div>
      {renderHomeTransitionCover()}
      {renderStyleTransition()}
    </div>
  );
}

import { useState, useRef, Component, ReactNode } from 'react';
import { Upload, Camera, Trash2, ArrowLeft, X, Sparkles, Shapes } from 'lucide-react';
import PhotoSphere3D from './components/PhotoSphere3D';
import PhotoLayout3D, { PhotoLayoutVariant } from './components/PhotoLayout3D';
import LoadingSpinner from './components/LoadingSpinner';
import sphereLogo from '../assets/gallery-logos/sphere.png';
import cylinderLogo from '../assets/gallery-logos/cylinder.png';
import polyhedronLogo from '../assets/gallery-logos/polyhedron.png';
import spiralLogo from '../assets/gallery-logos/spiral.png';

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidCatch(error: Error, info: any) {
    console.error('3D gallery crashed:', error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-white">
          <div className="max-w-lg bg-red-900/60 rounded-2xl p-6 backdrop-blur-md border border-red-400/40">
            <p className="text-lg font-bold mb-2">3D 影像空间渲染出错</p>
            <pre className="text-xs whitespace-pre-wrap break-all opacity-80">
              {String(this.state.error?.message || this.state.error)}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const IMAGE_FILE_PATTERN = /\.(avif|bmp|gif|heic|heif|jpe?g|png|webp)$/i;

type GalleryStyleId = 'sphere' | 'cylinder' | 'polyhedron' | 'spiral';

type GalleryStyle = {
  id: GalleryStyleId;
  name: string;
  subtitle: string;
  minPhotos: number;
  maxPhotos: number;
  accent: string;
  preview: 'orb' | 'cylinder' | 'polyhedron' | 'spiral';
  logo: string;
  variant?: PhotoLayoutVariant;
};

type StyleTransition = {
  style: GalleryStyle;
  from: DOMRect;
  expanded: boolean;
  fading: boolean;
  direction: 'enter' | 'exit';
};

const GALLERY_STYLES: GalleryStyle[] = [
  {
    id: 'sphere',
    name: '照片球体',
    subtitle: '照片围成立体球面，适合大量回忆的沉浸式浏览',
    minPhotos: 24,
    maxPhotos: 120,
    accent: 'from-violet-500 via-fuchsia-500 to-blue-500',
    preview: 'orb',
    logo: sphereLogo,
  },
  {
    id: 'cylinder',
    name: '圆柱画廊',
    subtitle: '像环形展厅一样环绕观看，横向浏览节奏更稳定',
    minPhotos: 12,
    maxPhotos: 80,
    accent: 'from-cyan-500 via-blue-500 to-violet-500',
    preview: 'cylinder',
    logo: cylinderLogo,
    variant: 'cylinder',
  },
  {
    id: 'polyhedron',
    name: '多面体相册',
    subtitle: '照片分布在晶体切面上，适合更利落的高级展示',
    minPhotos: 12,
    maxPhotos: 60,
    accent: 'from-amber-400 via-rose-500 to-violet-600',
    preview: 'polyhedron',
    logo: polyhedronLogo,
    variant: 'polyhedron',
  },
  {
    id: 'spiral',
    name: '螺旋星轨',
    subtitle: '照片沿上升轨道展开，适合时间线和成长记录',
    minPhotos: 20,
    maxPhotos: 100,
    accent: 'from-emerald-400 via-cyan-500 to-indigo-600',
    preview: 'spiral',
    logo: spiralLogo,
    variant: 'spiral',
  },
];

const getStyleById = (id: GalleryStyleId) => GALLERY_STYLES.find((style) => style.id === id) ?? GALLERY_STYLES[0];

function StylePreview({
  accent,
  logo,
  name,
  compact = false,
}: {
  accent: string;
  logo: string;
  name: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`${compact ? 'size-28 rounded-[20px]' : 'h-[clamp(190px,38%,376px)] rounded-[24px]'} relative shrink-0 overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-black border border-white/10 shadow-inner`}
    >
      <div className={`absolute inset-0 opacity-25 bg-gradient-to-br ${accent}`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={logo}
          alt={`${name} logo`}
          className={`${compact ? 'size-[92px]' : 'h-[92%] w-[92%]'} object-contain`}
          draggable={false}
        />
      </div>
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
  const styleCardRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const selectedStyle = selectedStyleId ? getStyleById(selectedStyleId) : null;
  const maxPhotos = selectedStyle?.maxPhotos ?? GALLERY_STYLES[0].maxPhotos;
  const minPhotos = selectedStyle?.minPhotos ?? GALLERY_STYLES[0].minPhotos;

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

    let done = 0;
    const processed = await Promise.all(
      toProcess.map(async (file) => {
        const url = await downscaleToBlobUrl(file);
        done += 1;
        setUploadProgress({ done, total: toProcess.length });
        return url;
      }),
    );
    const uploadedUrls = processed.filter((url): url is string => Boolean(url));
    const skippedCount = unsupportedCount + processed.length - uploadedUrls.length;

    if (uploadedUrls.length > 0) {
      setImages((prev) => {
        const availableSlots = Math.max(0, maxPhotos - prev.length);
        const urlsToAdd = uploadedUrls.slice(0, availableSlots);
        uploadedUrls.slice(availableSlots).forEach((url) => URL.revokeObjectURL(url));
        return [...prev, ...urlsToAdd];
      });
    }

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

  const handleGenerate = () => {
    if (!selectedStyle) return;
    if (images.length < selectedStyle.minPhotos) {
      alert(`${selectedStyle.name} 至少需要 ${selectedStyle.minPhotos} 张照片`);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsGenerating(true);
    }, 1500);
  };

  const handleReset = () => {
    images.forEach((url) => URL.revokeObjectURL(url));
    setImages([]);
    setIsGenerating(false);
    setIsLoading(false);
  };

  const handleExitPreview = () => {
    setIsGenerating(false);
    setIsLoading(false);
  };

  const handleSelectStyle = (styleId: GalleryStyleId, element?: HTMLElement) => {
    const style = getStyleById(styleId);
    const from = element?.getBoundingClientRect();
    if (from) {
      setStyleTransition({ style, from, expanded: false, fading: false, direction: 'enter' });
      setSelectedStyleId(styleId);
      setUploadPageVisible(false);
      window.setTimeout(() => {
        setStyleTransition((current) => current ? { ...current, expanded: true } : current);
        setUploadPageVisible(true);
      }, 20);
      window.setTimeout(() => {
        setStyleTransition((current) => current ? { ...current, fading: true } : current);
      }, 360);
      window.setTimeout(() => {
        setStyleTransition(null);
      }, 720);
    } else {
      setSelectedStyleId(styleId);
      setUploadPageVisible(true);
    }
    setImages([]);
    setIsGenerating(false);
    setIsLoading(false);
  };

  const handleBackToStyles = () => {
    if (selectedStyle) {
      const style = selectedStyle;
      const fullViewport = new DOMRect(0, 0, window.innerWidth, window.innerHeight);
      setStyleTransition({ style, from: fullViewport, expanded: true, fading: false, direction: 'exit' });
      setUploadPageVisible(false);
      setSelectedStyleId(null);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const targetCard = styleCardRefs.current[style.id];
          const targetRect = targetCard?.getBoundingClientRect() ?? fullViewport;
          setStyleTransition((current) => current ? { ...current, from: targetRect, expanded: false } : current);
        });
      });
      window.setTimeout(() => {
        images.forEach((url) => URL.revokeObjectURL(url));
        setImages([]);
      }, 220);
      window.setTimeout(() => {
        setStyleTransition(null);
      }, 560);
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
        borderRadius: 0,
        opacity: styleTransition.fading ? 0 : 1,
      }
      : {
        left: styleTransition.from.left,
        top: styleTransition.from.top,
        width: styleTransition.from.width,
        height: styleTransition.from.height,
        borderRadius: 28,
        opacity: 1,
      };

    return (
      <div className="pointer-events-none fixed inset-0 z-50">
        <div
          className={`absolute overflow-hidden border border-white/20 bg-gradient-to-br from-slate-950 via-purple-950 to-black shadow-[0_32px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]`}
          style={rectStyle}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${styleTransition.style.accent} opacity-25`} />
          <div className="absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500/40 blur-3xl" />
          <div className="absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/35 blur-3xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">{styleTransition.style.name}</p>
              <p className="mt-2 text-sm text-white/70">{styleTransition.style.minPhotos}-{styleTransition.style.maxPhotos} 张照片</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (!selectedStyle) {
    return (
      <div className="min-h-dvh bg-gradient-to-br from-slate-950 via-purple-950 to-black text-white relative overflow-y-auto">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500 blur-3xl" />
          <div className="absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500 blur-3xl" />
        </div>

        <main className="relative z-10 mx-auto flex min-h-dvh w-full flex-col px-5 pb-5 pt-8 sm:px-8 sm:pb-8 xl:px-[clamp(32px,4.4vw,96px)] xl:pb-[clamp(32px,4.4vw,96px)]">
          <header className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/75 backdrop-blur-md">
                <Sparkles className="size-4" />
                高级展厅式 3D 相册
              </div>
              <h1 className="text-5xl font-bold tracking-normal sm:text-6xl">3D 影像空间</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/68">
                先选择展示样式，再按样式要求上传照片，生成可旋转、可放大的立体影像展厅。
              </p>
            </div>
            <div className="w-full rounded-[28px] border border-white/10 bg-white/10 px-5 py-4 text-sm text-white/70 backdrop-blur-xl shadow-2xl sm:w-[min(100%,410px)]">
              <div className="flex items-center gap-2 text-white">
                <Shapes className="size-4" />
                首批 4 种空间样式
              </div>
              <p className="mt-1">照片球体 / 圆柱画廊 / 多面体相册 / 螺旋星轨</p>
            </div>
          </header>

          <section className="grid min-h-[430px] flex-1 grid-cols-1 items-stretch justify-between gap-6 md:grid-cols-2 xl:grid-cols-[repeat(4,minmax(0,410px))]">
            {GALLERY_STYLES.map((style) => (
              <button
                key={style.id}
                type="button"
                ref={(element) => {
                  styleCardRefs.current[style.id] = element;
                }}
                onClick={(event) => handleSelectStyle(style.id, event.currentTarget)}
                className="group flex h-full min-h-[430px] flex-col overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.08] p-4 text-left shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.12]"
              >
                <StylePreview accent={style.accent} logo={style.logo} name={style.name} />
                <div className="flex min-h-0 flex-1 flex-col px-1 pt-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h2 className="text-2xl font-semibold text-white">{style.name}</h2>
                    <span className={`h-2.5 w-12 rounded-full bg-gradient-to-r ${style.accent}`} />
                  </div>
                  <p className="min-h-[4.5rem] text-sm leading-6 text-white/62">{style.subtitle}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-sm text-white/55">需要 {style.minPhotos}-{style.maxPhotos} 张</span>
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition-transform group-hover:scale-105">
                      选择
                    </span>
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
    return <LoadingSpinner />;
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
            <PhotoSphere3D images={images} />
          ) : (
            <PhotoLayout3D images={images} variant={selectedStyle.variant ?? 'cylinder'} />
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
        <div className="absolute top-3 right-3 sm:top-6 sm:right-6 flex gap-3 z-10">
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
  const previewPanelWidth = previewGridWidth + 40;
  const uploadedFrameWidth = Math.min(Math.max(previewPanelWidth + 64, 480), 980);
  const hasUploadedImages = images.length > 0;
  return (
    <div className="h-dvh flex justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-black relative overflow-hidden">
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
      <div className={`${hasUploadedImages ? 'max-w-[960px]' : 'max-w-2xl'} w-full px-6 pb-4 pt-14 sm:pt-16 relative z-10 flex h-full flex-col min-h-0 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${uploadPageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <div className="text-center mb-4 animate-fade-in flex shrink-0 flex-col items-center">
          <div className="mb-3">
            <StylePreview accent={selectedStyle.accent} logo={selectedStyle.logo} name={selectedStyle.name} compact />
          </div>
          <span className={`mb-2 h-1.5 w-14 rounded-full bg-gradient-to-r ${selectedStyle.accent}`} />
          <h1 className="text-4xl mb-2 bg-gradient-to-r from-white via-fuchsia-100 to-blue-100 bg-clip-text text-transparent font-bold">{selectedStyle.name}</h1>
          <p className="text-white/70 text-base">{selectedStyle.name}需要上传 {selectedStyle.minPhotos}-{selectedStyle.maxPhotos} 张照片</p>
        </div>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{
            width: hasUploadedImages ? `${uploadedFrameWidth}px` : 'min(100%, clamp(380px, 48dvh, 520px))',
            maxWidth: hasUploadedImages ? '92vw' : undefined,
            height: hasUploadedImages ? 'clamp(380px, 48dvh, 520px)' : 'min(100%, clamp(380px, 48dvh, 520px))',
          }}
          className={`relative border-4 border-dashed rounded-[56px] p-7 text-center transition-all duration-300 shadow-xl flex shrink-0 self-center ${
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

          <div className="flex flex-col items-center gap-4 w-full min-h-0">
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
                <div className="flex shrink-0 items-center justify-between mb-3 px-1">
                  <p className="text-base text-gray-700">
                    已上传 <span className="text-purple-600 font-bold text-xl">{images.length}</span> / {selectedStyle.maxPhotos} 张
                    {isUploading && (
                      <span className="ml-2 text-xs text-blue-600">上传中 {uploadProgress.done}/{uploadProgress.total}</span>
                    )}
                    {images.length < selectedStyle.minPhotos && (
                      <span className="ml-2 text-xs text-amber-600">还需 {selectedStyle.minPhotos - images.length} 张</span>
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
                  className="flex-1 min-h-0 mx-auto overflow-y-auto overscroll-contain p-5 bg-gradient-to-br from-gray-50 to-purple-50 rounded-[34px] border border-purple-100 shadow-inner"
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
                        className="absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-black/70 text-white flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-500 active:scale-95"
                      >
                        <X className="w-4 h-4" />
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
                    disabled={images.length < selectedStyle.minPhotos || isUploading}
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

        <div className="mt-auto pb-3 pt-5 text-center space-y-2 shrink-0">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-lg">✨</span>
              <span>支持 JPG、PNG、HEIC 等格式</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🎮</span>
              <span>生成后可自由旋转、缩放</span>
            </div>
          </div>
          <p className="text-xs text-gray-400">完美支持苹果 iPhone 相机拍摄的照片</p>
        </div>
      </div>
      {renderStyleTransition()}
    </div>
  );
}

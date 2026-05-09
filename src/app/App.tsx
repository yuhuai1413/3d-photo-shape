import { useState, useRef, Component, ReactNode, CSSProperties } from 'react';
import { Upload, Camera, Trash2, ArrowLeft, X, Sparkles, Shapes } from 'lucide-react';
import PhotoSphere3D from './components/PhotoSphere3D';
import PhotoLayout3D, { PhotoLayoutVariant } from './components/PhotoLayout3D';
import LoadingSpinner from './components/LoadingSpinner';

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
const STYLE_CARD_RADIUS = 48;
const STYLE_TRANSITION_MS = 620;
const STYLE_TRANSITION_SETTLE_MS = STYLE_TRANSITION_MS + 180;
const STYLE_UPLOAD_LOGO_SIZE = 112;
const STYLE_UPLOAD_TITLE_WIDTH = 320;
const STYLE_UPLOAD_TITLE_HEIGHT = 58;

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
    requirement: '需要 24-120 张',
    minPhotos: 24,
    maxPhotos: 120,
    accent: 'from-violet-500 via-fuchsia-500 to-blue-500',
    surface: 'from-violet-950 via-purple-900 to-blue-950',
    preview: 'orb',
    logo: '/gallery-logos/sphere.png',
  },
  {
    id: 'cylinder',
    name: '圆柱画廊',
    subtitle: '像环形展厅一样环绕观看，横向浏览节奏更稳定',
    requirement: '需要 16 的倍数（16-80 张）',
    minPhotos: 16,
    maxPhotos: 80,
    multipleOf: 16,
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
    requirement: '需要 12-60 张',
    minPhotos: 12,
    maxPhotos: 60,
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
    requirement: '需要 20-100 张',
    minPhotos: 20,
    maxPhotos: 100,
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
  const styleCardRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const styleLogoRefs = useRef<Record<string, HTMLImageElement | null>>({});
  const styleTitleRefs = useRef<Record<string, HTMLHeadingElement | null>>({});
  const uploadLogoRef = useRef<HTMLImageElement | null>(null);
  const uploadTitleRef = useRef<HTMLHeadingElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const selectedStyle = selectedStyleId ? getStyleById(selectedStyleId) : null;
  const maxPhotos = selectedStyle?.maxPhotos ?? GALLERY_STYLES[0].maxPhotos;
  const minPhotos = selectedStyle?.minPhotos ?? GALLERY_STYLES[0].minPhotos;

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
    images.forEach((url) => URL.revokeObjectURL(url));
    setImages([]);
    setIsGenerating(false);
    setIsLoading(false);
  };

  const handleExitPreview = () => {
    setIsGenerating(false);
    setIsLoading(false);
  };

  const handleSwitchPreviewStyle = (styleId: GalleryStyleId) => {
    if (styleId === selectedStyleId) return;
    const nextStyle = getStyleById(styleId);
    const error = getStyleSwitchError(nextStyle);
    if (error) {
      alert(error);
      return;
    }
    setSelectedStyleId(styleId);
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
  };

  const handleBackToStyles = () => {
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
        <div className="absolute left-3 top-16 z-10 flex max-w-[calc(100vw-1.5rem)] gap-2 overflow-x-auto rounded-[22px] border border-white/15 bg-black/35 p-2 shadow-2xl backdrop-blur-md sm:left-6 sm:top-24 sm:max-w-none sm:flex-col sm:overflow-visible">
          {GALLERY_STYLES.map((style) => {
            const isActive = selectedStyle.id === style.id;
            return (
              <button
                key={style.id}
                type="button"
                onClick={() => handleSwitchPreviewStyle(style.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`group flex h-11 shrink-0 items-center gap-2 rounded-[16px] px-2.5 text-left text-xs font-semibold text-white transition-all active:scale-95 sm:h-12 sm:w-40 ${
                  isActive
                    ? 'bg-white text-slate-950 shadow-xl'
                    : 'bg-white/10 hover:bg-white/18'
                }`}
              >
                <img
                  src={style.logo}
                  alt=""
                  aria-hidden="true"
                  className="size-7 shrink-0 object-contain sm:size-8"
                  draggable={false}
                />
                <span className="whitespace-nowrap">{style.name}</span>
              </button>
            );
          })}
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
      {renderHomeTransitionCover()}
      {renderStyleTransition()}
    </div>
  );
}

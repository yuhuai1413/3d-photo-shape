# 项目结构文档

## 📁 目录结构说明

```
src/
├── app/
│   └── App.tsx                     # 主应用组件
├── components/                     # 所有 React 组件
│   ├── 3d/                         # 3D 画廊相关组件
│   │   ├── PhotoLayout3D.tsx       # 3D 布局管理组件
│   │   ├── PhotoSphere3D.tsx       # 球体布局实现
│   │   └── index.ts                # 导出
│   ├── common/                     # 通用组件
│   │   ├── ErrorBoundary.tsx       # 错误边界组件
│   │   ├── LoadingSpinner.tsx      # 加载动画
│   │   └── index.ts                # 导出
│   ├── ui/                         # UI 基础组件（来自 shadcn/ui）
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── index.ts
│   └── index.ts                    # 总导出
├── hooks/                          # 自定义 React hooks（扩展用）
├── types/                          # TypeScript 类型定义
│   └── gallery.ts                  # 画廊相关类型
├── utils/                          # 工具函数
│   ├── constants.ts                # 应用常量
│   ├── validators.ts               # 验证函数
│   └── index.ts                    # 导出
├── styles/                         # 全局样式
│   ├── globals.css                 # 全局样式
│   ├── tailwind.css                # Tailwind 配置
│   ├── fonts.css                   # 字体定义
│   ├── theme.css                   # 主题变量
│   └── index.css                   # 样式汇总
├── assets/                         # 静态资源
│   └── gallery-logos/              # 画廊图标
├── main.tsx                        # 应用入口
└── App.tsx                         # 最顶级组件
```

## 🎯 关键更改

### 1. **包名更新**
- ❌ `@figma/my-make-file` 
- ✅ `3d-photo-shape`

### 2. **依赖精简**
移除了 50+ 个未使用的 shadcn/ui 组件，只保留：
- `button.tsx`
- `card.tsx`
- 及其依赖

### 3. **导入优化**
从：
```typescript
import PhotoSphere3D from './components/PhotoSphere3D';
import PhotoLayout3D from './components/PhotoLayout3D';
```

到：
```typescript
import { PhotoSphere3D, PhotoLayout3D, ErrorBoundary, LoadingSpinner } from '../components';
```

### 4. **类型定义集中**
- 将 `GalleryStyleId`、`GalleryStyle` 等类型移到 `src/types/gallery.ts`
- 便于复用和维护

### 5. **工具函数抽离**
- 常量：`src/utils/constants.ts`
- 验证：`src/utils/validators.ts`
- 便于单元测试

## 📦 项目大小优化

| 项 | 前 | 后 | 改进 |
|----|----|----|------|
| UI 组件 | 50+ | 2 | ↓ 96% |
| 依赖数 | 大量 | 精简 | ↓ 显著 |
| 代码组织 | 混乱 | 清晰 | ↑ 提升 |

## 🔧 导入约定

### 组件导入
```typescript
// ✅ 推荐
import { PhotoLayout3D, LoadingSpinner } from '@/components';
import { ErrorBoundary } from '@/components/common';

// ❌ 避免
import PhotoLayout3D from '@/components/3d/PhotoLayout3D';
```

### 类型导入
```typescript
// ✅ 推荐
import type { GalleryStyle, GalleryStyleId } from '@/types/gallery';
```

### 工具导入
```typescript
// ✅ 推荐
import { validatePhotos, IMAGE_FILE_PATTERN } from '@/utils';
```

## 📝 下一步建议

1. **运行项目**
   ```bash
   npm install
   npm run dev
   ```

2. **测试类型检查**
   ```bash
   npm run type-check
   ```

3. **构建优化**
   ```bash
   npm run build
   ```

4. **添加路径别名**（可选）
   在 `tsconfig.json` 中配置 `@` 指向 `src/`

## 🎨 文件命名规范

- **组件文件**：`PascalCase.tsx`（如 `PhotoLayout3D.tsx`）
- **工具文件**：`camelCase.ts`（如 `validators.ts`）
- **类型文件**：`camelCase.ts`（如 `gallery.ts`）
- **样式文件**：`kebab-case.css`（如 `globals.css`）

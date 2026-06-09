# 3D Photo Shape

Interactive gallery to assemble photos into 3D shapes like sphere, cylinder, polyhedron and spiral.

A creative web application that transforms your photo collection into stunning 3D visualizations. Upload your images and watch them assemble into beautiful geometric shapes - perfect for creating unique visual presentations.

## Features

- 🔵 **Sphere Layout** - Photos arranged on the surface of a sphere for immersive browsing
- 🟦 **Cylinder Layout** - Ring-shaped gallery for stable horizontal browsing
- 🔷 **Polyhedron Layout** - Photos distributed on crystal facets for elegant display
- 🌀 **Spiral Layout** - Photos along an ascending orbit, perfect for timelines
- 🎨 **Interactive Controls** - Rotate, zoom, and explore your 3D gallery
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Smooth Animations** - Elegant transitions and rotations

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build
# or
pnpm build
```

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **3D Graphics**: Three.js
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/
│   └── App.tsx                    # Main application component
├── components/
│   ├── 3d/
│   │   ├── PhotoSphere3D.tsx      # Sphere layout implementation
│   │   ├── PhotoLayout3D.tsx      # Cylinder/Polyhedron/Spiral layouts
│   │   └── index.ts
│   ├── common/
│   │   ├── ErrorBoundary.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── index.ts
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── index.ts
├── types/
│   └── gallery.ts
├── utils/
│   ├── constants.ts
│   ├── validators.ts
│   └── index.ts
├── styles/
├── assets/
└── main.tsx
```

## Usage

1. Open the application in your browser
2. Upload your photos
3. Select a 3D layout (Sphere, Cylinder, Polyhedron, or Spiral)
4. Interact with your 3D gallery:
   - **Mouse/Touch**: Rotate the gallery
   - **Scroll**: Zoom in/out
   - **Click**: View individual photos

## Design Reference

This project is based on the design available at:
https://www.figma.com/design/rHj0E5hMZGKgJziLc7HEHJ/Photo-Gallery-Website

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## Support

For questions or issues, please open a GitHub issue in this repository.

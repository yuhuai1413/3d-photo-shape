# 3D Photo Shape

Interactive gallery to assemble photos into 3D shapes like sphere, cube and spiral.

A creative web application that transforms your photo collection into stunning 3D visualizations. Upload your images and watch them assemble into beautiful geometric shapes - perfect for creating unique visual presentations.

## Features

- 🔵 **Sphere Layout** - Arrange photos on the surface of a sphere
- 🟦 **Cube Layout** - Create a 3D cube with photos on each face
- 🌀 **Spiral Layout** - Display photos in an elegant spiral pattern
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
│   ├── components/
│   │   ├── PhotoLayout3D.tsx      # Main 3D layout component
│   │   ├── PhotoSphere3D.tsx      # Sphere layout implementation
│   │   ├── LoadingSpinner.tsx     # Loading indicator
│   │   └── ...
│   ├── App.tsx                    # Application entry point
│   └── ...
├── public/                        # Static assets
└── ...
```

## Usage

1. Open the application in your browser
2. Upload your photos
3. Select a 3D layout (Sphere, Cube, or Spiral)
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

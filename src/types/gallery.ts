/**
 * Gallery types and interfaces
 */

export type GalleryStyleId = 'sphere' | 'cylinder' | 'polyhedron' | 'spiral';

export interface GalleryStyle {
  id: GalleryStyleId;
  name: string;
  subtitle: string;
  requirement: string;
  minPhotos: number;
  maxPhotos: number;
  multipleOf?: number;
  accent: string;
}

export interface PhotoFile {
  id: string;
  src: string;
  name: string;
}

export interface GalleryState {
  photos: PhotoFile[];
  selectedStyle: GalleryStyleId | null;
  isLoading: boolean;
  error: Error | null;
}

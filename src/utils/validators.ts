/**
 * Validation utilities
 */

import { IMAGE_FILE_PATTERN } from './constants';

export function isImageFile(filename: string): boolean {
  return IMAGE_FILE_PATTERN.test(filename);
}

export function validatePhotos(files: File[]): { valid: File[]; invalid: string[] } {
  const valid: File[] = [];
  const invalid: string[] = [];

  files.forEach(file => {
    if (isImageFile(file.name)) {
      valid.push(file);
    } else {
      invalid.push(file.name);
    }
  });

  return { valid, invalid };
}

export function validatePhotoCount(
  count: number,
  minPhotos: number,
  maxPhotos: number,
  multipleOf?: number
): boolean {
  if (count < minPhotos || count > maxPhotos) {
    return false;
  }

  if (multipleOf && count % multipleOf !== 0) {
    return false;
  }

  return true;
}

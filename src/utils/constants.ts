/**
 * Application constants
 */

export const IMAGE_FILE_PATTERN = /\.(avif|bmp|gif|heic|heif|jpe?g|png|webp)$/i;

export const STYLE_CARD_RADIUS = 48;
export const STYLE_TRANSITION_MS = 620;
export const STYLE_TRANSITION_SETTLE_MS = STYLE_TRANSITION_MS + 180;
export const STYLE_UPLOAD_LOGO_SIZE = 112;
export const STYLE_UPLOAD_TITLE_WIDTH = 320;
export const STYLE_UPLOAD_TITLE_HEIGHT = 58;

export const UPLOAD_CONFIG = {
  cardRadius: STYLE_CARD_RADIUS,
  transitionMs: STYLE_TRANSITION_MS,
  transitionSettleMs: STYLE_TRANSITION_SETTLE_MS,
  logoSize: STYLE_UPLOAD_LOGO_SIZE,
  titleWidth: STYLE_UPLOAD_TITLE_WIDTH,
  titleHeight: STYLE_UPLOAD_TITLE_HEIGHT,
};

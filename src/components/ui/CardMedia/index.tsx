'use client';

import { FC } from 'react';
import { isFilled, ImageField } from '@prismicio/client';
import type { CardMediaProps } from './types';
import styles from './styles.module.css';

const ROUNDED_CLASSES = {
  md: styles.roundedMd,
  lg: styles.roundedLg,
  xl: styles.roundedXl,
  '2xl': styles.rounded2xl,
  '3xl': styles.rounded3xl,
} as const;

const ASPECT_CLASSES = {
  square: styles.aspectSquare,
  video: styles.aspectVideo,
  portrait: styles.aspectPortrait,
  auto: styles.aspectAuto,
} as const;

const OVERLAY_CLASSES = {
  none: '',
  gradient: styles.overlayGradient,
  dark: styles.overlayDark,
  light: styles.overlayLight,
} as const;

function isPrismicImage(src: string | ImageField | undefined): src is ImageField {
  return typeof src === 'object' && src !== null && 'url' in src;
}

export const CardMedia: FC<CardMediaProps> = ({
  imageSrc,
  imageAlt = '',
  videoSrc,
  aspectRatio = 'portrait',
  showGlow = false,
  overlay = 'none',
  rounded = '2xl',
  showBorder = true,
  hoverScale = false,
  children,
  className = '',
  onClick,
}) => {
  const wrapperClasses = [
    styles.wrapper,
    hoverScale && styles.hoverScale,
    onClick && styles.clickable,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const cardClasses = [
    styles.card,
    ROUNDED_CLASSES[rounded],
    ASPECT_CLASSES[aspectRatio],
    showBorder && styles.hasBorder,
  ]
    .filter(Boolean)
    .join(' ');

  const renderMedia = () => {
    // Video takes priority
    if (videoSrc) {
      return (
        <video
          className={styles.video}
          src={videoSrc}
          muted
          loop
          playsInline
          autoPlay
        />
      );
    }

    // Prismic Image
    if (isPrismicImage(imageSrc) && isFilled.image(imageSrc)) {
      return (
        <img
          src={imageSrc.url}
          alt={imageSrc.alt ?? imageAlt}
          className={styles.media}
        />
      );
    }

    // Regular image URL
    if (typeof imageSrc === 'string') {
      return (
        <img
          src={imageSrc}
          alt={imageAlt}
          className={styles.media}
        />
      );
    }

    return null;
  };

  const cardContent = (
    <>
      {/* Glow Effect */}
      {showGlow && <div className={styles.glow} />}

      {/* Card */}
      <div className={cardClasses}>
        {/* Media */}
        {renderMedia()}

        {/* Overlay */}
        {overlay !== 'none' && (
          <div className={`${styles.overlay} ${OVERLAY_CLASSES[overlay]}`} />
        )}

        {/* Children Content */}
        {children && <div className={styles.content}>{children}</div>}
      </div>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        className={wrapperClasses}
        onClick={onClick}
      >
        {cardContent}
      </button>
    );
  }

  return (
    <div className={wrapperClasses}>
      {cardContent}
    </div>
  );
};

// Export helper styles for use in children
export const cardMediaStyles = styles;

export type { CardMediaProps, CardMediaAspectRatio, CardMediaOverlay } from './types';

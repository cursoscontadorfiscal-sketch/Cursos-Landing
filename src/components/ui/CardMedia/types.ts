import { ImageField } from '@prismicio/client';

export type CardMediaAspectRatio = 'square' | 'video' | 'portrait' | 'auto';

export type CardMediaOverlay = 'none' | 'gradient' | 'dark' | 'light';

export interface CardMediaProps {
  /** Image source - can be a URL string or Prismic ImageField */
  readonly imageSrc?: string | ImageField;
  /** Alt text for the image */
  readonly imageAlt?: string;
  /** Video source URL */
  readonly videoSrc?: string;
  /** Aspect ratio of the card */
  readonly aspectRatio?: CardMediaAspectRatio;
  /** Show glow effect behind card */
  readonly showGlow?: boolean;
  /** Type of overlay on the media */
  readonly overlay?: CardMediaOverlay;
  /** Border radius variant */
  readonly rounded?: 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  /** Show thick border around the card */
  readonly showBorder?: boolean;
  /** Enable hover scale effect on media */
  readonly hoverScale?: boolean;
  /** Children rendered on top of the media (testimonials, play buttons, badges, etc.) */
  readonly children?: React.ReactNode;
  /** Additional class name */
  readonly className?: string;
  /** Click handler */
  readonly onClick?: () => void;
}

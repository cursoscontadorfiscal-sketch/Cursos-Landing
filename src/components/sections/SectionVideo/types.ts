export type VideoFit = 'contain' | 'cover';

export interface SectionVideoProps {
  /** YouTube video ID (not full URL) */
  readonly youtubeId: string;
  /** Thumbnail image with play button overlay */
  readonly thumbnailSrc?: string;
  /** How the video fits in the container */
  readonly objectFit?: VideoFit;
  /** Autoplay when iframe loads */
  readonly autoPlay?: boolean;
  /** Additional class name */
  readonly className?: string;
  /** Content rendered on top of video */
  readonly children?: React.ReactNode;
}

'use client';

import { FC, useState } from 'react';
import { Play } from 'lucide-react';
import { Tooltip } from '@/components/ui/Tooltip';
import type { SectionVideoProps } from './types';
import styles from './styles.module.css';

export const SectionVideo: FC<SectionVideoProps> = ({
  youtubeId,
  thumbnailSrc,
  objectFit = 'contain',
  className = '',
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const iframeSrc = `https://www.youtube.com/embed/${youtubeId}?playsinline=1&rel=0`;

  const videoClasses = [
    styles.video,
    objectFit === 'contain' ? styles.videoContain : styles.videoCover,
  ].join(' ');

  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.videoWrapper}>
        {!isOpen && thumbnailSrc && (
          <button
            type="button"
            className={styles.thumbnailOverlay}
            onClick={() => setIsOpen(true)}
            aria-label="Reproducir video"
          >
            <img
              src={thumbnailSrc}
              alt="Video thumbnail"
              className={styles.thumbnail}
            />
            <div className={styles.thumbnailDarkOverlay} />
            <Tooltip content="Ver introducción al curso" position="top">
              <div className={styles.playButton}>
                <Play className={styles.playIcon} />
              </div>
            </Tooltip>
          </button>
        )}

        {isOpen && (
          <iframe
            className={videoClasses}
            src={iframeSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      {children && <div className={styles.overlay}>{children}</div>}
    </section>
  );
};

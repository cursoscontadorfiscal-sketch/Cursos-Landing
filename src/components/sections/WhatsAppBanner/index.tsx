'use client';

import { FC } from 'react';
import { MessageCircle } from 'lucide-react';
import { Tooltip } from '@/components/ui/Tooltip';
import type { WhatsAppBannerProps } from './types';
import styles from './styles.module.css';

export const WhatsAppBanner: FC<WhatsAppBannerProps> = ({
  text,
  buttonText,
  href,
  className = '',
}) => {
  return (
    <section className={`${styles.banner} ${className}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.text}>{text}</p>
          <Tooltip content="Visitar grupo" position="top">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <MessageCircle className={styles.icon} />
              {buttonText}
            </a>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};

export type { WhatsAppBannerProps } from './types';

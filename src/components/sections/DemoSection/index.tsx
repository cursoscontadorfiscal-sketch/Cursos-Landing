'use client';

import { FC, useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import { Video, Users, Calendar, Play } from "lucide-react";
import type { DemoSectionProps } from "./types";
import styles from "./styles.module.css";

// Force h2 for semantic hierarchy
const titleComponents = {
  heading1: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>,
  heading2: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>,
  paragraph: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>,
};

export const DemoSection: FC<DemoSectionProps> = ({
  title,
  features,
  quote,
  className = "",
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const iframeSrc =
    "https://www.youtube.com/embed/oUwGPft8cXk?playsinline=1&rel=0";

  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Content side */}
          <div className={styles.content}>
            <div className={styles.title}>
              <PrismicRichText field={title} components={titleComponents} />
            </div>

            <div className={styles.features}>
              {features.map((feature, index) => {
                const icons = [Video, Users, Calendar];
                const Icon = icons[index % icons.length];
                return (
                  <div key={feature.itemTitle} className={styles.featureItem}>
                    <div className={styles.featureIcon}>
                      <Icon size={24} />
                    </div>
                    <div className={styles.featureContent}>
                      <h3 className={styles.featureTitle}>
                        {feature.itemTitle}
                      </h3>
                      <p className={styles.featureText}>
                        {feature.itemText}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {quote && (
              <div className={styles.quoteBox}>
                <p className={styles.quoteText}>
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
            )}
          </div>

          {/* Video preview side */}
          <div className={styles.videoSide}>
            <button
              type="button"
              className={styles.videoCard}
              onClick={() => {
                if (!isVideoOpen) setIsVideoOpen(true);
              }}
            >
              {!isVideoOpen && (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
                    alt="Preview del curso"
                    className={styles.videoThumbnail}
                  />
                  <div className={styles.playButton}>
                    <div className={styles.playIcon}>
                      <Play size={32} fill="white" />
                    </div>
                  </div>
                  <div className={styles.videoDuration}>
                    VISTA PREVIA - 1:45
                  </div>
                </>
              )}

              {isVideoOpen && (
                <iframe
                  className={styles.videoIframe}
                  src={iframeSrc}
                  title="Demo de la plataforma"
                  frameBorder="0"
                  allow="encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              )}
            </button>

            <div className={styles.videoBadge}>
              Demo de la plataforma
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export type { DemoSectionProps, DemoFeatureItem } from "./types";

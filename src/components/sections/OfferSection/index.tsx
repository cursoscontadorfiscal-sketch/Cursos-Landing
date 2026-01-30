'use client';

import { FC } from "react";
import { Hourglass } from "lucide-react";
import type { OfferSectionProps } from "./types";
import styles from "./styles.module.css";

export const OfferSection: FC<OfferSectionProps> = ({
  offerTitle,
  offerSubtitle,
  supportingText,
  smallSupportingText,
  badgeText = "La oferta termina pronto",
  ctaText = "Consigue acceso ahora mismo",
  className = "",
}) => {
  const handleCtaClick = () => {
    window.open(
      "https://pay.hotmart.com/L103962942X?off=9fzpxux4&checkoutMode=6&bid=1769812725142",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Urgency Badge */}
          <div className={styles.badgeWrapper}>
            <div className={styles.badge}>
              <span className={styles.pingDot}>
                <span className={styles.pingAnimation} />
                <span className={styles.pingCore} />
              </span>
              {badgeText}
            </div>
          </div>

          {/* Content */}
          <div className={styles.content}>
            {/* Hourglass Icon */}
            <div className={styles.iconWrapper}>
              <div className={styles.iconCircle}>
                <Hourglass
                  className={styles.hourglassIcon}
                  width={50}
                  height={50}
                  strokeWidth={2}
                />
              </div>
            </div>

            {/* Text Content */}
            <div className={styles.textContent}>
              <h2 className={styles.title}>{offerTitle}</h2>
              <h3 className={styles.subtitle}>{offerSubtitle}</h3>
              <h4 className={styles.supportingText}>{supportingText}</h4>
            </div>

            {/* CTA */}
            <div className={styles.ctaWrapper}>
              <button
                type="button"
                className={styles.ctaButton}
                onClick={handleCtaClick}
              >
                {ctaText}
              </button>
              <p className={styles.smallText}>{smallSupportingText}</p>
              <p className={styles.smallText} style={{ margin: '.5rem 0' }}>Colegio de Contadores Valle Dorado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export type { OfferSectionProps } from "./types";

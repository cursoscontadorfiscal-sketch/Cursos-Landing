'use client';

import { FC } from "react";
import { Check } from "lucide-react";
import type { OfferSectionProps } from "./types";
import styles from "./styles.module.css";

const VALUE_ITEMS = [
  "8 clases en vivo por mes",
  "Grabaciones disponibles 24/7",
  "Comunidad VIP de contadores",
  "Actualizaciones fiscales constantes",
] as const;

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
      "https://pay.hotmart.com/L103962942X?off=g1xs9jwb&bid=1772239448007",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        <div className={styles.card}>

          {/* Decorative dot grid inside card */}
          <div className={styles.cardDots} aria-hidden="true" />

          {/* Urgency badge */}
          <div className={styles.badgeWrapper}>
            <div className={styles.badge}>
              <span className={styles.pingDot}>
                <span className={styles.pingAnimation} />
                <span className={styles.pingCore} />
              </span>
              {badgeText}
            </div>
          </div>

          {/* Two-column content */}
          <div className={styles.content}>

            {/* Left: title + value list */}
            <div className={styles.left}>
              <h2 className={styles.title}>{offerTitle}</h2>
              <ul className={styles.valueList}>
                {VALUE_ITEMS.map((item) => (
                  <li key={item} className={styles.valueItem}>
                    <span className={styles.checkIcon}>
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={styles.institution}>Colegio de Contadores Valle Dorado</p>
            </div>

            {/* Right: price + CTA */}
            <div className={styles.right}>
              <div className={styles.priceBlock}>
                <span className={styles.supportingText}>{supportingText}</span>
                <h3 className={styles.subtitle}>{offerSubtitle}</h3>
              </div>
              <div className={styles.ctaWrapper}>
                <button
                  type="button"
                  className={styles.ctaButton}
                  onClick={handleCtaClick}
                >
                  {ctaText}
                </button>
                <p className={styles.smallText}>{smallSupportingText}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export type { OfferSectionProps } from "./types";

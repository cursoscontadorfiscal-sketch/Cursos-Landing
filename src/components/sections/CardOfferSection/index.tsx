'use client';

import { FC } from "react";
import { Check } from "lucide-react";
import type { CardOfferSectionProps } from "./types";
import styles from "./styles.module.css";

export const CardOfferSection: FC<CardOfferSectionProps> = ({
  title,
  badgeText,
  description,
  oldPrice,
  price,
  currency,
  benefits,
  supportingText,
  ctaText = "Acceder ahora",
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
    <section id="precio" className={`${styles.section} ${className}`}>
      <div className={styles.sectionDots} aria-hidden="true" />
      <div className={styles.sectionGlow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.card}>

          {/* Top accent gradient bar */}
          <div className={styles.accentBar} aria-hidden="true" />

          {/* Badge */}
          <span className={styles.badge}>{badgeText}</span>

          {/* Title */}
          <h3 className={styles.title}>{title}</h3>

          {/* Description */}
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>{description}</p>
          </div>

          {/* Pricing */}
          <div className={styles.pricing}>
            {oldPrice && (
              <div className={styles.oldPriceWrapper}>
                <span className={styles.oldPriceLabel}>Antes</span>
                <span className={styles.oldPrice}>{oldPrice}</span>
              </div>
            )}
            <div className={styles.priceWrapper}>
              <span className={styles.price}>{price}</span>
              {currency && <span className={styles.currency}>{currency}</span>}
            </div>
          </div>

          {/* Benefits */}
          <ul className={styles.benefits}>
            {benefits.map((benefit) => (
              <li key={benefit.text} className={styles.benefitItem}>
                <span className={styles.checkIcon}>
                  <Check size={11} strokeWidth={3} />
                </span>
                {benefit.text}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            type="button"
            className={styles.ctaButton}
            onClick={handleCtaClick}
          >
            {ctaText}
          </button>

          {/* Supporting Text */}
          <p className={styles.supportingText}>{supportingText}</p>

        </div>
      </div>
    </section>
  );
};

export type { CardOfferSectionProps, CardOfferBenefit } from "./types";

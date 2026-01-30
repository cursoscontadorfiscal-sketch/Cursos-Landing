'use client';

import { FC } from "react";
import { ShieldCheck, Shield, HeadsetIcon } from "lucide-react";
import type { CardOfferSectionProps } from "./types";
import styles from "./styles.module.css";

const BENEFIT_ICONS = [ShieldCheck, Shield, HeadsetIcon];

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
      "https://pay.hotmart.com/L103962942X?off=9fzpxux4&checkoutMode=6&bid=1769812725142",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="precio" className={`${styles.section} ${className}`}>
      <div className={styles.backgroundGradient} />
      <div className={styles.container}>
        <div className={styles.card}>
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
            <span className={styles.oldPrice}>{oldPrice}</span>
            <div className={styles.priceWrapper}>
              <span className={styles.price}>{price}</span>
              <span className={styles.currency}>{currency}</span>
            </div>
          </div>

          {/* Benefits */}
          <div className={styles.benefits}>
            {benefits.map((benefit, index) => {
              const Icon = BENEFIT_ICONS[index % BENEFIT_ICONS.length];
              return (
                <div key={benefit.text} className={styles.benefitItem}>
                  <Icon size={20} className={styles.benefitIcon} />
                  {benefit.text}
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
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

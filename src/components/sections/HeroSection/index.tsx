import { FC } from "react";
import { PrismicRichText } from "@prismicio/react";
import { Badge } from "@/components/ui/Badge";
import type { HeroSectionProps } from "./types";
import styles from "./styles.module.css";

const titleComponents = {
  heading1: ({ children }: { children: React.ReactNode }) => (
    <h1>{children}</h1>
  ),
  heading2: ({ children }: { children: React.ReactNode }) => (
    <h1>{children}</h1>
  ),
  paragraph: ({ children }: { children: React.ReactNode }) => (
    <h1>{children}</h1>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <span className={styles.highlight}>{children}</span>
  ),
};

const AVATARS = [
  { initial: "C", color: "#6366f1" },
  { initial: "M", color: "#0ea5e9" },
  { initial: "A", color: "#10b981" },
  { initial: "R", color: "#f59e0b" },
] as const;

export const HeroSection: FC<HeroSectionProps> = ({
  badgeText,
  title,
  subtitle,
  price,
  currency,
  ctaText,
  ctaHref = "#precio",
  className = "",
}) => {
  return (
    <section className={`${styles.hero} ${className}`} id="membresia">

      <div className={styles.container}>
        <div className={styles.heroCenter}>

          {badgeText && (
            <Badge variant="primary" showDot animated className={styles.badgeWrapper}>
              {badgeText}
            </Badge>
          )}

          <div className={styles.title}>
            <PrismicRichText field={title} components={titleComponents} />
          </div>

          <div className={styles.subtitle}>
            <PrismicRichText field={subtitle} />
          </div>

          {/* Social proof */}
          <div className={styles.socialProof}>
            <div className={styles.avatarStack}>
              {AVATARS.map((a) => (
                <span
                  key={a.initial}
                  className={styles.avatar}
                  style={{ background: a.color }}
                >
                  {a.initial}
                </span>
              ))}
            </div>
            <span className={styles.socialText}>+150 contadores ya dentro</span>
            <span className={styles.socialSep} aria-hidden="true">·</span>
            <span className={styles.socialRating}>⭐ 4.9/5</span>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            {price && (
              <div className={styles.priceBox}>
                <span className={styles.priceLabel}>Acceso mensual</span>
                <div className={styles.priceValue}>
                  <span className={styles.price}>${price}</span>
                  {currency && <span className={styles.currency}>{currency}</span>}
                </div>
                <span className={styles.priceLabel}>8 clases en vivo · grabaciones · comunidad VIP</span>
              </div>
            )}

            {ctaText && (
              <div className={styles.ctaGroup}>
                <a href={ctaHref} className={styles.ctaButton}>
                  {ctaText}
                </a>
                <p className={styles.ctaMicro}>Sin permanencia · Cancela cuando quieras</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export type { HeroSectionProps } from "./types";

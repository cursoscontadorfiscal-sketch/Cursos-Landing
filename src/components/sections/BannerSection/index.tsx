import { FC } from "react";
import { PrismicRichText } from "@prismicio/react";
import { AlertCircle } from "lucide-react";
import type { BannerSectionProps } from "./types";
import styles from "./styles.module.css";

export const BannerSection: FC<BannerSectionProps> = ({
  title,
  subtitle,
  items,
  supportingText,
  className = "",
}) => {
  return (
    <section className={`${styles.banner} ${className}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Text section */}
          <div className={styles.textSection}>
            <div className={styles.title}>
              <PrismicRichText field={title} />
            </div>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>

          {/* Items grid */}
          {items.length > 0 && (
            <div className={styles.itemsGrid}>
              {items.map((item) => (
                <div key={item} className={styles.item}>
                  <AlertCircle size={18} className={styles.itemIcon} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Supporting text */}
        {supportingText && (
          <p className={styles.supportingText}>{supportingText}</p>
        )}
      </div>
    </section>
  );
};

export type { BannerSectionProps } from "./types";

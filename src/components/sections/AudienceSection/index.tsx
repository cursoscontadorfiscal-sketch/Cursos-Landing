import { FC } from "react";
import { PrismicRichText } from "@prismicio/react";
import { CardAudience } from "@/components/ui/CardAudience";
import type { AudienceSectionProps } from "./types";
import styles from "./styles.module.css";

// Force h2 for semantic hierarchy
const titleComponents = {
  heading1: ({ children }: { children: React.ReactNode }) => (
    <h2>{children}</h2>
  ),
  heading2: ({ children }: { children: React.ReactNode }) => (
    <h2>{children}</h2>
  ),
  paragraph: ({ children }: { children: React.ReactNode }) => (
    <h2>{children}</h2>
  ),
};

export const AudienceSection: FC<AudienceSectionProps> = ({
  title,
  description,
  positiveTitle,
  positiveItems,
  negativeTitle,
  negativeItems,
  className = "",
}) => {
  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.title}>
            <PrismicRichText field={title} components={titleComponents} />
          </div>
          {description && (
            <p className={styles.description}>{description}</p>
          )}
        </div>

        {/* Cards grid */}
        <div className={styles.grid}>
          <CardAudience
            variant="positive"
            title={positiveTitle}
            items={positiveItems}
          />
          <CardAudience
            variant="negative"
            title={negativeTitle}
            items={negativeItems}
          />
        </div>
      </div>
    </section>
  );
};

export type { AudienceSectionProps } from "./types";

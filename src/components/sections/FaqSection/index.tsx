import { FC } from "react";
import { Accordion } from "@/components/ui/Accordion";
import type { FaqSectionProps } from "./types";
import styles from "./styles.module.css";

export const FaqSection: FC<FaqSectionProps> = ({
  title,
  description,
  items,
  className = "",
}) => {
  return (
    <section id="faq" className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        {/* Accordion List */}
        <div className={styles.accordionList}>
          {items.map((item) => (
            <Accordion key={item.question} title={item.question}>
              <div className={styles.accordionContent}>
                {item.answerPart1 && <p>{item.answerPart1}</p>}
                {item.answerPart2 && <p>{item.answerPart2}</p>}
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export type { FaqSectionProps, FaqItem } from "./types";

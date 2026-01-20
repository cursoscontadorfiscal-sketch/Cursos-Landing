"use client";

import { FC } from "react";
import { PrismicRichText } from "@prismicio/react";
import { Accordion } from "@/components/ui/Accordion";
import type { SyllabusSectionProps } from "./types";
import styles from "./styles.module.css";

// Force h2 for semantic hierarchy
const titleComponents = {
  heading1: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>,
  heading2: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>,
  paragraph: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>,
};

export const SyllabusSection: FC<SyllabusSectionProps> = ({
  title,
  description,
  modules,
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

        {/* Modules */}
        <div className={styles.modules}>
          {modules.map((module) => (
            <Accordion
              key={module.moduleTitle}
              title={module.moduleTitle}
              //defaultOpen={index === 0}
            >
              <ul className={styles.moduleList}>
                {module.moduleContent.map((item) => (
                  <li key={item} className={styles.moduleListItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export type { SyllabusSectionProps, SyllabusModuleItem } from "./types";

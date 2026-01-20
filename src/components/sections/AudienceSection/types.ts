import type { RichTextField } from "@prismicio/client";

export interface AudienceSectionProps {
  readonly title: RichTextField;
  readonly description?: string | null;
  readonly positiveTitle: string;
  readonly positiveItems: readonly string[];
  readonly negativeTitle: string;
  readonly negativeItems: readonly string[];
  readonly className?: string;
}

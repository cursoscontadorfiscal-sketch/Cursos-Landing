import type { RichTextField } from "@prismicio/client";

export interface BannerSectionProps {
  readonly title: RichTextField;
  readonly subtitle?: string | null;
  readonly items: readonly string[];
  readonly supportingText?: string | null;
  readonly className?: string;
}

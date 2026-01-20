import type { RichTextField } from "@prismicio/client";

export interface DemoFeatureItem {
  readonly itemTitle: string;
  readonly itemText: string;
}

export interface DemoSectionProps {
  readonly title: RichTextField;
  readonly features: readonly DemoFeatureItem[];
  readonly quote?: string | null;
  readonly className?: string;
}

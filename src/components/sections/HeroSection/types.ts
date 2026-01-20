import type { RichTextField, ImageField } from "@prismicio/client";

export interface HeroSectionProps {
  readonly badgeText?: string | null;
  readonly title: RichTextField;
  readonly subtitle: RichTextField;
  readonly price?: string | null;
  readonly currency?: string | null;
  readonly ctaText?: string | null;
  readonly ctaHref?: string;
  /** Image - can be Prismic ImageField or URL string */
  readonly image?: ImageField | string;
  readonly testimonialText?: string | null;
  readonly className?: string;
}

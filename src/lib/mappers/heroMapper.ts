import { Content, RichTextField, ImageField } from "@prismicio/client";

// compobnent type
export interface HeroProps {
  readonly badgeText: string | null;
  readonly title: RichTextField;
  readonly subtitle: RichTextField;
  readonly price: string | null;
  readonly currency: string | null;
  readonly ctaText: string | null;
  readonly image: ImageField;
  readonly testimonialText: string | null;
}

// Mapper: prismic > props component 
export function mapHeroSlice(slice: Content.HeroSlice): HeroProps {
  const { primary } = slice;

  return {
    badgeText: primary.HeroBadgeText,
    title: primary.HeroTitle,
    subtitle: primary.HeroSubtitle,
    price: primary.HeroPrice,
    currency: primary.HeroCurrency,
    ctaText: primary.HeroCtaText,
    image: primary.HeroImg,
    testimonialText: primary.HeroTestimonialText,
  };
}

// definimos el slice 
export function getHeroSlice(
  slices: Content.HomepageDocumentDataSlicesSlice[]
): Content.HeroSlice | undefined {
  return slices.find(
    (s): s is Content.HeroSlice => s.slice_type === "hero"
  );
}

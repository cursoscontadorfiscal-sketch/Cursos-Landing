export interface CardOfferBenefit {
  readonly text: string;
}

export interface CardOfferSectionProps {
  readonly title: string;
  readonly badgeText: string;
  readonly description: string;
  readonly oldPrice: string;
  readonly price: string;
  readonly currency: string;
  readonly benefits: readonly CardOfferBenefit[];
  readonly supportingText: string;
  readonly ctaText?: string;
  readonly ctaLink?: string;
  readonly className?: string;
}

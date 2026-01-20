import { Content } from "@prismicio/client";
import type { CardOfferSectionProps } from "@/components/sections/CardOfferSection";

export function mapCardOfferSectionSlice(
  slice: Content.CardOfferSectionSlice
): CardOfferSectionProps {
  const { primary } = slice;

  return {
    title: primary.title ?? "",
    badgeText: primary.badgetext ?? "",
    description: primary.description ?? "",
    oldPrice: primary.oldprice ?? "",
    price: primary.price ?? "",
    currency: primary.currency ?? "",
    benefits: primary.benefitlist.map((item) => ({
      text: item.benefitlistitem ?? "",
    })),
    supportingText: primary.supportingtext ?? "",
  };
}

export function getCardOfferSectionSlice(
  slices: Content.HomepageDocumentDataSlicesSlice[]
): Content.CardOfferSectionSlice | undefined {
  return slices.find(
    (s): s is Content.CardOfferSectionSlice => s.slice_type === "card_offer_section"
  );
}

import { Content } from "@prismicio/client";
import type { OfferSectionProps } from "@/components/sections/OfferSection";

export function mapOfferSectionSlice(
  slice: Content.OfferSectionSlice
): OfferSectionProps {
  const { primary } = slice;

  return {
    offerTitle: primary.offertitle ?? "",
    offerSubtitle: primary.offersubtitle ?? "",
    supportingText: primary.supportingtext ?? "",
    smallSupportingText: primary.smallsupportingtext ?? "",
  };
}

export function getOfferSectionSlice(
  slices: Content.HomepageDocumentDataSlicesSlice[]
): Content.OfferSectionSlice | undefined {
  return slices.find(
    (s): s is Content.OfferSectionSlice => s.slice_type === "offer_section"
  );
}

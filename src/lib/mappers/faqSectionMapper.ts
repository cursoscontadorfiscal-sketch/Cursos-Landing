import { Content } from "@prismicio/client";
import type { FaqSectionProps } from "@/components/sections/FaqSection";

export function mapFaqSectionSlice(
  slice: Content.FaqSectionSlice
): FaqSectionProps {
  const { primary } = slice;

  return {
    title: primary.title ?? "",
    description: primary.description ?? "",
    items: primary.faqaccordion.map((item) => ({
      question: item.titleaccordion ?? "",
      answerPart1: item.itemone ?? "",
      answerPart2: item.itemtwo,
    })),
  };
}

export function getFaqSectionSlice(
  slices: Content.HomepageDocumentDataSlicesSlice[]
): Content.FaqSectionSlice | undefined {
  return slices.find(
    (s): s is Content.FaqSectionSlice => s.slice_type === "faq_section"
  );
}

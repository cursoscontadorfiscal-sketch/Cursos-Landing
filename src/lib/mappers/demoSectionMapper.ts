import { Content, asText } from "@prismicio/client";
import type { DemoSectionProps } from "@/components/sections/DemoSection";

export function mapDemoSectionSlice(
  slice: Content.DemoSectionSlice
): DemoSectionProps {
  const { primary } = slice;

  return {
    title: primary.demosectiontitle,
    features: primary.demosectionlist.map((item) => ({
      itemTitle: asText(item.demosectionitemtitle),
      itemText: item.demosectionitemdescription ?? "",
    })),
    quote: primary.demosectionquote,
  };
}

export function getDemoSectionSlice(
  slices: Content.HomepageDocumentDataSlicesSlice[]
): Content.DemoSectionSlice | undefined {
  return slices.find(
    (s): s is Content.DemoSectionSlice => s.slice_type === "demo_section"
  );
}

import { Content } from "@prismicio/client";
import type { SyllabusSectionProps } from "@/components/sections/SyllabusSection";

export function mapSyllabusSectionSlice(
  slice: Content.SyllabusSectionSlice
): SyllabusSectionProps {
  const { primary } = slice;

  return {
    title: primary.titlesection,
    description: primary.subtitlesection,
    modules: primary.accordionitem.map((item) => ({
      moduleTitle: item.accordionitemtitle ?? "",
      moduleContent: [
        item.itemlistone,
        item.itemlisttwo,
        item.itemlistthree,
        item.itemlistfour,
      ].filter((text): text is string => Boolean(text)),
    })),
  };
}

export function getSyllabusSectionSlice(
  slices: Content.HomepageDocumentDataSlicesSlice[]
): Content.SyllabusSectionSlice | undefined {
  return slices.find(
    (s): s is Content.SyllabusSectionSlice => s.slice_type === "syllabus_section"
  );
}

import { Content, RichTextField, asText } from "@prismicio/client";

export interface AudienceFilterProps {
  readonly title: RichTextField;
  readonly description: string | null;
  readonly positiveTitle: string;
  readonly positiveItems: readonly string[];
  readonly negativeTitle: string;
  readonly negativeItems: readonly string[];
}

export function mapAudienceFilterSlice(
  slice: Content.AudienceFilterSlice
): AudienceFilterProps {
  const { primary } = slice;

  return {
    title: primary.audiencefiltertitle,
    description: primary.audiencefiltertext,
    positiveTitle: asText(primary.audiencepositivelisttitle),
    positiveItems: primary.audiencefilterpositivelist.map(
      (item) => item.audiencefilteritemlist ?? ""
    ),
    negativeTitle: asText(primary.audiencenegativelisttitle),
    negativeItems: primary.audiencefilternegativelist.map(
      (item) => item.audiencefilteritemlist ?? ""
    ),
  };
}

export function getAudienceFilterSlice(
  slices: Content.HomepageDocumentDataSlicesSlice[]
): Content.AudienceFilterSlice | undefined {
  return slices.find(
    (s): s is Content.AudienceFilterSlice => s.slice_type === "audience_filter"
  );
}

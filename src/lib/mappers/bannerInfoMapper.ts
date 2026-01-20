import { Content, RichTextField } from "@prismicio/client";

export interface BannerInfoProps {
  readonly title: RichTextField;
  readonly subtitle: string | null;
  readonly items: readonly string[];
  readonly supportingText: string | null;
}

export function mapBannerInfoSlice(slice: Content.BannerInfoSlice): BannerInfoProps {
  const { primary } = slice;

  return {
    title: primary.bannerinfotitle,
    subtitle: primary.bannersubtitle,
    items: primary.lista.map((item) => item.itemlist ?? ""),
    supportingText: primary.supportingtext,
  };
}

export function getBannerInfoSlice(
  slices: Content.HomepageDocumentDataSlicesSlice[]
): Content.BannerInfoSlice | undefined {
  return slices.find(
    (s): s is Content.BannerInfoSlice => s.slice_type === "banner_info"
  );
}

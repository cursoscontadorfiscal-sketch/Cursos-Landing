import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { OfferSection as OfferSectionComponent } from "@/components/sections/OfferSection";

/**
 * Props for `OfferSection`.
 */
export type OfferSectionProps = SliceComponentProps<Content.OfferSectionSlice>;

/**
 * Component for "OfferSection" Slices.
 */
const OfferSection: FC<OfferSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <OfferSectionComponent
        offerTitle={slice.primary.offertitle ?? ""}
        offerSubtitle={slice.primary.offersubtitle ?? ""}
        supportingText={slice.primary.supportingtext ?? ""}
        smallSupportingText={slice.primary.smallsupportingtext ?? ""}
      />
    </section>
  );
};

export default OfferSection;

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FaqSection as FaqSectionComponent } from "@/components/sections/FaqSection";
import { mapFaqSectionSlice } from "@/lib/mappers";

/**
 * Props for `FaqSection`.
 */
export type FaqSectionProps = SliceComponentProps<Content.FaqSectionSlice>;

/**
 * Component for "FaqSection" Slices.
 */
const FaqSection: FC<FaqSectionProps> = ({ slice }) => {
  const props = mapFaqSectionSlice(slice);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <FaqSectionComponent {...props} />
    </section>
  );
};

export default FaqSection;

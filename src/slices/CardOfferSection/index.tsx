import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { CardOfferSection as CardOfferSectionComponent } from "@/components/sections/CardOfferSection";
import { mapCardOfferSectionSlice } from "@/lib/mappers";

/**
 * Props for `CardOfferSection`.
 */
export type CardOfferSectionProps =
  SliceComponentProps<Content.CardOfferSectionSlice>;

/**
 * Component for "CardOfferSection" Slices.
 */
const CardOfferSection: FC<CardOfferSectionProps> = ({ slice }) => {
  const props = mapCardOfferSectionSlice(slice);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <CardOfferSectionComponent {...props} />
    </section>
  );
};

export default CardOfferSection;

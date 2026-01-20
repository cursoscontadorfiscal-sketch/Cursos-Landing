import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type BannerInfoProps = SliceComponentProps<Content.BannerInfoSlice>;

const BannerInfo: FC<BannerInfoProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.bannerinfotitle} />

      <span>{slice.primary.bannersubtitle}</span>

      <ul>
        {slice.primary.lista.map((item) => (
          <li key={item.itemlist}>
            {item.itemlist}
          </li>
        ))}
      </ul>

      <p>
        {slice.primary.supportingtext}
      </p>
    </section>
  );
};

export default BannerInfo;

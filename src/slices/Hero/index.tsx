import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Button } from "@/components/ui/Button";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{ maxWidth: '80rem' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '5rem', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <span>{slice.primary.HeroBadgeText}</span>
            </div>

            <PrismicRichText field={slice.primary.HeroTitle} />

            <PrismicRichText field={slice.primary.HeroSubtitle} />
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div>
              <span>Invierte en tu paz mental</span>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span>${slice.primary.HeroPrice}</span>
                <span>{slice.primary.HeroCurrency}</span>
              </div>

              <span>Acceso inmediato</span>
            </div>

            <Button>
              {slice.primary.HeroCtaText}
            </Button>
          </div>
        </div>

        <div>
          <PrismicNextImage field={slice.primary.HeroImg} />
          <p>{slice.primary.HeroTestimonialText}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

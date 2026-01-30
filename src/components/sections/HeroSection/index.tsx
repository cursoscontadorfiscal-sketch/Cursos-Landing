import { FC } from "react";
import { PrismicRichText } from "@prismicio/react";
// import { Star } from "lucide-react"; // COMMENTED: Not using testimonial for now
import { Badge } from "@/components/ui/Badge";
import { CardMedia } from "@/components/ui/CardMedia";
import type { HeroSectionProps } from "./types";
import styles from "./styles.module.css";

// const STARS = ["star-1", "star-2", "star-3", "star-4", "star-5"] as const; // COMMENTED: Not using testimonial for now

// Custom components for PrismicRichText - force h1 and bold text gets accent color
const titleComponents = {
  heading1: ({ children }: { children: React.ReactNode }) => (
    <h1>{children}</h1>
  ),
  heading2: ({ children }: { children: React.ReactNode }) => (
    <h1>{children}</h1>
  ),
  paragraph: ({ children }: { children: React.ReactNode }) => (
    <h1>{children}</h1>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <span className={styles.highlight}>{children}</span>
  ),
};

/* COMMENTED: Testimonial content component - keeping for future implementation
const TestimonialContent: FC<{ text: string; className?: string }> = ({ text, className }) => (
  <div className={className}>
    <div className={styles.testimonialHeader}>
      <div className={styles.stars}>
        {STARS.map((starId) => (
          <Star key={starId} size={16} fill="currentColor" />
        ))}
      </div>
      <span className={styles.testimonialLabel}>Testimonio Real</span>
    </div>
    <p className={styles.testimonialText}>{text}</p>
  </div>
);
*/

export const HeroSection: FC<HeroSectionProps> = ({
  badgeText,
  title,
  subtitle,
  price,
  currency,
  ctaText,
  ctaHref = "#precio",
  image,
  // testimonialText, // COMMENTED: Not using Prismic testimonial for now
  className = "",
}) => {
  return (
    <section className={`${styles.hero} ${className}`} id="membresia">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Content */}
          <div className={styles.content}>
            {badgeText && (
              <Badge variant="primary" showDot animated className={styles.badgeWrapper}>
                {badgeText}
              </Badge>
            )}

            <div className={styles.title}>
              <PrismicRichText field={title} components={titleComponents} />
            </div>

            <div className={styles.subtitle}>
              <PrismicRichText field={subtitle} />
            </div>

            <div className={styles.actions}>
              {price && (
                <div className={styles.priceBox}>
                  <span className={styles.priceLabel}>Acceso mensual</span>
                  <div className={styles.priceValue}>
                    <span className={styles.price}>${price}</span>
                    {currency && <span className={styles.currency}>{currency}</span>}
                  </div>
                  <span className={styles.priceLabel}>8 clases en vivo <br/>+ grabaciones <br/> + comunidad VIP</span>
                </div>
              )}

              {ctaText && (
                <a href={ctaHref} className={styles.ctaButton}>
                  {ctaText}
                </a>
              )}
            </div>
          </div>

          {/* Image with CardMedia */}
          <div className={styles.imageWrapper}>
            <CardMedia
              imageSrc={image}
              imageAlt="Membresía para contadores"
              aspectRatio="portrait"
              showGlow
              overlay="gradient"
              rounded="3xl"
              showBorder
              hoverScale
            />

            {/* COMMENTED: Testimonial overlay - keeping for future implementation
            <CardMedia ...>
              {testimonialText && (
                <TestimonialContent
                  text={testimonialText}
                  className={styles.testimonialDesktop}
                />
              )}
            </CardMedia>

            {testimonialText && (
              <TestimonialContent
                text={testimonialText}
                className={styles.testimonialMobile}
              />
            )}
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export type { HeroSectionProps } from "./types";

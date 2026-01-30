import { createClient } from "@/prismicio";

// ISR: cachea la página completa por 2 horas
export const revalidate = 7200;
//import { SectionVideo } from '@/components/sections/SectionVideo';
import { HeroSection } from "@/components/sections/HeroSection";
import { BannerSection } from "@/components/sections/BannerSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { DemoSection } from "@/components/sections/DemoSection";
//import { SyllabusSection } from "@/components/sections/SyllabusSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { SpecialtySection } from "@/components/sections/SpecialtySection";
import { CardOfferSection } from "@/components/sections/CardOfferSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  getHeroSlice,
  mapHeroSlice,
  getBannerInfoSlice,
  mapBannerInfoSlice,
  getAudienceFilterSlice,
  mapAudienceFilterSlice,
  getDemoSectionSlice,
  mapDemoSectionSlice,
  getSyllabusSectionSlice,
  mapSyllabusSectionSlice,
  getOfferSectionSlice,
  mapOfferSectionSlice,
  getCardOfferSectionSlice,
  mapCardOfferSectionSlice,
  getFaqSectionSlice,
  mapFaqSectionSlice,
} from "@/lib/mappers";


export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  const heroSlice = getHeroSlice(page.data.slices);
  const bannerSlice = getBannerInfoSlice(page.data.slices);
  const audienceFilterslice = getAudienceFilterSlice(page.data.slices);
  const demoSectionSlice = getDemoSectionSlice(page.data.slices);
  const syllabusSlice = getSyllabusSectionSlice(page.data.slices);
  const offerSectionSlice = getOfferSectionSlice(page.data.slices);
  const cardOfferSectionSlice = getCardOfferSectionSlice(page.data.slices);
  const faqSectionSlice = getFaqSectionSlice(page.data.slices);

  const heroProps = heroSlice ? mapHeroSlice(heroSlice) : null;
  const bannerProps = bannerSlice ? mapBannerInfoSlice(bannerSlice) : null;
  const audienceFilterProps = audienceFilterslice ? mapAudienceFilterSlice(audienceFilterslice) : null;
  const demoSectionProps = demoSectionSlice ? mapDemoSectionSlice(demoSectionSlice) : null;
//  const syllabusProps = syllabusSlice ? mapSyllabusSectionSlice(syllabusSlice) : null;
  const offerSectionProps = offerSectionSlice ? mapOfferSectionSlice(offerSectionSlice) : null;
  const cardOfferSectionProps = cardOfferSectionSlice ? mapCardOfferSectionSlice(cardOfferSectionSlice) : null;
  const faqSectionProps = faqSectionSlice ? mapFaqSectionSlice(faqSectionSlice) : null;

  return (
    <main id="top">
      {/* Pre-Hero Video 
      <SectionVideo
        youtubeId="oUwGPft8cXk"
        thumbnailSrc="/hero-thumbnail.jpg"
        objectFit="cover"
      />
      */}

      {heroProps && <HeroSection {...heroProps} image="/two.jpg" />}

      {bannerProps && <BannerSection {...bannerProps} />}

      {audienceFilterProps && <AudienceSection {...audienceFilterProps} />}

      {demoSectionProps && <DemoSection {...demoSectionProps} />}

      {/* {syllabusProps && <SyllabusSection {...syllabusProps} />} */}

      {offerSectionProps && <OfferSection {...offerSectionProps} />}

      <SpecialtySection />

      {cardOfferSectionProps && <CardOfferSection {...cardOfferSectionProps} />}

      {faqSectionProps && <FaqSection {...faqSectionProps} />}

      <ContactSection />
    </main>
  );
}

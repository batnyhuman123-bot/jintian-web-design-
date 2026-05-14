"use client";

import { SmoothScrollProvider } from "./SmoothScrollProvider";
import { PageChrome } from "./PageChrome";
import { JintianHeader } from "./JintianHeader";
import { HeroSection } from "./HeroSection";
import { BrandOriginSection } from "./BrandOriginSection";
import { MissionSection } from "./MissionSection";
import { VisionSection } from "./VisionSection";
import { ProductSection } from "./ProductSection";
import { IngredientsSection } from "./IngredientsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { TeamSection } from "./TeamSection";
import { FooterSection } from "./FooterSection";

export function JintianLanding() {
  return (
    <SmoothScrollProvider>
      <PageChrome />
      <JintianHeader />
      <main id="top" className="relative">
        <HeroSection />
        <BrandOriginSection />
        <MissionSection />
        <VisionSection />
        <ProductSection />
        <IngredientsSection />
        <TestimonialsSection />
        <TeamSection />
        <FooterSection />
      </main>
    </SmoothScrollProvider>
  );
}

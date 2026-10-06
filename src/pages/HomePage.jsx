import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { TrustStrip } from '../components/TrustStrip';
import { AboutSection } from '../sections/AboutSection';
import { ServicesSection } from '../sections/ServicesSection';
import { WhySolisSection } from '../sections/WhySolisSection';
import { ClinicalSection } from '../sections/ClinicalSection';
import { HumanCareSection } from '../sections/HumanCareSection';
import { QualitySection } from '../sections/QualitySection';
import { FinalCta } from '../components/FinalCta';
import { ContactSection } from '../sections/ContactSection';

export function HomePage({ navigate }) {
  return (
    <main id="main-content">
      {/* 1. Editorial Campaign Hero */}
      <HeroSection navigate={navigate} />

      {/* 2. Minimal Horizontal Trust Line */}
      <TrustStrip />

      {/* 3. Open Editorial About */}
      <AboutSection navigate={navigate} />

      {/* 4. Editorial Catalogue Showcase (Generic Medicines Featured) */}
      <ServicesSection navigate={navigate} />

      {/* 5. Large-Number Principles (Why Families Choose Solis) */}
      <WhySolisSection />

      {/* 6. Split-Screen Image + Clinical Pharmacy Support */}
      <ClinicalSection navigate={navigate} />

      {/* 7. Emotional Human Care Statement */}
      <HumanCareSection />

      {/* 8. Full-Width Deep Navy Quality Statement */}
      <QualitySection />

      {/* 9. Premium Closing CTA Invitation */}
      <FinalCta navigate={navigate} />

      {/* 10. Split Editorial Contact & Clean Form */}
      <ContactSection />
    </main>
  );
}

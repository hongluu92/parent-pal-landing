"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { BeforeAfterSection } from '@/components/landing/before-after-section';
import { StoryIllustration } from '@/components/landing/story-illustration';
import { FeaturesSection } from '@/components/landing/features-section';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { TrustSection } from '@/components/landing/trust-section';
import { DownloadSection } from '@/components/landing/download-section';
import { V41Section } from '@/components/landing/v41-section';
import { FaqSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/landing/footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ParentPalLanding() {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1E1B4B] paper-texture">
      <Header />
      <HeroSection />
      <BeforeAfterSection />
      <StoryIllustration />
      <FeaturesSection />
      <HowItWorksSection />
      <TrustSection />
      <DownloadSection />
      <V41Section />
      <FaqSection />
      <Footer />
    </main>
  );
}

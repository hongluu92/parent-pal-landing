import { LandingHeader } from '@/components/landing/landing-header';
import { HeroSection } from '@/components/landing/hero-section';
import { BeforeAfterSection } from '@/components/landing/before-after-section';
import { StoryIllustrationSection } from '@/components/landing/story-illustration-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { TrustPillarsSection } from '@/components/landing/trust-pillars-section';
import { V41Section } from '@/components/landing/v41-section';
import { FaqSection } from '@/components/landing/faq-section';
import { LandingFooter } from '@/components/landing/landing-footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F0F0FB] text-[#1E1B4B]">
      <LandingHeader />
      <HeroSection />
      <section id="story">
        <BeforeAfterSection />
      </section>
      <StoryIllustrationSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TrustPillarsSection />
      <V41Section />
      <FaqSection />
      <LandingFooter />
    </main>
  );
}

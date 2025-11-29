import { CtaSection } from "@/components/cta-section"
import { FeaturesSection } from "@/components/features-section"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CtaSection />
    </div>
  )
}

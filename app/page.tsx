import { Header } from "@/components/header"
import { ProfessionalHeroSection } from "@/components/professional-hero-section"
import { InteractiveAboutSection } from "@/components/interactive-about-section"
import { BentoProjectsSection } from "@/components/bento-projects-section"
import { AnimatedSkillsSection } from "@/components/animated-skills-section"
import { FloatingContactSection } from "@/components/floating-contact-section"
import { Footer } from "@/components/footer"
import { ParallaxContainer } from "@/components/parallax-container"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Header />
      <ParallaxContainer>
        <main className="relative">
          <ProfessionalHeroSection />
          <InteractiveAboutSection />
          <BentoProjectsSection />
          <AnimatedSkillsSection />
          <FloatingContactSection />
        </main>
      </ParallaxContainer>
      <Footer />
    </div>
  )
}

import { Header } from "@/components/layout/header"
import { ProfessionalHeroSection } from "@/components/section/professional-hero-section"
import { InteractiveAboutSection } from "@/components/section/interactive-about-section"
import { BentoProjectsSection } from "@/components/section/bento-projects-section"
import { TechnicalSkillsSection } from "@/components/section/technical-skills-section"
import { WorkExperienceSection } from "@/components/section/work-experience-section"
import { ContactSection } from "@/components/section/contact-section"
import { Footer } from "@/components/layout/footer"
import { ParallaxContainer } from "@/components/ui/parallax-container"
import { AnimatedBackground } from "@/components/ui/animated-background"

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <ParallaxContainer>
          <main className="relative">
            <ProfessionalHeroSection />
            <InteractiveAboutSection />
            <BentoProjectsSection />
            <WorkExperienceSection />
            <TechnicalSkillsSection />
            <ContactSection />
          </main>
        </ParallaxContainer>
        <Footer />
      </div>
    </div>
  )
}

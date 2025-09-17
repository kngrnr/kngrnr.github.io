import { Header } from "@/components/header"
import { ProfessionalHeroSection } from "@/components/professional-hero-section"
import { InteractiveAboutSection } from "@/components/interactive-about-section"
import { BentoProjectsSection } from "@/components/bento-projects-section"
// import { AnimatedSkillsSection } from "@/components/animated-skills-section"
import { TechnicalSkillsSection } from "@/components/technical-skills-section"
import { WorkExperienceSection } from "@/components/work-experience-section"
// import { FloatingContactSection } from "@/components/floating-contact-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ParallaxContainer } from "@/components/parallax-container"
import { AnimatedBackground } from "@/components/animated-background"

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

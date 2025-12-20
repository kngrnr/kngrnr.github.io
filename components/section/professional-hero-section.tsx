"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { technicalSkills } from "@/data/technical-skills"

export function ProfessionalHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleReset = () => {
      setIsVisible(false)
      // Re-trigger visibility after a short delay to restart animations
      setTimeout(() => setIsVisible(true), 100)
    }

    window.addEventListener("resetAnimations", handleReset)

    return () => {
      window.removeEventListener("resetAnimations", handleReset)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background/35 via-background/40 to-muted/20 pt-20 md:pt-24">
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(8,145,178,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(8,145,178,0.02)_49%,rgba(8,145,178,0.02)_51%,transparent_52%)] bg-[length:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Professional introduction */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <img
                  src="https://avatars.githubusercontent.com/u/52155751?v=4"
                  alt="Professional Mobile Developer"
                  className="w-20 h-20 rounded-full border-3 border-primary/20 shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Available for Work</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  Remote & On-site
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span className="text-primary">I build mobile apps that turn</span>
              <br />
              Ideas into Reality
              <br />
              <span className="text-accent [background:linear-gradient(to_right,hsl(var(--primary)),hsl(var(--accent)))] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [&:not(:has(.bg-clip-text))]:text-accent">
                Experiences
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Senior Mobile Developer specializing in{" "}
              <strong className="text-foreground">Flutter</strong> and native{" "}
              <strong className="text-foreground">Android</strong> and{" "}
              <strong className="text-foreground">iOS</strong>. I craft scalable, high-performance apps that users love and businesses rely on.
            </p>

            <p className="text-lg text-muted-foreground mt-4 mb-8">
              When I’m not coding, I enjoy traveling around Japan and playing the guitar — it keeps me inspired and creative.
            </p>


            {/* Key achievements */}
            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://github.com/kngrnr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
              >
                <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/kngrnr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/10 hover:bg-sky-500/20 transition-colors group"
              >
                <Twitter className="w-5 h-5 text-sky-500 group-hover:scale-110 transition-transform" />
              </a> */}
              <a
                href="mailto:kngrnr.io@gmail.com"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors group"
              >
                <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button size="lg" className="group">
                View Portfolio
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button> */}
              <Button variant="outline" size="lg" className="group bg-transparent" onClick={openResume}

              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
              {/* <Button variant="ghost" size="lg" className="group">
                <Mail className="mr-2 w-4 h-4" />
                Contact Me
              </Button> */}
            </div>
          </div>

          {/* Right side - Technical Skills */}


          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <div className="mb-8 text-left">
                <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer"> Tech Stack Technologies I Work With</h3>
                <p className="text-lg text-muted-foreground hover:text-foreground transition-colors cursor-pointer">A comprehensive overview of the technologies and tools I use to build mobile applications</p>
              </div>

              {/* Technical Skills Grid */}
              <div className="flex justify-start mt-8">
                <div className="inline-grid grid-flow-row auto-cols-max grid-cols-5 gap-2">
                  {technicalSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center text-center"
                    >
                      {/* Technology card */}
                      <div className="w-20 h-20 bg-background rounded-lg flex flex-col items-center gap-2 shadow-sm border border-border/20 p-3 hover:scale-105 hover:shadow-md transition-all duration-200 cursor-pointer">
                        <div className="w-6 h-6">
                          {skill.icon}
                        </div>

                        <h4 className="font-semibold text-xs text-foreground text-center">
                          {skill.name}
                        </h4>
                      </div>

                    </div>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


const openResume = () => {
  window.open(
    "https://drive.usercontent.google.com/download?id=1HDBIBSLIFIpzz1eVQC7rPi_SwpR4sS7z&export=download&authuser=0&confirm=t&uuid=fc18a33c-cc0f-44c3-9259-52b5d0557acb&at=ANTm3cwFcSNPWsPSNTnO1Qf52ELs:1766150539571",
    "_blank",
    "noopener,noreferrer"
  );
};

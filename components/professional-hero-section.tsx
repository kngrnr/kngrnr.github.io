"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export function ProfessionalHeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      name: "HALO Financial",
      description: "Advanced trading platform with real-time analytics",
      image: "/images/halo-financial-mockup.jpg",
      tech: ["Flutter", "Firebase", "Real-time Data"],
    },
    {
      name: "PikFly Delivery",
      description: "Location-based delivery service with live tracking",
      image: "/images/pikfly-delivery-mockup.jpg",
      tech: ["React Native", "Maps API", "Real-time GPS"],
    },
    {
      name: "Macroverse Comics",
      description: "Next-gen digital comics with interactive features",
      image: "/images/macroverse-comics-mockup.jpg",
      tech: ["Flutter", "Animation", "Interactive UI"],
    },
  ]

  useEffect(() => {
    setIsVisible(true)

    // Auto-rotate projects
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 4000)

    const handleReset = () => {
      setIsVisible(false)
      setCurrentProject(0)
      // Re-trigger visibility after a short delay to restart animations
      setTimeout(() => setIsVisible(true), 100)
    }

    window.addEventListener("resetAnimations", handleReset)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resetAnimations", handleReset)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 pt-20 md:pt-24">
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(8,145,178,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(8,145,178,0.05)_49%,rgba(8,145,178,0.05)_51%,transparent_52%)] bg-[length:20px_20px]" />
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
              <span className="text-primary">Transforming Ideas</span>
              <br />
              into Mobile
              <br />
              <span className="text-accent [background:linear-gradient(to_right,hsl(var(--primary)),hsl(var(--accent)))] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [&:not(:has(.bg-clip-text))]:text-accent">
                Experiences
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Senior Mobile Developer specializing in <strong className="text-foreground">Flutter</strong>,
              <strong className="text-foreground"> iOS</strong>, and{" "}
              <strong className="text-foreground">Android</strong>. I build scalable apps that users love and businesses
              depend on.
            </p>

            {/* Key achievements */}
            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
              >
                <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/10 hover:bg-sky-500/20 transition-colors group"
              >
                <Twitter className="w-5 h-5 text-sky-500 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:kngrnr.io@gmail.com"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors group"
              >
                <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                View Portfolio
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group bg-transparent">
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
              <Button variant="ghost" size="lg" className="group">
                <Mail className="mr-2 w-4 h-4" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right side - Project showcase */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Featured Projects</h3>
                  <div className="flex gap-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentProject ? "bg-primary w-6" : "bg-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={projects[currentProject].image || "/placeholder.svg"}
                    alt={projects[currentProject].name}
                    className="w-full h-64 object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold mb-1">{projects[currentProject].name}</h4>
                    <p className="text-sm opacity-90">{projects[currentProject].description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {projects[currentProject].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/90 text-primary-foreground dark:bg-primary dark:text-primary-foreground text-sm rounded-full font-medium border border-primary/50 shadow-sm"
                    >
                      {tech}
                    </span>
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

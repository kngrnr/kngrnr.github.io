"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles, Code, Smartphone } from "lucide-react"

export function DynamicHeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.02,
            top: mousePosition.y * 0.02,
          }}
          data-parallax="0.3"
        />
        <div
          className="absolute w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"
          style={{
            right: mousePosition.x * 0.01,
            bottom: mousePosition.y * 0.01,
          }}
          data-parallax="0.2"
        />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code
          className="absolute top-20 left-20 w-8 h-8 text-primary/30 animate-bounce delay-300"
          data-parallax="0.4"
        />
        <Smartphone
          className="absolute top-40 right-32 w-6 h-6 text-accent/40 animate-bounce delay-700"
          data-parallax="0.6"
        />
        <Sparkles
          className="absolute bottom-40 left-32 w-10 h-10 text-primary/20 animate-pulse delay-500"
          data-parallax="0.3"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <div className="relative inline-block">
              <img
                src="/professional-developer-headshot.png"
                alt="Professional Developer"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-primary/50 shadow-2xl transition-all duration-500 hover:scale-105 hover:border-primary"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x [&:not(:has(.bg-clip-text))]:text-primary">
              Mobile
            </span>
            <br />
            <span className="text-foreground">Developer</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional mobile experiences with
            <span className="text-primary font-semibold"> Flutter</span>,
            <span className="text-accent font-semibold"> iOS</span>, and
            <span className="text-primary font-semibold"> Android</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="group relative overflow-hidden">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button variant="outline" size="lg" className="group bg-transparent">
              Get In Touch
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Apps Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">3</div>
              <div className="text-sm text-muted-foreground">Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">100K+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}

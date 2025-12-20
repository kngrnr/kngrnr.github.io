"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Code, Zap, Users } from "lucide-react"

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "I build both native and cross-platform mobile apps that people actually enjoy using.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "I write code that’s easy to read, maintain, and scale over time.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "I make apps fast and smooth, so users have a seamless experience.",
  },
  {
    icon: Users, // you can swap this icon with something like a Group/Team icon
    title: "Teamwork",
    description: "I enjoy brainstorming and collaborating with others to come up with creative solutions.",
  },
];

export function InteractiveAboutSection() {
  const [activeHighlight, setActiveHighlight] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    const handleReset = () => {
      setIsVisible(false)
      setActiveHighlight(0)
    }

    window.addEventListener("resetAnimations", handleReset)

    return () => {
      observer.disconnect()
      window.removeEventListener("resetAnimations", handleReset)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % highlights.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-5xl font-black mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
  I’m a mobile developer who loves building apps that people enjoy using. I work with Flutter as well as native Android and iOS, focusing on creating reliable, easy to use apps that solve real problems. I’m always learning and exploring new ways to make better apps and broaden my skills.
</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  6+ Years
                </Badge>
                <span className="text-muted-foreground">Mobile Development Experience</span>
              </div>
              {/* <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  20+ Apps
                </Badge>
                <span className="text-muted-foreground">Successfully Launched</span>
              </div> */}
              {/* <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  500K+
                </Badge>
                <span className="text-muted-foreground">Total Downloads</span>
              </div> */}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="grid grid-cols-2 gap-5">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <Card
                    key={index}
                    className={`p-6 cursor-pointer transition-all duration-300 border-2 ${
                      activeHighlight === index
                        ? "border-primary bg-primary/5 scale-105"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setActiveHighlight(index)}
                  >
                    <Icon
                      className={`w-8 h-8 mb-3 transition-colors ${
                        activeHighlight === index ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <h3 className="font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

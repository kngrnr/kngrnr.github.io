"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "HALO Financial Trading",
    description:
      "Advanced financial trading platform with real-time analytics, predictive forecasting, and comprehensive portfolio management.",
    image: "/images/halo-financial-mockup.jpg",
    tags: ["Flutter", "Firebase", "Real-time Data", "Charts"],
    size: "large",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "PikFly Delivery",
    description: "Location-based delivery platform connecting users with local stores for same-day delivery services.",
    image: "/images/pikfly-delivery-mockup.jpg",
    tags: ["React Native", "Maps API", "Real-time Tracking"],
    size: "medium",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 3,
    title: "LETS Logistics",
    description: "Comprehensive logistics solution for efficient package delivery and route optimization.",
    image: "/images/lets-logistics-mockup.jpg",
    tags: ["Flutter", "Route Optimization", "GPS"],
    size: "medium",
    color: "from-red-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "Macroverse Comics",
    description:
      "Next-generation digital comics platform with immersive TapStory format and interactive reading experiences.",
    image: "/images/macroverse-comics-mockup.jpg",
    tags: ["React Native", "Animation", "Interactive UI"],
    size: "large",
    color: "from-purple-500/20 to-indigo-500/20",
  },
]

export function BentoProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = Number.parseInt(entry.target.getAttribute("data-project-id") || "0")
            setVisibleProjects((prev) => [...prev, projectId])
          }
        })
      },
      { threshold: 0.2 },
    )

    const projectElements = document.querySelectorAll("[data-project-id]")
    projectElements.forEach((el) => observer.observe(el))

    const handleReset = () => {
      setVisibleProjects([])
    }

    window.addEventListener("resetAnimations", handleReset)

    return () => {
      observer.disconnect()
      window.removeEventListener("resetAnimations", handleReset)
    }
  }, [])

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the mobile applications I've crafted with passion and precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              data-project-id={project.id}
              className={`
                group relative overflow-hidden border-0 bg-gradient-to-br ${project.color} backdrop-blur-sm
                hover:scale-105 transition-all duration-500 cursor-pointer
                ${project.size === "large" ? "md:col-span-2 lg:col-span-2" : ""}
                ${visibleProjects.includes(project.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-white/90 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex gap-2 justify-center">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 group-hover:translate-y-2 transition-transform duration-300">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 opacity-90">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-0">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

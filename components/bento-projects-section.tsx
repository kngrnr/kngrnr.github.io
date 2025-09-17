"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Smartphone, Globe } from "lucide-react"
import Image from "next/image"
import { projects } from "@/data/projects"
import { useEffect, useRef } from "react"

export function BentoProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".project-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.remove("opacity-0", "translate-y-8")
                card.classList.add("opacity-100", "translate-y-0")
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-balance mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A showcase of my recent work and the technologies I love working with
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .play-store-btn {
          background-color: #4ade80 !important;
          color: #000000 !important;
        }
        .play-store-btn:hover {
          background-color: #22c55e !important;
        }
        .app-store-btn {
          background-color: #60a5fa !important;
          color: #000000 !important;
        }
        .app-store-btn:hover {
          background-color: #3b82f6 !important;
        }
        .play-store-btn span,
        .app-store-btn span {
          color: #000000 !important;
        }
        .play-store-btn svg,
        .app-store-btn svg {
          color: #000000 !important;
        }
      `}</style>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: any
  index: number
}) {
  return (
    <Card className="project-card opacity-0 translate-y-8 transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-2 group overflow-hidden border-0 bg-gradient-to-br from-card via-card to-muted/20 h-auto">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 flex flex-col items-center">
            {/* Floating elements for visual interest */}
            <div className="absolute top-2 right-2 w-8 h-8 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 bg-secondary/20 rounded-full blur-lg"></div>

            <div className="relative group-hover:scale-105 transition-transform duration-500 mb-6">
              <div className="w-full max-w-sm aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Technologies with better styling */}
            <div className="w-full mb-4">
              <div className="flex flex-wrap gap-2 justify-center">
                {project.technologies.slice(0, 4).map((tech: string, idx: number) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="text-xs bg-background/60 backdrop-blur-sm border-primary/20 hover:bg-primary/10 transition-colors px-2 py-1 text-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge variant="outline" className="text-xs px-2 py-1 text-foreground">
                    +{project.technologies.length - 4}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <div className="p-6 flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-balance group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{project.description}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.githubUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="group/btn flex-1 min-w-[80px] bg-transparent text-xs h-9 px-3"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3 h-3 mr-2 group-hover/btn:scale-110 transition-transform" />
                    <span className="truncate">Code</span>
                  </a>
                </Button>
              )}

              {project.playstoreUrl && (
                <a
                  href={project.playstoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="play-store-btn group/btn flex-1 min-w-[80px] h-9 px-3 rounded-md text-xs font-medium inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  <Smartphone className="w-3 h-3 mr-2 group-hover/btn:scale-110 transition-transform" />
                  <span className="truncate">Play</span>
                </a>
              )}

              {project.appstoreUrl && (
                <a
                  href={project.appstoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-store-btn group/btn flex-1 min-w-[80px] h-9 px-3 rounded-md text-xs font-medium inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  <Smartphone className="w-3 h-3 mr-2 group-hover/btn:scale-110 transition-transform" />
                  <span className="truncate">iOS</span>
                </a>
              )}

              {project.companyUrl && (
                <Button
                  size="sm"
                  variant="secondary"
                  className="group/btn flex-1 min-w-[80px] text-xs h-9 px-3"
                  asChild
                >
                  <a href={project.companyUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="w-3 h-3 mr-2 group-hover/btn:scale-110 transition-transform" />
                    <span className="truncate text-foreground">Website</span>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

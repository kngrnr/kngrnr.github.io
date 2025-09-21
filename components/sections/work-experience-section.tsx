"use client"

import { Building2, MapPin, Calendar, FolderOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"
import { workExperiences, type Company } from "@/data/work-experiences"


export function WorkExperienceSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-primary rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-balance mb-4 animate-fade-in">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty animate-fade-in-delay">
            My professional journey and the impact I've made at various organizations
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="space-y-12">
            {workExperiences.map((company, companyIndex) => {
              const IconComponent = company.icon
              return (
                <div
                  key={company.id}
                  ref={(el) => {
                    itemRefs.current[companyIndex] = el
                  }}
                  data-index={companyIndex}
                  className={`transform transition-all duration-700 ease-out ${
                    visibleItems.includes(companyIndex) ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${companyIndex * 150}ms` }}
                >
                  <div className="relative">
                    {/* Company Header */}
                    <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-l-primary/20 hover:border-l-primary hover:scale-[1.02] transform-gpu mb-6">
                      <CardContent className="p-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex flex-col md:flex-row md:items-center gap-4 relative z-10">
                          {/* Company Icon */}
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-background border-2 border-primary/20 rounded-lg flex items-center justify-center group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3 shadow-sm">
                              <IconComponent
                                className={`w-8 h-8 ${company.iconColor} group-hover:scale-110 transition-transform duration-300`}
                              />
                            </div>
                          </div>

                          {/* Company Info */}
                          <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                              <div>
                                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 group-hover:translate-x-1">
                                  {company.name}
                                </h3>
                                <div className="flex items-center gap-2 text-muted-foreground mt-1 group-hover:translate-x-1 transition-transform duration-300">
                                  <MapPin className="w-4 h-4 group-hover:text-primary transition-colors duration-300" />
                                  <span className="font-medium">{company.location}</span>
                                </div>
                              </div>

                              <div className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 mt-2 md:mt-0">
                                <Calendar className="w-4 h-4" />
                                <span>
                                  {company.startDate} - {company.endDate}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Projects */}
                    <div className="space-y-6 ml-4 border-l-2 border-primary/10 pl-6">
                      {company.projects.map((project, projectIndex) => (
                        <Card
                          key={project.id}
                          className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-2 border-l-primary/10 hover:border-l-primary/30"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start gap-3 mb-4">
                              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                <FolderOpen className="w-4 h-4 text-primary" />
                              </div>
                              <div className="flex-grow">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                    {project.name}
                                  </h4>
                                  <span className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-full border">
                                    {project.location}
                                  </span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {project.description}
                                </p>
                              </div>
                            </div>

                            {/* Project Responsibilities */}
                            <div className="mb-4">
                              <ul className="space-y-2">
                                {project.responsibilities.map((responsibility, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 text-muted-foreground group-hover:translate-x-1 transition-transform duration-300"
                                    style={{ transitionDelay: `${idx * 50}ms` }}
                                  >
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                      {responsibility}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="text-xs hover:bg-primary/20 hover:scale-105 transition-all duration-200 hover:-translate-y-0.5"
                                  style={{ transitionDelay: `${idx * 30}ms` }}
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

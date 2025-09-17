"use client"

import { Building2, MapPin, Calendar, Laptop, Rocket, Palette } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"

const workExperiences = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    location: "San Francisco, CA",
    startDate: "Jan 2022",
    endDate: "Present",
    icon: Laptop, // replaced emoji with Lucide icon
    iconColor: "text-blue-600",
    responsibilities: [
      "Led development of microservices architecture serving 1M+ users",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with product team to deliver features ahead of schedule",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Frontend Developer",
    location: "Austin, TX",
    startDate: "Jun 2020",
    endDate: "Dec 2021",
    icon: Rocket, // replaced emoji with Lucide icon
    iconColor: "text-green-600",
    responsibilities: [
      "Built responsive web applications using React and TypeScript",
      "Optimized application performance improving load times by 40%",
      "Integrated third-party APIs and payment processing systems",
      "Participated in agile development processes and sprint planning",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Stripe"],
  },
  {
    id: 3,
    company: "Digital Agency Pro",
    position: "Junior Web Developer",
    location: "Remote",
    startDate: "Mar 2019",
    endDate: "May 2020",
    icon: Palette, // replaced emoji with Lucide icon
    iconColor: "text-purple-600",
    responsibilities: [
      "Developed custom WordPress themes and plugins for clients",
      "Created pixel-perfect designs from Figma mockups",
      "Maintained and updated existing client websites",
      "Provided technical support and training to clients",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "CSS", "MySQL"],
  },
]

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
          <div className="space-y-8">
            {workExperiences.map((experience, index) => {
              const IconComponent = experience.icon
              return (
                <div
                  key={experience.id}
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  data-index={index}
                  className={`transform transition-all duration-700 ease-out ${
                    visibleItems.includes(index) ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative">
                    <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-l-primary/20 hover:border-l-primary hover:scale-[1.02] transform-gpu">
                      <CardContent className="p-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex flex-col md:flex-row md:items-start gap-4 relative z-10">
                          {/* Company Icon and Info */}
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-background border-2 border-primary/20 rounded-lg flex items-center justify-center group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3 shadow-sm">
                              <IconComponent
                                className={`w-6 h-6 ${experience.iconColor} group-hover:scale-110 transition-transform duration-300`}
                              />
                            </div>
                          </div>

                          <div className="flex-grow">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                              <div>
                                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 group-hover:translate-x-1">
                                  {experience.position}
                                </h3>
                                <div className="flex items-center gap-2 text-muted-foreground mt-1 group-hover:translate-x-1 transition-transform duration-300">
                                  <Building2 className="w-4 h-4 group-hover:text-primary transition-colors duration-300" />
                                  <span className="font-medium">{experience.company}</span>
                                </div>
                              </div>

                              <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                                <div className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                  <Calendar className="w-4 h-4" />
                                  <span>
                                    {experience.startDate} - {experience.endDate}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                  <MapPin className="w-4 h-4" />
                                  <span>{experience.location}</span>
                                </div>
                              </div>
                            </div>

                            {/* Responsibilities */}
                            <div className="mb-4">
                              <ul className="space-y-2">
                                {experience.responsibilities.map((responsibility, idx) => (
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

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech, idx) => (
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
                          </div>
                        </div>
                      </CardContent>
                    </Card>
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

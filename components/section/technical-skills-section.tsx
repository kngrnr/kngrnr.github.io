"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { technicalSkills, categories } from "@/data/technical-skills"

export function TechnicalSkillsSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  // Group skills by category
  const skillsByCategory = categories.map(category => ({
    ...category,
    skills: technicalSkills.filter(skill => skill.category === category.name)
  })).filter(category => category.skills.length > 0)

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
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-primary rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-balance mb-4 animate-fade-in">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty animate-fade-in-delay">
            My technical expertise and the technologies I use to build exceptional mobile applications
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="space-y-8">
            {/* Mobile Category - Full Width Row */}
            {skillsByCategory
              .filter(category => category.name === 'Mobile')
              .map((category, categoryIndex) => (
                <div
                key={category.name}
                ref={(el) => {
                  itemRefs.current[categoryIndex] = el
                }}
                data-index={categoryIndex}
                className={`transform transition-all duration-700 ease-out ${
                  visibleItems.includes(categoryIndex) ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${categoryIndex * 150}ms` }}
              >
                <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-l-primary/20 hover:border-l-primary hover:scale-[1.02] transform-gpu h-full">
                  <CardContent className="p-4 relative overflow-hidden h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-4">
                        {/* Category Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-background border-2 border-primary/20 rounded-lg flex items-center justify-center group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3 shadow-sm">
                            <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                              {category.icon}
                            </span>
                          </div>
                        </div>

                        {/* Category Info */}
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 group-hover:translate-x-1">
                            {category.name}
                          </h3>
                        </div>
                      </div>

                      {/* Skills Grid */}
                      <div className="flex-1">
                        {category.name === 'Mobile' ? (
                          // Mobile skills in one row
                          <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skill.name}
                            className="group/skill relative p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/30 hover:border-border hover:bg-card/80 transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover/skill:bg-primary/20 transition-colors duration-300">
                                {skill.icon}
                              </div>
                              <div className="flex-grow min-w-0">
                                <h4 className="font-semibold text-foreground text-sm group-hover/skill:text-primary transition-colors duration-300">
                                  {skill.name}
                                </h4>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {skill.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </div>
              ))}

            {/* Other Categories - 2 Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillsByCategory
                .filter(category => category.name !== 'Mobile')
                .map((category, categoryIndex) => (
                <div
                  key={category.name}
                  ref={(el) => {
                    itemRefs.current[categoryIndex + 1] = el
                  }}
                  data-index={categoryIndex + 1}
                  className={`transform transition-all duration-700 ease-out ${
                    visibleItems.includes(categoryIndex + 1) ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${(categoryIndex + 1) * 150}ms` }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-l-primary/20 hover:border-l-primary hover:scale-[1.02] transform-gpu h-full">
                    <CardContent className="p-4 relative overflow-hidden h-full flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-4">
                          {/* Category Icon */}
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-background border-2 border-primary/20 rounded-lg flex items-center justify-center group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3 shadow-sm">
                              <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                                {category.icon}
                              </span>
                            </div>
                          </div>

                          {/* Category Info */}
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 group-hover:translate-x-1">
                              {category.name}
                            </h3>
                          </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="flex-1">
                          <div className="grid grid-cols-1 gap-3">
                            {category.skills.map((skill, skillIndex) => (
                              <div
                                key={skill.name}
                                className="group/skill relative p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/30 hover:border-border hover:bg-card/80 transition-all duration-300 hover:-translate-y-1"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center group-hover/skill:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                                    {skill.icon}
                                  </div>
                                  <div className="flex-grow min-w-0">
                                    <h4 className="font-semibold text-foreground text-sm group-hover/skill:text-primary transition-colors duration-300">
                                      {skill.name}
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                      {skill.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}

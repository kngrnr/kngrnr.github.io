"use client"

import { useEffect, useRef, useState } from "react"
import { technicalSkills, categories } from "@/data/technical-skills"

export function TechnicalSkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillCards = entry.target.querySelectorAll(".skill-card")
            skillCards.forEach((card, index) => {
              setTimeout(() => {
                const skillName = card.getAttribute("data-skill")
                if (skillName) {
                  setVisibleSkills((prev) => new Set([...prev, skillName]))
                }
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            A curated collection of cutting-edge technologies and frameworks that power modern applications
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Floating skill cards in a masonry-like layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:gap-8">
            {technicalSkills.map((skill, index) => (
              <div
                key={skill.name}
                data-skill={skill.name}
                className={`skill-card group relative transform transition-all duration-700 ease-out ${
                  visibleSkills.has(skill.name)
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-12 opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  animationDelay: `${index * 100}ms`,
                }}
                onMouseEnter={() => setActiveCategory(skill.category)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Main card */}
                <div className="relative p-6 bg-card/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-border group-hover:-translate-y-2 group-hover:rotate-1">
                  {/* Gradient background overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                  />

                  {/* Animated border glow */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500 rounded-2xl`}
                  />

                  <div className="relative z-10 flex flex-col items-center space-y-4">
                    {/* Icon with floating animation */}
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 scale-150 animate-pulse`}
                      />
                      <div className="relative p-4 bg-gradient-to-br from-background/50 to-card rounded-2xl group-hover:bg-card transition-all duration-300 group-hover:scale-110 transform shadow-inner">
                        <div className="group-hover:animate-bounce">{skill.icon}</div>
                      </div>
                    </div>

                    {/* Skill name with typewriter effect */}
                    <div className="text-center space-y-2">
                      <h4 className="text-sm font-bold text-foreground group-hover:text-foreground transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-muted-foreground group-hover:text-muted-foreground transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                        {skill.description}
                      </p>
                    </div>

                    {/* Category badge */}
                    <div
                      className={`absolute -top-2 -right-2 px-2 py-1 bg-gradient-to-r ${skill.color} text-black text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-lg`}
                    >
                      {skill.category}
                    </div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" />
                  <div
                    className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-gradient-to-r from-accent to-destructive rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-ping"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center space-x-8 bg-card/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg border border-border">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
              <span className="text-foreground font-semibold">{technicalSkills.length} Technologies</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center space-x-3">
              <div
                className="w-4 h-4 bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <span className="text-foreground font-semibold">{categories.length} Categories</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center space-x-3">
              <div
                className="w-4 h-4 bg-gradient-to-r from-accent to-destructive rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              />
              <span className="text-foreground font-semibold">Always Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

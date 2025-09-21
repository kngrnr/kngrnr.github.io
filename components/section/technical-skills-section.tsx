"use client"

import { useEffect, useRef, useState } from "react"
import { technicalSkills, categories } from "@/data/technical-skills"

export function TechnicalSkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set())
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

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
            const skillCards = entry.target.querySelectorAll(".skill-card")
            skillCards.forEach((card, index) => {
              setTimeout(() => {
                const skillName = card.getAttribute("data-skill")
                if (skillName) {
                  setVisibleSkills((prev) => new Set([...prev, skillName]))
                }
              }, index * 80)
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
    <section ref={sectionRef} id="skills" className="py-32 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/10 via-primary/5 to-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: "20s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <span className="mx-6 text-primary font-semibold tracking-wider uppercase text-sm">Technical Stack</span>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-foreground mb-8 text-balance leading-tight">
            My{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
              Expertise
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed font-light">
            Crafting exceptional mobile experiences with cutting-edge technologies and modern frameworks
          </p>
        </div>

        {/* Skills Showcase - Better Arrangement */}
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout for Better Organization */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Primary Skills */}
            <div className="space-y-12">
              {/* Mobile Development */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">📱</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Mobile Development</h3>
                    <p className="text-muted-foreground">Native & Cross-platform solutions</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {skillsByCategory
                    .filter(cat => ['iOS', 'Cross-Platform', 'Mobile'].includes(cat.name))
                    .flatMap(cat => cat.skills)
                    .map((skill, index) => (
                      <div
                        key={skill.name}
                        data-skill={skill.name}
                        className={`skill-card group relative transform transition-all duration-700 ease-out ${
                          visibleSkills.has(skill.name)
                            ? "translate-y-0 opacity-100 scale-100"
                            : "translate-y-8 opacity-0 scale-95"
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="relative p-4 bg-card/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-border group-hover:-translate-y-2">
                          <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />
                          <div className="relative flex items-center space-x-3">
                            <div className="p-2 bg-gradient-to-br from-background/50 to-card rounded-lg group-hover:scale-110 transition-transform duration-300">
                              {skill.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-foreground text-sm truncate">{skill.name}</h4>
                              <p className="text-xs text-muted-foreground truncate">{skill.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Programming Languages */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">💻</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Programming Languages</h3>
                    <p className="text-muted-foreground">Core development languages</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {skillsByCategory
                    .filter(cat => cat.name === 'Language')
                    .flatMap(cat => cat.skills)
                    .map((skill, index) => (
                      <div
                        key={skill.name}
                        data-skill={skill.name}
                        className={`skill-card group relative transform transition-all duration-700 ease-out ${
                          visibleSkills.has(skill.name)
                            ? "translate-y-0 opacity-100 scale-100"
                            : "translate-y-8 opacity-0 scale-95"
                        }`}
                        style={{ transitionDelay: `${(index + 6) * 100}ms` }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="relative p-4 bg-card/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-border group-hover:-translate-y-2">
                          <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />
                          <div className="relative flex items-center space-x-3">
                            <div className="p-2 bg-gradient-to-br from-background/50 to-card rounded-lg group-hover:scale-110 transition-transform duration-300">
                              {skill.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-foreground text-sm truncate">{skill.name}</h4>
                              <p className="text-xs text-muted-foreground truncate">{skill.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Right Column - Web & Backend */}
            <div className="space-y-12">
              {/* Web Development */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">🌐</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Web Development</h3>
                    <p className="text-muted-foreground">Frontend & Backend technologies</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {skillsByCategory
                    .filter(cat => ['Web', 'Backend', 'API'].includes(cat.name))
                    .flatMap(cat => cat.skills)
                    .map((skill, index) => (
                      <div
                        key={skill.name}
                        data-skill={skill.name}
                        className={`skill-card group relative transform transition-all duration-700 ease-out ${
                          visibleSkills.has(skill.name)
                            ? "translate-y-0 opacity-100 scale-100"
                            : "translate-y-8 opacity-0 scale-95"
                        }`}
                        style={{ transitionDelay: `${(index + 10) * 100}ms` }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="relative p-4 bg-card/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-border group-hover:-translate-y-2">
                          <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />
                          <div className="relative flex items-center space-x-3">
                            <div className="p-2 bg-gradient-to-br from-background/50 to-card rounded-lg group-hover:scale-110 transition-transform duration-300">
                              {skill.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-foreground text-sm truncate">{skill.name}</h4>
                              <p className="text-xs text-muted-foreground truncate">{skill.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Featured Skills - Highlighted */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Core Expertise</h3>
                    <p className="text-muted-foreground">Primary technologies I work with daily</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {['Swift', 'SwiftUI', 'Flutter', 'React Native'].map((skillName, index) => {
                    const skill = technicalSkills.find(s => s.name === skillName)
                    if (!skill) return null
                    
                    return (
                      <div
                        key={skill.name}
                        data-skill={skill.name}
                        className={`skill-card group relative transform transition-all duration-700 ease-out ${
                          visibleSkills.has(skill.name)
                            ? "translate-y-0 opacity-100 scale-100"
                            : "translate-y-8 opacity-0 scale-95"
                        }`}
                        style={{ transitionDelay: `${(index + 15) * 100}ms` }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="relative p-6 bg-gradient-to-r from-card/90 to-card/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-border group-hover:-translate-y-1">
                          <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl`} />
                          <div className="relative flex items-center space-x-4">
                            <div className="p-3 bg-gradient-to-br from-background/50 to-card rounded-xl group-hover:scale-110 transition-transform duration-300">
                              {skill.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-foreground mb-1">{skill.name}</h4>
                              <p className="text-sm text-muted-foreground">{skill.description}</p>
                            </div>
                            <div className={`px-3 py-1 bg-gradient-to-r ${skill.color} bg-opacity-20 text-xs font-medium rounded-full`}>
                              {skill.category}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Footer */}
        <div className="mt-32 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl rounded-3xl" />
            <div className="relative flex items-center justify-center space-x-12 bg-card/90 backdrop-blur-xl px-12 py-8 rounded-3xl shadow-2xl border border-border/50">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full animate-ping opacity-75" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">{technicalSkills.length}</div>
                  <div className="text-sm text-muted-foreground font-medium">Technologies</div>
                </div>
              </div>
              
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent" />
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div
                    className="w-6 h-6 bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-secondary to-accent rounded-full animate-ping opacity-75"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">{categories.length}</div>
                  <div className="text-sm text-muted-foreground font-medium">Categories</div>
                </div>
              </div>
              
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent" />
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div
                    className="w-6 h-6 bg-gradient-to-r from-accent to-destructive rounded-full animate-pulse"
                    style={{ animationDelay: "2s" }}
                  />
                  <div
                    className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-accent to-destructive rounded-full animate-ping opacity-75"
                    style={{ animationDelay: "2s" }}
                  />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">∞</div>
                  <div className="text-sm text-muted-foreground font-medium">Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { technicalSkills } from "@/data/technical-skills"

export function TechnicalSkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background animated circles */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-primary rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-0 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-balance mb-4">
            Tech Stack Technologies I Work With
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A comprehensive overview of the technologies and tools I use to build mobile applications
          </p>
        </div>

        {/* Grid of Technologies */}
        <div className="mx-auto">
         <div className="flex justify-center">
          <div className="inline-grid grid-rows-5 auto-rows-max grid-flow-col gap-3">
            {technicalSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center text-center"
              >
                {/* Technology card */}
                 <div className="w-24 h-24 bg-background rounded-lg flex flex-col items-center justify-center shadow-sm border border-border/20 p-4 hover:scale-105 hover:shadow-md transition-all duration-200 cursor-pointer">
                  <div className="w-8 h-8 mb-1">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-xs text-foreground text-center leading-tight">
                    {skill.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
         </div>
        </div>
      </div>
    </section>
  )
}

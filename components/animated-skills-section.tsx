"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Mobile Frameworks",
    skills: [
      { name: "Flutter", level: 95, color: "bg-blue-500" },
      { name: "React Native", level: 88, color: "bg-cyan-500" },
      { name: "iOS (Swift)", level: 85, color: "bg-gray-500" },
      { name: "Android (Kotlin)", level: 82, color: "bg-green-500" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Firebase", level: 90, color: "bg-orange-500" },
      { name: "Node.js", level: 78, color: "bg-green-600" },
      { name: "PostgreSQL", level: 75, color: "bg-blue-600" },
      { name: "MongoDB", level: 72, color: "bg-green-700" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 92, color: "bg-red-500" },
      { name: "Docker", level: 70, color: "bg-blue-400" },
      { name: "CI/CD", level: 75, color: "bg-purple-500" },
      { name: "Testing", level: 80, color: "bg-yellow-500" },
    ],
  },
]

export function AnimatedSkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skills progressively
          const allSkills = skillCategories.flatMap((cat) => cat.skills.map((skill) => skill.name))
          allSkills.forEach((skillName, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => [...prev, skillName])
            }, index * 400) // Slowed down from 200ms to 400ms for more gradual animation
          })
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("skills")
    if (section) observer.observe(section)

    const handleReset = () => {
      setIsVisible(false)
      setAnimatedSkills([])
    }

    window.addEventListener("resetAnimations", handleReset)

    return () => {
      observer.disconnect()
      window.removeEventListener("resetAnimations", handleReset)
    }
  }, [])

  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-black mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={`p-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={animatedSkills.includes(skill.name) ? skill.level : 0} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Flutter Development",
    skills: [
      { name: "Flutter/Dart", level: 95 },
      { name: "State Management (Bloc, Provider)", level: 90 },
      { name: "Flutter Animations", level: 85 },
      { name: "Platform Channels", level: 80 },
    ],
  },
  {
    title: "iOS Development",
    skills: [
      { name: "Swift", level: 90 },
      { name: "UIKit", level: 85 },
      { name: "SwiftUI", level: 80 },
      { name: "Core Data", level: 85 },
    ],
  },
  {
    title: "Android Development",
    skills: [
      { name: "Kotlin", level: 88 },
      { name: "Jetpack Compose", level: 82 },
      { name: "Android Architecture Components", level: 85 },
      { name: "Room Database", level: 80 },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Firebase", level: 90 },
      { name: "REST APIs", level: 85 },
      { name: "Git/GitHub", level: 95 },
      { name: "CI/CD", level: 75 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Technical Skills</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

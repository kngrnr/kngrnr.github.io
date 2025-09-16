"use client"

import { Building2, MapPin, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const workExperiences = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    location: "San Francisco, CA",
    startDate: "Jan 2022",
    endDate: "Present",
    icon: "💻",
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
    icon: "🚀",
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
    icon: "🎨",
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
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-balance mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            My professional journey and the impact I've made at various organizations
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {workExperiences.map((experience, index) => (
            <Card
              key={experience.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary/20 hover:border-l-primary"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Company Icon and Info */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-colors duration-300">
                      {experience.icon}
                    </div>
                  </div>

                  <div className="flex-grow">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {experience.position}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                      </div>

                      <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {experience.startDate} - {experience.endDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm leading-relaxed">{responsibility}</span>
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
                          className="text-xs hover:bg-primary/20 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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
      `}</style>
    </section>
  )
}

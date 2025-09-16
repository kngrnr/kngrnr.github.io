import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "HALO Financial Trading App",
    description:
      "Advanced financial trading platform providing detailed stock analysis, predictive forecasts up to 3 years, and comprehensive portfolio management with real-time market data and broker consensus recommendations.",
    image: "/images/halo-financial-mockup.jpg",
    technologies: ["Flutter", "Dart", "REST API", "Financial APIs", "Charts"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "PikFly Delivery Platform",
    description:
      "Location-based delivery service connecting customers with local stores. Features real-time GPS tracking, store discovery, pickup/delivery coordination, and seamless same-day delivery experience.",
    image: "/images/pikfly-delivery-mockup.jpg",
    technologies: ["Flutter", "Google Maps API", "Firebase", "Real-time DB"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "LETS Logistics Solution",
    description:
      "Comprehensive logistics and delivery management system with advanced route optimization, real-time tracking, and multi-location coordination for efficient package delivery services.",
    image: "/images/lets-logistics-mockup.jpg",
    technologies: ["Flutter", "Kotlin", "Google Maps", "Location Services"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Macroverse Digital Comics",
    description:
      "Next-generation digital comics platform featuring immersive TapStory format, exclusive content, and interactive reading experiences. Offers sci-fi, fantasy, and adventure comics with brain-swapping narratives and reader-controlled storytelling.",
    image: "/images/macroverse-comics-mockup.jpg",
    technologies: ["Flutter", "Animation APIs", "Content Management", "In-App Purchase"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "HALO Portfolio Analytics",
    description:
      "Professional investment portfolio analysis tool featuring buy/sell signals, quality yield indicators, and comprehensive market data visualization for informed trading decisions.",
    image: "/images/halo-portfolio-mockup.jpg",
    technologies: ["Flutter", "Data Visualization", "Financial APIs", "SQLite"],
    githubUrl: "#",
    liveUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
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

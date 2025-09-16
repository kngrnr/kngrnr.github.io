import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                With over 5 years of experience in mobile development, I've helped startups and established companies
                bring their ideas to life through innovative mobile applications.
              </p>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                My expertise spans across Flutter for cross-platform development, native iOS with Swift, and Android
                with Kotlin. I'm passionate about creating seamless user experiences and writing clean, maintainable
                code.
              </p>
              <p className="text-lg text-muted-foreground text-pretty">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge through technical blog posts.
              </p>
            </div>

            <div>
              <img src="/developer-working-on-mobile-apps-with-code-on-scre.jpg" alt="Developer workspace" className="rounded-lg shadow-lg" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                <p className="text-muted-foreground text-pretty">
                  Writing maintainable, scalable code following best practices and design patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mobile First</h3>
                <p className="text-muted-foreground text-pretty">
                  Designing and developing with mobile users in mind, ensuring optimal performance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground text-pretty">
                  Rapid prototyping and iterative development to bring ideas to market quickly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

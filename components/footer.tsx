import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">DevPortfolio</h3>
            <p className="text-muted-foreground">Mobile Developer • Flutter • iOS • Android</p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground">© 2024 DevPortfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

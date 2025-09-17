"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useEffect, useRef, useState } from "react"; // added useEffect and useRef for animations

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isVisible, setIsVisible] = useState(false)
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Stagger animations for different elements
            setTimeout(() => setAnimatedElements((prev) => new Set([...prev, "header"])), 200)
            setTimeout(() => setAnimatedElements((prev) => new Set([...prev, "info"])), 400)
            setTimeout(() => setAnimatedElements((prev) => new Set([...prev, "form"])), 600)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-background relative overflow-hidden">
      {" "}
      {/* added ref and overflow hidden for animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <div className="container mx-auto px-4 relative">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            animatedElements.has("header") ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-balance mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 ease-out ${
              animatedElements.has("info") ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <div>
              <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology and development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 text-primary group-hover:animate-bounce" />
                </div>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors duration-300">Email</p>
                  <p className="text-muted-foreground">kngrnr.io@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-5 h-5 text-primary group-hover:animate-bounce" />
                </div>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors duration-300">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-primary group-hover:animate-bounce" />
                </div>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors duration-300">Location</p>
                  <p className="text-muted-foreground">San Jose Delmonte City, Bulacan, PH 🇵🇭</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 ease-out ${
              animatedElements.has("form") ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-border/50 hover:border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2 group">
                    <Label htmlFor="name" className="group-focus-within:text-primary transition-colors duration-300">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="transition-all duration-300 focus:scale-[1.02] hover:border-primary/50"
                      required
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="email" className="group-focus-within:text-primary transition-colors duration-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="transition-all duration-300 focus:scale-[1.02] hover:border-primary/50"
                      required
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="message" className="group-focus-within:text-primary transition-colors duration-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={5}
                      className="transition-all duration-300 focus:scale-[1.02] hover:border-primary/50 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full group hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

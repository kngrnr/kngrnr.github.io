"use client"

import { useEffect, useRef, useState } from "react"

const technicalSkills = [
  {
    name: "Swift",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#FA7343"
          d="M24 12.31c0-6.63-5.37-12-12-12s-12 5.37-12 12c0 6.63 5.37 12 12 12s12-5.37 12-12zm-12-8.5c4.69 0 8.5 3.81 8.5 8.5s-3.81 8.5-8.5 8.5-8.5-3.81-8.5-8.5 3.81-8.5 8.5-8.5z"
        />
        <path
          fill="#FA7343"
          d="M18.71 7.21c-1.92-2.28-4.8-3.74-8.01-3.74-.85 0-1.67.1-2.46.29 2.32.73 4.46 2.04 6.26 3.84 1.8 1.8 3.11 3.94 3.84 6.26.19-.79.29-1.61.29-2.46 0-1.42-.31-2.77-.92-3.99z"
        />
      </svg>
    ),
    color: "from-orange-400 to-red-500",
    category: "iOS",
    description: "Native iOS development",
  },
  {
    name: "SwiftUI",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#007AFF" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    color: "from-blue-400 to-blue-600",
    category: "iOS",
    description: "Modern UI framework",
  },
  {
    name: "Flutter",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#02569B"
          d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"
        />
        <path fill="#42A5F5" d="M14.328 11.072L7.858 17.53l6.47 6.47H21.7l-6.46-6.468z" />
      </svg>
    ),
    color: "from-blue-400 to-cyan-500",
    category: "Cross-Platform",
    description: "Cross-platform framework",
  },
  {
    name: "Dart",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#0175C2"
          d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9.342-9.342a2.96 2.96 0 0 1-.342-1.684c.047-.936.342-1.815.342-1.815L4.105 4.105z"
        />
      </svg>
    ),
    color: "from-blue-500 to-blue-700",
    category: "Language",
    description: "Flutter programming language",
  },
  {
    name: "Android",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#3DDC84"
          d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"
        />
      </svg>
    ),
    color: "from-green-400 to-green-600",
    category: "Mobile",
    description: "Native Android development",
  },
  {
    name: "Kotlin",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#7F52FF" d="M24 24H12L24 12V24Z" />
        <path fill="#F88909" d="M12 0H24L12 12L0 0H12Z" />
        <path fill="#E44857" d="M12 12L24 0V12L12 24L0 12L12 0V12Z" />
      </svg>
    ),
    color: "from-purple-500 to-pink-500",
    category: "Language",
    description: "Modern Android language",
  },
  {
    name: "React Native",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#61DAFB"
          d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95"
        />
      </svg>
    ),
    color: "from-cyan-400 to-blue-500",
    category: "Cross-Platform",
    description: "React for mobile",
  },
  {
    name: "UIKit",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#147EFB"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        />
      </svg>
    ),
    color: "from-blue-500 to-indigo-600",
    category: "iOS",
    description: "iOS UI framework",
  },
  {
    name: "Objective-C",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#438EFF"
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        />
      </svg>
    ),
    color: "from-blue-600 to-gray-700",
    category: "Language",
    description: "Legacy iOS language",
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#F7DF1E"
          d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
        />
      </svg>
    ),
    color: "from-yellow-400 to-yellow-600",
    category: "Web",
    description: "Web programming language",
  },
  {
    name: "HTML",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#E34F26"
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
        />
      </svg>
    ),
    color: "from-orange-500 to-red-600",
    category: "Web",
    description: "Markup language",
  },
  {
    name: "CSS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#1572B6"
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
        />
      </svg>
    ),
    color: "from-blue-500 to-blue-700",
    category: "Web",
    description: "Styling language",
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#339933"
          d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"
        />
      </svg>
    ),
    color: "from-green-500 to-green-700",
    category: "Backend",
    description: "JavaScript runtime",
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#3776AB"
          d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.13.64-.1.71-.07.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"
        />
      </svg>
    ),
    color: "from-blue-400 to-yellow-500",
    category: "Language",
    description: "Versatile programming language",
  },
  {
    name: "C",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#A8B9CC"
          d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5380-3.665 3.5380-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z"
        />
      </svg>
    ),
    color: "from-gray-500 to-gray-700",
    category: "Language",
    description: "System programming language",
  },
  {
    name: "REST API",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#FF6B35"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-5.568 8.16L6.432 8.16h11.136z"
        />
      </svg>
    ),
    color: "from-orange-400 to-red-500",
    category: "API",
    description: "Web service architecture",
  },
  {
    name: "ReactJS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#61DAFB"
          d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95"
        />
      </svg>
    ),
    color: "from-cyan-400 to-blue-500",
    category: "Web",
    description: "JavaScript library",
  },
]

const categories = [
  { name: "iOS", icon: "📱", color: "from-blue-500 to-purple-600" },
  { name: "Cross-Platform", icon: "🔄", color: "from-green-500 to-blue-500" },
  { name: "Mobile", icon: "📲", color: "from-green-400 to-emerald-600" },
  { name: "Language", icon: "💻", color: "from-purple-500 to-pink-500" },
  { name: "Web", icon: "🌐", color: "from-orange-500 to-red-500" },
  { name: "Backend", icon: "⚙️", color: "from-gray-600 to-gray-800" },
  { name: "API", icon: "🔗", color: "from-indigo-500 to-blue-600" },
]

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
                      className={`absolute -top-2 -right-2 px-2 py-1 bg-gradient-to-r ${skill.color} text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-lg`}
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

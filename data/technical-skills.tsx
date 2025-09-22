export const technicalSkills = [
  // Mobile Development
  {
    name: "iOS Development",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#007AFF"
          d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
        />
      </svg>
    ),
    color: "from-blue-500 to-purple-600",
    category: "Mobile",
    description: "Swift, SwiftUI, UIKit, Objective-C",
  },
  {
    name: "Android Development",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#3DDC84"
          d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"
        />
      </svg>
    ),
    color: "from-green-400 to-emerald-600",
    category: "Mobile",
    description: "Kotlin, Java, Android Studio",
  },
  {
    name: "Cross-Platform",
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
    category: "Mobile",
    description: "Flutter/Dart, React Native",
  },
  
  // Web Development
  {
    name: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#61DAFB"
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        />
      </svg>
    ),
    color: "from-cyan-400 to-blue-500",
    category: "Web",
    description: "JavaScript, HTML, CSS, React",
  },
  {
    name: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#539E43"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-5.568 8.16L6.432 8.16h11.136z"
        />
      </svg>
    ),
    color: "from-green-500 to-green-700",
    category: "Web",
    description: "Node.js, Python, C",
  },
  
  // APIs & Services
  {
    name: "APIs",
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
    description: "REST API, GraphQL",
  },
  {
    name: "Firebase",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#FFCA28"
          d="M3.89 15.673L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"
        />
      </svg>
    ),
    color: "from-yellow-400 to-orange-500",
    category: "Services",
    description: "Firebase, Google APIs",
  },
  
  // Cloud & Infrastructure
  {
    name: "AWS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#FF9900"
          d="M6.763 12.456v.002c-.4-.01-.8-.06-1.19-.15-3.04-.73-4.57-3.8-3.42-6.86C2.9 2.7 5.37.9 8.1.9c.4 0 .8.03 1.19.1.4.07.78.18 1.14.33.36.15.7.33 1.01.54.31.21.59.45.84.72.25.27.47.56.65.87.18.31.33.64.45.98.12.34.21.69.27 1.05.06.36.09.73.09 1.1v.01c0 .37-.03.74-.09 1.1-.06.36-.15.71-.27 1.05-.12.34-.27.67-.45.98-.18.31-.4.6-.65.87-.25.27-.53.51-.84.72-.31.21-.65.39-1.01.54-.36.15-.74.26-1.14.33-.39.07-.79.1-1.19.1z"
        />
      </svg>
    ),
    color: "from-orange-500 to-yellow-500",
    category: "Cloud",
    description: "Infrastructure, Networking, Storage, Security",
  },
  {
    name: "GCP",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    ),
    color: "from-blue-500 to-green-500",
    category: "Cloud",
    description: "Access Management, VMs, Containers",
  },
  
  // Development Tools
  {
    name: "Version Control",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#F05032"
          d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
        />
      </svg>
    ),
    color: "from-gray-600 to-gray-800",
    category: "Tools",
    description: "Git, GitHub, GitLab, BitBucket",
  },
  {
    name: "IDEs",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#007ACC"
          d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861a.249.249 0 0 1-.25.25H7.156a.249.249 0 0 1-.25-.25V6.75a.249.249 0 0 1 .25-.25h10.598a.249.249 0 0 1 .25.25v10.698z"
        />
      </svg>
    ),
    color: "from-blue-500 to-indigo-600",
    category: "Tools",
    description: "Xcode, Android Studio, VS Code, IntelliJ",
  },
  {
    name: "CI/CD",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#2088FF"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 17.5v-3.5H8l4-7 4 7h-3v3.5h-2z"
        />
      </svg>
    ),
    color: "from-blue-400 to-purple-500",
    category: "Tools",
    description: "Fastlane, Codemagic",
  },
  
  // Testing & Management
  {
    name: "Testing",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#4CAF50"
          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
        />
      </svg>
    ),
    color: "from-green-500 to-green-700",
    category: "Testing",
    description: "XCTest, TDD",
  },
  {
    name: "Project Management",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#0052CC"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        />
      </svg>
    ),
    color: "from-blue-600 to-indigo-700",
    category: "Management",
    description: "JIRA, Confluence, Trello",
  },
  {
    name: "Methodologies",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#FF6B35"
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        />
      </svg>
    ),
    color: "from-orange-500 to-red-500",
    category: "Management",
    description: "Agile, Waterfall",
  },
]

export const categories = [
  { name: "Mobile", icon: "📱", color: "from-blue-500 to-purple-600" },
  { name: "Web", icon: "🌐", color: "from-orange-500 to-red-500" },
  { name: "API", icon: "🔗", color: "from-indigo-500 to-blue-600" },
  { name: "Services", icon: "☁️", color: "from-yellow-400 to-orange-500" },
  { name: "Cloud", icon: "☁️", color: "from-blue-500 to-green-500" },
  { name: "Tools", icon: "🛠️", color: "from-gray-600 to-gray-800" },
  { name: "Testing", icon: "🧪", color: "from-green-500 to-green-700" },
  { name: "Management", icon: "📊", color: "from-blue-600 to-indigo-700" },
]
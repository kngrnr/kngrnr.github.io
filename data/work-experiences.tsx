import { Building2, Smartphone, Palette, Banknote } from "lucide-react";

export interface Project {
  id: string;
  name: string;
  description: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Company {
  id: string;
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  icon: any;
  iconColor: string;
  projects: Project[];
}

export const workExperiences: Company[] = [
  {
    id: "Maya",
    name: "Maya",
    location: "Mandaluyong, PH",
    startDate: "August 2025",
    endDate: "Present",
    icon: Building2,
    iconColor: "text-green-600",
    projects: [
      {
        id: "Maya Consumer",
        name: "Maya Consumer",
        description: "Consumer digital bank and e-wallet app offering payments, savings, credit, and loans to millions of Filipinos.",
        location: "Philippines",
        responsibilities: [
          "Engineered features for the Credit and Loans department, delivering consumer lending experiences across the Maya app.",
          "Led the design and development of a reusable restructuring workflow shared across Credit, Loans, and Credit Card products, reducing duplicated effort and speeding up delivery for each product line.",
          "Implemented the Ginisi project, integrating AI-driven credit decisioning into the lending flow.",
          "Implemented geofencing for loan products to enforce location-based eligibility and compliance requirements.",
          "Built UI components and business logic from technical specifications and Figma designs, ensuring accuracy, usability, and performance.",
          "Investigated and resolved production issues, working with cross-functional teams to restore stability and minimize customer impact.",
          "Served as Release Champion, coordinating release readiness, regression checks, and deployment across iOS and Android.",
          "Acted as Scrum Master, facilitating sprint ceremonies, tracking delivery, and removing blockers for the team."
        ],

        technologies: ["Flutter", "Dart", "Swift", "Kotlin", "iOS", "Android", "Geofencing", "Figma", "Scrum"]
      },
      {
        id: "Maya Business 3.0",
        name: "Maya Business 3.0",
        description: "Mobile app thatcombines digital payments, banking services, and other financial tools under one roof to help businesses in the Philippines manage their finances and provide customers with a smooth payment experienc",
        location: "Philippines",
        responsibilities: [
          "Developed reusable libraries and SDKs to enable scalable features, integrate RESTful APIs, and streamline implementation across applications.",
          "Upgraded legacy SDKs, resolved critical crashes, and provided technical support to cross-functional teams for complex integrations.",
          "Implemented new features from technical specifications and Figma designs, ensuring accuracy, usability, and performance.",
          "Integrated native iOS and Android components with Flutter frameworks and configured CI/CD pipelines to support hybrid app development workflows.",
          "Streamlined operations and improved revenue tools by enhancing digital payment functionalities within the platform.",
          "Updated payment response handling and labels on a Node.js backend to ensure accurate and reliable transaction processing."
        ],

        technologies: ["Flutter", "Dart", "BLoC", "Kotlin", "Swift", "iOS", "Android", "GitLab", "CI/CD", "NodeJs", "Fastlane",]
      },
    ]
  },
  {
    id: "flexisourceit",
    name: "FlexisourceIT",
    location: "Makati, PH",
    startDate: "January 2022",
    endDate: "July 2025",
    icon: Building2,
    iconColor: "text-blue-600",
    projects: [
      {
        id: "halo-mobile",
        name: "HALO Mobile",
        description: "Equity research and investing app for global and local stocks.",
        location: "Australia",
        responsibilities: [
          "Resolved performance issues caused by inconsistent state management by implementing a scalable Flutter BLoC architecture with reusable components.",
          "Enhanced market-data insights by integrating REST APIs, GraphQL, and Highcharts, enabling richer and more interactive stock analysis.",
          "Optimized deployment reliability by overhauling the CI/CD pipeline with Firebase, Fastlane, CodeMagic, and GitLab, reducing release time and errors.",
          "Enabled international expansion by creating a reusable UK app flavor, streamlining regional customization.",
          "Strengthened app stability by implementing unit and widget tests, improving code reliability and maintainability.",
          "Enhanced push notifications by integrating Firebase Messaging, delivering more reliable and timely updates.",
          "Managed App Store and Play Store submissions, ensuring timely, consistent, and compliant releases."
        ],

        technologies: ["Flutter", "Dart", "BLoC", "REST API", "GraphQL", "Firebase", "Fastlane", "CodeMagic", "GitLab", "Highcharts"]
      },
      {
        id: "art-prizes",
        name: "Art Prizes",
        description: "Arts events, prizes planner.",
        location: "Australia",
        responsibilities: [
          "Increased user retention and revenue by implementing In-App Purchases and push notifications tailored to event engagement.",
          "Improved interface consistency and user experience by refactoring the app’s theme and standardizing UI components.",
          "Boosted overall reliability by diagnosing and resolving critical crashes, backend failures, and UI defects.",
          "Expanded application capabilities by developing new event-related features that enhanced usability and supported evolving user needs."
        ],

        technologies: ["Flutter", "Dart", "In-App Purchases", "Push Notifications", "Firebase"]
      }
    ]
  },
  {
    id: "dearwolves",
    name: "Dearwolves",
    location: "Philippines",
    startDate: "June 2019",
    endDate: "December 2021",
    icon: Building2,
    iconColor: "text-blue-600",
    projects: [
      {
        id: "pikfly-navigator",
        name: "Pikfly Navigator",
        description: "Alcohol delivery application",
        location: "USA",
        responsibilities: [
          "Added Firebase Crashlytics for real-time error reporting, reducing app crashes and improving reliability.",
          "Diagnosed and fixed critical exceptions, enhancing overall stability and user experience.",
          "Optimized app performance and error monitoring, enabling faster debugging and maintenance."
        ],

        technologies: ["Flutter", "Dart", "Firebase", "Crashlytics"]
      },
      {
        id: "cyclops-navigator",
        name: "Cyclops Navigator",
        description: "Camera Speed Vehicle application",
        location: "UK",
        responsibilities: [
          "Bridged an outdated C SDK to Android and iOS using React Native, creating a proof of concept for seamless integration.",
          "Implemented core app functionalities to support camera-speed vehicle monitoring.",
          "Ensured cross-platform compatibility and smooth performance on Android and iOS."
        ],

        technologies: ["React Native", "Swift", "Objective-C", "C SDK", "Android", "iOS"]
      },
      {
        id: "macroverse",
        name: "Macroverse",
        description: "Comic application",
        location: "US",
        responsibilities: [
          "Integrated analytics to track user engagement and behavior for data-driven improvements.",
          "Added new screens and features to enhance usability and overall experience.",
          "Implemented subscription-based payment methods, increasing monetization opportunities."
        ],

        technologies: ["Flutter", "Dart", "Analytics", "Payment Integration"]
      },
      {
        id: "lets-driver",
        name: "LETs & LETs Driver",
        description: "Driver and food application",
        location: "Philippines",
        responsibilities: [
          "Led development of a solution for finding and accepting bookings, improving driver workflow efficiency.",
          "Implemented authentication, UI, and payment systems to ensure secure and seamless user interactions.",
          "Integrated Google technologies and developed real-time SOCKET communication for instant updates."
        ],

        technologies: ["Flutter", "Dart", "Socket.io", "Google APIs", "Authentication", "Payment Systems"]
      },
      {
        id: "reeportr",
        name: "REEPORTR",
        description: "Events reporter application",
        location: "UAE",
        responsibilities: [
          "Developed screens, authentication flows, and algorithms to enhance core app functionality.",
          "Implemented data storage and saving solutions for reliable offline and online usage.",
          "Optimized performance to handle high volumes of event reporting efficiently."
        ],

        technologies: ["Flutter", "Dart", "Authentication", "Data Storage"]
      },
      {
        id: "ecors",
        name: "eCors",
        description: "Contract management application",
        location: "US",
        responsibilities: [
          "Built a customer transaction and contract management app with Firebase authentication and analytics.",
          "Utilized MVVM architecture to ensure maintainable and scalable code.",
          "Implemented features for secure data handling and real-time updates."
        ],

        technologies: ["Swift", "iOS", "Firebase", "MVVM", "Analytics"]
      },
      {
        id: "cosmetiko",
        name: "Cosmetiko",
        description: "Cosmetics planner application",
        location: "AU",
        responsibilities: [
          "Led app development, implementing Firebase analytics and authentication for tracking user behavior.",
          "Designed and integrated core functionalities to support personalized planning.",
          "Improved usability and performance through optimized UI and feature workflows."
        ],

        technologies: ["Swift", "iOS", "Firebase", "Analytics"]
      },
      {
        id: "sego",
        name: "SEGO",
        description: "Streaming camera feed application",
        location: "US",
        responsibilities: [
          "Developed an app for streaming camera feeds over Wi-Fi, enabling iOS communication via MQTT.",
          "Created reusable views for cross-screen functionality, improving development efficiency.",
          "Leveraged Swift, CocoaPods, C++, Python, MQTT, and Git to ensure reliable, cross-platform performance."
        ],

        technologies: ["iOS", "Swift", "CocoaPods", "C++", "Python", "MQTT", "Git"]
      }
    ]
  },
  {
    id: "bpi",
    name: "Bank of the Philippines Islands",
    location: "Philippines",
    startDate: "June 2015",
    endDate: "May 2019",
    icon: Banknote,
    iconColor: "text-yellow-600",
    projects: [
      {
        id: "pbcms",
        name: "PBCMS - Private Banking Client System",
        description: "Mainframe banking system for private banking clients",
        location: "Philippines",
        responsibilities: [
          "Developed and maintained COBOL batch programs and JCLs, supporting the process from SIT to UAT and production.",
          "Created and tested COBOL online programs to ensure accurate functionality and system reliability.",
          "Supported batch job executions using CA7 and maintained batch runs in UAT and production environments."
        ],

        technologies: ["COBOL", "JCL", "CA7", "Mainframe", "UAT", "Production"]
      }
    ]
  }
]
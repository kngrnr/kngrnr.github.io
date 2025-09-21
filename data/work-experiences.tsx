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
    id: "flexisourceit",
    name: "FlexisourceIT",
    location: "Makati, PH",
    startDate: "January 2022",
    endDate: "July 2025",
    icon: Building2,
    iconColor: "text-green-600",
    projects: [
      {
        id: "halo-mobile",
        name: "HALO Mobile",
        description: "Equity research and investing app for global and local stocks.",
        location: "Australia",
        responsibilities: [
          "Responsible for developing new features and implementing the Flutter BLoC architecture",
          "Integrated REST APIs, GraphQL, and In-App Purchases to enhance app functionality",
          "Update CI/CD setup using Firebase, Fastlane, CodeMagic, and GitLab for streamlined deployment",
          "Created a reusable UK app flavor to support regional customization",
          "Managed unit and widget testing, integrated Highcharts for data visualization, and implemented Firebase Messaging for push notifications",
          "Improved UI/UX design and handled the end-to-end app submission and deployment process for both the App Store and Play Store"
        ],
        technologies: ["Flutter", "Dart", "BLoC", "REST API", "GraphQL", "Firebase", "Fastlane", "CodeMagic", "GitLab", "Highcharts"]
      },
      {
        id: "art-prizes",
        name: "Art Prizes",
        description: "Arts events, prizes planner.",
        location: "Australia",
        responsibilities: [
          "Implemented In-App Purchases and push notifications to boost user retention",
          "Developed new features to enhance app functionality",
          "Refactored theme implementation for improved UI consistency",
          "Resolved critical crashes, backend issues, and UI bugs to improve app stability and performance"
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
          "Added Firebase Crashlytics for real-time error reporting",
          "Reduced app crashes by addressing critical exceptions",
          "Enhanced app stability and overall user experience"
        ],
        technologies: ["React Native", "Firebase", "Crashlytics"]
      },
      {
        id: "cyclops-navigator",
        name: "Cyclops Navigator",
        description: "Camera Speed Vehicle application",
        location: "UK",
        responsibilities: [
          "Bridged an outdated C SDK to Android and iOS using React Native, creating a proof of concept for technology integration"
        ],
        technologies: ["React Native", "C SDK", "Android", "iOS"]
      },
      {
        id: "macroverse",
        name: "Macroverse",
        description: "Comic application",
        location: "US",
        responsibilities: [
          "Integrated analytics to track user engagement and behavior",
          "Added new features and screens to improve user experience",
          "Implemented payment methods for subscription-based services"
        ],
        technologies: ["React Native", "Analytics", "Payment Integration"]
      },
      {
        id: "lets-driver",
        name: "LETs & LETs Driver",
        description: "Driver and food application",
        location: "Philippines",
        responsibilities: [
          "Led development of a solution for finding and accepting bookings",
          "Implemented UI, authentication, and payment systems",
          "Integrated Google technologies to enhance functionality",
          "Developed a real-time connection solution using SOCKET for seamless communication"
        ],
        technologies: ["React Native", "Socket.io", "Google APIs", "Authentication", "Payment Systems"]
      },
      {
        id: "reeportr",
        name: "REEPORTR",
        description: "Events reporter application",
        location: "UAE",
        responsibilities: [
          "Implemented screens, authentication, and algorithms, along with storage and data-saving solutions to enhance app functionality"
        ],
        technologies: ["React Native", "Authentication", "Data Storage"]
      },
      {
        id: "ecors",
        name: "eCors",
        description: "Contract management application",
        location: "US",
        responsibilities: [
          "Developed an app for customer transactions and management contracting",
          "Integrated Firebase analytics and authentication",
          "Utilized MVVM architecture for a maintainable and scalable codebase"
        ],
        technologies: ["React Native", "Firebase", "MVVM", "Analytics"]
      },
      {
        id: "cosmetiko",
        name: "Cosmetiko",
        description: "Cosmetics planner application",
        location: "AU",
        responsibilities: [
          "Led app development, implementing Firebase analytics and authentication while designing and integrating core functionalities"
        ],
        technologies: ["React Native", "Firebase", "Analytics"]
      },
      {
        id: "sego",
        name: "SEGO",
        description: "Streaming camera feed application",
        location: "US",
        responsibilities: [
          "Developed an app for streaming camera feed over Wi-Fi and enabling iOS communication with the camera via MQTT",
          "Created reusable views for cross-screen functionality"
        ],
        technologies: ["iOS", "Swift", "CocoaPods", "C++", "Python", "MQTT", "Git"]
      }
    ]
  },
  {
    id: "bpi",
    name: "Bank of the Philippines Islands",
    location: "Philippines",
    startDate: "December 2015",
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
          "Developed, maintained, and tested COBOL batch programs and JCLs from SIT to UAT and production",
          "Created and tested COBOL online programs",
          "Supported batch job executions with CA7 and maintained batch runs on UAT and production environments"
        ],
        technologies: ["COBOL", "JCL", "CA7", "Mainframe", "UAT", "Production"]
      }
    ]
  }
]
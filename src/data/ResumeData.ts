import { GitHubIcon, LinkedInIcon } from "@/component/icon";

export const RESUME_DATA = {
  name: "John Doe",
  initials: "JD",
  location: "Somewhere, World, UTC",
  locationLink: "https://example.com/location",
  shortDescription:
    "Passionate developer with a focus on building scalable, user-centric applications.",
  summary:
    "Experienced Full Stack Developer with expertise in modern web technologies. Skilled in leading teams and delivering robust software solutions.",
  avatarUrl: "https://example.com/avatar.png",
  personalWebsiteUrl: "https://example.com",
  contact: {
    email: "john.doe@example.com",
    tel: "+1234567890",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/randomuser",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/randomuser/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "Fictional University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2010",
      end: "2014",
    },
  ],
  work: [
    {
      company: "TechCorp",
      link: "https://example.com/techcorp",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: "https://example.com/logos/techcorp.png",
      start: "2022",
      end: null,
      description:
        "Developing cutting-edge solutions using modern tech stacks.",
    },
    {
      company: "Innovate Inc.",
      link: "https://example.com/innovate",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: "https://example.com/logos/innovate.png",
      start: "2018",
      end: "2022",
      description:
        "Led full-stack development projects and optimized performance.",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "GraphQL",
    "TypeScript",
  ],
  projects: [
    {
      title: "Project Alpha",
      techStack: ["React", "Node.js", "TypeScript"],
      description: "A revolutionary platform for seamless collaboration.",
      logo: "https://example.com/logos/project-alpha.png",
      link: {
        label: "project-alpha.com",
        href: "https://project-alpha.com/",
      },
    },
    {
      title: "BetaApp",
      techStack: ["Kotlin", "Android", "Firebase"],
      description: "A mobile application for streamlined task management.",
      logo: "https://example.com/logos/betaapp.png",
      link: {
        label: "betaapp.com",
        href: "https://betaapp.com/",
      },
    },
  ],
} as const;

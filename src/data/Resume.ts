import { LinkedInIcon } from "@/component/icon";
import { GitHubIcon } from "@/component/icon";

export const RESUME = {
  name: "Matheus Peixoto Silva",
  initials: "JD",
  location: "São Paulo, SP, Brasil",
  locationLink: "https://google.com/maps/?q=S%C3%A3o%20Paulo%2C%20S%C3%A3o%20Paulo%2C%20Brazil",
  shortDescription:
    "Desenvolvedor na MegaMamute focado na excelência técnica e evolução contínua do negócio.",
  summary:
    "Como analista e desenvolvedor com 4 anos de experiência, especializo-me em transformar ideias em soluções robustas. Minha atuação é voltada para .NET utilizando C# e ASP.NET para criar aplicações confiáveis e escaláveis. Sou apaixonado por inovação, automotivado e valorizo tanto o trabalho em equipe quanto o aprendizado constante.",
  ownerImgUrl: "https://avatars.githubusercontent.com/u/58491359",
  personalWebsiteUrl: "https://example.com",
  contact: {
    email: "matheuspeixoto100@gmail.com",
    phone: "+55 (11) 99280-6535",
    social: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/matheus-peixoto-silva/",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/matheus-peixoto/",
        icon: GitHubIcon,
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

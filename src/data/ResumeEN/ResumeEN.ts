import type { Resume } from "@/types/resume";
import { COMMAND_MENU_EN } from "./CommandMenuEN";

export const RESUMEEN: Resume = {
  resumeLanguage: "English",
  commandMenu: COMMAND_MENU_EN,
  name: "Matheus Peixoto Silva",
  location: "São Paulo, SP, Brazil",
  locationLink: "https://google.com/maps/?q=S%C3%A3o%20Paulo%2C%20S%C3%A3o%20Paulo%2C%20Brazil",
  shortDescription: "Developer at MegaMamute focused on technical excellence and continuous business evolution.",
  summary: "Software developer with 4 years of experience, specialized in transforming ideas into robust, reliable, and scalable solutions using .NET, C#, and ASP.NET.",
  ownerImgUrl: "https://avatars.githubusercontent.com/u/58491359",
  contact: {
    email: "matheuspeixoto100@gmail.com",
    phone: "+55 (11)99280-6535",
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/matheus-peixoto-silva/",
      },
      {
        name: "GitHub",
        url: "https://github.com/matheus-peixoto/",
      },
    ],
  },
  sectionTitles: {
    about: "About",
    workExperience: "Work Experience",
    education: "Education",
    skills: "Technical Skills",
    projects: "Relevant Projects"
  },
  educations: [
    {
      fullSchoolName: "Fatec Zona Sul – Dom Paulo Evaristo Arnsss",
      school: "Fatec Zona Sulsss",
      degree: "Systems Analysis and Development",
      descriptionParagraphs: [
        "Graduated in Systems Analysis and Development, I developed skills in database modeling and management, technical documentation, requirements analysis, as well as a solid understanding of programming logic and data structures."
      ],
      start: "2019",
      end: "2022",
    },
  ],
  jobs: [
    {
      company: "MegaMamute",
      link: "https://www.megamamute.com.br/",
      title: "Software Developer",
      start: "2021",
      end: "Present",
      coreDescription: "At MegaMamute, a company focused on online sales, I played a key role in developing e-commerce integrations, a dropshipping system, and in maintaining and evolving internal systems.",
      bulletList: [
        {
          name: "Responsibilities and Achievements",
          children: [
          {
            name: "E-commerce Integrations",
            children: [
              {
                name: "Developed and improved integrations with major marketplaces such as Amazon, Mercado Livre, and Shopee.",
                children: []
              },
              {
                name: "Developed unit and integration tests and applied design patterns and principles.",
                children: []
              }
            ]
          },
          {
            name: "Dropshipping Platform",
            children: [
              {
                name: "Developed, documented, and maintained a proprietary dropshipping platform from start to finish.",
                children: []
              },
              {
                name: "Acted as the lead developer for both the back-end and front-end, following Clean Architecture and MVC standards.",
                children: []
              },
              {
                name: "Designed the database structure, created robust REST APIs with OAuth and JWT, and built a front-end for suppliers who could not integrate via API.",
                children: []
              },
              {
                name: "Set up staging and production environments using AWS (S3, EC2, Route 53, RDS, and Elastic Beanstalk).",
                children: []
              },
              {
                name: "Implemented procedures to automate tax validations and improve database performance through indexing.",
                children: []
              }
            ]
          },
          {
            name: "General Internal Projects",
            children: [
              {
                name: "Analyzed and implemented solutions based on requirements from various company departments.",
                children: []
              },
              {
                name: "Developed internal automation tools using Selenium, handled data gathering via spreadsheets, and generated graphs and reports using .NET Core, React, and Razor.",
                children: []
              }
            ]
          },
          {
            name: "Documentation",
            children: [
              {
                name: "Documented APIs with Swagger and created detailed workflows for product and order management.",
                children: []
              }
            ]
          }
          ]
        }
      ]
    },
    {
      company: "TechEleven",
      link: null,
      title: ".NET Developer",
      start: "2021",
      end: "2021",
      coreDescription: "As a .NET developer at Tech Eleven, a start-up focused on technological solutions and in-house software, I contributed to the development and improvement of ERP features.",
      bulletList: [
        {
          name: "Responsibilities and Achievements",
          children: [
          {
            name: "Developed reporting tools for exporting data to spreadsheets.",
            children: []
          },
          {
            name: "Created reports using SQL Server and Firebird, utilizing Views and Procedures for the ERP.",
            children: []
          },
          {
            name: "Developed a call order control tool for coordination between teams.",
            children: []
          },
          {
            name: "Translated user requirements into technical specifications for ERP implementation.",
            children: []
          },
          {
            name: "Implemented the automation of operational tasks using ASP.NET Framework.",
            children: []
          }
          ]
        }
      ]
    }
  ],
  skills: [
    "Amazon Web Services",
    "System Architecture",
    "C#",
    ".NET",
    "ASP.NET Core",
    "ASP.NET Framework",
    "Clean Architecture",
    "Design Patterns",
    "SQL Server",
    "React",
    "Razor",
    "RabbitMQ",
    "React Native",
    "Microservices",
    "Docker",
    "Kubernetes",
    "Database Modeling",
    "Unit Tests",
    "Integration Tests",
    "Requirements Analysis"
  ],
  projects: [
    {
      title: "Dropshipping",
      techStack: ["Backend", "Frontend", "REST API", ".NET Core", "SQL"],
      description: "Dropshipping sales project for MegaMamute suppliers focused on furniture."
    },
    {
      title: "Mercado Livre",
      techStack: ["Backend", "ASP.NET Framework", "SQL", "REST API"],
      description: "Maintained the integration with Mercado Livre and improved product fulfillment."
    },
    {
      title: "Riachuelo and ZoomBuscapé - Mosaico",
      techStack: ["Backend", "ASP.NET Framework", "Webhook", "SQL", "REST API"],
      description: "Integrated Riachuelo and ZoomBuscapé marketplaces from start to finish."
    },
    {
      "title": "Monolithic to Microservices",
      "techStack": [
        "Backend",
        ".NET Core",
        "RabbitMQ"
      ],
      "description":
        "Contributed to ongoing migration of monolithic architecture to microservices."
    },
    {
      title: "Mega Romaneio",
      techStack: ["Mobile", "React Native"],
      description: "Mobile project for delivery manifest control."
    },
    {
      title: "Resume",
      techStack: ["Personal Project", "React"],
      description:
        "Personal project for building a minimalist resume considering ATS and TA evaluations."
    }
  ]
} as const;

export default RESUMEEN;

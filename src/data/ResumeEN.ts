import { Resume } from "@/types/resume";

export const RESUMEEN: Resume = {
  resumeLanguage: "English",
  name: "Matheus Peixoto Silva",
  initials: "MPS",
  location: "São Paulo, SP, Brazil",
  locationLink: "https://google.com/maps/?q=S%C3%A3o%20Paulo%2C%20S%C3%A3o%20Paulo%2C%20Brazil",
  shortDescription: "Developer at MegaMamute focused on technical excellence and continuous business evolution.",
  summary: "Software developer with 4 years of experience, specialized in transforming ideas into robust, reliable, and scalable solutions using .NET, C#, and ASP.NET.",
  ownerImgUrl: "https://avatars.githubusercontent.com/u/58491359",
  personalWebsiteUrl: "https://example.com",
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
      school: "Fatec Zona Sul – Dom Paulo Evaristo Arns",
      degree: "Systems Analysis and Development",
      descriptionParagraphs: [
        "Graduated in Systems Analysis and Development, I developed skills in database modeling and management, technical documentation, requirements analysis, as well as a solid understanding of programming logic and data structures."
      ],
      start: "June 2019",
      end: "June 2022",
    },
  ],
  jobs: [
    {
      company: "MegaMamute",
      link: "https://www.megamamute.com.br/",
      workModels: ["Remote"],
      title: "Software Developer",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQG_JMRqGl1OLg/company-logo_200_200/company-logo_200_200/0/1648590192348/megamamutecombr_logo?e=1740614400&v=beta&t=nr43KDyspSkEWBwZglc7_OEmJh1_ll6-e66cJ_L75xc",
      start: "June 2021",
      end: "Present",
      descriptionParagraphs: [
        "At MegaMamute, a company focused on online sales, I played a key role in developing and improving integrations with major e-commerce platforms in Brazil, as well as in maintaining and evolving internal systems.",
        "I carried out end-to-end integrations and continuous maintenance for major platforms like Casas Bahia, Riachuelo, ZoomBuscapé, and Vivo. In addition, I enhanced integrations with leading marketplaces such as Mercado Livre, Magazine Luiza, and Amazon, ensuring efficient operations aligned with business demands.",
        "I developed a proprietary dropshipping platform for MegaMamute focusing on furniture, where I acted as the primary back-end and front-end developer. I was responsible for designing the database structure, creating robust and secure APIs, building a front-end for suppliers who could not integrate via API, and setting up staging and production environments. I implemented procedures for automating tax validations and database performance improvements through indexing. I documented our APIs using Swagger and created documents detailing the product and order management flow. I was also responsible for overseeing technical integrations with various suppliers such as Itatiaia Móveis and Caemmun.",
        "Technologies used included .NET with ASP.NET, ASP.NET Core, OAuth, JWT, Entity Framework, and SQL Server for the creation of REST APIs; AWS S3, AWS EC2, AWS Route 53, and AWS Elastic Beanstalk for deployments, hosting configurations, and storage; and React, React Native, Razor, and Blazor for the front end and mobile applications, always considering best practices and principles such as SOLID and design patterns, following architectures like MVC and Clean Architecture."
      ],
      coreDescription: "At MegaMamute, a company focused on online sales, I played a key role in developing e-commerce integrations, a dropshipping system, and in maintaining and evolving internal systems.",
      bulletList: {
        name: "Responsibilities and Achievements",
        children: [
          {
            name: "E-commerce Integrations",
            children: [
              {
                name: "Developed and improved integrations with major marketplaces such as Amazon, Mercado Livre, and Riachuelo.",
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
    },
    {
      company: "TechEleven",
      link: null,
      workModels: ["On-site", "Contract"],
      title: ".NET Developer",
      logo: "https://example.com/logos/innovate.png",
      start: "March 2021",
      end: "June 2021",
      descriptionParagraphs: [
        "As a .NET developer at Tech Eleven, a start-up focused on technological solutions and in-house software, I developed reporting tools and ERP features.",
        "Maintained and updated ERP functionalities using ASP.NET Framework, ASP.NET Web Forms, and VB.NET.",
        "Translated user requirements into technical specifications for ERP implementation.",
        "Automated operational tasks using ASP.NET Framework.",
        "Created reports with SQL Server and Firebird using Views and Procedures."
      ],
      coreDescription: "As a .NET developer at Tech Eleven, a start-up focused on technological solutions and in-house software, I contributed to the development and improvement of ERP features.",
      bulletList: {
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
      description: "Dropshipping sales project for MegaMamute suppliers focused on furniture.",
      link: {
        label: "",
        href: ""
      }
    },
    {
      title: "Mercado Livre",
      techStack: ["Backend", "ASP.NET Framework", "SQL", "REST API"],
      description: "Maintained the integration with Mercado Livre and improved product fulfillment.",
      link: {
        label: "",
        href: ""
      }
    },
    {
      title: "Riachuelo and ZoomBuscapé - Mosaico",
      techStack: ["Backend", "ASP.NET Framework", "Webhook", "SQL", "REST API"],
      description: "Integrated Riachuelo and ZoomBuscapé marketplaces from start to finish.",
      link: {
        label: "",
        href: ""
      }
    },
    {
      "title": "Monolithic to Microservices",
      "techStack": [
        "Backend",
        ".NET Core",
        "RabbitMQ"
      ],
      "description":
        "Contributed to ongoing migration of monolithic architecture to microservices.",
      "link": {
        "label": "",
        "href": ""
      }
    },
    {
      title: "Mega Romaneio",
      techStack: ["Mobile", "React Native"],
      description: "Mobile project for delivery manifest control.",
      link: {
        label: "",
        href: ""
      }
    },
    {
      title: "Resume",
      techStack: ["Personal Project", "React"],
      description:
        "Personal project for building a minimalist resume considering ATS and TA evaluations.",
      link: {
        label: "",
        href: ""
      }
    }
  ]
} as const;

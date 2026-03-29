import { Resume } from "@/types/resume";

export const RESUMEEN: Resume = {
  resumeLanguage: "English",
  name: "Matheus Peixoto Silva",
  initials: "MPS",
  location: "São Paulo, SP, Brazil",
  locationLink: "https://google.com/maps/?q=S%C3%A3o%20Paulo%2C%20S%C3%A3o%20Paulo%2C%20Brazil",
  shortDescription: "Software Engineer at Novibet building scalable backend systems and distributed architectures.",
  summary: "Software engineer with 5 years of experience, specializing in transforming ideas into robust, reliable, and scalable solutions using .NET, C#, and ASP.NET.",
  ownerImgUrl: "https://avatars.githubusercontent.com/u/58491359",
  personalWebsiteUrl: "https://matheus-peixoto.github.io/Resume",
  contact: {
    email: "matheuspeixoto100@gmail.com",
    phone: "+55(11)99280-6535",
    socials: [
      {
        name: "LinkedIn",
        url: "linkedin.com/in/matheus-peixoto-silva",
      },  
      {
        name: "GitHub",
        url: "github.com/matheus-peixoto",
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
      company: "Novibet",
      link: "https://www.novibet.com/",
      workModels: ["Hybrid"],
      title: "Software Engineer",
      logo: "./logos/novibet.png",
      start: "February 2025",
      end: "Present",
      descriptionParagraphs: [
        "At Novibet, I work on backend services and technical improvements for applications within a distributed microservices environment, focusing on scalability, maintainability, and production reliability.",
        "I contributed to the restructuring of parts of the system by applying Clean Architecture principles, improving separation of responsibilities, code organization, and long-term maintainability.",
        "I led the restructuring of the Statistics domain, implementing a queue-based statistics creation mechanism using MongoDB batch processing, designed to support concurrency across multiple pods and provide a more scalable processing model. This solution is already running in production.",
        "I also diagnosed and resolved MongoDB connection pool exhaustion issues, fixed application metrics integration used by Grafana and Prometheus, and dockerized core local development dependencies such as Kafka, MongoDB, and Redis, significantly improving development and testing workflows for the team."
      ],
      coreDescription: "At Novibet, I work on backend services in a distributed microservices environment, contributing to architectural improvements, system observability, scalability, and production reliability.",
      bulletList: [
          {
            name: "Statistics Processing",
            children: [
              {
                name: "Led the restructuring of the Statistics domain by implementing a queue-based processing mechanism using MongoDB batch operations.",
                children: []
              },
              {
                name: "Designed the solution to support concurrent processing across multiple Kubernetes pods, enabling a more scalable and reliable statistics computation.",
                children: []
              }
            ]
          },
          {
            name: "Architecture and System Design",
            children: [
              {
                name: "Contributed to the restructuring of core services by applying Clean Architecture principles, improving separation of concerns and maintainability.",
                children: []
              }
            ]
          },
          {
            name: "Observability and Reliability",
            children: [
              {
                name: "Diagnosed and fixed a broken metrics integration, restoring application observability through Prometheus and Grafana dashboards in production.",
                children: []
              },
              {
                name: "Identified the root cause of a production incident involving excessive log generation and collaborated with the responsible team to resolve the issue.",
                children: []
              }
            ]
          },
          {
            name: "Developer Experience",
            children: [
              {
                name: "Dockerized core local development dependencies such as Kafka, MongoDB, and Redis, eliminating external dependencies for local testing.",
                children: []
              },
              {
                name: "Improved daily development workflows and team productivity through a more reliable local environment setup.",
                children: []
              }
            ]
          }
    ]
    },
    {
      company: "MegaMamute",
      link: "https://www.megamamute.com.br/",
      workModels: ["Remote"],
      title: "Software Developer",
      logo: "./logos/megamamute.png",
      start: "June 2021",
      end: "January 2025",
      descriptionParagraphs: [
        "At MegaMamute, a company focused on online sales, I played a key role in developing and improving integrations with major e-commerce platforms in Brazil, as well as in maintaining and evolving internal systems.",
        "I carried out end-to-end integrations and continuous maintenance for major platforms like Casas Bahia, Riachuelo, ZoomBuscapé, and Vivo. In addition, I enhanced integrations with leading marketplaces such as Mercado Livre, Magazine Luiza, and Amazon, ensuring efficient operations aligned with business demands.",
        "I developed a proprietary dropshipping platform for MegaMamute focusing on furniture, where I acted as the primary back-end and front-end developer. I was responsible for designing the database structure, creating robust and secure APIs, building a front-end for suppliers who could not integrate via API, and setting up staging and production environments. I implemented procedures for automating tax validations and database performance improvements through indexing. I documented our APIs using Swagger and created documents detailing the product and order management flow. I was also responsible for overseeing technical integrations with various suppliers such as Itatiaia Móveis and Caemmun.",
        "Technologies used included .NET with ASP.NET, ASP.NET Core, OAuth, JWT, Entity Framework, and SQL Server for the creation of REST APIs; AWS S3, AWS EC2, AWS Route 53, and AWS Elastic Beanstalk for deployments, hosting configurations, and storage; and React, React Native, Razor, and Blazor for the front end and mobile applications, always considering best practices and principles such as SOLID and design patterns, following architectures like MVC and Clean Architecture."
      ],
      coreDescription: "At MegaMamute, a company focused on online sales, I played a key role in developing e-commerce integrations, a dropshipping system, and in maintaining and evolving internal systems.",
      bulletList: [ 
        { 
          name: "Responsibilities and Achievements", 
          children: [ 
            { 
              name: "Developed and maintained integrations with major Brazilian marketplaces including Amazon, Mercado Livre and Riachuelo.", 
              children: [] 
            }, 
            { 
              name: "Designed and developed a proprietary dropshipping platform including database modeling, REST APIs and supplier portal.", 
              children: [] 
            }, 
            { 
              name: "Implemented OAuth/JWT secured APIs using ASP.NET and SQL Server.", 
              children: [] 
            }, 
            { 
              name: "Configured cloud infrastructure and deployments using AWS (S3, EC2, RDS, Route53, Elastic Beanstalk).", 
              children: [] 
            }, 
            { 
              name: "Applied SOLID principles and design patterns to improve maintainability.", 
              children: [] 
            } 
          ]
        }
      ]
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
      bulletList: null
    }
  ],
  skills: [
    "C#",
    ".NET",
    "ASP.NET Core",
    "REST APIs",
    "Microservices",
    "Distributed Systems",
    "Clean Architecture",
    "Design Patterns",
    "MongoDB",
    "SQL Server",
    "Kafka",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "Prometheus",
    "Grafana",
    "Observability",
    "Entity Framework",
    "Unit Testing"
  ],
  projects: null
} as const;

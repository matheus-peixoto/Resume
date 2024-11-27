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
    phone: "+55 (11)99280-6535",
    socials: [
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
  educations: [
    {
      school: "Fatec Zona Sul – Dom Paulo Evaristo Arns",
      degree: "Análise e Desenvolvimento de Sistemas",
      descriptionParagraphs: [
        "Com formação em análise e desenvolvimento de sistemas, adquiri habilidades no manuseio de bancos de dados, elaboração de documentação, compreensão de lógica imperativa e funcional e análise de requisitos funcionais e não funcionais."
      ],
      start: "2019",
      end: "2022",
    }
  ],
  jobs: [
    {
      company: "MegaMamute",
      link: "https://www.megamamute.com.br/",
      workModel: ["Remoto"],
      title: "Analista Desenvolvedor",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQG_JMRqGl1OLg/company-logo_200_200/company-logo_200_200/0/1648590192348/megamamutecombr_logo?e=1740614400&v=beta&t=nr43KDyspSkEWBwZglc7_OEmJh1_ll6-e66cJ_L75xc",
      start: "Junho de 2021",
      end: null,
      descriptionParagraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam ea perferendis exercitationem enim quo, odio eos nihil sint amet eaque ipsa. Rerum ab quas aut dolorum in excepturi distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam ea perferendis exercitationem enim quo, odio eos nihil sint amet eaque ipsa. Rerum ab quas aut dolorum in excepturi distinctio.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam ea perferendis exercitationem enim quo, odio eos nihil sint amet eaque ipsa."
      ]
    },
    {
      company: "TechEleven.",
      link: "https://example.com/innovate",
      workModel: ["Presencial"],
      title: "Desenvolvedor .Net",
      logo: "https://example.com/logos/innovate.png",
      start: "Março de 2021",
      end: "Junho de 2021",
      descriptionParagraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam ea perferendis exercitationem enim quo, odio eos nihil sint amet eaque ipsa. Rerum ab quas aut dolorum in excepturi distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam ea perferendis exercitationem enim quo, odio eos nihil sint amet eaque ipsa. Rerum ab quas aut dolorum in excepturi distinctio.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam ea perferendis exercitationem enim quo, odio eos nihil sint amet eaque ipsa."
      ]
    }
  ],
  skills: [
    "Amazon Web Services",
    "Arquitetura de sistemas",
    "Microserviços",
    "Docker",
    "Kubernetes",
    "C#",
    ".Net",
    "Asp .Net Core",
    "Asp .Net Framework",
    "Clean Architecture",
    "Sql Server",
    "React",
    "Razor",
    "React Native",
    "Análise de Requisitos",
    "Modelagem de banco",
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

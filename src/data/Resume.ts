import { LinkedInIcon } from "@/component/icon";
import { GitHubIcon } from "@/component/icon";

type BulletList = {
  name: string;
  children: BulletList[];
};

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
        "Graduado em Análise e Desenvolvimento de Sistemas, desenvolvi competências em modelagem e gerenciamento de bancos de dados, elaboração de documentação técnica, análise de requisitos, além de sólida compreensão de lógica de programação e estrutura de dados."
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
        "Na Megamamute, uma empresa com foco em vendas online, desempenhei um papel essencial no desenvolvimento e aprimoramento de integrações com grandes e-commerces do Brasil, assim como manutenção e evolução de sistemas internos da empresa",
        "Realizei do início ao fim integrações junto com manutenção contínua de grandes plataformas como Casas Bahia, Riachuelo, ZoomBuscapé e Vivo. Além disso, trabalhei no aprimoramento das integrações com marketplaces de grande relevância como Mercado Livre, Magazine Luiza e Amazon, assegurando operações eficientes e alinhadas às demandas comerciais.",
        "Desenvolvi do início ao fim uma plataforma própria do MegaMamute de dropshipping com foco em móveis, onde atuei como desenvolvedor principal back-end e front-end. Fui responsável por modelar a estrutura do banco de dados, criar APIs robustas e seguras, criar o front-end para fornecedores que não poderiam se integrar via API conosco e criei ambientes de homologação e produção. Implementei procedures para automação de validações fiscais e melhorias de performance no banco com a criação de índices.Documentei nossas APIs via Swagger e documentos contendo o fluxo de gerenciamento de produtos e pedidos e também fui responsável pelo gerenciamento da parte técnica das integrações com diversos fornecedores como Itatiaia Móveis e Caemmun",
        "Para estas demandas foram utilizado das tecnologias .Net com Asp .Net, Asp .Net Core, OAuth, JWT, Entity Framework e Sql Server para a criação de APIs REST, AWS S3, AWS EC2, AWS ROUTE 53 e AWS Elastic Beanstalk para deployes, configurações de hosting e armazenamento, React, React Native, Razor e Blazor para o front e aplicações mobile tendo sempre em vista melhores práticas e princípios como SOLID e design patterns seguindo aruiteturas como MVC e Clean Architecture.",
      ],
      coreDescription: "Na MegaMamute, uma empresa focada em vendas online, desempenhei um papel essencial no desenvolvimento de integrações com grandes e-commerces do Brasil, desenvolvimento de sistema dropshipping, além de manutenção e evolução de sistemas internos.",
      bulletList: {
        name: "Responsabilidades e Realizações",
        children: [
          {
            name: "Integrações com e-commerces",
            children: [
              {
                name: "Desenvolvi do início ao fim integrações junto com manutenção contínua de plataformas como Casas Bahia, Riachuelo, ZoomBuscapé e Vivo e prestei manutenção contínua para as mesmas.",
                children: []
              },
              {
                name: "Realizei manuntenção e aperfeiçoamento de integrações com marketplaces de grande porte, incluindo Mercado Livre, Magazine Luiza e Amazon, garantindo operações eficientes e alinhadas às demandas comerciais.",
                children: []
              },
              {
                name: "Apliquei de design patterns e princípios como SOLID e DRY",
                children: []
              },
              {
                name: "Para estas demandas utilizei majoritariamente de C#, Asp .Net framework, SQL Server e Entity Framework",
                children: []
              },
            ]
          },
          {
            name: "Plataforma de dropshipping",
            children: [
              {
                name: "Desenvolvi, documentei e prestei manutenção do início ao fim de uma plataforma própria focada em dropshipping de móveis, atuando como desenvolvedor principal tanto no back-end quanto no front-end seguindo padrões Clean Architecture junto com princípios SOLID e design patterns.",
                children: []
              },
              {
                name: "Modelei a estrutura do banco de dados, criei APIs REST robustas e seguras com OAuth e JWT e implementei o front-end para fornecedores que não usariam de integração via API.",
                children: []
              },
              {
                name: "Configurei ambientes de homologação e produção utilizando AWS (S3, EC2, Route 53, RDS e Elastic Beanstalk).",
                children: []
              },
              {
                name: "Implementei procedures para automação de validações fiscais e melhorias de performance no banco de dados com criação de índices.",
                children: []
              },
              {
                name: "Gerenciei e sanei dúvidas técnicas de integrações com fornecedores como Itatiaia Móveis, Caemmun e Peternella.",
                children: []
              }
            ]
          },
          {
            name: "Projetos internos gerais",
            children: [
              {
                name: "Analisei implementei soluções com base em requisitos de diversos setores da empresa.",
                children: []
              },
              {
                name: "Desenvolvi ferramentas internas para automações com Selenium, cadastro de informações via planilhas, geração de gráficos e relatórios utilizando .Net Core, React e Razor.",
                children: []
              }
            ]
          },
          {
            name: "Documentação",
            children: [
              {
                name: "Documentei APIs com Swagger.",
                children: []
              },
              {
                name: "Desenvolvi fluxos detalhados de gerenciamento de produtos e pedidos para dropshipping.",
                children: []
              }
            ]
          }
        ]
      } as BulletList
    },
    {
      company: "TechEleven.",
      link: "https://example.com/innovate",
      workModel: ["Presencial", "Terceirizado"],
      title: "Desenvolvedor .Net",
      logo: "https://example.com/logos/innovate.png",
      start: "Março de 2021",
      end: "Junho de 2021",
      descriptionParagraphs: [
        "Como desenvolvedor .Net na Tech Eleven, uma start-up voltads a soluções tecnológicas e in-house software, desempenhei o papel no desenvolvimento de ferramentas de relatórios e funcionalidades do ERP.",
        "Manutenção e atualização de funcionalidades de ERP com Asp .Net Framework, Asp.Net Web Forms e VB .Net.",
        "Tradução de demandas dos usuários em especificações técnicas para implementação no sistema ERP",
        "Automação de tarefas operacionais com Asp .Net Framework",
        "Criação de relatórios via Sql Server e Firebird com Views e Procedures."
      ],
      coreDescription: "Como desenvolvedor .Net na Tech Eleven, uma start-up voltads a soluções tecnológicas e in-house software, desempenhei o papel no desenvolvimento de ferramentas de relatórios e funcionalidades do ERP",
      bulletList: {
        name: "Responsabilidades e Realizações",
        children: [
          {
            name: "Desenvolvimento e manutenção de ERP",
            children: [
              {
                name: "Desenvolvi ferramentas de relatórios e novas funcionalidades para o ERP de uma start-up voltada a soluções tecnológicas e software in-house.",
                children: [],
              },
              {
                name: "Realizei manutenção e atualização de funcionalidades no ERP utilizando Asp .Net Framework, Asp.Net Web Forms e VB .Net.",
                children: [],
              },
              {
                name: "Traduzi demandas dos usuários em especificações técnicas para implementação no sistema ERP.",
                children: [],
              },
              {
                name: "Implementei automações de tarefas operacionais utilizando Asp .Net Framework.",
                children: [],
              },
              {
                name: "Criei relatórios avançados com SQL Server e Firebird, utilizando Views e Procedures.",
                children: [],
              },
            ]
          }
        ]
      } as BulletList
    }
  ],
  skills: [
    "Amazon Web Services",
    "Arquitetura de sistemas",
    "C#",
    ".Net",
    "Asp .Net Core",
    "Asp .Net Framework",
    "Clean Architecture",
    "Design Patterns",
    "Sql Server",
    "React",
    "Razor",
    "React Native",
    "Microserviços",
    "Docker",
    "Kubernetes",
    "Análise de Requisitos",
    "Modelagem de banco",
  ],
  projects: [
    {
      "title": "Dropshipping",
      "techStack": [
        "Frontend Designer",
        "JavaScript",
        "Angular",
        "Django",
        "REST API"
      ],
      "description":
        "Creative project builder that simplifies workflows and saves time. Creative project builder that simplifies workflows and saves time. Creative project builder that simplifies workflows and saves time.",
      "link": {
        "label": "example.com",
        "href": "https://newproject.co/"
      }
    },
    {
      "title": "Mercado Livre",
      "techStack": [
        "Backend Specialist",
        "JavaScript",
        "Angular",
        "Django",
        "REST API"
      ],
      "description":
        "Video editing platform that offers seamless rendering options. Creative project builder that simplifies workflows and saves time.",
      "link": {
        "label": "platform.us",
        "href": "https://www.platform.us/"
      }
    },
    {
      "title": "Riachuelo",
      "techStack": [
        "Side Creation",
        "Python",
        "Vue.js",
        "Parcel",
        "REST API",
        "Socket.io"
      ],
      "description":
        "An application to grow and manage your creative work. Creative project builder that simplifies workflows and saves time.",
      "link": {
        "label": "projecthub.io",
        "href": "https://projecthub.io/"
      }
    },
    {
      "title": "ZoomBuscapé - Mosaico",
      "techStack": [
        "Side Project",
        "JavaScript",
        "Vue.js",
        "Web App Addon"
      ],
      "description":
        "Application extension that logs events within user workflows. Creative project builder that simplifies workflows and saves time.",
      "link": {
        "label": "tracker.dev",
        "href": "https://tracker.dev/"
      }
    },
    {
      "title": "Mega Romaneio",
      "techStack": [
        "Side Project",
        "Vue.js",
        "HTMLX"
      ],
      "description":
        "Digital portfolio and articles. Created with Vue.js and Airtable API",
      "link": {
        "label": "example.com",
        "href": "https://digitalpage.io/"
      }
    },
    {
      "title": "Resume",
      "techStack": [
        "Side Project",
        "Vue.js",
        "Selenium"
      ],
      "description":
        "Template to showcase minimalist portfolios.",
      "link": {
        "label": "newservice.io",
        "href": "https://newservice.io/"
      }
    }
  ]
} as const;

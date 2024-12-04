import { Resume } from "@/types/resume";
import { LinkedInIcon } from "@/components/icons";
import { GitHubIcon } from "@/components/icons";

export const RESUME: Resume = {
  name: "Matheus Peixoto Silva",
  initials: "MPS",
  location: "São Paulo, SP, Brasil",
  locationLink: "https://google.com/maps/?q=S%C3%A3o%20Paulo%2C%20S%C3%A3o%20Paulo%2C%20Brazil",
  shortDescription:
    "Desenvolvedor na MegaMamute focado na excelência técnica e evolução contínua do negócio.",
  summary:
    "Analista desenvolvedor com 4 anos de experiência, especializado em transformar ideias em soluções robustas, confiáveis e escaláveis com .NET, C# e ASP.NET.",
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
      start: "Junho de 2019",
      end: "Junho de 2022",
    }
  ],
  jobs: [
    {
      company: "MegaMamute",
      link: "https://www.megamamute.com.br/",
      workModels: ["Remoto"],
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
                name: "Desenvolvi e aperfeiçoei integrações com grandes marketplaces como Casas Bahia, Riachuelo, Mercado Livre e Amazon.",
                children: []
              },
              {
                name: "Apliquei design patterns e design principles como SOLID e DRY",
                children: []
              }
            ]
          },
          {
            name: "Plataforma de dropshipping",
            children: [
              {
                name: "Desenvolvi, documentei e realizei manutenção do início ao fim de uma plataforma própria de dropshipping.",
                children: []
              },
              {
                name: "Fui desenvolvedor principal tanto no back-end quanto no front-end seguindo padrões Clean Architecture e MVC.",
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
                name: "Documentei APIs com Swagger e criei fluxos detalhados para gestão de produtos e pedidos.",
                children: []
              }
            ]
          }
        ]
      }
    },
    {
      company: "TechEleven.",
      link: "https://example.com/innovate",
      workModels: ["Presencial", "Terceirizado"],
      title: "Desenvolvedor .Net",
      logo: "https://example.com/logos/innovate.png",
      start: "Março de 2021",
      end: "Junho de 2021",
      descriptionParagraphs: [
        "Como desenvolvedor .Net na Tech Eleven, uma start-up voltada a soluções tecnológicas e in-house software, desenvolvi ferramentas de relatórios e funcionalidades do ERP.",
        "Manutenção e atualização de funcionalidades de ERP com Asp .Net Framework, Asp .Net Web Forms e VB.Net.",
        "Tradução de demandas dos usuários em especificações técnicas para implementação no sistema ERP",
        "Automação de tarefas operacionais com Asp .Net Framework",
        "Criação de relatórios via Sql Server e Firebird com Views e Procedures."
      ],
      coreDescription: "Como desenvolvedor .Net na Tech Eleven, uma start-up voltada a soluções tecnológicas e in-house software, participei no desenvolvimento de funcionalidades e aprimoramentos do ERP interno",
      bulletList: {
        name: "Responsabilidades e Realizações",
        children: [
          {
            name: "Desenvolvi ferramentas de relatórios que exportam os dados em planilha.",
            children: [],
          },
          {
            name: "Criei relatórios com SQL Server e Firebird, utilizando Views e Procedures para ERP.",
            children: [],
          },
          {
            name: "Desenvolvi ferramenta de controle de ordem de chamado entre equipes para.",
            children: [],
          },
          {
            name: "Traduzi demandas dos usuários em especificações técnicas para implementação no sistema ERP.",
            children: [],
          },
          {
            name: "Implementei automações de tarefas operacionais utilizando Asp .Net Framework.",
            children: [],
          }
        ]
      }
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
        "Backend",
        "Frontend",
        "REST API",
        ".Net Core",
        "SQL"
      ],
      "description":
        "Projeto dropshipping de vendas da Megamamute para fornecedores com foco em móveis.",
      "link": {
        "label": "",
        "href": ""
      }
    },
    {
      "title": "Mercado Livre",
      "techStack": [
        "Backend",
        "Asp .Net Framework",
        "SQL",
        "REST API"
      ],
      "description":
        "Manutenção da integração ao Mercado Livre e aprimoramento do modo fulfillment de produtos.",
      "link": {
        "label": "",
        "href": ""
      }
    },
    {
      "title": "Riachuelo e ZoomBuscapé - Mosaico",
      "techStack": [
        "Backend",
        "Asp .Net Framework",
        "Webhook",
        "SQL",
        "REST API"
      ],
      "description":
        "Integração dos marketplaces ao Riachuelo e ZoomBuscapé do início ao fim.",
      "link": {
        "label": "",
        "href": ""
      }
    },
    {
      "title": "Mega Romaneio",
      "techStack": [
        "Mobile",
        "React Native"
      ],
      "description":
        "Projeto mobile para controle de romaneio",
      "link": {
        "label": "",
        "href": ""
      }
    },
    {
      "title": "Resume",
      "techStack": [
        "Projeto pessoal",
        "React"
      ],
      "description":
        "Projeto pessoal destinado a montagem de currículo minimalista que leva em consideração avaliações ATS e TAs.",
      "link": {
        "label": "",
        "href": ""
      }
    }
  ]
} as const;

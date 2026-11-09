import type { Resume } from "@/types/resume";
import { RESUMEPTBR } from "./ResumePTBR";

export const RESUMEPTBR1: Resume = {
    ...RESUMEPTBR,
    educations: RESUMEPTBR.educations.map((education) => ({
        ...education,
        descriptionParagraphs: null,
    })),
    jobs: [
        {
            ...RESUMEPTBR.jobs[0],
            coreDescription: "Na MegaMamute, atuei no desenvolvimento de integrações de e-commerce, de uma plataforma de dropshipping e na evolução de sistemas internos.",
            bulletList: [
                {
                    name: "Responsabilidades e Realizações",
                    children: [
                        {
                            name: "Integrações com e-commerces",
                            children: [
                                { name: "Desenvolvi e aperfeiçoei integrações com grandes marketplaces como Mercado Livre, Amazon e Riachuelo.", children: [] },
                                { name: "Desenvolvi testes unitários e de integração e apliquei design patterns e design principles.", children: [] },
                            ],
                        },
                        {
                            name: "Plataforma de dropshipping",
                            children: [
                                { name: "Desenvolvi, documentei e mantive uma plataforma própria de dropshipping.", children: [] },
                                { name: "Atuei como desenvolvedor principal no back-end e front-end seguindo Clean Architecture e MVC.", children: [] },
                            ],
                        },
                        {
                            name: "Projetos internos",
                            children: [
                                { name: "Analisei e implementei soluções com base em requisitos de diversos setores.", children: [] },
                                { name: "Desenvolvi automações com Selenium, planilhas, .NET Core, React e Razor.", children: [] },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            ...RESUMEPTBR.jobs[1],
            bulletList: [
                {
                    name: "Responsabilidades e Realizações",
                    children: [
                        { name: "Desenvolvi ferramentas de relatórios com exportação para planilhas.", children: [] },
                        { name: "Criei relatórios com SQL Server e Firebird utilizando Views e Procedures.", children: [] },
                        { name: "Desenvolvi ferramenta de controle de ordens de chamado entre equipes.", children: [] },
                    ],
                },
            ],
        },
    ],
    skills: [
        "Amazon Web Services",
        "Arquitetura de sistemas",
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
        "Microsserviços",
    ],
    projects: null,
};

export default RESUMEPTBR1;

import { Resume } from "@/types/resume";
import { RESUMEPTBR } from "./ResumePTBR";

// O conteúdo de duas páginas é editado aqui, independentemente da versão de uma página.
export const RESUMEPTBR2: Resume = {
    ...RESUMEPTBR,
    educations: RESUMEPTBR.educations.map((education) => ({
        ...education,
        descriptionParagraphs: null,
    })),
    jobs: [
        {
            ...RESUMEPTBR.jobs[0],
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
                                { name: "Modelei o banco de dados, criei APIs REST com OAuth e JWT e implementei um portal de fornecedores.", children: [] },
                            ],
                        },
                        {
                            name: "Projetos internos",
                            children: [
                                { name: "Analisei e implementei soluções com base em requisitos de diversos setores.", children: [] },
                                { name: "Desenvolvi automações com Selenium, planilhas, .NET Core, React e Razor.", children: [] },
                            ],
                        },
                        {
                            name: "Documentação",
                            children: [
                                { name: "Documentei APIs com Swagger e criei fluxos de produtos e pedidos.", children: [] },
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
                        { name: "Traduzi demandas dos usuários em especificações técnicas para o ERP.", children: [] },
                    ],
                },
            ],
        },
    ],
    skills: [
        "Amazon Web Services", "Arquitetura de sistemas", "C#", ".NET", "ASP.NET Core",
        "ASP.NET Framework", "Clean Architecture", "Design Patterns", "SQL Server",
        "React", "Razor", "RabbitMQ", "React Native", "Microsserviços", "Docker",
        "Kubernetes", "Modelagem de banco", "Testes Unitários", "Testes de Integração", "Análise de Requisitos",
    ],
    projects: [
        { title: "Dropshipping", techStack: ["Backend", "Frontend", "REST API", ".NET Core", "Redis", "SQL"], description: "Projeto de dropshipping para fornecedores da MegaMamute com foco em móveis.", link: { label: "", href: "" } },
        { title: "Mercado Livre", techStack: ["Backend", "ASP.NET Framework", "SQL", "REST API"], description: "Manutenção da integração com o Mercado Livre e aprimoramento do fulfillment.", link: { label: "", href: "" } },
        { title: "Riachuelo e ZoomBuscapé - Mosaico", techStack: ["Backend", "ASP.NET Framework", "Webhook", "SQL", "REST API"], description: "Integração dos marketplaces Riachuelo e ZoomBuscapé do início ao fim.", link: { label: "", href: "" } },
        { title: "Monolítico para Microsserviços", techStack: ["Backend", ".NET Core", "RabbitMQ"], description: "Contribuí para a migração de arquitetura monolítica para microsserviços.", link: { label: "", href: "" } },
        { title: "Mega Romaneio", techStack: ["Mobile", "React Native"], description: "Projeto mobile para controle de romaneio.", link: { label: "", href: "" } },
        { title: "Resume", techStack: ["Projeto pessoal", "React"], description: "Projeto de currículo minimalista considerando avaliações ATS e TA.", link: { label: "", href: "" } },
    ],
};

export default RESUMEPTBR2;

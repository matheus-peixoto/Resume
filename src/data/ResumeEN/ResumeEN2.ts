import { Resume } from "@/types/resume";
import { RESUMEEN } from "./ResumeEN";

// Two-page content is authored here independently from the one-page variant.
export const RESUMEEN2: Resume = {
    ...RESUMEEN,
    educations: RESUMEEN.educations.map((education) => ({
        ...education,
        descriptionParagraphs: null,
    })),
    jobs: [
        {
            ...RESUMEEN.jobs[0],
            bulletList: [
                {
                    name: "Responsibilities and Achievements",
                    children: [
                        {
                            name: "E-commerce Integrations",
                            children: [
                                { name: "Developed and improved integrations with major marketplaces such as Amazon, Mercado Livre, and Shopee.", children: [] },
                                { name: "Developed unit and integration tests and applied design patterns and principles.", children: [] },
                            ],
                        },
                        {
                            name: "Dropshipping Platform",
                            children: [
                                { name: "Developed, documented, and maintained a proprietary dropshipping platform from start to finish.", children: [] },
                                { name: "Acted as the lead developer for both the back-end and front-end, following Clean Architecture and MVC standards.", children: [] },
                                { name: "Designed the database structure, created REST APIs with OAuth and JWT, and built a supplier portal.", children: [] },
                            ],
                        },
                        {
                            name: "General Internal Projects",
                            children: [
                                { name: "Analyzed and implemented solutions based on requirements from various company departments.", children: [] },
                                { name: "Developed internal automation tools using Selenium, spreadsheets, .NET Core, React, and Razor.", children: [] },
                            ],
                        },
                        {
                            name: "Documentation",
                            children: [
                                { name: "Documented APIs with Swagger and created detailed product and order workflows.", children: [] },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            ...RESUMEEN.jobs[1],
            bulletList: [
                {
                    name: "Responsibilities and Achievements",
                    children: [
                        { name: "Developed reporting tools for exporting data to spreadsheets.", children: [] },
                        { name: "Created reports using SQL Server and Firebird with Views and Procedures.", children: [] },
                        { name: "Developed a call order control tool for coordination between teams.", children: [] },
                        { name: "Translated user requirements into technical specifications for ERP implementation.", children: [] },
                    ],
                },
            ],
        },
    ],
    skills: [
        "Amazon Web Services", "System Architecture", "C#", ".NET", "ASP.NET Core",
        "ASP.NET Framework", "Clean Architecture", "Design Patterns", "SQL Server",
        "React", "Razor", "RabbitMQ", "React Native", "Microservices", "Docker",
        "Kubernetes", "Database Modeling", "Unit Tests", "Integration Tests", "Requirements Analysis",
    ],
    projects: [
        { title: "Dropshipping", techStack: ["Backend", "Frontend", "REST API", ".NET Core", "SQL"], description: "Dropshipping sales project for MegaMamute suppliers focused on furniture.", link: { label: "", href: "" } },
        { title: "Mercado Livre", techStack: ["Backend", "ASP.NET Framework", "SQL", "REST API"], description: "Maintained the integration with Mercado Livre and improved product fulfillment.", link: { label: "", href: "" } },
        { title: "Riachuelo and ZoomBuscapé - Mosaico", techStack: ["Backend", "ASP.NET Framework", "Webhook", "SQL", "REST API"], description: "Integrated Riachuelo and ZoomBuscapé marketplaces from start to finish.", link: { label: "", href: "" } },
        { title: "Monolithic to Microservices", techStack: ["Backend", ".NET Core", "RabbitMQ"], description: "Contributed to ongoing migration of monolithic architecture to microservices.", link: { label: "", href: "" } },
        { title: "Mega Romaneio", techStack: ["Mobile", "React Native"], description: "Mobile project for delivery manifest control.", link: { label: "", href: "" } },
        { title: "Resume", techStack: ["Personal Project", "React"], description: "Personal project for building a minimalist resume considering ATS and TA evaluations.", link: { label: "", href: "" } },
    ],
};

export default RESUMEEN2;

import type { Resume } from "@/types/resume";
import { RESUMEEN } from "./ResumeEN";

export const RESUMEEN1: Resume = {
    ...RESUMEEN,
    educations: RESUMEEN.educations.map((education) => ({
        ...education,
        descriptionParagraphs: null,
    })),
    jobs: [
        {
            ...RESUMEEN.jobs[0],
            coreDescription: "At MegaMamute, a company focused on online sales, I played a key role in developing e-commerce integrations, a dropshipping system, and in maintaining and evolving internal systems.",
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
                            ],
                        },
                        {
                            name: "General Internal Projects",
                            children: [
                                { name: "Analyzed and implemented solutions based on requirements from various company departments.", children: [] },
                                { name: "Developed internal automation tools using Selenium, spreadsheets, .NET Core, React, and Razor.", children: [] },
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
                    ],
                },
            ],
        },
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
    ],
    projects: null,
};

export default RESUMEEN1;

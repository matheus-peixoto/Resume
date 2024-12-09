export interface SectionTitles {
    about: string,
    workExperience: string,
    education: string,
    skills: string,
    projects: string
}

export interface Social {
    name: string;
    url: string;
}

export interface Contact {
    email: string;
    phone: string;
    socials: Social[];
}

export interface Education {
    school: string;
    degree: string;
    descriptionParagraphs: string[];
    start: string;
    end: string | null;
}

export interface BulletList {
    name: string;
    children: BulletList[];
}

export interface Job {
    company: string;
    link: string;
    workModels: string[]; // Changed to plural to match the context
    title: string;
    logo: string;
    start: string;
    end: string;
    descriptionParagraphs: string[];
    coreDescription: string;
    bulletList: BulletList;
}

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    link: {
        label: string;
        href: string;
    };
}

export interface Resume {
    resumeLanguage: string,
    name: string;
    initials: string;
    location: string;
    locationLink: string;
    shortDescription: string;
    summary: string;
    ownerImgUrl: string;
    personalWebsiteUrl: string;
    sectionTitles: SectionTitles;
    contact: Contact;
    educations: Education[];
    jobs: Job[];
    skills: string[];
    projects: Project[];
}

export interface ResumeProp {
    resume: Resume
}
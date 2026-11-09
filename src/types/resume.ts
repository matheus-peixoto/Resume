export interface SectionTitles {
    about: string;
    education: string;
    projects: string;
    skills: string;
    workExperience: string;
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
    fullSchoolName: string | null;
    school: string;
    degree: string;
    descriptionParagraphs: string[] | null;
    start: string;
    end: string | null;
}

export interface BulletList {
    name: string;
    children: BulletList[];
}

export interface Job {
    bulletList: BulletList[] | null;
    company: string;
    coreDescription: string;
    end: string;
    link: string | null;
    workModels: string[];
    start: string;
    title: string;
}

export interface Project {
    description: string;
    techStack: string[];
    title: string;
}

export interface Resume {
    contact: Contact;
    educations: Education[];
    jobs: Job[];
    location: string;
    locationLink: string;
    name: string;
    ownerImgUrl: string;
    projects: Project[] | null;
    resumeLanguage: string;
    sectionTitles: SectionTitles;
    shortDescription: string;
    skills: string[];
    summary: string;
}

export interface ResumeProp {
    resume: Resume;
}

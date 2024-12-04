import React from "react";

export interface Social {
    name: string;
    url: string;
    icon: React.ComponentType;
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
    end: string | null;
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
    name: string;
    initials: string;
    location: string;
    locationLink: string;
    shortDescription: string;
    summary: string;
    ownerImgUrl: string;
    personalWebsiteUrl: string;
    contact: Contact;
    educations: Education[];
    jobs: Job[];
    skills: string[];
    projects: Project[];
}

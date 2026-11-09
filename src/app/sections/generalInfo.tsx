import { Fragment, type ReactNode } from "react";
import { LuGlobe, LuMail, LuPhone } from "react-icons/lu";
import Image from "next/image";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import type { Contact, ResumeProp } from "@/types/resume";

interface ContactLink {
    href: string;
    icon?: ReactNode;
    label: string;
    openInNewTab?: boolean;
}

const iconButtonClass = "inline-flex justify-center items-center border border-gray-200 w-8 h-8 rounded-md transition duration-200 hover:bg-gray-100";
const socialIcons: Record<string, ReactNode> = {
    github: <GitHubIcon />,
    linkedin: <LinkedInIcon />,
};

const getContactLinks = (contact: Contact): ContactLink[] => {
    const links: ContactLink[] = [];

    if (contact.email) {
        links.push({ href: `mailto:${contact.email}`, icon: <LuMail size={16} />, label: contact.email });
    }

    if (contact.phone) {
        links.push({ href: `tel:${contact.phone}`, icon: <LuPhone size={16} />, label: contact.phone });
    }

    links.push(...contact.socials.map(({ name, url }) => ({
        href: url,
        icon: socialIcons[name.toLowerCase()],
        label: name,
        openInNewTab: true,
    })));

    return links;
};

export function GeneralInfo({ resume }: ResumeProp) {
    const contactLinks = getContactLinks(resume.contact);

    return (
        <section className="flex justify-between items-center print:mb-3 mb-8">
            <div>
                <h1 className="text-2xl font-bold text-black">{resume.name}</h1>
                <p className="print:max-w-full max-w-md text-pretty text-sm my-2 print:mt-1 print:mb-2 print:text-[12px]">
                    {resume.shortDescription}
                </p>
                <p className="max-w-md items-center text-pretty text-xs mb-1">
                    <a
                        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                        href={resume.locationLink}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <LuGlobe size={12} />
                        {resume.location}
                    </a>
                </p>

                <div className="flex gap-x-1 print:hidden">
                    {contactLinks.filter(({ icon }) => icon).map((link) => (
                        <a
                            aria-label={link.label}
                            className={iconButtonClass}
                            href={link.href}
                            key={link.href}
                            rel={link.openInNewTab ? "noreferrer" : undefined}
                            target={link.openInNewTab ? "_blank" : undefined}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <div className="print:flex hidden flex-row items-center text-xs gap-1 whitespace-nowrap">
                    {contactLinks.map((link, index) => (
                        <Fragment key={link.href}>
                            {index > 0 && <span>|</span>}
                            <a className="hover:underline font-bold" href={link.href}>
                                {link.label}
                            </a>
                        </Fragment>
                    ))}
                </div>
            </div>

            <div className="w-full h-full max-w-28 max-h-28 print:hidden">
                <Image
                    alt={`${resume.name} photo`}
                    className="rounded-md"
                    height={112}
                    priority
                    src={resume.ownerImgUrl}
                    width={112}
                />
            </div>
        </section>
    );
}

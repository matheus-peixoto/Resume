import { Fragment, type ReactNode } from "react";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
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

const iconButtonClass = "inline-flex size-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-wash hover:text-foreground";
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

interface GeneralInfoProps extends ResumeProp {
    showProfilePhoto?: boolean;
}

export function GeneralInfo({ resume, showProfilePhoto = true }: GeneralInfoProps) {
    const contactLinks = getContactLinks(resume.contact);

    return (
        <header className="flex items-center justify-between gap-x-6">
            <div className="flex-1 space-y-1.5 print:space-y-1">
                <h1 className="font-pixel text-[28px] leading-none text-foreground sm:text-[32px] print:text-[26px]">
                    {resume.name}
                </h1>
                <p className="max-w-md text-pretty text-sm text-body print:max-w-full print:text-[11px] print:leading-tight">
                    {resume.shortDescription}
                </p>
                <p className="max-w-md text-pretty text-xs text-foreground">
                    <a
                        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                        href={resume.locationLink}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <LuMapPin aria-hidden="true" size={12} />
                        {resume.location}
                    </a>
                </p>

                <div className="flex gap-x-1 pt-1 print:hidden">
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

                <div className="hidden flex-wrap gap-x-2 text-xs text-muted print:flex print:text-[10px] print:leading-tight">
                    {contactLinks.map((link, index) => (
                        <Fragment key={link.href}>
                            {index > 0 && <span aria-hidden="true">/</span>}
                            <a className="text-foreground underline" href={link.href}>
                                {link.label}
                            </a>
                        </Fragment>
                    ))}
                </div>
            </div>

            {showProfilePhoto && (
                <div className="size-28 shrink-0 print:size-24">
                    <Image
                        alt={`${resume.name} photo`}
                        className="size-full rounded-xl bg-wash object-cover ring-1 ring-border"
                        height={112}
                        priority
                        src={resume.ownerImgUrl}
                        width={112}
                    />
                </div>
            )}
        </header>
    );
}

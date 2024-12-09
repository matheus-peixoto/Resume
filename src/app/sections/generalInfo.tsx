import React from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ResumeProp } from "@/types/resume";
import { LuGlobe } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";

export function GeneralInfo({ resume }: ResumeProp) {
    const iconMap: Record<string, React.ReactElement> = {
        'github': <GitHubIcon />,
        'linkedin': <LinkedInIcon />,
        '': <></>
    }

    return (
        <section className="flex justify-between items-center print:mb-3 mb-8">
            <div>
                <h1 className="text-2xl font-bold text-black">
                    {resume.name}
                </h1>
                <p className="print:max-w-full max-w-md text-pretty text-sm my-2 print:mt-1 print:mb-2 print:text-[12px]">
                    {resume.shortDescription}
                </p>
                <p className="max-w-md items-center text-pretty text-xs mb-1">
                    <a
                        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                        href={resume.locationLink}
                        target="_blank"
                    >
                        <LuGlobe size={12} />
                        {resume.location}
                    </a>
                </p>

                <div className="flex gap-x-1 print:hidden">
                    {
                        resume.contact.email ? (
                            <a href={`mailto:${resume.contact.email}`} className="inline-flex justify-center items-center border border-gray-200 w-8 h-8 rounded-md transition duration-200 hover:bg-gray-100">
                                <LuMail size={16} />
                            </a>
                        ) : null
                    }
                    {
                        resume.contact.email ? (
                            <a href={`tel:${resume.contact.phone}`} className="inline-flex justify-center items-center border border-gray-200 w-8 h-8 rounded-md duration-200 hover:bg-gray-100">
                                <LuPhone size={16} />
                            </a>
                        ) : null
                    }
                    {
                        resume.contact.socials.map(
                            (social, index) => (
                                <a key={index} href={social.url} target="_blank" className="inline-flex justify-center items-center border border-gray-200 w-8 h-8 rounded-md duration-200 hover:bg-gray-100">
                                    <social.icon />
                                </a>
                            )
                        )
                    }
                </div>

                <div className="print:flex hidden flex-col gap-x-1">
                    {
                        resume.contact.email
                        && (
                            <a href={`mailto:${resume.contact.email}`} className="text-xs font-bold">
                                {resume.contact.email}
                            </a>
                        )
                    }

                    {
                        resume.contact.email
                        && (
                            <a href={`tel:${resume.contact.phone}`} className="text-xs font-bold">
                                {resume.contact.phone}
                            </a>
                        )
                    }

                    {
                        resume.contact.socials.map(
                            (social, index) => (
                                <a key={index} className="text-xs font-bold" href={social.url}>{social.url}</a>
                            )
                        )
                    }
                </div>

            </div>

            <div className="w-full h-full max-w-28 max-h-28 print:hidden">
                <img className="rounded-md" src={resume.ownerImgUrl} alt={resume.name + " photo"} />
            </div>
        </section>
    )
}
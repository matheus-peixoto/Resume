import type { ResumeProp } from "@/types/resume";
import resumes from "@/data";
import { pdfResumeMetadata } from "@/data/pdfResumeMetadata.generated";
import { COMMAND_MENU_EN } from "@/data/ResumeEN/CommandMenuEN";
import { CommandMenu } from "@/components/CommandMenu";
import { ResumeSections } from "./resumeSections";

interface CompletePageProps extends ResumeProp {
    locale: string;
}

export function CompletePage({ resume, locale }: CompletePageProps) {
    const languages = Object.entries(resumes).map(([route, languageResume]) => ({
        name: languageResume.resumeLanguage,
        route,
    }));
    const pdfOptions = pdfResumeMetadata
        .filter((definition) => definition.locale === locale)
        .map(({ fileName, includePhoto, pages }) => ({ fileName, includePhoto, pages }));
    const links = resume.contact.socials.filter(({ name }) => {
        const normalizedName = name.toLocaleLowerCase();
        return !["website", "personal website", "portfolio", "site", "site pessoal"].includes(normalizedName);
    });

    return (
        <>
            <ResumeSections resume={resume} />
            <CommandMenu
                currentLocale={locale}
                labels={resume.commandMenu ?? COMMAND_MENU_EN}
                languages={languages}
                links={links}
                pdfOptions={pdfOptions}
            />
        </>
    );
}

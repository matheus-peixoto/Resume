import {
    Languages,
    ResumeSections,
    PrintOption
} from "@/app/sections";
import { ResumeProp } from "@/types/resume";

interface CompletePageProps extends ResumeProp {
    locale: string;
}

export function CompletePage({ resume, locale }: CompletePageProps) {
    return (
        <>
            <Languages />
            <ResumeSections resume={resume} />
            <PrintOption locale={locale} />
        </>
    );
}

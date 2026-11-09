import type { ResumeProp } from "@/types/resume";
import { Languages } from "./languages";
import { PrintOption } from "./printOption";
import { ResumeSections } from "./resumeSections";

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

import {
    Languages,
    ResumeSections,
    PrintOption
} from "@/app/sections";
import { ResumeProp } from "@/types/resume";

export function CompletePage({ resume }: ResumeProp) {
    return (
        <>
            <Languages />
            <ResumeSections resume={resume} />
            <PrintOption />
        </>
    );
}
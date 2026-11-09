import type { ResumeProp } from "@/types/resume";
import { About } from "./about";
import { Education } from "./education";
import { GeneralInfo } from "./generalInfo";
import { Project } from "./project";
import { Skills } from "./skill";
import { WorkExperience } from "./workExperience";

export function ResumeSections({ resume }: ResumeProp) {
    return (
        <main className="resume-document text-gray-700 font-mono container mx-auto overflow-auto p-4 print:p-0 md:px-8 md:py-5 mb-11 print:mb-0">
            <section className="resume-sheet print:mx-0 print:max-w-none mx-auto max-w-2xl bg-white">
                <GeneralInfo resume={resume} />
                <About resume={resume} />
                <WorkExperience resume={resume} />
                <Education resume={resume} />
                <Skills resume={resume} />
                {resume.projects && <Project resume={resume} />}
            </section>
        </main>
    );
}

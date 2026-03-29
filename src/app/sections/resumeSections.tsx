import {
    GeneralInfo,
    WorkExperience,
    About,
    Education,
    Skills,
    Project
} from "@/app/sections";
import { ResumeProp } from "@/types/resume";

export function ResumeSections({ resume }: ResumeProp) {
    return (
        <main className="text-gray-700 font-mono container mx-auto overflow-auto p-4 
        print:py-0 print:px-0 print:p-0 md:px-8 md:py-5 mb-11">
            <section className="print:mx-3 print:max-w-3xl mx-auto max-w-2xl bg-white">
                <GeneralInfo resume={resume} />
                <About resume={resume} />
                <WorkExperience resume={resume} />
                <Education resume={resume} />
                <Skills resume={resume} />
                {resume.projects != null ? <Project resume={resume} /> : null}
            </section>
        </main>
    );
}
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
        <main className="font-mono container mx-auto overflow-auto p-4 text-gray-700 print:py-0 print:px-0 print:p-0 md:px-16 md:py-5 mb-11">
            <section className="print:mx-6 print:max-w-3xl mx-auto w-fit max-w-2xl bg-white">
                <GeneralInfo resume={resume} />
                <About resume={resume} />
                <WorkExperience resume={resume} />
                <Education resume={resume} />
                <Skills resume={resume} />
                <Project resume={resume} />
            </section>
        </main>
    );
}
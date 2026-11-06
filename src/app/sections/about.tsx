import { ResumeProp } from "@/types/resume";

export function About({ resume }: ResumeProp) {
    return (
        <section className="print:mb-3 mb-8">
            <h2 className="print:text-lg text-xl font-bold text-black">{resume.sectionTitles.about}</h2>
            <p className="text-pretty text-sm print:text-[12px] my-2 print:my-0">
                {resume.summary}
            </p>
        </section>
    );
}
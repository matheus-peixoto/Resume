import type { ResumeProp } from "@/types/resume";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills({ resume }: ResumeProp) {
    const lastSkillIndex = resume.skills.length - 1;
    
    return (
        <section className="print:mb-3 mb-8">
            <SectionHeading className="mb-2 print:mb-1" title={resume.sectionTitles.skills} />
            <div className="flex flex-wrap gap-1">
                {
                    resume.skills.map((skill, index) => (
                        <div key={skill} className="rounded-md bg-gray-700 text-xs py-1 px-2 print:p-0 print:bg-transparent print:rounded-none">
                            <span className="print:hidden text-white">
                                {skill}
                            </span>
                            <span className="hidden print:flex text-black break-words">
                                {skill} {index !== lastSkillIndex && '|'}
                            </span>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

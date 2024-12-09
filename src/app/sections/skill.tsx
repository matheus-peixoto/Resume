import { ResumeProp } from "@/types/resume";

export function Skills({ resume }: ResumeProp) {
    const lastSkillIndex = resume.skills.length - 1;
    
    return (
        <section className="print:mb-3 mb-8">
            <div className="mb-2">
                <h2 className="text-xl print:text-lg font-bold text-black">{resume.sectionTitles.skills}</h2>
            </div>
            <div className="flex flex-wrap gap-1">
                {
                    resume.skills.map((skill, index) => (
                        <div key={index} className="rounded-md bg-gray-700 text-xs py-1 px-2 print:p-0">
                            <span className="print:hidden text-white">
                                {skill}
                            </span>
                            <span className="hidden print:flex text-black">
                                {skill} {index != lastSkillIndex && '|'}
                            </span>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
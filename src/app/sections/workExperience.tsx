import { WorkInfo } from "@/components";
import { ResumeProp } from "@/types/resume";

export function WorkExperience({ resume }: ResumeProp) {
    return (
        < section className="print:mb-3 mb-8">
            <div className="mb-2">
                <h2 className="text-xl print:text-lg font-bold text-black">{resume.sectionTitles.workExperience}</h2>
            </div>

            <WorkInfo job={resume.jobs[0]} />
            <WorkInfo job={resume.jobs[1]} />
        </section >
    );
}
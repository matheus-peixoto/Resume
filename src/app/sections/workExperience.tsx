import { SectionHeading } from "@/components/SectionHeading";
import { WorkInfo } from "@/components/WorkInfo";
import type { ResumeProp } from "@/types/resume";
import { getSpacingStyle, getWorkSpacingSlots } from "@/lib/resumeLayout";

export function WorkExperience({ resume }: ResumeProp) {
    return (
        <section
            className="resume-section flex min-h-0 flex-col gap-y-3 print:gap-y-1"
            style={getSpacingStyle(getWorkSpacingSlots(resume.jobs))}
        >
            <SectionHeading title={resume.sectionTitles.workExperience} />
            <div className="work-list space-y-8 print:space-y-0">
                {resume.jobs.map((job, index) => (
                    <WorkInfo job={job} key={`${job.company}-${job.start}-${index}`} />
                ))}
            </div>
        </section>
    );
}

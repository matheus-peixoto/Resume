import { SectionHeading } from "@/components/SectionHeading";
import { WorkInfo } from "@/components/WorkInfo";
import type { ResumeProp } from "@/types/resume";

export function WorkExperience({ resume }: ResumeProp) {
    return (
        <section className="print:mb-3 mb-8">
            <SectionHeading title={resume.sectionTitles.workExperience} />

            {resume.jobs.map((job, index) => (
                <WorkInfo job={job} key={`${job.company}-${job.start}-${index}`} />
            ))}
        </section>
    );
}

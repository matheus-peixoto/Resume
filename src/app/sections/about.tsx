import type { ResumeProp } from "@/types/resume";
import { SectionHeading } from "@/components/SectionHeading";
import { getSpacingStyle } from "@/lib/resumeLayout";

export function About({ resume }: ResumeProp) {
    return (
        <section className="resume-section flex min-h-0 flex-col gap-y-3 print:gap-y-1" style={getSpacingStyle(1)}>
            <SectionHeading title={resume.sectionTitles.about} />
            <p className="section-content text-pretty text-sm text-body print:text-[11px] print:leading-tight">
                {resume.summary}
            </p>
        </section>
    );
}

import type { ResumeProp } from "@/types/resume";
import { SectionHeading } from "@/components/SectionHeading";
import { getSpacingStyle } from "@/lib/resumeLayout";

export function Education({ resume }: ResumeProp) {
    return (
        <section
            className="resume-section flex min-h-0 flex-col gap-y-3 print:gap-y-1"
            style={getSpacingStyle(resume.educations.length)}
        >
            <SectionHeading title={resume.sectionTitles.education} />

            <div className="education-list space-y-4 print:space-y-0">
            {resume.educations.map((education, index) => {
                const description = education.descriptionParagraphs?.[0];

                return (
                    <article className="education-entry" key={index}>
                        <div className="flex items-baseline justify-between gap-x-3">
                            <h3 className="text-sm font-medium leading-snug text-foreground print:leading-none">
                                {education.fullSchoolName ?? education.school}
                            </h3>
                            <span className="shrink-0 text-xs text-meta print:text-[9px] print:leading-tight">
                                {education.start} - {education.end}
                            </span>
                        </div>

                        <p className="mt-1.5 text-sm text-body print:mt-1 print:text-[11px] print:leading-tight">
                            {education.degree}
                        </p>

                        {description && (
                            <p className="mt-1 text-xs text-body print:hidden">
                                {description}
                            </p>
                        )}
                    </article>
                );
            })}
            </div>
        </section>
    );
}

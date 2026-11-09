import type { ResumeProp } from "@/types/resume";
import { SectionHeading } from "@/components/SectionHeading";
import { getSpacingStyle } from "@/lib/resumeLayout";

export function Skills({ resume }: ResumeProp) {
    return (
        <section className="resume-section flex min-h-0 flex-col gap-y-3 print:gap-y-1" style={getSpacingStyle(1)}>
            <SectionHeading title={resume.sectionTitles.skills} />
            <ul className="section-content flex flex-wrap content-center text-sm leading-relaxed text-body print:text-[10px] print:leading-snug" aria-label={resume.sectionTitles.skills}>
                {resume.skills.map((skill, index) => (
                    <li className="inline whitespace-nowrap" key={skill}>
                        {skill}
                        {index < resume.skills.length - 1 && (
                            <span className="whitespace-normal text-muted" aria-hidden="true">{"\u00a0· "}</span>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}

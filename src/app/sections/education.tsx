import type { ResumeProp } from "@/types/resume";
import { SectionHeading } from "@/components/SectionHeading";

export function Education({ resume }: ResumeProp) {
    return (
        <section className="mb-8 print:mb-3">
            <SectionHeading title={resume.sectionTitles.education} />

            {resume.educations.map((education, index) => {
                const description = education.descriptionParagraphs?.[0];

                return (
                    <div key={index}>
                        <div className="mb-1 flex justify-between">
                            <div className="print:hidden">
                                <h3 className="font-semibold text-black">
                                    {education.fullSchoolName ?? education.school}
                                </h3>
                                <h4 className="font-mono text-black leading-none print:text-[12px]">
                                    {education.degree}
                                </h4>
                            </div>

                            <h3 className="hidden print:block font-semibold text-black">
                                {education.school} - {education.degree}
                            </h3>

                            <span className="inline-flex items-center text-sm">
                                {education.start} - {education.end}
                            </span>
                        </div>

                        {description && (
                            <p className="text-sm print:hidden">
                                {description}
                            </p>
                        )}
                    </div>
                );
            })}
        </section>
    );
}

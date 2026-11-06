import { ResumeProp } from "@/types/resume";

export function Education({ resume }: ResumeProp) {
    return (
        <section className="mb-8 print:mb-3">
            <div className="mb-2 print:mb-0">
                <h2 className="text-xl print:text-lg font-bold text-black">
                    {resume.sectionTitles.education}
                </h2>
            </div>

            {resume.educations.map((education, index) => {
                const description = education.descriptionParagraphs?.[0];

                return (
                    <div key={index}>
                        <div className="mb-1 flex justify-between">
                            
                            {/* Screen version */}
                            <div className="print:hidden">
                                <h3 className="font-semibold text-black">
                                    {education.fullSchoolName ?? education.school}
                                </h3>
                                <h4 className="font-mono text-black leading-none print:text-[12px]">
                                    {education.degree}
                                </h4>
                            </div>

                            {/* Print version */}
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
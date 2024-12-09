import { ResumeProp } from "@/types/resume";

export function Education({ resume }: ResumeProp) {
    return (
        <section className="print:mb-3 mb-8">
            <div className="mb-2">
                <h2 className="text-xl print:text-lg font-bold text-black">{resume.sectionTitles.education}</h2>
            </div>
            {
                resume.educations.map((education, index) => (
                    <div key={index} className="mt-2">
                        <div className="mb-1 flex justify-between">
                            <h3 className="font-semibold text-black">{education.school}</h3>

                            <span className="inline-flex items-center text-sm">
                                {`${education.start} - ${education.end ?? 'Atual'}`}
                            </span>
                        </div>
                        <div className="print:mb-2 mb-2.5">
                            <h4 className="font-mono print:text-sm text-black leading-none print:text-[12px]">{education.degree}</h4>
                        </div>
                        <p className="text-sm print:text-xs print:hidden">{education.descriptionParagraphs[0]}</p>
                    </div>
                ))
            }
        </section>
    );
}
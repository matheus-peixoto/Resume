import { RESUME } from "@/data/Resume";

export function Education() {
    return (
        <section className="print:mb-3 mb-8">
            <div className="mb-2">
                <h2 className="text-lg font-bold text-black">Formação</h2>
            </div>
            {
                RESUME.educations.map((education, index) => (
                    <div key={index} className="mt-2">
                        <div className="mb-1 flex justify-between">
                            <h3 className="font-semibold text-black">{education.school}</h3>

                            <span className="inline-flex items-center text-sm">
                                {`${education.start} - ${education.end ?? 'Atual'}`}
                            </span>
                        </div>
                        <div className="mb-2">
                            <h4 className="font-mono text-sm text-black leading-none print:text-[12px]">{education.degree}</h4>
                        </div>
                        <p className="text-xs print:hidden">{education.descriptionParagraphs[0]}</p>
                    </div>
                ))
            }
        </section>
    );
}
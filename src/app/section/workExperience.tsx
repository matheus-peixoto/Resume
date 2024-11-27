import { RESUME } from "@/data/Resume";

export function WorkExperience() {
    return (
        < section >
            <div className="mb-2">
                <h2 className="text-xl font-bold text-black">Experiência profissional</h2>
            </div>
            {
                RESUME.jobs.map((job, index) => (
                    <div key={index} className="mt-2">
                        <div className="flex justify-between mt-2">
                            <div className="flex gap-2 mb-1">
                                <a href={job.link} className="hover:underline" target="_blank">
                                    <h3 className="font-semibold text-black">{job.company}</h3>
                                </a>
                                <span className="rounded-md text-black bg-gray-100 text-xs py-1 px-2">
                                    {job.workModel}
                                </span>
                            </div>

                            <span className="inline-flex items-center text-sm">
                                {`${job.start} - ${job.end ?? 'Atual'}`}
                            </span>
                        </div>
                        <div>
                            <div className="mb-2">
                                <h4 className="font-mono text-sm text-black leading-none print:text-[12px]">
                                    {job.title}
                                </h4>
                            </div>
                            {
                                job.descriptionParagraphs.map(
                                    (descriptionParagraph, index) =>
                                    (
                                        <p key={index} className="text-xs print:text-[12px]">{descriptionParagraph}</p>
                                    )
                                )
                            }
                        </div>
                    </div>
                ))
            }
        </section >
    );
}
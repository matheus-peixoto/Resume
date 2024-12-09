import { ProjectCard } from "@/components";
import { ResumeProp } from "@/types/resume";

export function Project({ resume }: ResumeProp) {
    return (
        <section>
            <div className="print:hidden">
                <div className="mb-2">
                    <h2 className="text-xl print:text-lg font-bold text-black">{resume.sectionTitles.projects}</h2>
                </div>
                <div className="grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {
                        resume.projects.map((proj, index) => (
                            <ProjectCard key={index} project={proj} />
                        ))
                    }
                </div>
            </div>

            <div className="hidden print:block">
                <div className="mt-4 mb-2">
                    <h2 className="text-xl print:text-lg font-bold text-black">{resume.sectionTitles.projects}</h2>
                </div>
                <div className="flex flex-col gap-y-2">
                    {
                        resume.projects.map((proj, index) => (
                            <ProjectCard key={index} project={proj} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
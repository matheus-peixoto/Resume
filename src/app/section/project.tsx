import { ProjectCard } from "@/component";
import { RESUME } from "@/data/Resume";

export function Project() {
    return (
        <section>
            <div className="print:hidden">
                <div className="mb-2">
                    <h2 className="text-xl font-bold text-black">Projetos</h2>
                </div>
                <div className="grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {
                        RESUME.projects.map((proj, index) => (
                            <ProjectCard key={index} project={proj} />
                        ))
                    }
                </div>
            </div>

            <div className="hidden print:flex">
                <div className="mt-4 mb-2">
                    <h2 className="text-xl font-bold text-black">Projetos</h2>
                </div>
                <div className="flex flex-col gap-y-2 print:grid-cols-3 print:gap-2">
                    {
                        RESUME.projects.map((proj, index) => (
                            <ProjectCard key={index} project={proj} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import type { ResumeProp } from "@/types/resume";

export function Project({ resume }: ResumeProp) {
    const projects = resume.projects!;

    return (
        <section>
            <SectionHeading className="mb-2 print:mt-4" title={resume.sectionTitles.projects} />
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 print:flex print:flex-col print:gap-y-2">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}

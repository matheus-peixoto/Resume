import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import type { ResumeProp } from "@/types/resume";
import { getSpacingStyle } from "@/lib/resumeLayout";

export function Project({ resume }: ResumeProp) {
    const projects = resume.projects!;

    return (
        <section
            className="resume-section flex min-h-0 flex-col gap-y-3 print:gap-y-1"
            style={getSpacingStyle(1 + Math.ceil(projects.length / 3))}
        >
            <SectionHeading title={resume.sectionTitles.projects} />
            <div className="projects-grid grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-4">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}

import type { Project } from "@/types/resume";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="project-card flex flex-col justify-between">
            <div>
                <h3 className="text-sm font-medium leading-snug text-foreground print:leading-none">
                    {project.title}
                </h3>
                <p className="mt-1 text-pretty text-xs text-body print:mt-0.5 print:text-[9px] print:leading-tight">
                    {project.description}
                </p>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted print:mt-0.5 print:text-[8px] print:leading-snug">
                {project.techStack.join(" · ")}
            </p>
        </article>
    );
}

interface ProjectProps {
    readonly title: string,
    readonly description: string,
    readonly techStack: Array<string>
}

interface ProjectCardProps {
    readonly project: ProjectProps
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="flex flex-col justify-between border rounded-md p-2 print:px-2 print:pb-1">
            <div>
                <div className="flex font-semibold text-black mb-1 items-center gap-1">
                    <h3>{project.title}</h3>
                    <span className="block size-1 rounded-full bg-green-500"></span>
                </div>
                <p className="text-xs mb-2">
                    {project.description}
                </p>
            </div>
            <div className="flex flex-wrap gap-1">
                {
                    project.techStack.map((tech, index) => (
                        <span key={index} className="font-bold text-black bg-gray-100 text-xs rounded-md px-2 py-1">{tech}</span>
                    ))
                }
            </div>
        </div>
    );
}
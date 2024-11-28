import { RESUME } from "@/data/Resume";

export function Project() {
    return (
        <section>
            <div className="mb-2">
                <h2 className="text-xl font-bold text-black">Projetos</h2>
            </div>
            <div className="grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
                {
                    RESUME.projects.map((proj, index) => (
                        <div key={index} className="flex flex-col justify-between border rounded-md p-2">
                            <div>
                                <div className="flex font-semibold text-black mb-1 items-center gap-1">
                                    <h3>{proj.title}</h3>
                                    <span className="block size-1 rounded-full bg-green-500"></span>
                                </div>
                                <p className="text-xs mb-2">
                                    {proj.description}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-1">
                                {
                                    proj.techStack.map((tech, index) => (
                                        <span key={index} className="font-bold text-black bg-gray-100 text-xs rounded-md px-2 py-1">{tech}</span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
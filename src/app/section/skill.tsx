import { RESUME } from "@/data/Resume";

export function Skills() {
    return (
        <section>
            <div className="mb-2">
                <h2 className="text-xl font-bold text-black">Competências Técnicas</h2>
            </div>
            <div className="flex flex-wrap gap-1">
                {
                    RESUME.skills.map((skill, index) => (
                        <span key={index} className="rounded-md text-white bg-gray-700 text-xs py-1 px-2">
                            {skill}
                        </span>
                    ))
                }
            </div>
        </section>
    );
}
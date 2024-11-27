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
                        <div key={index} className="rounded-md bg-gray-700 text-xs py-1 px-2">
                            <span className="print:hidden text-white">
                                {skill}
                            </span>
                            <span className="hidden print:flex text-black">
                                {skill}
                            </span>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
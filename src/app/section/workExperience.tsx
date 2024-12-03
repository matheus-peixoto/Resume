import { WorkInfo } from "@/component";

export function WorkExperience() {
    return (
        <>
            < section className="print:mb-3 mb-8">
                <div className="mb-2">
                    <h2 className="text-lg font-bold text-black">Experiência profissional</h2>
                </div>

                <WorkInfo index={0} />
                <WorkInfo index={1} />
            </section >
        </>
    );
}
import { RESUME } from "@/data/Resume";

export function About() {
    return (
        <section className="print:mb-3 mb-8">
            <h2 className="text-lg font-bold text-black">Sobre</h2>
            <p className="text-pretty text-sm print:text-[12px] my-2">
                {RESUME.summary}
            </p>
        </section>
    );
}
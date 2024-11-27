import { RESUME } from "@/data/Resume";

export function About() {
    return (
        <section>
            <h2 className="text-xl font-bold text-black">Sobre</h2>
            <p className="text-pretty text-sm print:text-[12px] my-2">
                {RESUME.summary}
            </p>
        </section>
    );
}
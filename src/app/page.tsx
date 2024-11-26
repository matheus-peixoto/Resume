import type { Metadata } from "next";
import { RESUME } from "@/data/Resume";
import { MainInfo } from "./sections";

export const metadata: Metadata = {
  title: RESUME.name + ' - Currículo',
  description: RESUME.summary
};

export default function Page() {
  return (
    <main className="font-mono container mx-auto overflow-auto p-4 text-gray-500 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <MainInfo />
        <section>
          <h2 className="text-xl font-bold text-black">Sobre</h2>
          <p className="text-pretty text-sm print:text-[12px] my-2">
            {RESUME.summary}
          </p>
        </section>
        <section>
          {/* Professional experience section */}
          {RESUME.jobs.length}
        </section>
        <section>
          {/* Education section */}
          {RESUME.educations.length}
        </section>

        <section>
          {/* Skill section */}
          {RESUME.skills.length}
        </section>

        <section>
          {/* Skill section */}
          {RESUME.projects.length}
        </section>
      </section>
    </main>
  );
}
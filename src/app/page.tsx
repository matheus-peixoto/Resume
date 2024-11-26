import type { Metadata } from "next";
import { RESUME_DATA } from "@/data/ResumeData";
import { MainInfo } from "./sections";

export const metadata: Metadata = {
  title: RESUME_DATA.name + ' - CV',
  description: RESUME_DATA.summary
};

export default function Page() {
  return (
    <main className="font-mono container mx-auto overflow-auto p-4 text-gray-500 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <MainInfo />
        <section>
          {/* About section */}
          {RESUME_DATA.summary}
        </section>

        <section>
          {/* Professional experience section */}
          {RESUME_DATA.work.length}
        </section>

        <section>
          {/* Education section */}
          {RESUME_DATA.education.length}
        </section>

        <section>
          {/* Skill section */}
          {RESUME_DATA.skills.length}
        </section>

        <section>
          {/* Skill section */}
          {RESUME_DATA.projects.length}
        </section>
      </section>
    </main>
  );
}
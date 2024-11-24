import type { Metadata } from "next";
import { RESUME_DATA } from "@/data/ResumeData";

export const metadata: Metadata = {
  title: RESUME_DATA.name + ' - CV',
  description: RESUME_DATA.summary
};

export default function Page() {
  return (
    <main className="container mx-auto bg-blue-600 scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <section>
          {/* Main info section */}
          {RESUME_DATA.name}
          {RESUME_DATA.shortDescription}
        </section>

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
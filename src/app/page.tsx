import type { Metadata } from "next";
import { RESUME } from "@/data/Resume";
import {
  GeneralInfo,
  WorkExperience,
  About,
  Education,
  Skills,
  Project
} from "./section";

export const metadata: Metadata = {
  title: RESUME.name + ' - Currículo',
  description: RESUME.summary
};

export default function Page() {
  return (
    <main className="font-mono container mx-auto overflow-auto p-4 text-gray-500 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <GeneralInfo />
        <About />
        <WorkExperience />
        <Education />
        <Skills />
        <Project />
      </section>
    </main>
  );
}
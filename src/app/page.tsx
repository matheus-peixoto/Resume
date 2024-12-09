import type { Metadata } from "next";
import { RESUME } from "@/data/Resume";
import {
  GeneralInfo,
  WorkExperience,
  About,
  Education,
  Skills,
  Project,
  PrintOption
} from "./sections";

export const metadata: Metadata = {
  title: RESUME.name + ' - Currículo',
  description: RESUME.summary
};

export default function Page() {
  return (
    <main className="font-mono container mx-auto overflow-auto p-4 text-gray-700 print:py-0 print:px-0 print:p-0 md:p-16">
      <section className="print:mx-6 print:max-w-3xl mx-auto w-fit max-w-2xl bg-white">
        <GeneralInfo />
        <About />
        <WorkExperience />
        <Education />
        <Skills />
        <Project />
      </section>
      <PrintOption />
    </main>
  );
}
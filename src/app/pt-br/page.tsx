import { Metadata } from "next";
import resumesMap from "@/data";
import { Resume } from "@/types/resume";
import { CompletePage } from "../sections/completePage";

const resume: Resume = resumesMap["pt-br"];

export const metadata: Metadata = {
  title: resume.name + ' - Currículo',
  description: resume.summary
};

export default function Page() {
  return (
    <CompletePage resume={resume} />
  );
}
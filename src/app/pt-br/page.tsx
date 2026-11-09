import type { Metadata } from "next";
import resumesMap from "@/data";
import { CompletePage } from "../sections/completePage";

const resume = resumesMap["pt-br"];

export const metadata: Metadata = {
  title: resume.name + ' - Currículo',
  description: resume.summary
};

export default function Page() {
  return (
    <CompletePage resume={resume} locale="pt-br" />
  );
}

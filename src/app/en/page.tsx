import type { Metadata } from "next";
import resumesMap from "@/data";
import { CompletePage } from "../sections/completePage";

const resume = resumesMap.en;

export const metadata: Metadata = {
  title: resume.name + ' - Resume',
  description: resume.summary
};

export default function Page() {
  return (
    <CompletePage resume={resume} locale="en" />
  );
}

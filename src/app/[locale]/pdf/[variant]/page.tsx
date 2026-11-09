import { ResumeSections } from "@/app/sections/resumeSections";
import {
    getPdfResumeDefinition,
    pdfResumeDefinitions,
} from "@/data/resumeRegistry.generated";
import { notFound } from "next/navigation";

interface PdfResumePageProps {
    params: Promise<{
        locale: string;
        variant: string;
    }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
    return pdfResumeDefinitions.map(({ locale, slug }) => ({
        locale,
        variant: slug,
    }));
}

export default async function PdfResumePage({ params }: PdfResumePageProps) {
    const { locale, variant } = await params;
    const definition = getPdfResumeDefinition(locale, variant);

    if (!definition) {
        notFound();
    }

    return <ResumeSections pageCount={definition.pages} resume={definition.resume} />;
}

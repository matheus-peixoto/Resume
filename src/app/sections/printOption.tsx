import { FaFilePdf, FaPrint } from "react-icons/fa6";
import { pdfResumeMetadata } from "@/data/pdfResumeMetadata.generated";

interface PrintOptionProps {
    locale: string;
}

export function PrintOption({ locale }: PrintOptionProps) {
    const openPrintDialog = () => {
        window.print();
    };

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    const availablePdfs = pdfResumeMetadata
        .filter((definition) => definition.locale === locale)
        .sort((left, right) => left.pages - right.pages);

    return (
        <footer className="fixed flex justify-center items-center bottom-0 left-0 right-0 border-t bg-white p-1.5 text-sm print:hidden gap-2 min-h-11">
            {availablePdfs.map(({ pages, fileName }) => (
                <a
                    className="inline-flex items-center gap-1.5 text-red-500 rounded-md border border-gray-200 px-2 py-1 hover:bg-gray-50"
                    href={`${basePath}/pdfs/${fileName}`}
                    download
                    key={fileName}
                >
                    <FaFilePdf size={16} />
                    {pages} {pages === 1 ? "page" : "pages"}
                </a>
            ))}
            <button
                className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 px-2 py-1 hover:bg-gray-50"
                onClick={openPrintDialog}
                type="button"
            >
                <FaPrint size={16} />
                Print
            </button>
        </footer>
    );
}

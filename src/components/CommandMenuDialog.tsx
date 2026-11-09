"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Command } from "cmdk";
import {
    LuCheck,
    LuChevronLeft,
    LuDownload,
    LuFileDown,
    LuGlobe2,
    LuMoon,
    LuPalette,
    LuSearch,
    LuSun,
    LuX,
} from "react-icons/lu";
import { type FormEvent, useEffect, useRef, useState } from "react";
import type { CommandMenuTranslations, Social } from "@/types/resume";

interface LanguageOption {
    name: string;
    route: string;
}

interface PdfOption {
    fileName: string;
    pages: number;
}

interface WritableFileHandle {
    createWritable: () => Promise<{
        close: () => Promise<void>;
        write: (data: Blob) => Promise<void>;
    }>;
}

type SaveFilePickerWindow = Window & {
    showSaveFilePicker?: (options: {
        suggestedName: string;
        types: Array<{
            accept: Record<string, string[]>;
            description: string;
        }>;
    }) => Promise<WritableFileHandle>;
};

export interface CommandMenuDialogProps {
    currentLocale: string;
    initialView: MenuView;
    labels: CommandMenuTranslations;
    languages: LanguageOption[];
    links: Social[];
    open: boolean;
    pdfOptions: PdfOption[];
    setOpen: (open: boolean) => void;
    setTheme: (theme: "light" | "dark") => void;
    theme: "light" | "dark";
}

export type MenuView = "root" | "pdf" | "file-name" | "theme" | "languages";

const groupClassName = "overflow-hidden px-2 py-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted";
const itemClassName = "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-2.5 text-sm text-body outline-none aria-selected:bg-wash aria-selected:text-foreground";

const ensurePdfExtension = (fileName: string) => (
    fileName.toLocaleLowerCase().endsWith(".pdf") ? fileName : `${fileName}.pdf`
);

const withoutPdfExtension = (fileName: string) => fileName.replace(/\.pdf$/i, "");

export function CommandMenuDialog({
    currentLocale,
    initialView,
    labels,
    languages,
    links,
    open,
    pdfOptions,
    setOpen,
    setTheme,
    theme,
}: CommandMenuDialogProps) {
    const [view, setView] = useState<MenuView>("root");
    const [selectedPdf, setSelectedPdf] = useState<PdfOption | null>(null);
    const [fileName, setFileName] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const [saveError, setSaveError] = useState("");
    const returnFocus = useRef<Element | null>(null);
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

    useEffect(() => {
        if (open) {
            setView(initialView);
            setSelectedPdf(null);
            setSaveError("");
        }
    }, [initialView, open]);

    const changeTheme = (nextTheme: "light" | "dark") => {
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem("resume-theme", nextTheme);
        setTheme(nextTheme);
    };

    const choosePdf = (pdf: PdfOption) => {
        setSelectedPdf(pdf);
        setFileName(withoutPdfExtension(pdf.fileName));
        setSaveError("");
        setView("file-name");
    };

    const downloadPdf = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!selectedPdf || !fileName.trim()) {
            return;
        }

        const finalFileName = ensurePdfExtension(fileName.trim());
        const pdfUrl = `${basePath}/pdfs/${selectedPdf.fileName}`;
        const pickerWindow = window as SaveFilePickerWindow;
        setIsSaving(true);
        setSaveError("");

        try {
            if (pickerWindow.showSaveFilePicker) {
                const fileHandle = await pickerWindow.showSaveFilePicker({
                    suggestedName: finalFileName,
                    types: [{
                        description: "PDF",
                        accept: { "application/pdf": [".pdf"] },
                    }],
                });
                const response = await fetch(pdfUrl);

                if (!response.ok) {
                    throw new Error(`Unable to download PDF: HTTP ${response.status}`);
                }

                const writable = await fileHandle.createWritable();
                await writable.write(await response.blob());
                await writable.close();
            } else {
                const downloadLink = document.createElement("a");
                downloadLink.download = finalFileName;
                downloadLink.href = pdfUrl;
                document.body.appendChild(downloadLink);
                downloadLink.click();
                downloadLink.remove();
            }

            setOpen(false);
        } catch (error) {
            if (!(error instanceof DOMException && error.name === "AbortError")) {
                setSaveError(labels.pdf.saveError);
            }
        } finally {
            setIsSaving(false);
        }
    };

    const pageLabel = (pages: number) => (
        pages === 1
            ? labels.pdf.onePage
            : labels.pdf.multiplePages.replace("{pages}", String(pages))
    );

    return (
        <Dialog.Root onOpenChange={setOpen} open={open}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm print:hidden" />
                <Dialog.Content
                    aria-describedby={undefined}
                    className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border border-border bg-background shadow-2xl print:hidden"
                    onCloseAutoFocus={(event) => {
                        event.preventDefault();
                        if (returnFocus.current instanceof HTMLElement) {
                            returnFocus.current.focus({ preventScroll: true });
                        }
                    }}
                    onOpenAutoFocus={() => {
                        returnFocus.current = document.activeElement;
                    }}
                >
                    <Dialog.Title className="sr-only">{labels.title}</Dialog.Title>

                    {view === "root" && (
                        <Command className="flex w-full flex-col overflow-hidden" label={labels.title}>
                            <div className="flex items-center border-b border-border px-3">
                                <LuSearch aria-hidden="true" className="mr-2 shrink-0 text-muted" size={18} />
                                <Command.Input
                                    autoFocus
                                    className="h-12 w-full bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted"
                                    placeholder={labels.searchPlaceholder}
                                />
                            </div>
                            <Command.List className="max-h-[min(65vh,420px)] overflow-y-auto overflow-x-hidden py-1">
                                <Command.Empty className="py-8 text-center text-sm text-muted">
                                    {labels.noResults}
                                </Command.Empty>

                                <Command.Group className={groupClassName} heading={labels.sections.actions}>
                                    <Command.Item className={itemClassName} onSelect={() => setView("pdf")}>
                                        <LuFileDown aria-hidden="true" size={16} />
                                        {labels.pdf.action}
                                    </Command.Item>
                                    <Command.Item className={itemClassName} onSelect={() => setView("theme")}>
                                        <LuPalette aria-hidden="true" size={16} />
                                        {labels.sections.theme}
                                    </Command.Item>
                                    <Command.Item className={itemClassName} onSelect={() => setView("languages")}>
                                        <LuGlobe2 aria-hidden="true" size={16} />
                                        {labels.sections.languages}
                                    </Command.Item>
                                </Command.Group>

                                {links.length > 0 && (
                                    <Command.Group className={groupClassName} heading={labels.sections.links}>
                                        {links.map(({ name, url }) => (
                                            <Command.Item
                                                className={itemClassName}
                                                key={url}
                                                onSelect={() => {
                                                    setOpen(false);
                                                    window.open(url, "_blank", "noopener,noreferrer");
                                                }}
                                            >
                                                {name}
                                            </Command.Item>
                                        ))}
                                    </Command.Group>
                                )}

                            </Command.List>
                        </Command>
                    )}

                    {view === "pdf" && (
                        <Command className="flex w-full flex-col overflow-hidden" label={labels.pdf.heading}>
                            <MenuHeader backLabel={labels.back} onBack={() => setView("root")} title={labels.pdf.heading} />
                            <Command.List className="max-h-[min(65vh,420px)] overflow-y-auto p-2">
                                {pdfOptions.map((pdf) => (
                                    <Command.Item className={itemClassName} key={pdf.fileName} onSelect={() => choosePdf(pdf)}>
                                        <LuDownload aria-hidden="true" size={16} />
                                        {pageLabel(pdf.pages)}
                                    </Command.Item>
                                ))}
                            </Command.List>
                        </Command>
                    )}

                    {view === "theme" && (
                        <Command className="flex w-full flex-col overflow-hidden" label={labels.sections.theme}>
                            <MenuHeader backLabel={labels.back} onBack={() => setView("root")} title={labels.sections.theme} />
                            <Command.List className="max-h-[min(65vh,420px)] overflow-y-auto p-2">
                                <Command.Item className={itemClassName} onSelect={() => changeTheme("light")}>
                                    <LuSun aria-hidden="true" size={16} />
                                    <span className="flex-1">{labels.theme.light}</span>
                                    {theme === "light" && <LuCheck aria-hidden="true" size={16} />}
                                </Command.Item>
                                <Command.Item className={itemClassName} onSelect={() => changeTheme("dark")}>
                                    <LuMoon aria-hidden="true" size={16} />
                                    <span className="flex-1">{labels.theme.dark}</span>
                                    {theme === "dark" && <LuCheck aria-hidden="true" size={16} />}
                                </Command.Item>
                            </Command.List>
                        </Command>
                    )}

                    {view === "languages" && (
                        <Command className="flex w-full flex-col overflow-hidden" label={labels.sections.languages}>
                            <MenuHeader backLabel={labels.back} onBack={() => setView("root")} title={labels.sections.languages} />
                            <Command.List className="max-h-[min(65vh,420px)] overflow-y-auto p-2">
                                {languages.map(({ name, route }) => (
                                    <Command.Item
                                        className={itemClassName}
                                        key={route}
                                        onSelect={() => {
                                            if (route === currentLocale) {
                                                setOpen(false);
                                                return;
                                            }
                                            window.location.assign(`${basePath}/${route}`);
                                        }}
                                    >
                                        <span className="flex-1">{name}</span>
                                        {route === currentLocale && <LuCheck aria-hidden="true" size={16} />}
                                    </Command.Item>
                                ))}
                            </Command.List>
                        </Command>
                    )}

                    {view === "file-name" && selectedPdf && (
                        <div>
                            <MenuHeader backLabel={labels.back} onBack={() => setView("pdf")} title={pageLabel(selectedPdf.pages)} />
                            <form className="space-y-4 p-4" onSubmit={downloadPdf}>
                                <label className="block space-y-2 text-sm text-foreground">
                                    <span>{labels.pdf.fileNameLabel}</span>
                                    <div className="flex items-center rounded-md border border-border bg-wash px-3 focus-within:border-foreground">
                                        <input
                                            autoFocus
                                            className="h-10 min-w-0 flex-1 bg-transparent text-foreground outline-none"
                                            onChange={(event) => setFileName(withoutPdfExtension(event.target.value))}
                                            onFocus={(event) => event.currentTarget.select()}
                                            required
                                            value={fileName}
                                        />
                                        <span className="text-muted">.pdf</span>
                                    </div>
                                </label>
                                {saveError && <p className="text-xs text-red-600">{saveError}</p>}
                                <button
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-3 py-2 text-sm text-background transition-opacity hover:opacity-85 disabled:cursor-wait disabled:opacity-60"
                                    disabled={isSaving || !fileName.trim()}
                                    type="submit"
                                >
                                    <LuDownload aria-hidden="true" size={16} />
                                    {isSaving ? labels.pdf.saving : labels.pdf.save}
                                </button>
                            </form>
                        </div>
                    )}

                    <Dialog.Close
                        aria-label={labels.close}
                        className="absolute right-3 top-3 rounded-sm p-1 text-muted transition-colors hover:bg-wash hover:text-foreground"
                    >
                        <LuX aria-hidden="true" size={16} />
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

interface MenuHeaderProps {
    backLabel: string;
    onBack: () => void;
    title: string;
}

function MenuHeader({ backLabel, onBack, title }: MenuHeaderProps) {
    return (
        <div className="flex h-12 items-center border-b border-border px-3 pr-11">
            <button
                aria-label={backLabel}
                className="mr-2 rounded-sm p-1 text-muted transition-colors hover:bg-wash hover:text-foreground"
                onClick={onBack}
                type="button"
            >
                <LuChevronLeft aria-hidden="true" size={18} />
            </button>
            <p className="text-sm font-medium text-foreground">{title}</p>
        </div>
    );
}

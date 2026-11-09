"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { LuGlobe2, LuPalette } from "react-icons/lu";
import type { CommandMenuDialogProps, MenuView } from "./CommandMenuDialog";

const CommandMenuDialog = dynamic(() => (
    import("./CommandMenuDialog").then((module) => module.CommandMenuDialog)
));

type CommandMenuProps = Omit<CommandMenuDialogProps, "initialView" | "open" | "setOpen" | "theme" | "setTheme">;

export function CommandMenu(props: CommandMenuProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [isMac, setIsMac] = useState(false);
    const [initialView, setInitialView] = useState<MenuView>("root");
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const openMenu = (view: MenuView) => {
        setIsMounted(true);
        setInitialView(view);
        setOpen(true);
    };

    const toggleMenu = () => {
        if (open) {
            setOpen(false);
            return;
        }

        openMenu("root");
    };

    useEffect(() => {
        setIsMac(window.navigator.userAgent.includes("Mac"));
        setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key.toLocaleLowerCase() === "j" && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                setIsMounted(true);
                setInitialView("root");
                setOpen((current) => !current);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const shortcut = `${isMac ? "⌘" : "Ctrl"}+J`;
    const [hintBeforeShortcut, hintAfterShortcut = ""] = props.labels.openHint.split("{shortcut}");

    return (
        <>
            <div className="fixed right-4 top-4 z-40 flex gap-2 print:hidden">
                <button
                    aria-label={props.labels.sections.theme}
                    className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-background/95 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-wash"
                    onClick={() => openMenu("theme")}
                    title={props.labels.sections.theme}
                    type="button"
                >
                    <LuPalette aria-hidden="true" size={17} />
                </button>
                <button
                    aria-label={props.labels.sections.languages}
                    className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-background/95 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-wash"
                    onClick={() => openMenu("languages")}
                    title={props.labels.sections.languages}
                    type="button"
                >
                    <LuGlobe2 aria-hidden="true" size={17} />
                </button>
            </div>

            <footer className="fixed inset-x-0 bottom-0 z-40 flex justify-center bg-gradient-to-t from-background/75 via-background/35 to-transparent px-3 pb-2 pt-8 text-sm print:hidden">
                <button
                    aria-label={props.labels.title}
                    className="rounded-md border border-foreground/15 bg-background/70 px-3.5 py-2 text-foreground shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)] backdrop-blur-xl backdrop-saturate-150 transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-background/90 hover:shadow-xl"
                    onClick={toggleMenu}
                    type="button"
                >
                    {hintBeforeShortcut}
                    <kbd className="mx-1 inline-flex h-5 select-none items-center rounded-md border border-foreground/15 bg-foreground/10 px-1.5 text-[10px] font-medium text-foreground shadow-sm">
                        {shortcut}
                    </kbd>
                    {hintAfterShortcut}
                </button>
            </footer>

            {isMounted && (
                <CommandMenuDialog
                    {...props}
                    initialView={initialView}
                    open={open}
                    setOpen={setOpen}
                    setTheme={setTheme}
                    theme={theme}
                />
            )}
        </>
    );
}

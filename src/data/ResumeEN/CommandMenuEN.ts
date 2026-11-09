import type { CommandMenuTranslations } from "@/types/resume";

export const COMMAND_MENU_EN = {
    title: "Command menu",
    searchPlaceholder: "Type a command or search...",
    noResults: "No results found.",
    openHint: "Press {shortcut} to open the command menu",
    close: "Close",
    back: "Back",
    sections: {
        actions: "Actions",
        links: "Links",
        theme: "Theme",
        languages: "Languages",
    },
    pdf: {
        action: "PDF",
        heading: "Choose a PDF version",
        fileNameLabel: "File name",
        save: "Save PDF",
        saving: "Saving...",
        saveError: "The PDF could not be saved. Please try again.",
        onePage: "1 Page",
        multiplePages: "{pages} Pages",
    },
    theme: {
        light: "Light",
        dark: "Dark",
    },
} satisfies CommandMenuTranslations;

import type { CommandMenuTranslations } from "@/types/resume";

export const COMMAND_MENU_PTBR = {
    title: "Menu de comandos",
    searchPlaceholder: "Digite um comando ou pesquise...",
    noResults: "Nenhum resultado encontrado.",
    openHint: "Pressione {shortcut} para abrir o menu de comandos",
    close: "Fechar",
    back: "Voltar",
    sections: {
        actions: "Ações",
        links: "Links",
        theme: "Tema",
        languages: "Idiomas",
    },
    pdf: {
        action: "PDF",
        heading: "Escolha uma versão do PDF",
        fileNameLabel: "Nome do arquivo",
        save: "Salvar PDF",
        saving: "Salvando...",
        saveError: "Não foi possível salvar o PDF. Tente novamente.",
        onePage: "1 página",
        multiplePages: "{pages} páginas",
        pagesSection: "Páginas",
        profilePhotoSection: "Foto de perfil",
        withPhoto: "Com foto",
        withoutPhoto: "Sem foto",
        continue: "Continuar",
    },
    theme: {
        light: "Claro",
        dark: "Escuro",
    },
} satisfies CommandMenuTranslations;

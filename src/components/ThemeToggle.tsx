"use client";

import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

const storageKey = "resume-theme";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.dataset.theme === "dark");
    }, []);

    const toggleTheme = () => {
        const nextTheme = isDark ? "light" : "dark";
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem(storageKey, nextTheme);
        setIsDark(!isDark);
    };

    return (
        <button
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            className="inline-flex size-7 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-wash hover:text-foreground"
            onClick={toggleTheme}
            type="button"
        >
            {isDark ? <LuSun aria-hidden="true" size={14} /> : <LuMoon aria-hidden="true" size={14} />}
        </button>
    );
}

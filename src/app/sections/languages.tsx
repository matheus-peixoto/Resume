import resumes from "@/data";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

const languages = Object.entries(resumes).map(([route, resume]) => ({
    name: resume.resumeLanguage,
    route,
}));

export function Languages() {
    return (
        <header className="flex items-center justify-end gap-2 border-b border-border px-4 py-1 print:hidden">
            {languages.map(({ name, route }) => (
                <Link
                    key={route}
                    href={`/${route}`}
                    className="rounded-md border border-border px-1.5 py-0.5 text-center text-xs text-muted transition-colors hover:bg-wash hover:text-foreground"
                >
                    {name}
                </Link>
            ))}
            <ThemeToggle />
        </header>
    );
}

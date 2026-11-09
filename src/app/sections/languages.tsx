import resumes from "@/data";
import Link from "next/link";

const languages = Object.entries(resumes).map(([route, resume]) => ({
    name: resume.resumeLanguage,
    route,
}));

export function Languages() {
    return (
        <header className="border-b flex gap-2 p-1 justify-end print:hidden px-4">
            {languages.map(({ name, route }) => (
                <Link
                    key={route}
                    href={`/${route}`}
                    className="text-gray-500 text-center rounded-md border border-gray-200 px-1 py-0.5 hover:text-gray-600"
                >
                    {name}
                </Link>
            ))}
        </header>
    );
}

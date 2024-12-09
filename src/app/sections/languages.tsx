import resumesMap from "@/data";
import Link from 'next/link';

const languagesKey = Object.keys(resumesMap);
const languages = languagesKey.map(key => ({ route: key, name: resumesMap[key].resumeLanguage }));

export function Languages() {
    return (
        <header className="border-b flex gap-2 p-1 justify-end print:hidden px-4">
            {
                languages.map(lang => (
                    <Link
                        key={lang.name}
                        href={`/${lang.route}`}
                        className="text-gray-500 text-center rounded-md border border-gray-200 px-1 p-y-0.5 hover:text-gray-600"
                    >
                        {lang.name}
                    </Link>
                ))
            }

        </header>
    );
}
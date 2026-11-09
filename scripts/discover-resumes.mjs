import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { writeResumeRegistry } from "./write-resume-registry.mjs";

const workspace = process.cwd();
const dataDirectory = path.join(workspace, "src", "data");
const toPosixPath = (value) => value.split(path.sep).join("/");
const readJson = async (filePath) => JSON.parse(await readFile(filePath, "utf8"));

const assertFileExists = async (filePath) => {
    try {
        await access(filePath);
    } catch {
        throw new Error(`Configured resume file does not exist: ${filePath}`);
    }
};

const findLanguageDirectories = async () => {
    const entries = await readdir(dataDirectory, { withFileTypes: true });
    const directories = entries
        .filter((entry) => entry.isDirectory() && entry.name.startsWith("Resume"))
        .map(({ name }) => name)
        .sort();

    if (directories.length === 0) {
        throw new Error("No resume language directories were found in src/data.");
    }

    return directories;
};

const findVariants = async (directoryPath, prefix) => {
    const escapedPrefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const variantPattern = new RegExp(`^${escapedPrefix}(\\d+)\\.ts$`);
    const files = await readdir(directoryPath);
    const variants = files
        .map((fileName) => {
            const match = fileName.match(variantPattern);
            return match ? { fileName, pages: Number(match[1]) } : null;
        })
        .filter(Boolean)
        .sort((left, right) => left.pages - right.pages);

    if (variants.length === 0) {
        throw new Error(`No numbered PDF resumes were found in ${directoryPath}.`);
    }

    if (new Set(variants.map(({ pages }) => pages)).size !== variants.length) {
        throw new Error(`Duplicate page-count variants found for prefix ${prefix}.`);
    }

    return variants;
};

const discoverLanguage = async (directoryName, pdfFilePrefix) => {
    const directoryPath = path.join(dataDirectory, directoryName);
    const config = await readJson(path.join(directoryPath, "resume.config.json"));
    await assertFileExists(path.join(directoryPath, config.webFile));

    const language = {
        locale: config.locale,
        importPath: `./${directoryName}/${path.basename(config.webFile, ".ts")}`,
    };
    const variants = (await findVariants(directoryPath, config.prefix)).map(({ fileName, pages }) => {
        const slug = `${pages}-page`;
        return {
            locale: config.locale,
            pages,
            slug,
            route: `/${config.locale}/pdf/${slug}/`,
            fileName: `${pdfFilePrefix}-${config.locale}-${slug}.pdf`,
            importPath: `./${directoryName}/${path.basename(fileName, ".ts")}`,
            sourceFile: toPosixPath(path.relative(workspace, path.join(directoryPath, fileName))),
        };
    });

    return { language, variants };
};

export const discoverResumes = async () => {
    const { pdfFilePrefix } = await readJson(path.join(dataDirectory, "resume.config.json"));
    const discoveredLanguages = await Promise.all(
        (await findLanguageDirectories()).map(
            (directoryName) => discoverLanguage(directoryName, pdfFilePrefix),
        ),
    );
    const languages = discoveredLanguages.map(({ language }) => language);
    const variants = discoveredLanguages.flatMap(({ variants: entries }) => entries);

    await writeResumeRegistry({ dataDirectory, languages, variants });
    return { languages, variants };
};

const isDirectExecution = process.argv[1]
    && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectExecution) {
    const { languages, variants } = await discoverResumes();
    console.log(`Discovered ${languages.length} language(s) and ${variants.length} PDF variant(s).`);
}

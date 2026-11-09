import chokidar from "chokidar";
import path from "node:path";
import process from "node:process";

const watchedPaths = [
    "src/data",
    "src/app/globals.css",
    "src/app/sections",
    "src/components",
];

const normalizePath = (filePath) => path.relative(
    process.cwd(),
    path.resolve(filePath),
).split(path.sep).join("/");

const selectAffectedProfiles = (previousProfiles, profiles, changedFiles) => {
    if (profiles.length !== previousProfiles.length) {
        return profiles;
    }

    const normalizedFiles = changedFiles.map(normalizePath);
    const matchedProfiles = profiles.filter(({ sourceFile }) => normalizedFiles.includes(sourceFile));
    const onlyNumberedResumeFilesChanged = matchedProfiles.length > 0
        && matchedProfiles.length === normalizedFiles.length;

    return onlyNumberedResumeFilesChanged ? matchedProfiles : profiles;
};

export const watchPdfSources = async ({
    baseUrl,
    generate,
    initialProfiles,
    loadProfiles,
    synchronizeOutput,
}) => {
    const watcher = chokidar.watch(watchedPaths, {
        cwd: process.cwd(),
        ignoreInitial: true,
        ignored: (filePath) => /src[\\/]data[\\/].*\.generated\.(?:ts|json)$/.test(filePath),
    });
    let profiles = initialProfiles;
    let debounceTimer;
    let pendingFiles = new Set();
    let generationQueue = Promise.resolve();

    const regenerate = async (changedFiles) => {
        const previousProfiles = profiles;
        profiles = await loadProfiles();
        await synchronizeOutput(profiles);
        const targets = selectAffectedProfiles(previousProfiles, profiles, changedFiles);

        await new Promise((resolve) => setTimeout(resolve, 350));
        await generate(targets);
        console.log(`Watching for PDF changes at ${baseUrl}`);
    };

    const scheduleRegeneration = (filePath) => {
        pendingFiles.add(filePath);
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const changedFiles = [...pendingFiles];
            pendingFiles = new Set();
            generationQueue = generationQueue
                .then(() => regenerate(changedFiles))
                .catch((error) => console.error("PDF regeneration failed:", error));
        }, 500);
    };

    watcher.on("add", scheduleRegeneration);
    watcher.on("change", scheduleRegeneration);
    watcher.on("unlink", scheduleRegeneration);

    await generate(profiles);
    console.log(`PDF watch mode is ready at ${baseUrl}`);

    await new Promise((resolve) => {
        process.once("SIGINT", resolve);
        process.once("SIGTERM", resolve);
    });

    clearTimeout(debounceTimer);
    await watcher.close();
    await generationQueue;
};

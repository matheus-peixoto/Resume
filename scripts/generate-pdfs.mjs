import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { chromium } from "playwright";
import { discoverResumes } from "./discover-resumes.mjs";
import {
    startDevelopmentServer,
    stopDevelopmentServer,
} from "./pdf/development-server.mjs";
import {
    generateProfiles,
    synchronizeOutputDirectory,
} from "./pdf/pdf-generator.mjs";
import { watchPdfSources } from "./pdf/pdf-watcher.mjs";

const readArgument = (name, fallback) => {
    const index = process.argv.indexOf(name);
    return index === -1 ? fallback : process.argv[index + 1];
};

const watchMode = process.argv.includes("--watch");
const baseUrl = readArgument("--base-url", "http://127.0.0.1:4173");
const outputDirectory = path.resolve(
    readArgument("--output-dir", watchMode ? "public/pdfs" : "output/pdf"),
);
const manifestPath = path.resolve("src/data/pdf-resume-manifest.generated.json");
const maximumFileSize = 2.5 * 1024 * 1024;

const loadProfiles = async () => {
    await discoverResumes();
    const profiles = JSON.parse(await readFile(manifestPath, "utf8"));

    if (profiles.length === 0) {
        throw new Error("No PDF resume variants were discovered.");
    }

    return profiles;
};

const withPdfRuntime = async (profiles, task) => {
    const server = await startDevelopmentServer({
        baseUrl,
        port: new URL(baseUrl).port || "4173",
        readinessRoute: profiles[0].route,
    });
    const browser = await chromium.launch({ headless: true });

    try {
        await task(browser);
    } finally {
        await browser.close();
        stopDevelopmentServer(server);
    }
};

const createGenerateProfiles = (browser, strict) => (profiles) => generateProfiles({
    baseUrl,
    browser,
    maximumFileSize,
    outputDirectory,
    strict,
}, profiles);

const runOnce = async () => {
    const profiles = await loadProfiles();
    await synchronizeOutputDirectory(outputDirectory, profiles);
    await withPdfRuntime(profiles, async (browser) => {
        await createGenerateProfiles(browser, true)(profiles);
    });
};

const runWatchMode = async () => {
    const profiles = await loadProfiles();
    await synchronizeOutputDirectory(outputDirectory, profiles);
    await withPdfRuntime(profiles, async (browser) => {
        await watchPdfSources({
            baseUrl,
            generate: createGenerateProfiles(browser, false),
            initialProfiles: profiles,
            loadProfiles,
            synchronizeOutput: (updatedProfiles) => synchronizeOutputDirectory(
                outputDirectory,
                updatedProfiles,
            ),
        });
    });
};

(watchMode ? runWatchMode() : runOnce()).catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

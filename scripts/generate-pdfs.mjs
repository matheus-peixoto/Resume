import chokidar from "chokidar";
import { spawn, spawnSync } from "node:child_process";
import { mkdir, readFile, readdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { chromium } from "playwright";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import { discoverResumes } from "./discover-resumes.mjs";

const readArgument = (name, fallback) => {
    const index = process.argv.indexOf(name);
    return index === -1 ? fallback : process.argv[index + 1];
};

const watchMode = process.argv.includes("--watch");
const strictValidation = !watchMode;
const baseUrl = readArgument("--base-url", "http://127.0.0.1:4173");
const outputDirectory = path.resolve(
    readArgument("--output-dir", watchMode ? "public/pdfs" : "output/pdf"),
);
const manifestPath = path.resolve("src/data/pdf-resume-manifest.generated.json");
const maximumFileSize = 2.5 * 1024 * 1024;
const serverPort = new URL(baseUrl).port || "4173";

const loadProfiles = async () => {
    await discoverResumes();
    return JSON.parse(await readFile(manifestPath, "utf8"));
};

const synchronizeOutputDirectory = async (profiles) => {
    await mkdir(outputDirectory, { recursive: true });
    const expectedFiles = new Set(profiles.map((profile) => profile.fileName));
    const existingFiles = await readdir(outputDirectory);

    await Promise.all(existingFiles
        .filter((fileName) => fileName.toLowerCase().endsWith(".pdf") && !expectedFiles.has(fileName))
        .map((fileName) => unlink(path.join(outputDirectory, fileName))));
};

const probeRoute = async (route) => {
    try {
        const response = await fetch(`${baseUrl}${route}`);
        return {
            reachable: true,
            ok: response.ok,
            status: response.status,
        };
    } catch {
        return {
            reachable: false,
            ok: false,
            status: null,
        };
    }
};

const waitForServer = async (route, timeoutMs = 60_000) => {
    const deadline = Date.now() + timeoutMs;

    while (Date.now() < deadline) {
        const result = await probeRoute(route);
        if (result.ok) {
            return;
        }

        if (result.reachable && result.status === 404) {
            throw new Error(
                `The PDF route ${baseUrl}${route} returned HTTP 404. Check the Next.js base path configuration.`,
            );
        }

        await new Promise((resolve) => setTimeout(resolve, 500));
    }

    throw new Error(`The resume site did not become available at ${baseUrl}.`);
};

const stopDevelopmentServer = (child) => {
    if (!child?.pid) {
        return;
    }

    if (process.platform === "win32") {
        spawnSync("taskkill", ["/pid", String(child.pid), "/T", "/F"], { stdio: "ignore" });
        return;
    }

    child.kill("SIGTERM");
};

const startDevelopmentServer = async (readinessRoute) => {
    if ((await probeRoute(readinessRoute)).ok) {
        return null;
    }

    const child = spawn(process.execPath, ["node_modules/next/dist/bin/next", "dev", "-p", serverPort], {
        cwd: process.cwd(),
        env: {
            ...process.env,
            NEXT_DIST_DIR: ".next-pdf",
        },
        stdio: "inherit",
    });

    try {
        await waitForServer(readinessRoute);
        return child;
    } catch (error) {
        stopDevelopmentServer(child);
        throw error;
    }
};

const normalizeText = (value) => value.replace(/\s+/g, " ").trim();

const inspectPdf = async (buffer) => {
    const document = await getDocument({
        data: new Uint8Array(buffer),
        isEvalSupported: false,
        useSystemFonts: true,
    }).promise;
    const pageTexts = [];

    for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
        const page = await document.getPage(pageNumber);
        const content = await page.getTextContent();
        pageTexts.push(content.items.map((item) => ("str" in item ? item.str : "")).join(" "));
    }

    return {
        pageCount: document.numPages,
        text: normalizeText(pageTexts.join("\n")),
    };
};

const generateProfile = async (browser, profile, { strict }) => {
    const page = await browser.newPage();

    try {
        const response = await page.goto(`${baseUrl}${profile.route}`, { waitUntil: "networkidle" });

        if (!response?.ok()) {
            throw new Error(`Unable to load ${profile.route}: HTTP ${response?.status() ?? "unknown"}.`);
        }

        await page.evaluate(() => document.fonts.ready);
        await page.addStyleTag({ content: "nextjs-portal { display: none !important; }" });

        const requiredText = await page.locator("h1, h2").allTextContents();
        const buffer = await page.pdf({
            format: "A4",
            preferCSSPageSize: true,
            printBackground: true,
            tagged: true,
            outline: true,
        });
        const inspection = await inspectPdf(buffer);
        const issues = [];

        if (inspection.pageCount !== profile.pages) {
            issues.push(`expected ${profile.pages} page(s), generated ${inspection.pageCount}`);
        }

        if (buffer.length > maximumFileSize) {
            issues.push("file is larger than 2.5 MB");
        }

        for (const text of requiredText.map(normalizeText).filter(Boolean)) {
            if (!inspection.text.includes(text)) {
                issues.push(`missing extractable heading: ${text}`);
            }
        }

        if (!strict || issues.length === 0) {
            await writeFile(path.join(outputDirectory, profile.fileName), buffer);
        }

        const summary = `${profile.fileName}: ${inspection.pageCount} page(s), ${Math.ceil(buffer.length / 1024)} KB`;
        if (issues.length > 0) {
            const message = `${summary} - ${issues.join("; ")}`;
            if (strict) {
                throw new Error(message);
            }
            console.warn(`Warning: ${message}`);
            return;
        }

        console.log(`Generated ${summary}`);
    } finally {
        await page.close();
    }
};

const generateProfiles = async (browser, profiles, options) => {
    for (const profile of profiles) {
        await generateProfile(browser, profile, options);
    }
};

const runOnce = async () => {
    const profiles = await loadProfiles();
    if (profiles.length === 0) {
        throw new Error("No PDF resume variants were discovered.");
    }

    await synchronizeOutputDirectory(profiles);
    const server = await startDevelopmentServer(profiles[0].route);
    const browser = await chromium.launch({ headless: true });

    try {
        await generateProfiles(browser, profiles, { strict: strictValidation });
    } finally {
        await browser.close();
        stopDevelopmentServer(server);
    }
};

const runWatchMode = async () => {
    let profiles = await loadProfiles();
    if (profiles.length === 0) {
        throw new Error("No PDF resume variants were discovered.");
    }

    await synchronizeOutputDirectory(profiles);
    const server = await startDevelopmentServer(profiles[0].route);
    const browser = await chromium.launch({ headless: true });
    const watcher = chokidar.watch([
        "src/data",
        "src/app/globals.css",
        "src/app/sections",
        "src/components",
    ], {
        cwd: process.cwd(),
        ignoreInitial: true,
        ignored: (filePath) => /src[\\/]data[\\/].*\.generated\.(?:ts|json)$/.test(filePath),
    });
    let timer = null;
    let pendingFiles = new Set();
    let generationQueue = Promise.resolve();

    const regenerate = async (changedFiles) => {
        const previousProfiles = profiles;
        profiles = await loadProfiles();
        await synchronizeOutputDirectory(profiles);
        const normalizedFiles = changedFiles.map((file) => path.relative(
            process.cwd(),
            path.resolve(file),
        ).split(path.sep).join("/"));
        const matchedProfiles = profiles.filter((profile) => normalizedFiles.includes(profile.sourceFile));
        const onlyNumberedResumeFilesChanged = matchedProfiles.length > 0
            && matchedProfiles.length === normalizedFiles.length
            && profiles.length === previousProfiles.length;
        const targets = onlyNumberedResumeFilesChanged ? matchedProfiles : profiles;

        await new Promise((resolve) => setTimeout(resolve, 350));
        await generateProfiles(browser, targets, { strict: false });
        console.log(`Watching for PDF changes at ${baseUrl}`);
    };

    const scheduleRegeneration = (filePath) => {
        pendingFiles.add(filePath);
        clearTimeout(timer);
        timer = setTimeout(() => {
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

    await generateProfiles(browser, profiles, { strict: false });
    console.log(`PDF watch mode is ready at ${baseUrl}`);

    const shutdown = async () => {
        clearTimeout(timer);
        await watcher.close();
        await generationQueue;
        await browser.close();
        stopDevelopmentServer(server);
    };

    await new Promise((resolve) => {
        process.once("SIGINT", resolve);
        process.once("SIGTERM", resolve);
    });
    await shutdown();
};

(watchMode ? runWatchMode() : runOnce()).catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

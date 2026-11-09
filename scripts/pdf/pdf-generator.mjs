import { mkdir, readdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

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

const findValidationIssues = ({ buffer, inspection, maximumFileSize, profile, requiredText }) => {
    const issues = [];
    const normalizedPdfText = inspection.text.toLocaleLowerCase();

    if (inspection.pageCount !== profile.pages) {
        issues.push(`expected ${profile.pages} page(s), generated ${inspection.pageCount}`);
    }

    if (buffer.length > maximumFileSize) {
        issues.push(`file is larger than ${maximumFileSize / 1024 / 1024} MB`);
    }

    for (const text of requiredText.map(normalizeText).filter(Boolean)) {
        if (!normalizedPdfText.includes(text.toLocaleLowerCase())) {
            issues.push(`missing extractable heading: ${text}`);
        }
    }

    return issues;
};

export const synchronizeOutputDirectory = async (outputDirectory, profiles) => {
    await mkdir(outputDirectory, { recursive: true });
    const expectedFiles = new Set(profiles.map(({ fileName }) => fileName));
    const existingFiles = await readdir(outputDirectory);
    const obsoletePdfs = existingFiles.filter(
        (fileName) => fileName.toLowerCase().endsWith(".pdf") && !expectedFiles.has(fileName),
    );

    await Promise.all(obsoletePdfs.map((fileName) => unlink(path.join(outputDirectory, fileName))));
};

const generateProfile = async ({
    baseUrl,
    browser,
    maximumFileSize,
    outputDirectory,
    profile,
    strict,
}) => {
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
            outline: true,
            preferCSSPageSize: true,
            printBackground: true,
            tagged: true,
        });
        const inspection = await inspectPdf(buffer);
        const issues = findValidationIssues({
            buffer,
            inspection,
            maximumFileSize,
            profile,
            requiredText,
        });
        const summary = `${profile.fileName}: ${inspection.pageCount} page(s), ${Math.ceil(buffer.length / 1024)} KB`;

        if (strict && issues.length > 0) {
            throw new Error(`${summary} - ${issues.join("; ")}`);
        }

        await writeFile(path.join(outputDirectory, profile.fileName), buffer);

        if (issues.length > 0) {
            console.warn(`Warning: ${summary} - ${issues.join("; ")}`);
        } else {
            console.log(`Generated ${summary}`);
        }
    } finally {
        await page.close();
    }
};

export const generateProfiles = async (options, profiles) => {
    for (const profile of profiles) {
        await generateProfile({ ...options, profile });
    }
};

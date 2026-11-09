import { rm } from "node:fs/promises";
import path from "node:path";
import { setTimeout } from "node:timers/promises";

const buildCache = path.resolve(".next");
const workspace = path.resolve(".");

if (path.dirname(buildCache) !== workspace || path.basename(buildCache) !== ".next") {
    throw new Error(`Refusing to remove unexpected build cache path: ${buildCache}`);
}

await rm(buildCache, {
    force: true,
    maxRetries: 5,
    recursive: true,
    retryDelay: 200,
});

// Windows can briefly keep handles to files that were just removed. Let those
// handles settle before Next.js starts recreating the same directory tree.
await setTimeout(1_500);

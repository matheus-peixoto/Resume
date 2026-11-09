import { spawn, spawnSync } from "node:child_process";
import process from "node:process";

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const probeRoute = async (baseUrl, route) => {
    try {
        const response = await fetch(`${baseUrl}${route}`);
        return { reachable: true, ok: response.ok, status: response.status };
    } catch {
        return { reachable: false, ok: false, status: null };
    }
};

const waitForRoute = async (baseUrl, route, timeoutMs = 60_000) => {
    const deadline = Date.now() + timeoutMs;

    while (Date.now() < deadline) {
        const result = await probeRoute(baseUrl, route);

        if (result.ok) {
            return;
        }

        if (result.reachable && result.status === 404) {
            throw new Error(
                `The PDF route ${baseUrl}${route} returned HTTP 404. Check the Next.js base path configuration.`,
            );
        }

        await delay(500);
    }

    throw new Error(`The resume site did not become available at ${baseUrl}.`);
};

export const stopDevelopmentServer = (server) => {
    if (!server?.pid) {
        return;
    }

    if (process.platform === "win32") {
        spawnSync("taskkill", ["/pid", String(server.pid), "/T", "/F"], { stdio: "ignore" });
        return;
    }

    server.kill("SIGTERM");
};

export const startDevelopmentServer = async ({ baseUrl, port, readinessRoute }) => {
    if ((await probeRoute(baseUrl, readinessRoute)).ok) {
        return null;
    }

    const server = spawn(
        process.execPath,
        ["node_modules/next/dist/bin/next", "dev", "-p", port],
        {
            cwd: process.cwd(),
            env: { ...process.env, NEXT_DIST_DIR: ".next-pdf" },
            stdio: "inherit",
        },
    );

    try {
        await waitForRoute(baseUrl, readinessRoute);
        return server;
    } catch (error) {
        stopDevelopmentServer(server);
        throw error;
    }
};

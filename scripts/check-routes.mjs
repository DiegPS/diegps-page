import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";

const root = path.resolve(import.meta.dirname, "..");
let origin = process.env.TEST_URL || "http://localhost:3099";
let reuse = Boolean(process.env.TEST_URL);
if (!reuse) {
  try {
    const lock = JSON.parse(await fs.readFile(path.join(root, ".vinext/dev/lock.json"), "utf8"));
    if (
      path.resolve(lock.cwd).toLowerCase() === root.toLowerCase() &&
      Number.isInteger(lock.port) &&
      lock.port > 0 &&
      lock.port < 65536
    ) {
      const localOrigin = `http://localhost:${lock.port}`;
      const response = await fetch(localOrigin, { signal: AbortSignal.timeout(2000) });
      if (response.ok && (await response.text()).includes("Diego Pahua Silvan")) {
        origin = localOrigin;
        reuse = true;
      }
    }
  } catch {
    /* No active project preview; start a temporary one below. */
  }
}
let server;
let output = "";
try {
  if (reuse) {
    console.log(`Checking existing preview at ${origin}`);
  } else {
    server = spawn(
      process.execPath,
      [
        path.join(root, "node_modules/vite/bin/vite.js"),
        "dev",
        "--host",
        "127.0.0.1",
        "--port",
        "3099",
      ],
      {
        cwd: root,
        stdio: "pipe",
        env: { ...process.env, SITE_URL: origin },
      },
    );
    server.stdout.on("data", (data) => {
      output += data.toString();
    });
    server.stderr.on("data", (data) => {
      output += data.toString();
    });
    let ready = false;
    for (let attempt = 0; attempt < 60; attempt++) {
      if (server.exitCode !== null) throw new Error(`Preview exited unexpectedly.\n${output}`);
      try {
        const response = await fetch(origin, { signal: AbortSignal.timeout(2000) });
        if (response.ok) {
          ready = true;
          break;
        }
      } catch {
        /* The preview is starting. */
      }
      await delay(500);
    }
    if (!ready) throw new Error(`Preview did not become ready.\n${output}`);
  }
  const checks = spawn(process.execPath, ["--test", "scripts/smoke.test.mjs"], {
    cwd: root,
    env: { ...process.env, TEST_URL: origin },
    stdio: "inherit",
  });
  process.exitCode = await new Promise((resolve, reject) => {
    checks.on("exit", (code) => resolve(code ?? 1));
    checks.on("error", reject);
  });
} catch (error) {
  console.error(error);
  process.exitCode = 1;
} finally {
  server?.kill();
}

// Capacitor loads a single entry file from the app bundle. The static build
// emits a SPA shell as _shell.html, so copy it to index.html.
import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const dir = resolve(process.cwd(), "dist/client");
const shell = resolve(dir, "_shell.html");
const index = resolve(dir, "index.html");

if (!existsSync(shell)) {
  console.error("Missing dist/client/_shell.html — run `npm run build:mobile`.");
  process.exit(1);
}

copyFileSync(shell, index);
console.log("Wrote dist/client/index.html for Capacitor.");

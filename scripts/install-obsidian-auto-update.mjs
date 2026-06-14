#!/usr/bin/env node
/* eslint-disable no-console */
import { spawnSync } from "node:child_process";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const label = "com.minsing-blog.obsidian-auto-update";
const launchAgentsDir = path.join(os.homedir(), "Library", "LaunchAgents");
const plistPath = path.join(launchAgentsDir, `${label}.plist`);
const nodeBinDir = path.dirname(process.execPath);
const args = parseArgs(process.argv.slice(2));

if (args.help) {
  printHelp();
  process.exit(0);
}

if (args.uninstall) {
  unloadPlist();
  await fs.rm(plistPath, { force: true });
  console.log(`Removed ${plistPath}`);
  process.exit(0);
}

await fs.mkdir(launchAgentsDir, { recursive: true });

const command = [
  `cd ${shellQuote(repoRoot)}`,
  `export PATH=${shellQuote(`${nodeBinDir}:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin`)}`,
  args.noDeploy ? "pnpm obsidian:watch" : "pnpm obsidian:watch:deploy",
].join(" && ");

const plist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>${label}</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/zsh</string>
    <string>-lc</string>
    <string>${escapeXml(command)}</string>
  </array>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>StandardOutPath</key>
  <string>/tmp/${label}.out.log</string>
  <key>StandardErrorPath</key>
  <string>/tmp/${label}.err.log</string>
  <key>WorkingDirectory</key>
  <string>${escapeXml(repoRoot)}</string>
</dict>
</plist>
`;

await fs.writeFile(plistPath, plist);
unloadPlist();
run("launchctl", ["load", plistPath], { allowFailure: false });
console.log(`Installed ${plistPath}`);
console.log(`Logs: /tmp/${label}.out.log and /tmp/${label}.err.log`);

function unloadPlist() {
  run("launchctl", ["unload", plistPath], { allowFailure: true });
}

function run(command, commandArgs, options) {
  const result = spawnSync(command, commandArgs, {
    cwd: repoRoot,
    stdio: options.allowFailure ? "ignore" : "inherit",
  });
  if (!options.allowFailure && result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function parseArgs(argv) {
  const parsed = { help: false, noDeploy: false, uninstall: false };
  for (const arg of argv) {
    if (arg === "--") continue;
    if (arg === "--help" || arg === "-h") parsed.help = true;
    else if (arg === "--no-deploy") parsed.noDeploy = true;
    else if (arg === "--uninstall") parsed.uninstall = true;
    else fail(`Unknown argument: ${arg}`);
  }
  return parsed;
}

function printHelp() {
  console.log(`Usage:
  pnpm obsidian:install-auto
  pnpm obsidian:install-auto -- --no-deploy
  pnpm obsidian:install-auto -- --uninstall

Installs a macOS LaunchAgent that runs the Obsidian watcher after login.
Default mode deploys to Cloudflare Pages using the local Wrangler login.`);
}

function shellQuote(value) {
  return `'${String(value).replace(/'/g, "'\\''")}'`;
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

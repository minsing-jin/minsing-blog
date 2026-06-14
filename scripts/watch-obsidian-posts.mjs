#!/usr/bin/env node
/* eslint-disable no-console */
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");

loadDotEnv(path.join(repoRoot, ".env"));

const args = parseArgs(process.argv.slice(2));
const sourceDir = resolveSourceDir();
const intervalMs = Number(process.env.OBSIDIAN_WATCH_INTERVAL_MS ?? 5000);
const debounceMs = Number(process.env.OBSIDIAN_WATCH_DEBOUNCE_MS ?? 3000);

if (args.help) {
  printHelp();
  process.exit(0);
}

if (!sourceDir) {
  fail("Missing OBSIDIAN_POSTS_DIR. Set it in .env before watching.");
}

await assertReadableDirectory(sourceDir);

console.log(`Watching Obsidian posts: ${sourceDir}`);
console.log(
  args.deploy
    ? "Mode: sync, build, commit, push, deploy"
    : "Mode: sync, build, commit, push"
);

let lastSignature = await getDirectorySignature(sourceDir);
let timer = null;
let running = false;
let pending = false;

setInterval(async () => {
  const nextSignature = await getDirectorySignature(sourceDir);
  if (nextSignature === lastSignature) return;
  lastSignature = nextSignature;
  schedulePublish();
}, intervalMs);

function schedulePublish() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    timer = null;
    runPublish();
  }, debounceMs);
}

function runPublish() {
  if (running) {
    pending = true;
    return;
  }

  running = true;
  const result = spawnSync(
    "node",
    [
      path.join("scripts", "publish-obsidian-posts.mjs"),
      ...(args.deploy ? ["--deploy"] : []),
    ],
    {
      cwd: repoRoot,
      env: process.env,
      stdio: "inherit",
    }
  );
  running = false;

  if (result.error) console.error(result.error.message);
  if (result.status && result.status !== 0) {
    console.error(`Obsidian publish failed with exit code ${result.status}.`);
  }

  if (pending) {
    pending = false;
    schedulePublish();
  }
}

async function getDirectorySignature(dir) {
  const files = await collectMarkdownFiles(dir);
  const parts = [];

  for (const filePath of files) {
    const stat = await fs.stat(filePath);
    parts.push(`${path.relative(dir, filePath)}:${stat.size}:${stat.mtimeMs}`);
  }

  return parts.join("\n");
}

async function collectMarkdownFiles(dir) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error?.code === "EACCES" || error?.code === "EPERM") {
      fail(
        `Obsidian source directory is not readable: ${dir}\nGrant this process Full Disk Access or use the local obsidian-publish folder.`
      );
    }
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".") || entry.name === ".obsidian") continue;
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(entryPath)));
    } else if (/\.(md|mdx)$/i.test(entry.name)) {
      files.push(entryPath);
    }
  }

  return files.sort((a, b) => a.localeCompare(b));
}

async function assertReadableDirectory(dir) {
  try {
    const stat = await fs.stat(dir);
    if (!stat.isDirectory()) fail(`Not a directory: ${dir}`);
    await fs.access(dir);
  } catch (error) {
    if (error?.code === "ENOENT") {
      fail(`Obsidian source directory does not exist: ${dir}`);
    }
    if (error?.code === "EACCES" || error?.code === "EPERM") {
      fail(
        `Obsidian source directory is not readable: ${dir}\nGrant this process Full Disk Access or use the local obsidian-publish folder.`
      );
    }
    throw error;
  }
}

function resolveSourceDir() {
  const direct = process.env.OBSIDIAN_POSTS_DIR;
  if (direct) return path.resolve(repoRoot, direct);

  const vaultDir = process.env.OBSIDIAN_VAULT_DIR;
  if (!vaultDir) return null;

  return path.resolve(
    repoRoot,
    vaultDir,
    process.env.OBSIDIAN_POSTS_SUBDIR ?? "Blog"
  );
}

function parseArgs(argv) {
  const parsed = { deploy: false, help: false };
  for (const arg of argv) {
    if (arg === "--") continue;
    if (arg === "--deploy") parsed.deploy = true;
    else if (arg === "--help" || arg === "-h") parsed.help = true;
    else fail(`Unknown argument: ${arg}`);
  }
  return parsed;
}

function printHelp() {
  console.log(`Usage:
  pnpm obsidian:watch
  pnpm obsidian:watch:deploy

Watches OBSIDIAN_POSTS_DIR for Markdown changes and runs the publish flow after
a debounce. Use obsidian-publish/ as an Obsidian vault when macOS blocks access
to Documents.`);
}

function loadDotEnv(envPath) {
  if (!existsSync(envPath)) return;

  const content = readFileSync(envPath, "utf8").replace(/\r\n/g, "\n");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match) continue;
    const [, key, rawValue] = match;
    if (process.env[key] != null) continue;
    process.env[key] = stripQuotes(rawValue.trim());
  }
}

function stripQuotes(value) {
  return String(value).replace(/^['"]|['"]$/g, "");
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

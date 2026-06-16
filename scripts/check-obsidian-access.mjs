#!/usr/bin/env node
/* eslint-disable no-console */
import { existsSync, readFileSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");

loadDotEnv(path.join(repoRoot, ".env"));

const sourceDir = resolveSourceDir();

if (!sourceDir) {
  fail(
    "Missing Obsidian source. Set OBSIDIAN_POSTS_DIR or OBSIDIAN_VAULT_DIR in .env."
  );
}

console.log(`Obsidian source: ${sourceDir}`);

try {
  const stat = await fs.stat(sourceDir);
  if (!stat.isDirectory()) fail(`Source is not a directory: ${sourceDir}`);
  await fs.access(sourceDir);
  const files = await collectMarkdownFiles(sourceDir);
  console.log(`Readable: yes`);
  console.log(`Markdown files: ${files.length}`);
  if (files.length > 0) {
    console.log("First files:");
    for (const file of files.slice(0, 5)) {
      console.log(`- ${path.relative(sourceDir, file)}`);
    }
  }
} catch (error) {
  if (error?.code === "EACCES" || error?.code === "EPERM") {
    fail(
      [
        `Readable: no (${error.code})`,
        "Fix on macOS:",
        "1. Open System Settings > Privacy & Security > Full Disk Access.",
        "2. Enable the terminal app running Codex/Hermes.",
        "3. If Hermes runs as a separate app/service, enable that process too.",
        "4. Restart the terminal/Hermes process and rerun pnpm obsidian:doctor.",
      ].join("\n")
    );
  }
  throw error;
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

async function collectMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
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

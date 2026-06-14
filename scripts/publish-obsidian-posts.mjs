#!/usr/bin/env node
/* eslint-disable no-console */
import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");

loadDotEnv(path.join(repoRoot, ".env"));

const args = parseArgs(process.argv.slice(2));
const outputDir = path.resolve(
  repoRoot,
  process.env.OBSIDIAN_OUTPUT_DIR ?? "src/content/posts"
);
const outputPathspec = path.relative(repoRoot, outputDir);
const commitMessage =
  args.message ??
  process.env.OBSIDIAN_COMMIT_MESSAGE ??
  "Publish Obsidian posts";

if (args.help) {
  printHelp();
  process.exit(0);
}

run("node", [
  path.join("scripts", "sync-obsidian-posts.mjs"),
  ...(args.dryRun ? ["--dry-run"] : []),
]);

if (args.dryRun) process.exit(0);

const postChanges = gitOutput(["status", "--short", "--", outputPathspec]);
if (!postChanges) {
  console.log("No Obsidian post changes to publish.");
  process.exit(0);
}

console.log(postChanges);

if (!args.noBuild) {
  run("pnpm", ["build"]);
}

run("git", ["add", outputPathspec]);

const staged = gitOutput(["diff", "--cached", "--name-only", "--", outputPathspec]);
if (!staged) {
  console.log("No staged Obsidian post changes after sync.");
  process.exit(0);
}

run("git", ["commit", "-m", commitMessage, "--", outputPathspec]);

if (!args.noPush) {
  run("git", ["push", "origin", "main"]);
}

if (args.deploy) {
  const head = gitOutput(["rev-parse", "HEAD"]);
  run("npx", [
    "-p",
    "wrangler@latest",
    "wrangler",
    "pages",
    "deploy",
    "dist",
    "--project-name=minsing-blog",
    "--branch=main",
    `--commit-hash=${head}`,
    `--commit-message=${commitMessage}`,
  ]);
}

function parseArgs(argv) {
  const parsed = {
    deploy: false,
    dryRun: false,
    help: false,
    message: undefined,
    noBuild: false,
    noPush: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--") continue;
    if (arg === "--deploy") parsed.deploy = true;
    else if (arg === "--dry-run") parsed.dryRun = true;
    else if (arg === "--help" || arg === "-h") parsed.help = true;
    else if (arg === "--message") parsed.message = argv[++i];
    else if (arg === "--no-build") parsed.noBuild = true;
    else if (arg === "--no-push") parsed.noPush = true;
    else fail(`Unknown argument: ${arg}`);
  }

  return parsed;
}

function printHelp() {
  console.log(`Usage:
  pnpm obsidian:publish
  pnpm obsidian:publish:deploy
  pnpm obsidian:publish -- --dry-run
  pnpm obsidian:publish -- --message "Publish new note"

Flow:
  1. Sync publishable Obsidian notes into src/content/posts
  2. Build the site
  3. Commit changed posts
  4. Push main
  5. Optionally deploy with Wrangler when --deploy is set`);
}

function run(command, commandArgs) {
  const result = spawnSync(command, commandArgs, {
    cwd: repoRoot,
    env: process.env,
    stdio: "inherit",
  });

  if (result.error) fail(result.error.message);
  if (result.status !== 0) process.exit(result.status ?? 1);
}

function gitOutput(commandArgs) {
  return execFileSync("git", commandArgs, {
    cwd: repoRoot,
    encoding: "utf8",
    env: process.env,
  }).trim();
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

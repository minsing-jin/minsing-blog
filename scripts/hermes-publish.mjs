#!/usr/bin/env node
/* eslint-disable no-console */
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import kebabcase from "lodash.kebabcase";
import slugify from "slugify";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");

loadDotEnv(path.join(repoRoot, ".env"));

const args = parseArgs(process.argv.slice(2));

if (args.help || args.command === "help") {
  printHelp();
  process.exit(0);
}

const sourceDir = resolveSourceDir();
if (!sourceDir) {
  fail(
    "Missing Obsidian publish inbox. Set OBSIDIAN_POSTS_DIR in .env, or set OBSIDIAN_VAULT_DIR."
  );
}

await fs.mkdir(sourceDir, { recursive: true });

if (args.command === "list") {
  await listNotes();
} else if (args.command === "draft") {
  await createNote({ publish: "pending", draft: true });
} else if (args.command === "publish") {
  const notePath = await createNote({ publish: "true", draft: false });
  await runPublish({ notePath });
} else if (args.command === "approve") {
  const notePath = await approveNote();
  await runPublish({ notePath });
} else {
  fail(`Unknown command: ${args.command}`);
}

function parseArgs(argv) {
  const parsed = {
    body: undefined,
    bodyFile: undefined,
    command: "help",
    concepts: [],
    deploy: false,
    draft: undefined,
    file: undefined,
    force: false,
    help: false,
    message: undefined,
    noBuild: false,
    noPush: false,
    pubDatetime: undefined,
    related: [],
    status: undefined,
    stdin: false,
    summary: undefined,
    tags: [],
    title: undefined,
  };

  let index = 0;
  if (argv[0] && !argv[0].startsWith("-")) {
    parsed.command = argv[0];
    index = 1;
  }

  for (let i = index; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--") continue;
    if (arg === "--help" || arg === "-h") parsed.help = true;
    else if (arg === "--approve") {
      parsed.command = "approve";
      parsed.file = argv[++i];
    } else if (arg === "--deploy") parsed.deploy = true;
    else if (arg === "--force") parsed.force = true;
    else if (arg === "--from" || arg === "--file") parsed.file = argv[++i];
    else if (arg === "--title") parsed.title = argv[++i];
    else if (arg === "--body") parsed.body = argv[++i];
    else if (arg === "--body-file") parsed.bodyFile = argv[++i];
    else if (arg === "--stdin") parsed.stdin = true;
    else if (arg === "--summary") parsed.summary = argv[++i];
    else if (arg === "--status") parsed.status = argv[++i];
    else if (arg === "--pubDatetime") parsed.pubDatetime = argv[++i];
    else if (arg === "--tags") parsed.tags.push(...parseList(argv[++i]));
    else if (arg === "--concepts") parsed.concepts.push(...parseList(argv[++i]));
    else if (arg === "--related") parsed.related.push(...parseList(argv[++i]));
    else if (arg === "--message") parsed.message = argv[++i];
    else if (arg === "--no-build") parsed.noBuild = true;
    else if (arg === "--no-push") parsed.noPush = true;
    else if (!arg.startsWith("-") && parsed.command === "approve" && !parsed.file) {
      parsed.file = arg;
    } else {
      fail(`Unknown argument: ${arg}`);
    }
  }

  return parsed;
}

function printHelp() {
  console.log(`Usage:
  pnpm hermes:list
  pnpm hermes:draft -- --title "글 제목" --body "본문"
  pnpm hermes:approve -- --file obsidian-publish/draft.md --deploy
  pnpm hermes:publish -- --title "글 제목" --body "본문" --deploy

Commands:
  list      Show notes that are pending, draft, or publishable
  draft     Create a publish: pending draft in the Obsidian publish inbox
  approve   Flip an inbox note to publish: true and run the publish pipeline
  publish   Create a publish: true note and run the publish pipeline

Safety:
  Hermes can only create or approve Markdown files inside OBSIDIAN_POSTS_DIR.
  Raw inbox notes stay ignored by git; only synced blog posts are committed.`);
}

async function listNotes() {
  const files = await collectMarkdownFiles(sourceDir);
  if (files.length === 0) {
    console.log(`No Markdown notes in ${relative(sourceDir)}.`);
    return;
  }

  for (const file of files) {
    const raw = await fs.readFile(file, "utf8");
    const parsed = splitFrontmatter(raw);
    const frontmatter = Object.fromEntries(
      parseFrontmatterBlocks(parsed.frontmatter).map(block => [block.key, block])
    );
    const title =
      getStringValue(frontmatter.title?.value) ||
      path.basename(file, path.extname(file));
    const publish = frontmatter.publish?.value ?? "missing";
    const draft = frontmatter.draft?.value ?? "missing";
    const status = frontmatter.status?.value ?? "missing";
    console.log(
      `${relative(file)} | title=${title} | publish=${publish} | draft=${draft} | status=${status}`
    );
  }
}

async function createNote({ publish, draft }) {
  if (!args.title) fail("Missing --title.");
  const body = await readBody();
  if (!body.trim()) fail("Missing --body, --body-file, or --stdin content.");

  const fileName = args.file ?? `${slugifyStr(args.title)}.md`;
  const notePath = resolveSafeNotePath(fileName);
  if (existsSync(notePath) && !args.force) {
    fail(
      `Refusing to overwrite ${relative(notePath)}. Pass --force or choose another --file.`
    );
  }

  const summary = args.summary || makeDescription(body);
  const frontmatterLines = [
    `publish: ${publish}`,
    `draft: ${draft ? "true" : "false"}`,
    `title: ${toYamlString(args.title)}`,
    `pubDatetime: ${args.pubDatetime ?? new Date().toISOString()}`,
    `description: ${toYamlString(summary)}`,
    `status: ${toYamlString(args.status ?? (draft ? "pending" : "published"))}`,
  ];

  const tags = args.tags.length > 0 ? args.tags : ["hermes"];
  frontmatterLines.push(`tags: [${tags.map(toYamlString).join(", ")}]`);

  if (args.summary) frontmatterLines.push(`summary: ${toYamlString(args.summary)}`);
  if (args.concepts.length > 0) {
    frontmatterLines.push(
      `concepts: [${args.concepts.map(toYamlString).join(", ")}]`
    );
  }
  if (args.related.length > 0) {
    frontmatterLines.push(`related: [${args.related.map(toYamlString).join(", ")}]`);
  }

  await fs.mkdir(path.dirname(notePath), { recursive: true });
  await fs.writeFile(notePath, `---\n${frontmatterLines.join("\n")}\n---\n\n${body.trimEnd()}\n`);
  console.log(`wrote ${relative(notePath)}`);
  return notePath;
}

async function approveNote() {
  if (!args.file) fail("Missing --file for approve.");
  const notePath = resolveSafeNotePath(args.file);
  if (!existsSync(notePath)) fail(`Note does not exist: ${relative(notePath)}`);

  const raw = await fs.readFile(notePath, "utf8");
  const rendered = setFrontmatterValues(raw, {
    draft: "false",
    modDatetime: new Date().toISOString(),
    publish: "true",
    status: toYamlString(args.status ?? "published"),
  });

  await fs.writeFile(notePath, rendered);
  console.log(`approved ${relative(notePath)}`);
  return notePath;
}

async function runPublish({ notePath }) {
  const commandArgs = [path.join("scripts", "publish-obsidian-posts.mjs")];
  if (args.deploy) commandArgs.push("--deploy");
  if (args.noBuild) commandArgs.push("--no-build");
  if (args.noPush) commandArgs.push("--no-push");
  commandArgs.push(
    "--message",
    args.message ?? `Publish Hermes-approved note: ${path.basename(notePath)}`
  );

  const result = spawnSync("node", commandArgs, {
    cwd: repoRoot,
    env: process.env,
    stdio: "inherit",
  });

  if (result.error) fail(result.error.message);
  if (result.status !== 0) process.exit(result.status ?? 1);
}

async function readBody() {
  if (args.stdin) return readStdin();
  if (args.bodyFile) {
    return fs.readFile(path.resolve(repoRoot, args.bodyFile), "utf8");
  }
  return args.body ?? "";
}

async function readStdin() {
  let input = "";
  process.stdin.setEncoding("utf8");
  for await (const chunk of process.stdin) input += chunk;
  return input;
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

function resolveSafeNotePath(input) {
  const withExtension = /\.(md|mdx)$/i.test(input) ? input : `${input}.md`;
  const fromRepo = path.resolve(repoRoot, withExtension);
  const candidate = path.isAbsolute(withExtension)
    ? path.resolve(withExtension)
    : isInside(sourceDir, fromRepo)
      ? fromRepo
      : path.resolve(sourceDir, withExtension);
  const relativePath = path.relative(sourceDir, candidate);

  if (!isInside(sourceDir, candidate)) {
    fail(`Refusing path outside Obsidian publish inbox: ${input}`);
  }
  if (
    relativePath
      .split(path.sep)
      .filter(Boolean)
      .some(segment => segment.startsWith("."))
  ) {
    fail(`Refusing hidden Obsidian path: ${input}`);
  }

  return candidate;
}

function isInside(parent, child) {
  const relativePath = path.relative(parent, child);
  return (
    relativePath === "" ||
    (!relativePath.startsWith("..") && !path.isAbsolute(relativePath))
  );
}

function splitFrontmatter(raw) {
  const normalized = raw.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) {
    return { body: normalized, frontmatter: "" };
  }

  const end = normalized.indexOf("\n---", 4);
  if (end === -1) {
    return { body: normalized, frontmatter: "" };
  }

  return {
    body: normalized.slice(end + 4).replace(/^\n+/, ""),
    frontmatter: normalized.slice(4, end).trim(),
  };
}

function parseFrontmatterBlocks(frontmatter) {
  if (!frontmatter) return [];

  const blocks = [];
  const lines = frontmatter.split("\n");
  let current = null;

  for (const line of lines) {
    const match = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
    if (match) {
      current = { key: match[1], lines: [line], value: match[2].trim() };
      blocks.push(current);
      continue;
    }

    if (current) current.lines.push(line);
  }

  return blocks;
}

function setFrontmatterValues(raw, updates) {
  const parsed = splitFrontmatter(raw);
  const blocks = parseFrontmatterBlocks(parsed.frontmatter);
  const seen = new Set();
  const lines = [];

  for (const block of blocks) {
    if (Object.hasOwn(updates, block.key)) {
      lines.push(`${block.key}: ${updates[block.key]}`);
      seen.add(block.key);
    } else {
      lines.push(...block.lines);
    }
  }

  for (const [key, value] of Object.entries(updates)) {
    if (!seen.has(key)) lines.push(`${key}: ${value}`);
  }

  return `---\n${lines.join("\n")}\n---\n\n${parsed.body.trimStart()}`;
}

function parseList(raw) {
  return String(raw ?? "")
    .split(",")
    .map(item => stripQuotes(item).trim())
    .filter(Boolean);
}

function makeDescription(body) {
  const paragraph =
    body
      .split(/\n{2,}/)
      .map(block => block.trim())
      .find(block => block && !block.startsWith("#") && !block.startsWith("```")) ??
    "Hermes에서 승인된 공개 기록.";

  return stripMarkdown(paragraph).slice(0, 150);
}

function stripMarkdown(markdown) {
  return String(markdown)
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/[#>*_~\-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getStringValue(rawValue) {
  if (!rawValue) return "";
  return stripQuotes(rawValue).trim();
}

function toYamlString(value) {
  return JSON.stringify(value);
}

function stripQuotes(value) {
  return String(value).replace(/^['"]|['"]$/g, "");
}

function slugifyStr(value) {
  const normalized = String(value).trim();
  if (!normalized) return "untitled";
  if (/[^\x00-\x7F]/.test(normalized)) return kebabcase(normalized);
  return slugify(normalized, { lower: true, strict: true });
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

function relative(filePath) {
  return path.relative(repoRoot, filePath);
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

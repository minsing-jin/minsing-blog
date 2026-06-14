#!/usr/bin/env node
/* eslint-disable no-console */
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

if (args.help) {
  printHelp();
  process.exit(0);
}

const sourceDir = resolveSourceDir(args);
const outputDir = path.resolve(
  repoRoot,
  args.out ?? process.env.OBSIDIAN_OUTPUT_DIR ?? "src/content/posts"
);
const dryRun = args.dryRun || process.env.OBSIDIAN_DRY_RUN === "1";
const requirePublish = args.all
  ? false
  : process.env.OBSIDIAN_REQUIRE_PUBLISH !== "0";
const publishField = process.env.OBSIDIAN_PUBLISH_FIELD ?? "publish";
const publishValue = process.env.OBSIDIAN_PUBLISH_VALUE ?? "true";

if (!sourceDir) {
  fail(
    "Missing Obsidian source directory. Set OBSIDIAN_POSTS_DIR in .env, or pass --source /path/to/posts."
  );
}

await assertReadableDirectory(sourceDir);

const notes = await collectMarkdownFiles(sourceDir);
const seenOutputs = new Map();
const results = {
  scanned: notes.length,
  skippedUnpublished: 0,
  skippedDraft: 0,
  written: 0,
  unchanged: 0,
};

if (!dryRun) {
  await fs.mkdir(outputDir, { recursive: true });
}

for (const sourcePath of notes) {
  const raw = await fs.readFile(sourcePath, "utf8");
  const sourceStat = await fs.stat(sourcePath);
  const parsed = splitFrontmatter(raw);
  const blocks = parseFrontmatterBlocks(parsed.frontmatter);
  const frontmatter = Object.fromEntries(
    blocks.map(block => [block.key, block])
  );

  if (isDraft(frontmatter)) {
    results.skippedDraft += 1;
    continue;
  }

  if (
    requirePublish &&
    !matchesPublishValue(frontmatter[publishField]?.value, publishValue)
  ) {
    results.skippedUnpublished += 1;
    continue;
  }

  const outputName = getOutputName(sourcePath, sourceDir, frontmatter);
  const outputPath = path.join(outputDir, outputName);
  const previous = seenOutputs.get(outputName);
  if (previous) {
    fail(
      `Duplicate Obsidian output slug "${outputName}" from:\n- ${previous}\n- ${sourcePath}`
    );
  }
  seenOutputs.set(outputName, sourcePath);

  const rendered = renderPost({
    sourcePath,
    sourceStat,
    parsed,
    frontmatter,
  });

  const current = existsSync(outputPath)
    ? await fs.readFile(outputPath, "utf8")
    : null;
  if (current === rendered) {
    results.unchanged += 1;
    continue;
  }

  results.written += 1;
  if (dryRun) {
    console.log(`[dry-run] write ${relative(outputPath)}`);
    continue;
  }

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, rendered);
  console.log(`wrote ${relative(outputPath)}`);
}

console.log(
  [
    `Obsidian sync complete: ${results.written} written`,
    `${results.unchanged} unchanged`,
    `${results.skippedUnpublished} unpublished skipped`,
    `${results.skippedDraft} drafts skipped`,
    `${results.scanned} scanned`,
  ].join(", ")
);

function parseArgs(argv) {
  const parsed = {
    all: false,
    dryRun: false,
    help: false,
    out: undefined,
    source: undefined,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--") continue;
    else if (arg === "--all") parsed.all = true;
    else if (arg === "--dry-run") parsed.dryRun = true;
    else if (arg === "--help" || arg === "-h") parsed.help = true;
    else if (arg === "--out") parsed.out = argv[++i];
    else if (arg === "--source") parsed.source = argv[++i];
    else fail(`Unknown argument: ${arg}`);
  }

  return parsed;
}

function printHelp() {
  console.log(`Usage:
  pnpm obsidian:sync
  pnpm obsidian:sync -- --dry-run
  pnpm obsidian:sync -- --source "/path/to/vault/Blog"

Environment:
  OBSIDIAN_POSTS_DIR=obsidian-publish
  OBSIDIAN_VAULT_DIR=/absolute/path/to/vault
  OBSIDIAN_POSTS_SUBDIR=Blog
  OBSIDIAN_REQUIRE_PUBLISH=1
  OBSIDIAN_PUBLISH_FIELD=publish
  OBSIDIAN_PUBLISH_VALUE=true
  OBSIDIAN_OUTPUT_DIR=src/content/posts

Only notes with publish: true are synced by default. Pass --all or set
OBSIDIAN_REQUIRE_PUBLISH=0 to sync every non-draft note in the source folder.`);
}

function resolveSourceDir(options) {
  const direct = options.source ?? process.env.OBSIDIAN_POSTS_DIR;
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
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error?.code === "EACCES" || error?.code === "EPERM") {
      fail(
        `Obsidian source directory is not readable: ${dir}\nGrant this terminal Full Disk Access, move the publish folder under the project, or set OBSIDIAN_POSTS_DIR to a readable folder.`
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
    if (!stat.isDirectory()) {
      fail(`Obsidian source path is not a directory: ${dir}`);
    }
    await fs.access(dir);
  } catch (error) {
    if (error?.code === "ENOENT") {
      fail(`Obsidian source directory does not exist: ${dir}`);
    }
    if (error?.code === "EACCES" || error?.code === "EPERM") {
      fail(
        `Obsidian source directory is not readable: ${dir}\nGrant this terminal Full Disk Access, move the publish folder under the project, or set OBSIDIAN_POSTS_DIR to a readable folder.`
      );
    }
    throw error;
  }
}

function splitFrontmatter(raw) {
  const normalized = raw.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) {
    return { frontmatter: "", body: normalized };
  }

  const end = normalized.indexOf("\n---", 4);
  if (end === -1) {
    return { frontmatter: "", body: normalized };
  }

  return {
    frontmatter: normalized.slice(4, end).trim(),
    body: normalized.slice(end + 4).replace(/^\n+/, ""),
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

function isDraft(frontmatter) {
  return parseBoolean(frontmatter.draft?.value) === true;
}

function matchesPublishValue(rawValue, expected) {
  if (rawValue == null) return false;
  return normalizeScalar(rawValue) === normalizeScalar(expected);
}

function renderPost({ sourcePath, sourceStat, parsed, frontmatter }) {
  const sourceTitle = getStringValue(frontmatter.title?.value);
  const title = sourceTitle || path.basename(sourcePath, path.extname(sourcePath));
  const pubDatetime =
    getRawDate(frontmatter.pubDatetime) ||
    getRawDate(frontmatter.published) ||
    getRawDate(frontmatter.date) ||
    getRawDate(frontmatter.created) ||
    sourceStat.mtime.toISOString();
  const description =
    getStringValue(frontmatter.description?.value) ||
    makeDescription(parsed.body);
  const tags = parseTags(frontmatter.tags);

  const frontmatterLines = [
    `title: ${toYamlString(title)}`,
    `pubDatetime: ${pubDatetime}`,
    `description: ${toYamlString(description)}`,
  ];

  if (tags.length > 0) {
    frontmatterLines.push(
      `tags: [${tags.map(tag => toYamlString(tag)).join(", ")}]`
    );
  }

  for (const key of [
    "author",
    "modDatetime",
    "featured",
    "draft",
    "ogImage",
    "canonicalURL",
    "hideEditPost",
    "timezone",
  ]) {
    const block = frontmatter[key];
    if (!block) continue;
    if (frontmatterLines.some(line => line.startsWith(`${key}:`))) continue;
    frontmatterLines.push(...block.lines);
  }

  const body = normalizeObsidianMarkdown(parsed.body).trimEnd();
  return `---\n${frontmatterLines.join("\n")}\n---\n\n${body}\n`;
}

function getOutputName(sourcePath, sourceDir, frontmatter) {
  const rawSlug =
    getStringValue(frontmatter.slug?.value) ||
    path.basename(sourcePath, path.extname(sourcePath));
  const slug = slugifyStr(rawSlug);
  const ext = path.extname(sourcePath).toLowerCase() === ".mdx" ? ".mdx" : ".md";
  const relativeDir = path.relative(sourceDir, path.dirname(sourcePath));

  if (!relativeDir || relativeDir === ".") return `${slug}${ext}`;

  return path.join(
    ...relativeDir.split(path.sep).map(segment => slugifyStr(segment)),
    `${slug}${ext}`
  );
}

function getRawDate(block) {
  if (!block?.value) return null;
  const value = stripQuotes(block.value);
  if (!Number.isNaN(Date.parse(value))) return value;
  return null;
}

function getStringValue(rawValue) {
  if (!rawValue) return "";
  return stripQuotes(rawValue).trim();
}

function parseTags(block) {
  if (!block) return [];

  const raw = block.lines.join("\n");
  const inline = block.value.match(/^\[(.*)\]$/);
  if (inline) {
    return inline[1]
      .split(",")
      .map(tag => stripQuotes(tag).trim())
      .filter(Boolean);
  }

  const listTags = raw
    .split("\n")
    .map(line => line.match(/^\s*-\s*(.+)$/)?.[1])
    .filter(Boolean)
    .map(tag => stripQuotes(tag).trim());
  if (listTags.length > 0) return listTags;

  const single = stripQuotes(block.value).trim();
  return single ? [single] : [];
}

function makeDescription(body) {
  const paragraph =
    body
      .split(/\n{2,}/)
      .map(block => block.trim())
      .find(block => block && !block.startsWith("#") && !block.startsWith("```")) ??
    "진민성의 공개 여정 기록.";

  return stripMarkdown(paragraph).slice(0, 150);
}

function normalizeObsidianMarkdown(markdown) {
  return markdown
    .replace(/!\[\[([^\]]+)\]\]/g, (_, target) => `[첨부: ${target}]`)
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
    .replace(/\[\[([^\]]+)\]\]/g, "$1");
}

function stripMarkdown(markdown) {
  return normalizeObsidianMarkdown(markdown)
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#>*_~\-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function toYamlString(value) {
  return JSON.stringify(value);
}

function parseBoolean(value) {
  if (value == null) return null;
  const normalized = normalizeScalar(value);
  if (normalized === "true") return true;
  if (normalized === "false") return false;
  return null;
}

function normalizeScalar(value) {
  return stripQuotes(String(value).trim()).toLowerCase();
}

function stripQuotes(value) {
  return String(value).replace(/^['"]|['"]$/g, "");
}

function slugifyStr(value) {
  const normalized = String(value).trim();
  if (!normalized) return "untitled";
  if (/[^\x00-\x7F]/.test(normalized)) {
    return kebabcase(normalized);
  }
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

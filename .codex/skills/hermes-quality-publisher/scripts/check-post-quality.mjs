#!/usr/bin/env node
/* eslint-disable no-console */
import fs from "node:fs/promises";
import path from "node:path";

const args = parseArgs(process.argv.slice(2));

if (!args.file || args.help) {
  console.log(`Usage:
  pnpm hermes:quality -- --file "<note.md>"
  pnpm hermes:quality -- --file "<note.md>" --json`);
  process.exit(args.help ? 0 : 1);
}

const filePath = path.resolve(args.file);
const raw = await fs.readFile(filePath, "utf8");
const { frontmatter, body } = splitFrontmatter(raw);
const metadata = parseFrontmatter(frontmatter);
const visibleBody = stripMarkdown(body);
const blockers = [];
const warnings = [];

const title = unquote(metadata.title ?? "");
const category = unquote(metadata.category ?? "");
const bodyChars = visibleBody.replace(/\s/g, "").length;
const headings = [...body.matchAll(/^#{2,3}\s+(.+)$/gm)].map(match =>
  match[1].trim()
);
const paragraphs = body
  .split(/\n\s*\n/)
  .map(paragraph => stripMarkdown(paragraph).trim())
  .filter(Boolean);

if (!title) warnings.push("Missing title metadata; Hermes must provide it.");
if (bodyChars < 150) {
  blockers.push(`Body is too short (${bodyChars} visible characters; minimum 150).`);
} else if (bodyChars < 400) {
  warnings.push(
    `Body is concise (${bodyChars} visible characters); confirm it contains enough firsthand value.`
  );
}
if (bodyChars >= 700 && headings.length === 0) {
  warnings.push("Long post has no section headings.");
}
if (paragraphs.some(paragraph => paragraph.length > 1200)) {
  warnings.push("At least one paragraph is longer than 1,200 characters.");
}
if (/(?:TODO|TBD|FIXME|내용\s*추가|나중에\s*작성|\[placeholder\])/i.test(body)) {
  blockers.push("Draft contains unfinished placeholder text.");
}
if (/(?:adsbygoogle|pagead2\.googlesyndication|<AdSlot\b|data-ad-client)/i.test(body)) {
  blockers.push("Ad code must not be embedded in article content.");
}
if (
  /(?:-----BEGIN (?:RSA |OPENSSH )?PRIVATE KEY-----|AIza[0-9A-Za-z_-]{30,}|ghp_[0-9A-Za-z]{30,}|sk-[0-9A-Za-z_-]{20,})/.test(
    raw
  )
) {
  blockers.push("Possible secret or private key detected.");
}
if (isTrue(metadata.publish) && isTrue(metadata.draft)) {
  blockers.push("Frontmatter conflicts: publish and draft are both true.");
}
if (
  category &&
  !["AI & Agents", "Build Log", "Open Source", "Founder Notes"].includes(category)
) {
  blockers.push(`Unsupported public category: ${category}`);
}
if (!metadata.description && !metadata.summary) {
  warnings.push("Missing description or summary metadata.");
}
if (!metadata.tags) warnings.push("Missing tags metadata.");
if (new Set(headings).size !== headings.length) {
  warnings.push("Duplicate section headings detected.");
}
if (/(?:무조건|100%|완벽한|충격적인|반드시 돈 버는)/.test(title)) {
  warnings.push("Title may overpromise or use clickbait language.");
}

const result = {
  file: filePath,
  verdict: blockers.length > 0 ? "BLOCK" : warnings.length > 0 ? "REVISE" : "READY",
  metrics: {
    visibleCharacters: bodyChars,
    headings: headings.length,
    paragraphs: paragraphs.length,
  },
  blockers,
  warnings,
};

if (args.json) {
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log(`${result.verdict} ${path.relative(process.cwd(), filePath)}`);
  console.log(
    `characters=${bodyChars} headings=${headings.length} paragraphs=${paragraphs.length}`
  );
  for (const blocker of blockers) console.log(`BLOCKER: ${blocker}`);
  for (const warning of warnings) console.log(`WARNING: ${warning}`);
}

process.exit(blockers.length > 0 ? 1 : 0);

function parseArgs(argv) {
  const parsed = { file: undefined, help: false, json: false };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--") continue;
    if (arg === "--file") parsed.file = argv[++index];
    else if (arg === "--json") parsed.json = true;
    else if (arg === "--help" || arg === "-h") parsed.help = true;
    else if (!arg.startsWith("-") && !parsed.file) parsed.file = arg;
    else throw new Error(`Unknown argument: ${arg}`);
  }
  return parsed;
}

function splitFrontmatter(markdown) {
  const normalized = markdown.replace(/\r\n?/g, "\n");
  if (!normalized.startsWith("---\n")) {
    return { frontmatter: "", body: normalized };
  }
  const end = normalized.indexOf("\n---\n", 4);
  if (end === -1) return { frontmatter: "", body: normalized };
  return {
    frontmatter: normalized.slice(4, end),
    body: normalized.slice(end + 5),
  };
}

function parseFrontmatter(frontmatter) {
  const values = {};
  for (const line of frontmatter.split("\n")) {
    const match = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);
    if (match) values[match[1]] = match[2].trim();
  }
  return values;
}

function stripMarkdown(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, " code ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/[*_~>|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function unquote(value) {
  return String(value).replace(/^["']|["']$/g, "").trim();
}

function isTrue(value) {
  return /^(?:true|yes|1)$/i.test(unquote(value ?? ""));
}

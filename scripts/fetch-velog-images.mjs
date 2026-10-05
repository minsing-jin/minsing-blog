import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const exec = promisify(execFile);
const root = path.resolve(new URL("..", import.meta.url).pathname);
const source = path.join(root, "obsidian-publish", "Velog");
const publicDir = path.join(root, "public", "images", "velog");
await fs.mkdir(publicDir, { recursive: true });
const files = (await fs.readdir(source)).filter(file => file.endsWith(".md"));
const urls = new Set();
for (const file of files) {
  const text = await fs.readFile(path.join(source, file), "utf8");
  for (const match of text.matchAll(/https?:\/\/velog\.velcdn\.com\/[^)\s"']+/g)) urls.add(match[0]);
}
let done = 0;
for (const url of urls) {
  const hash = crypto.createHash("sha1").update(url).digest("hex").slice(0, 16);
  const ext = (new URL(url).pathname.match(/\.(png|jpe?g|gif|webp|svg|avif)$/i)?.[1] || "bin").toLowerCase().replace("jpeg", "jpg");
  const name = `${hash}.${ext}`;
  const target = path.join(publicDir, name);
  try { await fs.access(target); } catch { await exec("curl", ["-L", "--max-time", "45", "-sS", "-A", "Mozilla/5.0", url, "-o", target]); }
  for (const file of files) {
    const p = path.join(source, file); const text = await fs.readFile(p, "utf8");
    if (text.includes(url)) await fs.writeFile(p, text.split(url).join(`/images/velog/${name}`));
  }
  done += 1; if (done % 25 === 0) console.log(`downloaded ${done}/${urls.size}`);
}
console.log(`Velog images saved: ${done}`);

#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const exec = promisify(execFile);
const user = process.argv[2] || 'minsing-jin';
const repo = path.resolve(new URL('..', import.meta.url).pathname);
const outDir = path.join(repo, 'obsidian-publish', 'Velog');
const cacheDir = path.join(repo, '.velog-import-cache');
await fs.mkdir(outDir, { recursive: true });
await fs.mkdir(cacheDir, { recursive: true });

async function get(url) {
  const { stdout } = await exec('curl', ['-L', '--max-time', '45', '-sS', '-A', 'Mozilla/5.0', url], { maxBuffer: 20 * 1024 * 1024 });
  return stdout;
}
function state(html, name) {
  const marker = `window.${name}=`;
  const start = html.indexOf(marker);
  if (start < 0) return null;
  const from = start + marker.length;
  const end = html.indexOf('</script>', from);
  if (end < 0) return null;
  const raw = html.slice(from, end).replace(/;\s*$/, '');
  try { return JSON.parse(raw); } catch { return null; }
}
function slugify(value) {
  return value.normalize('NFKC').replace(/[\\/:*?"<>|]/g, '-').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'untitled';
}
function yaml(value) { return JSON.stringify(String(value ?? '')); }
function escImageLinks(body) { return body.replace(/!\[([^\]]*)\]\((https?:\/\/[^)]+)\)/g, (_, alt, url) => `![${alt}](${url})`); }

const q = `query getUserSeriesList($input: GetUserInput!) { user(input: $input) { series_list { id name description url_slug thumbnail updated_at posts_count } } }`;
const seriesData = JSON.parse((await exec('curl', ['-L', '--max-time', '45', '-sS', 'https://v3.velog.io/graphql', '-H', 'content-type: application/json', '--data-binary', JSON.stringify({ operationName: 'getUserSeriesList', query: q, variables: { input: { username: user } } })], { maxBuffer: 20 * 1024 * 1024 })).stdout);
const series = seriesData.data?.user?.series_list || [];
if (!series.length) throw new Error('No Velog series found');
const seen = new Map();
for (const s of series) {
  const page = await get(`https://velog.io/@${encodeURIComponent(user)}/series/${encodeURIComponent(s.url_slug)}`);
  const st = state(page, '__APOLLO_STATE__');
  const exact = st && Object.values(st).find(v => v && v.id === s.id && v.series_posts);
  const posts = exact?.series_posts || [];
  if (s.name === series[0].name) console.log('debug series', s.name, Boolean(st), exact?.id, posts.length, Object.keys(st || {}).filter(k => k.includes('Post')).length);
  for (const ref of posts) {
    const p = st?.[ref.id];
    const post = p?.post?.id ? st[p.post.id] : p?.id ? st[p.id] : null;
    if (!post?.url_slug) continue;
    const entry = seen.get(post.id) || { ...post, series: [] };
    entry.series.push(s.name);
    seen.set(post.id, entry);
  }
}
console.log(`Velog series: ${series.length}, unique posts: ${seen.size}, series total: ${series.reduce((n,s)=>n+(s.posts_count||0),0)}`);
let written = 0;
for (const [id, listed] of seen) {
  const cache = path.join(cacheDir, `${id}.html`);
  let html;
  try { html = await fs.readFile(cache, 'utf8'); } catch { html = await get(`https://velog.io/@${encodeURIComponent(user)}/${encodeURIComponent(listed.url_slug)}`); await fs.writeFile(cache, html); }
  const st = state(html, '__APOLLO_STATE__');
  const post = st?.[`Post:${id}`] || Object.values(st || {}).find(v => v && v.id === id && v.body !== undefined);
  if (!post || post.is_private) { console.warn(`skip private/missing ${listed.url_slug}`); continue; }
  const title = post.title || listed.title;
  const body = escImageLinks(post.body || '');
  const category = listed.series[0] || 'Velog';
  const tags = Array.isArray(post.tags) ? post.tags : [];
  const date = post.released_at || listed.released_at || new Date().toISOString();
  const file = path.join(outDir, `${slugify(title)}.md`);
  const fm = [
    '---', `publish: true`, `title: ${yaml(title)}`, `slug: ${yaml(listed.url_slug)}`, `pubDatetime: ${date}`,
    `description: ${yaml(post.short_description || title)}`, `category: ${yaml(category)}`,
    `tags: [${tags.map(yaml).join(', ')}]`, `velogSeries: [${listed.series.map(yaml).join(', ')}]`, `canonicalURL: ${yaml(`https://velog.io/@${user}/${listed.url_slug}`)}`, '---', '', body.trimEnd(), ''
  ].join('\n');
  await fs.writeFile(file, fm);
  written++;
}
await fs.writeFile(path.join(outDir, '_series-index.json'), JSON.stringify(series.map(s => ({ name:s.name, slug:s.url_slug, postsCount:s.posts_count })), null, 2));
console.log(`Imported ${written} posts to ${path.relative(repo, outDir)}`);

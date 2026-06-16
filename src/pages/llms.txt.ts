import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import config from "@/config";
import { getPostUrl } from "@/utils/getPostPaths";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getKoreanPosts } from "@/utils/localizedPosts";

export const GET: APIRoute = async () => {
  const posts = getSortedPosts(getKoreanPosts(await getCollection("posts")));
  const siteUrl = new URL(config.site.url);
  const lines = [
    `# ${config.site.title}`,
    "",
    config.site.description,
    "",
    `Site: ${siteUrl.href}`,
    `English site: ${new URL("/en/", siteUrl).href}`,
    `Language: ${config.site.lang}`,
    "",
    "## Publishing contract",
    "",
    "- Obsidian notes are published only when frontmatter has publish: true.",
    "- Hermes/Discord approval should write or approve notes in obsidian-publish/ and then run the blog publish command.",
    "- Public categories are AI & Agents, Build Log, Open Source, and Founder Notes.",
    "- LLM wiki fields are category, summary, concepts, related, and status.",
    "",
    "## Posts",
    "",
  ];

  for (const post of posts) {
    const data = post.data;
    const url = new URL(
      getPostUrl(post.id, post.filePath, config.site.lang),
      siteUrl
    );

    lines.push(`### ${data.title}`);
    lines.push(`URL: ${url.href}`);
    lines.push(`Published: ${data.pubDatetime.toISOString()}`);
    if (data.modDatetime) {
      lines.push(`Updated: ${data.modDatetime.toISOString()}`);
    }
    lines.push(`Summary: ${data.summary ?? data.description}`);
    lines.push(`Category: ${data.category}`);
    if (data.status) lines.push(`Status: ${data.status}`);
    if (data.tags.length > 0) lines.push(`Tags: ${data.tags.join(", ")}`);
    if (data.concepts.length > 0) {
      lines.push(`Concepts: ${data.concepts.join(", ")}`);
    }
    if (data.related.length > 0) {
      lines.push(`Related: ${data.related.join(", ")}`);
    }
    lines.push("");
  }

  return new Response(`${lines.join("\n").trimEnd()}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};

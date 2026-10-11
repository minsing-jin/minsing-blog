import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "./slugify";

export const PROGRAMMING_CATEGORY = "Programming & CS";

export function getProgrammingSeries(posts: CollectionEntry<"posts">[]) {
  const groups = new Map<string, CollectionEntry<"posts">[]>();

  for (const post of posts) {
    if (post.data.category !== PROGRAMMING_CATEGORY) continue;
    for (const series of post.data.velogSeries ?? ["기타"]) {
      const group = groups.get(series) ?? [];
      group.push(post);
      groups.set(series, group);
    }
  }

  return [...groups]
    .map(([name, entries]) => ({
      name,
      slug: slugifyStr(name),
      posts: entries,
    }))
    .sort(
      (a, b) =>
        b.posts.length - a.posts.length || a.name.localeCompare(b.name, "ko")
    );
}

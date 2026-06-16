import type { CollectionEntry } from "astro:content";
import { getPostSlugPath } from "./getPostPaths";

export type BlogLanguage = "ko" | "en";

export function isEnglishPost(post: CollectionEntry<"posts">): boolean {
  return (
    post.data.language === "en" ||
    getPostSlugPath(post.id, post.filePath).startsWith("en/")
  );
}

export function getKoreanPosts(posts: CollectionEntry<"posts">[]) {
  return posts.filter(post => !isEnglishPost(post));
}

export function getEnglishPosts(posts: CollectionEntry<"posts">[]) {
  return posts.filter(isEnglishPost);
}

export function getEnglishRouteSlug(post: CollectionEntry<"posts">): string {
  return getPostSlugPath(post.id, post.filePath).replace(/^en\//, "");
}

export function getEnglishPostUrl(post: CollectionEntry<"posts">): string {
  return `/en/posts/${getEnglishRouteSlug(post)}/`;
}

export function getEnglishOrKoreanPosts(posts: CollectionEntry<"posts">[]) {
  const englishBySource = new Map<string, CollectionEntry<"posts">>();
  const englishOrphans: CollectionEntry<"posts">[] = [];

  for (const post of getEnglishPosts(posts)) {
    const source = post.data.translationOf;
    if (source) {
      englishBySource.set(
        source.replace(/^\/?posts\//, "").replace(/\/$/, ""),
        post
      );
    } else {
      englishOrphans.push(post);
    }
  }

  const merged = getKoreanPosts(posts).map(post => {
    const slug = getPostSlugPath(post.id, post.filePath);
    return englishBySource.get(slug) ?? post;
  });

  return [...englishOrphans, ...merged];
}

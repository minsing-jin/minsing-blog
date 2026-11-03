import type { CollectionEntry } from "astro:content";
import { getPostSlugPath, getPostUrl } from "./getPostPaths";
import {
  getEnglishPostUrl,
  getEnglishRouteSlug,
  isEnglishPost,
} from "./localizedPosts";
import { slugifyStr } from "./slugify";

type Post = CollectionEntry<"posts">;

export type RelatedLink = { href: string; title: string };

const LOCAL_IMAGE = /!\[[^\]]*\]\((\/[^)\s]+\.(?:png|jpe?g|webp|gif))(?:\s+"[^"]*")?\)/i;

/** First site-hosted image in the Markdown body, used as the social preview. */
export function getFirstBodyImage(body: string | undefined): string | undefined {
  return body?.match(LOCAL_IMAGE)?.[1];
}

export function getPostHref(post: Post): string {
  return isEnglishPost(post)
    ? getEnglishPostUrl(post)
    : getPostUrl(post.id, post.filePath, "ko");
}

/**
 * Resolves `related` frontmatter entries (slug or title) to real posts so the
 * page shows titles instead of raw slugs. English pages prefer the approved
 * translation and fall back to the Korean original.
 */
export function resolveRelatedLinks(
  items: string[],
  posts: Post[],
  locale: "ko" | "en"
): RelatedLink[] {
  const korean = posts.filter(post => !isEnglishPost(post));
  const english = posts.filter(isEnglishPost);

  return items.map(item => {
    if (/^https?:\/\//i.test(item) || item.startsWith("/")) {
      return { href: item, title: item };
    }

    const slug = slugifyStr(item);
    const source = korean.find(
      post =>
        getPostSlugPath(post.id, post.filePath) === slug ||
        post.data.title === item
    );
    const sourceSlug = source
      ? getPostSlugPath(source.id, source.filePath)
      : slug;

    if (locale === "en") {
      const translation = english.find(
        post =>
          post.data.translationOf === sourceSlug ||
          getEnglishRouteSlug(post) === sourceSlug ||
          post.data.title === item
      );
      if (translation) {
        return { href: getPostHref(translation), title: translation.data.title };
      }
    }

    if (source) return { href: getPostHref(source), title: source.data.title };

    return {
      href: locale === "en" ? `/en/posts/${slug}/` : `/posts/${slug}/`,
      title: item,
    };
  });
}

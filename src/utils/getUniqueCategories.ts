import type { CollectionEntry } from "astro:content";
import { getCategorySlug, PUBLIC_CATEGORIES } from "./categories";
import { postFilter } from "./postFilter";

export type CategorySummary = {
  category: string;
  categoryName: string;
  description: string;
  count: number;
};

export function getUniqueCategories(
  posts: CollectionEntry<"posts">[]
): CategorySummary[] {
  const visiblePosts = posts.filter(postFilter);

  const base = PUBLIC_CATEGORIES.map(category => ({
    category: getCategorySlug(category.name),
    categoryName: category.name,
    description: category.description,
    count: visiblePosts.filter(post => post.data.category === category.name)
      .length,
  }));
  const known = new Set<string>(base.map(category => category.categoryName));
  const dynamic = [
    ...new Set(
      visiblePosts.flatMap(post =>
        post.data.velogSeries?.length
          ? post.data.velogSeries
          : [post.data.category]
      )
    ),
  ]
    .filter(name => !known.has(name))
    .sort((a, b) => a.localeCompare(b, "ko"))
    .map(name => ({
      category: getCategorySlug(name),
      categoryName: name,
      description: `Velog series: ${name}`,
      count: visiblePosts.filter(
        post =>
          post.data.velogSeries?.includes(name) || post.data.category === name
      ).length,
    }));
  return [...base, ...dynamic];
}

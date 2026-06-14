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

  return PUBLIC_CATEGORIES.map(category => ({
    category: getCategorySlug(category.name),
    categoryName: category.name,
    description: category.description,
    count: visiblePosts.filter(post => post.data.category === category.name)
      .length,
  }));
}

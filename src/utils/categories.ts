import { slugifyStr } from "./slugify";

export const PUBLIC_CATEGORIES = [
  {
    name: "AI & Agents",
    description: "LLM, agents, automation, and AI-native workflows.",
  },
  {
    name: "Build Log",
    description:
      "Shipping notes, product experiments, deployments, and systems.",
  },
  {
    name: "Open Source",
    description:
      "Open source work, public repositories, and community-facing tools.",
  },
  {
    name: "Founder Notes",
    description:
      "Startup thinking, learning loops, growth, and personal strategy.",
  },
] as const;

export const PUBLIC_CATEGORY_NAMES = PUBLIC_CATEGORIES.map(
  category => category.name
) as [string, ...string[]];

export const DEFAULT_CATEGORY = "Founder Notes";

export function getCategorySlug(category: string): string {
  return slugifyStr(category);
}

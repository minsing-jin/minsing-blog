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
  {
    name: "Data & ML",
    description: "Machine learning, data work, and applied AI foundations.",
  },
  {
    name: "Programming & CS",
    description:
      "Programming, systems, algorithms, and computer science notes.",
  },
] as const;

export const PUBLIC_CATEGORY_NAMES = PUBLIC_CATEGORIES.map(
  category => category.name
) as [string, ...string[]];

export const DEFAULT_CATEGORY = "Founder Notes";

export function getCategorySlug(category: string): string {
  return slugifyStr(category);
}

export function getImportedCategory(series: string): string {
  const value = series.toLowerCase();
  if (/ml|machine learning|rag|eda|reinforcement|통계|데이터/.test(value))
    return "Data & ML";
  if (/ai|llm|gpt|agent|모델/.test(value)) return "AI & Agents";
  if (/회고|고민|깨달음|about|minsing|영어홍보/.test(value))
    return "Founder Notes";
  if (/github|오픈|open source/.test(value)) return "Open Source";
  if (/playground|project|build|배포/.test(value)) return "Build Log";
  return "Programming & CS";
}

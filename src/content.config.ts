import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";
import { DEFAULT_CATEGORY, PUBLIC_CATEGORY_NAMES } from "@/utils/categories";

export const BLOG_PATH = "src/content/posts";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      category: z.enum(PUBLIC_CATEGORY_NAMES).default(DEFAULT_CATEGORY),
      language: z.enum(["ko", "en"]).default("ko"),
      translationOf: z.string().optional(),
      translationStatus: z
        .enum(["original", "draft", "review", "approved"])
        .optional(),
      tags: z.array(z.string()).default(["others"]),
      summary: z.string().optional(),
      concepts: z.array(z.string()).default([]),
      related: z.array(z.string()).default([]),
      status: z.string().optional(),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

export const collections = { posts, pages };

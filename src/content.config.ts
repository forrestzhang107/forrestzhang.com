// Blog posts: one markdown file per post in src/content/blog. The file name is the URL,
// so src/content/blog/some-post.md is /blog/some-post/.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    // One sentence. Used for the meta description, the index and the RSS item.
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    // Drafts show in `npm run dev` and never in a build that deploys.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

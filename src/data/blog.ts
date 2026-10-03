// The one place that decides which posts exist, so the home page, the index, the post
// pages and the feed always agree about drafts.
import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

const showDrafts = import.meta.env.DEV;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", (p) => showDrafts || !p.data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

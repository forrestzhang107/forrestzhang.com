// One share card per page: /og/home.png, /og/blog.png, /og/<post-slug>.png. See src/data/card.ts.
import type { APIRoute, GetStaticPaths } from "astro";
import { getPosts, formatDate } from "../../data/blog";
import { SITE } from "../../data/site";
import { renderCard } from "../../data/card";

export const getStaticPaths = (async () => {
  const posts = await getPosts();
  return [
    { params: { slug: "home" }, props: { title: SITE.cardTitle, kicker: SITE.cardKicker } },
    { params: { slug: "blog" }, props: { title: "Writing", kicker: "Posts on agents and the companies I build" } },
    ...posts.map((p) => ({
      params: { slug: p.id },
      props: { title: p.data.title, kicker: formatDate(p.data.date) },
    })),
  ];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const { title, kicker } = props as { title: string; kicker: string };
  const png = await renderCard(title, kicker);
  return new Response(png, { headers: { "Content-Type": "image/png" } });
};

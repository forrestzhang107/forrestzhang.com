# forrestzhang.com

Forrest Zhang's personal site: projects and writing. Astro, static, deployed to GitHub Pages
by `.github/workflows/deploy.yml` on every push to `main`.

## Edit

- Projects, bio, links, location, site description: `src/data/site.ts`. Keep project summaries to
  one short line. In the bio, a project name in {braces} links to that project.
- Profile picture: `public/forrest.jpg` (256x256, from his GitHub avatar). Favicons (`favicon.ico`,
  `favicon-96.png`, `icon-192.png`, `apple-touch-icon.png`) are an "fz" monogram in IBM Plex Mono,
  not the photo (Forrest, 2026-10-04: no headshot for the favicon).
- Search and share previews: home `<title>` and meta description in `src/data/site.ts`; share
  cards (og:image, 1200x630) drawn per page at build time by `src/data/card.ts`, with the "fz"
  monogram and no photo (Forrest, 2026-10-04: no face on share cards); JSON-LD
  (WebSite, Person/ProfilePage, BlogPosting) in `src/layouts/Base.astro`.
- Design: centered single column, one typeface (IBM Plex Mono, self-hosted via `@fontsource`),
  off-white, light and dark.
  Styles in `src/styles/global.css`.
- Home page copy: `src/pages/index.astro`.
- A post: add `src/content/blog/<slug>.md` with `title`, `description` and `date` front matter.
  It goes live at `/blog/<slug>/` on the next push. `draft: true` keeps it off the live site.
  The Writing link and section appear once the first post is published.

## Run

```
npm install
npm run dev      # http://localhost:4321, drafts visible
npm run build    # dist/, drafts excluded
```

## Domain

Registered at Porkbun, DNS on Porkbun: apex A/AAAA records to GitHub Pages, `www` CNAME to
`forrestzhang107.github.io`. The custom domain is set in the repository's Pages settings.

# forrestzhang.com

Forrest Zhang's personal site: projects and writing. Astro, static, deployed to GitHub Pages
by `.github/workflows/deploy.yml` on every push to `main`.

## Edit

- Projects, intro links, site description: `src/data/site.ts`.
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

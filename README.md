# North Alabama Korean School — Website

A fast, free, bilingual (English / 한국어) website for the North Alabama Korean
School. Static HTML, CSS, and JavaScript — no build step for the main site, no
server, no monthly cost. It hosts free on GitHub Pages.

## Who edits what

| File | What it controls | Who edits it |
|---|---|---|
| `content.js` | Every word on the homepage, both languages | The site owner |
| `spotlight-posts.js` | Every Spotlight (blog) article, both languages | The site owner |
| `index.html`, `style.css`, `app.js` | The page shell, design, and engine | No one — leave alone |
| `tools/build-spotlight.mjs` | Generates the shareable article pages | Run it; don't edit it |

## Two guides

- **`SETUP-GUIDE.md`** — how to preview the site, edit `content.js`, publish to
  GitHub Pages, connect the newsletter and forms, and add a domain name.
- **`SPOTLIGHT-GUIDE.md`** — how to write a Spotlight article and publish it so
  it looks beautiful when shared on social media.

## Important: the domain

Several files contain the placeholder web address
`https://northalabamakoreanschool.org`. Once the real domain is chosen, do a
find-and-replace across the project for that address. The files that contain it
are: `robots.txt`, `sitemap.xml`, `content.js`, and `tools/build-spotlight.mjs`.

## Rebuilding the Spotlight pages

After editing `spotlight-posts.js`, the shareable article pages must be
regenerated. In Cowork, just say "rebuild the Spotlight pages." Manually:

```
node tools/build-spotlight.mjs
```

This regenerates every article page (English + Korean) and `sitemap.xml`.

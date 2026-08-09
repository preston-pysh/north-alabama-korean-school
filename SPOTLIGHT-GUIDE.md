# Spotlight Center — How to Write & Publish a Story

The Spotlight Center is the heart of this website. It is a running blog of the
school's life — volunteer profiles, things the school has accomplished, teacher
profiles, community outreach, student writing about Korean culture.

Each story is written to be **shared**. When a family posts a story to
Facebook or sends it in a text, it should show a beautiful photo and an
inviting headline — and pull new people toward the school. That is how the
Spotlight Center becomes an outreach engine.

This guide shows you how to write one and publish it.

---

## How the sharing magic works (read this once)

When someone shares a link on Facebook, Facebook does **not** run the website's
code. It only reads a few hidden "preview tags" baked into that page.

That is why every Spotlight article is its own real page — and why there are
**two** of each: an English one and a Korean one. A story shared from the
Korean site carries Korean preview text, so the sharer's friends see it in
Korean.

Those pages are *built* from `spotlight-posts.js` by a small tool. **Every time
you add or change a story, you must rebuild the pages** — otherwise the new
story won't appear and shares won't look right. It is one step. Don't skip it.

---

## Step 1 — Take (or choose) a great photo

The photo is what makes someone stop scrolling. Choose one strong, well-lit
photo per story.

- Best size: **1200 × 630 pixels** (a wide rectangle). Other sizes work, but
  this size fills the social-media preview perfectly.
- Make sure you have **photo permission** for anyone shown — especially
  children. (The school already has a photo-consent process; follow it.)
- Save the photo into `assets/spotlight/` with a simple name, e.g.
  `chuseok-2026.jpg`.

A story can have no photo — it will show a clean text card — but a photo is
strongly recommended.

---

## Step 2 — Write the story (~500 words)

Open `spotlight-posts.js`. Each story is one block in `{ }` brackets. Copy the
sample block, paste it at the top of the list, and fill it in:

- **slug** — the web-address piece. Lowercase, hyphens, no spaces, e.g.
  `chuseok-celebration-2026`. **Never change a slug after a story is shared** —
  old links would break.
- **date** — `"YYYY-MM-DD"`. Newest dates appear first and largest.
- **category** — a short label, e.g. *Volunteer Spotlight*, *School News*,
  *Teacher Profile*, *Community*.
- **title** — the headline. Keep it under about 12 words.
- **dek** — one or two sentences. **This is the text that shows in the
  social-media preview**, so make it warm and inviting, not a dry summary.
- **image** / **imageAlt** — the photo file and a short description of it.
- **author** — who wrote it.
- **body** — the article, as a list of paragraphs. Each paragraph is one
  `{ en, ko }` pair. Aim for around 500 words — long enough to be interesting,
  short enough to read on a phone.

**Write both languages.** Write it well in English, then in Korean. (In Cowork
you can ask for a first Korean draft — then have Demi review it. She always
reviews the Korean.)

**Tip:** end most stories with a gentle invitation — to enroll, to volunteer,
to visit. Every story is a small open door.

---

## Step 3 — Publish your story

After saving `spotlight-posts.js`, rebuild the article pages.

**The easy way (Cowork):** just say *"rebuild the Spotlight pages."*

**The manual way:** open a terminal in this folder and run:

```
node tools/build-spotlight.mjs
```

This creates the English and Korean pages for every story and updates
`sitemap.xml`. You'll see a line confirming each story.

Then publish the change the normal way: commit and push in GitHub (or upload
the changed files). Within a minute the new story is live on the site, and on
the `/spotlight/` page.

---

## Step 4 — Share it

Open the story's page on the live site and use the **Share** buttons at the
bottom — Facebook, X, or copy-link. Encourage teachers and families to share
too. Because the preview tags are baked in, every share looks polished and
on-brand, in the right language.

---

## A standing invitation for students

The homepage's "Korean culture today" section is a natural place for **students
to contribute**. Invite them to write a short piece about a Korean trend they
see catching on in America — a song, a show, a food, a word. The best
submissions can become Spotlight stories under a *Student Voices* category.
It gives students a real audience, real bylines, and a reason to write — in
both languages.

---

## Quick checklist for every story

- [ ] Strong photo, ~1200×630, saved in `assets/spotlight/`
- [ ] Photo permission confirmed for anyone shown
- [ ] `slug`, `date`, `category`, `title`, `dek` filled in
- [ ] ~500-word body, written in **both** English and Korean
- [ ] Korean reviewed by Demi
- [ ] Rebuilt the pages (`node tools/build-spotlight.mjs` or ask Cowork)
- [ ] Committed / uploaded to GitHub
- [ ] Opened the live page and shared it

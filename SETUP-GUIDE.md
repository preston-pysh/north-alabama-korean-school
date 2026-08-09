# North Alabama Korean School — Website Setup Guide

This is the complete website for the North Alabama Korean School. It is fast,
free to host, works on phones and computers, is bilingual (English and Korean),
and is built so that **you only ever edit simple text files** to keep it
current. No coding knowledge required.

Take it one part at a time. You do not need to do everything in one sitting.

---

## What's in this folder

| File | What it is | Do you edit it? |
|---|---|---|
| `content.js` | Every word on the homepage, in both languages | **Yes — your main file** |
| `spotlight-posts.js` | Every Spotlight (blog) article | **Yes — see SPOTLIGHT-GUIDE.md** |
| `index.html` | The homepage | No |
| `spotlight/` | The blog: its index page and the article pages | Don't edit by hand |
| `style.css` | The visual design | No |
| `app.js` | The behind-the-scenes engine | No |
| `tools/build-spotlight.mjs` | Builds the shareable article pages | Run it; don't edit it |
| `assets/` | Photos, the logo, the favicon | You add images here |
| `SPOTLIGHT-GUIDE.md` | How to write and publish a story | Read it |

The homepage reads from `content.js`. Change `content.js`, and the homepage
changes.

---

## Part 1 — See it on your own computer first

1. Open this folder.
2. Double-click `index.html`.

It opens in your web browser. That is your site. Try the **EN / 한국어** toggle
at the top right — the whole site switches language. Click a program level to
expand it. Scroll through every section.

Nothing here is on the internet yet — this is a private preview on your own
computer.

---

## Part 2 — Edit the words (`content.js`)

`content.js` holds every word on the homepage. Open it in any plain-text editor
(TextEdit, Notepad, or VS Code).

**The site is bilingual.** Almost every line of text is written as a pair:

```js
title: {
  en: "About the school",
  ko: "학교 소개"
},
```

Edit **both** lines so the site reads well in English and in Korean.

### The three rules that keep it from breaking

1. Every piece of text stays inside `"double quotes"`.
2. Keep the comma at the end of each line.
3. Don't delete the `{ }` and `[ ]` brackets — only change text between them.

If the site ever goes blank, you almost certainly removed a quote, comma, or
bracket. Undo your last change, save, and it comes back.

### Things to fill in before launch

Search `content.js` for these and update them:

- The school name in Korean (confirm the spelling you prefer).
- `contactEmail` — the school's email address.
- `isNonProfit` — set to `true` or `false` depending on the school's status.
- The calendar dates — replace the placeholders with real term dates.
- The teachers — replace "Add a teacher" with real names and roles.
- The partners — replace "Add a partner" with real sponsor names.

---

## Part 3 — Add photos and the logo

Put image files into the `assets/` folder, then point to them in `content.js`.

- **Logo:** put a logo file in `assets/` and set `org.logo` to its name, e.g.
  `"assets/logo.svg"`. Leave it `""` to show the school name as text.
- **Teacher photos:** name the file in each teacher's `photo` field.
- **Partner logos:** name the file in each partner's `logo` field.

**Keep photos small.** A photo straight from a phone or camera can be 5–6 MB,
which makes the site slow. Resize photos to about 1600 pixels wide before
adding them. (In Cowork, you can simply ask: "optimize the images in the
assets folder.")

A favicon (the little icon in the browser tab) and a default social image are
already in `assets/`. You can replace them later with your own.

---

## Part 4 — Put it online with GitHub (free)

GitHub hosts the site for free. This takes about 15 minutes, once.

1. **Create a free account** at [github.com](https://github.com).
2. **Create a repository** — click **+** → **New repository**. Name it
   something simple and lowercase, like `north-alabama-korean-school`. Set it
   to **Public**. Click **Create repository**.
3. **Upload the files** — click **Add file → Upload files**. Select
   *everything inside this folder* (not the folder itself) and drag it in.
   Include the `spotlight`, `assets`, and `tools` folders. Click
   **Commit changes**.
4. **Turn on GitHub Pages** — go to **Settings → Pages**. Under **Source**,
   choose **Deploy from a branch**, pick **main** and **/ (root)**, click
   **Save**.
5. **Visit your site** — wait a minute, refresh the Pages screen, and it shows
   your live address: `https://yourname.github.io/north-alabama-korean-school/`.

(Preston has offered to handle this GitHub step.)

### Updating the site after it's live

Edit `content.js` (or `spotlight-posts.js`), then in GitHub click the file,
click the **pencil** to edit, paste your changes, and **Commit changes**. The
live site updates itself within a minute.

---

## Part 5 — Connect the newsletter (MailerLite)

The site has a newsletter signup box at the bottom. To make it work:

1. Create a free account at [mailerlite.com](https://www.mailerlite.com)
   (free for up to 1,000 subscribers).
2. In MailerLite, create a **landing page** or **embedded form** for signups.
3. Copy that form's web address (URL).
4. In `content.js`, find `newsletter` → `signupUrl` and paste the URL there.

Now the signup button sends people to your MailerLite form, which stores their
email and lets you send the monthly school newsletter.

---

## Part 6 — Connect the forms (Google Forms)

Two buttons on the site expect a form link — registration, and volunteer/teacher
interest.

1. **Use a dedicated school Google account** to create the forms — not a
   personal account. Forms and their responses belong to whoever's account
   they live in, so the school's account keeps them safe long-term.
2. Create a Google Form for **registration** and one for **volunteer/teacher
   interest**.
3. For each form, click **Send → link** and copy the link.
4. In `content.js`, paste the registration link into `enroll` → `cta` →
   `buttonHref`, and the volunteer link into `join` → `cta` → `buttonHref`.

---

## Part 7 — Set up donations

The Support section has two giving paths:

- **Zelle** — no fees, 100% reaches the school. Zelle has no website button, so
  in `content.js` (under `partners` → `support`) replace the second card's
  button label with the school's real Zelle email or phone number.
- **Online donations** — for a one-click button with automatic receipts,
  consider [Zeffy](https://www.zeffy.com) (it is free for non-profits). Create
  a donation page there, then paste its link into the first support card's
  `buttonHref`.

If the school is a registered 501(c)(3), set `org.isNonProfit` to `true` so the
tax-deductible note appears.

---

## Part 8 — Use your own domain name (optional but recommended)

A real address like `northalabamakoreanschool.org` looks far more professional
than the free github.io address — especially when stories are shared online.

1. Buy the domain from a registrar (Namecheap, Cloudflare — about $12/year).
2. In GitHub: **Settings → Pages → Custom domain**, type your domain, save.
3. On the registrar's DNS page, add the records GitHub asks for.
4. **Important:** once the domain is final, find-and-replace the placeholder
   `https://northalabamakoreanschool.org` everywhere it appears in the project
   (in `content.js`, `index.html`, `spotlight/index.html`, `robots.txt`,
   `sitemap.xml`, and `tools/build-spotlight.mjs`), then rebuild the Spotlight
   pages (see SPOTLIGHT-GUIDE.md). In Cowork you can just ask for this.

---

## Quick troubleshooting

**The site is blank.** A quote, comma, or bracket was removed from `content.js`
or `spotlight-posts.js`. Undo the last edit and save.

**A change isn't showing.** GitHub takes a minute to rebuild. Wait, then
refresh. On a phone or computer that visited before, do a hard refresh.

**A photo isn't showing.** Check that the file name in `content.js` exactly
matches the file in `assets/` — including capital letters.

**A shared story looks plain on Facebook.** The Spotlight pages were not rebuilt
after editing. See SPOTLIGHT-GUIDE.md, "Publish your story."

**I want to change the site's color.** Open `style.css` and change the
`--accent` value near the top — that one value re-tints the whole site.

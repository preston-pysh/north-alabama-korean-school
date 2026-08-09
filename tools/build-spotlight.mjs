/* ============================================================
   Spotlight page generator
   ------------------------------------------------------------
   Reads  content.js  and  spotlight-posts.js  and writes a real
   HTML page for every article — one in English, one in Korean —
   each with its own Open Graph tags baked in. Those baked-in tags
   are what make a shared link look beautiful on Facebook,
   Instagram, and texts (social crawlers do not run JavaScript).

   It also regenerates sitemap.xml.

   RUN IT after every edit to spotlight-posts.js:
       node tools/build-spotlight.mjs

   You do not need to edit this file.
   ============================================================ */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/* the logo emblem and footer skyline appear once their files exist */
const HAS_LOGO = existsSync(join(ROOT, "assets", "logo-emblem.png"));
const HAS_SKYLINE = existsSync(join(ROOT, "assets", "silhouettes", "skyline.png"));

/* ---- load the two data files (they assign onto `window`) ---- */
function loadGlobal(file, prop) {
  const code = readFileSync(join(ROOT, file), "utf8");
  const window = {};
  // eslint-disable-next-line no-eval
  eval(code);
  return window[prop];
}
const SITE  = loadGlobal("content.js", "SITE") || {};
const POSTS = loadGlobal("spotlight-posts.js", "SPOTLIGHT_POSTS") || [];

/* ---- helpers ---- */
function t(val, lang) {
  if (val == null) return "";
  if (typeof val === "string") return val;
  return val[lang] || val.en || val.ko || "";
}
function esc(str) {
  return String(str == null ? "" : str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
/* After escaping, turn a safe [text](url) markdown link into a real <a>.
   Lets body paragraphs carry links (e.g. mailto:) without exposing raw HTML. */
function mdLinks(safe) {
  return String(safe).replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    (m, text, url) =>
      `<a href="${url}" style="color:var(--accent);text-decoration:underline;font-weight:600;">${text}</a>`
  );
}

const SITE_URL = (SITE.siteUrl || "https://northalabamakoreanschool.org")
  .replace(/\/+$/, "");
const ORG  = SITE.org || {};
const NAV  = SITE.nav || {};

/* fixed bilingual chrome for article pages */
const STR = {
  allStories:  { en: "All stories", ko: "모든 이야기" },
  by:          { en: "By", ko: "글" },
  shareLabel:  { en: "Share this story", ko: "이야기 공유하기" },
  shareNative: { en: "Share", ko: "공유하기" },
  shareCopy:   { en: "Copy link", ko: "링크 복사" },
  ctaTitle:    { en: "Come learn with us.", ko: "우리와 함께 배워요." },
  ctaText: {
    en: "Korean language and culture classes for children and families across North Alabama. New families are welcome any term.",
    ko: "북알라바마 어린이와 가정을 위한 한국어·한국문화 수업입니다. 새로운 가정은 어느 학기든 환영합니다."
  },
  ctaButton:   { en: "Enroll your child", ko: "자녀 등록하기" },
  toKorean:    { en: "이 글을 한국어로 읽기 →", ko: "" },
  toEnglish:   { en: "", ko: "Read this story in English →" }
};

function orgName(lang) {
  return t(ORG.name, lang) || "North Alabama Korean School";
}

/* the Korean silhouettes — each article gets one, varied by slug */
const SILHOUETTES = [
  "fun-foodcart", "fun-hareubang", "fun-lantern", "hanok-village",
  "landmark-gate", "landmark-pagoda", "landmark-pavilion",
  "landmark-tower", "motif-blossom", "skyline", "hero-landscape"
];
function hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/* ---- render one article page ---- */
function renderArticle(post, lang) {
  const isKo  = lang === "ko";
  const up    = isKo ? "../../../" : "../../";   // path back to site root
  const slug  = post.slug;

  /* one Korean silhouette per article, varied by the slug */
  const silName = SILHOUETTES[hashStr(slug) % SILHOUETTES.length];
  const silSide = ((hashStr(slug) >> 4) % 2) ? "left" : "right";

  const canonical = `${SITE_URL}/spotlight/${slug}/${isKo ? "ko/" : ""}`;
  const enUrl     = `${SITE_URL}/spotlight/${slug}/`;
  const koUrl     = `${SITE_URL}/spotlight/${slug}/ko/`;
  /* Relative links use an explicit index.html so they work both in
     local preview (double-click) and on a web server. */
  const enHref      = isKo ? "../index.html" : "index.html";
  const koHref      = isKo ? "index.html" : "ko/index.html";
  const siblingHref = isKo ? "../index.html" : "ko/index.html";

  const title = t(post.title, lang);
  const dek   = t(post.dek, lang);
  const cat   = t(post.category, lang);
  const author = t(post.author, lang) || orgName(lang);

  const imageAbs = post.image
    ? `${SITE_URL}/${post.image}`
    : `${SITE_URL}/assets/social-default.jpg`;

  const dateObj = new Date(post.date + "T00:00:00");
  const prettyDate = isNaN(dateObj) ? post.date
    : dateObj.toLocaleDateString(isKo ? "ko-KR" : "en-US",
        { year: "numeric", month: "long", day: "numeric" });

  /* optional in-article photos.
     gallery: [{ src, alt:{en,ko}, caption:{en,ko}, after: <paragraph number> }]
     "after" is which body paragraph the photo follows (1 = after the first
     paragraph). Leave it off and the photo lands at the end of the body. */
  function galleryFigure(g) {
    return `<figure class="article-hero">
          <img src="${esc(up + g.src)}" alt="${esc(t(g.alt, lang))}">${
      g.caption
        ? `\n          <figcaption>${esc(t(g.caption, lang))}</figcaption>`
        : ""}
        </figure>`;
  }
  const paras = post.body || [];
  const gallery = Array.isArray(post.gallery) ? post.gallery : [];
  const bodyHtml = paras
    .map((p, i) => {
      const figs = gallery
        .filter((g) => g && g.src && Number(g.after) === i + 1)
        .map(galleryFigure);
      return [`<p>${mdLinks(esc(t(p, lang)))}</p>`, ...figs].join("\n        ");
    })
    .concat(
      gallery
        .filter((g) => {
          const n = Number(g && g.after);
          return g && g.src && !(n >= 1 && n <= paras.length);
        })
        .map(galleryFigure)
    )
    .join("\n        ");

  /* optional closing image (e.g. the recruitment poster) after the body */
  const endFigure = post.endImage
    ? `\n\n      <figure class="article-hero article-endimage" style="max-width:540px;margin:2.5rem auto 0;">
        <img src="${esc(up + post.endImage)}" alt="${esc(t(post.endImageAlt, lang))}" style="width:100%;height:auto;border-radius:14px;">${
        post.endImageCaption
          ? `\n        <figcaption style="margin-top:.7rem;font-size:.85rem;color:#6e6e73;text-align:center;">${esc(t(post.endImageCaption, lang))}</figcaption>`
          : ""}
      </figure>`
    : "";

  const navLink = (key, hash) =>
    `<a href="${up}index.html#${hash}">${esc(t(NAV[key], lang))}</a>`;

  const heroFigure = post.image
    ? `<figure class="article-hero">
        <img src="${esc(up + post.image)}" alt="${esc(t(post.imageAlt, lang))}">
      </figure>`
    : "";

  const langSwitch = isKo
    ? `<a href="${siblingHref}">${esc(STR.toEnglish.ko)}</a>`
    : `<a href="${siblingHref}">${esc(STR.toKorean.en)}</a>`;

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: dek,
    image: imageAbs,
    datePublished: post.date,
    inLanguage: isKo ? "ko" : "en",
    author: { "@type": "Organization", name: orgName(lang) },
    publisher: { "@type": "Organization", name: orgName(lang) },
    mainEntityOfPage: canonical
  });

  return `<!DOCTYPE html>
<html lang="${isKo ? "ko" : "en"}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>${esc(title)} · ${esc(orgName(lang))}</title>
  <meta name="description" content="${esc(dek)}" />
  <link rel="canonical" href="${esc(canonical)}" />
  <link rel="alternate" hreflang="en" href="${esc(enUrl)}" />
  <link rel="alternate" hreflang="ko" href="${esc(koUrl)}" />

  <!-- Social preview — baked in so Facebook/Instagram/X show it correctly -->
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="${esc(orgName(lang))}" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(dek)}" />
  <meta property="og:url" content="${esc(canonical)}" />
  <meta property="og:image" content="${esc(imageAbs)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="${isKo ? "ko_KR" : "en_US"}" />
  <meta property="article:published_time" content="${esc(post.date)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(dek)}" />
  <meta name="twitter:image" content="${esc(imageAbs)}" />

  <link rel="icon" type="image/png" href="${up}assets/favicon.png" />
  <link rel="stylesheet" href="${up}style.css" />
  <script type="application/ld+json">${jsonLd}</script>
</head>
<body class="article-page">
  <div class="article-sil article-sil-${silSide}" style="background-image:url('${up}assets/silhouettes/${silName}.png')"></div>

  <header class="nav">
    <div class="nav-inner">
      <a class="nav-logo" href="${up}index.html">${
        HAS_LOGO ? `<img class="nav-logo-emblem" src="${up}assets/logo-emblem.png" alt="">` : ""
      }<span>${esc(orgName(lang))}</span></a>
      <button class="nav-toggle" id="navToggle" aria-label="Menu"><span></span><span></span></button>
      <nav class="nav-links" id="navLinks">
        <div class="lang-toggle">
          <a href="${enHref}" class="${isKo ? "" : "active"}">EN</a>
          <a href="${koHref}" class="${isKo ? "active" : ""}">한국어</a>
        </div>
        ${navLink("about", "about")}
        ${navLink("spotlight", "spotlight")}
        ${navLink("programs", "programs")}
        ${navLink("join", "join")}
        <a href="${up}index.html#enroll" class="nav-cta">${esc(t(NAV.enroll, lang))}</a>
      </nav>
    </div>
  </header>

  <main>
    <article class="article">
      <div class="article-top">
        <a class="article-back" href="${up}spotlight/index.html">&larr; ${esc(t(STR.allStories, lang))}</a>
        <div class="article-cat">${esc(cat)}</div>
        <h1 class="article-title">${esc(title)}</h1>
        <p class="article-dek">${esc(dek)}</p>
        <div class="article-byline">${esc(t(STR.by, lang))} ${esc(author)} · ${esc(prettyDate)}</div>
      </div>

      ${heroFigure}

      <div class="article-body">
        ${bodyHtml}
      </div>${endFigure}

      <div class="share-row">
        <div class="share-label">${esc(t(STR.shareLabel, lang))}</div>
        <div class="share-buttons">
          <button class="share-btn share-primary" data-share="native">${esc(t(STR.shareNative, lang))}</button>
          <a class="share-btn" data-share="facebook" target="_blank" rel="noopener">Facebook</a>
          <a class="share-btn" data-share="x" target="_blank" rel="noopener">X</a>
          <button class="share-btn" data-share="copy">${esc(t(STR.shareCopy, lang))}</button>
        </div>
      </div>

      <div class="article-cta">
        <h3>${esc(t(STR.ctaTitle, lang))}</h3>
        <p>${esc(t(STR.ctaText, lang))}</p>
        <a class="btn btn-primary" href="${up}index.html#enroll">${esc(t(STR.ctaButton, lang))}</a>
      </div>

      <p class="article-langswitch">${langSwitch}</p>
    </article>
  </main>

  <footer class="footer">
    <div class="wrap">
      ${HAS_LOGO ? `<img class="footer-logo" src="${up}assets/logo-emblem.png" alt="">` : ""}
      <div class="footer-name">${esc(orgName(lang))}</div>
      <div class="footer-line">${esc(t(ORG.location, lang))}</div>
      <div class="footer-fine">&copy; ${new Date().getFullYear()} ${esc(orgName(lang))}.</div>
      ${HAS_SKYLINE ? `<img class="footer-skyline" src="${up}assets/silhouettes/skyline.png" alt="">` : ""}
    </div>
  </footer>

  <script>
    (function () {
      var url = window.location.href.split("#")[0];
      var title = ${JSON.stringify(title)};
      document.querySelectorAll("[data-share]").forEach(function (b) {
        var kind = b.getAttribute("data-share");
        if (kind === "facebook") {
          b.href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
        } else if (kind === "x") {
          b.href = "https://twitter.com/intent/tweet?text=" +
            encodeURIComponent(title) + "&url=" + encodeURIComponent(url);
        } else if (kind === "copy") {
          b.addEventListener("click", function () {
            navigator.clipboard && navigator.clipboard.writeText(url);
            var o = b.textContent; b.textContent = "✓";
            setTimeout(function () { b.textContent = o; }, 1500);
          });
        } else if (kind === "native") {
          b.addEventListener("click", function () {
            if (navigator.share) {
              navigator.share({ title: title, url: url });
            } else {
              navigator.clipboard && navigator.clipboard.writeText(url);
              var o = b.textContent; b.textContent = "✓";
              setTimeout(function () { b.textContent = o; }, 1500);
            }
          });
        }
      });
      var tg = document.getElementById("navToggle"),
          ln = document.getElementById("navLinks");
      if (tg && ln) tg.addEventListener("click", function () { ln.classList.toggle("open"); });
    })();
  </script>
</body>
</html>
`;
}

/* ---- write everything ---- */
let written = 0;
const sitemapUrls = [
  { loc: `${SITE_URL}/`, pri: "1.0" },
  { loc: `${SITE_URL}/spotlight/`, pri: "0.9" }
];

for (const post of POSTS) {
  if (!post || !post.slug) {
    console.warn("! Skipped a post with no slug.");
    continue;
  }
  const enDir = join(ROOT, "spotlight", post.slug);
  const koDir = join(enDir, "ko");
  mkdirSync(koDir, { recursive: true });

  writeFileSync(join(enDir, "index.html"), renderArticle(post, "en"));
  writeFileSync(join(koDir, "index.html"), renderArticle(post, "ko"));
  written += 2;

  sitemapUrls.push({ loc: `${SITE_URL}/spotlight/${post.slug}/`, pri: "0.7" });
  sitemapUrls.push({ loc: `${SITE_URL}/spotlight/${post.slug}/ko/`, pri: "0.7" });
  console.log(`  ✓ ${post.slug}  (English + 한국어)`);
}

/* ---- sitemap ---- */
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<!-- Generated by tools/build-spotlight.mjs. Do not edit by hand. -->\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  sitemapUrls.map((u) =>
    `  <url>\n    <loc>${u.loc}</loc>\n` +
    `    <changefreq>weekly</changefreq>\n    <priority>${u.pri}</priority>\n  </url>`
  ).join("\n") +
  `\n</urlset>\n`;
writeFileSync(join(ROOT, "sitemap.xml"), sitemap);

console.log(`\nDone. Wrote ${written} article page(s) for ${POSTS.length} story/stories,`);
console.log(`plus sitemap.xml. Commit and push to publish.`);

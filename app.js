/* ============================================================
   North Alabama Korean School — site engine
   You should not need to edit this file. All content lives in
   content.js (the homepage) and spotlight-posts.js (the blog).
   ============================================================ */

(function () {
  "use strict";

  var SITE  = window.SITE || {};
  var POSTS = window.SPOTLIGHT_POSTS || [];

  /* ---------- language ---------- */
  /* The site is bilingual. The chosen language is remembered in the
     browser so a returning visitor stays in their language. */
  var LANG = "en";
  try {
    var saved = localStorage.getItem("naks-lang");
    if (saved === "ko" || saved === "en") LANG = saved;
  } catch (e) {}

  /* t() takes either a plain string or an { en, ko } pair and returns
     the right one for the active language. */
  function t(val) {
    if (val == null) return "";
    if (typeof val === "string") return val;
    return val[LANG] || val.en || val.ko || "";
  }

  var $ = function (id) { return document.getElementById(id); };

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  /* Simple line icons, drawn in the brand color. Referenced by name
     from content.js (e.g. icon: "heart"). To add one, add an entry. */
  var ICONS = {
    heart:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M20.8 5.1a5.4 5.4 0 0 0-7.7 0l-1.1 1.1-1.1-1.1a5.4 5.4 0 1 0-7.7 ' +
      '7.7l1.1 1.1 7.7 7.7 7.7-7.7 1.1-1.1a5.4 5.4 0 0 0 0-7.7z"/></svg>',
    community:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="9" cy="8" r="3.3"/>' +
      '<path d="M3.7 19.5a5.3 5.3 0 0 1 10.6 0"/>' +
      '<path d="M16 5.2a3.3 3.3 0 0 1 0 6.4"/>' +
      '<path d="M17.6 14.4a5.3 5.3 0 0 1 2.7 5.1"/></svg>',
    award:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="12" cy="9" r="6"/>' +
      '<path d="M8.2 14.2 6.5 21l5.5-3 5.5 3-1.7-6.8"/></svg>'
  };

  /* probe-load an image: only swaps it in once it is confirmed to
     load, so a missing file never leaves a broken-image icon. */
  function probeImage(src, onload) {
    if (!src) return;
    var probe = new Image();
    probe.onload = function () { onload(); };
    probe.src = src;
  }

  /* Where do Spotlight article folders sit, relative to this page?
     On the homepage they're under spotlight/; on the Spotlight
     index page (already inside /spotlight/) they're alongside. */
  var ARTICLE_BASE =
    location.pathname.indexOf("/spotlight/") !== -1 ? "" : "spotlight/";

  /* path from the current page back to the site root, so images
     resolve whether we're on the homepage or the /spotlight/ page */
  var ROOT_PREFIX =
    location.pathname.indexOf("/spotlight/") !== -1 ? "../" : "";
  function asset(p) { return p ? ROOT_PREFIX + p : p; }

  function articleUrl(slug) {
    /* Explicit index.html so links work when previewed locally
       (double-clicking a file) as well as on a web server. */
    return ARTICLE_BASE + slug + "/" + (LANG === "ko" ? "ko/" : "") + "index.html";
  }

  /* ---------- shared helpers ---------- */
  var ORG = SITE.org || {};
  var UI  = SITE.ui  || {};

  function orgName() { return t(ORG.name) || "North Alabama Korean School"; }

  function sectionHead(data) {
    return (
      (data.eyebrow ? '<p class="eyebrow">' + esc(t(data.eyebrow)) + "</p>" : "") +
      (data.title ? '<h2 class="section-title">' + esc(t(data.title)) + "</h2>" : "") +
      (data.lede ? '<p class="section-lede">' + esc(t(data.lede)) + "</p>" : "")
    );
  }

  function sortedPosts() {
    return POSTS.slice().sort(function (a, b) {
      return String(b.date).localeCompare(String(a.date));
    });
  }

  function prettyDate(iso) {
    var d = new Date(iso + "T00:00:00");
    if (isNaN(d)) return iso;
    return d.toLocaleDateString(LANG === "ko" ? "ko-KR" : "en-US",
      { year: "numeric", month: "short", day: "numeric" });
  }

  /* =================================================================
     NAV — logo, link labels, language toggle, mobile menu
     ================================================================= */
  function renderNav() {
    document.title = orgName();

    var logo = $("navLogo");
    if (logo) {
      logo.textContent = orgName();
      if (ORG.logo) {
        probeImage(asset(ORG.logo), function () {
          logo.innerHTML = '<img class="nav-logo-emblem" src="' + esc(asset(ORG.logo)) +
            '" alt=""><span>' + esc(orgName()) + "</span>";
        });
      }
    }

    var nav = SITE.nav || {};
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      var key = a.getAttribute("data-nav");
      if (nav[key]) a.textContent = t(nav[key]);
    });

    /* language toggle */
    document.querySelectorAll("#langToggle button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === LANG);
      b.onclick = function () {
        var next = b.getAttribute("data-lang");
        if (next === LANG) return;
        LANG = next;
        try { localStorage.setItem("naks-lang", LANG); } catch (e) {}
        document.documentElement.lang = LANG;
        renderAll(false);
      };
    });
  }

  /* =================================================================
     HERO
     ================================================================= */
  function renderHero() {
    var host = $("hero");
    if (!host) return;
    var h = SITE.hero || {};
    var facts = (h.facts || []).map(function (f) {
      return "<span>" + esc(t(f)) + "</span>";
    }).join("");

    /* External links (Google Forms, etc.) open in a new tab so the
       visitor doesn't lose the homepage. In-page anchors stay in-tab. */
    function ctaAttrs(href) {
      return /^https?:\/\//i.test(href || "")
        ? ' target="_blank" rel="noopener"'
        : "";
    }
    var actions = "";
    if (h.ctaPrimary) {
      var p = h.ctaPrimaryHref || "#enroll";
      actions += '<a class="btn btn-primary" href="' +
        esc(p) + '"' + ctaAttrs(p) + '>' + esc(t(h.ctaPrimary)) + "</a>";
    }
    if (h.ctaSecondary) {
      var s = h.ctaSecondaryHref || "#spotlight";
      actions += '<a class="btn btn-ghost" href="' +
        esc(s) + '"' + ctaAttrs(s) + '>' + esc(t(h.ctaSecondary)) + "</a>";
    }

    host.innerHTML =
      '<div class="wrap">' +
        (h.eyebrow ? '<p class="hero-eyebrow">' + esc(t(h.eyebrow)) + "</p>" : "") +
        "<h1>" + esc(t(h.headline)) + "</h1>" +
        (h.sub ? '<p class="hero-sub">' + esc(t(h.sub)) + "</p>" : "") +
        (facts ? '<div class="hero-meta">' + facts + "</div>" : "") +
        (actions ? '<div class="hero-actions">' + actions + "</div>" : "") +
      "</div>";

    /* the logo emblem, shown above the headline once it loads */
    if (ORG.logo) {
      probeImage(asset(ORG.logo), function () {
        var wrap = host.querySelector(".wrap");
        var img = document.createElement("img");
        img.className = "hero-logo"; img.src = asset(ORG.logo); img.alt = "";
        wrap.insertBefore(img, wrap.firstChild);
      });
    }
  }

  /* =================================================================
     ABOUT
     ================================================================= */
  function renderAbout() {
    var host = $("aboutInner");
    if (!host) return;
    var a = SITE.about || {};
    var body = (a.body || []).map(function (p) {
      return "<p>" + esc(t(p)) + "</p>";
    }).join("");
    var stats = (a.stats || []).map(function (s) {
      return '<div class="stat"><div class="stat-num">' + esc(t(s.num)) +
        '</div><div class="stat-label">' + esc(t(s.label)) + "</div></div>";
    }).join("");

    host.innerHTML =
      sectionHead(a) +
      (body ? '<div class="about-body">' + body + "</div>" : "") +
      (stats ? '<div class="stat-row">' + stats + "</div>" : "");
  }

  /* =================================================================
     SPOTLIGHT — the feed of stories
     ================================================================= */
  function storyCard(post, feature) {
    var url = articleUrl(post.slug);
    var card = el("a", "story-card" + (feature ? " story-feature" : ""));
    card.href = url;

    var photo = '<div class="story-photo">' +
      '<div class="story-photo-fallback">' + esc(orgName()) + "</div></div>";

    card.innerHTML =
      photo +
      '<div class="story-body">' +
        (post.category ? '<div class="story-cat">' + esc(t(post.category)) + "</div>" : "") +
        '<h3 class="story-title">' + esc(t(post.title)) + "</h3>" +
        (post.dek ? '<p class="story-dek">' + esc(t(post.dek)) + "</p>" : "") +
        '<div class="story-foot">' +
          "<span>" + esc(prettyDate(post.date)) + "</span>" +
          '<span class="story-read">' + esc(t(UI.readMore) || "Read the story") + " &rarr;</span>" +
        "</div>" +
      "</div>";

    /* swap in the real photo once it loads */
    if (post.image) {
      probeImage(asset(post.image), function () {
        var ph = card.querySelector(".story-photo");
        ph.innerHTML = '<img src="' + esc(asset(post.image)) + '" alt="' +
          esc(t(post.imageAlt) || t(post.title)) + '">';
      });
    }
    return card;
  }

  /* Compact sidebar story card — same data shape as storyCard, but a
     smaller horizontal layout used inside the Korean Culture sidebar. */
  function compactStoryCard(post) {
    var url = articleUrl(post.slug);
    var card = el("a", "side-story-card");
    card.href = url;
    var thumb =
      '<div class="side-story-thumb">' +
        '<div class="side-story-thumb-fallback">' + esc(orgName()) + "</div>" +
      "</div>";
    card.innerHTML =
      thumb +
      '<div class="side-story-body">' +
        (post.category
          ? '<div class="side-story-cat">' + esc(t(post.category)) + "</div>"
          : "") +
        '<h4 class="side-story-title">' + esc(t(post.title)) + "</h4>" +
      "</div>";
    if (post.image) {
      probeImage(asset(post.image), function () {
        var thumbEl = card.querySelector(".side-story-thumb");
        thumbEl.innerHTML = '<img src="' + esc(asset(post.image)) + '" alt="' +
          esc(t(post.imageAlt) || t(post.title)) + '">';
      });
    }
    return card;
  }

  function renderSpotlight() {
    var host = $("spotlightInner");
    if (!host) return;
    var s = SITE.spotlight || {};
    host.innerHTML = sectionHead(s);

    var posts = sortedPosts();
    if (!posts.length) {
      host.appendChild(el("p", null,
        '<span style="color:var(--ink-faint)">' +
        esc(t(UI.noStories) || "New stories are coming soon.") + "</span>"));
      return;
    }

    /* The newest school story (e.g. "Why we show up") is the single
       prominent featured card. Falls back to the newest post of any kind. */
    var schoolPosts = posts.filter(function (p) { return p.track !== "culture"; });
    var featured = schoolPosts[0] || posts[0];
    host.appendChild(storyCard(featured, true));

    /* Everything else becomes an "older post": a compact thumbnail card
       with a short description, laid out in a simple responsive row that
       stacks on mobile. On desktop we show at most the 3 next-newest;
       anything beyond that is reached via the "View older articles" link
       below (and on mobile this whole row is hidden by CSS). */
    var older = posts.filter(function (p) { return p !== featured; });
    if (older.length) {
      var olderWrap = el("div", "spotlight-older");
      if (s.more) {
        olderWrap.appendChild(el("div", "spotlight-older-head", esc(t(s.more))));
      }
      var olderGrid = el("div", "older-grid");
      older.slice(0, 3).forEach(function (p) { olderGrid.appendChild(storyCard(p, false)); });
      olderWrap.appendChild(olderGrid);
      host.appendChild(olderWrap);
    }

    /* A quiet, full-width invitation for students to write the next story. */
    var c = SITE.culture || {};
    if (c.callout) {
      host.appendChild(el("div", "spotlight-callout", t(c.callout)));
    }

    /* The "see all stories" link sits below the split. */
    var more = el("div");
    more.innerHTML = '<p style="margin-top:34px"><a class="section-more" href="' +
      esc((ARTICLE_BASE || "") + "index.html") + '">' +
      esc(t(UI.seeAllStories) || "See all stories") +
      ' <span class="arrow">&rarr;</span></a></p>';
    host.appendChild(more);
  }

  /* =================================================================
     PROGRAMS — accordion explorer
     ================================================================= */
  function renderPrograms() {
    var host = $("programsInner");
    if (!host) return;
    var p = SITE.programs || {};
    host.innerHTML = sectionHead(p);

    var explorer = el("div", "explorer");
    (p.levels || []).forEach(function (lvl, i) {
      var topics = (lvl.topics || []).map(function (tp) {
        return "<li>" + esc(t(tp)) + "</li>";
      }).join("");
      var koName = lvl.koClassName ? t(lvl.koClassName) : "";
      var item = el("div", "exp-item");
      item.innerHTML =
        '<div class="exp-head">' +
          '<span class="exp-num">' + (i + 1) + "</span>" +
          '<span class="exp-titlewrap">' +
            '<span class="exp-title">' + esc(t(lvl.name)) + "</span>" +
            (lvl.sub ? '<span class="exp-sub">' + esc(t(lvl.sub)) + "</span>" : "") +
            (koName ? '<span class="exp-koname">' + esc(koName) + "</span>" : "") +
          "</span>" +
          '<span class="chevron"></span>' +
        "</div>" +
        '<div class="collapse"><div class="collapse-inner"><div class="exp-body">' +
          (lvl.summary ? '<p class="exp-summary">' + esc(t(lvl.summary)) + "</p>" : "") +
          (topics ? '<ul class="exp-list">' + topics + "</ul>" : "") +
        "</div></div></div>";
      item.querySelector(".exp-head").addEventListener("click", function () {
        item.classList.toggle("open");
      });
      explorer.appendChild(item);
    });
    host.appendChild(explorer);

    /* Printable, downloadable overview of all eight classes. Opens the
       in-browser viewer (program-overview.html) with a Print / Save-PDF
       button. */
    if (p.overview && p.overview.href) {
      var ov = el("div", "programs-overview");
      var link = el("a", "overview-link");
      link.href = t(p.overview.href);
      link.setAttribute("aria-label", esc(t(p.overview.label)));
      link.innerHTML =
        '<span class="overview-ic" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" ' +
            'stroke="currentColor" stroke-width="1.8" stroke-linecap="round" ' +
            'stroke-linejoin="round">' +
            '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/>' +
            '<path d="M14 3v5h5"/>' +
          "</svg>" +
        "</span>" +
        '<span class="overview-tx">' +
          '<span class="overview-label">' + esc(t(p.overview.label)) + "</span>" +
          (p.overview.note ? '<span class="overview-note">' +
            esc(t(p.overview.note)) + "</span>" : "") +
        "</span>" +
        '<span class="overview-arrow" aria-hidden="true">\u2192</span>';
      ov.appendChild(link);
      host.appendChild(ov);
    }
  }

  /* =================================================================
     CURRICULUM — the three-block "what a semester looks like" section.
     Renders the semester arc, a real sample lesson card, and the
     progress / assessment grid (with a character-education callout).
     ================================================================= */
  /* =================================================================
     CURRICULUM & CALENDAR
     "This Semester" (dated, from curriculum.events) + evergreen
     "Traditions & Celebrations" (from curriculum.traditions.bands).
     Data lives in content.js; icons are named and defined below.
     ================================================================= */
  var CAL_ICONS = {
    blossom: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="6.4" r="3" fill="currentColor" opacity=".16"/><circle cx="17" cy="10" r="3" fill="currentColor" opacity=".16"/><circle cx="15.1" cy="15.7" r="3" fill="currentColor" opacity=".16"/><circle cx="8.9" cy="15.7" r="3" fill="currentColor" opacity=".16"/><circle cx="7" cy="10" r="3" fill="currentColor" opacity=".16"/><circle cx="12" cy="11" r="2.4" fill="currentColor"/></svg>',
    medal: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5.3" fill="currentColor" opacity=".16"/><path d="M9.4 13.6L8 21l4-2 4 2-1.4-7.4" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="9" r="5.3" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 6.5l.85 1.8 1.95.25-1.45 1.35.4 1.95L12 10.9l-1.75.9.4-1.95L9.2 8.55l1.95-.25z" fill="currentColor"/></svg>',
    people: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="2.7" fill="currentColor" opacity=".16"/><circle cx="5.5" cy="9.2" r="2.2" fill="currentColor" opacity=".16"/><circle cx="18.5" cy="9.2" r="2.2" fill="currentColor" opacity=".16"/><circle cx="12" cy="7" r="2.7" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="5.5" cy="9.2" r="2.2" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="18.5" cy="9.2" r="2.2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M7.4 19.5a4.6 4.6 0 019.2 0" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M1.8 18.5a3.7 3.7 0 015.4-2.4M22.2 18.5a3.7 3.7 0 00-5.4-2.4" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
    chuseok: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="12.5" r="6.5" fill="currentColor" opacity=".16"/><circle cx="10.5" cy="12.5" r="6.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8.8 10.4a3 3 0 003.2 3.4" fill="none" stroke="currentColor" stroke-width="1.3" opacity=".65"/><path d="M19 4.2l.7 1.7 1.7.7-1.7.7L19 9l-.7-1.7L16.6 6.6l1.7-.7z" fill="currentColor"/></svg>',
    seollal: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 13.5a5.5 5.5 0 0011 0c0-2.3-1.6-3.7-3.5-4.2h-4C8.1 9.8 6.5 11.2 6.5 13.5z" fill="currentColor" opacity=".16"/><path d="M6.5 13.5a5.5 5.5 0 0011 0c0-2.3-1.6-3.7-3.5-4.2h-4C8.1 9.8 6.5 11.2 6.5 13.5z" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M9 9.3C9 7.5 10.2 6.5 12 6.5s3 1 3 2.8" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8.2 7.6L10 9.2M15.8 7.6L14 9.2" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="14" r="1.3" fill="currentColor"/></svg>',
    hangul: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="3.6" y="3.6" width="16.8" height="16.8" rx="4.5" fill="currentColor" opacity=".16"/><rect x="3.6" y="3.6" width="16.8" height="16.8" rx="4.5" fill="none" stroke="currentColor" stroke-width="1.7"/><text x="12" y="16.3" text-anchor="middle" font-size="11.5" font-weight="700" fill="currentColor" font-family="-apple-system,BlinkMacSystemFont,sans-serif">가</text></svg>',
    speech: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="10" rx="3" fill="currentColor" opacity=".16"/><rect x="9" y="3" width="6" height="10" rx="3" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M6 11a6 6 0 0012 0M12 17v3.4M9 20.4h6" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
    palette: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5C6.8 3.5 3 7 3 11.5S6.8 18.5 11 18.5c1.3 0 1.7-1 1.7-1.9 0-1.5 1-2.1 2.3-2.1H18a3 3 0 003-3C21 7 17 3.5 12 3.5z" fill="currentColor" opacity=".16"/><path d="M12 3.5C6.8 3.5 3 7 3 11.5S6.8 18.5 11 18.5c1.3 0 1.7-1 1.7-1.9 0-1.5 1-2.1 2.3-2.1H18a3 3 0 003-3C21 7 17 3.5 12 3.5z" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="8" cy="9" r="1.1" fill="currentColor"/><circle cx="12" cy="7.4" r="1.1" fill="currentColor"/><circle cx="15.6" cy="9.2" r="1.1" fill="currentColor"/></svg>',
    scroll: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h6l4 4v14H7z" fill="currentColor" opacity=".16"/><path d="M7 3h6l4 4v14H7zM13 3v4h4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M9.5 11h5M9.5 13.6h4" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 15.2l.6 1.25 1.35.18-1 .95.25 1.35L12 18.65l-1.2.65.25-1.35-1-.95 1.35-.18z" fill="currentColor"/></svg>',
    note: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="8.5" cy="17" rx="2.9" ry="2.3" fill="currentColor" opacity=".16"/><ellipse cx="8.5" cy="17" rx="2.9" ry="2.3" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M11.4 17V6.2c2.7.2 3.8 1.5 3.8 3.8" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M18.6 4l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5z" fill="currentColor"/></svg>',
    board: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="10.5" rx="2" fill="currentColor" opacity=".16"/><rect x="4" y="4" width="16" height="10.5" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M7.5 11l2.7-2.7 2 2 3.6-3.6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 14.5v3M8.5 20.5L12 17.5l3.5 3" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
    certificate: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="12" rx="2" fill="currentColor" opacity=".16"/><rect x="5" y="3" width="14" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8 7h8M8 10h5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M9.8 17.3L9 21.5l3-1.6 3 1.6-.8-4.2" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="14.8" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10.8 14.8l.8.8 1.6-1.7" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
    gradcap: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4L2.5 8 12 12l9.5-4z" fill="currentColor" opacity=".16"/><path d="M12 4L2.5 8 12 12l9.5-4z" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M6.5 10.2v4c0 1.4 2.5 2.6 5.5 2.6s5.5-1.2 5.5-2.6v-4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M21.5 8v4.2" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="21.5" cy="13" r="1" fill="currentColor"/></svg>',
    flag: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 4h11l-3 3 3 3h-11z" fill="currentColor" opacity=".16"/><path d="M6.5 4h11l-3 3 3 3h-11" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M6.5 3v18" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
    signpost: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 6H6.5l-2 2 2 2H12z" fill="currentColor" opacity=".16"/><path d="M12 12h5.5l2 2-2 2H12z" fill="currentColor" opacity=".16"/><path d="M12 6H6.5l-2 2 2 2H12M12 12h5.5l2 2-2 2H12" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
    notebook: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="10.5" height="16" rx="2" fill="currentColor" opacity=".16"/><rect x="5" y="4" width="10.5" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8.5 4v16" fill="none" stroke="currentColor" stroke-width="1.4" opacity=".65"/><path d="M11 9h2.4M11 12h2.4" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M20.4 5.4l1.8 1.8-6.2 6.2-2.4.6.6-2.4z" fill="currentColor" opacity=".16"/><path d="M20.4 5.4l1.8 1.8-6.2 6.2-2.4.6.6-2.4zM18.7 7.1l1.8 1.8" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
    notes: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="6.5" cy="17" rx="2.4" ry="1.9" fill="currentColor" opacity=".16"/><ellipse cx="16" cy="15.3" rx="2.4" ry="1.9" fill="currentColor" opacity=".16"/><ellipse cx="6.5" cy="17" rx="2.4" ry="1.9" fill="none" stroke="currentColor" stroke-width="1.7"/><ellipse cx="16" cy="15.3" rx="2.4" ry="1.9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8.9 17V7.2l9.5-2v10.1" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8.9 9.1l9.5-2" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>'
  };
  function calIcon(n) { return CAL_ICONS[n] || ""; }
  function calAccent(a) {
    if (a === "blue") return { c: "var(--accent-blue)", bg: "var(--accent-blue-bg)", bar: "var(--accent-blue)" };
    if (a === "green") return { c: "#6f8f1f", bg: "var(--accent-green-bg)", bar: "var(--accent-green)" };
    return { c: "var(--accent)", bg: "var(--accent-bg)", bar: "var(--accent)" };
  }
  function calCardBody(card) {
    var ui = (SITE.curriculum || {}).ui || {};
    var h = "";
    if (card.image) {
      h += '<div class="cc-photo"><img src="' + esc(asset(card.image)) + '" alt="' + esc(t(card.title)) + '" loading="lazy"></div>';
    }
    h += '<div class="cc-lbl">' + esc(t(ui.whatHappens) || "What happens") + "</div>";
    h += "<p>" + esc(t(card.what)) + "</p>";
    h += '<div class="cc-lbl">' + esc(t(ui.whyMatters) || "Why it matters") + "</div>";
    h += '<p class="cc-why">' + esc(t(card.why)) + "</p>";
    return h;
  }
  function calCard(card) {
    var a = calAccent(card.accent);
    return '<details class="cc-card">' +
      '<div class="cc-accentbar" style="background:' + a.bar + '"></div>' +
      "<summary>" +
        '<div class="cc-ico" style="background:' + a.bg + ';color:' + a.c + '">' + calIcon(card.icon) + "</div>" +
        '<div class="cc-head-txt">' +
          '<div class="cc-ktitle">' + esc(t(card.title)) + "</div>" +
          (card.sub ? '<div class="cc-ksub">' + esc(t(card.sub)) + "</div>" : "") +
          (card.teaser ? '<div class="cc-teaser">' + esc(t(card.teaser)) + "</div>" : "") +
        "</div>" +
        '<div class="cc-chev"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></div>' +
      "</summary>" +
      '<div class="cc-cardbody">' + calCardBody(card) + "</div>" +
    "</details>";
  }
  function calBand(band) {
    var a = calAccent(band.accent);
    var ui = (SITE.curriculum || {}).ui || {};
    var cards = (band.cards || []).map(calCard).join("");
    return '<details class="cc-band">' +
      '<summary class="cc-band-head">' +
        '<div class="cc-chip" style="background:' + a.bg + ";color:" + a.c + '">' + calIcon(band.icon) + "</div>" +
        '<div class="cc-bh-txt">' +
          "<h3>" + esc(t(band.title)) + "</h3>" +
          (band.teaser ? '<div class="cc-bh-teaser">' + esc(t(band.teaser)) + "</div>" : "") +
          (band.preview ? '<div class="cc-bh-preview">' + esc(t(band.preview)) + "</div>" : "") +
        "</div>" +
        '<div class="cc-explore">' +
          '<span class="cc-count">' + (band.cards || []).length + "</span>" +
          '<span class="cc-xlbl cc-xlbl-more">' + esc(t(ui.explore) || "Explore") + "</span>" +
          '<span class="cc-xlbl cc-xlbl-less">' + esc(t(ui.close) || "Close") + "</span>" +
          '<span class="cc-bchev"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>' +
        "</div>" +
      "</summary>" +
      '<div class="cc-grid">' + cards + "</div>" +
    "</details>";
  }
  function renderCurriculum() {
    var host = $("curriculumInner");
    if (!host) return;
    var c = SITE.curriculum || {};
    var ui = c.ui || {};
    host.innerHTML = sectionHead(c);

    /* map an event key -> its tradition card, for the "Learn more" popout */
    var cardByEvent = {};
    ((c.traditions && c.traditions.bands) || []).forEach(function (b) {
      (b.cards || []).forEach(function (cd) { if (cd.event) cardByEvent[cd.event] = cd; });
    });

    /* ---- This Semester (dated) ---- */
    var items = (c.events || []).slice().sort(function (a, b) {
      return String(a.date).localeCompare(String(b.date));
    });
    var sem = el("div", "cc-sem");
    var sh = "";
    if (ui.semester) sh += '<h3 class="cc-subhead">' + esc(t(ui.semester)) + "</h3>";
    if (ui.semesterNote) sh += '<div class="cc-semnote">' + esc(t(ui.semesterNote)) + "</div>";
    if (items.length) {
      sh += '<div class="cc-tl">';
      items.forEach(function (ev) {
        var isBreak = ev.type && ev.type.en === "Break";
        sh += '<div class="cc-tl-item' + (isBreak ? " holiday" : "") + '">';
        sh += '<div class="cc-tl-date">' + esc(prettyDate(ev.date)) + "</div>";
        sh += '<div class="cc-tl-title">' + esc(t(ev.title)) + "</div>";
        if (ev.location) sh += '<div class="cc-tl-desc">' + esc(t(ev.location)) + "</div>";
        var card = ev.event && cardByEvent[ev.event];
        if (card) {
          sh += '<details class="cc-tlx"><summary class="cc-more">' +
            '<span class="cc-more-more">' + (esc(t(ui.learnMore)) || "Learn more") + "</span>" +
            '<span class="cc-more-less">' + (esc(t(ui.hide)) || "Hide") + "</span>" +
            '<span class="cc-more-chev"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>' +
            '</summary><div class="cc-tlx-body">' + calCardBody(card) + "</div></details>";
        }
        sh += "</div>";
      });
      sh += "</div>";
    }
    sem.innerHTML = sh;
    host.appendChild(sem);

    /* ---- Traditions & Celebrations (evergreen) ---- */
    var bands = (c.traditions && c.traditions.bands) || [];
    if (bands.length) {
      var trad = el("div", "cc-trad");
      var th = "";
      if (ui.traditions) th += '<h3 class="cc-subhead cc-trad-head">' + esc(t(ui.traditions)) + "</h3>";
      if (ui.traditionsIntro) th += '<p class="cc-trad-intro">' + esc(t(ui.traditionsIntro)) + "</p>";
      th += bands.map(calBand).join("");
      trad.innerHTML = th;
      host.appendChild(trad);
    }
  }

  /* =================================================================
     ENROLL
     ================================================================= */
  function renderEnroll() {
    var host = $("enrollInner");
    if (!host) return;
    var e = SITE.enroll || {};
    host.innerHTML = sectionHead(e);

    var steps = (e.steps || []).map(function (s, i) {
      return '<div class="step">' +
        '<div class="step-num">' + (i + 1) + "</div>" +
        '<div class="step-title">' + esc(t(s.title)) + "</div>" +
        '<div class="step-text">' + esc(t(s.text)) + "</div></div>";
    }).join("");
    if (steps) host.appendChild(el("div", "steps", steps));

    if (e.cta) {
      var cta = e.cta;
      var box = el("div", "enroll-cta");
      box.innerHTML =
        "<h3>" + esc(t(cta.title)) + "</h3>" +
        "<p>" + esc(t(cta.text)) + "</p>" +
        (cta.buttonHref
          ? '<a class="btn btn-primary" href="' + esc(cta.buttonHref) +
            '" target="_blank" rel="noopener">' + esc(t(cta.buttonLabel)) + "</a>"
          : '<span class="btn btn-primary">' + esc(t(cta.buttonLabel)) + "</span>");
      host.appendChild(box);
    }
  }

  /* =================================================================
     TEACHERS
     ================================================================= */
  function initials(name) {
    return String(name).split(/\s+/).filter(Boolean).slice(0, 2)
      .map(function (w) { return w[0].toUpperCase(); }).join("");
  }
  function renderTeachers() {
    var host = $("teachersInner");
    if (!host) return;
    var tch = SITE.teachers || {};
    host.innerHTML = sectionHead(tch);

    var moreLabel = (LANG === "ko") ? "더 보기" : "Read more";
    var lessLabel = (LANG === "ko") ? "접기"     : "Show less";
    var caret =
      '<svg class="roster-more-caret" viewBox="0 0 24 24" width="14" ' +
      'height="14" fill="none" stroke="currentColor" stroke-width="2.4" ' +
      'stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M6 9l6 6 6-6"/></svg>';

    var grid = el("div", "roster-grid");
    (tch.staff || []).forEach(function (m) {
      var nm = t(m.name);
      var card = el("div", "roster-card");
      var detailHtml = m.detail
        ? esc(t(m.detail)).replace(/\n/g, "<br>")
        : "";
      card.innerHTML =
        '<div class="roster-avatar">' + esc(initials(nm || "?")) + "</div>" +
        '<div class="roster-name">' + esc(nm) + "</div>" +
        (m.role ? '<div class="roster-role">' + esc(t(m.role)) + "</div>" : "") +
        (detailHtml ? '<div class="roster-detail">' + detailHtml + "</div>" : "");
      if (m.photo) {
        probeImage(m.photo, function () {
          card.querySelector(".roster-avatar").innerHTML =
            '<img src="' + esc(m.photo) + '" alt="' + esc(nm) + '">';
        });
      }
      grid.appendChild(card);
    });
    host.appendChild(grid);

    /* Long bios (e.g. the Chairman's welcome message) are collapsed down
       to the height of the next-longest bio so the row of cards stays
       balanced, with a dropdown button to expand. Measured live so it
       adapts to the current language and column layout. */
    function applyClamp() {
      var cards = grid.querySelectorAll(".roster-card");
      var details = [];
      cards.forEach(function (c) {
        var d = c.querySelector(".roster-detail");
        if (!d) return;
        var oldBtn = c.querySelector(".roster-more");
        if (oldBtn) oldBtn.parentNode.removeChild(oldBtn);
        c.classList.remove("is-expanded");
        d.classList.remove("is-clamped");
        d.style.display = "";
        d.style.webkitLineClamp = "";
        details.push({ card: c, el: d });
      });
      if (details.length < 2) return;
      var heights = details.map(function (o) { return o.el.scrollHeight; });
      var sorted = heights.slice().sort(function (a, b) { return a - b; });
      var reference = sorted[sorted.length - 2]; // next-tallest bio
      var threshold = reference + Math.max(24, reference * 0.12);
      details.forEach(function (o) {
        if (o.el.scrollHeight <= threshold) return; // within the pack
        var lh = parseFloat(getComputedStyle(o.el).lineHeight) || 21;
        var lines = Math.max(2, Math.floor(reference / lh));
        function clamp() {
          o.el.style.display = "-webkit-box";
          o.el.style.webkitBoxOrient = "vertical";
          o.el.style.webkitLineClamp = String(lines);
          o.el.classList.add("is-clamped");
        }
        clamp();
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "roster-more";
        btn.innerHTML =
          '<span class="roster-more-label">' + moreLabel + "</span>" + caret;
        btn.addEventListener("click", function () {
          if (o.card.classList.toggle("is-expanded")) {
            o.el.classList.remove("is-clamped");
            o.el.style.display = "block";
            o.el.style.webkitLineClamp = "";
            btn.querySelector(".roster-more-label").textContent = lessLabel;
          } else {
            clamp();
            btn.querySelector(".roster-more-label").textContent = moreLabel;
          }
        });
        o.card.appendChild(btn);
      });
    }

    requestAnimationFrame(function () {
      requestAnimationFrame(applyClamp);
    });

    if (renderTeachers._resize) {
      window.removeEventListener("resize", renderTeachers._resize);
    }
    var rt;
    renderTeachers._resize = function () {
      clearTimeout(rt);
      rt = setTimeout(applyClamp, 160);
    };
    window.addEventListener("resize", renderTeachers._resize);
  }


  /* =================================================================
     JOIN US — teachers & volunteers
     ================================================================= */
  function renderJoin() {
    var host = $("joinInner");
    if (!host) return;
    var j = SITE.join || {};
    host.innerHTML = sectionHead(j);

    var benefits = (j.benefits || []).map(function (b) {
      return '<div class="feature-card">' +
        (b.icon && ICONS[b.icon]
          ? '<div class="feature-icon">' + ICONS[b.icon] + "</div>" : "") +
        '<div class="feature-title">' + esc(t(b.title)) + "</div>" +
        '<div class="feature-text">' + esc(t(b.text)) + "</div></div>";
    }).join("");
    if (benefits) host.appendChild(el("div", "feature-grid", benefits));

    if (j.volunteer) {
      var v = j.volunteer;
      var tiers = (v.tiers || []).map(function (tr) {
        return '<div class="cert-tier tier-' + esc(tr.key || "bronze") + '">' +
          '<div class="tier-dot"></div>' +
          '<div class="tier-name">' + esc(t(tr.name)) + "</div>" +
          '<div class="tier-hours">' + esc(t(tr.hours)) + "</div>" +
          (tr.note ? '<div class="tier-note">' + esc(t(tr.note)) + "</div>" : "") +
          "</div>";
      }).join("");
      var panel = el("div", "cert-panel");
      panel.innerHTML =
        "<h3>" + esc(t(v.title)) + "</h3>" +
        (v.intro ? "<p>" + esc(t(v.intro)) + "</p>" : "") +
        (tiers ? '<div class="cert-tiers">' + tiers + "</div>" : "") +
        (v.note ? '<p class="tax-note" style="margin-top:22px">' +
          esc(t(v.note)) + "</p>" : "");
      host.appendChild(panel);
    }

    if (j.cta) {
      var box = el("div", "enroll-cta");
      box.style.marginTop = "28px";
      box.innerHTML =
        "<h3>" + esc(t(j.cta.title)) + "</h3>" +
        "<p>" + esc(t(j.cta.text)) + "</p>" +
        (j.cta.buttonHref
          ? '<a class="btn btn-primary" href="' + esc(j.cta.buttonHref) +
            '" target="_blank" rel="noopener">' + esc(t(j.cta.buttonLabel)) + "</a>"
          : '<span class="btn btn-primary">' + esc(t(j.cta.buttonLabel)) + "</span>");
      host.appendChild(box);
    }
  }

  /* =================================================================
     CULTURE — Korean culture & K-pop
     ================================================================= */
  function renderCulture() {
    var host = $("cultureInner");
    if (!host) return;
    var c = SITE.culture || {};
    host.innerHTML = sectionHead(c);

    var list = el("div", "trend-list");
    (c.trends || []).forEach(function (tr) {
      var inner =
        '<span class="trend-mark">' + esc(t(tr.mark)) + "</span>" +
        '<div class="trend-body"><h3>' + esc(t(tr.title)) + "</h3>" +
        "<p>" + esc(t(tr.text)) + "</p>" +
        (tr.slug
          ? '<span class="trend-more">' +
              esc(t(UI.readMore) || "Read the story") +
              ' <span class="arrow">&rarr;</span></span>'
          : "") +
        "</div>";
      if (tr.slug) {
        var link = el("a", "trend trend-link", inner);
        /* Use articleUrl() so the link works locally (file://) — it
           appends index.html explicitly, which browsers won't infer
           from a directory URL when there's no web server. */
        link.href = articleUrl(tr.slug);
        list.appendChild(link);
      } else {
        list.appendChild(el("div", "trend", inner));
      }
    });
    host.appendChild(list);

    if (c.callout) {
      host.appendChild(el("div", "culture-cta", t(c.callout)));
    }
  }

  /* =================================================================
     PARTNERS & SUPPORT
     ================================================================= */
  /* Builds the rich Zelle donation card: recipient name + email
     in clear boxes, a copy-to-clipboard button, a scannable QR code
     (free api.qrserver.com — just an <img>, no JS dependency), and
     step-by-step instructions.

     IMPORTANT — Zelle has no public API for individuals or nonprofits:
     it's a closed network owned by the big-bank consortium (Early
     Warning Services). There's no universal "open Zelle to send to X"
     deep link. The best UX possible is: make the email impossible to
     miss, make it one click to copy, and explain the rest. */
  function buildZelleCard(sc) {
    var z = sc.zelle || {};
    var wrap = el("div", "zelle-wrap");

    /* Title and intro */
    wrap.appendChild(el("h3", null, esc(t(sc.title))));
    wrap.appendChild(el("p", null, esc(t(sc.text))));

    /* Recipient identity block — name and email in two prominent rows */
    var idBox = el("div", "zelle-id");
    idBox.innerHTML =
      '<div class="zelle-row">' +
        '<div class="zelle-row-label">' + esc(t(z.recipientLabel)) + '</div>' +
        '<div class="zelle-row-value">' + esc(t(z.recipientName)) + '</div>' +
      '</div>' +
      '<div class="zelle-row">' +
        '<div class="zelle-row-label">' + esc(t(z.emailLabel)) + '</div>' +
        '<div class="zelle-row-value zelle-email" id="zelleEmailVal">' +
          esc(z.email || "") + '</div>' +
      '</div>';
    wrap.appendChild(idBox);

    /* Copy button + QR side-by-side */
    var actions = el("div", "zelle-actions");

    var copyBtn = el("button", "zelle-copy");
    copyBtn.type = "button";
    var copyLabel = t(z.copyLabel) || "Copy email";
    var copiedLabel = t(z.copiedLabel) || "Copied!";
    copyBtn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ' +
      'aria-hidden="true">' +
      '<rect x="9" y="9" width="11" height="11" rx="2"/>' +
      '<path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>' +
      '<span class="zelle-copy-label">' + esc(copyLabel) + '</span>';
    copyBtn.addEventListener("click", function () {
      var done = function () {
        copyBtn.classList.add("done");
        copyBtn.querySelector(".zelle-copy-label").textContent = copiedLabel;
        setTimeout(function () {
          copyBtn.classList.remove("done");
          copyBtn.querySelector(".zelle-copy-label").textContent = copyLabel;
        }, 2200);
      };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(z.email || "").then(done, function () {
            legacyCopy(z.email || ""); done();
          });
        } else {
          legacyCopy(z.email || ""); done();
        }
      } catch (e) {
        legacyCopy(z.email || ""); done();
      }
    });
    actions.appendChild(copyBtn);

    /* QR code — free no-signup QR API. Encodes the email as plain text;
       phones scanning it can copy/paste into their bank's Zelle screen. */
    if (z.email) {
      var qrSrc = "https://api.qrserver.com/v1/create-qr-code/" +
        "?size=180x180&margin=2&data=" + encodeURIComponent(z.email);
      var qrBox = el("div", "zelle-qr");
      qrBox.innerHTML =
        '<img src="' + esc(qrSrc) +
          '" width="120" height="120" alt="QR code for ' + esc(z.email) + '">' +
        '<div class="zelle-qr-label">' + esc(t(z.qrLabel)) + '</div>';
      actions.appendChild(qrBox);
    }

    wrap.appendChild(actions);

    /* Step-by-step instructions */
    if (z.steps && z.steps.length) {
      var stepsBox = el("div", "zelle-steps");
      var steps = z.steps.map(function (s, i) {
        return '<li>' +
          '<span class="zelle-step-num">' + (i + 1) + '</span>' +
          '<span class="zelle-step-text">' + esc(t(s)) + '</span>' +
        '</li>';
      }).join("");
      stepsBox.innerHTML =
        '<div class="zelle-steps-heading">' + esc(t(z.stepsHeading)) + '</div>' +
        '<ol class="zelle-step-list">' + steps + '</ol>';
      wrap.appendChild(stepsBox);
    }

    return wrap;
  }

  /* Fallback clipboard copy for browsers without navigator.clipboard. */
  function legacyCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }

  function renderPartners() {
    var host = $("partnersInner");
    if (!host) return;
    var p = SITE.partners || {};
    host.innerHTML = sectionHead(p);

    /* sponsor logo wall */
    var grid = el("div", "partner-grid");
    (p.sponsors || []).forEach(function (s) {
      var card = el(s.url ? "a" : "div", "partner-card");
      if (s.url) { card.href = s.url; card.target = "_blank"; card.rel = "noopener"; }
      card.innerHTML = '<span class="partner-name">' + esc(s.name || "") + "</span>";
      if (s.logo) {
        probeImage(s.logo, function () {
          card.innerHTML = '<img class="partner-logo" src="' + esc(s.logo) +
            '" alt="' + esc(s.name || "") + '">';
        });
      }
      grid.appendChild(card);
    });
    if ((p.sponsors || []).length) host.appendChild(grid);

    /* support cards (donate + a second path). The Zelle card gets
       special handling: it shows the recipient name + email in two
       clear boxes with a copy-to-clipboard button, a scannable QR
       code, and step-by-step instructions. */
    if (p.support && p.support.length) {
      var block = el("div", "support-block");
      p.support.forEach(function (sc) {
        var card = el("div", "support-card");

        if (sc.kind === "zelle" && sc.zelle) {
          card.classList.add("zelle-card");
          card.appendChild(buildZelleCard(sc));
        } else {
          card.innerHTML =
            "<h3>" + esc(t(sc.title)) + "</h3>" +
            "<p>" + esc(t(sc.text)) + "</p>" +
            (sc.buttonLabel
              ? (sc.buttonHref
                  ? '<a class="btn btn-primary" href="' + esc(sc.buttonHref) +
                    '" target="_blank" rel="noopener">' + esc(t(sc.buttonLabel)) + "</a>"
                  : '<span class="btn btn-ghost">' + esc(t(sc.buttonLabel)) + "</span>")
              : "") +
            (sc.note ? '<div class="tax-note">' + esc(t(sc.note)) + "</div>" : "");
        }

        block.appendChild(card);
      });
      host.appendChild(block);
    }

    if (p.taxNote) {
      host.appendChild(el("p", "tax-note",
        '<span style="display:block;text-align:center;margin-top:24px">' +
        esc(t(p.taxNote)) + "</span>"));
    }

    /* newsletter signup */
    if (p.newsletter) {
      var n = p.newsletter;
      var box = el("div", "newsletter");
      box.innerHTML =
        "<h3>" + esc(t(n.title)) + "</h3>" +
        "<p>" + esc(t(n.text)) + "</p>" +
        '<form class="newsletter-form" novalidate>' +
          '<input type="email" name="email" required placeholder="' +
            esc(t(n.placeholder) || "you@example.com") + '">' +
          '<button type="submit">' + esc(t(n.buttonLabel) || "Subscribe") + "</button>" +
        "</form>" +
        (n.note ? '<p class="newsletter-note">' + esc(t(n.note)) + "</p>" : "");
      var nform = box.querySelector("form");

      /* Swap the form for a quiet thank-you once they subscribe. */
      function newsletterThanks() {
        var msg = t(n.success) || "Thanks — you're subscribed!";
        var done = el("p", "newsletter-success", "✓ " + esc(msg));
        if (nform.parentNode) nform.parentNode.replaceChild(done, nform);
        var noteEl = box.querySelector(".newsletter-note");
        if (noteEl) noteEl.parentNode.removeChild(noteEl);
      }

      if (n.formAction && n.emailField) {
        /* Post straight to the Google Form in a hidden iframe so the
           visitor never leaves the page, then show the thank-you. */
        var sink = el("iframe");
        sink.name = "naks-newsletter-sink";
        sink.setAttribute("aria-hidden", "true");
        sink.style.display = "none";
        box.appendChild(sink);
        nform.addEventListener("submit", function (ev) {
          ev.preventDefault();
          var input = nform.querySelector('input[type="email"]');
          if (!input.value || (input.checkValidity && !input.checkValidity())) {
            if (input.reportValidity) input.reportValidity();
            return;
          }
          var gf = el("form");
          gf.action = n.formAction;
          gf.method = "POST";
          gf.target = "naks-newsletter-sink";
          gf.style.display = "none";
          var fld = el("input");
          fld.type = "hidden";
          fld.name = n.emailField;
          fld.value = input.value;
          gf.appendChild(fld);
          document.body.appendChild(gf);
          gf.submit();
          setTimeout(function () {
            if (gf.parentNode) gf.parentNode.removeChild(gf);
          }, 2000);
          newsletterThanks();
        });
      } else if (n.signupUrl) {
        nform.setAttribute("action", n.signupUrl);
        nform.setAttribute("method", "get");
        nform.setAttribute("target", "_blank");
      } else {
        nform.addEventListener("submit", function (ev) {
          ev.preventDefault();
          alert(t(UI.newsletterUnset) ||
            "Newsletter signup is not connected yet. See SETUP-GUIDE.md.");
        });
      }
      host.appendChild(box);
    }
  }

  /* =================================================================
     FOOTER
     ================================================================= */
  function renderFooter() {
    var host = $("footerInner");
    if (!host) return;
    var f = SITE.footer || {};
    var year = new Date().getFullYear();

    var social = "";
    var soc = ORG.social || {};
    var socLabels = { facebook: "Facebook", instagram: "Instagram",
                      youtube: "YouTube", kakao: "KakaoTalk" };
    Object.keys(socLabels).forEach(function (k) {
      if (soc[k]) {
        social += '<a href="' + esc(soc[k]) +
          '" target="_blank" rel="noopener">' + socLabels[k] + "</a>";
      }
    });

    host.innerHTML =
      '<div class="footer-name">' + esc(orgName()) + "</div>" +
      (f.tagline ? '<div class="footer-line">' + esc(t(f.tagline)) + "</div>" : "") +
      '<div class="footer-line">' +
        (ORG.location ? esc(t(ORG.location)) + "<br>" : "") +
        (ORG.contactEmail
          ? '<a href="mailto:' + esc(ORG.contactEmail) + '">' +
            esc(ORG.contactEmail) + "</a>" : "") +
      "</div>" +
      (social ? '<div class="footer-social">' + social + "</div>" : "") +
      '<div class="footer-fine">&copy; ' + year + " " + esc(orgName()) + ". " +
        (f.fineprint ? esc(t(f.fineprint)) : "") + "</div>";

    if (ORG.logo) {
      probeImage(asset(ORG.logo), function () {
        var img = document.createElement("img");
        img.className = "footer-logo"; img.src = asset(ORG.logo); img.alt = "";
        host.insertBefore(img, host.firstChild);
      });
    }

    /* the Korean skyline that anchors the foot of the page */
    var skyline = asset("assets/silhouettes/skyline.png");
    probeImage(skyline, function () {
      var sky = document.createElement("img");
      sky.className = "footer-skyline"; sky.src = skyline; sky.alt = "";
      host.appendChild(sky);
    });
  }

  /* =================================================================
     SPOTLIGHT INDEX PAGE  (/spotlight/index.html)
     ================================================================= */
  function renderSpotlightIndex() {
    var host = $("spotlightIndexInner");
    if (!host) return;
    document.title =
      t((SITE.spotlight || {}).title) + " · " + orgName();

    var hero = $("spotlightIndexHero");
    if (hero) {
      var s = SITE.spotlight || {};
      hero.innerHTML =
        "<h1>" + esc(t(s.title) || "Spotlight") + "</h1>" +
        "<p>" + esc(t(s.lede) || "") + "</p>";
    }

    var posts = sortedPosts();
    host.innerHTML = "";
    if (!posts.length) {
      host.innerHTML = '<p style="color:var(--ink-faint)">' +
        esc(t(UI.noStories) || "New stories are coming soon.") + "</p>";
      return;
    }
    var grid = el("div", "spotlight-grid");
    posts.forEach(function (p) { grid.appendChild(storyCard(p, false)); });
    host.appendChild(grid);

    /* nav + footer on this page too */
    renderNav();
    renderFooter();
  }

  /* =================================================================
     SCROLL REVEAL
     ================================================================= */
  var revealObs = null;
  function initReveal(animate) {
    var targets = document.querySelectorAll(
      ".section .wrap > *, .hero > .wrap > *");
    if (!animate) {
      targets.forEach(function (n) { n.classList.add("reveal", "in"); });
      return;
    }
    if (!revealObs) {
      revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealObs.unobserve(e.target);
          }
        });
      }, { threshold: 0.08 });
    }
    targets.forEach(function (n) {
      if (!n.classList.contains("reveal")) {
        n.classList.add("reveal");
        revealObs.observe(n);
      }
    });
  }

  /* =================================================================
     MOBILE MENU
     ================================================================= */
  function initMenu() {
    var toggle = $("navToggle"), links = $("navLinks");
    if (!toggle || !links) return;
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  /* =================================================================
     RENDER EVERYTHING
     ================================================================= */
  function renderAll(animate) {
    document.documentElement.lang = LANG;

    if ($("spotlightIndexInner")) {
      renderSpotlightIndex();
    } else {
      renderNav();
      renderHero();
      renderAbout();
      renderSpotlight();
      renderPrograms();
      renderCurriculum();
      renderEnroll();
      renderTeachers();
      renderJoin();
      /* Culture content now appears as a sidebar inside renderSpotlight()
         — the standalone Culture section was removed for a tighter page. */
      renderPartners();
      renderFooter();
    }
    initReveal(animate);
  }

  function boot() {
    if (!window.SITE) {
      document.body.innerHTML =
        '<p style="padding:40px;font-family:sans-serif">content.js did not ' +
        'load. Make sure content.js sits next to this page.</p>';
      return;
    }
    renderAll(true);
    initMenu();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

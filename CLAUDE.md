# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The static marketing website for OAKS Solutions (www.oaks.guru). No package manager or build step for development: pages are hand-edited HTML files served as-is. `scripts/README.md` is the detailed reference for media, forms, hosting and tooling — read it before touching those areas.

## Commands

```sh
python3 scripts/serve.py 8000      # local preview with production clean URLs, 301s and 404 (reads vercel.json)
python3 scripts/check-site.py      # Playwright smoke test: every page loads with no JS errors/404s, no mobile overflow,
                                   # reduced-motion skips video, lazy video loading. Needs the server above on :8000;
                                   # set CHROME_PATH if Playwright's Chromium isn't installed.
python3 scripts/optimize-assets.py # WebP copies of referenced PNG/JPGs into assets/optimized/, rewrites page refs,
                                   # syncs index.html, converts fonts to WOFF2 (needs Pillow, fonttools, brotli)
python3 scripts/optimize-videos.py # 8s silent background clips + WebP posters into assets/video/ (needs imageio-ffmpeg)
python3 scripts/version-assets.py  # adds ?v=<hash> to every CSS/JS link; run after any CSS/JS edit, before deploying
python3 scripts/build-sites.py     # builds dist/ (gitignored) for ChatGPT Sites / Netlify Drop hosting
```

There is no linter or unit test suite; `check-site.py` is the only automated check.

## Deployment

Production is Vercel, deployed from this repo. `vercel.json` is the routing source of truth: rewrites map clean URLs (`/solutions`, `/partners`, `/trust`, `/about`, `/team`, `/contact`, `/book`, `/privacy`, `/kids-privacy`, `/terms`) to the `OAKS <Name>.dc.html` files, and redirects send old addresses (the `.dc.html` names, the retired `/case-studies` and `/technology`, legacy `/solutions/…`, `/blog`, `/careers`, `/ai-builders`) to them. Internal links must use the clean URLs. `serve.py` and `build-sites.py` both derive their routing from `vercel.json`, so add new pages/redirects there. `.vercelignore` keeps `scripts/`, `*.md`, `*.gs` etc. off the public site. Update `lastmod` in `sitemap.xml` after significant content changes.

## Page architecture

Each main page (`OAKS Home/Solutions/Partners/Trust/About/Team/Contact.dc.html`) is a self-contained "dc" document rendered client-side by a React runtime. Content and look follow the **OAKS Partner Brochure 2026** (International Edition, v1.0, Oct 2026, 12 pages): Inter, deep navy `#0f1840` with cyan `#0494c7`, photo heroes with rings/dashed-arc/coordinate decor, dotted margins, navy "Why it matters" callouts, headlines ending in a cyan full stop.

- **`<x-dc>` block** — the HTML template, using `{{ expr }}` bindings, `<sc-if value=…>` and `<sc-for list=… as=…>`, styled with classes from `assets/site.css`. Native media attributes inside `<x-dc>` use the `sc-camel-src` / `sc-camel-poster` encoding so the parser doesn't fetch placeholders before React renders. The runtime wraps each `{{ }}` value in `<span class="sc-interp">`, so CSS aimed at a labelled span must use a child selector (`.stat > span`). The HTML parser drops or moves `<sc-for>` inside `<table>`/`<select>`, so the launch matrix is a div grid and select options are static.
- **`<script type="text/x-dc" data-dc-script>`** — a `class Component extends DCLogic` holding state, handlers and `renderVals()`. Page content lives in its `D` object (lists, stats, copy); the header/menu logic is repeated in each page.
- **`support.js`** — the dc runtime (generated bundle; do not edit). **`image-slot.js`** — image slot helper. React/ReactDOM 18.3.1 are vendored in `assets/vendor/`.
- **`assets/site.css`** — all main-page styles and brochure tokens; self-hosted Inter variable font in `assets/fonts/` (OFL). **`assets/site.js`** — solid header on scroll and `.rv` reveal-on-scroll. `assets/legal.css` styles the legal pages and 404.
- `_ds/oaksteam-design-system-…/` (old Lato design system) and `assets/player.css` are no longer loaded by any page; `assets/responsive.css` is now loaded only by the legal pages and 404.
- **`media.js`** — shared video behaviour: `[data-oaks-player]` film player, one-video-at-a-time across films/YouTube embeds (embeds need `enablejsapi=1`), lazy `video[data-src]` background clips, reduced-motion/data-saver handling.
- **`forms.js`** posts enquiries to a Google Apps Script (`google-sheets-apps-script.gs`); success is shown only on an `{"ok":true}` reply. After changing the `.gs`, publish a new version of the *existing* deployment so the URL in `forms.js` stays valid.

The legal pages (`Privacy Policy`, `Kids Privacy and Safety`, `Terms and Conditions`) are plain HTML with no JS dependency; see `scripts/legal-pages-notes.md`.

## Invariants to keep

- **`index.html` must be byte-identical to `OAKS Home.dc.html`.** After editing the homepage, `cp "OAKS Home.dc.html" index.html`.
- **Desktop and phone copy are written separately.** Phone layout is `R.mob` (viewport < 768px) in `renderVals()`. Short phone strings live in `CP` objects as `[desktop, phone]` pairs exposed as `R.cp.<key>`; on the Solutions page `D.MB` overrides each solution's lede and why-it-matters line on mobile. When changing copy, update both versions.
- Content follows the OAKS Partner Brochure 2026. Six offerings, linkable via `/solutions#assessments`, `#surveys`, `#document-intelligence`, `#upskilling`, `#dedicated-pods`, `#custom-ai`; the first four have full sections (the platform, what it does, rollout box, case study, why it matters). Pricing lives on `/partners#pricing` (€25/hr blended, pricing basis per model, worked 4-person pod example); procurement Q&A and the supplier fact sheet on `/trust#procurement`. `/pricing` and `/procurement` redirect there. The brochure's two QR codes point to `oaks.guru/trust` (sub-processor register at `/trust#sub-processors`; `/sub-processors` redirects there) and `oaks.guru/book` (the dedicated Book page, sharing its form with `/contact`); keep both addresses working. Malta entity: OAKS SIYA Europe Limited, Reg. C 117377, VAT MT33213010, Centris Business Gateway II, Birkirkara; EU desk +356 9978 6876; DPO Navyatha Avula. The former Indian government programme pages are retired.
- Reference optimized images from `assets/optimized/` (WebP); originals stay in `assets/` and `export-assets/`. Brochure photography is `assets/optimized/brochure-*.webp`. Decorative stock footage is self-hosted as `assets/video/stock-pexels-<id>.mp4` (1920px, 12 s, made by `optimize-videos.py`) and labelled "Illustrative footage"; the SIYA product film streams from heysiya.tech through the `[data-oaks-player]` player.
- Every page carries its own static title, meta description, canonical URL and Open Graph/Twitter tags; keep them in sync when adding or renaming pages.

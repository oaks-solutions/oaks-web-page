Performance tools

- `optimize-assets.py` creates smaller WebP copies of referenced images and WOFF2 fonts. Originals remain available. This also syncs the homepage to index.html. Requires Pillow, fonttools and brotli.
- `optimize-videos.py` creates silent hero/background clips with fast-start MP4 metadata and WebP posters, plus a 960px `-sm` cut of each for phones. Requires imageio-ffmpeg and network access to the original videos.
- `serve.py` previews the site locally with the same clean URLs, 301 redirects and 404 page as production (it reads `vercel.json`): `python3 scripts/serve.py 8000`, then open http://localhost:8000/.
- `check-site.py` checks all pages, mobile layout, reduced-motion handling and viewport-driven video loading. Requires Playwright and a server on port 8000. Set CHROME_PATH to an installed Chromium executable if needed.

The homepage is also served directly from index.html. Keep it in sync with OAKS Home.dc.html after editing the homepage.

`_headers` supplies caching rules on Netlify/Cloudflare Pages. On other static hosts, configure equivalent caching and enable gzip/Brotli compression for HTML, CSS, JavaScript, JSON and SVG. The basic Python preview server does not apply `_headers` or response compression.

Full programme films and third-party embeds remain available from their original providers; only decorative footage is clipped. Programme films use the shared player (a `[data-oaks-player]` wrapper around `video[data-film]`, styled by assets/player.css): they show the poster and a play button, load only when played, and have play/pause, seek, time, mute and fullscreen controls. media.js lets only one film, native video or YouTube embed play at a time (YouTube embeds need `enablejsapi=1`), pauses silent background clips while one plays, pauses a film when it scrolls offscreen, Background clips (`video[data-src]`) can get a pause button with `data-oaks-bg` inside a `data-oaks-bg-scope` element. Reduced-motion and data-saving preferences suppress automatic video downloads; hero play controls can still start footage explicitly.

Native media attributes inside x-dc use the runtime’s supported sc-camel-src/sc-camel-poster encoding. This prevents the HTML parser from fetching template placeholders or hidden media before React renders them.

Local React/React DOM are the unmodified 18.3.1 production UMD files, including their license comments. They load in order before media.js, assets/site.js and the dc runtime, removing startup CDN dependencies.

Hosting and addresses

The live site (www.oaks.guru) is deployed by Vercel from this repository. `vercel.json` gives every page a clean address (/solutions, /partners, /trust, /about, /team, /contact, /book, /privacy, /kids-privacy, /terms) and sends 301 redirects from old addresses (/index.html, the `OAKS%20….dc.html` files, the old /solutions/… pages, /case-studies and /technology, /blog, /careers, /ai-builders). Internal links use the clean addresses. `.vercelignore` keeps scripts, notes and the Apps Script source off the public site. `robots.txt` and `sitemap.xml` sit at the root; update `lastmod` in the sitemap after significant content changes. `404.html` is served for unknown addresses.

Solutions can be linked directly: /solutions#assessments, #surveys, #document-intelligence, #upskilling, #content-as-a-service, #custom-ai. /partners#launch is the launch matrix.

Each page has a static title, meta description, canonical URL and Open Graph/Twitter tags. The share image is `assets/og-image.png` (1200×630).

Forms

forms.js only reports success after the Apps Script replies `{"ok":true}`; otherwise the visitor sees an error with the email address and phone number. Both forms include a hidden `website` honeypot field. After changing `google-sheets-apps-script.gs`, paste it into the Apps Script project and publish a new version of the existing deployment (Deploy → Manage deployments → Edit → Version: New version), so the URL in forms.js stays the same. Opening that URL in a browser must show `{"ok":true,...}`.

Footage

Decorative stock clips (Pexels licence) are self-hosted in `assets/video/stock-pexels-<id>.mp4` and labelled "Illustrative footage" where shown. The International 2026 pages use 10-second, 1280px, silent cuts made by `optimize-videos.py` (the `stock` list there says where each clip appears). Photography otherwise comes from the OAKS International 2026 brochure, as `assets/optimized/brochure-*.webp`. Replace stock with OAKS's own footage when available.

Performance tools

- `optimize-assets.py` creates smaller WebP copies of referenced images and WOFF2 fonts. Originals remain available. This also syncs the homepage to index.html. Requires Pillow, fonttools and brotli.
- `optimize-videos.py` creates silent eight-second hero/background clips with fast-start MP4 metadata and WebP posters. Requires imageio-ffmpeg and network access to the original videos.
- `check-site.py` checks all pages, mobile layout, reduced-motion handling and viewport-driven video loading. Requires Playwright and a server on port 8000. Set CHROME_PATH to an installed Chromium executable if needed.

The homepage is also served directly from index.html. Keep it in sync with OAKS Home.dc.html after editing the homepage.

`_headers` supplies caching rules on Netlify/Cloudflare Pages. On other static hosts, configure equivalent caching and enable gzip/Brotli compression for HTML, CSS, JavaScript, JSON and SVG. The basic Python preview server does not apply `_headers` or response compression.

Full programme films and third-party embeds remain available from their original providers; only decorative footage is clipped. media.js fetches programme films when visible and pauses them offscreen. Reduced-motion and data-saving preferences suppress automatic video downloads; hero play controls can still start footage explicitly.

Native media attributes inside x-dc use the runtime’s supported sc-camel-src/sc-camel-poster encoding. This prevents the HTML parser from fetching template placeholders or hidden media before React renders them.

Local React/React DOM are the unmodified 18.3.1 production UMD files, including their license comments. They load in order before the design system and runtime, removing startup CDN dependencies.

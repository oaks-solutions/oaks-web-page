# OAKS Solutions — Design System

A brand & UI design system for **OAKS Solutions Pvt Ltd** — *Online Adaptive Knowledge System* — a Hyderabad-based EdTech company.

> Link this system's styles by importing the root **`styles.css`** (it `@import`s every token + font file). Components compile into `_ds_bundle.js` (generated automatically) and are exposed on `window.OAKSDesignSystem_54b38e`.

---

## 1 · Company / product context

OAKS is one of India's leading EdTech companies (7+ years), democratizing quality education through technology. It serves **10 lakh+ students** across **Telangana, Andhra Pradesh, Jharkhand, Assam & Madhya Pradesh**, spanning **KG → Grade 12 → PG**.

**Core offering:**
- **AI-driven assessments** — handwriting recognition, adaptive question banks, real-time analytics.
- **Gamified FLN** — foundational literacy & numeracy as play (streaks, badges, rewards).
- **Hybrid NEET & IIT JEE coaching** — live + recorded, mentor support, mock tests.
- **Personalized adaptive learning** — mastery-based paths, KG to PG.
- **Skill development** — AI, IoT, cybersecurity, market-readiness.
- **Project Titli** — impact initiative providing 55,000+ Jharkhand learners tablet-based FLN.

**Audiences:** students, teachers, principals, schools, government education departments, NGOs, corporate training. Strong public-sector / government-partnership presence (e.g. Govt. of Telangana residential schools). ISO 27001 / 20000 / 14001 / 9001 certified.

### Sources used to build this system
- **Brand assets (provided):** OAKS logos (`Common_logo_Dark_Blue.png`, `Common_logo.png`, `oaks-logo.png`) and the full **Lato** TTF family.
- **Website:** https://oaks.guru/ (and `/about-us`, `/our-services`, `/solutions`, `/impact`, `/faqs`). The live site is a **JavaScript-rendered SPA** — DOM/visual scraping was not possible, so copy was gathered from rendered text, search results, and meta tags; exact visual layouts of the site/app were **not** available.
- **No codebase or Figma was provided.** The token system, components, and UI kits are therefore **brand-derived** from the logo, colors, type, and product copy — faithful, but not pixel-clones. See CAVEATS at the bottom.

---

## 2 · Content fundamentals (voice & tone)

OAKS writes with **warm, optimistic, mission-driven energy** — education as empowerment and access.

- **Person:** Mostly **"we"** (the company) addressing **"you"/students** directly and inclusively ("learning that adapts to you", "every learner"). Institutional copy uses "we deliver / we specialize".
- **Tone:** Aspirational and impact-led — "transforming education", "democratize education", "future-ready", "thriving, not just learning". Confident but never cold; community-warm (e.g. festival greetings like *"Happy Guru Purnima!"*).
- **Casing:** Sentence case for body and most headings. **OAKS** is always all-caps. Product/exam names keep their conventional casing (NEET, IIT JEE, FLN, KG-12).
- **Numbers:** Indian conventions — **"10 lakh+"**, "55,000+". Lead with impact metrics.
- **Vocabulary:** EdTech + Indian-education specific: *adaptive, gamified, hybrid, FLN, foundational literacy & numeracy, mastery, edutainment, residential schools, Gurukula*.
- **Emoji:** Used **sparingly** in friendly student-facing/social contexts (a 👋 on a dashboard greeting, a 🦋 for Project Titli). **Not** used in institutional/marketing body copy. Keep it to ≤1 per surface.
- **Punctuation:** Em-dashes for rhythm; exclamation points only in community/celebratory contexts.

**Example phrases (real OAKS voice):**
- "Transforming education for every learner in India."
- "We go beyond standard e-learning — students aren't just learning, they're thriving in a future-ready environment."
- "Quality education, accessible to all, regardless of background."

---

## 3 · Visual foundations

**Color.** Two brand anchors: **OAKS Blue `#0795C9`** (the logo's cyan-blue ring — primary actions, links, focus) and **OAKS Navy `#283C53`** (the logo's device + deepest ink — headings, dark surfaces, footers). A deep **`#0F172A`** (the site's theme color) backs full-dark sections and hero gradients. A cool neutral **slate** ramp carries text/surfaces/borders. Secondary **accents** — **amber** (rewards/streaks), **coral** (playful FLN CTAs), **teal** (progress) — add gamification energy; use them as highlights, never as the dominant field. Semantic green/red/yellow for status. See `tokens/colors.css`.

**Type.** **Lato** throughout (the only family). Display & headings in **Black (900)** with tight tracking (`-0.02em`); body in **Regular (400)**; labels/buttons/eyebrows in **Bold (700)**. Eyebrows are uppercase, `0.12em` tracking, brand-blue. No serif, no secondary display face. Scale runs 64px display → 12px overline (`tokens/typography.css`).

**Spacing & layout.** 4px base scale. Generous section padding (≈84–96px vertical on marketing). Content maxes at ~1200px (`--container-xl`), centered. Grid/flex with `gap` everywhere.

**Corner radii — friendly & rounded** (edtech, approachable). Cards `16px` (`--radius-lg`), inputs/inner `12px`, **buttons and badges are full pills** (`--radius-pill`), avatars circular. Nothing sharp.

**Cards.** White surface, `1px` subtle slate border, `16px` radius, **soft navy-tinted shadow** (`--shadow-sm`). Interactive cards lift `-3px` and deepen to `--shadow-lg` on hover. Optional colored **top accent border** (3px) — never a left-only colored border. Course cards use a gradient header band.

**Shadows.** Always **navy-tinted, never pure black** — `rgba(40,60,83,…)`. Six-step elevation + a brand-blue glow (`--shadow-brand`) for emphasis and an amber glow on reward buttons. Soft and diffuse, not harsh.

**Backgrounds.** Light surfaces are `--slate-50`/white. Dark/hero sections use a **diagonal navy→blue gradient** (`135deg, navy-900 → blue-800`) with a soft **radial cyan glow** and the OAKS circular mark as a motif. No photographic full-bleeds shipped (none provided); no repeating patterns or textures. No bluish-purple gradients.

**Borders.** Hairline `1px` slate (`--border-subtle`/`-default`); inputs use `1.5px`. Focus = `1.5px` blue border + 3px translucent blue ring (`--ring-brand`).

**Motion.** Quick and gentle. `--dur-fast 120ms` for hovers, `--dur-base 200ms` for cards, `--dur-slow 320ms` for progress fills. Easing `--ease-out` (decelerate) for most; `--ease-spring` for toggles/playful pops. No infinite decorative loops.

**Interaction states.**
- *Hover:* buttons darken one step (blue-500→600); ghost/outline get a tinted fill; cards lift.
- *Press:* buttons **scale to 0.97** (tactile shrink), no color change beyond hover.
- *Disabled:* 50% opacity, `not-allowed`.
- *Focus:* blue ring (above).

**Transparency & blur.** Sticky nav uses `rgba(255,255,255,0.88)` + `backdrop-filter: blur(12px)`. Translucent white badges sit on gradient bands. Used sparingly — chrome and overlays only.

**Imagery vibe.** Brand mark is the hero motif. Where photography is used it should read **bright, warm, human** (real Indian classrooms/students) — none shipped here; use placeholders.

---

## 4 · Iconography

- **System:** the **OaksTeam HR Portal icon set** — the official set (see `components/core/icons.card.html`). **24×24, 2px stroke, round caps & joins**, consistent & pixel-perfect. **Strictly use these icons in the UI** — no ad-hoc glyphs.
- **Delivery:** bundled as **inline SVG** in `components/core/Icon.jsx`, exposed on the namespace as `OAKSDesignSystem_54b38e.Icon` — `<Icon name="payroll" size={28} color="var(--blue-500)" />`. A standalone copy lives at `hr_portal/icons.jsx` (`window.HRIcon`) for non-bundled apps (e.g. `auth.jsx`). The legacy `ui_kits/learning_app/Icons.jsx` (`window.OAKSLearningIcon`) remains as a fallback only.
- **Names:** grouped 1:1 with the sheet — Employee Management, Dashboard & Overview, Attendance & Time, Leave Management, Payroll & Compensation, Performance Management, Recruitment, Documents & Files, Other Essentials. Common aliases (`users`, `mail`, `lock`, `check`, `arrowRight`, `zap`, …) included. Full list: `import { ICON_NAMES } from "Icon"`.
- **Color:** icons inherit `currentColor`; accent icons take a brand/semantic token (e.g. coral for energy, amber for streaks).
- **Emoji as icons:** only in playful student contexts (dashboard 👋), never in UI chrome or marketing.
- **Unicode glyphs:** the ▶ play and → arrow appear inline in CTAs; prefer the Lucide `play`/`arrowRight` icons in app UI.
- **Logos** live in `assets/logos/`: `oaks-logo.png` (full, dark wordmark — light bg), `oaks-logo-white.png` (full, white wordmark — dark bg), `oaks-mark.png` (circular mark — app icon / motif).

---

## 5 · Index / manifest

**Root**
- `styles.css` — entry point (`@import`s only).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter for portable use.

**`tokens/`** — `fonts.css` (Lato @font-face ×10), `colors.css`, `typography.css`, `spacing.css` (spacing/radii/shadows/motion/layout), `base.css` (element defaults + helper classes `.oaks-eyebrow`, `.oaks-display`).

**`assets/`** — `fonts/` (Lato TTFs), `logos/` (3 logos).

**`components/core/`** — reusable primitives (exposed on `window.OAKSDesignSystem_54b38e`):
`Button`, `Badge`, `Card`, `Input`, `ProgressBar`, `Avatar`, `Switch`, `StatTile`, `Tabs`. Each has `.jsx` + `.d.ts` + `.prompt.md`; cards: `buttons.card.html`, `data.card.html`.

**`ui_kits/`**
- `marketing/` — oaks.guru homepage recreation (`SiteNav`, `Hero`, `SolutionsGrid`, `ImpactBand`+`SiteFooter`). Entry `index.html`.
- `learning_app/` — OAKS Learn student app (`LoginScreen`, `AppSidebar`, `Dashboard`, `QuizScreen`, `Icons`). Entry `index.html`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

---

## CAVEATS / open questions
1. **No codebase or Figma** was provided, and the live site is JS-gated — everything visual is **brand-derived** from the logo, Lato, colors, and copy. The marketing site and student app are faithful brand interpretations, **not** exact replicas. Share screenshots / code / Figma to align precisely.
2. **Lato** is the provided font — used as-is (no substitution needed). 👍
3. **Iconography** uses **Lucide** as a documented substitute (OAKS ships no icon set). Confirm or provide the real one.
4. **Accent colors** (amber/coral/teal) and the **gamification** treatment are inferred from OAKS's "gamified learning / XP / streaks" descriptions — confirm the real in-product palette.
5. No product **photography** was provided; imagery uses the logo motif + placeholders.

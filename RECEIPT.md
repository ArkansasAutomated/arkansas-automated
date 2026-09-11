# DRE-118 — arkansas-automated image/perf hygiene

**HEAD SHA:** `3a5627ccc50a2b744b5b993991f2c81ddf0fb181`  
**Commit:** `chore(arkansas-automated): DRE-118 image/perf hygiene`  
**Branch:** `grok/dre-118` (local only; not pushed)

Parent: DRE-107 at `f33a2ec` (`docs(arkansas-automated): DRE-107 RECEIPT` on `c6ea137`). Astro static site. Vite fossils already gone. No `next/image`. No marketing copy rewrites. No workshop promo.

## Inventory (before)

`src/` has no raster/svg/font files. All images live in `public/`.

| Path | Bytes | Dims | Referenced from | Verdict |
| --- | ---: | --- | --- | --- |
| `public/favicon.svg` | 150 | svg | `Base.astro` `<link rel="icon">` | keep |
| `public/favicon.ico` | 2,908 | 48×48 ICO | `Base.astro` `<link rel="icon">` | keep |
| `public/apple-touch-icon.png` | 5,601 | 180×180 PNG | `Base.astro` `<link rel="apple-touch-icon">` | keep |
| `public/favicon-96.png` | 2,910 | 96×96 PNG | none in `src/` / config | **delete** |
| `public/icon-192.png` | 6,055 | 192×192 PNG | none in `src/` / config | **delete** |
| `public/icon-512.png` | 11,798 | 512×512 PNG | none in `src/` / config | **delete** |
| `public/og-image.png` | 333,527 | 1200×630 PNG | `Base.astro` default `ogImage` | **compress in place** (live OG) |
| `public/og.png` | 98,086 | 1200×630 PNG | none in `src/` | **keep** — old live OG URL (`fd64939`); inbound share-cache hits cannot be disproven |
| `public/images/hero-workshop.webp` | 180,716 | 2048×1062 WEBP | `src/pages/index.astro` LCP | **resize+compress** |
| `public/images/workshop-hands.webp` | 79,684 | 1536×944 WEBP | `src/pages/index.astro` below-fold | **resize+compress** |
| `public/images/vendra-hero.webp` | 72,092 | 1280×720 WEBP | `src/pages/vendra.astro` LCP | keep size (already display-sized) |

No `site.webmanifest`. Layout icons are SVG + ICO + apple-touch only.

### Unused proof (pre-delete)

`rg` over the worktree excluding `node_modules` / `dist` / the DRE-107 `RECEIPT.md`:

```
favicon-96  → no matches
icon-192    → no matches
icon-512    → no matches
```

`Base.astro` icon links: `/favicon.svg`, `/favicon.ico`, `/apple-touch-icon.png`. No `rel="manifest"`. Git history (`1b9ac18`) added the raster set for SERP/PWA; DRE-107 left them because they were not Vite fossils. Still unreferenced.

`og.png` is also unreferenced in `src/`. Kept on purpose (previous live `og:image`).

## After

| Path | Before | After | Notes |
| --- | ---: | ---: | --- |
| `public/favicon-96.png` | 2,910 | deleted | unused |
| `public/icon-192.png` | 6,055 | deleted | unused |
| `public/icon-512.png` | 11,798 | deleted | unused |
| `public/og-image.png` | 333,527 | 116,209 | 1200×630 PNG palette q90, same URL |
| `public/og.png` | 98,086 | 98,086 | unchanged |
| `public/images/hero-workshop.webp` | 180,716 | 72,566 | 2048×1062 → 1280×664 webp q80 |
| `public/images/workshop-hands.webp` | 79,684 | 44,574 | 1536×944 → 1280×787 webp q80 |
| `public/images/vendra-hero.webp` | 72,092 | 72,092 | unchanged (1280 already) |

Hero column is `0.85fr` of a 1240px container (~530px CSS, ~1060px at 2x). 1280px is enough; 2048 was oversized. Same art, no new images.

### Lazy load

Three `<img>` tags on the site:

- Homepage LCP (`hero-workshop.webp`): `fetchpriority="high"` `decoding="async"` — not lazy.
- Homepage below-fold (`workshop-hands.webp`): `loading="lazy"` `decoding="async"` (already; width/height updated).
- `/vendra` LCP (`vendra-hero.webp`): added `fetchpriority="high"` `decoding="async"` — not lazy.

### Fonts (`font-display: swap`)

`@fontsource/*/400.css` and `600.css` already set `font-display: swap`, but they also emit cyrillic/greek/vietnamese/latin-ext `@font-face` rules. Switched to latin-only CSS. Dropped unused Outfit 400 (headings are 600/800).

```css
@import "@fontsource/outfit/latin-600.css";
@import "@fontsource/outfit/latin-800.css";
@import "@fontsource/inter/latin-400.css";
@import "@fontsource/inter/latin-600.css";
```

Each of those files has `font-display: swap`.

| | Font files in `dist/_astro` | Bytes |
| --- | ---: | ---: |
| Before | 40 (woff+woff2, all subsets) | 587,132 |
| After | 8 (latin 600/800 Outfit + latin 400/600 Inter) | 175,068 |

## Commands

```
npm run build
```

```
> arkansas-automated@0.0.0 build
> astro build && cp dist/sitemap-index.xml dist/sitemap.xml

18:17:55 [content] Syncing content
18:17:55 [content] Synced content
18:17:55 [types] Generated 12ms
18:17:55 [build] output: "static"
18:17:55 [build] mode: "static"
18:17:55 [build] directory: /Users/brassfieldventuresllc/Code/arkansas-automated-dre118/dist/
18:17:55 [build] Collecting build info...
18:17:55 [build] ✓ Completed in 20ms.
18:17:55 [build] Building static entrypoints...
18:17:55 [vite] ✓ built in 434ms
18:17:55 [build] ✓ Completed in 446ms.

 building client (vite)
18:17:55 [vite] ✓ 4 modules transformed.
18:17:55 [vite] dist/_astro/ai-opportunity-map.astro_astro_type_script_index_0_lang.CnAjreKi.js  7.90 kB │ gzip: 3.11 kB
18:17:55 [vite] ✓ built in 22ms

 generating static routes
18:17:55 ▶ src/pages/about.astro
...
18:17:55 ▶ src/pages/vendra.astro
18:17:55   └─ /vendra/index.html (+1ms)
18:17:55 ✓ Completed in 88ms.

18:17:55 [@astrojs/sitemap] `sitemap-index.xml` created at `dist`
18:17:55 [build] 91 page(s) built in 617ms
18:17:55 [build] Complete!
```

Exit 0. `find dist -name index.html | wc -l` → `91`.

Deleted public files absent from `dist/` (`favicon-96.png`, `icon-192.png`, `icon-512.png`). Live assets still copied: `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `og-image.png`, `og.png`, `images/hero-workshop.webp`, `images/vendra-hero.webp`, `images/workshop-hands.webp`, `robots.txt`, `pricing.md`, `llms.txt`, `sitemap.xml`.

`Base.astro` still defaults `og:image` to `/og-image.png` (1200×630).

## Git

```
[grok/dre-118 3a5627c] chore(arkansas-automated): DRE-118 image/perf hygiene
 9 files changed, 13 insertions(+), 11 deletions(-)
 delete mode 100644 public/favicon-96.png
 delete mode 100644 public/icon-192.png
 delete mode 100644 public/icon-512.png
```

HEAD: `3a5627ccc50a2b744b5b993991f2c81ddf0fb181`

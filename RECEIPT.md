# DRE-107 — arkansas-automated fossil cleanup

**HEAD SHA:** `c6ea13789071e8bc8da56c304ba116d8780ac1f9`  
**Commit:** `chore(arkansas-automated): DRE-107 fossil cleanup`  
**Branch:** `grok/dre-107` (local only; not pushed)

Parent: DRE-114 at `5cc9ba010480686c9a325ee21384bfd252801d30` (plus RECEIPT commit `fc1452e`). ESLint stack already gone. This ticket is leftover template files and unused scripts called out in that RECEIPT.

## Inventory (before)

| Path | What it was | Verdict |
| --- | --- | --- |
| `vite.config.ts` | create-vite React template (`import react from '@vitejs/plugin-react'`) | **remove** — `@vitejs/plugin-react` is not in `package.json`; Astro config lives in `astro.config.mjs` |
| `tsconfig.node.json` | Vite template; `"include": ["vite.config.ts"]` only | **remove** — only consumer of `vite.config.ts` |
| `tsconfig.app.json` | Vite template (`"types": ["vite/client"]`, `"jsx": "react-jsx"`) | **remove** — no React/JSX sources; Astro tsconfig replaces it |
| `tsconfig.json` | Vite project-references wrapper | **replace** with `extends: astro/tsconfigs/strict` |
| `check_meta.cjs` | one-off SERP title/description length scanner over `dist/` | **remove** — not an npm script, not imported |
| `check_meta_debug.cjs` | verbose twin of the above | **remove** — same |
| `public/icons.svg` | Vite template sprite (bluesky/discord/github, `#aa3bff`) | **remove** — never referenced in git history |
| `public/hero-bg.png` | 841K JPEG misnamed `.png` from initial Vite SPA | **remove** — last source use dropped in `cd3bf1f` (2026-07-15) |
| `public/images/vendra-mark.png` | added with Vendra page | **remove** — never referenced in `src/` |
| `README.md` | create-vite "React + TypeScript + Vite" template | **replace** with a 6-line Astro README (no product copy) |
| `RECEIPT-CODEX.json` | leftover Codex session receipt on another branch | **remove** — not imported, not a build input |
| `.gitignore` `dist-ssr` | Vite template ignore | **remove** that one line |

### Unused proof (pre-delete)

`rg` over the worktree excluding `node_modules` / `dist` / the DRE-114 `RECEIPT.md`:

```
vite.config        → only tsconfig.node.json include
@vitejs/plugin-react → only vite.config.ts + leftover README
check_meta         → no matches
icons.svg          → no matches
hero-bg            → no matches
vendra-mark        → no matches
src/ + astro.config.mjs → no matches for any of the above
```

`package.json` scripts (unchanged): `dev`, `build`, `preview`, `astro`. None mention `vite.config.ts` or `check_meta`.

`astro.config.mjs` imports only `astro/config` and `@astrojs/sitemap`.

## Not removed (could not prove unused, or still live)

- **`src/**` and `astro.config.mjs`:** not touched.
- **`public/og.png`:** old `og:image` URL (`fd64939`). `Base.astro` now defaults to `/og-image.png`. Kept because it was a live public URL; inbound share-cache hits cannot be disproven from the repo.
- **`public/favicon-96.png`, `icon-192.png`, `icon-512.png`:** raster set added in `1b9ac18` for SERP/PWA. Not HTML-linked (layout uses `favicon.svg` / `favicon.ico` / `apple-touch-icon.png`). Kept as public icon files, not Vite fossils.
- **`public/llms.txt`, `robots.txt`, `pricing.md`:** convention / linked files.
- **`public/images/hero-workshop.webp`, `workshop-hands.webp`, `vendra-hero.webp`:** imported from `src/pages`.
- **`.hermes/CONTENT-SPEC-v1.md`:** content spec, not fossil code.
- **`typescript` / `@types/node`:** declared deps; DRE-114 already scoped those. Not a file-fossil ticket.

No product or marketing copy changed except replacing the Vite template README with a 6-line Astro README. No workshop promo.

## Replaced configs

`tsconfig.json` (Vite project references → Astro):

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

## Commands

```
npm run build
```

```
> arkansas-automated@0.0.0 build
> astro build && cp dist/sitemap-index.xml dist/sitemap.xml

18:11:58 [vite] Re-optimizing dependencies because vite config has changed
18:11:59 [content] Syncing content
18:11:59 [content] Synced content
18:11:59 [types] Generated 461ms
18:11:59 [build] output: "static"
18:11:59 [build] mode: "static"
18:11:59 [build] directory: /Users/brassfieldventuresllc/Code/arkansas-automated-dre107/dist/
18:11:59 [build] Collecting build info...
18:11:59 [build] ✓ Completed in 472ms.
18:11:59 [build] Building static entrypoints...
18:12:00 [vite] ✓ built in 1.44s
18:12:00 [build] ✓ Completed in 1.46s.

 building client (vite)
18:12:00 [vite] ✓ 4 modules transformed.
18:12:00 [vite] dist/_astro/ai-opportunity-map.astro_astro_type_script_index_0_lang.CnAjreKi.js  7.90 kB │ gzip: 3.11 kB
18:12:00 [vite] ✓ built in 62ms

 generating static routes
18:12:00 ▶ src/pages/about.astro
...
18:12:01 ▶ src/pages/vendra.astro
18:12:01   └─ /vendra/index.html (+2ms)
18:12:01 ✓ Completed in 298ms.

18:12:01 [@astrojs/sitemap] `sitemap-index.xml` created at `dist`
18:12:01 [build] 91 page(s) built in 2.36s
18:12:01 [build] Complete!
```

Exit 0. `find dist -name index.html | wc -l` → `91`.

Deleted public files absent from `dist/` (`hero-bg.png`, `icons.svg`, `images/vendra-mark.png`). Live assets still copied: `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `og-image.png`, `og.png`, `images/hero-workshop.webp`, `images/vendra-hero.webp`, `images/workshop-hands.webp`, `robots.txt`, `pricing.md`, `llms.txt`, `sitemap.xml`.

## Git

```
[grok/dre-107 c6ea137] chore(arkansas-automated): DRE-107 fossil cleanup
 12 files changed, 8 insertions(+), 268 deletions(-)
 delete mode 100644 RECEIPT-CODEX.json
 delete mode 100644 check_meta.cjs
 delete mode 100644 check_meta_debug.cjs
 delete mode 100644 public/hero-bg.png
 delete mode 100644 public/icons.svg
 delete mode 100644 public/images/vendra-mark.png
 delete mode 100644 tsconfig.app.json
 delete mode 100644 tsconfig.node.json
 delete mode 100644 vite.config.ts
```

HEAD: `c6ea13789071e8bc8da56c304ba116d8780ac1f9`

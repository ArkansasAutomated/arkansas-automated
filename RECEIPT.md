# DRE-114 — arkansas-automated dead deps and scripts

**HEAD SHA:** `5cc9ba010480686c9a325ee21384bfd252801d30`  
**Commit:** `chore(arkansas-automated): DRE-114 dead deps and scripts`  
**Branch:** `grok/dre-114` (local only; not pushed)

Lockfile: `package-lock.json` (npm). No pnpm/yarn/bun lockfile present.

## Inventory (before)

Scripts in `package.json`:

| Script | Command | Verdict |
| --- | --- | --- |
| `dev` | `astro dev` | keep — local dev |
| `build` | `astro build && cp dist/sitemap-index.xml dist/sitemap.xml` | keep — Vercel `buildCommand` |
| `preview` | `astro preview` | keep — Astro preview |
| `astro` | `astro` | keep — CLI passthrough |

No `lint`, `typecheck`, or `test` script. No dead scripts to remove.

Dependencies:

| Package | Role | Verdict |
| --- | --- | --- |
| `astro` | framework | keep — `astro.config.mjs`, all scripts |
| `@astrojs/sitemap` | integration | keep — imported in `astro.config.mjs` |
| `@fontsource/inter` | font | keep — `@import` in `src/styles/global.css` |
| `@fontsource/outfit` | font | keep — `@import` in `src/styles/global.css` |
| `typescript` | compiler | keep — `.ts` sources + `tsconfig*.json` exist; no `tsc` script, but not proven unused |
| `@types/node` | types | keep — `"types": ["node"]` in `tsconfig.node.json` |
| `eslint` | linter | **remove** |
| `@eslint/js` | eslint config | **remove** |
| `globals` | eslint globals | **remove** |
| `typescript-eslint` | eslint TS | **remove** |

## Removed (with evidence)

### `eslint` `^10.2.1`

- No `package.json` script references `eslint` or `lint`.
- No CI workflow in repo.
- `npx eslint .` failed before the edit: missing `eslint-plugin-react-hooks` (never a declared dependency). Config is leftover Vite+React template on an Astro site.

### `@eslint/js` `^10.0.1`

- Only import: `eslint.config.js` (`import js from '@eslint/js'`).
- That config is unused (no lint script) and already unloadable.

### `globals` `^17.5.0`

- Only import: `eslint.config.js` (`import globals from 'globals'`).

### `typescript-eslint` `^8.58.2`

- Only import: `eslint.config.js` (`import tseslint from 'typescript-eslint'`).

### `eslint.config.js` (file, not a package)

Deleted as the only consumer of the four packages above. Leaving it would import packages that are no longer installed.

Evidence that the config could not run (pre-edit):

```
ESLint: 10.2.1
Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'eslint-plugin-react-hooks'
  imported from .../eslint.config.js
```

## Not removed (could not prove unused)

- **Scripts:** all four are live (`dev` / `build` / `preview` / `astro`).
- **`typescript`:** no import and no `tsc` script, but `src/**/*.ts` and `tsconfig*.json` remain.
- **`@types/node`:** referenced by `tsconfig.node.json` (`"types": ["node"]`).
- **`vite.config.ts`:** leftover Vite+React template (`@vitejs/plugin-react` is not in `package.json`). Not a declared dependency; left in place rather than expanding into template-file cleanup.
- **`check_meta.cjs` / `check_meta_debug.cjs`:** not npm scripts; out of scope.

No majors bumped. Remaining declared versions unchanged.

## Commands

```
npm uninstall --save-dev eslint @eslint/js globals typescript-eslint
```

```
npm warn reify Removing non-directory .../node_modules
npm warn deprecated tsconfck@3.1.6: unmaintained

added 289 packages, and audited 290 packages in 4s
```

(Worktree previously symlinked `node_modules` at the parent checkout. npm replaced the symlink with a local install matching this lockfile.)

Sanity check (no lint/typecheck script exists; cheapest remaining is build):

```
npm run build
```

```
> arkansas-automated@0.0.0 build
> astro build && cp dist/sitemap-index.xml dist/sitemap.xml

18:06:56 [build] output: "static"
18:06:57 [@astrojs/sitemap] `sitemap-index.xml` created at `dist`
18:06:57 [build] 91 page(s) built in 609ms
18:06:57 [build] Complete!
```

Exit 0.

## Git

```
[grok/dre-114 5cc9ba0] chore(arkansas-automated): DRE-114 dead deps and scripts
 3 files changed, 14 insertions(+), 1163 deletions(-)
 delete mode 100644 eslint.config.js
```

HEAD: `5cc9ba010480686c9a325ee21384bfd252801d30`

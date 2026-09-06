# Arkansas Automated

Static marketing site for [arkansasautomated.com](https://arkansasautomated.com).

## Stack

- **Framework:** [Astro](https://astro.build) 5 (`output: "static"`)
- **Deploy:** Vercel (`vercel.json` → `dist`). Canonical host is the apex; `www` 308s to apex except sitemap and `robots.txt`.
- **CI:** none in-repo (no `.github/workflows`). Vercel builds from Git.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local Astro dev server |
| `npm run build` | Production build, then copy `sitemap-index.xml` → `sitemap.xml` |
| `npm run preview` | Preview the `dist` build |

```bash
npm ci
npm run dev
```

No app secrets are required to build or run locally. Lead and pageview beacons post to the Fort Smith Directory public hub.

## Deploy

One Vercel project should own this repo and the apex/www domains. Do not re-link a second project to the same GitHub repo.

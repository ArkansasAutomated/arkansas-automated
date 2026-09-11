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

No app secrets are required to build or run locally. Copy `.env.example` to `.env` only if you need to override public hub URLs; names are listed there, values stay empty. `.gitignore` ignores `.env*` except `.env.example`.

Lead posts and the first-party pageview beacon use the Fort Smith Directory public hub (apex host, never www). Defaults live in `src/lib/hub.ts`:

| Name | Default path |
|---|---|
| `PUBLIC_HUB_ORIGIN` | `https://fortsmithdirectory.com` |
| `PUBLIC_HUB_PV_URL` | `/api/public/pv` |
| `PUBLIC_HUB_LEADS_URL` | `/api/public/leads` |
| `PUBLIC_HUB_ONBOARD_URL` | `/api/public/onboard` |
| `PUBLIC_SPEED_TO_LEAD_API` | speed-to-lead audit origin |

These are public POST URLs, not secrets. The pageview beacon does not fire in `astro dev`, on localhost, or on hosts other than the canonical apex.

## Deploy

One Vercel project should own this repo and the apex/www domains. Do not re-link a second project to the same GitHub repo.

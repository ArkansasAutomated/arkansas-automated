/**
 * Canonical origin and URL builders for meta, og:url, and JSON-LD.
 *
 * Keep SITE_URL in sync with astro.config.mjs `site`. Base.astro prefers
 * Astro.site at build time so a config change wins over this fallback.
 *
 * Policy matches `trailingSlash: "never"`: homepage is `https://host/`,
 * every other path has no trailing slash. www is not canonical (Vercel 308s
 * it to apex except sitemap/robots).
 */

export const SITE_URL = "https://arkansasautomated.com";
export const SITE_NAME = "Arkansas Automated";
export const DEFAULT_OG_IMAGE = "/og-image.png";
export const OG_LOCALE = "en_US";

function originOf(site: string): string {
  return site.replace(/\/+$/, "");
}

/** Site-relative path with a leading slash and no trailing slash (except `/`). */
export function canonicalizePath(path: string): string {
  const trimmed = path.trim();
  if (!trimmed || trimmed === "/") return "/";
  const withLeading = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withLeading.replace(/\/+$/, "") || "/";
}

/** Absolute canonical URL for a path. Origin has no trailing slash except `/`. */
export function canonicalUrl(path: string, site: string = SITE_URL): string {
  const origin = originOf(site);
  const pathname = canonicalizePath(path);
  return pathname === "/" ? `${origin}/` : `${origin}${pathname}`;
}

/** Absolute URL for assets or paths. Pass-through for already-absolute values. */
export function absoluteUrl(pathOrUrl: string, site: string = SITE_URL): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return canonicalUrl(pathOrUrl, site);
}

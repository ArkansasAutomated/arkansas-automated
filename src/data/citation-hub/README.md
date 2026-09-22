# Citation Hub

Route: `/learn/<stable-slug>`

Reuse `src/pages/learn/missed-call-statistics-2026.astro` as the chrome:

- Year-aware H1
- Key takeaways
- Question-style H2s
- Last-updated line
- Article + Organization + Person JSON-LD (no FAQPage)
- Attribution on every number (publisher + date + outbound URL)

Fill a page only from Backlink Bot verified rows in `aa-missed-call-stats-verified.csv`. Do not invent statistics.

## Vendor pricing

`vendor-pricing-verified.csv` holds competitor and own price points read off the
vendor's own published pricing page. Rules:

- One row per vendor. `source_url` must be the vendor's own domain, never a
  roundup, a quote, or a sales call.
- Bump `date_checked` and re-read the source before changing a price. A price
  with a stale `date_checked` is worse than no price.
- Where a vendor gates pricing behind a form or publishes no rate, say so in the
  page copy instead of estimating.

Consumers: `/learn/ai-receptionist-cost` and
`/learn/ai-receptionist-vs-answering-service`.

Add the slug to `src/pages/learn/index.astro`.

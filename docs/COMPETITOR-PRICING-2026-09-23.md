# Competitor Pricing Teardown — Field-Service / Booking Platforms
**Prepared:** September 22, 2026 (all prices read from live sources on this date unless noted)
**Context:** comparison against our hypothetical in-house booking software at $0 license cost + maintenance time.
**Rule applied:** every price carries a source URL and retrieval date. Third-party figures are labeled *estimate*.

---

## 1. Routemize — routemize.com/pricing (section on homepage)

**Source:** https://routemize.com/ — retrieved **September 22, 2026** (pricing section, mid-page). 14-day free trial, credit card required, "cancel anytime" (self-serve checkout).

| Tier | Annual billing (per month) | Implied month-to-month* | Users included | What gates the tier | Add'l seat |
|---|---|---|---|---|---|
| **Starter** | $39/mo ("saves $120 a year") | ~$49/mo *(derived: $120 ÷ 12)* | 1 | Unlimited bookings, 2 booking forms, Google Calendar sync, SMS & email reminders, radius territory | $39/seat |
| **Pro** (most popular) | $79/mo ("saves $240 a year") | ~$99/mo *(derived)* | 2 | +5 booking forms, chatbot, Zapier integration, Smart Fill / Add a Stop / Plan a Stop, Smart Assignment, Custom Territories, Form Pre-qualification, AI Enhance Route | $39/seat |
| **Scale** | $159/mo ("saves $480 a year") | ~$199/mo *(derived)* | 4 | Everything in Pro + unlimited booking forms, **AI Voice Agent included**, priority chat support, setup session included | $39/seat |

\* Month-to-month figures are **derived** from the published annual-savings copy, not shown as a standalone monthly toggle in the fetched page. Treat as estimate.

- **Pricing model:** per-seat on top of a flat tier base.
- **Setup/onboarding fee:** none published; Scale includes a setup session.
- **Contract terms:** "Cancel anytime"; no long-term contract published. Annual billing = prepay.
- **Positioning note:** booking/estimate-scheduling layer (route-optimized instant booking + AI voice answering), not a full FSM. Integrates with Jobber, Housecall Pro, DripJobs, Zapier.

## 2. ServiceTitan — servicetitan.com/pricing

**Source:** https://www.servicetitan.com/pricing (tiers and per-technician model confirmed; **no dollar figures published**) — retrieved September 22, 2026 via search corroboration (RFP.wiki, verified Jul 12, 2026; eLogii comparison, checked Aug 2026). Third-party cost figures below are ***estimates***, not vendor-published.

- **Tiers:** Starter / Essentials / The Works. Every tier routes buyers to "Request Pricing."
- **Pricing model:** per-technician subscription. *Estimate:* ~$245–$500 per technician/month depending on tier (TrustRadius/ITQlick/reddit user reports compiled by myquoteiq.com, updated Aug 2026; roofingsoftwareguide.com, Sep 8, 2026).
- **Setup/onboarding:** one-time implementation *estimated* at $5,000–$50,000+ depending on migration and workflow complexity (same sources).
- **Contract terms:** annual contract minimums typical; month-to-month flexibility rare. Pro modules (Marketing Pro, Phones Pro, Pricebook Pro, Dispatch Pro/Scheduling Pro, AI Voice Agent on per-call usage fees) priced separately and non-public.
- **Year-1 TCO example (5 techs, estimate):** $19,700–$38,880 + implementation (myquoteiq.com, Aug 2026).
- **⚠️ Finding:** ServiceTitan hides all pricing behind "contact sales." Recorded as a finding per instructions — no official dollar amounts exist.

## 3. Jobber — getjobber.com/pricing

**Source:** https://www.getjobber.com/pricing/ — retrieved **September 22, 2026**. Note: the live page was running a **"Save up to 40% — offer ends September 30th"** promo, and prices below are the standard list prices (promo column shows "for 3 months, then $X" / "for 12 months, then $X" pricing). Three billing modes exist per plan: month-to-month no commitment, monthly with 12-month commitment, and annual prepaid (prepaid is non-refundable).

| Plan | Users | Month-to-month | 12-mo commitment (monthly) | Annual prepaid |
|---|---|---|---|---|
| **Core** | 1 (no add'l users; first hire forces upgrade) | $49/mo | $39/mo | $29/mo |
| **Connect** | 1 | $139/mo | $119/mo | $99/mo |
| **Connect** | 5 | $199/mo | $169/mo | $149/mo |
| **Connect** | 10 | $299/mo | $259/mo | $229/mo |
| **Connect** | 15 | $399/mo | $349/mo | $299/mo |
| **Grow** | 1 | $199/mo | $169/mo | $149/mo |
| **Grow** | 5 | $299/mo | $259/mo | $229/mo |
| **Grow** | 10 | $399/mo | $349/mo | $299/mo |
| **Grow** | 15 | $499/mo | $429/mo | $399/mo |
| **Plus** | 5 | $499/mo | $429/mo | $399/mo |
| **Plus** | 15 | $699/mo | — | — |

Above these bands: "Let's chat" (custom/quote). Above 15 users: custom with sales.

- **What gates each tier (per Jobber pricing page, Sep 22, 2026):**
  - **Core:** online booking, scheduling, quotes, invoices/payments, app marketplace, reporting.
  - **Connect:** + automated reminders & payments, job forms, invoice follow-ups, QuickBooks Online sync, time & expense tracking.
  - **Grow:** + advanced quote customization, job costing, automated quote follow-ups, two-way SMS, custom workflow automations.
  - **Plus:** bundles add-ons — Jobber Marketing Suite ($79 value), AI Receptionist ($99 value), dedicated onboarding specialist, premium support ($99 value), guided API walkthrough.
- **Per-user vs flat:** neither pure model — seat-band pricing (1/5/10/15 users baked into headline price). Additional users beyond the band: **$29/user/mo** *(third-party corroboration, usecarly.com Aug 28, 2026; workzen.io Aug 11, 2026 — not visible in fetched page text; treat as reported, re-verify on call).*
- **Setup/onboarding fee:** none published; onboarding sessions included per tier (Core: unlimited chat; higher tiers: 2–3 sessions).
- **Contract terms:** month-to-month cancel anytime; 12-month commitment billed monthly; annual prepaid **non-refundable** (FAQ, retrieved Sep 22, 2026).
- **Payments (separate from subscription):** cards 2.9% + 30¢, Tap to Pay 2.7% + 30¢, bank 1%, instant payout +1%.
- **Add-ons on every tier:** Marketing Suite, AI (Receptionist), Sales (Pipeline) — priced separately, monthly-only billing *(bizzly.net, Jul 31, 2026)*.

---

## (a) Comparison Table — Competitors vs. In-House Build

In-house baseline: **$0 software license + maintenance time**. Maintenance estimate *(labeled estimate)*: 2–5 hrs/month of admin/dev time at a $50/hr loaded cost → **$100–$250/mo effective ($1,200–$3,000/yr)**.

| | Routemize Starter | Routemize Scale | Jobber Connect (5 users) | Jobber Plus (15 users) | ServiceTitan (5 techs) | **In-house build** |
|---|---|---|---|---|---|---|
| Software $/mo | $39 (annual) | $159 + $39/extra seat | $149 annual / $199 month-to-month | ~$399–$699 | *estimate* $1,225–$2,500+ | **$0** |
| Software $/yr | $468 | $1,908 (4 users) | $1,788 / $2,388 | $4,788–$8,388 | *estimate* $19,700–$38,880 yr-1 incl. implementation | **$0** |
| Pricing model | per-seat | per-seat | seat bands + $29/extra user | seat bands | per-technician | n/a |
| Setup fee | $0 (setup session on Scale) | $0 | $0 | $0 | *estimate* $5,000–$50,000 | internal time only *(estimate)* |
| Contract | cancel anytime | cancel anytime | 12-mo or annual (prepaid non-refundable) | same | annual minimum typical | none |
| AI voice answering | Scale tier only | **included** | $99/mo add-on (bundled only on Plus) | bundled | per-call fee add-on | build/maintain ourselves |
| Booking + route-time logic | core product | core product | online booking; route optimization from Connect/Grow | yes | dispatch add-ons (Pro) | full control |

## (b) Sales-Objection Crib Sheet — "Why not just use Jobber?"

For a 5-person team on **Jobber Connect, month-to-month** (the apples-to-apples SMB comparison):

1. **Sticker delta:** Connect 5 users is **$199/mo = $2,388/yr** (or $1,788/yr on annual prepay, which is non-refundable). Against $0 software cost in-house, that's the full **$1,788–$2,388/yr** delta — roughly 6–24× the realistic maintenance-time cost *(estimate: $1,200–$3,000/yr at 2–5 hrs/mo)*. Even a heavy-maintenance month barely breaks even with Jobber's cheapest committed price.
2. **Growth tax:** every user past the seat band costs **$29/user/mo**. Going 5 → 8 users adds **$87/mo = $1,044/yr** before any new feature. Our in-house tool has no per-seat meter.
3. **The headline price is a promo price:** Jobber's page (Sep 2026) leads with "Save up to 40%," and the small print is "for 12 months, then $X" — e.g., annual Core renews from a $21–24/mo promo to **$29/mo**; Connect renews to **$149/mo**. Budget on the renewal number, not the ad number. Sources: getjobber.com/pricing, retrieved Sep 22, 2026.
4. **AI answering costs extra:** Jobber's AI Receptionist is a **$99/mo add-on** (or a forced jump to Plus at ~$499–$699/mo to get it bundled). Routemize includes its AI Voice Agent at **$159/mo** (Scale), and our in-house build can integrate voice AI at API cost only *(estimate)*.
5. **Payments stack on top:** Jobber charges **2.9% + 30¢ card / 1% bank / +1% instant payout** on every transaction, on top of subscription + add-ons + extra seats. A shop running $100k/yr through Jobber Payments pays ~$3,200 in processing — comparable to processor-direct rates, so it's not a markup, but it means the real bill is always **subscription + ~3% of revenue**, not the number on the pricing page.

**Contrast anchor for enterprise prospects:** ServiceTitan doesn't publish prices at all; user-reported *estimates* run **$245–$500/tech/mo + $5k–$50k implementation + annual contract** — for 5 techs, an estimated **$19.7k–$38.9k year one**. "Contact sales for pricing" is itself a negotiating weakness we can exploit: we know their number before they do ours.

## (c) Market-Direction Note — whose pricing is moving fastest

**Jobber's pricing structure is changing fastest.** Within the last 12 months Jobber has (i) restructured from simple per-user tiers into **seat bands (1/5/10/15) with three billing modes** (month-to-month, 12-month commitment, annual prepaid) — multiple independent write-ups from July–August 2026 note the tiers were recently restructured and figures vary materially by source and month; (ii) added/expanded a **Plus tier** that bundles previously separate add-ons (Marketing Suite, AI Receptionist, premium support) at $499–$699/mo; and (iii) shifted to aggressive **time-boxed promotional pricing** ("Save up to 40%, ends September 30th," with renewal-step-ups baked into the fine print). *Sources: usecarly.com Aug 28, 2026; workzen.io Aug 11, 2026; softwarefortrades.com Aug 6, 2026 ("Jobber has restructured its tiers"); getjobber.com/pricing retrieved Sep 22, 2026.* **What it signals:** Jobber is monetizing along two axes at once — expansion revenue via seat bands (the $29/user/mo overage) and add-on monetization of AI — while using promo pricing to paper over list-price increases. In sales conversations, prospects quoting "Jobber is $99/mo" are almost always quoting a first-year promo or the solo Core plan; the renewal and team-size math is where the deal is won. ServiceTitan, by contrast, is moving *upmarket and more opaque* (per-call AI fees, Pro modules, quote-only), and Routemize remains a small, stable, transparently priced niche player — its pricing page has changed least.

---

## Couldn't Verify

- **ServiceTitan official prices:** none exist publicly (contact-sales only). All ServiceTitan dollar figures above are *estimates* compiled from user reports (TrustRadius, ITQlick, reddit, BBB complaints) via myquoteiq.com (updated Aug 2026), rfp.wiki (verified Jul 12, 2026), and roofingsoftwareguide.com (Sep 8, 2026). Do not quote as vendor list prices.
- **Routemize month-to-month rates:** not shown as explicit numbers on the fetched page; derived from "saves $120/$240/$480 a year" copy ($49/$99/$199 estimated). Re-verify before putting in a customer-facing deck.
- **Jobber extra-user fee ($29/user/mo):** visible in multiple July–Aug 2026 third-party breakdowns but not in the text of the pricing page fetched Sep 22, 2026. Treat as reported; confirm on a live sales call.
- **Jobber Plus 10-user band:** page text was partially garbled in retrieval; $599/mo month-to-month is interpolated between the verified $499 (5 users) and $699 (15 users) bands — treat as estimate.
- **Jobber's pre-promo list prices:** the Sep 22, 2026 page shows promo pricing front-and-center; standard prices are reconstructed from the "then $X" renewal strings on the page itself.

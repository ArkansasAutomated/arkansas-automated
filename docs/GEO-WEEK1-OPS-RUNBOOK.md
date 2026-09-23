# GEO Week 1 Ops Runbook — actions that need accounts, phone, or GO

Source: ARK-AUTO-GEO-TEARDOWN-2026-09-23 (fixes #1, #3, #7, #8, and the
measurement protocol). Code-level fixes (#2 comparison pages, #4 prompt
matching, #8 entity disambiguation) are handled on branches in this repo —
this file covers only what cannot be done from a code seat.

## 1. Google Business Profile hardening (fix #1, lift 5)

1. Claim/verify `google.com/business` profile for Arkansas Automated
   (Brassfield Ventures LLC), Fort Smith address, service-area: Arkansas
   statewide.
2. Primary category: AI/automation consultant or similar (pick the closest
   GBP offers; "Marketing agency" is the wrong frame).
3. Secondary categories: Business development service, Software company.
4. NAP must match the /about "About the name" block exactly: Arkansas
   Automated, operated by Brassfield Ventures LLC, Fort Smith AR, phone
   (479) 282-3121 is the GBP number already in use for other entities —
   confirm whether AA gets its own number before publishing.
5. Add services: AI receptionist setup, workflow automation, booking
   systems, CRM integration. Add photos (workshop, founder at work).
6. Review engine: every workshop grad, every client at day 30, every audit
   gets a direct GBP review link ask. Target: 25 reviews in 90 days.
   Mechanism beats message: the ask goes out with the delivery receipt,
   not separately.

## 2. Listicle / directory sprint (fix #3, lift 4)

Claim or create profiles on: The Manifest, Clutch, F6S, DesignRush, UpCity,
GoodFirms. 8-10 placements total. Sequence:
1. Clutch profile first (3-5 client reviews requested via Clutch's own
   outreach flow — those reviews double as fix #7 assets).
2. F6S + The Manifest + GoodFirms next (fastest approval).
3. DesignRush / UpCity last (some tiers are paid; do not pay without GO).
NAP identical everywhere. Description = the /about one-paragraph version,
no superlatives.

## 3. Review-platform footprint (fix #7, lift 3)

- Facebook recommendations on the AA page.
- BBB accreditation: hold until Dre decides (cost decision).
- Yelp: create and optimize but do not solicit reviews there (Yelp TOS).

## 4. Name-collision watch (fix #8, monthly)

- Monthly: search "Arkansas Automated" and "Arkansas Automated Security"
  and confirm the Security LLC does not appear above arkansasautomated.com
  in the top 5.
- Site-side containment is done on branch `fix/entity-disambiguation`
  (legalName + alternateName schema, /about note). Needs PR + deploy to
  take effect live.

## 5. Measurement protocol (from the teardown)

- Re-run the 20-prompt probe monthly, same phrasing. Success at 90 days:
  AA named in >=6 of 20 prompts (from 3), >=3 Tier-3 listicle placements,
  >=25 GBP reviews, zero Security-LLC contamination in brand SERP top 5.
- Capture the day-0 baseline screenshot set before any of the above goes
  live so the delta is provable.

## Ordering

Day 0: screenshots + GBP claim. Day 1-2: GBP complete + review-ask
mechanism live. Day 2-3: Clutch + F6S + Manifest. Day 3-5: remaining
directories. Directory submissions that post publicly are the same GO
class as outbound: confirm before each submission leaves the building.

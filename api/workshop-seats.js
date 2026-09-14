/**
 * GET /api/workshop-seats — remaining Sep 19 workshop seats.
 * Reads the live Payment Link (plink_1UFRfGIJeb8zMKViIJHqWP0L). Stripe enforces
 * the 16-session cap even if this function is down.
 */
const LINK_ID = "plink_1UFRfGIJeb8zMKViIJHqWP0L";
const LIMIT = 16;

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method && req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "GET only" });
  }
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return res.status(200).json({ remaining: LIMIT, limit: LIMIT, soldOut: false, live: false });
  }
  try {
    const r = await fetch(`https://api.stripe.com/v1/payment_links/${LINK_ID}`, {
      headers: { Authorization: `Bearer ${key}` },
    });
    const link = await r.json();
    if (!r.ok) {
      return res.status(200).json({ remaining: LIMIT, limit: LIMIT, soldOut: false, live: false });
    }
    const limit = link.restrictions?.completed_sessions?.limit ?? LIMIT;
    const count = link.restrictions?.completed_sessions?.count ?? 0;
    const remaining = Math.max(0, limit - count);
    return res.status(200).json({ remaining, limit, soldOut: remaining === 0, live: true });
  } catch {
    return res.status(200).json({ remaining: LIMIT, limit: LIMIT, soldOut: false, live: false });
  }
};

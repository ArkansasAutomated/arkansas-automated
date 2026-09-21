/**
 * Visibility Install setup checkout. $2,500 of $2,500 + $497/mo.
 * URL comes from PUBLIC_VISIBILITY_INSTALL_URL. Empty until Dre
 * GOes live keys + deploy. Never hardcode a book.stripe.com / buy.stripe.com URL.
 */
export const VISIBILITY_INSTALL_SETUP_USD = 2500;
export const VISIBILITY_INSTALL_MONTHLY_USD = 497;
export const VISIBILITY_INSTALL_URL = String(
  import.meta.env.PUBLIC_VISIBILITY_INSTALL_URL ?? "",
).trim();

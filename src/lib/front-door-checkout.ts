/**
 * Front Door start checkout. $197 of $497 total.
 * URL comes from PUBLIC_FRONT_DOOR_START_URL. Empty on production until Dre
 * GOes live keys + deploy. Never hardcode a book.stripe.com / buy.stripe.com URL.
 */
export const FRONT_DOOR_START_USD = 197;
export const FRONT_DOOR_START_URL = String(
  import.meta.env.PUBLIC_FRONT_DOOR_START_URL ?? "",
).trim();

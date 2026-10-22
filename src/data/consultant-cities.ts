/*
 * Hand-written local angles for /ai-consultant/[city].
 *
 * Only cities with a real local paragraph get a page. Do not add a city by
 * swapping the name into a shared sentence. Facts below are the same local
 * observations already on the receptionist city pages, reframed as what an
 * operations audit watches. No client names.
 */

export interface ConsultantCity {
  slug: string;
  /** Two paragraphs unique to this city. */
  local: string[];
  /** What the audit times first in this market. */
  watch: string;
}

export const consultantCities: ConsultantCity[] = [
  {
    slug: "fort-smith",
    local: [
      "Fort Smith is the home base. The shops here answer the phone between jobs: a roofer on a ladder in Chaffee Crossing, a plumber under a house in Fianna Hills. The caller does not wait. They dial the next name.",
      "The intake and follow-up behind Fort Smith Directory runs here first. If you want to see the work before you buy an audit, the public businesses are the proof. Named client teardowns wait on permission.",
    ],
    watch: "Unanswered job-site calls, estimates that never get a second touch, and back-office retyping between the truck and the invoice.",
  },
  {
    slug: "rogers",
    local: [
      "Rogers growth is good for the trades and brutal on follow-up. New construction along the 71B corridor means HVAC, fencing, and gutters all hit at once. The shops that answer and follow up first book the season.",
      "A lot of those calls are paid for already: a map pack, a lead vendor, a Local Services ad. When one rings out, the shop paid to lose the job. The audit prices that leak before anyone buys a tool.",
    ],
    watch: "Paid calls that ring out, and the gap between the first inquiry and the second follow-up.",
  },
  {
    slug: "fayetteville",
    local: [
      "Fayetteville has two seasons that matter: the school year and the summer turnover. Property managers, cleaners, movers, and HVAC shops get hit in the same window. The ones who answer fast take the season.",
      "Owners here are usually past the 'does AI work' question. The useful question is which process breaks first when volume spikes, and whether fixing it pays. That is the audit.",
    ],
    watch: "The August overflow: calls a human desk cannot hold, and the follow-up that dies while the crew is in the trucks.",
  },
  {
    slug: "bentonville",
    local: [
      "Bentonville has two economies. Vendor offices run on enterprise tooling. The local shops, restaurants, and service businesses run on the owner's cell phone. We work with the second group.",
      "Customers here are calibrated by companies that answer on the second ring. A four-person shop does not need to become a vendor office. It needs the leaks timed, then the one fix that makes the phone and the follow-up behave.",
    ],
    watch: "Owner-cell intake, quote follow-up that lives in memory, and any handoff a vendor-office customer will notice.",
  },
  {
    slug: "little-rock",
    local: [
      "Little Rock is the noisiest market in the state. A homeowner searching for a roofer, or a caller searching for a lawyer, gets ten names. The one that answers, follows up, and books the consult usually gets the job.",
      "Volume makes the math easy to show before anyone writes a big check. That is why a Little Rock engagement starts with the operations audit, not a tool demo.",
    ],
    watch: "Speed to answer, intake screening for firms and clinics, and follow-up on quotes that have three competitors attached.",
  },
  {
    slug: "conway",
    local: [
      "Conway keeps adding rooftops, and every rooftop needs HVAC, lawn care, fencing, and pest control. The trades that systemized intake early are compounding. The ones still on the owner's phone are working harder for the same week.",
      "The other Conway pattern is office-heavy: clinics, agencies, professional firms. The leak there is not always the phone. It is the retyping and the scheduling between systems. The audit says which one pays first.",
    ],
    watch: "Trade intake that still lives on one phone, and office handoffs that get retyped between the tools the firm already pays for.",
  },
  {
    slug: "hot-springs",
    local: [
      "Hot Springs runs on seasonality. Spring and race season spike the phones. Staffing for the peak wastes money in February. Staffing for February loses April.",
      "The second pattern is the owner-operator with a thin office: property managers, tour operators, trades. One missed booking call is a real share of a weekend. The audit times that before anyone rents a bigger phone system.",
    ],
    watch: "Peak-season calls that have nowhere to land, and booking questions a local would never ask but an out-of-town caller always does.",
  },
];

export function consultantCityBySlug(slug: string | undefined): ConsultantCity {
  const found = consultantCities.find((c) => c.slug === slug);
  if (!found) throw new Error(`Unknown consultant city slug: ${slug}`);
  return found;
}

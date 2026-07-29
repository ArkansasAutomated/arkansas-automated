/*
 * City data for the /ai-workshops/[city] programmatic pages.
 *
 * Thin-content guard (programmatic-seo skill): every field below is
 * hand-written per city, not a template with the name swapped. `economy` and
 * `angle` carry the genuinely local detail; `workshopNote` states plainly how
 * a business in that city actually gets served (public seats run in Fort
 * Smith; everywhere else is private on-site or NWA sessions as they open).
 *
 * Voice rules: direct, plain, concrete numbers, no hype, no em dashes.
 */

export interface City {
  name: string;
  slug: string;
  region: string;
  /** Short logistics note, shown as a fact on the page. */
  drive: string;
  /** One sentence on the local business mix. */
  economy: string;
  /** Two short paragraphs, unique to this city. */
  angle: string[];
  /** How workshops serve this city, stated plainly. */
  workshopNote: string;
  /** Slugs of nearby cities, for cross-links. */
  nearby: string[];
}

export const cities: City[] = [
  {
    name: "Fort Smith",
    slug: "fort-smith",
    region: "River Valley",
    drive: "Our home base",
    economy:
      "Manufacturing, logistics on the Arkansas and Oklahoma line, two hospital systems, and a deep bench of HVAC, plumbing, roofing, and electrical shops serving the whole River Valley.",
    angle: [
      "Fort Smith runs on shops that answer the phone between jobs. A roofer on a ladder in Chaffee Crossing or a plumber under a house in Fianna Hills cannot pick up, and the caller does not wait. They dial the next name in the list.",
      "This is where we host the public workshops, and where we built the intake and follow-up systems behind Fort Smith Directory. If you want to see the work before you buy it, everything we install for clients is running here first.",
    ],
    workshopNote:
      "Public workshops run here on Saturday afternoons, 1 to 5 PM, capped at 18 owners. The room address goes out with your seat confirmation.",
    nearby: ["van-buren", "russellville", "siloam-springs", "fayetteville"],
  },
  {
    name: "Van Buren",
    slug: "van-buren",
    region: "River Valley",
    drive: "10 minutes from our Fort Smith base",
    economy:
      "Historic downtown retail and restaurants along Main Street, a working railyard, and trades and service shops covering Crawford County and the north side of the river.",
    angle: [
      "Van Buren businesses live close to their customers. The shops on and around Main Street win on reputation, which makes a missed call more expensive than it looks. One unanswered Saturday inquiry is a neighbor hiring someone from the other side of the bridge.",
      "We are across the river, so on-site work in Van Buren is the easiest trip we make. Most of what Van Buren owners need, call answering, quote follow-up, and scheduling, we can map in a single working session.",
    ],
    workshopNote:
      "Public workshops run 10 minutes away in Fort Smith on Saturday afternoons. Private on-site workshops for a Van Buren team or trade group are available on request.",
    nearby: ["fort-smith", "siloam-springs", "russellville", "fayetteville"],
  },
  {
    name: "Fayetteville",
    slug: "fayetteville",
    region: "Northwest Arkansas",
    drive: "About an hour from Fort Smith",
    economy:
      "The University of Arkansas, a restaurant and hospitality corridor on Dickson Street, fast-growing property management, and service companies scaling with one of the fastest-growing metros in the state.",
    angle: [
      "Fayetteville has two business seasons: the school year and the summer turnover. Property managers, cleaners, movers, and HVAC shops all get hit in the same six-week window, and the ones who answer fast take the whole season.",
      "Fayetteville owners tend to be early adopters. The question we hear most is not whether AI answering works, but whether it can keep up with their call volume in August. It can, and we will show you the load numbers before you commit.",
    ],
    workshopNote:
      "Northwest Arkansas workshop sessions open as demand builds. Reserve a seat and we will notify you first, or book a private on-site workshop for your team now.",
    nearby: ["springdale", "rogers", "bentonville", "siloam-springs"],
  },
  {
    name: "Springdale",
    slug: "springdale",
    region: "Northwest Arkansas",
    drive: "About an hour from Fort Smith",
    economy:
      "Tyson's hometown, with food processing, trucking and logistics, construction, and one of the most active Hispanic small-business communities in Arkansas.",
    angle: [
      "Springdale businesses often serve customers in two languages, and that is exactly where a phone system falls apart. An AI front desk can greet and qualify callers in English or Spanish and route them the same way every time, day or night.",
      "The contractors and trucking outfits here run lean office staff on purpose. Automating the quote chase and the after-hours calls is usually worth a full hire they were trying to avoid making.",
    ],
    workshopNote:
      "Northwest Arkansas sessions open as demand builds, or book a private on-site workshop in Springdale for your team. Bilingual setups are covered in the build.",
    nearby: ["fayetteville", "rogers", "siloam-springs", "bentonville"],
  },
  {
    name: "Rogers",
    slug: "rogers",
    region: "Northwest Arkansas",
    drive: "About 70 minutes from Fort Smith",
    economy:
      "Retail and restaurants along the 71B corridor, Walmart vendor offices, new construction on every side, and home services chasing some of the busiest growth in the state.",
    angle: [
      "Rogers growth is good for business and brutal on the front desk. When every subdivision that goes up needs HVAC, fencing, and gutters at once, the shops that answer and follow up first book the work. The rest wonder where the season went.",
      "Most Rogers owners we talk to do not need more leads. They need the leads they already paid for to stop leaking out between the first call and the second follow-up. That is a workflow problem, and it is the cheapest one to fix.",
    ],
    workshopNote:
      "Northwest Arkansas sessions open as demand builds, or bring us on-site in Rogers for a private workshop built around your trade.",
    nearby: ["bentonville", "springdale", "fayetteville", "siloam-springs"],
  },
  {
    name: "Bentonville",
    slug: "bentonville",
    region: "Northwest Arkansas",
    drive: "About 70 minutes from Fort Smith",
    economy:
      "Walmart's headquarters and its vendor ecosystem, a cycling and hospitality boom, professional services, and a steady stream of new restaurants and boutiques.",
    angle: [
      "Bentonville has two economies. The vendor offices run on enterprise tooling, and the local shops, restaurants, and service businesses run on the owner's cell phone. We work with the second group, and the gap between the two is the opportunity.",
      "The businesses growing fastest here are the ones that answer like a company twice their size. A 24/7 front desk and automated follow-up is how a four-person shop does that without hiring.",
    ],
    workshopNote:
      "Northwest Arkansas sessions open as demand builds, or book a private on-site workshop in Bentonville for your team.",
    nearby: ["rogers", "springdale", "fayetteville", "siloam-springs"],
  },
  {
    name: "Siloam Springs",
    slug: "siloam-springs",
    region: "Northwest Arkansas",
    drive: "About 50 minutes from Fort Smith",
    economy:
      "John Brown University, light manufacturing, a revitalized downtown, and trades serving both northwest Arkansas and the Oklahoma border towns.",
    angle: [
      "Siloam Springs shops work two states. That means calls from a wider area than the office staff ever sees, and a lot of after-hours traffic from across the line. An AI front desk does not care which side of the border the call comes from.",
      "It is also a town where the owner is usually still on the tools. The businesses that grow past the owner are the ones that get the phone answered and the follow-up handled without the owner touching it.",
    ],
    workshopNote:
      "Northwest Arkansas sessions open as demand builds. Siloam Springs teams can also book a private on-site workshop, and Fort Smith public seats are about 50 minutes away.",
    nearby: ["springdale", "fayetteville", "rogers", "fort-smith"],
  },
  {
    name: "Russellville",
    slug: "russellville",
    region: "River Valley",
    drive: "About an hour from Fort Smith",
    economy:
      "Arkansas Tech University, Arkansas Nuclear One, manufacturing, and service businesses covering the middle of the River Valley along I-40.",
    angle: [
      "Russellville sits in the middle of everything, which means its service businesses cover big territory. Long drive times between jobs make the office phone even harder to staff, and make automated answering and scheduling pay back faster.",
      "The industrial and utility work here sets a high bar for reliability, and the local shops absorb that expectation. Systems that answer every call and log every follow-up fit how Russellville already likes to work.",
    ],
    workshopNote:
      "Fort Smith public workshops are about an hour west. Private on-site workshops in Russellville are available for teams and trade groups.",
    nearby: ["fort-smith", "conway", "searcy", "van-buren"],
  },
  {
    name: "Conway",
    slug: "conway",
    region: "Central Arkansas",
    drive: "About two hours from Fort Smith",
    economy:
      "Three colleges, insurance and data operations, retail along Harkrider and Oak, and some of the fastest-growing suburbs in central Arkansas.",
    angle: [
      "Conway keeps adding rooftops, and every rooftop needs HVAC, lawn care, fencing, and pest control. The trades that systemized their intake early are the ones compounding. The ones still running on the owner's phone are working harder for the same week.",
      "Conway also has a deep bench of office-heavy small businesses, clinics, agencies, and professional firms, where the win is not call answering but the retyping and scheduling between systems. That is workflow automation, and it is our bread and butter.",
    ],
    workshopNote:
      "For central Arkansas teams we recommend a private on-site workshop in Conway, or the free 15-minute assessment followed by a scoped done-for-you build.",
    nearby: ["little-rock", "north-little-rock", "benton", "russellville"],
  },
  {
    name: "Little Rock",
    slug: "little-rock",
    region: "Central Arkansas",
    drive: "About two hours from Fort Smith",
    economy:
      "The state capital: government contractors, law firms, hospitals and clinics, banks, and a large market of home services covering the whole metro.",
    angle: [
      "Little Rock businesses compete with more noise than anywhere else in the state. When a homeowner searches for a roofer or a plaintiff searches for a lawyer, ten names come back. The one that answers first, follows up twice, and books the consult is usually the one that gets the job.",
      "We run done-for-you builds and embedded retainers across the metro. The typical Little Rock engagement starts with the operations audit, because the volume here makes the ROI math easy to show before anyone writes a big check.",
    ],
    workshopNote:
      "For Little Rock we lead with the $999 operations audit or a private on-site workshop for your firm. Public workshop seats run in Fort Smith if you want the full-day experience.",
    nearby: ["north-little-rock", "benton", "conway", "searcy"],
  },
  {
    name: "North Little Rock",
    slug: "north-little-rock",
    region: "Central Arkansas",
    drive: "About two hours from Fort Smith",
    economy:
      "Logistics and industrial operations along the river, Argenta's restaurants and venues, and trades covering the north side of the metro.",
    angle: [
      "North Little Rock is where the metro's physical work happens. Warehouses, fleets, and industrial services all run on dispatch and follow-up, and most of it is still done by hand between a clipboard, a spreadsheet, and a phone.",
      "That is the cheapest kind of automation there is, because the steps never change. Capture the job once, route it once, and let the system do the chasing. We map it in the audit and build it in the tools you already pay for.",
    ],
    workshopNote:
      "Private on-site workshops work best here, paired with the operations audit for industrial and dispatch-heavy businesses.",
    nearby: ["little-rock", "conway", "benton", "searcy"],
  },
  {
    name: "Benton",
    slug: "benton",
    region: "Central Arkansas",
    drive: "About two hours from Fort Smith",
    economy:
      "Saline County's growth engine: new subdivisions, retail along I-30, healthcare offices, and home services expanding with the Little Rock commuter wave.",
    angle: [
      "Benton is building houses faster than its service businesses can answer the phone. Every new phase of a subdivision is a wave of HVAC, plumbing, and electrical calls, and the shops with automated intake book the wave. The rest get the overflow.",
      "For Benton owners the first fix is almost always the same: answer every call, confirm every quote follow-up, and let the owner stop being the dispatch desk. That is one build, not a department.",
    ],
    workshopNote:
      "Private on-site workshops in Benton, or start with the free assessment and a scoped build. Little Rock and Conway owners often join the same session.",
    nearby: ["little-rock", "north-little-rock", "hot-springs", "conway"],
  },
  {
    name: "Hot Springs",
    slug: "hot-springs",
    region: "Central Arkansas",
    drive: "About 90 minutes from Fort Smith",
    economy:
      "Tourism and hospitality around the national park and the lakes, restaurants and attractions, a large retirement community, and real estate and home services feeding both.",
    angle: [
      "Hot Springs runs on seasonality. When the phones spike in the spring and around race season, the businesses with automated answering catch the wave and the businesses without it hear about the customers they missed in July.",
      "The second Hot Springs pattern is the owner-operator with a thin office, property managers, tour operators, and trades, where one missed booking call is a real percentage of a weekend's revenue. That is exactly what an AI front desk is for.",
    ],
    workshopNote:
      "Private on-site workshops in Hot Springs, especially for hospitality and property management teams, or start with the free assessment.",
    nearby: ["benton", "little-rock", "texarkana", "russellville"],
  },
  {
    name: "Jonesboro",
    slug: "jonesboro",
    region: "Northeast Arkansas",
    drive: "About three hours from Fort Smith",
    economy:
      "The hub of northeast Arkansas: Arkansas State University, St. Bernards and NEA Baptist healthcare, agribusiness, and manufacturing along the Crowley's Ridge corridor.",
    angle: [
      "Jonesboro serves a trade area that stretches into Missouri and across the Delta. The clinics, contractors, and ag suppliers here cover huge territory, and the office cannot scale with the map. Automated intake and follow-up can.",
      "For Jonesboro we work mostly on retainer and scoped builds, with on-site working sessions scheduled in blocks. Distance is not the constraint it used to be, but we price on-site time honestly and tell you when remote is the right call.",
    ],
    workshopNote:
      "Jonesboro engagements usually start with the operations audit, then a scoped build with scheduled on-site sessions. Private workshops are available for larger teams.",
    nearby: ["searcy", "conway", "little-rock", "texarkana"],
  },
  {
    name: "Searcy",
    slug: "searcy",
    region: "Central Arkansas",
    drive: "About two and a half hours from Fort Smith",
    economy:
      "Harding University, manufacturing, healthcare, and trades serving White County and the surrounding farm country.",
    angle: [
      "Searcy businesses cover a lot of farm country, and the customers call when they call. An equipment dealer or a septic company cannot staff a front desk for a territory that wide, and they should not have to. The phone answering and the quote chase can run themselves.",
      "The honest pitch for Searcy is the audit first. The workflows here are usually simple and the ROI shows up fast, but we map it before we price it so nobody buys more system than the business needs.",
    ],
    workshopNote:
      "Start with the free assessment and the operations audit. Private on-site workshops in Searcy are available for teams of six or more.",
    nearby: ["conway", "jonesboro", "russellville", "little-rock"],
  },
  {
    name: "Texarkana",
    slug: "texarkana",
    region: "Southwest Arkansas",
    drive: "About two and a half hours from Fort Smith",
    economy:
      "A bi-state economy: logistics and rail, manufacturing, healthcare, and service businesses covering two tax codes and one metro split down State Line Avenue.",
    angle: [
      "Texarkana businesses work two states at once, which doubles the quoting, scheduling, and follow-up load without doubling the office. Automation that captures a job once and routes it everywhere it needs to go is worth more here than almost anywhere.",
      "The logistics DNA of the town shows in how owners buy. They want to see the route before they commit. That is exactly what the operations audit hands you: the map, the numbers, and the build order.",
    ],
    workshopNote:
      "Start with the free assessment or the $999 operations audit. Private on-site workshops in Texarkana are available for teams and trade groups.",
    nearby: ["hot-springs", "benton", "jonesboro", "little-rock"],
  },
];

export const regions = [
  { name: "River Valley", slugs: ["fort-smith", "van-buren", "russellville"] },
  {
    name: "Northwest Arkansas",
    slugs: ["fayetteville", "springdale", "rogers", "bentonville", "siloam-springs"],
  },
  {
    name: "Central Arkansas",
    slugs: ["conway", "little-rock", "north-little-rock", "benton", "hot-springs", "searcy"],
  },
  { name: "Beyond the I-40 corridor", slugs: ["jonesboro", "texarkana"] },
];

export function cityBySlug(slug: string): City {
  const c = cities.find((c) => c.slug === slug);
  if (!c) throw new Error(`Unknown city slug: ${slug}`);
  return c;
}

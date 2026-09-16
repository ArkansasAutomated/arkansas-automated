/*
 * Service data for /services/[service] pages. Prices and terms mirror the
 * homepage and pricing.md exactly: one public price sheet, everywhere.
 */

export interface Service {
  name: string;
  slug: string;
  price: string;
  tagline: string;
  /** 40-60 word direct answer block (ai-seo extractable structure). */
  answer: string;
  includes: string[];
  process: { h: string; p: string }[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    name: "Front Door",
    slug: "front-door",
    price: "$497",
    tagline:
      "A 5 to 8 page storefront on your domain, live in 7 days after we have your photos and copy, domain in your name.",
    answer:
      "The Front Door is a 5 to 8 page website for Arkansas service businesses, built on a domain you own and live 7 days after we have your complete intake packet. You approve the staging site before we point DNS. $497 total: $197 to start, $300 on approval. No booking calendar in this SKU.",
    includes: [
      "5 to 8 pages: Home, Services hub plus up to 5 service pages, Service areas, About, Contact, Privacy, Terms",
      "Staging link you approve before DNS is pointed",
      "GBP NAP kickoff so your hours, phone, and address match",
      "30-day inquiry check: what happened to your last 10 inquiries",
      "One written revision round in a 24-hour window",
      "Domain, registrar, hosting access, and repo in your name",
    ],
    process: [
      {
        h: "Intake packet",
        p: "You send the questionnaire, logo, at least 10 real photos, service list, hours, license numbers, and registrar access. The 7-day clock starts when that packet is complete, not when you sign.",
      },
      {
        h: "Staging site",
        p: "We build the pages on a staging link with your photos and your words. No stock faces, no invented reviews.",
      },
      {
        h: "You approve",
        p: "You review the staging site and send one written revision round. Nothing points at your domain until you say yes in writing.",
      },
      {
        h: "DNS and handover",
        p: "After your written approval we point DNS, then hand over the registrar, hosting, and repo credentials on one page. The 30-day inquiry check starts.",
      },
    ],
    faqs: [
      {
        q: "Does the $497 site take online bookings?",
        a: "No. This SKU has no booking calendar. The site carries a lead form and tap-to-call. If you want job requests landing on a calendar you own, that is Front Door Wired at $1,497.",
      },
      {
        q: "Will this get me to the top of Google?",
        a: "We do not promise rankings, call volume, or revenue. You get a real storefront that matches your Google Business Profile and makes it easy for someone to request a job. We do not guarantee a position.",
      },
      {
        q: "Who owns the domain and the site?",
        a: "You do. The domain stays in your registrar in your name, and you get the hosting access and the repo at handover. If you ever leave, the site leaves with you.",
      },
      {
        q: "When does the 7 days start?",
        a: "When your intake packet is complete: questionnaire, logo, at least 10 real photos or a written waiver, service list, hours, license numbers, and registrar access. It does not start at signature, and it does not run while we wait on your photos or copy.",
      },
      {
        q: "How does payment work?",
        a: "$197 to start and $300 when you approve the staging site, $497 total. The balance is due only after you say yes in writing. Nothing is charged for an approval you never gave.",
      },
    ],
  },
  {
    name: "Front Door Wired",
    slug: "front-door-wired",
    price: "$1,497",
    tagline: "The Front Door plus a request-to-book page on a shop calendar you own.",
    answer:
      "Front Door Wired is the Front Door plus a request-to-book page on a shop calendar you own. Requests land in a CRM you control, with an SMS confirmation when a request comes in. Voice is not included. $1,497 total: $497 to start, $1,000 on staging approval and a working book URL.",
    includes: [
      "Everything in Front Door",
      "A request-to-book page on a shop calendar you own",
      "Your site's lead form wired into that CRM",
      "SMS confirmation when a request comes in",
      "Book URL proof before the balance is due",
      "Qualify is set to request: nothing auto-books a job",
    ],
    process: [
      {
        h: "Intake packet",
        p: "The same packet as the Front Door, plus who receives new requests and what a good job looks like. The clock starts when the packet is complete.",
      },
      {
        h: "Staging site and shop book",
        p: "We build the Front Door pages on a staging link and stand up your shop book alongside them.",
      },
      {
        h: "You approve",
        p: "You review the staging site and the book page. Qualify stays on request, so a request never becomes a booked job without you.",
      },
      {
        h: "Book wired, DNS, handover",
        p: "We confirm the live book URL, wire the form and the SMS confirmation, point DNS after your written approval, and hand over every credential.",
      },
    ],
    faqs: [
      {
        q: "Does the calendar answer the phone?",
        a: "No. Voice is not included in this SKU. Requests arrive through the site, land in your CRM, and text you. Voice is a separate engagement and gets bound to a number only after a named go-ahead.",
      },
      {
        q: "Does a request automatically become a booked job?",
        a: "No. Qualify is set to request, so a submission creates a request you approve. Nothing auto-books a job, and no slot is held until you accept it.",
      },
      {
        q: "How does payment work on this SKU?",
        a: "$497 to start and $1,000 on staging approval and book URL proof, $1,497 total. You see the book page working on your own calendar before the balance is due.",
      },
      {
        q: "Do I own the booking system?",
        a: "Yes. The shop book runs on a calendar you own, handed over with the domain, hosting, and repo. This is not a rented seat in someone else's platform.",
      },
    ],
  },
  {
    name: "AI front desk",
    slug: "ai-front-desk",
    price: "$2,500 setup + $497/mo",
    tagline: "A 24/7 AI receptionist that answers in your business's voice, qualifies the caller, and books the job.",
    answer:
      "The AI front desk is a done-for-you AI receptionist for Arkansas service businesses. It answers every call around the clock in your business's voice, qualifies the caller by your rules, books straight onto your calendar, and sends SMS follow-up. Setup is $2,500 and the managed service is $497 a month, call recordings and monthly tuning included.",
    includes: [
      "24/7 call answering in your business's voice",
      "Caller qualification and emergency triage by your rules",
      "Booking directly onto your real calendar",
      "SMS follow-up and confirmation chains",
      "Call recordings and transcripts",
      "Monthly tuning session with us",
    ],
    process: [
      {
        h: "Free 15-minute assessment",
        p: "We load your business details and you hear the receptionist answer as your company before you spend a dollar.",
      },
      {
        h: "Script and guardrails build",
        p: "We write the greeting, qualification questions, pricing ranges you approve, and the escalation rules together.",
      },
      {
        h: "Live testing with your number",
        p: "You call it, break it, and adjust it. It does not take a real customer call until you sign off.",
      },
      {
        h: "Launch and monthly tuning",
        p: "We go live, listen to real calls with you, and tune the script every month as your business changes.",
      },
    ],
    faqs: [
      {
        q: "Does the AI receptionist sound robotic?",
        a: "You will hear it on your assessment call with your own business details loaded, before you commit to anything. It answers in your business's voice, follows your rules, and hands off to a human whenever you say so.",
      },
      {
        q: "What happens when a caller needs a human?",
        a: "The escalation rules are yours. Emergencies can ring your cell immediately, VIP customers can route to a specific person, and anything the system is unsure about takes a detailed message and texts it to you instantly.",
      },
      {
        q: "What does the $497 a month cover?",
        a: "The managed service: hosting, call volume, recordings, SMS follow-up, and a monthly tuning session where we review real calls and improve the script. No per-minute surprises.",
      },
    ],
  },
  {
    name: "AI operations audit",
    slug: "operations-audit",
    price: "$999 flat",
    tagline: "A prioritized automation plan with real ROI numbers, before anyone writes a big check.",
    answer:
      "The AI operations audit is a fixed-price, $999 assessment of how your Arkansas business handles calls, quotes, scheduling, and invoicing. We map every handoff, price the hours and missed revenue each leak costs, and hand you a prioritized automation plan with realistic ROI numbers. The fee credits toward any build started within 60 days.",
    includes: [
      "A full map of your intake, quoting, scheduling, and invoicing flow",
      "Hour and dollar cost assigned to every leak",
      "A prioritized build list: what to automate first and why",
      "Honest verdicts on what not to automate",
      "Tooling recommendations that use what you already pay for",
      "Full fee credit toward a build started within 60 days",
    ],
    process: [
      {
        h: "Working session",
        p: "Ninety minutes with you and whoever touches the phones or the books. We trace real jobs through your current process.",
      },
      {
        h: "The map",
        p: "We document every handoff, every retype, and every follow-up gap, with the hour and dollar cost attached.",
      },
      {
        h: "The plan",
        p: "A written, prioritized build list with ROI math per item, what to skip, and the order that pays for itself fastest.",
      },
      {
        h: "Your call",
        p: "Build with us and the fee credits, build with someone else, or build nothing. The plan is yours either way.",
      },
    ],
    faqs: [
      {
        q: "Why pay for an audit instead of going straight to a build?",
        a: "Because the audit is where we find out whether the build pays. Some businesses need the front desk first, some need quote follow-up first, and a few do not need us at all yet. The $999 buys a straight answer with numbers attached.",
      },
      {
        q: "What do I physically receive?",
        a: "A written process map, a costed leak list, and a prioritized build plan with ROI math for each item. It is a document you can execute with us, with another vendor, or with your own team.",
      },
      {
        q: "Does the fee really credit toward a build?",
        a: "Yes. Start any done-for-you build within 60 days and the full $999 comes off the setup. Same rule as Front Door.",
      },
    ],
  },
  {
    name: "Workflow automation",
    slug: "workflow-automation",
    price: "$1,500 to $5,000 setup + monthly",
    tagline: "Lead to quote to job to invoice, without the retyping and the follow-up gaps.",
    answer:
      "Workflow automation connects the tools your Arkansas business already uses so information moves once: lead capture to quote, quote to job, job to invoice, and every follow-up in between. Builds run $1,500 to $5,000 depending on scope, plus a monthly managed tier, and we build on your existing stack rather than selling you a new one.",
    includes: [
      "Lead capture that types itself into your CRM or inbox",
      "Quote and estimate follow-up sequences",
      "Scheduling and dispatch coordination without phone tag",
      "Invoice and payment chasing that runs on time, not memory",
      "Review requests triggered by completed jobs",
      "Built on the tools you already pay for",
    ],
    process: [
      {
        h: "Scope from the audit",
        p: "Most builds start from the operations audit map, so scope and price are agreed before work begins. No open-ended billing.",
      },
      {
        h: "Build in your stack",
        p: "We wire the capture, routing, and follow-up into the calendar, CRM, and accounting tools you already run.",
      },
      {
        h: "Test with real jobs",
        p: "We run live jobs through the system with you before it goes unattended. You see every message it sends.",
      },
      {
        h: "Managed monthly",
        p: "We monitor, fix, and improve the flows as your process evolves. You get a human to call when something needs changing.",
      },
    ],
    faqs: [
      {
        q: "What tools do you build on?",
        a: "Whatever you already pay for: Google Workspace, QuickBooks, Jobber, Housecall Pro, ServiceTitan, Follow Up Boss, and the usual Arkansas small-business stack. If a tool change would genuinely pay for itself, we will say so and explain the math.",
      },
      {
        q: "Why the price range?",
        a: "Scope. A quote follow-up sequence is a $1,500 build. A full lead-to-invoice pipeline with dispatch coordination is closer to $5,000. The audit fixes the number before you commit to anything.",
      },
      {
        q: "What if something breaks?",
        a: "The monthly tier exists for exactly that. We monitor the flows, and you have a human to call. Automation that nobody maintains dies quietly; the retainer keeps it loud.",
      },
    ],
  },
  {
    name: "Embedded automation retainer",
    slug: "automation-retainer",
    price: "From $2,000/mo",
    tagline: "We come to you: on-site working sessions and a continuous build-out of custom workflows.",
    answer:
      "The embedded retainer is ongoing, on-site automation work for Arkansas businesses that want a builder, not a project. From $2,000 a month, you get scheduled working sessions at your location, a continuous build-out of custom workflows, priority turnaround, and staff training. It is how owners who are too busy for workshops get the whole roadmap done.",
    includes: [
      "Scheduled on-site working sessions at your location",
      "A continuous build-out from your prioritized roadmap",
      "Priority turnaround on changes and fixes",
      "Staff training as each system goes live",
      "Quarterly ROI review against the original map",
      "Direct line to the person who built your systems",
    ],
    process: [
      {
        h: "Roadmap first",
        p: "The retainer starts from the operations audit map, so every month builds the next highest-ROI item, in order.",
      },
      {
        h: "On-site working sessions",
        p: "We work at your location on a set cadence, building alongside the people who will run the systems.",
      },
      {
        h: "Train as we ship",
        p: "Every system comes with staff training, so the team adopts it instead of working around it.",
      },
      {
        h: "Review quarterly",
        p: "We measure the build against the original ROI math and re-rank the roadmap. If the retainer stops paying, we say so.",
      },
    ],
    faqs: [
      {
        q: "How is this different from the one-time builds?",
        a: "The builds ship one system. The retainer ships the whole roadmap over months, with us embedded: on-site sessions, staff training, and priority turnaround as the business changes. It is for owners who want the outcome without managing a project.",
      },
      {
        q: "Is there a minimum term?",
        a: "Three months, because the first month is roadmap and foundation work. After that it runs month to month. If we are not earning the fee by the quarterly review, we will tell you before you notice.",
      },
      {
        q: "Who is this actually for?",
        a: "Owners too busy for a workshop and past the point where one build fixes it: multi-crew trades, multi-provider clinics, and firms where the automation roadmap touches every department. Usually eight figures of operational chaos, occasionally seven.",
      },
    ],
  },
];

export function serviceBySlug(slug: string): Service {
  const s = services.find((s) => s.slug === slug);
  if (!s) throw new Error(`Unknown service slug: ${slug}`);
  return s;
}

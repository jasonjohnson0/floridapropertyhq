import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  {
    title: "Buying a Home in Northwest Florida | Bay & Jackson County Guide | Florida Property HQ",
  },
  {
    name: "description",
    content:
      "What to know before buying a home in Northwest Florida — flood zone checks, inspection priorities, insurance pre-shopping, and local market context for Bay and Jackson counties.",
  },
];

const steps = [
  {
    number: "01",
    heading: "Get pre-approved — but do it before you fall in love with a house",
    body: "In Northwest Florida's active markets (particularly Bay County), being pre-approved is essentially table stakes. But more importantly, pre-approval forces you to confront the real budget numbers before you've emotionally committed to a property. In Bay County especially, where insurance adds $3,000–$8,000+ per year to annual housing costs on some properties, understanding your true total monthly payment before you start touring matters more than it does in most markets.",
  },
  {
    number: "02",
    heading: "Check the flood zone before anything else",
    body: "In Bay County, flood zone designation affects insurance requirements and costs dramatically — and two houses on the same street can have different designations based on their specific elevation relative to a mapped base flood elevation. Pull the flood zone map determination for any property you're serious about. FEMA's Flood Map Service Center (msc.fema.gov) lets you look up any address for free. If you're in an AE or VE zone, budget for mandatory flood insurance before you run the numbers on affordability.",
  },
  {
    number: "03",
    heading: "Request an elevation certificate for coastal Bay County properties",
    body: "An elevation certificate — performed by a licensed surveyor — documents the relationship between a property's lowest floor and its Base Flood Elevation. It directly affects how much you'll pay for flood insurance. If the property sits above its BFE, you may pay significantly less. Below it, significantly more. Some sellers have existing elevation certificates; if not, order one before you commit. In Jackson County (Marianna), this matters less — flood exposure is lower and mainly river-based — but it's still worth understanding if you're near the Chipola River drainage.",
  },
  {
    number: "04",
    heading: "Pre-shop insurance before closing, not after",
    body: "One of the most common buyer mistakes in Northwest Florida is waiting until they're under contract — or worse, days before closing — to learn what insurance will cost. In Bay County particularly, post-Hurricane Michael insurance markets remain complex. Get informal insurance quotes (both homeowners/wind and flood) for any property you're seriously considering before making an offer. Some properties look affordable until you add insurance; others are better bargains than they appear once you know the full cost picture.",
  },
  {
    number: "05",
    heading: "Understand the difference between Hurricane Michael impact zones",
    body: "In Bay County, what happened to a specific property in October 2018 matters. Ask sellers directly about storm damage and repairs. A home with a post-2019 roof replacement, documented wind mitigation features, and clean permit history is materially different from one with an undisclosed patch repair. The building permit database for Bay County is publicly searchable — your agent or inspector can help you pull it.",
  },
  {
    number: "06",
    heading: "Commission a wind mitigation inspection",
    body: "Florida allows insurance premium discounts for documented wind-resistant features — hip roof shape, reinforced roof-to-wall connections, opening protection (shutters or impact glass), and secondary water resistance (a peel-and-stick membrane under the shingles). A licensed wind mitigation inspector documents these features in a report you submit to your insurance carrier. In Bay County, where wind exposure is genuine, a good report can save $500–$1,500+ per year in premiums. It's typically worth paying for independently even if the seller has one — your inspector, your report.",
  },
  {
    number: "07",
    heading: "Get a thorough home inspection — and add WDO",
    body: "Standard home inspections are a floor, not a ceiling. For Northwest Florida properties, make sure your inspection includes the roof (condition, age, flashing, and penetrations), crawlspace or foundation (particularly for older Jackson County homes), electrical panel and any aluminum wiring in older properties, and HVAC age and condition. Add a separate Wood-Destroying Organism (WDO/termite) inspection — subterranean termites are endemic to North Florida and a termite inspection is worth the modest additional cost.",
  },
  {
    number: "08",
    heading: "In Jackson County: add sinkhole awareness to your inspection list",
    body: "The karst limestone geology underlying Jackson County and the broader inland Panhandle creates sinkhole potential. For older homes in Marianna especially, inspect the foundation carefully and look for diagonal cracking patterns in walls, sticking doors, and sloping floors — possible early signs of subsidence. If anything looks suspicious, a licensed geotechnical engineer can do a more thorough evaluation. And add sinkhole coverage to your insurance policy — it's a modest additional premium for meaningful protection.",
  },
];

const closingPoints = [
  {
    heading: "Allow time to negotiate based on inspection findings",
    body: "Florida's standard AS IS contract (FR/BAR) gives buyers the right to inspect and cancel within the inspection period — but doesn't obligate sellers to make repairs. Negotiate repair credits or price reductions before you release contingencies, not after. Items found after closing are your problem.",
  },
  {
    heading: "Verify permit history on improvements",
    body: "Unpermitted additions, room conversions, or garage enclosures are surprisingly common in Northwest Florida. They can create problems at closing, with insurance, and at resale. Ask your agent to pull the permit history for any property where something looks added or modified.",
  },
  {
    heading: "Review the HOA documents if applicable — all of them",
    body: "HOA communities require disclosure of rules, financials, and reserves. In post-Michael Bay County, some HOA reserve funds were strained by community infrastructure repairs. Review financials for pending special assessments or underfunded reserves. Your review period starts when you receive the documents, not when you go under contract.",
  },
  {
    heading: "Closing costs in Florida: budget 2–4% of purchase price",
    body: "Florida closing costs typically include title insurance (customarily paid by sellers in many counties, but negotiable), documentary stamp taxes on the deed, recording fees, lender fees, and prepaid insurance and property taxes. In Bay County, the seller customarily pays for the title insurance premium; in some other counties it varies. Confirm with your real estate attorney or title company.",
  },
];

export default function BuyingAHome() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Resource Guide · Northwest Florida
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Buying a Home in Northwest Florida
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            What to know before making an offer in Bay or Jackson County — flood
            zones, insurance pre-shopping, inspection priorities, and the local
            market context that generic buyer's guides skip.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {["Bay County", "Jackson County", "Flood Zone Research", "Wind Mitigation"].map((tag) => (
              <span key={tag} className="bg-blue-800/60 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">
            Buying in Northwest Florida Is Different
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              The standard homebuyer's checklist — pre-approval, offer, inspection,
              close — applies here. But Northwest Florida adds several layers of
              complexity that generic buyer's guides don't address: flood zone
              research that can make or break the affordability of a specific
              property, an insurance market that has changed significantly since
              Hurricane Michael in 2018, and a mix of older housing stock (Jackson
              County) and post-storm rebuild inventory (Bay County) that requires
              more specific inspection attention than in newer markets.
            </p>
            <p>
              This guide walks through the process with the local context baked in.
              It's not a replacement for working with a local buyer's agent and a
              licensed insurance agent — but it's meant to help you ask the right
              questions before you need them.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Step-by-Step: What to Do (and When)
          </h2>
          <p className="text-slate-500 mb-10">
            These aren't necessarily sequential — several happen in parallel. But
            understanding each one before you start shopping will save you time
            and prevent surprises.
          </p>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-950 text-white text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.heading}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing process */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            From Contract to Closing
          </h2>
          <p className="text-slate-500 mb-10">
            Once you're under contract, the due diligence period is your most
            important window. Don't let it pass without fully using it.
          </p>
          <div className="space-y-6">
            {closingPoints.map((point) => (
              <div key={point.heading} className="border-l-4 border-amber-400 pl-5">
                <h3 className="font-bold text-slate-900 mb-1.5">{point.heading}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick reference box */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Quick Reference: Key Contacts & Tools
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "FEMA Flood Map Service Center", detail: "Look up flood zones for any address free at msc.fema.gov", href: "https://msc.fema.gov" },
              { label: "Bay County Property Appraiser", detail: "Property records, ownership history, and assessed values for Bay County", href: "https://www.baypa.net" },
              { label: "Jackson County Property Appraiser", detail: "Property records and ownership information for Jackson County", href: "https://www.jacksoncountypa.com" },
              { label: "Florida Division of Corporations", detail: "Look up entity ownership for properties owned by LLCs or corporations", href: "https://search.sunbiz.org" },
              { label: "Bay County Building Services", detail: "Pull permit history for Bay County properties (850-248-8240)", href: "https://www.baycountyfl.gov" },
              { label: "Florida Department of Financial Services", detail: "Verify any insurance agent's license before you work with them", href: "https://www.myfloridacfo.com" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <div className="font-semibold text-blue-900 group-hover:underline mb-1 text-sm">{item.label} ↗</div>
                <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer + related */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-950 text-slate-200 rounded-2xl p-8 mb-8">
            <p className="leading-relaxed mb-4 text-sm">
              Buying a home in Northwest Florida rewards preparation. The flood
              zone variables, insurance complexity, and inspection specifics
              covered here aren't meant to discourage you — they're meant to help
              you avoid the surprises that catch buyers who come in without local
              context. Work with a local buyer's agent who knows Bay or Jackson
              County, an insurance agent who actively writes in the area, and a
              title company familiar with the local market.
            </p>
            <p className="text-slate-400 text-xs">
              Nothing on this page constitutes legal, financial, or insurance
              advice. Work with licensed professionals for your specific
              transaction.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "Homeowners Insurance Guide", href: "/resources/homeowners-insurance" },
              { label: "Panama City Property Guide", href: "/cities/panama-city" },
              { label: "Marianna Property Guide", href: "/cities/marianna" },
              { label: "Rental & Investment Property", href: "/resources/rental-investment" },
            ].map((r) => (
              <Link
                key={r.label}
                to={r.href}
                className="flex items-center gap-3 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 hover:border-blue-300 hover:text-blue-900 transition-colors group text-sm font-medium"
              >
                <span className="text-amber-500 group-hover:translate-x-0.5 transition-transform">→</span>
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

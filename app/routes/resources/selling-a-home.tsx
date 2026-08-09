import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  {
    title: "Selling Your Home in Northwest Florida | Bay & Jackson County | Florida Property HQ",
  },
  {
    name: "description",
    content:
      "Practical guidance for selling a home in Panama City, Marianna, and Northwest Florida — pricing, preparation, disclosure requirements, and what sets this market apart from generic selling guides.",
  },
];

const prepPoints = [
  {
    icon: "📋",
    heading: "Pull your own permit history before a buyer does",
    body: "In Bay County especially, buyers and their agents are increasingly running permit searches on properties before making offers. Unpermitted additions, conversions, or repairs can slow or kill deals. Know what's in your permit history before you list. If you have unpermitted work, talk to a real estate attorney about your options — you may be able to retroactively permit some improvements, or you may need to disclose and price accordingly.",
  },
  {
    icon: "📄",
    heading: "Gather your roof and repair documentation now",
    body: "Post-Michael, buyers in Bay County specifically want documentation on roof age, replacement history, and any storm-related repairs. If your roof was replaced between 2018–2022, that's a selling point — have the permit, contractor invoice, and any insurance claim documentation ready. A documented 2019 roof replacement can meaningfully differentiate your property in a buyer's comparison set.",
  },
  {
    icon: "💨",
    heading: "Commission a wind mitigation report before listing",
    body: "A current wind mitigation inspection report (performed by a licensed inspector) documents your home's wind-resistant features for buyers. Buyers who receive a seller's wind mitigation report can submit it to their insurer and potentially reduce their annual premium — which improves their affordability on your home. This is a low-cost seller's tool (typically $75–$150) that can meaningfully help buyers justify your price.",
  },
  {
    icon: "📐",
    heading: "If you have an elevation certificate, include it in your disclosures",
    body: "An existing elevation certificate showing your property sits above its Base Flood Elevation can materially reduce what buyers pay for flood insurance. If you have one, it's a marketing asset. If you don't have one and you're in a flood zone, buyers may order one during due diligence — and it will affect the outcome. Knowing your flood insurance picture before you list helps you price correctly and avoid surprises.",
  },
  {
    icon: "🔍",
    heading: "Address deferred maintenance before buyers find it",
    body: "In both Bay and Jackson counties, inspection findings give buyers leverage to renegotiate or walk away. The most common negotiating ammunition: roof condition, HVAC age, water heater age, and any signs of moisture intrusion or prior water damage. Replacing a $600 water heater before listing costs you $600; a buyer finding a 2004 water heater will ask for $1,500 in credit. Pre-listing maintenance is usually a positive-ROI investment.",
  },
];

const pricingPoints = [
  {
    heading: "Pricing in Bay County: post-Michael appreciation has created real complexity",
    body: "Bay County home values appreciated significantly in the years following Hurricane Michael as inventory contracted and demand held. But not all of that appreciation is permanent, and the market has been recalibrating. Pricing competitively requires understanding your specific neighborhood's recent comparable sales — not just county-wide trends. Work with an agent who can pull genuine comps (closed sales, similar square footage and condition, within 0.5 miles ideally) rather than leaning on Zillow estimates, which lag significantly in smaller markets.",
  },
  {
    heading: "Pricing in Jackson County: realistic expectations are key",
    body: "Marianna's market is thin — there are fewer transactions, and price discovery is harder than in Bay County. Overpricing in a thin market means sitting: the pool of qualified buyers is smaller, and a house that's been on the market for 120+ days will face skeptical buyers wondering what's wrong with it. Jackson County sellers typically need to price within 5–8% of true market value to generate meaningful activity.",
  },
  {
    heading: "Insurance costs affect what buyers can actually afford on your home",
    body: "If your property carries high insurance costs (flood zone, older roof, coastal exposure), buyers will factor that into their affordability calculation even if you're not showing them the insurance quotes. A home priced at $350,000 with $12,000/year in insurance looks different to a lender's debt-to-income calculation than one with $5,000/year. This is why knowing your insurance picture before listing — and being able to discuss it honestly — matters.",
  },
  {
    heading: "Days on market matters more in Northwest Florida than in busier markets",
    body: "In active metros, a house that's been listed for 60 days might be fine; buyers accept that inventory doesn't move fast everywhere. In Northwest Florida's smaller markets, 60+ days on the market is a signal. If you're not getting offers within the first 2–3 weeks in Bay County or 3–4 weeks in Jackson County, something about your pricing or presentation isn't working. Reassess early rather than late.",
  },
];

const disclosureItems = [
  { item: "Known defects and material facts", detail: "Florida requires sellers to disclose all known facts that materially affect the value of the property and that are not readily observable by a buyer. This is broad — when in doubt, disclose." },
  { item: "Hurricane damage history", detail: "Any storm damage and the repairs made (or not made) should be disclosed. Undisclosed damage that a buyer discovers post-closing can result in litigation." },
  { item: "Insurance claims history", detail: "Buyers increasingly request insurance claims history via C.L.U.E. (Comprehensive Loss Underwriting Exchange) reports. Sellers can pull their own C.L.U.E. report before listing to know what buyers will see." },
  { item: "HOA information (if applicable)", detail: "Sellers in HOA communities must provide HOA documents, financials, and governing rules within a required disclosure period. Any pending special assessments must be disclosed." },
  { item: "Flood zone status", detail: "If you know your property is in a FEMA Special Flood Hazard Area (AE or VE zone), disclose it. Buyers will discover this anyway — handling it proactively builds trust." },
  { item: "Permit history for improvements", detail: "If you've done unpermitted work, disclose it. Buyers' attorneys and inspectors look for this, and late-discovered unpermitted work creates liability for sellers." },
];

export default function SellingAHome() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Resource Guide · Northwest Florida
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Selling Your Home in Northwest Florida
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            Preparation, pricing, disclosure, and local market context for
            sellers in Bay and Jackson counties — with the specifics that
            generic selling guides don't cover.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {["Bay County", "Jackson County", "Disclosure Requirements", "Post-Michael Market"].map((tag) => (
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
            What Northwest Florida Sellers Need to Know
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Selling a home in Bay or Jackson County involves the standard steps
              — price it, prepare it, list it, negotiate, close — but with local
              variables that change how each of those steps works in practice.
              The post-Michael insurance landscape affects buyer affordability.
              Flood zone status affects how buyers evaluate properties. The permit
              and repair history of any Bay County home is now a routine part of
              buyer due diligence.
            </p>
            <p>
              This guide covers what to do before you list, how to think about
              pricing in each market, what Florida's disclosure requirements mean
              for Northwest Florida sellers specifically, and how to set realistic
              expectations for the process.
            </p>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Preparing Your Home to Sell
          </h2>
          <p className="text-slate-500 mb-10">
            In Northwest Florida, preparation goes beyond staging and paint. These
            are the items that affect buyer confidence and deal terms.
          </p>
          <div className="space-y-8">
            {prepPoints.map((point) => (
              <div key={point.heading} className="flex gap-5">
                <div className="text-2xl flex-shrink-0 mt-0.5">{point.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{point.heading}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{point.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Pricing Realistically in Northwest Florida
          </h2>
          <p className="text-slate-500 mb-10">
            Local pricing dynamics in Bay and Jackson counties differ
            meaningfully — and the variables that drive them are different from
            most other Florida markets.
          </p>
          <div className="space-y-6">
            {pricingPoints.map((point) => (
              <div key={point.heading} className="border-l-4 border-amber-400 pl-5">
                <h3 className="font-bold text-slate-900 mb-1.5">{point.heading}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Florida Seller Disclosure Requirements
          </h2>
          <p className="text-slate-500 mb-8">
            Florida is a caveat venditor (seller beware) state — sellers have
            broad disclosure obligations. Here's what matters most in the
            Northwest Florida context.
          </p>
          <div className="space-y-4">
            {disclosureItems.map((item) => (
              <div key={item.item} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="font-semibold text-slate-900 mb-1.5">{item.item}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Note:</strong> Florida disclosure law is interpreted by courts, and
              the definition of "material fact" has been broadly applied. Consult a
              real estate attorney if you have questions about specific disclosures —
              the cost of legal advice before listing is far less than the cost of
              post-closing litigation.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer + related */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-950 text-slate-200 rounded-2xl p-8 mb-8">
            <p className="leading-relaxed mb-4 text-sm">
              Selling in Northwest Florida rewards preparation and realistic
              expectations. The buyers in this market — particularly in Bay
              County post-Michael — are increasingly sophisticated about flood
              zones, insurance costs, and repair history. Sellers who understand
              those variables and present their properties honestly will close
              faster and with fewer deal disruptions than those who don't.
            </p>
            <p className="text-slate-400 text-xs">
              Nothing on this page constitutes legal, financial, or real estate
              advice. Work with a licensed Florida real estate attorney and a
              local listing agent for your specific transaction.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "Homeowners Insurance Guide", href: "/resources/homeowners-insurance" },
              { label: "Panama City Property Guide", href: "/cities/panama-city" },
              { label: "Buying a Home Guide", href: "/resources/buying-a-home" },
              { label: "Marianna Property Guide", href: "/cities/marianna" },
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

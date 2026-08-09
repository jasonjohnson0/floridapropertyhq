import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  {
    title:
      "Panama City FL Property Guide | Neighborhoods, Ownership & Local Insights | Florida Property HQ",
  },
  {
    name: "description",
    content:
      "Practical property information for Panama City, Florida. Neighborhood context, ownership realities, insurance considerations, and local guidance for buyers and homeowners in Bay County.",
  },
];

const neighborhoods = [
  {
    name: "Historic Downtown / Old Town",
    summary:
      "The older urban core along the waterfront. Character homes and walkability, but flood zone exposure is significant. Pre-purchase elevation certificates are essential here.",
  },
  {
    name: "St. Andrews",
    summary:
      "A distinct historic district with craftsman bungalows and proximity to the bay. Popular with buyers seeking older character homes. Flood zone research is critical — some blocks face meaningful insurance costs.",
  },
  {
    name: "Lynn Haven",
    summary:
      "Technically its own city but considered part of the Bay County metro. Higher elevation, less flood exposure than the core city, and a well-established suburban feel. Post-Michael rebuild activity here was significant.",
  },
  {
    name: "Callaway",
    summary:
      "Another adjacent incorporated city. More modest and working-class in character, with lower price points than Lynn Haven. Practical for buyers focused on value.",
  },
  {
    name: "Parker",
    summary:
      "Southeastern portion of the metro. Industrial proximity, affordability, and ongoing community investment make it worth understanding if budget is a primary driver.",
  },
  {
    name: "Panama City Beach",
    summary:
      "A separate city with a fundamentally different market — dominated by vacation rental investment, condos, and short-term tourism economics. Covered separately from Panama City proper.",
  },
];

const ownershipPoints = [
  {
    icon: "🌀",
    heading: "Hurricane Michael reshaped the market",
    body: "Category 5 Hurricane Michael made landfall in Bay County in October 2018, causing catastrophic damage. Many homes were rebuilt or significantly repaired in the years following. When buying, the rebuild history of any specific property matters — newer construction post-Michael will generally have stronger roofs and better wind mitigation, while properties with older pre-storm structures may need more scrutiny.",
  },
  {
    icon: "🗺️",
    heading: "Flood zone designation drives significant cost differences",
    body: "Bay County has extensive FEMA flood zone coverage — AE zones (with base flood elevations), X zones, and some VE zones near the coast. Two homes a few blocks apart can face dramatically different annual insurance costs based solely on flood zone designation. Pull the flood zone determination and, ideally, an elevation certificate before you make an offer. It's not due-diligence overkill — it's basic homework in this market.",
  },
  {
    icon: "📈",
    heading: "Post-Michael appreciation has been meaningful",
    body: "The destruction of significant housing inventory — combined with population that largely stayed — pushed values up sharply in the years following the storm. Bay County is no longer the value play it was in the early 2010s. Buyers coming from other parts of Florida or out of state should not assume prices are discount-level simply because this is the Panhandle.",
  },
  {
    icon: "🏖️",
    heading: "Panama City vs. Panama City Beach are different markets",
    body: "Panama City proper is a year-round residential city. Panama City Beach is a vacation/investment market with different pricing, different tenant dynamics, and a different HOA landscape. Be clear about which you're evaluating.",
  },
];

const insurancePoints = [
  {
    heading: "Wind mitigation inspections are worth doing before you close",
    body: "Florida allows insurance discounts for documented wind-resistant features — roof shape, roof-to-wall connections, opening protection. In Bay County, where wind exposure is serious, the premium savings from a good wind mitigation report can be in the hundreds of dollars annually. Request or commission one before purchase.",
  },
  {
    heading: "Flood insurance is separate and frequently required",
    body: "If your property is in an AE or VE flood zone and has a mortgage from a federally regulated lender, flood insurance is mandatory. Even in X zones, it's worth pricing — the difference in premium can be modest relative to the exposure. FEMA's National Flood Insurance Program (NFIP) is the most common source, though private flood insurance has expanded.",
  },
  {
    heading: "Bay County saw private carrier exits post-Michael",
    body: "Multiple private homeowners insurance carriers reduced or ended coverage in Bay County after 2018. This is improving slowly, but the market remains constrained compared to lower-risk counties. Plan for the time needed to shop coverage properly — don't assume you'll insure through your existing carrier if you're relocating from elsewhere.",
  },
  {
    heading: "Citizens Insurance is an option, not always a preference",
    body: "Citizens Property Insurance Corporation is Florida's state-backed insurer of last resort. It's available when private coverage isn't, but Citizens rates have been rising and coverage is more limited. If private market options exist at competitive rates, they're generally worth taking.",
  },
  {
    heading: "Elevation certificates affect flood insurance premiums significantly",
    body: "If your property sits above its Base Flood Elevation, you may pay substantially less for flood insurance than the standard rate. If it sits below, you may pay more. An elevation certificate — performed by a licensed surveyor — documents this relationship. It's worth paying for independently; the investment typically pays back quickly in premium savings.",
  },
];

const resources = [
  { label: "Homeowners Insurance Guide", href: "/resources/homeowners-insurance" },
  { label: "Buying a Home in Northwest Florida", href: "/resources/buying-a-home" },
  { label: "Selling Your Home", href: "/resources/selling-a-home" },
  { label: "Property Management", href: "/resources/property-management" },
  { label: "Rental & Investment Property", href: "/resources/rental-investment" },
];

export default function PanamaCity() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            City Guide · Bay County, Florida
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Panama City, FL Property Guide
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            Neighborhood context, ownership realities, insurance considerations,
            and local guidance for buyers and homeowners in Panama City and Bay
            County.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {["Bay County Seat", "Gulf Coast Access", "Post-Hurricane Market", "Complex Flood Zones"].map((tag) => (
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
            Understanding Panama City as a Property Market
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>
              Panama City is Bay County's largest city and the civic and
              commercial center of the Florida Panhandle. Home to roughly 35,000
              residents in the city proper and more than 175,000 across the
              county, it sits at the intersection of Gulf Coast geography and
              North Florida small-city character — more working-class port city
              than tourist resort, though Panama City Beach (a separate
              municipality) handles the vacation-market side of Bay County's
              economy.
            </p>
            <p>
              As a property market, Panama City rewards research. Its location
              near the Gulf creates real weather and flood exposure. Its
              post-Hurricane Michael (2018) recovery has shaped everything from
              inventory levels to insurance market availability. And its
              neighborhood variation — from flood-prone bayou-adjacent streets to
              higher-elevation suburban subdivisions — means that location
              decisions matter at a finer grain than in many comparable-sized
              cities.
            </p>
            <p>
              This guide focuses on what that means practically: which
              neighborhoods carry which trade-offs, what the insurance landscape
              looks like, and what buyers and owners need to understand before
              making decisions in this market.
            </p>
          </div>
        </div>
      </section>

      {/* Why Location Matters */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">
            Why Location Within Panama City Matters
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Panama City spans roughly 25 square miles, and the variation within
            that area is significant enough that "I'm looking in Panama City" is
            only the beginning of a location conversation. Across the city, you
            encounter meaningful differences in:
          </p>
          <ul className="space-y-4">
            {[
              { label: "Flood zone designation", detail: "FEMA maps show dramatic variation block by block. Some streets in low-lying areas sit in AE or VE zones with mandatory flood insurance requirements; others a short distance away sit in X zones where flood insurance is optional." },
              { label: "Elevation and storm vulnerability", detail: "Higher-elevation portions of the city — particularly in the northern areas and Lynn Haven — faced less flood damage from Michael than the lower bayou-adjacent areas. Elevation is both an insurance and a risk factor." },
              { label: "Post-Michael rebuild status", detail: "Different neighborhoods saw different levels of storm damage. The rebuild quality and timing varies; some areas have substantially newer housing stock than others as a result." },
              { label: "School zoning and services", detail: "Bay County school zoning is significant for families. District lines don't always follow neighborhood names, so verify specific zoning for any address." },
            ].map((item) => (
              <li key={item.label} className="flex gap-4">
                <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-amber-500" />
                <div>
                  <span className="font-semibold text-slate-800">{item.label}: </span>
                  <span className="text-slate-600">{item.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Neighborhoods & Areas
          </h2>
          <p className="text-slate-500 mb-8">
            A practical overview of the main areas within the Bay County metro —
            what each offers, and what to watch out for.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {neighborhoods.map((n) => (
              <div key={n.name} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">{n.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{n.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ownership Realities */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Ownership Realities in Panama City
          </h2>
          <p className="text-slate-500 mb-10">
            What buyers and owners need to understand about this specific market
            — things that don't show up in the listing.
          </p>
          <div className="space-y-8">
            {ownershipPoints.map((point) => (
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

      {/* Insurance */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Insurance Considerations for Bay County
          </h2>
          <p className="text-slate-500 mb-10">
            Insurance in Bay County is more complex than in many Florida markets.
            Here's what matters most.
          </p>
          <div className="space-y-6">
            {insurancePoints.map((point) => (
              <div key={point.heading} className="border-l-4 border-amber-400 pl-5">
                <h3 className="font-bold text-slate-900 mb-1.5">{point.heading}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Note:</strong> Insurance premiums, carrier availability, and
              FEMA flood maps change. This guide reflects general conditions as of
              mid-2026. Verify current rates and coverage options with a licensed
              insurance agent who works in Bay County.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Helps */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Who This Guide Is For
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { who: "First-time buyers", what: "Trying to understand why two similar houses can have very different total ownership costs based on flood zone and elevation." },
              { who: "Out-of-area buyers", what: "Doing remote research before a visit, wanting local context that MLS listings don't provide." },
              { who: "Current homeowners", what: "Reviewing insurance options, preparing to sell, or trying to understand what their Bay County property is worth in the current market." },
              { who: "Investors", what: "Evaluating Bay County rental property — long-term residential rather than vacation rental (Panama City Beach has a separate landscape)." },
            ].map((item) => (
              <div key={item.who} className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="font-bold text-blue-900 mb-1.5">{item.who}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Directory */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Panama City & Bay County Community Directory
          </h2>
          <p className="text-slate-500 mb-8">
            Contact information, maps, and staff directories for the key civic
            institutions in Panama City and Bay County.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { name: "Bay County Chamber of Commerce", category: "Chamber of Commerce", address: "235 W 5th Street, Panama City FL 32401", phone: "850-785-5206", color: "bg-amber-100 text-amber-800" },
              { name: "Ascension Sacred Heart Bay", category: "Hospital", address: "615 N Bonita Ave, Panama City FL 32401", phone: "850-769-1511", color: "bg-red-100 text-red-800" },
              { name: "City of Panama City", category: "Municipal Government", address: "501 Harrison Ave, Panama City FL 32401", phone: "850-872-3010", color: "bg-blue-100 text-blue-800" },
              { name: "Bay County Board of County Commissioners", category: "County Government", address: "840 W 11th Street, Panama City FL 32401", phone: "850-248-8140", color: "bg-indigo-100 text-indigo-800" },
            ].map((entity) => (
              <div key={entity.name} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${entity.color}`}>
                  {entity.category}
                </span>
                <h3 className="font-bold text-slate-900 mt-3 mb-1 text-sm">{entity.name}</h3>
                <p className="text-xs text-slate-500 mb-1">{entity.address}</p>
                <a href={`tel:${entity.phone.replace(/[^0-9]/g, "")}`} className="text-xs text-blue-700 hover:underline font-medium">{entity.phone}</a>
              </div>
            ))}
          </div>
          <Link
            to="/cities/panama-city/directory"
            className="inline-flex items-center gap-2 bg-blue-950 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-900 transition-colors"
          >
            Full Directory — Maps, Staff & All Contact Info →
          </Link>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Related Resources
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {resources.map((r) => (
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

          {/* Closing */}
          <div className="bg-blue-950 text-slate-200 rounded-2xl p-8">
            <p className="leading-relaxed mb-4 text-sm">
              Panama City's property market rewards homework. The flood zone
              variables, insurance complexities, and post-hurricane rebuild
              patterns create more than average complexity for a city this size.
              The details in this guide — and the resources it links to — are
              meant to give you a foundation before you engage with local
              professionals who can help with your specific situation.
            </p>
            <p className="text-slate-400 text-xs">
              Nothing on this page constitutes legal, financial, or insurance
              advice. Work with licensed Bay County professionals — real estate
              agents, insurance agents, and attorneys — for your specific
              transaction.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-link to Marianna */}
      <section className="py-10 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-slate-500 text-sm">Also in Northwest Florida</p>
            <p className="font-semibold text-slate-900">Marianna / Jackson County →</p>
          </div>
          <Link
            to="/cities/marianna"
            className="bg-blue-950 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-900 transition-colors flex-shrink-0"
          >
            Explore Marianna Guide
          </Link>
        </div>
      </section>
    </>
  );
}

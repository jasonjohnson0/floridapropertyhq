import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  {
    title:
      "Marianna FL Property Guide | Jackson County Homeownership & Local Market Context | Florida Property HQ",
  },
  {
    name: "description",
    content:
      "Practical property information for Marianna, Florida and Jackson County. Inland market dynamics, ownership realities, insurance considerations, and local guidance for buyers and homeowners.",
  },
];

const neighborhoods = [
  {
    name: "Historic Downtown Core",
    summary:
      "The streets around Lafayette and Madison Avenue include some of Jackson County's oldest residential character. Smaller lots, older homes, some properties with historic significance. Buyer appeal here is primarily about character and location convenience — not appreciation expectations.",
  },
  {
    name: "Chipola College Area",
    summary:
      "Modest single-family homes surrounding the community college. Some rental demand from faculty and staff, though this isn't a large student rental market. Stable if modest pricing.",
  },
  {
    name: "Northern & Eastern Subdivisions",
    summary:
      "More recently developed single-family subdivisions north and east of downtown offer newer construction, larger lots, and less flood exposure. If you want a newer home with a garage in Marianna, this is where to look.",
  },
  {
    name: "Highway 90 Corridor",
    summary:
      "The commercial spine of Marianna running east-west. Mixed-use and commercial properties with some residential interspersed. Not a primary residential neighborhood but relevant for income-property buyers.",
  },
  {
    name: "Rural Jackson County",
    summary:
      "The county's large rural land market — timber tracts, cattle pasture, hunting land, and agricultural parcels — is a separate buying experience entirely from in-town residential. Rural parcels can run from under $2,000/acre to significantly more depending on timber, water features, and road access.",
  },
];

const ownershipPoints = [
  {
    icon: "💲",
    heading: "Prices are meaningfully lower than coastal Bay County",
    body: "Marianna's median home prices have historically ranged in the $140,000–$200,000 range — roughly half what buyers pay in the Panama City metro or significantly less than the statewide median. For buyers priced out of coastal markets or looking for genuine value in a stable community, this is the most immediate fact about the market. The lower price point comes with a corresponding reality: equity appreciation here has been slower and less dramatic than in Florida's coastal or metro markets.",
  },
  {
    icon: "🏚️",
    heading: "The housing stock skews older",
    body: "Marianna didn't see the wave of new construction that followed coastal Florida's boom-bust-boom cycles. A significant portion of available residential inventory was built before 1980. For buyers, that means inspection priority on roofs, foundations, electrical systems (particularly older aluminum wiring in some properties), and HVAC. Older homes here can be solid; they just require more pre-purchase diligence than newer construction.",
  },
  {
    icon: "🌀",
    heading: "Hurricane Michael had real impact here too",
    body: "When Hurricane Michael made landfall in October 2018 as a Category 5 storm, its path took it directly through Jackson County on the way inland. The damage here was less catastrophic than in coastal Bay County — no storm surge, lower wind speeds at landfall — but still significant. Many Jackson County homes have had roofs replaced since 2018, which is actually an advantage: a home with a 2019–2022 roof replacement will carry better insurability than one with a 2000-era roof. Ask sellers for documentation.",
  },
  {
    icon: "🏛️",
    heading: "The local economy is government and healthcare driven",
    body: "Marianna's economic base is relatively stable — Jackson County government, the Jackson Hospital system, Chipola College, and some light manufacturing. This isn't a boom-growth economy, but it's also not heavily exposed to tourism cycles. Property values don't spike and crash the way vacation markets do; they move slowly and steadily. For investors expecting appreciation, that's a caution. For buyers looking for stability, it's a feature.",
  },
  {
    icon: "💧",
    heading: "Flood risk exists — but it's river-based, not storm surge",
    body: "Jackson County has no Gulf Coast frontage, which means storm surge is not a factor here. However, the Chipola River and its tributaries run through the county, and some in-town areas near the river have genuine flood exposure. FEMA flood maps cover Marianna, and any property near the Chipola River drainage basin warrants a flood zone check. This is different from — and generally less severe than — the coastal surge exposure in Bay County, but it's not zero.",
  },
  {
    icon: "🕳️",
    heading: "Sinkhole risk is real in this part of Florida",
    body: "North Florida's limestone geology creates sinkhole potential across the region, and Jackson County is no exception. Florida Caverns State Park — just northwest of Marianna — exists because of this same karst topography. Sinkhole coverage is an optional endorsement on homeowners policies, and in Jackson County, it's worth the relatively modest additional premium. Have any older home inspected by someone familiar with the local geology.",
  },
];

const insurancePoints = [
  {
    heading: "Wind insurance is more affordable inland",
    body: "Jackson County sits far enough from the Gulf that wind insurance premiums are meaningfully lower than in coastal Bay County. You still need wind coverage — Michael demonstrated that inland areas can take severe wind damage — but the actuarial math is different when you're 60+ miles from the coast. Shop private market options; Citizens Insurance is available but shouldn't be the default assumption.",
  },
  {
    heading: "No storm surge, but flood insurance still matters in some areas",
    body: "Flood insurance in Marianna is about river and drainage basin exposure, not Gulf surge. For properties well away from the Chipola River and its tributaries, flood risk may be minimal and NFIP flood insurance optional (though worth pricing). For properties in lower-lying areas near the river, get the flood zone determination before you close.",
  },
  {
    heading: "Post-Michael roof replacements improve insurability",
    body: "A home with a roof replaced after 2018 is generally easier and cheaper to insure than one with an older roof. When evaluating properties, ask for the roof age and any post-storm documentation. Insurance carriers in Jackson County have tightened roof age requirements; a roof over 15–20 years old may limit your carrier options or trigger significant premium increases.",
  },
  {
    heading: "Sinkhole coverage is worth adding",
    body: "Florida's sinkhole endorsement adds coverage for ground movement and foundation issues related to karst activity. In Jackson County's geological environment, the premium for this endorsement is modest relative to the potential exposure. Many standard homeowners policies have limited sinkhole coverage by default — confirm what yours includes.",
  },
  {
    heading: "Private market availability is generally better inland",
    body: "Unlike coastal Bay County, where private insurers have significantly reduced their presence, Jackson County's inland location keeps it in a more normal insurance market. You'll still want to shop and compare — don't assume your first quote is your only option — but Citizens as last resort is less frequently the outcome here.",
  },
];

const resources = [
  { label: "Homeowners Insurance Guide", href: "/resources/homeowners-insurance" },
  { label: "Buying a Home in Northwest Florida", href: "/resources/buying-a-home" },
  { label: "Selling Your Home", href: "/resources/selling-a-home" },
  { label: "Property Management", href: "/resources/property-management" },
  { label: "Rental & Investment Property", href: "/resources/rental-investment" },
];

export default function Marianna() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            City Guide · Jackson County, Florida
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Marianna, FL Property Guide
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            Inland market dynamics, ownership realities, insurance considerations,
            and local context for buyers and homeowners in Marianna and Jackson
            County.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {["Jackson County Seat", "Inland Market", "Lower Price Points", "Rural & Residential"].map((tag) => (
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
            Understanding Marianna as a Property Market
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Marianna is the county seat of Jackson County and the main
              commercial hub for the interior Florida Panhandle. With a city
              population around 8,000 and roughly 48,000 across the county, it
              is a small city by most measures — and its property market reflects
              that character. Stable, affordable, slower to move, and grounded in
              local rather than vacation or investor demand.
            </p>
            <p>
              The most important thing to understand about Marianna as a property
              market is what it is not: it is not a coastal market, not a
              vacation-rental economy, and not a high-growth speculation target.
              That makes it a different kind of decision than buying in Panama
              City or Panama City Beach. The buyers who do well here are
              typically those who understand what they're getting — genuine value,
              a stable community, and a slower pace — rather than those trying to
              apply coastal-market assumptions.
            </p>
            <p>
              This guide covers the neighborhoods worth understanding, the
              ownership realities specific to Jackson County, and the insurance
              landscape for inland Panhandle properties — including how it differs
              from the coastal market context most Florida property content
              addresses.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "County Seat", value: "Jackson County" },
              { label: "City Population", value: "~8,000" },
              { label: "County Population", value: "~48,000" },
              { label: "Distance from Gulf", value: "~60 miles" },
            ].map((fact) => (
              <div key={fact.label} className="bg-slate-50 rounded-xl p-4 text-center border border-slate-200">
                <div className="text-lg font-bold text-blue-900">{fact.value}</div>
                <div className="text-xs text-slate-500 mt-1">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Marianna Differs */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">
            How Marianna Differs from Coastal Markets
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Buyers comparing Marianna to Bay County or other Gulf Coast markets
            will find the differences are significant across several dimensions.
            Neither market is objectively better — they serve different needs.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-950 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Factor</th>
                  <th className="text-left px-4 py-3 font-semibold">Marianna / Jackson County</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Panama City / Bay County</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: "Price range", marianna: "~$140K–$200K median", bay: "~$250K–$350K+ median" },
                  { factor: "Market pace", marianna: "Slower, less competitive", bay: "More active, more competing offers" },
                  { factor: "Storm surge risk", marianna: "None (inland)", bay: "Significant in flood zones" },
                  { factor: "Wind insurance cost", marianna: "Lower (inland rates)", bay: "Higher (coastal exposure)" },
                  { factor: "Housing stock age", marianna: "Skews older", bay: "Mixed; significant post-2018 rebuild" },
                  { factor: "Rental market", marianna: "Long-term, local tenant base", bay: "Mix of long-term and vacation rental" },
                  { factor: "Appreciation history", marianna: "Slow and steady", bay: "Higher volatility, larger swings" },
                ].map((row, i) => (
                  <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 font-medium text-slate-800 border-b border-slate-100">{row.factor}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-100">{row.marianna}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-100">{row.bay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Neighborhoods & Areas in Marianna
          </h2>
          <p className="text-slate-500 mb-8">
            An overview of the main residential areas and property types in and
            around Marianna.
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
            Ownership Realities in Jackson County
          </h2>
          <p className="text-slate-500 mb-10">
            What buyers and owners need to know about this specific market —
            things that don't appear in the listing price.
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
            Insurance Considerations for Jackson County
          </h2>
          <p className="text-slate-500 mb-10">
            Inland Panhandle insurance is different from the coastal market —
            generally more favorable, but with its own considerations.
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
              <strong>Note:</strong> Insurance availability, premiums, and carrier
              options change regularly. This guide reflects general conditions as
              of mid-2026. Verify current rates with a licensed insurance agent
              working in Jackson County before making coverage decisions.
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
              { who: "Buyers comparing coast vs. inland", what: "Weighing lower Marianna prices against the coastal market's growth, risk profile, and insurance complexity." },
              { who: "Out-of-state buyers", what: "Attracted by Florida's overall appeal and Marianna's affordability, doing research before visiting." },
              { who: "Current Jackson County homeowners", what: "Reviewing insurance options, preparing a home for sale, or understanding what the local market looks like right now." },
              { who: "Investors in smaller markets", what: "Evaluating long-term residential rental income in a market with lower acquisition costs but also lower rents and appreciation." },
              { who: "Rural land buyers", what: "Jackson County has a significant rural land market — timber, agriculture, and recreational parcels — with its own dynamics." },
              { who: "Buyers moving for employment", what: "Relocating for work in the county's government, healthcare, or education sectors and evaluating the residential market." },
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
            Marianna & Jackson County Community Directory
          </h2>
          <p className="text-slate-500 mb-8">
            Contact information, maps, and staff directories for the key civic
            institutions in Marianna and Jackson County.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { name: "Jackson County Chamber of Commerce", category: "Chamber of Commerce", address: "4318 Lafayette St, Marianna FL 32446", phone: "850-482-8060", color: "bg-amber-100 text-amber-800" },
              { name: "Jackson Hospital", category: "Hospital", address: "4250 Hospital Drive, Marianna FL 32446", phone: "850-526-2200", color: "bg-red-100 text-red-800" },
              { name: "City of Marianna", category: "Municipal Government", address: "2898 Green Street, Marianna FL 32446", phone: "850-482-4353", color: "bg-blue-100 text-blue-800" },
              { name: "Jackson County Board of County Commissioners", category: "County Government", address: "2864 Madison Street, Marianna FL 32448", phone: "(850) 482-9633", color: "bg-indigo-100 text-indigo-800" },
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
            to="/cities/marianna/directory"
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
              Marianna's property market won't make headlines or generate the
              speculative attention that coastal Florida attracts. What it offers
              instead is genuine affordability, a stable community with real
              roots, and property decisions that are somewhat simpler to evaluate
              than the storm-surge-and-flood-zone complexity of coastal Bay
              County. If that's what you're looking for, the homework here is
              still worth doing — and this guide is meant to help you do it.
            </p>
            <p className="text-slate-400 text-xs">
              Nothing on this page constitutes legal, financial, or insurance
              advice. Work with licensed Jackson County professionals — real
              estate agents, insurance agents, and attorneys — for your specific
              transaction.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-link to Panama City */}
      <section className="py-10 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-slate-500 text-sm">Also in Northwest Florida</p>
            <p className="font-semibold text-slate-900">Panama City / Bay County →</p>
          </div>
          <Link
            to="/cities/panama-city"
            className="bg-blue-950 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-900 transition-colors flex-shrink-0"
          >
            Explore Panama City Guide
          </Link>
        </div>
      </section>
    </>
  );
}

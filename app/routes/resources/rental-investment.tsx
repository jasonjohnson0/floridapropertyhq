import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  {
    title: "Rental & Investment Property in Northwest Florida | Bay & Jackson County | Florida Property HQ",
  },
  {
    name: "description",
    content:
      "Long-term rental vs. vacation rental, cap rates, and what investment property actually looks like in Bay County and Jackson County, Florida — written for buyers evaluating real numbers.",
  },
];

const marketComparison = [
  { factor: "Typical entry price", longTerm: "Lower — $150K–$300K range for SFR", vacationRental: "Higher — often $300K+ for PCB condos" },
  { factor: "Gross rent potential", longTerm: "Lower but consistent monthly income", vacationRental: "Higher ceiling, highly seasonal" },
  { factor: "Vacancy risk", longTerm: "Low if properly maintained and priced", vacationRental: "Material in off-season; HOA restrictions risk" },
  { factor: "Management complexity", longTerm: "Lower — fewer turnovers, steadier tenants", vacationRental: "High — frequent turnover, platform management, cleaning" },
  { factor: "Insurance cost", longTerm: "Standard homeowners + landlord rider", vacationRental: "Commercial-style short-term rental coverage, often higher" },
  { factor: "HOA exposure", longTerm: "Moderate — most SFR HOAs allow long-term rental", vacationRental: "High — many PCB associations restrict or ban STR" },
  { factor: "Financing treatment", longTerm: "Investment property mortgage, 20–25% down typical", vacationRental: "Investment property or second home; lenders vary" },
  { factor: "Tax treatment", longTerm: "Schedule E, standard long-term rental rules", vacationRental: "Mixed-use rules apply if personal use ≥14 days or 10% of rental days" },
];

const capRateGuide = [
  {
    market: "Bay County — Panama City (Long-Term)",
    range: "5–7%",
    notes: "Post-Michael appreciation has compressed cap rates. Properties in better school zones and less flood-exposed areas command tighter cap rates. Older inventory with deferred maintenance can pencil at higher cap rates but carries more cost risk.",
  },
  {
    market: "Jackson County — Marianna (Long-Term)",
    range: "6–9%",
    notes: "Lower acquisition prices relative to rents create potentially stronger cap rates on paper. However, the tenant pool is shallower, vacancy periods can run longer, and management resources (professional managers, maintenance vendors) are less available than in Bay County.",
  },
  {
    market: "Bay County — Tyndall AFB Adjacent",
    range: "5–7%",
    notes: "Military families from Tyndall Air Force Base (rebuilding post-Michael) provide a relatively stable tenant demand segment. Properties within reasonable commute of the base have sustained rental demand through the base's recovery.",
  },
  {
    market: "Panama City Beach — Short-Term Rental",
    range: "Gross 15–25%+ (before expenses)",
    notes: "Gross rental yields look attractive; net yields after management fees (20–35% of gross for full-service STR management), HOA fees, insurance, maintenance, and vacancy can compress to 5–8% or less. Model carefully with real expenses, not best-case gross projections.",
  },
];

const dueDiligenceItems = [
  {
    heading: "Request actual rent rolls and expense history, not proformas",
    body: "Sellers and their agents will provide proforma income projections showing what a property 'could' earn. What you want is the actual rent roll (current tenants, lease terms, current rents) and 12–24 months of actual income and expense history. For properties that have been vacant or recently converted, get realistic comps from a local property manager — not optimistic estimates from a seller's agent.",
  },
  {
    heading: "Model insurance as a real line item",
    body: "Investment property insurance in Bay County is a material expense. For a property in an AE flood zone, budget $4,000–$8,000+ per year for flood plus wind/HO coverage. Include this in your cap rate and cash-on-cash calculations before making an offer. Many buyers get surprised at closing when they realize their projected 8% cap rate assumed $1,200/year in insurance and the real cost is $5,500.",
  },
  {
    heading: "Understand the tenant situation before you close",
    body: "If you're buying a tenanted property, review the existing lease carefully. Florida law generally requires you to honor existing leases as the new owner. Understand when the lease expires, whether you want to continue it, what the security deposit situation is, and whether there are any outstanding maintenance issues the current owner hasn't addressed. A non-paying tenant or a lease with below-market rent is a discount justification — not a pleasant surprise.",
  },
  {
    heading: "Verify HOA restrictions if buying in a community",
    body: "HOA communities vary significantly in whether and how they permit rental activity. Some have restrictions on minimum lease terms (often 6-month or 1-year minimums that prohibit short-term rental). Some require HOA approval of tenants. Some assess additional fees for rental units. Review the Declaration of Covenants, Conditions, and Restrictions (CC&Rs) and the HOA's current rental policy before buying in any community you plan to rent.",
  },
  {
    heading: "Factor capital expenditure reserves into your model",
    body: "HVAC, roof, appliances, water heaters, and major repairs are not 'if' costs — they're 'when' costs. In Northwest Florida's climate, HVAC systems work hard and have shorter effective lifespans in rental properties than in owner-occupied homes. A simple rule of thumb: budget 1–1.5% of property value annually as a capital expenditure reserve. For a $200,000 property, that's $2,000–$3,000/year set aside for major system replacements.",
  },
];

const redFlags = [
  "Gross rent multiplier (GRM) or cap rate calculated without insurance as a line item",
  "Proforma projections with no actual rent history to support them",
  "Vacation rental income projections based on 100% seasonal occupancy",
  "Seller claiming current rent is 'below market' without a comparable rent analysis",
  "No disclosure of HOA rental restrictions",
  "Deferred maintenance not reflected in the asking price",
  "Flood zone status not disclosed, or flood insurance cost excluded from expense projections",
  "Investment property being presented as a 'second home' to help you qualify for better financing rates",
];

export default function RentalInvestment() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Resource Guide · Northwest Florida
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Rental & Investment Property in Northwest Florida
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            Long-term rental vs. vacation rental, cap rates in Bay and Jackson
            counties, and what investment property actually looks like when you
            run the real numbers.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {["Long-Term Rental", "Cap Rates", "Bay County", "Jackson County"].map((tag) => (
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
            What Investment Property Looks Like in This Market
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Northwest Florida attracts two very different types of investment
              property buyers: those looking for long-term residential rental
              income in Bay or Jackson county, and those drawn by the vacation
              rental economics of Panama City Beach. These are genuinely different
              businesses with different economics, different risk profiles, and
              different management demands.
            </p>
            <p>
              This guide focuses primarily on long-term residential rental — the
              more straightforward of the two and the more relevant market for
              mainland Bay County and Jackson County buyers. It covers how to
              evaluate a rental property with realistic numbers, how to think
              about the cap rate ranges available in each market, and what due
              diligence is specific to this region. Vacation rental context for
              Panama City Beach is included for comparison, but PCB's STR market
              deserves its own analysis before any investment there.
            </p>
          </div>
        </div>
      </section>

      {/* LTR vs STR comparison */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Long-Term vs. Short-Term Rental: The Key Differences
          </h2>
          <p className="text-slate-500 mb-8">
            Vacation rental's higher gross revenue potential looks attractive.
            The net picture is more complicated.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-950 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Factor</th>
                  <th className="text-left px-4 py-3 font-semibold">Long-Term Rental</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Vacation / Short-Term Rental</th>
                </tr>
              </thead>
              <tbody>
                {marketComparison.map((row, i) => (
                  <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 font-medium text-slate-800 border-b border-slate-100">{row.factor}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-100">{row.longTerm}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-100">{row.vacationRental}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cap rates */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Cap Rate Ranges by Market
          </h2>
          <p className="text-slate-500 mb-8">
            Cap rates (net operating income ÷ purchase price) are a starting
            point for comparison, not a substitute for property-specific analysis.
            These are general ranges based on current market conditions.
          </p>
          <div className="space-y-5">
            {capRateGuide.map((item) => (
              <div key={item.market} className="border border-slate-200 rounded-xl p-6 bg-slate-50">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-slate-900">{item.market}</h3>
                  <span className="bg-blue-950 text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                    {item.range}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.notes}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4 italic">
            Cap rates are illustrative ranges based on general market conditions as
            of mid-2026. Individual properties will vary. Always calculate based
            on actual income and expenses, not broker proformas.
          </p>
        </div>
      </section>

      {/* Due diligence */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Investment Property Due Diligence in This Market
          </h2>
          <p className="text-slate-500 mb-10">
            The variables specific to Northwest Florida make some due diligence
            steps more important here than in other markets.
          </p>
          <div className="space-y-6">
            {dueDiligenceItems.map((point) => (
              <div key={point.heading} className="border-l-4 border-amber-400 pl-5">
                <h3 className="font-bold text-slate-900 mb-1.5">{point.heading}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red flags */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Red Flags to Watch For
          </h2>
          <p className="text-slate-500 mb-8">
            These are the warning signs that appear repeatedly in investment
            property deals that end badly for buyers.
          </p>
          <div className="space-y-2">
            {redFlags.map((flag) => (
              <div key={flag} className="flex gap-3 items-start p-4 bg-red-50 border border-red-100 rounded-lg">
                <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">⚠</span>
                <p className="text-slate-700 text-sm">{flag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer + related */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-950 text-slate-200 rounded-2xl p-8 mb-8">
            <p className="leading-relaxed mb-4 text-sm">
              Investment property in Northwest Florida can work well — the
              fundamentals of the market (stable tenant demand, reasonable
              acquisition prices in Jackson County, post-Michael recovery dynamics
              in Bay County) create real investment opportunities. What doesn't
              work is applying optimistic proforma math or coastal appreciation
              assumptions to a market that rewards conservative underwriting and
              hands-on management. Run the real numbers. Model the real insurance
              costs. Know your exit.
            </p>
            <p className="text-slate-400 text-xs">
              Nothing on this page constitutes financial, legal, or investment
              advice. Work with licensed professionals — a CPA for tax structure,
              a real estate attorney for entity and contract questions, and a local
              property manager for rent comps — before making investment decisions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "Property Management Guide", href: "/resources/property-management" },
              { label: "Homeowners Insurance Guide", href: "/resources/homeowners-insurance" },
              { label: "Panama City Property Guide", href: "/cities/panama-city" },
              { label: "Buying a Home Guide", href: "/resources/buying-a-home" },
            ].map((r) => (
              <Link
                key={r.label}
                to={r.href}
                className="flex items-center gap-3 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 hover:border-blue-300 hover:text-blue-900 transition-colors group text-sm font-medium bg-white"
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

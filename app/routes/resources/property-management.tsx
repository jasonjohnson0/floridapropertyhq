import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  {
    title: "Property Management in Northwest Florida | Bay & Jackson County | Florida Property HQ",
  },
  {
    name: "description",
    content:
      "What Northwest Florida landlords need to know about managing rental property in Bay and Jackson counties — tenant screening, leases, maintenance, and when to hire a property manager.",
  },
];

const selfVsPmPoints = [
  {
    heading: "Self-management makes sense when…",
    items: [
      "You live locally and can respond to maintenance calls within a reasonable time",
      "You own one or two properties and can give them focused attention",
      "You have reliable contractors and vendors you can call on short notice",
      "You're willing to stay current on Florida landlord-tenant law, which changes regularly",
      "Your tenant base is stable (long-term tenants who rarely need active management)",
    ],
  },
  {
    heading: "A property manager makes sense when…",
    items: [
      "You're an out-of-area owner — you can't realistically handle maintenance emergencies or tenant issues locally",
      "You own three or more properties and management is becoming a second job",
      "You're entering the market for the first time and want professional guidance through the first lease cycle",
      "Your properties are in Bay County's more complex vacation-adjacent rental markets",
      "You've had difficult tenant situations and want the buffer of professional screening and lease enforcement",
    ],
  },
];

const pmCostBreakdown = [
  { item: "Monthly management fee", range: "8–12% of monthly rent", note: "Most common structure. Covers rent collection, routine communications, maintenance coordination, and monthly owner statements." },
  { item: "Leasing / placement fee", range: "50–100% of one month's rent", note: "Charged when a new tenant is placed. Covers advertising, showings, screening, lease signing." },
  { item: "Maintenance coordination fee", range: "0–15% markup on vendor invoices", note: "Some managers charge a coordination fee on top of vendor costs. Others don't. Confirm this in the management agreement before signing." },
  { item: "Vacancy fee", range: "Varies / sometimes none", note: "Some managers charge a reduced fee during vacancy; others waive fees entirely. Ask specifically." },
  { item: "Lease renewal fee", range: "$0–$250", note: "Charged for renewing existing tenants. A modest and reasonable fee; excessive if over $250." },
  { item: "Early termination fee", range: "Often 2–3 months' management fees", note: "If you want to cancel the management agreement, understand the termination provisions before signing." },
];

const landlordLawPoints = [
  {
    heading: "Security deposit rules are strict and specific",
    body: "Florida law (F.S. 83.49) requires landlords to hold security deposits in a separate account (non-interest-bearing bank account, or interest-bearing with tenant notification) or post a surety bond. You must provide written notice of where the deposit is held within 30 days of receiving it. When the tenant vacates, you have 15 days to return the deposit or 30 days to provide a written notice of intention to impose a claim on it. Missing these deadlines forfeits your right to make any claim on the deposit — regardless of damages.",
  },
  {
    heading: "Entry notice requirements",
    body: "Under Florida law, a landlord must provide at least 12 hours' notice before entering a tenant's unit for non-emergency reasons. Entry should be at a reasonable time, generally between 7:30 AM and 8:00 PM. Emergency exceptions exist but should be documented. Routine inspections without proper notice can create tenant claims against you.",
  },
  {
    heading: "Eviction in Florida: process and timing",
    body: "Florida's eviction process (unlawful detainer) is faster than most states' but still requires strict adherence to the notice requirements. For non-payment of rent, the required notice is three days (excluding weekends and holidays). Once served, if the tenant doesn't pay or vacate, you file in county court. Uncontested evictions typically complete in 3–5 weeks; contested evictions can take longer. Self-help evictions — changing locks, removing property, shutting off utilities — are illegal in Florida and expose landlords to significant liability. Always use the court process.",
  },
  {
    heading: "Habitability standards are non-waivable",
    body: "Florida's implied warranty of habitability means landlords are legally required to maintain rental property in a condition that meets minimum standards — functioning plumbing, heating, weatherproofing, structural integrity, and freedom from pest infestation. In post-Michael Bay County especially, where some properties have had storm-related deferred maintenance, this matters: a landlord who knowingly rents a property with unaddressed storm damage may face habitability claims if issues emerge during tenancy.",
  },
  {
    heading: "Fair Housing compliance is federal and state law",
    body: "Fair Housing Act prohibitions on discrimination based on race, color, national origin, sex, disability, familial status, and religion apply to all residential landlords. Florida law adds additional protections. Advertising language, showing practices, screening criteria, and lease terms must all comply. The most common inadvertent violations involve disability accommodation denials and inconsistent application of screening standards. If in doubt, consult a landlord-tenant attorney before denying an application.",
  },
];

const maintenanceItems = [
  { item: "HVAC system", detail: "In Northwest Florida's heat and humidity, HVAC failure is a habitability issue, not an inconvenience. Service contracts covering annual tune-ups and filter changes are worth the cost. Budget for a replacement every 10–15 years in a rental unit." },
  { item: "Roof condition", detail: "Post-Michael, many roofs in Bay County are newer — but the ones that weren't replaced continue to age. A 15+ year roof on a rental property creates both insurance problems and habitability liability. Know your roof age and condition." },
  { item: "Pest control", detail: "Subterranean termites and cockroaches are endemic to North Florida. Budget for quarterly pest control service as an operating expense, not an occasional one. Termite bonds (annual contracts with re-treatment guarantees) are worth maintaining on older structures." },
  { item: "Water heater", detail: "Budget for replacement at 10–12 years. A failed water heater in a rental unit is an immediate habitability issue. Many landlords replace proactively at year 10 rather than responding to an emergency." },
  { item: "Landscaping and exterior", detail: "In Jackson County's humid climate, exterior maintenance — gutters, trim, fence lines — can deteriorate fast if neglected. Unaddressed exterior maintenance issues also create insurance problems at renewal." },
];

export default function PropertyManagement() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Resource Guide · Northwest Florida
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Property Management in Northwest Florida
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            Whether you manage your own rental property or work with a manager,
            here's what Northwest Florida landlords actually need to know —
            Florida landlord-tenant law, local market realities, and when the
            math on self-management stops working.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {["Bay County", "Jackson County", "Landlord-Tenant Law", "Long-Term Rentals"].map((tag) => (
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
            Managing Rental Property in Northwest Florida
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              This guide focuses on long-term residential rental management in Bay
              and Jackson counties — not vacation rental, which operates under
              different economics, different licensing requirements, and different
              management dynamics (covered in the Rental & Investment guide).
            </p>
            <p>
              Northwest Florida's long-term rental market is driven by local demand
              — working families, government and healthcare employees, students and
              faculty at Chipola College, and military families near Tyndall Air
              Force Base in Bay County. It's not a speculative market, which makes
              it relatively predictable. The landlord who understands Florida's
              specific legal requirements and maintains their property consistently
              will do well here.
            </p>
          </div>
        </div>
      </section>

      {/* Self vs PM */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Self-Management vs. Hiring a Property Manager
          </h2>
          <p className="text-slate-500 mb-8">
            There's no universal right answer — it depends on your situation,
            your tolerance for hands-on involvement, and the economics of your
            specific properties.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {selfVsPmPoints.map((section) => (
              <div key={section.heading} className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">{section.heading}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PM costs */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            What Property Management Actually Costs
          </h2>
          <p className="text-slate-500 mb-8">
            Property management fees in Northwest Florida are generally in line
            with the state average, but the details of fee structures vary
            significantly. Understand the full cost picture before signing a
            management agreement.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-950 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Fee Type</th>
                  <th className="text-left px-4 py-3 font-semibold">Typical Range</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {pmCostBreakdown.map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 font-medium text-slate-800 border-b border-slate-100">{row.item}</td>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-100 whitespace-nowrap">{row.range}</td>
                    <td className="px-4 py-3 text-slate-500 border-b border-slate-100 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3 italic">
            Fee structures vary by company. Always review the complete management
            agreement — not just the quoted monthly fee — before engaging a
            property manager.
          </p>
        </div>
      </section>

      {/* Florida law */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Florida Landlord-Tenant Law: What You Need to Know
          </h2>
          <p className="text-slate-500 mb-10">
            Florida's Residential Landlord and Tenant Act (Chapter 83, Part II)
            is specific and non-negotiable. These are the provisions that trip
            up landlords most often.
          </p>
          <div className="space-y-6">
            {landlordLawPoints.map((point) => (
              <div key={point.heading} className="border-l-4 border-amber-400 pl-5">
                <h3 className="font-bold text-slate-900 mb-1.5">{point.heading}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Important:</strong> Florida landlord-tenant law changes, and
              local courts can interpret provisions differently. This summary is
              for orientation, not legal advice. If you have a specific landlord-
              tenant question — particularly around eviction or security deposit
              disputes — consult a Florida attorney who handles residential
              landlord-tenant matters.
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Maintenance Priorities for Northwest Florida Rentals
          </h2>
          <p className="text-slate-500 mb-8">
            The climate, age of housing stock, and post-Michael context create
            specific maintenance priorities for Bay and Jackson County landlords.
          </p>
          <div className="space-y-4">
            {maintenanceItems.map((item) => (
              <div key={item.item} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="font-semibold text-slate-900 mb-1.5">{item.item}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
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
              Property management in Northwest Florida isn't complicated — but it
              requires following Florida's specific landlord-tenant requirements
              to the letter. The landlords who have problems are almost always
              the ones who handled a security deposit incorrectly, failed to
              serve proper notice before entry, or attempted a self-help eviction.
              Get the basics right, maintain your properties, and screen tenants
              carefully — the rest follows.
            </p>
            <p className="text-slate-400 text-xs">
              Nothing on this page constitutes legal advice. Florida
              landlord-tenant law is specific; consult a licensed Florida attorney
              for your particular situation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "Rental & Investment Guide", href: "/resources/rental-investment" },
              { label: "Buying a Home Guide", href: "/resources/buying-a-home" },
              { label: "Panama City Property Guide", href: "/cities/panama-city" },
              { label: "Marianna Property Guide", href: "/cities/marianna" },
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

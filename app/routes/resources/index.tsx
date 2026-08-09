import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  {
    title: "Property Resources | Northwest Florida | Florida Property HQ",
  },
  {
    name: "description",
    content:
      "Practical property guides for buyers, sellers, landlords, and investors in Northwest Florida — covering buying, selling, insurance, property management, and rental investment in Bay and Jackson counties.",
  },
];

const resources = [
  {
    title: "Buying a Home",
    href: "/resources/buying-a-home",
    icon: "🔑",
    description:
      "Flood zone checks, insurance pre-shopping, wind mitigation inspections, and the inspection priorities specific to Northwest Florida. What to do before you make an offer.",
    tags: ["Flood Zones", "Inspections", "Insurance"],
  },
  {
    title: "Selling Your Home",
    href: "/resources/selling-a-home",
    icon: "📋",
    description:
      "Preparing your home to sell, pricing realistically in Bay and Jackson counties, Florida disclosure requirements, and what post-Michael buyers are looking for.",
    tags: ["Pricing", "Disclosure", "Preparation"],
  },
  {
    title: "Homeowners Insurance",
    href: "/resources/homeowners-insurance",
    icon: "🛡️",
    description:
      "Wind, flood, Citizens, and sinkhole coverage explained — with separate Bay County and Jackson County context. What actually matters and what to do before your next renewal.",
    tags: ["Wind Mitigation", "Flood Insurance", "Citizens"],
  },
  {
    title: "Property Management",
    href: "/resources/property-management",
    icon: "🏘️",
    description:
      "Self-managing vs. hiring a property manager, Florida landlord-tenant law, fee structures, and the maintenance priorities specific to Northwest Florida rentals.",
    tags: ["Landlord Law", "Tenant Screening", "Maintenance"],
  },
  {
    title: "Rental & Investment Property",
    href: "/resources/rental-investment",
    icon: "📈",
    description:
      "Long-term vs. short-term rental, cap rate ranges by sub-market, investment due diligence specific to Bay and Jackson counties, and the red flags to watch for.",
    tags: ["Cap Rates", "Long-Term Rental", "Due Diligence"],
  },
];

export default function ResourcesIndex() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Property Resources · Northwest Florida
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Northwest Florida Property Resources
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            Topic guides written for Bay and Jackson County — not repackaged
            national advice. Each guide addresses the local conditions that
            actually affect property decisions here.
          </p>
        </div>
      </section>

      {/* Resource cards */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r) => (
              <Link
                key={r.title}
                to={r.href}
                className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200 flex flex-col"
              >
                <div className="text-3xl mb-3">{r.icon}</div>
                <h2 className="font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                  {r.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                  {r.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {r.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 text-slate-500 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City guides cross-link */}
      <section className="py-14 px-4 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">
            Also: City-Specific Property Guides
          </h2>
          <p className="text-slate-500 text-center mb-8">
            These resources pair with the city guides, which provide the local
            market context the resource pages reference.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {[
              { city: "Panama City", county: "Bay County", href: "/cities/panama-city", detail: "Flood zones, post-Hurricane Michael market, Bay County insurance complexity." },
              { city: "Marianna", county: "Jackson County", href: "/cities/marianna", detail: "Inland market dynamics, older housing stock, river flood risk, and lower prices." },
            ].map((guide) => (
              <Link
                key={guide.city}
                to={guide.href}
                className="group block bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {guide.city}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">{guide.county}</p>
                  </div>
                  <span className="text-blue-900 group-hover:translate-x-1 transition-transform text-lg">→</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{guide.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  {
    title:
      "Northwest Florida Property Guides | Panama City & Marianna | Florida Property HQ",
  },
  {
    name: "description",
    content:
      "Practical property guides for Panama City, Marianna, and Northwest Florida. Local insights on buying, owning, managing, and insuring homes in Bay and Jackson counties.",
  },
];

const cityGuides = [
  {
    city: "Panama City",
    county: "Bay County",
    href: "/cities/panama-city",
    description:
      "Bay County's largest city combines Gulf Coast appeal with real ownership complexity — flood zones, post-hurricane rebuild history, and insurance markets that reward homework.",
    tags: ["Coastal Market", "Flood Zones", "Hurricane Recovery"],
    color: "blue",
  },
  {
    city: "Marianna",
    county: "Jackson County",
    href: "/cities/marianna",
    description:
      "Jackson County's county seat is an inland, rural-character market with meaningfully lower prices, different risk considerations, and a slower pace than coastal Florida.",
    tags: ["Inland Market", "Lower Prices", "Rural & Residential"],
    color: "teal",
  },
];

const resources = [
  {
    title: "Buying a Home",
    href: "/resources/buying-a-home",
    icon: "🔑",
    description:
      "What to know before making an offer in Northwest Florida — from flood zone checks to inspection priorities specific to this region.",
  },
  {
    title: "Selling Your Home",
    href: "/resources/selling-a-home",
    icon: "📋",
    description:
      "Preparing, pricing, and navigating the local market — with realistic context for Bay and Jackson county sellers.",
  },
  {
    title: "Property Management",
    href: "/resources/property-management",
    icon: "🏘️",
    description:
      "Whether you're renting out one property or several, what local landlords in Northwest Florida actually need to know.",
  },
  {
    title: "Homeowners Insurance",
    href: "/resources/homeowners-insurance",
    icon: "🛡️",
    description:
      "Wind, flood, and Citizens Insurance explained plainly — with the local context that generic insurance guides skip.",
  },
  {
    title: "Rental & Investment",
    href: "/resources/rental-investment",
    icon: "📈",
    description:
      "Long-term rental vs. vacation rental, cap rates, and what investment property actually looks like in this part of Florida.",
  },
];

const differentiators = [
  {
    heading: "Local context, not generic advice",
    body: "There's no shortage of general real estate content online. What's harder to find is information grounded in the specific conditions of Northwest Florida — the flood zone realities of Bay County, the rural market dynamics of Jackson County, the post-Hurricane Michael landscape that buyers and sellers are still navigating.",
  },
  {
    heading: "Focused on real decisions",
    body: "We write for people trying to make actual property decisions: whether to buy in a particular neighborhood, how to evaluate flood insurance costs before closing, what a property manager in Panama City should actually cost. Not listicles. Not thinly-veiled lead generation.",
  },
  {
    heading: "Honest about what we don't know",
    body: "We're not licensed real estate agents, attorneys, or insurance professionals. We'll tell you when a question requires one. Our goal is to get you oriented and informed so that the time you spend with licensed professionals is more productive.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Northwest Florida · Bay County · Jackson County
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Northwest Florida Property Guidance{" "}
            <span className="text-amber-400">You Can Actually Use</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Practical guides for buyers, owners, and investors in Panama City,
            Marianna, and the communities of Bay and Jackson counties — written
            with local context that generic real estate sites don't provide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cities/panama-city"
              className="bg-amber-400 text-blue-950 font-semibold px-7 py-3 rounded-full hover:bg-amber-300 transition-colors text-base"
            >
              Panama City Guide
            </Link>
            <Link
              to="/cities/marianna"
              className="border border-slate-400 text-slate-100 font-semibold px-7 py-3 rounded-full hover:bg-white/10 transition-colors text-base"
            >
              Marianna Guide
            </Link>
          </div>
        </div>
      </section>

      {/* City Guides */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 text-center">
            City Guides
          </h2>
          <p className="text-slate-500 text-center mb-10">
            Each guide covers the local property landscape in depth — not a
            template with a city name swapped in.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {cityGuides.map((guide) => (
              <Link
                key={guide.city}
                to={guide.href}
                className="group block bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-lg hover:border-blue-300 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {guide.city}
                    </h3>
                    <p className="text-sm text-slate-400 font-medium">
                      {guide.county}
                    </p>
                  </div>
                  <span className="text-blue-900 group-hover:translate-x-1 transition-transform text-xl">
                    →
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed mb-5 text-sm">
                  {guide.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {guide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full"
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

      {/* Resources */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 text-center">
            Property Resources
          </h2>
          <p className="text-slate-500 text-center mb-10">
            Topic guides written for Northwest Florida — not repackaged national
            advice.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((r) => (
              <Link
                key={r.title}
                to={r.href}
                className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200"
              >
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                  {r.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {r.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Find Here */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 text-center">
            What You'll Find Here
          </h2>
          <p className="text-slate-500 text-center mb-12">
            Why we built this site, and what makes it different from the
            property content you've already found.
          </p>
          <div className="space-y-8">
            {differentiators.map((d) => (
              <div
                key={d.heading}
                className="flex gap-5 items-start"
              >
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1.5">
                    {d.heading}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-blue-950 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Start with your city guide
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            The city guides are the best entry point — they give you the local
            context for the property decisions you're facing, and they link out
            to the resources most relevant to your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              to="/cities/panama-city"
              className="bg-amber-400 text-blue-950 font-semibold px-7 py-3 rounded-full hover:bg-amber-300 transition-colors"
            >
              Panama City Guide
            </Link>
            <Link
              to="/cities/marianna"
              className="border border-slate-500 text-slate-100 font-semibold px-7 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Marianna Guide
            </Link>
          </div>
          <p className="text-slate-500 text-sm">
            Are you a local real estate professional, insurance agent, or
            property manager?{" "}
            <Link
              to="/advertise"
              className="text-slate-300 underline hover:text-amber-400 transition-colors"
            >
              Learn about featured listings for local professionals.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

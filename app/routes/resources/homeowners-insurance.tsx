import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  {
    title: "Homeowners Insurance in Northwest Florida | Bay & Jackson County Guide | Florida Property HQ",
  },
  {
    name: "description",
    content:
      "Wind, flood, and homeowners insurance explained for Panama City and Marianna — with the local Bay County and Jackson County context that generic insurance guides don't provide.",
  },
];

const coverageTypes = [
  {
    title: "Homeowners / Wind (HO-3 or equivalent)",
    color: "border-blue-500",
    badge: "bg-blue-100 text-blue-800",
    body: "Standard homeowners insurance (HO-3) covers dwelling damage, personal property, liability, and additional living expenses. In Florida, wind damage is typically included — but carriers have the option to carve out wind via a separate windstorm exclusion. In Bay County especially, many policies are split: a standard homeowners carrier covers everything except wind, and a separate wind-only policy (often through Citizens or a private wind market) covers windstorm damage. Understand how your policy is structured before you need it.",
  },
  {
    title: "Flood Insurance (NFIP or Private)",
    color: "border-teal-500",
    badge: "bg-teal-100 text-teal-800",
    body: "Flood damage is specifically excluded from standard homeowners insurance — you need a separate flood policy. If your property has a mortgage and sits in a FEMA Special Flood Hazard Area (AE or VE zone), your lender will require flood insurance. FEMA's National Flood Insurance Program (NFIP) is the most common source, but private flood insurance has expanded significantly and is often competitive on price. Even outside flood zones, flood insurance is worth pricing — the cost in an X zone can be quite low relative to the exposure.",
  },
  {
    title: "Citizens Property Insurance",
    color: "border-indigo-500",
    badge: "bg-indigo-100 text-indigo-800",
    body: "Citizens Property Insurance Corporation is Florida's state-backed insurer of last resort — available when private market coverage isn't. In Bay County post-Michael, Citizens has served as a significant market participant because private carriers have reduced their presence. Citizens rates have increased substantially in recent years due to legislative reform, and the program has ongoing 'depopulation' efforts that can transfer your policy to a private carrier with limited notice. If you're with Citizens, stay informed about these transfers and compare the replacement policy carefully.",
  },
  {
    title: "Sinkhole Coverage",
    color: "border-amber-500",
    badge: "bg-amber-100 text-amber-800",
    body: "Florida law requires insurers to offer catastrophic ground cover collapse (CGCC) coverage in basic policies, but sinkhole coverage — which covers a broader range of subsidence events before they become catastrophic — is typically an optional endorsement. In Jackson County and the inland Panhandle, where karst limestone geology makes sinkhole activity more common, this endorsement is meaningfully more important than it would be in South Florida. The additional premium is usually modest.",
  },
];

const bayCountyContext = [
  {
    heading: "Post-Michael private market contraction",
    body: "Hurricane Michael's October 2018 landfall resulted in tens of billions in insured losses across Bay County. In its aftermath, multiple private insurance carriers reduced or eliminated their Bay County exposure, leaving many homeowners with fewer options and higher premiums. The market has been slowly recovering, but it remains more constrained than it was pre-2018. Bay County homeowners should actively shop renewal options annually rather than assuming their carrier is the best available.",
  },
  {
    heading: "Wind mitigation inspections: essential, not optional",
    body: "Florida's Insurance Premium Discount, Surcharge, and Savings Act (the 'My Safe Florida Home' framework) ties homeowners insurance premiums directly to documented wind-resistant features. A licensed wind mitigation inspector evaluates roof covering type, roof deck attachment, roof shape (hip roofs get the biggest discount), roof-to-wall connections, and opening protections (shutters, impact glass). In Bay County, where a hip roof with proper connections and full opening protection might save 30–50% on wind premium, a wind mitigation inspection is effectively mandatory homework. It costs roughly $100–$150 and typically pays back immediately in first-year savings.",
  },
  {
    heading: "Roof age is increasingly an underwriting trigger",
    body: "Private carriers in Bay County have tightened roof age requirements significantly since 2018. Many carriers will not write new policies on homes with roofs over 15 years old, and some have pulled back to 10-year maximums. If a carrier will write the policy, they may require a roof condition inspection first. For sellers and buyers: roof age documentation has become a transactional variable. For current homeowners: if your roof is approaching 15 years, understand your renewal options now rather than at renewal time.",
  },
  {
    heading: "Elevation certificates and flood insurance premiums",
    body: "FEMA's flood insurance pricing under Risk Rating 2.0 (the current rate methodology) incorporates property-specific flood risk rather than just flood zone designation. An elevation certificate — showing your property's finished floor elevation relative to the Base Flood Elevation — can substantiate a lower rate for properties that sit above their BFE. For a property on the border of an AE zone with high and low flood risk sections, a survey-certified elevation certificate can be the difference between $1,500/year and $5,000/year in flood premiums.",
  },
];

const jacksonCountyContext = [
  {
    heading: "Inland rates are generally more favorable",
    body: "Jackson County's distance from the Gulf of Mexico — roughly 60 miles at the nearest — places it in a wind exposure tier that carries meaningfully lower actuarial risk than coastal Bay County. This translates to lower wind insurance premiums. Private market availability is also generally better: while the post-Michael disruption affected the whole Panhandle market, Jackson County properties have been easier to insure than Gulf-adjacent Bay County properties through the recovery period.",
  },
  {
    heading: "River flood risk is different from surge risk",
    body: "Jackson County flood exposure is driven by the Chipola River and its drainage basin, not storm surge. Properties near the river in Marianna and other Jackson County communities may sit in AE flood zones with real flood history. But properties away from river corridors generally have minimal flood exposure — and flood insurance, where required or prudent, is often quite affordable at these lower-risk inland locations.",
  },
  {
    heading: "Sinkhole coverage is more relevant here than most of Florida",
    body: "Jackson County's karst geology is genuinely different from coastal Florida. The same limestone formations responsible for Florida Caverns State Park's cave network create sinkhole and subsidence risk in residential areas. Standard Florida homeowners policies include catastrophic ground cover collapse but not the full range of sinkhole activity. The endorsement is worth adding — typically $200–$400/year additional premium for coverage that coastal Florida properties rarely need to think about.",
  },
  {
    heading: "Older housing stock creates underwriting complexity",
    body: "Marianna's residential inventory skews older — many homes predate 1980. Older homes can face carrier restrictions on electrical systems (knob-and-tube or aluminum wiring), older plumbing, and roof age. If you're buying or currently own an older Jackson County home, understand your carrier's requirements. Some older homes with aluminum wiring can be underwritten if the main panel is updated and the wiring is inspected; others may require rewiring for coverage.",
  },
];

export default function HomeownersInsurance() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Resource Guide · Northwest Florida
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Homeowners Insurance in Northwest Florida
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            Wind, flood, and property insurance explained with the local context
            that matters — Bay County post-Michael, Jackson County inland rates,
            and what to do before your next renewal.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {["Wind Mitigation", "Flood Insurance", "Citizens Insurance", "Post-Michael Market"].map((tag) => (
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
            Why Florida Insurance Is Different — and Northwest Florida Especially
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Florida homeowners insurance is more complex than most of the
              country, and Northwest Florida sits in one of the state's higher-risk
              exposure zones. Between Hurricane Michael's 2018 impact on Bay County,
              the ongoing challenges of Gulf Coast wind exposure, and the
              flood-zone variability that runs through the region, getting
              insurance right here requires more active engagement than renewing a
              policy and forgetting about it.
            </p>
            <p>
              This guide covers the types of coverage relevant to this region, the
              <a href="https://ellisagency.net" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline font-medium">Bay County and Jackson County</a> specific contexts, and the practical
              steps that actually make a difference in what you pay and what you're
              covered for.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage types */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Types of Coverage You Need to Understand
          </h2>
          <p className="text-slate-500 mb-8">
            In Northwest Florida, "homeowners insurance" often means multiple
            separate policies covering different perils. Here's what each one is.
          </p>
          <div className="space-y-5">
            {coverageTypes.map((ct) => (
              <div key={ct.title} className={`bg-white border-l-4 ${ct.color} rounded-r-xl p-6 shadow-sm`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${ct.badge}`}>
                    Coverage Type
                  </span>
                  <h3 className="font-bold text-slate-900">{ct.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{ct.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bay County context */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Bay County Insurance Context
          </h2>
          <p className="text-slate-500 mb-10">
            What Bay County and Panama City homeowners need to know about their
            specific insurance landscape.
          </p>
          <div className="space-y-6">
            {bayCountyContext.map((point) => (
              <div key={point.heading} className="border-l-4 border-amber-400 pl-5">
                <h3 className="font-bold text-slate-900 mb-1.5">{point.heading}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jackson County context */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Jackson County Insurance Context
          </h2>
          <p className="text-slate-500 mb-10">
            What Marianna and Jackson County homeowners need to know about their
            inland insurance landscape.
          </p>
          <div className="space-y-6">
            {jacksonCountyContext.map((point) => (
              <div key={point.heading} className="border-l-4 border-teal-400 pl-5">
                <h3 className="font-bold text-slate-900 mb-1.5">{point.heading}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action items */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            What to Actually Do
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { action: "Commission a wind mitigation inspection", when: "Before you close on a new purchase, or before your next renewal if you haven't had one recently." },
              { action: "Pull your elevation certificate (or order one)", when: "If you're in or near a flood zone and don't have a certificate. Contact a licensed Florida surveyor." },
              { action: "Shop your flood insurance", when: "Annually. Both NFIP and private flood markets can be compared — your agent should offer both." },
              { action: "Review your Citizens policy transfer notices", when: "Citizens sends depopulation notices; the replacement policy may not have equivalent coverage. Review carefully before accepting or rejecting a transfer." },
              { action: "Check your roof age and document it", when: "Now, before your next renewal. Many carriers are tightening roof age requirements; know where you stand." },
              { action: "Ask your agent to explain your specific policy structure", when: "Now. Understand whether wind is included, excluded, or separate; what your flood zone is; and what your deductibles are." },
            ].map((item) => (
              <div key={item.action} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="font-semibold text-slate-900 mb-1.5 text-sm">{item.action}</div>
                <p className="text-xs text-slate-500 leading-relaxed"><span className="font-medium text-slate-600">When: </span>{item.when}</p>
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
              Insurance in Northwest Florida rewards engagement — homeowners who
              actively manage their coverage, understand their flood zone, and
              maintain documentation of their home's wind-resistant features
              consistently pay less and have better outcomes when they file
              claims. Work with a licensed independent agent who actively writes
              in Bay or Jackson County; the specifics of your property and
              location matter more than general Florida insurance advice.
            </p>
            <p className="text-slate-400 text-xs">
              Nothing on this page constitutes insurance advice. Work with a
              licensed insurance professional for your specific situation.
              Coverage terms, carrier availability, and premiums change
              frequently.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "Buying a Home Guide", href: "/resources/buying-a-home" },
              { label: "Panama City Property Guide", href: "/cities/panama-city" },
              { label: "Selling Your Home", href: "/resources/selling-a-home" },
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

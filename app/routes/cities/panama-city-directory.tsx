import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  {
    title: "Panama City & Bay County Community Directory | Florida Property HQ",
  },
  {
    name: "description",
    content:
      "Contact information, staff directories, and maps for key community institutions in Panama City and Bay County, Florida — Chamber of Commerce, Ascension Sacred Heart Bay hospital, City Hall, and County Commission.",
  },
];

const entities = [
  {
    id: "chamber",
    name: "Bay County Chamber of Commerce",
    category: "Chamber of Commerce",
    address: "235 W 5th Street, Panama City, FL 32401",
    addressNote: "",
    phones: [
      { label: "Main", number: "850-785-5206" },
    ],
    website: "https://www.baychamberfl.com",
    websiteLabel: "baychamberfl.com",
    mapQuery: "235+W+5th+Street+Panama+City+FL+32401",
    description:
      "The Bay County Chamber of Commerce is the leading business advocacy and economic development organization for the Panama City metro area. The chamber supports local businesses, hosts professional networking events, and promotes the Bay County region as a destination for commerce and investment.",
    staff: [
      { name: "Al McCambry", title: "President & CEO", phone: "850-215-3758" },
    ],
    staffNote:
      "For the full staff and board directory, visit baychamberfl.com.",
  },
  {
    id: "hospital",
    name: "Ascension Sacred Heart Bay",
    category: "Hospital",
    address: "615 N Bonita Avenue, Panama City, FL 32401",
    addressNote: "Mailing: PO Box 15000, Panama City, FL 32406",
    phones: [
      { label: "Main", number: "850-769-1511" },
      { label: "Emergency Dept.", number: "850-769-1511" },
      { label: "Patient Relations", number: "850-769-1511" },
    ],
    website: "https://healthcare.ascension.org/locations/florida/flpcl/panama-city-ascension-sacred-heart-bay",
    websiteLabel: "ascension.org / Sacred Heart Bay",
    mapQuery: "615+N+Bonita+Avenue+Panama+City+FL+32401",
    description:
      "Ascension Sacred Heart Bay is Bay County's primary acute care hospital, with 323 licensed beds, a Level II Trauma Center, and a full range of specialty services. It serves as the regional referral center for the Florida Panhandle and is part of the Ascension health system.",
    staff: [],
    staffNote:
      "For current medical staff leadership and administration contacts, visit healthcare.ascension.org or call the main hospital line.",
  },
  {
    id: "city",
    name: "City of Panama City",
    category: "Municipal Government",
    address: "501 Harrison Avenue, Panama City, FL 32401",
    addressNote: "Mailing: PO Box 1880, Panama City, FL 32402",
    phones: [
      { label: "City Hall", number: "850-872-3010" },
      { label: "Building Services", number: "850-872-3070" },
      { label: "Public Works", number: "850-872-3065" },
      { label: "Code Enforcement", number: "850-872-3010" },
      { label: "Parks & Recreation", number: "850-872-3173" },
    ],
    website: "https://www.panamacity.gov",
    websiteLabel: "panamacity.gov",
    mapQuery: "501+Harrison+Avenue+Panama+City+FL+32401",
    description:
      "The City of Panama City operates under a commission-manager form of government. A five-member City Commission sets policy; the City Manager handles day-to-day operations. City services include public works, building permits and inspections, code enforcement, utilities, and parks for properties within Panama City city limits.",
    staff: [
      { name: "Mark McQueen", title: "City Manager", phone: "850-872-3010" },
    ],
    staffNote:
      "For the full city staff directory and elected commission members, visit panamacity.gov. Commission member terms are available through the Bay County Supervisor of Elections at bayvotes.gov.",
  },
  {
    id: "county",
    name: "Bay County Board of County Commissioners",
    category: "County Government",
    address: "840 W 11th Street, Panama City, FL 32401",
    addressNote: "",
    phones: [
      { label: "Main", number: "850-248-8140" },
      { label: "Building Services", number: "850-248-8240" },
      { label: "Planning & Zoning", number: "850-248-8250" },
      { label: "Road & Bridge", number: "850-248-8390" },
      { label: "Emergency Management", number: "850-784-4000" },
      { label: "Public Works", number: "850-248-8390" },
      { label: "Public Library", number: "850-522-2100" },
      { label: "Veterans Services", number: "850-248-8195" },
    ],
    website: "https://www.baycountyfl.gov",
    websiteLabel: "baycountyfl.gov",
    mapQuery: "840+W+11th+Street+Panama+City+FL+32401",
    description:
      "The Bay County Board of County Commissioners is a five-member elected body responsible for county-wide services including roads, planning and zoning, building inspection, emergency management, libraries, veterans services, and public works. The county also administers the FEMA flood map administration and coordinates post-hurricane recovery programs.",
    staff: [
      { name: "Bob Majka", title: "County Manager", phone: "850-248-8140" },
      { name: "Clair Pease", title: "Commissioner – District 1 (Chairman)", phone: "850-248-8140" },
      { name: "Daniel Raffield", title: "Commissioner – District 2 (Vice Chairman)", phone: "850-248-8140" },
      { name: "Robert Carroll", title: "Commissioner – District 3", phone: "850-248-8140" },
      { name: "Doug Crosby", title: "Commissioner – District 4", phone: "850-248-8140" },
      { name: "Douglas Moore", title: "Commissioner – District 5", phone: "850-248-8140" },
    ],
    staffNote:
      "Staff directory sourced from baycountyfl.gov. Commissioner terms and contact details change — verify current officeholders at baycountyfl.gov/government or bayvotes.gov.",
  },
];

const partners = [
  {
    id: "ellis-agency-pc",
    name: "Ellis Agency Insurance",
    category: "Insurance — Preferred Partner",
    tagline: "Independent insurance serving the Panhandle since the Ellis family opened their doors in Panama City.",
    description:
      "Ellis Agency is an independent Allstate agency with offices across the Panhandle including Panama City and Marianna. As an independent agency they compare multiple carriers — not just one — to match you with the right coverage for home, auto, landlord, and business insurance. They're the agency we recommend for Bay County property insurance needs.",
    address: "1134 Harrison Ave, Panama City, FL 32401",
    phone: "(850) 763-1627",
    website: "https://www.ellisagency.net",
    websiteLabel: "ellisagency.net",
    mapQuery: "1134+Harrison+Ave+Panama+City+FL+32401",
    services: ["Home Insurance", "Landlord Insurance", "Condo Insurance", "Auto", "Umbrella", "Business"],
  },
  {
    id: "jim-roberts-realty",
    name: "Jim Roberts Realty",
    category: "Real Estate — Preferred Partner",
    tagline: "Family-owned and Panhandle-rooted since 1974. Voted best real estate agency in the region.",
    description:
      "Jim Roberts Realty has served the Florida Panhandle since Jim Roberts opened the agency in 1974. Now led by second-generation owner Robby Roberts, the firm specializes in residential, land, farms, and timber tracts across Jackson, Washington, Holmes, and Calhoun counties. If you're buying or selling anywhere in the inland Panhandle, they're the local experts we trust.",
    address: "4207 Lafayette St, Marianna, FL 32446",
    phone: "(850) 482-4635",
    website: "https://www.jimrobertsrealty.com",
    websiteLabel: "jimrobertsrealty.com",
    mapQuery: "4207+Lafayette+St+Marianna+FL+32446",
    services: ["Residential Sales", "Land & Acreage", "Farms & Timber", "Rural Properties", "MLS Search"],
  },
];

const partnerSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "InsuranceAgency",
      "name": "Ellis Agency Insurance — Panama City",
      "url": "https://www.ellisagency.net",
      "telephone": "+18507631627",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1134 Harrison Ave",
        "addressLocality": "Panama City",
        "addressRegion": "FL",
        "postalCode": "32401",
        "addressCountry": "US"
      },
      "areaServed": ["Bay County, FL", "Panama City, FL", "Northwest Florida"],
      "description": "Independent Allstate insurance agency serving Bay County and the Florida Panhandle with home, auto, landlord, and business insurance.",
      "sameAs": "https://www.ellisagency.net"
    },
    {
      "@type": "RealEstateAgent",
      "name": "Jim Roberts Realty",
      "url": "https://www.jimrobertsrealty.com",
      "telephone": "+18504824635",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4207 Lafayette St",
        "addressLocality": "Marianna",
        "addressRegion": "FL",
        "postalCode": "32446",
        "addressCountry": "US"
      },
      "areaServed": ["Jackson County, FL", "Washington County, FL", "Holmes County, FL", "Calhoun County, FL", "Florida Panhandle"],
      "description": "Family-owned real estate agency serving the Florida Panhandle since 1974. Specializing in residential, land, farms, and rural properties.",
      "foundingDate": "1974",
      "sameAs": "https://www.jimrobertsrealty.com"
    }
  ]
};

const categoryColors: Record<string, string> = {
  "Chamber of Commerce": "bg-amber-100 text-amber-800",
  "Hospital": "bg-red-100 text-red-800",
  "Municipal Government": "bg-blue-100 text-blue-800",
  "County Government": "bg-indigo-100 text-indigo-800",
};

export default function PanamaCityDirectory() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Community Directory · Panama City & Bay County
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Panama City & Bay County Community Directory
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Contact information, staff directories, and maps for the key civic
            institutions serving Panama City and Bay County residents.
          </p>
          <div className="mt-4">
            <Link
              to="/cities/panama-city"
              className="text-amber-400 hover:text-amber-300 text-sm font-medium"
            >
              ← Back to Panama City Property Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Preferred Partners */}
      <section className="bg-white border-b border-amber-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-amber-400 text-blue-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Preferred Partners
            </span>
            <p className="text-slate-500 text-sm">
              Recommended local professionals for insurance and real estate in the Panhandle
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                id={partner.id}
                className="border-2 border-amber-300 rounded-2xl overflow-hidden bg-amber-50/30"
              >
                <div className="px-5 pt-5 pb-4 border-b border-amber-100">
                  <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">
                    {partner.category}
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 mt-2 mb-1">{partner.name}</h2>
                  <p className="text-xs text-slate-500 italic mb-2">{partner.tagline}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{partner.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {partner.services.map((s) => (
                      <span key={s} className="bg-white border border-amber-200 text-slate-600 text-xs px-2 py-0.5 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-0">
                  <div className="px-5 py-4 border-r border-amber-100">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Address</p>
                    <p className="text-slate-800 text-xs font-medium mb-1">{partner.address}</p>
                    <a
                      href={`https://maps.google.com/?q=${partner.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-700 hover:underline"
                    >
                      Open in Google Maps ↗
                    </a>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 mt-3">Phone</p>
                    <a href={`tel:${partner.phone.replace(/[^0-9]/g, "")}`} className="text-blue-700 hover:underline text-sm font-semibold">
                      {partner.phone}
                    </a>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 mt-3">Website</p>
                    <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline text-xs font-medium">
                      {partner.websiteLabel} ↗
                    </a>
                  </div>
                  <div>
                    <iframe
                      title={`Map of ${partner.name}`}
                      src={`https://maps.google.com/maps?q=${partner.mapQuery}&output=embed`}
                      width="100%"
                      height="180"
                      style={{ border: 0, display: "block" }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accuracy notice */}
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-3">
        <div className="max-w-4xl mx-auto text-xs text-amber-800">
          <strong>About this directory:</strong> Staff and contact information is
          sourced from official websites and verified as of mid-2026. Staff
          assignments, phone numbers, and elected officials change — always
          confirm details at the linked official website before acting on them.
        </div>
      </div>

      {/* Quick jump nav */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-3 text-sm">
          <span className="text-slate-400 font-medium self-center">Jump to:</span>
          {entities.map((e) => (
            <a
              key={e.id}
              href={`#${e.id}`}
              className="text-blue-700 hover:text-blue-900 hover:underline font-medium"
            >
              {e.name.split(" ").slice(0, 2).join(" ")}
            </a>
          ))}
        </div>
      </div>

      {/* Entity listings */}
      <div className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-12">
          {entities.map((entity) => (
            <div
              key={entity.id}
              id={entity.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden scroll-mt-16"
            >
              {/* Header */}
              <div className="px-6 pt-6 pb-4 border-b border-slate-100">
                <div className="flex flex-wrap items-start gap-3 mb-2">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      categoryColors[entity.category] || "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {entity.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900">{entity.name}</h2>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                  {entity.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Left: Contact info */}
                <div className="px-6 py-5 border-b md:border-b-0 md:border-r border-slate-100">
                  {/* Address */}
                  <div className="mb-5">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Address
                    </h3>
                    <p className="text-slate-800 font-medium text-sm">{entity.address}</p>
                    {entity.addressNote && (
                      <p className="text-slate-400 text-xs mt-1">{entity.addressNote}</p>
                    )}
                    <a
                      href={`https://maps.google.com/?q=${entity.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs text-blue-700 hover:underline"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="mb-5">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Phone
                    </h3>
                    <ul className="space-y-1.5">
                      {entity.phones.map((p) => (
                        <li key={p.label} className="flex items-center gap-2 text-sm">
                          <span className="text-slate-400 w-32 flex-shrink-0">{p.label}</span>
                          <a
                            href={`tel:${p.number.replace(/[^0-9]/g, "")}`}
                            className="text-blue-700 hover:underline font-medium"
                          >
                            {p.number}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Website */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Website
                    </h3>
                    <a
                      href={entity.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline text-sm font-medium"
                    >
                      {entity.websiteLabel} ↗
                    </a>
                  </div>
                </div>

                {/* Right: Map */}
                <div className="relative">
                  <iframe
                    title={`Map of ${entity.name}`}
                    src={`https://maps.google.com/maps?q=${entity.mapQuery}&output=embed`}
                    width="100%"
                    height="220"
                    style={{ border: 0, display: "block" }}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Staff directory */}
              {entity.staff.length > 0 && (
                <div className="px-6 py-5 border-t border-slate-100 bg-slate-50">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Staff Directory
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left pb-2 font-semibold text-slate-700">Name</th>
                          <th className="text-left pb-2 font-semibold text-slate-700">Title</th>
                          <th className="text-left pb-2 font-semibold text-slate-700">Phone</th>
                        </tr>
                      </thead>
                      <tbody>
                        {entity.staff.map((s, i) => (
                          <tr
                            key={s.name}
                            className={`border-b border-slate-100 ${
                              i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                            }`}
                          >
                            <td className="py-2 pr-4 font-medium text-slate-900">{s.name}</td>
                            <td className="py-2 pr-4 text-slate-600">{s.title}</td>
                            <td className="py-2">
                              {s.phone ? (
                                <a
                                  href={`tel:${s.phone.replace(/[^0-9]/g, "")}`}
                                  className="text-blue-700 hover:underline"
                                >
                                  {s.phone}
                                </a>
                              ) : (
                                <span className="text-slate-300">—</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {entity.staffNote && (
                    <p className="text-xs text-slate-400 mt-3 italic">{entity.staffNote}</p>
                  )}
                </div>
              )}
              {entity.staff.length === 0 && entity.staffNote && (
                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50">
                  <p className="text-xs text-slate-500 italic">{entity.staffNote}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Back link */}
      <section className="py-10 px-4 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/cities/panama-city"
            className="text-blue-900 hover:underline font-semibold"
          >
            ← Back to Panama City Property Guide
          </Link>
          <Link
            to="/cities/marianna/directory"
            className="text-slate-500 hover:text-blue-900 hover:underline text-sm"
          >
            Marianna & Jackson County Directory →
          </Link>
        </div>
      </section>
    </>
  );
}

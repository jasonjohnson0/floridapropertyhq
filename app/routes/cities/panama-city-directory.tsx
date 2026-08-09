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

const categoryColors: Record<string, string> = {
  "Chamber of Commerce": "bg-amber-100 text-amber-800",
  "Hospital": "bg-red-100 text-red-800",
  "Municipal Government": "bg-blue-100 text-blue-800",
  "County Government": "bg-indigo-100 text-indigo-800",
};

export default function PanamaCityDirectory() {
  return (
    <>
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

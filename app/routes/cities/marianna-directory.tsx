import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  {
    title: "Marianna & Jackson County Community Directory | Florida Property HQ",
  },
  {
    name: "description",
    content:
      "Contact information, staff directories, and maps for key community institutions in Marianna and Jackson County, Florida — Chamber of Commerce, Jackson Hospital, City Hall, and County Commission.",
  },
];

const entities = [
  {
    id: "chamber",
    name: "Jackson County Chamber of Commerce",
    category: "Chamber of Commerce",
    address: "4318 Lafayette Street, Marianna, FL 32446",
    addressNote: "Located in the Historic Russ House",
    phones: [
      { label: "Main", number: "850-405-2509" },
      { label: "Alt", number: "850-482-8060" },
    ],
    website: "https://jacksoncounty.com",
    websiteLabel: "jacksoncounty.com",
    mapQuery: "4318+Lafayette+Street+Marianna+FL+32446",
    description:
      "The Jackson County Chamber of Commerce serves as the primary business advocacy and networking organization for the county. Located in the historic Russ House, the chamber supports local business development, hosts events, and promotes economic growth in the region.",
    staff: [],
    staffNote: "For current board and staff listings, visit jacksoncounty.com.",
  },
  {
    id: "hospital",
    name: "Jackson Hospital",
    category: "Hospital",
    address: "4250 Hospital Drive, Marianna, FL 32446",
    addressNote: "Mailing: PO Box 1608, Marianna, FL 32447",
    phones: [
      { label: "Main", number: "850-526-2200" },
      { label: "Patient Experience", number: "850-718-2845" },
      { label: "Chipola Quick Care", number: "850-526-6700" },
      { label: "Family & Internal Medicine", number: "850-526-6735" },
      { label: "OB/GYN", number: "850-526-6711" },
      { label: "Panhandle Family Care", number: "850-482-2910" },
      { label: "Hematology/Oncology", number: "850-526-6707" },
      { label: "Pediatrics", number: "850-718-2886" },
      { label: "ENT / Sinus & Allergy", number: "850-372-4070" },
      { label: "Chipola Therapy", number: "850-526-1093" },
      { label: "Internal Medicine Assoc.", number: "850-526-5300" },
    ],
    website: "https://www.jackson-hospital.com",
    websiteLabel: "jackson-hospital.com",
    mapQuery: "4250+Hospital+Drive+Marianna+FL+32446",
    description:
      "Jackson Hospital is Jackson County's community hospital, providing inpatient care, emergency services, surgical care, and a range of specialty clinics serving the inland Panhandle region.",
    staff: [],
    staffNote:
      "For current administration and medical staff leadership, visit jackson-hospital.com.",
  },
  {
    id: "city",
    name: "City of Marianna",
    category: "Municipal Government",
    address: "2898 Green Street, Marianna, FL 32446",
    addressNote: "Mailing: PO Box 936, Marianna, FL 32447",
    phones: [
      { label: "City Hall", number: "850-482-4353" },
      { label: "Building Dept.", number: "850-482-4014" },
    ],
    website: "https://www.cityofmarianna.com",
    websiteLabel: "cityofmarianna.com",
    mapQuery: "2898+Green+Street+Marianna+FL+32446",
    description:
      "The City of Marianna operates under a commission-manager form of government. City services include public works, utilities, code enforcement, and building permitting for properties within Marianna city limits.",
    staff: [
      { name: "John Roberts", title: "City Manager", phone: "850-482-4353" },
    ],
    staffNote:
      "For the full city staff directory, visit cityofmarianna.com. Elected officials are listed on the city website and through the Jackson County Supervisor of Elections.",
  },
  {
    id: "county",
    name: "Jackson County Board of County Commissioners",
    category: "County Government",
    address: "2864 Madison Street, Marianna, FL 32448",
    addressNote: "",
    phones: [
      { label: "Main", number: "(850) 482-9633" },
      { label: "TDD", number: "(800) 955-8771" },
      { label: "Building Dept.", number: "(850) 482-9802" },
      { label: "Community Development", number: "(850) 482-9637" },
      { label: "Road & Bridge", number: "(850) 482-9629" },
      { label: "Emergency Management", number: "(850) 482-9678" },
      { label: "Public Library", number: "(850) 482-1257" },
      { label: "Veterans Services", number: "(850) 718-0003" },
    ],
    website: "https://www.jacksoncountyfl.gov",
    websiteLabel: "jacksoncountyfl.gov",
    mapQuery: "2864+Madison+Street+Marianna+FL+32448",
    description:
      "The Jackson County Board of County Commissioners is a five-member governing body responsible for county-wide services including roads, emergency management, community development, libraries, and veterans services.",
    staff: [
      { name: "Jim Dean", title: "County Administrator", phone: "(850) 482-9633" },
      { name: "Rett Daniels", title: "Deputy County Administrator – Field Operations", phone: "(850) 718-0437" },
      { name: "Lynsey Darragh", title: "Administrative Services Director", phone: "(850) 482-9633" },
      { name: "Mary Smith", title: "Public Communications Officer", phone: "(850) 482-9633" },
      { name: "Charlie Brunner", title: "Fire Chief", phone: "(850) 718-0000" },
      { name: "Keith Maddox", title: "Emergency Management Director", phone: "(850) 482-9678" },
      { name: "Jeffrey Register", title: "Road & Bridge Director", phone: "(850) 482-9629" },
      { name: "Kim Cole Sweazy", title: "Community Development Director", phone: "(850) 482-9637" },
      { name: "Julie Warren", title: "Veterans Services Director", phone: "(850) 718-0003" },
      { name: "Deborah Hynes", title: "Public Library Director", phone: "(850) 482-1257" },
      { name: "Kelsi Jackson", title: "Tourism Development Director", phone: "(850) 482-8061" },
      { name: "Doug Mayo", title: "County Extension Director", phone: "(850) 482-9620" },
      { name: "Jammie Jeter", title: "Chief of Corrections", phone: "(850) 482-9651" },
    ],
    staffNote:
      "Staff directory sourced from jacksoncountyfl.gov. For elected commissioners, visit jacksoncountyfl.gov/government or votejacksonfl.gov.",
  },
];

const partners = [
  {
    id: "ellis-agency-marianna",
    name: "Ellis Agency Insurance",
    category: "Insurance — Preferred Partner",
    tagline: "Independent insurance with a Marianna office — serving Jackson County and the inland Panhandle.",
    description:
      "Ellis Agency is an independent Allstate agency with a Marianna office on US-90, in addition to locations in Panama City and Altha. As an independent agency they compare multiple carriers to find the right fit for your home, auto, landlord, or business coverage. They understand the inland Panhandle market — sinkhole exposure, older housing stock, river flood risk — and they're the insurance agency we recommend for Jackson County property owners.",
    address: "4713 US-90, Marianna, FL 32446",
    phone: "(850) 526-2201",
    website: "https://www.ellisagency.net",
    websiteLabel: "ellisagency.net",
    mapQuery: "4713+US-90+Marianna+FL+32446",
    services: ["Home Insurance", "Landlord Insurance", "Auto", "Umbrella", "Business", "Life & Income"],
  },
  {
    id: "jim-roberts-realty",
    name: "Jim Roberts Realty",
    category: "Real Estate — Preferred Partner",
    tagline: "Marianna's longest-running realty firm. Family-owned since 1974. Voted best in the region.",
    description:
      "Jim Roberts Realty has been the go-to real estate firm in Marianna and Jackson County since Jim Roberts founded it in 1974. Now led by second-generation owner Robby Roberts, the agency specializes in residential homes, land, farms, timber tracts, and rural properties across Jackson, Washington, Holmes, and Calhoun counties. No one knows the local land and housing market better.",
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
      "name": "Ellis Agency Insurance — Marianna",
      "url": "https://www.ellisagency.net",
      "telephone": "+18505262201",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4713 US-90",
        "addressLocality": "Marianna",
        "addressRegion": "FL",
        "postalCode": "32446",
        "addressCountry": "US"
      },
      "areaServed": ["Jackson County, FL", "Marianna, FL", "Northwest Florida"],
      "description": "Independent Allstate insurance agency serving Jackson County and the inland Florida Panhandle with home, auto, landlord, and business insurance.",
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
      "description": "Family-owned real estate agency serving the Florida Panhandle since 1974. Specializing in residential, land, farms, and rural properties in Jackson County and surrounding areas.",
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

export default function MariannaDirectory() {
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
            Community Directory · Marianna & Jackson County
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Marianna & Jackson County Community Directory
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Contact information, staff directories, and maps for the key civic
            institutions serving Marianna and Jackson County residents.
          </p>
          <div className="mt-4">
            <Link
              to="/cities/marianna"
              className="text-amber-400 hover:text-amber-300 text-sm font-medium"
            >
              ← Back to Marianna Property Guide
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
          assignments and phone numbers change — always confirm details at the
          linked official website before acting on them.
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
            to="/cities/marianna"
            className="text-blue-900 hover:underline font-semibold"
          >
            ← Back to Marianna Property Guide
          </Link>
          <Link
            to="/cities/panama-city/directory"
            className="text-slate-500 hover:text-blue-900 hover:underline text-sm"
          >
            Panama City & Bay County Directory →
          </Link>
        </div>
      </section>
    </>
  );
}

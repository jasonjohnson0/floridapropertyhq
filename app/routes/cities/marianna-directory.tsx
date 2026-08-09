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

const categoryColors: Record<string, string> = {
  "Chamber of Commerce": "bg-amber-100 text-amber-800",
  "Hospital": "bg-red-100 text-red-800",
  "Municipal Government": "bg-blue-100 text-blue-800",
  "County Government": "bg-indigo-100 text-indigo-800",
};

export default function MariannaDirectory() {
  return (
    <>
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

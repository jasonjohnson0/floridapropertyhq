import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-blue-950 text-slate-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-white font-bold text-lg mb-2">
              <span className="text-amber-400">🏡</span> Florida Property HQ
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Practical property guidance for Northwest Florida — Bay County, Jackson County, and the communities in between.
            </p>
          </div>

          {/* City Guides */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">City Guides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/cities/panama-city" className="hover:text-amber-400 transition-colors">
                  Panama City / Bay County
                </Link>
              </li>
              <li>
                <Link to="/cities/marianna" className="hover:text-amber-400 transition-colors">
                  Marianna / Jackson County
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/resources/buying-a-home" className="hover:text-amber-400 transition-colors">
                  Buying a Home
                </Link>
              </li>
              <li>
                <Link to="/resources/selling-a-home" className="hover:text-amber-400 transition-colors">
                  Selling Your Home
                </Link>
              </li>
              <li>
                <Link to="/resources/homeowners-insurance" className="hover:text-amber-400 transition-colors">
                  Homeowners Insurance
                </Link>
              </li>
              <li>
                <Link to="/resources/property-management" className="hover:text-amber-400 transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <Link to="/resources/rental-investment" className="hover:text-amber-400 transition-colors">
                  Rental &amp; Investment
                </Link>
              </li>
            </ul>
          </div>

          {/* Site */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">Site</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/advertise" className="hover:text-amber-400 transition-colors">
                  For Local Professionals
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Florida Property HQ. All rights reserved.</p>
          <p className="text-center">
            Information on this site is for general guidance only — not legal, financial, or insurance advice. Verify all details with licensed local professionals before making property decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}

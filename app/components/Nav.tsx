import { useState } from "react";
import { Link, NavLink } from "react-router";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-amber-400 font-semibold"
      : "text-slate-200 hover:text-white transition-colors duration-150";

  return (
    <header className="bg-blue-950 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-white font-bold text-lg tracking-tight hover:text-amber-400 transition-colors"
          >
            <span className="text-amber-400 text-xl">🏡</span>
            Florida Property HQ
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            <div className="relative group">
              <button className="text-slate-200 hover:text-white transition-colors duration-150 flex items-center gap-1 cursor-default">
                City Guides
                <svg className="w-3.5 h-3.5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg py-1 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                <Link
                  to="/cities/panama-city"
                  className="block px-4 py-2.5 text-slate-700 hover:bg-slate-50 hover:text-blue-900 text-sm"
                >
                  <span className="font-medium">Panama City</span>
                  <span className="block text-xs text-slate-400">Bay County</span>
                </Link>
                <Link
                  to="/cities/marianna"
                  className="block px-4 py-2.5 text-slate-700 hover:bg-slate-50 hover:text-blue-900 text-sm"
                >
                  <span className="font-medium">Marianna</span>
                  <span className="block text-xs text-slate-400">Jackson County</span>
                </Link>
              </div>
            </div>
            <NavLink to="/resources" className={linkClass}>
              Resources
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink
              to="/advertise"
              className="bg-amber-400 text-blue-950 px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-amber-300 transition-colors"
            >
              For Professionals
            </NavLink>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-200 hover:text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-blue-900 mt-1 pt-3 flex flex-col gap-1 text-sm">
            <NavLink to="/" end className={({ isActive }) => `block px-2 py-2 rounded ${isActive ? "text-amber-400 font-semibold" : "text-slate-200"}`} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <div className="px-2 py-1 text-xs uppercase tracking-widest text-slate-400 font-semibold mt-1">City Guides</div>
            <NavLink to="/cities/panama-city" className={({ isActive }) => `block px-4 py-2 rounded ${isActive ? "text-amber-400 font-semibold" : "text-slate-200"}`} onClick={() => setMenuOpen(false)}>
              Panama City (Bay County)
            </NavLink>
            <NavLink to="/cities/marianna" className={({ isActive }) => `block px-4 py-2 rounded ${isActive ? "text-amber-400 font-semibold" : "text-slate-200"}`} onClick={() => setMenuOpen(false)}>
              Marianna (Jackson County)
            </NavLink>
            <NavLink to="/resources" className={({ isActive }) => `block px-2 py-2 rounded ${isActive ? "text-amber-400 font-semibold" : "text-slate-200"}`} onClick={() => setMenuOpen(false)}>
              Resources
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `block px-2 py-2 rounded ${isActive ? "text-amber-400 font-semibold" : "text-slate-200"}`} onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/advertise" className="block mx-2 mt-2 text-center bg-amber-400 text-blue-950 px-4 py-2 rounded-full font-semibold hover:bg-amber-300" onClick={() => setMenuOpen(false)}>
              For Professionals
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}

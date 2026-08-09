import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Page Not Found | Florida Property HQ" },
];

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20 bg-slate-50">
      <div className="max-w-md mx-auto text-center">
        <div className="text-6xl font-bold text-blue-950 mb-4">404</div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">
          Page not found
        </h1>
        <p className="text-slate-500 leading-relaxed mb-8">
          This page doesn't exist or may have moved. Try one of the links below
          to find what you're looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="bg-blue-950 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-blue-900 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/cities/panama-city"
            className="border border-slate-300 text-slate-700 font-semibold px-6 py-2.5 rounded-full hover:border-blue-300 hover:text-blue-900 transition-colors"
          >
            Panama City Guide
          </Link>
          <Link
            to="/cities/marianna"
            className="border border-slate-300 text-slate-700 font-semibold px-6 py-2.5 rounded-full hover:border-blue-300 hover:text-blue-900 transition-colors"
          >
            Marianna Guide
          </Link>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/recommendations", label: "Recommendations" },
  { to: "/resume-analyzer", label: "ResumeAnalyzer" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 shadow-lg fixed z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-extrabold text-purple-400 transition-colors duration-500 hover:text-indigo-300 animate-fadeIn"
          onClick={() => setMenuOpen(false)}
        >
          CareerGuide
        </Link>

        {/* Hamburger button for mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            // Close icon
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation links */}
        <ul
          className={cn(
            "flex-col md:flex md:flex-row md:items-center md:gap-7 absolute md:static top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 md:transition-none md:opacity-100",
            menuOpen
              ? "opacity-100 visible shadow-lg"
              : "opacity-0 invisible md:opacity-100 md:visible"
          )}
        >
          {navLinks.map(({ to, label }) => (
            <li key={to} className="border-b border-gray-700 md:border-none">
              <Link
                to={to}
                className={cn(
                  "block text-lg font-bold text-gray-200 transition-all duration-300 px-6 py-3 md:px-3 md:py-1 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white",
                  location.pathname === to &&
                    "bg-gradient-to-r from-purple-700 to-indigo-700 text-white"
                )}
                onClick={() => setMenuOpen(false)} // close menu on link click
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login/Signup buttons hidden on small screens - alternatively move these inside menu on mobile */}
        <div className="hidden md:flex gap-2">
          <Link
            to="/login"
            className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:bg-purple-500"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-purple-600 text-white rounded-xl font-semibold transition duration-500 hover:scale-105 hover:bg-indigo-500"
          >
            Signup
          </Link>
        </div>
      </div>

      {/* Login/Signup buttons inside mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-4 flex flex-col gap-3 border-t border-gray-700">
          <Link
            to="/login"
            className="block text-center px-4 py-2 bg-indigo-600 text-white rounded-xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block text-center px-4 py-2 bg-purple-600 text-white rounded-xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Note: Navbar.jsx had "react-router", should be "react-router-dom"
import { FaSearch, FaGithub } from "react-icons/fa";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";

export default function TopNavbar({ darkMode, setDarkMode, searchOpen, setSearchOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full flex flex-col sm:flex-row justify-center transition-all duration-300 ${scrolled
        ? `${darkMode ? "bg-black/60 " : "bg-white/70 "}  backdrop-blur-md `
        : `${darkMode ? "bg-black" : "bg-white"} border-transparent`
        }  fixed top-0 left-0 z-50`}
    >
      <div className="flex items-center justify-between w-full max-w-3xl py-3 px-4 sm:py-4 sm:px-8">
        {/* Logo */}
        <Link
          to="/"
          className={`${darkMode ? "text-white" : "text-black"} flex items-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 240 120"
            fill="currentColor"
            className="h-6 w-auto sm:h-6"
          >
            {/* B */}
            <rect x="0" y="0" width="20" height="120" />
            <rect x="20" y="0" width="40" height="20" />
            <rect x="20" y="50" width="40" height="20" />
            <rect x="20" y="100" width="40" height="20" />
            <rect x="60" y="20" width="20" height="30" />
            <rect x="60" y="70" width="20" height="30" />

            {/* D */}
            <rect x="120" y="0" width="20" height="120" />
            <rect x="140" y="0" width="40" height="20" />
            <rect x="180" y="20" width="20" height="80" />
            <rect x="140" y="100" width="40" height="20" />
          </svg>
        </Link>

        {/* Desktop Menu */}

        {/* Right side actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search */}

          <nav className="hidden sm:flex items-center gap-6 title">
            <Link
              to="/blog"
              className={`hover:text-gray-400 ${darkMode ? "text-white" : "text-zinc-600"
                }`}
            >
              Blog
            </Link>
            <a
              href="#"
              className={`hover:text-gray-400 ${darkMode ? "text-white" : "text-zinc-600"
                }`}
            >
              Components
            </a>
          </nav>
          <div
            onClick={() => setSearchOpen(true)}
            className={`relative flex items-center group border transition-all duration-300 rounded-xl px-2 cursor-pointer ${darkMode
              ? "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
              : "bg-zinc-50 border-zinc-200 hover:border-zinc-300"
              }`}
          >
            <FaSearch
              className={`absolute left-2.5 text-xs transition-colors ${darkMode
                ? "text-zinc-500 group-hover:text-zinc-300"
                : "text-zinc-400 group-hover:text-zinc-600"
                }`}
            />
            <input
              type="text"
              placeholder="Ctrl K"
              readOnly
              className={`pl-8 pr-2 py-1.5 text-xs sm:text-sm w-24 sm:w-32 bg-transparent focus:outline-none title cursor-pointer transition-colors ${darkMode
                ? "text-white placeholder-zinc-600"
                : "text-zinc-900 placeholder-zinc-400"
                }`}
            />
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/Biswasource"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 border rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${darkMode
              ? "border-zinc-800 bg-zinc-900 text-white hover:border-zinc-700 hover:text-blue-400"
              : "border-zinc-200 bg-white text-zinc-800 hover:border-zinc-300 hover:text-blue-600 shadow-sm"
              }`}
          >
            <FaGithub className="text-lg" />
          </a>

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 border rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${darkMode
              ? "border-zinc-800 bg-zinc-900 text-yellow-400 hover:border-zinc-700"
              : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-blue-600 shadow-sm"
              }`}
          >
            {darkMode ? (
              <HiSun className="text-lg" />
            ) : (
              <HiMoon className="text-lg" />
            )}
          </button>

          {/* Hamburger for mobile */}
          {darkMode ? (
            <button
              className="sm:hidden p-1 border border-gray-700 rounded-full hover:bg-zinc-900 "
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <HiX className="text-white text-lg" />
              ) : (
                <HiMenu className="text-white text-lg" />
              )}
            </button>
          ) : (
            <button
              className="sm:hidden p-1 border border-gray-700 rounded-full cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <HiX className="text-black text-lg" />
              ) : (
                <HiMenu className="text-black text-lg" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`sm:hidden fixed top-12 m-1 rounded-xl right-0 min-h flex flex-col  gap-2 text-left py-4 w-1/2 z-50 shadow-lg ${darkMode
            ? "bg-neutral-900 border border-zinc-900"
            : "bg-white border border-zinc-200"
            }`}
        >
          <Link
            to="/blog"
            className={`py-2 px-4 w-full text-left title hover:bg-zinc-700 rounded-md ${darkMode ? "text-white" : "text-black"
              }`}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <a
            href="#"
            className={`py-2 px-4 w-full text-left title hover:bg-zinc-700 rounded-md ${darkMode ? "text-white" : "text-black"
              }`}
            onClick={() => setMenuOpen(false)}
          >
            Components
          </a>
        </div>
      )}
    </header>
  );
}

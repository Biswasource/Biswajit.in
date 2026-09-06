import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import HorizontalDivider from "../components/HorizontalDivider";
import StripedDivider from "../components/StripedDivider";
import TopNavbar from "../components/TopNavbar";
import SearchDialog from "../components/SearchDialog";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function Resume() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Load theme from localStorage only
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
  }, []);

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
    >
      <SEO
        title="Resume | Biswajit Das"
        description="View the resume of Biswajit Das, a Full Stack Developer."
      />
      <TopNavbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />
      <SearchDialog
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        darkMode={darkMode}
      />

      <div className="w-full flex flex-col items-center pt-[80px] pb-10 relative">
        <HorizontalDivider darkMode={darkMode} className="opacity-50" />

        <article
          className={`w-full max-w-3xl px-4 sm:px-8 py-8 border-x ${darkMode ? 'border-zinc-800' : 'border-gray-200'
            }`}
        >
          {/* Top Actions Row */}
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              className={`inline-flex items-center text-sm font-medium transition-colors ${darkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-500 hover:text-black"
                }`}
            >
              <HiArrowLeft className="mr-2 text-lg" /> Home
            </Link>
          </div>

          {/* Title */}
          <h1
            className={`text-3xl sm:text-4xl font-normal tracking-tight leading-[1.1] mb-4 ${darkMode ? "text-white" : "text-gray-950"
              }`}
          >
            Resume
          </h1>
        </article>

        <StripedDivider darkMode={darkMode} className="opacity-70" />

        <div
          className={`w-full max-w-3xl px-4 sm:px-8 py-10 border-x min-h-screen ${darkMode ? 'border-zinc-800' : 'border-gray-200'
            }`}
        >
          <div className="w-full h-[85vh] rounded-lg overflow-hidden border border-gray-300 shadow-md">
            <iframe
              src="/BIswajit Das 's Resume.pdf"
              title="Resume"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

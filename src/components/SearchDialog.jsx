import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function SearchDialog({ isOpen, onClose, darkMode }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const sections = [
    { name: "About", id: "about", type: "section" },
    { name: "Experience", id: "experience", type: "section" },
    { name: "Projects", id: "projects", type: "section" },
    { name: "Education", id: "education", type: "section" },
    { name: "Blogs", link: "/blog", type: "page" },
  ];

  const filteredSections = sections.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSelect = (section) => {
    onClose();
    if (section.type === "page") {
      navigate(section.link);
    } else if (section.type === "section") {
      const el = document.getElementById(section.id);
      if (el) {
        // Offset for sticky navbar
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        // If we are not on the home page, go to home then scroll
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(section.id);
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 500);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[101] flex items-start justify-center pt-[15vh] sm:pt-[20vh] px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`w-full max-w-lg rounded-xl overflow-hidden shadow-2xl pointer-events-auto border ${
                darkMode
                  ? "bg-zinc-900 border-zinc-800 text-white"
                  : "bg-white border-zinc-200 text-zinc-900"
              }`}
            >
              <div
                className={`flex items-center px-4 py-3 border-b ${
                  darkMode ? "border-zinc-800" : "border-zinc-200"
                }`}
              >
                <FaSearch
                  className={`text-lg mr-3 ${
                    darkMode ? "text-zinc-500" : "text-zinc-400"
                  }`}
                />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search sections..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-base title placeholder:text-zinc-500"
                />
                <button
                  onClick={onClose}
                  className={`text-xs px-2 py-1 rounded-md border title ${
                    darkMode
                      ? "border-zinc-700 bg-zinc-800 text-zinc-400 hover:text-white"
                      : "border-zinc-300 bg-zinc-100 text-zinc-500 hover:text-black"
                  }`}
                >
                  ESC
                </button>
              </div>

              <div className="max-h-80 overflow-y-auto p-2">
                {filteredSections.length > 0 ? (
                  filteredSections.map((section, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(section)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors mb-1 ${
                        darkMode
                          ? "hover:bg-zinc-800 text-zinc-200"
                          : "hover:bg-zinc-100 text-zinc-800"
                      }`}
                    >
                      <span className="text-sm font-medium cl">
                        {section.name}
                      </span>
                      <FaArrowRight
                        className={`text-xs opacity-50 ${
                          darkMode ? "text-zinc-400" : "text-zinc-500"
                        }`}
                      />
                    </button>
                  ))
                ) : (
                  <div
                    className={`px-4 py-8 text-center text-sm title ${
                      darkMode ? "text-zinc-500" : "text-zinc-500"
                    }`}
                  >
                    No sections found for "{query}"
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

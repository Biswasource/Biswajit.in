import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaEnvelope,
  FaGlobe,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaInfoCircle,
  FaGenderless,
  FaSearch,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundGrid from "../Background/GridBackGround";
import AboutSocialLinks from "../pages/AboutSocialLinks";
import GithubContribution from "../pages/GithubContribution";
import TechStack from "../pages/Stack";
import ExperienceSection from "../pages/Experience";
import ProjectSection from "../pages/ProjectSection";
import EducationSection from "../pages/EducationSection";
import CertificationsSection from "../pages/CertificationsSection";
import AIChatbot from "./AIChatbot";
import Footer from "./Footer";
import Hero from "./Hero";
import SearchDialog from "./SearchDialog";
import { FaVolumeUp } from "react-icons/fa";
import { Link } from "react-router";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";

export default function Profile() {
  const sentences = [
    "Freelancer",
    "Backend Developer & Designer",
    "Frontend Developer",
  ];

  const [index, setIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, 2500); // Change sentence every 2.5s
    return () => clearInterval(timer);
  }, []);

  const speakName = () => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance("Biswajit Das");
    utterance.lang = "en-IN";
    utterance.rate = 1;
    utterance.pitch = 1.1;
    utterance.volume = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      className={`${darkMode ? "bg-black text-white" : "bg-white text-zinc-800"
        } min-h-screen font-mono`}
    >
      <header
        className={`w-full flex flex-col sm:flex-row justify-center transition-all duration-300 ${scrolled
          ? `${darkMode ? "bg-black/60 " : "bg-white/70 "}  backdrop-blur-md `
          : `${darkMode ? "bg-black" : "bg-white"} border-transparent`
          }  fixed top-0 left-0 z-50`}
      >
        <div className="flex items-center justify-between w-full max-w-3xl py-3 px-4 sm:py-4 sm:px-8">
          {/* Logo */}
          <span
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
          </span>

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
                }`}>
              <FaSearch className={`absolute left-2.5 text-xs transition-colors ${darkMode ? "text-zinc-500 group-hover:text-zinc-300" : "text-zinc-400 group-hover:text-zinc-600"
                }`} />
              <input
                type="text"
                placeholder="Ctrl K"
                readOnly
                className={`pl-8 pr-2 py-1.5 text-xs sm:text-sm w-24 sm:w-32 bg-transparent focus:outline-none title cursor-pointer transition-colors ${darkMode ? "text-white placeholder-zinc-600" : "text-zinc-900 placeholder-zinc-400"
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
              {darkMode ? <HiSun className="text-lg" /> : <HiMoon className="text-lg" />}
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

      {/* Hero Banner Image */}
      <div className="w-full px-4 sm:px-6 flex justify-center mb-3 pt-[64px] sm:pt-[72px]">
        <div className={`w-full max-w-3xl border-l border-r relative h-[250px] sm:h-[250px] md:h-[250px] overflow-hidden ${darkMode ? 'border-zinc-800' : 'border-gray-300'}`}>
          <img
            src="https://plus.unsplash.com/premium_photo-1673859054724-d3ce699da39d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25vdyUyMG1vdW50YWlufGVufDB8fDB8fHww"
            alt="Setup Desk"
            className="w-full h-full object-cover object-[center_25%]"
          />

          {/* Blurred fade effect at the bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 backdrop-blur-md pointer-events-none"
            style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 100%)', maskImage: 'linear-gradient(to bottom, transparent, black 100%)' }}
          ></div>

          {/* Bottom side fade to blend into the background */}
          <div
            className={`absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-95% ${darkMode ? "to-black" : "to-white"}`}
          ></div>

          {/* Optional top fade so it doesn't clash abruptly with the sticky navbar if scrolled */}
          <div
            className={`absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-transparent ${darkMode ? "to-black/30" : "to-white/30"}`}
          ></div>
        </div>
      </div>

      <BackgroundGrid darkMode={darkMode}>
        <Hero darkMode={darkMode} speakName={speakName} isSpeaking={isSpeaking} />
        <GithubContribution darkMode={darkMode} />
        <AboutSocialLinks darkMode={darkMode} />

        <TechStack darkMode={darkMode} />
        <ExperienceSection darkMode={darkMode} />
        <ProjectSection darkMode={darkMode} />
        <EducationSection darkMode={darkMode} />
        <CertificationsSection darkMode={darkMode} />
      </BackgroundGrid>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* AI Chatbot Assistant */}
      <SearchDialog
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}

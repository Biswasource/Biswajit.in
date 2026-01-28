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
import AIChatbot from "./AIChatbot";
import Footer from "./Footer";
import Hero from "./Hero";
import { FaVolumeUp } from "react-icons/fa";
import { Link } from "react-router";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";

export default function Profile() {
  const sentences = [
    "Creating with code. Small details matter.",
    "Backend Developer & Designer",
    "Frontend Developer",
  ];

  const [index, setIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-zinc-800"
      } min-h-screen font-mono`}
    >
      <header
        className={`flex flex-col sm:flex-row justify-center transition-all duration-300 ${
          scrolled 
            ? `${darkMode ? "bg-black/60 border-zinc-800" : "bg-white/70 border-zinc-200"} border-b backdrop-blur-md shadow-sm` 
            : `${darkMode ? "bg-black" : "bg-white"} border-transparent`
        } border-b sticky top-0 z-50`}
      >
        <div className="flex items-center justify-between w-full max-w-3xl py-3 px-4 sm:py-4 sm:px-8">
          {/* Logo */}
          <span
            className={`font-bold text-2xl tracking-tight sm:text-3xl  ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            BD
          </span>

          {/* Desktop Menu */}

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search */}

            <nav className="hidden sm:flex items-center gap-6 title">
              <Link
                to="/blog"
                className={`hover:text-gray-400 ${
                  darkMode ? "text-white" : "text-zinc-600"
                }`}
              >
                Blog
              </Link>
              <a
                href="#"
                className={`hover:text-gray-400 ${
                  darkMode ? "text-white" : "text-zinc-600"
                }`}
              >
                Components
              </a>
            </nav>
            {darkMode ? (
              <div className="relative flex items-center bg-zinc-800 border border-zinc-600 rounded-xl px-2">
                <FaSearch className="absolute left-2 text-zinc-400 text-sm" />
                <input
                  type="text"
                  placeholder="Ctrl K"
                  className="pl-7 pr-2 py-1 text-xs sm:text-sm w-24 sm:w-28 bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none rounded-xl title "
                />
              </div>
            ) : (
              <div className="relative flex items-center bg-gray-50 border border-zinc-600 rounded-xl px-2">
                <FaSearch className="absolute left-2 text-zinc-400 text-sm" />
                <input
                  type="text"
                  placeholder="Ctrl K"
                  className="pl-7 pr-2 py-1 text-xs sm:text-sm w-24 sm:w-28 bg-gray-50 text-black placeholder-zinc-500 focus:outline-none rounded-xl title "
                />
              </div>
            )}

            {/* GitHub */}
            <button className="p-1 border rounded-full border-gray-700 cursor-pointer">
              {darkMode ? (
                <FaGithub className="text-white text-lg sm:text-xl " />
              ) : (
                <FaGithub className="text-black text-lg sm:text-xl " />
              )}
            </button>

            {/* Dark Mode */}
            <button
              className="p-1 border rounded-full border-gray-700 cursor-pointer"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <HiSun className="text-white text-xl" />
              ) : (
                <HiMoon className="text-black text-xl" />
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
            className={`sm:hidden fixed top-12 m-1 rounded-xl right-0 min-h flex flex-col  gap-2 text-left py-4 w-1/2 z-50 shadow-lg ${
              darkMode
                ? "bg-neutral-900 border border-zinc-900"
                : "bg-white border border-zinc-200"
            }`}
          >
            <Link
              to="/blog"
              className={`py-2 px-4 w-full text-left title hover:bg-zinc-700 rounded-md ${
                darkMode ? "text-white" : "text-black"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <a
              href="#"
              className={`py-2 px-4 w-full text-left title hover:bg-zinc-700 rounded-md ${
                darkMode ? "text-white" : "text-black"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Components
            </a>
          </div>
        )}
      </header>

      <BackgroundGrid darkMode={darkMode}>
        <Hero darkMode={darkMode} />

        <AboutSocialLinks darkMode={darkMode} />
        <GithubContribution darkMode={darkMode} />
        <TechStack darkMode={darkMode} />
        <ExperienceSection darkMode={darkMode} />
        <ProjectSection darkMode={darkMode} />
        <EducationSection darkMode={darkMode} />
      </BackgroundGrid>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* AI Chatbot Assistant */}
      <AIChatbot darkMode={darkMode} />
    </div>
  );
}

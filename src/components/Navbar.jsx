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
        className={`flex flex-col sm:flex-row justify-center border-b ${
          darkMode ? "border-zinc-700" : "border-zinc-200"
        } ${darkMode ? "bg-black" : "bg-white"} sticky top-0 z-50`}
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
        <main className="flex justify-center px-6 bebas-neue-regular z-99 mt-5">
          <div className="w-full max-w-3xl md:px-3">
            <section
              className={`relative border-b pb-10 ${
                darkMode ? "border-zinc-700 bg-black" : "border-zinc-200"
              } py-2 flex sm:flex-row items-center gap-2 sm:gap-6`}
            >
              <img
                src="./me.jpg"
                alt="avatar"
                className="w-32 h-32 sm:w-36 sm:h-36 mr-2 rounded-full border-4 border-white shadow-md object-cover"
              />

              <div className="relative text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold flex items-center justify-center sm:justify-start gap-2">
                  Biswajit Das
                  <MdVerified className="text-sky-500 text-xl sm:text-2xl" />
                  <button
                    onClick={speakName}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Speak Biswajit Das"
                  >
                    <FaVolumeUp
                      className={`text-lg sm:text-xl transition-transform duration-300 ${
                        isSpeaking ? "text-gray-400" : "text-white"
                      }`}
                    />
                  </button>
                </h1>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute font-arial text-left text-sm sm:text-sm"
                  >
                    {sentences[index]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </section>

            <section
              className={`py-4 relative pt-5 ${
                darkMode ? "bg-black" : "bg-white"
              }`}
            >
              <ul className="space-y-1.5 title">
                {[
                  { icon: FaCode, text: "Backend Developer" },
                  {
                    icon: FaInfoCircle,
                    text: (
                      <>
                        Founder{" "}
                        <a
                          href="https://uivault.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:underline"
                        >
                          @uivault
                        </a>
                      </>
                    ),
                  },
                  { icon: FaMapMarkerAlt, text: "Cuttack, Odisha" },
                  {
                    icon: FaPhone,
                    text: (
                      <a
                        href="https://wa.me/919348269040"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-sm"
                      >
                        +91 9348269040
                      </a>
                    ),
                  },
                  {
                    icon: FaEnvelope,
                    text: (
                      <a
                        href="mailto:biswajit9348das@gmail.com"
                        className="hover:underline"
                      >
                        biswajit9348das@gmail.com
                      </a>
                    ),
                  },
                  { icon: FaGlobe, text: "biswajitdev.in" },
                  { icon: FaGenderless, text: "he/him" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={idx}
                      className="flex items-center gap-2 font-thin text-sm "
                    >
                      <div
                        className={`relative flex items-center justify-center w-8 h-8 rounded-xl ${
                          darkMode
                            ? "bg-neutral-900 border-zinc-950"
                            : "bg-zinc-50 border-gray-200"
                        } shadow-[inset_0_0_0_1px_#e5e5e5]`}
                      >
                        <div className="absolute inset-1 rounded-md border border-zinc-500" />
                        <Icon
                          className={`${
                            darkMode ? "text-white" : "text-zinc-700"
                          } text-sm`}
                        />
                      </div>
                      <span
                        className={`${
                          darkMode ? "text-white" : "text-black"
                        } text-[14.5px] scale-105 ml-2 font-medium letter`}
                      >
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </main>

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

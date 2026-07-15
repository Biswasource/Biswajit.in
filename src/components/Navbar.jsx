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
import { Link } from "react-router-dom";
import TopNavbar from "./TopNavbar";
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
      <TopNavbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />

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

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiBun,
  SiMongodb
} from "react-icons/si";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaFileAlt,
  FaPaperPlane,
  FaPinterest,
  FaCode,
  FaMapMarkerAlt,
  FaRegClock,
  FaLink,
  FaBriefcase,
  FaPhone,
  FaMars,
  FaQuestion
} from "react-icons/fa";
import { RiTwitterXFill, RiThreadsFill } from "react-icons/ri";
import { FaBolt } from "react-icons/fa";
import BDLogo from "./BDlogo";
import StripedDivider from "./StripedDivider";
import HorizontalDivider from "./HorizontalDivider";

const SkillTag = ({ icon, name, darkMode }) => (
  <span
    className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border-2 border-dotted text-[13px] font-bold transition-colors ${darkMode
      ? "bg-zinc-900 border-zinc-700 text-zinc-300"
      : "bg-zinc-100/50 border-zinc-300 text-zinc-800"
      }`}
  >
    <span className="scale-90">{icon}</span>
    {name}
  </span>
);

const InfoItem = ({ icon, text, darkMode, className, href }) => {
  const inner = (
    <>
      <div className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-md border transition-colors ${darkMode ? "bg-zinc-900 border-zinc-800 text-white group-hover:border-zinc-700" : "bg-zinc-50 border-zinc-200 text-black group-hover:border-zinc-300"}`}>
        {icon}
      </div>
      <span className={`relative inline-block text-[13px] tracking-tight truncate ${darkMode ? "text-white" : "text-black"} ${className || "font-mono"}`}>
        {text}
        {href && (
          <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-current origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer" className="flex items-center gap-3 w-full group cursor-pointer">
        {inner}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-3 w-full">
      {inner}
    </div>
  );
};

const SocialButton = ({ href, icon, darkMode, onClick }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className={`flex items-center justify-center w-9 h-9 rounded-md border transition-all hover:scale-105 ${darkMode
      ? "bg-white border-zinc-700 text-black hover:bg-gray-200"
      : "bg-white border-zinc-300 text-black hover:bg-gray-100"
      }`}
  >
    {icon}
  </a>
);

const Hero = ({ darkMode }) => {
  const [copied, setCopied] = useState(false);
  const email = "biswajit9348das@gmail.com";
  const [timeStr, setTimeStr] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Fullstack Developer",
    "Mobile App Developer",
    "Open Source contributor"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata", // For Cuttack, Odisha
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatted = new Intl.DateTimeFormat('en-US', options).format(now);
      setTimeStr(`${formatted} (IST)`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (e) => {
    // We still allow the default mailto behavior if they want, 
    // but we copy to clipboard as well for better UX
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="w-full px-4 sm:px-6 flex justify-center">
        <section className={`w-full max-w-3xl border-l border-r ${darkMode ? 'border-zinc-800 bg-black' : 'border-gray-300 bg-white'}  px-4 sm:px-4 md:px-4 mx-auto font-['Inter',_sans-serif] ${darkMode ? "text-white" : "text-zinc-800"}`}>
          <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] ">
            <HorizontalDivider darkMode={darkMode} className="w-full" />
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1"
            >
              {/* ── Avatar + Name row ── */}
              <div className="flex items-center gap-5">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className={`w-34 h-34 md:w-40 md:h-40 object-cover rounded-full overflow-hidden transition-colors ${darkMode ? "border-zinc-800 bg-zinc-900" : "border-zinc-100 bg-white"
                    }`}>
                    <img
                      src="/profile.png"
                      alt="Biswajit Das"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <motion.h1
                    initial={{ y: 20, opacity: 0, filter: "blur(6px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    className={`cl text-[26px] md:text-[30px] font-bold tracking-tight leading-tight ${darkMode
                      ? "bg-gradient-to-r from-zinc-400 via-white to-zinc-400 text-transparent"
                      : "bg-gradient-to-r from-zinc-700 via-zinc-950 to-zinc-700 text-transparent"
                      } bg-[length:200%_auto] bg-clip-text animate-shimmer`}
                  >
                    Biswajit Das
                  </motion.h1>
                  <div className="h-6 flex items-center overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={roleIndex}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={` text-[14px] mt-1 font-medium tracking-wide ${darkMode ? "text-zinc-300" : "text-zinc-900"}`}
                      >
                        {roles[roleIndex]}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  {/* Animated underline accent */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: 0.55 }}
                    style={{ originX: 0 }}
                    className={`h-[2px] w-full rounded-full ${darkMode ? "bg-zinc-600" : "bg-zinc-300"}`}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <StripedDivider darkMode={darkMode} height="h-8" className="w-full" />

      <div className="w-full px-4 sm:px-6 flex justify-center">
        <section className={`w-full max-w-3xl border-l border-r ${darkMode ? 'border-zinc-800 bg-black' : 'border-gray-300 bg-white'} md:px-14 px-5 mx-auto font-['Inter',_sans-serif] ${darkMode ? "text-white" : "text-zinc-800"}`}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1"
            >
              {/* ── Bio / skills ── */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.12, delayChildren: 0.55 }
                  }
                }}
                initial="hidden"
                animate="visible"
                className={`text-[15px] md:text-[15.5px] leading-[1.75] space-y-3 ${darkMode ? "text-zinc-400" : "text-zinc-500"
                  }`}
              >
                {/* Skills line */}
              </motion.div>

              {/* Info Grid & Socials */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-3 w-full max-w-3xl"
              >
                {/* Grid */}
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-[auto_auto] justify-start gap-y-3 sm:gap-y-2 gap-x-32 py-2 px-0 mr-24">
                  <InfoItem icon={<FaCode size={13} />} text="Backend Developer @shadcncraft" className="title" darkMode={darkMode} />
                  <div className="hidden sm:block" />

                  <InfoItem icon={<FaQuestion size={13} />} text="Founder @Uivault" href="https://uivault.in" className="title" darkMode={darkMode} />
                  <div className="hidden sm:block" />

                  <InfoItem icon={<FaMapMarkerAlt size={13} />} text="Cuttack, Odisha" className="title" darkMode={darkMode} />
                  <InfoItem icon={<FaRegClock size={13} />} text={timeStr || "Loading..."} className="title" darkMode={darkMode} />

                  <InfoItem icon={<FaEnvelope size={13} />} text="biswajit9348das@gmail.com" href="mailto:biswajit9348das@gmail.com" className="title" darkMode={darkMode} />
                  <div className="hidden sm:block" />

                  <InfoItem icon={<FaLink size={13} />} text="biswajit.uivault.in" href="https://biswajit.uivault.in" className="title" darkMode={darkMode} />
                  <InfoItem icon={<FaMars size={13} />} text="he/him" className="title" darkMode={darkMode} />
                </div>
                <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] my-4">
                  <HorizontalDivider darkMode={darkMode} className="w-full" />
                </div>
                {/* Social Buttons */}
                <div className="flex flex-wrap items-center gap-3 mt-2 mb-2">
                  <SocialButton href="https://twitter.com" icon={<RiTwitterXFill size={22} />} darkMode={darkMode} />
                  <SocialButton href="https://github.com/Biswasource" icon={<FaGithub size={22} />} darkMode={darkMode} />
                  <SocialButton href="https://www.linkedin.com/in/biswajitdas-" icon={<FaLinkedin size={22} />} darkMode={darkMode} />
                  <SocialButton href="https://instagram.com" icon={<FaInstagram size={22} />} darkMode={darkMode} />

                  <div className="relative group">
                    <SocialButton
                      href={`mailto:${email}`}
                      onClick={handleCopyEmail}
                      icon={<FaEnvelope size={22} />}
                      darkMode={darkMode}
                    />
                    {copied && (
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-800 text-white text-[11px] font-medium rounded-lg shadow-xl whitespace-nowrap">
                        Copied!
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

    </>
  );
};

export default Hero;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiBun, 
  SiPostgresql 
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
  FaPinterest
} from "react-icons/fa";
import { RiTwitterXFill, RiThreadsFill } from "react-icons/ri";
import { FaBolt } from "react-icons/fa";

const SkillTag = ({ icon, name, darkMode }) => (
  <span 
    className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border-2 border-dotted text-[13px] font-bold transition-colors ${
      darkMode 
        ? "bg-zinc-900 border-zinc-700 text-zinc-300" 
        : "bg-zinc-100/50 border-zinc-300 text-zinc-800"
    }`}
  >
    <span className="scale-90">{icon}</span>
    {name}
  </span>
);

const Hero = ({ darkMode }) => {
  const [copied, setCopied] = useState(false);
  const email = "biswajit9348das@gmail.com";

  const handleCopyEmail = (e) => {
    // We still allow the default mailto behavior if they want, 
    // but we copy to clipboard as well for better UX
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={`w-full max-w-5xl md:px-14 px-6 mx-auto md:pt-20 pt-10 pb-12 font-['Inter',_sans-serif] ${darkMode ? "text-white" : "text-zinc-800"}`}>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative">
        <div className="hidden md:block w-8 mt-4">
          
        </div>

        <div className="flex-1">
          <div className="mb-4">
            <div className="relative inline-block">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-4xl overflow-hidden border-2 border-zinc-100 shadow-sm">
                <img 
                  src="/profile-white.png" 
                  alt="Biswajit Das" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.15, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-1 -right-1 bg-white rounded-full p-1.5 shadow-[0_0_15px_rgba(16,185,129,0.2)] border border-emerald-100 flex items-center justify-center z-10"
              >
                <FaBolt className="text-emerald-500 text-sm" />
              </motion.div>
            </div>
          </div>

          <div className="mb-4">
            <h1 className="text-[28px] md:text-[36px] font-bolder tracking-tight leading-tight">
              Hi, I'm Biswa — <span className={darkMode ? "text-zinc-500" : "text-[#94a3b8]"}>A Full Stack Developer.</span>
            </h1>
          </div>

          <div className={`text-[15px] md:text-[17px] leading-[1.4] space-y-1 ${darkMode ? "text-zinc-400" : "text-zinc-500"}`}>
            <div className="flex flex-wrap items-center gap-y-1 title gap-x-0.5">
              <span>I build interactive web apps using</span>
              <SkillTag name="Typescript" icon={<SiTypescript className="text-blue-600" />} />
              <span>,</span>
              <SkillTag name="React" icon={<SiReact className="text-cyan-500" />} />
              <span>,</span>
              <SkillTag name="Next.js" icon={<SiNextdotjs className={darkMode ? "text-white" : "text-black"} />} />
              <span>,</span>
              <SkillTag name="Bun" icon={<SiBun className="text-orange-300" />} />
            </div>
            <div className="flex flex-wrap items-center gap-y-2 mt-1 title">
              <span>and</span>
              <SkillTag name="PostgreSQL" icon={<SiPostgresql className="text-blue-500" />} />
              <span>. With a focus on <span className={`font-bold ${darkMode ? "text-white" : "text-zinc-900"}`}>UI</span> design. Enthusiastic about <span className={`font-bold ${darkMode ? "text-white" : "text-zinc-900"}`}>Three.js</span></span>
            </div>
            <div className="mt-2 title">
              <span>, driven by a keen eye for design.</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-[15px] font-bold transition-all ${
              darkMode 
                ? "bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800" 
                : "bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-50 shadow-sm"
            }`}>
              <FaFileAlt className="text-zinc-400" />
              Resume / CV
            </button>
            <a 
              href={`mailto:${email}`}
              onClick={handleCopyEmail}
              className={`relative flex items-center gap-2 px-4 py-3 rounded-xl text-[15px] font-bold transition-all ${
                darkMode 
                  ? "bg-white text-black hover:bg-zinc-200" 
                  : "bg-zinc-950 text-white hover:bg-zinc-800 shadow-lg"
              }`}
            >
              <FaPaperPlane className="text-sm" />
              {copied ? "Email Copied!" : "Get in touch"}
            </a>
          </div>

          <div className={`flex flex-wrap items-center gap-4 md:gap-6 mt-10 text-[20px] md:text-[22px] ${darkMode ? "text-zinc-500" : "text-zinc-400"}`}>
            <a href="https://www.linkedin.com/in/biswajitdas-" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <FaLinkedin className="cursor-pointer hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://github.com/Biswasource" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <FaGithub className="cursor-pointer hover:text-zinc-200 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <FaInstagram className="cursor-pointer hover:text-pink-500 transition-colors" />
            </a>
            <div className="relative group">
              <a 
                href={`mailto:${email}`}
                onClick={handleCopyEmail}
                className="transition-transform hover:scale-110 block"
              >
                <FaEnvelope className="cursor-pointer hover:text-zinc-200 transition-colors" />
              </a>
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-[10px] rounded whitespace-nowrap">
                  Copied!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

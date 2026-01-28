import React, { useState } from "react";
import { motion } from "framer-motion";
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
    <section className={`w-full max-w-5xl md:px-14 px-10 mx-auto md:pt-20 pt-10 pb-12 font-['Inter',_sans-serif] ${darkMode ? "text-white" : "text-zinc-800"}`}>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative">
        <div className="hidden md:block w-8 mt-4">
          
        </div>

        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1"
        >
          <div className="mb-6">
            <div className="relative inline-block">
              <div className={`w-24 h-24 md:w-28 md:h-28 rounded-3xl overflow-hidden border-2 shadow-sm transition-colors ${
                darkMode ? "border-zinc-800 bg-zinc-900" : "border-zinc-100 bg-white"
              }`}>
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
                className={`absolute -bottom-1 -right-1 rounded-full p-1.5 shadow-lg border flex items-center justify-center z-10 transition-colors ${
                  darkMode ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-100"
                }`}
              >
                <FaBolt className="text-emerald-500 text-sm" />
              </motion.div>
            </div>
          </div>

          <div className="mb-4 overflow-hidden">
            <motion.h1 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`text-[32px] md:text-[38px] font-bold tracking-tight leading-tight shrink-0 ${
                darkMode 
                  ? "bg-gradient-to-r from-zinc-300 via-white to-zinc-300 text-transparent" 
                  : "bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-800 text-transparent"
              } bg-[length:200%_auto] bg-clip-text animate-gradient-x`}
            >
              Hi, I'm Biswa — A Full Stack Developer.
            </motion.h1>
          </div>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.4
                }
              }
            }}
            initial="hidden"
            animate="visible"
            className={`li text-[16px] md:text-[16px] leading-[1.3] space-y-2 ${darkMode ? "text-zinc-400" : "text-zinc-500"}`}
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -10, filter: "blur(4px)" },
                visible: { opacity: 1, x: 0, filter: "blur(0px)" }
              }}
              className="flex flex-wrap items-center gap-x-1.5 gap-y-1"
            >
              <span>I build interactive web apps using</span>
              <SkillTag name="Typescript" icon={<SiTypescript className="text-blue-500" />} darkMode={darkMode} />
              <span>,</span>
              <SkillTag name="React" icon={<SiReact className="text-cyan-400" />} darkMode={darkMode} />
              <span>,</span>
            
              <span>and</span>
              <SkillTag name="MongoDB" icon={<SiMongodb className="text-emerald-500" />} darkMode={darkMode} />
            </motion.div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -10, filter: "blur(4px)" },
                visible: { opacity: 1, x: 0, filter: "blur(0px)" }
              }}
              className={`mt-2 ${darkMode ? "text-zinc-400" : "text-zinc-500"}`}
            >
              With a focus on <span className={`font-semibold ${darkMode ? "text-zinc-200" : "text-zinc-900"}`}>UI Design</span> & Enthusiastic about <span className={`font-semibold ${darkMode ? "text-zinc-200" : "text-zinc-900"}`}>Three.js</span>, driven by a keen eye for detail.
            </motion.div>
          </motion.div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-5">
            <button className={`flex items-center gap-2 px-6 py-3 rounded-xl border text-[15px] font-bold transition-all hover:scale-[1.02] active:scale-[0.98] ${
              darkMode 
                ? "bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800 shadow-lg shadow-black/20" 
                : "bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-50 shadow-sm"
            }`}>
              <FaFileAlt className="text-zinc-400" />
              Resume / CV
            </button>
            <a 
              href={`mailto:${email}`}
              onClick={handleCopyEmail}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-[15px] font-bold transition-all hover:scale-[1.02] active:scale-[0.98] ${
                darkMode 
                  ? "bg-white text-black hover:bg-zinc-200 shadow-lg shadow-white/5" 
                  : "bg-zinc-950 text-white hover:bg-zinc-800 shadow-xl shadow-zinc-950/20"
              }`}
            >
              <FaPaperPlane className="text-sm" />
              {copied ? "Email Copied!" : "Get in touch"}
            </a>
          </div>

          <div className={`flex flex-wrap items-center gap-6 mt-8 text-[22px] ${darkMode ? "text-zinc-600" : "text-zinc-400"}`}>
            <a href="https://www.linkedin.com/in/biswajitdas-" target="_blank" rel="noopener noreferrer" className={`transition-all hover:scale-110 ${darkMode ? "hover:text-blue-400" : "hover:text-blue-600"}`}>
              <FaLinkedin className="cursor-pointer transition-colors" />
            </a>
            <a href="https://github.com/Biswasource" target="_blank" rel="noopener noreferrer" className={`transition-all hover:scale-110 ${darkMode ? "hover:text-white" : "hover:text-black"}`}>
              <FaGithub className="cursor-pointer transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`transition-all hover:scale-110 ${darkMode ? "hover:text-pink-400" : "hover:text-pink-500"}`}>
              <FaInstagram className="cursor-pointer transition-colors" />
            </a>
            <div className="relative group">
              <a 
                href={`mailto:${email}`}
                onClick={handleCopyEmail}
                className={`transition-all hover:scale-110 block ${darkMode ? "hover:text-emerald-400" : "hover:text-emerald-600"}`}
              >
                <FaEnvelope className="cursor-pointer transition-colors" />
              </a>
              {copied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-800 text-white text-[11px] font-medium rounded-lg shadow-xl whitespace-nowrap">
                  Copied to clipboard!
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

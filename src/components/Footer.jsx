import React from "react";
import { FaEye, FaQuoteLeft } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`w-full py-20 font-['Inter',_sans-serif] ${darkMode ? "bg-black text-white" : "bg-white text-zinc-800"}`}>
      <div className="max-w-5xl mx-auto md:px-20">
        {/* Quote Section */}
        <div className={`relative p-8 md:p-12 rounded-3xl border mb-16 transition-colors ${
          darkMode 
            ? "bg-black/50 border-zinc-800" 
            : "bg-white border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        }`}>
          <div className="absolute top-6 left-8 opacity-5">
            <FaQuoteLeft size={80} />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className={`text-xl md:text-2xl font-medium italic ${darkMode ? "text-zinc-300" : "text-zinc-600"}`}>
              "A man who is master of patience is master of everything else."
            </p>
            <span className={`text-lg font-medium whitespace-nowrap ${darkMode ? "text-zinc-500" : "text-zinc-400"}`}>
              — George Savile
            </span>
          </div>
        </div>

        {/* Visitor Counter */}
        <div className="flex justify-center mb-16">
          <div className={`flex items-center gap-3 px-4 py-2 rounded-2xl border transition-colors ${
            darkMode 
              ? "bg-zinc-900/50 border-zinc-800 text-zinc-400" 
              : "bg-zinc-50 border-zinc-100 text-zinc-500 shadow-sm"
          }`}>
            <div className={`p-2 rounded-lg ${darkMode ? "bg-zinc-800" : "bg-white shadow-sm border border-zinc-100"}`}>
              <FaEye className={darkMode ? "text-zinc-300" : "text-zinc-400"} />
            </div>
            <p className="text-[15px] font-medium">
              You are the <span className={`font-bold ${darkMode ? "text-white" : "text-zinc-900"}`}>30,037th</span> visitor
            </p>
          </div>
        </div>

        {/* Attribution & Copyright */}
        <div className="text-center space-y-2">
          <p className={`text-[15px] font-medium ${darkMode ? "text-zinc-500" : "text-zinc-400"}`}>
            Design & Developed by <span className={darkMode ? "text-white" : "text-zinc-900"}>Biswajit</span>
          </p>
          <p className={`text-[13px] ${darkMode ? "text-zinc-600" : "text-zinc-400"}`}>
            © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

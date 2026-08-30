import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import {
  FaHeart,
  FaGlobe,
  FaTerminal,
  FaLightbulb,
  FaEnvelope,
  FaCode
} from "react-icons/fa";
import HorizontalDivider from "../components/HorizontalDivider";
import StripedDivider from "../components/StripedDivider";
import TopNavbar from "../components/TopNavbar";
import SearchDialog from "../components/SearchDialog";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function MyStory() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Load theme from localStorage only
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
  }, []);

  const storyTimeline = [
    {
      step: "1. The Origin & Curiosity",
      title: "Discovering Code in Cuttack, Odisha",
      content: "Growing up in Cuttack, Odisha, I was endlessly curious about how digital products worked. Writing my first HTML document and seeing it render in a web browser felt like magic. That single spark ignited a lifelong passion for computer science and software design.",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fm=jpg&q=60&w=3000&auto=format&fit=crop"
    },
    {
      step: "2. The Craft & UI Engineering",
      title: "Mastering React & Modern Web Design Systems",
      content: "I fell in love with component architecture and modern UI design. Spent thousands of hours mastering React, Tailwind CSS, JavaScript fundamentals, state management, and smooth micro-animations with Framer Motion.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?fm=jpg&q=60&w=3000&auto=format&fit=crop"
    },
    {
      step: "3. Full-Stack Expansion",
      title: "Engineering Scalable Backends with Node & Databases",
      content: "Recognizing that great user experiences require solid backend systems, I expanded into Node.js, Express, MongoDB, and Supabase. Built REST APIs, authentication services, and scalable cloud databases.",
      img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?fm=jpg&q=60&w=3000&auto=format&fit=crop"
    },
    {
      step: "4. Open-Source Milestone",
      title: "Founding UIVault & Reaching 11,000+ Developers",
      content: "Co-founded UIVault — an open-source React component library and CLI tool that crossed over 11,000+ developer users worldwide. Creating developer tools that empower others to build faster is one of my proudest achievements.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=60&w=3000&auto=format&fit=crop"
    }
  ];

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
    >
      <SEO 
        title="My Story" 
        description="Learn about the journey and experiences of Biswajit Das as a Full Stack Developer and creator."
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
            The Story of Biswajit Das — Developer, Designer & Creator
          </h1>
        </article>

        <StripedDivider darkMode={darkMode} className="opacity-70" />

        <div
          className={`w-full max-w-3xl px-4 sm:px-8 py-10 border-x min-h-screen ${darkMode ? 'border-zinc-800' : 'border-gray-200'
            }`}
        >
          {/* Body */}
          <div
            className={`prose prose-neutral max-w-none text-base font-normal leading-relaxed space-y-6 ${darkMode ? "text-gray-300" : "text-gray-800"
              }`}
          >
            <p>
              Hi! I'm <strong>Biswajit Das</strong>. Based in Cuttack, Odisha, India, I spend my days designing digital interfaces, engineering full-stack systems, and creating open-source tools for the global developer community.
            </p>

            <p>
              Whether it's crafting responsive frontend interfaces with <strong>React</strong> and <strong>Tailwind CSS</strong>, building backend API services with <strong>Node.js</strong> and <strong>MongoDB</strong>, or shipping tools like <strong>UIVault</strong>, I strive for balance between aesthetic perfection and technical craftsmanship.
            </p>

            {/* Profile Avatar Card */}
            <div className={`flex flex-col sm:flex-row items-center gap-6 p-6 my-6 rounded-2xl border ${darkMode ? "bg-zinc-900/60 border-zinc-800" : "bg-gray-50 border-gray-200"}`}>
              <img
                src="/profile.jpeg"
                alt="Biswajit Das"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 shadow-md border-zinc-700/50 flex-shrink-0"
              />
              <div className="flex-1 text-center sm:text-left">
                <h2 className={`text-xl font-semibold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Biswajit Das
                </h2>
                <p className={`text-xs mb-2 ${darkMode ? "text-zinc-400" : "text-gray-600"}`}>
                  Founder @Uivault • Backend Developer @shadcncraft • Fullstack Engineer
                </p>
                <p className="text-sm italic">
                  "I don't just write code — I build products that feel effortless to use and solid under the hood."
                </p>
              </div>
            </div>

            {/* Timeline Sections */}
            {storyTimeline.map((item, idx) => (
              <div key={idx}>
                <h2
                  className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-900"
                    }`}
                >
                  {item.step} — {item.title}
                </h2>
                <HorizontalDivider darkMode={darkMode} className="opacity-40 !my-8 !w-[100vw] relative left-1/2 -translate-x-1/2" />
                <p>{item.content}</p>

                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-2xl my-6 w-full shadow-md"
                />
              </div>
            ))}

            <h2
              className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-900"
                }`}
            >
              My Core Philosophy & Values
            </h2>
            <HorizontalDivider darkMode={darkMode} className="opacity-40 !my-8 !w-[100vw] relative left-1/2 -translate-x-1/2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className={`p-5 rounded-xl border ${darkMode ? "bg-zinc-900/40 border-zinc-800" : "bg-gray-50 border-gray-200"}`}>
                <div className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <FaHeart className="text-pink-500" /> Pixel-Perfect Design
                </div>
                <p className="text-sm">
                  UI design and code logic are inseparable. Clean typography, smooth transitions, and intuitive layouts elevate user experience.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${darkMode ? "bg-zinc-900/40 border-zinc-800" : "bg-gray-50 border-gray-200"}`}>
                <div className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <FaGlobe className="text-blue-400" /> Open Source Spirit
                </div>
                <p className="text-sm">
                  Building in public and giving back to the community is how software advances. Sharing UIVault helped thousands build faster.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${darkMode ? "bg-zinc-900/40 border-zinc-800" : "bg-gray-50 border-gray-200"}`}>
                <div className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <FaTerminal className="text-emerald-400" /> Obsessive Refactoring
                </div>
                <p className="text-sm">
                  Writing code that works is step one. Refining it into maintainable, performant, and self-documenting code is where true craftsmanship lies.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${darkMode ? "bg-zinc-900/40 border-zinc-800" : "bg-gray-50 border-gray-200"}`}>
                <div className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <FaLightbulb className="text-amber-400" /> Continuous Learning
                </div>
                <p className="text-sm">
                  Tech evolves daily. I stay curious, experimenting with new frameworks, cloud services, AI tools, and fullstack architectural patterns.
                </p>
              </div>
            </div>

            <p>
              I am always open to discussing new engineering projects, open-source collaborations, full-stack opportunities, or creative ideas.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="mailto:biswajit9348das@gmail.com"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition-all shadow-md inline-flex items-center gap-2"
              >
                <FaEnvelope /> Get In Touch
              </a>
              <Link
                to="/blog"
                className={`px-5 py-2.5 rounded-lg text-xs font-semibold border transition-all inline-flex items-center gap-2 ${darkMode ? "bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700" : "bg-white border-gray-300 text-gray-800 hover:bg-gray-100"}`}
              >
                <FaCode /> Read My Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

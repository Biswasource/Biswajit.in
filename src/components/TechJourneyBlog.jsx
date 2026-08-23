import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import HorizontalDivider from "./HorizontalDivider";
import StripedDivider from "./StripedDivider";
import TopNavbar from "./TopNavbar";
import SearchDialog from "./SearchDialog";
import Footer from "./Footer";

export default function TechJourneyBlog() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Load theme from localStorage only
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
  }, []);

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
    >
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
              to="/blog"
              className={`inline-flex items-center text-sm font-medium transition-colors ${darkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-500 hover:text-black"
                }`}
            >
              <HiArrowLeft className="mr-2 text-lg" /> Blog
            </Link>
          </div>

          {/* Title */}
          <h1
            className={`text-3xl sm:text-4xl font-normal tracking-tight leading-[1.1] mb-4 ${darkMode ? "text-white" : "text-gray-950"
              }`}
          >
            My Tech Skill Journey — From Curiosity to Full-Stack Engineering
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
              Becoming a full-stack engineer wasn't an overnight achievement — it has been a continuous journey of curiosity, problem-solving, and building real-world projects. From writing my first line of HTML to architecting cloud databases and building open-source developer tools, every phase of my learning path has shaped my approach to software engineering.
            </p>

            <p>
              Here is the story of how my technical skill set evolved, the tools I rely on today, and the key lessons I learned along the way.
            </p>

            {/* Image 1 */}
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?fm=jpg&q=60&w=3000&auto=format&fit=crop"
              alt="Developer Workspace Code"
              className="rounded-2xl my-6 w-full shadow-md"
            />

            <h2
              className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-900"
                }`}
            >
              1. The Spark — HTML, CSS & Core JavaScript
            </h2>
            <HorizontalDivider darkMode={darkMode} className="opacity-40 !my-8 !w-[100vw] relative left-1/2 -translate-x-1/2" />
            <p>
              It all started in Cuttack, Odisha, driven by curiosity about how websites work under the hood. I started with <strong>HTML5</strong>, <strong>CSS3</strong>, and plain <strong>JavaScript</strong>. Understanding how DOM elements manipulate state and how layout engines render styles gave me a rock-solid foundation.
            </p>
            <p>
              Building static web pages taught me semantic structure, responsive design, and CSS layouts (Flexbox and Grid), which are essential skills for any frontend developer.
            </p>

            {/* Image 2 */}
            <img
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?fm=jpg&q=60&w=3000&auto=format&fit=crop"
              alt="React Development Setup"
              className="rounded-2xl my-6 w-full shadow-md"
            />

            <h2
              className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-900"
                }`}
            >
              2. React & Modern UI — Embracing Components
            </h2>
            <HorizontalDivider darkMode={darkMode} className="opacity-40 !my-8 !w-[100vw] relative left-1/2 -translate-x-1/2" />
            <p>
              Moving from vanilla JavaScript to <strong>React</strong> completely transformed how I built interfaces. Component-based architecture allowed me to craft modular, re-usable UIs. Pairing React with <strong>Tailwind CSS</strong> and <strong>Framer Motion</strong> allowed me to iterate quickly while delivering micro-animations and polished design systems.
            </p>
            <p>
              During this stage, I mastered state management, hooks, component lifecycles, and performance optimizations.
            </p>

            {/* Image 3 */}
            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?fm=jpg&q=60&w=3000&auto=format&fit=crop"
              alt="Backend Code and Terminal"
              className="rounded-2xl my-6 w-full shadow-md"
            />

            <h2
              className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-900"
                }`}
            >
              3. Full-Stack Expansion — Node.js, Express & Databases
            </h2>
            <HorizontalDivider darkMode={darkMode} className="opacity-40 !my-8 !w-[100vw] relative left-1/2 -translate-x-1/2" />
            <p>
              To build complete applications, I expanded into backend development using <strong>Node.js</strong> and <strong>Express</strong>. Designing RESTful APIs, securing endpoints, handling authentication, and working with databases became second nature.
            </p>
            <p>
              For database management, I rely on <strong>MongoDB</strong> for flexible document structures and <strong>Supabase (PostgreSQL)</strong> when relational power and real-time backend functionality are needed.
            </p>

            {/* Image 4 */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=60&w=3000&auto=format&fit=crop"
              alt="Open Source Collaboration"
              className="rounded-2xl my-6 w-full shadow-md"
            />

            <h2
              className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-900"
                }`}
            >
              4. Founding UIVault & Building Developer Tools
            </h2>
            <HorizontalDivider darkMode={darkMode} className="opacity-40 !my-8 !w-[100vw] relative left-1/2 -translate-x-1/2" />
            <p>
              One of my major career milestones was co-founding <strong>UIVault</strong> — an open-source React UI component library and CLI tool that crossed over 11,000+ active developer users worldwide. Creating tools that help other developers build faster has been immensely rewarding.
            </p>
            <p>
              It pushed me to master <strong>TypeScript</strong>, publishing NPM packages, automated CLI scripts, and production design systems.
            </p>

            {/* Outro */}
            <p>
              Learning tech skills is a lifelong journey. Every project brings new challenges, whether optimizing database queries, refining component performance, or exploring new AI integrations.
            </p>

            <p>
              If you're on a similar tech journey, keep building projects in public, stay curious, and keep pushing your boundaries everyday! 🚀
            </p>
          </div>
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

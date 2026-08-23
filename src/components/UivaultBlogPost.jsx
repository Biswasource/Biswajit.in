import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import cover1 from "../../public/uivaultcover1.png";
import cover2 from "../../public/uivaultcover2.png";
import cover3 from "../../public/uivaultcover3.png";
import HorizontalDivider from "./HorizontalDivider";
import StripedDivider from "./StripedDivider";
import TopNavbar from "./TopNavbar";
import SearchDialog from "./SearchDialog";
import Footer from "./Footer";

export default function UIvaultBlogPost() {
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
            Building UIVault – A Modern React UI Component Library & CLI Tool
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
              I'm incredibly proud to share that <strong>UIvault</strong> — our open-source UI
              component library — has officially crossed <strong>11,000 active users</strong> worldwide! What began as a weekend experiment has evolved into a
              powerful developer tool, helping thousands of creators design
              modern, elegant, and accessible interfaces with ease.
            </p>

            <p>
              Built with React and Tailwind CSS, UIvault combines speed,
              flexibility, and aesthetics into one unified system. Every component
              is engineered to perfection — responsive by default, beautifully
              animated, and easy to customize. Whether it's glowing cards,
              motion-driven accordions, or sleek pricing grids, UIvault empowers
              developers to bring ideas to life in seconds.
            </p>

            {/* Image 1 */}
            <img
              src={cover1}
              alt="UIVault Dashboard"
              className="rounded-2xl my-6 w-full shadow-md"
            />

            <h2
              className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-900"
                }`}
            >
              The Vision & Team Collaboration
            </h2>
            <HorizontalDivider darkMode={darkMode} className="opacity-40 !my-8 !w-[100vw] relative left-1/2 -translate-x-1/2" />

            <p>
              Building UIvault has been one of the most rewarding journeys of my
              development career. I owe a huge part of this success to my friend{" "}
              <span className="font-semibold text-blue-500">
                Biswabhusan
              </span>
              , whose creative insights, UI sense, and constant support have
              shaped UIvault into what it is today. Every feature and component is
              a reflection of teamwork, passion, and shared curiosity for great
              design.
            </p>

            <p>
              The beauty of UIvault lies in its simplicity. Developers can start
              using it instantly with a single command:
            </p>

            <pre className={`p-4 rounded-xl font-mono text-sm overflow-x-auto border ${darkMode ? "bg-zinc-900 border-zinc-800 text-emerald-400" : "bg-gray-100 border-gray-200 text-emerald-600"}`}>
              <code>npx ui-vault@latest add card</code>
            </pre>

            <p>
              From there, choose your preferred format (JSX or TSX), select a
              theme like NeonPulse, Obsidian, or{" "}
              <span className="font-semibold text-purple-500">
                AuroraGlow
              </span>
              , and instantly import your component. UIvault automatically handles
              installation, dependencies, and styling — saving valuable
              development time while maintaining consistency and beauty across
              your project.
            </p>

            {/* Image 2 */}
            <img
              src={cover2}
              alt="UIVault CLI"
              className="rounded-2xl my-6 w-full shadow-md"
            />

            <h2
              className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-900"
                }`}
            >
              Passing Milestones & Looking Ahead
            </h2>
            <HorizontalDivider darkMode={darkMode} className="opacity-40 !my-8 !w-[100vw] relative left-1/2 -translate-x-1/2" />

            <p>
              Reaching 11K users isn't just a milestone — it's proof that the
              developer community values accessible design systems that respect
              both performance and creativity. Seeing UIvault components power
              real-world projects — from portfolios and startups to production
              dashboards — is an achievement we'll always be proud of.
            </p>

            <p>
              And we're just getting started. Our upcoming updates include{" "}
              <strong>AI-powered component recommendations</strong>,{" "}
              <strong>real-time theme previews</strong>,{" "}
              <strong>Next.js + Vite native support</strong>, and even a{" "}
              <strong>live playground for instant visual testing</strong>. We want UIvault to be the most seamless, developer-centric UI
              toolkit on the web — where creativity meets simplicity.
            </p>

            {/* Image 3 */}
            <img
              src={cover3}
              alt="UIVault Components"
              className="rounded-2xl my-6 w-full shadow-md"
            />

            <p>
              If you haven't tried UIvault yet, visit{" "}
              <a
                href="https://uivault.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-semibold"
              >
                uivault.in
              </a>{" "}
              to explore the collection. Each component is
              open-source, themeable, and designed to adapt to your workflow —
              whether you're building a startup app, a dashboard, or your personal
              portfolio.
            </p>

            <p>
              I want to extend my heartfelt thanks to everyone who has starred,
              shared, and supported UIvault's journey — and especially to{" "}
              <span className="font-semibold text-blue-500">
                Biswabhusan
              </span>{" "}
              for being an incredible collaborator, motivator, and friend
              throughout this adventure.
            </p>

            <p>
              Here's to the next milestone —{" "}
              <strong>100,000 developers using UIvault</strong> to build faster, smarter, and more beautiful web experiences. 🚀
            </p>
          </div>
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

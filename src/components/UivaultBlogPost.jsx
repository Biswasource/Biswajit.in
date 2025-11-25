import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import cover1 from "../../public/uivaultcover1.png";
import cover2 from "../../public/uivaultcover2.png";
import cover3 from "../../public/uivaultcover3.png";

export default function UIvaultBlogPost() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkmode");
    setIsDark(darkMode === "true");
  }, []);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors mb-8"
          >
            ← Blog
          </Link>

          {/* Title */}
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6 leading-tight">
            Building UIVault – A Modern React UI Component Library & CLI Tool
          </h1>

          {/* Body */}
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I'm incredibly proud to share that UIvault — our open-source UI
            component library — has officially crossed 11,000 active users
            worldwide! What began as a weekend experiment has evolved into a
            powerful developer tool, helping thousands of creators design
            modern, elegant, and accessible interfaces with ease.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Built with React and Tailwind CSS, UIvault combines speed,
            flexibility, and aesthetics into one unified system. Every component
            is engineered to perfection — responsive by default, beautifully
            animated, and easy to customize. Whether it's glowing cards,
            motion-driven accordions, or sleek pricing grids, UIvault empowers
            developers to bring ideas to life in seconds.
          </p>

          {/* First Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 border border-gray-200 dark:border-gray-700">
            <img
              src={cover1}
              alt="UIVault Dashboard"
              className="w-full h-auto"
            />
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Building UIvault has been one of the most rewarding journeys of my
            development career. I owe a huge part of this success to my friend{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Biswabhusan
            </span>
            , whose creative insights, UI sense, and constant support have
            shaped UIvault into what it is today. Every feature and component is
            a reflection of teamwork, passion, and shared curiosity for great
            design.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The beauty of UIvault lies in its simplicity. Developers can start
            using it instantly with a single command:
          </p>

          <pre className="bg-gray-900 dark:bg-black text-green-400 dark:text-green-300 p-6 rounded-xl mb-8 overflow-x-auto shadow-lg border border-gray-700 dark:border-gray-600">
            <code>npx ui-vault@latest add card</code>
          </pre>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            From there, choose your preferred format (JSX or TSX), select a
            theme like NeonPulse, Obsidian, or{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              AuroraGlow
            </span>
            , and instantly import your component. UIvault automatically handles
            installation, dependencies, and styling — saving valuable
            development time while maintaining consistency and beauty across
            your project.
          </p>

          {/* Second Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 border border-gray-200 dark:border-gray-700">
            <img src={cover2} alt="UIVault CLI" className="w-full h-auto" />
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Reaching 11K users isn't just a milestone — it's proof that the
            developer community values accessible design systems that respect
            both performance and creativity. Seeing UIvault components power
            real-world projects — from portfolios and startups to production
            dashboards — is an achievement we'll always be proud of.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            And we're just getting started. Our upcoming updates include{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              AI-powered component recommendations
            </span>
            ,{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              real-time theme previews
            </span>
            ,{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Next.js + Vite native support
            </span>
            , and even a{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              live playground for instant visual testing
            </span>
            . We want UIvault to be the most seamless, developer-centric UI
            toolkit on the web — where creativity meets simplicity.
          </p>

          {/* Third Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 border border-gray-200 dark:border-gray-700">
            <img
              src={cover3}
              alt="UIVault Components"
              className="w-full h-auto"
            />
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            If you haven't tried UIvault yet, visit href="https://uivault.in"
            target="_blank" rel="noopener noreferrer" className="text-indigo-600
            dark:text-indigo-400 hover:underline font-semibold"
            <a>uivault.in</a> to explore the collection. Each component is
            open-source, themeable, and designed to adapt to your workflow —
            whether you're building a startup app, a dashboard, or your personal
            portfolio.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I want to extend my heartfelt thanks to everyone who has starred,
            shared, and supported UIvault's journey — and especially to{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Biswabhusan
            </span>{" "}
            for being an incredible collaborator, motivator, and friend
            throughout this adventure.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Here's to the next milestone —{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              100,000 developers using UIvault
            </span>{" "}
            to build faster, smarter, and more beautiful web experiences. 🚀
          </p>
        </div>
      </div>
    </div>
  );
}

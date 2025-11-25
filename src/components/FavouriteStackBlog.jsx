import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import shadcn from "../../public/favstackcover1.png";
import reacticon from "../../public/favstackcover2.png";
import supabse from "../../public/supabse.png";
import motion from "../../public/motion.png";
import mongodb from "../../public/mongodb.png";

export default function FavStackBlogPost() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage only
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
  }, []);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Header */}
      <header
        className={`flex justify-center border-b ${
          darkMode ? "border-zinc-700" : "border-zinc-200"
        } sticky top-0 z-50 ${darkMode ? "bg-black" : "bg-white"}`}
      >
        <div className="flex items-center justify-center w-full max-w-3xl py-3 px-4 sm:py-4 sm:px-8">
          <Link
            to="/"
            className={`font-bold text-2xl tracking-tight sm:text-3xl ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            BD
          </Link>
        </div>
      </header>

      <div className="flex justify-center px-4 py-12">
        <article className="max-w-3xl w-full">
          {/* Back link */}
          <div className="mb-6">
            <Link
              to="/blog"
              className={`inline-flex items-center transition-colors ${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <span className="mr-1">←</span> Blog
            </Link>
          </div>

          {/* Title */}
          <h1
            className={`text-4xl font-bold mb-4 leading-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My Favorite Developer Stack — Shadcn, Framer Motion & MongoDB
          </h1>

          {/* Body */}
          <div
            className={`prose prose-neutral max-w-none text-sm title space-y-6 ${
              darkMode ? "text-gray-300" : "text-black"
            }`}
          >
            <p>
              Over the past year of building modern web apps, I've discovered a
              perfect combination of tools that make both design and development
              an absolute joy. Whether I'm working on a dashboard, a test
              portal, or a portfolio — the combination of{" "}
              <strong>Shadcn/UI</strong>, <strong>Framer Motion</strong>,{" "}
              <strong>React Icons</strong>, and backends like{" "}
              <strong>MongoDB</strong> and <strong>Supabase</strong> has become
              my go-to tech stack.
            </p>

            <p>
              These tools help me create UIs that not only look great but feel
              natural, smooth, and interactive — while also being easy to
              maintain. Let's dive into why I love each part of this stack.
            </p>

            {/* Image 1 */}
            <img
              src={shadcn}
              alt="Shadcn UI Components"
              className="rounded-2xl my-6 w-full shadow-md"
            />

            <h2
              className={`text-xl font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              1. Shadcn/UI — The Modern UI Foundation
            </h2>
            <p>
              <strong>Shadcn/UI</strong> has completely changed how I build user
              interfaces. It's built on top of <strong>Radix UI</strong> and{" "}
              <strong>Tailwind CSS</strong>, which means everything is
              accessible, flexible, and developer-friendly. The best part is
              that the components are <em>copied into your project</em>, giving
              full control and no dependency lock-ins.
            </p>
            <p>
              From buttons and dialogs to dropdowns and cards — Shadcn offers
              everything I need for a clean, professional design system.
              Combined with Tailwind's utility classes, I can create consistent
              UI faster than ever.
            </p>

            {/* Image 2 */}
            <img
              src={motion}
              alt="Framer Motion Animations"
              className="rounded-2xl my-6 w-full shadow-md"
            />

            <h2
              className={`text-xl font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              2. Framer Motion — Bringing Life to Components
            </h2>
            <p>
              I can't imagine UI without <strong>Framer Motion</strong>. It's
              the secret ingredient that adds soul to my interfaces. With a few
              lines of code, I can create smooth transitions,
              micro-interactions, and page animations that make the app feel
              dynamic and alive.
            </p>
            <p>
              The best thing is how well it blends with React. Whether it's a
              card fade-in, a sliding modal, or a glowing hover effect — Motion
              makes everything feel intuitive and elegant.
            </p>

            {/* Image 3 */}
            <img
              src={reacticon}
              alt="React Icons Showcase"
              className="rounded-2xl my-6 w-full shadow-md"
            />

            <h2
              className={`text-xl font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              3. React Icons — Simple Yet Powerful
            </h2>
            <p>
              I use <strong>React Icons</strong> in almost every project. It's
              the easiest way to include icons from popular sets like{" "}
              <strong>Font Awesome</strong>, <strong>Feather</strong>,{" "}
              <strong>Lucide</strong>, and more — all within React components.
              Icons play a major role in UI clarity, and this library keeps my
              workflow efficient.
            </p>

            {/* Image 4 */}
            <img
              src={mongodb}
              alt="MongoDB Dashboard"
              className="rounded-2xl my-6 w-full shadow-md"
            />

            <h2
              className={`text-xl font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              4. MongoDB — The Scalable Backend Engine
            </h2>
            <p>
              <strong>MongoDB</strong> has become my favorite choice for
              handling backend data. It's fast, flexible, and document-based —
              which means I can structure my data in a way that matches
              real-world applications. With <strong>MongoDB Atlas</strong>, I
              can host and scale databases in the cloud without worrying about
              setup or maintenance.
            </p>
            <p>
              I usually connect MongoDB to my React apps through an Express or
              Next.js API route, allowing me to build full-stack applications
              that feel seamless and efficient.
            </p>

            {/* Image 5 */}
            <img
              src={supabse}
              alt="Supabase Dashboard"
              className="rounded-2xl my-6 w-full shadow-md"
            />

            <h2
              className={`text-xl font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              5. Supabase — The Open-Source Powerhouse
            </h2>
            <p>
              When I need more control or SQL power, I switch to{" "}
              <strong>Supabase</strong>. It's like Firebase but open-source,
              with a PostgreSQL database, authentication, file storage, and API
              built in. The dashboard is clean, the setup is fast, and the
              developer experience is excellent.
            </p>

            <p>
              It integrates perfectly with React and Next.js, making it ideal
              for projects that might grow into something big later.
            </p>

            {/* Outro */}
            <p>
              These tools together make my workflow smooth, fast, and scalable.
              I can focus on design and logic — not fighting with configuration.
              Whether I'm building personal projects or client work, this stack
              gives me everything I need to bring ideas to life beautifully.
            </p>

            <p>
              If you're starting a new React project, I highly recommend trying
              this combination. It's modern, modular, and built for speed.
            </p>

            <p>
              Here's to crafting smooth UIs, fluid motion, and rock-solid
              backends — all powered by tools that truly inspire developers like
              me. 🚀
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

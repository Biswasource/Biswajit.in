import React from "react";
import HorizontalDivider from "../components/HorizontalDivider";
import ExpressLogo from "../../public/express-svgrepo-com.svg";
import JavaScript from "../../public/javascript-svgrepo-com.svg";
import MongoDB from "../../public/mongo-svgrepo-com.svg";
import Nodejs from "../../public/nodejs-svgrepo-com.svg";
import pgsql from "../../public/pgsql-svgrepo-com.svg";
import python from "../../public/python-svgrepo-com.svg";
import react from "../../public/react-svgrepo-com.svg";
import redux from "../../public/redux-svgrepo-com.svg";
import tailwind from "../../public/tailwind-svgrepo-com.svg";
import typescript from "../../public/typescript-logo-svgrepo-com.svg";
import shadcn from "../../public/shadcn-ui-light.svg";
import radix from "../../public/radixui-light.svg";
import motion from "../../public/motion.svg";
import reactrouter from "../../public/react-router-light.svg";
import git from "../../public/git.svg";
import StripedDivider from "../components/StripedDivider";

const categories = [
  {
    number: "01",
    label: "Languages",
    items: [
      { src: typescript, name: "TypeScript" },
      { src: JavaScript, name: "JavaScript" },
      { src: python, name: "Python" },
    ],
  },
  {
    number: "02",
    label: "Frontend",
    items: [
      { src: react, name: "React" },
      { src: tailwind, name: "Tailwind CSS" },
      { src: shadcn, name: "shadcn/ui" },
      { src: radix, name: "Radix UI" },
      { src: motion, name: "Motion" },
      { src: redux, name: "Redux" },
      { src: reactrouter, name: "React Router" },
    ],
  },
  {
    number: "03",
    label: "Backend & Database",
    items: [
      { src: Nodejs, name: "Node.js" },
      { src: ExpressLogo, name: "Express" },
      { src: pgsql, name: "PostgreSQL" },
      { src: MongoDB, name: "MongoDB" },
    ],
  },
  {
    number: "04",
    label: "Workflow & AI",
    items: [
      { src: "https://cdn.simpleicons.org/cursor", name: "Cursor" },
      { src: "https://cdn.simpleicons.org/anthropic", name: "Claude" },
      { src: "https://cdn.simpleicons.org/googlegemini", name: "Gemini" },
      { src: "https://cdn.simpleicons.org/chatgpt", name: "ChatGPT" },
      { src: git, name: "Git" },
      { src: "https://cdn.simpleicons.org/github", name: "GitHub" },
      { src: "https://cdn.simpleicons.org/docker", name: "Docker" },
      { src: "https://cdn.simpleicons.org/vercel", name: "Vercel" },
    ],
  },
];

const Tag = ({ src, name, darkMode }) => (
  <div className="relative group/tag inline-flex">
    <span
      className={`title inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[12px] font-mono transition-all duration-300 cursor-default ${darkMode
        ? "bg-zinc-900/50 hover:bg-zinc-800 border-zinc-800 text-zinc-300"
        : "bg-white hover:bg-gray-50 border-gray-200 text-zinc-600 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
        }`}
    >
      <img src={src} alt={name} className={`w-3.5 h-3.5 object-contain grayscale opacity-70 transition-transform duration-300 group-hover/tag:scale-110 ${darkMode ? "invert" : ""}`} />
      <p className={darkMode ? "text-zinc-300" : "text-zinc-700"}>{name}</p>
    </span>

    {/* Animated Tooltip */}
    <div className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 text-[11px] font-medium font-sans rounded-md opacity-0 invisible group-hover/tag:opacity-100 group-hover/tag:visible transition-all duration-300 transform translate-y-1 group-hover/tag:translate-y-0 ${darkMode ? "bg-zinc-200 text-zinc-900" : "bg-zinc-800 text-white"} shadow-xl pointer-events-none whitespace-nowrap z-50`}>
      {name}
      {/* Tooltip Arrow */}
      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent ${darkMode ? "border-t-zinc-200" : "border-t-zinc-800"}`}></div>
    </div>
  </div>
);

function StackSection({ darkMode }) {
  return (

    <>
      <div className="w-full px-4 sm:px-6 flex justify-center">
        <section className={`title w-full max-w-3xl border-l border-r ${darkMode ? 'border-zinc-800 bg-black' : 'border-gray-200 bg-white'} py-4 relative`}>
          <h2 className={`text-3xl font-bold pb-2 px-4 sm:px-8 md:px-10 cl ${darkMode ? "text-white" : "text-black"}`}>
            Stack
          </h2>
          <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
            <HorizontalDivider darkMode={darkMode} className="w-full" />
          </div>

          <div className={`divide-y ${darkMode ? "divide-zinc-800" : "divide-gray-100"}`}>
            {categories.map((cat) => (
              <div
                key={cat.number}
                className="flex flex-col sm:flex-row sm:items-stretch group"
              >
                <div className={`flex items-center sm:items-start gap-3 sm:w-[200px] md:w-[240px] flex-shrink-0 py-3 sm:py-6 px-4 sm:pl-8 md:pl-10 sm:pr-6`}>
                  <span className={`text-[13px] font-mono mt-1 ${darkMode ? "text-zinc-500" : "text-zinc-400"}`}>
                    {cat.number}
                  </span>
                  <span className={`text-[15px] font-medium ${darkMode ? "text-zinc-200" : "text-zinc-600"}`}>
                    {cat.label}
                  </span>
                </div>

                <div className={`flex flex-wrap items-center gap-2.5 py-5 sm:py-4 px-4 sm:pr-8 md:pr-10 sm:pl-8 sm:border-l border-dotted transition-colors ${darkMode ? "border-zinc-800 group-hover:border-zinc-700" : "border-gray-200 group-hover:border-gray-300"} flex-grow`}>
                  {cat.items.map((item) => (
                    <Tag key={item.name} src={item.src} name={item.name} darkMode={darkMode} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <StripedDivider darkMode={darkMode} height="h-8" className="w-full" />
    </>
  );
}

export default StackSection;
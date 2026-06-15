import React from "react";
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
    label: "Dev Tools",
    items: [
      { src: git, name: "Git" },
    ],
  },
];

const Tag = ({ src, name, darkMode }) => (
  <span
    className={`title inline-flex items-center gap-2 px-3 py-1 rounded-lg border text-[13px] font-mono ${darkMode
      ? "bg-zinc-900 text-zinc-300"
      : "bg-white border-zinc-200 text-zinc-700"
      }`}
  >
    <img src={src} alt={name} className="w-4 h-4 object-contain" />
    {name}
  </span>
);

function StackSection({ darkMode }) {
  return (
    <section className="title w-full flex flex-col items-center py-2 px-4 relative">
      <div className="w-full max-w-3xl">
        <h2 className={`text-3xl font-bold mb-2 ${darkMode ? "text-white" : "text-black"}`}>
          Stack
        </h2>

        <div className={`divide-y ${darkMode ? "" : ""}`}>
          {categories.map((cat) => (
            <div
              key={cat.number}
              className="flex flex-col sm:flex-row sm:items-start gap-3 py-5"
            >
              <div className="flex items-baseline gap-2 sm:w-48 flex-shrink-0">
                <span className={`text-sm font-mono ${darkMode ? "text-zinc-600" : "text-zinc-400"} title`}>
                  {cat.number}
                </span>
                <span className={`title text-base font-medium ${darkMode ? "text-zinc-200" : "text-zinc-800"} title`}>
                  {cat.label}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5 title">
                {cat.items.map((item) => (
                  <Tag key={item.name} src={item.src} name={item.name} darkMode={darkMode} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StackSection;
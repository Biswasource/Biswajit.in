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

    <>
      <div className="w-full px-4 sm:px-6 flex justify-center">
        <section className={`title w-full max-w-3xl border-l border-r ${darkMode ? 'border-zinc-800 bg-black' : 'border-gray-300 bg-white'} py-4 px-4 sm:px-8 md:px-10 relative`}>
          <h2 className={`text-3xl font-bold pb-2 cl ${darkMode ? "text-white" : "text-black"}`}>
            Stack
          </h2>
          <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
            <HorizontalDivider darkMode={darkMode} className="w-full" />
          </div>

          <div className={`divide-y ${darkMode ? "divide-zinc-800" : "divide-gray-200"} -mx-4 sm:-mx-8 md:-mx-10`}>
            {categories.map((cat) => (
              <div
                key={cat.number}
                className="flex flex-col sm:flex-row sm:items-start gap-3 py-5 px-4 sm:px-8 md:px-10"
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
        </section>
      </div>
      <StripedDivider darkMode={darkMode} height="h-8" className="w-full" />
    </>
  );
}

export default StackSection;
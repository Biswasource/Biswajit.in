import React from "react";
import { motion } from "framer-motion";
import StripedDivider from "../components/StripedDivider";
import HorizontalDivider from "../components/HorizontalDivider";

const socials = [
  {
    name: "LinkedIn",
    user: "Biswajit Das",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    link: "https://www.linkedin.com/in/biswajitdas-/",
  },
  {
    name: "GitHub",
    user: "Biswajit Das",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    link: "https://github.com/Biswasource",
  },
  {
    name: "X (Formerly Twitter)",
    user: "@iamBiswajit Das",
    img: "./x.jpg",
    link: "https://x.com/biswajitdev__?t=P94YUBngydnimj-ph9F7XQ&s=08",
  },
  {
    name: "Discord",
    user: "Quaric",
    img: "./discord.svg",
    link: "https://discord.gg/meqG28Xu",
  },
];

const AboutSocialLinks = ({ darkMode }) => {
  const blurVariant = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, delay: i * 0.03 },
    }),
  };

  const paragraphs = [
    <>
      Hello, World! I am <span className="font-semibold">Biswajit Das</span> — a
      Full-Stack Developer passionate about crafting scalable, high-performance,
      and user-focused web applications with modern, intuitive design and clean
      architecture.
      With deep experience in the{" "}
      <span
        className={`font-semibold ${darkMode ? "text-white" : "text-black"}`}
      >
        MERN stack
      </span>

    </>,

    <>
      I’m also passionate about open-source development and UI engineering,
      currently building{" "}
      <a
        href="#"
        className={`font-semibold underline underline-offset-3 ${darkMode ? "text-white" : "text-black"
          }`}
      >
        ui-vault
      </a>{" "}
      — a CLI for developers to quickly add themed React components with
      IntelliSense support. I’ve also published{" "}
      <a
        href="#"
        className={`font-semibold underline underline-offset-3 ${darkMode ? "text-white" : "text-black"
          }`}
      >
        mvcset
      </a>
      , an npm package that simplifies scalable MVC architecture setup for
      Node.js projects.
    </>,
    <>Let’s connect and collaborate !</>,
  ];

  return (
    <>
      <StripedDivider darkMode={darkMode} height="h-8" className="w-full" />
      <div
        className={`flex justify-center items-center px-2 sm:px-2  relative`}
      >
        <div
          id="about"
          className={`w-full max-w-3xl border-l border-r ${darkMode ? "bg-black text-gray-200 border-zinc-800" : "bg-white text-gray-900 border-gray-300"
            }  sm:px-4 md:px-2 flex flex-col md:flex-row items-center gap-6 md:gap-2`}
        >
          {/* Social Links Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x rounded-xl overflow-hidden cursor-pointer cl`}
          >

          </div>

          {/* About Section */}
          <div className="">
            <motion.h2
              className={`text-3xl px-3 sm:text-4xl font-extrabold tracking-tight title ${darkMode
                ? "bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                : "bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600"
                }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={0}
              variants={blurVariant}
            >
              About
            </motion.h2>

            <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
              <HorizontalDivider darkMode={darkMode} className="w-full" />
            </div>
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                className={`md:p-2 px-3 mt-6 sm:p-1  leading-relaxed  text-sm sm:text-sm title ${darkMode
                  ? "text-gray-200"
                  : i === 0
                    ? "text-black"
                    : "text-gray-900"
                  }`}
                style={{ color: darkMode ? "#e5e7eb" : undefined }} // optional override
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                custom={i + 1}
                variants={blurVariant}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      <StripedDivider darkMode={darkMode} height="h-8" className="w-full" />
    </>
  );
};

export default AboutSocialLinks;

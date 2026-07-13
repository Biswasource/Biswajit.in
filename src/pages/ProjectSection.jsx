import React, { useState } from "react";
import { FaFolderOpen, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import HorizontalDivider from "../components/HorizontalDivider";
import StripedDivider from "../components/StripedDivider";

export default function ProjectSection({ darkMode }) {
  const [expandedIdxs, setExpandedIdxs] = useState([0, 1, 2, 3]);
  const [visibleCount, setVisibleCount] = useState(3);

  const toggleAccordion = (idx) => {
    if (expandedIdxs.includes(idx)) {
      setExpandedIdxs(expandedIdxs.filter((i) => i !== idx));
    } else {
      setExpandedIdxs([...expandedIdxs, idx]);
    }
  };
  const projects = [
    {
      name: "UIvault",
      logo: "./logo.png",
      duration: "06.2025 — Present",
      description: [
        "Developed a comprehensive React UI component library that supports multiple themes, including dark, light, and custom variations.",
        "Implemented a flexible theming system with JSX & TSX support, allowing developers to import components seamlessly in any project.",
        "Created a CLI tool to add and scaffold components dynamically, improving development efficiency.",
        "Documented the library with examples and usage guides, making onboarding simple for new developers.",
      ],
      tags: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "UI Library",
        "CLI Tool",
        "Responsive Design",
        "Accessibility",
      ],
      links: [
        {
          icon: <FaGithub />,
          url: "https://github.com/yourrepo/uivault",
          tooltip: "GitHub",
        },
        {
          icon: <FaExternalLinkAlt />,
          url: "https://uivault.dev",
          tooltip: "Live Demo",
        },
      ],
    },
    {
      name: "WebbyAI",
      logo: "./simplamo.webp",
      duration: "05.2025 — 06.2025",
      description: [
        "Built an AI-powered website builder that leverages GPT-based suggestions for layout, design, and content creation.",
        "Integrated real-time project deployment and version control to allow seamless updates and edits.",
        "Ensured secure backend architecture with MERN stack, including authentication, database management, and API endpoints.",
      ],
      tags: [
        "React.js",
        "Node.js",
        "MongoDB",
        "AI Integration",
        "Tailwind CSS",
        "Collaboration",
        "Real-time Deployment",
      ],
      links: [
        {
          icon: <FaGithub />,
          url: "https://github.com/yourrepo/uivault",
          tooltip: "GitHub",
        },
        {
          icon: <FaExternalLinkAlt />,
          url: "https://uivault.dev",
          tooltip: "Live Demo",
        },
      ],
    },
    {
      name: "Code Saver",
      logo: "./quaricdotcom.svg",
      duration: "04.2025 — 05.2025",
      description: [
        "Developed a full-featured code snippet manager for developers to save, organize, and share code efficiently.",
        "Implemented syntax highlighting, categorization, and tagging of snippets for quick retrieval.",
        "Created public and private sharing options with commenting and collaboration capabilities.",
        "Optimized for performance with lazy loading and efficient database queries to handle large snippet collections.",
      ],
      tags: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Code Editor",
        "Real-time Editing",
        "Collaboration",
      ],
      links: [
        {
          icon: <FaGithub />,
          url: "https://github.com/yourrepo/uivault",
          tooltip: "GitHub",
        },
        {
          icon: <FaExternalLinkAlt />,
          url: "https://uivault.dev",
          tooltip: "Live Demo",
        },
      ],
    },
    {
      name: "MVC Set NPM Package",
      logo: "https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3ihn9bj79g3iyv96c38b.png",
      duration: "03.2025 — 04.2025",
      description: [
        "Developed a reusable NPM package providing a structured MVC setup for Node.js projects.",
        "Streamlined project bootstrapping with pre-built controllers, models, and routing templates.",
        "Included built-in middleware templates for authentication, logging, and error handling.",
        "Simplified deployment and scaling of Node.js projects by enforcing best practices and project structure.",
      ],
      tags: [
        "Node.js",
        "NPM",
        "MERN Stack",
        "MongoDB",
        "PostgreSQL",
        "Project Scaffolding",
        "Middleware",
      ],
      links: [
        {
          icon: <FaGithub />,
          url: "https://github.com/yourrepo/uivault",
          tooltip: "GitHub",
        },
        {
          icon: <FaExternalLinkAlt />,
          url: "https://uivault.dev",
          tooltip: "Live Demo",
        },
      ],
    },
  ];

  const scrollVariant = {
    hidden: { opacity: 0, y: 10, filter: "blur(7px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };
  const listVariant = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className="w-full px-4 sm:px-6 flex justify-center">
        <motion.section
          id="projects"
          layout
          transition={{ duration: 0.5, type: "spring", bounce: 0 }}
          className={`w-full max-w-3xl border-l border-r ${darkMode ? "bg-black text-gray-200 border-zinc-800" : "bg-white text-gray-900 border-gray-300"
            }  px-4 sm:px-4 md:px-4 relative`}
        >
          <h1 className="text-3xl font-bold cl">
            Projects
          </h1>
          <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
            <HorizontalDivider darkMode={darkMode} className="w-full" />
          </div>

          <AnimatePresence>
            {projects.slice(0, visibleCount).map((proj, idx) => {
              const isExpanded = expandedIdxs.includes(idx);
              return (
                <motion.div
                  key={proj.name}
                  layout
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                <motion.div
                  className={`py-3 px-0 rounded-md transition-shadow duration-300 flex flex-col md:py-4`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={scrollVariant}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-2 mt-1">
                    <div
                      className={`flex justify-between items-center w-full rounded-md cursor-pointer ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                        }`}
                      onClick={() => toggleAccordion(idx)}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={proj.logo}
                          className="h-9 w-9 rounded-full mt-1"
                          alt={proj.name}
                        />
                        <div>
                          <h2
                            className={`text-[17.5px] font-bold ${darkMode ? "text-gray-100" : "text-gray-900"
                              } cl`}
                          >
                            {proj.name}
                          </h2>
                          <p
                            className={`text-sm title ${darkMode ? "text-gray-300" : "text-gray-600"
                              }`}
                          >
                            {proj.duration}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                          {proj.links?.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative group text-xl"
                            >
                              <span
                                className={`${darkMode
                                  ? "text-gray-300 hover:text-gray-100"
                                  : "text-gray-600 hover:text-black"
                                  } transition-colors`}
                              >
                                {link.icon}
                              </span>
                              <span className="absolute bottom-full mb-2 hidden group-hover:flex bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-lg">
                                {link.tooltip}
                              </span>
                            </a>
                          ))}
                        </div>

                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {isExpanded ? (
                            <FiChevronUp size={20} />
                          ) : (
                            <FiChevronDown size={20} />
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Section */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden ml-2"
                      >
                        <motion.ul
                          className={`space-y-2 text-sm title mt-2 ${darkMode ? "text-gray-300" : "text-gray-800"
                            }`}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                          }}
                        >
                          {proj.description.map((desc, i) => (
                            <motion.li
                              key={i}
                              variants={listVariant}
                              transition={{ duration: 0.1, ease: "easeOut" }}
                              className="leading-relaxed opacity-90"
                            >
                              • {desc}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tags (Always Visible) */}
                  <div className="flex flex-wrap gap-2 mt-5 ml-2 text-xs pb-3">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-0.5 rounded-full border text-[11px] md:text-xs title ${darkMode
                          ? "bg-gray-800 border-gray-700 text-gray-200"
                          : "bg-gray-100 border-gray-300 text-gray-800"
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
                <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
                  <HorizontalDivider darkMode={darkMode} className="w-full" />
                </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {projects.length > visibleCount && (
            <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mt-6 mb-2">
              <button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                  darkMode
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Show More Projects
              </button>
            </motion.div>
          )}
          {projects.length <= visibleCount && projects.length > 3 && (
            <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mt-6 mb-2">
              <button
                onClick={() => setVisibleCount(3)}
                className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                  darkMode
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Show Less
              </button>
            </motion.div>
          )}
        </motion.section>
      </div>
      <StripedDivider darkMode={darkMode} height="h-8" className="w-full" />
    </>
  );
}

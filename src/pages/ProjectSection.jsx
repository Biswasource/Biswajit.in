import { useState } from "react";
import { FaFolderOpen, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectSection({ darkMode }) {
  const [expandedIdxs, setExpandedIdxs] = useState([0, 1, 2, 3]);

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
    <div
      className={`${
        darkMode ? "bg-black text-gray-200" : "bg-white text-gray-900"
      } min-h-screen md:px-6 relative`}
    >
      <div
        className={`max-w-3xl w-full mx-auto rounded-md ${
          darkMode ? "bg-black" : "bg-white"
        } p-4`}
      >
        <h1
          className={`text-3xl font-bold  ${
            darkMode ? "text-gray-100" : "text-gray-900"
          } cl`}
        >
          Projects
        </h1>

        {projects.map((proj, idx) => {
          const isExpanded = expandedIdxs.includes(idx);
          return (
            <motion.div
              key={idx}
              className={`p-3 rounded-md transition-shadow duration-300 flex flex-col border-b md:py-4 ${
                darkMode ? "border-gray-700" : "border-gray-300 "
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={scrollVariant}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mt-2">
                <div
                  className={`flex justify-between items-center w-full py-2 px-2 rounded-md cursor-pointer ${
                    darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
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
                        className={`text-[17.5px] font-bold ${
                          darkMode ? "text-gray-100" : "text-gray-900"
                        } cl`}
                      >
                        {proj.name}
                      </h2>
                      <p
                        className={`text-sm title ${
                          darkMode ? "text-gray-300" : "text-gray-600"
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
                            className={`${
                              darkMode
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
                    className="overflow-hidden mt-4 ml-6"
                  >
                    <motion.ul
                      className={`space-y-2 text-sm title ${
                        darkMode ? "text-gray-300" : "text-gray-800"
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
                        >
                          • {desc}
                        </motion.li>
                      ))}
                    </motion.ul>

                    <div className="flex flex-wrap gap-2 mt-6 text-xs">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full border text-xs md:text-sm title ${
                            darkMode
                              ? "bg-gray-800 border-gray-700 text-gray-200"
                              : "bg-gray-100 border-gray-300 text-gray-800"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

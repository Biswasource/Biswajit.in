import { useState } from "react";
import { FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function EducationSection({ darkMode }) {
  const [expandedIdxs, setExpandedIdxs] = useState([0, 1, 2]); // initially expanded

  const toggleAccordion = (idx) => {
    if (expandedIdxs.includes(idx)) {
      setExpandedIdxs(expandedIdxs.filter((i) => i !== idx));
    } else {
      setExpandedIdxs([...expandedIdxs, idx]);
    }
  };

  const education = [
    {
      year: "2026 (Expected)",
      degree: "BCA – Lakhsya Institute of Technology",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVCi0cIbHNn5USlQOPrA0AK0O_hMFCTyOVg&s", // optional logo
      description: [
        "Completed full-stack projects using MERN stack. 💻",
        "Built a real-time Student Management System with automated reports. 🧠",
        "Explore new technologies every day to grow consistently. 🚀",
        "Freelanced for coaching center websites using modern stacks. 🧑‍💼",
        "Started building a personal UI component library and CLI tools. 🧩",
      ],
      tags: ["MERN Stack", "Firebase", "TypeScript", "React Native", "Next.js"],
    },
    {
      year: "2022",
      degree: "12th – Stewart Science College, Cuttack",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRETla9juCXBUTQbjasro9lCkMCqPGP8MJ97dXSWm8FsphQtqzV5CggiZbiKarWt5MfQkc&usqp=CAU",
      description: [
        "Stream: Science (Mathematics, Physics, Biology). 📚",
        "Expected first prize in academic excellence. 🎖️",
        "Participated in long jump and shuttle run events. 🏃‍♂️",
      ],
      tags: ["Mathematics", "Physics", "Biology", "Sports"],
    },
    {
      year: "2020",
      degree: "10th – Saraswati Sishu Vidya Mandir",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIJwKqpInw1k28npeTKvm1jPizH8nI4Y59Q&s",
      description: [
        "Achieved distinction in all subjects (75%+). 🏅",
        "Secured 1st position in inter-school math quizzes. 🥇",
        "Participated in science exhibition with a logic gates simulation project. 🔬",
        "Won long jump and recognized as a sports athlete. 👟",
      ],
      tags: ["Mathematics", "Science", "Sports"],
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "text-white" : "text-gray-900"
      } px-6 relative mt-3`}
    >
      <div className="max-w-3xl w-full mx-auto mt-4">
        <h1
          className={`text-3xl font-bold mt-5 cl ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Education
        </h1>

        {education.map((edu, idx) => {
          const isExpanded = expandedIdxs.includes(idx);
          return (
            <div
              key={idx}
              className={`p-3 rounded-md transition-shadow border-b-1 duration-300 flex flex-col ${
                darkMode
                  ? "text-white border-zinc-700"
                  : "text-gray-900 border-gray-400"
              }`}
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
                    {edu.logo && (
                      <img
                        src={edu.logo}
                        className="h-9 w-9 rounded-full mt-1"
                        alt={edu.degree}
                      />
                    )}
                    <div>
                      <h2
                        className={`text-[17.5px] font-bold cl ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {edu.degree}
                      </h2>
                      <p
                        className={`text-sm cl cursor-pointer ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {edu.year}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isExpanded ? (
                      <FiChevronUp
                        size={20}
                        className={darkMode ? "text-white" : "text-gray-900"}
                      />
                    ) : (
                      <FiChevronDown
                        size={20}
                        className={darkMode ? "text-white" : "text-gray-900"}
                      />
                    )}
                  </motion.div>
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
                      className={`space-y-2 title text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-800"
                      }`}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={{
                        visible: { transition: { staggerChildren: 0.1 } },
                      }}
                    >
                      {edu.description.map((desc, i) => (
                        <motion.li
                          key={i}
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          transition={{ duration: 0.1, ease: "easeOut" }}
                        >
                          • {desc}
                        </motion.li>
                      ))}
                    </motion.ul>

                    <div className="flex flex-wrap gap-2 mt-6 text-sm">
                      {edu.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full border text-sm title ${
                            darkMode
                              ? "bg-gray-800 border-zinc-600 text-gray-300"
                              : "bg-gray-100 border-gray-300 text-gray-900"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

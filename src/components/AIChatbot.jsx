import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCommentDots, FaTimes, FaPaperPlane } from "react-icons/fa";

export default function AIChatbot({ darkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base about Biswajit
  const knowledgeBase = {
    education: [
      {
        year: "2026 (Expected)",
        degree: "BCA – Lakhsya Institute of Technology",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVCi0cIbHNn5USlQOPrA0AK0O_hMFCTyOVg&s",
        highlights: [
          "Completed full-stack projects using MERN stack",
          "Built a real-time Student Management System",
          "Freelanced for coaching center websites",
          "Started building a personal UI component library and CLI tools",
        ],
        skills: ["MERN Stack", "Firebase", "TypeScript", "React Native", "Next.js"],
      },
      {
        year: "2022",
        degree: "12th – Stewart Science College, Cuttack",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRETla9juCXBUTQbjasro9lCkMCqPGP8MJ97dXSWm8FsphQtqzV5CggiZbiKarWt5MfQkc&usqp=CAU",
        highlights: [
          "Stream: Science (Mathematics, Physics, Biology)",
          "Expected first prize in academic excellence",
          "Participated in long jump and shuttle run events",
        ],
      },
      {
        year: "2020",
        degree: "10th – Saraswati Sishu Vidya Mandir",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIJwKqpInw1k28npeTKvm1jPizH8nI4Y59Q&s",
        highlights: [
          "Achieved distinction in all subjects (75%+)",
          "Secured 1st position in inter-school math quizzes",
          "Won long jump and recognized as a sports athlete",
        ],
      },
    ],
    projects: [
      {
        name: "UIvault",
        logo: "./logo.png",
        duration: "06.2025 — Present",
        description:
          "A comprehensive React UI component library with multiple themes, CLI tool, and flexible theming system.",
        tags: ["React.js", "TypeScript", "Tailwind CSS", "UI Library", "CLI Tool"],
      },
      {
        name: "WebbyAI",
        logo: "./simplamo.webp",
        duration: "05.2025 — 06.2025",
        description:
          "AI-powered website builder with GPT-based suggestions, real-time deployment, and secure MERN stack backend.",
        tags: ["React.js", "Node.js", "MongoDB", "AI Integration", "Tailwind CSS"],
      },
      {
        name: "Code Saver",
        logo: "./quaricdotcom.svg",
        duration: "04.2025 — 05.2025",
        description:
          "Full-featured code snippet manager with syntax highlighting, categorization, and collaboration capabilities.",
        tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Code Editor"],
      },
      {
        name: "MVC Set NPM Package",
        logo: "https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3ihn9bj79g3iyv96c38b.png",
        duration: "03.2025 — 04.2025",
        description:
          "Reusable NPM package providing structured MVC setup for Node.js projects with built-in middleware templates.",
        tags: ["Node.js", "NPM", "MERN Stack", "MongoDB", "PostgreSQL"],
      },
    ],
    experience: [
      {
        company: "Hyperdigitech",
        logo: "./hbt.png",
        role: "Backend Developer",
        duration: "01.2022 — 04.2023",
        description: [
          "Worked on multiple SaaS-based platforms",
          "Developed scalable RESTful APIs using Node.js and Express",
          "Implemented CI/CD pipelines with Jenkins",
          "Managed MongoDB and PostgreSQL databases",
          "Optimized server performance and ensured high availability",
        ],
      },
      {
        company: "Freelancing",
        logo: "./tungtung.webp",
        role: "Full Stack Developer",
        duration: "05.2023 — Present",
        description: [
          "Built responsive and interactive web applications",
          "Delivered custom client solutions with optimized UI/UX",
          "Implemented end-to-end solutions using MERN stack",
          "Optimized websites for SEO and performance using Next.js",
        ],
      },
    ],
    skills: [
      "Express",
      "JavaScript",
      "MongoDB",
      "Node.js",
      "PostgreSQL",
      "Python",
      "React",
      "Redux",
      "Tailwind CSS",
      "TypeScript",
      "shadcn/UI",
      "Radix UI",
      "Framer Motion",
      "React Router",
      "Git",
    ],
    blogs: [
      {
        title: "My Favorite Developer Stack — Shadcn, Framer Motion & MongoDB",
        summary:
          "A deep dive into my favorite tech stack including Shadcn/UI, Framer Motion, React Icons, MongoDB, and Supabase.",
      },
    ],
    contact: {
      name: "Biswajit Das",
      role: "Backend Developer & Designer",
      location: "Cuttack, Odisha",
      phone: "+91 9348269040",
      email: "biswajit9348das@gmail.com",
      website: "biswajitdev.in",
      company: "Founder @uivault",
    },
  };

  // AI response generator
  const generateResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Greeting responses
    if (
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hey")
    ) {
      // Get time-based greeting
      const hour = new Date().getHours();
      let timeGreeting = "Hello";
      
      if (hour >= 5 && hour < 12) {
        timeGreeting = "Good Morning";
      } else if (hour >= 12 && hour < 17) {
        timeGreeting = "Good Afternoon";
      } else if (hour >= 17 && hour < 22) {
        timeGreeting = "Good Evening";
      } else {
        timeGreeting = "Hello";
      }
      
      return {
        text: `${timeGreeting}! I'm Biswajit's AI assistant. I can help you learn about:\n\n• Education\n• Projects\n• Experience\n• Skills\n• Blogs\n• CV/Resume\n\nWhat would you like to know?`,
      };
    }

    // Education queries
    if (
      lowerMessage.includes("education") ||
      lowerMessage.includes("study") ||
      lowerMessage.includes("college") ||
      lowerMessage.includes("degree")
    ) {
      return {
        text: "Biswajit's Education:",
        items: knowledgeBase.education.map((edu) => ({
          title: `${edu.degree} (${edu.year})`,
          logo: edu.logo,
          details: edu.highlights,
        })),
      };
    }

    // Projects queries
    if (
      lowerMessage.includes("project") ||
      lowerMessage.includes("work") ||
      lowerMessage.includes("built") ||
      lowerMessage.includes("portfolio")
    ) {
      return {
        text: "Biswajit's Projects:",
        items: knowledgeBase.projects.map((proj) => ({
          title: `${proj.name} (${proj.duration})`,
          logo: proj.logo,
          details: [proj.description, `Tech: ${proj.tags.join(", ")}`],
        })),
      };
    }

    // Experience queries
    if (
      lowerMessage.includes("experience") ||
      lowerMessage.includes("job") ||
      lowerMessage.includes("work history") ||
      lowerMessage.includes("career")
    ) {
      return {
        text: "Biswajit's Experience:",
        items: knowledgeBase.experience.map((exp) => ({
          title: `${exp.company} - ${exp.role}`,
          subtitle: exp.duration,
          logo: exp.logo,
          details: exp.description,
        })),
      };
    }

    // Skills queries
    if (
      lowerMessage.includes("skill") ||
      lowerMessage.includes("technology") ||
      lowerMessage.includes("tech stack") ||
      lowerMessage.includes("know")
    ) {
      const skillsList = knowledgeBase.skills.map(skill => `• ${skill}`).join('\n');
      return {
        text: `Biswajit's Tech Stack:\n\n${skillsList}\n\nHe specializes in full-stack development with MERN stack, TypeScript, and modern UI libraries.`,
      };
    }

    // Blog queries
    if (lowerMessage.includes("blog") || lowerMessage.includes("article")) {
      let response = "Biswajit's Blogs:\n\n";
      const blogLinks = [];
      knowledgeBase.blogs.forEach((blog) => {
        response += `${blog.title}\n${blog.summary}\n\n`;
        blogLinks.push({
          text: blog.title,
          url: "/blog/favstack",
        });
      });
      return {
        text: response + "Click the links below to read:",
        links: blogLinks,
      };
    }

    // Contact queries
    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("email") ||
      lowerMessage.includes("phone") ||
      lowerMessage.includes("reach")
    ) {
      const c = knowledgeBase.contact;
      return {
        text: `Contact Biswajit:\n\n• Email: ${c.email}\n• Phone: ${c.phone}\n• Location: ${c.location}\n• Website: ${c.website}\n\nClick below to reach out:`,
        links: [
          { text: `📧 ${c.email}`, url: `mailto:${c.email}` },
          { text: `📱 ${c.phone}`, url: `https://wa.me/919348269040` },
          { text: `🌐 ${c.website}`, url: `https://${c.website}` },
          { text: "📄 Download CV/Resume", url: "/resume.pdf" },
        ],
      };
    }

    // CV/Resume queries
    if (
      lowerMessage.includes("cv") ||
      lowerMessage.includes("resume") ||
      lowerMessage.includes("download")
    ) {
      return {
        text: "You can download Biswajit's CV/Resume using the link below:",
        links: [
          { text: "📄 Download CV/Resume", url: "/resume.pdf" },
        ],
      };
    }

    // About queries
    if (
      lowerMessage.includes("who") ||
      lowerMessage.includes("about") ||
      lowerMessage.includes("biswajit")
    ) {
      const c = knowledgeBase.contact;
      return {
        text: `About Biswajit Das:\n\n ${c.name} is a ${c.role} based in ${c.location}. He's the ${c.company} and specializes in building modern web applications using the MERN stack.\n\nHe has worked on multiple projects including UIvault (a React UI library), WebbyAI (an AI website builder), and more!\n\nWant to know more about his education, projects, or skills?`,
        links: [
          { text: "📄 Download CV/Resume", url: "/resume.pdf" },
        ],
      };
    }

    // Default response
    return {
      text: `I can help you with information about:\n\n• Education - Biswajit's academic background\n• Projects - His portfolio and work\n• Experience - Work history and roles\n• Skills - Technologies he works with\n• Blogs - Articles he's written\n• CV/Resume - Download his resume\n• Contact - How to reach him\n\nJust ask me anything!`,
    };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const response = generateResponse(inputValue);
      const aiResponse = {
        id: Date.now() + 1,
        text: typeof response === "string" ? response : response.text,
        links: response.links || null,
        items: response.items || null,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      
      setMessages((prev) => [...prev, aiResponse]);
      
      // Add follow-up message after a short delay
      setTimeout(() => {
        const followUp = {
          id: Date.now() + 2,
          text: "Anything more you want to know about Biswajit?",
          sender: "ai",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, followUp]);
      }, 800);
      
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Initial greeting when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        const greeting = {
          id: Date.now(),
          text: `Hi! I'm Biswajit's AI assistant. How can I help you today?\n\nYou can ask me about:\n• Education\n• Projects\n• Experience\n• Skills\n• Blogs\n• CV/Resume`,
          sender: "ai",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages([greeting]);
      }, 500);
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg border transition-all ${
              darkMode
                ? "bg-black border-zinc-700 text-white hover:border-zinc-600"
                : "bg-white border-gray-300 text-black hover:border-gray-400"
            }`}
          >
            <div className="flex items-center justify-center">
              <FaCommentDots className="text-2xl" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed bottom-6 right-6 z-50 w-[95vw] sm:w-[400px] h-[85vh] sm:h-[600px] max-h-[500px] rounded-lg shadow-2xl overflow-hidden border ${
              darkMode
                ? "bg-black border-zinc-800"
                : "bg-white border-gray-200"
            }`}
          >
            {/* Header */}
            <div
              className={`px-4 py-3 border-b flex items-center justify-between ${
                darkMode
                  ? "bg-black border-zinc-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className={`w-9 h-9 rounded-full overflow-hidden border ${
                    darkMode ? "border-zinc-700" : "border-gray-300"
                  }`}>
                    <img 
                      src="./profile.jpg" 
                      alt="Biswajit Das" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to a placeholder if image doesn't load
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">BD</div>';
                      }}
                    />
                  </div>
                  {/* Online status indicator with pulse */}
                  <span className="absolute bottom-0 right-0 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white"></span>
                  </span>
                </div>
                <div>
                  <h3 className={`font-semibold text-sm ${darkMode ? "text-white" : "text-black"}`}>
                    AI Assistant
                  </h3>
                  <p className={`text-xs flex items-center gap-1 ${darkMode ? "text-zinc-500" : "text-gray-500"}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`p-1.5 rounded-md transition-colors ${
                  darkMode ? "hover:bg-zinc-900" : "hover:bg-gray-100"
                }`}
              >
                <FaTimes className={`text-lg ${darkMode ? "text-zinc-400" : "text-gray-600"}`} />
              </button>
            </div>

            {/* Messages Area */}
            <div
              className={`h-[calc(100%-120px)] overflow-y-auto p-3 sm:p-4 space-y-3 ${
                darkMode ? "bg-black" : "bg-white"
              }`}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className={`max-w-[95%] sm:max-w-[95%]`}>
                    <div
                      className={`px-3 py-2 rounded-lg border ${
                        message.sender === "user"
                          ? darkMode
                            ? "bg-white text-black border-white"
                            : "bg-black text-white border-black"
                          : darkMode
                          ? "bg-zinc-900 text-white border-zinc-800"
                          : "bg-white text-black border-gray-200"
                      }`}
                    >
                      {/* Render message text with proper formatting */}
                      <div className="text-xs mb-2 title">
                        {message.text.split('\n').map((line, idx) => {
                          // Check if line starts with bullet point
                          if (line.trim().startsWith('•')) {
                            return (
                              <div key={idx} className="flex gap-2 my-1">
                                <span className="flex-shrink-0">•</span>
                                <span className="flex-1">{line.trim().substring(1).trim()}</span>
                              </div>
                            );
                          }
                          // Regular line
                          return line.trim() ? (
                            <p key={idx} className={line.trim() ? "mb-1" : ""}>
                              {line}
                            </p>
                          ) : (
                            <br key={idx} />
                          );
                        })}
                      </div>
                      
                      {/* Render structured items with logos on left */}
                      {message.items && message.items.length > 0 && (
                        <div className="space-y-3 mt-3">
                          {message.items.map((item, idx) => (
                            <div
                              key={idx}
                              className={`p-2 rounded-md border ${
                                darkMode
                                  ? "bg-black border-zinc-700"
                                  : "bg-white border-gray-300"
                              }`}
                            >
                              {/* Logo + Title Row */}
                              <div className="flex items-start gap-2 mb-2">
                                {item.logo && (
                                  <img
                                    src={item.logo}
                                    alt={item.title}
                                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                                    onError={(e) => {
                                      e.target.style.display = 'none';
                                    }}
                                  />
                                )}
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-semibold leading-tight title">
                                    {item.title}
                                  </p>
                                  {item.subtitle && (
                                    <p className={`text-xs mt-0.5 title ${
                                      darkMode ? "text-zinc-500" : "text-gray-500"
                                    }`}>
                                      {item.subtitle}
                                    </p>
                                  )}
                                </div>
                              </div>
                              
                              {/* Details */}
                              {item.details && item.details.length > 0 && (
                                <div className={`text-xs space-y-1 pl-10 ${
                                  darkMode ? "text-zinc-400" : "text-gray-600"
                                }`}>
                                  {item.details.map((detail, detailIdx) => (
                                    <p key={detailIdx} className="leading-relaxed title">
                                      • {detail}
                                    </p>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Render clickable links if present */}
                      {message.links && message.links.length > 0 && (
                        <div className="mt-2 space-y-1.5">
                          {message.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target={link.url.startsWith("http") ? "_blank" : "_self"}
                              rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
                              className={`block text-xs px-2 py-1.5 rounded border transition-colors ${
                                darkMode
                                  ? "border-zinc-700 hover:bg-zinc-800 text-zinc-300 hover:text-white"
                                  : "border-gray-300 hover:bg-gray-100 text-gray-700 hover:text-black"
                              }`}
                            >
                              {link.text}
                            </a>
                          ))}
                        </div>
                      )}
                      
                      <p
                        className={`text-xs mt-2 ${
                          message.sender === "user"
                            ? darkMode
                              ? "text-gray-600"
                              : "text-gray-400 title"
                            : darkMode
                            ? "text-zinc-600"
                            : "text-gray-400 title"
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-2"
                >
                  <div
                    className={`px-3 py-2 rounded-lg border ${
                      darkMode
                        ? "bg-zinc-900 border-zinc-800"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex gap-1">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          darkMode ? "bg-zinc-600" : "bg-gray-400"
                        } animate-bounce`}
                        style={{ animationDelay: "0ms" }}
                      ></span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          darkMode ? "bg-zinc-600" : "bg-gray-400"
                        } animate-bounce`}
                        style={{ animationDelay: "150ms" }}
                      ></span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          darkMode ? "bg-zinc-600" : "bg-gray-400"
                        } animate-bounce`}
                        style={{ animationDelay: "300ms" }}
                      ></span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div
              className={`p-3 border-t ${
                darkMode ? "border-zinc-800 bg-black" : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className={`title flex-1 px-3 py-2 text-sm rounded-md border transition-colors ${
                    darkMode
                      ? "bg-zinc-900 border-zinc-800 text-white placeholder-zinc-600 focus:border-zinc-700"
                      : "bg-gray-50 border-gray-300 text-black placeholder-gray-400 focus:border-gray-400"
                  } focus:outline-none`}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className={`px-3 py-2 rounded-md transition-all ${
                    inputValue.trim()
                      ? darkMode
                        ? "bg-white text-black hover:bg-gray-100"
                        : "bg-black text-white hover:bg-gray-800"
                      : darkMode
                      ? "bg-zinc-900 text-zinc-700 cursor-not-allowed"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

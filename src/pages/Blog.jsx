import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackgroundGrid from "../Background/GridBackGround";
import { HiSun, HiMoon } from "react-icons/hi";

export default function Blog() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage only
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
  }, []);

  const posts = [
    // {
    //   title:
    //     "Building UIVault – A Modern React UI Component Library & CLI Tool",
    //   date: "08.10.2025",
    //   image: "./image.png",
    //   link: "/blog/uivault",
    //   badge: "New",
    // },
    {
      title: "Tips for Creating Beautiful Image Borders",
      date: "13.09.2025",
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1638959594003/IyBSd-xoK.jpeg",
      link: "/blog/favstack",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Header with Toggle */}
      <header
        className={`flex justify-center border-b ${
          darkMode ? "border-zinc-700" : "border-zinc-200"
        } sticky top-0 z-50 ${darkMode ? "bg-black" : "bg-white"}`}
      >
        <div className="flex items-center justify-between w-full max-w-3xl py-3 px-4 sm:py-4 sm:px-8">
          <Link
            to="/"
            className={`font-bold text-2xl tracking-tight sm:text-3xl ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            BD
          </Link>

          <button
            className="p-1 border rounded-full border-gray-700 cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <HiSun className="text-white text-xl" />
            ) : (
              <HiMoon className="text-black text-xl" />
            )}
          </button>
        </div>
      </header>

      <BackgroundGrid darkMode={darkMode}>
        <div className="flex justify-center px-4 py-10 relative cl">
          <div className="max-w-3xl w-full">
            <h1
              className={`text-3xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Blog
            </h1>
            <p
              className={`mb-8 text-md ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A collection of articles on development, design, and ideas.
            </p>

            <div className="grid md:grid-cols-2 gap-3 p-1">
              {posts.map((post) => (
                <Link
                  to={post.link}
                  key={post.title}
                  className={`group block rounded-md overflow-hidden border transition-all ${
                    darkMode
                      ? "border-zinc-700 hover:border-zinc-600"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-320 h-50 object-cover object-center p-1.5 rounded-md"
                    />

                    {post.badge && (
                      <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        {post.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    <h2
                      className={`text-md group-hover:underline-offset-2 hover:underline transition-colors ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {post.title}
                    </h2>
                    <p
                      className={`text-sm mt-1 ${
                        darkMode ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      {post.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </BackgroundGrid>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import SearchDialog from "../components/SearchDialog";
import BackgroundGrid from "../Background/GridBackGround";
import { HiSun, HiMoon, HiArrowLeft } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import HorizontalDivider from "../components/HorizontalDivider";
import StripedDivider from "../components/StripedDivider";
import Footer from "../components/Footer";

export default function Blog() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
      className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
    >
      {/* Shared Navbar */}
      <TopNavbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />

      <BackgroundGrid darkMode={darkMode}>
        <div className="w-full flex flex-col items-center pt-[80px] pb-10 relative">

          {/* Top Divider */}
          <HorizontalDivider darkMode={darkMode} className="opacity-50" />

          {/* Header Section */}
          <div className={`w-full max-w-3xl px-4 sm:px-8 py-8 border-x ${darkMode ? 'border-zinc-800' : 'border-gray-200'}`}>
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-sm font-semibold tracking-wide ${darkMode ? "text-zinc-500" : "text-gray-500"}`}>Blog</span>
            </div>

            <h1
              className={`text-3xl sm:text-4xl font-normal tracking-tight leading-[1.1] ${darkMode ? "text-white" : "text-gray-950"}`}
            >
              Writing about code, design, <br className="hidden sm:block" />
              and everything in between.
            </h1>
          </div>

          {/* Divider between title and search */}
          <HorizontalDivider darkMode={darkMode} className="opacity-50" />

          {/* Search Section */}
          <div className={`w-full max-w-3xl px-4 sm:px-8 py-6 border-x ${darkMode ? 'border-zinc-800' : 'border-gray-200'}`}>
            <div className={`flex items-center w-full border rounded-lg px-3 py-2.5 transition-colors ${darkMode ? "bg-black border-zinc-800 focus-within:border-zinc-600" : "bg-white border-gray-300 focus-within:border-gray-400 shadow-sm"}`}>
              <FaSearch className={`mr-2.5 text-sm ${darkMode ? "text-zinc-500" : "text-gray-400"}`} />
              <input
                type="text"
                placeholder="Search blog..."
                className={`w-full bg-transparent outline-none text-sm ${darkMode ? "text-white placeholder-zinc-500" : "text-gray-900 placeholder-gray-400"}`}
              />
            </div>
          </div>

          {/* Striped Divider below search */}
          <StripedDivider darkMode={darkMode} className="opacity-70" height="h-6" />

          {/* Posts Section */}
          <div className={`w-full max-w-3xl px-4 sm:px-8 py-10 border-x ${darkMode ? 'border-zinc-800' : 'border-gray-200'}`}>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-10">
              {posts.map((post) => (
                <Link
                  to={post.link}
                  key={post.title}
                  className="group block"
                >
                  <div className="relative mb-4 overflow-hidden rounded-xl border border-transparent dark:border-zinc-800/50">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {post.badge && (
                      <span className="absolute top-3 right-3 bg-white/90 text-black text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm shadow-sm">
                        {post.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <h2
                      className={`text-lg font-semibold mb-1.5 group-hover:underline decoration-2 underline-offset-2 ${darkMode ? "text-white" : "text-gray-900"}`}
                    >
                      {post.title}
                    </h2>
                    <p
                      className={`text-sm ${darkMode ? "text-zinc-500" : "text-gray-500"}`}
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
      <SearchDialog
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        darkMode={darkMode}
      />
      <StripedDivider darkMode={darkMode} height="h-7" />
      <Footer darkMode={darkMode} />
    </div>
  );
}

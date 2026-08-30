import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import Blog from "./pages/Blog.jsx";
import MyStory from "./pages/MyStory.jsx";
import UIvaultBlogPost from "./components/UivaultBlogPost.jsx";
import FavStackBlogPost from "./components/FavouriteStackBlog.jsx";
import TechJourneyBlog from "./components/TechJourneyBlog.jsx";

// from "./pages/Home.jsx"; // Optional: your main homepage

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/story" element={<MyStory />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/uivault" element={<UIvaultBlogPost />} />
          <Route path="/blog/favstack" element={<FavStackBlogPost />} />
          <Route path="/blog/tech-journey" element={<TechJourneyBlog />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />{" "}
          {/* optional */}
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

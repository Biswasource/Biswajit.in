import React from "react";
import Profile from "./components/Navbar";
import SEO from "./components/SEO";

function App() {
  return (
    <div>
      <SEO 
        title="Home"
        description="Welcome to my portfolio! I am Biswajit Das, a Full Stack Developer. Discover my projects, skills, and journey in web development."
      />
      <Profile />
    </div>
  );
}

export default App;

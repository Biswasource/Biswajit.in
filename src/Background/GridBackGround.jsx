import React from "react";

export default function BackgroundGrid({ children, darkMode }) {
  return (
    <div className={`w-full relative ${darkMode ? "bg-black" : "bg-white"}`}>
      <div className="z-100">{children}</div>
    </div>
  );
}

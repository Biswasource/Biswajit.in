import React from "react";
import GitHubCalendar from "react-github-calendar";

function GithubContribution({ darkMode }) {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center p-3 sm:p-6 md:p-3 relative scrollbar-hide title`}
    >
      <div
        className={`w-full max-w-full sm:max-w-3xl rounded-xl p-2 sm:p-4 md:p-1 scrollbar-hide ${
          darkMode ? "bg-black/90 text-white" : "bg-white/90 black"
        }`}
      >
        {/* Horizontal scroll with hidden scrollbar */}
        <div
          className="overflow-x-auto scrollbar-hide"
          style={{
            WebkitOverflowScrolling: "touch", // smooth iOS scroll
            touchAction: "pan-x",
          }}
        >
          <div className="text-center min-w-[720px] scrollbar-hide">
            <GitHubCalendar
              username="Biswasource"
              blockSize={11}
              blockMargin={3}
              colorScheme={darkMode ? "dark" : "light"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubContribution;

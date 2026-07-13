import React from "react";
import GitHubCalendar from "react-github-calendar";
import HorizontalDivider from "../components/HorizontalDivider";

function GithubContribution({ darkMode }) {
  return (
    <>
      <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
        <HorizontalDivider darkMode={darkMode} className="w-full" />
      </div>
      <div className="w-full px-4 sm:px-6 flex justify-center">
        <div
          className={`w-full max-w-3xl border-l border-r ${
            darkMode
              ? "bg-black text-gray-200 border-zinc-800"
              : "bg-white text-gray-900 border-gray-300"
          } pt-6 pb-2 px-4 sm:px-4 md:px-4 flex flex-col items-center justify-center relative title`}
        >
          {/* Horizontal scroll */}
          <div
            className="w-full overflow-x-auto pb-4"
            style={{
              WebkitOverflowScrolling: "touch", // smooth iOS scroll
              touchAction: "pan-x",
            }}
          >
            <div className="text-center min-w-[720px]">
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
    </>
  );
}

export default GithubContribution;

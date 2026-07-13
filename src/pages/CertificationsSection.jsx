import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaHackerrank, FaTrophy } from "react-icons/fa";
import HorizontalDivider from "../components/HorizontalDivider";
import StripedDivider from "../components/StripedDivider";

export default function CertificationsSection({ darkMode }) {
  const certifications = [
    {
      title: "HackerRank CSS Certificate",
      issuer: "HackerRank",
      date: "Credential",
      icon: <FaHackerrank size={18} className={darkMode ? "text-gray-300" : "text-gray-600"} />,
      link: "https://drive.google.com/file/d/1IXZWczZbh8XyxWNtbaVq7ansyuu_V503/view?usp=drive_link",
    },
    {
      title: "HackerRank JavaScript Certificate",
      issuer: "HackerRank",
      date: "Credential",
      icon: <FaHackerrank size={18} className={darkMode ? "text-gray-300" : "text-gray-600"} />,
      link: "https://drive.google.com/file/d/1UztMUL7z_tIUC2aqvn1lsp3J4khcZDg-/view?usp=drive_link",
    },
    {
      title: "College Hackathon First Prize",
      issuer: "College Hackathon",
      date: "Winner",
      icon: <FaTrophy size={18} className={darkMode ? "text-gray-300" : "text-gray-600"} />,
      link: "https://drive.google.com/file/d/1CYcvuRzW10FFJigrx67VQmu2TEDpuyHw/view?usp=drive_link",
    },
    {
      title: "College Project Expo First Prize",
      issuer: "Project Expo Competition",
      date: "Winner",
      icon: <FaTrophy size={18} className={darkMode ? "text-gray-300" : "text-gray-600"} />,
      link: "https://drive.google.com/file/d/1YI-Xo79r1O9FK8bFmbK1dkNTAW2vpdpw/view?usp=drive_link",
    },
  ];

  return (
    <>
      <div className="w-full px-4 sm:px-6 flex justify-center">
        <section
          id="certifications"
          className={`w-full max-w-3xl border-l border-r ${darkMode ? "bg-black text-gray-200 border-zinc-800" : "bg-white text-gray-900 border-gray-300"
            } py-4 px-4 sm:px-4 md:px-4 relative`}
        >
          <h1 className="text-3xl font-bold pb-2 cl flex items-baseline gap-2">
            Certifications <span className="text-sm font-normal text-gray-400">(4)</span>
          </h1>
          <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
            <HorizontalDivider darkMode={darkMode} className="w-full" />
          </div>

          <div className="flex flex-col">
            {certifications.map((cert, idx) => (
              <React.Fragment key={idx}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between py-4 group transition-colors ${darkMode ? "hover:bg-gray-900" : "hover:bg-gray-50"
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-xl flex-shrink-0 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className={`text-[16px] font-semibold cl ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
                        {cert.title}
                      </h3>
                      <p className={`text-sm title mt-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                        @{cert.issuer} <span className="mx-2">|</span> {cert.date}
                      </p>
                    </div>
                  </div>
                  <div className="pr-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    <FiArrowUpRight size={20} className={darkMode ? "text-gray-400 group-hover:text-white" : "text-gray-400 group-hover:text-gray-900"} />
                  </div>
                </a>
                <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
                  <HorizontalDivider darkMode={darkMode} className="w-full" />
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
      </div>
      <StripedDivider darkMode={darkMode} height="h-8" className="w-full" />
    </>
  );
}

import React from "react";

export default function Footer({ darkMode = true }) {
  return (
    <footer className={`w-full ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Brand Section */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-base lg:text-lg font-medium mb-12 lg:mb-16 text-gray-400">Brand</h2>
          
          {/* Mark Section */}
          <div className="relative mb-16 lg:mb-24 pl-8 lg:pl-12">
            {/* Vertical Mark Label */}
            <div className="absolute left-0 top-8 lg:top-12">
              <span className="text-xs lg:text-sm text-gray-500 block transform -rotate-90 origin-bottom-left whitespace-nowrap">
                Mark
              </span>
            </div>
            
            {/* Pixelated CD Logo */}
            <div className="flex items-center">
              <svg 
                viewBox="0 0 200 100" 
                className="w-32 h-20 sm:w-40 sm:h-24 lg:w-48 lg:h-28"
                fill={darkMode ? "white" : "black"}
              >
                {/* Letter C */}
                <rect x="10" y="20" width="12" height="12"/>
                <rect x="22" y="20" width="12" height="12"/>
                <rect x="34" y="20" width="12" height="12"/>
                <rect x="10" y="32" width="12" height="12"/>
                <rect x="10" y="44" width="12" height="12"/>
                <rect x="10" y="56" width="12" height="12"/>
                <rect x="10" y="68" width="12" height="12"/>
                <rect x="22" y="68" width="12" height="12"/>
                <rect x="34" y="68" width="12" height="12"/>
                
                {/* Letter D */}
                <rect x="70" y="20" width="12" height="12"/>
                <rect x="82" y="20" width="12" height="12"/>
                <rect x="94" y="20" width="12" height="12"/>
                <rect x="70" y="32" width="12" height="12"/>
                <rect x="106" y="32" width="12" height="12"/>
                <rect x="70" y="44" width="12" height="12"/>
                <rect x="106" y="44" width="12" height="12"/>
                <rect x="70" y="56" width="12" height="12"/>
                <rect x="106" y="56" width="12" height="12"/>
                <rect x="70" y="68" width="12" height="12"/>
                <rect x="82" y="68" width="12" height="12"/>
                <rect x="94" y="68" width="12" height="12"/>
              </svg>
            </div>
          </div>

          {/* Divider */}
          <div className={`border-t mb-16 lg:mb-24 ${darkMode ? "border-gray-800" : "border-gray-200"}`}></div>

          {/* Logotype Section */}
          <div className="relative pl-8 lg:pl-12">
            {/* Vertical Logotype Label */}
            <div className="absolute left-0 top-8 lg:top-12">
              <span className="text-xs lg:text-sm text-gray-500 block transform -rotate-90 origin-bottom-left whitespace-nowrap">
                Logotype
              </span>
            </div>
            
            {/* CD ChanhDai Text */}
            <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold" style={{ fontFamily: "'Press Start 2P', 'Courier New', monospace" }}>
              <span className="tracking-wider">CD ChanhDai</span>
            </div>
          </div>
        </div>

        {/* Diagonal Pattern Divider */}
        <div className={`relative h-16 mb-12 overflow-hidden ${darkMode ? "bg-zinc-950" : "bg-gray-50"}`}>
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              ${darkMode ? '#18181b' : '#f9fafb'} 10px,
              ${darkMode ? '#18181b' : '#f9fafb'} 20px
            )`
          }}></div>
        </div>

        {/* Credits Section */}
        <div className="text-center space-y-3 mb-8">
          <p className="text-sm lg:text-base text-gray-500">
            Inspired by{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              tailwindcss.com
            </a>{" "}
            &{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              ui.shadcn.com
            </a>
          </p>
          <p className="text-sm lg:text-base text-gray-500">
            Built by{" "}
            <a
              href="https://github.com/ncdai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-gray-400 hover:text-white transition-colors"
            >
              ncdai
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        {/* Bottom Icons Row */}
        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 pt-6 border-t border-gray-800">
          <a 
            href="#" 
            className="text-xs lg:text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            llms.txt
          </a>
          
          <a 
            href="#" 
            className="text-gray-500 hover:text-gray-300 transition-colors"
            aria-label="RSS Feed"
          >
            <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/>
            </svg>
          </a>
          
          <a 
            href="#" 
            className="inline-flex items-center gap-1.5 px-2.5 py-1 lg:px-3 lg:py-1.5 border border-gray-700 rounded text-xs lg:text-sm text-gray-500 hover:text-gray-300 hover:border-gray-600 transition-colors"
          >
            <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>DMCA</span>
            <span className="hidden sm:inline">PROTECTED</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
import React from "react";

const BDLogo = ({ darkMode, size = 96 }) => {
    return (
        <div
            className="bd-logo-wrapper"
            style={{ width: 400, height: 100 }}
        >
            <div className={`bd-logo-scene ${darkMode ? "dark" : "light"}`}>
                <div className="bd-face bd-face-top">BD</div>
                <div className="bd-face bd-face-front">BD</div>
                <div className="bd-face bd-face-side">BD</div>
            </div>

            <style>{`
        .bd-logo-wrapper {
          perspective: 800px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bd-logo-scene {
          position: relative;
          width: 60%;
          height: 60%;
          transform-style: preserve-3d;
          transform: rotateX(55deg) rotateZ(45deg);
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          cursor: pointer;
        }

        .bd-logo-wrapper:hover .bd-logo-scene {
          transform: rotateX(55deg) rotateZ(225deg);
        }

        .bd-face {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-sans, sans-serif);
          font-weight: 500;
          font-size: 1.4rem;
          letter-spacing: 0.05em;
          border: 0.5px solid var(--color-border-secondary);
        }

        .bd-face-top {
          background: var(--color-background-primary);
          color: var(--color-text-primary);
          transform: translateZ(20px);
        }

        .bd-face-front {
          background: var(--color-background-secondary);
          color: var(--color-text-secondary);
          transform: rotateX(-90deg) translateZ(20px) translateY(0px);
          transform-origin: bottom;
          height: 40px;
          top: calc(100% - 40px);
        }

        .bd-face-side {
          background: var(--color-background-tertiary);
          color: var(--color-text-tertiary);
          transform: rotateY(90deg) translateZ(20px) translateX(0px);
          transform-origin: right;
          width: 40px;
          left: calc(100% - 40px);
          writing-mode: vertical-rl;
        }

        @media (prefers-reduced-motion: reduce) {
          .bd-logo-scene {
            transition: none;
          }
        }
      `}</style>
        </div>
    );
};

export default BDLogo;
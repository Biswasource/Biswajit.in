import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useVelocity, useTransform } from "framer-motion";

const CatCursor = () => {
  // Target = real cursor position
  const targetX = useMotionValue(-300);
  const targetY = useMotionValue(-300);

  // Cat lags behind with very slow spring = "chasing" effect
  const catX = useSpring(targetX, { stiffness: 28, damping: 10, mass: 1.2 });
  const catY = useSpring(targetY, { stiffness: 28, damping: 10, mass: 1.2 });

  const [blink, setBlink] = useState(false);
  const [tailDir, setTailDir] = useState(1);
  const [facingLeft, setFacingLeft] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [legPhase, setLegPhase] = useState(0); // 0 or 1 for alternating legs
  const prevX = useRef(-300);
  const idleTimer = useRef(null);
  const legTimer = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      const nx = e.clientX - 22;
      const ny = e.clientY - 32;

      setFacingLeft(nx < prevX.current);
      prevX.current = nx;

      targetX.set(nx);
      targetY.set(ny);

      // Mark as running
      setIsRunning(true);

      // Reset idle timer
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setIsRunning(false), 300);
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      clearTimeout(idleTimer.current);
    };
  }, []);

  // Leg cycle animation when running
  useEffect(() => {
    if (isRunning) {
      legTimer.current = setInterval(() => {
        setLegPhase((p) => (p === 0 ? 1 : 0));
      }, 120);
    } else {
      clearInterval(legTimer.current);
      setLegPhase(0);
    }
    return () => clearInterval(legTimer.current);
  }, [isRunning]);

  // Blink every ~3s
  useEffect(() => {
    const blinkLoop = () => {
      const delay = 2800 + Math.random() * 1600;
      return setTimeout(() => {
        setBlink(true);
        setTimeout(() => {
          setBlink(false);
          blinkLoop();
        }, 110);
      }, delay);
    };
    const t = blinkLoop();
    return () => clearTimeout(t);
  }, []);

  // Tail wag (faster when running)
  useEffect(() => {
    const interval = isRunning ? 200 : 500;
    const wag = setInterval(() => setTailDir((d) => d * -1), interval);
    return () => clearInterval(wag);
  }, [isRunning]);

  const eyeH = blink ? 1 : isRunning ? 3.5 : 5;

  // Running body bob: head bobs up/down when running
  const bodyBob = isRunning ? (legPhase === 0 ? -2 : 1) : 0;

  // Leg positions
  const legA = legPhase === 0;

  return (
    <motion.div
      style={{ x: catX, y: catY }}
      className="fixed top-0 left-0 z-[9998] pointer-events-none select-none"
    >
      <motion.div
        animate={{ y: bodyBob }}
        transition={{ duration: 0.08, ease: "linear" }}
      >
        <svg
          width="52"
          height="58"
          viewBox="0 0 52 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: facingLeft ? "scaleX(-1)" : "scaleX(1)",
            transition: "transform 0.08s",
            filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.22))",
          }}
        >
          {/* ── Tail ── */}
          <motion.path
            d={isRunning
              ? "M 10 44 Q 0 36 4 30 Q 8 24 12 32"
              : "M 10 46 Q 2 54 6 58 Q 10 60 13 50"
            }
            stroke="#e8955a"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            animate={{
              rotate: tailDir * (isRunning ? 28 : 15),
              d: isRunning
                ? "M 10 44 Q 0 36 4 30 Q 8 24 12 32"
                : "M 10 46 Q 2 54 6 58 Q 10 60 13 50",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            style={{ originX: "10px", originY: "44px" }}
          />

          {/* ── Body ── */}
          <ellipse
            cx="26"
            cy="40"
            rx={isRunning ? 16 : 14}
            ry={isRunning ? 10 : 12}
            fill="#f9c784"
          />

          {/* ── Head ── */}
          <circle cx="26" cy="22" r="15" fill="#f9c784" />

          {/* ── Ears ── */}
          <polygon points="12,13 8,2 19,10" fill="#f9c784" />
          <polygon points="13,12 10,5 18,10" fill="#f0a261" opacity="0.75" />
          <polygon points="40,13 44,2 33,10" fill="#f9c784" />
          <polygon points="39,12 42,5 34,10" fill="#f0a261" opacity="0.75" />

          {/* ── Whiskers left ── */}
          <line x1="14" y1="23" x2="4" y2="21" stroke="#d4896a" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />
          <line x1="14" y1="26" x2="3" y2="26" stroke="#d4896a" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />
          <line x1="14" y1="29" x2="4" y2="31" stroke="#d4896a" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />

          {/* ── Whiskers right ── */}
          <line x1="38" y1="23" x2="48" y2="21" stroke="#d4896a" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />
          <line x1="38" y1="26" x2="49" y2="26" stroke="#d4896a" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />
          <line x1="38" y1="29" x2="48" y2="31" stroke="#d4896a" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />

          {/* ── Eyes ── */}
          <ellipse cx="18" cy="21" rx="4.5" ry={eyeH} fill="#2a2a2a" />
          {!blink && <circle cx="19.8" cy="19.2" r="1.4" fill="white" />}
          <ellipse cx="34" cy="21" rx="4.5" ry={eyeH} fill="#2a2a2a" />
          {!blink && <circle cx="35.8" cy="19.2" r="1.4" fill="white" />}

          {/* ── Nose ── */}
          <ellipse cx="26" cy="27" rx="2.2" ry="1.6" fill="#e07b8a" />

          {/* ── Mouth ── */}
          <path d="M 26 28.5 Q 23 31 21 30" stroke="#c05a6a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M 26 28.5 Q 29 31 31 30" stroke="#c05a6a" strokeWidth="1.2" strokeLinecap="round" fill="none" />

          {/* ── Legs (animated when running) ── */}
          {isRunning ? (
            <>
              {/* Front left */}
              <motion.line
                x1="18" y1="47"
                x2={legA ? "14" : "22"}
                y2={legA ? "56" : "57"}
                stroke="#f0a261" strokeWidth="5" strokeLinecap="round"
              />
              {/* Front right */}
              <motion.line
                x1="26" y1="48"
                x2={legA ? "30" : "22"}
                y2={legA ? "57" : "56"}
                stroke="#f0a261" strokeWidth="5" strokeLinecap="round"
              />
              {/* Back left */}
              <motion.line
                x1="32" y1="47"
                x2={legA ? "36" : "28"}
                y2={legA ? "56" : "57"}
                stroke="#e8955a" strokeWidth="5" strokeLinecap="round"
              />
            </>
          ) : (
            <>
              {/* Sitting paws */}
              <ellipse cx="17" cy="50" rx="6" ry="4" fill="#f0a261" />
              <ellipse cx="35" cy="50" rx="6" ry="4" fill="#f0a261" />
              {/* Toe lines left */}
              <line x1="14" y1="50" x2="14" y2="52.5" stroke="#d4896a" strokeWidth="1.1" strokeLinecap="round" />
              <line x1="17" y1="51" x2="17" y2="53.5" stroke="#d4896a" strokeWidth="1.1" strokeLinecap="round" />
              <line x1="20" y1="50" x2="20" y2="52.5" stroke="#d4896a" strokeWidth="1.1" strokeLinecap="round" />
              {/* Toe lines right */}
              <line x1="32" y1="50" x2="32" y2="52.5" stroke="#d4896a" strokeWidth="1.1" strokeLinecap="round" />
              <line x1="35" y1="51" x2="35" y2="53.5" stroke="#d4896a" strokeWidth="1.1" strokeLinecap="round" />
              <line x1="38" y1="50" x2="38" y2="52.5" stroke="#d4896a" strokeWidth="1.1" strokeLinecap="round" />
            </>
          )}

          {/* ── Speed lines when running (behind cat) ── */}
          {isRunning && (
            <>
              <line x1="2" y1="34" x2="10" y2="34" stroke="#e8955a" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
              <line x1="0" y1="38" x2="9" y2="38" stroke="#e8955a" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
              <line x1="3" y1="42" x2="10" y2="42" stroke="#e8955a" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
            </>
          )}
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default CatCursor;

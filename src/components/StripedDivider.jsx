import React from 'react';

const StripedDivider = ({ darkMode = false, className = "", height = "h-4" }) => {
  return (
    <div
      className={`w-full ${height} border-y ${darkMode ? 'border-zinc-500' : 'border-gray-300'} ${className}`}
      style={{
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 8px,
          ${darkMode ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.2)'} 8px,
          ${darkMode ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.2)'} 10px
        )`
      }}
    />
  );
};

export default StripedDivider;

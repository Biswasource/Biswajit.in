import React from 'react';

const HorizontalDivider = ({ darkMode = false, className = "", height = "h-px" }) => {
  return (
    <div
      className={`w-full ${height} ${darkMode ? 'bg-zinc-800' : 'bg-gray-300'} ${className}`}
    />
  );
};

export default HorizontalDivider;

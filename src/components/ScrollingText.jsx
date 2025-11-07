import React from "react";

const ScrollingText = () => {
  return (
    <div
      className="
      w-full overflow-hidden 
      bg-gradient-to-r from-blue-900 to-blue-500 
      py-10 group transition-all duration-700 
      hover:from-purple-900 hover:to-purple-600
      "
    >
      <div className="relative flex w-max animate-marquee">
        <span
          className="
          text-5xl font-bold uppercase tracking-wider mx-12 
          text-white transition-colors duration-700 
          group-hover:text-yellow-300
          "
        >
          Web Designer • Frontend Developer • Creative Coder • UI/UX Enthusiast • Problem Solver •
        </span>
        <span
          className="
          text-5xl font-bold uppercase tracking-wider mx-12 
          text-white transition-colors duration-700 
          group-hover:text-yellow-300
          "
        >
          Web Designer • Frontend Developer • Creative Coder • UI/UX Enthusiast • Problem Solver •
        </span>
      </div>
    </div>
  );
};

export default ScrollingText;

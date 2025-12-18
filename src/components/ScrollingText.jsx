import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollingText = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Initial infinite animation
    marqueeRef.current.tween = gsap.to(marqueeRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 50,
      ease: "linear",
    });
  }, []);

  // ✅ Slow down on hover smoothly
  const handleMouseEnter = () => {
    marqueeRef.current.tween.timeScale(0.1); // slow motion effect
  };

  // ✅ Restore speed when hover ends
  const handleMouseLeave = () => {
    marqueeRef.current.tween.timeScale(1); // back to normal
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="
      w-full overflow-hidden 
      bg-[#034F46]
      py-7 group transition-colors duration-300 
      hover:bg-blue-600
      "
    >
      <div
        ref={marqueeRef}
        className="relative flex w-max whitespace-nowrap"
      >
        <span
          className="
          text-5xl font-bold uppercase tracking-wider mx-12 
          text-gray-100 transition-colors duration-300 
          group-hover:text-white
          "
        >
          Web Designer • Frontend Developer • Creative Coder • UI/UX Enthusiast • Problem Solver •
        </span>

        <span
          className="
          text-5xl font-bold uppercase tracking-wider mx-12 
          text-gray-400 transition-colors duration-300 
          group-hover:text-white
          "
        >
          Web Designer • Frontend Developer • Creative Coder • UI/UX Enthusiast • Problem Solver •
        </span>
      </div>
    </div>
  );
};

export default ScrollingText;

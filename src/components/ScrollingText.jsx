import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollingText = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    marqueeRef.current.tween = gsap.to(marqueeRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 50,
      ease: "linear",
    });
  }, []);

  const handleMouseEnter = () => {
    marqueeRef.current.tween.timeScale(0.1);
  };

  const handleMouseLeave = () => {
    marqueeRef.current.tween.timeScale(1);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="
        scrollText
        w-full overflow-hidden
        bg-[#034F46]
        py-5 sm:py-7
        mt-24 sm:mt-40 lg:mt-52
        group transition-colors duration-300
        hover:bg-blue-600
      "
    >
      <div
        ref={marqueeRef}
        className="relative flex w-max whitespace-nowrap"
      >
        <span
          className="
            text-6xl font-bold uppercase tracking-wider mx-12
            text-gray-100 transition-colors duration-300
            group-hover:text-white
          "
        >
          Web Designer • Frontend Developer • Creative Coder • UI/UX Enthusiast • Problem Solver •
        </span>

        <span
          className="
            text-6xl font-bold uppercase tracking-wider mx-12
            text-gray-100 transition-colors duration-300
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

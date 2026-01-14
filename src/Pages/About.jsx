import React, { useEffect, useRef } from "react";
import ScrollingText from "../components/ScrollingText";
import TechStack from "../components/TechStack";
import  Timeline  from "../components/Timeline";

const About = () => {
  const techStackRef = useRef(null);
  const hasScrolledRef = useRef(false);
  const scrollHintRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasScrolledRef.current && techStackRef.current) {
        hasScrolledRef.current = true;

        // Hide scroll hint
        if (scrollHintRef.current) {
          scrollHintRef.current.style.opacity = "0";
        }

        techStackRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full">
      
      {/* HERO SECTION */}
      <div
        className="
          flex flex-col items-center text-center px-6
          pt-24 sm:pt-32 lg:min-h-screen lg:justify-center
        "
      >
        <p className="text-transparent bg-clip-text bg-linear-to-r from-white/40 via-white/60 to-white/40 text-lg max-w-5xl mt-5 mb-5">
          Turning ideas into real-life products is my calling.
        </p>

        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-thin text-gray-100">
          Get To Know More
        </h1>

        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-normal text-gray-100">
          About Me
        </h2>

        {/* SCROLL HINT */}
        <div
          ref={scrollHintRef}
          className="
            mt-16 flex flex-col items-center
            text-white/50
            animate-scrollHint
            transition-opacity duration-300
          "
        >
          <span className="text-xs tracking-widest uppercase mb-2">
            Scroll
          </span>
          <div className="w-5 h-5 border-b-2 border-r-2 border-white/50 rotate-45" />
        </div>
      </div>

      {/* FOLLOW-UP SECTIONS */}
      <ScrollingText />

      {/* AUTO SCROLL TARGET */}
      <div ref={techStackRef}>
        <TechStack />
      </div>

      <Timeline />
    </section>
  );
};

export default About;

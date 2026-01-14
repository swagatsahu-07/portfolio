import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "typewriter-effect";

import ScrollingText from "../components/ScrollingText";
import FirstSection from "../components/FirstSection";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      ".head",
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".head",
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* HERO SECTION */}
      <div className="pt-24 sm:pt-32 pb-20 sm:pb-24 flex flex-col items-center text-center px-6">

        {/* PRIMARY HEADING */}
        <h1
          className="
            name
            text-5xl sm:text-7xl lg:text-9xl
            font-thin
            bg-[linear-gradient(to_right,#D4D3DD,#EFEFBB)]
            bg-clip-text text-transparent
            drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]
            mb-6 sm:mb-8
            leading-tight
          "
        >
          Swagat Sahu
        </h1>

        {/* SECONDARY HEADING */}
        <h2
          className="
          mainHead
            text-3xl sm:text-4xl lg:text-6xl
            bg-linear-to-r from-gray-200 via-gray-400 to-gray-600
            bg-clip-text text-transparent
          "
        >
          <Typewriter
            options={{
              strings: [
                "a Frontend Developer",
                "a Web Designer",
                "a Creative Coder",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
              delay: 80,
            }}
          />
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            head
            text-gray-300
            text-base sm:text-lg lg:text-2xl
            font-thin
            max-w-xl
            mt-10 sm:mt-16
          "
        >
          I create responsive, elegant web experiences that merge design and
          technology seamlessly.
        </p>
      </div>

      {/* FOLLOW-UP SECTIONS */}
      <ScrollingText />
      <FirstSection />
    </section>
  );
};

export default Home;

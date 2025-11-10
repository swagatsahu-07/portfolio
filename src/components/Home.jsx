import React, { useEffect } from "react";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect";
import ScrollingText from "../components/ScrollingText";
import FirstSection from "../components/FirstSection";

const Home = () => {
  useEffect(() => {
    // Animation: from left to center
    gsap.fromTo(
      ".head",
      { y: 150, opacity: 0 },
      // { rotation: 360, x: 10, yPercent: 50 },   // start BELOW
    {
      y: 0,
      opacity: 1,
      duration: 4.8,
      ease: "power3.out",
    }
    );
  }, []);

  return (
    <>
      <div className="absolute inset-0 z-0 w-full h-full"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white/40 via-white/60 to-white/40">
          Swagat Sahu{" "}
          <span className="text-white">
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
          </span>
        </h1>

        <p className="head text-gray-300 text-lg max-w-xl mt-5">
          I create responsive, elegant web experiences that merge design and
          technology seamlessly.
        </p>
      </div>

      <ScrollingText />
      <FirstSection />
    </>
  );
};

export default Home;

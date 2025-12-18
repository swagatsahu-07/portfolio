"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Observe height
  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new ResizeObserver(() => {
      setHeight(contentRef.current.offsetHeight);
    });

    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="
        relative w-full max-w-7xl mx-auto my-40
        rounded-3xl bg-linear-to-b from-[#0F172A] via-[#020617] to-[#0F172A]
        border border-white/10
        shadow-[0_30px_100px_rgba(0,0,0,0.4)]
        overflow-hidden
      "
    >
      {/* HEADER */}
      <div className="px-8 py-20 text-center">
        <h2 className="text-4xl font-bold text-white">My Journey</h2>
      </div>

      {/* CONTENT */}
      <div ref={contentRef} className="relative px-6 md:px-14 pb-32">
        {/* CENTER LINE */}
        <div
          style={{ height }}
          className="
            absolute left-1/2 -translate-x-1/2 top-0
            w-1 bg-white/20 z-10
          "
        />

        {/* ACTIVE LINE */}
        <motion.div
          style={{ height: lineHeight, opacity: lineOpacity }}
          className="
            absolute left-1/2 -translate-x-1/2 top-0
            w-1
            bg-linear-to-b from-indigo-400 via-sky-400 to-transparent
            shadow-[0_0_40px_rgba(99,102,241,1)]
            rounded-full z-20
          "
        />

        {/* TIMELINE ITEMS */}
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          const start = index / data.length;
          const end = start + 0.18;

          // Dot glow
          const glow = useTransform(
            scrollYProgress,
            [start, end],
            [
              "0 0 0px rgba(255,255,255,0)",
              "0 0 20px rgba(56,189,248,1), 0 0 45px rgba(99,102,241,1)",
            ]
          );

          // Content animation
          const contentOpacity = useTransform(
            scrollYProgress,
            [start + 0.03, end],
            [0, 1]
          );

          const contentX = useTransform(
            scrollYProgress,
            [start + 0.03, end],
            [isLeft ? -40 : 40, 0]
          );

          return (
            <div
              key={index}
              className="relative flex items-center min-h-[180px]"
            >
              {/* LEFT CONTENT */}
              <motion.div
                style={{ opacity: contentOpacity, x: contentX }}
                className={`w-1/2 pr-12 text-right ${isLeft ? "" : "invisible"}`}
              >
                {isLeft && (
                  <>
                    <h3 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <div className="mt-2 text-gray-300">
                      {item.content}
                    </div>
                  </>
                )}
              </motion.div>

              {/* DOT */}
              <div className="relative z-30">
                <motion.span
                  style={{ boxShadow: glow }}
                  className="w-4 h-4 rounded-full bg-white block"
                />
              </div>

              {/* RIGHT CONTENT */}
              <motion.div
                style={{ opacity: contentOpacity, x: contentX }}
                className={`w-1/2 pl-12 ${!isLeft ? "" : "invisible"}`}
              >
                {!isLeft && (
                  <>
                    <h3 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <div className="mt-2 text-gray-300">
                      {item.content}
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";

// ================= DATA =================
const timelineData = [
  {
    year: "2018",
    title: "Foundation",
    description:
      "Completed high school and developed an early interest in computers and technology.",
  },
  {
    year: "2020",
    title: "Academic Growth",
    description:
      "Completed higher secondary education, strengthening analytical and problem-solving skills.",
  },
  {
    year: "2023",
    title: "Undergraduate Focus",
    description:
      "Graduated with a B.Sc in Information Technology, focusing on web development fundamentals.",
  },
  {
    year: "2025",
    title: "Professional Readiness",
    description:
      "Completed Master of Computer Applications with hands-on project experience.",
  },
  {
    year: "Present",
    title: "Next Step",
    description:
      "Actively seeking opportunities to apply skills in real-world development environments.",
    highlight: true,
  },
];

// ================= ANIMATION =================
const itemVariant = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

// ================= COMPONENT =================
const Timeline = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-4xl font-semibold text-white">
          My Journey
        </h2>
        <p className="text-white/60 mt-2 max-w-xl">
          A concise view of my academic progression and professional direction.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative space-y-10">
        {/* Vertical Line */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10" />

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className={`
              relative pl-10
              p-6 sm:p-8
              rounded-2xl
              border
              backdrop-blur-md
              transition
              ${
                item.highlight
                  ? "bg-indigo-500/10 border-indigo-400/30"
                  : "bg-white/5 border-white/10"
              }
            `}
          >
            {/* Dot */}
            <span
              className={`
                absolute left-1 top-8 w-3 h-3 rounded-full
                ${
                  item.highlight
                    ? "bg-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.9)]"
                    : "bg-white/40"
                }
              `}
            />

            {/* Content */}
            <div className="flex items-center gap-4 mb-2">
              <span
                className={`text-sm font-medium ${
                  item.highlight ? "text-indigo-300" : "text-indigo-400"
                }`}
              >
                {item.year}
              </span>
              <h3 className="text-xl font-medium text-white">
                {item.title}
              </h3>
            </div>

            <p className="text-white/70 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;

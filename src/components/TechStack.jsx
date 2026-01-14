import React from "react";
import { motion } from "framer-motion";

// ================= SVG IMPORTS =================
import reactLogo from "../assets/tech/React.svg";
import nextLogo from "../assets/tech/Next.js.svg";
import cssLogo from "../assets/tech/CSS3.svg";
import sassLogo from "../assets/tech/Sass.svg";
import bootstrapLogo from "../assets/tech/Bootstrap.svg";
import reduxLogo from "../assets/tech/Redux.svg";
import tailwindLogo from "../assets/tech/tailwind.svg";
import jsLogo from "../assets/tech/JavaScript.svg";
import htmlLogo from "../assets/tech/HTML5.svg";
import mongoLogo from "../assets/tech/MongoDB.svg";
import nodeLogo from "../assets/tech/Node.js.svg";
import expressLogo from "../assets/tech/Express.svg";

// ================= DATA =================
const stackData = [
  {
    title: "Frontend",
    techs: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SCSS", logo: sassLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "React", logo: reactLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next.js", logo: nextLogo },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", logo: nodeLogo },
      { name: "Express.js", logo: expressLogo },
    ],
  },
  {
    title: "Database",
    techs: [{ name: "MongoDB", logo: mongoLogo }],
  },
];

// ================= ANIMATION VARIANTS =================
const categoryVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

// ================= GPU FLOAT EFFECT =================
const floatAnimation = (delay = 0) => ({
  y: [0, -8, 0],
  transition: {
    duration: 3,
    ease: "easeInOut",
    repeat: Infinity,
    delay,
  },
});

// ================= BLINK / PULSE TEXT EFFECT =================
const blinkAnimation = {
  opacity: [0.4, 1, 0.4],
  transition: {
    duration: 2.5,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

// ================= COMPONENT =================
const TechStack = () => {
  return (
    <section
      className="
        w-full mx-auto px-6
        py-16 sm:py-20 lg:py-24
        bg-linear-to-br from-[#10151f] via-[#06070a] to-[#060f28]
      "
    >
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-4xl font-semibold text-white">
          Technology Stack
        </h2>

        <motion.p
          animate={blinkAnimation}
          className="text-white/60 mt-2 will-change-opacity"
        >
          Tools and platforms leveraged to build scalable full-stack systems
        </motion.p>
      </div>

      {/* Categories */}
      <div className="space-y-14 sm:space-y-20">
        {stackData.map((category) => (
          <motion.div
            key={category.title}
            variants={categoryVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-medium text-white mb-6 sm:mb-8">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
              {category.techs.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariant}
                  whileHover={{ scale: 1.08 }}
                  className="
                    flex flex-col items-center gap-3 sm:gap-4
                    p-4 sm:p-6
                    rounded-xl border border-white/10
                    bg-white/5 backdrop-blur-md
                    hover:border-white/30 transition
                  "
                >
                  {/* Floating SVG */}
                  <motion.img
                    src={tech.logo}
                    alt={tech.name}
                    animate={floatAnimation(index * 0.25)}
                    className="
                      w-10 h-10 sm:w-12 sm:h-12
                      object-contain
                      transform-gpu
                      will-change-transform
                      select-none
                    "
                  />

                  <span className="text-sm text-white/80">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

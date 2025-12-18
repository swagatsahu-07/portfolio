import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const AboutSection = () => {
  return (
    <div className="w-[90%] md:w-[400px] rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all mx-auto text-center">

      <h2 className="text-2xl font-semibold text-gray-300 mb-6">
        Connect With Me
      </h2>

      <div className="flex justify-center gap-8">

        {/* Gmail (Web) */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=swagatsahu9090@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:scale-110 transition"
        >
          <SiGmail className="text-red-500 text-5xl" />
          <span className="text-gray-300 mt-2 text-sm">Gmail</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/swagatsahu-07"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:scale-110 transition"
        >
          <FaGithub className="text-gray-300 text-5xl" />
          <span className="text-gray-300 mt-2 text-sm">GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/swagatsahu2001/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:scale-110 transition"
        >
          <FaLinkedin className="text-blue-500 text-5xl" />
          <span className="text-gray-300 mt-2 text-sm">LinkedIn</span>
        </a>

      </div>
    </div>
  );
};

export default AboutSection;

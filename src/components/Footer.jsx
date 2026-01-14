import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const moveToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#06070a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-12">

        {/* TOP */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* BRAND */}
          <div className="text-white text-lg font-semibold">
            Swagat<span className="text-white/40">.dev</span>
          </div>

          {/* NAV */}
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-white/60">
            <li>
              <Link
                to="/"
                onClick={moveToTop}
                className="hover:text-white transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={moveToTop}
                className="hover:text-white transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/project"
                onClick={moveToTop}
                className="hover:text-white transition"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={moveToTop}
                className="hover:text-white transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* SOCIALS */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/swagatsahu-07"
              className="text-white/60 hover:text-white transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/swagatsahu2001/"
              className="text-white/60 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=swagatsahu9090@gmail.com"
              className="text-white/60 hover:text-white transition"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 h-px bg-white/10" />

        {/* BOTTOM */}
        <div className="text-center text-sm bg-linear-to-l from-blue-700 via-red-500 to-green-600 bg-clip-text text-transparent">
          © {new Date().getFullYear()} Swagat. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

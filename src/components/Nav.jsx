import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HireMeModal from "./HireMeModal";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass =
    "text-gray-300 hover:text-white transition-colors duration-200";

  return (
    <>
      {/* NAV BAR */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#06070a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
          {/* LOGO */}
          <NavLink
            to="/"
            className="text-xl text-gray-300 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Swagat<span className="text-white/40">.dev</span>
          </NavLink>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/project" className={linkClass}>Projects</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>

          {/* DESKTOP CTA */}
          <button
            onClick={() => setOpen(true)}
            className="hidden md:inline-flex px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 transition-all duration-300"
          >
            Hire Me
          </button>

          {/* MOBILE HAMBURGER / CLOSE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
          >
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-[#06070a]/95 backdrop-blur-md border-t border-white/10 transition-all duration-300 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center gap-8 py-10">
            <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/project" className={linkClass} onClick={() => setMenuOpen(false)}>Projects</NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>

            {/* MOBILE CTA */}
            <button
              onClick={() => {
                setMenuOpen(false);
                setOpen(true);
              }}
              className="mt-4 px-8 py-3 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      {/* MODAL */}
      <HireMeModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Nav;

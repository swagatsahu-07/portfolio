import React from "react";
import { Code2, Zap, Layout, Palette } from "lucide-react";

const PortfolioSection = () => {
  return (
    <section className="bg-[#111111] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">
          Crafting digital experiences with precision & creativity
        </h2>
        <p className="text-gray-400 text-lg mb-16">
          I design and develop modern, responsive web applications that deliver
          both performance and beauty.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <Code2 className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Full Stack</h3>
            <p className="text-gray-400">
              Building dynamic, scalable apps with MERN stack.
            </p>
          </div>

          <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <Layout className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend Design</h3>
            <p className="text-gray-400">
              Clean, responsive UI with modern animations.
            </p>
          </div>

          <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <Palette className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">UI/UX Vision</h3>
            <p className="text-gray-400">
              Creating interfaces that feel intuitive and elegant.
            </p>
          </div>

          <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <Zap className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Performance</h3>
            <p className="text-gray-400">
              Optimized code and fast loading experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

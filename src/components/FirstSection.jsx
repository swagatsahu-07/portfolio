import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Code2, Zap, Layout, Palette } from "lucide-react";
import video from "../assets/video1.mp4";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const FirstSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".feature",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".feature",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-linear-to-br from-[#06070a] via-[#060f28] to-[#10151f]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        {/* TOP: VIDEO + TEXT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* VIDEO */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-fit"
            />

            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          </div>

          {/* TEXT */}
          <div className="text-left flex flex-col justify-center h-[530px]">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Crafting digital experiences
              <span className="block text-white/60">
                with precision & creativity
              </span>
            </h2>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              Icon: Code2,
              title: "Full Stack",
              color: "text-indigo-400",
              desc: "Scalable applications built with modern JavaScript stacks.",
            },
            {
              Icon: Layout,
              title: "Frontend Design",
              color: "text-pink-400",
              desc: "Clean layouts with thoughtful motion and responsiveness.",
            },
            {
              Icon: Palette,
              title: "UI / UX Vision",
              color: "text-green-400",
              desc: "Interfaces that feel intuitive, purposeful, and refined.",
            },
            {
              Icon: Zap,
              title: "Performance",
              color: "text-yellow-400",
              desc: "Optimized code for speed, stability, and smooth experiences.",
            },
          ].map(({ Icon, title, color, desc }) => (
            <div
              key={title}
              className="feature rounded-2xl bg-white/5 backdrop-blur-xl p-8 border border-white/10"
            >
              <Icon className={`w-10 h-10 ${color} mb-6`} />
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirstSection;

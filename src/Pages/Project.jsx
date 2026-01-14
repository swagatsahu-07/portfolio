import React, { useState } from "react";
import floravision from "../assets/projects/floravision.png";

const Project = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Flora Vision",
      category: "Frontend",
      description:
        "A premium plant e-commerce frontend focusing on visual hierarchy, glassmorphism, and clean UI composition.",
      caseStudy: {
        problem:
          "Traditional plant stores lack engaging digital experiences and clear product presentation.",
        solution:
          "Designed a visually rich, conversion-focused UI using glassmorphism and modern layout patterns.",
        highlights: [
          "Glass UI system",
          "Custom SVG assets",
          "Responsive grid layout",
          "Clean UX hierarchy",
        ],
      },
      tech: ["React", "Vite", "Tailwind CSS"],
      live: "https://flora-vision-six.vercel.app/",
      github: "https://github.com/swagatsahu-07/flora-vision",
      preview: floravision,
    },
    {
      id: 2,
      title: "Resume Screening Platform",
      category: "Full Stack",
      description:
        "Automated resume shortlisting based on required tech stack keyword extraction.",
      caseStudy: {
        problem:
          "Recruiters spend excessive time manually filtering resumes.",
        solution:
          "Built a keyword-driven resume screening system using backend parsing.",
        highlights: [
          "PDF & DOC parsing",
          "Keyword matching",
          "Scalable backend logic",
        ],
      },
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "#",
      github: "#",
      preview: "/projects/resume-platform.png",
    },
  ];

  return (
    <section className="w-full px-6 py-24">

      {/* HERO */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="font-thin text-gray-100 text-[clamp(3.5rem,10vw,9rem)] leading-[1.05]">
          My Works
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-[clamp(0.95rem,2.3vw,1.05rem)]">
          Selected projects showcasing design thinking, execution quality,
          and real-world problem solving.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              group
              rounded-2xl overflow-hidden
              bg-white/5
              backdrop-blur-md
              transition
              hover:-translate-y-1
            "
          >
            {/* PREVIEW (mobile optimized) */}
            <img
              src={project.preview}
              alt={project.title}
              className="w-full h-40 sm:h-48 md:h-56 object-cover object-top"
            />

            {/* CONTENT (mobile optimized) */}
            <div className="p-4 sm:p-5 md:p-7">
              <span className="text-xs uppercase text-gray-400">
                {project.category}
              </span>

              <h3 className="text-xl sm:text-2xl font-semibold text-white mt-1 sm:mt-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2 sm:mt-3 leading-relaxed line-clamp-2 sm:line-clamp-none">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 sm:mt-6 text-sm font-medium">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Live Demo →
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:underline"
                >
                  GitHub →
                </a>
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-white underline"
                >
                  Case Study →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CASE STUDY MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 sm:px-6">
          <div className="max-w-3xl w-full bg-[#0b0f1a] rounded-2xl p-6 sm:p-10 relative">

            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              {activeProject.title}
            </h2>

            <div className="mt-6 space-y-6 text-gray-300">
              <div>
                <h4 className="text-sm uppercase text-gray-400">Problem</h4>
                <p className="mt-2 leading-relaxed">
                  {activeProject.caseStudy.problem}
                </p>
              </div>

              <div>
                <h4 className="text-sm uppercase text-gray-400">Solution</h4>
                <p className="mt-2 leading-relaxed">
                  {activeProject.caseStudy.solution}
                </p>
              </div>

              <div>
                <h4 className="text-sm uppercase text-gray-400">Highlights</h4>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {activeProject.caseStudy.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Project;

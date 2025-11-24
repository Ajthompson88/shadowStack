// src/components/Projects.jsx
import React from "react";
import SectionTitle from "./SectionTitle";
import projects from "../data/project.js"; // Adjust the import path as necessary

const Projects = () => {
  return (
    <section
    id="projects"
    className="glossy-section bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Projects" />

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glossy-card backdrop-blur-md bg-white/5 bg-gray-800 rounded-xl shadow-lg hover:shadow-blueglow/50 p-6 transition-transform transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-2 text-blueglow">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <p className="text-sm text-gray-400 mb-4">
                <span className="font-medium text-white">Stack:</span>{" "}
                {project.tech.join(", ")}
              </p>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueglow hover:text-blueglow-light underline"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueglow hover:text-blueglow-light underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

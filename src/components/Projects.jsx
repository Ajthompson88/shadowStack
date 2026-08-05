import Section from "../layout/Section";
import SectionTitle from "./SectionTitle";
import projects from "../data/projects.js";

const Projects = () => {
  return (
    <Section
      id="projects"
      className="glossy-section"
     
    >
      <SectionTitle title="Projects" />

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="
            rounded-2xl
            border border-white/10
            bg-noir-800
            p-6
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-blueglow/40
            "
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
    </Section>
  );
};

export default Projects;

import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import Section from "../layout/Section";
import SectionTitle from "./SectionTitle";
import { archivedProjects, featuredProjects } from "../data/projects.js";

export default function Projects() {
  return (
    <Section id="work" maxWidth="max-w-6xl" className="border-b border-white/10">
      <SectionTitle
        eyebrow="Featured work"
        title="Systems built to solve real problems"
        description="Two projects that show how I think across data, backend services, interfaces, tooling, and the people using them."
        align="left"
      />

      <div className="space-y-8">
        {featuredProjects.map((project, index) => (
          <article key={project.id} className="surface-card overflow-hidden">
            <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
              <div className="border-b border-white/10 bg-noir-900/80 p-8 lg:border-b-0 lg:border-r">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blueglow">Case study 0{index + 1}</p>
                <h3 className="mt-4 font-display text-3xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-slate-400">{project.role}</p>
                <p className="mt-6 leading-7 text-slate-300">{project.summary}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((tech) => <span key={tech} className="tech-pill">{tech}</span>)}
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 font-semibold text-blueglow hover:text-blueglow-light">
                  <FaGithub aria-hidden="true" /> View repository <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>

              <div className="p-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-white">The problem</h4>
                    <p className="mt-3 leading-7 text-slate-400">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-white">My approach</h4>
                    <p className="mt-3 leading-7 text-slate-400">{project.approach}</p>
                  </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-7">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Evidence in the build</h4>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {project.evidence.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                        <FiCheck className="mt-1 shrink-0 text-blueglow" aria-hidden="true" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 border-t border-white/10 pt-10">
        <h3 className="font-display text-xl font-semibold text-white">Earlier work</h3>
        <p className="mt-2 max-w-3xl text-slate-400">Bootcamp projects that document my path into software development.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {archivedProjects.map((project) => (
            <a key={project.title} href={project.github} target="_blank" rel="noreferrer" className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-blueglow/40 hover:bg-white/[0.04]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-white">{project.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{project.description}</p>
                </div>
                <FiArrowUpRight className="shrink-0 text-slate-500 transition group-hover:text-blueglow" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

// src/components/Hero.jsx
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowRight, FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10">
      <div className="hero-grid absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[78vh] max-w-6xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="animate-fadeIn">
          <p className="eyebrow">Backend-focused full-stack developer</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            I build reliable software by understanding the whole system.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            I&apos;m Andrew Thompson. I build database-driven applications and REST APIs with TypeScript, Node.js, Express, PostgreSQL, Prisma, and React—backed by 15+ years of leadership, troubleshooting, and customer communication.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#work" className="button-primary">
              View featured work <FiArrowRight aria-hidden="true" />
            </a>
            <a href="/Andrew_Thompson_Resume.pdf" className="button-secondary" target="_blank" rel="noreferrer">
              Résumé <FiDownload aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-sm text-slate-400">
            <a className="social-link" href="https://www.linkedin.com/in/andrew-thompson-442477aa" target="_blank" rel="noreferrer">
              <FaLinkedinIn aria-hidden="true" /> LinkedIn
            </a>
            <a className="social-link" href="https://github.com/Ajthompson88" target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>

        <aside className="surface-card animate-slideFadeIn p-7" aria-label="Professional summary">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blueglow">What I bring</p>
          <dl className="mt-6 space-y-6">
            <div>
              <dt className="font-display text-2xl font-semibold text-white">Backend foundation</dt>
              <dd className="mt-2 leading-7 text-slate-400">API design, relational data modeling, validation, authentication, and persistent workflows.</dd>
            </div>
            <div className="border-t border-white/10 pt-6">
              <dt className="font-display text-2xl font-semibold text-white">Operational judgment</dt>
              <dd className="mt-2 leading-7 text-slate-400">Years spent diagnosing technical problems, leading teams, improving processes, and explaining complex information clearly.</dd>
            </div>
            <div className="border-t border-white/10 pt-6">
              <dt className="font-display text-2xl font-semibold text-white">Verified delivery</dt>
              <dd className="mt-2 leading-7 text-slate-400">Dockerized environments, automated checks, targeted tests, and documentation that make results repeatable.</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

import SectionTitle from "./SectionTitle";
import Section from "../layout/Section";

export default function About() {
  return (
    <Section id="about">
      <SectionTitle title="About Me" />
      <p className="text-lg leading-relaxed">
        I'm Andrew Thompson, a full-stack developer with a growing focus on backend engineering. I build applications with JavaScript and TypeScript across the stack, working with technologies including Node.js, Express, React, PostgreSQL, MongoDB, REST APIs, and GraphQL.
      </p>
      <p className="text-lg leading-relaxed mt-6">
        I came to software development after years of working with mechanical systems and solving hands-on problems. That background shaped how I approach code: understand how the pieces interact, diagnose what isn't working, and build solutions that are practical, maintainable, and purposeful.
      </p>
      <p className="text-lg leading-relaxed mt-6">
        I'm especially drawn to backend development, API design, data modeling, and the architecture behind an application. I enjoy taking an idea from concept to working software and continually expanding my knowledge as I encounter new problems to solve.
      </p>
      <p className="text-lg leading-relaxed mt-6">
        Outside of code, I'm driven by faith, family, and curiosity. I believe technology is ultimately a tool—and I want to use it to build things that are useful, meaningful, and capable of making a positive difference.
      </p>
    </Section>
  );
}

import Section from "../layout/Section";
import SectionTitle from "./SectionTitle";

const capabilities = [
  {
    title: "Backend and APIs",
    skills: "TypeScript · Node.js · Express · REST APIs",
    evidence: "Versioned routes, service boundaries, request validation, authentication, access control, and consistent error handling in ReliefRoot and FlowBoard.",
  },
  {
    title: "Data and persistence",
    skills: "PostgreSQL · Prisma · SQL · MongoDB",
    evidence: "Normalized relational models, migrations, seed workflows, persistent sessions, analytics-ready relationships, and database-backed CRUD operations.",
  },
  {
    title: "Frontend integration",
    skills: "React · Vite · Tailwind CSS · HTML/CSS",
    evidence: "Responsive component-based interfaces, typed client-server flows, protected routes, form states, and accessible interaction patterns.",
  },
  {
    title: "Delivery and verification",
    skills: "Docker · Git · GitHub Actions · Postman",
    evidence: "Reproducible environments, automated lint/test/build checks, integration tests, regression coverage, and documented verification steps.",
  },
];

export default function Skills() {
  return (
    <Section id="skills" maxWidth="max-w-6xl" className="border-y border-white/10 bg-noir-900/50">
      <SectionTitle eyebrow="Technical skills" title="Evidence over keyword lists" description="The tools matter. What I have built and verified with them matters more." align="left" />
      <div className="grid gap-5 md:grid-cols-2">
        {capabilities.map((capability) => (
          <article key={capability.title} className="surface-card p-7">
            <h3 className="font-display text-xl font-semibold text-white">{capability.title}</h3>
            <p className="mt-3 text-sm font-semibold text-blueglow">{capability.skills}</p>
            <p className="mt-4 leading-7 text-slate-400">{capability.evidence}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

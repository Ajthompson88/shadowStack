import { FiMessageSquare, FiSearch, FiCheckCircle } from "react-icons/fi";
import Section from "../layout/Section";
import SectionTitle from "./SectionTitle";

const steps = [
  {
    title: "Diagnose",
    icon: <FiSearch className="text-2xl text-blueglow" aria-hidden="true" />,
    description: "Trace the full request path, isolate the failure, and understand how the surrounding system behaves before changing it.",
  },
  {
    title: "Communicate",
    icon: <FiMessageSquare className="text-2xl text-blueglow" aria-hidden="true" />,
    description: "Make the problem, tradeoffs, and next action clear to technical teammates, stakeholders, and end users.",
  },
  {
    title: "Verify",
    icon: <FiCheckCircle className="text-2xl text-blueglow" aria-hidden="true" />,
    description: "Use focused tests, logs, builds, and documented reproduction steps to prove the result instead of assuming it works.",
  },
];

export default function WorkMethod() {
  return (
    <Section id="approach" maxWidth="max-w-6xl">
      <SectionTitle eyebrow="How I work" title="Diagnose. Communicate. Verify." align="left" />
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map(({ title, icon, description }, index) => (
          <article key={title} className="surface-card p-7">
            <div className="flex items-center justify-between">
              {icon}
              <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
            </div>
            <h3 className="mt-8 font-display text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-3 leading-7 text-slate-400">{description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

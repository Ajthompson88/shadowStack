import SectionTitle from "./SectionTitle";
import Section from "../layout/Section";

export default function About() {
  return (
    <Section id="about" maxWidth="max-w-6xl" className="border-y border-white/10 bg-noir-900/50">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionTitle eyebrow="About Andrew" title="A systems thinker who learned software from the real world inward" align="left" />
        <div className="space-y-6 text-lg leading-8 text-slate-300">
          <p>I came to software after years of diagnosing mechanical problems, running operations, coaching teams, managing inventory, and helping customers make sense of technical information. That experience taught me to look beyond the visible symptom and understand how the pieces interact.</p>
          <p>Backend development feels natural for the same reason: I enjoy modeling data, tracing a request through the system, finding where assumptions break down, and building a solution that another person can understand and maintain.</p>
          <p>Faith and family shape how I work. I value integrity, responsibility, service, and steady growth. Curiosity keeps me learning—whether I&apos;m exploring software architecture, restoring a vehicle, or understanding why a system behaves the way it does.</p>
        </div>
      </div>
    </Section>
  );
}

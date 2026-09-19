import Section from "../layout/Section";
import SectionTitle from "./SectionTitle";

const strengths = [
  { label: "Leadership", proof: "Led and developed teams of 15+ employees while owning daily operations, coaching, and escalations." },
  { label: "Process improvement", proof: "Improved order-processing time by approximately 20% and reduced inventory shrinkage through better workflows and accountability." },
  { label: "Technical communication", proof: "Translate specifications, product data, and complex issues into clear guidance for customers and cross-functional teams." },
  { label: "Troubleshooting", proof: "More than 15 years diagnosing technical, operational, and customer-impacting problems under real-world pressure." },
];

export default function Experience() {
  return (
    <Section id="background" maxWidth="max-w-6xl">
      <SectionTitle eyebrow="Professional background" title="Experience that carries into engineering" description="My software career is new. The habits behind dependable engineering are not." align="left" />
      <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
        {strengths.map((strength) => (
          <article key={strength.label} className="bg-noir-900 p-7 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-white">{strength.label}</h3>
            <p className="mt-3 leading-7 text-slate-400">{strength.proof}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-300">I&apos;m looking for a junior backend or full-stack role where careful problem-solving, clear communication, and ownership matter as much as knowing the framework of the month.</p>
    </Section>
  );
}

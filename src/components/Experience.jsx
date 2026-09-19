import Section from "../layout/Section";
import SectionTitle from "./SectionTitle";

const lessons = [
  {
    label: "Look past the symptom",
    detail: "Automotive diagnostics and operational troubleshooting taught me to trace a problem through the whole system before deciding where the fix belongs.",
  },
  {
    label: "Make the answer understandable",
    detail: "Working with customers, technicians, employees, and leadership taught me to adjust the explanation without losing the important technical details.",
  },
  {
    label: "Build for the person using it",
    detail: "Years on the operational side of a business keep me focused on whether a solution is practical, maintainable, and genuinely useful—not merely technically interesting.",
  },
];

export default function Experience() {
  return (
    <Section id="background" maxWidth="max-w-6xl">
      <SectionTitle eyebrow="Professional background" title="The experience behind the developer" description="My path into software did not start with code. It started with being responsible for people, systems, and problems that needed a real answer." align="left" />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="surface-card p-7 sm:p-8">
          <p className="font-display text-2xl font-semibold leading-9 text-white">
            Before I built APIs, I was often the person others called when something was not working.
          </p>
          <p className="mt-5 leading-7 text-slate-400">
            Sometimes it was a vehicle, an inventory process, a team under pressure, or a customer situation. The setting changed, but the responsibility stayed familiar: understand what is actually happening, make a clear decision, and own the outcome.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {lessons.map((lesson, index) => (
            <article key={lesson.label} className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr]">
              <span className="font-mono text-sm text-blueglow">0{index + 1}</span>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">{lesson.label}</h3>
                <p className="mt-2 leading-7 text-slate-400">{lesson.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

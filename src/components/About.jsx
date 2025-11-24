import SectionTitle from "./SectionTitle";
import Section from "../layout/Section";

export default function About() {
  return (
    <Section id="about">
      <SectionTitle title="About Me" />
      <p className="text-lg leading-relaxed">
        I'm Andrew Thompson — a full-stack developer who crafts code like cinema. My mission? Build sleek, performant experiences that feel alive. After transitioning from a background in mechanical intuition (cars, systems, rhythm), I discovered the deep artistry in code. I now blend form, function, and flow across the stack.
      </p>
      <p className="text-lg leading-relaxed mt-6">
        I thrive in the shadows of innovation — translating complex problems into clean architectures. Whether it's RESTful APIs, elegant React interfaces, or microservice orchestration, my tools of choice are JavaScript, TypeScript, and whatever gets the job done right.
      </p>
      <p className="text-lg leading-relaxed mt-6">
        Outside of code, I'm driven by faith, family, and discovery. I believe curiosity is sacred — and technology is a tool to bring light to others.
      </p>
    </Section>
  );
}

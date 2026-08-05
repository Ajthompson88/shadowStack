import SectionTitle from "./SectionTitle";
import Section from "../layout/Section";
import useReveal from "../hooks/useReveal";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle title="Skills" />

      <div className="space-y-8 mt-8">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xl font-semibold text-blueglow mb-6">
              {group.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {group.skills.map((skill) => (
                <SkillItem
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SkillItem({ icon: Icon, name }) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center transition-transform duration-500 ${
        isVisible ? "animate-glow" : "opacity-0"
      }`}
    >
      {Icon && (
        <Icon className="text-4xl text-blueglow hover:text-blueglow-light hover:scale-110 transition-transform duration-300" />
      )}

      <span className="mt-2 text-sm">{name}</span>
    </div>
  );
}
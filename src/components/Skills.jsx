import SectionTitle from './SectionTitle';
import { skills } from '../data/skills';
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Skills" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8">
          {skills.map((skill, index) => (
            <SkillItem key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillItem({ icon: Icon, name }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center transition-transform duration-500 ${
        isVisible ? "animate-glow" : "opacity-0"
      }`}
    >
      {Icon && <Icon className="text-4xl text-indigo-400 hover:text-indigo-300 hover:scale-110 transition-transform duration-300" />}
      <span className="mt-2 text-sm">{name}</span>
    </div>
  );
}

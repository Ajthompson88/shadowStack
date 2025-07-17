// src/components/SkillIcon.jsx
import { useRef, useEffect, useState } from "react";

export default function SkillIcon({ icon: Icon, name }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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
      className={`flex flex-col items-center transition-transform duration-300 ${
        isVisible ? "animate-glow" : "opacity-0"
      }`}
    >
      {Icon && <Icon className="text-4xl text-indigo-400 hover:text-indigo-300 hover:scale-110 transition-all duration-300" />}
      <span className="mt-2 text-sm">{name}</span>
    </div>
  );
}


import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiTypescript, SiVite } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiDocker } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiGithubactions } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { SiJavascript } from "react-icons/si";



export const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
  },
];

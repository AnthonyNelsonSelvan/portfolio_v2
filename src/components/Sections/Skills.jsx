import { memo } from "react";
import {
  FaCode, FaCss3Alt, FaDatabase, FaDocker, FaGitAlt,
  FaGithub, FaHtml5, FaJs, FaNodeJs, FaPython,
  FaReact, FaServer, FaTools,
} from "react-icons/fa";
import {
  SiExpress, SiLinux, SiMongodb, SiNginx,
  SiPostman, SiRedis, SiTailwindcss, SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Defined at module level — never recreated, icons are stable JSX
const SECTIONS = [
  {
    title: "Languages",
    icon: <FaCode />,
    skills: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Python", icon: <FaPython /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "SQL", icon: null },
    ],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: null },
      { name: "JWT", icon: null },
    ],
  },
  {
    title: "Databases & Caching",
    icon: <FaDatabase />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    title: "Frontend",
    icon: null,
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Infrastructure",
    icon: <FaTools />,
    skills: [
      { name: "Linux", icon: <SiLinux /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Nginx", icon: <SiNginx /> },
      { name: "DNS", icon: null },
      { name: "BIND9", icon: null },
      { name: "System Design", icon: null },
    ],
  },
  {
    title: "Developer Tools",
    icon: <FaTools />,
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "VS Code", icon: <VscVscode /> },
    ],
  },
];

const EXPLORING = [
  "System Design",
  "Redis",
  "Nginx",
  "Scalable Backend Architecture",
];

// Isolated so parent re-renders don't cascade into each skill chip
const SkillChip = memo(({ name, icon }) => (
  <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-[#FAF8F5] px-5 py-3 transition-all duration-300 hover:bg-[#2B2B2B] hover:text-white hover:scale-105 cursor-default">
    {icon && <span className="text-xl">{icon}</span>}
    <span className="font-medium">{name}</span>
  </div>
));

SkillChip.displayName = "SkillChip";

// Isolated so only changed cards re-render
const SectionCard = memo(({ title, icon, skills }) => (
  <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div className="flex items-center gap-3 mb-8 text-[#8B5E3C]">
      {icon && <div className="text-3xl">{icon}</div>}
      <h2 className="text-2xl font-semibold text-black">{title}</h2>
    </div>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill) => (
        <SkillChip key={skill.name} name={skill.name} icon={skill.icon} />
      ))}
    </div>
  </div>
));

SectionCard.displayName = "SectionCard";

export default function Skills() {
  return (
    <section className="min-h-screen bg-[#F7F3EE] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[8px] text-gray-500 text-sm">
            MY TOOLBOX
          </p>
          <h1 className="text-6xl font-bold mt-4 text-[#2B2B2B]">
            Skills & Technologies
          </h1>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8">
            A collection of technologies I use to design, build and deploy
            scalable web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {SECTIONS.map((section) => (
            <SectionCard
              key={section.title}
              title={section.title}
              icon={section.icon}
              skills={section.skills}
            />
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-gray-200 bg-white p-8">
          <h3 className="text-2xl font-semibold mb-6">Currently Exploring</h3>
          <div className="flex flex-wrap gap-4">
            {EXPLORING.map((item) => (
              <span key={item} className="rounded-full bg-[#2B2B2B] text-white px-5 py-3">
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
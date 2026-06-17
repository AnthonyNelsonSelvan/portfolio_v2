import {
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaCss3Alt,
  FaHtml5,
  FaDatabase,
  FaServer,
  FaTools,
  FaCode,
} from "react-icons/fa";

import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiTailwindcss,
  SiPostman,
  SiLinux,
  SiNginx,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const sections = [
  {
    title: "Languages",
    icon: <FaCode />,
    skills: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Python", icon: <FaPython /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "SQL", icon: "" },
    ],
  },

  {
    title: "Backend",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: "" },
      { name: "JWT", icon: "" },
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
    icon: "",
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
      { name: "DNS", icon: "" },
      { name: "BIND9", icon: "" },
      { name: "System Design", icon: "" },
    ],
  },

  {
    title: "Developer Tools",
    icon: "🚀",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "VS Code", icon: <VscVscode /> },
    ],
  },
];

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
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-8 text-[#8B5E3C]">
                <div className="text-3xl">{section.icon}</div>
                <h2 className="text-2xl font-semibold text-black">
                  {section.title}
                </h2>
              </div>

              <div className="flex flex-wrap gap-4">
                {section.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-full border border-gray-200 bg-[#FAF8F5] px-5 py-3 transition-all duration-300 hover:bg-[#2B2B2B] hover:text-white hover:scale-105 cursor-default"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-gray-200 bg-white p-8">
          <h3 className="text-2xl font-semibold mb-6">
            Currently Exploring
          </h3>

          <div className="flex flex-wrap gap-4">
            {[
              "System Design",
              "Redis",
              "Nginx",
              "Scalable Backend Architecture",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#2B2B2B] text-white px-5 py-3"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
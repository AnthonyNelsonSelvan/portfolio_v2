import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
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

const SPRING_EASE = [0.16, 1, 0.3, 1];

const chipContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const chipItem = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: SPRING_EASE,
    },
  },
};

const SkillChip = memo(({ name, icon }) => (
  <motion.div
    variants={chipItem}
    className="flex items-center gap-2 rounded-full border border-gray-200 bg-[#FAF8F5] px-3 py-2 sm:px-5 sm:py-3 transition-all duration-300 hover:bg-[#2B2B2B] hover:text-white hover:scale-105 cursor-default"
    whileHover={{ scale: 1.05 }}
  >
    {icon && <span className="text-base sm:text-xl">{icon}</span>}
    <span className="font-medium text-sm sm:text-base">{name}</span>
  </motion.div>
));

SkillChip.displayName = "SkillChip";

const cardContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const SectionCard = memo(({ title, icon, skills, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: SPRING_EASE }}
      className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-5 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8 text-[#8B5E3C]">
        {icon && <div className="text-2xl sm:text-3xl">{icon}</div>}
        <h2 className="text-lg sm:text-2xl font-semibold text-black">{title}</h2>
      </div>
      <motion.div
        variants={chipContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex flex-wrap gap-2 sm:gap-4"
      >
        {skills.map((skill) => (
          <SkillChip key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </motion.div>
    </motion.div>
  );
});

SectionCard.displayName = "SectionCard";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen bg-[#F7F3EE] py-14 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: SPRING_EASE }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="uppercase tracking-[6px] sm:tracking-[8px] text-gray-500 text-xs sm:text-sm">
            MY TOOLBOX
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4 text-[#2B2B2B]">
            Skills & Technologies
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-7 sm:leading-8">
            A collection of technologies I use to design, build and deploy
            scalable web applications.
          </p>
        </motion.div>

        <motion.div
          variants={cardContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
        >
          {SECTIONS.map((section, i) => (
            <SectionCard
              key={section.title}
              title={section.title}
              icon={section.icon}
              skills={section.skills}
              index={i}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: SPRING_EASE }}
          className="mt-12 sm:mt-16 lg:mt-20 rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-5 sm:p-8"
        >
          <h3 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6">Currently Exploring</h3>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {EXPLORING.map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#2B2B2B] text-white px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-base"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
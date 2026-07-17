import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "../reusable/ProjectCard";

// Pure component — only re-renders if the project object reference changes
const MemoProjectCard = memo(ProjectCard);
MemoProjectCard.displayName = "MemoProjectCard";

const SPRING_EASE = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: SPRING_EASE,
    },
  },
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: SPRING_EASE }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl font-bold">Featured Projects</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            A selection of projects that reflect my interest in backend
            engineering, distributed systems, and modern web infrastructure.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <MemoProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
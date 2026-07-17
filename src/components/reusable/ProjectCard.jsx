import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SPRING_EASE = [0.16, 1, 0.3, 1];

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: SPRING_EASE }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="overflow-hidden rounded-3xl bg-[#ECE9E1]">
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.name}
            className="aspect-16/10 w-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        ) : (
          <div className="aspect-16/10 flex items-center justify-center text-6xl text-[#3F6B5733]">
            ::
          </div>
        )}
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.25em] text-[#3F6B57]">
            {project.category}
          </span>

          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="h-px bg-[#3F6B5722]"
          />
        </div>

        <h2 className="mt-4 text-3xl font-semibold text-neutral-900">
          {project.name}
        </h2>

        <p className="mt-4 max-w-xl leading-8 text-neutral-500">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech?.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
              className="rounded-full bg-[#F5F3EE] px-4 py-2 text-sm text-neutral-700"
            >
              {item}
            </motion.span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-8">
          <Link
            to={project.route}
            className="inline-flex items-center gap-2 text-[#3F6B57] transition-all duration-300 hover:gap-4"
          >
            <motion.span
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Explore Project
            </motion.span>
            <motion.span
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              &#8594;
            </motion.span>
          </Link>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-800"
          >
            GitHub &#8594;
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
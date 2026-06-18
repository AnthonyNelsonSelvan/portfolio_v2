import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-3xl bg-[#ECE9E1]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="aspect-16/10 w-full object-cover transition duration-700 group-hover:scale-105"
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

          <span className="h-px w-20 bg-[#3F6B5722]" />
        </div>

        <h2 className="mt-4 text-3xl font-semibold text-neutral-900">
          {project.name}
        </h2>

        <p className="mt-4 max-w-xl leading-8 text-neutral-500">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech?.map((item) => (
            <span
              key={item}
              className="rounded-full bg-[#F5F3EE] px-4 py-2 text-sm text-neutral-700"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-8">
          <Link
            to={project.route}
            className="inline-flex items-center gap-2 text-[#3F6B57] transition-all duration-300 hover:gap-4"
          >
            Explore Project
            <span>-&gt;</span>
          </Link>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-800"
          >
            GitHub -&gt;
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

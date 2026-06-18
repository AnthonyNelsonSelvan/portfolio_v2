const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-2xl border border-neutral-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h2 className="text-2xl font-semibold">{project.name}</h2>

      <p className="mt-3 text-neutral-600">{project.description}</p>

      <button className="mt-6 font-medium hover:underline">
        Explore Project -&gt;
      </button>
    </div>
  );
};

export default ProjectCard;

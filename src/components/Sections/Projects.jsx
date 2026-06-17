import React from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../reusable/ProjectCard";

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold">Featured Projects</h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            A selection of projects that reflect my interest in backend
            engineering, distributed systems, and modern web infrastructure.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-10 lg:px-20 lg:-translate-y-10"
    >
      <div className="max-w-4xl text-center lg:text-left">

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-none tracking-tight text-[#1D1D1D]">
          Building <span className="text-[#3F6B57]">systems</span>
          <br />
          that power
          <br />
          modern applications.
        </h1>

        <p className="mt-8 max-w-xl mx-auto lg:mx-0 text-lg lg:text-xl leading-8 text-gray-600">
          I design APIs, automate deployments, and build scalable backend
          systems that power modern web applications.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-10">

          {["Node.js", "Express", "Docker", "MongoDB", "React"].map((tech) => (
            <span
              key={tech}
              className="px-5 py-2 rounded-full bg-[#ECE9E1] border border-[#DDD7C8]"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Hero;
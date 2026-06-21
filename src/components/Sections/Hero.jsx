import React, { useEffect, useRef } from "react";

// Static: defined once at module level, not recreated on every render
const TECH_STACK = ["Node.js", "Express", "MongoDB", "React"];

// Injected safely using dangerouslySetInnerHTML to prevent React parser bugs
const HERO_STYLES = `
  @media (prefers-reduced-motion: no-preference) {
    [data-animate-scale] {
      opacity: 0;
      transform: scale(0.96);
      transition: opacity 0.9s ease, transform 0.9s ease;
    }
    [data-animate-scale].animate-in {
      opacity: 1;
      transform: scale(1);
    }
  }
  /* Immediately visible for users who prefer reduced motion */
  @media (prefers-reduced-motion: reduce) {
    [data-animate-scale] {
      opacity: 1;
      transform: none;
    }
  }
`;

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    const elements = section.querySelectorAll("[data-animate-scale]");
    if (!elements.length) return;

    // Single observer instance, not recreated per element
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            // Unobserve immediately — no need to keep watching
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px" }
    );

    elements.forEach((el) => observer.observe(el));

    // Cleanup disconnects all observations
    return () => observer.disconnect();
  }, []); // Empty dep array is correct — heroRef.current is stable after mount

  return (
    <section
      id="hero"
      ref={heroRef}
      // Avoid CSS transform on section — forces unnecessary compositor layer.
      // Use padding/margin instead to push content down.
      className="min-h-screen flex items-center px-6 md:px-10 lg:px-20 lg:mb-10"
    >
      {/* Style injected once securely */}
      <style dangerouslySetInnerHTML={{ __html: HERO_STYLES }} />

      <div className="max-w-4xl text-center lg:text-left">
        <h1
          data-animate-scale
          style={{ transitionDelay: "0ms" }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-none tracking-tight text-[#1D1D1D]"
        >
          Building <span className="text-[#3F6B57]">systems</span>
          <br />
          that power
          <br />
          modern applications.
        </h1>

        <p
          data-animate-scale
          style={{ transitionDelay: "150ms" }}
          className="mt-8 max-w-xl mx-auto lg:mx-0 text-lg lg:text-xl leading-8 text-gray-600"
        >
          I design APIs, automate deployments, and build scalable backend
          systems that power modern web applications.
        </p>

        <div
          data-animate-scale
          style={{ transitionDelay: "280ms" }}
          className="flex flex-wrap justify-center lg:justify-start gap-3 mt-10"
        >
          {TECH_STACK.map((tech) => (
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
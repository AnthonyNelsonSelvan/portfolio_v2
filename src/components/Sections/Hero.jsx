import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Static: defined once at module level, not recreated on every render
const TECH_STACK = ["Node.js", "Express", "MongoDB", "React"];

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

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
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-none tracking-tight text-[#1D1D1D]"
        >
          Building{" "}
          <motion.span
            initial={{ opacity: 0, color: "#3F6B57" }}
            animate={{ opacity: 1, color: "#3F6B57" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[#3F6B57]"
          >
            systems
          </motion.span>{" "}
          <br />
          that power
          <br />
          modern applications.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-8 max-w-xl mx-auto lg:mx-0 text-lg lg:text-xl leading-8 text-gray-600"
        >
          I design APIs, automate deployments, and build scalable backend
          systems that power modern web applications.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center lg:justify-start gap-3 mt-10"
        >
          {TECH_STACK.map((tech) => (
            <motion.span
              key={tech}
              variants={item}
              className="px-5 py-2 rounded-full bg-[#ECE9E1] border border-[#DDD7C8] hover:bg-[#3F6B57] hover:text-white hover:scale-105 transition-all duration-300 cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
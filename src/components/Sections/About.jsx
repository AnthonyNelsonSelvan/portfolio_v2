import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const INTERESTS = [
  "Gis Applications",
  "Backend Engineering",
  "Infrastructure",
  "System Design",
  "Developer Experience",
  "Scalable Architecture",
];

const SPRING_EASE = [0.16, 1, 0.3, 1];

const ABOUT_STYLES = `
  @media (prefers-reduced-motion: no-preference) {
    [data-animate-left] {
      opacity: 0;
      transform: translateX(-32px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    [data-animate-left].animate-in {
      opacity: 1;
      transform: translateX(0);
    }
    [data-animate-right] {
      opacity: 0;
      transform: translateX(32px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    [data-animate-right].animate-in {
      opacity: 1;
      transform: translateX(0);
    }
    [data-animate-item] {
      opacity: 0;
      transform: translateX(32px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    [data-animate-item].animate-in {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    [data-animate-left],
    [data-animate-right],
    [data-animate-item] {
      opacity: 1;
      transform: none;
    }
  }
  .interest-item {
    position: relative;
    transition: padding-left 0.3s ease;
  }
  .interest-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) scaleX(0);
    transform-origin: left;
    width: 20px;
    height: 1.5px;
    background: #3F6B57;
    transition: transform 0.3s ease;
  }
  .interest-item:hover { padding-left: 28px; }
  .interest-item:hover::before { transform: translateY(-50%) scaleX(1); }
  .interest-item h3 { transition: color 0.3s ease; }
  .interest-item:hover h3 { color: #3F6B57; }
`;

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: SPRING_EASE,
    },
  },
};

const About = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen px-6 md:px-10 lg:px-20 py-24 items-center -mb-12 hidden md:block"
    >
      {/* Injected securely */}
      <style dangerouslySetInnerHTML={{ __html: ABOUT_STYLES }} />

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.35em] text-gray-500 font-medium"
          >
            About
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: SPRING_EASE }}
            className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-[#1D1D1D]"
          >
            I don't just build
            <br />
            applications.
            <br />
            I build the{" "}
            <motion.span
              initial={{ opacity: 0, color: "#3F6B57" }}
              animate={inView ? { opacity: 1, color: "#3F6B57" } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-[#3F6B57]"
            >
              systems
            </motion.span>{" "}
            behind them.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: SPRING_EASE }}
            className="mt-10 space-y-6 text-lg leading-9 text-gray-600"
          >
            <p>
              I enjoy understanding how software works beneath the surface
              from designing scalable APIs and backend architectures to
              automating deployments and managing infrastructure.
            </p>
            <p>
              For me, great software isn't only about features. It's about
              reliability, maintainability, and creating systems that continue
              to perform as they grow.
            </p>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="lg:pt-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm uppercase tracking-[0.25em] text-gray-500"
          >
            What drives me
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mt-8 flex flex-col gap-6"
          >
            {INTERESTS.map((item, i) => (
              <motion.div
                key={item}
                variants={item}
                custom={i}
                className="interest-item border-b border-[#DDD7C8] pb-5"
              >
                <h3 className="text-2xl font-semibold text-[#1D1D1D]">
                  {item}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { useEffect, useRef } from "react";

const INTERESTS = [
  "Backend Engineering",
  "Infrastructure",
  "System Design",
  "Developer Experience",
  "Scalable Architecture",
];

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

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(
      "[data-animate-left], [data-animate-right], [data-animate-item]"
    );
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      // Replaced -translate-y-12 (forces compositor layer) with negative margin
      className="min-h-screen px-6 md:px-10 lg:px-20 py-24 flex items-center -mb-12"
    >
      {/* Injected securely */}
      <style dangerouslySetInnerHTML={{ __html: ABOUT_STYLES }} />

      <div className="grid lg:grid-cols-2 gap-20 items-start">

        {/* Left column */}
        <div>
          <p
            data-animate-left
            style={{ transitionDelay: "0ms" }}
            className="text-xs uppercase tracking-[0.35em] text-gray-500 font-medium"
          >
            About
          </p>

          <h2
            data-animate-left
            style={{ transitionDelay: "100ms" }}
            className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-[#1D1D1D]"
          >
            I don't just build
            <br />
            applications.
            <br />
            I build the{" "}
            <span className="text-[#3F6B57]">systems</span>{" "}
            behind them.
          </h2>

          <div
            data-animate-left
            style={{ transitionDelay: "200ms" }}
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
          </div>
        </div>

        {/* Right column */}
        <div className="lg:pt-20">
          <p
            data-animate-right
            style={{ transitionDelay: "150ms" }}
            className="text-sm uppercase tracking-[0.25em] text-gray-500"
          >
            What drives me
          </p>

          <div className="mt-8 flex flex-col gap-6">
            {INTERESTS.map((item, i) => (
              <div
                key={item}
                data-animate-item
                style={{ transitionDelay: `${250 + i * 80}ms` }}
                className="interest-item border-b border-[#DDD7C8] pb-5"
              >
                <h3 className="text-2xl font-semibold text-[#1D1D1D]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
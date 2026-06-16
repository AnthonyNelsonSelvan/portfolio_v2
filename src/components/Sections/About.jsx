const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-10 lg:px-20 py-24 flex items-center -translate-y-12"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-start">

        <div>

          <p className="text-xs uppercase tracking-[0.35em] text-gray-500 font-medium">
            About
          </p>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-[#1D1D1D]">
            I don't just build
            <br />
            applications.
            <br />
            I build the{" "}
            <span className="text-[#3F6B57]">
              systems
            </span>{" "}
            behind them.
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-9 text-gray-600">

            <p>
              I enjoy understanding how software works beneath
              the surface from designing scalable APIs and
              backend architectures to automating deployments
              and managing infrastructure.
            </p>

            <p>
              For me, great software isn't only about features.
              It's about reliability, maintainability, and
              creating systems that continue to perform as
              they grow.
            </p>

          </div>

        </div>


        <div className="lg:pt-20">

          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            What drives me
          </p>

          <div className="mt-8 flex flex-col gap-6">

            {[
              "Backend Engineering",
              "Infrastructure",
              "System Design",
              "Developer Experience",
              "Scalable Architecture",
            ].map((item) => (
              <div
                key={item}
                className="border-b border-[#DDD7C8] pb-5"
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
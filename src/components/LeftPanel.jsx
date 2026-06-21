import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import MagneticButton from "./feature/MagneticButton";
import Stagerred from "./feature/Stagerred";

const LeftPanel = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen lg:h-full px-6 py-8 md:px-10">
      <Stagerred className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 mt-6">
        <div className="w-full flex justify-center lg:justify-start">
          <img
            src="/me.jpg"
            alt="Portfolio Portrait"
            className="w-full max-w-65 lg:max-w-[200x] lg:max-h-[310px] rounded-2xl object-cover shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.01]"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 mt-3">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Hi, My Name is
          </h3>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Anthony Nelson
          </h1>

          <h2 className="text-lg lg:text-xl font-semibold text-gray-700">
            Full Stack Developer
          </h2>

          <p className="text-gray-600 max-w-sm leading-relaxed text-sm md:text-base">
            I'm a backend focused full-stack developer who enjoys building
            scalable systems, designing robust APIs, and turning complex ideas
            into reliable software.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <MagneticButton>
              <button onClick={() => window.location.href = 'mailto:anthony@anthonynelson.in'} className="border border-black px-4 py-2 text-sm font-medium rounded-full hover:bg-black hover:text-white transition-all duration-200">
                Reach me
              </button>
            </MagneticButton>

            <MagneticButton>
              <button className="border border-black px-4 py-2 text-sm font-medium rounded-full hover:bg-black hover:text-white transition-all duration-200">
                <a href="/Anthony_Nelson_CV.pdf" download={true}>
                Download CV
                </a>
              </button>
            </MagneticButton>
          </div>
        </div>
      </Stagerred>

      <div className="flex justify-center lg:justify-start gap-5 text-xl text-gray-700 mt-2 pt-4">
        <a
          href="https://github.com/AnthonyNelsonSelvan"
          target="_blank"
          rel="noreferrer"
          className="hover:text-black transition-colors"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/anthony-nelson-108b35343"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:anthony@anthonynelson.in"
          className="hover:text-red-500 transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default LeftPanel;

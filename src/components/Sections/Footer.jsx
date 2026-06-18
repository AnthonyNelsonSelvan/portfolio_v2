import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-[#DDD7C8]">
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-3xl font-semibold text-[#1D1D1D]">
          Thanks for taking the time
          <br />
          to explore my work.
        </p>

        <p className="mt-6 text-lg text-gray-600">See you around.</p>

        <p className="mt-3 text-[#3F6B57] font-medium">
          - Anthony Nelson
        </p>

        <div className="mt-12 flex justify-center items-center gap-8">
          <a
            href="https://github.com/AnthonyNelsonSelvan"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-gray-600 hover:text-[#3F6B57] transition-colors duration-300"
          >
            <FaGithub className="text-lg group-hover:-translate-y-1 transition-transform duration-300" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/anthony-nelson-108b35343"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-gray-600 hover:text-[#3F6B57] transition-colors duration-300"
          >
            <FaLinkedin className="text-lg group-hover:-translate-y-1 transition-transform duration-300" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:anthony@anthonynelson.in"
            className="group flex items-center gap-2 text-gray-600 hover:text-[#3F6B57] transition-colors duration-300"
          >
            <FaEnvelope className="text-lg group-hover:-translate-y-1 transition-transform duration-300" />
            <span>Email</span>
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-[#DDD7C8]">
          <p className="text-sm tracking-wide text-gray-500">
            Copyright 2026 Anthony Nelson
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

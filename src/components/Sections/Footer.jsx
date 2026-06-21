import { memo } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Defined at module level — no object recreation per render
const SOCIAL_LINKS = [
  {
    href: "https://github.com/AnthonyNelsonSelvan",
    label: "GitHub",
    icon: FaGithub,
    rel: "noreferrer noopener",
    target: "_blank",
    hoverClass: "hover:text-[#3F6B57]",
  },
  {
    href: "https://linkedin.com/in/anthony-nelson-108b35343",
    label: "LinkedIn",
    icon: FaLinkedin,
    rel: "noreferrer noopener",
    target: "_blank",
    hoverClass: "hover:text-[#3F6B57]",
  },
  {
    href: "mailto:anthony@anthonynelson.in",
    label: "Email",
    icon: FaEnvelope,
    rel: undefined,
    target: undefined,
    hoverClass: "hover:text-[#3F6B57]",
  },
];

// Pure — never needs to re-render
const SocialLink = memo(({ href, label, icon: Icon, rel, target, hoverClass }) => (
  <a
    href={href}
    target={target}
    rel={rel}
    aria-label={label}
    className={`group flex items-center gap-2 text-gray-600 ${hoverClass} transition-colors duration-300`}
  >
    <Icon className="text-lg group-hover:-translate-y-1 transition-transform duration-300" />
    <span>{label}</span>
  </a>
));

SocialLink.displayName = "SocialLink";

const Footer = () => (
  <footer className="mt-32 border-t border-[#DDD7C8]">
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <p className="text-3xl font-semibold text-[#1D1D1D]">
        Thanks for taking the time
        <br />
        to explore my work.
      </p>

      <p className="mt-6 text-lg text-gray-600">See you around.</p>

      <p className="mt-3 text-[#3F6B57] font-medium">- Anthony Nelson</p>

      <nav aria-label="Social links" className="mt-12 flex justify-center items-center gap-8">
        {SOCIAL_LINKS.map((link) => (
          <SocialLink key={link.label} {...link} />
        ))}
      </nav>

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

export default Footer;
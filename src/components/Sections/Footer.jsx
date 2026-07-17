import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
    hoverClass: "hover:text-[#3F6B57]",
  },
];

const SPRING_EASE = [0.16, 1, 0.3, 1];

const socialContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const socialItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: SPRING_EASE,
    },
  },
};

const SocialLink = memo(
  ({ href, label, icon: Icon, rel, target, hoverClass }) => (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      aria-label={label}
      variants={socialItem}
      className={`group flex items-center gap-2 text-gray-600 ${hoverClass} transition-colors duration-300`}
      whileHover={{ y: -2 }}
    >
      <Icon className="text-lg transition-transform duration-300 group-hover:-translate-y-1" />
      <span className="text-sm sm:text-base">{label}</span>
    </motion.a>
  )
);

SocialLink.displayName = "SocialLink";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="mt-16 border-t border-[#DDD7C8] sm:mt-24 lg:mt-32">
      <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:py-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: SPRING_EASE }}
          className="text-2xl font-semibold leading-snug text-[#1D1D1D] sm:text-3xl"
        >
          Thanks for taking the time
          <br />
          to explore my work.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: SPRING_EASE }}
          className="mt-4 text-base text-gray-600 sm:mt-6 sm:text-lg"
        >
          See you around.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: SPRING_EASE }}
          className="mt-2 font-medium text-[#3F6B57] sm:mt-3"
        >
          — Anthony Nelson
        </motion.p>

        <nav
          aria-label="Social links"
          className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:mt-12 sm:gap-8"
        >
          <motion.div
            variants={socialContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex flex-wrap items-center justify-center gap-5 sm:gap-8"
          >
            {SOCIAL_LINKS.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </motion.div>
        </nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4, ease: SPRING_EASE }}
          className="mt-10 border-t border-[#DDD7C8] pt-6 sm:mt-16 sm:pt-8"
        >
          <p className="text-xs tracking-wide text-gray-500 sm:text-sm">
            © 2026 Anthony Nelson. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-gray-400 sm:mt-2 sm:text-sm">
            Built with React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
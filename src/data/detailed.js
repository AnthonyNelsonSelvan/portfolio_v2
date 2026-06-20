export const projects = [
  {
    slug: "dns-management-platform",
    title: "DNS Management Platform",
    tagline: "Automating secure DNS provisioning through asynchronous infrastructure.",
    status: "Completed",
    role: "Full-Stack Developer",
    duration: "12 Weeks",
    focus: "DNS Automation & Backend Infrastructure",
    liveUrl: null,
    githubUrl: "https://github.com/AnthonyNelsonSelvan/dnstitle",

    overview:
      "A full-stack platform that enables users to securely request, manage, and provision custom subdomains through automated BIND9 integration.",

    overviewStats: [
      { label: "Users",          value: "Auth & Roles" },
      { label: "DNS Records",    value: "A + CNAME" },
      { label: "Queue",          value: "BullMQ + Redis" },
      { label: "Security",       value: "JWT + AbuseIPDB" },
    ],

    problem:
      "Students and developers often need a professional subdomain for portfolios, demos, or projects. Managing DNS records manually is slow and error-prone. This platform automates the entire process while validating requests and protecting against malicious configurations.",

    solution:
      "A full-stack web application where users register, request subdomains, and have DNS records provisioned automatically in the background — with abuse checks, ownership validation, and real-time queue processing.",

    architecture: [
      { id: "user",       label: "User",                sublabel: "Browser" },
      { id: "react",      label: "React",               sublabel: "Frontend" },
      { id: "api",        label: "Express API",         sublabel: "REST" },
      { id: "mongo",      label: "MongoDB",             sublabel: "Database" },
      { id: "abuse",      label: "AbuseIPDB",           sublabel: "IP Validation" },
      { id: "queue",      label: "BullMQ Queue",        sublabel: "Redis" },
      { id: "worker",     label: "Worker",              sublabel: "Background Job" },
      { id: "spawn",      label: "child_process.spawn", sublabel: "Node.js" },
      { id: "nsupdate",   label: "nsupdate",            sublabel: "DNS Update Tool" },
      { id: "bind9",      label: "BIND9",               sublabel: "DNS Server" },
      { id: "live",       label: "DNS Record Live",     sublabel: "✓ Provisioned" },
    ],

    features: [
      {
        title: "Authentication",
        items: ["JWT", "Google OAuth", "Email Verification"],
      },
      {
        title: "DNS Management",
        items: ["Create Records", "Update Records", "Delete Records", "A Records", "CNAME Records"],
      },
      {
        title: "Security",
        items: ["Ownership Validation", "Domain Validation", "AbuseIPDB", "Email Verification"],
      },
      {
        title: "Infrastructure",
        items: ["BullMQ Workers", "Redis", "BIND9", "Docker"],
      },
    ],

    screenshots: [
      { src: "/dnsDash.png", alt: "Dashboard", label: "Dashboard" },
      { src: "/dnsCreate.png", alt: "Create Domain", label: "Create Domain" },
      { src: "/dnsRecords.png", alt: "DNS Records", label: "DNS Records" },
      { src: "/dnsLookup.png", alt: "Ns Lookup", label: "Ns Lookup" },
    ],

    techStack: [
      { group: "Frontend",        items: ["React", "Tailwind CSS", "Axios"] },
      { group: "Backend",         items: ["Node.js", "Express", "MongoDB", "Mongoose"] },
      { group: "Infrastructure",  items: ["BullMQ", "Redis", "Docker", "BIND9"] },
      { group: "Security",        items: ["JWT", "Google OAuth", "AbuseIPDB", "Nodemailer"] },
    ],

    challengeTitle: "Integrating BIND9 with a Node.js Backend",
    challenge:
      "The hardest part of this project was making BIND9 respond reliably to programmatic DNS updates. BIND9 uses TSIG (Transaction Signature) keys for authenticated zone updates via nsupdate — a command-line tool that expects a very specific input format. Getting child_process.spawn() to pipe the right instructions, handle stderr correctly, and confirm that the record was actually written (not just accepted) required significant debugging of DNS zones, TTL propagation, and error states that BIND9 doesn't always surface clearly.",

    learnings:
      "Building this project helped me understand how DNS servers operate at a low level, how asynchronous workers improve system responsiveness and decouple concerns, and how infrastructure components such as Redis, BullMQ, and BIND9 interact in a production-like environment. It also reinforced the importance of validation layers — both at the API level and at the infrastructure level.",

    future: [
      "Wildcard DNS support",
      "SSL automation via Let's Encrypt",
      "Rate limiting improvements",
      "Better admin analytics",
      "Uptime monitoring",
      "Multi-domain support",
    ],

    nextProject: null, // e.g. "container-hosting-platform"
    nextProjectLabel: null, // e.g. "Container Hosting Platform"
  },

  // ─── Add more projects below ──────────────────────────────────────────────
  // {
  //   slug: "container-hosting-platform",
  //   title: "Container Hosting Platform",
  //   tagline: "...",
  //   ...
  // },
];
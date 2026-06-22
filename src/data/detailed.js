export const projects = [
  {
    slug: "dns-management-platform",
    title: "DNS Management Platform",
    tagline:
      "Automating secure DNS provisioning through asynchronous infrastructure.",
    status: "Completed",
    role: "Full Stack Developer",
    duration: "12 Weeks",
    focus: "DNS Automation & Backend Infrastructure",
    liveUrl: null,
    githubUrl: "https://github.com/AnthonyNelsonSelvan/dnstitle",

    overview:
      "A full stack platform that enables users to securely request, manage, and provision custom subdomains through automated BIND9 integration.",

    overviewStats: [
      { label: "Users", value: "Auth & Roles" },
      { label: "DNS Records", value: "A + CNAME" },
      { label: "Queue", value: "BullMQ + Redis" },
      { label: "Security", value: "JWT + AbuseIPDB" },
    ],

    problem:
      "Students and developers often need a professional subdomain for portfolios, demos, or projects. Managing DNS records manually is slow and error prone. This platform automates the entire process while validating requests and protecting against malicious configurations.",

    solution:
      "A full stack web application where users register, request subdomains, and have DNS records provisioned automatically in the background with abuse checks, ownership validation, and real-time queue processing.",

    architecture: [
      { id: "user", label: "User", sublabel: "Browser" },
      { id: "react", label: "React", sublabel: "Frontend" },
      { id: "api", label: "Express API", sublabel: "REST" },
      { id: "mongo", label: "MongoDB", sublabel: "Database" },
      { id: "abuse", label: "AbuseIPDB", sublabel: "IP Validation" },
      { id: "queue", label: "BullMQ Queue", sublabel: "Redis" },
      { id: "worker", label: "Worker", sublabel: "Background Job" },
      { id: "spawn", label: "child_process.spawn", sublabel: "Node.js" },
      { id: "nsupdate", label: "nsupdate", sublabel: "DNS Update Tool" },
      { id: "bind9", label: "BIND9", sublabel: "DNS Server" },
      { id: "live", label: "DNS Record Live", sublabel: "✓ Provisioned" },
    ],

    features: [
      {
        title: "Authentication",
        items: ["JWT", "Google OAuth", "Email Verification"],
      },
      {
        title: "DNS Management",
        items: [
          "Create Records",
          "Update Records",
          "Delete Records",
          "A Records",
          "CNAME Records",
        ],
      },
      {
        title: "Security",
        items: [
          "Ownership Validation",
          "Domain Validation",
          "AbuseIPDB",
          "Email Verification",
        ],
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
      { group: "Frontend", items: ["React", "Tailwind CSS", "Axios"] },
      {
        group: "Backend",
        items: ["Node.js", "Express", "MongoDB", "Mongoose"],
      },
      {
        group: "Infrastructure",
        items: ["BullMQ", "Redis", "Docker", "BIND9"],
      },
      {
        group: "Security",
        items: ["JWT", "Google OAuth", "AbuseIPDB", "Nodemailer"],
      },
    ],

    challengeTitle: "Integrating BIND9 with a Node.js Backend",
    challenge:
      "The hardest part of this project was making BIND9 respond reliably to programmatic DNS updates. BIND9 uses TSIG (Transaction Signature) keys for authenticated zone updates via nsupdate a command-line tool that expects a very specific input format. Getting child_process.spawn() to pipe the right instructions, handle stderr correctly, and confirm that the record was actually written (not just accepted) required significant debugging of DNS zones, TTL propagation, and error states that BIND9 doesn't always surface clearly.",

    learnings:
      "Building this project helped me understand how DNS servers operate at a low level, how asynchronous workers improve system responsiveness and decouple concerns, and how infrastructure components such as Redis, BullMQ, and BIND9 interact in a production-like environment. It also reinforced the importance of validation layers both at the API level and at the infrastructure level.",

    future: [
      "Wildcard DNS support",
      "SSL automation via Let's Encrypt",
      "Rate limiting improvements",
      "Better admin analytics",
      "Uptime monitoring",
      "Multi-domain support",
    ],

    nextProject: "container-deployment-platform",
    nextProjectLabel: "Container Deployment Platform", 
  },
  {
    slug: "container-deployment-platform",
    title: "Container Deployment Platform",
    tagline:
      "Automating Docker deployments through asynchronous container lifecycle management.",
    status: "Completed",
    role: "Backend Engineer",
    duration: "8 Weeks",
    focus: "Container Infrastructure & Deployment Automation",
    liveUrl: null,
    githubUrl: "https://github.com/AnthonyNelsonSelvan/hosting-platform",

    overview:
      "A backend-driven deployment platform that enables students and developers to deploy Dockerized applications by uploading a ZIP archive containing their application and Dockerfile. The platform validates uploads, builds versioned Docker images asynchronously, provisions containers with automatic networking, and manages the complete container lifecycle. Designed as the deployment engine for the DNS Management Platform, it supports future automatic subdomain provisioning and production-ready deployments.",

    overviewStats: [
      { label: "Deployments", value: "Versioned" },
      { label: "Containers", value: "Lifecycle Managed" },
      { label: "Networking", value: "Dynamic Ports" },
      { label: "Infrastructure", value: "Docker + Nginx" },
    ],

    problem:
      "Deploying Docker applications manually requires developers to build images, configure networking, manage containers, update reverse proxies, and safely replace running applications. These repetitive tasks are time-consuming and error-prone, especially for students who simply want to deploy applications without understanding Docker internals.",

    solution:
      "The platform automates the complete deployment workflow. Users upload a ZIP archive containing their application and Dockerfile, after which the backend validates the upload, extracts the project, builds a versioned Docker image asynchronously, provisions a new container with automatic port allocation, updates deployment metadata, regenerates Nginx configuration when required, and safely replaces existing containers while preserving previous image versions for rollback.",

    architecture: [
      { id: "user", label: "User", sublabel: "Upload Project" },
      { id: "react", label: "React", sublabel: "Frontend" },
      { id: "api", label: "Express API", sublabel: "REST" },
      { id: "validation", label: "Validation", sublabel: "ZIP + Dockerfile" },
      { id: "extract", label: "Extraction", sublabel: "Workspace" },
      { id: "docker", label: "Dockerode", sublabel: "Build Image" },
      { id: "image", label: "Docker Image", sublabel: "Versioned" },
      { id: "container", label: "Container", sublabel: "Running" },
      { id: "mongo", label: "MongoDB", sublabel: "Metadata" },
      { id: "nginx", label: "Nginx", sublabel: "Reverse Proxy" },
      { id: "live", label: "Application Live", sublabel: "Deployment Ready" },
    ],

    features: [
      {
        title: "Deployment",
        items: [
          "ZIP Upload",
          "Automatic Docker Image Build",
          "Versioned Images",
          "Automatic Container Creation",
          "Automatic Container Startup",
        ],
      },
      {
        title: "Container Management",
        items: [
          "List Containers",
          "Start Container",
          "Stop Container",
          "Restart Container",
          "Delete Container",
          "Update Existing Containers",
        ],
      },
      {
        title: "Validation",
        items: [
          "ZIP File Validation",
          "Empty Archive Detection",
          "SHA-256 Duplicate Detection",
          "Dockerfile Verification",
        ],
      },
      {
        title: "Infrastructure",
        items: [
          "Dynamic Port Allocation",
          "Nginx Configuration Generation",
          "Environment Variable Management",
          "Volume Management",
          "Container Log Collection",
        ],
      },
    ],

    screenshots: [
      { src: "/deployDashboard.png", alt: "Dashboard", label: "Dashboard" },
      { src: "/deployCreate.png", alt: "Deploy Application", label: "Deploy" },
      { src: "/deployContainers.png", alt: "Containers", label: "Containers" },
      { src: "/deployLogs.png", alt: "Logs", label: "Logs" },
    ],

    techStack: [
      {
        group: "Backend",
        items: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "Dockerode",
          "Multer",
        ],
      },
      {
        group: "Infrastructure",
        items: ["Docker", "Nginx", "Linux"],
      },
      {
        group: "Utilities",
        items: ["crypto", "fs/promises", "path", "unzipper","tar-fs"],
      },
    ],

    challengeTitle: "Building Reliable Container Deployments with Docker",

    challenge:
      "The most challenging aspect of the project was coordinating Docker's image and container lifecycle with file system operations while developing on Windows. Newly extracted project folders and Docker resources were occasionally locked for short periods, requiring retry mechanisms, proper sequencing of asynchronous operations, and reliable cleanup logic. Another challenge was implementing safe deployment updates by provisioning and validating a replacement container before removing the existing one, minimizing downtime and preventing failed deployments from affecting running applications.",

    learnings:
      "This project significantly deepened my understanding of Docker internals, container networking, image versioning, asynchronous deployment workflows, reverse proxy integration, and operating system interactions. I also learned the importance of validation, resource cleanup, safe deployment strategies, and designing backend services that can evolve into larger infrastructure platforms.",

    future: [
      "Automatic DNS provisioning through DNS Management Platform integration",
      "Real-time deployment log streaming via WebSockets",
      "HTTPS provisioning with Let's Encrypt",
      "GitHub repository deployments",
      "Container resource monitoring",
      "Rollback to previous image versions",
      "Horizontal scaling",
    ],

    nextProject: "dns-management-platform",
    nextProjectLabel: "DNS Management Platform",
  },
];

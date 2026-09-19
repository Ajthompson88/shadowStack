export const featuredProjects = [
  {
    id: "reliefroot",
    title: "ReliefRoot",
    role: "Backend and full-stack product development · 2026–Present",
    summary: "A privacy-conscious analytics platform designed to connect product, cultivar, session, metric, and effect data so users can understand what works for them and why.",
    problem: "Personal outcome data is often fragmented, inconsistent, and difficult to compare. The product needs a relational foundation that can support anonymous use now and deeper analytics later.",
    approach: "I started with the domain model and backend boundaries: normalized PostgreSQL data, Prisma persistence, Express services, validation, access control, and reproducible local infrastructure.",
    evidence: ["Organization-centered relational schema", "Versioned REST API and service-layer separation", "Anonymous and authenticated session workflows", "Dockerized PostgreSQL and Prisma migrations", "Integration and regression test coverage", "GitHub Actions build and quality checks"],
    tech: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Docker", "GitHub Actions"],
    github: "https://github.com/Ajthompson88/ReliefRoot",
  },
  {
    id: "flowboard",
    title: "FlowBoard",
    role: "Full-stack application development · 2025–Present",
    summary: "A typed Kanban task-management application with secure authentication, protected routes, persistent tickets, and a responsive React interface.",
    problem: "The inherited application needed a dependable client-server flow, secure access, consistent ticket data, and a development setup that could build and run cleanly.",
    approach: "I traced issues across the React client, Express routes, authentication middleware, PostgreSQL persistence, and environment configuration, then standardized the contract between layers.",
    evidence: ["JWT authentication and protected routes", "Ticket create, read, update, and delete flows", "Typed React and TypeScript client", "Express API with PostgreSQL persistence", "API and port-conflict troubleshooting", "Clean production build and lint validation"],
    tech: ["React", "TypeScript", "Express", "PostgreSQL", "JWT", "Tailwind CSS"],
    github: "https://github.com/Ajthompson88/FlowBoard",
  },
];

export const archivedProjects = [
  { title: "Candidate Finder", description: "A React and TypeScript interface for reviewing and saving GitHub candidates.", github: "https://github.com/Ajthompson88/LookMeUp" },
  { title: "Employee Tracker", description: "A command-line application for managing employee, role, and department data with SQL.", github: "https://github.com/Ajthompson88/Employee-Tracker" },
  { title: "Social Network API", description: "A MongoDB and Express API for users, thoughts, reactions, and friend relationships.", github: "https://github.com/Ajthompson88/social-network-app" },
];

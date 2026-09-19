# Andrew Thompson Portfolio

Recruiter-focused portfolio for Andrew Thompson, a backend-focused full-stack developer building database-driven applications and REST APIs.

V2 replaces the former ShadowStack public identity while preserving the proven React, Vite, Tailwind CSS, Vercel, Resend, testing, CI, and responsive-layout infrastructure.

## Positioning

The homepage is designed to answer the core recruiter questions quickly:

- Who is Andrew? A backend-focused full-stack developer.
- What is he seeking? A junior backend or full-stack role.
- What can he build? Database-backed APIs and complete client-server applications.
- What makes him different? More than 15 years of leadership, troubleshooting, communication, operations, coaching, and process improvement.
- Where is the evidence? ReliefRoot, FlowBoard, verified technical capabilities, and his professional history.
- How can he be contacted? Direct email, contact form, résumé, LinkedIn, and GitHub.

## Featured Work

- **ReliefRoot** - TypeScript, Node.js, Express, PostgreSQL, Prisma, Docker, and GitHub Actions.
- **FlowBoard** - React, TypeScript, Express, PostgreSQL, JWT authentication, and Tailwind CSS.

Older bootcamp projects are intentionally separated into Earlier Work. The portfolio does not feature itself as a homepage project.

## Stack

- React 19 and Vite 6
- Tailwind CSS
- Vercel serverless contact endpoint
- Resend email delivery
- Vitest and React Testing Library
- ESLint and GitHub Actions

## Local Development

Prerequisites: Node.js 24 and npm.

```bash
npm ci
npm run dev
```

The development server runs at `http://127.0.0.1:5173`.

## Verification

```bash
npm run lint
npm test
npm run build
```

CI runs the same checks on pull requests. Production remains protected on `main` while V2 is developed on `feat/portfolio-v2`.

## Contact Form

`POST /api/contact` validates name, email, and message fields, uses a honeypot for simple bot filtering, and sends mail through Resend. Deployment requires `RESEND_API_KEY`.

## Work Items

V2 work is tracked in `TODO.md` with stable `PORT-###` identifiers and machine-readable states.

# ShadowStack

> A sleek, modern noir-themed developer portfolio built with Vite, TailwindCSS, and React.

## Table of Contents

* [Project Overview](#-project-overview)
* [Tech Stack](#-tech-stack)
* [Folder Structure](#-folder-structure)
* [Getting Started](#-getting-started)
* [Installing Dependencies](#-installing-dependencies)
* [Development](#-development)
* [Style Guide](#-style-guide)
* [Storybook](#-storybook)
* [Deployment (Vercel)](#-deployment-vercel)
* [Screenshots](#-screenshots)
* [License](#-license)

---

## Project Overview

ShadowStack is a developer portfolio showcasing a personalized modern noir aesthetic with animated transitions, SVG logo intro using `anime.js`, and section-based component architecture.

##  Tech Stack

* **Frontend**: React, Vite
* **Styling**: Tailwind CSS
* **Animation**: Anime.js
* **Deployment**: Vercel

## Folder Structure

```
shadowStack/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layout/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
├── README.md
└── package.json
```

## Getting Started

1. **Clone the repo:**

   ```bash
   git clone https://github.com/yourusername/shadowStack.git
   cd shadowStack
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the dev server:**

   ```bash
   npm run dev
   ```

4. **Visit your app:**
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Installing Dependencies

Make sure these are installed:

```bash
npm install tailwindcss postcss autoprefixer animejs
```

## Development

Vite handles fast refresh and asset optimization. You can edit `src/components/` or `src/layout/` for modular updates.

**Key files:**

* `Hero.jsx` — Entry animation with anime.js and SVG
* `About.jsx` — Developer biography with noir theme stylings
* `Projects.jsx` — Previous work and case studies
* `Skills.jsx` — Technology badges and proficiency
* `Contact.jsx` — Email or social connection
* `Footer.jsx` — Copyright & links
* `tailwind.config.js` - Custom animation & utility settings
* `App.jsx` - Section mount/transition management

## Style Guide

Visual tokens, layout primitives, and animation conventions live in [`docs/style-guide.md`](docs/style-guide.md). Review that document before introducing new colors, gradients, CSS utilities, or animation logic so the noir aesthetic remains consistent.

## Storybook

Component previews and glossy-card examples live in Storybook for rapid visual QA.

- `npm run storybook` - launches Storybook on port 6006.
- `npm run build-storybook` - produces a static Storybook build in `storybook-static/`.

Stories reside next to components (e.g., `src/components/SectionTitle.stories.jsx`) and share the same Tailwind + Orbitron styling via `.storybook/preview.js`.

## Testing

Automated tests run on [Vitest](https://vitest.dev/) with React Testing Library (`src/components/__tests__`, `src/layout/__tests__`).  

- `npm run test` - executes the full suite once (CI uses this).
- `npm run test:watch` - interactive mode while developing.

## Continuous Integration

GitHub Actions (`.github/workflows/ci.yml`) runs on every push to `main`/`master` and on all pull requests. The workflow installs dependencies with `npm ci`, runs `npm run lint`, `npm run test`, and `npm run build`. Run those commands locally before opening a PR so CI stays green.

## Deployment (Vercel)

1. Push your code to GitHub (or another supported Git provider).
2. Go to [Vercel](https://vercel.com) and create a new project, importing this repository.
3. Confirm the build settings (Vercel auto-detects Vite, but double-check):

   ```text
   Build Command: npm run build
   Output Directory: dist
   ```
4. Deploy. Vercel installs dependencies under Node 20 (per `package.json` `engines`) and runs the build automatically.
5. The included `vercel.json` file keeps the SPA working by rewriting all routes to `index.html` and adding security headers.
6. Push new commits to the connected branch (or use the Vercel dashboard) to kick off redeploys.

## Screenshots

> *Add screenshots here once the UI is ready.*

## License

MIT License © 2025 Andrew Thompson

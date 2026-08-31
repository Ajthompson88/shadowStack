# ShadowStack

> A modern developer portfolio built to showcase projects, technical
> skills, experience, and ongoing software development work.

ShadowStack is my personal developer portfolio. It serves as a central
place to present the applications I build, the technologies I work with,
and my growth as a software developer.

The project is built with React and Vite, styled with Tailwind CSS, and
deployed with Vercel. It also includes automated testing, Storybook
component previews, GitHub Actions continuous integration, and a
serverless contact endpoint powered by Resend.

## Features

-   Responsive single-page developer portfolio
-   Project showcase with GitHub and live-demo links
-   Skills and technology presentation
-   Experience and developer background sections
-   Animated UI elements using Anime.js
-   Reusable React component architecture
-   Contact form backed by a serverless API endpoint
-   Email delivery through Resend
-   Honeypot bot protection and server-side input validation
-   Component previews through Storybook
-   Automated tests with Vitest and React Testing Library
-   GitHub Actions CI for linting, testing, and production builds
-   Vercel deployment configuration with SPA routing and security
    headers

## Tech Stack

### Frontend

-   React 19
-   Vite 6
-   Tailwind CSS
-   React Icons
-   Anime.js

### Contact API

-   Vercel serverless function
-   Resend email API
-   Environment-based API credentials
-   Server-side validation
-   Honeypot spam protection

### Testing & Development

-   Vitest
-   React Testing Library
-   Storybook
-   ESLint
-   PostCSS
-   Autoprefixer

### Deployment & CI

-   Vercel
-   GitHub Actions
-   Node.js 20

## Project Structure

``` text
shadowStack/
├── .github/
│   └── workflows/
│       └── ci.yml
├── .storybook/
├── api/
│   └── contact.js
├── docs/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── __tests__/
│   ├── constants/
│   ├── data/
│   ├── hooks/
│   ├── layout/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## Application Structure

The portfolio is organized into reusable sections composed in `App.jsx`:

``` text
Layout
├── Header
├── Hero
├── About
├── Projects
├── Skills
├── Experience
├── Contact
└── Footer
```

Project information is separated from presentation components so
portfolio entries can be rendered from project data rather than being
hard-coded directly into the project UI.

## Contact Form

ShadowStack includes a serverless contact endpoint at:

``` text
POST /api/contact
```

The endpoint accepts:

``` json
{
  "name": "Example Name",
  "email": "example@example.com",
  "message": "Hello!",
  "website": ""
}
```

`website` is a honeypot field intended to remain empty for legitimate
submissions.

The API:

1.  Parses the submitted request.
2.  Silently accepts requests that trigger the honeypot.
3.  Validates required fields.
4.  Enforces maximum input lengths.
5.  Sends the message through Resend.
6.  Uses the visitor's email as the reply-to address.
7.  Returns a success or error response to the client.

The Resend API key is read from the server environment:

``` text
RESEND_API_KEY
```

Secrets should never be committed to the repository.

## Getting Started

### Prerequisites

-   Node.js 20
-   npm

### Clone the repository

``` bash
git clone https://github.com/Ajthompson88/shadowStack.git
cd shadowStack
```

### Install dependencies

``` bash
npm install
```

### Start the development server

``` bash
npm run dev
```

The Vite development server runs locally on port `5173`.

## Available Scripts

  Command                     Purpose
  --------------------------- --------------------------------------
  `npm run dev`               Start the Vite development server
  `npm run build`             Create a production build
  `npm run preview`           Preview the production build locally
  `npm run lint`              Run ESLint
  `npm run test`              Run the Vitest test suite once
  `npm run test:watch`        Run Vitest in watch mode
  `npm run storybook`         Start Storybook on port 6006
  `npm run build-storybook`   Build the static Storybook site

## Testing

Automated tests use Vitest with React Testing Library.

Run the full test suite:

``` bash
npm run test
```

For development with automatic reruns:

``` bash
npm run test:watch
```

Tests live alongside the application code, including component tests
under:

``` text
src/components/__tests__/
```

## Storybook

Storybook provides isolated previews for reusable UI components and
visual states.

Start Storybook:

``` bash
npm run storybook
```

Build the static Storybook output:

``` bash
npm run build-storybook
```

## Continuous Integration

The GitHub Actions CI workflow runs on pushes to `main` or `master` and
on pull requests.

The pipeline:

``` text
Checkout
   ↓
Setup Node.js 20
   ↓
npm ci
   ↓
npm run lint
   ↓
npm run test
   ↓
npm run build
```

Before pushing significant changes, the same checks can be run locally:

``` bash
npm run lint
npm run test
npm run build
```

## Deployment

ShadowStack is configured for deployment on Vercel.

The included `vercel.json`:

-   Rewrites application routes to `index.html` for SPA behavior.
-   Adds `X-Frame-Options: SAMEORIGIN`.
-   Adds `X-Content-Type-Options: nosniff`.

The contact endpoint under `api/contact.js` is deployed as a serverless
API route.

The deployment environment must provide:

``` text
RESEND_API_KEY
```

## Design

ShadowStack uses a dark/noir visual system with glowing accents,
reusable section layouts, card-based content, and responsive
presentation.

Project-specific visual conventions are documented in:

``` text
docs/style-guide.md
```

The goal is to keep the portfolio visually distinctive without allowing
presentation code to overwhelm the underlying component structure.

## Development Goals

ShadowStack is both a portfolio and an actively maintained software
project. Its purpose is to demonstrate more than a static résumé by
showing practical frontend development, API integration, testing, CI,
deployment, component design, and continued iteration.

Current development priorities include:

-   Keeping project information current as new applications are built
-   Improving portfolio accessibility and responsive behavior
-   Expanding automated test coverage
-   Refining reusable components and visual consistency
-   Improving the contact workflow and production email configuration

## License

This project is licensed under the MIT License.

Copyright © 2025--2026 Andrew Thompson

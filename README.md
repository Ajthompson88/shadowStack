# ShadowStack

> A sleek, modern noir-themed developer portfolio built with Vite, TailwindCSS, and React.

## Table of Contents

* [Project Overview](#-project-overview)
* [Tech Stack](#-tech-stack)
* [Folder Structure](#-folder-structure)
* [Getting Started](#-getting-started)
* [Installing Dependencies](#-installing-dependencies)
* [Development](#-development)
* [Deployment (Netlify)](#-deployment-netlify)
* [Screenshots](#-screenshots)
* [License](#-license)

---

## Project Overview

ShadowStack is a developer portfolio showcasing a personalized modern noir aesthetic with animated transitions, SVG logo intro using `anime.js`, and section-based component architecture.

##  Tech Stack

* **Frontend**: React, Vite
* **Styling**: Tailwind CSS
* **Animation**: Anime.js
* **Deployment**: Netlify

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
* `tailwind.config.js` — Custom animation & utility settings
* `App.jsx` — Section mount/transition management

## Deployment (Netlify)

1. Push your code to GitHub.
2. Go to [Netlify](https://netlify.com) and create a new site.
3. Select your repo, set build command:

   ```bash
   npm run build
   ```
4. Set publish directory:

   ```bash
   dist
   ```
5. Deploy and done 🎉

## Screenshots

> *Add screenshots here once the UI is ready.*

## License

MIT License © 2025 Andrew Thompson

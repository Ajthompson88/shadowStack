# Copilot Instructions for ShadowStack (Disciplined Edition)

This file tells any AI coding assistant how to behave inside the ShadowStack repository. Follow these rules to keep the codebase clean, consistent, and aligned with the project’s noir visual identity.

## 1. Project Overview
- ShadowStack is a single-page React application built with Vite and TailwindCSS.
- App entry points: src/main.jsx and src/App.jsx.
- Global wrappers come from src/layout/Layout.jsx.
- Visual sections live in src/components/.

## 2. Where Code Changes Should Happen
### Components
- Add or modify UI in src/components/.
- Each component file must use PascalCase and export a default functional component.

### Styles
- Tailwind utilities first.
- Reusable styles belong inside src/index.css under @layer components.
- Do not create new CSS files unless explicitly instructed.

### Global Configuration
- Colors, animations, and custom tokens: tailwind.config.js.
- Dev/build configuration: vite.config.js and package.json.

## 3. Code Style & Formatting
ShadowStack code must be:
- Functional component–based.
- Minimal in JSX nesting.
- Clean of unused imports.
- Tailwind-driven (avoid inline style objects).
- Consistent in spacing and readability.
- Avoiding overly large components (aim for ~30 lines of JSX).

Prefer clarity over cleverness.

## 4. Design System Rules
### Colors
- Use the noir palette defined in tailwind.config.js.
- Do not introduce hardcoded hex values unless explicitly instructed.

### Shadows, borders, glows
- Use existing tokens (blueglow, noir shades).
- Avoid adding new color tokens unless approved.

### Layout rules
- Layout.jsx controls global background and spacing.
- Components must not introduce their own global wrappers or competing layouts.
- Keep section padding consistent with existing sections.

## 5. Animation Guidelines
ShadowStack uses anime.js.
- All intro, logo, and hero animations belong in Hero.jsx.
- Do not add unrelated animation logic to other components unless requested.
- For micro-interactions, prefer Tailwind transitions first.

## 6. Adding a New Section
1. Create src/components/MySection.jsx exporting a default component.
2. Style it with Tailwind utilities; add a small utility class in src/index.css only if needed.
3. Register the section in App.jsx in the proper order.
4. Match existing spacing and vertical rhythm.

## 7. Folder Etiquette
- Do not create new top-level directories.
- Do not create utils/, helpers/, services/, etc. unless explicitly requested.
- All UI stays in src/components/.
- All layouts stay in src/layout/.
- Keep file structure predictable and shallow.

## 8. Commands
- Install: npm install
- Dev: npm run dev
- Build: npm run build
- Preview: npm run preview
- Lint: npm run lint

Do not modify existing scripts or Node version requirements (20.x) unless instructed.

## 9. PR Expectations
- Keep changes small and scoped.
- Run npm run lint before considering a change complete.
- Follow existing component patterns.
- Respect the noir design language and animation boundaries.

## 10. Things Not to Change
- Do not alter index.html font loading or root mount without explicit direction.
- Do not introduce new global providers or wrappers.
- Do not modify Layout.jsx structure beyond approved adjustments.
- Do not introduce new libraries without prior approval.

If additional rules, stricter disciplines, or workflow automation standards are needed, they can be added to this file on request.

## 11. Asking for Help
If you are unsure about any aspect of the codebase, design system, or project guidelines, please reach out to the project maintainer for clarification before making changes.